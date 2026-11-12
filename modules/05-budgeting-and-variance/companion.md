# Module 5 companion: Budgeting and variance

**Status:** Draft. Accuracy review by CloudZero finance pending.

**Time:** about 10 minutes with the deck, plus time to read this. **Audience:** CloudZero Sales Engineers. **Running example:** Datadog, Inc., Form 10-K for the fiscal year ended December 31, 2025 (FY2025). All Datadog figures are in US dollars and come from that filing.

**Evidence labels used here.** *Confirmed* means a primary source such as a public filing. *Unconfirmed* means a vendor or press claim we cannot check. *Inference* means our own reasoning from confirmed facts. Finance should check every Inference.

## 1. What you will be able to do

1. Explain the difference between a budget, a forecast and actuals.
2. Calculate a variance in dollars and percent, and say whether it is favorable or unfavorable.
3. Explain a variance in one sentence, the way FP&A reports it to the CFO.

## 2. Budget, forecast and actuals

The **budget** is the annual plan. Finance sets it before the fiscal year starts. It fixes expected revenue and spending by line and by team.

The **forecast** is the updated expectation during the year. The budget stays fixed. The forecast moves as the year unfolds, because usage, hiring or prices change.

**Actuals** are what really happened, as recorded in the books after close. Module 6 covers the close.

Picture three lines over twelve months (slide 3). The budget line is flat. The actuals line fills in one month at a time. The forecast line starts where actuals stop and bends toward where finance now expects the year to land.

**Why cloud and AI spend is hard to budget.** A cloud bill moves with usage. Engineers change usage daily, and the full amount reaches the income statement that month (see Module 3). *Inference:* this makes cloud and AI spend a frequent source of variances for a SaaS company.

## 3. Variance: the math

**Variance = actual minus budget**, for one line and one period.

- In dollars: actual − budget.
- In percent: (actual − budget) ÷ budget. Divide by the budget, not by the actual.

**Favorable or unfavorable.** A favorable variance helps profit. An unfavorable one hurts it.

| Line | Actual vs budget | Result |
| --- | --- | --- |
| Revenue | Above budget | Favorable |
| Revenue | Below budget | Unfavorable |
| Cost | Above budget | Unfavorable |
| Cost | Below budget | Favorable |

Be careful with signs. "Actual minus budget" gives a positive number for a cost overrun, and a positive number for a revenue beat. The sign alone does not tell you whether it is good. Always say the word "favorable" or "unfavorable" out loud.

### Worked example (hypothetical, invented numbers)

A team budgeted $500K for cloud and AI usage for the quarter. Actual spend was $572K.

- Dollars: $572K − $500K = **$72K**.
- Percent: $72K ÷ $500K = **14.4%**.
- Direction: a cost above budget is **unfavorable**.

A common slip is dividing by the actual: $72K ÷ $572K = 12.6%. That is the wrong base. It is the wrong answer option C in the self-check.

The $72K figure follows the course outline. It is not Wise's data.

## 4. Variance analysis: usage versus price

Variance analysis explains why a variance happened. Corporate Finance Institute (CFI) splits a cost variance into a price part and a quantity part. You paid a different rate per unit, or you used a different number of units.

The hypothetical continues. The budget assumed 1,000 units at $500 per unit. Actual usage was 1,100 units at $520 per unit. A unit stands for any billed quantity, such as a block of compute hours or a number of AI requests.

Check the totals first:

- Budget: 1,000 × $500 = $500,000.
- Actual: 1,100 × $520 = $572,000.

Now split the $72K using the CFI convention. Value quantity at the budgeted price. Value price at the actual quantity.

- **Quantity (usage) variance:** 100 extra units × the budgeted $500 = **$50K**.
- **Price variance:** $20 more per unit × the 1,100 units actually used = **$22K**.
- Check: $50K + $22K = $72K.

In percent: usage was 10% higher (1,100 vs 1,000 units), and the unit price was 4% higher ($520 vs $500).

Why this order? If you value price at the budgeted quantity instead, you get $20 × 1,000 = $20K for price and $52K for the rest. Both splits add to $72K. The convention decides which part gets the overlap, so state which one you used. This module uses CFI's.

A real explanation also names why usage and price rose. This hypothetical does not say. In a real call, ask: a launch, a new customer, a model change, a discount that expired?

## 5. How a public company explains a change

Datadog does not publish its internal budget, so its 10-K shows no budget variance. It does explain the year over year change in each cost line in Management's Discussion and Analysis. It gives the amount, the percentage and the main drivers in dollars. That is the shape a variance explanation takes.

**Important caveat:** a year over year change is not a budget variance. The comparison base is last year's actual, not this year's plan. We use it only to show how the explanation is worded.

| FY2025 line | Change vs FY2024 | Main driver named in the 10-K |
| --- | --- | --- |
| Cost of revenue | +$171.4M (33%) | $149.8M increase in third-party cloud infrastructure hosting and software costs |
| Research and development | +$395.7M (34%) | $324.4M increase in personnel costs, plus $60.0M in cloud infrastructure related investments |

*Confirmed:* read in the filing on Nov 8 2026.

The cost of revenue sentence reads: the increase "was primarily due to an increase of $149.8 million in third-party cloud infrastructure hosting and software costs and an increase of $18.2 million in personnel costs." One sentence carries the number, the cause and the size of the cause.

On slide 7, the meter shows $149.8M of the $171.4M. The "Other $21.6M" label is our own subtraction ($171.4M − $149.8M), not a line in the filing. The filing names $18.2M of personnel costs inside that remainder.

The R&D line also contains cloud spend. That matches Module 2: cloud cost for production usually sits in cost of revenue, and some cloud cost lands in R&D.

## 6. How a CFO hears it

*Inference.* Surprises are the problem. FP&A has to explain each material variance to the CFO, and the CFO has to explain it to the board.

Timing matters. A variance found at month end close has already happened. A variance seen mid-month can still change the forecast. Slide 8 draws this: the same leak, caught early, has built up a small amount of extra cost. Caught at close, the whole gap has built up.

An SE who can say which part of a cloud variance came from more usage and which came from a higher rate is answering the question FP&A will be asked. A total alone leaves that work to finance.

**Talk track.** Instead of "your cloud spend is $72K over budget," try: "Cloud and AI usage was $72K, or 14.4%, over budget. About $50K came from higher usage and $22K from a higher unit price. Which of those would you want to see sooner?" Use this only as a pattern. Swap in the prospect's real drivers.

**What not to say.** Do not promise that CloudZero will remove a variance. Say it shows which part came from usage and which from price, and when it started.

## 7. Story: Wise (vendor-reported, Unconfirmed)

The CloudZero demo story bank (Oct 28 2026, entry E1) frames the Wise story as "$72K was leaking. They found it in hours, not at month-end."

**Unconfirmed, vendor-reported.** CloudZero's customer page for Wise reports that Wise "Identified a $72,000 anomaly in hours" and engaged "250+ engineers in proactive cost management." We have not checked these figures against any Wise source or an independent source. The page does not say what the anomaly would have cost by month end. "Not at month-end" is the story bank's framing, not a claim on the vendor page.

Use the story to illustrate early detection of an unfavorable variance. Do not present it as a verified result. Note that the $72K here matches the hypothetical $72K in the exercise only because the outline chose it that way. The exercise is not Wise's data.

## 8. Self-check

The deck has one self-check slide (question 1). Questions 2 and 3 live here.

**Hypothetical. Invented numbers.** A team budgeted $500K for cloud and AI usage for the quarter. Actual spend was $572K. The budget assumed 1,000 units at $500 per unit. Actual usage was 1,100 units at $520 per unit.

1. What is the variance in dollars and percent? Is it favorable or unfavorable?
2. How much of the variance came from using more units, and how much from the higher price per unit?
3. Write the one sentence explanation a CFO would want.

### Answers

1. $572K − $500K = $72K. $72K ÷ $500K = 14.4%. It is **unfavorable**, because a cost came in above budget.
2. Quantity: 100 extra units × the budgeted $500 = **$50K**. Price: $20 more per unit × the 1,100 units actually used = **$22K**. Together they make the $72K.
3. One acceptable answer: "Cloud and AI usage was $72K (14.4%) over budget for the quarter: $50K from 10% higher usage and $22K from a 4% higher unit price." The sentence gives the amount, the percentage and each driver in dollars. It has the same shape as the Datadog 10-K sentence above.

## 9. Glossary for this module

- **Actuals:** what really happened, as recorded in the books after close.
- **Budget:** the annual plan, set before the fiscal year starts.
- **Favorable variance:** a variance that helps profit. Revenue above budget, or cost below budget.
- **Forecast:** the updated expectation during the year. It moves while the budget stays fixed.
- **FP&A:** financial planning and analysis, the team that plans, forecasts and explains variances.
- **Price variance:** the part of a cost variance from paying a different rate per unit.
- **Quantity (usage) variance:** the part of a cost variance from using a different number of units.
- **Unfavorable variance:** a variance that hurts profit. Revenue below budget, or cost above budget.
- **Variance:** actual minus budget, for one line and one period.
- **Variance analysis:** explaining why a variance happened.

## 10. Slide by slide guide

1. **Title.** Sets the promise: explain any cost variance in one sentence. Ten minutes.
2. **Learning goals.** Three goals: tell budget, forecast and actuals apart, calculate a variance, explain it fast.
3. **The budget stays put.** Three lines over twelve months. Budget is flat, actuals fill in to today, the forecast bends forward. The numbers are illustrative.
4. **Variance is the gap.** Budget $500K against actual $572K. The orange block is the $72K gap, 14.4% of budget. Hypothetical figures.
5. **Favorable means it helps profit.** Two number lines. Cost above the budget tick is unfavorable. Cost below it is favorable. The same logic flips for revenue.
6. **Split the gap.** A waterfall from $500K to $572K. $50K from 10% more usage, $22K from a 4% higher unit price.
7. **Datadog.** Cost of revenue grew 33% (+$171.4M) in FY2025, mostly $149.8M of cloud hosting and software. Confirmed from the 10-K, and not a budget variance.
8. **Timing.** A spend jump that stays high. Caught early, little extra cost has built up. Caught at close, the whole shaded gap has.
9. **How a CFO hears it.** You say the total. The CFO asks which part is usage, which is price, and why. Inference.
10. **Key terms.** Budget, forecast, actuals, variance, favorable, variance analysis.
11. **Wise story.** Unconfirmed, vendor-reported. $72K anomaly, found in hours, 250+ engineers.
12. **Self-check.** The $500K vs $572K variance. Reveal the answer after you try it.
13. **Resources.** CFI, Investopedia, the Datadog 10-K and the Wise page.
14. **Recap.** State variance in dollars and percent, split into usage and price, flag spikes mid-month. Points to this document.

## 11. Caveats

- The exercise is hypothetical. The numbers are invented.
- Datadog year over year changes are not budget variances. They show wording only.
- The price and quantity split follows CFI's convention. Other conventions give different splits that still total the same variance.
- Statements about how CFOs think are Inference. CloudZero finance should confirm them.
- Wise figures are Unconfirmed and vendor-reported.
- Links to Investopedia (returns an access block to automated checks) and SEC EDGAR (blocks generic bots, returns 200 with a declared user agent) need a manual check in a browser before publication.

## Sources

Checked on Nov 12 2026 with curl and a browser style user agent. Notes follow each link.

**From the Notion module and outline**

- Corporate Finance Institute, [Variance Analysis](https://corporatefinanceinstitute.com/resources/fpa/variance-analysis/). Status 200.
- Investopedia, [Budget Variance](https://www.investopedia.com/terms/b/budget-variance.asp). Returns 402, an access block to bots. It came from the Notion source, so it is kept. Check it by hand.
- Datadog, Inc., Form 10-K for the fiscal year ended December 31, 2025, SEC EDGAR: [ddog-20251231.htm](https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm). Returns 403 to a generic bot user agent and 200 with a declared one. Kept. See "Cost of Revenue and Gross Margin" and "Research and Development" under Management's Discussion and Analysis.
- CloudZero, [Wise customer page](https://www.cloudzero.com/customers/wise/). Status 200. Vendor-reported, Unconfirmed.
- CloudZero demo story bank, Oct 28 2026 (internal), entry E1 (Wise). Notion page 408c5db676d881318a07ca8ff3f5824e. Figures are vendor-reported and Unconfirmed.
- Finance Fundamentals primer outline, Nov 3 2026 (internal), Module 5 and glossary.

**Extra free sources added**

- Corporate Finance Institute, [Budgeting vs Forecasting](https://corporatefinanceinstitute.com/resources/financial-modeling/budgeting-vs-forecasting/). Status 200. Not read in depth. Listed as further reading on budget versus forecast.
- Corporate Finance Institute, [Budgeting](https://corporatefinanceinstitute.com/resources/fpa/budgeting/). Status 200. Not read in depth.
- Association for Financial Professionals, [FP&A topic page](https://www.afponline.org/trends-topics/topics/fp-a). Status 200. Not read in depth.
- CloudZero, [customer stories](https://www.cloudzero.com/customers/). Status 200.

**Dropped.** `corporatefinanceinstitute.com/resources/accounting/budget-vs-actual/` returned 404. Several Investopedia term pages we tried (variance, forecasting, budget) also returned 402 and were not added, because we could not read them.
