# PSY-RES-04 — Bias, confounding, selection, and measurement error

Status: **CLOSED_FOR_PRACTICE v1.0**

## Purpose

Build a practical error taxonomy for psychological evidence so that observed effects, traits, associations, treatment effects, and proposed mechanisms are not accepted before plausible bias structures have been examined.

This block focuses on mechanisms that distort an estimate or interpretation. It does not attempt to cover publication bias, meta-analytic heterogeneity, or full missing-data methodology in depth; those are handled downstream.

## Core rule

**Bias is a mechanism, not a vague quality label.**

Do not ask only:

> Is this a good study?

Ask:

> Through what concrete process could this specific result differ systematically from the target quantity?

Risk of bias can differ across outcomes, time points, analyses, and estimands within the same study.

## 1. Random error versus systematic bias

### Random error

Produces imprecision around an estimate.

Typical indicators:

- wide confidence intervals;
- unstable estimates;
- low information;
- sampling fluctuation.

Increasing sample size often improves random precision.

### Systematic bias

Produces a systematic difference between the estimated quantity and the target quantity.

Increasing sample size does **not** necessarily reduce bias.

A very large biased study can estimate the wrong quantity very precisely.

## 2. Bias must be attached to a target result

Cochrane RoB 2 assesses risk of bias for a **specific result**, not simply for a study as a whole.

The same trial can have:

- low risk of bias for one outcome;
- higher risk for another outcome;
- different risk at different follow-up times;
- different risk under different analyses.

Canonical rule:

**Never inherit a global "high-quality study" label into every result.**

## 3. Confounding

### 3.1 Definition

Confounding occurs when the exposure/intervention comparison is mixed with differences in causes of the outcome.

A confounder is not merely "a variable correlated with X and Y."

Its role is causal.

Typically, a confounder is a common cause, or part of a structure that opens a noncausal path between exposure and outcome.

### 3.2 Why psychology is vulnerable

Psychological exposures are often entangled with:

- socioeconomic conditions;
- family environment;
- prior symptoms;
- temperament/personality;
- cognition;
- health status;
- social network;
- stress exposure;
- treatment selection;
- education;
- self-selection into environments.

Therefore observational associations often have multiple plausible causal structures.

### 3.3 Measured versus unmeasured confounding

Adjustment can address only confounding represented adequately by measured variables under a defensible causal model.

Residual confounding can remain because:

- a confounder was omitted;
- a confounder was measured poorly;
- categories were too crude;
- timing was wrong;
- nonlinearities/interactions were ignored;
- unmeasured common causes remain.

Thus:

`adjusted association != confounding eliminated`.

### 3.4 Overadjustment

Adjusting for every available variable is not safe.

Potential errors include adjusting for:

- mediators;
- colliders;
- descendants of colliders;
- post-treatment variables;
- consequences of the exposure.

This can remove part of the causal effect or create bias.

## 4. Selection bias

Selection bias occurs when inclusion, retention, analysis, or conditioning creates a study population or analytic subset in which the exposure-outcome relation is distorted.

Important mechanisms include:

### 4.1 Selection into the study

Participation may depend on variables related to exposure and outcome.

Examples:

- volunteer samples;
- online recruitment;
- clinic samples;
- selective consent;
- convenience samples;
- platform-specific populations.

This can affect both generalizability and, in some structures, internal associations.

### 4.2 Attrition / loss to follow-up

If dropout depends on treatment/exposure, outcome, or their causes, complete-case estimates may be biased.

The amount of missingness alone is not enough to determine bias.

A small amount can be damaging if highly selective; larger missingness can be less problematic under more defensible missingness mechanisms and analysis.

### 4.3 Conditioning on a collider

If selection depends on a common effect of exposure and outcome (or their causes), conditioning on that selection variable can induce a spurious association.

This can happen through:

- restricting the sample;
- stratifying;
- regression adjustment;
- selecting only participants with a particular diagnosis, event, or score;
- analyzing only completers.

### 4.4 Clinical-selection bias

Clinic-based psychological samples are especially vulnerable because treatment-seeking, referral, severity, comorbidity, access, and clinician decisions can all influence who enters the sample.

A relation observed among treatment-seeking participants may differ from the relation in the underlying population.

## 5. Bias from missing data

Missing data can arise in:

- outcomes;
- exposures;
- covariates;
- repeated assessments;
- informant reports;
- tasks;
- physiological measurements.

Key questions:

1. Why is the data missing?
2. Is missingness related to the true value, observed variables, treatment, exposure, or outcome?
3. Does missingness differ by group?
4. Was the analysis appropriate for the assumed missingness mechanism?
5. Are sensitivity analyses needed?

Do not use:

`missing < 5% -> harmless`

as a universal rule.

## 6. Measurement error in continuous variables

Let the intended variable be X and the measured proxy be X*.

Measurement error can distort:

- effect estimates;
- correlations;
- classification;
- adjustment for confounding;
- mediation;
- interaction estimates;
- prediction.

### 6.1 Classical measurement error

In the simple classical additive-error model for a continuous predictor:

`X* = X + error`

with specific independence assumptions, regression coefficients can be attenuated toward zero and precision reduced.

Important caveat:

**"measurement error biases toward the null" is not a universal rule.**

With multiple covariates, correlated errors, differential error, nonlinear models, categorized variables, outcome error, or complex causal structures, direction and magnitude can differ.

### 6.2 Error in confounders

Poorly measured confounders can leave substantial residual confounding even after statistical adjustment.

Therefore:

`we controlled for the confounder`

is only meaningful if the confounder was measured well enough for the purpose.

### 6.3 Error in outcomes

Outcome measurement can bias effects if measurement differs by exposure/treatment group or by knowledge of condition.

Self-reported psychological outcomes can be affected by:

- expectations;
- demand characteristics;
- awareness of treatment;
- social desirability;
- recall;
- wording;
- context;
- current state.

## 7. Misclassification of categorical variables

Misclassification concerns assigning units to the wrong category.

Examples:

- disorder present/absent;
- exposed/unexposed;
- responder/nonresponder;
- high/low trait group.

### 7.1 Nondifferential misclassification

"Nondifferential" means the measurement error does not vary by a relevant comparison variable under the specific definition being used.

It does **not** guarantee bias toward the null in all designs.

### 7.2 Differential misclassification

Error probabilities differ across groups or depend on outcome/exposure status.

This can create, inflate, attenuate, or reverse associations.

## 8. Common-method and shared-source bias

Psychological studies often measure predictor and outcome using the same:

- person;
- questionnaire format;
- session;
- response scale;
- rater;
- context.

Shared method variance can create covariance not attributable to the substantive constructs.

Examples include:

- mood influencing ratings of both predictor and outcome;
- social desirability affecting multiple self-report scales;
- one informant rating both behavior and environment;
- wording overlap creating artificial associations.

Canonical rule:

**Two self-report scales correlating strongly does not by itself establish that two underlying psychological processes are strongly linked.**

Use multimethod or multisource evidence when the inference depends heavily on shared-report data.

## 9. Expectancy, demand, observer, and rater effects

Psychological measurement is often reactive.

Potential mechanisms:

- participants infer the hypothesis;
- participants alter behavior to conform/resist;
- assessors know condition assignment;
- raters expect improvement;
- interviewer behavior differs by hypothesis;
- coding decisions are influenced by prior knowledge.

Mitigations can include:

- masking/blinding where feasible;
- standardized scripts;
- independent raters;
- preregistered coding rules;
- objective or behaviorally anchored outcomes;
- interrater reliability;
- separating predictor and outcome measurement.

## 10. Deviations from intended intervention

In randomized psychological interventions, bias can arise after randomization through:

- differential co-interventions;
- contamination;
- treatment switching;
- unequal attention;
- nonadherence;
- therapist behavior affected by assignment;
- protocol deviations caused by trial context.

The correct analysis depends on the estimand:

- effect of assignment;
- effect of adherence;
- per-protocol-type effect;
- other specified treatment strategies.

Do not switch between estimands silently.

## 11. Bias in outcome measurement

Cochrane RoB 2 separates outcome measurement from deviations from intervention.

Ask:

1. Was the outcome measured appropriately?
2. Could measurement differ across groups?
3. Were assessors aware of assigned intervention?
4. Could awareness plausibly influence assessment?
5. Was the measurement method equally sensitive across conditions?

For self-reported outcomes, the participant is also the assessor.

Knowledge of treatment can therefore affect both actual experience and reported measurement through different pathways.

## 12. Selective reporting within studies

Bias can arise when researchers have multiple possible:

- outcomes;
- time points;
- subscales;
- scoring rules;
- exclusion rules;
- transformations;
- covariate sets;
- models;
- subgroup analyses.

and report results based on statistical significance, effect size, or narrative fit.

Signals include:

- mismatch with preregistration/protocol;
- unexplained outcome switching;
- many plausible analyses but only one reported;
- selective presentation of favorable time points;
- unplanned subgroup emphasis.

Preregistration reduces some researcher degrees of freedom but does not automatically eliminate bias.

## 13. Reverse causality

Reverse causality is a competing causal structure:

`Y -> X`

instead of, or in addition to:

`X -> Y`.

It is especially relevant when:

- exposure and outcome are measured simultaneously;
- symptoms influence the supposed risk factor;
- behavior changes in response to an emerging condition;
- retrospective reports are used.

Longitudinal ordering can reduce some reverse-causality concerns, but does not remove confounding.

## 14. Regression to the mean

Extreme observed values tend, on average, to be less extreme on repeated measurement when part of the extremeness reflects random fluctuation.

This is especially relevant when participants are selected because they have:

- very high symptom scores;
- very low performance;
- an acute episode;
- extreme baseline values.

Improvement after selection on an extreme score is not, by itself, evidence of treatment effect.

Controlled or appropriately modeled comparisons are needed.

## 15. Practice, fatigue, and repeated-testing effects

Repeated psychological testing can change scores independently of the target construct.

Possible mechanisms:

- familiarity;
- strategy learning;
- memory of items;
- reduced anxiety;
- boredom;
- fatigue;
- motivation change;
- device/context learning.

A pre-post score change can therefore reflect:

`real change + measurement error + practice/fatigue + regression to mean + contextual change`.

## 16. Bias direction must not be guessed

Some biases have a plausible direction in a specific setting.

Others do not.

Cochrane explicitly allows reviewers to leave direction unspecified when there is no clear rationale.

Canonical rule:

**If the direction of bias is not defensible, mark it uncertain rather than defaulting to "toward the null".**

## 17. Bias Control Card

Before accepting a substantive psychological result, record:

### A. Target

1. What exact result/estimand is being evaluated?
2. Which population, outcome, time point, and analysis?

### B. Confounding

3. What are the plausible common causes?
4. Which were measured?
5. How well were they measured?
6. Were any mediators/colliders adjusted for?
7. Could time-varying confounding exist?

### C. Selection

8. How were participants recruited?
9. What determines participation?
10. What determines retention?
11. What determines inclusion in the final analysis?
12. Is any collider or post-exposure variable being conditioned on?

### D. Measurement

13. How were exposure and outcome measured?
14. Are measurement errors likely differential?
15. Is the same reporter/method used for both?
16. Could expectations, social desirability, recall, or rater knowledge affect measurement?

### E. Intervention conduct

17. Were there deviations, contamination, co-interventions, switching, or nonadherence?
18. Does the analysis match the intended estimand?

### F. Missingness

19. What is missing and why?
20. Could missingness depend on unobserved values or group assignment?
21. Were sensitivity analyses performed?

### G. Selective reporting

22. Was the analysis/outcome/time point prespecified?
23. Were multiple plausible analyses available?
24. Are null or unfavorable results missing from the report?

### H. Repeated measurement

25. Could practice, fatigue, regression to the mean, or natural fluctuation explain change?

### I. Final judgement

26. Which bias mechanisms are plausible?
27. Which are likely important?
28. What direction, if any, is defensible?
29. Could any plausible bias fully explain the result?
30. What conclusion survives after bias is considered?

## 18. High-value failure modes

### Failure A — "controlled for many variables"

Incorrect:

`many covariates -> confounding solved`.

Correct:

Only causally relevant and adequately measured covariates help; inappropriate adjustment can increase bias.

### Failure B — "large sample means trustworthy"

Incorrect:

`huge N -> unbiased result`.

Correct:

Large samples reduce random error but can estimate biased quantities very precisely.

### Failure C — "longitudinal means causal"

Incorrect:

`X measured first -> X caused Y`.

Correct:

Temporal order is necessary for many causal claims but not sufficient.

### Failure D — "nondifferential error goes toward zero"

Incorrect as a universal rule.

Correct:

Attenuation is expected only under specific simple error models; complex measurement error can bias in other directions.

### Failure E — "dropout was only 8%"

Incorrect:

`small percentage -> no attrition bias`.

Correct:

Bias depends on the selection mechanism, not only the percentage missing.

### Failure F — "both scales are validated"

Incorrect:

`validated self-report A correlates with validated self-report B -> strong substantive mechanism`.

Correct:

Shared-method variance and common response processes can inflate association.

### Failure G — "significant adjusted result survived"

Incorrect:

`p < .05 after adjustment -> robust causal effect`.

Correct:

Statistical significance does not adjudicate causal identification or bias structure.

### Failure H — "post-treatment adjustment makes groups comparable"

Incorrect:

Post-treatment variables can be mediators or colliders and create/remove associations incorrectly.

## 19. Closure audit

### Criterion 1 — random error and systematic bias are distinguished

**PASS.**

### Criterion 2 — bias is result-specific rather than study-global

**PASS.**

### Criterion 3 — confounding is causally defined

**PASS.**

### Criterion 4 — selection bias and collider conditioning are represented

**PASS.**

### Criterion 5 — attrition and missingness are treated as mechanisms, not percentages

**PASS.**

### Criterion 6 — measurement error and misclassification are constrained

**PASS.**

Simple attenuation rules are explicitly limited to their assumptions.

### Criterion 7 — psychology-specific shared-method/reactivity risks are included

**PASS.**

Common-method variance, expectancy, demand, observer, rater, practice, and fatigue effects are included.

### Criterion 8 — randomized-study bias after assignment is represented

**PASS.**

Deviations, missing outcomes, measurement, and selective reporting are retained despite randomization.

### Criterion 9 — selective reporting within studies is represented

**PASS.**

Outcome/time-point/analysis selection and researcher degrees of freedom are explicit.

### Criterion 10 — a reusable bias-audit protocol exists

**PASS.**

The 30-question Bias Control Card forces mechanism-specific evaluation before accepting a result.

## Canonical working rule

**Observed result -> target estimand -> plausible bias mechanisms -> direction/magnitude if defensible -> surviving inference.**

Never:

**significant / replicated-looking result -> assume truth -> explain psychologically.**

## Sources

1. Higgins, J. P. T., Savović, J., Page, M. J., Elbers, R. G., & Sterne, J. A. C. Chapter 8: Assessing risk of bias in a randomized trial. In *Cochrane Handbook for Systematic Reviews of Interventions*, version 6.5, 2024. https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-08
2. Sterne, J. A. C., Hernán, M. A., McAleenan, A., Reeves, B. C., & Higgins, J. P. T. Chapter 25: Assessing risk of bias in a non-randomized study. In *Cochrane Handbook for Systematic Reviews of Interventions*, version 6.5, 2024. https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-25
3. Cochrane Bias Methods. *ROBINS-I: Risk Of Bias In Non-Randomized Studies - of Interventions*. https://methods.cochrane.org/bias/risk-bias-non-randomized-studies-interventions
4. D'Onofrio, B. M., Sjölander, A., Lahey, B. B., Lichtenstein, P., & Öberg, A. S. (2020). Accounting for Confounding in Observational Studies. *Annual Review of Clinical Psychology, 16*, 25–48. https://doi.org/10.1146/annurev-clinpsy-032816-045030
5. Shaw, P. A., Deffner, V., Keogh, R. H., et al. (2020). STRATOS guidance document on measurement error and misclassification of variables in observational epidemiology: Part 1—Basic theory and simple methods of adjustment. *Statistics in Medicine, 39*(16), 2197–2231. https://doi.org/10.1002/sim.8532
6. Keogh, R. H., Shaw, P. A., Gustafson, P., et al. (2020). STRATOS guidance document on measurement error and misclassification of variables in observational epidemiology: Part 2—More complex methods of adjustment and advanced topics. *Statistics in Medicine, 39*(16), 2232–2263. https://doi.org/10.1002/sim.8531
7. Munafò, M. R., Davey Smith, G. (2020). Causal inference with observational data: the need for triangulation of evidence. *Psychological Medicine*. https://doi.org/10.1017/S0033291720005127
8. Rohrer, J. M. (2018). Thinking Clearly About Correlations and Causation: Graphical Causal Models for Observational Data. *Advances in Methods and Practices in Psychological Science, 1*(1), 27–42. https://doi.org/10.1177/2515245917745629
9. American Psychological Association. Journal Article Reporting Standards (JARS). https://apastyle.apa.org/jars

## Current-tool note

Cochrane's current public materials retain RoB 2 for randomized trials and ROBINS-I for nonrandomized intervention studies. The ROBINS-I site reports a revised Version 2 draft released in November 2025; this block relies on the stable core bias mechanisms rather than draft-only implementation details.

## Scope note

Publication bias across the literature, small-study effects, meta-analytic heterogeneity, and selective publication are deferred to PSY-RES-05. This block covers within-study/result bias and the causal/measurement mechanisms needed to evaluate an individual result.
