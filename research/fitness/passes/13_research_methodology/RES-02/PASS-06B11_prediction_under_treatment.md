# RES-02 / PASS-06B11 — Prediction under treatment and management

Статус: **COMPLETE MICRO-PASS — RES-02 remains RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. factual prognosis under observed treatment/management;
2. treatment policy as part of prognosis context;
3. baseline treatment status as predictor/context;
4. post-startpoint treatment and treatment drop-in;
5. treatment paradox;
6. why treatment-aware factual prediction is not counterfactual prediction;
7. treatment-naïve / no-treatment risk as a counterfactual target;
8. prediction under specified treatment strategies;
9. model deployment feedback / “victim of own success” problem;
10. transportability when treatment policy changes;
11. boundary between ordinary prognostic prediction and causal/counterfactual prediction;
12. boundary between prognostic prediction and individualized treatment-effect prediction;
13. counterfactual performance evaluation;
14. structural record for treatment-aware prognosis studies.

Не покрывается здесь:

- full causal-inference theory;
- target-trial emulation in detail;
- marginal structural model formulas;
- g-formula / IPTW estimators in detail;
- time-varying confounding mathematics;
- dynamic treatment regimes in detail;
- individualized treatment-effect estimation methodology in depth;
- causal forests / meta-learners;
- mediation;
- full treatment-effect heterogeneity taxonomy;
- final prognosis/prediction synthesis.

---

# Sources checked

## 1. Cochrane Handbook for Systematic Reviews of Prognosis Research and Prediction Models — Chapter 1

Moons KGM, Hayden J, Williams K, Riley RD.  
**Chapter 1: Prognosis and types of prognosis research in healthcare.**  
Draft version: **March 2026**.

Current official Cochrane chapter checked 2026-11-17.

Key boundary used:

- prognosis research in this Handbook concerns prediction/forecasting of future outcomes;
- it is not primarily causal/etiologic research;
- ordinary prognostic factors need not be causal;
- treatment-effect predictors/modifiers are a distinct question family and are better handled with intervention/causal methodology.

https://www.cochrane.org/authors/handbooks-and-manuals/cochrane-handbook-systematic-reviews-prognosis-research-and-prediction-models/prognosis-handbook-chapter-1-prognosis-and-types-prognosis-research-healthcare

### Source-status note

The Cochrane Prognosis Handbook remains a **draft March 2026** and must be version-checked again during closure/audit.

---

## 2. van Geloven et al. — Prediction meets causal inference

van Geloven N, Swanson SA, Ramspek CL, et al.  
**Prediction meets causal inference: the role of treatment in clinical prediction models.**  
Eur J Epidemiol. 2020;35:619–630.

Checked 2026-11-17.

Key concepts used:

- a prediction model's estimand must make treatment policy explicit;
- factual prediction can target outcomes under observed/usual treatment patterns;
- such predictions assume sufficiently similar treatment policies when transported;
- hypothetical/no-treatment prediction is counterfactual and requires causal assumptions;
- baseline treatment, future treatment and hypothetical treatment strategies are not interchangeable.

https://pmc.ncbi.nlm.nih.gov/articles/PMC7387325/

---

## 3. Sperrin et al. — treatment drop-in

Sperrin M, Martin GP, Pate A, et al.  
**Using marginal structural models to adjust for treatment drop-in when developing clinical prediction models.**  
Stat Med. 2018;37:4142–4154.

Checked 2026-11-17.

Key findings:

- a model intended to guide treatment initiation may need untreated/no-treatment risk;
- post-baseline treatment initiation (“treatment drop-in”) can change observed outcomes;
- ignoring effective treatment drop-in can make untreated risk prediction too low;
- simply restricting to untreated-at-baseline participants or including baseline treatment does not address later treatment initiation;
- causal methods are needed when targeting treatment-naïve counterfactual risk.

https://pmc.ncbi.nlm.nih.gov/articles/PMC6282523/

---

## 4. Treatment use in prognostic model research — systematic review

**Treatment use in prognostic model research: a systematic review of cardiovascular prognostic studies.**

Checked 2026-11-17.

Relevant methodological point:

- when prognostic models are intended to guide initiation of a treatment, the clinically relevant target may be outcome risk **without that treatment**;
- if high-risk participants receive effective post-baseline treatment, observed outcomes no longer equal untreated potential outcomes;
- treatment use was frequently handled inadequately in applied prognostic research.

https://pmc.ncbi.nlm.nih.gov/articles/PMC6460846/

---

## 5. Contemporary empirical treatment-drop-in study

**Treatment drop-in in a contemporary cohort used to derive cardiovascular risk prediction equations.**  
2024.

Checked 2026-11-17.

Empirical finding used only as an example:

- post-baseline preventive treatment was common and increased with baseline predicted cardiovascular risk;
- authors concluded that ignoring treatment drop-in could underestimate untreated CVD risk in higher-risk participants.

https://pubmed.ncbi.nlm.nih.gov/38960588/

This is **not** generalized to all domains; the direction/magnitude of bias depends on treatment effectiveness and allocation process.

---

## 6. Keogh & van Geloven — prediction under interventions

Keogh RH, van Geloven N.  
**Prediction Under Interventions: Evaluation of Counterfactual Performance Using Longitudinal Observational Data.**  
Epidemiology. 2024;35:329–339.

Checked 2026-11-17.

Key guidance:

- prediction under intervention asks what outcome risk would be if an individual followed a specified treatment strategy;
- evaluating such predictions in observational data is different from ordinary predictive validation because counterfactual outcomes are not simultaneously observed;
- naive restriction to individuals who happened to follow the strategy can introduce selection bias;
- counterfactual performance can require artificial censoring / weighting or other causal methods;
- calibration, discrimination and Brier-type quantities can be redefined for counterfactual targets.

https://pmc.ncbi.nlm.nih.gov/articles/PMC11332371/

---

## 7. Boyer et al. — estimating and evaluating counterfactual prediction models

**Estimating and Evaluating Counterfactual Prediction Models.**  
Stat Med. 2025;44:e70287.

Checked 2026-11-17.

Key current guidance:

- counterfactual prediction is needed when:
  - treatment policies differ between development and deployment;
  - or predictions under hypothetical interventions are themselves the target;
- the counterfactual target can be written conceptually as expected potential outcome under treatment strategy A=a conditional on prediction-time covariates;
- development/evaluation requires causal identification assumptions such as:
  - consistency;
  - conditional exchangeability;
  - positivity;
- covariates needed for causal identification can exceed the smaller predictor set ultimately used at deployment;
- ordinary factual performance evaluation does not automatically evaluate counterfactual performance.

https://pmc.ncbi.nlm.nih.gov/articles/PMC12503020/

---

## 8. Counterfactual prediction is not only for causal inference

Hernán MA, Hsu J, Healy B.  
2020 commentary.

Checked 2026-11-17.

Key conceptual point:

- a successful prediction model can change treatment behavior, which changes future predictor-outcome associations;
- ordinary factual models may therefore become “victims of their own success”;
- counterfactual targets can sometimes be more stable to changing treatment policies, but require stronger causal assumptions.

https://pmc.ncbi.nlm.nih.gov/articles/PMC7393612/

---

## 9. Explicit causal reasoning to prevent prognostic models becoming victims of their own success

Sperrin M, Jenkins DA, Martin GP, Peek N.  
2019.

Checked 2026-11-17.

Relevant concept:

- high predicted risk can trigger effective intervention;
- effective intervention lowers observed future risk;
- updating a naive factual model on these post-deployment outcomes can weaken or reverse useful predictor-outcome relations;
- treatment-naïve/counterfactual predictions can be considered when the model is specifically intended to trigger treatment.

https://pmc.ncbi.nlm.nih.gov/articles/PMC6857504/

---

## 10. Counterfactual prediction and individualized treatment effects

**Counterfactual clinical prediction models could help to infer individualized treatment effects in randomized controlled trials.**  
J Clin Epidemiol. 2020.

Used only for the conceptual boundary:

- predicted outcomes under treatment A and treatment B are distinct potential-outcome predictions;
- comparing those counterfactual predictions moves toward individualized treatment-effect estimation.

https://pubmed.ncbi.nlm.nih.gov/32464321/

---

## 11. Model-based treatment-effect estimation — current 2026 formalization

Meijerink et al.  
**Treatment effect estimation by comparing observed and predicted outcomes: conditions for valid inference and practical illustration.**  
2026.

Checked 2026-11-17.

Relevant current caution:

- using a prediction model to create counterfactual controls/treatment-effect estimates requires causal conditions including:
  - transportability;
  - treatment-assignment ignorability/exchangeability;
  - consistency;
  - positivity;
  - adequate model specification;
- many conditions are not fully empirically testable.

https://pubmed.ncbi.nlm.nih.gov/42498954/
https://pmc.ncbi.nlm.nih.gov/articles/PMC13397745/

---

# Part A — Ordinary prognosis is conditional on management context

## 1. A factual prognosis is a forecast under a data-generating policy

### Established finding
**Confidence: HIGH**

Ordinary prognostic prediction asks what outcome is likely to occur given baseline information and the management/treatment process that actually operates in the population.

Conceptually:

`X at T0 → observed future treatment/management policy → observed Y`

A fitted model may not explicitly include future treatment variables, but its observed outcome distribution is still generated **under those treatment patterns**.

### Project rule

Management/treatment policy is part of the prognosis **setting/context**, even when treatment is not an explicit predictor.

---

## 2. Factual risk is not treatment-free risk by default

### Established finding
**Confidence: HIGH**

Suppose:

- high-risk participants are more likely to receive effective treatment after T0;
- treatment lowers the future outcome risk.

Then observed outcomes reflect:

> baseline prognosis + treatment assignment + treatment effect.

Therefore the ordinary factual model estimates risk under the observed treatment process.

It does **not** automatically estimate:

> what risk would have been if nobody received treatment.

---

# Part B — Factual prediction can be exactly the correct target

## 3. Treatment-adjustment is not always required

### Established finding
**Confidence: HIGH**

If the practical question is:

> What is likely to happen under current usual care/current training management?

then factual prediction under current treatment patterns can be the appropriate estimand.

Examples:

- staffing/resource forecasting;
- expected event load under current system;
- counselling about likely outcome given ordinary contemporary management.

### Project rule

Do not assume that every model exposed to treatment during follow-up is invalid.

First specify:

> factual observed-care target or counterfactual treatment-specific target?

---

## 4. Factual prediction carries a treatment-policy transportability assumption

### Established finding
**Confidence: HIGH**

A factual model learned under one treatment policy can lose validity when transported to a setting/time where treatment patterns differ.

This can occur even if:

- baseline predictor distribution is similar;
- measurements are identical.

### Project extraction

Record:

1. development treatment/management policy;
2. validation/deployment treatment policy;
3. material differences in:
   - eligibility for treatment;
   - treatment uptake;
   - adherence;
   - effectiveness;
   - timing.

---

# Part C — Baseline treatment status

## 5. Baseline treatment can be an ordinary predictor

### Established finding
**Confidence: HIGH**

If treatment status is known at the prediction startpoint, it can be included as a predictor in a factual prognostic model.

Example:

> trainee already receiving physiotherapy at T0.

The prediction then conditions partly on that baseline treatment state.

### Important boundary

The model coefficient for baseline treatment does **not** automatically estimate the causal effect of treatment.

It may reflect:

- treatment effect;
- confounding by indication;
- severity;
- selection;
- other correlated management factors.

---

## 6. Baseline treatment predictor does not solve post-baseline treatment

### Established finding
**Confidence: HIGH**

Including baseline treatment status does not automatically handle participants who:

- initiate treatment later;
- stop treatment;
- switch treatment;
- change dose;
- receive treatment in response to evolving risk.

These post-startpoint events can alter the outcome after the prediction is made.

This is the treatment-drop-in problem when treatment is initiated during follow-up.

---

# Part D — Post-startpoint treatment cannot be a baseline predictor

## 7. Future treatment is unavailable at T0

### Established finding
**Confidence: HIGH**

For a baseline prognostic model:

> treatment initiated after T0

is future information.

It cannot legitimately be inserted as an ordinary baseline predictor unless the prediction task is redefined.

### Possible legitimate alternatives

1. **landmark/update prediction**
   - move prediction time forward to when treatment information is known;

2. **explicit treatment-strategy/counterfactual prediction**
   - predict outcome under a prespecified strategy;

3. **joint/dynamic modelling**
   - separate methodology, deferred.

---

## 8. Naively conditioning on future treatment can change the estimand and induce bias

### Established methodological principle
**Confidence: HIGH**

Post-baseline treatment may lie on pathways involving:

- baseline risk;
- evolving prognosis;
- clinical/behavioral decisions;
- outcome.

Treating it as a simple baseline covariate can:

- use unavailable information;
- block causal pathways;
- induce selection/collider problems;
- answer a different question.

### Project rule

Do not “adjust for treatment” mechanically.

First define the target prediction estimand.

---

# Part E — Treatment drop-in

## 9. Definition

### Established finding
**Confidence: HIGH**

Treatment drop-in occurs when a participant who is untreated at prediction time starts or changes an effective intervention during follow-up before outcome ascertainment.

Example:

`T0 untreated → high predicted/evolving risk → treatment starts at T1 → outcome at T2`

Observed Y reflects treatment.

---

## 10. Why treatment drop-in matters for treatment-guiding models

### Established finding
**Confidence: HIGH**

If the model is intended to decide **whether treatment should be started**, the desired risk may be:

> outcome risk if treatment is not started.

But development data may contain individuals who were later treated.

Their observed outcomes therefore do not equal their untreated potential outcomes.

---

# Part F — Treatment paradox

## 11. Core mechanism

### Established finding
**Confidence: HIGH**

The classic treatment paradox arises when:

1. prognostic factors identify participants at high untreated risk;
2. those factors increase probability of effective treatment;
3. treatment lowers observed event risk;
4. naive modelling sees weaker factor-outcome associations than existed without treatment.

Potential consequence:

> a model intended to estimate untreated risk can underestimate risk, especially among high-risk participants.

---

## 12. Bias direction is not universally fixed

### Important qualification
**Confidence: HIGH**

Underestimation is expected in the classic setting where:

- higher predicted risk triggers treatment;
- treatment is effective;
- the target is no-treatment risk.

But other structures can yield different bias patterns.

Direction depends on:

- who receives treatment;
- timing;
- treatment effectiveness;
- adherence;
- confounding;
- outcome;
- model form.

### Project rule

Do not encode:

> treatment always biases risk downward.

Encode the causal structure.

---

# Part G — Restricting to untreated-at-baseline participants is insufficient

## 13. Baseline restriction does not remove later treatment

### Established finding
**Confidence: HIGH**

Selecting only participants untreated at T0 prevents baseline treatment heterogeneity.

It does not prevent:

- treatment initiation at T1;
- time-varying treatment changes;
- risk-driven treatment during follow-up.

Sperrin et al. show that this can still bias no-treatment risk prediction.

---

# Part H — Treatment-aware factual prediction

## 14. Factual model can explicitly condition on baseline treatment

### Established finding
**Confidence: HIGH**

A model can predict:

> risk under observed care among people currently on/off treatment.

This can be legitimate factual prognosis.

### But it answers:

> What tends to happen to people with this treatment state under the subsequent management policy observed in the data?

It does not answer:

> What would happen to this same person if treatment were switched?

---

# Part I — Counterfactual / treatment-naïve prediction

## 15. Counterfactual prediction target

### Established finding
**Confidence: HIGH**

A counterfactual prediction asks about an outcome under a specified hypothetical intervention/strategy.

Conceptually:

`E[Y^a | X]`

where:

- `Y^a` = potential outcome under treatment strategy `a`;
- `X` = baseline/prediction-time information.

Examples:

- risk if nobody receives treatment;
- risk if everyone receives strategy A;
- risk if treatment begins when criterion X is met.

---

## 16. No-treatment risk is one counterfactual target

### Established finding
**Confidence: HIGH**

A treatment-guiding risk model may target:

> outcome risk if the person remains untreated over the specified horizon.

This is not simply a standard factual forecast when development data include treatment drop-in.

It is a counterfactual estimand.

---

# Part J — Counterfactual prediction requires causal identification assumptions

## 17. Ordinary prediction assumptions are not enough

### Established finding
**Confidence: HIGH**

From observational data, identifying risk under a hypothetical treatment strategy requires causal assumptions.

Current 2025 methods literature explicitly includes:

1. **consistency**
   - observed outcome under actually received strategy corresponds to the relevant potential outcome;

2. **conditional exchangeability**
   - treatment assignment is ignorable after conditioning on sufficient measured covariates;

3. **positivity**
   - each relevant treatment strategy has positive probability in required covariate strata.

Longitudinal strategies add stronger/time-varying requirements.

---

## 18. Prediction covariates and causal-adjustment covariates need not be identical

### Established finding
**Confidence: HIGH**

Boyer et al. 2025 make an important distinction:

- a larger covariate set may be needed during model development to identify the counterfactual treatment-outcome relation;
- the deployed prediction model may use a smaller subset of predictors available at runtime.

### Project rule

Do not force:

> every confounder required for causal identification must appear as an end-user predictor.

Separate:

1. identification covariates;
2. deployment predictors.

---

# Part K — Standard validation does not directly evaluate counterfactual risk

## 19. Fundamental missing-counterfactual problem

### Established finding
**Confidence: HIGH**

For one individual we do not observe outcomes under all alternative treatment strategies.

If a participant receives treatment A:

- outcome under A can be observed;
- outcome under B/no treatment is counterfactual.

Therefore ordinary:

> predicted vs observed

comparison is not automatically valid for all counterfactual predictions.

---

## 20. Restricting to people who happened to follow strategy A can be biased

### Established finding
**Confidence: HIGH**

Participants following a strategy may differ prognostically from those who do not.

Keogh & van Geloven 2024 show that simple subset evaluation can create selection bias.

### Project consequence

Counterfactual performance evaluation may require causal methods such as:

- artificial censoring;
- inverse-probability weighting;
- standardization/g-formula variants.

Detailed estimators are deferred.

---

# Part L — Counterfactual performance remains multidimensional

## 21. Calibration/discrimination/error can be defined under intervention

### Established finding
**Confidence: HIGH**

Recent methods extend familiar performance targets to counterfactual settings, including:

- calibration;
- AUC/discrimination;
- Brier/MSE-type error.

But the estimand becomes:

> performance relative to potential outcomes under treatment strategy A,

not ordinary observed outcomes under mixed care.

---

# Part M — Treatment-policy shift and transportability

## 22. A factual model can drift when policy changes

### Established finding
**Confidence: HIGH**

Suppose development data follow policy P1.

Deployment follows policy P2.

If treatment affects outcome:

`P(Y | X, policy P1)`

may differ from:

`P(Y | X, policy P2)`.

Therefore factual model performance can degrade even if baseline measurements and participants look similar.

---

## 23. Counterfactual prediction can explicitly target a stable strategy

### Established finding
**Confidence: HIGH**

Instead of relying on whatever treatment policy happened to occur in development data, a counterfactual model can target:

> risk under specified strategy A.

This can improve conceptual transportability across changing policies **if** causal identification assumptions are defensible.

### Important trade-off

Counterfactual prediction is not "automatically better":

- it requires stronger assumptions;
- treatment must be well-defined;
- confounders must be measured adequately;
- positivity must hold.

---

# Part N — Model-guided feedback / victim of own success

## 24. Deployment can change the outcome process

### Established finding
**Confidence: HIGH**

If a model identifies high-risk individuals and triggers an effective intervention:

1. model predicts high risk;
2. action is taken because of prediction;
3. action lowers outcome risk;
4. future observed data show fewer events among those labelled high risk.

The deployed model changes the data-generating process that future models will learn from.

---

## 25. Naive retraining can erase useful risk signals

### Established finding
**Confidence: HIGH**

If future model updates ignore model-triggered treatment:

- previously strong risk factors may look weaker;
- treated high-risk individuals may appear lower risk;
- prediction-treatment-outcome feedback can degrade the model.

This is one form of a model becoming:

> a victim of its own success.

---

## 26. Performance monitoring must record policy changes

### Project synthesis
**Confidence: HIGH**

For deployed prognostic systems, monitoring should not track only:

- AUC;
- calibration.

It should also track:

- treatment/action uptake by predicted risk;
- changes in decision thresholds;
- deployment-induced management changes;
- outcome trends under those policies.

Detailed deployment governance is deferred.

---

# Part O — Ordinary prognosis vs counterfactual prediction

## 27. Ordinary factual prognosis

Question:

> What is likely to happen under the management process operating in this setting?

Target:

`P(Y | X)` under observed policy.

No causal interpretation of predictor effects required.

---

## 28. Counterfactual prediction

Question:

> What would likely happen if strategy A were followed?

Target:

`P(Y^a | X)`.

Requires causal identification.

---

## 29. Project classification rule

### Decision boundary
**Confidence: HIGH**

If the claim contains:

- "under usual/observed care";
- "given current treatment state";

it may be factual prognosis.

If the claim contains:

- "if untreated";
- "if treatment A";
- "if strategy B";
- "under hypothetical intervention";

it is counterfactual prediction and must be routed through causal methodology.

---

# Part P — Counterfactual prediction vs treatment-effect prediction

## 30. One counterfactual risk is not yet an individual treatment effect

### Established finding
**Confidence: HIGH**

Predicting:

> risk under treatment A

is a treatment-specific counterfactual prediction.

An individualized treatment effect requires comparison of potential outcomes under at least two strategies.

Conceptually:

`effect(X) = risk under A - risk under B`

or another causal contrast.

---

## 31. Treatment-effect prediction is a causal contrast

### Established finding
**Confidence: HIGH**

It asks:

> Which treatment changes this individual's outcome more?

This is different from:

> Who has poor prognosis?

A high-risk person may or may not have a larger relative treatment benefit.

This preserves the distinction from PASS-06B1 and PASS-06B9.

---

# Part Q — RCT data and treatment-specific prediction

## 32. Randomization simplifies treatment assignment, not all prediction problems

### Established finding
**Confidence: HIGH**

RCT data can provide cleaner information about outcomes under randomized treatment strategies because baseline treatment assignment is randomized.

However individualized prediction still requires:

- sufficient sample/outcome information;
- modelling of baseline risk and possible treatment-effect heterogeneity;
- handling adherence/crossover/loss to follow-up;
- appropriate validation.

### Project rule

Do not equate:

> RCT source data

with:

> automatically valid individualized treatment-effect model.

---

# Part R — Fitness/exercise translations

## 33. Factual adherence prognosis

Question:

> Given the way this coaching system currently manages trainees, what is the probability of 12-week dropout?

If risk-triggered coaching already occurs in the cohort, the model predicts outcome **under that coaching policy**.

This can be useful for resource forecasting.

---

## 34. No-support counterfactual risk

Question:

> What would this trainee's dropout risk be if no extra coaching were provided?

If high-risk trainees in the data often receive extra coaching, their observed outcomes do not directly reveal this untreated/no-support risk.

This is a counterfactual prediction problem.

---

## 35. Treatment paradox in training

Suppose:

1. poor early readiness indicators imply high injury risk;
2. coaches detect them;
3. coaches reduce load;
4. load reduction lowers injury incidence.

A naive model trained on observed outcomes may learn:

> severe readiness signal weakly predicts injury,

because the signal triggered protective action.

That does not mean the underlying untreated risk signal was weak.

---

## 36. Model-guided feedback

A dropout-risk model identifies high-risk trainees.

High-risk trainees receive:

- extra contact;
- schedule adaptation;
- reminders.

If effective, later retraining without tracking those actions can make the original risk predictors appear less predictive.

Therefore the intervention pathway must be recorded during model monitoring/updating.

---

## 37. Counterfactual treatment comparison

Question:

> For this trainee, what is expected 16-week adherence under standard coaching versus intensified coaching?

This requires two strategy-specific potential outcome predictions.

It is no longer ordinary prognosis; it approaches individualized treatment-effect prediction.

---

# Part S — Structural record produced by PASS-06B11

## 38. Treatment-aware prognosis record

For any prognosis/prediction study where treatment/management can affect outcome, record:

1. model/version;
2. scientific target:
   - factual observed-care prognosis;
   - baseline-treatment-conditional prognosis;
   - no-treatment counterfactual risk;
   - treatment-A counterfactual risk;
   - multiple strategy-specific risks;
   - individualized treatment-effect contrast;
3. target population;
4. prediction startpoint;
5. prediction horizon;
6. outcome;
7. baseline treatment status observed?;
8. baseline treatment included as predictor?;
9. baseline treatment causal interpretation claimed?;
10. post-baseline treatment possible?;
11. treatment initiation/change timing recorded?;
12. treatment affected by baseline prognostic factors?;
13. treatment affected by time-varying prognostic factors?;
14. treatment plausibly affects outcome?;
15. treatment drop-in present?;
16. treatment adherence/crossover relevant?;
17. development treatment-policy context;
18. validation treatment-policy context;
19. deployment treatment-policy context;
20. policy similarity assumed?;
21. model intended to guide treatment/action?;
22. model deployment itself changes treatment probability?;
23. target:
   - observed/factual outcome;
   - potential outcome under specified intervention;
24. if counterfactual:
   - intervention/strategy precisely defined?;
   - consistency assumption plausible?;
   - exchangeability/confounding set specified?;
   - positivity assessed?;
25. identification covariates;
26. deployment predictors;
27. causal estimation method;
28. counterfactual performance evaluation performed?;
29. standard observed-outcome validation incorrectly used for counterfactual target?;
30. one strategy-specific prediction or causal contrast between strategies?;
31. final project classification:
   - ordinary factual prognosis;
   - treatment-conditional factual prognosis;
   - counterfactual prediction;
   - individualized treatment-effect prediction;
32. unresolved treatment/causal issues.

---

# Practical rules produced by PASS-06B11

1. Ordinary factual prognosis predicts outcomes under an observed/current treatment-management policy.
2. Treatment policy is part of the prognosis setting even when treatment is not explicitly included as a predictor.
3. Factual prediction can be the correct target when the practical question concerns outcomes under current usual management.
4. Factual models assume treatment policies remain sufficiently similar when transported.
5. Baseline treatment can be an ordinary factual predictor if known at T0.
6. A baseline treatment coefficient is not automatically a causal treatment effect.
7. Baseline treatment adjustment does not solve post-baseline treatment changes.
8. Post-startpoint treatment is future information and cannot simply be inserted into a baseline model.
9. Treatment drop-in occurs when treatment starts/changes after prediction and before outcome.
10. If effective treatment is preferentially given to high-risk participants, naive models can underestimate untreated risk — the classic treatment paradox.
11. Bias direction is structure-dependent; treatment does not universally bias risk downward.
12. Restricting to untreated participants at baseline does not remove later treatment drop-in.
13. A model intended to guide treatment may need a no-treatment or strategy-specific counterfactual risk rather than factual observed-care risk.
14. Counterfactual prediction targets potential outcomes under specified interventions and therefore crosses into causal methodology.
15. Counterfactual prediction from observational data requires assumptions such as consistency, exchangeability and positivity.
16. Covariates needed for causal identification can differ from predictors ultimately shown to the end user.
17. Ordinary observed-outcome validation does not automatically evaluate counterfactual prediction performance.
18. Restricting validation to people who happened to follow the strategy can create selection bias.
19. Counterfactual calibration/discrimination/error require treatment-aware causal evaluation methods.
20. Treatment-policy changes can cause factual-model transportability failure even without major baseline covariate shift.
21. Counterfactual prediction can target a stable hypothetical policy but buys this stability with stronger causal assumptions.
22. Model deployment can alter treatment behavior and therefore alter the data-generating process.
23. Naive retraining after model-guided interventions can make useful predictors appear weaker (“victim of own success”).
24. Monitoring deployed models should therefore track management/action policy as well as predictive performance.
25. Predicting risk under one treatment strategy is not yet an individualized treatment effect.
26. Individualized treatment-effect prediction requires a causal contrast between potential outcomes under at least two strategies.
27. High baseline risk and high treatment benefit are distinct properties.
28. RCT data simplify treatment-assignment confounding but do not automatically solve individualized prediction, adherence, transportability or validation.
29. Minimum project architecture:
   **prediction target → observed vs hypothetical treatment policy → treatment timing → treatment-outcome causal relevance → factual or counterfactual estimand → appropriate development/evaluation design → deployment feedback monitoring**.

---

# Important boundary finding

The central design decision is not:

> "Should treatment be adjusted for?"

It is:

> **"What outcome under what treatment/management policy is the model supposed to predict?"**

Only after that is defined can treatment handling be judged.

Mechanical adjustment can be wrong in multiple directions:

- ignoring treatment when untreated risk is required;
- conditioning on future treatment in a baseline model;
- treating observational treatment coefficient as causal;
- validating counterfactual predictions against factual outcomes without treatment-aware methods.

---

# Important evidence limitation

Counterfactual prediction is a rapidly developing methodological area.

Current evidence establishes the conceptual framework and several identification/evaluation methods, but:

- dynamic treatment strategies;
- multiple interventions;
- individualized treatment-effect prediction;
- continual deployment feedback;
- AI-specific counterfactual prediction

remain less standardized than ordinary factual prognosis.

Therefore this pass records **design boundaries and identification requirements**, not a universal algorithm for all interventional prediction problems.

---

# What remains unresolved after PASS-06B11

The prognosis/prediction branch remains **RESEARCHING**.

Still requires separate deep blocks on at least:

1. dynamic/landmark prediction with time-updated predictors;
2. time-varying prediction startpoints;
3. repeated predictions over follow-up;
4. relation between dynamic prediction and treatment changes;
5. continual/periodic updating if needed;
6. integration check with diagnostic prediction;
7. synthesis of PASS-06B1…B11;
8. dedicated prognosis/prediction gap audit.

## Next micro-pass

**RES-02 / PASS-06B12 — dynamic and landmark prediction structures: repeated prediction times, time-updated predictors, landmarking, joint-model/dynamic prediction at taxonomy level, changing horizons, and the boundary between dynamic factual prediction and counterfactual treatment strategies.**

STOP after this saved micro-pass.
