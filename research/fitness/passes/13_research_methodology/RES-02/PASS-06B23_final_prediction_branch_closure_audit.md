# RES-02 / PASS-06B23 — Final prediction-branch closure / gap audit after PASS-06B22

Статус: **COMPLETE CLOSURE AUDIT — SYNTHESIS PERMITTED, BRANCH NOT YET SYNTHESIZED**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Purpose

Этот pass — финальный gap/closure audit prediction branch после закрытия current continuous-value gap в PASS-06B22.

Задачи:

1. перечитать текущую валидную prediction-базу;
2. проверить, представлены ли все основные scientific-purpose, temporal, outcome, sampling и lifecycle architectures;
3. проверить последние cross-framework contradictions;
4. проверить current source-version status;
5. специально проверить пограничные кандидаты:
   - screening;
   - monitoring;
   - trajectory forecasting;
   - normative/reference equations;
   - risk stratification;
   - treatment-benefit prediction;
   - population-level forecasting;
   - unsupervised phenotyping;
   - model comparison/extension/ensembles;
6. отделить true RES-02 design-family gaps от statistical/RoB/reporting details;
7. решить, разрешён ли structural synthesis.

## Verdict

**Да. Prediction-branch synthesis теперь РАЗРЕШЁН.**

В текущей базе не найден новый существенный study-design/purpose gap, который нужно закрыть отдельным micro-pass **до synthesis**.

Это не означает, что:

- вся RES-02 закрыта;
- prediction methodology исчерпана статистически;
- prediction branch уже synthesized;
- later appraisal/statistical topics больше не нужны.

Это означает только:

> **taxonomy-level architecture prediction branch достаточно полна для отдельного structural synthesis.**

Следующий шаг — **PASS-06B24 prediction-branch structural synthesis**.

---

# Current repo base audited

Текущая authoritative branch:

`research/fitness-foundation`

Проверенная prediction base:

1. PASS-06A — diagnostic accuracy + measurement-property structures;
2. PASS-06B1 — prognosis core taxonomy;
3. PASS-06B2 — longitudinal cohort structures;
4. PASS-06B3 — routine-care data sources;
5. PASS-06B4 — outcome-dependent sampling in prognosis;
6. PASS-06B5 — prediction-model development;
7. PASS-06B6 — internal validation;
8. PASS-06B7 — internal-external / external validation;
9. PASS-06B8 — recalibration / updating / extension;
10. PASS-06B9 — utility / impact;
11. PASS-06B10 — performance estimands;
12. PASS-06B11 — prediction under treatment;
13. PASS-06B12 — dynamic / landmark prediction;
14. PASS-06B13 — integration audit;
15. PASS-06B14 — binary diagnostic prediction vs DTA;
16. PASS-06B15 — competing risks / recurrent events / multistate prediction;
17. PASS-06B16 — post-deployment / continual updating;
18. PASS-06B17 — gap audit;
19. PASS-06B18 — multicategory / ordinal prediction;
20. PASS-06B19 — multiple-outcome / composite / joint-risk prediction;
21. PASS-06B20 — diagnostic outcome-dependent sampling;
22. PASS-06B21 — repeat final gap audit;
23. PASS-06B22 — current continuous-value prediction / estimation equations.

Historical wide `PASS-06B_prognosis_prediction_designs.md` remains **SUPERSEDED** and is not used as closure evidence.

---

# Source-version audit — 2026-11-17

## 1. Cochrane Prognosis Handbook

The current public linked Chapters 1–3 remain:

> **Draft version (March 2026)**

for Version 1.

Current public pages still state that linked chapters are drafts and may change before finalization.

Current Chapter 2 remains:

> **Draft version (March 2026)**

and continues to state:

- prognosis is longitudinal;
- prospective cohort is the ideal design;
- retrospective cohorts are common;
- RCTs can supply prognosis data;
- nested case-control, case-cohort and class-balanced sampling are possible for binary/time-to-event prognosis;
- absolute probabilities require appropriate sampling recovery.

Current Chapter 3 remains:

> **Draft version (March 2026)**

and remains the current public prognosis-performance/statistical-measures source.

### Publication-status nuance

There is now a source-status inconsistency across Cochrane/Wiley pages:

- Cochrane's public Handbook page still labels current chapters as drafts and says a book version is forthcoming;
- Cochrane's 2026 Methods Report says the chapters have been finalized internally and projected hardcopy by end-2026;
- Wiley currently lists the print book as **March 2027, pre-order**.

Therefore the project must continue citing the **exact March 2026 draft version** when using the currently accessible chapter text, rather than claiming access to an unpublished/future final book edition.

Current sources checked:

- Cochrane Handbook landing page;
- Chapters 1–3;
- Wiley book page.

---

## 2. TRIPOD+AI

Current official TRIPOD site still states:

- 27-item checklist;
- development;
- evaluation/validation;
- extending/updating;
- diagnostic;
- prognostic;
- monitoring;
- screening;
- any modelling technique;
- any outcome/predictor domain.

TRIPOD+AI remains the current replacement for TRIPOD-2015.

No newer general prediction-model reporting framework superseding TRIPOD+AI was identified.

---

## 3. PROBAST+AI

Current published tool remains:

> BMJ 2025;388:e082505.

It continues to separate:

- model development;
- apparent performance;
- internal validation;
- external validation.

It remains applicable regardless of regression vs AI/ML method.

No replacement of PROBAST+AI was identified.

---

## 4. Cochrane DTA Handbook

Current official version remains:

> **2.0.1 (2026)**

with minor corrections.

No newer DTA Handbook version was identified.

---

## 5. QUADAS-3

Current University of Bristol resources state:

- QUADAS-3 is the current recommended QUADAS tool;
- latest tool version = **1.2**;
- QUADAS-3 was published in 2026.

No newer QUADAS version was identified.

---

# Coverage audit — Axis 1: scientific purpose

## Covered

### Overall prognosis

PASS-06B1.

Question:

> What is the average future outcome in a defined population?

### Prognostic factor

PASS-06B1.

Question:

> Is a baseline/startpoint factor associated with future outcome?

### Individual prediction model

PASS-06B1/B5 onward.

Question:

> What is this individual's current/future outcome probability/value using combined predictors?

### Diagnostic accuracy

PASS-06A.

Question:

> How accurately does an index test classify a target condition against a reference standard?

### Measurement property / criterion validity

PASS-06A + B22 boundary.

Question:

> How well does an instrument/method measure the intended construct relative to the relevant measurement property/criterion?

### Model-guided impact

PASS-06B9 cross-links to randomized/quasi-experimental intervention designs.

### Counterfactual prediction / treatment-benefit contrast

PASS-06B11 identifies the causal boundary.

### Verdict

No missing primary scientific-purpose family detected inside the prediction branch.

---

# Coverage audit — Axis 2: prediction time

## Current / zero-horizon

Covered:

1. binary current-condition diagnostic probability — B14;
2. multicategory/ordinal current outcome — B18;
3. current continuous-value estimation — B22.

## Future / non-zero horizon

Covered:

1. future continuous outcomes — B1/B10;
2. future binary outcomes — B1/B10;
3. time-to-event outcomes — B1/B10/B15;
4. future multicategory/ordinal outcomes — B18;
5. multiple/joint outcomes — B19;
6. repeated dynamic future predictions — B12.

### Verdict

No temporal-target gap detected.

---

# Coverage audit — Axis 3: outcome architecture

## Covered

1. continuous;
2. binary;
3. nominal multicategory;
4. ordinal multicategory;
5. ordinary first-event time-to-event;
6. competing risks;
7. recurrent events;
8. multistate transitions;
9. multiple co-occurring outcomes;
10. composite outcomes;
11. joint outcome combinations;
12. mixed-type multiple outcomes at recognition level.

### Hybrids

The current taxonomy permits axes to be combined.

Examples:

- dynamic competing-risk prediction;
- recurrent-event prediction with updated predictors;
- multicategory current diagnosis;
- multistate dynamic prediction;
- joint multiple-outcome future prediction.

A hybrid does not automatically create a new primary design family if it is representable by combinations of already defined axes.

### Verdict

No blocking outcome-architecture gap detected.

---

# Coverage audit — Axis 4: data/design source

## Covered

1. prospective cohort;
2. retrospective/historical cohort;
3. mixed retrospective/prospective follow-up;
4. RCT data reused for prognosis;
5. EHR;
6. registry;
7. claims/administrative data;
8. linked routine data;
9. multicentre/clustered data;
10. nested case-control;
11. case-cohort;
12. class-balanced nested sampling;
13. diagnostic one-gate source population;
14. nested diagnostic phase-2 sampling;
15. diagnostic multiple-gate/two-gate case-control;
16. outcome-dependent/class-balanced training samples.

### Project rule retained

> data source ≠ scientific design ≠ scientific purpose.

### Verdict

No blocking data-architecture gap detected.

---

# Coverage audit — Axis 5: model lifecycle

## Covered

1. development;
2. apparent performance;
3. internal validation;
4. split-sample internal evaluation;
5. bootstrap;
6. cross-validation;
7. nested CV;
8. IECV;
9. external validation;
10. temporal validation;
11. geographical/setting validation;
12. recalibration;
13. coefficient revision;
14. refitting;
15. extension;
16. revalidation;
17. decision utility;
18. model-guided impact;
19. deployment monitoring;
20. periodic updating;
21. trigger-based updating;
22. continual/online updating;
23. rollback/suspension/retirement at lifecycle-recognition level.

### Verdict

No lifecycle-phase gap detected.

---

# Coverage audit — Axis 6: performance target

## Covered

### Binary/current or future probability models

- calibration;
- discrimination;
- overall performance/error;
- threshold metrics;
- decision utility.

### Continuous-value models

- calibration-in-the-large / mean bias;
- calibration slope;
- calibration curve;
- MSE/RMSE;
- MAE;
- residual error;
- R²;
- agreement/interchangeability as an adjacent measurement layer.

### Time-to-event

- horizon-specific calibration/discrimination/error;
- competing-risk versions;
- dynamic landmark+horizon indexing.

### Multicategory

- category-specific calibration;
- global/pairwise discrimination;
- overall probability performance.

### Multiple outcomes

- marginal performance;
- joint calibration/performance;
- outcome-wise vs combination-wise evaluation.

### Recurrent/multistate

Target-specific performance recognized; exact metrics deferred because methodology is less standardized.

### Verdict

No new design-family gap; remaining issues are statistical-method detail.

---

# Coverage audit — Axis 7: static vs dynamic

## Covered

### Static prediction

One prediction startpoint with baseline/current information.

### Dynamic prediction

Repeated renewed prediction times using evolving participant history.

### Continual model updating

Prediction function changes across calendar-time deployment data.

### Critical distinction retained

> **dynamic prediction ≠ continual model updating.**

### Verdict

No gap detected.

---

# Coverage audit — Axis 8: factual vs causal

## Covered

### Factual prediction

Outcome under actually occurring/current management policy.

### Counterfactual prediction

Outcome under specified hypothetical intervention.

### Treatment-effect prediction

Contrast between potential outcomes under at least two strategies.

### Project rule

Treatment-effect prediction is **not** ordinary prognostic-risk prediction.

Its detailed methods belong to causal-effect / individualized treatment-effect methodology.

### Verdict

No need for a new ordinary prediction-study family pass.

---

# Coverage audit — Axis 9: measurement boundary

## Covered

1. index test vs prediction model;
2. DTA vs diagnostic probability model;
3. measurement property vs prediction model;
4. current-value prediction equation vs criterion-validity/method comparison;
5. direct measurement vs model-derived estimate;
6. reference method ≠ automatically error-free truth;
7. device/protocol transportability.

### Verdict

The B22 gap is closed at taxonomy level.

---

# Borderline candidate audit

## 1. Screening models

### Current source status

TRIPOD+AI explicitly includes screening purposes.

### Decision

**Not a separate model-study family.**

A screening model can be:

- diagnostic/current-condition;
- prognostic/future-risk;

depending on target timing.

Screening describes intended use/care-pathway position.

---

## 2. Monitoring models

### Current source status

TRIPOD+AI explicitly includes monitoring purposes.

### Decision

**Not a separate model-study family.**

A monitoring model may estimate:

- current state;
- future deterioration/event;
- updated dynamic risk.

Classify from target timing/outcome architecture.

---

## 3. Trajectory forecasting

### Current literature check

2026 literature includes prediction of longitudinal symptom trajectories and dynamic survival trajectories.

### Decision

**Not a new high-level design family by itself.**

Depending on target it can map to:

- future continuous multi-horizon prediction;
- multicategory trajectory-class prediction;
- dynamic prediction;
- multistate prediction;
- recurrent-event prediction.

Specific latent-trajectory/time-series algorithms are statistical/model-family choices.

### Caveat

If later exercise-specific evidence contains a trajectory structure that cannot be mapped cleanly to these axes, reopen locally rather than pre-creating a new taxonomy family.

---

## 4. Normative/reference equations

### Decision

**Not a blocking prediction-family gap.**

Two distinct inferential purposes exist:

1. estimate an individual's current target value from covariates:
   - route to B22 current-value prediction;

2. describe conditional reference distributions/centiles in a reference population:
   - primarily descriptive/reference-distribution work rather than ordinary individual prediction-model validation.

The second belongs closer to descriptive/normative methodology and should not be silently converted into clinical prediction evidence.

### Practical fitness relevance

Examples:

- age/sex reference centiles;
- expected strength norms;
- spirometric reference equations.

This boundary should be retained in later purpose-vs-design synthesis, but does not require another B-branch pass now.

---

## 5. Risk scores / stratification scores without calibrated probabilities

### Decision

**Covered.**

A model may output:

- probability;
- score;
- class/risk category.

Hard stratification is a downstream model-output form.

If the score is intended only for ranking/classification, calibration of absolute probabilities may not be its target; this changes performance interpretation, not the lifecycle/design family.

---

## 6. Added predictive value / novel marker studies

### Decision

**Covered.**

PASS-06B5:
- added predictor/incremental predictive value = development/extension.

PASS-06B8:
- extended model is a new model version requiring evaluation.

No new family.

---

## 7. Comparative evaluation of several fixed models

### Decision

**Covered.**

TRIPOD+AI explicitly permits comparison of multiple models during evaluation.

This is comparative external/internal model evaluation, not a separate scientific-purpose family.

---

## 8. Ensembles / stacking / transfer learning / federated learning

### Decision

**Not study-design families.**

They are:

- model-development strategies;
- adaptation/update strategies;
- computational/data-governance architectures.

Scientific lifecycle classification remains B5/B8/B16.

---

## 9. Unsupervised clustering / phenotyping

### Decision

**Outside ordinary prediction-model branch.**

Without a prespecified target outcome/current or future value, clustering/phenotyping is not a prediction model under the TRIPOD/PROBAST framework.

It should be classified as exploratory/descriptive/latent-structure work depending the actual question.

No B-branch blocker.

---

## 10. Population-level forecasting

### Decision

**Not an unfilled individual prediction-model family.**

If the target is population-average future outcome:

- overall prognosis route.

If the target is aggregate temporal counts/rates:

- ecological/time-series/descriptive forecasting architecture may apply.

This should not be confused with individualized prediction models.

No blocker for this branch.

---

## 11. Individualized treatment-benefit prediction

### Decision

**Boundary already correctly routed.**

If the output is:

`Y^A - Y^B`

or another contrast between treatment strategies, the scientific target is causal treatment-effect heterogeneity / individualized treatment effect.

B11 already records:

- high risk ≠ high treatment benefit;
- counterfactual prediction requires causal identification.

Detailed ITE methodology is not required to close ordinary prognosis/prediction taxonomy.

---

## 12. Silent/prospective validation

### Decision

**Not a separate family.**

It is an external-evaluation implementation/chronology axis.

B7 already requires:
- model frozen;
- functional independence;
- later/new participants when temporal external validation is claimed.

---

## 13. Prediction intervals / individual uncertainty

### Decision

**Important, but statistical.**

B22 records individual uncertainty for continuous prediction.

Exact interval construction/coverage belongs to later statistical methodology.

No separate study-design pass required.

---

## 14. Reference-method measurement error

### Decision

**Important, but statistical/measurement methodology.**

B22 records:
- reference is not automatically truth;
- observed prediction error includes reference measurement error.

Formal errors-in-variables/latent-truth methods belong later.

No new design family.

---

# Contradiction audit

## 1. Diagnostic vs prognostic

Resolved by target time.

- current binary/multicategory/continuous → diagnostic/current-outcome;
- future outcome → prognostic.

No contradiction.

## 2. DTA vs diagnostic prediction

Resolved by inferential target.

- fixed index-test classification accuracy → DTA;
- individual probability/value prediction → prediction-model framework;
- a fixed diagnostic model can act as an index test.

No contradiction.

## 3. Current-value prediction vs criterion validity

Resolved by purpose.

- learn/evaluate an estimation function → prediction model;
- assess whether method reflects criterion / is interchangeable → measurement-property layer;
- both can coexist.

No contradiction.

## 4. Multicategory vs multiple outcomes

Resolved by mutual exclusivity.

- one K-category outcome → B18;
- multiple co-occurring outcome variables → B19.

No contradiction.

## 5. Competing risk vs multiple outcomes

Resolved.

- competing first-event outcomes → B15;
- broader co-occurring/composite/joint risk → B19.

No contradiction.

## 6. Dynamic prediction vs model updating

Resolved.

- new participant history changes individual prediction → B12;
- new deployment data change model function → B16.

No contradiction.

## 7. Validation vs updating

Resolved.

- fixed model first;
- update creates new version;
- update data become development data for new version.

No contradiction.

## 8. Factual vs counterfactual prediction

Resolved by treatment-policy estimand.

No contradiction.

## 9. Data source vs design

Resolved.

EHR/registry/RCT/etc. do not independently define scientific purpose.

No contradiction.

---

# Known limitations deliberately deferred

The following remain **known open methodological details**, but none is a missing high-level RES-02 prediction design family:

1. exact development sample-size calculations;
2. external-validation sample size;
3. missing-data handling;
4. measurement-error correction;
5. prediction intervals;
6. exact calibration estimators;
7. exact discrimination estimators;
8. censoring weights;
9. left/interval censoring;
10. delayed entry;
11. fine details of recurrent-event metrics;
12. fine details of multistate metrics;
13. causal identification/estimators for counterfactual prediction;
14. individualized treatment-effect algorithms;
15. fairness/equity metrics;
16. subgroup-performance statistics;
17. exact drift-detection algorithms;
18. online-learning algorithms;
19. multicategory utility methods;
20. multiple-outcome utility/decision analysis;
21. exact threshold selection;
22. formal uncertainty comparison between models;
23. errors-in-variables / latent true-value models;
24. detailed Bland–Altman variants;
25. reporting/adherence scoring.

These are routed to later statistical, appraisal, causal or measurement-methodology work.

---

# Fitness/exercise domain closure check

The prediction taxonomy now has explicit structures for:

1. current injury/condition probability;
2. current multicategory/ordinal condition;
3. current VO₂max/fat mass/1RM estimation;
4. future continuous adaptation/performance;
5. adherence/dropout binary risk;
6. time-to-first injury/dropout;
7. competing event risk;
8. recurrent injury/interruption burden;
9. return-to-training / reinjury multistate transitions;
10. multiple co-occurring outcomes;
11. composite outcomes;
12. joint benefit/harm combinations;
13. repeated dynamic readiness/risk prediction;
14. prediction under changing training/management;
15. outcome-enriched/class-balanced sampling;
16. model development/internal/external validation;
17. recalibration/update/extension;
18. deployment monitoring/drift/continual update;
19. model-guided decision utility;
20. model-guided impact/effectiveness boundary;
21. measurement-validity / estimation-equation boundary.

No material fitness-specific prediction-study family is currently known to be absent at taxonomy level.

---

# Version-status conclusion

As of 2026-11-17:

1. **Cochrane Prognosis Handbook Chapters 1–3:** public accessible text remains Draft March 2026.
2. **Wiley print edition:** currently listed as March 2027 pre-order.
3. **TRIPOD+AI:** current general reporting framework; no superseding general guideline identified.
4. **PROBAST+AI:** current 2025 prediction-model quality/RoB/applicability tool.
5. **Cochrane DTA Handbook:** Version 2.0.1 (2026).
6. **QUADAS-3:** current recommended DTA RoB/applicability tool; latest tool version 1.2.

### Project rule

At synthesis, cite exact source version/date and do not silently treat the forthcoming final Cochrane book as already available.

---

# Closure decision

## Remaining blocking prediction-design gap?

**NO.**

## Is structural synthesis now permitted?

**YES.**

## Is prediction branch already synthesized/closed?

**NO.**

The branch still requires one dedicated structural synthesis pass before it can be treated as complete enough for integration into the broader RES-02 design taxonomy.

---

# Next micro-pass

**RES-02 / PASS-06B24 — prediction-branch structural synthesis: compress PASS-06B1…B23 into one canonical nonredundant taxonomy / decision matrix covering purpose, target time, outcome architecture, data source/sampling, development-evaluation lifecycle, performance, treatment/causal boundary, dynamic/lifecycle structure, diagnostic/DTA/measurement boundaries, and fitness-specific examples; preserve limitations and deferred topics.**

STOP after this saved audit.
