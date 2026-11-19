# Finance Fundamentals for Sales Engineers

A self-paced, 90 minute primer that teaches CloudZero Sales Engineers the finance language CFOs, controllers and FP&A use. Six modules. Each one has a slide deck and a long-form companion document with links.

**Status:** Draft. Accuracy review by CloudZero finance pending.

## Modules

| # | Module | Time | Deck (built, self-contained) | Companion |
| --- | --- | --- | --- | --- |
| 1 | The three financial statements | 10 min | [dist/01-three-financial-statements.html](dist/01-three-financial-statements.html) | [companion.md](modules/01-three-financial-statements/companion.md) |
| 2 | Gross margin and COGS | 20 min | [dist/02-gross-margin-and-cogs.html](dist/02-gross-margin-and-cogs.html) | [companion.md](modules/02-gross-margin-and-cogs/companion.md) |
| 3 | Capex, opex, capitalization and amortization | 20 min | [dist/03-capex-opex-capitalization.html](dist/03-capex-opex-capitalization.html) | [companion.md](modules/03-capex-opex-capitalization/companion.md) |
| 4 | Unit economics and cost per customer | 15 to 17 min | [dist/04-unit-economics.html](dist/04-unit-economics.html) | [companion.md](modules/04-unit-economics/companion.md) |
| 5 | Budgeting and variance | 10 min | [dist/05-budgeting-and-variance.html](dist/05-budgeting-and-variance.html) | [companion.md](modules/05-budgeting-and-variance/companion.md) |
| 6 | The finance buyer's calendar and vocabulary | 15 min | [dist/06-finance-buyer-calendar.html](dist/06-finance-buyer-calendar.html) | [companion.md](modules/06-finance-buyer-calendar/companion.md) |

## Shareable links (claude.ai artifacts)

- [FF - 1 Three Financial Statements](https://claude.ai/artifact/3Z6ANbrxt2uXBmm5uevsdJ)
- [FF - 2 Gross Margin and COGS](https://claude.ai/artifact/3aWQNSXpHhpCzCzEXhFcpd)
- [FF - 3 Capex, Opex, Capitalization](https://claude.ai/artifact/TGdPoC7G3qem7GnFfwPCUn)
- [FF - 4 Unit Economics](https://claude.ai/artifact/KpeWVE3HxLhKgovNJSDT4G)
- [FF - 5 Budgeting and Variance](https://claude.ai/artifact/MRTGnyN8DHGA4nuMysYb5R)
- [FF - 6 Finance Buyer Calendar](https://claude.ai/artifact/J7ytRWYkTL4KXVbdersDzb)

Artifacts are private until shared from each page's Share menu. To update one, rebuild and republish the same `dist/` file.

## Using a deck

Open a file in `dist/` in any browser. Navigate with the arrow keys, space, click or swipe. Press **R** on a self-check slide to reveal the answer. Each slide has its own URL hash (`#5`). Print with Ctrl+P for one landscape slide per page.

## Evidence labels

- **Confirmed:** checked against a primary source or two independent sources.
- **Unconfirmed:** one source only. All customer story figures are vendor-reported and stay Unconfirmed.
- **Inference:** reasoning, not a sourced fact. Finance should confirm.

## Editing

- Deck sources live in `modules/<module>/index.html` and reference the shared template in `template/`.
- Read `template/DESIGN.md` before editing. It holds the layout catalog and the text budget (40 words max per slide, every content slide carries a visual).
- Build: `python3 scripts/build.py` inlines the template into `dist/`.
- QA: `node scripts/qa.js dist/<module>.html <screenshot-dir>` screenshots every slide and fails on overflow.

## Scope

Finance concepts only. No FinOps content. Module 3 gives background on capitalization only; the capitalization talk track belongs to SE leadership.

## Known caveats

- sec.gov and fasb.org block automated link checks (403), and Investopedia returns 402 to bots. Those links come from the source outline and were kept, but open them once by hand before sharing.
- Datadog figures come from the Datadog FY2025 Form 10-K as transcribed in the Notion module drafts. Derived figures (for example "All other $21.6M" in Module 5) are labeled as our arithmetic.
