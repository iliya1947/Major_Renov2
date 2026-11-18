# PSY-RES-02 — Study-design families and causal-inference basics

Status: **CLOSED_FOR_PRACTICE v1.0**

## Purpose

Establish a compact but rigorous map linking psychological claim types to study architectures, and define the minimum causal-inference concepts required before interpreting evidence.

This block is intentionally not a full course in epidemiology, statistics, or causal inference. Detailed bias, confounding, measurement error, missing data, and model diagnostics are handled in later methodology blocks.

## Core rule

**The design must fit the claim.**

There is no single universal hierarchy in which one design is always "best" for every psychological question.

A randomized experiment is particularly powerful for estimating intervention effects because randomization can create exchangeability between treatment groups. It is not automatically the right design for prevalence, natural history, prediction, diagnostic accuracy, qualitative experience, or every form of mechanism research.

## 1. Study-design families

### 1.1 Descriptive and cross-sectional observational designs

Typical purpose:

- estimate distributions, frequencies, means, proportions, or co-occurrence at a point or interval in time;
- describe psychological states, behaviors, characteristics, or exposures.

Strengths:

- efficient for description;
- useful for hypothesis generation;
- can estimate prevalence when sampling supports it.

Limits:

- temporal order may be unknown;
- reverse causation is often possible;
- association does not establish causal direction.

### 1.2 Cohort designs

Participants are followed across time, prospectively or through existing longitudinal records.

Typical purpose:

- incidence and temporal sequence;
- association between earlier exposure/predictor and later outcome;
- prognosis and prediction;
- causal inference when an explicit identification strategy and credible assumptions are present.

Strengths:

- establishes temporal ordering better than a single cross-section;
- supports repeated measurement and change analysis.

Limits:

- temporal precedence is necessary but not sufficient for causality;
- confounding, selection, attrition, measurement change, and time-varying processes can bias inference.

### 1.3 Case-control and outcome-dependent sampling

Participants are sampled according to outcome status and earlier exposures or predictors are compared.

Typical purpose:

- efficient study of uncommon outcomes;
- etiologic association under appropriate sampling and analysis.

Limits:

- ordinary sample proportions do not estimate population prevalence;
- selection and recall processes can distort associations;
- causal interpretation still depends on explicit assumptions.

### 1.4 Longitudinal panel and repeated-measures designs

Repeated observations are obtained from the same persons or units.

Typical purpose:

- within-person change;
- temporal covariation;
- state-trait separation;
- lagged relationships;
- developmental or dynamic processes.

Important rule:

**Repeated measurement alone does not create causal identification.**

Cross-lagged, growth, fixed-effect, or within-person models can answer useful temporal questions, but the causal meaning of their coefficients depends on assumptions about confounding, measurement, timing, and model structure.

### 1.5 Randomized experiments

An intervention or condition is assigned randomly.

Common architectures include:

- between-group parallel designs;
- within-person/crossover designs;
- factorial designs;
- cluster-randomized designs;
- randomized encouragement or adaptive designs;
- randomized N-of-1 designs.

Primary strength:

Randomization supports exchangeability of treatment groups at assignment, reducing systematic baseline confounding of the assigned intervention.

Important limits:

Randomization does not automatically solve:

- nonadherence;
- attrition or missing outcome data;
- differential measurement;
- poor masking;
- contamination;
- post-randomization selection;
- ill-defined interventions;
- interference between participants;
- limited generalizability.

Thus:

`randomized = strong causal design`

does **not** mean:

`every estimate from a randomized study = unbiased causal truth`.

### 1.6 Nonrandomized experiments and quasi-experimental designs

These designs attempt causal identification without ordinary individual randomization by exploiting allocation rules, timing, thresholds, policy changes, or comparison structures.

Important families include:

- regression discontinuity;
- interrupted time series;
- comparative interrupted time series;
- difference-in-differences;
- instrumental-variable designs;
- natural experiments;
- controlled before-after designs when supported by credible comparison structure.

Each design has its own identification assumptions.

Examples:

- regression discontinuity requires continuity around the assignment threshold and resistance to manipulation of the forcing variable;
- difference-in-differences depends critically on a defensible parallel-trends assumption;
- interrupted time series depends on a credible counterfactual time trend and absence of competing coincident causes;
- instrumental-variable identification requires relevance, exclusion, and independence-type assumptions.

Important distinction:

**A statistical adjustment method is not automatically a quasi-experimental design.**

Regression adjustment, matching, inverse-probability weighting, and propensity scores can support a causal analysis, but causal identification comes from the full design plus assumptions, not from the estimator alone.

### 1.7 Single-case experimental and N-of-1 designs

Repeated measurements are made within one unit, with deliberate manipulation of conditions.

Examples:

- randomized N-of-1 crossover;
- reversal/withdrawal designs;
- multiple-baseline designs;
- alternating-treatment designs.

Potential value:

- direct estimation of within-person response under repeated, well-controlled conditions;
- useful when treatment effects may vary strongly across individuals.

Limits:

- carryover, period effects, learning, nonstationarity, and irreversibility may invalidate simple designs;
- strong within-person evidence does not automatically generalize to other people;
- a nonexperimental personal time series is not equivalent to a randomized N-of-1 experiment.

APA JARS-Quant explicitly treats randomized, nonrandomized experimental, nonexperimental, longitudinal, and N-of-1 designs as distinct reporting categories.

### 1.8 Prediction-model studies

Purpose:

Estimate future or current outcomes from predictors.

Core stages:

1. model development;
2. internal validation;
3. evaluation on data not used to fit the model;
4. ideally external validation in relevant settings.

Core rule:

**Prediction does not require causal predictors.**

A variable can improve predictive accuracy while having no causal effect on the outcome.

Therefore:

`predictive importance != causal importance`.

TRIPOD+AI separates prediction-model development/evaluation from etiologic causal research and emphasizes evaluation data distinct from model-development data.

### 1.9 Diagnostic/classification accuracy studies

Purpose:

Assess how well an index method classifies a target condition relative to an appropriate reference standard.

Typical quantities include:

- sensitivity;
- specificity;
- predictive values;
- likelihood ratios;
- discrimination measures.

Core rule:

**Classification accuracy does not establish etiology or mechanism.**

An accurate classifier can use correlates that are not causes.

### 1.10 Qualitative and mixed-methods designs

Qualitative designs can address:

- lived experience;
- meaning;
- process;
- context;
- perceived mechanisms;
- generation and refinement of theoretical hypotheses.

Mixed-methods designs integrate qualitative and quantitative evidence.

They are not reduced to a weaker version of experimental research because they answer different questions.

Detailed qualitative and mixed-methods methodology is deferred to PSY-RES-08.

## 2. Minimum causal-inference framework

### 2.1 Start with a causal estimand

A causal question must define the contrast of interest.

At minimum specify:

1. target population;
2. intervention/exposure;
3. comparator;
4. outcome;
5. time horizon;
6. effect measure or estimand.

Examples of estimands include:

- average treatment effect;
- average treatment effect among the treated;
- effect at a treatment threshold;
- within-person treatment contrast.

Without an explicit estimand, researchers can easily answer a different question from the one they believe they are answering.

### 2.2 Counterfactual logic

For the same unit and time, the outcome under treatment and the outcome under no treatment cannot both be directly observed.

Causal effects are therefore defined through contrasts between potential outcomes or equivalent intervention-based counterfactual quantities.

Observed data identify those contrasts only under assumptions supplied by the design and subject-matter knowledge.

### 2.3 Exchangeability

Informally:

The treatment groups must be comparable with respect to the potential outcomes relevant to the causal contrast.

Randomization can generate exchangeability in expectation.

In observational analyses, conditional exchangeability usually requires that all relevant common causes of treatment and outcome needed for identification have been adequately addressed.

This cannot generally be proven from the observed dataset alone.

### 2.4 Positivity

For every covariate pattern relevant to the target causal effect, there must be a nonzero probability of receiving each treatment level being compared.

If some subgroup can only ever receive one condition, the corresponding counterfactual comparison is unsupported by the data.

### 2.5 Consistency and well-defined interventions

The observed outcome for a person under the treatment actually received should correspond to that person's potential outcome under that treatment definition.

This becomes problematic when an exposure label hides multiple materially different versions.

Psychological examples can be especially vulnerable when broad labels such as "therapy", "stress", "social support", or "feedback" contain heterogeneous implementations.

### 2.6 Interference

One person's treatment may sometimes affect another person's outcome.

Simple individual-level causal models often assume no relevant interference.

That assumption can fail in:

- families;
- classrooms;
- teams;
- social networks;
- group therapy;
- online communities.

### 2.7 Temporality

A cause must precede the effect in the relevant causal process.

But:

`X before Y`

does not imply:

`X caused Y`.

Temporal order eliminates some explanations but not confounding, selection, measurement artifacts, or common causes.

### 2.8 Confounder, mediator, collider

These roles are causal, not merely correlational.

- **Confounder:** a common cause relevant to the exposure-outcome relation.
- **Mediator:** lies on a causal pathway from exposure to outcome.
- **Collider:** a common effect of two or more variables.

Consequences:

- failing to address a required confounder can bias causal estimation;
- adjusting for a mediator can remove part of the total causal effect;
- conditioning on a collider can create a spurious association.

Therefore the rule "control for everything available" is invalid.

### 2.9 Causal DAGs

Directed acyclic graphs are tools for making causal assumptions explicit.

They can help identify:

- possible confounding paths;
- mediators;
- colliders;
- candidate adjustment sets;
- assumptions required for identification.

A DAG does **not** prove that its arrows are correct.

Its value is to expose assumptions so they can be criticized.

## 3. Claim-to-design compatibility

| Claim | Designs that can directly support it | What must not be silently inferred |
|---|---|---|
| Description / prevalence | representative cross-sectional survey, cohort, registry, structured observation | causation |
| Association | cross-sectional, cohort, case-control, longitudinal observational | causal direction |
| Temporal dynamics | repeated-measures, longitudinal panel, time series | causation merely from sequence |
| Prediction | validated prediction-model studies, prospective cohorts | causal mechanism |
| Diagnostic/classification accuracy | index-test vs reference-standard accuracy design | etiology, treatment benefit |
| Intervention effect | randomized experiment; credible quasi-experiment; carefully identified observational target-trial analysis | mechanism automatically |
| Causal effect of exposure | randomized or explicit observational/quasi-experimental causal design with defensible assumptions | causation from adjusted regression alone |
| Mechanism / mediation | converging temporal, perturbational, mediation, and process evidence with explicit causal assumptions | mechanism from one significant mediator coefficient |
| Within-person treatment effect | randomized/repeated single-case or N-of-1 experimental design | population generalization |
| Experience / meaning / process description | qualitative or mixed-methods design | population frequency or causal effect without additional evidence |

## 4. Prediction, explanation, and causation are different tasks

### Prediction

Question:

> Given available information, how accurately can Y be forecast or classified?

The model can use noncausal correlates.

### Explanation

Question:

> What theoretical structure best accounts for the observed pattern?

Explanatory adequacy depends on model fit, independent predictions, coherence, and competing explanations.

### Causation

Question:

> What would happen to Y under a specified intervention on X versus a comparator?

This requires a causal estimand and identification assumptions.

A model may predict very well but explain poorly.

A mechanism may be scientifically plausible but predict little incremental variance.

A causal variable may be a weak individual-level predictor.

Do not collapse these goals.

## 5. Intervention effect is not mechanism proof

Finding that manipulation of X changes Y supports a causal effect of that manipulation under the trial's assumptions.

It does not by itself prove **why** Y changed.

Mechanism claims require additional evidence about the proposed mediating process, including temporal order and explicit assumptions about mediator-outcome confounding and other pathways.

The AGReMA guidance emphasizes that mediation analyses require explicit causal assumptions and that collider conditioning, temporal precedence, unmeasured confounding, positivity, and consistency matter.

Therefore:

`intervention works -> proposed mediator is proven`

is invalid.

## 6. Reporting guideline is not design validity

Reporting standards such as:

- APA JARS;
- CONSORT;
- STROBE;
- TRIPOD+AI;
- STARD;

help determine whether necessary methodological information is transparently reported.

They are **not** substitutes for critical appraisal.

A well-reported study can still have weak identification or serious bias.

A poorly reported study can be impossible to appraise even if its underlying design was potentially strong.

## 7. Practical causal-reading checklist

Before accepting a causal statement from a psychological study, ask:

1. What exact causal contrast is being estimated?
2. What is the target population?
3. Was treatment/exposure manipulated?
4. If randomized, was randomization preserved in analysis and follow-up?
5. If not randomized, what design feature creates causal identification?
6. What are the assumed confounders?
7. Are any mediators or colliders being conditioned on?
8. Are exchangeability, positivity, consistency, and interference assumptions plausible?
9. Does temporal ordering fit the proposed causal process?
10. Are measurement and missing-data problems capable of changing the result?
11. Is the claimed effect the same estimand the design actually identifies?
12. Are alternative causal structures still viable?

If the study cannot answer these questions, the causal claim should be downgraded.

## 8. High-value failure modes

### Failure mode A — association inflation

Observed:

`X correlates with Y`

Incorrect:

`X causes Y`

Correct:

Association is established; causal interpretation requires an identification strategy.

### Failure mode B — longitudinal inflation

Observed:

`X at time 1 predicts Y at time 2`

Incorrect:

`X causes Y`

Correct:

Temporal precedence strengthens some interpretations but does not remove common causes or other biases.

### Failure mode C — adjustment inflation

Observed:

`association remains after controlling for many covariates`

Incorrect:

`confounding is solved`

Correct:

Only causally appropriate adjustment can support identification; unmeasured confounding and inappropriate adjustment remain possible.

### Failure mode D — RCT inflation

Observed:

`randomized trial found an effect`

Incorrect:

`all causal questions and mechanisms are settled`

Correct:

The randomized contrast may support a causal intervention effect; mechanism, adherence, missingness, measurement, effect heterogeneity, and generalization remain separate questions.

### Failure mode E — mediation inflation

Observed:

`mediator coefficient is significant`

Incorrect:

`the mechanism has been demonstrated`

Correct:

Causal mediation requires additional assumptions and temporal/causal structure.

### Failure mode F — prediction inflation

Observed:

`model predicts outcome accurately`

Incorrect:

`important predictors are causes`

Correct:

Prediction and causal inference are distinct tasks.

## 9. Closure audit

### Criterion 1 — study-design families are distinguished

**PASS.**

The map separates descriptive, cohort, case-control, longitudinal, randomized, quasi-experimental, N-of-1, prediction, diagnostic, and qualitative/mixed designs.

### Criterion 2 — claim types are matched to designs

**PASS.**

A claim-to-design matrix distinguishes description, association, temporal dynamics, prediction, diagnosis, intervention, causation, mechanism, within-person effects, and lived experience.

### Criterion 3 — minimum causal estimand is defined

**PASS.**

Target population, intervention/exposure, comparator, outcome, time horizon, and effect measure must be explicit.

### Criterion 4 — core causal assumptions are identified

**PASS.**

Exchangeability, positivity, consistency, interference, temporality, and measurement/model concerns are included.

### Criterion 5 — randomization is interpreted correctly

**PASS.**

Randomization is treated as a strong design feature for intervention causality, not as a guarantee against every source of bias or as a universal hierarchy.

### Criterion 6 — observational and quasi-experimental causal inference is routed correctly

**PASS.**

Causal inference from nonrandomized data is permitted only through an explicit identification strategy and defensible assumptions; statistical adjustment alone is not treated as identification.

### Criterion 7 — prediction and diagnosis are separated from causation

**PASS.**

Predictive usefulness and diagnostic accuracy are explicitly noncausal unless an additional causal design supports that interpretation.

### Criterion 8 — mechanism claims are constrained

**PASS.**

Intervention effects and simple mediation associations are not treated as sufficient proof of mechanism.

## Canonical working rule

**Question -> estimand -> design -> identification assumptions -> measurement -> analysis -> claim.**

Never reverse this into:

**significant result -> preferred psychological story -> causal language.**

## Sources

1. Hernán, M. A., & Robins, J. M. *Causal Inference: What If*. Updated online text, 2024. Harvard T.H. Chan School of Public Health. https://www.hsph.harvard.edu/miguel-hernan/causal-inference-book/
2. American Psychological Association. APA Style Journal Article Reporting Standards (JARS), JARS-Quant resources, current online materials including 2024 tables. https://apastyle.apa.org/jars
3. Cham, H., Lee, H., & Migunov, I. (2024). Quasi-Experimental Designs for Causal Inference: An Overview. *Asia Pacific Education Review, 25*, 611–627. https://doi.org/10.1007/s12564-024-09981-2
4. Steiner, P. M., Kim, Y., Hall, C. E., & Su, D. (2017). Quasi-Experimental Designs for Causal Inference. *Educational Psychologist, 52*(3), 176–194. https://doi.org/10.1080/00461520.2017.1286043
5. CONSORT Group. CONSORT 2025 statement: updated guideline for reporting randomised trials. *BMJ* 2025;389:e081123. https://doi.org/10.1136/bmj-2024-081123
6. STROBE Initiative. STROBE Statement: reporting observational studies. https://www.strobe-statement.org/
7. Collins, G. S., Moons, K. G. M., Dhiman, P., et al. (2024). TRIPOD+AI statement: updated guidance for reporting clinical prediction models that use regression or machine learning methods. *BMJ, 385*, e078378. https://doi.org/10.1136/bmj-2023-078378
8. Bossuyt, P. M., Reitsma, J. B., Bruns, D. E., et al. (2015). STARD 2015: An Updated List of Essential Items for Reporting Diagnostic Accuracy Studies. *BMJ, 351*, h5527. https://doi.org/10.1136/bmj.h5527
9. Lee, H., Cashin, A. G., Lamb, S. E., et al. (2021). A Guideline for Reporting Mediation Analyses of Randomized Trials and Observational Studies: The AGReMA Statement. *JAMA, 326*(11), 1045–1056. https://doi.org/10.1001/jama.2021.14075
10. Rohrer, J. M. (2018). Thinking Clearly About Correlations and Causation: Graphical Causal Models for Observational Data. *Advances in Methods and Practices in Psychological Science, 1*(1), 27–42. https://doi.org/10.1177/2515245917745629

## Scope note

This block establishes routing and causal-reading basics only. Detailed treatment of confounding, selection bias, measurement error, missingness, collider bias, sensitivity analysis, and statistical estimation is intentionally deferred to PSY-RES-04 and related downstream blocks.
