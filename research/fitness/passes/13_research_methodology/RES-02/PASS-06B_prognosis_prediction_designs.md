# RES-02 / PASS-06B — Prognosis and prediction study structures

Статус: **COMPLETE PASS — topic remains RESEARCHING**  
Дата: 2026-11-16  
Topic: RES-02 — Study designs / what they answer

## Scope этого прохода

Только:

1. общая структура prognosis research;
2. overall prognosis studies;
3. prognostic-factor studies;
4. prognostic prediction-model studies;
5. различие prognosis / prognostic factor / prediction model;
6. prospective / retrospective cohort structures for prognosis;
7. использование randomized-trial data для prognosis;
8. nested case-control / case-cohort / class-balanced sampling;
9. non-nested case-control limitations;
10. prediction-model development;
11. internal validation;
12. internal-external validation;
13. external validation;
14. model updating;
15. границы между prediction, causation, treatment-effect prediction и model-impact studies.

Не покрывается здесь:

- detailed QUIPS / ROB-PF risk-of-bias appraisal;
- detailed PROBAST+AI signalling questions;
- sample-size calculations for prediction-model development/validation;
- detailed calibration/discrimination statistics;
- survival-analysis methods;
- competing-risk methods;
- prediction-model meta-analysis;
- causal prediction / treatment-effect modelling;
- final design-selection matrix.

---

## Источники, проверенные в этом pass

1. **Cochrane Handbook for Systematic Reviews of Prognosis Research and Prediction Models — Chapter 1**
   - draft Version 1, March 2026;
   - current official Cochrane prognosis handbook chapter;
   - defines the three main prognosis-research families:
     - overall prognosis;
     - prognostic factors;
     - prediction models.
   https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-1-prognosis-and-types-prognosis-research-healthcare

2. **Cochrane Handbook for Systematic Reviews of Prognosis Research and Prediction Models — Chapter 2**
   - draft Version 1, March 2026;
   - current official Cochrane chapter on study designs and data sources in prognosis research;
   - covers cohort, randomized-trial data, nested sampling, non-nested case-control and routinely collected data.
   https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-2-study-designs-and-data-sources-prognosis-research

3. **Cochrane Prognosis Methods Group — current Handbook landing page**
   Checked 2026-11-16.
   https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models

4. **PROGRESS 1 — A framework for researching clinical outcomes**
   Hemingway et al., BMJ 2013.
   https://www.bmj.com/content/346/bmj.e5595
   https://pmc.ncbi.nlm.nih.gov/articles/PMC3565687/

5. **PROGRESS 2 — Prognostic Factor Research**
   Riley et al., PLOS Medicine 2013.
   https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1001380
   https://pmc.ncbi.nlm.nih.gov/articles/PMC3564757/

6. **PROGRESS 3 — Prognostic Model Research**
   Steyerberg et al., PLOS Medicine 2013.
   https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1001381
   https://pmc.ncbi.nlm.nih.gov/articles/PMC3564751/

7. **Evaluation of clinical prediction models, part 1**
   Collins et al., BMJ 2024.
   Development → internal validation → internal-external validation → external validation.
   https://www.bmj.com/content/384/bmj-2023-074819
   https://pmc.ncbi.nlm.nih.gov/articles/PMC10772854/

8. **Evaluation of clinical prediction models, part 2**
   Riley et al., BMJ 2024.
   Defines external validation as performance evaluation in a different relevant dataset not used in model development.
   https://www.bmj.com/content/384/bmj-2023-074820
   https://pmc.ncbi.nlm.nih.gov/articles/PMC10788734/

9. **TRIPOD+AI Statement**
   Collins et al., BMJ 2024.
   Current reporting guideline for studies developing, validating/evaluating or updating prediction models; replaces TRIPOD-2015.
   https://www.bmj.com/content/385/bmj-2023-078378
   https://www.tripod-statement.org/
   https://www.tripod-statement.org/scope/

10. **PROBAST+AI**
    Moons et al., BMJ 2025.
    Current quality/risk-of-bias/applicability framework for prediction-model development and evaluation; supersedes PROBAST-2019.
    https://www.bmj.com/content/388/bmj-2024-082505
    https://www.probast.org/

## Source-version note

1. In 2026 Cochrane released draft chapters of the **first dedicated Cochrane Handbook for Systematic Reviews of Prognosis Research and Prediction Models**.
2. An older Cochrane Prognosis FAQ page still states that no prognosis handbook exists. That FAQ is stale relative to the March-2026 handbook pages and is not used as the current authority here.
3. TRIPOD+AI (2024) replaces TRIPOD-2015 for reporting prediction-model studies.
4. PROBAST+AI (2025) supersedes PROBAST-2019 for current appraisal of prediction-model development/evaluation.
5. PROGRESS (2013) remains the conceptual foundation, but current Cochrane 2026 terminology is used as the primary taxonomy authority.

---

# Part A — Prognosis is a longitudinal purpose family

## 1. Core longitudinal structure

### Established finding
**Confidence: HIGH**

All prognosis research requires a relationship between:

1. a defined target population / health state;
2. a defined **startpoint** at which prognosis is made;
3. current information available at or before that startpoint;
4. a future outcome;
5. a defined **prediction horizon**;
6. a setting/context.

Canonical skeleton:

`target population → startpoint / prediction time → follow-up / prediction horizon → future outcome`

For prognostic-factor and prediction-model studies, predictor information is obtained at or before the prediction startpoint.

### Project rule

A study is not classified as prognosis merely because it is longitudinal.

The inferential purpose must be forecasting future outcome values/probabilities from a defined startpoint.

---

## 2. Prediction horizon is part of the scientific question

### Established finding
**Confidence: HIGH**

Overall prognosis, prognostic-factor associations and prediction-model performance can all change with the time horizon.

Therefore:

> “predicts outcome” is incomplete without **when**.

Project extraction must record:

1. startpoint;
2. follow-up length;
3. target prediction horizon(s);
4. outcome timing.

---

# Part B — Three distinct prognosis-research families

## 3. Overall prognosis

### Established finding
**Confidence: HIGH**

Overall prognosis asks:

> What outcome value or outcome probability is expected, on average, in a defined population over a defined period?

Examples of targets:

- mean future continuous outcome;
- cumulative incidence / risk;
- incidence rate;
- survival probability;
- other population-average future outcome summaries.

Canonical structure:

`defined population at startpoint → follow-up → future outcomes → population-average prognosis`

### Taxonomy consequence

Overall prognosis is not a prognostic-factor study and does not require predictor modelling.

It can be a descriptive longitudinal prognosis study.

---

## 4. Prognostic-factor research

### Established finding
**Confidence: HIGH**

Prognostic-factor research asks:

> Is a characteristic measured at or before the prognosis startpoint associated with a future outcome over a defined prediction horizon?

Canonical structure:

`population at startpoint + factor value → follow-up → future outcome → prognostic association`

Typical estimand:

- mean difference;
- odds ratio;
- risk ratio;
- hazard ratio;
- other factor–outcome association.

### Project rule

Record whether the reported association is:

1. unadjusted;
2. adjusted for other prognostic factors.

In prognosis research, adjustment often asks whether a factor has **added prognostic value over existing predictors**.

This is not automatically the same problem as confounding control in causal/etiologic research.

---

## 5. Prediction-model research

### Established finding
**Confidence: HIGH**

Prediction-model research combines multiple predictors to estimate an outcome value or probability for an individual.

Canonical structure:

`individual at startpoint + multiple predictors → model → individualized future-outcome prediction`

Prediction-model studies may target:

- continuous outcome prediction;
- binary outcome probability;
- time-to-event risk;
- other individual predictions.

### Core distinction

A prognostic factor estimates the association of a factor with outcome.

A prediction model uses a combination of predictors to generate an **individual prediction**.

A paper containing multivariable regression is therefore not automatically a prediction-model study.

---

# Part C — Prognosis is not causation

## 6. Prediction ≠ causal explanation

### Established finding
**Confidence: HIGH**

Current Cochrane prognosis guidance explicitly separates prognosis from causal/etiologic research.

Prognosis asks:

> What is likely to happen?

Causal research asks:

> Why does it happen / what would happen under an intervention or exposure change?

A useful prognostic factor does not need to be causal.

### Project rule

Do not infer:

`predictor strongly predicts outcome → changing predictor will improve outcome`

That requires separate causal/intervention evidence.

---

## 7. Causal factor vs prognostic factor

### Established finding
**Confidence: HIGH**

A causal factor can also be prognostic, but a prognostic factor need not be causal.

Therefore:

- prediction can legitimately use non-causal predictors;
- intervention targets require causal evidence;
- “risk factor” terminology is insufficient because literature uses it for both causal and non-causal variables.

Project terminology:

- use **prognostic factor / predictor** for forecasting;
- use **causal factor / exposure** only when causal inference is actually intended.

---

# Part D — Cohort structure is the default prognosis design

## 8. Prospective cohort

### Established finding
**Confidence: HIGH**

Cochrane 2026 identifies a prospective cohort specifically designed for prognosis as the ideal primary structure for overall prognosis, prognostic-factor and prediction-model research.

Advantages include:

1. explicit target population and eligibility;
2. defined startpoint;
3. pre-specified prediction horizon;
4. planned predictor measurement;
5. planned outcome measurement;
6. clearer follow-up;
7. opportunity for protocol/analysis-plan specification.

Project classification:

> prognosis purpose + prospective cohort structure.

---

## 9. Retrospective cohort

### Established finding
**Confidence: HIGH**

Retrospective/historical cohorts are common and can support all three prognosis purposes when:

1. the source population is identifiable;
2. startpoint can be reconstructed;
3. predictor information existed at/before that startpoint;
4. future outcome and follow-up are available;
5. relevant prediction horizon can be reconstructed.

Project classification:

> prognosis purpose + retrospective cohort structure.

Retrospective data source does not make a study cross-sectional.

---

# Part E — Randomized-trial data can be reused for prognosis

## 10. Trial data are usable prognosis data

### Established finding
**Confidence: HIGH**

Cochrane 2026 explicitly allows data from one or more randomized-trial arms to be used for:

1. overall prognosis;
2. prognostic-factor analyses;
3. prediction-model development;
4. prediction-model evaluation.

Randomized trials provide prospective longitudinal participant data.

### Critical taxonomy rule

A prognostic analysis performed in an RCT dataset is **not automatically an RCT design for the prognostic question**.

Randomization applies to treatment assignment.

The prognosis analysis uses the trial participants as a longitudinal cohort/data source.

Project record:

> source data = randomized trial  
> prognostic study purpose = overall prognosis / factor / prediction model

Do not label the prognostic claim itself “randomized evidence” unless the claim concerns the randomized intervention effect.

---

## 11. Trial populations may reduce prognosis applicability

### Established finding
**Confidence: HIGH**

Trials often have restrictive eligibility and specialized centres.

Therefore trial-derived prognosis can differ from routine-care prognosis.

Project extraction must preserve:

- trial eligibility;
- intervention context;
- setting;
- target-population mismatch.

This belongs to applicability, not to a change in prognosis taxonomy.

---

# Part F — Data source is not the same thing as study design

## 12. Routine/EHR/registry data

### Established finding
**Confidence: HIGH**

Electronic health records, registries and administrative databases can supply data for all three prognosis families.

But:

> “EHR study” / “registry study” / “real-world data study” is a **data-source label**, not a sufficient study-design classification.

Project record must separately identify:

1. scientific purpose;
2. cohort/sampling structure;
3. data source;
4. startpoint;
5. predictor timing;
6. outcome timing;
7. prediction horizon.

---

# Part G — Nested sampling structures

## 13. Case-cohort / nested case-control / nested class-balanced designs

### Established finding
**Confidence: HIGH**

For binary/time-to-event outcomes, researchers may sample cases and non-cases from a known source cohort instead of measuring every participant.

Examples:

- case-cohort;
- nested case-control;
- nested class-balanced sampling.

These structures can support:

- prognostic-factor studies;
- prediction-model studies;
- and, with appropriate reconstruction/weighting, absolute prognosis estimation.

### Critical requirement

If absolute risks/probabilities are required, sampling fractions must be known and the analysis must recover the original outcome distribution.

---

## 14. Why weighting matters

### Established finding
**Confidence: HIGH**

Artificially over-sampling cases changes the observed event proportion.

Without correction, the sample no longer represents the baseline incidence/risk of the source population.

Therefore for:

- overall prognosis;
- absolute individual risk;
- model calibration;

appropriate weighting/reconstruction of the source outcome distribution is necessary.

---

# Part H — Non-nested case-control is limited for prognosis

## 15. Unknown source outcome frequency

### Established finding
**Confidence: HIGH**

In a non-nested case-control or class-balanced dataset where the true source-population case fraction is unknown, the sample cannot directly recover:

- baseline risk;
- cumulative incidence;
- baseline hazard;
- absolute individual outcome probability.

### Project taxonomy

Such a design can support certain **prognostic-factor relative association** estimates.

It is not a valid standalone structure for:

- overall prognosis;
- absolute-risk prediction-model development/evaluation;

unless a defensible method restores the population outcome frequency from external/source information.

---

# Part I — Prediction-model research has separate phases

## 16. Model development

### Established finding
**Confidence: HIGH**

Development uses a development dataset to produce the prediction function.

This may include:

1. predictor representation;
2. predictor selection, where applicable;
3. estimation of predictor weights/relationships;
4. model fitting;
5. tuning/regularization;
6. handling overfitting;
7. internal performance evaluation.

Project classification:

> prediction-model development study.

The algorithm family—regression, tree method, neural network, other ML—is not itself the study design.

---

## 17. Internal validation

### Established finding
**Confidence: HIGH**

Internal validation evaluates predictive performance using the same underlying development data/source, typically through:

- bootstrap;
- cross-validation;
- data splitting;
- internal-external approaches when clustered data are available.

### Project correction

A random train/test split from the same development dataset is **internal validation**, not independent external validation.

Internal validation is normally part of model development rather than a separate proof of transportability.

---

## 18. Internal-external cross-validation

### Established finding
**Confidence: HIGH**

For clustered/multicentre/multistudy data, internal-external cross-validation can repeatedly leave one cluster/group out for evaluation while developing on others.

Its purpose includes examining:

- heterogeneity;
- generalisability;
- performance across clusters.

Project classification:

> prediction-model development/evaluation — internal-external validation.

Do not collapse it into ordinary random sample splitting.

---

## 19. External validation

### Established finding
**Confidence: HIGH**

External validation evaluates an already specified prediction model in a **different relevant dataset not used in model development**.

Core structure:

`existing fixed model → new relevant participants/data → predictions → observed outcomes → performance evaluation`

External validation may be:

- temporal;
- geographic;
- setting-based;
- other intended-target-population evaluation.

### Critical rule

External validation applies the existing model as specified.

Refitting a new model and comparing it with the original is not, by itself, external validation of the original model.

---

## 20. A model is not “validated forever”

### Established finding
**Confidence: HIGH**

Prediction-model performance may differ by:

- population;
- setting;
- calendar time;
- care pathway;
- subgroup;
- measurement implementation.

Therefore external validation is context-specific.

Project wording:

> evaluated/externally validated in population X, setting Y, horizon Z

rather than:

> validated model.

---

# Part J — Model updating is a new development step

## 21. Updating after validation

### Established finding
**Confidence: HIGH**

If an existing model performs poorly or care/context has changed, researchers may:

- recalibrate intercept/baseline risk;
- recalibrate predictor weights;
- add predictors;
- refit or extend the model.

Current Cochrane and TRIPOD+AI treat updating/extending as a distinct prediction-model research activity.

### Project rule

Once model parameters are changed, the updated object is functionally a newly developed/updated model and should itself undergo evaluation.

Classification:

> prediction-model updating study  
not simply:
> external validation.

---

# Part K — Prediction-model evaluation vs impact

## 22. Predictive performance ≠ impact

### Established finding
**Confidence: HIGH**

Model development/evaluation asks whether predictions perform adequately.

Model-impact studies ask whether **using the model to guide decisions** improves:

- decisions;
- management;
- outcomes;
- workflow;
- cost/utility.

Impact is an intervention-effect question.

Preferred structure where feasible:

> model-guided strategy vs usual/non-model-guided strategy, ideally randomized.

### Project rule

A model with good calibration/discrimination has not yet demonstrated improved outcomes.

---

# Part L — Prognostic vs diagnostic prediction models

## 23. Time is the key boundary

### Established finding
**Confidence: HIGH**

A diagnostic prediction model estimates the probability that a condition/outcome is present at the prediction time.

A prognostic prediction model predicts a future outcome after the prediction startpoint.

Methods for model development/evaluation overlap substantially.

Project classification must still preserve:

- diagnostic prediction purpose;
- prognostic prediction purpose;

because the scientific time structure differs.

---

# Part M — Prognostic factor vs treatment-effect modifier

## 24. Predicts outcome ≠ predicts treatment response

### Established finding
**Confidence: HIGH**

A factor can strongly predict outcome without changing the relative effect of a treatment.

Predictors of treatment effect require interaction/effect-modification questions and are not ordinary prognostic-factor studies.

Project route:

- outcome prognosis → prognosis branch;
- differential intervention effect → treatment-effect heterogeneity / interaction branch.

This prevents false personalization such as:

> high-risk people benefit more from treatment

merely because they have worse prognosis.

---

# Part N — Structural records for the project

## 25. Overall-prognosis record

1. Overall prognosis purpose? YES/NO
2. Target population / health state
3. Setting
4. Startpoint
5. Outcome
6. Outcome type
7. Prediction horizon
8. Study structure:
   - prospective cohort
   - retrospective cohort
   - randomized-trial data source
   - nested sampling
   - routine/EHR/registry data
   - other
9. Source-population denominator known?
10. Sampling fractions known, if nested?
11. Weighting/reconstruction needed?
12. Follow-up completeness
13. Self-applied label
14. Project structural classification

---

## 26. Prognostic-factor record

1. Prognostic-factor purpose? YES/NO
2. Target population / health state
3. Setting
4. Startpoint
5. Candidate/target prognostic factor
6. Factor measured at/before startpoint?
7. Outcome
8. Prediction horizon
9. Study structure / data source
10. Unadjusted or adjusted effect?
11. Adjustment factors
12. Added prognostic value targeted?
13. Absolute prediction targeted? YES/NO
14. Nested/non-nested sampling?
15. Causal claim made? YES/NO
16. If causal claim: separate causal-design appraisal required?
17. Self-applied label
18. Project structural classification

---

## 27. Prediction-model record

1. Prediction-model purpose? YES/NO
2. Diagnostic or prognostic?
3. Target population
4. Intended setting/use
5. Prediction startpoint
6. Outcome
7. Prediction horizon
8. Predictors available at intended prediction time?
9. Model activity:
   - development
   - internal validation
   - internal-external validation
   - external validation
   - updating/extending
   - impact
10. Development data source
11. Evaluation data source
12. Participant overlap between development and evaluation?
13. Model fixed before external evaluation?
14. Nested/class-balanced sampling?
15. Source event frequency known?
16. Weighting/recalibration required?
17. Performance targets:
   - overall fit
   - calibration
   - discrimination
   - clinical utility
   - other
18. External-validation type:
   - temporal
   - geographic
   - setting
   - other
19. Model updated after evaluation?
20. If updated, further validation required?
21. Self-applied label
22. Project structural classification

---

# Part O — Exercise/fitness relevance

## 28. Overall prognosis examples

Potential project-relevant questions:

- probability of recurrence of pain over 6 months after a defined startpoint;
- return-to-training probability after an injury episode;
- expected adherence/dropout over a defined training period.

These are prognosis only when a clear startpoint and future horizon exist.

---

## 29. Prognostic-factor examples

Examples:

- does baseline training history predict future strength gain?
- does baseline sleep predict future adherence?
- does initial pain severity predict return-to-training time?

Such evidence may support forecasting or stratification.

It does **not** automatically justify changing training history, sleep or pain as a causal intervention target without causal evidence.

---

## 30. Prediction-model examples

Examples:

- multivariable model estimating probability of training dropout within 12 weeks;
- model predicting return-to-training time after injury;
- model predicting a future performance endpoint from baseline variables.

For project use, a model should not be adopted simply because development performance is high.

At minimum, relevant evaluation in the intended population/setting is needed.

---

# Part P — Practical rules produced by PASS-06B

1. Prognosis is inherently longitudinal: startpoint → prediction horizon → future outcome.
2. Prediction horizon is part of the scientific question, not optional metadata.
3. Overall prognosis, prognostic-factor research and prediction-model research are distinct purpose families.
4. Overall prognosis estimates population-average future outcomes.
5. Prognostic-factor studies estimate factor–future-outcome associations.
6. Prediction models combine multiple predictors to generate individual predictions.
7. Prognostic value does not imply causality.
8. A factor useful for prediction is not automatically a useful intervention target.
9. A prospective cohort specifically designed for prognosis is the preferred core structure.
10. Retrospective cohorts can support prognosis when startpoint, predictor timing, outcome and horizon are reconstructable.
11. Randomized-trial datasets can be reused for prognosis, but the prognostic analysis is not automatically randomized evidence.
12. Registry/EHR/real-world data is a data source, not a complete design label.
13. Nested case-control/case-cohort/class-balanced sampling can support prognosis research when source population and sampling fractions are known.
14. Absolute risks/probabilities require recovery of the source outcome distribution when case/non-case sampling is distorted.
15. Non-nested case-control with unknown source outcome frequency is unsuitable for overall prognosis and ordinary absolute-risk prediction.
16. Prediction-model development is distinct from model evaluation.
17. Internal validation uses the same underlying development data/source and includes bootstrap/cross-validation/data splitting.
18. A random train/test split within one dataset is not external validation.
19. Internal-external validation should be distinguished from ordinary random splitting.
20. External validation tests a fixed model in a different relevant dataset.
21. External validation is population/setting/time specific; “validated model” without context is too broad.
22. Model updating/extending is a new development activity and updated models require further evaluation.
23. Predictive performance does not prove impact of model-guided decisions.
24. Prediction-model impact belongs to intervention-effect designs.
25. Prognostic factors must not be confused with treatment-effect modifiers.
26. Diagnostic and prognostic prediction models share much methodology, but differ in time structure: current condition vs future outcome.
27. For project taxonomy, scientific purpose, study structure and data source must be recorded separately.

---

# Gap status after PASS-06B

Prognosis and prediction branches are **covered at taxonomy level** for:

- overall prognosis;
- prognostic factors;
- prognostic prediction models;
- cohort / trial-data / nested-sampling structures;
- development / internal validation / internal-external validation / external validation / updating;
- prediction-vs-causation;
- model-performance-vs-impact boundaries.

Detailed appraisal/statistics remain deferred to later topics.

---

# Unresolved for RES-02

1. Mechanistic study structures.
2. Qualitative study families.
3. Mixed-methods primary-study structures.
4. Purpose-vs-design crosswalk across all families.
5. Final design-selection matrix.
6. Gap audit.
7. New synthesis.

## Next pass

**RES-02 / PASS-06C — mechanistic study structures: human experimental physiology, laboratory mechanistic studies, mediation/pathway evidence, animal/in-vitro translational evidence and limits of mechanistic inference.**
