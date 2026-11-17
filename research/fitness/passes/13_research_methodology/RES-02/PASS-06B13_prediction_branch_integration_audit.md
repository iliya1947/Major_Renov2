# RES-02 / PASS-06B13 — Prediction-branch integration audit

Статус: **COMPLETE INTEGRATION AUDIT — prognosis/prediction branch remains RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Purpose

Этот pass не вводит новую предметную ветку. Его задача:

1. перечитать текущую валидную базу PASS-06A и PASS-06B1…PASS-06B12;
2. проверить внутренние противоречия;
3. свести prediction-related distinctions в единую taxonomy;
4. обнаружить реальные gaps;
5. отделить blocking gaps от вопросов, которые относятся к later statistics / RoB / appraisal / causal topics;
6. определить следующий micro-pass.

## Exact project files audited

Прочитаны из ветки research/fitness-foundation:

1. PASS-06A_diagnostic_measurement_designs.md
2. PASS-06B1_prognosis_core_taxonomy.md
3. PASS-06B2_longitudinal_cohort_structures.md
4. PASS-06B3_routine_care_data_sources.md
5. PASS-06B4_outcome_dependent_sampling.md
6. PASS-06B5_prediction_model_development.md
7. PASS-06B6_internal_validation_structures.md
8. PASS-06B7_internal_external_external_validation.md
9. PASS-06B8_model_recalibration_updating_extension.md
10. PASS-06B9_prediction_model_impact_utility.md
11. PASS-06B10_prediction_performance_estimands.md
12. PASS-06B11_prediction_under_treatment.md
13. PASS-06B12_dynamic_landmark_prediction.md

Прежний широкий PASS-06B_prognosis_prediction_designs.md не использовался как авторитетная база, потому что он SUPERSEDED FOR CURRENT REVALIDATION.

---

# Current external source-status verification

Проверено 2026-11-17.

## Cochrane Prognosis Handbook

Current official Chapters 1–3 remain **Draft version (March 2026)** for Version 1.

Core taxonomy remains:

- overall prognosis;
- prognostic factors;
- prediction models.

Chapter 1 continues to define prognosis through:

- target population / health state;
- startpoint;
- future outcome;
- prediction horizon;
- setting / standards of care.

## Cochrane DTA Handbook

Current official versions page lists **Version 2.0.1 (2026)** with minor corrections.

PASS-06A therefore remains current at the handbook-version level.

## TRIPOD+AI

Current published guideline remains BMJ 2024;385:e078378.

It:

- covers diagnostic and prognostic prediction models;
- covers development and evaluation;
- supersedes the TRIPOD 2015 checklist;
- is a reporting guideline, not a methodological quality tool.

## PROBAST+AI

Current published tool remains BMJ 2025;388:e082505.

It explicitly separates:

- model development;
- model performance evaluation;

and within evaluation:

- apparent performance;
- internal validation;
- external validation.

Current PROBAST+AI article uses mixed-strength replacement wording: its summary/usage sections say **“extends and replaces” / “supersedes PROBAST-2019”**, while the Discussion says it **“may replace PROBAST-2019”**. The project therefore treats PROBAST+AI as the current updated/direct extension and operational successor without pretending the paper uses only one verb.

---

# Part A — Integrated taxonomy spine

The granular passes are coherent when represented on separate axes rather than one flat list of study types.

## Axis 1 — scientific question

### Diagnostic / measurement branch

From PASS-06A:

- diagnostic test accuracy;
- comparative DTA;
- measurement properties;
- instrument development/evaluation.

### Prognosis branch

From PASS-06B1:

1. overall prognosis;
2. prognostic factor;
3. prediction model.

### Causal/intervention branch

Cross-boundary questions:

- treatment effect;
- treatment-effect modification;
- model-guided intervention impact;
- counterfactual prediction under interventions.

These are not ordinary prognosis questions even when a prediction model appears in the workflow.

---

# Part B — Time axis

## Diagnostic prediction

Current/present condition at the prediction moment.

## Static prognostic prediction

One defined startpoint leading to a future horizon and outcome.

## Dynamic prognostic prediction

Repeated renewed prediction times / landmarks.

Each landmark has:

- its own eligible risk set;
- information history;
- horizon;
- performance estimand.

### Audit conclusion

No contradiction exists between:

- B1: predictor information must be available at the prediction startpoint;
- B12: later information may enter a later landmark prediction.

The prediction startpoint has changed.

---

# Part C — Factual vs causal axis

## Factual prediction

Predict observed outcome under the treatment/management policy operating in the data-generating setting.

## Counterfactual prediction

Predict outcome under a specified hypothetical intervention/strategy.

## Individualized treatment effect

Compare potential outcomes under at least two strategies.

### Audit conclusion

PASS-06B1, B9, B11 and B12 are mutually consistent:

- prognostic value is not causality;
- high risk is not high treatment benefit;
- model-guided impact is an intervention-effect question;
- hypothetical treatment-specific prediction requires causal identification;
- dynamic timing does not remove causal requirements.

---

# Part D — Study architecture vs data source

Scientific architectures include:

- longitudinal cohort;
- randomized source cohort reused for prognosis;
- case-cohort;
- nested case-control;
- class-balanced two-phase sample;
- prediction-model development/evaluation.

Data sources include:

- purpose-built cohort;
- RCT dataset;
- EHR;
- registry;
- claims;
- linked databases.

### Audit conclusion

PASS-06B2, B3 and B4 consistently preserve:

**data source is not the scientific design.**

---

# Part E — Prediction-model lifecycle

The current passes form one coherent lifecycle:

1. define prediction target;
2. construct/choose appropriate data architecture;
3. model development;
4. apparent performance;
5. internal validation;
6. internal-external validation when relevant;
7. fixed model;
8. independent external validation;
9. decision utility;
10. optional recalibration/update/extension;
11. new model version;
12. revalidation;
13. model-guided impact/effectiveness;
14. deployment monitoring / future updating.

No lifecycle contradiction was identified across B5–B10.

---

# Part F — Apparent contradiction audit

## Validation terminology

B5/B6: data used for tuning/model selection remain development data.

B7: independent external validation uses data not used in development.

**Resolution:** classify by functional role of data, not the author's label.

## Temporal validation

B6: a time split inside one preassembled development resource can function as an internal temporal holdout.

B7: genuinely later participants after model freeze can provide temporal external validation.

**Resolution:** terminology is historically ambiguous; classify by actual chronology and independence.

## Future treatment

B11: post-startpoint treatment cannot be a baseline predictor.

B12: treatment already received before a later landmark can be used in a dynamic factual prediction.

**Resolution:** at the later landmark it has become observed history.

## Decision utility vs impact

B9/B10: net benefit/decision curves quantify potential utility; actual impact requires implemented model-guided intervention evidence.

**Resolution:** prediction performance, decision utility and real-world impact are separate layers.

## RCT data

B2: RCT data can support prognosis research.

B11: treatment-effect prediction is causal and distinct from ordinary prognosis.

**Resolution:** randomization concerns treatment assignment, not ordinary prognostic factors.

## Updating vs validation

B7: validate the fixed model first.

B8: after validation data alter the prediction function, a new model version exists.

**Resolution:** Model v1 → external evaluation → update → Model v2 → new evaluation.

---

# Part G — TRUE GAP 1: diagnostic prediction models vs DTA

## Status

**BLOCKING synthesis. Dedicated micro-pass required.**

PASS-06A covered diagnostic test accuracy and measurement properties and explicitly excluded prognosis/prediction.

PASS-06B1 later established the time boundary:

- diagnostic prediction = current condition;
- prognostic prediction = future condition.

But the current granular base still lacks a dedicated integration of **multivariable diagnostic prediction models**.

## Why this is a real gap

TRIPOD/TRIPOD+AI methodology covers both diagnostic and prognostic prediction models.

A diagnostic prediction model combines multiple predictors to estimate the probability that a condition is present at the moment of prediction.

It has a lifecycle analogous to prognostic models:

- development;
- apparent evaluation;
- internal validation;
- external validation;
- calibration/discrimination;
- updating;
- utility/impact.

PASS-06A alone does not cover that lifecycle.

## Critical boundary

A diagnostic prediction model can function as an index test at a threshold, but:

**diagnostic-model development/evaluation is not identical to generic DTA design.**

DTA focuses on accuracy of an index test/classification against a reference standard.

Diagnostic prediction-model evaluation focuses on individual probability prediction, including:

- calibration;
- discrimination;
- overall fit;
- utility.

There is overlap when a diagnostic model is thresholded and evaluated as an index test.

This gap requires PASS-06B14.

---

# Part H — TRUE GAP 2: complex event outcome structures

## Status

**BLOCKING synthesis for a sufficiently complete fitness/exercise prediction taxonomy.**

PASS-06B10 and B12 acknowledge but do not adequately cover:

- competing risks;
- recurrent events;
- multistate transitions.

This is relevant to physical-preparation research:

- repeated injuries;
- repeated training interruptions;
- return-to-training → reinjury → recovery;
- dropout versus injury/other events;
- repeated pain/exacerbation episodes.

## Why ordinary first-event survival is insufficient

### Competing risks

Another event can prevent or alter occurrence/interpretation of the target event. Current BMJ guidance states that competing events must be explicitly handled when validating cumulative-incidence prediction.

### Recurrent events

The same participant can experience the outcome repeatedly. A 2024 systematic review identified wide methodological variation and very limited model validation in recurrent-event prediction literature.

### Multistate structures

The target may concern transitions among states rather than one first binary event.

A dedicated taxonomy-level pass is required before synthesis.

This gap requires PASS-06B15.

---

# Part I — TRUE GAP 3: continual / online model lifecycle

## Status

**BLOCKING final branch synthesis if the branch retains model updating as part of its lifecycle.**

PASS-06B8 records periodic/continual updating but explicitly defers its architecture.

PASS-06B11 records deployment-induced treatment feedback and the "victim of own success" problem.

The branch therefore opens this lifecycle question without closing it.

## Required distinctions

At design-taxonomy level the project still needs to separate:

1. fixed model with monitoring only;
2. periodic batch updating;
3. trigger-based updating after drift;
4. continual/online updating;
5. model-version sequence;
6. update data vs independent evaluation data;
7. performance monitoring before/after update;
8. deployment feedback and policy drift;
9. rollback/version governance at recognition level.

A 2026 review of post-development healthcare AI literature confirms that monitoring, drift, updating and lifecycle governance remain fragmented methodological areas.

This gap requires PASS-06B16.

---

# Part J — Clustered data

## Status

**Covered sufficiently at RES-02 taxonomy level; no new pass required now.**

Existing coverage:

- B3: multisite routine-data heterogeneity;
- B7: meaningful clusters and IECV;
- B10: context-specific performance.

TRIPOD-Cluster confirms that clustered datasets can differ in:

- baseline risk;
- predictor effects;
- measurement;
- missingness;
- model performance.

Detailed random-effects development and cluster-specific parameter modelling belong primarily to statistical methodology.

---

# Part K — Fairness / algorithmic bias

## Status

**Real appraisal/evaluation issue, but not a separate primary study-design family. Not blocking RES-02 taxonomy synthesis.**

PROBAST+AI explicitly adds fairness/algorithmic bias.

External-validation guidance recommends relevant subgroup checks.

Route later to:

- risk-of-bias/applicability;
- subgroup performance;
- equity/fairness;
- model-evaluation quality.

Do not invent a separate fairness study-design family.

---

# Part L — Sample size / missing data / detailed statistics

## Status

**Not RES-02 design gaps.**

Appropriately deferred:

- development sample size;
- external-validation sample size;
- missing-data methods;
- calibration estimators;
- discrimination estimators;
- shrinkage/penalization;
- uncertainty intervals.

These belong to later statistical/appraisal topics.

---

# Part M — Dynamic non-survival prediction

## Status

**Not currently blocking taxonomy synthesis.**

B12 already captures the general architecture:

- renewed prediction time;
- history available by prediction time;
- dynamic model family;
- horizon;
- repeated prediction episodes;
- validation leakage.

Continuous/binary repeated-outcome implementations can map onto this architecture.

Specific algorithms can be reopened if an exercise-science evidence branch later requires them.

---

# Part N — Causal dynamic treatment regimes

## Status

**Boundary established; detailed methods intentionally deferred.**

B11/B12 correctly route:

- hypothetical treatment strategies;
- repeated treatment decisions;
- individualized treatment effects

into causal/intervention methodology.

RES-02 does not need to duplicate g-methods or treatment-regime methods merely to classify the question.

---

# Part O — Measurement properties vs prediction models

An instrument can simultaneously be:

1. object of a measurement-property study;
2. predictor inside a diagnostic/prognostic model;
3. index test in a DTA study.

These are different scientific questions.

Evidence must not be transferred automatically between layers.

PASS-06A and PASS-06B are therefore complementary, not contradictory.

---

# Part P — Integrated decision tree

## Step 1 — Scientific target

### Current condition
Route toward:

- DTA;
- diagnostic prediction model;
- measurement-property study if the question is about measurement itself.

### Future outcome
Route toward:

- overall prognosis;
- prognostic factor;
- prognostic prediction model.

### Intervention effect
Route toward randomized/quasi-experimental/causal-effect design.

### Outcome under hypothetical intervention
Route toward counterfactual prediction / causal methodology.

## Step 2 — Static or dynamic?

- one prediction startpoint → static;
- repeated renewed prediction times → dynamic.

## Step 3 — Data architecture

- prospective cohort;
- retrospective cohort;
- trial data;
- routine data;
- two-phase outcome-dependent sampling;
- clustered/multisite data;
- complex event structure — still open.

## Step 4 — Model lifecycle

1. development;
2. apparent performance;
3. internal validation;
4. IECV;
5. external validation;
6. update/extension;
7. revalidation;
8. decision utility;
9. impact;
10. continual deployment/update — still open.

## Step 5 — Performance target

- calibration;
- discrimination;
- overall performance;
- decision utility.

Always attach:

- model version;
- population/setting;
- horizon;
- evaluation phase;
- sampling design.

---

# Part Q — Contradiction verdict

## Substantive contradictions

**None identified that require rollback of PASS-06B1…PASS-06B12.**

The apparent conflicts are resolved by separating:

- scientific purpose;
- prediction time;
- treatment policy;
- data source;
- model lifecycle;
- evaluation phase;
- performance estimand.

---

# Part R — Required correction

PASS-06B5 previously stated:

> PROBAST+AI extends/replaces PROBAST-2019.

Current source wording is internally mixed across sections.

Correct project wording:

> **PROBAST+AI is the current 2025 updated/direct extension and operational successor to PROBAST-2019; the article uses both “extends and replaces” / “supersedes” and “may replace” wording in different sections.**

This correction is applied as part of this audit.

---

# Part S — Gap triage

## Blocking before prediction-branch synthesis

1. PASS-06B14 — diagnostic prediction models vs DTA.
2. PASS-06B15 — competing risks / recurrent events / multistate prediction.
3. PASS-06B16 — continual/online updating and post-deployment drift/lifecycle.

## Not blocking RES-02 design taxonomy

1. detailed fairness methods;
2. sample-size methods;
3. missing-data statistics;
4. exact performance formulas;
5. cluster random-effects modelling;
6. detailed causal estimators;
7. detailed dynamic non-survival algorithms.

These remain visible for later methodology/appraisal topics.

---

# Part T — Required route after this audit

Do **not** synthesize the prediction branch yet.

Required order:

1. PASS-06B14 — diagnostic prediction integration;
2. PASS-06B15 — complex event outcome prediction;
3. PASS-06B16 — continual updating / post-deployment lifecycle;
4. new final prediction-branch gap audit;
5. prediction-branch synthesis only if that final audit finds no blocking gaps.

This preserves the project rule:

> gap detection first; synthesis only after gaps are actually filled.

## Next micro-pass

**RES-02 / PASS-06B14 — diagnostic prediction models vs diagnostic test accuracy: current-condition multivariable probability models, development/evaluation lifecycle, reference-standard relation, calibration/discrimination vs threshold accuracy, and overlap/boundary with DTA.**

STOP after this saved integration audit.
