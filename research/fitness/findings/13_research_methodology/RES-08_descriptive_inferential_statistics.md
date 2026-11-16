# RES-08 — Descriptive и inferential statistics

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Как читать базовую статистику exercise-science studies так, чтобы различать описание sample, оценку population parameter, uncertainty и model-dependent inference.

### Question type
Methodological / statistics.

### Critical outcomes
1. Correct interpretation of mean/median/SD/IQR.
2. Correct distinction between SD and SE.
3. Correct interpretation of confidence intervals and p-values.
4. Recognition of skewness/outliers/distribution problems.
5. Correct distinction between descriptive and inferential claims.

### Closure criterion
Есть practical statistical reading framework, sufficient for ordinary primary studies; detailed effect measures handled in RES-09, meta-analysis in RES-16.

---

## 1. Descriptive statistics

Descriptive statistics summarize observed data.

They do not by themselves estimate:
- causal effect;
- population effect;
- statistical significance;
- generalizability.

Core quantities:

1. mean;
2. median;
3. mode;
4. standard deviation;
5. variance;
6. range;
7. interquartile range;
8. percentiles;
9. counts/proportions;
10. distribution shape.

## 2. Mean

Arithmetic mean:
sum of observed values / number of observations.

Useful when:
- variable is quantitative;
- distribution is not extremely skewed;
- mean has interpretable scale.

Sensitive to:
- extreme values;
- skewness.

Exercise examples:
- mean 1RM;
- mean muscle thickness;
- mean body mass;
- mean repetitions.

Mean is not automatically “typical participant” when distribution is strongly skewed.

## 3. Median

Median = central ordered observation.

Useful when:
- distribution is skewed;
- outliers are influential;
- outcome has asymmetric distribution.

Examples:
- time-to-event;
- highly skewed recovery duration;
- some biomarker distributions.

Median and mean answer different summaries; one should not be converted to the other casually.

## 4. Standard deviation (SD)

SD describes spread of individual observations around sample mean.

High SD:
participants/results are more dispersed.

Low SD:
values are more tightly clustered.

SD is a property of observed distribution, not uncertainty of the mean estimate.

In exercise science SD may reflect:
- biological heterogeneity;
- measurement error;
- mixed training status;
- true individual differences.

## 5. Standard error (SE)

SE describes uncertainty/variability of an estimator across hypothetical repeated samples.

For simple sample mean:
SE ≈ SD / sqrt(n)

Therefore:
- increasing n usually reduces SE;
- increasing n does **not** necessarily reduce SD.

Critical project rule:
**never treat SE as if it were SD.**

Cochrane explicitly warns that confusing SE and SD is a common and misleading extraction error.

## 6. Variance

Variance = SD².

Useful mathematically in:
- ANOVA;
- regression;
- meta-analysis weighting;
- variance decomposition.

Usually less intuitive clinically/practically than SD.

## 7. Range

Range = max − min.

Limitations:
1. depends strongly on sample size;
2. determined only by extremes;
3. unstable;
4. poor estimate of typical variability.

Cochrane specifically cautions against using ranges to estimate SD routinely.

## 8. Interquartile range

IQR covers central 50% of values:
Q3 − Q1.

Useful for skewed distributions.

IQR is not directly interchangeable with SD unless additional distribution assumptions are reasonable.

If a paper reports median + IQR instead of mean + SD, this may signal skewness or deliberate robust summarization.

## 9. Distribution shape

Questions to ask:
1. symmetric or skewed?
2. unimodal or multimodal?
3. floor/ceiling effects?
4. outliers?
5. bounded outcome?
6. count data?
7. ordinal scale?

Statistical method should match data structure.

Example:
repetition count cannot take negative values and may be skewed.
Pain scales are ordinal/bounded.
Time-to-event needs special methods.

## 10. Outliers

An outlier can arise from:
1. genuine extreme response;
2. measurement error;
3. data entry error;
4. protocol violation;
5. different subpopulation.

Project rule:
do not remove outliers merely because they weaken significance.

Need:
- pre-specified rule where possible;
- transparent sensitivity analysis;
- documented reason.

## 11. Baseline tables

Baseline descriptive data help understand:
- sample characteristics;
- applicability;
- possible randomization problems.

But baseline p-values in randomized trials should not be used as a simplistic “test whether randomization worked”.

Random baseline differences are expected by chance.

See RES-03.

## 12. Inferential statistics

Inferential methods estimate or test population-level quantities using sample data under assumptions.

Common outputs:
1. effect estimate;
2. standard error;
3. confidence interval;
4. p-value;
5. model coefficient;
6. test statistic.

Inferential statistics do not erase:
- bias;
- confounding;
- poor measurement;
- indirectness.

## 13. Point estimate

A point estimate is the single best estimate produced by model/data.

Examples:
- mean difference = +3.2 kg;
- risk ratio = 0.80;
- regression coefficient = 1.4;
- correlation = 0.35.

Never interpret point estimate without uncertainty.

## 14. Confidence interval

A confidence interval provides a range reflecting sampling uncertainty under the statistical model/procedure.

Practical reading:
1. What is central estimate?
2. What values remain compatible with data?
3. Does interval include null?
4. Does interval include practically important benefit?
5. Does interval include meaningful harm?
6. Is interval narrow enough for decision?

CONSORT 2025 emphasizes reporting effect estimates with CIs.

## 15. Frequentist CI — avoid common wording error

Strict frequentist interpretation is not:
> “there is a 95% probability the true effect lies in this specific interval.”

The procedure is constructed so that, under repeated sampling/model assumptions, 95% of such intervals would cover the target parameter.

For practical communication, it is acceptable to describe CI as the range of effects reasonably compatible with observed data, while avoiding literal posterior-probability wording.

## 16. p-value

ASA principles:

1. p-value measures compatibility of data with specified statistical model/null.
2. It does not give probability null is true.
3. It does not measure effect size.
4. It does not measure practical importance.
5. Decisions should not rely solely on threshold crossing.
6. Full reporting/transparency matters.

Project rule:
**p-value is secondary to effect estimate + uncertainty + study validity.**

## 17. Test statistic

Examples:
- t;
- z;
- F;
- chi-square.

Test statistic combines observed difference and uncertainty according to model.

It is an intermediate inferential quantity; practical interpretation should return to effect estimate and CI.

## 18. Parametric assumptions

Common parametric models assume some combination of:
- distributional form;
- independent observations;
- homoscedasticity;
- linearity;
- correctly specified covariance structure.

Violations matter differently depending on:
- sample size;
- severity;
- estimator;
- design.

Project rule:
do not reject a study merely because data are “not perfectly normal”; inspect whether method is robust/appropriate.

## 19. Normality

Important distinction:
often statistical model concerns residuals/sampling distribution, not raw variable needing perfect Gaussian shape.

Large-sample estimators can be robust in some contexts.

But strong skew + small n can affect:
- mean/SE inference;
- CI;
- transformations;
- meta-analysis assumptions.

## 20. Paired vs independent data

Repeated measurements on same participant are correlated.

Examples:
- pre/post;
- split-body;
- crossover.

Using independent-sample formulas on paired data wastes information or gives wrong SE.

Project rule:
identify unit of analysis before interpreting statistics.

## 21. Unit of analysis

Possible units:
- participant;
- limb;
- muscle;
- session;
- set;
- repetition.

Critical exercise-science trap:
multiple measurements from same person are not automatically independent observations.

Pseudo-replication:
treating repeated observations as separate independent n can severely underestimate SE.

## 22. Correlation

Correlation quantifies association, not causation.

Pearson correlation:
linear association under assumptions.

Spearman:
rank/monotonic association.

A correlation can be:
- statistically strong;
- practically weak;
- confounded;
- driven by outliers;
- nonlinear.

Correlation also does not imply agreement between measurement methods.

## 23. Regression

Regression estimates conditional associations/effects under model assumptions.

Can be used for:
- adjustment;
- prediction;
- effect estimation;
- interaction.

But coefficient meaning depends on:
1. model;
2. scale;
3. covariates;
4. coding;
5. causal structure.

“Adjusted regression” is not automatically causal — see RES-05.

## 24. Change scores vs post-intervention scores

In randomized trials with baseline measurement:
- post-intervention comparison;
- change-score comparison;
- ANCOVA adjusted for baseline

can all be valid under appropriate assumptions.

Often baseline-adjusted ANCOVA improves precision.

Project rule:
do not assume “percent change” is superior simply because it sounds normalized.

## 25. Percent change

Percent change can become unstable when baseline near zero.

It can also confound interpretation when groups differ in baseline.

Need define denominator and reason.

Absolute change is often easier to interpret.

## 26. Statistical model vs scientific question

A technically correct model may answer wrong question.

Example:
within-group pre/post p<.05 does not test whether groups differ in change.

Correct comparative question requires between-group contrast / interaction / appropriate model.

Project rule:
**never infer between-group superiority from one group significant and another non-significant.**

## 27. Exercise-science examples

### Example A — muscle thickness
Group A:
+2.0 mm, 95% CI 0.5 to 3.5

Group B:
+1.7 mm, 95% CI 0.2 to 3.2

Cannot conclude A > B from separate within-group significance.
Need direct between-group estimate.

### Example B — strength
Mean gain 10 kg, SD 12 kg.

SD shows individual spread.
SE depends on sample size and says how uncertain mean gain is.

### Example C — skewed soreness
Median soreness may better summarize typical experience than mean if few participants have extreme pain.

### Example D — multiple limbs
40 participants × 2 arms ≠ automatically n=80 independent participants.

## 28. Project statistical reading checklist

For each result:

1. What is outcome type?
2. What is unit of analysis?
3. How is distribution summarized?
4. Mean/median appropriate?
5. SD or SE?
6. Point estimate?
7. CI?
8. p-value?
9. What model/test?
10. Are observations independent/paired/clustered?
11. Is there baseline adjustment?
12. Is claim within-group or between-group?
13. Are outliers/missing data relevant?
14. Does statistical method answer Question Card?

## 29. Confidence

### HIGH
- SD and SE are distinct;
- effect estimates require uncertainty;
- p-values do not measure effect magnitude or probability hypothesis is true;
- unit-of-analysis errors/pseudo-replication distort uncertainty;
- between-group claims require direct comparative analysis;
- descriptive statistics alone do not support causal inference.

### PRACTICAL_HEURISTIC
- project statistical reading checklist.

## 30. Sources

1. Cochrane Handbook, Chapter 6: Choosing effect measures and computing estimates of effect.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-06

2. Cochrane Handbook, Chapter 10: Analysing data and undertaking meta-analyses.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-10

3. CONSORT 2025 Explanation and Elaboration.  
   https://www.bmj.com/content/389/bmj-2024-081124

4. American Statistical Association Statement on Statistical Significance and P-Values.  
   https://www.amstat.org/asa/files/pdfs/P-ValueStatement.pdf

5. Cochrane Handbook versions page — current version 6.5.1 (2026).  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/versions-and-changes-handbook

## 31. Next dependencies

- RES-09 effect sizes/uncertainty;
- RES-11 reliability/validity;
- RES-16 meta-analysis.
