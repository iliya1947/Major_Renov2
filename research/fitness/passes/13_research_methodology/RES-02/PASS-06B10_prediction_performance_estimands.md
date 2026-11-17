# RES-02 / PASS-06B10 — Prediction-performance estimand architecture

Статус: **COMPLETE MICRO-PASS — RES-02 remains RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. что именно является prediction-performance estimand;
2. distinction between:
   - discrimination;
   - calibration;
   - overall performance / fit;
   - absolute-risk accuracy;
   - decision utility;
3. why no single performance metric is sufficient;
4. outcome-type dependence:
   - continuous;
   - binary;
   - time-to-event;
5. horizon-specific performance;
6. global-vs-time-specific time-to-event metrics;
7. calibration hierarchy at taxonomy level;
8. why overall calibration can hide local miscalibration;
9. relation between discrimination and calibration;
10. why good discrimination cannot substitute for calibration;
11. why absolute-risk applications especially require calibration;
12. Brier/MSE/R²-type overall performance as combined-error summaries;
13. threshold/classification metrics as conditional downstream quantities;
14. decision utility as a separate performance/decision layer;
15. how these estimands map to:
   - apparent performance;
   - internal validation;
   - external validation;
16. why metric name does not determine evidence phase;
17. why performance must be tied to a specific model version, population, setting and horizon;
18. structural record for prediction-performance reporting.

Не покрывается здесь:

- formulas beyond conceptual definitions;
- detailed confidence-interval methods;
- exact calibration-index mathematics;
- detailed competing-risk performance measures;
- decision-curve mathematics;
- sample-size calculations;
- subgroup/fairness performance in depth;
- causal effects of model use;
- final prognosis/prediction synthesis.

---

# Sources checked

## 1. Cochrane Handbook for Systematic Reviews of Prognosis Research and Prediction Models — Chapter 3

Riley RD, Moons KGM, Snell KIE, Debray TP, Collins GS.  
**Chapter 3: Statistical measures in prognosis research.**  
Draft version: **March 2026**.

Current official Cochrane material checked 2026-11-17.

Key current guidance:

- prediction-model performance includes:
  - calibration;
  - discrimination;
  - overall fit;
  - clinical utility;
- calibration compares predicted and observed outcomes;
- discrimination quantifies separation/ranking for binary/time-to-event outcomes;
- overall fit can be represented by measures such as mean squared error/Brier score or R²-type summaries;
- for time-to-event outcomes, performance can be evaluated at particular prediction horizons;
- clinical utility belongs to a separate threshold-based decision layer.

https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-3-statistical-measures-prognosis-research

### Source-status note

This Cochrane chapter remains a **draft March 2026** and must be version-checked again at closure/audit.

---

## 2. Riley et al. — External validation, part 2

Riley RD, Archer L, Snell KIE, et al.  
**Evaluation of clinical prediction models (part 2): how to undertake an external validation study.**  
BMJ. 2024;384:e074820.

Current article checked 2026-11-17.

Key guidance:

- external validation should examine:
  - overall fit;
  - calibration;
  - discrimination;
  - and clinical usefulness when predictions guide decisions;
- calibration should be checked across the **entire range of predictions**;
- for time-to-event models, calibration should be examined at each relevant prediction time point;
- no single calibration summary is sufficient;
- external performance depends on the validation population, setting, case mix, predictor/outcome definitions and calendar context.

https://www.bmj.com/content/384/bmj-2023-074820

---

## 3. Efthimiou et al. — prediction-model development guide

**Developing clinical prediction models: a step-by-step guide.**  
BMJ. 2024;386:e078276.

Key points used:

- a model should have both adequate calibration and discrimination;
- good discrimination can coexist with poor calibration;
- continuous, binary and time-to-event outcomes require different performance summaries;
- Brier score / mean squared error and R²-type summaries quantify overall performance;
- time-to-event performance can be time-specific or summarized across follow-up;
- decision-analytic utility is distinct from statistical prediction accuracy.

https://www.bmj.com/content/386/bmj-2023-078276

---

## 4. PROBAST+AI

Moons KGM, Damen JAA, Kaul T, et al.  
**PROBAST+AI: an updated quality, risk of bias, and applicability assessment tool for prediction models using regression or artificial intelligence methods.**  
BMJ. 2025;388:e082505.

Current publication checked 2026-11-17.

Relevant taxonomy:

- model evaluation estimates predictive performance;
- performance examples include:
  - calibration;
  - discrimination;
  - net benefit;
- performance may be:
  - apparent;
  - internally validated;
  - externally validated.

https://www.bmj.com/content/388/bmj-2024-082505

---

## 5. Binuya et al. — evaluation/updating guidance systematic review

Binuya MAE, Engelhardt EG, Schats W, Schmidt MK, Steyerberg EW.  
**Methodological guidance for the evaluation and updating of clinical prediction models: a systematic review.**  
BMC Med Res Methodol. 2022;22:316.

Relevant point:

- no universal cut-off of discrimination/calibration alone defines whether a model is useful;
- practical usefulness requires decision-analytic/contextual interpretation;
- good statistical performance does not automatically imply clinical/practical utility.

https://pmc.ncbi.nlm.nih.gov/articles/PMC9742671/

---

# Part A — Performance is not one quantity

## 1. Core correction

### Established finding
**Confidence: HIGH**

"Model performance" is not one scalar property.

At minimum, separate:

1. **discrimination**
   - does the model rank/separate participants appropriately?;

2. **calibration**
   - do predicted values/probabilities agree with observed outcomes?;

3. **overall performance**
   - what is the aggregate prediction error/explained information?;

4. **decision utility**
   - would decisions based on predictions at relevant thresholds have net value?

### Project rule

A report stating only:

> model performance was good

is methodologically incomplete unless the dimension(s) are specified.

---

# Part B — Discrimination

## 2. What discrimination asks

### Established finding
**Confidence: HIGH**

For binary/time-to-event outcomes, discrimination asks whether the model assigns relatively higher predicted risk to individuals who experience the outcome than to those who do not / experience it later.

It is fundamentally a **ranking/separation** property.

Typical measures:

- c-statistic / AUROC for binary outcomes;
- c-index and time-dependent discrimination measures for survival outcomes.

---

## 3. Discrimination does not tell whether probabilities are numerically correct

### Established finding
**Confidence: HIGH**

A model can rank participants correctly while systematically predicting:

- 40% when true risk is 20%;
- 20% when true risk is 10%.

Ranking may remain nearly unchanged.

Therefore good discrimination does not imply good calibration.

### Project consequence

Any model intended to provide absolute probabilities must not be evaluated by discrimination alone.

---

## 4. Discrimination is outcome-type dependent

### Established finding
**Confidence: HIGH**

Cochrane explicitly notes:

- discrimination is meaningful for binary/time-to-event predictions;
- it is not the primary analogous concept for continuous outcomes.

For continuous outcomes, model evaluation instead emphasizes:

- observed-vs-predicted agreement;
- residual/prediction error;
- explained variance;
- calibration.

---

# Part C — Calibration

## 5. What calibration asks

### Established finding
**Confidence: HIGH**

Calibration asks:

> Do predicted outcome values/probabilities agree with observed outcome values/probabilities?

For risk prediction this means:

- participants assigned approximately 20% risk should, in an appropriate aggregate sense, experience about 20% event probability.

---

## 6. Calibration is central to absolute-risk prediction

### Established finding
**Confidence: HIGH**

If the intended output is an individual absolute probability:

> "risk = 35% by 12 weeks"

then numerical probability accuracy matters directly.

### Project rule

For absolute-risk uses:

> calibration is not optional secondary decoration.

A model with high discrimination but serious miscalibration cannot be treated as producing trustworthy absolute probabilities.

---

# Part D — Calibration is multi-dimensional

## 7. Calibration-in-the-large / O:E

### Established finding
**Confidence: HIGH**

These summarize whether the model is systematically over- or under-predicting outcomes **on average**.

They answer:

> Are total/mean predicted outcomes aligned with total/mean observed outcomes?

They do not guarantee calibration across the prediction range.

---

## 8. Calibration slope

### Established finding
**Confidence: HIGH**

Calibration slope summarizes whether predictions are:

- too extreme;
- or too compressed

relative to observed outcomes.

This can reveal overfitting/transport problems not captured by mean calibration.

---

## 9. Flexible calibration curve

### Established finding
**Confidence: HIGH**

BMJ guidance treats the calibration curve across the full range of predicted values as fundamental.

It can reveal:

- underprediction at low risk;
- overprediction at high risk;
- nonlinear/local miscalibration.

### Project rule

Do not infer:

> calibration is good

from O:E or calibration-in-the-large alone.

---

## 10. Good mean calibration can hide severe local miscalibration

### Established finding
**Confidence: HIGH**

Underprediction in one region and overprediction in another can cancel out.

Then:

- mean predicted risk ≈ mean observed risk;
- O:E ≈ 1;

while individual risk predictions remain materially wrong over important regions.

Therefore calibration summaries must be interpreted jointly.

---

# Part E — Calibration hierarchy

## 11. Project-level calibration hierarchy

### Evidence-supported synthesis
**Confidence: HIGH**

For taxonomy, distinguish:

1. mean/overall calibration;
2. spread/extremeness calibration;
3. calibration across the full prediction range;
4. calibration at clinically/practically important thresholds/subgroups;
5. calibration at each relevant time horizon for time-to-event models.

### Important qualification

This is not a single "score hierarchy" where one number replaces the rest.

It is a hierarchy of increasingly detailed calibration questions.

---

# Part F — Overall performance

## 12. Overall performance combines aspects of prediction error

### Established finding
**Confidence: HIGH**

Examples include:

- mean squared error for continuous outcomes;
- Brier score for binary/time-to-event predictions;
- R²-type measures.

These summarize aggregate discrepancy/information rather than isolate only ranking or calibration.

---

## 13. Overall performance is not a substitute for decomposition

### Established finding
**Confidence: HIGH**

Two models can have similar overall error while differing meaningfully in:

- calibration;
- discrimination;
- decision usefulness.

### Project rule

Use overall performance as an additional dimension, not as the only model-evaluation target.

---

# Part G — Outcome type determines performance architecture

## 14. Continuous outcomes

### Established finding
**Confidence: HIGH**

Relevant questions include:

- mean bias;
- observed vs predicted values;
- calibration curve/line;
- mean squared error;
- R²/explained variation.

### Project note

AUC/c-statistic is not the default performance architecture for ordinary continuous-outcome prediction.

---

## 15. Binary outcomes

### Established finding
**Confidence: HIGH**

Typical architecture:

1. calibration;
2. discrimination;
3. overall prediction error;
4. utility if a threshold-based action is intended.

---

## 16. Time-to-event outcomes

### Established finding
**Confidence: HIGH**

Performance must additionally account for:

- censoring;
- prediction horizon;
- potentially competing events;
- time-specific vs across-follow-up metrics.

### Project rule

Never classify survival-model performance without recording the relevant time basis.

---

# Part H — Prediction horizon is part of the performance estimand

## 17. Performance at 1 year is not automatically performance at 5 years

### Established finding
**Confidence: HIGH**

A prognostic model's prediction target includes its horizon.

For a time-to-event model:

- calibration at 1 year;
- calibration at 5 years

are distinct performance estimands.

The same applies to time-specific discrimination.

### Project consequence

Do not pool/report performance from different horizons as though they were interchangeable.

---

## 18. Global discrimination can differ from horizon-specific discrimination

### Established finding
**Confidence: HIGH**

Some survival discrimination measures summarize ranking across the follow-up period.

Time-dependent AUC can instead target a specific horizon.

Therefore:

> global c-index

and:

> AUC at 5 years

do not answer exactly the same performance question.

### Project record

Store:

- metric;
- horizon/time basis;
- censoring handling if relevant.

---

# Part I — Absolute-risk scale

## 19. Absolute-risk prediction depends on baseline outcome distribution

### Established finding
**Confidence: HIGH**

Absolute predicted risk combines:

- relative predictor information;
- baseline outcome risk/hazard.

This is why outcome-dependent sampling (PASS-06B4), setting changes (PASS-06B7) and recalibration (PASS-06B8) matter.

### Project synthesis

Discrimination may sometimes remain relatively stable while absolute risk becomes miscalibrated because baseline event rates change.

---

## 20. Performance on an artificial sampled scale is not population risk performance

### Cross-pass integration
**Confidence: HIGH**

If evaluation uses:

- class-balanced data;
- NCC;
- case-cohort;

then absolute-risk/calibration metrics require sampling-aware recovery of the source distribution.

### Project rule

The estimand layer must match the sampling design.

Do not report "calibration" on a deliberately distorted event prevalence without appropriate correction.

---

# Part J — Classification metrics

## 21. Sensitivity/specificity/F1 require an operating threshold

### Established finding
**Confidence: HIGH**

Thresholded classification metrics depend on converting continuous predicted risk into categories/actions.

They answer:

> How does this particular operating threshold classify individuals?

They do not describe the complete probability model.

---

## 22. Thresholded metrics should not replace calibration/discrimination

### Established finding
**Confidence: HIGH**

Cochrane 2026 emphasizes evaluating:

- c-statistic;
- calibration;
- utility

rather than defaulting to ordinary classification measures for probabilistic prediction models.

### Project rule

Use sensitivity/specificity etc. only when:

- a real threshold/action is prespecified and meaningful;
- the question actually concerns classification at that operating point.

---

# Part K — Decision utility is a separate estimand layer

## 23. Statistical performance and utility answer different questions

### Established finding
**Confidence: HIGH**

Calibration/discrimination ask whether predictions are statistically accurate/usefully ordered.

Net benefit asks:

> Would acting on predictions at a particular threshold have expected net value relative to alternative strategies?

This adds:

- threshold;
- harm-benefit tradeoff;
- comparator decision policy.

---

## 24. Utility is threshold- and prevalence/context-dependent

### Established finding
**Confidence: HIGH**

Net benefit depends on:

- threshold probability;
- observed outcome proportion/risk context;
- decision consequences.

Therefore utility cannot be transported automatically from one setting to another merely because discrimination is similar.

---

# Part L — Metric does not determine evidence phase

## 25. Same metric can exist at multiple evaluation phases

### Established finding
**Confidence: HIGH**

AUC can be:

- apparent AUC;
- internally validated AUC;
- externally validated AUC.

Calibration slope can be:

- apparent;
- internally validated;
- external.

Brier score can likewise be estimated in different phases.

### Project rule

Evidence phase is determined by:

> relation of evaluation data to development data,

not by the metric.

---

## 26. Performance records require two axes

### Project architecture
**Confidence: HIGH**

Every performance result should be represented as:

1. **what is being measured?**
   - calibration;
   - discrimination;
   - overall performance;
   - utility;

2. **where/how is it measured?**
   - apparent;
   - internal validation;
   - IECV;
   - external validation.

Example:

> external 5-year calibration slope

contains much more information than:

> validation metric.

---

# Part M — Apparent performance

## 27. Apparent estimands

### Established finding
**Confidence: HIGH**

All major performance dimensions can be calculated in development data.

But they remain:

> apparent performance.

### Project consequence

Excellent apparent:

- AUC;
- calibration;
- Brier score

does not imply generalization.

Phase classification always comes first.

---

# Part N — Internal validation

## 28. Internal validation should estimate the same intended performance dimensions after optimism correction/resampling

### Established finding
**Confidence: HIGH**

Internal validation can estimate:

- discrimination;
- calibration;
- overall performance;
- utility,

provided the **whole model-development process** is included inside resampling as established in PASS-06B6.

### Project rule

"Internally validated model" is incomplete without saying **which performance dimensions** were internally validated.

---

# Part O — External validation

## 29. Minimum external performance architecture

### Established finding
**Confidence: HIGH**

Current BMJ guidance states external validation should examine at minimum:

1. overall fit/performance;
2. calibration;
3. discrimination;

and utility when decisions are intended.

### Project rule

An external-validation paper reporting only AUC is incomplete evidence for an absolute-risk model.

---

## 30. External validation should preserve model specification

### Cross-pass integration
**Confidence: HIGH**

Performance must first be estimated for the **fixed original model**.

If recalibration or coefficient update occurs:

- original-model performance remains one result;
- updated-model performance belongs to a new model version.

This follows PASS-06B8.

---

# Part P — Population/setting dependence

## 31. Performance is not an intrinsic immutable property of the model

### Established finding
**Confidence: HIGH**

Observed performance depends on:

- model version;
- target population;
- case mix;
- baseline risk;
- setting;
- predictor measurement;
- outcome definition;
- calendar period;
- prediction horizon.

### Project language rule

Avoid:

> "AUC of the model is 0.80"

without context.

Prefer:

> "AUC was 0.80 in population X, setting Y, horizon Z, under validation type V."

---

## 32. Discrimination can change because case mix changes

### Established methodological principle
**Confidence: HIGH**

A population with broader predictor/risk heterogeneity can produce different discrimination than a narrower population, even with the same underlying model.

Therefore comparing AUCs across datasets is not a pure test of model quality unless population differences are considered.

---

## 33. Calibration is often more directly sensitive to transport shifts

### Established finding
**Confidence: HIGH**

Changes in:

- baseline event rate;
- predictor-outcome relationships;
- care/training environment

can cause calibration drift.

This is why calibration must be reevaluated in new settings even if discrimination remains acceptable.

---

# Part Q — Subgroups and local performance

## 34. Overall performance can hide subgroup failure

### Established finding
**Confidence: HIGH**

BMJ external-validation guidance recommends evaluating overall population performance and relevant subgroups/fairness dimensions.

### Scope decision

This pass records the structural requirement only.

Detailed subgroup/fairness methodology is deferred.

---

# Part R — Fitness/exercise translations

## 35. Dropout model with high AUC but poor calibration

Model:

- AUC = strong;
- predicts many high-risk trainees at 60-80%;
- actual risks in that range are 30-40%.

Interpretation:

- discrimination may be useful;
- absolute probabilities are not trustworthy;
- threshold-based interventions may be misallocated.

Do not conclude:

> model performs well overall

from AUC alone.

---

## 36. Horizon-specific strength prediction

Model predicts:

- probability of failing to reach a strength target by 4 weeks;
- by 12 weeks;
- by 24 weeks.

Performance must be evaluated separately at those horizons.

Good 4-week calibration does not prove good 24-week calibration.

---

## 37. Utility example

A dropout model is statistically accurate.

Operational decision:

> extra coach contact if predicted dropout risk ≥30%.

Need separate evidence that:

- 30% is a meaningful threshold;
- model-guided strategy has net benefit versus alternatives.

This is not inferable from AUC/calibration alone.

---

# Part S — Structural record produced by PASS-06B10

## 38. Prediction-performance estimand record

For every reported performance estimate, record:

1. model identifier/version;
2. model purpose:
   - diagnostic;
   - prognostic;
3. outcome type:
   - continuous;
   - binary;
   - time-to-event;
4. population;
5. setting;
6. calendar period;
7. prediction startpoint;
8. prediction horizon;
9. evaluation phase:
   - apparent;
   - internal validation;
   - IECV;
   - external validation;
10. sampling design:
    - full cohort;
    - case-cohort;
    - NCC;
    - class-balanced;
    - other;
11. sampling correction applied if needed?;
12. performance dimension:
    - calibration;
    - discrimination;
    - overall performance;
    - utility;
13. exact metric;
14. time-specific or global?;
15. censoring/competing-event handling if relevant;
16. calibration:
    - O:E / mean calibration;
    - calibration-in-the-large;
    - calibration slope;
    - smooth calibration curve;
    - other;
17. discrimination:
    - c-statistic/AUC;
    - c-index;
    - time-dependent AUC;
    - other;
18. overall performance:
    - MSE;
    - Brier score;
    - R²-type;
    - other;
19. threshold/classification metric reported?;
20. threshold prespecified/meaningful?;
21. net benefit/decision curve reported?;
22. comparator decision strategies;
23. uncertainty interval reported?;
24. subgroup performance reported?;
25. original or updated model?;
26. conclusion supported:
    - ranking only;
    - absolute-risk accuracy;
    - overall prediction accuracy;
    - potential decision utility;
27. unresolved applicability/performance issues.

---

# Practical rules produced by PASS-06B10

1. Prediction performance is multidimensional; no single metric is sufficient for all intended uses.
2. Discrimination measures ranking/separation, not numerical probability accuracy.
3. Calibration measures agreement between predicted and observed outcomes.
4. Good discrimination can coexist with poor calibration.
5. Absolute-risk prediction requires explicit calibration assessment.
6. Mean calibration/O:E alone can hide severe local miscalibration.
7. Calibration slope captures a different failure dimension from mean calibration.
8. Flexible calibration curves are needed to inspect calibration across the prediction range.
9. Overall performance metrics summarize aggregate prediction error but do not replace calibration/discrimination decomposition.
10. Outcome type determines appropriate performance architecture.
11. AUC/c-statistic is not the default metric for continuous-outcome prediction.
12. Time-to-event models require censoring-aware and horizon-aware evaluation.
13. Performance at one prediction horizon is not automatically evidence for another horizon.
14. Global survival discrimination and horizon-specific discrimination are distinct estimands.
15. Absolute-risk performance depends on baseline outcome distribution and therefore on sampling/setting.
16. Outcome-enriched samples require design-aware correction before evaluating absolute-risk/calibration targets.
17. Sensitivity/specificity/F1 are threshold-dependent classification quantities, not complete probabilistic-model evaluation.
18. Threshold metrics are appropriate only when a real operating threshold/decision exists.
19. Decision utility adds a separate threshold + benefit/harm + comparator layer.
20. A model can have acceptable statistical performance yet little decision utility.
21. The same metric can be apparent, internally validated or externally validated.
22. Metric identity does not determine evidence phase; data relationship does.
23. Every performance estimate needs both:
   **performance dimension + validation phase**.
24. External validation of an absolute-risk model should not report discrimination alone.
25. Performance belongs to a specific model version, population, setting, calendar period and horizon.
26. Model performance is not an immutable intrinsic property.
27. Cross-population AUC differences can reflect case-mix changes, not only model quality changes.
28. Calibration is often particularly sensitive to changes in baseline risk and setting.
29. Updated-model performance must be separated from original-model validation performance.
30. Project architecture:
   **model/version + target/horizon + evaluation phase + sampling design + performance dimension + metric + context + uncertainty**.

---

# Important boundary finding

This PASS deliberately does **not** choose universal numeric cut-offs such as:

> AUC > X = good model.

Current methodological guidance emphasizes that useful performance is context-dependent.

For practical decisions:

- required calibration/discrimination depends on the consequences of errors;
- decision utility depends on thresholds and downstream actions;
- no universal AUC or calibration cut-off can substitute for the actual decision context.

---

# What remains unresolved after PASS-06B10

The prognosis/prediction branch remains **RESEARCHING**.

Still requires separate deep blocks on at least:

1. prediction under treatment / heterogeneous management;
2. treatment paradox / treatment-drop-in effects;
3. distinction between prognostic prediction and counterfactual treatment-effect prediction;
4. dynamic/landmark prediction with time-updated predictors;
5. continual/periodic model updating if needed;
6. integration check with diagnostic prediction;
7. synthesis of PASS-06B1…B10;
8. dedicated prognosis/prediction gap audit.

## Next micro-pass

**RES-02 / PASS-06B11 — prediction under treatment and management: baseline prognosis under heterogeneous interventions, treatment as predictor/context, treatment paradox, model-guided treatment feedback, and the boundary between ordinary prognostic prediction and counterfactual treatment-effect prediction.**

STOP after this saved micro-pass.
