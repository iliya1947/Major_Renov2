# RES-07 — Statistical power, Type I/II error и multiplicity

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Как интерпретировать sample size, p-values, statistical power и multiple testing так, чтобы не принимать случайный шум за эффект и не путать “не значимо” с “эффекта нет”.

### Question type
Methodological / statistics.

### Critical outcomes
1. Correct interpretation of Type I/II error and power.
2. Correct distinction: statistical significance vs effect magnitude/precision.
3. Correct handling of multiple outcomes/time points/subgroups/analyses.
4. Correct interpretation of underpowered studies.
5. Correct use of subgroup interaction tests.

### Closure criterion
Есть operational rules sufficient to read ordinary exercise trials and reviews without significance-based overclaiming.

---

## 1. Null-hypothesis significance testing — что p-value не говорит

P-value не равен:
- probability that null hypothesis is true;
- probability result occurred “by chance”;
- effect size;
- practical importance;
- probability of replication.

A small p-value говорит о совместимости observed data с specified null/model assumptions, но не заменяет effect estimate + uncertainty.

Project rule:
**effect size + confidence interval first; p-value second.**

## 2. Type I error

Type I error:
отвергнуть null hypothesis, когда она истинна.

Если single pre-specified test uses alpha = 0.05, long-run false-positive rate under assumptions is controlled at about 5%.

Но это относится к:
- одному planned testing framework;
- корректному statistical model;
- без uncontrolled repeated/multiple testing.

## 3. Type II error

Type II error:
не обнаружить specified true effect.

Beta = probability of Type II error under the assumed effect size/design.

Power = 1 − beta.

Common planned power:
- 80%;
- 90%.

Power depends on:
1. effect size assumed;
2. variance;
3. sample size;
4. alpha;
5. design/correlation;
6. dropout;
7. analysis method.

## 4. “Non-significant” ≠ no effect

Если p > 0.05:

возможности:
1. effect truly near zero;
2. study underpowered;
3. effect exists but estimate imprecise;
4. measurement noisy;
5. sample small;
6. effect heterogeneous.

Need inspect CI:
- Does it exclude practically meaningful benefit?
- Does it exclude meaningful harm?
- Or is it simply wide?

Project wording:
- “evidence compatible with little/no effect” only if precision supports it;
- otherwise “estimate is imprecise / evidence insufficient”.

## 5. “Significant” ≠ important

A trivial effect can become statistically significant with large sample.

Therefore separate:
1. statistical detectability;
2. magnitude;
3. practical importance;
4. cost/burden;
5. certainty.

Fitness example:
+0.2 kg difference in strength-equivalent metric may be statistically robust yet irrelevant to home program decision.

## 6. Sample size calculation

A valid prospective sample-size calculation requires assumptions about:
1. primary outcome;
2. target effect / minimal relevant difference;
3. variance/event rate;
4. alpha;
5. desired power;
6. allocation ratio;
7. expected attrition;
8. design effects if cluster/crossover.

Sample-size calculation does **not** prove adequacy:
- assumptions can be unrealistic;
- actual dropout/variance can differ;
- multiple outcomes may complicate error control.

## 7. Post-hoc observed power

Project rule:
**не использовать observed/post-hoc power как основную интерпретацию завершённого study.**

После study precision уже выражена:
- estimate;
- CI.

“Study had only 43% observed power” часто просто переформулирует observed p-value/effect.

Use CI and design assumptions instead.

## 8. Underpowered studies

Small studies create risks:
1. wide CI;
2. unstable effects;
3. chance imbalance;
4. winner's curse when only significant results published;
5. exaggerated estimates among positive studies.

But small ≠ automatically biased.
Primary issue often = imprecision, unless small-study publication/analysis mechanisms add bias.

## 9. Multiplicity

Multiplicity arises when many opportunities exist to obtain a favorable result.

Sources:
1. multiple primary outcomes;
2. multiple secondary outcomes;
3. repeated time points;
4. multiple muscle sites;
5. multiple statistical models;
6. multiple transformations;
7. many subgroups;
8. interim looks;
9. many intervention comparisons;
10. multiple definitions of responder/success.

Without control/pre-specification, probability of at least one false-positive finding increases.

CONSORT 2025 explicitly requires reporting how multiplicity was handled.

## 10. Family-wise error concept

If many independent tests each use alpha 0.05, probability of ≥1 false positive across family becomes >5%.

Exact probability under independence:
`1 - (1 - alpha)^m`

Example:
20 independent null tests:
`1 - 0.95^20 ≈ 64%`

Real tests are often correlated, so exact value differs, but principle remains.

## 11. Multiplicity control methods

Possible tools:
1. Bonferroni;
2. Holm;
3. hierarchical/gatekeeping procedures;
4. alpha allocation;
5. false discovery rate approaches;
6. multivariate models;
7. pre-specified primary outcome;
8. limited confirmatory hypothesis set.

No universal best correction.
Choice depends on:
- confirmatory vs exploratory goal;
- dependency;
- family definition;
- decision consequences.

## 12. Primary vs secondary outcomes

### Primary outcome
Usually drives:
- sample size;
- confirmatory conclusion;
- main hypothesis.

### Secondary outcomes
Can provide important supportive evidence, but many secondary analyses increase false-positive risk.

Project rule:
if study has one clear primary outcome but reports dozens of “significant” secondary findings, do not treat all equally.

## 13. Multiple time points

Exercise studies commonly measure:
- baseline;
- week 4;
- week 8;
- week 12.

If authors test each independently and emphasize only significant time point, multiplicity/selective reporting concern arises.

Better:
- pre-specified primary time point;
- appropriate longitudinal model;
- transparent all-time reporting.

## 14. Multiple muscles/sites

Hypertrophy studies may measure:
- several muscles;
- proximal/mid/distal sites;
- thickness/CSA/volume.

These are scientifically useful but create multiple testing/selection opportunities.

Need distinguish:
- planned regional hypertrophy question;
- post-hoc selection of “winning” site.

## 15. Subgroup analyses

Examples:
- trained vs untrained;
- men vs women;
- young vs older;
- high vs low baseline strength.

Subgroup claim requires **interaction evidence**.

Wrong:
> significant in men, non-significant in women → sexes differ.

Correct question:
> is difference between subgroup effects statistically/credibly supported?

SPIRIT 2025 explicitly warns against comparing separate subgroup p-values.

## 16. Post-hoc subgroup analysis

High false-positive risk, especially when:
- many subgroups searched;
- cutpoints data-driven;
- only favorable results reported.

Project treatment:
- hypothesis-generating unless independently replicated;
- lower confidence;
- require biological rationale + interaction + consistency.

## 17. Continuous variables should not be casually dichotomized

Turning:
- age → young/old;
- strength → weak/strong;
- volume → low/high

can:
- lose information;
- create arbitrary thresholds;
- generate apparent subgroup effects.

Prefer continuous interaction/dose-response modeling when justified.

## 18. Interim analyses

Repeatedly checking data and stopping when p < 0.05 inflates Type I error unless controlled.

Sequential trial methods use:
- pre-specified boundaries;
- alpha spending;
- stopping rules.

Exercise trials rarely need complex interim efficacy stopping unless larger/longer or safety-sensitive, but principle matters.

## 19. Repeated meta-analysis over time

Cochrane Handbook 6.5.1 (2026) added updated sequential-method guidance.

Repeatedly re-testing accumulating meta-analysis can inflate false-positive probability.

However current Cochrane guidance:
- discourages sequential methods as primary basis for ordinary updated reviews;
- emphasizes effect magnitude + uncertainty + GRADE rather than binary significance;
- allows sequential methods in genuinely prospective meta-analysis or secondary planned analyses.

Project rule:
do not use “trial sequential analysis says boundary crossed” as automatic trump card.

## 20. Multiple analyses / researcher degrees of freedom

Potential choices:
- change vs post score;
- adjusted vs unadjusted;
- log transform;
- outlier removal;
- different covariates;
- different endpoint;
- different subgroup;
- different model.

If choices depend on results → p-hacking/selective analysis risk.

Pre-specification and transparent sensitivity analyses reduce concern.

## 21. Sensitivity analysis ≠ subgroup analysis

### Sensitivity analysis
Ask:
> does same conclusion survive alternative defensible analytic decisions?

Examples:
- include/exclude high-RoB studies;
- different missing-data assumptions;
- alternative model.

### Subgroup analysis
Ask:
> does effect differ between groups?

These are different scientific questions.

Cochrane explicitly distinguishes them.

## 22. Multiple comparisons in multi-arm trials

If three or more interventions:
- A vs B;
- A vs C;
- B vs C.

Need planned contrast strategy.

Shared control also creates statistical dependence in meta-analysis and must not be double-counted as independent participants.

Detailed meta-analysis handling → RES-16.

## 23. Exercise-science examples

### Example A — 12 muscle sites
Study reports 2 significant sites, 10 non-significant.

Cannot summarize:
> “exercise causes regional hypertrophy at these 2 sites”
without checking:
- pre-specification;
- multiplicity;
- interaction/regional hypothesis;
- consistency.

### Example B — sex subgroup
Men: p=.03  
Women: p=.20

This **does not prove** sex difference.

Need interaction test/estimate of difference in effects.

### Example C — no significant strength difference
Difference = 5 kg, CI −2 to +12 kg.

Cannot conclude equivalence.
CI still includes meaningful benefit.

### Example D — huge sample
Difference = 0.3 reps, p<.001.

Statistically detectable, possibly practically trivial.

## 24. Equivalence and non-inferiority

Failure to find superiority does not establish equivalence.

To claim:
- equivalent;
- non-inferior,

need:
1. pre-specified margin;
2. appropriate design/analysis;
3. adequate precision.

Project rule:
“no significant difference” ≠ “same”.

## 25. Statistical significance language standard

Avoid:
- “proved”;
- “no effect” solely from p>.05;
- “trend toward significance” as evidence category;
- “significant therefore important”.

Prefer:
- point estimate;
- CI;
- magnitude;
- compatibility with meaningful effects;
- certainty/bias.

## 26. Project multiplicity checklist

For every study:

1. What was primary outcome?
2. Was it pre-specified?
3. Sample-size calculation based on what?
4. How many outcomes?
5. How many time points?
6. How many anatomical sites?
7. How many analyses/models?
8. How many subgroups?
9. Was multiplicity controlled or acknowledged?
10. Were post-hoc findings clearly labelled?
11. Are subgroup differences based on interaction?
12. Does CI exclude practical alternatives?
13. Was study designed for equivalence/noninferiority if claiming sameness?
14. Were interim analyses planned?

## 27. Project interpretation hierarchy

1. Effect estimate.
2. Confidence interval / uncertainty.
3. Practical threshold.
4. Risk of bias.
5. Multiplicity/pre-specification.
6. p-value as supplementary evidence.
7. Statistical power mainly at design stage.

## 28. Confidence

### HIGH
- power = probability of detecting a specified effect under assumptions;
- p>.05 does not establish no effect;
- p<.05 does not establish practical importance;
- multiple testing increases false-positive opportunities;
- subgroup difference requires interaction, not separate significance tests;
- repeated/interim testing requires design-aware error control;
- current Cochrane guidance emphasizes magnitude/uncertainty over binary significance.

### PRACTICAL_HEURISTIC
- project multiplicity checklist and interpretation hierarchy.

## 29. Sources

1. Cochrane Handbook for Systematic Reviews of Interventions, **version 6.5.1 (2026)**, Chapter 10: Analysing data and undertaking meta-analyses; Section 10.15 updated in 2026 on accumulating evidence/sequential methods.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-10

2. Cochrane Handbook versions/changes — 6.5.1 (2026).  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/versions-and-changes-handbook

3. CONSORT 2025 Explanation and Elaboration — multiplicity and analysis reporting.  
   https://www.bmj.com/content/389/bmj-2024-081124

4. SPIRIT 2025 Explanation and Elaboration — subgroup interaction, multiplicity and pre-specification.  
   https://www.bmj.com/content/389/bmj-2024-081660

## 30. Next dependencies

- RES-08 descriptive/inferential statistics;
- RES-09 effect sizes/uncertainty;
- RES-16 meta-analysis;
- RES-17 heterogeneity;
- RES-22 individual response.
