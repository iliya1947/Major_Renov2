# RES-02 / PASS-06B14 — Diagnostic prediction models vs diagnostic test accuracy

Статус: **COMPLETE MICRO-PASS — prediction branch remains RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. diagnostic prediction model как current-condition probability model;
2. temporal boundary diagnostic vs prognostic prediction;
3. multivariable diagnostic prediction vs single index test;
4. target condition / outcome / reference-standard relation;
5. diagnostic-model development;
6. apparent / internal / external evaluation;
7. calibration / discrimination / overall performance;
8. thresholding a probability model;
9. sensitivity/specificity and overlap with DTA;
10. when a fixed diagnostic model can function as an index test;
11. why diagnostic-model evaluation is broader than threshold DTA;
12. predictor/reference-standard leakage and incorporation boundary at taxonomy level;
13. transfer of PASS-06B5…B10 lifecycle to diagnostic models;
14. practical fitness/exercise examples;
15. structural record.

Не покрывается здесь:

- detailed QUADAS-3 / PROBAST+AI risk-of-bias appraisal;
- diagnostic meta-analysis;
- exact ROC/AUC mathematics;
- sample-size formulae;
- reference-standard error correction;
- latent-class models;
- diagnostic impact trials in depth;
- detailed screening-program evaluation;
- final prediction-branch synthesis.

---

# Sources checked

## 1. TRIPOD+AI — current official scope

Current TRIPOD+AI scope checked 2026-11-17.

TRIPOD+AI defines a prediction model as a mathematical model combining multiple predictors/features to estimate:

- probability that a condition is **present** — diagnostic prediction;
- probability that an outcome will occur in the **future** — prognostic prediction.

It covers models for:

- diagnosis;
- prognosis;
- monitoring;
- screening;

and covers:

- development;
- evaluation;
- updating.

Current scope page states that TRIPOD+AI replaces TRIPOD-2015.

https://www.tripod-statement.org/scope/

---

## 2. TRIPOD+AI statement

Collins GS, Moons KGM, Dhiman P, et al.  
**TRIPOD+AI statement: updated guidance for reporting clinical prediction models that use regression or machine learning methods.**  
BMJ. 2024;385:e078378.

Current published article checked 2026-11-17.

Relevant points:

- prediction models can be diagnostic or prognostic;
- model evaluation includes:
  - discrimination;
  - calibration;
  - clinical utility;
- training/development data are the data used to develop the model;
- data used for tuning/model selection remain part of development;
- model evaluation is distinct from development.

https://www.bmj.com/content/385/bmj-2023-078378  
https://pmc.ncbi.nlm.nih.gov/articles/PMC11019967/

---

## 3. Original TRIPOD diagnostic/prognostic timing framework

Moons KGM, Altman DG, Reitsma JB, et al.  
**Transparent reporting of a multivariable prediction model for individual prognosis or diagnosis (TRIPOD).**

Used here for the still-current temporal distinction:

- diagnostic prediction estimates whether a condition is present at the moment of prediction;
- prognostic prediction estimates whether a future event will occur during a future period;
- diagnostic prediction is therefore structurally cross-sectional in its target;
- a short practical interval between predictor/index measurements and reference-standard determination can exist, but should not allow meaningful target-condition change or treatment-induced change.

https://pmc.ncbi.nlm.nih.gov/articles/PMC4284921/

This older paper is not used as the current reporting checklist; TRIPOD+AI supersedes/replaces the old checklist. It is used only for the conceptual diagnostic-vs-prognostic time architecture that remains consistent with current TRIPOD+AI terminology.

---

## 4. PROBAST+AI

Moons KGM, Damen JAA, Kaul T, et al.  
**PROBAST+AI: an updated quality, risk of bias, and applicability assessment tool for prediction models using regression or artificial intelligence methods.**  
BMJ. 2025;388:e082505.

Current publication checked 2026-11-17.

Relevant points:

- prediction-model development and model-performance evaluation are separate phases;
- evaluation is classified as:
  - apparent;
  - internal validation;
  - external validation;
- participant/data-source, predictor, outcome and analysis domains apply to prediction models irrespective of regression vs AI/ML method;
- model updating is again a development activity.

https://www.bmj.com/content/388/bmj-2024-082505

---

## 5. Cochrane DTA Handbook — current status

**Cochrane Handbook for Systematic Reviews of Diagnostic Test Accuracy.**

Current official landing and versions pages checked 2026-11-17.

Current citation remains:

> Version 2.0, updated July 2023.

The versions page lists:

> **Version 2.0.1 (2026)**

with minor corrections.

https://www.cochrane.org/authors/handbooks-and-manuals/handbook-systematic-reviews-diagnostic-test-accuracy  
https://www.cochrane.org/authors/handbooks-and-manuals/handbook-systematic-reviews-diagnostic-test-accuracy/versions-and-changes-dta-handbook

---

## 6. Cochrane DTA learning module

Current official module checked 2026-11-17.

Core DTA structure:

- index test;
- target condition;
- reference standard;
- participants in whom target-condition status is uncertain;
- index test compared with the best available reference-standard determination.

Typical DTA quantities include:

- sensitivity;
- specificity;
- predictive values;
- other accuracy measures.

https://www.cochrane.org/sites/default/files/learning_modules/DTA_modules/1.3_Introduction_to_test_accuracy/story.html

---

## 7. BMJ external prediction-model evaluation guidance

Riley RD, Archer L, Snell KIE, et al.  
**Evaluation of clinical prediction models (part 2): how to undertake an external validation study.**  
BMJ. 2024;384:e074820.

Relevant distinction:

- prediction-model evaluation should examine overall predictive performance rather than forcing every probability model into a high/low classification;
- calibration and discrimination are core;
- traditional sensitivity/specificity become more relevant when a clinically meaningful threshold is actually used;
- decision utility should be evaluated at such thresholds where applicable.

https://www.bmj.com/content/384/bmj-2023-074820  
https://pmc.ncbi.nlm.nih.gov/articles/PMC10788734/

---

# Part A — What is a diagnostic prediction model?

## 1. Core target

### Established finding
**Confidence: HIGH**

A diagnostic prediction model combines multiple predictors/features to estimate the probability that a target condition is **present at the moment of prediction**.

Canonical structure:

`information available at diagnostic T0 → multivariable prediction function → probability target condition is currently present`

Example output:

> 27% probability that the current complaint represents condition X.

---

## 2. Diagnostic vs prognostic prediction is primarily a time distinction

### Established finding
**Confidence: HIGH**

### Diagnostic

Target condition is present/absent **now**.

### Prognostic

Outcome/event occurs during a **future** period after the prediction startpoint.

### Project rule

Do not classify a model from labels such as:

- risk score;
- AI classifier;
- screening algorithm.

Classify from the temporal target.

---

## 3. Diagnostic target can still require a short verification interval

### Established finding
**Confidence: HIGH**

In practical diagnostic studies, the reference standard may be obtained after predictor/index measurements.

That does not make the model prognostic if the scientific target remains:

> condition status at the diagnostic episode.

### Requirement

The verification interval should not allow meaningful:

- disease-state change;
- treatment-induced change;

that makes the reference standard represent a different target state.

---

# Part B — Diagnostic prediction is usually multivariable

## 4. Prediction model combines information

### Established finding
**Confidence: HIGH**

A diagnostic prediction model may combine:

- symptoms;
- history;
- physical examination;
- laboratory tests;
- imaging-derived features;
- wearable/device features;
- demographic/context variables;
- other measurements.

The output is typically:

- probability;
- score mapped to probability;
- or other continuous/ordinal prediction.

### Project rule

A model is defined by the whole prediction function/pipeline, not by one component test.

---

# Part C — Single diagnostic test vs diagnostic prediction model

## 5. Single index test

Canonical DTA object:

`one index test result → compare with reference standard`

The index test may itself be:

- binary;
- ordinal;
- continuous.

Its diagnostic accuracy can be evaluated at one or more thresholds.

---

## 6. Diagnostic prediction model

Canonical object:

`multiple predictors → weighted/learned function → individual probability/score`

### Project distinction

A diagnostic model is not simply:

> many diagnostic tests placed side by side.

The predictors are combined into one prediction function.

---

## 7. Multiple separate index tests are not automatically a prediction model

### Established inference
**Confidence: HIGH**

A comparative DTA study may evaluate:

- Test A;
- Test B;
- Test C;

without combining them into an individual multivariable probability model.

That remains:

> comparative DTA.

A prediction model exists when information is combined through a defined rule/algorithm/function.

---

# Part D — Reference standard and model outcome

## 8. Diagnostic prediction requires a target-condition outcome definition

### Established finding
**Confidence: HIGH**

The model's binary diagnostic outcome/label must be defined.

In many diagnostic-model studies, target-condition status is established using a:

- reference standard;
- composite reference standard;
- adjudicated diagnosis;
- accepted clinical procedure.

### Project record

Store separately:

1. target condition;
2. outcome/reference-standard definition;
3. timing of reference-standard assessment;
4. whether the same definition is used in development and evaluation.

---

## 9. Reference-standard quality affects diagnostic model evidence

### Established finding
**Confidence: HIGH**

If the reference standard misclassifies the target condition, the diagnostic model is being trained/evaluated against an imperfect label.

Therefore:

> model performance against the recorded diagnosis is not necessarily performance against a perfectly observed biological truth.

Detailed correction for imperfect reference standards is deferred.

---

# Part E — Predictor/reference-standard independence

## 10. Predictor measurement should respect diagnostic timing

### Established finding
**Confidence: HIGH**

Predictors intended for use at diagnostic T0 must be available by that moment.

Using information produced only after diagnostic work-up creates target leakage.

Examples:

- pathology result obtained after biopsy;
- final specialist diagnosis;
- post-treatment response;
- future follow-up confirming diagnosis.

These cannot be treated as ordinary T0 predictors if unavailable at intended use.

---

## 11. Incorporation boundary

### Established methodological principle
**Confidence: HIGH**

If a predictor/index result is itself incorporated into the reference standard used to define the model outcome, circularity can arise.

Example:

- diagnostic score contains imaging result;
- final "reference diagnosis" is partly defined using that same imaging result.

### Project rule

At taxonomy level, record:

> whether model predictors contribute to the target-condition/reference-standard determination.

Detailed incorporation-bias appraisal belongs to DTA/PROBAST+AI RoB methodology.

---

# Part F — Diagnostic-model development lifecycle

## 12. PASS-06B5 lifecycle transfers to diagnostic models

### Established finding
**Confidence: HIGH**

TRIPOD+AI and PROBAST+AI apply development/evaluation architecture to both diagnosis and prognosis.

Diagnostic-model development can include:

1. candidate predictor definition;
2. preprocessing;
3. feature engineering;
4. predictor selection;
5. model fitting;
6. hyperparameter tuning;
7. algorithm/model selection;
8. final model specification.

### Project conclusion

PASS-06B5 is not prognosis-only in its **model-development mechanics**.

The same lifecycle applies after replacing the future-outcome target with a current-condition target.

---

## 13. Diagnostic model can be developed in cross-sectional diagnostic data

### Established finding
**Confidence: HIGH**

Because the target condition is current, development data often have a cross-sectional diagnostic architecture:

`participants at diagnostic episode → predictors + target-condition determination → model development`

This differs from prognostic development, which requires longitudinal future-outcome observation.

---

# Part G — Apparent and internal evaluation

## 14. Apparent performance

Same participants influence model development and performance evaluation.

Classification:

> apparent diagnostic-model performance.

Not independent validation.

---

## 15. Internal validation

### Established finding
**Confidence: HIGH**

Bootstrap/CV/nested-CV principles from PASS-06B6 transfer directly to diagnostic prediction models.

The entire data-dependent diagnostic-model development pipeline must remain inside resampling.

### Project rule

Feature selection on all participants before CV remains leakage even though the target is diagnostic rather than prognostic.

---

# Part H — External evaluation

## 16. Fixed diagnostic model in new participants

### Established finding
**Confidence: HIGH**

External evaluation applies the already-defined diagnostic model to new relevant participants and estimates performance without changing the model first.

Potential setting shifts include:

- different clinic;
- different referral spectrum;
- different prevalence;
- different measurement equipment;
- different diagnostic work-up.

### Project conclusion

PASS-06B7 transportability architecture also applies to diagnostic models.

---

# Part I — Core prediction-model performance

## 17. Discrimination

### Established finding
**Confidence: HIGH**

For a binary diagnostic outcome, discrimination assesses whether participants with the target condition tend to receive higher predicted probabilities than participants without it.

Typical measure:

- AUROC / c-statistic.

This uses the whole ranking of predicted probabilities rather than one selected threshold.

---

## 18. Calibration

### Established finding
**Confidence: HIGH**

Calibration asks whether predicted diagnostic probabilities agree with observed target-condition frequencies.

Example:

> among people assigned approximately 20% probability, is the target condition present in approximately 20%?

### Project rule

If the model outputs absolute diagnostic probabilities, calibration is a core performance dimension.

---

## 19. Overall performance

### Established finding
**Confidence: HIGH**

Binary prediction models may also be evaluated using overall prediction-error measures such as the Brier score.

### Integrated rule

Diagnostic prediction-model evaluation should normally separate:

1. calibration;
2. discrimination;
3. overall performance;
4. utility when decisions are intended.

This is the same performance architecture established in PASS-06B10 for binary prediction.

---

# Part J — Why AUC is not the whole diagnostic-model evaluation

## 20. AUC measures ranking, not probability correctness

### Established finding
**Confidence: HIGH**

Two diagnostic models can have similar AUC but different:

- absolute probabilities;
- calibration;
- decision utility.

### Project rule

Do not treat:

> high diagnostic AUC

as sufficient evidence that individual probabilities are accurate.

---

# Part K — Thresholding a diagnostic prediction model

## 21. Probability can be converted into a binary/ordinal diagnostic decision

Example:

`predicted probability ≥ 20% → test positive / refer / investigate`

Once thresholded, the model becomes a classification rule at that operating threshold.

---

## 22. Threshold creates DTA-like quantities

### Established finding
**Confidence: HIGH**

At a given threshold, one can calculate:

- sensitivity;
- specificity;
- positive predictive value;
- negative predictive value;
- likelihood ratios;
- other classification quantities.

### Project conclusion

This is the principal overlap between:

- diagnostic prediction-model evaluation;
- DTA.

---

# Part L — A fixed diagnostic prediction model can function as an index test

## 23. Model-as-index-test principle

### Project synthesis
**Confidence: HIGH**

Once a diagnostic model is fully specified, its output can be treated as an index test:

`fixed model → model score/probability → compare with reference-standard target condition`

The index result can be:

- continuous probability;
- score;
- binary thresholded decision.

Therefore a fixed diagnostic model can legitimately appear inside a DTA study.

---

## 24. But model development itself is not DTA

### Critical boundary
**Confidence: HIGH**

During development, the data are used to **learn the index function itself**.

This introduces additional questions not covered by ordinary evaluation of a prespecified index test:

- candidate predictor search;
- feature selection;
- overfitting;
- tuning;
- model-selection optimism;
- reproducibility of the full prediction pipeline.

### Project rule

Classify:

> diagnostic prediction-model development

separately from:

> accuracy evaluation of an already fixed diagnostic model/index test.

---

# Part M — DTA and diagnostic-model evaluation overlap but have different primary emphases

## 25. DTA primary emphasis

DTA asks:

> How accurately does an index test/result classify target-condition status relative to an acceptable reference standard?

Typical emphasis:

- sensitivity;
- specificity;
- ROC/threshold behavior;
- predictive values;
- likelihood ratios;
- direct comparison of tests.

---

## 26. Diagnostic prediction-model primary emphasis

Prediction-model evaluation asks:

> How well does the full individual probability prediction function perform?

Typical emphasis:

- calibration;
- discrimination;
- overall prediction error;
- decision utility;
- performance across development/internal/external evaluation phases.

---

## 27. Neither framework completely subsumes the other

### Project synthesis
**Confidence: HIGH**

A diagnostic model can be evaluated as a test, but probability-model evidence can be lost if one reports only threshold sensitivity/specificity.

Conversely, a model with good calibration/AUC can still need threshold-specific DTA/decision analysis if deployment requires a binary action.

### Integrated rule

Use the inferential target:

- **probability prediction** → prediction-model framework;
- **threshold/index-test classification accuracy** → DTA framework;
- **both** → record both layers.

---

# Part N — ROC/AUC sits in both traditions

## 28. Important overlap

### Established finding
**Confidence: HIGH**

ROC/AUC is used in:

- test accuracy;
- prediction-model discrimination.

Therefore:

> presence of an ROC curve does not classify the study family.

### Project rule

Classify from:

1. what object is being developed/evaluated?;
2. what is the inferential target?;
3. is the model fixed?;
4. are calibrated probabilities part of the intended output?;
5. is a thresholded index-test decision the main target?

---

# Part O — Sensitivity/specificity should not automatically dominate probability-model evaluation

## 29. Current prediction-model guidance

### Established finding
**Confidence: HIGH**

BMJ 2024 external-validation guidance notes that sensitivity/specificity are less informative for a probabilistic prediction model when no clinically meaningful threshold has been specified.

For probability prediction, performance should primarily preserve the continuous information through:

- calibration;
- discrimination;
- overall performance.

### If threshold is clinically meaningful

Then report threshold-specific quantities and/or decision utility.

---

# Part P — Predictive values and prevalence

## 30. PPV/NPV depend on target-condition prevalence

### Established finding
**Confidence: HIGH**

Cochrane DTA guidance emphasizes that predictive values depend on pre-test probability/prevalence.

### Project consequence

A diagnostic model or threshold can show different:

- PPV;
- NPV;

in settings with different target-condition prevalence even if some other performance properties remain similar.

This is part of diagnostic transportability.

---

# Part Q — Diagnostic model calibration and prevalence/base-rate shift

## 31. Base rate matters for absolute diagnostic probability

### Project integration
**Confidence: HIGH**

A diagnostic model's calibrated probability scale depends on the target-condition distribution and predictor relationships in the target setting.

If prevalence/base rate changes:

- discrimination may remain acceptable;
- calibration can shift.

This parallels the baseline-risk transportability logic from prognostic prediction.

### Project rule

External diagnostic-model evaluation must not report AUC alone when the intended use requires absolute probabilities.

---

# Part R — Screening vs diagnosis

## 32. Screening is an intended-use context, not a separate mathematical model family by itself

### Established finding
**Confidence: HIGH**

TRIPOD+AI scope includes screening models within the broader prediction-model framework.

A model used in screening can still be:

- diagnostic/current-condition prediction;
- or prognostic/future-risk prediction,

depending on its target.

### Project rule

Do not classify a model as diagnostic merely because authors call it a "screening model".

Inspect the temporal target.

---

# Part S — Monitoring

## 33. Monitoring label also does not determine diagnostic/prognostic status alone

### Project inference
**Confidence: HIGH**

A monitoring model may estimate:

- current deterioration/state → diagnostic/current-state target;
- future deterioration/event → prognostic target.

Again, time relative to prediction determines the classification.

---

# Part T — Diagnostic model vs measurement-property study

## 34. Measurement validity is not diagnostic predictive performance

### Cross-branch integration
**Confidence: HIGH**

A predictor/instrument can have excellent:

- reliability;
- measurement validity;

and still contribute little diagnostic information.

Conversely, a diagnostic model can perform well using predictors whose individual measurement-property evidence varies.

### Project rule

Keep separate:

1. measurement properties of predictor instruments;
2. diagnostic probability-model performance;
3. threshold test accuracy.

---

# Part U — Diagnostic model vs diagnostic impact

## 35. Accurate prediction is not improved outcomes

### Established finding
**Confidence: HIGH**

As already established for DTA and prediction models:

> good diagnostic accuracy/performance does not prove that using the model improves outcomes.

Once the question is:

> Does model-guided diagnostic management improve participant/patient outcomes?

route to:

> intervention/test-strategy impact design.

This remains consistent with PASS-06A and PASS-06B9.

---

# Part V — Fitness/exercise translations

## 36. Current injury diagnosis model

Question:

> At today's assessment, what is the probability that the athlete currently has condition X?

Inputs:

- symptoms;
- palpation;
- strength asymmetry;
- functional test;
- ultrasound feature.

Output:

> individual probability of current condition.

Classification:

> diagnostic prediction model.

---

## 37. Same model evaluated at a referral threshold

Policy:

> refer for imaging if predicted probability ≥20%.

At 20%, report:

- sensitivity;
- specificity;
- PPV/NPV;
- decision utility.

Classification:

- diagnostic prediction model evaluation;
- plus threshold-specific DTA/decision layer.

---

## 38. Prognostic injury model

Question:

> At today's assessment, what is probability of sustaining a new injury within the next 12 weeks?

Classification:

> prognostic prediction model.

Same predictors do not make it diagnostic; the target is future.

---

## 39. Measurement-property study

Question:

> Is the strength-asymmetry measurement repeatable and valid?

Classification:

> measurement-property study.

Not diagnostic prediction simply because the measure may later be used in a diagnostic model.

---

# Part W — Structural record produced by PASS-06B14

## 40. Diagnostic prediction-model record

For each diagnostic prediction-model study, record:

1. model identifier/version;
2. intended use:
   - diagnosis;
   - screening;
   - monitoring;
   - other;
3. temporal target:
   - current/present condition;
   - future outcome;
4. target condition;
5. diagnostic T0 / diagnostic episode;
6. predictor availability by T0?;
7. candidate predictors;
8. final predictors/features;
9. model-development method;
10. model output:
    - probability;
    - score;
    - category;
11. reference-standard / outcome definition;
12. reference-standard timing;
13. target state plausibly stable between predictors and reference standard?;
14. treatment started before verification?;
15. predictor incorporated into reference standard?;
16. development data;
17. apparent performance?;
18. internal validation?;
19. external validation?;
20. external population/setting;
21. calibration evaluated?;
22. discrimination evaluated?;
23. overall performance evaluated?;
24. model output thresholded?;
25. threshold prespecified/clinically meaningful?;
26. threshold sensitivity;
27. threshold specificity;
28. PPV/NPV;
29. prevalence / target-condition frequency;
30. decision utility evaluated?;
31. fixed model evaluated as index test?;
32. study contains:
    - model development;
    - prediction-model evaluation;
    - DTA layer;
    - impact layer;
33. final project classification;
34. unresolved leakage/reference-standard/applicability issues.

---

# Practical rules produced by PASS-06B14

1. Diagnostic prediction estimates the probability that a target condition is present at the prediction moment.
2. Prognostic prediction estimates a future outcome; time is the primary diagnostic-vs-prognostic boundary.
3. A short reference-standard verification delay does not automatically make a diagnostic study prognostic.
4. A diagnostic prediction model combines multiple predictors into one individual prediction function.
5. Multiple separately evaluated index tests are not automatically a multivariable prediction model.
6. Diagnostic model development commonly has a cross-sectional target architecture rather than longitudinal future-outcome follow-up.
7. The target condition/reference-standard definition is the outcome label used to develop/evaluate many diagnostic models.
8. Imperfect reference standards can limit model evidence because the model is trained/evaluated against an imperfect target label.
9. Predictors must be available at diagnostic T0.
10. Information from later diagnostic work-up can create target leakage.
11. Predictor incorporation into the reference standard creates a circularity/incorporation concern.
12. Development, apparent evaluation, internal validation, external validation, updating and impact phases apply to diagnostic as well as prognostic prediction models.
13. Bootstrap/CV leakage principles transfer directly to diagnostic model development.
14. External diagnostic-model evaluation applies the fixed model to new relevant participants before updating.
15. Diagnostic prediction-model performance is multidimensional: calibration, discrimination, overall performance and utility.
16. AUC/discrimination does not establish correctness of individual diagnostic probabilities.
17. Calibration is essential when absolute diagnostic probabilities are intended for use.
18. A probability model can be thresholded into a diagnostic classification rule.
19. At a chosen threshold, sensitivity/specificity and other DTA quantities can be calculated.
20. A fully specified diagnostic prediction model can function as an index test in a DTA study.
21. Development of the diagnostic model itself is not ordinary fixed-index-test DTA because the prediction function is being learned from data.
22. DTA and diagnostic prediction-model evaluation overlap but have different primary inferential emphasis.
23. ROC/AUC occurs in both traditions and therefore does not identify the study family.
24. For probability models, sensitivity/specificity should not replace calibration/discrimination unless a meaningful threshold decision is the target.
25. PPV/NPV depend strongly on target-condition prevalence/pre-test probability.
26. Diagnostic calibration can change when prevalence/base risk or predictor relationships change across settings.
27. Screening/monitoring labels do not by themselves determine whether a model is diagnostic or prognostic; inspect the temporal target.
28. Measurement-property evidence, diagnostic-model evidence and DTA evidence are distinct layers.
29. Good diagnostic performance/accuracy does not prove benefit from using the model; impact requires intervention/test-strategy evidence.
30. Minimum integrated architecture:
    **diagnostic T0 + target condition + reference standard → multivariable model development/evaluation → calibrated probability performance → optional threshold → DTA quantities/decision utility → impact if deployed**.

---

# Gap status after PASS-06B14

The first blocking gap identified by PASS-06B13 is now covered at taxonomy level.

Remaining blocking gaps before prediction-branch synthesis:

1. **PASS-06B15 — competing risks / recurrent events / multistate prediction**;
2. **PASS-06B16 — continual/online updating and post-deployment lifecycle**;
3. then a new final prediction-branch gap audit.

## Next micro-pass

**RES-02 / PASS-06B15 — complex event outcome prediction: competing risks, recurrent events and multistate structures; what each predicts, how target estimands differ from ordinary first-event survival, and implications for development/validation at taxonomy level.**

STOP after this saved micro-pass.
