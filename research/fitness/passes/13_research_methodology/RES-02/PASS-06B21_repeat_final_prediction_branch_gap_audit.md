# RES-02 / PASS-06B21 — Repeat final prediction-branch gap audit after PASS-06B18…B20

Статус: **COMPLETE GAP AUDIT — synthesis NOT YET PERMITTED**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Purpose

Этот pass повторно проверяет всю актуальную prediction-ветку после закрытия gaps из PASS-06B17.

Задачи:

1. перечитать PASS-06A + PASS-06B1…PASS-06B20;
2. проверить противоречия после B18–B20;
3. проверить diagnostic/prognostic cross-framework transfers;
4. проверить current source/tool versions;
5. проверить outcome structures и prediction-use structures, которые могли остаться вне taxonomy;
6. проверить fitness/exercise-specific omissions;
7. отделить true RES-02 design gaps от later statistical/RoB/reporting details;
8. решить, разрешён ли prediction-branch synthesis.

## Verdict

**Synthesis пока НЕ разрешён.**

PASS-06B18…B20 закрыли три blockers из PASS-06B17, но repeat audit обнаружил один новый **blocking taxonomy gap**:

> **current continuous-value diagnostic prediction / estimation equations and their boundary with measurement-property / criterion-validity studies.**

Это особенно важно для физической подготовки:

- VO₂max prediction equations;
- body-fat/fat-mass estimation equations;
- 1RM estimation equations;
- current performance/capacity estimates;
- other models replacing a difficult/expensive current measurement.

После отдельного pass нужен ещё один короткий final gap audit before synthesis.

---

# Exact project base audited

Проверены текущие files:

1. PASS-06A — diagnostic accuracy + measurement-property study structures;
2. PASS-06B1 — prognosis core taxonomy;
3. PASS-06B2 — longitudinal cohort structures;
4. PASS-06B3 — routine-care data sources;
5. PASS-06B4 — prognosis outcome-dependent sampling;
6. PASS-06B5 — prediction-model development;
7. PASS-06B6 — internal validation;
8. PASS-06B7 — IECV/external validation;
9. PASS-06B8 — recalibration/updating/extension;
10. PASS-06B9 — utility/impact;
11. PASS-06B10 — performance estimands;
12. PASS-06B11 — prediction under treatment;
13. PASS-06B12 — dynamic/landmark prediction;
14. PASS-06B13 — integration audit;
15. PASS-06B14 — diagnostic prediction vs DTA;
16. PASS-06B15 — competing/recurrent/multistate outcomes;
17. PASS-06B16 — post-deployment lifecycle;
18. PASS-06B17 — second gap audit;
19. PASS-06B18 — multicategory/ordinal prediction;
20. PASS-06B19 — multiple-outcome/composite/joint risk;
21. PASS-06B20 — diagnostic outcome-dependent sampling.

Historical broad PASS-06B remains superseded and was not treated as authoritative.

---

# Source-version audit — 2026-11-17

## 1. Cochrane Prognosis Handbook

Current public handbook page still states that linked chapters are drafts and may change before finalization.

Current Chapter 1 is still:

> **Draft version (March 2026)**  
> Cochrane Handbook for Systematic Reviews of Prognosis Research and Prediction Models, Version 1.

The current Chapter 1 explicitly states:

- prognostic prediction → future outcome;
- diagnostic prediction → current outcome;
- diagnostic prediction may include not only current disease probability but also **the current value of an outcome that is difficult/expensive to measure**, with fat mass in children as its example;
- prediction model development may quantify incremental/added predictive value;
- evaluation may involve **one or more** previously developed prediction models.

Source:
https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-1-prognosis-and-types-prognosis-research-healthcare

### PDF tooling note

The Cochrane Chapter 1 PDF was opened and the relevant lines were located. The required screenshot call was attempted but failed with a backend cache-miss error. Exact extracted PDF text was available and used.

---

## 2. Cochrane DTA Handbook

Current versions page still lists:

> **Version 2.0.1 (2026)**

with minor corrections.

No new version requiring rework of PASS-06A was identified.

Source:
https://www.cochrane.org/authors/handbooks-and-manuals/handbook-systematic-reviews-diagnostic-test-accuracy/versions-and-changes-dta-handbook

---

## 3. TRIPOD+AI

Current official scope page still says:

- diagnostic/prognostic/monitoring/screening purposes;
- irrespective of outcome predicted or modelling technique;
- model development/evaluation/updating;
- TRIPOD+AI replaces TRIPOD-2015.

Its short public diagnostic definition emphasizes:

> probability that a disease/condition is present or absent at the moment of prediction.

Source:
https://www.tripod-statement.org/scope/

### Important terminology mismatch

The current Cochrane Prognosis Handbook uses a **broader diagnostic-prediction concept** than the short TRIPOD+AI scope-page definition by explicitly including current continuous-value estimation.

This is not evidence that one source is “wrong”; it means the project must define its own crosswalk explicitly instead of silently assuming diagnostic prediction always means binary disease probability.

---

## 4. PROBAST+AI

Current publication remains:

> BMJ 2025;388:e082505.

It remains the current prediction-model development/evaluation appraisal tool.

No version replacement was identified.

Source:
https://www.bmj.com/content/388/bmj-2024-082505

---

## 5. QUADAS-3

University of Bristol currently lists:

- QUADAS-3 as the current recommended QUADAS tool;
- latest tool version: **1.2**;
- publication in Annals of Internal Medicine in 2026.

This is more precise than earlier project wording that only said “QUADAS-3 current”.

Source:
https://www.bristol.ac.uk/population-health-sciences/projects/quadas/quadas-3/quadas-3-tool/

---

# Contradiction audit after PASS-06B18…B20

## 1. Multicategory vs multiple-outcome

Resolved.

PASS-06B18:
- one K-category mutually exclusive target.

PASS-06B19:
- several distinct outcomes that may co-occur.

A joint-outcome combination can be encoded as multicategory categories, but the underlying scientific target remains multiple-outcome.

No contradiction.

---

## 2. Competing risk vs multiple outcomes

Resolved.

PASS-06B15:
- mutually exclusive competing event types within an event-history process.

PASS-06B19:
- broader multiple-outcome taxonomy including co-occurring outcomes and composites.

Competing-risk prediction is a special multiple-outcome risk architecture, not a synonym for all multiple-outcome prediction.

No contradiction.

---

## 3. Diagnostic outcome sampling vs prognosis outcome sampling

Resolved.

PASS-06B4:
- longitudinal source cohort;
- case-cohort/NCC/class-balanced prognosis sampling.

PASS-06B20:
- current-condition diagnostic source population;
- one-gate nested phase-2 sampling vs non-nested multiple-gate/two-gate sampling;
- target prevalence and diagnostic spectrum.

The common principle is sampling-aware recovery; the temporal/source-population structures remain distinct.

No contradiction.

---

## 4. DTA participant selection vs diagnostic probability calibration

Resolved.

PASS-06A:
- DTA single-/two-gate spectrum structure.

PASS-06B20:
- probability-scale/base-rate distortion plus spectrum distortion.

These are complementary:

- spectrum selection can bias DTA accuracy and prediction-model discrimination/applicability;
- artificial outcome fraction additionally distorts absolute diagnostic probabilities/PPV/NPV.

No contradiction.

---

## 5. Diagnostic model as index test

Still coherent.

PASS-06B14:
- fixed binary diagnostic prediction model can function as an index test.

PASS-06B20:
- probability calibration and target prevalence require additional sampling-aware interpretation.

No contradiction.

---

# NEW BLOCKING GAP — Current continuous-value diagnostic prediction

## Status

**BLOCKING synthesis.**

The current branch covers:

- future continuous outcomes in prognosis;
- binary current diagnostic probabilities;
- current multicategory diagnostic outcomes;
- DTA;
- measurement properties.

But it does not yet explicitly cover:

> **cross-sectional prediction models that estimate a current continuous value which is difficult, invasive, expensive, or otherwise impractical to measure directly.**

---

# Why this is a true gap

## 1. Current Cochrane taxonomy explicitly includes it

Cochrane Chapter 1 states that diagnostic models may be used to estimate:

> the current value of an outcome that is otherwise difficult/expensive to measure,

using **fat mass in children** as the example.

Thus a diagnostic prediction model is not limited to:

> current disease present / absent.

---

## 2. This structure is cross-sectional, not prognostic

Canonical architecture:

`current predictors at T0 → estimate current continuous target value at approximately T0`

Example:

`height + weight + age + sex → current fat mass`

There is no non-zero future prediction horizon.

Therefore classifying such a model as “prognostic” merely because it predicts a number is wrong.

---

## 3. Existing B10 continuous-outcome performance is not enough

PASS-06B10 correctly covers continuous-outcome performance:

- mean bias;
- MSE/RMSE;
- R²;
- calibration line/curve.

But B10 is performance architecture.

It does not resolve the **study-design/purpose boundary** between:

- current continuous-value estimation;
- future continuous prognosis;
- measurement-property/criterion-validity study.

---

# Fitness/exercise relevance

This gap is not theoretical.

## 1. VO₂max estimation

Sports/exercise research commonly develops equations predicting current measured VO₂max from:

- demographic variables;
- body composition;
- submaximal exercise responses;
- resting variables.

External validation studies explicitly compare estimated with directly measured VO₂max and report:

- R²;
- calibration-in-the-large;
- calibration slope;
- prediction error.

Example:
Wiecha et al. 2023 externally validated 13 VO₂max prediction models in endurance athletes.

Source:
https://pmc.ncbi.nlm.nih.gov/articles/PMC9876283/

---

## 2. Body composition estimation

Current body-composition practice frequently uses equations to estimate:

- fat mass;
- fat-free mass;
- body-fat percentage

from:

- skinfolds;
- impedance;
- anthropometry;
- demographics.

A 2026 body-composition clarification framework emphasizes that many such outputs are **model-derived estimates** rather than direct measurements.

Source:
https://doi.org/10.1007/s11154-026-10071-4

---

## 3. Cochrane's own reference example

Hudda et al. developed and validated a model to estimate current fat mass in children using:

- height;
- weight;
- age;
- sex;
- ethnicity,

with cross-sectional datasets, internal validation, IECV and external validation.

Performance included:

- R²;
- RMSE;
- calibration slope;
- calibration-in-the-large.

Source:
BMJ 2019;366:l4293  
https://www.bmj.com/content/366/bmj.l4293

This is a direct concrete example of the missing architecture.

---

# Boundary problem — Prediction model vs measurement-property study

## 1. Same applied problem can be framed differently in the literature

Body-composition and exercise literature often describes estimation equations using terms such as:

- criterion validity;
- concurrent validity;
- method validity;
- prediction equation;
- estimation equation;
- cross-validation;
- external validation.

This creates a real taxonomy ambiguity.

---

## 2. Measurement-property question

Typical target:

> How well does instrument/method A measure the same construct relative to a defensible criterion/reference method?

Focus may include:

- systematic measurement difference;
- agreement;
- measurement error;
- repeatability;
- criterion validity.

This belongs to PASS-06A / later measurement-methodology work.

---

## 3. Prediction-model question

Typical target:

> Can multiple readily available predictors be combined into a function that estimates an individual's current target value when direct measurement is unavailable/expensive?

Focus includes:

- full prediction equation;
- apparent performance;
- internal validation;
- IECV/external validation;
- calibration;
- prediction error;
- transportability;
- updating.

This is prediction-model research.

---

## 4. They can overlap in one paper

Example:

A field method plus anthropometry may be treated as:

- a measurement method compared against criterion;
- or inputs to a multivariable prediction equation.

Therefore the project needs a purpose/design crosswalk rather than forcing all estimation-equation papers into one category.

---

# What the dedicated pass must resolve

Required PASS-06B22 scope:

1. current continuous-value prediction definition;
2. cross-sectional T0 architecture;
3. future continuous prognosis boundary;
4. binary/multicategory diagnostic prediction boundary;
5. prediction equation vs direct measurement/instrument;
6. prediction model vs criterion-validity/method-comparison study;
7. role of criterion/reference measurement;
8. imperfect/noisy reference target;
9. multivariable equation development;
10. apparent/internal/IECV/external validation;
11. continuous performance:
    - calibration-in-the-large;
    - calibration slope/curve;
    - mean bias;
    - RMSE/MAE;
    - R²;
12. individual prediction error / uncertainty at taxonomy level;
13. why correlation alone is insufficient;
14. why Bland–Altman/agreement alone is not a complete prediction-model validation;
15. population/device/protocol transportability;
16. VO₂max/body-composition/1RM examples;
17. structural record;
18. update to B14 wording so “diagnostic prediction” is not defined only as disease probability.

---

# Potential gaps rechecked and NOT blocking

## 1. Added predictive value / incremental marker studies

**Not a new blocker.**

PASS-06B5 already has a dedicated “Added predictive value and model extension” section.

PASS-06B8 covers extension as a new model version.

Current Cochrane Chapter 1 explicitly places added/incremental predictor value inside prediction-model development.

Therefore this is already covered at RES-02 taxonomy level.

Detailed metrics for incremental value belong to performance/statistical methodology.

---

## 2. Head-to-head comparison of multiple fixed prediction models

**Not a new family.**

Current Cochrane Chapter 1 defines evaluation studies as testing performance of **one or more** previously developed prediction models.

Thus:

> several fixed models applied to the same external dataset

is a comparative form of model evaluation/external validation, not a separate scientific-purpose family.

The same performance dimensions apply:

- calibration;
- discrimination;
- overall performance;
- utility.

Detailed paired uncertainty/comparison testing belongs later.

---

## 3. Model ensembles / stacking / aggregation

**Not a study-design blocker.**

These are model-development/update strategies.

They fit within:

- PASS-06B5 development;
- PASS-06B8/B16 updating/adaptation.

---

## 4. IPD meta-analysis for model development

**Not a new primary prediction-purpose family.**

It is a multi-study data architecture.

Existing branch already contains:

- clustered/multisite data;
- IECV;
- external validation;
- pooled development logic.

Detailed one-stage/two-stage IPD methods belong to evidence-synthesis/statistical methodology.

The Hudda fat-mass example confirms that current-value models can be developed using IPD meta-analysis, but this does not create a new prediction-purpose category.

---

## 5. Prospective/silent external validation

**Not a new purpose family.**

Prospective vs retrospective data acquisition is a chronology/data-collection axis within external evaluation.

B2/B7 architecture already supports this distinction.

---

## 6. Multi-horizon prediction

**Covered.**

B10:
- horizon-specific performance.

B12:
- fixed-final vs sliding horizon and repeated prediction times.

A model outputting several horizons is a multi-output implementation of already covered horizon architecture.

---

## 7. Individual prediction intervals / uncertainty

**Real but statistical, not a new study-design family.**

Especially important for continuous predictions, but should be integrated in B22 at taxonomy recognition level and treated in depth later.

---

## 8. High-frequency wearable / personalized time-series models

**Not currently blocking.**

B12 already provides:

- renewed prediction time;
- longitudinal history;
- participant-level leakage safeguards;
- dynamic model families.

Algorithm-specific sequence/online/personalized methods can be handled later if needed.

---

## 9. Left/interval censoring / delayed entry

Still statistical follow-up complications, not distinct high-level prediction-purpose families.

---

## 10. Fairness/equity

Still model-appraisal/evaluation/governance, not a separate study-design family.

---

# Unsupported/over-broad wording detected

PASS-06B14 currently states too broadly:

> “Diagnostic prediction estimates the probability that a target condition is present at the prediction moment.”

This is correct for the **binary diagnostic probability subset** covered by B14, but not exhaustive under current Cochrane terminology.

The project should instead use:

> **A common diagnostic prediction target is the probability that a current condition is present; the broader diagnostic/current-outcome prediction family can also include estimation of a current continuous outcome value.**

PASS-06B22 should make this crosswalk explicit and revise B14 accordingly.

---

# Fitness-specific coverage audit

After B18–B20, the branch covers:

1. future continuous performance/adaptation values;
2. current binary diagnosis;
3. current/future nominal and ordinal categories;
4. first-event risks;
5. competing risks;
6. recurrent events;
7. multistate transitions;
8. multiple/co-occurring outcomes;
9. dynamic longitudinal predictions;
10. treatment/counterfactual prediction boundaries;
11. development/validation/update/impact lifecycle;
12. diagnostic case-enrichment/base-rate recovery.

Still missing:

> **current continuous-value estimation models**, which are highly prevalent in sports/exercise science.

Examples:

- current VO₂max;
- current fat mass/body-fat percentage;
- current strength capacity/1RM;
- current physiological variables estimated from cheaper/submaximal tests.

This therefore remains a material domain-specific blocker.

---

# Final audit decision

## Can prediction-branch synthesis begin now?

**NO.**

Only one new blocker was found:

> **current continuous-value diagnostic prediction / estimation-equation studies and their boundary with measurement-property criterion-validity designs.**

## Required route

1. **PASS-06B22 — current continuous-value prediction and estimation-equation structures**;
2. **PASS-06B23 — short final prediction-branch closure/gap audit**;
3. synthesis only if B23 finds no new blocking gap.

This is not a rollback of PASS-06B1…B20.

---

# Next micro-pass

**RES-02 / PASS-06B22 — current continuous-value prediction and estimation equations: cross-sectional diagnostic/current-outcome prediction, boundary with future continuous prognosis, prediction-equation development/validation, criterion/reference measurement, calibration/error/agreement, and boundary with measurement-property/criterion-validity studies using VO₂max/body-composition/1RM-style examples.**

STOP after this saved audit.
