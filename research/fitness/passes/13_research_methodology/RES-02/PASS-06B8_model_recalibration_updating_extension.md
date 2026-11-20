# RES-02 / PASS-06B8 — Model recalibration, updating and extension structures

Статус: **COMPLETE MICRO-PASS — RES-02 remains RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. validation-before-update sequence;
2. what counts as model updating;
3. recalibration-in-the-large / intercept update;
4. baseline-risk / baseline-hazard update for time-to-event models;
5. calibration-slope update;
6. revision / re-estimation of individual predictor effects;
7. full coefficient refit as a strong update;
8. model extension by adding predictors;
9. hierarchy from minimal to more extensive updating;
10. relation between type of miscalibration and type of update;
11. original model vs updated model identity;
12. versioning requirements;
13. why updated performance in the update data is not independent validation;
14. revalidation requirements after updating;
15. repeated/periodic updating as a boundary topic;
16. conventional regression updating vs ML/AI update evidence;
17. structural record for update studies.

Не покрывается здесь:

- exact formulas for recalibration;
- detailed Bayesian updating;
- dynamic/continual learning algorithms;
- meta-models;
- transfer learning in depth;
- sample-size calculations for updating;
- detailed performance metrics;
- impact/utility studies;
- fairness after updating;
- deployment governance;
- final prognosis/prediction synthesis.

---

# Sources checked

## 1. Cochrane Handbook for Systematic Reviews of Prognosis Research and Prediction Models — Chapter 1

Moons KGM, Hayden J, Williams K, Riley RD.  
**Chapter 1: Prognosis and types of prognosis research in healthcare.**  
Draft version: **March 2026**.

Current official Cochrane page checked 2026-11-17.

Relevant current guidance:

- validation evaluates predictive performance of an existing model;
- when a model performs poorly in external data, researchers may update it using the evaluation dataset;
- updating can include recalibrating particular terms such as the model intercept or predictor weights;
- a model may also be extended by adding new predictors;
- after updating/extension, a **new model** has effectively been developed;
- the modified model may therefore require new validation.

https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-1-prognosis-and-types-prognosis-research-healthcare

### Source-status note

The Cochrane Prognosis Handbook is still a **draft March 2026** and must be version-checked again during closure/audit.

---

## 2. Riley et al. — external validation guidance

Riley RD, Archer L, Snell KIE, et al.  
**Evaluation of clinical prediction models (part 2): how to undertake an external validation study.**  
BMJ. 2024;384:e074820.

Current article checked 2026-11-17.

Relevant guidance:

- external validation first applies the existing model **as originally specified**;
- it does not start by refitting the model;
- calibration-in-the-large, calibration slope and full calibration curves diagnose different forms of miscalibration;
- miscalibration can motivate model updating;
- external-validation data must reflect intended target population/setting and predictor timing.

https://www.bmj.com/content/384/bmj-2023-074820

---

## 3. Binuya et al. — systematic review of model evaluation/updating guidance

Binuya MAE, Engelhardt EG, Schats W, Schmidt MK, Steyerberg EW.  
**Methodological guidance for the evaluation and updating of clinical prediction models: a systematic review.**  
BMC Med Res Methodol. 2022;22:316.

Current PubMed/full-text record checked 2026-11-17.

Commonly recommended update classes:

1. **recalibration**
   - intercept/baseline hazard;
   - and/or calibration slope;
2. **revision**
   - re-estimation of individual predictor effects;
3. **extension**
   - addition of new predictors/markers.

The review also notes:

- simpler updating can be sufficient when development and new data differ only modestly;
- more extensive updating can be appropriate when differences are larger;
- periodic/continuous dynamic updating exists but has less mature general guidance;
- guidance is strongest for conventional regression-based models.

https://pubmed.ncbi.nlm.nih.gov/36510134/
https://pmc.ncbi.nlm.nih.gov/articles/PMC9742671/

---

## 4. Efthimiou et al. — prediction-model development guide

**Developing clinical prediction models: a step-by-step guide.**  
BMJ. 2024;386:e078276.

Current search record checked 2026-11-17.

Relevant guidance:

- if a suitable existing low-bias model exists, external validation in the intended setting can be preferable to de novo development;
- depending on validation results, an existing model can be updated/adapted;
- common strategies:
  - recalibration;
  - revision;
  - extension;
- model updating concepts also apply beyond ordinary regression, though implementation differs for ML.

https://www.bmj.com/content/386/bmj-2023-078276

---

## 5. Su et al. / methodological review of statistical updating

**A review of statistical updating methods for clinical prediction models.**  
Stat Methods Med Res. 2018.

Used as background support for the principle that:

- model updating can retain useful historical information instead of discarding an existing model and developing a completely new one;
- there is no universally optimal updating method across all contexts.

https://pubmed.ncbi.nlm.nih.gov/27460537/

---

## 6. Meijerink et al. — AI model updating

**Updating methods for artificial intelligence-based clinical prediction models: a scoping review.**  
J Clin Epidemiol. 2025;111636.

Checked 2026-11-17.

Relevant current limitation:

- many AI updating methods exist, especially for neural networks;
- updating methods for other ML model classes remain underexplored;
- the evidence/guidance base is substantially less standardized than for classical regression updating.

https://pubmed.ncbi.nlm.nih.gov/39662644/

---

# Part A — Validation must precede updating conceptually

## 1. Validate the original model first

### Established finding
**Confidence: HIGH**

External validation asks:

> How does the existing model perform **as originally specified** in this new relevant dataset?

Therefore the correct sequence is:

`fixed original model → apply unchanged → estimate original performance → diagnose miscalibration/performance problems → decide whether update is needed`

### Project rule

Do not begin by refitting the model and then call the resulting performance:

> external validation of the original model.

That skips the actual validation question.

---

## 2. Updating answers a different question

### Established finding
**Confidence: HIGH**

Updating asks:

> Can information from the new setting/data be used to adapt the existing model so that predictions become more appropriate here?

This is a **model-development/adaptation step**, not merely evaluation.

Cochrane explicitly treats the updated/extended model as effectively a new model developed after validation.

---

# Part B — What counts as model updating

## 3. Updating changes the prediction function

### Project definition
**Confidence: HIGH**

A model update occurs when new data are used to change any component that alters future predictions, for example:

- intercept;
- baseline risk;
- baseline hazard;
- calibration slope;
- one or more predictor coefficients;
- predictor set;
- algorithmic parameters;
- output calibration mapping.

### Project rule

If the same input individual can receive a different predicted value after the procedure, a new model version exists.

---

# Part C — Recalibration-in-the-large / intercept update

## 4. Simplest binary-outcome recalibration

### Established finding
**Confidence: HIGH**

For a regression-based binary prediction model, a common minimal update adjusts the **intercept** while retaining the original relative predictor effects.

Conceptually:

- old predictor weights remain fixed;
- baseline level of risk is shifted to better match the new population.

This is often called:

- recalibration-in-the-large;
- intercept recalibration.

### Scientific interpretation

This is appropriate in a setting where the model's ranking/relative structure may remain useful but overall outcome frequency differs.

---

## 5. Intercept recalibration targets systematic over/underprediction

### Established finding
**Confidence: HIGH**

If the model systematically predicts too high or too low across much of the prediction range, while calibration slope is otherwise acceptable, changing the baseline/intercept can correct the overall level.

Project simplification:

> **location error** in risk scale → consider baseline/intercept recalibration.

This is not an automatic prescription; full calibration pattern still must be inspected.

---

# Part D — Time-to-event baseline-hazard recalibration

## 6. Survival models require a baseline component

### Established finding
**Confidence: HIGH**

For time-to-event prediction, absolute risk depends on:

- relative predictor effects;
- baseline hazard/survival function.

If predictor effects transport reasonably but event rates differ, the baseline hazard/survival component can be re-estimated for the new population.

### Project rule

Do not treat updating a survival model as merely changing a logistic-style intercept.

Record exactly which baseline-risk/hazard component was updated and at what prediction horizon(s).

---

## 7. Baseline hazard can vary by population and calendar time

### Established finding
**Confidence: HIGH**

Changes in:

- treatment;
- training practice;
- population composition;
- healthcare;
- exposure environment

can shift baseline outcome risk without proportionally changing all predictor effects.

This makes baseline recalibration a plausible minimal adaptation under some distribution shifts.

---

# Part E — Calibration-slope updating

## 8. Calibration slope diagnoses prediction extremeness

### Established finding
**Confidence: HIGH**

In external validation:

- ideal calibration slope ≈ 1;
- slope <1 often indicates predictions are too extreme;
- slope >1 can indicate predictions are not extreme enough or other structural differences.

Binuya et al. classify adjustment of slope together with intercept/baseline hazard as recalibration.

---

## 9. Slope recalibration changes the overall prognostic index

### Established finding
**Confidence: HIGH**

A slope update rescales the model's existing combined linear predictor rather than re-estimating every predictor separately.

Conceptually:

`old prognostic index → multiply/rescale as one unit → update baseline/intercept as needed`

This preserves the relative pattern among original predictors more strongly than full revision.

### Project classification

> recalibration using baseline/intercept + global slope

is more extensive than baseline-only recalibration but less extensive than re-estimating individual coefficients.

---

# Part F — Model revision

## 10. Revision re-estimates predictor effects

### Established finding
**Confidence: HIGH**

When external evidence suggests the original predictor effects do not transport adequately, researchers may re-estimate:

- some coefficients;
- or all coefficients.

Binuya et al. call this:

> model revision.

### Consequence

The more coefficients are re-estimated, the more the update becomes a new development exercise using the new dataset.

---

## 11. Partial revision

### Established methodological category
**Confidence: HIGH**

Possible structure:

1. retain some original parameters;
2. re-estimate selected predictor effects;
3. update baseline/intercept.

This can retain historical information while adapting known unstable components.

### Project record

Need to identify **which parameters were fixed vs re-estimated**.

"Model updated" alone is insufficient.

---

## 12. Full revision / refitting

### Established finding
**Confidence: HIGH**

At the strong end of conventional updating:

- all predictor coefficients are re-estimated;
- baseline/intercept/hazard is also re-estimated.

If predictor set/model form is otherwise retained, this can still be described as full model revision.

### Project inference

Methodologically, this approaches de novo development because most learned predictive parameters now come from the new dataset.

Therefore the old model's validation history should not be mechanically inherited.

---

# Part G — Model extension

## 13. Extension adds new predictors

### Established finding
**Confidence: HIGH**

Model extension means adding one or more new predictors/markers to an existing model.

Canonical structure:

`existing model + new predictor(s) → extended model`

Potential purpose:

- improve discrimination;
- improve calibration;
- improve clinical utility;
- adapt model to new measurement availability/context.

---

## 14. Adding a predictor creates a different model

### Established finding
**Confidence: HIGH**

Cochrane explicitly states that adding predictors after validation creates a new model.

### Project rule

The following are separate model identities:

- original model;
- original model + biomarker;
- original model + wearable feature;
- original model + new interaction.

Do not transfer external-validation status automatically from original to extended version.

---

# Part H — Updating hierarchy

## 15. A useful structural hierarchy

### Evidence-supported project synthesis
**Confidence: HIGH**

From least to more extensive data adaptation:

1. **baseline/intercept recalibration**
2. **baseline/intercept + global slope recalibration**
3. **partial coefficient revision**
4. **full coefficient revision/refit**
5. **extension with new predictors**
6. combinations of revision + extension

### Important qualification

This is a hierarchy of **extent of model change**, not a guaranteed preferred sequence for every problem.

The appropriate update depends on:

- observed validation defect;
- new-data size;
- relatedness of populations;
- model form;
- intended use.

---

## 16. Prefer the least extensive justified update, not the smallest update by dogma

### Evidence-supported inference
**Confidence: MODERATE-HIGH**

Binuya et al. summarize guidance that simpler recalibration can be sufficient when differences are modest, whereas stronger revision may be needed when differences are larger.

### Project rule

Use:

> minimally sufficient adaptation consistent with diagnosed failure and available evidence.

Do not encode:

> always recalibrate only,

or:

> always refit everything.

---

# Part I — Diagnose before choosing update

## 17. Calibration-in-the-large and slope describe different failures

### Established finding
**Confidence: HIGH**

External validation should inspect multiple calibration components.

Examples:

- overall risk systematically too high/low → baseline/intercept issue may dominate;
- predictions too extreme/compressed → slope issue may dominate;
- irregular/nonlinear calibration defects → simple recalibration may be insufficient;
- poor discrimination → intercept-only update cannot repair ranking.

### Project consequence

Update type should follow the observed performance defect, not author preference alone.

---

## 18. Baseline recalibration cannot repair poor discrimination

### Established inference
**Confidence: HIGH**

Changing intercept/baseline hazard shifts probability levels but does not fundamentally reorder individuals when predictor effects remain fixed.

Therefore:

> a model that cannot distinguish higher- and lower-risk individuals is not repaired by baseline recalibration alone.

More extensive revision/new predictors/new model architecture may be necessary.

---

# Part J — Original-model performance must remain visible

## 19. Validation result cannot be overwritten by the update

### Project rule
**Confidence: HIGH**

A report should preserve separately:

1. performance of original model in new data;
2. chosen update method;
3. performance of updated model in update data.

Otherwise readers cannot tell:

- why update was needed;
- how extensive adaptation was;
- how much apparent improvement came from using the same data to update.

---

# Part K — Updated performance is usually not independent validation

## 20. Same update dataset is now development data for model version 2

### Established finding / project consequence
**Confidence: HIGH**

Once the external-validation dataset is used to estimate:

- intercept;
- slope;
- coefficients;
- new predictor effects;

that dataset becomes **development/update data for the modified model**.

Therefore performance of the modified model in those same observations is not independent external validation of the new model.

### Canonical sequence

`Dataset B: validate Model v1 → use B to update → create Model v2 → B is development/update data for v2`

Model v2 needs new evaluation.

---

## 21. Updating and validating on same data can create optimism

### Established methodological inference
**Confidence: HIGH**

The more extensive the update, the greater the possibility that the new model adapts to sample-specific noise in the update dataset.

Therefore:

- simple recalibration may have relatively few learned parameters;
- full refit/extension can have substantial overfitting risk.

Internal validation of the updating procedure and/or independent revalidation becomes increasingly important.

Detailed methods are deferred.

---

# Part L — Model version identity

## 22. Versioning is mandatory for scientific traceability

### Project rule
**Confidence: HIGH**

Any update that changes predictions should create a new explicit model version.

Minimum version record:

1. parent model/version;
2. update dataset;
3. date/calendar period;
4. target setting/population;
5. parameters changed;
6. predictors added/removed;
7. preprocessing changed?;
8. output calibration changed?;
9. intended deployment scope;
10. validation evidence for this exact version.

---

## 23. Same model name can hide different prediction functions

### Established practical problem
**Confidence: HIGH**

Literature/software may retain one branded model name after recalibration or local adaptation.

Scientifically, however:

> same label ≠ same model version.

### Project rule

Model identity is defined by the actual prediction function/pipeline, not branding.

---

# Part M — Local recalibration vs globally portable model

## 24. Local recalibration changes intended deployment context

### Project synthesis
**Confidence: HIGH**

Suppose Model v1 is transported to Gym/System B and only the baseline/intercept is updated there.

Model v2-B can be well adapted to B while no longer having identical calibration properties in A, C or future B periods.

### Consequence

A locally recalibrated model should carry the context of its recalibration.

Do not imply that adaptation in one setting improves every setting.

---

# Part N — Updating over time

## 25. Periodic/continual updating exists

### Established finding
**Confidence: HIGH**

Binuya et al. and current BMJ guidance recognize:

- periodic updating;
- continual/dynamic updating

as responses to calibration drift and evolving data-generating processes.

### Scope decision

This pass records the category only.

Detailed architectures for:

- rolling windows;
- online learning;
- continual recalibration;
- dynamic prediction

are deferred because they require their own design treatment.

---

# Part O — AI/ML updating

## 26. Same scientific boundary applies to AI models

### Established finding
**Confidence: HIGH**

Changing a neural network, random forest or other ML prediction system using new data is model updating/development.

The validation-before-update and new-version-after-update principles still apply.

---

## 27. Statistical guidance is less mature for AI updates

### Established finding
**Confidence: HIGH**

The 2025 scoping review of AI-based clinical prediction model updating found:

- many heterogeneous methods;
- heavy representation of neural-network transfer/fine-tuning approaches;
- comparatively limited evidence for several other ML classes.

### Project rule

Do not mechanically transfer the exact regression recalibration hierarchy to every AI architecture.

Structural concepts transfer; statistical implementation may not.

---

# Part P — Fitness/exercise translations

## 28. Intercept recalibration example

Original model:

> predicts 12-week dropout probability at program start.

In a new gym network:

- ranking/discrimination remains reasonable;
- observed dropout rate is systematically lower than predicted.

Possible adaptation:

> update baseline/intercept while retaining predictor weights.

Classification:

> external validation of v1 → intercept recalibration → v2-network.

v2-network requires its own future validation evidence.

---

## 29. Slope update example

Original model:

- high-risk trainees are predicted far too high;
- low-risk trainees far too low;
- calibration slope indicates predictions are too extreme.

Adaptation:

> update global calibration slope plus baseline/intercept.

Classification:

> global recalibration, stronger than intercept-only update.

---

## 30. Revision example

External data suggest:

- baseline strength effect remains stable;
- sleep effect is much weaker;
- training-history effect is stronger.

Re-estimating selected effects:

> partial revision.

Re-estimating all effects:

> full revision/refit.

These are distinct from simply changing baseline risk.

---

## 31. Extension example

Existing adherence model uses:

- training history;
- baseline strength;
- demographics.

New setting has reliable wearable sleep/activity data.

Adding those features creates:

> extended model v2.

Even if original model was externally evaluated previously, the extended v2 requires new evaluation.

---

# Part Q — Structural record produced by PASS-06B8

## 32. Model-update record

For each updating study, record:

1. original model identifier/version;
2. prediction target;
3. intended use;
4. validation dataset;
5. original model applied unchanged before update? YES/NO;
6. original-model performance recorded? YES/NO;
7. reason for update:
   - baseline miscalibration;
   - slope miscalibration;
   - poor discrimination;
   - setting shift;
   - temporal drift;
   - new predictor availability;
   - other;
8. update class:
   - intercept/baseline-only recalibration;
   - intercept + slope recalibration;
   - partial coefficient revision;
   - full coefficient revision/refit;
   - extension;
   - combined revision + extension;
   - ML/AI-specific adaptation;
9. baseline/intercept changed?;
10. baseline hazard/survival changed?;
11. global slope changed?;
12. individual predictor coefficients changed?;
13. predictors added?;
14. predictors removed?;
15. transformations/interactions changed?;
16. preprocessing changed?;
17. algorithm/model architecture changed?;
18. number of new parameters learned;
19. update sample size/outcome information;
20. internal validation of update procedure? YES/NO;
21. performance of original model in update data;
22. performance of updated model in same data;
23. updated model assigned new version? YES/NO;
24. updated model independently revalidated? YES/NO;
25. revalidation population/setting;
26. intended deployment scope for updated version;
27. temporal validity period if relevant;
28. evidence that update improves clinical utility? — defer to impact pass;
29. project classification;
30. unresolved optimism/transportability issues.

---

# Practical rules produced by PASS-06B8

1. External validation and model updating are different scientific phases.
2. The original model should be evaluated unchanged before it is updated.
3. Updating uses new data to alter the prediction function and is therefore a development/adaptation step.
4. Any update that changes predictions creates a new model version.
5. Intercept/baseline recalibration is the least extensive conventional update.
6. Time-to-event models may require re-estimation of baseline hazard/survival rather than a simple binary intercept.
7. Global slope recalibration changes overall prediction extremeness while retaining relative structure among original predictors.
8. Partial revision re-estimates selected predictor effects.
9. Full revision/refitting re-estimates most/all predictor effects and approaches a new development exercise.
10. Extension adds new predictors and creates a distinct model.
11. Model-update methods form a continuum of adaptation extent; there is no universally correct amount of updating.
12. Simpler recalibration may be sufficient when transport differences are modest; stronger revision can be necessary when relationships differ more substantially.
13. Type of update should be motivated by the diagnosed performance defect.
14. Baseline/intercept recalibration cannot repair fundamentally poor discrimination.
15. Original-model validation results must remain reported separately from updated-model results.
16. Once validation data are used to update the model, those data become development/update data for the new version.
17. Performance of the updated model in the same update data is not independent external validation.
18. More extensive updating increases the need to address overfitting in the update data.
19. Updated models require new validation evidence before broad deployment claims.
20. Validation status belongs to an exact model version, not merely a branded model name.
21. Local recalibration creates a context-specific version and does not prove improvement elsewhere.
22. Periodic/continual updating is a separate design family requiring later detailed treatment.
23. The structural principles apply to ML/AI, but exact statistical updating guidance is less standardized than for regression.
24. Project architecture:
   **Model v1 → unchanged external validation → diagnose failure → choose update → Model v2 → internal check of update as needed → independent revalidation of v2 → impact evaluation**.

---

# Important evidence limitation

The most standardized methodological guidance remains strongest for conventional regression-based prediction models.

For AI/ML systems:

- scientific phase boundaries remain applicable;
- but exact mapping of "intercept/slope/revision" to architecture-specific updating is not always direct;
- transfer learning/fine-tuning and other update methods need separate methodological appraisal.

Therefore this pass does **not** claim that the conventional regression update ladder is a universal algorithm for every prediction system.

---

# What remains unresolved after PASS-06B8

The prognosis/prediction branch remains **RESEARCHING**.

Still requires separate deep blocks on:

1. model-impact / utility study structures;
2. prediction-model-guided decision strategies;
3. comparative impact trials;
4. potential vs actual clinical/practical usefulness;
5. treatment-context / intervention-induced outcome changes;
6. performance-estimand integration;
7. continual/dynamic updating if required by later gap audit;
8. prognosis/prediction structural synthesis;
9. final gap audit.

## Next micro-pass

**RES-02 / PASS-06B9 — prediction-model impact and utility study structures: statistical performance vs decision utility vs actual outcome impact, model-guided strategy trials, cluster/randomized impact designs, before-after alternatives, and the boundary between prediction evidence and intervention evidence.**

STOP after this saved micro-pass.
