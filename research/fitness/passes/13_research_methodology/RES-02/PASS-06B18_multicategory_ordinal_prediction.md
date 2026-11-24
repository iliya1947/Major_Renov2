# RES-02 / PASS-06B18 — Multicategory and ordinal prediction-model structures

Статус: **COMPLETE MICRO-PASS — prediction branch remains RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. multicategory/polytomous prediction target;
2. nominal vs ordinal categories;
3. coherent category-probability vector;
4. multinomial logistic regression as a reference multicategory model family;
5. ordinal model families at taxonomy level;
6. proportional-odds assumptions as a model-structure assumption, not a study-design label;
7. why dichotomization can lose information;
8. why multiple independent binary models can produce incoherent category probabilities;
9. development lifecycle;
10. calibration for multicategory outcomes;
11. discrimination for multicategory outcomes;
12. overall performance/utility at recognition level;
13. internal validation;
14. external validation;
15. recalibration/updating;
16. diagnostic vs prognostic timing;
17. boundary with binary prediction;
18. boundary with multistate prediction;
19. boundary with multiple-outcome prediction;
20. fitness/exercise translations;
21. structural record.

Не покрывается здесь:

- exact multinomial likelihood mathematics;
- exact sample-size formulae;
- exact PDI/ORC/generalized c-index formulas;
- detailed ordinal utility mathematics;
- multicategory machine-learning algorithm catalog;
- detailed variable-selection methods;
- fairness/subgroup analysis;
- multiple simultaneous outcomes — PASS-06B19;
- diagnostic outcome-dependent sampling — PASS-06B20;
- final prediction-branch synthesis.

---

# Sources checked

## 1. Gehringer et al. — current practical multicategory prediction guide

Gehringer CK, Martin GP, Van Calster B, Hyrich KL, Verstappen SMM, Sergeant JC.  
**How to develop, validate, and update clinical prediction models using multinomial logistic regression.**  
Journal of Clinical Epidemiology. 2024;174:111481.  
DOI: 10.1016/j.jclinepi.2024.111481.

Checked 2026-11-17.

This is the central current practical source for this pass.

It explicitly defines multicategory/polytomous outcomes as having:

- more than two mutually exclusive categories;
- categories that may be:
  - nominal (unordered);
  - ordinal (ordered).

It provides MPM-specific guidance on:

- outcome definition;
- development;
- calibration;
- discrimination;
- internal validation;
- external validation;
- recalibration/updating.

It is explicitly intended to supplement general prediction-model guidance.

https://pubmed.ncbi.nlm.nih.gov/39067542/  
https://doi.org/10.1016/j.jclinepi.2024.111481

### PDF note

The open-access JCE PDF was inspected through extracted PDF text. Web screenshot retrieval was attempted twice as required by the project tooling rules but failed with a cache-miss error. Key claims below were also checked against the PubMed/HTML records.

---

## 2. Edlinger et al. — ordinal prediction calibration

Edlinger M, van Smeden M, Alber HF, Wanitschek M, Van Calster B.  
**Risk prediction models for discrete ordinal outcomes: Calibration and the impact of the proportional odds assumption.**  
Statistics in Medicine. 2022;41(8):1334–1360.

Checked 2026-11-17.

Methods examined include:

- multinomial logistic regression;
- cumulative-logit models;
- adjacent-category models;
- continuation-ratio models;
- stereotype logistic models.

Key finding used:

- ordinal model structure and its assumptions materially affect calibration;
- proportional-odds assumptions can yield poor individual risk estimates when violated;
- more flexible models use more parameters and can overfit more easily.

https://pubmed.ncbi.nlm.nih.gov/34897756/  
https://doi.org/10.1002/sim.9281

---

## 3. Zhang et al. — dichotomization vs multicategory modelling

**Comparing methods for risk prediction of multicategory outcomes: dichotomized logistic regression vs. multinomial logit regression.**  
BMC Medical Research Methodology. 2024;24:261.

Checked 2026-11-17.

Relevant empirical findings:

- separately fitted dichotomized logistic models can yield category probabilities whose sum differs substantially from 100%;
- in their example, sums ranged from approximately 87.7% to 124.0%;
- category-specific calibration could be materially worse after dichotomized modelling;
- a coherent multinomial/continuation-ratio approach constrained probabilities to a proper total.

This is used as empirical evidence of a structural problem, not as proof that every binary decomposition is invalid.

https://pubmed.ncbi.nlm.nih.gov/39482630/  
https://pmc.ncbi.nlm.nih.gov/articles/PMC11526521/

---

## 4. Van Hoorde et al. — validation/updating of multinomial risk models

**Validation and updating of risk models based on multinomial logistic regression.**  
Diagnostic and Prognostic Research. 2017;1:2.

Checked 2026-11-17.

Relevant taxonomy:

- external validation;
- calibration;
- discrimination;
- recalibration;
- revision/refitting;
- extension.

Key principle:

- multicategory model updating can range from simple recalibration to more extensive revision;
- greater updating complexity requires more information/data.

https://pubmed.ncbi.nlm.nih.gov/31093534/  
https://pmc.ncbi.nlm.nih.gov/articles/PMC6457140/

---

## 5. de Jong et al. — predictive performance / sample-size implications

**Sample size considerations and predictive performance of multinomial logistic prediction models.**  
Statistics in Medicine. 2019.

Checked 2026-11-17.

Relevant point:

- multinomial models contain multiple category-specific linear predictors/parameters;
- calibration can be evaluated using multicategory calibration-intercept/slope structures;
- more categories generally increase parameter burden and overfitting risk.

https://pmc.ncbi.nlm.nih.gov/articles/PMC6590172/

---

## 6. Quintana et al. — multicategory clinical utility (emerging evidence)

**Evaluating clinical utility of multi-category outcome risk prediction models.**  
2025 preprint / PMC record.

Checked 2026-11-17.

Used only to establish that:

- multicategory decision utility is an active methods area;
- binary DCA does not automatically collapse into one unambiguous multicategory utility quantity.

Because this is recent/preprint-stage methodology, it is **not** used to define a mandatory standard for this project.

https://pubmed.ncbi.nlm.nih.gov/40343018/  
https://pmc.ncbi.nlm.nih.gov/articles/PMC12060937/

---

# Part A — What is a multicategory prediction target?

## 1. Core structure

### Established finding
**Confidence: HIGH**

A multicategory prediction problem has one outcome variable with more than two **mutually exclusive** categories.

For one individual:

`Y ∈ {1, 2, ..., K}`

Only one category can be the realized outcome for that prediction target.

Examples:

- no injury / mild injury / moderate injury / severe injury;
- responder / partial responder / non-responder;
- benign / borderline / invasive subtype;
- no recovery / partial recovery / full recovery.

---

## 2. Output is a probability vector

### Established finding
**Confidence: HIGH**

A full probabilistic multicategory model produces:

`P(Y=1|X), P(Y=2|X), ..., P(Y=K|X)`

with coherent probabilities satisfying:

- each probability is between 0 and 1;
- probabilities sum to 1 for each individual.

### Project rule

The object being predicted is **one categorical distribution**, not K unrelated binary events.

---

# Part B — Nominal vs ordinal target

## 3. Nominal multicategory outcome

### Established finding
**Confidence: HIGH**

Categories have no scientifically meaningful natural order.

Example:

- hamstring injury;
- ankle injury;
- shoulder injury.

No category is intrinsically “higher” or “lower” than another.

### Typical reference modelling family

Multinomial/baseline-category logistic regression is a standard statistical approach.

---

## 4. Ordinal multicategory outcome

### Established finding
**Confidence: HIGH**

Categories have a scientifically meaningful ordering.

Example:

- no limitation;
- mild;
- moderate;
- severe limitation.

Ordering contains information:

`category 1 < category 2 < category 3 < category 4`

but the numerical distance between adjacent categories need not be equal.

---

## 5. Ordinality is outcome structure, not automatically one model

### Established finding
**Confidence: HIGH**

An ordinal outcome can be modeled by several families, including:

- cumulative-logit;
- adjacent-category;
- continuation-ratio;
- stereotype logistic;
- multinomial logistic regression ignoring the order structure.

### Project rule

Do not equate:

> ordinal outcome

with:

> proportional-odds model.

The outcome is ordinal; proportional odds is one possible modelling assumption.

---

# Part C — Multinomial logistic regression

## 6. Baseline-category structure

### Established finding
**Confidence: HIGH**

For K categories, multinomial logistic regression can define one reference category and estimate K−1 category-versus-reference linear predictors.

These are transformed into a coherent set of category probabilities.

### Important clarification

Choice of reference category changes coefficient interpretation but should not change the resulting predicted category probabilities for an otherwise equivalent fitted model.

---

## 7. Multinomial model can be used for nominal and ordinal prediction

### Established finding
**Confidence: HIGH**

Gehringer et al. 2024 explicitly state that MLR:

- is typically used for nominal outcomes;
- can also be used for ordinal outcomes when the goal is risk prediction.

### Trade-off

Ignoring order may:

- require more parameters;
- require more data;
- increase overfitting risk;

but can avoid restrictive ordinal assumptions.

---

# Part D — Ordinal model-family assumptions

## 8. Proportional-odds structure

### Established finding
**Confidence: HIGH**

A common cumulative-logit ordinal model assumes a shared predictor effect across cumulative category thresholds.

This can reduce parameter count.

### Potential advantage

- more parsimonious;
- potentially more statistically efficient when the structural assumption is appropriate.

---

## 9. Proportional-odds violation can impair probability calibration

### Established finding
**Confidence: HIGH**

Edlinger et al. showed that when proportional-odds assumptions were not compatible with the true prediction structure, predicted category probabilities could be substantially miscalibrated even in large development samples.

### Project rule

Do not select a proportional-odds model simply because the outcome is ordered.

The structural assumption matters for probability prediction.

---

## 10. Flexibility vs overfitting trade-off

### Established finding
**Confidence: HIGH**

More flexible non-proportional/multinomial models:

- allow category-specific predictor relationships;
- require more parameters.

This creates the familiar trade-off:

> restrictive structure → possible miscalibration if false  
> flexible structure → more data required / greater overfitting risk.

### Project rule

Model-family choice is not a purely semantic taxonomy decision; it changes development-data requirements and performance risk.

---

# Part E — Why dichotomization can be problematic

## 11. Dichotomization discards outcome information

### Established finding
**Confidence: HIGH**

Transforming:

- none;
- mild;
- moderate;
- severe

into:

- severe vs not severe

discards distinctions among the merged categories.

### Consequences can include

- reduced information;
- different clinical states treated as equivalent;
- inability to support category-specific decisions;
- different model target from the original multicategory question.

---

## 12. Dichotomization is not always scientifically wrong

### Important qualification
**Confidence: HIGH**

If the actual decision is genuinely binary, for example:

> severe condition requiring referral vs all other states,

then a binary target may be appropriate.

### Project rule

The error is not “binary models are forbidden”.

The error is:

> collapsing categories without confirming that the intended decision/estimand is binary.

---

# Part F — Multiple independent binary models

## 13. One-vs-rest models can be incoherent as a joint probability system

### Established finding
**Confidence: HIGH**

If K separate binary logistic models are fitted independently:

- category A vs rest;
- category B vs rest;
- category C vs rest;

their predicted probabilities are not automatically constrained to sum to 1.

### Empirical evidence

Zhang et al. 2024 observed totals ranging from approximately 87.7% to 124.0% in their applied comparison.

---

## 14. Good binary discrimination does not guarantee coherent multicategory prediction

### Established finding
**Confidence: HIGH**

Separate binary models can have reasonable category-vs-rest AUC while:

- category probabilities conflict;
- calibration is poor;
- total probability exceeds/falls below 100%.

### Project rule

When the intended output is a complete multicategory probability distribution, evaluate it as a **joint coherent prediction system**, not merely a collection of binary classifiers.

---

# Part G — One-vs-one decomposition

## 15. Pairwise comparisons can be useful for performance description

### Established finding
**Confidence: HIGH**

Multicategory model discrimination can be examined using pairwise category comparisons.

But pairwise discrimination alone does not guarantee:

- coherent category probabilities;
- good calibration for every category;
- good overall multicategory performance.

---

# Part H — Development lifecycle

## 16. General prediction-development principles still apply

### Established finding
**Confidence: HIGH**

PASS-06B5 transfers directly:

- define target;
- candidate predictors;
- preprocessing;
- transformations;
- feature engineering;
- selection;
- fitting;
- tuning;
- final model specification.

### Multicategory-specific addition

The target definition must explicitly specify:

- number of categories;
- whether categories are mutually exclusive;
- whether categories are ordered;
- whether all categories need separate probability estimates.

---

## 17. Parameter burden grows with category structure

### Established finding
**Confidence: HIGH**

In standard MLR with K categories:

- K−1 category-vs-reference submodels are estimated.

More outcome categories therefore usually increase the parameter burden.

### Project consequence

A predictor set feasible for binary prediction may be over-ambitious for a multicategory model with the same total sample size.

Detailed sample-size formulae are deferred.

---

# Part I — Calibration

## 18. Calibration remains a core performance dimension

### Established finding
**Confidence: HIGH**

For every category k:

> predicted probability of category k should agree with observed frequency of category k among individuals assigned similar probabilities.

### Project rule

A multicategory model cannot be called well calibrated from one global accuracy statistic alone.

---

## 19. Mean calibration is category-specific

### Established finding
**Confidence: HIGH**

For each category, average predicted probability can be compared with observed category prevalence.

A model can:

- overpredict category A;
- underpredict category B;
- be approximately correct for category C.

### Project consequence

Overall agreement can hide category-specific errors.

---

## 20. Calibration intercept/slope architecture extends to multicategory models

### Established finding
**Confidence: HIGH**

Multinomial calibration frameworks can estimate calibration intercept/slope structures across category-specific linear predictors.

These provide summaries of:

- systematic over/underprediction;
- prediction extremeness.

### Important nuance

Some calibration summaries can depend on the chosen reference-category parameterization, so the exact calibration method must be recorded.

---

## 21. Calibration plots are multidimensional/category-specific

### Established finding
**Confidence: HIGH**

The 2024 JCE guide recommends examining predicted-vs-observed relationships for each outcome category.

### Project rule

Store calibration evidence by category, not just one generic label:

> “calibrated”.

---

# Part J — Ordinal calibration

## 22. Ordinal categories permit two useful calibration views

### Established finding
**Confidence: HIGH**

Calibration can be examined by:

1. exact category:
   - `Y = k`;

2. cumulative threshold:
   - `Y ≥ k` or equivalent ordered dichotomy.

### Interpretation

Which representation is more useful depends on the intended decision.

Example:

- exact probability of “moderate”;
- probability of “moderate-or-worse”.

These are different prediction targets.

---

# Part K — Discrimination

## 23. Multicategory discrimination is not one binary AUC

### Established finding
**Confidence: HIGH**

The 2024 JCE guide describes the **Polytomous Discrimination Index (PDI)** as one measure of simultaneous discrimination across all categories.

Pairwise c-statistics can also be calculated.

### Project rule

A single category-vs-rest AUC cannot represent every multicategory separation problem.

---

## 24. Pairwise discrimination and global discrimination answer different questions

### Established finding
**Confidence: HIGH**

Pairwise c-statistic:

> can the model distinguish category A from category B?

PDI-like multicategory summary:

> how well does the model simultaneously discriminate among all categories?

### Project consequence

Store:

- overall multicategory discrimination;
- important pairwise/category-specific discrimination where relevant.

---

# Part L — Overall performance

## 25. Overall probability accuracy remains distinct from discrimination

### Cross-pass integration
**Confidence: HIGH**

As in PASS-06B10:

- discrimination measures separation/ranking;
- calibration measures probability agreement;
- overall prediction error assesses total probability accuracy.

### Project rule

Do not collapse multicategory performance into “classification accuracy” alone.

---

# Part M — Classification accuracy

## 26. Hard class assignment is a downstream reduction

### Project synthesis
**Confidence: HIGH**

A model can choose:

> class = category with highest predicted probability.

This produces hard classification and allows metrics such as:

- accuracy;
- macro/micro classification summaries;
- confusion matrix.

### Limitation

Hard classification discards the probability vector.

Two individuals can receive the same class despite:

- 0.99 / 0.005 / 0.005;
- 0.36 / 0.34 / 0.30.

These are not equivalent levels of predictive certainty.

---

# Part N — Clinical/practical utility

## 27. Multicategory utility is more complex than one binary threshold

### Established current limitation
**Confidence: MODERATE-HIGH**

Different outcome categories can:

- trigger different actions;
- carry different harm/benefit weights;
- require different thresholds.

Emerging 2025 work extends DCA ideas to polytomous outcomes, but methods are not yet as standardized as binary decision curves.

### Project rule

For this taxonomy:

- retain utility as a separate layer;
- record the category-specific action rule;
- do not impose one universal multicategory net-benefit metric.

---

# Part O — Internal validation

## 28. Same full-pipeline resampling principle applies

### Established finding
**Confidence: HIGH**

The 2024 guide recommends internal validation after fitting the multicategory model.

Bootstrap and cross-validation can be used.

### Cross-pass rule from B6

All data-dependent steps must remain inside resampling:

- predictor selection;
- preprocessing;
- model-family/tuning decisions;
- category-specific feature decisions.

---

## 29. Internal validation must preserve all outcome categories

### Project synthesis
**Confidence: HIGH**

If folds/resamples produce very sparse categories, performance and fitting can become unstable.

### Project rule

Record category counts/prevalence in development and resampling, especially for rare categories.

Detailed resampling stratification methods are deferred.

---

# Part P — External validation

## 30. Fixed multicategory model must be applied unchanged first

### Established finding
**Confidence: HIGH**

External validation follows the same lifecycle as other prediction models:

`fixed model → new relevant participants → full category-probability vector → performance evaluation`

### Evaluate at minimum

- category prevalence/case mix;
- calibration;
- discrimination;
- overall probability performance;
- decision utility when intended.

---

## 31. Category prevalence shift can damage calibration

### Established finding
**Confidence: HIGH**

The JCE guide explicitly notes that differences in outcome-category prevalence between development and validation populations can alter calibration.

### Project consequence

External validation must report the distribution of **all categories**, not just total N.

---

# Part Q — Updating

## 32. Multicategory models can be recalibrated/revised

### Established finding
**Confidence: HIGH**

Available updating strategies include:

- intercept/category-baseline recalibration;
- slope/recalibration structures;
- coefficient revision;
- full refitting;
- extension.

### Cross-pass rule

As in PASS-06B8:

> once external data alter the prediction function, a new model version exists.

---

## 33. More extensive multicategory updating can be data hungry

### Established finding
**Confidence: HIGH**

Because multicategory models contain multiple category-specific parameters, full refitting/revision can require substantial information in every relevant category.

### Project rule

Do not assume that full refitting is automatically preferable to simpler recalibration.

---

# Part R — Diagnostic vs prognostic multicategory prediction

## 34. Category count does not determine diagnostic/prognostic status

### Established finding
**Confidence: HIGH**

### Diagnostic multicategory model

Predicts which current condition/category is present now.

Example:

- no injury;
- grade I injury;
- grade II injury;
- grade III injury.

### Prognostic multicategory model

Predicts which future outcome category will occur.

Example:

- no improvement;
- partial improvement;
- full improvement at 12 weeks.

### Project rule

Temporal target still determines diagnostic vs prognostic classification.

---

# Part S — Boundary with binary prediction

## 35. Binary model is K=2 special case

### Project synthesis
**Confidence: HIGH**

Binary prediction is the two-category version of categorical probability prediction.

But multicategory outcomes require extra consideration because:

- multiple category probabilities must coexist coherently;
- performance can be category-specific;
- category ordering may carry information.

---

# Part T — Boundary with multistate prediction

## 36. Multicategory endpoint != multistate process

### Critical taxonomy distinction
**Confidence: HIGH**

### Multicategory prediction

At one specified prediction target time/episode:

> which of K mutually exclusive categories will be observed?

Example:

> status at week 12 = no limitation / mild / moderate / severe.

### Multistate prediction

Models:

> transitions among states over time.

Example:

`healthy → injured → rehab → return → reinjury`

### Project rule

A K-category endpoint does not become multistate merely because the labels resemble states.

The decisive question is:

> are transitions/pathways through time part of the scientific target?

---

# Part U — Boundary with competing risks

## 37. Multicategory discrete endpoint can encode event type

### Established/source-supported nuance
**Confidence: HIGH**

The 2024 JCE guide notes that a multinomial outcome can sometimes incorporate competing event categories in a discrete-time setting.

Example:

At 6 months:

- outcome A;
- outcome B;
- no event.

### But

This is not automatically equivalent to a continuous-time competing-risk model.

### Project rule

If event timing and cumulative incidence over continuous follow-up matter, route to PASS-06B15 competing-risk architecture.

If the target is a mutually exclusive category at a fixed discrete assessment, a multicategory model may be appropriate.

---

# Part V — Boundary with multiple-outcome prediction

## 38. Multicategory outcomes are mutually exclusive

### Project definition
**Confidence: HIGH**

For the same target:

- one category occurs;
- others do not.

Probabilities sum to 1.

---

## 39. Multiple outcomes may co-occur

### Project boundary
**Confidence: HIGH**

Examples:

- injury = yes/no;
- dropout = yes/no;
- poor strength adaptation = yes/no.

A trainee can have:

- injury AND dropout;
- injury without dropout;
- dropout without injury;
- neither.

This is **not** a simple multicategory outcome unless the joint combinations are explicitly redefined as mutually exclusive categories.

That broader architecture belongs to PASS-06B19.

---

# Part W — Why “multiclass classifier” is not enough taxonomy

## 40. Algorithm label is insufficient

### Established project principle
**Confidence: HIGH**

A machine-learning system may be called:

- multiclass classifier;
- ordinal classifier;
- softmax model.

Still extract:

1. target categories;
2. nominal vs ordinal;
3. mutually exclusive?;
4. calibrated probabilities or only labels?;
5. diagnostic vs prognostic timing;
6. validation phase;
7. performance dimensions.

---

# Part X — Fitness/exercise translations

## 41. Injury-severity diagnosis

At today's evaluation:

- no injury;
- mild;
- moderate;
- severe.

Target:

> current category probability vector.

Classification:

> **diagnostic ordinal multicategory prediction**.

Not multistate unless transitions/recovery trajectory are modelled.

---

## 42. Future training response

At baseline, predict 12-week outcome:

- non-responder;
- partial responder;
- strong responder.

Classification:

> **prognostic ordinal multicategory prediction**.

If the categories correspond to materially different programming decisions, preserving all categories may be more useful than responder/non-responder dichotomization.

---

## 43. Injury location

Predict next injury type:

- hamstring;
- knee;
- ankle;
- shoulder.

If the categories are treated as one mutually exclusive endpoint:

> **nominal multicategory prognosis**.

If individuals can sustain several different injuries over follow-up and all events matter:

> recurrent/multiple-event architecture instead.

---

## 44. Readiness state

At morning check-in predict:

- green;
- amber;
- red.

If these are simply ordered output categories for one prediction time:

> ordinal multicategory prediction.

If the scientific question concerns:

> green → amber → red → recovery transitions over days,

route toward multistate/dynamic prediction.

---

# Part Y — Structural record produced by PASS-06B18

## 45. Multicategory prediction-model record

For each multicategory model, record:

1. model identifier/version;
2. scientific purpose:
   - diagnostic;
   - prognostic;
3. prediction startpoint;
4. prediction horizon if prognostic;
5. number of outcome categories K;
6. categories explicitly listed;
7. mutually exclusive? YES/NO;
8. exhaustive? YES/NO/UNCLEAR;
9. nominal or ordinal?;
10. scientific meaning of ordering if ordinal;
11. category prevalence/frequency;
12. target output:
    - full probability vector;
    - score;
    - hard class only;
13. probabilities constrained/coherent to sum to 1?;
14. model family:
    - multinomial/baseline-category;
    - cumulative logit;
    - adjacent-category;
    - continuation-ratio;
    - stereotype;
    - ML multiclass;
    - other;
15. proportional-odds assumption used?;
16. assumption checked/justified?;
17. categories dichotomized?;
18. rationale for dichotomization;
19. independent binary submodels used?;
20. probability coherence checked?;
21. development data;
22. candidate predictor parameters;
23. category-specific predictor effects allowed?;
24. internal validation?;
25. resampling includes full pipeline?;
26. external validation?;
27. calibration evaluated:
    - per category;
    - cumulative thresholds;
    - multinomial intercept/slope;
    - calibration plots;
28. discrimination evaluated:
    - PDI/global;
    - pairwise c-statistics;
    - ordinal discrimination metric;
29. overall probability performance?;
30. hard-class metrics reported?;
31. decision utility evaluated?;
32. update/recalibration performed?;
33. updated model separately versioned?;
34. relation to:
    - binary;
    - competing risk;
    - multistate;
    - multiple outcomes;
35. final project classification;
36. unresolved category-definition/performance/applicability issues.

---

# Practical rules produced by PASS-06B18

1. A multicategory prediction target has more than two mutually exclusive outcome categories.
2. The full probabilistic output is a category-probability vector that should be coherent and sum to 1.
3. Nominal categories are unordered; ordinal categories have a scientifically meaningful order.
4. Ordinality belongs to the outcome structure; proportional odds is only one possible model assumption.
5. Multinomial logistic regression is a standard reference method for nominal outcomes and can also be used for ordinal prediction.
6. Ordinal models include cumulative-logit, adjacent-category, continuation-ratio and stereotype families in addition to multinomial models.
7. More restrictive ordinal models can reduce parameter burden but can miscalibrate risks if their structural assumptions are false.
8. More flexible category-specific models require more parameters and can overfit more easily.
9. Dichotomization changes the scientific target and loses category information.
10. Dichotomization can still be appropriate when the intended real-world decision is genuinely binary.
11. Several independently fitted binary category-vs-rest models do not automatically form a coherent multicategory probability distribution.
12. Good binary AUCs do not guarantee coherent or calibrated multicategory probabilities.
13. Development principles from PASS-06B5 transfer to multicategory prediction.
14. Multicategory development must explicitly define category number, mutual exclusivity, ordering and intended probability outputs.
15. More categories generally increase parameter/sample-size burden.
16. Calibration must be examined by category; one global summary can hide opposing category-specific errors.
17. Ordinal calibration can be evaluated for exact categories and cumulative ordered thresholds.
18. Multicategory discrimination can be summarized globally (e.g. PDI) and pairwise; these answer different questions.
19. Hard classification accuracy discards probability information and is not sufficient for probabilistic model evaluation.
20. Multicategory decision utility is a separate and currently less standardized layer.
21. Internal validation must repeat the full development pipeline.
22. External validation must apply the fixed full model first and assess the complete probability vector.
23. Category-prevalence shifts can cause external miscalibration.
24. Multicategory recalibration/revision/refitting produces a new model version under the same lifecycle rules as PASS-06B8.
25. Diagnostic vs prognostic status is still determined by time relative to the prediction target, not number of categories.
26. A multicategory endpoint is not a multistate process unless transitions/path history over time are part of the target.
27. A mutually exclusive discrete category endpoint can sometimes represent competing event categories, but continuous-time competing-risk questions remain a distinct architecture.
28. Multicategory prediction is not the same as multiple-outcome prediction: multiple outcomes can co-occur.
29. Multiclass/ordinal ML labels do not define the scientific study family; target structure and evaluation evidence do.
30. Minimum project architecture:
    **prediction time + one K-category mutually exclusive target + nominal/ordinal structure + coherent probability model + category-aware calibration/discrimination + validation phase + update/versioning + explicit boundary to multistate/multiple outcomes**.

---

# Evidence limitations

1. General prediction-model best practice remains much more mature for binary/time-to-event models than for multicategory models.
2. The 2024 JCE guide identifies remaining multicategory-specific research gaps, including external-validation sample-size methodology and variable selection.
3. Ordinal model-family recommendations are assumption-sensitive; no single ordinal regression family should be declared universally best.
4. Multicategory utility methodology remains comparatively immature.
5. Machine-learning multiclass algorithms can produce probability vectors, but algorithm-specific calibration/validation details are outside this taxonomy pass.

---

# Gap status after PASS-06B18

The first of three blockers identified by PASS-06B17 is now covered at taxonomy level.

Remaining before repeat final audit:

1. **PASS-06B19 — multiple-outcome, composite and joint-risk prediction structures**;
2. **PASS-06B20 — diagnostic outcome-dependent sampling and absolute-probability recovery**;
3. then **PASS-06B21 — repeat final prediction-branch gap audit**;
4. synthesis only if B21 finds no further blocking gap.

## Next micro-pass

**RES-02 / PASS-06B19 — multiple-outcome, composite and joint-risk prediction structures: single vs multiple outcome targets, marginal risks, composite endpoints, joint outcome combinations, outcome dependence, competing-vs-co-occurring outcomes, calibration/performance and decision-utility implications.**

STOP after this saved micro-pass.
