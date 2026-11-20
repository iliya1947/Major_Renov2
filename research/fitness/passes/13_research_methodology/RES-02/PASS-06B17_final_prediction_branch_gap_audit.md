# RES-02 / PASS-06B17 — Final prediction-branch gap audit after PASS-06B14…B16

Статус: **COMPLETE GAP AUDIT — synthesis NOT YET PERMITTED**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Purpose

Этот pass — отдельный финальный gap audit после закрытия трёх blockers, найденных в PASS-06B13.

Задачи:

1. перечитать текущую валидную prediction-базу:
   - PASS-06A;
   - PASS-06B1…PASS-06B16;
2. проверить новые contradictions после B14–B16;
3. проверить source-version status;
4. проверить outcome/design architectures, которые могли остаться вне taxonomy;
5. проверить fitness/exercise-specific omissions;
6. отделить:
   - blocking RES-02 gaps;
   - later statistical/RoB/reporting details;
7. решить, разрешён ли synthesis.

## Verdict

**Synthesis пока НЕ разрешён.**

PASS-06B14…B16 успешно закрыли три gaps из PASS-06B13, но этот повторный audit обнаружил ещё **три design/taxonomy gaps**, которые нельзя честно оставить на потом при заявленной цели максимально полной study-design base:

1. **multicategory / ordinal prediction outcomes**;
2. **multiple-outcome / composite / joint-outcome prediction**;
3. **outcome-dependent sampling specifically for diagnostic probability models**.

После их отдельных passes нужен ещё один final prediction-branch audit.

---

# Exact project base audited

В текущей ветке research/fitness-foundation проверены:

1. PASS-06A — diagnostic accuracy and measurement-property study structures;
2. PASS-06B1 — prognosis core taxonomy;
3. PASS-06B2 — longitudinal cohort structures;
4. PASS-06B3 — routine-care data sources;
5. PASS-06B4 — outcome-dependent sampling;
6. PASS-06B5 — prediction-model development;
7. PASS-06B6 — internal validation;
8. PASS-06B7 — internal-external/external validation;
9. PASS-06B8 — recalibration/updating/extension;
10. PASS-06B9 — utility/impact;
11. PASS-06B10 — performance estimands;
12. PASS-06B11 — prediction under treatment;
13. PASS-06B12 — dynamic/landmark prediction;
14. PASS-06B13 — first integration audit;
15. PASS-06B14 — diagnostic prediction vs DTA;
16. PASS-06B15 — competing risks/recurrent events/multistate;
17. PASS-06B16 — post-deployment lifecycle/continual updating.

Historical broad PASS-06B remains superseded and was not treated as authoritative.

---

# Source-version audit — 2026-11-17

## 1. Cochrane Prognosis Handbook

Current Chapters 1–3 remain **Draft version (March 2026)** for Version 1.

Chapter 1 still defines prognosis through:

- target health state/population;
- prediction startpoint;
- future outcome;
- horizon;
- setting/standards of care.

Chapter 2 still states:

- prospective cohort is the ideal prognosis design;
- retrospective cohorts are common;
- RCTs can provide prognosis data;
- nested case-control/case-cohort/class-balanced sampling can be used for binary/time-to-event prognosis questions when appropriately handled.

Chapter 3 still structures common prognosis outcomes mainly as:

- continuous;
- binary;
- time-to-event.

No finalized post-March-2026 replacement of these chapters was identified.

## 2. Cochrane DTA Handbook

Current official versions page still lists:

> Version 2.0.1 (2026)

with minor corrections.

No new DTA version requiring rework of PASS-06A/B14 was identified.

## 3. TRIPOD+AI

Current official TRIPOD site still states:

- TRIPOD+AI is a 27-item checklist;
- diagnostic/prognostic/monitoring/screening;
- irrespective of outcome predicted or modelling technique;
- development/evaluation/updating;
- TRIPOD+AI replaces TRIPOD-2015.

## 4. PROBAST+AI

Current published version remains:

> BMJ 2025;388:e082505.

It remains the current updated PROBAST tool for prediction model development/evaluation appraisal.

### Wording note

The paper itself uses mixed-strength replacement wording:

- summary points: “extends and replaces PROBAST-2019”;
- usage section: “supersedes PROBAST-2019”;
- discussion: “may replace PROBAST-2019”.

Therefore project wording should not pretend that only one verb appears in the source.

Operationally safe wording:

> **PROBAST+AI is the current 2025 updated/direct extension and operational successor to PROBAST-2019; the article itself uses both ‘extends/replaces/supersedes’ and ‘may replace’ wording in different sections.**

This removes the unnecessary false precision introduced during PASS-06B13.

## 5. TRIPOD-LLM

Current TRIPOD site now also provides TRIPOD-LLM.

This does **not** create a new prediction-study design family for RES-02:

- TRIPOD-LLM is a reporting extension for LLM research;
- it extends beyond prediction into generative tasks;
- it is not a quality-appraisal tool;
- algorithm/model family is not by itself a scientific study-design family.

Therefore TRIPOD-LLM is noted but is **not a blocking RES-02 taxonomy gap**.

---

# Contradiction audit after PASS-06B14…B16

## 1. Diagnostic model vs DTA

PASS-06B14 resolves the B13 gap.

No contradiction remains:

- diagnostic prediction model → current-condition individual probability;
- fixed diagnostic model can function as an index test;
- thresholded model can produce DTA quantities;
- model development itself remains a prediction-model-development study.

## 2. Complex event outcomes

PASS-06B15 resolves:

- competing risks;
- recurrent events;
- multistate transitions.

No contradiction with B10/B12:

- B10 defines performance/horizon architecture;
- B12 defines repeated prediction startpoints;
- B15 defines event/state process.

These are orthogonal axes.

## 3. Dynamic prediction vs continual updating

PASS-06B16 resolves the B13 lifecycle gap.

No contradiction:

- dynamic prediction = same model, changing individual history/prediction time;
- continual updating = prediction function changes with calendar-time deployment data.

## 4. Update data vs validation data

B8 and B16 remain consistent:

- once data change the model, they become update/development data for the new version;
- same-data post-update performance is not independent external validation.

## 5. Deployment feedback

B11 and B16 remain consistent:

- treatment/action feedback changes observed outcomes;
- post-deployment monitoring/retraining must track triggered actions;
- counterfactual/no-treatment targets require causal methods.

### Contradiction verdict

**No rollback-level contradiction detected across PASS-06B1…B16.**

---

# NEW BLOCKING GAP 1 — Multicategory / ordinal prediction outcomes

## Status

**BLOCKING synthesis.**

The current branch explicitly covers:

- continuous outcomes;
- binary outcomes;
- time-to-event outcomes;
- competing-risk event types;
- recurrent events;
- multistate transitions.

It does **not** yet explicitly cover a single prediction target with **more than two mutually exclusive categories**, either:

- nominal;
- ordinal.

## Why this is not a trivial statistical variant

A multicategory prediction model produces a vector of category probabilities:

`P(Y = 1|X), P(Y = 2|X), …, P(Y = K|X)`

that should form a coherent probability distribution.

This differs from fitting several unrelated binary models because independent binary probabilities:

- need not sum to 1;
- can be mutually inconsistent;
- can be differently calibrated across categories.

## Current methodology

A dedicated 2024 Journal of Clinical Epidemiology guide:

> **How to develop, validate, and update clinical prediction models using multinomial logistic regression**

explicitly treats multicategory prediction as requiring its own development/evaluation considerations.

It covers:

- nominal outcomes;
- ordinal outcomes;
- development;
- internal/external validation;
- performance;
- recalibration/updating.

This is explicitly presented as a supplement to general prediction-model guidance.

## Why relevant to physical-preparation research

Potential targets include:

- injury severity category;
- responder/non-responder/intermediate response categories;
- recovery-status category;
- technique/error classification;
- readiness state categories;
- mutually exclusive diagnostic phenotypes.

## Missing distinctions

Need a dedicated taxonomy-level pass on:

1. nominal vs ordinal target;
2. category-probability vector;
3. one-vs-rest/dichotomized shortcuts vs coherent multicategory model;
4. category-specific calibration;
5. multicategory discrimination;
6. overall performance;
7. internal/external validation;
8. updating/recalibration;
9. relation to diagnostic/prognostic timing;
10. relation to multistate models:
    - multicategory = state/category at a target time;
    - multistate = transition process over time.

### Required pass

**PASS-06B18 — multicategory and ordinal prediction-model structures.**

---

# NEW BLOCKING GAP 2 — Multiple-outcome / composite / joint-outcome prediction

## Status

**BLOCKING synthesis.**

PASS-06B15 covers **competing** outcomes, but competing risks are only one multiple-outcome structure.

The branch does not yet explicitly distinguish:

1. one outcome;
2. competing outcomes;
3. composite outcome;
4. multiple marginal outcomes;
5. joint combinations of multiple outcomes.

## Current methodology

A 2025 BMC Medicine methodological paper:

> **A decision-analytical perspective on incorporating multiple outcomes in the production of clinical prediction models: defining a taxonomy of risk estimands**

provides a dedicated taxonomy with:

1. single-outcome risk;
2. competing-outcome risk;
3. composite-outcome risk;
4. risk of multiple outcome combinations / joint risk.

It emphasizes that the correct method depends on the **risk estimand and intended decision**, and that terminology in multi-output/multivariate/multi-label prediction is heterogeneous.

## Why this is not already solved by B15

### Competing risks

Mutually exclusive event types constrain one another.

### Composite outcome

Several outcomes are collapsed into one endpoint:

> event A OR event B.

This discards which component occurred.

### Multiple marginal outcomes

Need separate probabilities for multiple outcomes:

> risk of injury  
> risk of dropout  
> risk of low adaptation.

These can co-occur.

### Joint outcome combinations

Need probabilities of combinations:

- injury AND dropout;
- neither;
- injury without dropout;
- dropout without injury.

Correlation/dependence among outcomes matters.

## Fitness relevance

A practical training decision may need to balance:

- injury risk;
- dropout risk;
- expected adaptation failure;
- recovery complications;

rather than optimizing one outcome alone.

A composite “any adverse event” model may be inadequate if different components imply different actions.

## Missing distinctions

Need a dedicated pass on:

1. single vs multiple outcome prediction;
2. marginal vs joint risk;
3. competing vs non-competing outcomes;
4. composite endpoints;
5. joint outcome combinations;
6. conditional-independence trap;
7. outcome dependence/correlation;
8. performance/calibration for multiple outcomes;
9. utility/decision target;
10. overlap with multicategory and multistate models.

### Required pass

**PASS-06B19 — multiple-outcome, composite and joint-risk prediction structures.**

---

# NEW BLOCKING GAP 3 — Outcome-dependent sampling in diagnostic probability models

## Status

**BLOCKING synthesis because the current crosswalk is incomplete.**

The project currently has:

### PASS-06A

- diagnostic case-control/two-gate sampling in DTA;
- warning that it can inflate diagnostic accuracy via spectrum differences.

### PASS-06B4

- nested case-control/case-cohort/class-balanced sampling for prognosis;
- sampling fractions;
- weighting;
- absolute-risk reconstruction;
- calibration/performance distortion.

### PASS-06B14

- diagnostic probability models;
- prevalence/calibration importance;
- diagnostic model as fixed index test.

But there is no dedicated integration of:

> **diagnostic prediction model + outcome-enriched/case-control/class-balanced development sample + absolute current-disease probability.**

## Why this matters

A case-control or deliberately class-balanced diagnostic sample alters the target-condition prevalence.

A model fitted naively to the sampled event fraction can produce:

- useful ranking/discrimination in some cases;
- badly distorted absolute probabilities;
- distorted PPV/NPV;
- misleading thresholds/utility.

## Current methodological support

The original PROBAST Explanation & Elaboration — which PROBAST+AI 2025 explicitly says remains its comprehensive background document — states:

- diagnostic prediction models using nested case-control sampling can be low risk only when case/control samples are adjusted using inverse sampling fractions to recover the original cohort prevalence;
- non-nested case-control designs can give incorrect prevalence and overestimated diagnostic-model performance.

Additional current evidence:

- 2024 methods work shows sampling weights are required for prediction-model performance in nested case-control designs;
- 2026 case-control prediction work continues to treat calibration/recovery of target-population risk as an active methodological problem.

## Why B4 cannot simply be silently generalized

B4 was explicitly developed inside the **prognosis longitudinal** branch and its source-cohort/risk-set logic.

Diagnostic prediction often has:

- current-condition target;
- cross-sectional diagnostic episode;
- two-gate sampling;
- non-nested case-control samples;
- target prevalence rather than future incidence.

The same sampling principle transfers, but the design architecture and interpretation are not identical.

## Missing distinctions

Need a dedicated integration pass on:

1. diagnostic cross-sectional cohort sampling;
2. one-gate vs two-gate/case-control sampling;
3. nested vs non-nested case-control;
4. class balancing;
5. true target-condition prevalence;
6. recovery using known sampling fractions;
7. calibration of absolute diagnostic probabilities;
8. discrimination vs probability calibration under enrichment;
9. PPV/NPV;
10. threshold utility;
11. external representative validation;
12. relation to DTA spectrum effects.

### Required pass

**PASS-06B20 — diagnostic outcome-dependent sampling and absolute-probability recovery.**

---

# Potential gaps checked but NOT blocking RES-02 synthesis

## 1. Left/interval censoring and delayed entry

Real statistical issues.

Current Cochrane Chapter 3 explicitly notes left/interval censoring but does not cover them in detail.

These are:

- follow-up/analysis complexities;
- not new high-level scientific study-purpose families.

Route to later statistical methodology unless a fitness-specific evidence stream requires a dedicated design addendum.

## 2. Semi-competing risks

Can be represented within broader multistate/complex-event architecture established in B15.

Not a separate blocking study-family pass now.

## 3. Dynamic prediction of continuous outcomes

B12 already provides the generic renewed-startpoint/history/horizon architecture.

Detailed algorithms for longitudinal continuous prediction are statistical implementations.

Not a separate RES-02 family blocker.

## 4. Cluster-specific random-effects development

B3/B7 plus TRIPOD-Cluster cover the study/data architecture.

Detailed hierarchical-model specification belongs later.

## 5. LLM/generative-AI methods

TRIPOD-LLM is current but reporting-focused and extends beyond prediction.

A model's algorithm family does not define the scientific design.

No dedicated RES-02 prediction-family pass required solely because a model uses an LLM.

## 6. Fairness/equity

PROBAST+AI identifies fairness/algorithmic bias as an appraisal concern.

This remains:

- model evaluation/applicability/governance;
- not a separate primary study-design family.

## 7. Sample size / missing data / shrinkage / penalization

Still correctly deferred to statistical/appraisal topics.

---

# Fitness-specific coverage audit

The current branch now covers, or has an explicit route for:

1. future strength/body-composition continuous outcomes;
2. binary adherence/injury outcomes;
3. time-to-first injury/dropout;
4. recurrent injury/training interruptions;
5. return-to-training/reinjury state transitions;
6. current injury/condition diagnosis;
7. dynamic predictions from repeated readiness/sleep/training data;
8. treatment/coaching-policy feedback;
9. model-guided interventions;
10. post-deployment drift/updating.

Still missing before synthesis:

1. ordinal/nominal states as one prediction endpoint;
2. simultaneous multiple outcomes relevant to trade-offs;
3. case-enriched diagnostic probability development.

Thus the newly detected gaps are materially relevant to the fitness/exercise domain rather than purely theoretical edge cases.

---

# PROBAST+AI wording correction

PASS-06B13 changed wording to emphasize only:

> “may replace PROBAST-2019”.

That is source-supported by the Discussion, but incomplete because other sections of the same current article say:

- “extends and replaces”;
- “supersedes”.

Project wording should therefore be neutral and complete:

> **PROBAST+AI is the current 2025 updated/direct extension and operational successor to PROBAST-2019; the article itself uses both stronger ‘extends/replaces/supersedes’ language and the more cautious ‘may replace’ wording in different sections.**

This audit applies that clarification to the relevant project source notes.

---

# Final audit decision

## Can prediction-branch synthesis begin now?

**NO.**

Reason:

Three newly identified outcome/sampling architectures remain insufficiently covered for the project's stated completeness standard.

## Required order

1. **PASS-06B18 — multicategory and ordinal prediction-model structures**;
2. **PASS-06B19 — multiple-outcome, composite and joint-risk prediction structures**;
3. **PASS-06B20 — diagnostic outcome-dependent sampling and absolute-probability recovery**;
4. **PASS-06B21 — repeat final prediction-branch gap audit**;
5. synthesis only if B21 finds no further blocking gap.

This is not a rollback of B1–B16.

It is a normal consequence of the required:

> granular passes → gap audit → fill gaps → repeat audit → synthesis

workflow.

---

# Next micro-pass

**RES-02 / PASS-06B18 — multicategory and ordinal prediction-model structures: nominal vs ordinal targets, coherent category probabilities, multinomial/ordinal model families at taxonomy level, category-specific calibration/discrimination, internal/external validation, updating, and boundaries with binary, multistate and multiple-outcome prediction.**

STOP after this saved audit.
