# PSY-RES-10 — Methodology sufficiency audit

Status: **PHASE_A_CLOSED_FOR_PRACTICE v1.0**

## Purpose

Audit PSY-RES-01 through PSY-RES-09 as one integrated inference system, identify unresolved gaps or contradictions that could still produce unreliable individualized psychological reasoning, repair blocking gaps, and close Phase A only if the methodology is sufficient for downstream qualification work.

This audit is based on the exact canonical files currently stored in the psychology research branch, plus the AGENT and PRIVACY contracts.

## Audit question

> Can Kira move from a psychological question to a person-specific working hypothesis without silently changing the claim type, overreading measurements, confusing association with causation, importing population averages into an individual, treating clinical labels as mechanisms, or expressing more confidence than the evidence supports?

## 1. Phase A architecture as audited

The nine completed blocks form the following dependency chain:

`question / phenomenon`
-> `construct + claim type`
-> `study design / identification`
-> `measurement / psychometrics`
-> `bias analysis`
-> `evidence synthesis`
-> `replication / generalization / transport`
-> `clinical and qualitative boundaries where relevant`
-> `person-specific hypothesis + uncertainty + revision`

### PSY-RES-01 — Question framing and construct definition

Provides:

- raw-phenomenon-first rule;
- construct/label separation;
- operationalization;
- alternative constructs;
- observable/discriminating indicators;
- claim-type routing;
- anti-circularity test.

Primary failure prevented:

`observation -> familiar label -> explanation`.

### PSY-RES-02 — Study designs and causal inference

Provides:

- claim-to-design routing;
- causal estimands;
- counterfactual logic;
- exchangeability;
- positivity;
- consistency;
- interference;
- confounder/mediator/collider distinction;
- prediction versus causation;
- intervention effect versus mechanism.

Primary failure prevented:

`association / temporal order / adjusted model -> causal story`.

### PSY-RES-03 — Measurement and psychometrics

Provides:

- construct/measure/score/interpretation separation;
- reliability versus validity;
- structural validity;
- measurement error and SEM;
- invariance/DIF;
- norms/cutoffs;
- change-score caution;
- multisource interpretation.

Primary failure prevented:

`score -> psychological fact`.

### PSY-RES-04 — Bias and error mechanisms

Provides:

- random versus systematic error;
- result-specific risk of bias;
- confounding;
- selection/collider bias;
- attrition/missingness;
- measurement error/misclassification;
- common-method variance;
- expectancy/demand/rater effects;
- selective reporting;
- regression to the mean;
- practice/fatigue effects.

Primary failure prevented:

`large / adjusted / longitudinal / significant result -> trustworthy result`.

### PSY-RES-05 — Evidence synthesis

Provides:

- systematic review versus meta-analysis;
- search and selection quality;
- primary-study bias propagation;
- construct compatibility;
- fixed/random-effects distinction;
- heterogeneity;
- prediction intervals;
- subgroup/meta-regression caution;
- missing evidence/publication bias;
- review-level risk of bias;
- certainty versus pooled effect.

Primary failure prevented:

`meta-analysis label / narrow pooled CI -> truth`.

### PSY-RES-06 — Replication and generalization

Provides:

- reproducibility versus replicability;
- direct versus conceptual replication;
- constraints on generality;
- target-population definition;
- transportability assumptions;
- effect heterogeneity;
- SATE versus PATE;
- average versus individual effects;
- between-person versus within-person inference.

Primary failure prevented:

`replicated group effect -> universal law -> individual mechanism`.

### PSY-RES-07 — Clinical versus non-clinical inference

Provides:

- normal variation versus disorder;
- symptom versus syndrome versus diagnosis;
- screening versus diagnosis;
- distress/impairment/context;
- course/duration;
- differential diagnosis/exclusions;
- culture/development;
- dimensional versus categorical interpretation;
- non-clinician scope boundary.

Primary failure prevented:

`salient behavior / high screening score -> disorder label`.

### PSY-RES-08 — Qualitative and mixed methods

Provides:

- qualitative evidence versus anecdote;
- methodological integrity;
- reflexivity;
- purposive sampling/data adequacy;
- non-universal saturation/member-check/intercoder rules;
- experience versus external causal attribution;
- qualitative synthesis;
- mixed-method integration.

Primary failure prevented:

`subjective narrative -> dismiss`

or the opposite:

`rich narrative -> causal proof`.

### PSY-RES-09 — Evidence-to-individual reasoning

Provides:

- nomothetic-to-idiographic transfer;
- exact proposition typing;
- observation/context/interpretation/inference layers;
- rival hypotheses;
- contradiction handling;
- prospective discriminating predictions;
- person-specific functional testing;
- base rates;
- incremental validity;
- evidence dependence;
- confidence tags;
- calibration/error log;
- correction propagation;
- ability/preference/frequency/state separation.

Primary failure prevented:

`generic pattern recognition -> confident person-specific formulation`.

## 2. Cross-block consistency audit

### 2.1 Construct and measurement

PSY-RES-01 and PSY-RES-03 are consistent.

- PSY-RES-01 requires defining a construct before selecting indicators.
- PSY-RES-03 requires validating the interpretation of the resulting score/measure.

No contradiction found.

### 2.2 Causal inference and bias

PSY-RES-02 and PSY-RES-04 are consistent.

- PSY-RES-02 defines identification assumptions.
- PSY-RES-04 tests mechanisms that can violate them.

No contradiction found.

### 2.3 Primary studies and synthesis

PSY-RES-04 and PSY-RES-05 are consistent.

- bias in primary studies does not disappear under pooling;
- review-level missing evidence and heterogeneity are additional layers.

No contradiction found.

### 2.4 Generalization and individualized inference

PSY-RES-06 and PSY-RES-09 are consistent.

- PSY-RES-06 constrains transfer from source samples to target populations and individuals;
- PSY-RES-09 requires person-specific data before stronger person-specific claims.

No contradiction found.

### 2.5 Clinical inference and person-specific modeling

PSY-RES-07 and PSY-RES-09 are consistent.

- clinical labels require additional criteria and differential/exclusion logic;
- person-specific formulations remain hypotheses;
- diagnosis and mechanism remain separate propositions.

No contradiction found.

### 2.6 Qualitative evidence and causal reasoning

PSY-RES-08 is consistent with PSY-RES-02/04/09.

- first-person evidence is privileged for subjective experience when that is the target;
- participant causal attribution does not bypass causal identification;
- qualitative contradictions remain informative.

No contradiction found.

### 2.7 Confidence and certainty terminology

Two distinct levels are retained:

- **certainty of a body of evidence** — synthesis-level construct in PSY-RES-05;
- **confidence in a person-specific hypothesis** — ordinal epistemic status in PSY-RES-09.

These must not be treated as interchangeable.

No contradiction found.

## 3. Blocking gap discovered by the audit

The nine-block system contained statistical-inference controls in several places, but they were distributed rather than canonical.

Examples already present:

- effect magnitude and confidence intervals in PSY-RES-05/06;
- statistical significance cautions in PSY-RES-05;
- prediction validation in PSY-RES-02;
- multiple-analysis/selective-reporting risk in PSY-RES-04;
- calibration in PSY-RES-09.

However, no single gate required a reader of a **primary quantitative study** to check:

- effect size;
- uncertainty interval;
- correct meaning of a p-value;
- statistical versus practical significance;
- multiplicity;
- confirmatory versus exploratory status;
- sample size/power/precision;
- stopping rules;
- statistical assumptions/diagnostics;
- model overfitting/optimism;
- validation and data leakage.

This gap could allow a quantitatively weak primary study to pass the other gates too easily.

Therefore Phase A could not be closed before repair.

## 4. Repair — Minimum Statistical Inference Layer

### 4.1 Estimate first, threshold second

For quantitative claims, identify:

1. the estimand/target quantity;
2. effect-size estimate;
3. uncertainty interval;
4. clinically/psychologically/practically meaningful scale or threshold where relevant.

Do not reduce interpretation to whether a null-hypothesis threshold was crossed.

### 4.2 Correct p-value interpretation

The ASA's core principles are adopted:

- a p-value can indicate incompatibility of observed data with a specified statistical model;
- it is **not** the probability that the hypothesis is true;
- it is **not** the probability that the result occurred "by chance";
- it does not measure effect magnitude;
- it does not measure practical importance;
- a threshold alone is insufficient for scientific conclusion.

Canonical rule:

`p < .05 != important / true / replicated / large effect`

and:

`p > .05 != no effect / null proven`.

### 4.3 Statistical significance and practical importance are separate

A very small effect can be statistically detectable in a large sample.

A potentially important effect can remain imprecise in a small sample.

Interpret:

- magnitude;
- uncertainty;
- context;
- decision relevance;

before practical conclusions.

### 4.4 Precision and power

Check:

- intended and achieved sample size;
- how sample size was determined;
- power analysis or precision target where applicable;
- whether the study can meaningfully rule out effects of relevant magnitude;
- whether wide intervals make the result inconclusive.

Low power does not make a significant estimate automatically false.

It can increase instability and reduce the information in null/inconclusive results.

### 4.5 Stopping rules and interim analyses

If data collection could stop based on interim results, check:

- whether stopping rules were prespecified;
- whether repeated looks at the data were accounted for;
- whether optional stopping could inflate error rates.

APA JARS–Quant explicitly requires reporting interim analyses and stopping rules.

### 4.6 Multiplicity

If many:

- outcomes;
- subgroups;
- time points;
- models;
- transformations;
- correlations;
- tests

were examined, determine whether multiplicity was:

- prespecified;
- adjusted where appropriate;
- transparently reported;
- separated into confirmatory and exploratory analyses.

Multiplicity is not solved merely because one result reaches a conventional threshold.

### 4.7 Confirmatory, secondary, and exploratory analyses

Keep separate:

- primary/prespecified hypotheses;
- secondary analyses;
- exploratory/post-hoc analyses.

Exploratory findings can be valuable.

They should generate or refine hypotheses rather than being silently rewritten as prespecified confirmation.

### 4.8 Model assumptions and diagnostics

Before trusting a model-based estimate, inspect whether relevant assumptions were evaluated.

Depending on the model, this may include:

- distributional assumptions;
- linearity;
- independence;
- homoscedasticity;
- residual structure;
- influential observations;
- multicollinearity;
- model convergence;
- identification problems;
- time-series dependence.

Do not treat software output as valid solely because a coefficient and p-value were produced.

### 4.9 Model specification and robustness

Ask whether conclusions depend on:

- arbitrary covariate choices;
- functional form;
- outlier handling;
- transformations;
- exclusion criteria;
- alternative plausible models.

Reasonable sensitivity analyses should not radically change a claim presented as robust.

### 4.10 Overfitting and optimism

For prediction models, performance measured on the development data is optimistic.

Require appropriate internal validation such as:

- bootstrap;
- cross-validation;
- other defensible resampling/validation procedures.

Predictor selection and tuning must occur **inside** the validation procedure where required; otherwise information leakage can inflate performance.

### 4.11 External validation

A prediction model intended for new people/settings should be evaluated on relevant data not used for development.

At minimum examine:

- calibration;
- discrimination;
- overall predictive performance;
- target-population relevance;
- subgroup/fairness performance where relevant.

### 4.12 Data reuse / leakage

Do not allow the same information to be used implicitly for:

1. choosing variables/models/hyperparameters;
2. estimating final performance;

without a valid separation/validation design.

Exploratory discovery and final evaluation must be distinguished.

### 4.13 Exact reporting and transparency

Where inferential tests are used, prefer:

- exact p-values rather than only threshold labels;
- effect-size estimates;
- uncertainty intervals;
- disclosure of all relevant analyses;
- reporting of assumption/diagnostic problems;
- disclosure of planned versus unplanned analyses.

### 4.14 Statistical method does not rescue a bad design

No sophisticated estimator can automatically repair:

- invalid construct measurement;
- non-identifiable causal question;
- severe selection bias;
- poor target-population match;
- unmeasured critical variables.

Statistical inference is downstream of construct, design, and measurement quality.

## 5. Minimum Statistical Inference Gate

Before accepting a primary quantitative result, ask:

### A. Target and magnitude

1. What exact estimand/parameter is being estimated?
2. What is the effect-size estimate?
3. What uncertainty interval surrounds it?
4. Is the effect meaningful on the relevant substantive scale?

### B. Significance interpretation

5. Am I treating a p-value as a probability that the hypothesis is true?
6. Am I equating statistical significance with effect importance?
7. Am I equating non-significance with evidence of no effect?

If yes to any, repair the interpretation.

### C. Information/precision

8. How was sample size determined?
9. What precision or power was targeted?
10. Are intervals wide enough that substantively different conclusions remain compatible with the data?
11. Were stopping rules/interim analyses prespecified and handled correctly?

### D. Multiplicity and analysis status

12. How many outcomes/tests/subgroups/models were examined?
13. Was protection against experiment-wise/multiple-testing error appropriate to the inferential goal?
14. Which analyses were primary/prespecified?
15. Which were secondary?
16. Which were exploratory/post-hoc?

### E. Model assumptions

17. What assumptions are required by the model?
18. Were assumption violations or diagnostic anomalies examined?
19. Were convergence/identification problems reported?
20. Do reasonable alternative specifications materially change the result?

### F. Prediction models

21. Was model performance evaluated outside the data used to fit/tune it?
22. Was internal validation performed correctly?
23. Could information leakage inflate performance?
24. Is there external validation in a relevant target setting?
25. Are calibration and discrimination both assessed?

### G. Final inference

26. What conclusion is supported by magnitude + uncertainty + design?
27. What conclusion depends mainly on a threshold?
28. Is the result confirmatory, exploratory, or unresolved?
29. What statistical limitation most threatens the inference?

## 6. Integrated Phase A reasoning pipeline

For a substantive psychological claim, the default order is now:

### Step 1 — Define the phenomenon

Use PSY-RES-01.

Output:

- raw observation/question;
- candidate construct;
- alternatives;
- exact claim type.

### Step 2 — Match the evidence architecture

Use PSY-RES-02.

Output:

- design family;
- estimand if causal;
- identification assumptions;
- permitted claim level.

### Step 3 — Audit measurement

Use PSY-RES-03.

Output:

- validity/precision judgment;
- score interpretation limits;
- norm/cutoff/invariance constraints.

### Step 4 — Audit statistical inference

Use PSY-RES-10 Minimum Statistical Inference Gate.

Output:

- effect magnitude;
- uncertainty;
- multiplicity/exploration status;
- assumption/validation limits.

### Step 5 — Audit bias

Use PSY-RES-04.

Output:

- plausible bias mechanisms;
- direction/magnitude where defensible;
- surviving inference.

### Step 6 — Audit the body of evidence

Use PSY-RES-05 when multiple studies or reviews are involved.

Output:

- synthesis quality;
- heterogeneity;
- missing-evidence risk;
- certainty/applicability.

### Step 7 — Audit transfer

Use PSY-RES-06.

Output:

- replication status;
- generality boundaries;
- target-population transport limits;
- level-of-analysis limits.

### Step 8 — Route special evidence correctly

Use:

- PSY-RES-07 for clinical language;
- PSY-RES-08 for qualitative/mixed evidence.

Output:

- correct inferential boundary for the evidence type.

### Step 9 — Build/update the person-specific model

Use PSY-RES-09.

Output:

- proposition;
- individual evidence;
- rivals;
- contradictions;
- predictions;
- confidence;
- revision triggers.

## 7. Stop conditions

A person-specific conclusion must remain OPEN/LOW or explicitly unresolved when a blocking condition exists.

Blocking examples:

1. construct is undefined or circular;
2. claim type is ambiguous;
3. evidence design cannot support the claim;
4. critical measurement validity is unknown;
5. result depends mainly on thresholded significance without magnitude/uncertainty;
6. major plausible bias cannot be assessed;
7. population evidence is materially indirect to the target context;
8. between-person evidence is being used for a within-person mechanism;
9. clinical label exceeds available clinical evidence;
10. qualitative causal attribution lacks independent causal support;
11. serious rival hypotheses remain indistinguishable;
12. person-specific evidence is insufficient for the confidence level;
13. a prior mechanism-level correction undermines the reasoning route;
14. necessary personal information would have to be stored in the public repository.

## 8. Remaining gaps after repair

No remaining gap blocks the **methodological purpose** of Phase A.

The following are deliberately deferred because they require deeper domain study rather than methodology repair:

- advanced statistical modeling and estimation theory;
- detailed psychometric test construction / IRT;
- detailed intensive-longitudinal/time-series modeling;
- detailed causal mediation methods;
- specific psychopathology differentials;
- domain-specific neurobiological mechanisms;
- intervention/treatment science;
- safety/crisis procedures;
- ethics of AI-assisted individualized analysis.

These are covered by later qualification domains or can be opened as targeted method blocks if downstream work requires them.

## 9. Phase A sufficiency criteria

### Criterion 1 — construct/label/observation separation

**PASS.**

Covered by PSY-RES-01 and reinforced by PSY-RES-03/09.

### Criterion 2 — claim-to-design matching

**PASS.**

Covered by PSY-RES-02.

### Criterion 3 — causal identification boundaries

**PASS.**

Covered by PSY-RES-02/04.

### Criterion 4 — measurement/psychometric validity

**PASS.**

Covered by PSY-RES-03.

### Criterion 5 — quantitative statistical inference minimum

**PASS AFTER REPAIR.**

The blocking gap identified by this audit is repaired in Sections 4–5 of PSY-RES-10.

### Criterion 6 — bias/error mechanisms

**PASS.**

Covered by PSY-RES-04.

### Criterion 7 — evidence synthesis/certainty

**PASS.**

Covered by PSY-RES-05.

### Criterion 8 — replication/generalization/transport

**PASS.**

Covered by PSY-RES-06.

### Criterion 9 — clinical inference boundary

**PASS.**

Covered by PSY-RES-07.

### Criterion 10 — qualitative/mixed-method evidence boundary

**PASS.**

Covered by PSY-RES-08.

### Criterion 11 — population-to-individual transfer

**PASS.**

Covered by PSY-RES-06/09.

### Criterion 12 — person-specific model testability/revision

**PASS.**

Covered by PSY-RES-09.

### Criterion 13 — uncertainty/confidence calibration

**PASS.**

Covered by PSY-RES-05/09 and statistical repair in PSY-RES-10.

### Criterion 14 — contradiction and rival-hypothesis handling

**PASS.**

Covered by PSY-RES-01/08/09.

### Criterion 15 — cross-block consistency

**PASS.**

No substantive contradiction was found across the nine canonical blocks.

### Criterion 16 — privacy separation

**PASS.**

The public repository remains generic-methodology/science only; individualized records remain private.

## 10. Phase A decision

**PHASE A IS SUFFICIENT FOR DOWNSTREAM QUALIFICATION WORK.**

This does **not** mean the methodology is complete in an encyclopedic sense.

It means the current system has no identified blocking gap that prevents responsible downstream study of psychological domains for the project purpose.

Further methodological depth should now be opened by dependency:

> add a method topic when a later psychological domain actually requires it.

Do not delay substantive psychology indefinitely to pursue complete methodological coverage.

## 11. Canonical Phase A control formula

**Phenomenon -> construct -> claim -> design -> measurement -> statistical inference -> bias -> synthesis -> generalization -> special evidence boundary -> person-specific hypothesis -> rivals -> prediction -> confidence -> revision.**

Never:

**familiar pattern -> psychological label -> polished explanation -> confidence.**

## Sources added by PSY-RES-10 repair

1. American Statistical Association. (2016). *ASA Statement on Statistical Significance and P-Values.* https://www.amstat.org/asa/files/pdfs/P-ValueStatement.pdf
2. American Statistical Association President's Task Force. (2021). *Statement on Statistical Significance and Replicability.* https://magazine.amstat.org/blog/2021/08/01/task-force-statement-p-value/
3. American Statistical Association. *Ethical Guidelines for Statistical Practice.* Current official resource. https://www.amstat.org/your-career/ethical-guidelines-for-statistical-practice
4. American Psychological Association. (2024). *JARS–Quant Table 1: Quantitative research reporting standards.* https://apastyle.apa.org/jars/quant-table-1.pdf
5. American Psychological Association. *Journal Article Reporting Standards (JARS).* Current official resource. https://apastyle.apa.org/jars/
6. Collins, G. S., Reitsma, J. B., Altman, D. G., & Moons, K. G. M. (2015). Transparent Reporting of a Multivariable Prediction Model for Individual Prognosis or Diagnosis (TRIPOD): The TRIPOD Statement. *BMJ, 350*, g7594. https://doi.org/10.1136/bmj.g7594
7. Riley, R. D., et al. (2024). Evaluation of clinical prediction models (part 2): how to undertake an external validation study. *BMJ, 384*, e074820. https://doi.org/10.1136/bmj-2023-074820

## Current-standard note

As of 2026-11-19:

- APA's current JARS–Quant resource requires reporting sample size/power/precision, stopping rules, protection against experiment-wise error, inferential tests, effect-size estimates with confidence intervals where possible, planned versus unplanned analyses, and statistical assumption/diagnostic problems.
- The ASA's official 2016 p-value statement remains listed among ASA Board statements.
- The ASA President's Task Force subsequently clarified that properly used p-values/significance tests remain legitimate tools but must not replace effect magnitude, uncertainty, substantive importance, transparency, or full inferential reasoning.
- Prediction-model validation guidance continues to require evaluation on data distinct from development data, with calibration and discrimination assessed in relevant target settings.

## Scope note

The statistical repair is a **minimum inference gate**, not a replacement for formal statistical training.

Advanced statistical methods should be learned when a downstream psychology topic requires them rather than expanded as taxonomy for its own sake.
