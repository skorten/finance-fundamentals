# Module 3 companion: Capex, opex, capitalization and amortization

**Status:** Draft. Accuracy review by CloudZero finance pending.

**Runtime:** about 20 minutes, self-paced, including the three self-checks.
**Audience:** CloudZero Sales Engineers.
**Running example:** Datadog, Inc., Form 10-K for the fiscal year ended December 31, 2025 (FY2025). All Datadog figures come from that filing, in US dollars.
**Scope:** background only. This module is not accounting advice. It does not include the capitalization talk track that SE leadership is building. Your job is to recognize the topic and bring in the customer's finance team.

Evidence labels used here:

- **Confirmed:** checked against a primary source such as a public filing or FASB text, or confirmed by a second independent source.
- **Unconfirmed:** one source only, or a vendor claim we cannot verify.
- **Inference:** our reasoning from confirmed facts.

---

## 1. Capex and opex

A company that runs its own data center buys servers. That purchase is capital expenditure, or capex. The servers go on the balance sheet as property and equipment. Each year, depreciation moves a slice of their cost onto the income statement. The cash left the building on day one. The expense arrives over several years.

A company on a public cloud rents the same capacity by the hour. The monthly bill is operating expenditure, or opex. It is expensed in the month incurred. For a SaaS company, the production part of that bill usually sits in cost of revenue (see Module 2).

**Inference:** a server purchase is a capital decision that a company makes a few times a year, with approvals. A cloud bill is a variable cost that engineers change every day, and all of it hits the income statement that month. CFOs watch the two very differently. That is why the move to cloud shifted infrastructure spending from capex to opex.

The slide uses a building for capex (buy once, expense over years) and a utility meter for opex (pay as you use). Both are illustrations, not data.

## 2. Capitalization and amortization

**Capitalization** means recording a cost as an asset instead of expensing it right away. **Amortization** is the step where that asset's cost moves onto the income statement over its useful life. Depreciation is the same idea for physical assets. **Straight-line** means an equal amount each year. Management estimates the useful life.

Some software development labor can be capitalized. The rules for software a company builds or buys to run its own business sit in ASC 350-40. A company that capitalizes engineering labor does not spend less cash. It changes when the cost reaches the income statement.

### Worked example 1 (Illustrative)

A company capitalizes $600K of development labor. It amortizes straight-line over three years, starting at the beginning of year 1.

| Point in time | Asset on balance sheet | Expense that year |
|---|---|---|
| Start | $600K | none |
| End of year 1 | $400K | $200K |
| End of year 2 | $200K | $200K |
| End of year 3 | $0 | $200K |

The math:

- Yearly amortization: $600K ÷ 3 = $200K.
- Net book value after year 1: $600K − $200K = $400K.
- Had the company expensed the $600K instead, year 1 expense would be $600K, not $200K. That is $400K higher.
- Cash spent in year 1 is $600K either way.

The staircase chart on slide 6 draws this table. Teal is the asset left. Orange is what moves to expense that year.

## 3. Capitalized software in Datadog's FY2025 10-K

**Confirmed** (Datadog Form 10-K for FY2025, Note 2 and Note 5, and the cash flow statement).

Datadog says its R&D costs "are expensed as incurred, with the exception of certain software development costs which are eligible for capitalization." Those are personnel costs, "including related benefits and stock-based compensation," for developing its cloud platform. Datadog accounts for them as internal-use software under ASC 350-40.

| Statement | Line item | FY2025 | FY2024 |
|---|---|---|---|
| Cash flow statement (investing activities) | Capitalized software development costs | ($85.8M) | ($60.8M) |
| Balance sheet (property and equipment note) | Capitalized software development costs, gross, at December 31 | $329.1M | $285.0M |

How to read it:

- The cash goes out when engineers are paid. Capitalization changes only when the cost reaches the income statement.
- The $85.8M sits in investing activities. Datadog subtracts it when it calculates free cash flow (Module 1).
- The $329.1M is the gross asset, before accumulated amortization.
- The cost comes back as amortization, straight-line over three years. The 10-K says it "is included in cost of revenue and sales and marketing expense based on an allocation between paid customer accounts and free customer accounts not generating revenue." So capitalization decisions can move gross margin.

### The useful life change

In January 2025, Datadog raised the useful life of capitalized software "from two to three years," effective FY2025. Same cost, more years, smaller annual charge. The filing does not quantify the effect, so the next example uses made-up numbers.

### Worked example 2 (Hypothetical)

Invented numbers. The 10-K does not disclose the effect of Datadog's change.

A company capitalizes $90M of development cost at the start of the year.

- Two year life: $90M ÷ 2 = $45M of first-year amortization.
- Three year life: $90M ÷ 3 = $30M of first-year amortization.
- First-year operating income is $45M − $30M = $15M higher under three years.
- Total amortization is $90M either way. It is spread over an extra year.

### Maintenance work stays in expense

Datadog expenses "costs incurred for maintenance and minor upgrades and enhancements." Bug fixes on a shipped feature are usually expensed, not capitalized.

## 4. ASU 2025-06: when capitalization starts

**Confirmed** (FASB ASU 2025-06 text and news release dated September 18, 2025, confirmed by Baker Tilly). The FASB page itself blocks bots, so we read FASB-hosted text through search results.

Datadog's current policy follows the older model. Under it, capitalization begins after "the preliminary project stage is completed." Those project stages were written for waterfall projects and fit agile work badly.

ASU 2025-06, "Targeted Improvements to the Accounting for Internal-Use Software" (Subtopic 350-40), removes all references to project stages. Capitalization starts when both conditions are met:

1. Management has authorized and committed to funding the software project.
2. Completion and intended use are probable, taking "significant development uncertainty" into account. An unproven feature is an example. Capitalization waits until that uncertainty is resolved.

Key dates and scope:

- FASB issued it in September 2025.
- It takes effect for annual periods beginning after December 15, 2027. That is FY2028 for a calendar-year company.
- Early adoption is permitted.
- It also applies to website development costs (Subtopic 350-50).
- Datadog says it "is currently evaluating the impact."

The slide 11 drawing shows the old stages (plan, build, run) next to the new single threshold. The labels "Plan," "Build" and "Run" are simplified. The formal stage names are preliminary project, application development and post-implementation.

## 5. How a CFO hears it

**Inference**, built on the confirmed facts above.

- Capitalizing development labor raises operating income in the year the work is done, because part of the cost moves to the balance sheet. It returns later as amortization.
- Amortization of capitalized software can land in cost of revenue, so capitalization choices can also touch gross margin (Module 2).
- Controllers care whether each capitalized dollar would survive an audit. They want to know which work, which project, and what evidence.
- Finance teams reviewing policy ahead of ASU 2025-06 will want to link engineering work, and any AI tooling cost, to specific projects.

### Hand off to finance

You recognize the question. You do not answer it. What a company can capitalize, over what useful life, and whether it passes audit are calls for the customer's controller and auditors. Bring them into the conversation early. Give no accounting advice.

SE leadership is building a separate capitalization talk track. Per Sean's Nov 4 default, this module will link to it once it is approved. It is out of scope here.

## 6. Self-checks and answers

### Self-check 1 (5 minutes): straight-line amortization

A company capitalizes $600K of development labor and amortizes it straight-line over three years from the start of year 1.

1. How much amortization hits the income statement each year?
2. What is the asset's net book value at the end of year 1?
3. Had the company expensed the $600K instead, how much higher would year 1 expense be?

**Answers**

1. $600K ÷ 3 = $200K a year.
2. $600K − $200K = $400K.
3. $400K higher. Year 1 cash spent is $600K either way.

The slide asks question 1 as a multiple choice (answer B, $200K).

### Self-check 2 (5 minutes): change the useful life

**Hypothetical.** A company capitalizes $90M of development cost at the start of the year. What is first-year straight-line amortization over two years, and over three? How much higher is first-year operating income under three years?

**Answer.** Two years: $45M. Three years: $30M. Operating income is $15M higher. Total amortization is $90M either way. It is spread over an extra year.

### Self-check 3 (5 minutes): capex, opex or possibly capitalizable?

Classify each item.

1. Servers bought for the company's own data center.
2. The monthly cloud bill for production.
3. Engineer salaries for a new platform feature, after management approved and funded the project.
4. Engineer time fixing bugs in a feature that already shipped.

**Answers**

1. Capex, depreciated over the servers' useful life.
2. Opex. The production portion usually sits in cost of revenue.
3. Possibly capitalizable, depending on company policy and, after adoption, the ASU 2025-06 criteria. Datadog capitalizes costs like these. Finance decides.
4. Usually expensed. Datadog expenses "costs incurred for maintenance and minor upgrades and enhancements."

The slide asks item 3 as a multiple choice (answer C).

## 7. Glossary

- **Amortization:** spreading a capitalized intangible asset's cost, such as software, over its useful life.
- **ASC 350-40:** US GAAP rules for internal-use software, meaning software a company builds or buys to run its own business. It also covers implementation costs of cloud computing arrangements.
- **ASC 985-20:** US GAAP rules for software to be sold, leased or otherwise marketed. Not covered in depth here.
- **ASU 2025-06:** FASB's September 2025 update to ASC 350-40. It drops project stages. Effective for annual periods beginning after December 15, 2027.
- **Capex (capital expenditure):** spending on long-lived assets such as servers. Recorded on the balance sheet and expensed gradually.
- **Capitalization:** recording a cost as an asset instead of expensing it immediately.
- **Depreciation:** the same idea as amortization, for physical assets.
- **FASB:** the Financial Accounting Standards Board, which sets US accounting standards.
- **GAAP:** generally accepted accounting principles, the US accounting rules.
- **Internal-use software:** software built or bought to run your own business, not to sell.
- **Net book value:** an asset's cost minus accumulated amortization or depreciation.
- **Opex (operating expenditure):** spending expensed in the period it is incurred. A monthly cloud bill is the standard example.
- **Straight-line:** an equal amount each year.
- **Useful life:** the number of years over which an asset is expected to serve. Management estimates it.

## 8. Slide by slide guide

1. **Title.** Sets the promise: spot when capitalization comes up, then bring in finance.
2. **Learning goals.** Three outcomes: explain capex vs opex, trace capitalized cost, know when to hand off.
3. **Cloud turned a purchase into a meter.** A building for capex and a utility meter for opex. Capex spreads cost over years. Opex hits the month of use. Section 1 has the detail.
4. **Capitalized cost waits on the balance sheet.** Four steps: cost, asset, useful life, P&L expense. The asset step is the one to remember.
5. **Self-check 1.** The $600K, three year question. Reveal shows $200K a year, a $400K asset after year 1, and the $400K year 1 difference.
6. **The asset steps down $200K a year.** A stacked staircase chart of the $600K example. It is Illustrative.
7. **Part 2 divider.** Moves from the concept to Datadog's real filing.
8. **$85.8M.** Datadog's FY2025 capitalized software development cost, up from $60.8M. Confirmed from the cash flow statement.
9. **One cost shows up on all three statements.** Cash flow ($85.8M investing), balance sheet ($329.1M gross), then amortization in cost of revenue and sales and marketing.
10. **A longer life means a smaller yearly charge.** Datadog moved from two to three years. The drawing is Illustrative and has no dollar figures because the 10-K gives none.
11. **The new ASU moves the starting line.** Old project stages versus one threshold: funded and completion probable. Dates are in the caption.
12. **Controllers ask whether it survives an audit.** How a CFO or controller hears "we capitalize engineering labor." Labeled Inference.
13. **Recognize the topic, then hand off.** You spot it and ask questions. Their finance team decides. No accounting advice.
14. **Six terms.** Capex, opex, capitalization, amortization, ASC 350-40, ASU 2025-06.
15. **Self-check 2.** The hypothetical $90M, two year versus three year life. Answer $15M.
16. **Self-check 3.** Which cost is possibly capitalizable. Answer C.
17. **Resources.** Four links, listed below.
18. **Recap.** Three takeaways and a pointer to this document.

## 9. Editorial notes

- Background only. The capitalization talk track is SE leadership's and is not drafted here.
- Trimmed to fit 20 minutes. Cut as optional: the Section 174 tax discussion, ASC 985-20 detail and the supplemental stock-based compensation row.
- The ASU 2025-06 issue month comes from FASB's news release dated September 18, 2025.
- Self-check 2 is hypothetical. The slide drawings for the useful life change and the ASU stages are simplified illustrations.
- Statements about how CFOs and controllers think are Inference. CloudZero finance should confirm them.

## Sources

Link check run with `curl` and a browser-style user agent. Pages marked "blocks bots" returned 402 or 403 to curl but come from the module's source list, so we kept them. None returned 404.

**Primary sources**

- Datadog, Inc., Form 10-K for FY2025, SEC EDGAR: [ddog-20251231.htm](https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm). See Note 2, "Internal-Use Software Development Costs," Note 5, and the cash flow statement. Returns 403 to a generic browser user agent and 200 with a declared client name. Read Nov 5 2026.
- FASB, ASU 2025-06, Intangibles, Goodwill and Other, Internal-Use Software: [FASB document](https://www.fasb.org/page/document?pdf=ASU+2025-06.pdf&title=Accounting+Standards+Update+2025-06%E2%80%94Intangibles%E2%80%94Goodwill+and+Other%E2%80%94Internal-Use+Software). Blocks bots (403).
- FASB news release, "FASB Issues Standard That Makes Targeted Improvements to Internal-Use Software Guidance," September 18, 2025. Read Nov 5 2026 (no stable link verified; fasb.org blocks bots).

**Firm and reference guides**

- Baker Tilly, [Modernizing software accounting: ASU 2025-06](https://www.bakertilly.com/insights/modernizing-software-accounting-asu-2025-06). Status 200.
- Deloitte DART, [ASC 350-40](https://dart.deloitte.com/USDART/home/codification/assets/asc350-40). Status 200.
- Deloitte DART, [ASC 985-20](https://dart.deloitte.com/USDART/home/codification/revenue/asc985-20). Listed in the course outline. Its page title is generic, so we did not check it deeply.
- Deloitte DART, [Software costs roadmap](https://dart.deloitte.com/USDART/home/publications/roadmap/software-costs). Extra source. Status 200.
- Corporate Finance Institute, [CapEx vs OpEx](https://corporatefinanceinstitute.com/resources/accounting/capex-vs-opex/). Status 200.
- Corporate Finance Institute, [Amortization](https://corporatefinanceinstitute.com/resources/accounting/amortization/). Extra source. Status 200.
- Investopedia, [Capitalization](https://www.investopedia.com/terms/c/capitalization.asp). Blocks bots (402).
- Investopedia, [Amortization](https://www.investopedia.com/terms/a/amortization.asp). Blocks bots (402).

**Dropped**

- PwC Viewpoint, KPMG and EY guesses for ASU 2025-06 returned 404 and are not used.
