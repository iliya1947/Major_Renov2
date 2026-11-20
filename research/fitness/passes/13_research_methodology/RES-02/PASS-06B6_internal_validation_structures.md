# RES-02 / PASS-06B6 — Internal validation structures for prediction models

Статус: **COMPLETE MICRO-PASS — RES-02 remains RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. apparent performance vs internal validation;
2. цель internal validation;
3. resampling как оценка reproducibility/optimism внутри development source;
4. bootstrap internal validation;
5. k-fold cross-validation;
6. repeated k-fold CV;
7. nested CV when tuning/model selection are data-driven;
8. random split-sample validation;
9. temporal split terminology and boundary;
10. requirement to repeat the complete development pipeline inside resampling;
11. preprocessing / imputation / feature selection / tuning leakage;
12. what internal validation estimates;
13. why internal validation is not external transportability evidence;
14. why final model is usually refit on all available development data;
15. design-level distinction among apparent / internal / internal-external / external evaluation.

Не покрывается здесь:

- detailed external validation;
- internal-external CV in depth;
- geographical / site / country validation in depth;
- recalibration and model updating;
- precise formulas for optimism correction;
- detailed calibration/discrimination statistics;
- variance estimation for CV;
- sample-size calculations;
- bootstrap variants in full detail;
- fairness evaluation;
- model impact studies;
- final prognosis/prediction synthesis.

---

# Sources checked

## 1. Cochrane Handbook for Systematic Reviews of Prognosis Research and Prediction Models — Chapter 1

Moons KGM, Hayden J, Williams K, Riley RD.  
**Chapter 1: Prognosis and types of prognosis research in healthcare.**  
Draft version: **March 2026**.

Current official Cochrane chapter checked 2026-11-17.

Key current guidance:

- model performance evaluation is distinct from model development;
- internal validation uses participant data from the development data;
- external validation uses external data sources/different participant data;
- later-period data can constitute temporal external validation;
- model updating after poor external performance creates a modified/new model that requires renewed validation.

https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-1-prognosis-and-types-prognosis-research-healthcare

### Source-status note

The Cochrane Prognosis Handbook remains draft material (March 2026) and must be version-checked again during final audit.

---

## 2. PROBAST+AI

Moons KGM, Damen JAA, Kaul T, et al.  
**PROBAST+AI: an updated quality, risk of bias, and applicability assessment tool for prediction models using regression or artificial intelligence methods.**  
BMJ. 2025;388:e082505.

Current published version checked 2026-11-17.

Key structural distinctions:

1. apparent performance;
2. internal validation performance;
3. external validation performance.

PROBAST+AI states:

- apparent = same participant data as development;
- internal validation = splitting/resampling/cross-validation on data of the development set;
- external validation = participant data not used for development, including internal-validation processes.

https://www.bmj.com/content/388/bmj-2024-082505

---

## 3. TRIPOD+AI

Collins GS, Moons KGM, Dhiman P, et al.  
**TRIPOD+AI statement.**  
BMJ. 2024;385:e078378.

Checked 2026-11-17.

Relevant terminology:

- internal validation = evaluation on the same population/source in which model development occurred, including train-test split, CV and bootstrap;
- evaluation/test data should not overlap functionally with data used to train, tune hyperparameters or select the model.

https://www.bmj.com/content/385/bmj-2023-078378

### Scope note

TRIPOD+AI is a reporting guideline, not a prescriptive methodological handbook.

---

## 4. Collins et al. — Evaluation of clinical prediction models, part 1

**Evaluation of clinical prediction models (part 1): from development to external validation.**  
BMJ. 2024;384:e074819.

Checked 2026-11-17.

Key guidance used:

- apparent performance is typically optimistic;
- random split-sample validation is inefficient, especially in small/moderate samples;
- bootstrapping and k-fold CV use data more efficiently;
- the complete model-building procedure should be repeated during resampling;
- repeated k-fold CV can reduce variability from one arbitrary partition;
- internal-external CV is structurally different from ordinary random k-fold CV;
- final model after internal validation should generally use all available development participants.

https://www.bmj.com/content/384/bmj-2023-074819

---

## 5. Efthimiou et al. — Developing clinical prediction models: a step-by-step guide

BMJ. 2024;386:e078276.

Checked 2026-11-17.

Used for:

- bootstrap optimism correction architecture;
- k-fold CV;
- limitations of random split;
- distinction between reproducibility and transportability;
- internal-external CV boundary.

https://www.bmj.com/content/386/bmj-2023-078276

---

## 6. Zhang et al. — simulation comparison, 2026

Zhang C, et al.  
**Empirical simulation of internal validation methods for prediction models: comparing k-fold cross-validation with bootstrap-based optimism correction.**  
J Clin Epidemiol. 2026.

PubMed abstract checked 2026-11-17.

Current evidence nuance:

- in the simulation, .632+ performed strongly for parametric models;
- 10-fold CV showed stable performance across examined model classes;
- some bootstrap optimism-correction approaches overestimated AUC for nonparametric models.

This is treated as **recent method-comparison evidence**, not as a universal rule that invalidates older recommendations.

https://pubmed.ncbi.nlm.nih.gov/41391734/

---

## 7. Cross-validation tutorial for healthcare modelling

**Practical Considerations and Applied Examples of Cross-Validation for Model Development and Evaluation in Health Care: Tutorial.**  
2024.

Used only for nested-CV architecture:

- inner loop = preprocessing / feature selection / tuning / model selection;
- outer loop = performance evaluation of the entire selected development process;
- leaving outer-fold information outside all inner development steps is required to avoid selection optimism.

https://pmc.ncbi.nlm.nih.gov/articles/PMC11041453/

---

# Part A — Apparent performance is not internal validation

## 1. Apparent performance

### Established finding
**Confidence: HIGH**

Apparent performance is obtained when:

`full development data → fit/select/tune model → evaluate on the exact same observations`

This is **same-data evaluation**.

Typical outputs:

- c-statistic/AUC;
- calibration;
- prediction error;
- other performance metrics.

### Project classification

> model development + apparent performance evaluation

not:

> internal validation.

---

## 2. Why apparent performance is optimistic

### Established finding
**Confidence: HIGH**

The model-development process adapts to:

- reproducible signal;
- sampling noise;
- idiosyncrasies of the development sample.

Therefore the same observations used to optimize the model tend to make performance look better than performance in new comparable individuals.

Optimism generally becomes larger when:

- sample/outcome information is limited;
- model flexibility is high;
- many candidate features are searched;
- tuning/model selection is extensive.

---

# Part B — What internal validation actually asks

## 3. Internal validation target

### Established finding
**Confidence: HIGH**

Internal validation asks approximately:

> If the same development process were applied to comparable new individuals from the same underlying target/source population, how much performance would we expect after accounting for overfitting/optimism?

It primarily addresses **reproducibility within the development population/source context**.

It does not establish transportability to meaningfully different:

- hospitals;
- countries;
- time periods;
- measurement systems;
- training environments;
- populations.

---

## 4. Internal validation is a property of the development process, not merely one fitted equation

### Established finding
**Confidence: HIGH**

For a data-driven development procedure, internal validation should reproduce all relevant model-building steps.

These can include:

1. imputation;
2. scaling/normalization;
3. feature construction;
4. predictor selection;
5. transformation choice;
6. interaction selection;
7. algorithm choice;
8. hyperparameter tuning;
9. model fitting;
10. threshold selection if part of development.

### Project rule

If a step learned from data is performed once on the full dataset before resampling, internal-validation performance can be optimistic.

---

# Part C — Bootstrap internal validation

## 5. Core bootstrap structure

### Established finding
**Confidence: HIGH**

Classic optimism-correction structure:

1. develop the model/procedure in the original dataset;
2. calculate apparent performance in original data;
3. repeatedly draw bootstrap samples with replacement from the original data;
4. in each bootstrap sample, repeat the **entire model-development procedure**;
5. evaluate the bootstrap-developed model:
   - in its bootstrap sample;
   - and in the original sample;
6. estimate optimism as the average performance difference;
7. subtract estimated optimism from apparent performance.

Conceptually:

`apparent performance - estimated optimism = optimism-corrected internal performance`

Exact formulas/variants are deferred.

---

## 6. Bootstrap evaluates the model-building process

### Established finding
**Confidence: HIGH**

A major advantage is that bootstrap resampling can preserve use of the full original dataset for final development while estimating optimism created by the development procedure.

This differs from a single random split that permanently withholds some observations from fitting the final model.

---

## 7. Variable selection/tuning must occur inside each bootstrap sample

### Established finding
**Confidence: HIGH**

If the original development used predictor selection or other data-dependent choices, those steps must be rerun within each bootstrap replicate.

Incorrect structure:

`select predictors once using full data → bootstrap only coefficient fitting`

when the true development pipeline was:

`data → select predictors → fit model`.

That fails to capture selection-induced optimism.

---

## 8. Bootstrap is not universally superior for every model class

### Current evidence nuance
**Confidence: MODERATE-HIGH**

Older clinical-prediction guidance often recommends bootstrap because it is data-efficient and can yield stable optimism correction.

However, a 2026 empirical simulation found that some bootstrap-based optimism corrections overestimated AUC for examined nonparametric/ML models, whereas 10-fold CV was more stable across scenarios.

### Project rule

Do not encode:

> bootstrap is always best.

Instead record:

1. model class;
2. sample size;
3. performance target;
4. bootstrap variant;
5. whether the full pipeline was resampled;
6. available comparative evidence.

Method choice is context-dependent.

---

# Part D — k-fold cross-validation

## 9. Canonical k-fold structure

### Established finding
**Confidence: HIGH**

1. divide development data into `k` folds;
2. for fold `j`:
   - use `k-1` folds for all model-development steps;
   - evaluate on the held-out fold;
3. rotate until every fold has served as held-out data;
4. combine performance across folds.

Typical `k` values are 5 or 10.

---

## 10. The held-out fold must be untouched by the development pipeline

### Established finding
**Confidence: HIGH**

Within each CV iteration, the held-out fold must not influence:

- preprocessing parameters;
- imputation models;
- feature selection;
- transformations;
- hyperparameter tuning;
- model choice.

Otherwise information leaks from evaluation observations into development.

---

## 11. CV evaluates out-of-fold predictions within the development source

### Established finding
**Confidence: HIGH**

Each observation is evaluated when it is not used in that iteration's fitting process.

This creates more honest performance estimates than direct apparent performance.

But all folds originate from the same development data source/population.

Therefore ordinary random k-fold CV remains:

> internal validation,

not external validation.

---

# Part E — Repeated k-fold CV

## 12. Why repeat k-fold CV

### Established finding
**Confidence: HIGH**

A single k-fold partition is partly arbitrary.

Different random partitions can produce different performance estimates, especially when:

- sample size is limited;
- events are sparse;
- algorithms are unstable.

Repeated k-fold CV:

1. generates multiple independent fold partitions;
2. repeats the full k-fold procedure;
3. aggregates performance.

### Interpretation

Repeated CV primarily reduces sensitivity to one arbitrary partition.

It does **not** create external evidence.

---

# Part F — Nested cross-validation

## 13. Why ordinary CV can become optimistic during tuning

### Established finding
**Confidence: HIGH**

If the same CV results are repeatedly used to:

- tune hyperparameters;
- select features;
- choose algorithms;

and then the best observed CV performance is reported as final performance, model-selection noise can be exploited.

The evaluation procedure itself becomes part of optimization.

---

## 14. Nested-CV architecture

### Established finding
**Confidence: HIGH**

Nested CV separates two loops:

### Inner loop
Used only for development decisions:

- preprocessing choices;
- feature selection;
- hyperparameter tuning;
- algorithm/model selection.

### Outer loop
Used to estimate performance of the **entire inner development procedure** on held-out observations.

Canonical structure:

`outer training data → inner development/tuning → fixed chosen procedure for that outer iteration → outer held-out evaluation`

Repeated across outer folds.

---

## 15. Outer fold must be isolated from the inner loop

### Established finding
**Confidence: HIGH**

If outer-fold outcomes influence:

- hyperparameters;
- selected features;
- model architecture;
- threshold selection;

the nested separation is broken.

### Project rule

When tuning is substantial, ask:

> Was all tuning nested entirely inside the training portion of each performance-evaluation iteration?

If NO, reported performance may include model-selection optimism.

---

## 16. Nested CV evaluates the development algorithm/procedure

### Project synthesis
**Confidence: HIGH**

Because each outer iteration can produce a slightly different fitted model, nested CV primarily estimates performance of the **model-development strategy** applied to comparable data.

After evaluation, a final model may be trained/tuned on all available development data.

Therefore outer-CV performance is not literally the performance of one already-frozen final coefficient vector on independent future participants.

It is an internal estimate of what the development procedure should achieve.

---

# Part G — Random split-sample validation

## 17. Canonical split

### Established finding
**Confidence: HIGH**

Example:

- 70% development/training;
- 30% held-out evaluation.

The 30% subset is not used for fitting/tuning.

PROBAST+AI and TRIPOD+AI classify random splitting of one development dataset as a form of **internal validation**.

It is not true external validation merely because participants do not overlap between the two subsets.

---

## 18. Main problem: information is thrown away

### Established finding
**Confidence: HIGH**

For small/moderate datasets:

- development subset becomes smaller → more overfitting/instability;
- test subset becomes smaller → imprecise performance estimates.

Thus a single split can make both development and evaluation worse.

Current BMJ guidance generally recommends resampling methods instead when feasible.

---

## 19. Split-sample can be pragmatic in very large data

### Established finding / nuance
**Confidence: MODERATE-HIGH**

With genuinely very large datasets and expensive development pipelines, an untouched holdout can be a practical internal-evaluation strategy.

But:

> large dataset

does not turn a random split from the same source into external validation.

Its category remains based on data relationship, not dataset size.

---

# Part H — Temporal split: terminology is not fully uniform

## 20. Current Cochrane taxonomy

### Established finding
**Confidence: HIGH**

Cochrane 2026 describes later-period participant data external to the development data as **temporal external validation**.

Example:

`model developed in participants from 2020–2022 → fixed → evaluated in newly sampled participants from 2024–2025`

This tests performance under calendar-time shift.

---

## 21. Some methodological papers use "temporal validation" more broadly

### Established terminology issue
**Confidence: HIGH**

BMJ methodological literature sometimes discusses calendar-time splitting at model development alongside internal-validation/splitting strategies.

Therefore the label alone is ambiguous.

### Project rule

Do **not** classify from the words:

> temporal validation.

Instead record:

1. were later-period participants already part of the originally assembled development dataset?
2. was the split chosen retrospectively from one data resource?
3. was the model fully fixed before later-period data became available/accessible?
4. are the later data a genuinely new participant sample/source period?

Then classify functionally.

---

## 22. Project operational classification

### Project rule
**Confidence: HIGH**

Use:

### Internal temporal holdout
if:
- one already-assembled development dataset is partitioned by calendar time;
- later observations function as a holdout inside that development source.

### External temporal validation
if:
- model development is complete/fixed;
- later-period participants were not part of the development data/process;
- the later data provide a genuinely new evaluation sample.

This rule preserves actual evidence separation instead of relying on historical naming conventions.

---

# Part I — Final model after internal validation

## 23. Internal validation does not require discarding held-out folds forever

### Established finding
**Confidence: HIGH**

For bootstrap/CV internal validation, the goal is to estimate optimism/reproducibility while using the available development information efficiently.

After the internal-validation process, guidance commonly recommends developing/fitting the final model using **all available development participants**.

### Consequence

CV folds are methodological partitions for evaluation.

They are not necessarily permanent train/test populations for the final deployable model.

---

## 24. Internal-validation estimate and final fitted model are related but not identical objects

### Project synthesis
**Confidence: HIGH**

The final model uses all development data.

The internal-validation estimate summarizes expected performance after accounting for overfitting of the development strategy.

Therefore a project record should store separately:

1. final fitted model;
2. internal-validation procedure;
3. internal-validation performance estimate.

Do not imply that the final full-data model was literally tested on participants it did not use.

---

# Part J — Internal vs internal-external CV

## 25. Ordinary k-fold CV

Random folds from one development source.

Primary target:

> reproducibility / optimism within that source population.

---

## 26. Internal-external CV

### Boundary only — detailed pass deferred
**Confidence: HIGH**

Data contain natural clusters such as:

- studies;
- hospitals;
- countries;
- practices;
- regions.

One cluster is excluded from development and used for evaluation, iteratively.

Unlike random k-fold CV, this deliberately preserves cluster heterogeneity and informs generalisability across settings.

Therefore internal-external CV is not merely:

> k-fold with differently named folds.

Detailed architecture belongs to PASS-06B7.

---

# Part K — Internal validation vs external validation

## 27. Internal validation

### Established finding
**Confidence: HIGH**

Performance is estimated using splitting/resampling of the **development data source**.

Examples:

- bootstrap;
- k-fold CV;
- repeated CV;
- nested CV;
- random holdout from one development dataset.

Main target:

> expected reproducibility / optimism correction within the development context.

---

## 28. External validation

### Established finding
**Confidence: HIGH**

Performance is estimated in genuinely different participant data not used in the development/internal-validation process.

Potential dimensions:

- later time;
- different site;
- different country;
- different setting;
- different measurement implementation;
- different but related target population.

Main additional target:

> transportability/generalisation beyond development data.

---

# Part L — Full-pipeline principle

## 29. Every learned step belongs inside resampling

### Established finding
**Confidence: HIGH**

This is the central implementation principle of internal validation.

Inside each bootstrap/CV development portion, refit/relearn as applicable:

1. data cleaning rules that use sample statistics;
2. imputation;
3. standardization;
4. feature extraction;
5. dimensionality reduction;
6. predictor selection;
7. transformations;
8. hyperparameter tuning;
9. algorithm/model choice;
10. coefficient/model fitting.

### Safe exception concept

Purely prespecified operations that do not learn anything from the sample can be applied identically.

The key question is:

> Did this step use outcome/predictor information from the full dataset to choose a value or structure?

If YES, it belongs inside resampling.

---

# Part M — Fitness/exercise translations

## 30. Proper k-fold internal validation

Goal:

> predict 12-week training dropout at program enrollment.

Dataset:

- one cohort of 2,000 trainees.

Procedure:

1. split into 10 folds;
2. for each iteration:
   - fit imputation/scaling on 9 folds;
   - perform feature selection/tuning on those 9 folds only;
   - fit model;
   - predict held-out fold;
3. pool out-of-fold predictions;
4. estimate performance.

Classification:

> model development + k-fold internal validation.

---

## 31. Incorrect CV leakage

Researchers:

1. use all 2,000 participants to select the 20 strongest features;
2. then run 10-fold CV using only those preselected 20 features.

Problem:

Held-out participants influenced feature selection.

Therefore CV does not validate the **actual development process** honestly.

---

## 32. Nested-CV fitness example

Candidate algorithms:

- penalized logistic regression;
- gradient boosting;
- random forest.

For each outer fold:

1. hold outer fold completely aside;
2. inside remaining data:
   - preprocess;
   - select features;
   - tune each algorithm;
   - select best model strategy;
3. evaluate selected result on outer fold.

Classification:

> nested-CV internal validation of the model-development strategy.

---

## 33. Temporal external validation fitness example

Development:

- model fixed using trainees enrolled during 2023–2025.

Evaluation:

- new trainees enrolling during 2026;
- their data were not available during development.

Classification:

> temporal external validation.

This is stronger evidence about calendar-time transportability than a retrospective time split inside one already assembled dataset.

---

# Part N — Structural record produced by PASS-06B6

## 34. Internal-validation record

For each model-development/evaluation report, record:

1. apparent performance reported? YES/NO;
2. internal validation performed? YES/NO;
3. internal-validation method:
   - bootstrap;
   - k-fold CV;
   - repeated k-fold;
   - nested CV;
   - random split;
   - temporal holdout within development source;
   - other;
4. development source/data definition;
5. number of participants/outcomes;
6. resampling unit:
   - participant;
   - cluster;
   - other;
7. number of folds / repeats / bootstrap samples;
8. all data-dependent preprocessing repeated inside resamples? YES/NO/UNCLEAR;
9. imputation repeated correctly inside resamples? YES/NO/UNCLEAR;
10. predictor selection repeated inside resamples? YES/NO/NA;
11. tuning repeated inside resamples? YES/NO/NA;
12. algorithm/model selection repeated inside resamples? YES/NO/NA;
13. any held-out data used to alter model? YES/NO;
14. nested CV used when tuning/model selection extensive? YES/NO/NA;
15. optimism estimated/corrected? YES/NO;
16. performance measure(s);
17. reported performance:
   - apparent;
   - internally validated;
18. final model refit using all development data? YES/NO/UNCLEAR;
19. if temporal split:
   - same assembled development source?;
   - model fixed before later data existed/were accessed?;
   - truly new later participant sample?;
20. project classification:
   - apparent only;
   - internal validation;
   - internal-external validation;
   - external validation;
21. unresolved leakage/independence issues.

---

# Practical rules produced by PASS-06B6

1. Apparent performance is not internal validation.
2. Internal validation estimates reproducibility/optimism within the development source population.
3. Internal validation does not establish transportability to different settings/populations.
4. Every data-dependent development step must be repeated inside the resampling structure.
5. Performing feature selection once before CV/bootstrap can leak evaluation information and underestimate optimism.
6. Bootstrap internal validation repeatedly rebuilds the development process and estimates optimism.
7. Bootstrap is data-efficient but should not be encoded as universally superior across all model classes.
8. Recent 2026 simulation evidence suggests 10-fold CV may be more robust than several bootstrap optimism-correction variants for some nonparametric models.
9. k-fold CV gives each observation an out-of-fold evaluation while retaining all observations for development across iterations.
10. Ordinary random k-fold CV remains internal validation because all folds arise from the development source.
11. Repeated k-fold CV reduces dependence on one arbitrary fold partition but does not create external evidence.
12. When tuning/model selection is extensive, nested CV separates inner development from outer performance evaluation.
13. Outer folds in nested CV must remain completely isolated from all inner-loop choices.
14. Nested CV estimates performance of the development strategy more directly than one fixed final parameter vector.
15. A single random train/test split from one dataset is internal validation, not external validation.
16. Random split-sample validation is inefficient in small/moderate data because it weakens both fitting and performance estimation.
17. Very large datasets can make a holdout pragmatic, but this does not change its evidential category.
18. "Temporal validation" is terminologically ambiguous across sources.
19. Project classification therefore uses actual data independence, not the author's label.
20. Later-period participants evaluated only after the model was fixed can constitute temporal external validation.
21. An arbitrary calendar split inside one preassembled development dataset is recorded separately as internal temporal holdout.
22. Internal-validation folds/resamples are not necessarily permanently withheld from final model fitting.
23. After internal validation, the final model can generally be fitted on all available development data.
24. Store final fitted model and internal-validation performance as separate objects.
25. Internal-external CV preserves meaningful clusters and is methodologically distinct from ordinary random CV; detailed treatment is deferred.
26. Minimum project architecture:
   **development process → apparent performance → internal validation method → leakage safeguards → optimism-corrected/internal performance → final model fit → later external evaluation**.

---

# Important unresolved issue

There is **no single universally best internal-validation method for every model class and dataset**.

The literature contains method- and context-dependent recommendations:

- clinical-statistical guidance often favors bootstrap because it uses data efficiently and directly estimates optimism;
- k-fold CV is widely accepted and often performs comparably;
- repeated CV reduces partition noise;
- nested CV is important when model selection/tuning is itself extensive;
- 2026 simulation evidence raises caution about some bootstrap optimism-correction variants for flexible nonparametric models.

Therefore the project must avoid converting one source's preferred method into a universal hierarchy without specifying:

1. model class;
2. sample size/outcome information;
3. tuning complexity;
4. target performance measure;
5. resampling implementation.

---

# What remains unresolved after PASS-06B6

The prognosis/prediction branch remains **RESEARCHING**.

Still requires separate deep blocks on:

1. internal-external cross-validation;
2. external validation architecture;
3. temporal/geographical/setting validation in depth;
4. model reproducibility vs transportability;
5. multiple external validations;
6. model updating/recalibration after evaluation;
7. model extension;
8. model-impact studies;
9. performance-estimand integration;
10. prognosis/prediction structural synthesis;
11. final gap audit.

## Next micro-pass

**RES-02 / PASS-06B7 — internal-external and external validation structures: clustered IECV, temporal/geographical/setting external validation, reproducibility vs transportability, independence of validation data, and repeated validation across heterogeneous settings.**

STOP after this saved micro-pass.
