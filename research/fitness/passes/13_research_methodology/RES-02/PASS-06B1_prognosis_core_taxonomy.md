# RES-02 / PASS-06B1 — Prognosis core taxonomy and longitudinal structure

Статус: **COMPLETE MICRO-PASS — RES-02 remains RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Почему этот micro-pass существует

Пользователь явно вернул рабочую точку к состоянию **после PASS-06A** и потребовал заново проходить prognosis/prediction без попытки закрыть всю ветвь одним сообщением или одним непрерывным заходом.

Поэтому прежний полный файл `PASS-06B_prognosis_prediction_designs.md` не используется как авторитетный результат для текущей revalidation. Он сохраняется как исторический материал, но новая ветвь PASS-06B строится заново granular-блоками.

---

## Scope этого micro-pass

Только:

1. что является prognosis research;
2. обязательная longitudinal structure;
3. роль health state / target population;
4. роль startpoint;
5. future outcome;
6. prediction horizon;
7. setting / standards of care;
8. три основные prognosis-purpose family:
   - overall prognosis;
   - prognostic factor;
   - prediction model;
9. различие prognostic factor vs prediction model;
10. различие prediction vs causal/etiologic question;
11. различие prognostic factor vs treatment-effect modifier;
12. граница prognostic vs diagnostic prediction по времени;
13. минимальный project structural record для дальнейших prognosis studies.

Не покрывается здесь:

- prospective vs retrospective cohort designs in detail;
- reuse of randomized-trial data;
- registry / EHR / administrative data;
- nested case-control / case-cohort / class-balanced sampling;
- weighting / recovery of absolute risks;
- prediction-model development;
- internal validation;
- internal-external validation;
- external validation;
- model updating;
- model-impact studies in detail;
- performance measures / calibration / discrimination;
- detailed risk-of-bias appraisal;
- detailed statistics;
- final prognosis/prediction synthesis.

---

# Sources checked

## 1. Cochrane Handbook for Systematic Reviews of Prognosis Research and Prediction Models

Current official Cochrane Handbook landing checked 2026-11-17.

The Handbook is the new Cochrane methodological framework for systematic reviews of:

- overall prognosis;
- prognostic factors;
- prediction models.

Current online chapters are drafts for Version 1 / 2026.

https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models

### Chapter 1 — Prognosis and types of prognosis research in healthcare

Moons KGM, Hayden J, Williams K, Riley RD.  
Draft version: **March 2026**.

https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-1-prognosis-and-types-prognosis-research-healthcare

### Chapter 2 — Study designs and data sources in prognosis research

Moons KGM, Riley RD, Damen JAA.  
Draft version: **March 2026**.

https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-2-study-designs-and-data-sources-prognosis-research

## 2. PROGRESS framework

Hemingway H, Croft P, Perel P, et al.  
Prognosis research strategy (PROGRESS) 1: A framework for researching clinical outcomes.  
BMJ. 2013;346:e5595.

The PROGRESS framework distinguishes:

1. fundamental/overall prognosis;
2. prognostic factor research;
3. prognostic model research;
4. stratified medicine / predictors of treatment effect.

https://www.bmj.com/content/346/bmj.e5595

---

## Source-status note

1. The Cochrane Prognosis Handbook is currently the strongest project-level methodological source for this taxonomy.
2. Chapters 1 and 2 checked here are explicitly marked **draft version (March 2026), subject to change before finalization**.
3. Therefore project conclusions below are high-confidence where they reflect stable, long-standing prognosis concepts also consistent with PROGRESS, but exact Handbook wording/version must be rechecked later if a final Version 1 replaces these drafts.
4. This pass does not use the older Cochrane Prognosis FAQ as the main authority because the new 2026 Handbook supersedes the older situation in which no dedicated prognosis handbook existed.

---

# Part A — What prognosis research actually is

## 1. Prognosis = prediction of future outcome from current information

### Established finding
**Confidence: HIGH**

The defining feature is temporal.

A prognosis question asks what outcome is expected **after a defined startpoint**, using information available at or before that startpoint.

Canonical structure:

`defined health state / target population → STARTPOINT → prediction horizon / follow-up → future outcome`

This temporal structure is not optional metadata.

If there is no meaningful separation between prediction time and outcome time, the question may instead be:

- diagnostic;
- cross-sectional;
- measurement;
- etiologic;
- another study family.

---

## 2. Five core elements define a prognosis question

### Established finding
**Confidence: HIGH**

Current Cochrane Chapter 1 identifies:

1. individuals defined by a health state / condition;
2. startpoint;
3. future outcome;
4. prediction horizon;
5. setting, including healthcare system / standards of care.

Project consequence:

A label such as:

> “study of predictors of strength”

is insufficient.

A prognosis-classifiable question needs something closer to:

> Among [target population / health state] at [startpoint], what future [outcome] occurs by [prediction horizon] in [setting]?

---

# Part B — Health state and target population

## 3. Prognosis is conditional on who enters the startpoint

### Established finding
**Confidence: HIGH**

The target population is not merely a demographic sample.

It is defined by the health state or condition **at the moment prognosis is made**.

Examples structurally include:

- at diagnosis;
- after surgery;
- at hospital admission;
- after completion of a treatment phase;
- at a routine health check;
- at a defined age or monitoring visit.

### Fitness/exercise translation

Potential project examples:

- novice lifters at the start of a resistance-training block;
- recreationally trained adults after a defined layoff;
- athletes at return-to-training clearance after injury;
- participants at baseline before a 12-week program.

Whether these are valid prognosis questions depends on the rest of the structure, especially future outcome and horizon.

---

# Part C — Startpoint is an inferential anchor

## 4. Startpoint is not merely “baseline”

### Established finding
**Confidence: HIGH**

The startpoint is the moment at which prognosis is conceptually made.

It determines:

- which information is available for prediction;
- when follow-up begins;
- what counts as future;
- what prediction horizon means;
- which target population is being described.

### Project rule

Do not accept “baseline” as sufficient extraction unless the actual scientific startpoint is clear.

Two studies can both say “baseline” while referring to different clinical/training states and therefore different prognosis questions.

---

## 5. Predictors must be available by the prediction moment

### Established finding
**Confidence: HIGH**

For ordinary prognostic factor/prediction-model research, a candidate factor or predictor must be measured/available **before or at the prognosis startpoint**.

A variable measured only after the future course has already begun cannot automatically be treated as a baseline predictor for the original prognosis question.

### Project extraction

Record separately:

1. intended prognosis startpoint;
2. actual predictor measurement time;
3. whether predictor information would be available at intended use.

This timing distinction becomes critical later for model applicability and leakage.

---

# Part D — Prediction horizon is part of the estimand

## 6. “Future outcome” without horizon is incomplete

### Established finding
**Confidence: HIGH**

Cochrane explicitly treats the prediction horizon as part of prognosis.

The same target population can have very different:

- absolute outcome probabilities;
- prognostic factor effects;
- prediction-model performance

at:

- one week;
- one month;
- six months;
- one year;
- ten years.

### Project rule

Do not collapse results across horizons merely because:

- population;
- predictor;
- outcome label

are otherwise identical.

The prediction horizon changes the scientific target.

---

# Part E — Setting is part of prognosis, not a cosmetic descriptor

## 7. Prognosis is context-dependent

### Established finding
**Confidence: HIGH**

Cochrane explicitly includes setting, health system and standards of care in the prognosis definition.

Prognosis can differ by:

- level of care;
- treatment availability;
- monitoring;
- geography;
- calendar time;
- prevailing standards of care.

### Exercise/fitness translation

Future outcomes can similarly depend on:

- supervised vs unsupervised training;
- equipment access;
- program structure;
- adherence environment;
- coaching availability;
- concurrent rehabilitation/medical care.

Project implication:

Transporting a prognosis estimate from one implementation context to another requires applicability judgement.

Detailed external-validity appraisal is deferred.

---

# Part F — Three prognosis-purpose families

## 8. Type I — Overall prognosis

### Established finding
**Confidence: HIGH**

Overall prognosis asks:

> What is the average future outcome in this defined population?

Targets can include:

- average continuous outcome value at a future time;
- cumulative incidence / event probability;
- incidence or hazard over follow-up.

Canonical structure:

`target population at startpoint → follow-up → average future outcome`

It does **not** require a prognostic factor.

### Exercise example

> Among novice lifters beginning a defined 12-week program, what is the average strength increase at 12 weeks?

This is structurally overall prognosis if the aim is descriptive forecasting of the population under the observed context, not causal effect estimation of the program versus a counterfactual.

---

## 9. Type II — Prognostic factor

### Established finding
**Confidence: HIGH**

Prognostic factor research asks:

> Is a characteristic available at/before the startpoint associated with the future outcome?

Canonical structure:

`factor measured at/before startpoint → follow-up → future outcome association`

Potential factors include:

- demographics;
- symptoms;
- test results;
- disease/training state;
- environmental variables;
- existing measurements.

### Core target

The target is the **factor–future-outcome association** or added prognostic value.

This can be:

- unadjusted;
- adjusted for other prognostic factors.

---

## 10. Type III — Prediction model

### Established finding
**Confidence: HIGH**

Prediction-model research asks:

> Can multiple predictors be combined to generate an individualized prediction of a future outcome?

Canonical conceptual structure:

`multiple predictors at/before startpoint → prediction function/model → individualized future outcome prediction`

The predicted target may be:

- future continuous value;
- future event probability;
- time-to-event risk;
- another individual future outcome quantity.

Detailed model-development/evaluation phases are deferred to later micro-passes.

---

# Part G — Prognostic factor != prediction model

## 11. Multivariable regression does not define a prediction-model study

### Established finding
**Confidence: HIGH**

This is a critical taxonomy correction.

Cochrane explicitly shows that prognostic-factor studies may use multivariable regression to estimate an **adjusted prognostic factor effect**.

Prediction-model studies instead target the **combined prediction function** and individualized predictions.

Therefore:

> presence of multiple covariates, multivariable regression, machine learning or an algorithm is not by itself a study-design/purpose classification.

### Decision rule

Ask:

1. Is the target a particular factor’s association / added prognostic value?
   - prognostic-factor study.

2. Is the target a combined function that makes individual outcome predictions?
   - prediction-model study.

### Consequence

A paper reporting adjusted odds ratios for ten baseline variables is not automatically a prediction-model paper.

A paper fitting a model with those same ten variables to estimate each individual’s 12-month outcome probability is prediction-model research.

---

# Part H — Prognosis != causation

## 12. Prediction asks “what is likely?”, not necessarily “why?”

### Established finding
**Confidence: HIGH**

Current Cochrane guidance explicitly separates ordinary prognosis research from causal/etiologic research.

A factor may improve forecasting without causing the outcome.

Project rule:

> `predicts outcome` does not imply `changing predictor will change outcome`.

This distinction is essential for later training decisions.

Example:

If baseline sleep quality predicts training adherence, that alone does not establish that experimentally changing sleep will cause the predicted improvement in adherence.

A causal intervention recommendation needs causal/intervention evidence.

---

## 13. Causal factor can be prognostic; prognostic factor need not be causal

### Established finding
**Confidence: HIGH**

Cochrane's direction is:

- a causal factor that affects future outcome is also prognostic;
- a prognostic factor may merely be associated with outcome and need not be causal.

### Terminology rule

Avoid treating ambiguous literature terms such as:

- risk factor;
- determinant;
- risk indicator

as proof that a study is causal.

Classify from the study’s target claim and structure.

---

# Part I — Prognostic factor != treatment-effect modifier

## 14. Predicting outcome is different from predicting differential treatment response

### Established finding
**Confidence: HIGH**

A variable can predict poor outcome in everyone yet have no relationship to how much a treatment helps.

Treatment-effect modification asks whether:

> treatment effect differs across values of a factor.

This requires an intervention-effect / interaction framework.

Cochrane notes that this fourth PROGRESS family aligns more closely with intervention methodology and randomized comparisons.

### Project rule

Do not infer:

> “high-risk participants benefit more from intervention”

merely because they have worse prognosis.

Route:

- future outcome association → prognosis;
- differential causal treatment effect → effect modification / intervention branch.

---

# Part J — Prognostic vs diagnostic prediction

## 15. Time separates prognostic and diagnostic prediction models

### Established finding
**Confidence: HIGH**

Cochrane distinguishes:

- **diagnostic prediction model** → predicts current/present condition or outcome;
- **prognostic prediction model** → predicts a future outcome after the startpoint.

The methods may overlap, but scientific time structure differs.

### Project rule

A multivariable model classifying a condition present now does not enter the prognostic branch simply because it is called a “prediction model”.

This also preserves the distinction from PASS-06A diagnostic-accuracy structures.

---

# Part K — Scientific purpose, study design and data source must stay separate

## 16. Purpose is not the same as design

### Established finding
**Confidence: HIGH**

Cochrane Chapter 2 explicitly distinguishes prognosis study **designs** and **data sources**.

The same prognosis purpose may be studied using different longitudinal structures and data sources.

For this micro-pass, the critical project architecture is:

1. **scientific purpose**
   - overall prognosis;
   - prognostic factor;
   - prediction model;

2. **temporal target**
   - startpoint;
   - prediction horizon;
   - future outcome;

3. **study structure**
   - to be classified in subsequent micro-passes;

4. **data source**
   - to be classified separately in subsequent micro-passes.

### Project correction

Do not let labels such as:

- registry study;
- EHR study;
- cohort dataset;
- machine-learning study

replace the scientific-purpose classification.

---

# Part L — Minimal structural record produced by PASS-06B1

## 17. Core prognosis record

For any study that may be prognosis research, record:

1. Prognosis purpose present? YES/NO
2. Purpose family:
   - overall prognosis;
   - prognostic factor;
   - prediction model;
   - treatment-effect modifier / other route;
3. Target population / health state
4. Setting
5. Startpoint
6. Predictor/factor information available at or before startpoint? YES/NO/NA
7. Outcome
8. Outcome is future relative to startpoint? YES/NO
9. Prediction horizon
10. Main inferential target:
   - average population outcome;
   - factor–outcome association;
   - individualized combined prediction;
   - causal effect;
   - treatment-effect interaction;
11. Self-applied study label
12. Project classification
13. Ambiguity / missing timing information

This record is deliberately design-agnostic for now.

Prospective/retrospective/nested/trial/EHR structures are added in later micro-passes.

---

# Part M — Exercise/fitness examples for classification

## 18. Overall prognosis

Question:

> Among adults beginning rehabilitation after a defined injury-clearance point, what proportion returns to unrestricted training within 12 weeks?

Classification:

> overall prognosis.

Why:

- defined population;
- startpoint;
- future event;
- explicit horizon;
- average population probability.

---

## 19. Prognostic factor

Question:

> Does baseline training history predict strength gain over the next 16 weeks?

Classification:

> prognostic-factor study

if the target is the association between baseline training history and future strength gain.

Not automatically causal.

---

## 20. Prediction model

Question:

> Can baseline training age, initial strength, body mass, sleep and program adherence indicators be combined to estimate an individual’s probability of reaching a predefined strength target within 16 weeks?

Classification:

> prognostic prediction-model study

if the output is an individualized future prediction from the combined predictors.

---

## 21. Causal intervention question

Question:

> Does increasing sleep duration improve 16-week strength gains?

Classification:

> not ordinary prognosis.

This is a causal/intervention-effect question.

---

## 22. Treatment-effect modifier question

Question:

> Is the effect of high-volume versus low-volume training different in participants with high versus low baseline strength?

Classification:

> treatment-effect heterogeneity / interaction question.

Baseline strength may also be prognostic, but this particular claim is about differential intervention effect.

---

# Practical rules produced by PASS-06B1

1. Prognosis is inherently longitudinal.
2. A prognosis question requires a meaningful startpoint and future outcome.
3. Prediction horizon is part of the scientific target.
4. Setting/context is part of prognosis.
5. Overall prognosis estimates population-average future outcome.
6. Prognostic-factor studies target associations between startpoint factors and future outcomes.
7. Prediction-model studies target individualized predictions from multiple predictors.
8. Multivariable regression alone does not make a prediction-model study.
9. Machine learning is an analysis method, not a prognosis-purpose label.
10. Predictor availability must be assessed relative to the intended prediction startpoint.
11. Prognostic value does not establish causality.
12. A prognostic factor is not automatically an intervention target.
13. A prognostic factor is not automatically a treatment-effect modifier.
14. Diagnostic and prognostic prediction are separated primarily by time: present/current vs future outcome.
15. Scientific purpose, study design and data source must be recorded separately.
16. Generic labels such as “risk factor study”, “registry study”, “AI study” or “multivariable study” are insufficient for taxonomy.

---

# What remains unresolved after PASS-06B1

The prognosis/prediction branch is **not complete**.

Still requires separate deep blocks on at least:

1. prospective vs retrospective cohort structures;
2. randomized-trial data reused for prognosis;
3. routine/EHR/registry data as data sources;
4. nested case-control / case-cohort / class-balanced structures;
5. absolute-risk recovery and weighting;
6. non-nested case-control limitations;
7. prediction-model development;
8. internal validation;
9. internal-external validation;
10. external validation;
11. model updating/extending;
12. model-impact boundary in more detail;
13. detailed structural records for each family;
14. prognosis/prediction gap audit.

## Next micro-pass

**RES-02 / PASS-06B2 — longitudinal cohort structures for prognosis: prospective cohort, retrospective cohort, startpoint reconstruction, predictor timing, follow-up and reuse of randomized-trial data.**

STOP after this saved micro-pass.
