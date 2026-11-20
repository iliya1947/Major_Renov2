# RES-02 / PASS-06C3 — Causal mediation and pathway study structures

Статус: **COMPLETE MICRO-PASS — mechanistic branch RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. mediator vs biomarker / target / moderator / confounder / collider;
2. causal path `A → M → Y`;
3. temporal ordering;
4. mediation in randomized trials vs observational studies;
5. total / direct / indirect effects at taxonomy level;
6. controlled vs natural vs interventional effect families;
7. mediator–outcome confounding;
8. exposure-induced mediator–outcome confounding;
9. why randomized A does not randomize M;
10. why simple “adjust for mediator” regression is not automatically causal mediation;
11. exposure–mediator interaction;
12. measurement error/misclassification;
13. multiple / parallel / serial mediators;
14. longitudinal/time-varying mediation;
15. multilevel/clustered mediation at recognition level;
16. sensitivity analyses;
17. fitness/exercise examples;
18. structural record.

Не покрывается здесь:

- exact identification formulas;
- exact natural/interventional effect estimators;
- detailed g-formula/IPW/sequential-g estimation;
- stochastic/interventional mediator interventions in depth;
- detailed multiple-mediator algorithms;
- detailed survival-mediation estimators;
- Mendelian-randomization mediation;
- IV mediation;
- detailed mediation sample-size calculations;
- observational omics/biomarker mechanism evidence — PASS-06C4;
- final mechanistic synthesis.

---

# Sources checked

## 1. Cashin et al. — BMJ mediation guidance

Cashin AG, McAuley JH, VanderWeele TJ, Lee H.  
**Understanding how health interventions or exposures produce their effects using mediation analysis.**  
BMJ. 2023;382:e071757.

Checked current BMJ HTML 2026-11-17.

Key framework:

- mechanism = causal process by which exposure causes outcome;
- mediator = variable affected by exposure and in turn affecting outcome;
- mediation questions are inherently causal;
- mediation can be applied to randomized trials and observational studies;
- direct/indirect effect estimands depend on the scientific question;
- temporal order, confounding, measurement, positivity and consistency matter;
- randomized intervention does not eliminate mediator–outcome confounding;
- exposure-induced mediator–outcome confounding requires special treatment;
- sensitivity analysis is important because causal assumptions usually cannot be empirically verified.

https://www.bmj.com/content/382/bmj-2022-071757

---

## 2. AGReMA

Lee H, Cashin AG, Lamb SE, et al.  
**A Guideline for Reporting Mediation Analyses of Randomized Trials and Observational Studies: The AGReMA Statement.**  
JAMA. 2021;326(11):1045-1056.

Checked current JAMA/PMC text 2026-11-17.

AGReMA requires explicit reporting of:

- original study design/data source;
- causal DAG/model;
- causal assumptions;
- exposure, mediator, outcome, confounders, moderators;
- timing;
- measurement properties;
- clustering/measurement level where relevant;
- statistical model assumptions;
- sensitivity analyses;
- missing data;
- interpretation conditional on causal assumptions.

https://jamanetwork.com/journals/jama/fullarticle/2784353  
https://pmc.ncbi.nlm.nih.gov/articles/PMC8974292/

---

## 3. VanderWeele, Vansteelandt & Robins — exposure-induced mediator–outcome confounding

**Effect decomposition in the presence of an exposure-induced mediator-outcome confounder.**  
Epidemiology. 2014;25(2):300–306.

Foundational current-methods reference checked.

Key result:

> standard natural direct/indirect effects are generally not identified by the usual mediation formula when a variable affected by the exposure also confounds the mediator–outcome relationship.

This is a central reason why “just adjust for every mediator–outcome confounder” is not a universal solution.

https://pmc.ncbi.nlm.nih.gov/articles/PMC4214081/

---

## 4. Practical mediation challenges — current applied review

**Practical challenges in mediation analysis: a guide for applied researchers.**

Current PMC record checked 2026-11-17.

It identifies recurring problems:

- mediator vs other third variables;
- temporal ordering;
- multiple mediators;
- omitted confounding;
- mediator measurement error;
- estimand choice;
- reporting.

It also emphasizes that cross-sectional mediation is generally inappropriate when causal ordering cannot be established.

https://pmc.ncbi.nlm.nih.gov/articles/PMC11821701/

---

## 5. 2026 mediation estimand overview

**Overview of mediation methods: from estimands to estimations.**  
Exposome. 2026.

Checked current 2026 article.

Important current distinction:

- controlled direct effects can answer intervention-on-mediator questions;
- natural effects target decomposition of the total effect under stronger identification assumptions;
- interventional analogues can remain available in some settings with exposure-induced mediator–outcome confounding where standard natural effects fail;
- estimand choice should follow the scientific question and identifiability.

https://academic.oup.com/exposome/article/6/1/osag010/8520904

---

## 6. Clarifying causal mediation — natural vs interventional effects

**Clarifying causal mediation analysis for the applied researcher: Defining effects based on what we want to learn.**

Checked current PMC text.

Key distinctions:

- natural and interventional direct/indirect effects answer different causal questions;
- interventional effects can require weaker assumptions when intermediate confounders exist;
- some interventional effect definitions do not equal the natural decomposition of the total effect;
- estimand terminology must not be treated as interchangeable.

https://pmc.ncbi.nlm.nih.gov/articles/PMC8496983/

---

## 7. Time-varying mediation

**Causal mediation analysis with multiple time-varying mediators.**  
Epidemiology. 2023;34(1):8–19.

Checked current PMC record.

Important point:

> longitudinal mediation with repeated exposures/mediators creates time-varying confounding and may require mediational g-formula / longitudinal causal methods rather than ordinary regression.

https://pmc.ncbi.nlm.nih.gov/articles/PMC12168425/

---

## 8. Current causal-inference overview for interaction/mediation/time-varying treatment

**Methods in causal inference. Part 2: Interaction, mediation, and time-varying treatments.**  
2024.

Checked current PMC record.

Central taxonomy point:

> mediation, interaction/moderation and longitudinal causal effects must be defined through explicit causal estimands; they are not interchangeable labels.

https://pmc.ncbi.nlm.nih.gov/articles/PMC11588565/

---

## 9. Mediator measurement error

**The Measurement of the Mediator and its Influence on Statistical Mediation Conclusions.**  
Psychol Methods. 2021;26(1):1–17.

Checked current PMC text.

Key point:

- mediator measurement quality changes mediation conclusions;
- mediator scores need reliable/valid interpretation;
- measurement model is part of the causal model, not a cosmetic reporting detail.

https://pmc.ncbi.nlm.nih.gov/articles/PMC7492484/

Additional methodological support:

**Mediation analysis when a continuous mediator is measured with error and the outcome follows a generalized linear model.**

Mediator measurement error can materially bias direct and indirect effects.

https://pmc.ncbi.nlm.nih.gov/articles/PMC4224977/

---

## 10. Fitness-specific methodological example

Nuzzo JL, Finn HT, Herbert RD.  
**Causal Mediation Analysis Could Resolve Whether Training-Induced Increases in Muscle Strength are Mediated by Muscle Hypertrophy.**  
Sports Med. 2019;49:1309–1315.

Checked PubMed record 2026-11-17.

Important fitness-specific point:

- correlation between changes in muscle size and strength is confounded and cannot establish mediation;
- randomizing exercise volume to induce different hypertrophy does not randomize hypertrophy itself;
- therefore causal mediation logic is needed to estimate the role of hypertrophy in strength adaptation.

https://pubmed.ncbi.nlm.nih.gov/31161403/

---

## 11. Applied resistance-training mediation example

Spitz RW, et al.  
**Does muscle growth mediate changes in a nonspecific strength task?**  
Clin Physiol Funct Imaging. 2023;43(4):223–231.

Randomized training groups plus control; mediation models assessed whether muscle growth mediated nonspecific strength gains.

Used here as a concrete exercise-science example of:

> randomized treatment assignment + nonrandomized mediator + mediation analysis.

https://pubmed.ncbi.nlm.nih.gov/36647320/

---

# Part A — Canonical mediation structure

## 1. Minimal causal structure

`A → M → Y`

where:

- **A** = exposure/intervention;
- **M** = mediator;
- **Y** = downstream outcome.

A mediator is not merely associated with both A and Y.

For causal mediation:

1. A must affect M;
2. M must causally affect Y under the target estimand/assumptions;
3. M must occur in the causal sequence between A and Y.

---

## 2. Mediation is an analysis/inferential framework, not one source design

### Project rule
**Confidence: HIGH**

Mediation analysis can be applied to data generated by:

- randomized parallel trial;
- crossover/within-person trial where the causal structure is compatible;
- cluster randomized trial;
- prospective cohort;
- retrospective cohort;
- case-control under appropriate methods;
- other causal designs.

Therefore record separately:

1. original source design;
2. mediation estimand/analysis.

Do not classify:

> design = mediation study

without the parent design.

---

# Part B — Mediator vs other variables

## 3. Mediator

Question:

> Through what intermediate variable/process does A affect Y?

Role:

`A → M → Y`

---

## 4. Biomarker

A biomarker is a measured indicator of biological state/process.

It may be:

- mediator;
- exposure;
- outcome;
- predictor;
- merely correlated readout.

### Project rule

> biomarker status does not establish mediator status.

---

## 5. Target

A target is the biological/behavioral process intended to be perturbed.

Target engagement establishes:

`A → M`

but mediation requires the additional causal link:

`M → Y`.

---

## 6. Moderator/effect modifier

Question:

> For whom / under what conditions is A→Y larger or smaller?

This is effect heterogeneity.

It is not mediation.

---

## 7. Confounder

A confounder causally influences two relevant variables/relations.

Mediation may involve confounders of:

1. A–M;
2. A–Y;
3. M–Y.

---

## 8. Collider

A collider is caused by two variables.

Conditioning on it can induce association/selection bias.

### Project rule

Do not “adjust for every associated variable”.

Adjustment must follow a causal model.

---

# Part C — Temporal ordering

## 9. Minimal temporal logic

For ordinary mediation hypothesis:

`A before M before Y`.

### Established guidance
**Confidence: HIGH**

Temporal precedence is required to make the proposed causal direction plausible.

---

## 10. Cross-sectional mediation

If A, M and Y are all measured at the same time:

> temporal direction is usually not identifiable.

Possible reverse paths include:

- Y → M;
- M → A;
- Y → A.

### Project rule

Cross-sectional coefficient decomposition should generally be treated as:

> associative/statistical mediation pattern,

not strong causal mechanism evidence.

Rare exceptions require external knowledge that fixes temporal order.

---

## 11. Change scores do not automatically solve temporality

Using:

- ΔM;
- ΔY

does not itself prove:

> mediator change occurred before outcome change.

If both are derived from the same pre/post interval, the causal ordering within that interval may be unresolved.

### Fitness example

`pre/post hypertrophy change → pre/post strength change`

can remain temporally ambiguous if both adaptations accumulated together over six weeks.

---

# Part D — Mediation in randomized trials

## 12. What randomization of A buys

In a well-conducted trial:

randomization supports exchangeability for:

- A → M;
- A → Y;

with respect to baseline confounding, in expectation.

---

## 13. What randomization of A does NOT buy

The mediator M is generally not randomized.

Therefore the relation:

`M → Y`

can still be confounded.

Potential M–Y confounders:

- baseline physiology;
- genetics;
- training history;
- adherence;
- recovery;
- nutrition;
- motivation;
- measurement quality;
- post-randomization variables.

### Critical project rule

> **Randomized treatment ≠ randomized mediator.**

---

## 14. Fitness example: hypertrophy → strength

Randomize participants to training conditions.

Training assignment A is randomized.

Observed hypertrophy M varies between individuals.

Strength outcome Y varies.

This does not mean:

> individual differences in hypertrophy were randomized.

Therefore correlation/association between M and Y can still be confounded.

---

# Part E — Mediation in observational studies

## 15. Additional confounding burden

When A is observational, valid causal mediation generally requires stronger control/assumptions for:

1. A–M confounding;
2. A–Y confounding;
3. M–Y confounding.

### Project rule

An observational mediation model is not upgraded to causal merely because:

- many covariates were adjusted;
- path coefficients are significant;
- indirect effect bootstrap CI excludes zero.

Causal interpretation depends on identification assumptions.

---

# Part F — Core causal effect families

## 16. Total effect

Question:

> What is the overall causal effect of changing A on Y?

This contains all pathways represented in the causal model.

---

## 17. Direct effect

General question:

> What portion/contrast of A→Y does not operate through the specified mediator M?

But “direct effect” is not one universal estimand.

Different definitions answer different interventions/counterfactual questions.

---

## 18. Indirect effect

General question:

> What portion/contrast operates through M?

Again, several causal definitions exist.

### Project rule

Never extract:

> “direct effect” / “indirect effect”

without recording the estimand definition.

---

# Part G — Controlled direct effect

## 19. Controlled direct effect (CDE)

Question:

> What would be the effect of A on Y if M were fixed to a specified level m for everyone?

This is an explicit intervention-on-mediator estimand.

### Useful when

The scientific/practical question concerns:

> what remains of A's effect if mediator M could be controlled at level m?

---

## 20. Controlled direct effect is not the same as natural direct effect

CDE fixes mediator to a chosen common value.

Natural direct effects use mediator values that would arise naturally under an exposure condition.

These are different counterfactual questions.

---

# Part H — Natural direct and indirect effects

## 21. Natural direct effect

Conceptually asks:

> effect of A on Y while mediator is set to the value it would naturally take under a specified exposure level.

---

## 22. Natural indirect effect

Conceptually asks:

> effect transmitted through changing the mediator from the value/distribution it would naturally have under one exposure condition to that under another.

### Value

Natural effects were developed to decompose the total causal effect into path-specific components under assumptions.

---

## 23. Strong assumptions

Identification typically requires, among other conditions appropriate to the setting:

- no unmeasured A–Y confounding;
- no unmeasured A–M confounding;
- no unmeasured M–Y confounding;
- appropriate consistency;
- positivity;
- correct temporal structure;
- no problematic exposure-induced M–Y confounder for the standard natural-effect identification formula.

### Project rule

Natural-effect language implies stronger causal commitments than a simple statistical indirect-effect coefficient.

---

# Part I — Exposure-induced mediator–outcome confounding

## 24. Canonical structure

`A → L → M`  
`A → L → Y`  
`M → Y`

Here L:

- is caused by A;
- also confounds M→Y.

Example:

Training A changes fatigue/recovery L.

L influences:

- subsequent training adherence or hypertrophy mediator M;
- final strength outcome Y.

---

## 25. Why ordinary adjustment is difficult

L is simultaneously:

- post-exposure;
- part of the effect process;
- a confounder of M–Y.

Simply treating L like an ordinary baseline confounder can alter/block exposure pathways and does not restore standard natural-effect identification.

### Established result
**Confidence: HIGH**

Standard natural direct/indirect effects are generally not identified by the ordinary mediation formula in this structure.

---

# Part J — Interventional direct/indirect effects

## 26. Purpose

Interventional/stochastic analogues define mediator interventions through distributions rather than necessarily individual-specific “natural” mediator values.

They can answer questions such as:

> what would happen if the mediator distribution under A=1 were shifted toward the distribution under A=0?

---

## 27. Why important

Some interventional effect definitions remain identifiable under weaker assumptions than standard natural effects when exposure-induced mediator–outcome confounders exist.

### Important nuance

Different interventional definitions:

- answer different questions;
- do not always coincide with natural effects;
- do not all decompose the total effect in the same way.

### Project rule

Do not collapse:

> natural indirect effect  
> interventional indirect effect  
> controlled direct effect

into one generic “mediation effect”.

---

# Part K — Estimand must follow the mechanism question

## 28. Mechanism decomposition question

If the aim is:

> explain how the total effect operates through M,

natural/path-specific or appropriate interventional analogues may be relevant depending assumptions.

---

## 29. Intervention-on-mediator question

If the aim is:

> what would happen if we actively controlled/changed M?

controlled or interventional mediator effects can be more directly aligned.

### Project rule

Choose estimand from:

> scientific intervention/question + identification feasibility,

not from software default.

---

# Part L — Exposure–mediator interaction

## 30. A and M can interact in causing Y

The effect of M on Y may differ depending on A.

Then simple two-part decomposition can become more complex.

Possible components can distinguish:

- pure/direct effects;
- mediated effects;
- mediated interaction.

### Project rule

Do not assume:

> direct + indirect decomposition is invariant to interaction.

The chosen effect scale and interaction structure matter.

Detailed decompositions are deferred.

---

# Part M — Why “adjust for mediator” is not enough

## 31. Common naive approach

Fit:

1. `Y ~ A`;
2. `Y ~ A + M`;

then interpret reduction in A coefficient as mediation.

### Problem

This does not automatically identify a causal indirect effect.

---

## 32. Reasons

Possible failures:

1. M–Y confounding;
2. exposure-induced M–Y confounding;
3. collider bias;
4. temporal ambiguity;
5. nonlinear outcome models;
6. A×M interaction;
7. mediator measurement error;
8. missing data/selection;
9. model misspecification;
10. inappropriate effect scale.

### Project rule

“Coefficient attenuated after adjustment” is at most:

> evidence consistent with mediation under restrictive assumptions,

not automatic causal mechanism proof.

---

# Part N — Baron–Kenny / significance-step logic

## 33. Significance steps are not the causal estimand

Traditional logic can ask whether:

- A relates to Y;
- A relates to M;
- M relates to Y adjusted for A;
- A coefficient changes after M inclusion.

This can be useful descriptively.

But modern causal mediation focuses on:

- explicit causal estimands;
- assumptions;
- direct/indirect effect estimation;
- uncertainty;
- sensitivity analysis.

### Project rule

Do not require:

> statistically significant total effect

as a universal prerequisite for meaningful indirect pathways.

Effects can operate through opposing pathways.

---

# Part O — Proportion mediated

## 34. “X% mediated” is not universally stable

Proportion mediated can behave poorly when:

- total effect is near zero;
- direct and indirect effects have opposite signs;
- nonlinear scales are used;
- interactions exist.

### Project rule

Prefer reporting:

- direct effect;
- indirect effect;
- total effect;
- uncertainty;
- scale/estimand;

rather than relying on one percentage alone.

---

# Part P — Mediator measurement error

## 35. Mediator quality is central

A mediator measure can have:

- random error;
- systematic error;
- limited reliability;
- construct contamination;
- assay detection limits;
- wrong biological compartment.

---

## 36. Error can bias mediated effects

### Established finding
**Confidence: HIGH**

Measurement error in M can substantially bias:

- M→Y relation;
- indirect effect;
- direct effect.

The direction of bias is not universally “toward zero” in all settings.

### Project rule

A noisy mediator can make:

> “no mediation”

a measurement failure rather than biological refutation.

---

# Part Q — Outcome/exposure measurement error also matters

## 37. Exposure mismeasurement

Especially in observational studies:

- exercise dose;
- nutrition;
- sleep;
- physical activity

can be error-prone.

This can bias total and mediated effects.

---

## 38. Outcome measurement error

Weak or inconsistent outcome measurement:

- reduces precision;
- can bias path estimates depending on structure;
- can change apparent mediation.

### Project record

For A, M and Y separately capture:

- instrument;
- reliability;
- timing;
- blinding;
- biological compartment;
- detection limit.

---

# Part R — Multiple mediators

## 39. Parallel mediators

Conceptual:

`A → M1 → Y`  
`A → M2 → Y`

M1 and M2 may share causes or be correlated.

Question:

> how much of A→Y operates through each mediator/pathway?

---

## 40. Serial mediators

Conceptual:

`A → M1 → M2 → Y`

Here causal order between mediators is part of the scientific claim.

Example:

`training → neural activation change → technique change → strength`.

### Project rule

Serial mediation requires credible temporal/causal order between M1 and M2.

---

## 41. Unknown mediator ordering

If M1/M2 are measured simultaneously and causal direction between them is unclear:

> separate path-specific attribution may not be identified/credible.

A joint-mediated effect may be more defensible than claiming:

> M1 causes M2.

---

## 42. Do not sum independent single-mediator analyses naively

Running separate models for M1, M2, M3 can double-count or misattribute shared pathways if mediators:

- correlate;
- cause one another;
- share confounders.

### Project rule

Multiple mediators need a joint causal structure.

---

# Part S — Longitudinal/time-varying mediation

## 43. Repeated causal process

Fitness adaptation often looks like:

`A0 → M1 → A1 → M2 → A2 → … → Y`

Examples:

- training prescription changes fatigue;
- fatigue changes next training dose/adherence;
- later training changes hypertrophy;
- hypertrophy/skill jointly affect final strength.

This is not a one-mediator static problem.

---

## 44. Time-varying confounding

A later variable can be:

- caused by earlier exposure;
- confound later mediator–outcome relation.

Ordinary regression adjustment can then produce bias.

### Current methods principle
**Confidence: HIGH**

Longitudinal mediation can require g-methods such as:

- mediational g-formula;
- inverse-probability approaches;
- sequential g-estimation;

depending the estimand/data structure.

Exact methods are deferred.

---

## 45. One post-treatment mediator measurement can miss mechanism dynamics

A single M at week 6 may fail to represent:

- early pathway activation;
- adaptation trajectory;
- feedback;
- mediator timing relative to outcome.

### Project rule

Mechanism timing is itself part of the causal model.

---

# Part T — Multilevel / clustered mediation

## 46. Exposure, mediator and outcome can exist at different levels

Example:

- gym-level coaching policy A;
- participant-level adherence M;
- participant strength outcome Y.

Or:

- team-level intervention;
- individual mediator/outcome.

### AGReMA rule

Report levels of:

- exposure assignment;
- mediator;
- outcome;
- clusters.

---

## 47. Cluster structure affects interpretation

Potential issues:

- within-cluster dependence;
- group-level confounding;
- spillover/interference;
- mediator operating at different level from exposure/outcome.

### Scope decision

Detailed multilevel mediation estimators are statistical and deferred.

But multilevel structure is mandatory taxonomy metadata.

---

# Part U — Missing data and selection

## 48. Mediation is especially vulnerable to complete-case selection

To be included, participant may need:

- A;
- mediator M;
- outcome Y;
- confounders.

Missingness can therefore create selection/collider bias.

### Project rule

Do not assume:

> mediation subset = original randomized/observational population.

Record attrition into mediation analysis specifically.

---

# Part V — Sensitivity analysis

## 49. Causal assumptions are not fully testable from observed data

Therefore mediation evidence should, where possible, examine robustness to:

- unmeasured M–Y confounding;
- measurement error;
- model specification;
- missingness/selection;
- alternative causal structures.

### Project rule

Sensitivity analysis strengthens transparency.

It does not “prove” assumptions true.

---

# Part W — DAG role

## 50. DAG should precede adjustment decisions

A mediation DAG should explicitly show:

- A;
- M;
- Y;
- baseline confounders;
- post-exposure confounders;
- possible colliders;
- multiple mediators if relevant.

### Project rule

Use DAG to define:

> what should/should not be adjusted,

not merely as a decorative figure after analysis.

---

# Part X — Fitness/exercise example: hypertrophy mediating strength

## 51. Scientific question

`resistance training A → hypertrophy M → strength Y`

Possible evidence layers:

1. randomize training A;
2. show A changes M;
3. show A changes Y;
4. estimate M→Y under appropriate confounding control;
5. estimate indirect/direct effects.

---

## 52. Common invalid shortcut

> participants who hypertrophied more also became stronger.

This does not identify mediation because common causes can affect both:

- adherence;
- baseline training status;
- genetics;
- nutrition;
- neural adaptation;
- measurement error.

---

## 53. Randomizing training volume is not randomizing hypertrophy

Nuzzo et al. explicitly highlight this problem.

Training volume A may create different M.

But individual M remains post-randomization and nonrandomized.

### Project rule

Randomized manipulation of a cause of the mediator is not automatically equivalent to randomizing the mediator itself.

---

# Part Y — Fitness example: training → physical activity behavior → VO₂max

## 54. Possible mediation structure

`supervised training A → later daily physical activity M → VO₂max Y`

Need:

- A before M;
- M before Y;
- control of M–Y confounding;
- avoid conflating post-treatment behavior with randomized treatment.

If treatment also changes other post-treatment variables that affect both M and Y:

> exposure-induced M–Y confounding may arise.

---

# Part Z — Fitness example: load → neural adaptation / hypertrophy → strength

## 55. Multiple mediator problem

Potential mediators:

- hypertrophy;
- neural drive;
- skill/technique;
- tendon adaptation.

These may:

- act in parallel;
- act sequentially;
- share causes;
- interact.

### Project rule

Four separate single-mediator regressions do not establish four independent pathways.

Need a causal model for their relationships.

---

# Part AA — Acute mediator vs chronic outcome

## 56. Example

`acute training condition A → acute signaling M → 12-week hypertrophy Y`

A single acute M measurement can be a candidate mechanism marker.

But to claim mediation of chronic adaptation, need to justify:

- stability/relevance of M;
- temporal relation;
- repeated exposure;
- whether acute M represents cumulative pathway activity;
- M–Y confounding.

### Project rule

Acute target engagement is not automatically a valid longitudinal mediator of chronic adaptation.

---

# Part AB — Mediation vs moderation

## 57. Mediation

> Through what process?

`A → M → Y`

## 58. Moderation

> For whom / when is effect different?

`effect(A→Y) depends on Z`

### Project rule

A variable cannot be called mediator merely because interaction with A is significant.

And it cannot be called moderator merely because it is correlated with mediator response.

---

# Part AC — Mediation vs surrogate endpoint

## 59. Mediator

Causal intermediate.

## 60. Surrogate

Measure intended to substitute for final outcome in predicting/interpreting intervention effect.

A mediator may fail as surrogate if:

- it captures only part of causal effect;
- intervention has other pathways;
- surrogate–outcome association is noncausal.

### Scope

Formal surrogate validation deferred.

Boundary retained.

---

# Part AD — Structural record for mediation studies

For every mediation/pathway study, record:

1. source study design;
2. randomized A? YES/NO;
3. cluster/randomization level;
4. population;
5. exposure/intervention A;
6. mediator M;
7. downstream outcome Y;
8. causal DAG available?;
9. A→M temporally ordered?;
10. M→Y temporally ordered?;
11. cross-sectional mediation?;
12. baseline A–M confounders;
13. baseline A–Y confounders;
14. baseline M–Y confounders;
15. exposure-induced M–Y confounder present?;
16. collider risk?;
17. consistency plausibility;
18. positivity plausibility;
19. mediator well-defined/intervenable?;
20. mediator measurement tool;
21. mediator reliability/validity;
22. mediator biological compartment;
23. mediator measurement timing;
24. outcome measurement timing;
25. exposure measurement error;
26. mediator measurement error;
27. outcome measurement error;
28. total effect estimand;
29. direct-effect type:
    - controlled;
    - natural;
    - interventional;
    - other;
30. indirect-effect type:
    - natural;
    - interventional;
    - path-specific;
    - other;
31. effect scale;
32. A×M interaction considered?;
33. multiple mediators?;
34. parallel/serial/unknown order;
35. time-varying mediator/exposure?;
36. longitudinal g-method used?;
37. multilevel structure?;
38. spillover/interference possible?;
39. missingness/selection into mediation subset;
40. sensitivity analysis for unmeasured confounding?;
41. sensitivity analysis for measurement error?;
42. mediation proportion reported?;
43. interpretation dependent on assumptions stated?;
44. mechanism claim proportional to evidence?;
45. final project classification;
46. unresolved causal-identification issues.

---

# Practical rules produced by PASS-06C3

1. Mediation asks how an exposure/intervention causes an outcome through an intermediate variable/process.
2. Mediation is an inferential/analysis framework layered on an underlying source design, not one atomic study design.
3. A mediator must be conceptually affected by A and causally affect Y under the target estimand.
4. Biomarker, target, mediator, moderator, confounder and collider are different causal roles.
5. Temporal order should be A before M before Y.
6. Cross-sectional mediation is generally weak for causal inference when temporal order is not externally fixed.
7. Pre/post change scores do not automatically establish that mediator change preceded outcome change.
8. Randomization of A supports A→M and A→Y exchangeability but does not randomize M.
9. Mediator–outcome confounding remains a core problem in randomized trials.
10. Observational mediation additionally requires control/assumptions for A–M and A–Y confounding.
11. Total, direct and indirect effects must be defined as explicit causal estimands.
12. “Direct effect” and “indirect effect” are not single universal quantities.
13. Controlled direct effects, natural effects and interventional effects answer different causal questions.
14. Natural direct/indirect effects typically require stronger identification assumptions.
15. Exposure-induced mediator–outcome confounding breaks ordinary identification of standard natural effects.
16. Ordinary adjustment for an exposure-induced mediator–outcome confounder is not a universal repair.
17. Some interventional direct/indirect effect formulations can remain identifiable under weaker assumptions in such settings.
18. Interventional and natural effects should not be treated as interchangeable.
19. Estimand choice must follow the scientific question and identification feasibility, not software default.
20. Exposure–mediator interaction can change effect decomposition.
21. Comparing the A coefficient before/after adding M does not automatically identify causal mediation.
22. Traditional significance-step/Baron–Kenny logic is not a substitute for explicit causal estimands and assumptions.
23. A statistically nonsignificant total effect is not a universal reason to forbid investigation of opposing indirect pathways.
24. “Percent mediated” can be unstable/misleading when total effect is near zero, pathways oppose, interactions exist, or scales differ.
25. Mediator measurement error can substantially bias direct and indirect effects.
26. Mediator measurement quality is part of causal validity, not merely measurement reporting.
27. Multiple mediators require an explicit joint causal structure.
28. Separate single-mediator models can double-count or misattribute shared pathways.
29. Serial mediation requires credible order between mediators.
30. If mediator ordering is unknown, path-specific claims should be weakened; joint-mediated effects may be more defensible.
31. Longitudinal/time-varying mediation can contain exposure-induced time-varying confounding and may require g-methods.
32. One post-treatment mediator measurement can miss the true temporal mechanism.
33. Multilevel/clustered mediation must record exposure, mediator and outcome levels separately.
34. Mediation subsets can differ from the original trial/cohort because of missing mediator/outcome data, creating selection bias.
35. DAGs should guide confounder/collider adjustment before modeling.
36. Sensitivity analyses assess robustness to causal assumptions; they do not prove assumptions true.
37. Randomizing training volume does not randomize hypertrophy; hypertrophy→strength can remain confounded.
38. Correlation between training-induced change in muscle size and strength does not establish mediation.
39. Acute signaling can be a mediator candidate but does not automatically mediate chronic hypertrophy/strength.
40. Mediation asks “through what pathway?”, moderation asks “for whom/when does the effect differ?”.
41. Mediator and surrogate endpoint are not synonyms.
42. Mechanism claims should be proportional to source design, temporal structure, measurement quality and identification assumptions.

---

# Evidence limitations

1. Causal mediation contains multiple estimand frameworks; terminology is not fully uniform across methods papers.
2. Natural-effect identification can rely on strong cross-world/structural assumptions; this pass records the taxonomy rather than endorsing one framework universally.
3. Interventional effects reduce some identification problems but do not remove all confounding/measurement assumptions.
4. Randomized trials solve only some mediation-confounding relations because the mediator is post-randomization.
5. Longitudinal mediation with time-varying confounding is substantially more complex than one-mediator regression.
6. Multiple-mediator path-specific effects can be poorly identified when mediator ordering is uncertain.
7. Measurement error in biological mediators is common and can materially change indirect-effect estimates.
8. Many exercise studies measure mediator and outcome change over the same training interval, weakening temporal mechanistic claims.
9. “Mediation” estimates are not direct experimental proof of necessity/sufficiency of the mediator; perturbation evidence from PASS-06C2 remains complementary.
10. Exact causal identification/estimation belongs to later causal-inference/statistical topics; RES-02 responsibility is design/estimand classification.

---

# Gap status after PASS-06C3

Causal mediation/pathway structures are covered at taxonomy level for:

- mediator definition;
- randomized vs observational mediation;
- total/direct/indirect effects;
- controlled/natural/interventional effect families;
- mediator–outcome confounding;
- exposure-induced confounding;
- temporal order;
- measurement error;
- multiple/serial mediators;
- longitudinal/time-varying mediation;
- clustered/multilevel recognition;
- exercise-specific hypertrophy/strength examples.

Mechanistic branch remains **RESEARCHING**.

Still required:

1. PASS-06C4 — observational mechanistic / biomarker / omics evidence;
2. PASS-06C5 — nonhuman / translational mechanistic models;
3. integration/gap audit;
4. additional passes if blockers emerge;
5. mechanistic synthesis only after clean audit.

## Next micro-pass

**RES-02 / PASS-06C4 — observational mechanistic, biomarker and omics study structures: descriptive pathway evidence, cross-sectional vs longitudinal biomarker evidence, molecular epidemiology, temporality/reverse causation, high-dimensional omics discovery, multiplicity/replication, causal-vs-correlational interpretation, and boundary with Mendelian randomization/other causal designs without duplicating later causal-inference topics.**

STOP after this saved micro-pass.
