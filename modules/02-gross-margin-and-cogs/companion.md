# Module 2 companion: Gross margin and COGS

Status: Draft. Accuracy review by CloudZero finance pending.

Time: about 20 minutes. Audience: CloudZero Sales Engineers. Running example: Datadog, Inc., Form 10-K for the fiscal year ended December 31, 2025 (FY2025). All Datadog figures come from that filing, in US dollars. [Read the filing on SEC EDGAR](https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm).

Evidence labels used in this document:

- **Confirmed**: stated in a public filing or other primary source.
- **Unconfirmed**: a vendor or press claim we cannot verify.
- **Inference**: our reasoning from confirmed facts. Finance should check it.

The deck is `index.html` in this folder. This document holds everything the slides leave out.

---

## 1. Learning goals

After this module you should be able to:

1. Explain why a SaaS company's cloud hosting and AI inference bills usually count as cost of revenue (COGS) and sit above the gross profit line.
2. Calculate gross margin from a 10-K.
3. Show how a change in cloud cost moves gross margin.

---

## 2. What goes into cost of revenue

**Confirmed.** Datadog's FY2025 10-K says cost of revenue "primarily consists of expenses related to providing our products to customers, including payments to our third-party cloud infrastructure providers for hosting our software." The filing also lists:

- personnel costs for customer experience and technical operations staff
- payments to outside service providers
- payment processing fees
- "amortization of capitalized internally developed software costs and acquired developed technology"
- allocated overhead

See "Cost of Revenue" under Management's Discussion and Analysis in the [10-K](https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm).

Think of it this way. A SaaS customer pays for a running product. The production environment is the place where that product runs. So the cloud bill for production is part of delivering what the customer bought. That is why it lands in cost of revenue.

Software companies usually say "cost of revenue." Other industries say "cost of goods sold" (COGS). Both mean the direct cost of delivering what was sold. This course uses the two terms as one idea. Read more on [Investopedia: Cost of Goods Sold](https://www.investopedia.com/terms/c/cogs.asp) and [CFI: Cost of goods sold](https://corporatefinanceinstitute.com/resources/accounting/cost-of-goods-sold-cogs/).

### The dev and test caveat

**Inference.** Cloud spend for development and test environments is often booked to research and development (R&D) instead. R&D is an operating expense, so it sits below gross profit. Each company sets its own policy for this split. The 10-K text we read does not say how Datadog splits it. So the safe move on a call is to ask the prospect's controller: "How do you classify cloud spend for dev and test?"

### The AI inference caveat

**Inference.** If a customer triggers an AI model call each time they use a feature, the model bill is a direct cost of delivering that feature. A typical SaaS company would book it to cost of revenue. The Datadog 10-K text we read does not name AI inference, so confirm the prospect's policy rather than assume it.

---

## 3. Datadog's gross margin, FY2024 and FY2025

**Confirmed.** From the consolidated statements of operations in the 10-K.

| Line item | FY2025 | FY2024 |
| --- | --- | --- |
| Revenue | $3,427.2M | $2,684.3M |
| Cost of revenue | $687.0M | $515.5M |
| Gross profit | $2,740.2M | $2,168.7M |
| Gross margin (as reported, rounded) | 80% | 81% |

### The math, step by step

Gross margin = (Revenue − Cost of revenue) ÷ Revenue.

- FY2025: ($3,427.2M − $687.0M) ÷ $3,427.2M = $2,740.2M ÷ $3,427.2M = 0.7995, or **80.0%**.
- FY2024: ($2,684.3M − $515.5M) ÷ $2,684.3M = $2,168.7M ÷ $2,684.3M = 0.8079, or **80.8%**.

Both years round to the percentages in the filing. FY2024 rounds to 81% and FY2025 to 80%.

### What changed

Revenue grew 28%. Cost of revenue grew 33%, an increase of $171.4M. The filing says this increase "was primarily due to an increase of $149.8 million in third-party cloud infrastructure hosting and software costs and an increase of $18.2 million in personnel costs." It also says gross margin "decreased by 1%" over the year.

Splitting the $171.4M:

- Third party cloud infrastructure hosting and software costs: $149.8M (about 87% of the increase)
- Personnel costs: $18.2M (about 11%)
- Everything else, by our subtraction ($171.4M − $149.8M − $18.2M): $3.4M (about 2%)

The $3.4M is our subtraction, not a figure the filing states. The slide labels it that way.

The rule: when cost of revenue grows faster than revenue, gross margin falls. In Datadog's case the filing names cloud infrastructure as the main driver.

Read next: [Investopedia: Gross Margin](https://www.investopedia.com/terms/g/grossmargin.asp), [CFI: Gross margin](https://corporatefinanceinstitute.com/resources/accounting/gross-margin/), and [a16z: 16 Startup Metrics](https://a16z.com/16-startup-metrics/).

---

## 4. Moving the cloud bill: an illustrative sensitivity

This example is **Illustrative**. It uses made up round numbers so the arithmetic is easy to follow. It is not Datadog.

Start with a company that has:

- Revenue: $10.0M
- Cloud hosting: $1.8M
- Support and other COGS: $1.0M
- Total COGS: $2.8M
- Gross margin: ($10.0M − $2.8M) ÷ $10.0M = 72.0%

Now change only the cloud bill and hold everything else fixed.

| Cloud cost change | Cloud cost | Total COGS | Gross margin | Change in points |
| --- | --- | --- | --- | --- |
| −20% | $1.44M | $2.44M | 75.6% | +3.6 |
| −10% | $1.62M | $2.62M | 73.8% | +1.8 |
| +10% | $1.98M | $2.98M | 70.2% | −1.8 |
| +20% | $2.16M | $3.16M | 68.4% | −3.6 |

Why 1.8 points per 10%? A 10% change in $1.8M is $0.18M. That is 1.8% of $10.0M revenue, so 1.8 points. The rule of thumb: **points of margin moved = change in COGS ÷ revenue**.

Caveats:

- This holds revenue constant. In real life, a cloud change might come with a change in product performance or price.
- It only works if the cloud spend sits in COGS. If it sits in R&D, gross margin does not move at all. Operating margin still does.

---

## 5. Self-check exercise 1: calculate gross margin

Use the table in section 3. Calculate Datadog's gross margin for FY2025 and FY2024 to one decimal place. Then say how many basis points it moved.

**Answer**

- FY2025: $2,740.2M ÷ $3,427.2M = 80.0%.
- FY2024: $2,168.7M ÷ $2,684.3M = 80.8%.
- The change is about 80 basis points down (80.8% to 80.0%). The 10-K rounds this to a 1% decrease (81% to 80%).

A basis point is one hundredth of a percentage point. So 0.8 points is 80 basis points.

The deck version (slide 14) asks only for the FY2025 gross margin. Wrong answers: 20.0% is the cost of revenue share ($687.0M ÷ $3,427.2M). 125.0% flips the ratio ($3,427.2M ÷ $2,740.2M).

---

## 6. Self-check exercise 2: move the cloud bill

**Hypothetical what-if.** The 10-K does not disclose Datadog's total cloud hosting cost. This exercise uses the disclosed $149.8M increase in third party cloud infrastructure hosting and software costs. That increase is not the total hosting bill.

Suppose the $149.8M increase had not happened, and everything else stayed the same. What would FY2025 cost of revenue, gross profit and gross margin have been?

**Answer**

- Cost of revenue: $687.0M − $149.8M = $537.2M.
- Gross profit: $3,427.2M − $537.2M = $2,890.0M.
- Gross margin: $2,890.0M ÷ $3,427.2M = 84.3%, about 430 basis points above the reported 80.0%.

This what-if holds revenue and all other costs constant to isolate the arithmetic. It does not show that the $149.8M was avoidable. It does not estimate achievable savings. The 10-K does not establish what revenue would have been at a lower cost. Never present this number to a prospect as a savings claim.

---

## 7. Self-check exercise 3: classify the cost

For each item, decide whether a typical SaaS company would book it to cost of revenue or to operating expenses. Assume the company follows a policy like the one Datadog describes.

1. Cloud compute that runs the production application for customers.
2. AI model inference calls made each time a customer uses an AI feature in the product.
3. Salaries of the sales team.
4. Cloud compute for an engineering test environment.

**Answer**

1. Cost of revenue. It is a direct cost of delivering the product.
2. Cost of revenue, for the same reason. **Inference:** the 10-K text does not name AI inference specifically, so confirm the prospect's policy.
3. Operating expenses (sales and marketing).
4. Usually operating expenses (R&D). **Inference:** policies vary, so ask the controller.

The deck version (slide 16) asks which of three items usually lands in operating expenses. The answer is the engineering test environment.

---

## 8. How a CFO hears it

Gross margin is a headline number for a SaaS company. Investors use it to judge how much of each revenue dollar is left to fund R&D, sales and profit.

One point of gross margin on $3.4B of revenue is about $34M of gross profit. The math: 1% × $3,427.2M = $34.3M.

**Inference.** A CFO who hears "we cut your cloud bill" has to work out which line moves, by how much, and when. A CFO who hears "we can show which product or customer is pulling your gross margin down" hears a number they already report. The second statement ties your product to the metric they defend to the board.

Practical moves:

- Ask where production cloud and AI inference are booked.
- Ask how dev and test spend is classified.
- Translate any savings claim into margin points using "change in COGS ÷ revenue."
- Name the product or customer behind the margin, not just the total bill.

Finance should confirm the CFO reasoning on this page. It is inference, not a survey result.

---

## 9. Story: Drift (Unconfirmed, vendor-reported)

The CloudZero demo story bank frames the Drift story as "Your gross margin has a hidden line item." That is a CloudZero demo framing, not a quote from Drift.

**Unconfirmed, vendor-reported.** CloudZero's customer page, [How Drift improved their COGS by $2.4 million](https://www.cloudzero.com/customers/drift/), reports a reduction of up to $2.4 million a year and an 80% reduction in the cost of the top product feature. We have not checked these figures against any Drift financial filing or an independent source. Use the story to illustrate how cloud cost connects to COGS. Do not present it as a verified result.

---

## 10. Glossary for this module

- **Basis point:** one hundredth of a percentage point. A move from 80.0% to 80.5% is 50 basis points.
- **COGS / cost of revenue:** the direct cost of delivering what the company sold. Software companies usually say "cost of revenue."
- **Dev and test environment:** cloud used to build and test the product, not to serve paying customers. Often booked to R&D.
- **Gross margin:** gross profit divided by revenue, shown as a percentage.
- **Gross profit:** revenue minus cost of revenue.
- **G&A:** general and administrative costs, such as finance, legal and HR.
- **Operating expenses (opex):** the costs of running the business outside direct delivery. The usual lines are R&D, sales and marketing, and G&A.
- **Production environment:** the cloud environment that serves paying customers.
- **R&D:** research and development, the cost of building the product.

---

## 11. Slide by slide guide

1. **Title.** Sets the promise: turn a cloud bill into margin points a CFO already tracks. About 20 minutes.
2. **Learning goals.** Three goals: explain COGS, calculate margin, move the bill. Match these to the self-checks at the end.
3. **Cloud that serves customers lands in COGS.** A drawing of one cloud bill splitting into COGS (production hosting, AI inference) and R&D (dev and test). Tagged Inference because the AI and dev and test placement depends on company policy.
4. **Gross margin formula.** The formula with Datadog FY2025 numbers: 80.0%. Confirmed from the 10-K.
5. **Datadog waterfall.** Revenue $3,427.2M, less cost of revenue $687.0M, leaves gross profit $2,740.2M. The call out shows 80.0%, down from 80.8%.
6. **What drove the cost increase.** One stacked bar splits the $171.4M increase into hosting and software ($149.8M), personnel ($18.2M) and other ($3.4M, our subtraction). Cost of revenue grew 33% against 28% revenue growth.
7. **Divider.** Moves from reading a 10-K to moving the bill.
8. **Sensitivity chart.** Illustrative. Each 10% change in cloud cost moves margin 1.8 points, starting from a 72% margin.
9. **Hypothetical what-if.** Datadog without the $149.8M increase would show 84.3%. Hypothetical, not a savings estimate.
10. **One point is worth $34M.** The size of one margin point at Datadog's revenue.
11. **How a CFO hears it.** "We cut your cloud bill" becomes "Which line moves, and what is a point worth?" Inference.
12. **Key terms.** COGS, gross profit, gross margin, OpEx, R&D, basis point.
13. **Drift story.** Vendor-reported figures with the Unconfirmed badge. A CloudZero demo framing, not a Drift quote.
14. **Self-check 1.** Calculate FY2025 gross margin. Reveal shows the math.
15. **Self-check 2.** The hypothetical what-if. Answer is 84.3%.
16. **Self-check 3.** Pick the cost that lands in opex. Answer is the test environment.
17. **Resources.** Datadog 10-K, Investopedia, a16z and CFI.
18. **Recap.** Three takeaways and a pointer to this document.

---

## 12. Caveats and limits

- The Datadog 10-K does not disclose total cloud hosting cost, only the increase. Never present the exercise 2 result as a savings estimate.
- Datadog's classification of dev and test spend is not stated in the text we read. The R&D placement is an inference about common practice.
- The 10-K rounds gross margin to whole percentages. Our one decimal figures come from the dollar amounts in the statements.
- The Drift figures come from CloudZero's own page. No independent source backs them.
- Statements about how a CFO thinks are inference.
- This module does not cover capitalization of software costs. That belongs to Module 3 and to SE leadership's talk track.

---

## Sources

Links were checked with curl on Nov 12 2026 using a declared browser style user agent. Status codes below.

Primary and course sources:

- Datadog, Inc., Form 10-K for the fiscal year ended December 31, 2025, SEC EDGAR: <https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm> (returned 403 to curl. sec.gov blocks generic bots. It is in the Notion source, so it stays. The outline records a 200 with a declared SEC style user agent.)
- Investopedia, Cost of Goods Sold (COGS): <https://www.investopedia.com/terms/c/cogs.asp> (returned 402 to curl. Investopedia blocks bots. It is in the Notion source, so it stays.)
- Investopedia, Gross Margin: <https://www.investopedia.com/terms/g/grossmargin.asp> (returned 402 to curl, same reason.)
- a16z, 16 Startup Metrics: <https://a16z.com/16-startup-metrics/> (200)
- CloudZero, How Drift improved their COGS by $2.4 million: <https://www.cloudzero.com/customers/drift/> (200. Vendor-reported, Unconfirmed.)
- CloudZero demo story bank, Oct 28 2026 (internal, Notion page 408c5db676d881318a07ca8ff3f5824e), for the Drift framing.

Extra free sources added for this module:

- Corporate Finance Institute, Gross margin: <https://corporatefinanceinstitute.com/resources/accounting/gross-margin/> (200)
- Corporate Finance Institute, Cost of goods sold (COGS): <https://corporatefinanceinstitute.com/resources/accounting/cost-of-goods-sold-cogs/> (200)
- Investor.gov, How to Read a 10-K: <https://www.investor.gov/introduction-investing/getting-started/researching-investments/how-read-10-k> (200)
- Corporate Finance Institute, The Three Financial Statements: <https://corporatefinanceinstitute.com/resources/accounting/three-financial-statements/> (200)
- SEC, Beginners' Guide to Financial Statements: <https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements> (403 to curl, sec.gov bot block. From the course outline, so it stays.)

Dropped: several other Investopedia URLs returned 402 and were not in the Notion source, so they were not added (basis point, operating expense, cost of revenue pages). None returned 404.
