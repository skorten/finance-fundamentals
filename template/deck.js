/* Finance Fundamentals for SEs: deck runtime. Zero dependencies.
 *
 * Markup contract (see DESIGN.md):
 *   <main class="deck" data-module="Module 1 · The P&L">
 *     <section class="slide slide--title"> ... </section>
 *     ...
 *   </main>
 *   <script src="../../template/deck.js"></script>
 *
 * Features: 16:9 letterboxed scaling, keyboard / click / swipe navigation,
 * progress bar and counter, #N hash per slide, reveal blocks (click or R),
 * footer injection, icon sprite injection, print support (via deck.css).
 * Public API: window.Deck = { go, next, prev, reveal, index, count, layout }.
 */
(function () {
  'use strict';

  var SLIDE_W = 1600;
  var SLIDE_H = 900;
  var FOOTER_BRAND = 'Finance Fundamentals for SEs';

  /* ------------------------------------------------------------------
   * Icon sprite: 24px grid, line icons, stroke comes from .icon (currentColor).
   * Use: <svg class="icon" aria-hidden="true"><use href="#i-doc"/></svg>
   * ------------------------------------------------------------------ */
  var ICONS = {
    'doc': '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M10 12h5M10 15h5M10 18h3"/>',
    'scale': '<path d="M12 4v16M8 20h8M5 7h14"/><circle cx="12" cy="4.5" r="1"/><path d="M5 7 2.5 13M5 7l2.5 6M2.5 13a2.5 2.5 0 0 0 5 0z"/><path d="M19 7l-2.5 6M19 7l2.5 6M16.5 13a2.5 2.5 0 0 0 5 0z"/>',
    'coins': '<ellipse cx="12" cy="6" rx="7" ry="2.5"/><path d="M5 6v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6"/><path d="M5 10v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4"/><path d="M5 14v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4"/>',
    'chart-up': '<path d="M4 4v16h16"/><path d="M7.5 15.5l3.5-4 3 2.5 5-6"/><path d="M15.5 8h3.5v3.5"/>',
    'chart-down': '<path d="M4 4v16h16"/><path d="M7.5 8.5l3.5 4 3-2.5 5 6"/><path d="M15.5 16h3.5v-3.5"/>',
    'cloud': '<path d="M7.5 18.5h9.5a4 4 0 0 0 .6-7.96 5.75 5.75 0 0 0-11.1 1A3.5 3.5 0 0 0 7.5 18.5z"/>',
    'server': '<rect x="4" y="4" width="16" height="7" rx="1.5"/><rect x="4" y="13" width="16" height="7" rx="1.5"/><path d="M8 7.5h.01M8 16.5h.01M12 7.5h4M12 16.5h4"/>',
    'chip': '<rect x="7" y="7" width="10" height="10" rx="1.5"/><rect x="10" y="10" width="4" height="4" rx=".5"/><path d="M10 3.5V7M14 3.5V7M10 17v3.5M14 17v3.5M3.5 10H7M3.5 14H7M17 10h3.5M17 14h3.5"/>',
    'calculator': '<rect x="5" y="3" width="14" height="18" rx="2"/><rect x="8" y="6" width="8" height="3.5" rx=".5"/><path d="M8.5 13.5h.01M12 13.5h.01M15.5 13.5h.01M8.5 17h.01M12 17h.01M15.5 17h.01"/>',
    'calendar': '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M8 3v4M16 3v4M8 14h2M14 14h2M8 17h2"/>',
    'search': '<circle cx="11" cy="11" r="6"/><path d="M15.5 15.5 20 20"/>',
    'person': '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-3.6 3.6-6 7-6s6.2 2.4 7 6"/>',
    'warning': '<path d="M12 4 2.8 19.5h18.4z"/><path d="M12 10v4M12 16.8h.01"/>',
    'check': '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    'check-circle': '<circle cx="12" cy="12" r="9"/><path d="M8 12.3l2.8 2.8L16.2 9.6"/>',
    'alert-circle': '<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.4h.01"/>',
    'inference': '<circle cx="12" cy="12" r="9" stroke-dasharray="2.2 2.6"/><path d="M8.5 12h7M12.8 9.3 15.5 12l-2.7 2.7"/>',
    'link': '<path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1"/><path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1"/>',
    'external': '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    'arrow-right': '<path d="M4 12h15M14 7l5 5-5 5"/>',
    'arrow-left': '<path d="M20 12H5M10 7l-5 5 5 5"/>',
    'clock': '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    'target': '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    'chat': '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>'
  };

  function buildSprite() {
    var s = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" ' +
      'style="position:absolute;width:0;height:0;overflow:hidden" class="deck-sprite">';
    Object.keys(ICONS).forEach(function (k) {
      s += '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + ICONS[k] + '</symbol>';
    });
    return s + '</svg>';
  }

  /* ------------------------------------------------------------------ */
  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* storage blocked: ignore */ } }
  };

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function onReady(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  onReady(function init() {
    if (!document.getElementById('i-doc')) {
      document.body.insertAdjacentHTML('afterbegin', buildSprite());
    }

    var deck = document.querySelector('.deck');
    if (!deck) return;

    // Wrap slides in a viewport box used for scaling.
    var viewport = deck.querySelector('.deck__viewport');
    if (!viewport) {
      viewport = el('div', 'deck__viewport');
      while (deck.firstChild) viewport.appendChild(deck.firstChild);
      deck.appendChild(viewport);
    }

    var slides = Array.prototype.slice.call(viewport.querySelectorAll(':scope > .slide'));
    var total = slides.length;
    if (!total) return;
    var moduleLabel = deck.getAttribute('data-module') || '';
    var courseUrl = deck.getAttribute('data-course-url') || '';
    var storeKey = 'ffse-deck:' + location.pathname;
    var current = -1;

    // Footer + a11y attributes per slide.
    slides.forEach(function (slide, i) {
      slide.setAttribute('role', 'group');
      slide.setAttribute('aria-roledescription', 'slide');
      slide.setAttribute('aria-label', (i + 1) + ' of ' + total);
      slide.id = slide.id || ('slide-' + (i + 1));
      if (slide.getAttribute('data-footer') === 'off' || slide.querySelector('.slide__footer')) return;
      var f = el('footer', 'slide__footer');
      f.innerHTML =
        '<div class="slide__brand"><span class="wordmark">CloudZero</span>' +
        '<span class="slide__brand-sep" aria-hidden="true"></span><span>' + FOOTER_BRAND + '</span></div>' +
        '<div class="slide__meta"><span class="slide__module"></span>' +
        '<span class="slide__page">' + pad(i + 1) + ' / ' + pad(total) + '</span></div>';
      f.querySelector('.slide__module').textContent = moduleLabel;
      if (courseUrl) {
        var back = el('a', 'slide__course');
        back.href = courseUrl;
        back.target = '_blank';
        back.rel = 'noopener';
        back.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg><span>Back to course</span>';
        f.querySelector('.slide__meta').insertBefore(back, f.querySelector('.slide__module'));
      }
      slide.appendChild(f);
    });

    // Reveal blocks: any .answer or [data-reveal] gets a cover button.
    var reveals = Array.prototype.slice.call(viewport.querySelectorAll('.answer, [data-reveal]'));
    reveals.forEach(function (block) {
      if (!block.classList.contains('answer')) block.classList.add('answer');
      var label = block.getAttribute('data-reveal-label') || 'Reveal answer';
      var btn = el('button', 'answer__cover');
      btn.type = 'button';
      btn.innerHTML = '<span></span><kbd>R</kbd>';
      btn.firstChild.textContent = label;
      btn.addEventListener('click', function (ev) {
        ev.stopPropagation();
        setRevealed(block, true);
      });
      block.insertBefore(btn, block.firstChild);
      block.setAttribute('aria-live', 'polite');
    });

    function setRevealed(block, on) {
      block.classList.toggle('is-revealed', on);
      var slide = block.closest('.slide');
      if (slide) {
        var any = slide.querySelector('.answer.is-revealed');
        slide.classList.toggle('is-revealed', !!any);
      }
    }

    function toggleReveal() {
      var slide = slides[current];
      var blocks = Array.prototype.slice.call(slide.querySelectorAll('.answer'));
      if (!blocks.length) return;
      var hidden = blocks.some(function (b) { return !b.classList.contains('is-revealed'); });
      blocks.forEach(function (b) { setRevealed(b, hidden); });
    }

    // Screen UI.
    var progress = el('div', 'deck-ui__progress', '<div class="deck-ui__bar"></div>');
    progress.setAttribute('aria-hidden', 'true');
    var ui = el('nav', 'deck-ui');
    ui.setAttribute('aria-label', 'Slide navigation');
    ui.innerHTML =
      '<span class="deck-ui__title"></span>' +
      '<div class="deck-ui__nav">' +
      '<span class="deck-ui__hint">Arrows to move, R to reveal</span>' +
      '<button type="button" class="deck-ui__btn" data-act="prev" aria-label="Previous slide">' +
      '<svg class="icon" aria-hidden="true"><use href="#i-arrow-left"/></svg></button>' +
      '<span class="deck-ui__count" aria-live="polite"></span>' +
      '<button type="button" class="deck-ui__btn" data-act="next" aria-label="Next slide">' +
      '<svg class="icon" aria-hidden="true"><use href="#i-arrow-right"/></svg></button>' +
      '</div>';
    ui.querySelector('.deck-ui__title').textContent = moduleLabel || document.title;
    document.body.appendChild(progress);
    document.body.appendChild(ui);
    var bar = progress.firstChild;
    var count = ui.querySelector('.deck-ui__count');
    var prevBtn = ui.querySelector('[data-act="prev"]');
    var nextBtn = ui.querySelector('[data-act="next"]');
    prevBtn.addEventListener('click', function () { go(current - 1); });
    nextBtn.addEventListener('click', function () { go(current + 1); });

    function layout() {
      var w = viewport.clientWidth;
      var h = viewport.clientHeight;
      if (!w || !h) return;
      var s = Math.min(w / SLIDE_W, h / SLIDE_H);
      deck.style.setProperty('--deck-scale', String(Math.max(s, 0.05)));
    }

    function writeHash(i) {
      var h = '#' + (i + 1);
      if (location.hash === h) return;
      try { history.replaceState(null, '', h); }
      catch (e) { try { location.hash = h; } catch (e2) { /* ignore */ } }
    }

    function go(i, opts) {
      i = Math.max(0, Math.min(total - 1, i | 0));
      if (i === current) return;
      if (current >= 0) {
        slides[current].classList.remove('is-active');
        slides[current].setAttribute('aria-hidden', 'true');
      }
      current = i;
      var s = slides[i];
      s.classList.add('is-active');
      s.removeAttribute('aria-hidden');
      bar.style.width = ((i + 1) / total * 100) + '%';
      count.textContent = (i + 1) + ' / ' + total;
      prevBtn.disabled = i === 0;
      nextBtn.disabled = i === total - 1;
      if (!(opts && opts.fromHash)) writeHash(i);
      store.set(storeKey, String(i));
    }

    function readHash() {
      var m = /^#(\d+)$/.exec(location.hash || '');
      return m ? parseInt(m[1], 10) - 1 : -1;
    }

    slides.forEach(function (s) { s.setAttribute('aria-hidden', 'true'); });
    layout();
    var start = readHash();
    if (start < 0) {
      var saved = parseInt(store.get(storeKey), 10);
      start = isNaN(saved) ? 0 : saved;
    }
    go(start, { fromHash: readHash() >= 0 });
    deck.classList.add('is-ready');

    window.addEventListener('resize', layout);
    window.addEventListener('orientationchange', layout);
    if (window.ResizeObserver) new ResizeObserver(layout).observe(viewport);
    window.addEventListener('hashchange', function () {
      var i = readHash();
      if (i >= 0) go(i, { fromHash: true });
    });

    // Keyboard.
    document.addEventListener('keydown', function (e) {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      var t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      var onButton = t && /^(BUTTON|A)$/.test(t.tagName);
      switch (e.key) {
        case 'ArrowRight': case 'ArrowDown': case 'PageDown':
          e.preventDefault(); go(current + 1); break;
        case 'ArrowLeft': case 'ArrowUp': case 'PageUp':
          e.preventDefault(); go(current - 1); break;
        case ' ': case 'Spacebar':
          if (onButton) return;
          e.preventDefault(); go(current + (e.shiftKey ? -1 : 1)); break;
        case 'Home': e.preventDefault(); go(0); break;
        case 'End': e.preventDefault(); go(total - 1); break;
        case 'r': case 'R': e.preventDefault(); toggleReveal(); break;
        default: break;
      }
    });

    // Click: left 30% of the slide goes back, the rest goes forward.
    viewport.addEventListener('click', function (e) {
      if (e.target.closest('a, button, input, select, textarea, label, summary, [data-no-nav], .answer')) return;
      var sel = window.getSelection && window.getSelection();
      if (sel && String(sel).length) return;
      var r = slides[current].getBoundingClientRect();
      var x = (e.clientX - r.left) / (r.width || 1);
      go(current + (x < 0.3 ? -1 : 1));
    });

    // Swipe.
    var tx = null, ty = null;
    viewport.addEventListener('touchstart', function (e) {
      if (e.touches.length !== 1) { tx = null; return; }
      tx = e.touches[0].clientX; ty = e.touches[0].clientY;
    }, { passive: true });
    viewport.addEventListener('touchend', function (e) {
      if (tx == null) return;
      var dx = e.changedTouches[0].clientX - tx;
      var dy = e.changedTouches[0].clientY - ty;
      tx = null;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.3) {
        e.preventDefault();
        go(current + (dx < 0 ? 1 : -1));
      }
    });

    window.Deck = {
      go: function (n) { go(n); },
      next: function () { go(current + 1); },
      prev: function () { go(current - 1); },
      reveal: toggleReveal,
      index: function () { return current; },
      count: total,
      layout: layout
    };
  });
})();
