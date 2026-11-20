# RES-10 — Missing data, dropout и attrition

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Как оценивать, искажает ли отсутствие outcome/covariate data тренировочный или клинический результат, и когда complete-case/imputation analyses остаются приемлемыми.

### Question type
Methodological / risk-of-bias / statistics.

### Critical outcomes
1. Distinguish dropout from other missingness.
2. Assess missingness mechanism rather than use arbitrary percentage threshold.
3. Correctly interpret complete-case, single imputation, multiple imputation and sensitivity analyses.
4. Distinguish missing outcome data from naïve per-protocol exclusions.
5. Define exercise-science missing-data checklist.

### Closure criterion
Есть operational framework sufficient for ordinary exercise trials and observational studies; advanced imputation mathematics not required for current project.

---

## 1. Missing data — не один тип проблемы

Outcome can be missing because participant:

1. withdrew;
2. was lost to follow-up;
3. skipped testing visit;
4. attended but measurement failed;
5. withdrew from intervention but remained measurable;
6. experienced injury/adverse event and did not return;
7. refused one specific outcome measure;
8. had records/data lost.

Dropout from training ≠ automatically missing outcome data.

A participant may stop training but still complete final measurement.

## 2. Why missing data matter

Missingness can cause:

1. lower precision/power;
2. bias;
3. loss of randomization advantage if analysis conditions on post-randomization completion;
4. distorted tolerability/adherence picture.

Critical distinction:
**amount missing alone does not determine bias.**

Cochrane explicitly states there is no sensible universal percentage threshold that makes missingness “safe”.

## 3. Missingness mechanism

Conceptual categories:

### MCAR — Missing Completely At Random
Missingness unrelated to observed or unobserved outcome/covariates.

Rarely safe to assume without justification.

### MAR — Missing At Random
Conditional on observed variables included in model, missingness does not additionally depend on missing value itself.

Allows methods such as multiple imputation/likelihood under assumptions.

### MNAR — Missing Not At Random
Missingness may still depend on unobserved true value after conditioning on observed data.

Example:
participants with poorest gains avoid post-test because disappointed.

Cannot be solved from observed data alone without unverifiable assumptions/sensitivity analysis.

Project rule:
labels MCAR/MAR/MNAR are assumptions about data-generating mechanism, not facts read directly from dataset.

## 4. Exercise-specific dropout mechanisms

Potentially informative missingness:

1. high soreness → participant quits;
2. injury → misses testing;
3. poor progress → loses motivation;
4. excessive session burden → dropout;
5. intervention feels too easy → nonadherence;
6. ADHD-related friction → missed visits/sessions;
7. time burden differs between groups.

These reasons can be related to:
- intervention;
- outcome;
- both.

Therefore they can bias effect estimate.

## 5. Differential dropout

If dropout proportion or reasons differ between groups, concern increases.

Example:
high-volume group loses 25% due to fatigue;
low-volume group loses 5% due scheduling.

Complete-case comparison may overrepresent high-volume participants who tolerate program unusually well.

## 6. Equal dropout does not guarantee no bias

Both groups can lose 15%, but:
- intervention group loses poor responders;
- control group loses good responders.

Same percentage, different bias.

Therefore examine:
1. reasons;
2. timing;
3. relation to outcome;
4. relation to intervention.

## 7. Missing outcome data vs per-protocol exclusion

Cochrane separates these.

### Missing outcome data
Outcome was not measured/available.

Handled in RoB 2 missing-data domain.

### Naïve per-protocol/as-treated exclusion
Outcome exists, but participant excluded because did not adhere or deviated.

This is mainly bias due to deviations from intended intervention and can destroy randomized comparison.

Project rule:
do not call every excluded participant “missing data”.

## 8. Complete-case analysis

Uses only participants with complete relevant data.

Can be unbiased in some settings if missingness is unrelated to true outcome conditional on analysis assumptions.

Problems:
1. lower n/precision;
2. bias if missingness relates to outcome;
3. can change target population;
4. may create selection.

Complete-case is not automatically wrong, but must be justified.

## 9. Last Observation Carried Forward

LOCF fills missing future value with last observed value.

Problems:
1. assumes no further change;
2. can distort variance;
3. can bias toward or away from null;
4. usually biologically implausible for training adaptation.

Project rule:
**LOCF is not a default acceptable solution.**

## 10. Simple single imputation

Examples:
- mean imputation;
- worst-case fixed value;
- baseline carried forward.

Often underestimates uncertainty because imputed values treated as known.

Can be useful only in explicit sensitivity scenarios, not as automatic primary method.

## 11. Multiple imputation

Generates multiple plausible missing values from an imputation model, analyzes each dataset, then combines estimates.

Potential advantages:
1. incorporates uncertainty in imputed values;
2. can use observed predictors of missingness/outcome;
3. often preferable to single imputation under appropriate MAR assumptions.

Limitations:
1. model can be wrong;
2. unmeasured MNAR remains;
3. imputation variables/timing matter;
4. cannot repair selection/reporting bias generally.

Project rule:
“multiple imputation used” ≠ missing-data bias eliminated.

## 12. Likelihood-based models

Mixed models/repeated-measures likelihood approaches can use incomplete longitudinal observations under model assumptions, commonly MAR.

Advantages:
- no need to fill one fixed value;
- use all available measurements.

Limitations:
- still assumption-dependent;
- MNAR can remain;
- wrong covariance/model specification matters.

## 13. Sensitivity analysis

Purpose:
test whether plausible missing-data assumptions materially alter conclusion.

Examples:
1. best/worst plausible outcomes;
2. pattern-mixture models;
3. delta adjustments;
4. tipping-point analysis;
5. alternative imputation assumptions.

Strong finding:
conclusion remains similar across plausible assumptions.

Weak finding:
small assumption changes reverse decision.

Sensitivity analysis does not prove true missingness mechanism.

## 14. Prevention beats statistical repair

SPIRIT 2025 emphasizes planning to minimize missing data.

Trial practices:
1. collect outcome even after intervention discontinuation where ethical/possible;
2. flexible follow-up;
3. record reasons;
4. distinguish withdrawal from treatment vs withdrawal from data collection;
5. simplify burdensome measures;
6. pre-specify handling.

For home-training research/adherence:
tracking design should minimize user burden so missingness is less likely.

## 15. Missing covariates

Missing baseline covariates can:
- reduce sample in adjusted models;
- create selection;
- complicate confounding control.

Need planned handling:
- imputation;
- missing category only in limited contexts;
- model-specific methods.

Do not silently use smaller complete-covariate sample without checking who was removed.

## 16. Missing intervention/adherence data

Different from missing outcome.

Examples:
- workout log not completed;
- unknown actual sets/reps;
- wearable failed.

This creates uncertainty in implementation/exposure dose.

May affect:
- per-protocol estimand;
- dose-response analysis;
- adherence conclusions.

## 17. Missingness and ITT

Full ITT ideal:
all randomized participants analyzed in assigned groups with outcome data.

In practice, outcome missingness prevents literal complete ITT.

“Modified ITT” label is inconsistent across papers.

Project rule:
ignore label; inspect:
1. who randomized;
2. who measured;
3. who analyzed;
4. why excluded;
5. what assumptions used.

## 18. Flow diagram matters

CONSORT participant flow should allow reconstruction:

1. randomized;
2. received intervention;
3. discontinued intervention;
4. lost follow-up;
5. measured outcome;
6. included in analysis;
7. reasons by group.

If counts cannot be reconciled, risk assessment becomes harder.

## 19. Missing data in longitudinal training studies

Typical issue:
participant has baseline + week 4, misses week 8, returns week 12.

Simple complete-case may discard useful data.

Longitudinal mixed models may use partial trajectory.

Need inspect:
- model;
- missingness assumption;
- time structure;
- whether dropout related to response.

## 20. Attrition and practical effectiveness

Even if statistical method recovers unbiased physiological effect, dropout itself may be a meaningful outcome.

Example:
two programs equal hypertrophy among measured participants, but:
- A completion 95%;
- B completion 60%.

For real-world recommendation adherence/tolerability difference matters.

Therefore:
**dropout is both potential bias source and possible implementation outcome.**

## 21. Exercise-science checklist

For each study:

1. How many randomized/enrolled?
2. How many started intervention?
3. How many completed intervention?
4. How many had primary outcome?
5. Missingness proportion by group?
6. Reasons by group?
7. Timing of dropout?
8. Could reason depend on true outcome?
9. Could intervention cause missingness?
10. Were discontinued participants still followed?
11. Primary analysis method?
12. Complete-case / MI / likelihood / other?
13. Missing-data assumptions stated?
14. Sensitivity analyses?
15. Do results change under plausible assumptions?
16. Is dropout itself relevant to feasibility/adherence?

## 22. Project rules

1. No universal “<5% is safe” threshold.
2. Reasons matter as much as percentage.
3. Equal attrition does not guarantee no bias.
4. Distinguish treatment discontinuation from outcome missingness.
5. Distinguish missing data from per-protocol exclusion.
6. LOCF/mean imputation are not default fixes.
7. Multiple imputation is assumption-dependent.
8. Prefer prevention + complete follow-up.
9. Treat dropout as potential implementation outcome.
10. If missingness could depend on unobserved true outcome, preserve uncertainty explicitly.

## 23. Confidence

### HIGH
- missing outcome data can bias estimates;
- no universal missing-percentage threshold determines safety;
- bias depends on relation between missingness, intervention and true outcome;
- complete-case and imputation methods rely on assumptions;
- naïve per-protocol exclusions are distinct from missing-outcome bias;
- sensitivity analyses are important when missingness assumptions matter.

### PRACTICAL_HEURISTIC
- project missing-data checklist.

## 24. Sources

1. Cochrane Handbook, Chapter 8, Section 8.5: Bias due to missing outcome data.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-08

2. Cochrane Handbook, Chapter 10: methods for missing data in meta-analysis/statistical analysis.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-10

3. SPIRIT 2025 Explanation and Elaboration — planned handling/prevention of missing data.  
   https://www.bmj.com/content/389/bmj-2024-081660

4. CONSORT 2025 Explanation and Elaboration — participant flow and analysis reporting.  
   https://www.bmj.com/content/389/bmj-2024-081124

## 25. Next dependencies

- RES-11 reliability/validity/responsiveness;
- RES-12 exercise-specific measurement issues;
- RES-18 publication/reporting bias.
