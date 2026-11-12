# Module 4 companion: Unit economics and cost per customer

**Status:** Draft. Accuracy review by CloudZero finance pending.
**Time:** about 15 to 17 minutes with the deck. **Audience:** CloudZero Sales Engineers.
**Running example:** Datadog, Inc., Form 10-K for the fiscal year ended December 31, 2025 (FY2025). All Datadog figures come from that filing and are in US dollars.

Evidence labels used in this document:

- **Confirmed:** checked against a primary source, such as a public filing.
- **Unconfirmed:** one source only. Customer story figures are Unconfirmed, vendor-reported.
- **Inference:** our reasoning from confirmed facts. Finance should check it.
- **Illustrative / Hypothetical:** invented numbers used to teach the math. They are not data.

The deck keeps the slides short. This document holds the detail the slides leave out.

## Learning goals

After this module you should be able to:

1. Define a unit cost, such as cost per customer, per transaction or per AI request, and explain why finance wants it.
2. Calculate gross margin for a single customer and show how a change in usage moves it.
3. Explain why company-wide averages hide which customers are profitable.
4. Calculate a customer's lifetime value (LTV) on a gross-profit basis, and say why two LTV figures can only be compared when they use the same definition.

## Why finance wants unit costs

Total cost of revenue tells a CFO what delivery cost the company. It does not say which customers, products or features caused that cost. It also does not say whether each one is priced to cover it. FP&A uses unit costs for three jobs: to set prices, to forecast margin as the company grows, and to spot customers or products that cost more to serve than they pay.

The CFO's question is short: are we profitable on each customer, and is our price right?

A unit is whatever you choose to count. It can be a customer, a transaction, a product feature or an AI request. The unit cost is the total cost for a period divided by the number of units in that period. When the unit is a customer and you count the cost of delivering the service to that customer, you get the cost to serve.

LTV stretches the same question over time. This course always defines LTV on a gross-profit basis. That means anything that moves a customer's cost to serve also moves their LTV. A revenue-based LTV would not move at all when AI usage doubles at a flat price. The gross-profit version shows the damage.

## Worked example 1: one customer's margin (Hypothetical)

A customer pays $10K a month. Serving them costs $4K a month: $2.5K of cloud hosting and $1.5K of AI inference.

**Per-customer gross margin** = (customer revenue − customer cost to serve) ÷ customer revenue.

- Margin = ($10K − $4K) ÷ $10K = $6K ÷ $10K = **60%**.

### Usage doubles

The customer's AI usage doubles and the price stays the same. AI inference rises from $1.5K to $3.0K. Hosting stays at $2.5K.

- Cost to serve = $2.5K + $3.0K = $5.5K.
- Margin = ($10K − $5.5K) ÷ $10K = $4.5K ÷ $10K = **45%**.
- That is a fall of 15 percentage points. Slide 5 shows this as a stacked bar.

### The price that restores 60%

Price = cost ÷ (1 − target margin) = $5.5K ÷ 0.4 = **$13.75K a month**.

Check it: ($13.75K − $5.5K) ÷ $13.75K = $8.25K ÷ $13.75K = 60%.

### LTV on a gross-profit basis

LTV = monthly gross profit × expected lifetime in months. Assume the customer stays 36 months.

- Before: $6K × 36 = **$216K**.
- After the usage change, at the original $10K price: $4.5K × 36 = **$162K**.
- The drop is $54K.
- A revenue-based LTV reads $10K × 36 = $360K both times. It cannot see the change.

This is why the course insists on one definition. Companies define LTV in several ways. They may use revenue, contribution margin, or a version with churn and discounting built in. Two LTV figures, or two LTV:CAC ratios, are only comparable when they use the same definition. Ask which one the prospect's finance team uses.

## Worked example 2: shared servers, different customers (Hypothetical)

Three customers share one cluster that costs $30K a month. Usage data shows how much of the cluster each customer uses.

| Customer | Monthly price | Share of cluster usage | Allocated cost | Gross profit | Gross margin |
| --- | --- | --- | --- | --- | --- |
| A | $14K | 50% | $15K | −$1K | about −7% |
| B | $12K | 30% | $9K | $3K | 25% |
| C | $10K | 20% | $6K | $4K | 40% |
| All three | $36K | 100% | $30K | $6K | about 16.7% |

The math, line by line:

- A: 50% × $30K = $15K. ($14K − $15K) ÷ $14K = −$1K ÷ $14K = −7.1%.
- B: 30% × $30K = $9K. ($12K − $9K) ÷ $12K = 25%.
- C: 20% × $30K = $6K. ($10K − $6K) ÷ $10K = 40%.
- Blend: ($36K − $30K) ÷ $36K = $6K ÷ $36K = 16.7%.

Customer A pays the most, so A leads a revenue report. After allocation, A is the only customer losing money. The blended 16.7% hides that. This is the point of cost per customer.

Notice that the allocation rule drives the answer. Split the cluster evenly three ways, at $10K each, and A looks fine. Usage-based allocation is more honest because cost follows consumption. Ask prospects how they split shared costs today.

## Worked example 3: Datadog's average customer (Confirmed inputs, rough indicator)

The Datadog FY2025 10-K reports about 32,700 customers as of December 31, 2025. Dividing full-year figures by that count gives a company-wide average.

| FY2025 figure | Total | Per customer (÷ 32,700) |
| --- | --- | --- |
| Revenue | $3,427.2M | about $104.8K |
| Cost of revenue | $687.0M | about $21.0K |
| Gross profit | $2,740.2M | about $83.8K |

The math: $3,427.2M ÷ 32,700 = $104.8K. $687.0M ÷ 32,700 = $21.0K. $2,740.2M ÷ 32,700 = $83.8K. Gross margin is $2,740.2M ÷ $3,427.2M = 80%, the same figure as in Module 2.

The average conceals a great deal. The same 10-K reports about 4,310 customers with ARR of $100,000 or more, and they represent 90% of Datadog's ARR. The other roughly 28,390 customers account for about 10% of ARR.

- 4,310 ÷ 32,700 = about 13% of customers. That is our arithmetic, not a filing figure. The deck labels it that way.
- The remaining 28,390 customers are about 87%.

**Inference:** customers in those two groups differ widely in revenue, so they probably differ in cost to serve too. The 10-K does not report cost by customer. The filing cannot say which customers carry higher or lower margins.

Two cautions:

- The customer count is approximate and taken at year end. Revenue and cost cover the whole year. Treat the result as an indicator only.
- Cost of revenue includes items that do not vary with each customer's usage, such as allocated overhead and amortization of capitalized software (Module 3). A true cost to serve needs those shared costs allocated or set aside.

### Net retention

The 10-K reports a trailing 12-month dollar-based net retention rate of "about 120%" at December 31, 2025, compared with "high-110%'s" a year earlier. Dollar-based net retention is this year's ARR from a set of customers divided by last year's ARR from the same customers. Above 100% means existing customers are spending more.

Datadog defines annual run-rate revenue (ARR) as a company-defined measure of recurring revenue, annualized. Its 10-K says ARR is "not intended to be" a replacement for or forecast of revenue.

**Inference:** if usage grows faster than price, cost to serve per customer can rise faster than revenue per customer. That is why finance watches unit cost over time as well as at a point in time.

## How a CFO hears it

Unit cost connects directly to pricing and to gross margin. A CFO who knows the cost to serve each customer can tell whether a discount, a usage tier or an AI feature is profitable. Without it, pricing decisions rest on averages.

**Inference:** AI features make this more pressing, because inference cost scales with each customer's usage. A flat price on a feature whose cost grows with every request can turn a profitable customer into an unprofitable one. Worked example 1 is exactly that.

**Inference:** the useful framing for an SE is the CFO's own question: what does each customer cost, and does the price cover it? "We reduce your cloud bill" leaves the CFO to work out what changes for each customer and for margin. Lead with the margin question and the cloud bill follows.

Questions worth asking a finance buyer:

- Do you know gross margin by customer today, or only in total?
- How do you split shared infrastructure across customers?
- Which LTV definition does your team use?
- Has an AI feature changed any customer's margin since launch?

## Customer stories (Unconfirmed, vendor-reported)

Both stories come from the CloudZero demo story bank (Oct 28 2026), which draws on CloudZero's own customer pages. Every figure is vendor-reported and Unconfirmed. Use them as illustrations. Do not present them as independently verified results.

**NinjaCat.** Story bank hook: "Seven AI and cloud bills, one answer: what does each customer cost us, and is our price right?" CloudZero's customer page describes NinjaCat as a 60-person SaaS company. It reports a "40% reduction in cloud spend," "7 AI and cloud providers ingested" and "Unit costs used to refine pricing strategy." *Unconfirmed, vendor-reported.* These figures have not been checked against any NinjaCat source or an independent source.

**Beamable.** Story bank hook: "Same servers, different customers. Which ones lose you money?" CloudZero's customer page says Beamable "measured cost per service per game per customer" and "refined customer pricing models." The page gives no dollar figures. *Unconfirmed, vendor-reported.* Worked example 2 is a hypothetical calculation of this situation, not Beamable data.

## Self-check questions and answers

### Self-check 1: one customer's margin

A customer pays $10K a month. Serving them costs $4K a month: $2.5K of cloud hosting and $1.5K of AI inference.

1. What is this customer's gross margin?
2. The customer's AI usage doubles and the price stays the same. What is the new gross margin?
3. What monthly price would restore a 60% gross margin at the new usage?
4. Using the gross-profit LTV definition, and assuming the customer stays 36 months, what is the LTV before and after the usage change at the original $10K price?

**Answers**

1. ($10K − $4K) ÷ $10K = 60%.
2. AI inference rises to $3K, so cost to serve is $5.5K. Gross margin is ($10K − $5.5K) ÷ $10K = 45%, a fall of 15 percentage points.
3. Price = $5.5K ÷ 0.4 = $13.75K a month.
4. Before: $6K × 36 = $216K. After: $4.5K × 36 = $162K, a $54K drop. A revenue-based LTV reads $360K both times, which is why comparisons need matching definitions.

The deck's multiple choice slide asks question 2. The right answer is 45%. The distractors are 50% (a common guess) and 30%.

### Self-check 2: shared servers, different customers

Three customers share one cluster that costs $30K a month.

| Customer | Monthly price | Share of cluster usage |
| --- | --- | --- |
| A | $14K | 50% |
| B | $12K | 30% |
| C | $10K | 20% |

1. Allocate the $30K by usage share. What is each customer's cost to serve and gross margin?
2. What is the gross margin across all three customers?
3. Which customer would look most valuable on a revenue report, and what does the allocation show?

**Answers**

1. A costs $15K against $14K of revenue: a $1K monthly loss, a gross margin of about −7%. B costs $9K against $12K, a 25% margin. C costs $6K against $10K, a 40% margin.
2. Revenue is $36K and cost is $30K, so the blended gross margin is $6K ÷ $36K, about 16.7%.
3. A pays the most and would lead a revenue report. After allocation, A is the only customer losing money. The blended 16.7% figure hides that, which is why finance asks for cost per customer.

## Glossary

- **Unit economics:** the revenue and cost of one unit of the business. The unit can be a customer, a transaction, a product feature or an AI request.
- **Unit cost:** total cost for a period divided by the number of units in that period.
- **Cost to serve:** the cost of delivering the service to one customer, including hosting and AI usage.
- **Per-customer gross margin:** a customer's revenue minus that customer's cost to serve, divided by the customer's revenue.
- **Contribution margin:** revenue minus variable costs, per unit or in total. Variable costs rise and fall with usage.
- **Annual run-rate revenue (ARR):** a company-defined measure of recurring revenue, annualized.
- **Dollar-based net retention:** this year's ARR from a set of customers divided by last year's ARR from the same customers. Above 100% means existing customers are spending more.
- **CAC:** customer acquisition cost, the sales and marketing spend needed to win one new customer.
- **LTV (gross-profit basis):** the gross profit expected from one customer over the whole relationship: monthly gross profit × expected lifetime in months.
- **Allocation:** splitting a shared cost across customers, teams or products by a rule, such as usage share.
- **Blended margin:** the margin across a group of customers taken together. It can hide losing customers.

### About CAC and the 3x rule

David Skok writes that "the best SaaS businesses have a LTV to CAC ratio that is higher than 3." His LTV method lives in a separate definitions article linked from his SaaS Metrics 2.0 page. Check that it matches yours before holding a ratio up against his 3x. This course's LTV is gross profit per month times lifetime in months. Skok's may differ, for example by including churn.

## Slide-by-slide guide

1. **Title.** Sets the question the module answers: what does each customer cost? The promise is to turn a cloud bill into profit per customer, the way a CFO asks.
2. **Learning goals.** Three goals: define unit cost, calculate one customer's margin, and question averages including LTV.
3. **Finance wants profit on each customer.** The drawing shows one customer as a unit. $10K of revenue comes in. $2.5K of hosting and $1.5K of AI inference go out. $6K of gross profit, a 60% margin, is left. All numbers are hypothetical.
4. **The formula.** Per-customer margin is revenue minus cost to serve, divided by revenue. The worked example gives 60%.
5. **Doubling AI usage cuts margin 15 points.** Two stacked bars show where the $10K goes before and after AI usage doubles. Margin falls from 60% to 45%. The price would need to reach $13.75K to restore 60%.
6. **LTV falls when cost to serve rises.** Two lines show cumulative gross profit over 36 months: $216K before and $162K after. The $54K gap is the callout. Revenue-based LTV would read $360K both times.
7. **Divider.** Part 2 turns from one customer to many. Averages hide who loses money.
8. **Datadog's average hides very different customers.** The Confirmed badge covers the 10-K figures: $83.8K average gross profit, 80% margin, 4,310 customers with 90% of ARR. The bars compare share of customers with share of ARR. The Inference bullet says cost to serve probably differs too.
9. **The biggest payer is the one losing money.** A bar chart shows margin by customer after splitting a $30K cluster by usage: −7%, 25%, 40%. The blended bar reads 16.7%.
10. **CFOs ask about cost per customer.** You say "We reduce your cloud bill." The CFO hears a question about whether the price covers each customer. Marked as Inference.
11. **Key terms.** Unit cost, cost to serve, customer margin, contribution margin, CAC and LTV.
12. **NinjaCat story.** Unconfirmed, vendor-reported. 40% reduction in cloud spend, 7 providers ingested, pricing refined with unit costs.
13. **Beamable story.** Unconfirmed, vendor-reported. Cost measured per service, game and customer. No dollar figures exist.
14. **Self-check 1.** Margin after AI usage doubles. Answer: 45%. Reveal the math with the button or the R key.
15. **Self-check 2.** Which customer loses money on the shared cluster. Answer: Customer A.
16. **Resources.** Skok, a16z, CFI contribution margin and the Datadog 10-K.
17. **Recap.** Ask about cost per customer, show how usage moves each margin, and match LTV definitions before comparing. Points back to this document.

## Caveats

- Both exercises use invented numbers and are labeled hypothetical.
- The Datadog average divides full-year revenue and cost by an approximate year-end customer count. It is a rough indicator. The 13% and 87% customer shares are our own arithmetic from the 10-K's counts.
- Datadog's cost of revenue includes shared items such as overhead and software amortization, so it is not a pure cost to serve.
- NinjaCat and Beamable figures have no independent source.
- The LTV definition here is one choice. Other companies use others.
- This module gives finance concepts only. Talk tracks for capitalization are out of scope.

## Sources

Verification: each link was checked with curl on Nov 12 2026 using a browser-style user agent. Status codes are noted. Links that block bots are kept when they come from the module's source material.

**Primary and finance sources**

- Datadog, Inc., Form 10-K for FY2025, SEC EDGAR: <https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm>. Returned 403 to the generic bot check, which SEC does for undeclared user agents. The module source read it on Nov 5 2026. See the business section (customer count), Management's Discussion and Analysis ("Expanding Within Our Existing Customer Base", ARR definition, dollar-based net retention) and the consolidated statements of operations.
- David Skok, SaaS Metrics 2.0: <https://www.forentrepreneurs.com/saas-metrics-2/> (200)
- David Skok, SaaS Metrics 2.0 definitions: <https://www.forentrepreneurs.com/saas-metrics-2-definitions/> (200)
- a16z, 16 Startup Metrics: <https://a16z.com/16-startup-metrics/> (200)
- Corporate Finance Institute, Contribution Margin Ratio: <https://corporatefinanceinstitute.com/resources/accounting/contribution-margin-ratio/> (200)
- Investopedia, Contribution Margin: <https://www.investopedia.com/terms/c/contributionmargin.asp> (402 to bots, listed in the module source and kept)
- Investopedia, Gross Margin: <https://www.investopedia.com/terms/g/grossmargin.asp> (402 to bots, listed in the course outline and kept)

**CloudZero sources (vendor-reported, Unconfirmed)**

- CloudZero, NinjaCat customer story: <https://www.cloudzero.com/customers/ninjacat/> (200)
- CloudZero, Beamable customer story: <https://www.cloudzero.com/customers/beamable/> (200)
- CloudZero, Malwarebytes customer story, a backup unit economics story: <https://www.cloudzero.com/customers/malwarebytes/> (200)
- CloudZero demo story bank, Oct 28 2026 (internal, Notion page 408c5db676d881318a07ca8ff3f5824e), entries F2 (NinjaCat) and E2 (Beamable).

**Dropped**

- Corporate Finance Institute, customer lifetime value page: returned 404.
- Investopedia customer acquisition cost and lifetime value pages: returned 402 and were not in the source material, so they were not added.
