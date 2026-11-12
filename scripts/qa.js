#!/usr/bin/env node
/*
 * Deck QA: screenshot every slide and flag overflow.
 *
 *   node scripts/qa.js dist/01-pnl.html qa/01-pnl
 *   node scripts/qa.js dist/template.html qa/template --no-phone
 *   node scripts/qa.js dist/template.html qa/template-dark --dark   (dark color scheme)
 *
 * Writes slide-01.png ... at 1600x900 (deviceScaleFactor 1), plus
 * slide-NN-revealed.png for slides with a reveal block, plus phone-NN.png
 * at 390x844 for a few slides. Exits 1 if any slide overflows.
 * Uses the preinstalled Playwright: require('playwright'), chromium.launch().
 */
'use strict';
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith('--')));
const pos = args.filter((a) => !a.startsWith('--'));
if (pos.length < 2) {
  console.error('usage: node scripts/qa.js <built.html> <out-dir> [--no-phone] [--dark]');
  process.exit(2);
}
const file = path.resolve(pos[0]);
const outDir = path.resolve(pos[1]);
if (!fs.existsSync(file)) { console.error('not found: ' + file); process.exit(2); }
fs.mkdirSync(outDir, { recursive: true });
const url = 'file://' + file;
const pad = (n) => String(n).padStart(2, '0');

const NO_MOTION = '*,*::before,*::after{animation:none!important;transition:none!important}';

async function settle(page) {
  await page.evaluate(() => Promise.race([
    document.fonts ? document.fonts.ready : Promise.resolve(),
    new Promise((r) => setTimeout(r, 4000)),
  ]));
  await page.waitForTimeout(150);
}

/* Runs in the page: returns a list of problems on the active slide. */
function inspectSlide() {
  const slide = document.querySelector('.slide.is-active');
  const problems = [];
  if (!slide) return ['no active slide'];
  const sr = slide.getBoundingClientRect();
  const footer = slide.querySelector('.slide__footer');
  const limit = footer ? footer.getBoundingClientRect().top : sr.bottom;
  const tol = 1.5;
  const describe = (el) => {
    let s = el.tagName.toLowerCase();
    if (el.classList && el.classList.length) s += '.' + Array.from(el.classList).join('.');
    const t = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40);
    return t ? s + ' "' + t + '"' : s;
  };

  if (slide.scrollHeight > slide.clientHeight + 1) problems.push('slide scrollHeight ' + slide.scrollHeight + ' > ' + slide.clientHeight);
  if (slide.scrollWidth > slide.clientWidth + 1) problems.push('slide scrollWidth ' + slide.scrollWidth + ' > ' + slide.clientWidth);

  const all = slide.querySelectorAll('*');
  for (const el of all) {
    if (el.closest('.sr-only, .deck-sprite, .answer__cover')) continue;
    if (el.ownerSVGElement) continue;               // check the <svg>, not its parts
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) continue;
    const inFooter = footer && footer.contains(el);
    const bottomLimit = inFooter ? sr.bottom : limit;
    if (r.left < sr.left - tol || r.right > sr.right + tol || r.top < sr.top - tol || r.bottom > bottomLimit + tol) {
      problems.push('outside slide' + (inFooter ? '' : ' or into footer') + ': ' + describe(el) +
        ' [' + Math.round(r.left - sr.left) + ',' + Math.round(r.top - sr.top) + ' ' + Math.round(r.width) + 'x' + Math.round(r.height) + ']');
      continue;
    }
    if (cs.display === 'inline' || el.tagName === 'svg') continue;
    // 1. Clipped content: a box that hides overflow but has more inside.
    const clips = cs.overflowX !== 'visible' || cs.overflowY !== 'visible';
    if (clips && el.clientWidth > 0 && el.clientHeight > 0) {
      const glyph = Math.max(2, parseFloat(cs.fontSize) * 0.22); // tight line boxes
      if (el.scrollWidth > el.clientWidth + 2) problems.push('clipped (too wide): ' + describe(el));
      else if (el.scrollHeight > el.clientHeight + glyph) problems.push('clipped (too tall): ' + describe(el));
    }
    // 2. Long unbreakable text wider than its own box.
    if (el.clientWidth > 0 && el.scrollWidth > el.clientWidth + 2 && !el.children.length) {
      problems.push('text wider than box: ' + describe(el) + ' (' + el.scrollWidth + ' > ' + el.clientWidth + ')');
    }
  }
  // 3. Children spilling out of bounded components (cards, chips, tokens).
  const boxes = slide.querySelectorAll('.card, .flow__step, .metric, .link-card, .option, .answer, .timeline__month, .timeline__band, .formula__term, .chip, .badge, .icon-tile, .versus__vs');
  for (const box of boxes) {
    const b = box.getBoundingClientRect();
    for (const kid of box.querySelectorAll('*')) {
      if (kid.ownerSVGElement || kid.closest('.answer__cover, .sr-only')) continue;
      const kcs = getComputedStyle(kid);
      if (kcs.display === 'none' || kcs.visibility === 'hidden' || kcs.position === 'absolute') continue;
      const k = kid.getBoundingClientRect();
      if (!k.width && !k.height) continue;
      if (k.left < b.left - 2 || k.right > b.right + 2 || k.top < b.top - 2 || k.bottom > b.bottom + 2) {
        problems.push('spills out of ' + describe(box).split(' ')[0] + ': ' + describe(kid));
        break;
      }
    }
  }
  return problems;
}

(async () => {
  const browser = await chromium.launch();
  let failures = 0;
  try {
    /* ---------- desktop: 1600x900, slide at 1:1 ---------- */
    const scheme = flags.has('--dark') ? 'dark' : 'light';
    const ctx = await browser.newContext({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1, colorScheme: scheme });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
    await page.goto(url + '#1', { waitUntil: 'load' });
    await page.addStyleTag({ content: NO_MOTION });
    await page.evaluate(() => { document.documentElement.classList.add('deck-qa'); window.Deck && window.Deck.layout(); });
    await settle(page);
    const count = await page.evaluate(() => (window.Deck ? window.Deck.count : 0));
    if (!count) { console.error('Deck runtime not found or no slides'); process.exit(1); }

    for (let i = 0; i < count; i++) {
      await page.evaluate((n) => window.Deck.go(n), i);
      await page.waitForTimeout(60);
      const shot = path.join(outDir, 'slide-' + pad(i + 1) + '.png');
      await page.screenshot({ path: shot });
      const problems = await page.evaluate(inspectSlide);
      const hasReveal = await page.evaluate(() => !!document.querySelector('.slide.is-active .answer'));
      if (hasReveal) {
        await page.evaluate(() => window.Deck.reveal());
        await page.waitForTimeout(60);
        await page.screenshot({ path: path.join(outDir, 'slide-' + pad(i + 1) + '-revealed.png') });
        const more = await page.evaluate(inspectSlide);
        more.forEach((p) => problems.push('(revealed) ' + p));
        await page.evaluate(() => window.Deck.reveal());
      }
      if (problems.length) {
        failures++;
        console.log('OVERFLOW slide ' + (i + 1));
        problems.slice(0, 12).forEach((p) => console.log('   - ' + p));
        if (problems.length > 12) console.log('   ... ' + (problems.length - 12) + ' more');
      } else {
        console.log('ok       slide ' + (i + 1));
      }
    }
    if (errors.length) {
      console.log('page errors:');
      errors.forEach((e) => console.log('   - ' + e));
    }
    await ctx.close();

    /* ---------- phone: 390x844, real UI, scaled slide must fit ---------- */
    if (!flags.has('--no-phone')) {
      const pctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, hasTouch: true, isMobile: true, colorScheme: scheme });
      const pp = await pctx.newPage();
      await pp.goto(url + '#1', { waitUntil: 'load' });
      await pp.addStyleTag({ content: NO_MOTION });
      await settle(pp);
      const picks = [0, Math.min(count - 1, 3), Math.min(count - 1, 7)];
      for (let i = 0; i < count; i++) {
        await pp.evaluate((n) => window.Deck.go(n), i);
        const res = await pp.evaluate(() => {
          const r = document.querySelector('.slide.is-active').getBoundingClientRect();
          return {
            hscroll: document.documentElement.scrollWidth > window.innerWidth,
            fits: r.left >= -0.5 && r.right <= window.innerWidth + 0.5 && r.top >= -0.5 && r.bottom <= window.innerHeight + 0.5,
          };
        });
        if (res.hscroll || !res.fits) {
          failures++;
          console.log('PHONE    slide ' + (i + 1) + (res.hscroll ? ' horizontal page scroll' : '') + (res.fits ? '' : ' slide does not fit viewport'));
        }
        if (picks.includes(i)) await pp.screenshot({ path: path.join(outDir, 'phone-' + pad(i + 1) + '.png') });
      }
      console.log('phone    390x844 checked ' + count + ' slides');
      await pctx.close();
    }
  } finally {
    await browser.close();
  }
  console.log(failures ? '\n' + failures + ' problem slide(s). Screenshots in ' + outDir : '\nAll clear. Screenshots in ' + outDir);
  process.exit(failures ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
