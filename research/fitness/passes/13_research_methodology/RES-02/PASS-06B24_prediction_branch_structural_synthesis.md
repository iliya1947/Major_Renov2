# RES-02 / PASS-06B24 — Prediction-branch structural synthesis

Статус: **COMPLETE STRUCTURAL SYNTHESIS — prediction branch synthesized; RES-02 remains RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Purpose

Этот PASS синтезирует валидную granular prediction/prognosis базу после завершённых audit cycles.

Источник синтеза:

- PASS-06B1…PASS-06B23;
- cross-boundaries с PASS-06A;
- source/version status, уже повторно проверенный в PASS-06B23.

Задача этого файла — не повторить каждый PASS, а создать **одну каноническую неповторяющуюся архитектуру**, по которой можно классифицировать prediction/prognosis studies в следующих областях проекта.

---

# 1. Главный принцип: prediction research — не один плоский список дизайнов

Prediction/prognosis study нужно описывать как комбинацию независимых осей:

1. **scientific purpose**;
2. **target time**;
3. **outcome architecture / estimand**;
4. **source-data / sampling architecture**;
5. **model lifecycle phase**;
6. **performance target**;
7. **static vs dynamic prediction**;
8. **factual vs counterfactual treatment context**;
9. **measurement / DTA boundary**;
10. **deployment/update state**.

Поэтому labels вроде:

- cohort;
- registry;
- AI study;
- risk model;
- validation study;
- screening study;
- retrospective study;

не являются достаточной классификацией сами по себе.

---

# 2. Canonical purpose taxonomy

## 2.1 Overall prognosis

Question:

> Что в среднем произойдёт с определённой популяцией после научно заданного startpoint?

Targets:

- average future continuous value;
- event probability;
- cumulative incidence;
- rate/hazard;
- state distribution.

Primary unit:

> population-average future outcome.

Это не individual prediction model.

---

## 2.2 Prognostic-factor study

Question:

> Связан ли фактор, доступный в startpoint, с будущим outcome?

Target:

- prognostic association/effect estimate.

Important boundary:

> prognostic factor ≠ causal factor  
> prognostic factor ≠ treatment-effect modifier  
> multivariable regression ≠ автоматически prediction model.

---

## 2.3 Individual prediction-model study

Question:

> Какой current/future outcome ожидается именно у этого человека, если объединить несколько predictors/features?

Model output can be:

- probability;
- continuous value;
- K-category probability vector;
- event-risk function;
- joint outcome probabilities;
- score/risk category.

Scientific object:

> combined prediction function.

---

## 2.4 Diagnostic test-accuracy study

Question:

> Насколько index test классифицирует target condition относительно reference standard?

Primary objects:

- sensitivity;
- specificity;
- ROC/threshold accuracy;
- predictive values;
- likelihood ratios.

A fixed diagnostic prediction model can function as an index test.

But:

> development of the model itself ≠ ordinary fixed-index-test DTA.

---

## 2.5 Measurement-property / criterion-validity study

Question:

> Насколько instrument/method измеряет intended construct / отражает defensible criterion?

Possible targets:

- reliability;
- measurement error;
- criterion validity;
- construct validity;
- responsiveness;
- agreement/interchangeability.

This overlaps with prediction-equation validation in some fitness studies but is not identical to prediction-model evidence.

---

## 2.6 Model-guided impact study

Question:

> Улучшает ли использование модели реальные decisions/outcomes?

Once the model and action pathway become the intervention:

> scientific design crosses into intervention-effect methodology.

Possible designs:

- individual RCT;
- cluster RCT;
- stepped-wedge;
- controlled quasi-experimental;
- weaker before-after structures.

Prediction performance alone does not establish impact.

---

# 3. Target-time taxonomy

## 3.1 Current / zero-horizon prediction

Target belongs to approximately the same substantive timepoint as the predictors.

Covered forms:

### Binary current-condition probability

Example:

> вероятность текущей stress fracture.

### Nominal/ordinal current category

Example:

> no injury / grade I / grade II / grade III.

### Current continuous-value estimation

Example:

- current VO₂max;
- current fat mass;
- current 1RM.

Canonical structure:

`current predictors at T0 → current target at T0`

This is conceptually cross-sectional.

---

## 3.2 Future / non-zero horizon prediction

Target occurs after prediction startpoint.

Canonical structure:

`T0 → predictors available by T0 → future outcome over horizon H`

Forms:

- continuous;
- binary;
- time-to-event;
- multicategory/ordinal;
- recurrent;
- multistate;
- multiple/joint outcomes.

This is prognostic and longitudinal.

---

# 4. Outcome-architecture matrix

| Outcome architecture | Core question | Critical estimand |
|---|---|---|
| Continuous | Какое числовое значение? | predicted value / error / calibration |
| Binary | Произойдёт ли outcome / присутствует ли condition? | probability |
| Nominal K-category | Какая из K unordered categories? | coherent category probabilities |
| Ordinal K-category | Какая ordered category? | category/cumulative probabilities |
| First-event survival | Когда / случится ли первый event? | survival/risk by horizon |
| Competing risks | Какова вероятность specific event при competing events? | cumulative incidence / event-specific target |
| Recurrent events | Как повторяется event process? | next event / gap time / count / rate |
| Multistate | Как человек переходит между states? | transition/state-occupation probability |
| Multiple marginal outcomes | Каковы отдельные risks A, B, C? | marginal risks |
| Composite outcome | Случится ли хотя бы один component? | union risk |
| Joint outcomes | Какова вероятность combinations A/B/etc.? | joint probability |
| Mixed multiple outcomes | Несколько outcomes разных типов | target-specific joint/marginal estimand |

---

# 5. Critical outcome boundaries

## 5.1 Binary vs multicategory

Binary:

> K = 2.

Multicategory:

> K > 2 mutually exclusive categories.

If complete probability prediction is intended:

> category probabilities should form a coherent distribution and sum to 1.

Independent one-vs-rest models do not guarantee this.

---

## 5.2 Multicategory vs multiple outcomes

Multicategory:

> one outcome variable, only one category occurs.

Multiple outcomes:

> several distinct outcomes may co-occur.

Example:

- injury AND dropout can both occur → multiple-outcome problem;
- injury severity grade I/II/III → multicategory problem.

---

## 5.3 Competing vs co-occurring outcomes

Competing event:

> occurrence prevents/fundamentally changes occurrence of target event within the defined process.

Co-occurring outcomes:

> both can happen to the same person.

Do not use competing-risk methods merely because there are several outcomes.

---

## 5.4 First event vs recurrent process

Time-to-first-event ignores later episodes.

If recurrence burden matters, target may instead be:

- next event;
- gap time;
- ordered recurrence;
- count;
- rate/intensity.

---

## 5.5 Multicategory endpoint vs multistate process

Multicategory:

> category at one target time/episode.

Multistate:

> transition/path through states over time.

The labels can look identical while the inferential target differs.

---

## 5.6 Composite vs joint outcome

Composite:

> A OR B.

Joint:

> A AND B or full combination distribution.

Composite deliberately hides component identity.

Joint prediction preserves combination information and requires outcome-dependence handling.

---

# 6. Canonical source-data architecture

## 6.1 Purpose-built prospective cohort

Preferred structure for prospective prognosis research when feasible.

Advantages:

- startpoint;
- predictors;
- outcomes;
- follow-up;

can be defined in advance.

---

## 6.2 Retrospective/historical cohort

Valid if one can reconstruct:

- target population;
- startpoint;
- predictor availability;
- outcome;
- follow-up.

Retrospective extraction today does not make the design cross-sectional if the scientific time architecture is longitudinal.

---

## 6.3 Mixed retrospective + prospective follow-up

Record actual chronology instead of forcing one adjective.

---

## 6.4 RCT data reused for prognosis

RCT data can support:

- overall prognosis;
- prognostic-factor research;
- prediction-model research.

But randomization applies to treatment assignment, not ordinary prognostic factors.

Therefore trial-derived prognostic associations are not automatically causal.

---

## 6.5 Routine-care data

Examples:

- EHR;
- registry;
- claims;
- linked databases.

These are **data sources**, not complete designs.

Need reconstruct:

- source population;
- analytic cohort;
- T0;
- predictor availability;
- outcome observability;
- missingness/workflow;
- calendar drift.

---

# 7. Sampling architecture

## 7.1 Full cohort / representative diagnostic series

Best default for absolute risk/probability when feasible.

---

## 7.2 Case-cohort

Subcohort sampled independent of future outcome, then cases added.

Requires design-aware analysis.

---

## 7.3 Nested case-control

Controls sampled from source-cohort risk sets.

Key properties:

- control can later become case;
- same control may be sampled multiple times;
- sampling probabilities matter.

---

## 7.4 Class-balanced sampling from known source data

May be efficient for model development.

But:

> balanced sample prevalence ≠ target prevalence.

Absolute risks/calibration/performance require recovery of source distribution.

---

## 7.5 Diagnostic one-gate + nested phase-2 sampling

Scientific parent population remains one representative diagnostic series.

Expensive predictors can be measured selectively if:

- source denominator known;
- sampling fractions known;
- weighting/reconstruction valid.

---

## 7.6 Diagnostic multiple-gate / two-gate case-control

Cases and controls recruited separately.

Two different threats:

1. **base-rate distortion**;
2. **spectrum distortion**.

Prevalence/intercept correction can sometimes repair the first under assumptions.

It cannot repair missing mild cases, diagnostic mimics or nonrepresentative controls.

---

# 8. Predictor-time rule

For every prediction task:

> predictor must be available by the intended prediction time.

Future information used at baseline is leakage.

If later information is legitimately used:

> prediction startpoint must move forward or the design must be explicitly dynamic.

Event timestamp and information-availability timestamp are not always the same.

---

# 9. Canonical model lifecycle

`target definition → development → apparent performance → internal validation → final model → IECV/external validation → decision utility → optional update/version → revalidation → impact → deployment monitoring`

Each phase answers a different question.

---

# 10. Development

Development includes **every data-dependent step**:

- candidate predictors;
- preprocessing;
- transformations;
- feature engineering;
- imputation learned from data;
- selection;
- algorithm choice;
- tuning;
- hyperparameters;
- threshold selection if learned;
- final model fitting.

Data used for any of these are development data.

A dataset called “validation” or “test” by authors is not genuinely independent if it influenced choices.

---

# 11. Apparent performance

Performance estimated in the same observations used to build the model.

Legitimate descriptive quantity, but:

> not independent validation.

Often optimistic.

---

# 12. Internal validation

Goal:

> estimate reproducibility/optimism within the development source population.

Forms:

- bootstrap;
- k-fold CV;
- repeated CV;
- nested CV;
- random split/holdout.

Rules:

1. full development pipeline must occur inside resampling;
2. feature selection before CV can leak information;
3. random split of one source remains internal;
4. internal validation does not establish transportability.

---

# 13. Internal-external validation

Uses meaningful natural clusters:

- sites;
- studies;
- regions;
- labs.

Hold out one cluster, develop on others, rotate.

IECV:

- tests cross-cluster heterogeneity/generalizability;
- is not ordinary random CV;
- is still distinct from later truly independent external validation.

---

# 14. External validation

Apply **fixed original model** to new relevant data not used in development.

Dimensions can include:

- temporal;
- geographical;
- setting;
- population;
- measurement process.

Key rule:

> independence is functional, not merely “different file”.

A validation dataset can be independent but irrelevant to the intended target population.

---

# 15. Model updating and versioning

Sequence:

`Model v1 → unchanged evaluation → diagnose failure → update → Model v2 → evaluate v2`

Possible updates:

- intercept/baseline recalibration;
- calibration slope;
- partial coefficient revision;
- full refit;
- extension with new predictors.

Any prediction-function change:

> creates a new model version.

Update data become development data for the new version.

Same-data post-update performance is not independent external validation.

---

# 16. Static prediction vs dynamic prediction vs continual model updating

## Static prediction

One prediction startpoint.

No formal revision using later participant history.

---

## Dynamic prediction

Participant's prediction is updated as new individual information accumulates.

Landmark structure:

`landmark s + history through s → new conditional prediction`

Possible approaches:

- landmarking;
- joint longitudinal-event models;
- time-updated survival;
- ML sequence models;
- multistate methods.

Critical indexing:

> dynamic performance belongs to **landmark + horizon**.

---

## Continual model updating

The **prediction function itself** changes as deployment data accumulate over calendar time.

Examples:

- periodic recalibration;
- trigger-based update;
- online learning.

Critical distinction:

> dynamic prediction ≠ continual model updating.

A dynamic model can be frozen.

A static model can be recalibrated monthly.

---

# 17. Dynamic horizon architecture

## Fixed final horizon

Same final target time U from different landmarks.

Prediction window shrinks as landmark advances.

## Sliding horizon

Same future width w from each landmark.

Final target time moves as `s + w`.

These answer different questions and performance is not automatically comparable.

---

# 18. Performance architecture

No single metric defines model quality.

Every performance record should attach:

> model version + target/estimand + population/setting + calendar period + validation phase + horizon + sampling design.

---

# 19. Binary probability models

Core dimensions:

1. calibration;
2. discrimination;
3. overall performance/error;
4. threshold-specific classification;
5. decision utility.

Important:

- AUC ≠ calibrated probability;
- sensitivity/specificity ≠ full probabilistic evaluation;
- PPV/NPV depend on prevalence;
- threshold metrics require a real threshold/decision.

---

# 20. Continuous prediction

Core dimensions:

- calibration-in-the-large / mean bias;
- calibration slope;
- calibration curve;
- MSE/RMSE;
- MAE;
- residual error;
- R².

Important:

- high R²/correlation ≠ small individual error;
- agreement/interchangeability is adjacent but distinct;
- Bland–Altman can complement prediction validation, not replace it.

---

# 21. Multicategory prediction

Need:

- coherent probability vector;
- category-specific calibration;
- global/pairwise discrimination;
- overall probability performance.

Hard class accuracy loses probability information.

Ordinal model assumptions are model choices, not outcome definitions.

---

# 22. Time-to-event / complex-event prediction

Performance must match:

- horizon;
- censoring;
- competing-risk estimand;
- recurrent-event target;
- multistate target.

Examples:

- cumulative incidence calibration;
- horizon-specific AUC;
- event-count prediction;
- transition/state-occupation probabilities.

One global c-index cannot automatically validate all these targets.

---

# 23. Multiple-outcome prediction

Distinguish:

- marginal risk;
- composite risk;
- competing risk;
- joint risk.

Good marginal calibration does not prove good joint calibration.

Do not calculate:

`P(A and B) = P(A) × P(B)`

unless conditional independence is justified.

---

# 24. Decision utility vs impact

## Prediction performance

> Does model predict accurately?

## Decision utility

> Would using model at a threshold plausibly improve decisions versus alternatives?

Examples:

- decision curve;
- net benefit.

## Impact

> Does actual model-guided use change outcomes/process/harm/resources?

Requires intervention-effect evidence.

These are separate layers.

---

# 25. Factual prediction under treatment/management

Ordinary prognosis usually predicts outcomes under the treatment/management policy occurring in the data.

Treatment policy is therefore part of setting.

Baseline treatment can be an ordinary factual predictor.

Its coefficient is not automatically causal.

---

# 26. Treatment drop-in and post-startpoint management

Treatment started/changed after T0 is future information for a baseline prediction.

It cannot simply be inserted as a baseline predictor.

Options:

- move prediction time forward;
- dynamic prediction;
- explicit counterfactual methodology;
- other appropriate longitudinal methods.

---

# 27. Counterfactual prediction

Target:

`E[Y^a | X]`

asks about outcome under a specified intervention strategy.

Requires causal identification assumptions such as, depending on setting:

- consistency;
- exchangeability;
- positivity.

Standard predicted-vs-observed validation does not directly validate an unobserved counterfactual outcome.

---

# 28. Treatment-effect prediction

Question:

> How much better/worse would outcome be under A versus B for this person?

This requires a contrast of potential outcomes.

Therefore:

> high prognostic risk ≠ high treatment benefit.

Detailed individualized treatment-effect methodology belongs to causal/intervention-effect branch, not ordinary prognosis.

---

# 29. Deployment feedback

If:

`high predicted risk → intervention → event prevented`

then future observed outcomes are partly caused by model-guided action.

Consequences:

- naive monitoring can misread success as calibration failure;
- naive retraining can weaken useful predictors;
- model-triggered actions and uptake must be recorded.

---

# 30. Post-deployment lifecycle

Deployment is not terminal.

Possible state:

`deploy → monitor → maintain / investigate / update / rollback / suspend / retire`

Monitor separately:

### Data/process signals

- missingness;
- feature distributions;
- data latency;
- measurement/software changes;
- prediction distribution.

### Outcome-based performance

- calibration;
- discrimination;
- error;
- utility.

### Impact/process

- action uptake;
- workflow behavior;
- harms/resources;
- intervention feedback.

Data drift ≠ automatically performance drift.

---

# 31. Diagnostic prediction vs DTA

## Diagnostic prediction model

Primary target:

> individual current probability/value/category.

Needs prediction-model lifecycle and performance.

## DTA

Primary target:

> accuracy of fixed index test relative to reference standard.

A fixed diagnostic model can become an index test, especially after thresholding.

But development of the model involves overfitting/tuning/calibration questions beyond ordinary DTA.

---

# 32. Diagnostic sampling crosswalk

If diagnostic probability model is trained/evaluated in case-enriched data:

record:

- intended-use prevalence;
- analyzed sample prevalence;
- source gate structure;
- sampling fractions;
- spectrum representativeness.

Critical rule:

> base-rate correction can sometimes repair probability scale; it cannot repair spectrum mismatch.

---

# 33. Current continuous-value prediction vs measurement-property evidence

Example:

`submaximal variables → estimated current VO₂max`

This is current-value prediction.

If fixed estimate is compared with directly measured CPET:

the study may simultaneously contain:

- external prediction validation;
- criterion-validity/agreement evidence.

Rules:

1. criterion/reference is not automatically error-free truth;
2. protocol/device/software define the target;
3. correlation alone is insufficient;
4. interchangeability and calibration are different questions.

---

# 34. Screening and monitoring labels

These labels do not determine scientific family.

A screening/monitoring model can be:

- diagnostic/current;
- prognostic/future;
- dynamic.

Classify from target time and outcome architecture.

---

# 35. AI / ML / regression boundary

Algorithm family does not define scientific design.

The same lifecycle applies to:

- regression;
- trees;
- random forests;
- boosting;
- neural networks;
- other ML/AI.

Classification follows:

> target + data architecture + lifecycle phase + performance evidence.

---

# 36. Canonical decision tree

## Step 1 — What is being asked?

### Population-average future outcome?
→ overall prognosis.

### Association of one/few baseline factors with future outcome?
→ prognostic-factor study.

### Individual current/future prediction from combined predictors?
→ prediction-model study.

### Accuracy of fixed diagnostic test?
→ DTA.

### Measurement property/agreement?
→ measurement-property study.

### Does using model improve outcomes?
→ intervention-effect / model-impact study.

---

## Step 2 — When is target relative to prediction time?

### Current / zero horizon
→ diagnostic/current-outcome prediction.

### Future / non-zero horizon
→ prognostic prediction.

---

## Step 3 — What is outcome architecture?

Choose explicitly:

- continuous;
- binary;
- nominal;
- ordinal;
- first event;
- competing risks;
- recurrent events;
- multistate;
- multiple marginal;
- composite;
- joint combination.

---

## Step 4 — Static or dynamic individual prediction?

### One prediction time
→ static.

### Repeated predictions using new participant history
→ dynamic.

---

## Step 5 — What data source / sampling design generated evidence?

Record separately:

- prospective/retrospective cohort;
- RCT source data;
- EHR/registry/claims;
- multicentre clusters;
- case-cohort;
- NCC;
- class-balanced sample;
- diagnostic one-gate/two-gate.

---

## Step 6 — Where is the model in lifecycle?

- development;
- apparent;
- internal validation;
- IECV;
- external validation;
- update/extension;
- revalidation;
- deployment monitoring;
- impact.

---

## Step 7 — What performance target is required?

Match metric to:

- outcome;
- horizon;
- probability/value target;
- decision threshold;
- sampling design.

---

## Step 8 — Is treatment merely context or part of hypothetical target?

### Observed/current management
→ factual prediction.

### Outcome under specified intervention
→ counterfactual prediction.

### Difference between treatment strategies
→ causal treatment-effect prediction.

---

# 37. Fitness/exercise example matrix

| Research question | Canonical classification |
|---|---|
| Average 12-week strength gain in novices | Overall prognosis — continuous |
| Does baseline training age predict future strength gain? | Prognostic-factor study |
| Predict individual's 12-week strength gain | Prognostic continuous prediction |
| Predict 12-week dropout probability | Prognostic binary prediction |
| Predict time to first injury | First-event survival prediction |
| Predict injury before permanent training cessation | Competing-risk prediction |
| Predict number of injuries over 12 months | Recurrent-event prediction |
| Predict rehab → modified training → full return → reinjury | Multistate prediction |
| Predict injury and dropout separately | Multiple marginal outcomes |
| Predict injury OR dropout | Composite-outcome prediction |
| Predict probability of both injury AND dropout | Joint-risk prediction |
| Predict no/partial/high response | Ordinal multicategory prediction |
| Diagnose current injury probability | Binary diagnostic prediction |
| Classify current injury grade | Ordinal diagnostic prediction |
| Estimate today's VO₂max from submax test | Current continuous-value prediction |
| Estimate today's 1RM from load-velocity data | Current continuous-value prediction |
| Assess repeatability of velocity sensor | Measurement reliability |
| Compare fixed estimated 1RM with direct 1RM | Prediction validation + agreement layer |
| Assess sensitivity/specificity of fixed injury score threshold | DTA layer |
| Recompute injury risk weekly using new training history | Dynamic prediction |
| Recalibrate deployed dropout model every quarter | Periodic model updating |
| Ask whether high-risk trainees benefit more from extra coaching | Treatment-effect / causal heterogeneity question |
| Test whether model-guided coaching reduces dropout | Impact/effectiveness intervention study |

---

# 38. Canonical minimum study record

For any prediction/prognosis study, extract:

1. scientific purpose;
2. model/equation identifier + version;
3. target population;
4. setting;
5. prediction startpoint;
6. target time/horizon;
7. outcome architecture;
8. exact estimand;
9. predictor availability boundary;
10. data source;
11. source study design;
12. sampling mechanism;
13. treatment/management policy;
14. static/dynamic prediction;
15. development/evaluation phase;
16. internal validation method;
17. external validation dimension;
18. performance dimensions;
19. decision threshold/utility if relevant;
20. model update/version history;
21. deployment state;
22. relevant DTA/measurement overlap;
23. target/reference measurement definition;
24. applicability/transportability issues;
25. unresolved statistical/RoB issues.

---

# 39. Canonical “do not confuse” list

1. prognosis ≠ causation;
2. prognostic factor ≠ prediction model;
3. multivariable regression ≠ prediction-model study;
4. AI/ML ≠ design family;
5. registry/EHR ≠ study design;
6. diagnostic ≠ automatically DTA;
7. current prediction ≠ future prognosis;
8. multicategory ≠ multiple outcomes;
9. competing risk ≠ all multiple outcomes;
10. first-event survival ≠ recurrent-event burden;
11. multistate ≠ multicategory endpoint;
12. composite ≠ joint risk;
13. apparent performance ≠ validation;
14. random split ≠ external validation;
15. IECV ≠ ordinary CV;
16. fixed-model validation ≠ updating;
17. updated model ≠ same model version;
18. dynamic prediction ≠ continual retraining;
19. calibration ≠ discrimination;
20. AUC ≠ probability accuracy;
21. decision utility ≠ real-world impact;
22. prognostic risk ≠ treatment benefit;
23. factual prediction ≠ counterfactual prediction;
24. current-value estimation ≠ direct measurement;
25. correlation ≠ agreement/interchangeability;
26. base-rate correction ≠ spectrum correction.

---

# 40. Deferred methodological topics

The following remain real but are intentionally routed outside RES-02 design taxonomy:

1. exact model-development sample-size methods;
2. exact external-validation sample size;
3. missing-data methods;
4. shrinkage/penalization details;
5. exact calibration formulas;
6. exact discrimination formulas;
7. censoring/weighting estimators;
8. left/interval censoring and delayed entry;
9. recurrent-event performance mathematics;
10. multistate estimation mathematics;
11. competing-risk estimator details;
12. individual prediction intervals;
13. measurement-error / errors-in-variables models;
14. formal fairness/equity metrics;
15. detailed risk-of-bias appraisal;
16. exact drift-detection algorithms;
17. online-learning algorithms;
18. detailed counterfactual/causal estimators;
19. individualized treatment-effect algorithms;
20. detailed decision-analytic utility with multiple outcomes;
21. detailed Bland–Altman variants;
22. detailed measurement-property statistics.

These are **not forgotten gaps**; they are ownership/dependency decisions.

---

# 41. Source-status constraints preserved

As last audited in PASS-06B23:

1. current accessible Cochrane Prognosis Handbook Chapters 1–3 are **Draft March 2026**;
2. forthcoming print-book status must not be treated as current accessible final text;
3. TRIPOD+AI remains the current general reporting framework;
4. PROBAST+AI remains current prediction-model quality/RoB/applicability tool;
5. Cochrane DTA Handbook current version = **2.0.1 (2026)**;
6. QUADAS-3 current recommended tool version = **1.2**.

Future use must version-check mutable frameworks again if materially later.

---

# 42. Prediction branch closure state

## Granular taxonomy coverage

**Complete enough for RES-02 structural use.**

## Gap audits

Completed repeatedly:

- PASS-06B13;
- PASS-06B17;
- PASS-06B21;
- PASS-06B23.

## Blocking design-family gaps known now

**None.**

## Structural synthesis

**Completed in this PASS.**

## RES-02 overall

**NOT CLOSED.**

Prediction/prognosis is only one branch of the larger study-design topic.

---

# 43. Next RES-02 branch

The next unresolved branch inherited from PASS-06A / RES-02 roadmap is:

> **mechanistic / explanatory study structures**

This branch must be re-researched granularly and must not restore deleted marathon PASS-06C conclusions from history.

## Next micro-pass

**RES-02 / PASS-06C1 — mechanistic/explanatory study structures: define scope and taxonomy; distinguish mechanism questions from intervention effectiveness, etiologic association, mediation, physiology experiments and purely descriptive studies; identify the minimum design families requiring deeper passes.**

STOP after this saved structural synthesis.
