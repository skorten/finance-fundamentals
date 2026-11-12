# Deck design rules: Finance Fundamentals for SEs

This is the rulebook for module builders. Start every module from the skeleton below, copy layouts from `template/template.html` (open it in a browser to see all 17 slides), and run build and QA before you hand off.

## Text budget (hard rules)

- Max 40 words of visible body text per slide, excluding chart labels and source lines.
- Headlines: max 8 words, phrased as the takeaway, not a topic label.
- Max 3 bullets per slide; each bullet max 10 words.
- Every slide except title, divider and self-check must carry a visual: SVG illustration, chart, diagram, icon cards or a big number.
- Detail, caveats and long explanations go in the companion document, never on the slide.
- Writing style: plain conversational English, active voice, no em dashes, no emojis, avoid hyphens unless a standard compound, no filler words like "leverage" or "unlock".

Notes on the budget:
- Eyebrows (the small mono label above a headline), footers, chart labels, source lines and badge text do not count toward the 40 words.
- The key terms slide is the one layout allowed past 40 words, because each card is a glossary entry. It still caps at 6 cards of 8 to 12 words each. Use 4 cards if you can.
- A headline that names a topic ("Gross margin") fails. Say what is true about it ("Gross margin shows what delivery really costs").

---

## 1. Files and how they fit

```
template/deck.css      design system (tokens + every layout)
template/deck.js       runtime (scaling, navigation, reveal, footer, icon sprite)
template/template.html reference deck, one slide per layout: copy from here
modules/<NN-name>/index.html   your module source
dist/<NN-name>.html    built, self-contained file (do not edit)
scripts/build.py       inlines css + js into dist/
scripts/qa.js          screenshots every slide and fails on overflow
```

Commands, from the repo root:

```
python3 scripts/build.py                 # builds every module plus dist/template.html
python3 scripts/build.py 03-unit         # only module folders whose name contains "03-unit"
node scripts/qa.js dist/03-unit-economics.html qa/03-unit-economics
node scripts/qa.js dist/03-unit-economics.html qa/03-unit-economics-dark --dark --no-phone
```

`qa.js` writes `slide-NN.png` at 1600x900, `slide-NN-revealed.png` for self-check slides, and `phone-NN.png` at 390x844. It exits 1 if any slide overflows, spills into the footer, clips text, or if the phone view scrolls sideways. Open the PNGs and look at them: QA catches geometry, not taste.

## 2. Module skeleton (start here)

Save as `modules/<NN-short-name>/index.html`. Keep the two template paths exactly as written; `build.py` replaces them.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Reading the P&amp;L</title>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="Module 1 of Finance Fundamentals for SEs: how a P&amp;L is built and where cloud costs land.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap">
<link rel="stylesheet" href="../../template/deck.css">
</head>
<body>
<main class="deck" data-module="Module 1 · Reading the P&amp;L">

  <!-- paste slides here, one <section class="slide slide--LAYOUT"> each -->

</main>
<script src="../../template/deck.js"></script>
</body>
</html>
```

Rules for the skeleton:
- `<title>`: the module name only, 2 to 4 words, no "Module 1:" prefix and no colon explainer. It names the published artifact.
- `data-module` on `<main class="deck">`: shown in every slide footer and the nav bar. Format `Module N · Name`.
- No other stylesheets or scripts. Fonts come only from that Google Fonts link. No images from other hosts; draw with inline SVG.
- Do not add `<style>` blocks with colors. If you need a one off size, use an inline `style` with a token (`style="max-width: 20ch"` is fine; `style="color:#333"` is not).
- The runtime injects the footer (CloudZero wordmark, course name, module, page number) and the icon sprite. Do not write them yourself.
- Published decks keep their full `<!doctype html>` document. That is intentional: the files must also work when opened locally, and browsers ignore the duplicate wrapper the artifact host adds.

## 3. Slide anatomy

Every slide is a fixed 1600 x 900 canvas, scaled to fit the screen. Sizes in CSS are slide pixels.

```html
<section class="slide slide--LAYOUT">
  <header class="slide__head">
    <p class="eyebrow">Short label</p>
    <h2 class="headline">Takeaway headline in eight words max</h2>
  </header>
  <div class="slide__body">
    <!-- the layout's visual -->
  </div>
</section>
```

- Margins: 88px top, 112px sides, footer band of 72px at the bottom. Content must stay above the footer rule; QA enforces it.
- `.slide__body` fills the space under the head and vertically centers its content. Do not add spacer elements or `<br>`.
- Put `<em>` inside `.headline` or `.hero` to color one phrase orange. One phrase per slide, at most.
- `.num` on any element turns on tabular figures.
- Add `slide--dark` to any slide for the dark look. Title and divider are dark already.

## 4. Layout catalog

Each block is the exact markup from `template.html`. Replace the words, keep the structure and classes.

### 4.1 Title (dark) `slide--title`

```html
<section class="slide slide--title">
  <p class="title__module"><b>Module 01</b> Finance Fundamentals for SEs</p>
  <div class="title__main">
    <h1 class="hero">How CFOs read the <em>cloud bill</em></h1>
    <p class="title__promise">Leave able to turn any savings claim into a margin story.</p>
  </div>
  <div class="title__meta">
    <span class="chip"><svg class="icon" aria-hidden="true"><use href="#i-clock"/></svg>25 min</span>
    <span class="chip"><svg class="icon" aria-hidden="true"><use href="#i-doc"/></svg>Companion doc included</span>
  </div>
</section>
```
Title: max 7 words, it wraps to two lines at most. Promise: one sentence, max 14 words.

### 4.2 Agenda / learning goals `slide--agenda` (3 cards max)

```html
<section class="slide slide--agenda">
  <header class="slide__head">
    <p class="eyebrow">Learning goals</p>
    <h2 class="headline">Three things you will do after this</h2>
  </header>
  <div class="slide__body">
    <ul class="goals">
      <li class="card">
        <span class="icon-tile"><svg class="icon" aria-hidden="true"><use href="#i-search"/></svg></span>
        <h3 class="card__title">Read a P&amp;L</h3>
        <p class="card__text">Spot where cloud and AI costs land.</p>
      </li>
      <li class="card">
        <span class="icon-tile icon-tile--teal"><svg class="icon" aria-hidden="true"><use href="#i-calculator"/></svg></span>
        <h3 class="card__title">Do the margin math</h3>
        <p class="card__text">Turn savings into gross margin points.</p>
      </li>
      <li class="card">
        <span class="icon-tile icon-tile--plain"><svg class="icon" aria-hidden="true"><use href="#i-chat"/></svg></span>
        <h3 class="card__title">Talk like finance</h3>
        <p class="card__text">Frame value in words a CFO repeats.</p>
      </li>
    </ul>
  </div>
</section>
```
Card title max 4 words, card text max 8 words. Start goals with a verb.

### 4.3 Section divider (dark) `slide--divider`

```html
<section class="slide slide--divider">
  <p class="eyebrow">Part 2</p>
  <h2 class="hero">Where cloud spend lands</h2>
  <p class="lede">Follow one dollar from invoice to P&amp;L.</p>
  <span class="divider__part" aria-hidden="true">02</span>
</section>
```
`divider__part` is the part number, drawn as an outline numeral. Keep it two digits.

### 4.4 Big number `slide--stat`

```html
<section class="slide slide--stat">
  <p class="eyebrow">Worked example</p>
  <div class="stat">
    <p class="stat__value">72<small>%</small></p>
    <p class="stat__label">gross margin after cloud and support costs</p>
  </div>
  <div class="stat__foot">
    <div class="meter" style="--pct: 72" role="img" aria-label="Gross profit 72 percent of revenue, COGS 28 percent">
      <div class="meter__track"><span class="meter__fill"></span><span class="meter__rest"></span></div>
      <div class="meter__labels"><span>Gross profit 72%</span><span>COGS 28%</span></div>
    </div>
    <p class="source">Source: course worked example. $10.0M revenue, $2.8M COGS.</p>
  </div>
</section>
```
The figure is at most 4 characters plus a unit in `<small>` (`$4.2<small>B</small>`, `38<small>%</small>`). The meter is optional; use it only for a share of a whole and set `--pct`. Every external figure needs a source line with publisher and year.

### 4.5 Concept + illustration `slide--concept`

```html
<section class="slide slide--concept">
  <div class="split">
    <div class="split__text">
      <header class="slide__head">
        <p class="eyebrow">Core idea</p>
        <h2 class="headline">Cloud spend splits by what it serves</h2>
      </header>
      <ul class="bullets">
        <li>Production serving customers is <strong>COGS</strong></li>
        <li>Building the product is <strong>R&amp;D OpEx</strong></li>
        <li>The split moves gross margin</li>
      </ul>
    </div>
    <figure class="illo">
      <svg viewBox="0 0 640 480" role="img" aria-label="One cloud bill splits into COGS for production and R&amp;D OpEx for dev and test">
        <!-- see template.html slide 5 for the full drawing -->
      </svg>
      <figcaption>Illustrative split. Real splits come from account and tag structure.</figcaption>
    </figure>
  </div>
</section>
```
Copy the full SVG from slide 5 of `template.html` as a starting point. Rules in section 6.

### 4.6 Comparison / versus `slide--compare`

```html
<section class="slide slide--compare">
  <header class="slide__head">
    <p class="eyebrow">Capex vs opex</p>
    <h2 class="headline">Capex spreads cost, opex hits today</h2>
  </header>
  <div class="slide__body">
    <div class="versus">
      <div class="card versus__side">
        <div class="versus__head">
          <span class="icon-tile"><svg class="icon" aria-hidden="true"><use href="#i-server"/></svg></span>
          <h3 class="card__title">Capex</h3>
        </div>
        <p class="card__text">Buy the asset up front. Expense it over five years.</p>
        <figure class="versus__mini"><svg viewBox="0 0 520 150" role="img" aria-label="...">...</svg></figure>
      </div>
      <span class="versus__vs" aria-hidden="true">vs</span>
      <div class="card versus__side versus__side--b">
        <div class="versus__head">
          <span class="icon-tile icon-tile--teal"><svg class="icon" aria-hidden="true"><use href="#i-cloud"/></svg></span>
          <h3 class="card__title">Opex</h3>
        </div>
        <p class="card__text">Pay as you go. Expense it the month you use it.</p>
        <figure class="versus__mini"><svg viewBox="0 0 520 150" role="img" aria-label="...">...</svg></figure>
      </div>
    </div>
  </div>
</section>
```
Side A is orange, side B is teal. The mini SVGs are optional but should show the difference (slide 6 of the template draws cash vs expense timing). Max 12 words per side.

### 4.7 Flow / process `slide--flow` (3 to 5 steps)

```html
<section class="slide slide--flow">
  <header class="slide__head">
    <p class="eyebrow">From usage to P&amp;L</p>
    <h2 class="headline">Cloud costs reach the P&amp;L in five steps</h2>
  </header>
  <div class="slide__body">
    <ol class="flow" aria-label="Five steps from cloud usage to the P&amp;L">
      <li class="flow__step">
        <span class="icon-tile icon-tile--plain"><svg class="icon" aria-hidden="true"><use href="#i-cloud"/></svg></span>
        <span class="flow__title">Usage</span>
        <span class="flow__text">Teams run workloads</span>
      </li>
      <li class="flow__arrow" aria-hidden="true">
        <svg viewBox="0 0 72 24"><path d="M2 12h64M58 5l8 7-8 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="flow__arrow-label">metered</span>
      </li>
      <!-- repeat step, arrow, step ... -->
      <li class="flow__step flow__step--key">
        <span class="icon-tile"><svg class="icon" aria-hidden="true"><use href="#i-chart-up"/></svg></span>
        <span class="flow__title">P&amp;L line</span>
        <span class="flow__text">Lands in COGS or OpEx</span>
      </li>
    </ol>
  </div>
</section>
```
Step title: 1 or 2 words. Step text: max 5 words. Arrow label: 1 word that says what happens on that hop (`billed`, `tagged`). Mark the step the slide is about with `flow__step--key`.

### 4.8 Chart: waterfall or bars `slide--chart`

```html
<section class="slide slide--chart">
  <header class="slide__head">
    <p class="eyebrow">Revenue to gross profit</p>
    <h2 class="headline">Cloud hosting is the biggest COGS line</h2>
  </header>
  <div class="slide__body">
    <div class="chart-layout">
      <figure class="viz">
        <svg viewBox="0 0 1000 560" role="img" aria-labelledby="wf-title wf-desc">
          <title id="wf-title">Waterfall from revenue to gross profit</title>
          <desc id="wf-desc">Revenue 10.0 million dollars, minus ... equals gross profit 7.2 million.</desc>
          <!-- grid, axis, ticks, connectors, bars, values, categories: copy slide 8 -->
        </svg>
        <table class="sr-only"><!-- same numbers as a table --></table>
        <div class="legend">
          <span class="legend__item"><span class="legend__swatch"></span>Total</span>
          <span class="legend__item"><span class="legend__swatch legend__swatch--decrease"></span>Cost of goods sold</span>
        </div>
      </figure>
      <aside class="callout">
        <p class="eyebrow">Gross margin</p>
        <p class="callout__value">72%</p>
        <p class="callout__label">Cloud is 64% of COGS here</p>
        <p class="source">Illustrative figures</p>
      </aside>
    </div>
  </div>
</section>
```

How the template waterfall is drawn, so you can change the numbers:
- viewBox `0 0 1000 560`. Plot area x 80 to 1000, baseline y 480, top value at y 60.
- Scale: `y(v) = 480 - 42 * v` for v in $M (so $10M = 60). Pick a factor so the largest bar reaches y 60: `factor = 420 / max`.
- Bars are 150 wide at x 128, 358, 588, 818 (slot pitch 230). Centers for labels: 203, 433, 663, 893.
- Total bars use `class="bar viz-total"`, drops `viz-decrease`, rises `viz-increase`. Each bar gets a `<title>` with its value (hover tooltip).
- Dashed `viz-connector` lines join the end level of one bar to the start of the next.
- Value labels (`viz-value`) sit 16 units above each bar top. Category labels (`viz-cat`) at y 516; optional sublabel (`viz-tick`) at y 546.
- Gridlines (`viz-grid`) at round values only, with matching `viz-tick` labels at x 64, `text-anchor="end"`.
- For plain bars, use the same frame and only `viz-total` (one series needs no legend).
- Always include the `sr-only` table with the same numbers.
- Max 6 bars. Never two y axes.

### 4.9 Equation / formula `slide--formula`

```html
<section class="slide slide--formula">
  <header class="slide__head">
    <p class="eyebrow">The formula</p>
    <h2 class="headline">Gross margin shows what delivery really costs</h2>
  </header>
  <div class="slide__body">
    <p class="formula" role="math" aria-label="Gross margin equals revenue minus COGS, divided by revenue">
      <span class="formula__term formula__term--result">Gross margin</span>
      <span class="formula__op">=</span>
      <span class="formula__paren">(</span>
      <span class="formula__term formula__term--teal">Revenue</span>
      <span class="formula__op">−</span>
      <span class="formula__term formula__term--accent">COGS</span>
      <span class="formula__paren">)</span>
      <span class="formula__op">÷</span>
      <span class="formula__term formula__term--teal">Revenue</span>
    </p>
    <div class="worked">
      <p class="eyebrow">Worked example</p>
      <p class="worked__row num">($10.0M <span class="op">−</span> $2.8M) <span class="op">÷</span> $10.0M <span class="op">=</span> <span class="result">72%</span></p>
      <p class="worked__note">COGS here is $1.8M cloud hosting plus $1.0M support.</p>
    </div>
  </div>
</section>
```
Use real math signs: `−` (U+2212), `÷`, `×`, `=`. Max 5 terms. Same term, same color everywhere it appears.

### 4.10 Quote / "How a CFO hears it" `slide--quote`

```html
<section class="slide slide--quote">
  <header class="slide__head">
    <p class="eyebrow">How a CFO hears it</p>
    <h2 class="headline">CFOs translate savings into P&amp;L lines</h2>
  </header>
  <div class="slide__body">
    <div class="hears">
      <div class="card hears__say">
        <p class="hears__who"><svg class="icon" aria-hidden="true"><use href="#i-chat"/></svg>You say</p>
        <p class="card__text">“We can cut your cloud bill by 30%.”</p>
      </div>
      <div class="hears__arrow" aria-hidden="true">
        <svg viewBox="0 0 80 32"><path d="M2 16h72M64 6l10 10-10 10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <blockquote class="hears__cfo">
        <p class="hears__who"><svg class="icon" aria-hidden="true"><use href="#i-person"/></svg>The CFO hears</p>
        <p class="quote">Which line moves, by how much, and when?</p>
      </blockquote>
    </div>
  </div>
</section>
```
`.quote` adds the curly quotes itself; do not type them. Max 12 words. A real attributed quote needs a `<p class="source">` with name, role and where it was said.

### 4.11 Key terms `slide--terms` (max 6 cards)

```html
<section class="slide slide--terms">
  <header class="slide__head">
    <p class="eyebrow">Key terms</p>
    <h2 class="headline">Six terms you will hear every call</h2>
  </header>
  <div class="slide__body">
    <dl class="terms">
      <div class="card term">
        <dt class="term__name"><svg class="icon" aria-hidden="true"><use href="#i-server"/></svg>COGS</dt>
        <dd class="term__def">Costs to deliver what you sold, including production cloud.</dd>
      </div>
      <!-- up to 6 -->
    </dl>
  </div>
</section>
```
Term: 1 to 3 words. Definition: 8 to 12 words, no jargon you have not defined.

### 4.12 Customer story `slide--story`

```html
<section class="slide slide--story">
  <header class="slide__head">
    <span class="badge badge--unconfirmed"><svg class="icon" aria-hidden="true"><use href="#i-alert-circle"/></svg>Unconfirmed, vendor-reported</span>
    <h2 class="headline">Example Co. cut cost per customer 28%</h2>
  </header>
  <div class="slide__body">
    <div class="story">
      <div class="story__main">
        <div class="story__customer">
          <span class="icon-tile icon-tile--plain"><svg class="icon" aria-hidden="true"><use href="#i-chip"/></svg></span>
          <div>
            <p class="story__name">Example Co.</p>
            <p class="story__sector">B2B SaaS · placeholder</p>
          </div>
        </div>
        <p class="story__quote">“We priced our AI tier from real unit costs.”</p>
        <p class="source">Source: vendor case study, not independently verified.</p>
      </div>
      <div class="story__metrics">
        <div class="metric"><span class="metric__value metric__value--accent num">−28%</span><span class="metric__label">cost per customer</span></div>
        <div class="metric"><span class="metric__value num">6 wks</span><span class="metric__label">to first allocation report</span></div>
        <div class="metric"><span class="metric__value num">+4 pts</span><span class="metric__label">gross margin, claimed</span></div>
      </div>
    </div>
  </div>
</section>
```
Every customer story carries an evidence badge. Vendor case studies (including CloudZero's own) are `Unconfirmed, vendor-reported` unless a public filing or the customer confirms them. Max 3 metrics, values up to 6 characters. Never invent a customer; use a real, cited story or keep the placeholder name "Example Co.".

### 4.13 Self-check `slide--check`

```html
<section class="slide slide--check">
  <header class="slide__head">
    <p class="eyebrow">Self-check</p>
  </header>
  <div class="slide__body">
    <h2 class="question">A SaaS company moves dev and test cloud spend out of COGS. What happens to gross margin?</h2>
    <ol class="options">
      <li class="option is-correct"><span class="option__key">A</span>It goes up</li>
      <li class="option"><span class="option__key">B</span>It goes down</li>
      <li class="option"><span class="option__key">C</span>No change</li>
    </ol>
    <div class="answer" data-reveal>
      <svg class="icon" aria-hidden="true"><use href="#i-check-circle"/></svg>
      <p class="answer__text"><strong>A. It goes up.</strong> The cost moves to R&amp;D OpEx, so gross margin rises while operating income stays the same.</p>
    </div>
  </div>
</section>
```
- The runtime covers `.answer` with a "Reveal answer" button. Click it or press R. R again hides it.
- Mark the right option with `is-correct`; it turns green only after reveal.
- Change the button text with `data-reveal-label="Show the math"`.
- Question max 25 words, 3 options of max 5 words, answer max 25 words. Print shows answers revealed.
- `data-reveal` works on any block, not only on self-check slides.

### 4.14 Timeline / fiscal calendar `slide--timeline`

```html
<section class="slide slide--timeline">
  <header class="slide__head">
    <p class="eyebrow">Fiscal year Feb to Jan</p>
    <h2 class="headline">Budgets lock months before the year starts</h2>
  </header>
  <div class="slide__body">
    <div class="timeline" role="img" aria-label="Fiscal calendar ... (describe the bands)">
      <span class="timeline__q">Q1</span><span class="timeline__q">Q2</span>
      <span class="timeline__q">Q3</span><span class="timeline__q">Q4</span>
      <span class="timeline__month">Feb</span>
      <!-- 12 months total, first fiscal month first -->
      <span class="timeline__month timeline__month--cool">Jun</span>
      <span class="timeline__month timeline__month--warm">Aug</span>
      <span class="timeline__month timeline__month--hot">Nov</span>
      <div class="timeline__band timeline__band--teal" style="grid-column: 5 / span 2; grid-row: 3"><b>Shape the plan</b><span>Bring the business case</span></div>
      <div class="timeline__band" style="grid-column: 7 / span 3; grid-row: 3"><b>Planning season</b><span>Teams submit next year’s budget</span></div>
      <div class="timeline__band timeline__band--ink" style="grid-column: 10 / span 3; grid-row: 3"><b>Budget locked</b><span>New spend needs an exception</span></div>
    </div>
  </div>
</section>
```
Always 4 quarter labels and 12 month cells. Month tint: `--cool` (teal), `--warm` (light orange), `--hot` (solid orange, one month at most). Bands go on `grid-row: 3`, positioned with `grid-column: <first month 1-12> / span <months>`. Max 3 bands, band title max 3 words, band text max 5 words. Bands must not overlap.

### 4.15 Resources `slide--resources` (max 4 link cards)

```html
<section class="slide slide--resources">
  <header class="slide__head">
    <p class="eyebrow">Resources</p>
    <h2 class="headline">Go deeper with these four sources</h2>
  </header>
  <div class="slide__body">
    <div class="links">
      <a class="link-card" href="https://www.finops.org/framework/" target="_blank" rel="noopener noreferrer">
        <span class="icon-tile icon-tile--teal"><svg class="icon" aria-hidden="true"><use href="#i-cloud"/></svg></span>
        <span class="link-card__body">
          <span class="link-card__source">FinOps Foundation</span>
          <span class="link-card__title">FinOps Framework</span>
          <span class="link-card__desc">Shared cost language for engineering and finance.</span>
        </span>
        <svg class="icon link-card__go" aria-hidden="true"><use href="#i-external"/></svg>
      </a>
      <!-- up to 4 -->
    </div>
  </div>
</section>
```
Every link: `target="_blank" rel="noopener noreferrer"`, an https URL you opened and checked, a source name, a title of max 4 words, a description of max 8 words.

### 4.16 Recap + companion pointer `slide--recap` (3 takeaways max)

```html
<section class="slide slide--recap">
  <header class="slide__head">
    <p class="eyebrow">Recap</p>
    <h2 class="headline">Carry these into your next CFO call</h2>
  </header>
  <div class="slide__body">
    <div class="recap">
      <ul class="takeaways">
        <li class="takeaway"><span class="icon-tile"><svg class="icon" aria-hidden="true"><use href="#i-check"/></svg></span>Ask whether cloud lands in COGS</li>
        <li class="takeaway"><span class="icon-tile"><svg class="icon" aria-hidden="true"><use href="#i-check"/></svg></span>Lead with margin points, not savings</li>
        <li class="takeaway"><span class="icon-tile"><svg class="icon" aria-hidden="true"><use href="#i-check"/></svg></span>Time big asks to the budget calendar</li>
      </ul>
      <div class="card companion">
        <span class="icon-tile"><svg class="icon" aria-hidden="true"><use href="#i-doc"/></svg></span>
        <h3 class="card__title">Companion document</h3>
        <p class="card__text">Worked examples, caveats and talk tracks for this module.</p>
        <p class="companion__cta">Module 01 companion, section 1</p>
      </div>
    </div>
  </div>
</section>
```
Takeaways: max 7 words each, start with a verb. If the companion has a URL, make the card an `<a class="card companion" href="..." target="_blank" rel="noopener noreferrer">`.

### 4.17 Evidence badges (component, use anywhere)

```html
<span class="badge badge--confirmed"><svg class="icon" aria-hidden="true"><use href="#i-check-circle"/></svg>Confirmed</span>
<span class="badge badge--unconfirmed"><svg class="icon" aria-hidden="true"><use href="#i-alert-circle"/></svg>Unconfirmed</span>
<span class="badge badge--inference"><svg class="icon" aria-hidden="true"><use href="#i-inference"/></svg>Inference</span>
```
- Confirmed: public filing, audited report, primary source, or our own data.
- Unconfirmed: vendor or press claim we cannot verify. Add the reason after a comma: "Unconfirmed, vendor-reported".
- Inference: our reasoning from confirmed facts.
Place the badge as the first child of `.slide__head` (above the headline) or inside a card. Badge colors are reserved for evidence; do not reuse green, amber or the badge teal tint for anything else. The last slide of `template.html` shows all three; delete that slide in modules.

## 5. Tokens

All tokens live on `:root` in `deck.css`. Use them by name; never type a hex value in a module.

### Color (light theme, the primary look)

| Token | Value | Use | Source |
|---|---|---|---|
| `--cz-orange` / `--accent` | `#FE552E` | big numbers, rules, key shapes. Not for text under 24px | observed (`cz-orange`) |
| `--cz-orange-deep` / `--accent-ink` | `#C54F34` | orange text at small sizes (4.6:1 on white) | observed in site CSS |
| `--cz-teal` / `--teal` | `#006884` | second accent, side B, teal tiles | observed (`deep-teal`) |
| `--cz-signal` | `#4599AC` | tertiary chart series | observed (`signal-blue`) |
| `--cz-ice` / `--dark-highlight` | `#B7FDFF` | highlight on dark slides | observed (`insight-ice`) |
| `--cz-sand` / `--page-bg` | `#EAE7E1` | letterbox around slides | observed (`warm-sand`) |
| `--cz-paper` / `--surface` | `#F5F3F1` | cards, tokens | observed (`neutral-lightest`) |
| `--cz-linen` / `--surface-2` | `#EBE7E1` | secondary panels, meter track | observed (`neutral-lighter`) |
| `--cz-ink` / `--ink` / `--dark-bg` | `#141414` | text, dark slide background | observed (`black-btn`) |
| `--cz-graphite` / `--ink-2` | `#403E3F` | secondary text | observed (`neutral-dark`) |
| `--ink-3` | `#6B6869` | muted text, eyebrows, sources (5.5:1) | approximated |
| `--slide-bg` | `#FFFFFF` | light slide | approximated |
| `--line`, `--line-strong` | `#DDD8D0`, `#C9C3BA` | hairlines | approximated |
| `--accent-soft`, `--teal-soft` | `#FFE6DE`, `#DDEFF3` | tile and card tints | approximated |
| `--ok` / `--caution` / `--infer` | `#1F7A3D` / `#8A5300` / `#006884` | evidence badges only | approximated |
| `--viz-1` | `#00739A` | chart totals, primary series | approximated: brand teal stepped up to pass the chroma check |
| `--viz-2` | `#FE552E` | chart decreases, contrast series | observed |
| `--viz-3` | `#4599AC` | third series, always with direct labels | observed |

Dark slides (`slide--dark`, title, divider) swap the role tokens locally, so every component works on them unchanged. Dark mode (`prefers-color-scheme: dark` unless `data-theme="light"`, and `data-theme="dark"`) redefines the same tokens: slides become `#1A1918`, dark slides become a deep teal black `#0C2129`, orange lifts to `#FF6A47`, chart teal to `#2A9BBF`. The chart pair was validated with the dataviz palette checker for both modes (CVD separation and contrast pass).

### Type

| Token | Value | Source |
|---|---|---|
| `--font-display` | Geist, then Inter, system sans | approximated: the site uses Suisse Intl (licensed, not on Google Fonts) for headings; Geist is the closest neo grotesk on Google Fonts and pairs with the site's mono |
| `--font-body` | Inter | observed (`--wp--preset--font-family--primary`) |
| `--font-mono` | Geist Mono | observed (`--wp--preset--font-family--secondary`) |

Scale (slide px): `--fs-mega` 280 (one big number), `--fs-hero` 108 (title, divider), `--fs-h1` 64 (headline), `--fs-h2` 44 (question, formula), `--fs-h3` 32 (card title), `--fs-lead` 30 (bullets), `--fs-body` 24, `--fs-small` 20, `--fs-label` 17 (mono uppercase eyebrows, badges), `--fs-micro` 15 (footer, sources). Nothing on a slide goes below 15px.

### Spacing and shape

`--sp-1` 8, `--sp-2` 16, `--sp-3` 24, `--sp-4` 32, `--sp-5` 48, `--sp-6` 64, `--sp-7` 96, `--sp-8` 128. Radii `--radius-s` 6, `--radius-m` 14, `--radius-l` 22. Icon stroke `--icon-stroke` 1.6.

## 6. Illustrations, diagrams and charts

- Inline SVG only. No images, no canvas, no external files, no `<script>` or `<style>` inside SVG.
- Set `viewBox` and let CSS size it. Common frames: concept `0 0 640 480`, chart `0 0 1000 560`, mini `0 0 520 150`.
- Color through classes that read tokens, so drawings follow light, dark and dark mode automatically:
  - fills: `svg-ink`, `svg-ink-2`, `svg-ink-3`, `svg-surface`, `svg-surface-2`, `svg-bg`, `svg-accent`, `svg-accent-soft`, `svg-teal`, `svg-teal-soft`
  - strokes: `svg-stroke`, `svg-stroke-2`, `svg-line`, `svg-accent-stroke`, `svg-teal-stroke`
  - text: `svg-label` (20px body), `svg-label-strong` (24px display), `svg-mono` (16px caps label)
  - charts: `viz-grid`, `viz-axis`, `viz-connector`, `viz-tick`, `viz-cat`, `viz-value`, `viz-total`, `viz-decrease`, `viz-increase`, `viz-muted`
  - or `stroke="currentColor"` for line art that follows the text color.
  If you need a one off color, use `style="fill:var(--viz-1)"`, never a hex value.
- Give every shape an explicit fill or `fill="none"`.
- Draw the mechanism, not a box with a name on it: show what flows, splits or changes. Label arrows with what happens (`billed`, `tagged`).
- One accent per drawing. Orange marks the thing the slide is about; teal is the counterpart; everything else is ink or surface.
- Text in SVG: 16 to 40 units, max 3 words per label. Sentences go in the `figcaption` (max 12 words) or the companion doc.
- Leave room in the viewBox for the outermost labels. Align to a grid.
- Accessibility: `role="img"` plus `aria-label` (or `<title>` and `<desc>` with `aria-labelledby`) stating the claim. Charts also get an `sr-only` table.
- Marker and gradient ids must be unique in the whole deck: suffix them with the slide name (`ah-concept`, `ah-flow2`).
- Charts: one y axis, scale from zero, every tick a real value, direct value labels, legend only when there are 2 or more series. Max 2 colors plus muted gray. Categorical order is fixed: `--viz-1`, `--viz-2`, `--viz-3`.
- Numbers on charts must match numbers elsewhere in the deck and the companion doc.

## 7. Icons

The runtime injects a sprite. Use any icon as:

```html
<svg class="icon" aria-hidden="true"><use href="#i-NAME"/></svg>
```

Icons are 24px line drawings with a 1.6 stroke in `currentColor`. They size to the font size of their parent; inside `.icon-tile` they are sized for you.

| Name | Meaning |
|---|---|
| `doc` | document, statement, companion doc |
| `scale` | balance, allocation, tradeoff |
| `coins` | cash, spend, OpEx |
| `chart-up` / `chart-down` | growth, decline |
| `cloud` / `server` | cloud spend / infrastructure, capex |
| `chip` | AI, GPU, model costs |
| `calculator` | math, unit cost |
| `calendar` | fiscal calendar, accruals |
| `search` | magnifier, investigate |
| `person` | CFO, buyer, persona |
| `warning` / `alert-circle` | risk / unconfirmed |
| `check` / `check-circle` | takeaway / confirmed, correct |
| `inference` | inference badge |
| `link` / `external` | link / opens in new tab |
| `arrow-right` / `arrow-left` | direction |
| `clock` | duration |
| `target` | goal |
| `chat` | what you say, talk track |

Icon tiles: `icon-tile` (orange tint), `icon-tile--teal`, `icon-tile--plain` (outlined), `icon-tile--lg`.

## 8. Runtime behavior (deck.js)

- Keys: Right, Down, PageDown, Space go forward; Left, Up, PageUp, Shift+Space go back; Home, End; R reveals or hides answers on the current slide.
- Click the right 70% of a slide to go forward, the left 30% to go back. Links, buttons and answers do not navigate. Swipe left or right on touch.
- URL hash is the slide number (`#7`). The last slide viewed is remembered in localStorage when the browser allows it; the deck works without it.
- Progress bar at the top, nav buttons and counter at the bottom. All screen only.
- Print (Ctrl+P): one slide per 16:9 landscape page, answers revealed, no nav UI. Choose "Background graphics" in the print dialog for dark slides. Printing does not work inside the claude.ai artifact viewer; print from a locally opened file.
- `window.Deck` exposes `go(i)`, `next()`, `prev()`, `reveal()`, `index()`, `count`, `layout()`.

## 9. Module checklist (do every item before hand off)

Content
- [ ] Every headline is a takeaway of 8 words or fewer.
- [ ] Every slide is within the text budget (40 words, 3 bullets, 10 words per bullet).
- [ ] Every slide except title, divider and self-check has a visual.
- [ ] No em dashes, no emojis, no "leverage" or "unlock", active voice, hyphens only in standard compounds.
- [ ] Every external number has a source line; every claim about a company has an evidence badge.
- [ ] Customer stories use a real, cited story or the "Example Co." placeholder, with the right badge.
- [ ] Numbers agree across slides, charts and the companion document.
- [ ] Each self-check has `is-correct` on the right option and a reveal answer.
- [ ] Recap has 3 takeaways max and points to the companion document.
- [ ] Links open in a new tab and you have opened each one.

Structure
- [ ] Started from the skeleton in section 2; the two template paths are untouched.
- [ ] `<title>` is 2 to 4 words; `data-module` is set.
- [ ] Only classes from this file; no hex colors, no new `<style>` blocks, no external images or scripts.
- [ ] SVG marker and gradient ids are unique; every SVG has an accessible label.
- [ ] Deck opens with the title slide and has at least one divider, one self-check and the recap.

QA
- [ ] `python3 scripts/build.py` prints `ok` for your module.
- [ ] `node scripts/qa.js dist/<module>.html qa/<module>` exits 0.
- [ ] You looked at every `slide-NN.png` and the revealed shots: nothing cramped, misaligned, clipped or low contrast.
- [ ] You looked at the `phone-NN.png` shots and one dark run (`--dark --no-phone`).
- [ ] Arrow keys, click, R and the `#N` hash work in a browser.

## 10. Branding notes

- Palette and fonts were read from the public cloudzero.com theme (WordPress preset variables and `main-v2.min.css`) in November 2026. Values marked "approximated" above are ours.
- There is no logo file. The footer uses the text wordmark "CloudZero" in the display face. Do not add or recreate the CloudZero logo mark.
