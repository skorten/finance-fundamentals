# Module 1 companion: The three financial statements

**Status:** Draft. Accuracy review by CloudZero finance pending.
**Time:** about 10 minutes for the deck, plus about 15 minutes with this document.
**Audience:** CloudZero Sales Engineers who sell to CFOs, controllers and FP&A.
**Running example:** Datadog, Inc., Form 10-K for the fiscal year ended December 31, 2025 (FY2025), filed with the SEC. All Datadog figures are in US dollars and come from that filing, as recorded in the course source page (read on Nov 4 2026).

**Evidence labels used here**

- **Confirmed:** comes from a primary source such as the 10-K or an official SEC page.
- **Unconfirmed:** one source only, or a vendor claim we cannot check.
- **Inference:** our own reasoning from confirmed facts. Finance should check it.

Every Datadog number below is Confirmed. Our own arithmetic on those numbers (ratios and margins) is marked as "our math". This module has no customer story, because it is a foundation module.

---

## 1. Learning goals

After this module you should be able to:

1. Name the three financial statements and say which question each one answers.
2. Find revenue, cost of revenue, gross profit and operating expenses in a real 10-K.
3. Explain why profit and cash are different numbers.

---

## 2. The big picture: three statements, three questions

A public company reports three core statements. Each one answers a different question, and a CFO uses each for a different job.

| Statement | Question it answers | Time frame | A CFO uses it for |
| --- | --- | --- | --- |
| Income statement (P&L) | Did the company make money? | A period, such as a year | Margins |
| Balance sheet | What does the company own and owe? | One date | Assets, debt, capitalized costs |
| Cash flow statement | Where did the cash come from and go? | A period | Cash generation and runway |

Datadog does not use the name "income statement". Its filing calls it the **consolidated statement of operations**. Same thing, different label. When you open a 10-K, look for that title.

The three statements link together. Net income from the income statement is the starting line of the cash flow statement. The ending cash balance from the cash flow statement appears on the balance sheet. You do not need to master those links yet. You only need to know they exist, so you do not treat the three as separate documents.

---

## 3. The income statement: did the company make money this year?

### Datadog FY2025

| Line item (FY2025) | Amount |
| --- | --- |
| Revenue | $3,427.2M |
| Cost of revenue | $687.0M |
| Gross profit | $2,740.2M |
| Total operating expenses | $2,784.6M |
| Operating loss | ($44.4M) |
| Net income | $107.7M |

### The math, step by step

1. **Gross profit** is revenue minus cost of revenue: $3,427.2M − $687.0M = **$2,740.2M**.
2. **Gross margin** is gross profit divided by revenue: $2,740.2M ÷ $3,427.2M = 0.7996, or about **80%** (our math).
3. **Operating income** is gross profit minus total operating expenses: $2,740.2M − $2,784.6M = **−$44.4M**. That is an operating loss.
4. **Net income** is operating income plus other income, net, minus the provision for income taxes: −$44.4M + $171.4M − $19.3M = **$107.7M**.

Check the last step: −44.4 + 171.4 = 127.0, and 127.0 − 19.3 = 107.7. It matches the filing.

### Why a loss from operations still ended in net income

Datadog had an operating loss and still reported net income. The gap is $171.4M of other income, net. The filing shows this as mostly interest income and other income. A $19.3M provision for income taxes then took some of it back.

A CFO reads both lines for different reasons:

- **Operating income** shows whether the core business covers its own costs.
- **Net income** includes everything else, such as interest earned on cash.

Neither line is "the real one". Look at both.

### Two ratios worth knowing (our math)

- Operating margin: −$44.4M ÷ $3,427.2M = about −1.3%.
- Net margin: $107.7M ÷ $3,427.2M = about 3.1%.

Module 2 goes deep on gross margin and cost of revenue. For now, just find the three lines (revenue, cost of revenue, gross profit) and see how they connect.

### Where cost of revenue fits

Cost of revenue is the direct cost of delivering what the company sold. Operating expenses are the costs of running the business that are not direct delivery. The line between them is why gross profit and operating income are two separate numbers.

---

## 4. The balance sheet: what does the company own and owe today?

As of December 31, 2025, Datadog reported:

| Item | Amount |
| --- | --- |
| Total liabilities | $2,911.6M |
| Total stockholders' equity | $3,732.2M |
| Total liabilities and stockholders' equity | $6,643.8M |
| Total assets (equal to the line above) | $6,643.8M |

### The math

The balance sheet always balances. The rule is:

**Assets = Liabilities + Equity**

Check it: $2,911.6M + $3,732.2M = $6,643.8M. Total assets therefore also equal $6,643.8M.

Read it as a story. The company owns $6,643.8M of things. It got the money to buy them in two ways: it owes $2,911.6M to others (liabilities), and the rest, $3,732.2M, belongs to shareholders (equity).

### One date, not a period

The income statement covers a stretch of time. The balance sheet is a snapshot of one day. That is why a balance sheet number can look very different a month later.

### Where capitalized costs live

The balance sheet is where capitalized costs sit as assets before they are expensed. Module 3 covers that topic. For now, remember only this: some costs do not hit the income statement right away. They sit on the balance sheet first and move to the income statement over time.

---

## 5. The cash flow statement: where did the cash actually go?

### Datadog FY2025

| Line item (FY2025) | Amount |
| --- | --- |
| Net cash provided by operating activities | $1,050.1M |
| Cash used in investing activities | ($1,334.5M) |
| Cash used in financing activities | ($572.5M) |

### The three sections

- **Operating activities:** cash from running the business day to day.
- **Investing activities:** cash spent on or received from long-term assets and investments.
- **Financing activities:** cash from raising money or returning it to investors and lenders.

Datadog generated $1,050.1M from operations. It used more cash than that in investing ($1,334.5M) and used $572.5M in financing. We do not add these into a single net change on the slide. The filing may include other items, such as currency effects, and the deck does not claim a total.

### Free cash flow

Datadog also reports free cash flow of $914.7M. The math, from the filing's reconciliation:

$1,050.1M − $49.6M (purchases of property and equipment) − $85.8M (capitalized software development costs) = **$914.7M**.

Check it: 49.6 + 85.8 = 135.4, and 1,050.1 − 135.4 = 914.7.

Free cash flow is a **non-GAAP measure**. That means the company defines it, and it is not one of the three audited statements. The deck labels it "Non-GAAP" for that reason. Other companies may define free cash flow differently, so always check the definition before comparing.

---

## 6. Why profit and cash are different numbers

Operating cash flow ($1,050.1M) is roughly ten times net income ($107.7M). Our math: 1,050.1 ÷ 107.7 = 9.75.

The reason is **accrual accounting**. Under accrual accounting, a company records revenue and costs when they are earned or used. The date cash moves can be earlier or later. Two examples from Datadog's FY2025 filing explain most of the gap.

### Example 1: stock-based compensation

Stock-based compensation was $750.7M in FY2025, across all expense lines. It reduces net income because it is a real expense. It does not use cash, because the company pays employees in stock instead. So the cash flow statement adds it back.

### Example 2: deferred revenue

Deferred revenue is cash collected before the service is delivered. The customer has paid, but the company has not yet earned the revenue. The cash arrives now. The revenue shows up on the income statement later. In FY2025, deferred revenue added $273.3M to operating cash flow.

### A caution about adding these up

Do not add $750.7M and $273.3M to $107.7M and expect to reach $1,050.1M. Many other items sit in the reconciliation, and some go the other way. These two are the main examples, not a full bridge. The deck does not draw a bridge for that reason.

### A simple illustration

*Illustrative, not Datadog data.* A customer pays $120,000 on January 1 for a 12-month contract. Cash in on January 1: $120,000. Revenue on the income statement in January: $10,000 ($120,000 ÷ 12). The other $110,000 waits as deferred revenue and turns into revenue month by month. Cash is far ahead of profit in month one. By December, the revenue has caught up.

---

## 7. How a CFO hears it

*Inference:* the CFO uses each statement for a different job. The income statement shows margins. The cash flow statement shows runway and cash generation. The balance sheet shows assets, debt and capitalized costs.

So when an SE says a customer will "save money," the CFO's next question is: **which line moves, and on which statement?**

*Inference:* a lower cloud bill for production workloads usually shows up in cost of revenue on the income statement. It also shows up in operating cash flow, because less cash goes out. Module 2 covers that line in depth.

Why the CFO asks this:

- A saving that lands in cost of revenue lifts gross profit and gross margin. Investors watch both.
- A saving that lands in operating expenses lifts operating income but not gross margin.
- A saving in one-time spend may not repeat next year. The CFO wants to know whether it is a lasting change.

What to do with this: before you say "save," know which line you mean. If you are not sure, say so and ask the controller. That question is a good one. It shows you understand how the CFO reads the numbers.

---

## 8. Caveats

- **Names differ.** The "income statement" may be called the statement of operations, statement of income or P&L. The balance sheet may be called the statement of financial position.
- **Other income is not a business result.** Interest income depends on how much cash the company holds and on rates. Read operating income and net income together.
- **Free cash flow is not audited.** It is non-GAAP. The company chooses the definition.
- **The balance sheet is one day.** Do not compare a balance sheet number to a full year of revenue without saying so.
- **Where a cost lands is each company's policy.** Ask the controller which line a cost uses. Do not assume.
- **Evidence status.** All Datadog figures were read from the 10-K and are Confirmed. The CFO reasoning in section 7 is Inference.

---

## 9. Key terms (glossary for this module)

- **10-K:** a public company's audited annual report, filed with the SEC.
- **Accrual accounting:** revenue and costs are recorded when they are earned or used. The date cash moves can be earlier or later.
- **Assets:** what the company owns.
- **Balance sheet:** what the company owns (assets), what it owes (liabilities) and what is left for shareholders (equity) on a single date. Assets always equal liabilities plus equity.
- **Cash flow statement:** where cash came from and where it went during the period, split into operating, investing and financing activities.
- **Cost of revenue (COGS):** the direct cost of delivering what the company sold.
- **Deferred revenue:** cash collected before the service is delivered.
- **Equity:** what is left for shareholders after liabilities.
- **Financing activities:** cash from raising money or returning it to investors and lenders.
- **Free cash flow:** operating cash flow minus purchases of property and equipment and capitalized software costs, in Datadog's definition. A non-GAAP measure.
- **GAAP:** generally accepted accounting principles, the US accounting rules.
- **Gross margin:** gross profit divided by revenue, as a percent.
- **Gross profit:** revenue minus cost of revenue.
- **Income statement (P&L):** revenue earned minus costs incurred over a period, ending in net income or net loss. Datadog calls it the consolidated statement of operations.
- **Investing activities:** cash spent on or received from long-term assets and investments.
- **Liabilities:** what the company owes.
- **Net income:** the bottom line of the income statement, after all costs, other income and taxes.
- **Non-GAAP:** a measure the company defines itself. It is not one of the audited statements.
- **Operating activities:** cash from running the business day to day.
- **Operating expenses:** costs of running the business that are not direct delivery, such as R&D, sales and marketing, and G&A.
- **Operating income (loss):** gross profit minus operating expenses.
- **Stock-based compensation:** pay in the form of company stock. An expense that does not use cash.

---

## 10. Self-check exercise (about 5 minutes)

Open the Datadog FY2025 10-K and find the consolidated statements of operations. Answer these three questions before you read the answers.

1. What were revenue, cost of revenue and gross profit for FY2025?
2. Did Datadog make an operating profit in FY2025?
3. Which was larger in FY2025, net income or net cash provided by operating activities?

### Answers

1. Revenue was $3,427.2M, cost of revenue was $687.0M, and gross profit was $2,740.2M. Gross profit is revenue minus cost of revenue: $3,427.2M − $687.0M = $2,740.2M. (The deck asks only for gross profit, with three choices: $3,427.2M, $2,740.2M and $687.0M. The answer is $2,740.2M.)
2. No. Total operating expenses ($2,784.6M) were larger than gross profit ($2,740.2M), so Datadog reported an operating loss of $44.4M. Other income, mostly interest, brought it to net income of $107.7M.
3. Operating cash flow was larger: $1,050.1M against net income of $107.7M. Non-cash charges such as stock-based compensation, and cash collected in advance as deferred revenue, explain most of the difference.

---

## 11. Slide-by-slide guide

1. **Title.** Sets the promise: find revenue, costs and cash in a real 10-K. Runs about 10 minutes.
2. **Learning goals.** Three outcomes: name the statements, find the key lines, explain profit versus cash.
3. **Three statements answer three questions.** Three documents, each with its question. Notes the period versus one date difference. The caption points out that Datadog calls the income statement its statement of operations.
4. **The balance sheet always balances.** A balance scale with assets on one side and liabilities plus equity on the other, using Datadog's December 31, 2025 numbers. Mentions that capitalized costs sit here, which sets up Module 3.
5. **Operating costs edged past gross profit.** A waterfall from revenue through cost of revenue to gross profit, then operating expenses, ending in a $44.4M operating loss. The callout shows the 80% gross margin.
6. **Other income turned a loss into profit.** A bridge from the operating loss to net income: plus $171.4M other income, minus $19.3M taxes, equals $107.7M. The chart crosses zero on purpose.
7. **Cash flow shows where cash really moved.** Cash flows in from operations and out through investing and financing. The widths of the pipes are drawn to scale.
8. **Cash from operations dwarfed net income.** Net income, operating cash flow and free cash flow side by side. The callout says operating cash flow is about ten times net income.
9. **Two reasons cash beat profit.** Stock pay ($750.7M, an expense with no cash out) and deferred revenue ($273.3M, cash in before the service). These are examples, not a full bridge.
10. **CFOs ask which statement a saving hits.** "How a CFO hears it." You say "we will save you money." The CFO hears "which line moves, and on which statement?" Labeled Inference.
11. **A lower cloud bill shows up twice.** A three step flow: lower production cloud bill, lower cost of revenue on the income statement, less cash out in operating cash flow. Labeled Inference.
12. **Six terms you will hear on calls.** Income statement, balance sheet, cash flow statement, 10-K, accrual accounting and free cash flow.
13. **Divider: test yourself.** Sends you to the 10-K for three questions.
14. **Self-check 1.** Gross profit. Reveal shows the subtraction.
15. **Self-check 2.** Operating profit or loss. Reveal shows that operating expenses beat gross profit.
16. **Self-check 3.** Net income versus operating cash flow. Reveal gives the two numbers and the reason.
17. **Resources.** Four links: the SEC guide, Investor.gov on reading a 10-K, CFI on the three statements and the Datadog filing.
18. **Recap.** Three takeaways and a pointer to this document.

---

## 12. Sources

All links were opened with curl on Nov 12 2026 using a declared browser style user agent. Status codes are noted. A 403 or 402 means the site blocks bots, not that the page is missing. No link returned 404.

**From the course source page and outline**

- SEC, [Beginners' Guide to Financial Statements](https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements). Official SEC explainer. Returned 403 to curl here (SEC blocks generic bots). Kept because the course source lists it and an earlier check on Nov 3 2026 reached it with a declared user agent.
- Investor.gov, [How to Read a 10-K](https://www.investor.gov/introduction-investing/getting-started/researching-investments/how-read-10-k). Status 200.
- Corporate Finance Institute, [The Three Financial Statements](https://corporatefinanceinstitute.com/resources/accounting/three-financial-statements/). Status 200.
- Datadog, Inc., [Form 10-K for the fiscal year ended December 31, 2025](https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm), SEC EDGAR. Consolidated statements of operations, consolidated balance sheets, consolidated statements of cash flows, and the free cash flow reconciliation in Management's Discussion and Analysis. Returned 403 to curl here (SEC bot block). Every Datadog figure in this module comes from this filing, as read for the course source page on Nov 4 2026.
- Khan Academy, [Core Finance](https://www.khanacademy.org/economics-finance-domain/core-finance) (optional extra reading from the outline). Status 200.

**Extra free sources**

- Corporate Finance Institute, [Accrual Accounting](https://corporatefinanceinstitute.com/resources/accounting/accrual-accounting/). Status 200. Backs section 6.
- Corporate Finance Institute, [Deferred Revenue](https://corporatefinanceinstitute.com/resources/accounting/deferred-revenue/). Status 200. Backs the deferred revenue example.
- Investopedia, [Income Statement](https://www.investopedia.com/terms/i/incomestatement.asp), [Balance Sheet](https://www.investopedia.com/terms/b/balancesheet.asp), [Cash Flow Statement](https://www.investopedia.com/terms/c/cashflowstatement.asp), [Accrual Accounting](https://www.investopedia.com/terms/a/accrualaccounting.asp) and [Free Cash Flow](https://www.investopedia.com/terms/f/freecashflow.asp). Each returned 402 to curl (Investopedia blocks bots). They are standard pages that open in a browser. Open them once before you share them.

**Review status:** Draft. Accuracy review by CloudZero finance pending.
