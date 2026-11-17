# RES-02 / PASS-06B5 — Prediction-model development study structures

Статус: **COMPLETE MICRO-PASS — RES-02 remains RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. что именно считается prediction-model development study;
2. development dataset;
3. candidate predictors;
4. predictor availability at intended prediction time;
5. target population / outcome / prediction horizon as prerequisites for model development;
6. model specification as the full learned prediction procedure, а не только список коэффициентов;
7. predictor preprocessing / transformations / interactions / feature construction;
8. predictor selection;
9. model fitting / parameter estimation;
10. hyperparameter tuning / model-selection steps;
11. apparent performance;
12. overfitting / optimism на уровне design taxonomy;
13. граница development vs evaluation;
14. why data reused for tuning are still development data;
15. why a model should be considered "fixed/frozen" before independent evaluation;
16. added-predictor development as a special development form;
17. minimal project structural record for development studies.

Не покрывается здесь:

- internal validation methods in detail;
- bootstrap / cross-validation design comparison;
- external validation;
- internal-external validation;
- sample-size formulae;
- full shrinkage / penalization theory;
- missing-data methods in detail;
- calibration / discrimination statistics in detail;
- decision-curve analysis;
- model updating after external evaluation;
- fairness methods;
- deployment / impact studies;
- final prognosis/prediction synthesis.

---

# Sources checked

## 1. Cochrane Handbook for Systematic Reviews of Prognosis Research and Prediction Models — Chapter 1

Moons KGM, Hayden J, Williams K, Riley RD.  
**Chapter 1: Prognosis and types of prognosis research in healthcare.**  
Draft version: **March 2026**.

Current official Cochrane material checked 2026-11-17.

Relevant current guidance:

- prediction-model research is a distinct prognosis family;
- development = production of a prediction model from a development dataset;
- development includes selecting predictors and assigning/learning weights in a multivariable framework;
- regression, machine-learning and AI approaches are all within the same generic prediction-model architecture;
- overfitting should ideally be penalised/adjusted;
- model evaluation is a separate phase estimating predictive performance of an existing model.

https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-1-prognosis-and-types-prognosis-research-healthcare

### Source-status note

The Cochrane Prognosis Handbook chapter is explicitly a **draft March 2026**, subject to change before finalization.

---

## 2. TRIPOD+AI

Collins GS, Moons KGM, Dhiman P, et al.  
**TRIPOD+AI statement: updated guidance for reporting clinical prediction models that use regression or machine learning methods.**  
BMJ. 2024;385:e078378.

Current published reporting standard checked 2026-11-17.

Key terminology used:

- development/training data = data used to build/train the model;
- evaluation/test data = data used to estimate performance;
- evaluation data should be distinct from data used for:
  - training;
  - hyperparameter tuning;
  - model selection;
- TRIPOD+AI covers development, evaluation, or both;
- it supersedes the original TRIPOD 2015 checklist.

https://www.bmj.com/content/385/bmj-2023-078378

### Important scope note

TRIPOD+AI is a **reporting guideline**, not a method-prescription or quality-appraisal tool.

---

## 3. PROBAST+AI

Moons KGM, Damen JAA, Kaul T, et al.  
**PROBAST+AI: an updated quality, risk of bias, and applicability assessment tool for prediction models using regression or artificial intelligence methods.**  
BMJ. 2025;388:e082505.

Current published tool checked 2026-11-17.

Key structural guidance:

- model development and model evaluation are explicitly separate phases;
- PROBAST+AI distinguishes:
  - apparent performance;
  - internal validation performance;
  - external validation performance;
- apparent performance = performance estimated in the same data used for model development;
- evaluation/test data should not overlap with data used for training/model selection/hyperparameter tuning;
- PROBAST+AI is the 2025 updated/direct extension of PROBAST-2019; the authors state that PROBAST+AI **may replace PROBAST-2019**.

https://www.bmj.com/content/388/bmj-2024-082505

---

## 4. Van Calster et al. / BMJ step-by-step development guidance

**Developing clinical prediction models: a step-by-step guide.**  
BMJ. 2024;386:e078276.

Used here for the architecture of:

- development;
- model complexity;
- optimism;
- apparent performance;
- need for subsequent validation.

https://www.bmj.com/content/386/bmj-2023-078276

---

## 5. Riley et al. — sample size for prediction model development

Riley RD, Ensor J, Snell KIE, et al.  
**Calculating the sample size required for developing a clinical prediction model.**  
BMJ. 2020;368:m441.

Used here only for structural principles:

- development dataset should represent the intended target population;
- predictors must be available at the intended moment of prediction;
- sample size adequacy depends on total candidate predictor parameters and outcome information, not merely the final number of retained predictors;
- overfitting risk is linked to development complexity.

https://www.bmj.com/content/368/bmj.m441

---

# Part A — What makes a study a prediction-model development study

## 1. Development means producing a prediction function

### Established finding
**Confidence: HIGH**

A study is a prediction-model **development** study when it uses data to produce a function/system that maps multiple predictors to an individual predicted outcome.

Generic form:

`predictors available at T=0 → learned model f(X) → individual predicted outcome value/probability`

The output may be:

- a regression equation;
- point score;
- nomogram;
- tree;
- random forest;
- boosted model;
- neural network;
- another algorithm.

### Project rule

The modelling method does **not** define the scientific study family.

Regression and machine learning are different implementation methods within the same model-development family.

---

## 2. Development is more than estimating coefficients

### Established finding
**Confidence: HIGH**

The development process can include:

1. defining the candidate predictor set;
2. coding predictors;
3. transformations;
4. interactions;
5. feature construction;
6. handling missing predictor values;
7. predictor selection;
8. choosing model family;
9. fitting model parameters;
10. hyperparameter tuning;
11. shrinkage/penalisation;
12. choosing among competing candidate models;
13. selecting thresholds or output form when part of the prediction system.

### Project consequence

"Model fitted" is too narrow a description.

The full model-development procedure includes every data-dependent choice used to produce the final prediction rule.

---

# Part B — Development dataset

## 3. Development data are the data from which the model learns

### Established finding
**Confidence: HIGH**

TRIPOD+AI / PROBAST+AI define development/training data as data used to build or fit the prediction model.

This includes data used for any step that influences the final model.

### Project rule

A participant belongs to the development process if their data influence:

- coefficients;
- feature selection;
- variable transformations;
- hyperparameters;
- model architecture;
- model choice;
- preprocessing rules;
- tuning decisions.

Do not label data "validation" merely because the authors used that word.

---

## 4. Tuning data remain part of development

### Established finding
**Confidence: HIGH**

TRIPOD+AI explicitly states that evaluation/test data should be distinct from data used to:

- train the model;
- tune hyperparameters;
- perform model selection.

Therefore a common ML split:

- training set;
- validation/tuning set;
- test set

contains two different scientific functions:

- training + tuning = **development**;
- untouched test = **evaluation**, provided it truly remained untouched.

### Project terminology rule

Avoid ambiguous use of:

> validation set

without specifying whether it was:

- tuning/internal development data;
- or genuine performance-evaluation data.

---

# Part C — Development population must match intended use

## 5. Target population comes before algorithm choice

### Established finding
**Confidence: HIGH**

Development requires a predefined intended-use prediction question:

1. target population / health state;
2. startpoint;
3. predictor availability;
4. outcome;
5. prediction horizon;
6. setting.

A model cannot be meaningfully judged as "good" without these.

### Project rule

Do not accept:

> "we trained a model to predict injury"

as a complete development target.

Need:

> who, when, which injury definition, over what horizon, in what setting, using what information available at prediction time.

---

## 6. Development sample should represent intended target population

### Established finding
**Confidence: HIGH**

Riley et al. and current prediction guidance emphasize that the development data should contain individuals from the target population where predictions are intended to be used.

### Consequence

A technically well-fitted model can still be structurally misaligned if developed in:

- a different disease/training state;
- a different care/training setting;
- a highly selected sample;
- a different measurement environment.

Applicability is therefore partly a **development-design issue**, not only an external-validation issue.

---

# Part D — Candidate predictors

## 7. Candidate predictor set != final predictor set

### Established finding
**Confidence: HIGH**

Candidate predictors are all predictors/parameters considered during development.

Final predictors are only those retained in the final model.

### Why this matters

Overfitting pressure depends on the **search/model-development complexity**, not merely the final compact model.

If researchers examine 100 candidate features and keep 5, the effective development process was not a 5-predictor exercise.

### Project record

Store both:

1. candidate predictors/parameters considered;
2. predictors/parameters in final model.

---

## 8. Predictor parameter count can exceed variable count

### Established finding
**Confidence: HIGH**

One predictor variable can require multiple parameters because of:

- categorical levels;
- nonlinear terms;
- splines;
- interactions;
- basis expansions.

Thus:

> number of variables

is not always the relevant complexity count.

### Project rule

Where reported, extract:

> number of candidate predictor parameters / effective model degrees of freedom

rather than only predictor names.

Detailed sample-size computation is deferred.

---

# Part E — Predictor availability at prediction time

## 9. Predictor must exist at intended use time

### Established finding
**Confidence: HIGH**

For prognostic prediction, each predictor used by the final model should be obtainable at or before the intended prediction startpoint.

This requirement survives every modelling paradigm.

### Examples

For a model predicting 12-week training adherence at program start:

Valid baseline candidates may include:

- training history;
- baseline strength;
- prior sleep;
- equipment access.

Invalid baseline candidate:

- adherence during weeks 1–4,

unless the model is explicitly redefined as a week-4 updated prediction.

---

## 10. Development can accidentally learn from future information

### Established finding / design implication
**Confidence: HIGH**

If preprocessing or feature engineering uses data unavailable at T=0, the resulting model addresses a different prediction task.

Potential leakage examples:

- future measurements;
- outcome-derived features;
- normalization using future periods;
- labels encoded indirectly in administrative workflow;
- whole-trajectory summaries used as "baseline" predictors.

### Project rule

Predictor availability must be checked **after feature engineering**, not only for raw variables.

---

# Part F — Model specification

## 11. Final model = more than predictor names

### Project synthesis
**Confidence: HIGH**

A usable prediction model must specify enough information to reproduce individual predictions.

Depending on method this can require:

- predictor definitions;
- coding;
- transformations;
- interaction terms;
- intercept/baseline hazard;
- coefficients/weights;
- tree structure;
- fitted ensemble;
- neural-network weights;
- preprocessing pipeline;
- hyperparameters;
- missing-value handling;
- calibration/recalibration components;
- output transformation.

### Project rule

A paper that says:

> model used age, BMI and strength

has not necessarily supplied the prediction model.

The model is the full prediction function/system.

---

## 12. Preprocessing learned from data is part of the model

### Established methodological inference
**Confidence: HIGH**

If preprocessing parameters are learned from development data, they belong to the fitted prediction pipeline.

Examples:

- mean/SD used for scaling;
- imputation model;
- selected features;
- PCA loadings;
- learned embeddings;
- normalization constants.

### Consequence

Those elements must also be learned without accessing independent evaluation data.

Otherwise evaluation leakage occurs.

---

# Part G — Model fitting

## 13. Fitting assigns the predictive relation

### Established finding
**Confidence: HIGH**

Cochrane describes development as selecting predictors and assigning appropriate weights within a multivariable framework.

For regression, this may mean:

- coefficients;
- intercept;
- baseline hazard.

For ML, this can mean:

- tree splits;
- ensemble weights;
- learned network parameters;
- other fitted structures.

### Project rule

Do not reduce "fitting" to regression coefficients only.

---

# Part H — Predictor selection and model selection

## 14. Predictor selection is part of development

### Established finding
**Confidence: HIGH**

Any process that decides which candidate predictors enter the final model is part of development.

Potential approaches include:

- a priori inclusion;
- clinical/domain knowledge;
- penalized selection;
- algorithmic feature selection;
- univariable screening;
- stepwise procedures;
- embedded ML selection.

This pass does **not** judge all such methods yet.

### Taxonomy consequence

Performance measured after selection on the same data includes the effect of selection-induced overfitting.

---

## 15. Comparing candidate algorithms is also model selection

### Established finding
**Confidence: HIGH**

If investigators train:

- logistic regression;
- random forest;
- gradient boosting;
- neural network

and choose the "best" based on performance in a dataset, that dataset influenced the final model choice.

Therefore it is part of development/tuning unless a genuinely untouched evaluation dataset is used only after the choice is finalized.

---

# Part I — Hyperparameter tuning

## 16. Hyperparameters are development decisions

### Established finding
**Confidence: HIGH**

TRIPOD+AI explicitly distinguishes hyperparameter tuning from evaluation.

Examples:

- regularization strength;
- tree depth;
- number of trees;
- learning rate;
- network architecture;
- stopping rules.

### Project rule

Data used to choose hyperparameters are **not independent evaluation data** for the final tuned model.

---

# Part J — When development ends

## 17. Evaluation requires a fixed prediction procedure

### Project operational rule
**Confidence: HIGH**

For taxonomy, the development phase ends only after the full prediction procedure has been fixed enough that evaluation data cannot change it.

"Fixed/frozen" means:

- predictor set fixed;
- preprocessing fixed;
- transformations fixed;
- algorithm/model family fixed;
- hyperparameters fixed;
- fitted parameters fixed or fitting algorithm fully specified according to the evaluation design;
- output definition fixed.

### Important nuance

In resampling-based internal validation, the model-development procedure is repeatedly refit inside resamples.

Therefore "frozen model" is a useful boundary for **independent external/test evaluation**, while internal validation evaluates the development procedure/model using the same source dataset under resampling.

Detailed internal-validation architecture is deferred to PASS-06B6.

---

# Part K — Apparent performance

## 18. Definition

### Established finding
**Confidence: HIGH**

PROBAST+AI defines **apparent performance** as performance estimated using the same data used for model development.

Canonical structure:

`development dataset → fit/select/tune model → evaluate same fitted model on same data`

---

## 19. Apparent performance is not independent evidence of generalization

### Established finding
**Confidence: HIGH**

BMJ guidance consistently notes that apparent performance is typically optimistic because the model has been adapted to the same data.

Overfitting means the model captures:

- reproducible signal;
- plus sample-specific noise.

The more the model-development process adapts to the dataset, the more the same-data performance can exaggerate future performance.

---

## 20. Apparent performance is still a legitimate descriptive quantity

### Important distinction
**Confidence: HIGH**

Apparent performance is not "fake" or meaningless.

It tells us:

> how the final fitted model performs in the data on which it was developed.

But it does **not**, by itself, estimate reproducibility in new individuals.

### Project rule

Classify apparent performance as:

> development-sample descriptive performance,

not:

> independent validation.

---

# Part L — Overfitting and optimism

## 21. Overfitting is a development phenomenon

### Established finding
**Confidence: HIGH**

Cochrane defines overfitting as predictions becoming too extreme because learned patterns partly capture noise in the development data.

Risk increases with combinations of:

- insufficient information/sample size;
- too many candidate predictor parameters;
- excessive flexibility;
- aggressive model search;
- repeated tuning/selection;
- weak regularization.

Detailed statistical theory is deferred.

---

## 22. Optimism is a performance-estimation consequence

### Project distinction
**Confidence: HIGH**

Use terminology:

- **overfitting** = model adapted too closely to development data;
- **optimism** = apparent performance looks better than expected performance in new comparable data.

They are related but not synonyms.

### Project rule

Record separately:

1. risk/signs of overfitting in development;
2. whether apparent performance was optimism-corrected later.

---

# Part M — Development vs evaluation

## 23. Model development and model evaluation are different phases

### Established finding
**Confidence: HIGH**

Cochrane, TRIPOD+AI and PROBAST+AI all preserve this distinction.

### Development asks:

> What prediction model do we produce from these data?

### Evaluation asks:

> How accurately does this already-defined model/procedure predict outcomes?

### Project consequence

A paper can contain:

- development only;
- evaluation only;
- both.

Do not assign one label to the whole paper if analyses serve different phases.

---

## 24. Evaluation data that affect the model cease to be independent evaluation data

### Established finding
**Confidence: HIGH**

If "test" data are used to:

- select features;
- change transformations;
- choose hyperparameters;
- pick algorithm;
- revise threshold;
- redesign model after seeing performance;

then those data have influenced development.

### Project rule

Evaluation independence is functional, not label-based.

Calling a file:

> test.csv

does not make it evaluation data if researchers iteratively optimize against it.

---

# Part N — Development + apparent performance != completed model evidence

## 25. A development study can be structurally complete yet evidentially incomplete

### Established finding
**Confidence: HIGH**

A study can successfully produce a model and report apparent performance.

That answers:

> what model was produced and how it fits its training data.

It does not fully answer:

> how well will it predict in new individuals?

That requires internal validation and/or external evaluation.

### Project rule

Do not mark a prediction model as "validated" merely because a development paper reports AUC/calibration on its own training data.

---

# Part O — Added predictive value and model extension

## 26. Added-predictor development is still development

### Established finding
**Confidence: HIGH**

Cochrane notes that development may focus on adding a new predictor to an existing model and quantifying incremental predictive value.

Example:

`existing model + new biomarker → extended model`

This creates a modified prediction model.

### Project consequence

The extended model itself requires evaluation.

Do not inherit the old model's validation status unchanged.

---

# Part P — Regression vs ML/AI

## 27. Statistical-vs-AI dichotomy does not change design taxonomy

### Established finding
**Confidence: HIGH**

TRIPOD+AI and PROBAST+AI deliberately apply across:

- regression;
- machine learning;
- AI methods.

The same structural questions remain:

1. target population;
2. prediction time;
3. candidate predictors;
4. development data;
5. tuning/model selection;
6. final prediction function;
7. performance evaluation.

### Project rule

A neural network trained on the same flawed data architecture is not methodologically rescued by algorithmic sophistication.

---

# Part Q — Fitness/exercise translations

## 28. Proper development example

Goal:

> At the start of a 16-week resistance-training program, predict each trainee's probability of completing at least 90% of prescribed sessions.

Development structure:

1. define eligible target population;
2. T=0 = program start;
3. specify 16-week adherence outcome;
4. define baseline candidate predictors available at T=0;
5. assemble development cohort;
6. preprocess predictors;
7. fit/tune candidate models;
8. choose/finalize prediction procedure;
9. report apparent performance;
10. perform internal validation in later step.

Classification:

> prognostic prediction-model development study.

---

## 29. Mislabelled "validation set" example

Dataset split:

- 70% training;
- 15% "validation";
- 15% test.

Researchers use the 15% validation subset repeatedly to:

- tune learning rate;
- choose features;
- choose neural-network size.

Project classification:

- 70% + tuning 15% = development process;
- final untouched 15% = potential independent evaluation set.

The authors' word "validation" does not override the actual function.

---

## 30. Leakage example

Goal:

> predict 12-week dropout at enrollment.

Feature:

> average attendance during first 2 weeks.

This feature is unavailable at enrollment.

Therefore the study is not evaluating a pure enrollment-time model.

Options:

- remove the future feature;
- or redefine prediction startpoint to week 2.

---

# Part R — Structural record produced by PASS-06B5

## 31. Prediction-model development record

For each development study, record:

1. model purpose:
   - diagnostic;
   - prognostic;
2. target population / health state;
3. setting;
4. prediction startpoint;
5. outcome;
6. prediction horizon;
7. intended user/use case;
8. development data source;
9. development cohort/design;
10. development sample size;
11. outcome events / effective outcome information;
12. candidate predictors considered;
13. candidate predictor parameters if reported;
14. predictors available at intended prediction time?;
15. feature engineering performed?;
16. preprocessing learned from data?;
17. missing-data handling;
18. predictor selection method;
19. model family/algorithm;
20. hyperparameters;
21. hyperparameter tuning data/method;
22. competing models compared?;
23. data used for model selection?;
24. final predictor set;
25. final model specification sufficiently reproducible?;
26. intercept/baseline component reported where needed?;
27. apparent performance reported?;
28. apparent performance metrics;
29. same participants used for fitting and apparent performance? YES/NO;
30. optimism correction/internal validation performed? — defer detailed classification to PASS-06B6;
31. any purported evaluation data used during development?;
32. evidence of data leakage?;
33. added-predictor / model-extension study?;
34. final project classification:
   - development only;
   - development + internal validation;
   - development + external evaluation;
35. unresolved development/evaluation boundary issues.

---

# Practical rules produced by PASS-06B5

1. A prediction-model development study produces a multivariable prediction function/system.
2. Regression and ML/AI belong to the same scientific development family.
3. Development data are all data that influence the final prediction procedure.
4. Hyperparameter-tuning and model-selection datasets are part of development, even if authors call them "validation".
5. Genuine evaluation data must not influence training, feature selection, tuning or model choice.
6. Target population, startpoint, outcome, horizon and setting must be defined before interpreting model quality.
7. Candidate predictor set and final predictor set are different objects and both should be recorded.
8. Development complexity depends on candidate parameters and data-driven search, not merely final predictor count.
9. Predictor availability must be checked at intended prediction time after all feature engineering.
10. Learned preprocessing is part of the prediction model.
11. Final model specification includes the whole reproducible prediction pipeline, not only predictor names.
12. Predictor selection and comparison among algorithms are development activities.
13. Apparent performance is performance in the same data used for development.
14. Apparent performance is usually optimistic and is not independent evidence of generalization.
15. Apparent performance remains a legitimate descriptive quantity but must be labelled correctly.
16. Overfitting concerns model fitting/development; optimism concerns overestimation of performance.
17. Development and evaluation are separate scientific phases even when reported in one paper.
18. A development paper reporting its own AUC/calibration does not thereby become an independent validation study.
19. Data labelled "test" cease to be independent evaluation data if investigators iterate model choices based on them.
20. Adding predictors/updating an existing model creates a newly developed/modified model that requires renewed evaluation.
21. Model-development taxonomy must be based on function of the data, not terminology used by authors.
22. For the project, the minimum classification is:
   **prediction target + development data + all data-dependent model-building steps + final model specification + type of performance evaluation**.

---

# What remains unresolved after PASS-06B5

The prognosis/prediction branch remains **RESEARCHING**.

Still requires separate deep blocks on:

1. internal validation architecture;
2. bootstrap / cross-validation / repeated resampling boundaries;
3. split-sample evaluation and its limitations;
4. optimism correction;
5. internal-external validation;
6. external validation;
7. temporal/geographical/setting validation;
8. model updating/extending after evaluation;
9. model-impact studies;
10. performance-estimand integration;
11. prognosis/prediction structural synthesis;
12. final gap audit.

## Next micro-pass

**RES-02 / PASS-06B6 — internal validation structures: apparent performance vs resampling-based internal validation, bootstrap, cross-validation, repeated/nested CV, split-sample approaches, optimism correction and the boundary between internal validation and external evaluation.**

STOP after this saved micro-pass.
