# RES-16 — Meta-analysis: models, weighting, dependency и prediction intervals

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Как интерпретировать pooled effect, fixed/random-effects models, study weights, dependency and prediction intervals without assuming meta-analysis automatically resolves conflicting evidence.

### Question type
Evidence synthesis / statistics.

### Critical outcomes
1. Correct pooling logic.
2. Fixed-effect vs random-effects interpretation.
3. Heterogeneity awareness.
4. Dependency/multi-arm/repeated-effect handling.
5. Prediction intervals.
6. Sensitivity analysis.
7. Avoiding “meta-analysis = truth” reasoning.

### Closure criterion
Есть operational framework sufficient for fitness meta-analyses; heterogeneity causes are expanded in RES-17.

---

## 1. Meta-analysis definition

Meta-analysis statistically combines effect estimates from two or more studies.

Potential benefits:
1. greater precision;
2. summary estimate;
3. quantify heterogeneity;
4. explore moderators;
5. resolve some apparently conflicting findings.

Potential harm:
a precise pooled number can be misleading if:
- studies are biased;
- effects are not meaningfully comparable;
- outcome definitions differ;
- publication bias exists;
- dependency ignored.

Cochrane explicitly warns meta-analysis can seriously mislead if these issues are ignored.

## 2. Pool only conceptually coherent effects

Before statistics:
1. same target question?
2. same/compatible population?
3. same intervention contrast?
4. same outcome construct?
5. compatible time point?
6. compatible effect measure?
7. same causal estimand?

Statistical software can pool incompatible studies; methodology must stop it.

## 3. Weighted average

Most meta-analysis estimates are weighted averages.

Study weight generally depends on precision.

More precise study → more influence.

Weight is not:
- vote;
- quality score;
- sample size alone.

Bias does not automatically reduce inverse-variance weight unless analysis explicitly changes inclusion/model.

## 4. Fixed-effect model

Assumes included study estimates target one common underlying effect, with observed differences due to sampling error.

Interpretation:
summary effect for the included set under common-effect assumption.

Concern:
exercise interventions often differ in:
- exercise selection;
- dose;
- supervision;
- training status;
- equipment.

A strict identical true effect may be implausible.

But model choice should be conceptual, not based on significance test for heterogeneity.

## 5. Random-effects model

Assumes true effects vary across studies according to a distribution.

Summary estimates mean/average effect across that distribution.

Adds between-study variance τ² to weighting.

Important:
**random effects does not solve heterogeneity.**

It models variation; reasons still matter.

## 6. Random effects and small studies

With heterogeneity, random-effects models generally give relatively more weight to smaller studies than fixed-effect models.

If small studies show larger effects because of:
- publication bias;
- poorer methods;
- selective reporting,

random-effects pooling can move summary toward biased small-study effects.

Therefore random effects is not automatically “more conservative”.

## 7. Choosing fixed vs random

Cochrane does not prescribe one universal model.

Project rule:
1. define scientific assumption first;
2. inspect heterogeneity and small-study patterns;
3. sensitivity compare models where appropriate;
4. never choose random/fixed solely because heterogeneity p-value crossed threshold.

## 8. τ²

Tau-squared estimates between-study variance in true effects.

Useful because:
- I² gives relative heterogeneity;
- τ² gives variance on effect-size scale.

Interpretability depends on effect measure.

Different τ² estimators can produce different results when few studies.

## 9. I²

I² estimates proportion of observed variability beyond sampling error, under assumptions.

Common mistake:
“high I² = meta-analysis invalid”.

I² depends on:
- study precision;
- effect scale;
- sample sizes;
- true heterogeneity.

A low I² does not prove identical effects.
A high I² requires explanation, not automatic dismissal.

Detailed heterogeneity → RES-17.

## 10. Prediction interval

For random-effects meta-analysis, prediction interval estimates range where true effect in a new similar study/context may plausibly lie.

This can be more useful than summary CI when effects vary.

Example:
summary hypertrophy effect positive,
but prediction interval includes:
- no effect;
- potentially negative effect.

Then “average benefit” does not guarantee benefit in every context.

Cochrane specifically recommends prediction intervals as useful representation of between-study variation.

## 11. Summary CI vs prediction interval

### Confidence interval around pooled mean
Uncertainty in average effect.

### Prediction interval
Uncertainty about effect in a new similar setting/study, including heterogeneity.

Do not confuse them.

## 12. Few studies

With small k:
1. τ² estimate unstable;
2. heterogeneity tests low power;
3. random-effects CI may be too narrow with simple methods;
4. funnel plots unreliable;
5. meta-regression weak.

Project rule:
small-k meta-analysis gets stronger uncertainty language.

## 13. Hartung-Knapp-type adjustments

Random-effects inference can use methods that better account for uncertainty in between-study variance, especially with few studies.

But these methods can behave oddly in some edge cases.

Project rule:
note method used; do not assume all random-effects CIs are equivalent.

## 14. Continuous outcomes

Common:
- MD;
- SMD.

If all studies use same scale → MD preferable for interpretation.

If different scales measure same construct → SMD often used.

But combining post-intervention and change scores using SMD requires caution because standardization variances differ.

Cochrane explicitly notes this.

## 15. Binary outcomes

Common:
- RR;
- OR;
- RD.

Rare events can create:
- zero cells;
- unstable estimates;
- method-specific behavior.

Do not assume one method universally superior.

## 16. Multi-arm trials

Example:
low, moderate, high volume share one control.

If same control is entered independently multiple times, participants are double-counted.

Possible solutions:
1. combine relevant arms;
2. split shared control where appropriate;
3. multivariate methods.

Project rule:
always check shared groups.

## 17. Multiple outcomes from same participants

Exercise studies often provide:
- multiple muscles;
- multiple time points;
- both limbs;
- multiple exercises.

These effects are correlated.

Treating every effect as independent:
- overweights one study;
- underestimates SE.

Approaches:
1. select pre-specified effect;
2. aggregate outcomes;
3. multilevel meta-analysis;
4. robust variance estimation;
5. multivariate meta-analysis.

Method must match dependency structure.

## 18. Split-body studies

Two limbs within one participant create paired effects.

If analyzed as independent groups:
SE can be wrong.

Meta-analysis should use paired effect/variance when possible.

This is especially relevant to hypertrophy literature.

## 19. Cluster trials

Need adjust effective information for intracluster correlation.

Ignoring clustering makes study appear more precise than it is.

## 20. Crossover trials

Within-person correlation matters.

Need appropriate paired estimates.

Carryover also affects design validity.

## 21. Sensitivity analyses

Purpose:
test robustness to defensible analytic choices.

Examples:
1. high-RoB studies excluded;
2. fixed vs random model;
3. different τ² estimator;
4. alternative effect selection;
5. influential study removed;
6. imputed SD assumptions changed.

Strong conclusion:
similar across reasonable analyses.

Fragile conclusion:
changes sign/importance under minor choices.

## 22. Influence analysis

Check:
- one study dominates pooled result?
- one outlier creates heterogeneity?
- leave-one-out changes decision?

Do not automatically delete influential study.
Investigate why.

## 23. Meta-regression

Tests whether study-level characteristic relates to effect differences.

Possible moderators:
- training status;
- volume;
- load;
- duration;
- proximity to failure.

Limitations:
1. observational across studies;
2. ecological confounding;
3. low power with few studies;
4. correlated moderators;
5. multiple testing.

Meta-regression association ≠ individual causal moderator.

## 24. Subgroup meta-analysis

Can compare pooled effects across categories.

Need:
- pre-specification;
- interaction/difference test;
- enough studies;
- plausible rationale.

Do not infer subgroup difference from one subgroup significant and another not.

## 25. Dose-response meta-analysis

Potentially useful for:
- weekly sets;
- protein intake;
- frequency.

Threats:
1. between-study confounding;
2. dose definitions differ;
3. correlated program variables;
4. nonlinear relationships;
5. sparse extremes.

Within-study randomized dose comparisons are usually stronger than between-study meta-regression.

## 26. Publication bias / small-study effects

Meta-analysis is vulnerable if available studies are selected by results.

Random-effects may amplify small-study effects.

Detailed methods → RES-18.

## 27. Forest plot reading order

Project order:

1. effect measure;
2. direction;
3. individual study estimates/CIs;
4. study weights;
5. pooled estimate/CI;
6. heterogeneity;
7. prediction interval if available;
8. study quality;
9. number of studies;
10. applicability.

Do not stare only at pooled diamond.

## 28. Statistical significance is not synthesis quality

A pooled p<.001 can still arise from:
- biased studies;
- tiny trivial effect;
- publication bias;
- incompatible studies.

A pooled p>.05 can still be:
- imprecise;
- compatible with meaningful effect.

Same interpretation principles as primary studies.

## 29. “No difference” meta-analysis

To conclude practical equivalence:
need:
- precise CI;
- meaningful equivalence margin;
- adequate evidence.

A nonsignificant pooled effect is not enough.

## 30. Exercise-science dependency problem

High priority because one study may contribute:
- biceps thickness at 3 sites;
- triceps at 2 sites;
- strength for 3 tests.

If review treats all 8 effect sizes as independent, that study may dominate.

Project appraisal will explicitly check dependency handling.

## 31. Pooling studies with different outcome proxies

Example hypertrophy:
- MRI volume;
- ultrasound thickness;
- DXA lean mass.

These are not automatically same construct/measurement quality.

Possible strategies:
1. separate outcome classes;
2. subgroup by modality;
3. use only direct measures for main analysis;
4. sensitivity analyses.

Do not standardize away conceptual differences.

## 32. Prediction intervals for practical decisions

If random-effects meta-analysis shows:
- average +0.30 SMD;
- prediction interval −0.15 to +0.75,

practical interpretation:
average effect favors intervention,
but new comparable setting may plausibly show little/no advantage.

This is often more useful for individualization than average CI alone.

## 33. Meta-analysis appraisal card

1. PICO coherent?
2. Why pooling justified?
3. Effect measure appropriate?
4. Fixed/random assumption?
5. τ² estimator?
6. CI method?
7. Prediction interval?
8. k number?
9. dependency handled?
10. multi-arm handled?
11. paired/crossover handled?
12. RoB considered?
13. heterogeneity examined?
14. moderator analyses pre-specified?
15. publication bias assessed?
16. sensitivity/influence analysis?
17. absolute/practical effect?
18. certainty/GRADE?
19. conclusion matches uncertainty?

## 34. Project rules

1. Meta-analysis is weighted synthesis, not majority vote.
2. Random effects models heterogeneity; does not eliminate it.
3. Never choose model by heterogeneity p-value alone.
4. Check prediction interval when heterogeneity matters.
5. Check dependency/multi-arm/split-body handling.
6. Do not pool conceptually different outcome proxies blindly.
7. Meta-regression is observational at study level.
8. Nonsignificant pooled result ≠ equivalence.
9. Pooled significance does not repair bias.
10. Read forest plot beyond diamond.

## 35. Confidence

### HIGH
- meta-analysis can improve precision but can mislead if bias/heterogeneity/reporting bias ignored;
- random-effects models true-effect variation but do not solve heterogeneity;
- random effects can give relatively more weight to smaller studies;
- prediction intervals help communicate between-study variation;
- dependency/shared controls must be handled;
- sensitivity analyses assess robustness.

### PRACTICAL_HEURISTIC
- project meta-analysis appraisal card.

## 36. Sources

1. Cochrane Handbook, Chapter 10, last updated November 2026, version 6.5.1.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-10

2. Cochrane Handbook Chapter 6 — effect measures.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-06

3. Cochrane Handbook Chapter 9 — preparing for synthesis.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-09

## 37. Next dependencies

- RES-17 heterogeneity;
- RES-18 publication/reporting bias;
- RES-21 network meta-analysis.
