# RES-02 / PASS-06C1 — Mechanistic/explanatory study structures: scope and taxonomy

Статус: **COMPLETE MICRO-PASS — mechanistic branch RESEARCHING**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. определить, что в этом проекте считается mechanistic scientific question;
2. отделить mechanism question от intervention efficacy/effectiveness;
3. отделить mechanism от etiologic/risk-factor association;
4. отделить mechanism от causal mediation analysis;
5. классифицировать controlled human physiology/laboratory experiments на taxonomy level;
6. учесть актуальную NIH-классификацию BESH vs mechanistic clinical trials;
7. определить границу target engagement vs demonstrated mechanism;
8. отделить descriptive biomarker/physiology response от mechanistic inference;
9. определить human vs animal / in vitro / ex vivo / computational evidence boundary;
10. определить, какие design families требуют отдельных глубоких passes;
11. сохранить causal-identification boundary;
12. определить следующий mechanistic micro-pass.

Не покрывается здесь:

- detailed randomized mechanistic perturbation designs;
- blockade/rescue/challenge/dose perturbation details;
- exact mediation estimands;
- natural/interventional direct/indirect effects;
- longitudinal mediator-confounding methods;
- omics causal discovery;
- Mendelian randomization details;
- animal-study RoB tools;
- in vitro quality appraisal;
- detailed translational extrapolation;
- surrogate-endpoint validation;
- final mechanistic synthesis.

---

# Terminology warning: “mechanistic/explanatory” != “explanatory trial”

В PASS-02 уже зафиксировано:

> pragmatic vs explanatory = **trial orientation**, а не mechanism taxonomy.

Поэтому в этой ветке слово **explanatory** используется только в смысле:

> объяснить, **как / через какой процесс** cause/intervention приводит к effect,

а не в смысле классической оси:

> explanatory efficacy-oriented trial vs pragmatic trial.

Чтобы избежать смешения, основной термин этой ветки:

> **mechanistic study / mechanistic question**.

---

# Sources checked

## 1. NIH Grants Glossary — current BESH definition

Current NIH Grants Glossary checked 2026-11-17.

Current definition:

**Basic Experimental Studies with Humans (BESH)** are studies that:

- prospectively assign human participants to conditions;
- experimentally manipulate independent variables;
- assess biomedical or behavioral outcomes;
- aim to understand **fundamental aspects of phenomena**;
- do so **without specific application towards processes or products in mind**.

Current policy note:

> for application due dates on or after **May 25, 2026**, NIH no longer characterizes BESH as clinical trials.

https://www.grants.nih.gov/grants/glossary.htm

---

## 2. NIH NOT-OD-26-032 and NOT-OD-26-067 — current BESH policy

Checked 2026-11-17.

NIH changed the **administrative clinical-trial classification**, not the scientific existence of experimental human mechanism research.

Effective for applications due on/after 2026-05-25:

- BESH is no longer considered an NIH clinical trial;
- BESH still involves experimental manipulation in humans;
- it remains subject to human-subject protections and other applicable NIH policies.

NIH explains the rationale as:

- BESH aims to understand fundamental biological/behavioral phenomena;
- it is not conducted with the express intent of directly advancing clinical practice/health application.

https://www.grants.nih.gov/grants/guide/notice-files/NOT-OD-26-032.html  
https://www.grants.nih.gov/grants/guide/notice-files/NOT-OD-26-067.html

### Project implication

Do **not** use:

> “NIH clinical trial”

as the scientific definition of a mechanistic experiment.

The administrative label changed in 2026 while the underlying experiment structure did not.

---

## 3. NIH/NHLBI — mechanistic clinical trial

Current NHLBI FAQ checked 2026-11-17.

NHLBI defines a mechanistic clinical trial as a study designed to understand, in humans:

- a biological or behavioral process;
- disease/pathophysiology;
- mechanism of action of an intervention.

The FAQ emphasizes that mechanistic and efficacy trials may use very similar:

- populations;
- interventions;
- outcome collection;
- allocation structures.

What distinguishes mechanistic purpose includes:

- an explicit hypothesis about a mechanism;
- outcomes able to distinguish mechanism hypotheses;
- an analysis plan testing that mechanism hypothesis;
- sample size justified for the mechanistic target.

It also states that the primary purpose is not ordinary safety/efficacy/effectiveness testing.

https://www.nhlbi.nih.gov/node-general/frequently-asked-questions-mechanistic-clinical-trials

---

## 4. NCCIH — mechanism vs clinical outcome trials

Current NCCIH clinical-trial framework checked 2026-11-17.

NCCIH explicitly separates:

### Mechanistic study

Designed to understand:

- mechanism of action;
- biological process;
- pathophysiology.

### Clinical outcome study

Designed primarily to evaluate:

- safety;
- tolerability;
- feasibility;
- efficacy;
- effectiveness.

https://www.nccih.nih.gov/grants/nccih-clinical-trials-funding-opportunities/overview

### Project implication

**Scientific purpose is not determined by randomization alone.**

A randomized trial can be:

- mechanistic;
- efficacy-focused;
- effectiveness-focused;
- hybrid.

---

## 5. NIDDK — physiologic studies can be mechanistic

Current NIDDK human-subject research page checked 2026-11-17.

NIDDK explicitly includes:

> physiologic studies and basic behavioral/experimental studies

within its description of mechanistic human research.

This supports direct relevance to exercise physiology.

https://www.niddk.nih.gov/research-funding/human-subjects-research

---

## 6. NIH current BESH vs observational classification page

Current NIH page updated June 29, 2026 checked 2026-11-17.

It distinguishes:

### BESH

- prospective assignment;
- experimental manipulation;
- fundamental phenomenon;
- no immediate/direct health application.

### Observational human study

- data gathered from/about humans;
- researchers do not perform an intervention/manipulation.

It provides current examples of experimental probes used to understand biological mechanisms.

https://grants.nih.gov/policy-and-compliance/policy-topics/clinical-trials/clinical-trial-besh-or-observational-study-involving-humans

---

## 7. NIMH / NIH experimental-medicine framework

Current NIMH materials and NIH Science of Behavior Change framework checked.

Experimental medicine logic:

1. identify a putative mechanism/target;
2. develop/choose an assay that can measure the target;
3. perturb the target through an intervention/manipulation;
4. test target engagement;
5. examine whether target engagement is related causally/temporally to downstream outcome change.

Critical principle:

> an intervention can be used as an **experimental probe**, not merely as a treatment.

https://www.nimh.nih.gov/research/research-funded-by-nimh/psychosocial-research-at-nimh-a-primer  
https://pmc.ncbi.nlm.nih.gov/articles/PMC4656226/

---

## 8. Parkkinen et al. — evidence of mechanisms

Parkkinen VP, Wallmann C, Wilde M, et al.  
**Evaluating Evidence of Mechanisms in Medicine: Principles and Procedures.** 2018.

Used as a foundational conceptual source, not as mutable regulatory guidance.

It distinguishes evidence for specific mechanism hypotheses and describes mechanistic evidence arising through:

1. **experimental manipulation**;
2. **observation** of entities/activities/organization;
3. **analogy** to related mechanisms.

It also notes:

- simulation can test whether a hypothesized organization is sufficient to generate a phenomenon;
- simulation assumptions require empirical corroboration for causal claims;
- strong correlation alone can be confounded;
- mechanistic evidence from in vitro/model-organism systems raises a separate human-extrapolation problem.

https://www.ncbi.nlm.nih.gov/books/NBK543863/

---

## 9. BMJ 2023 causal mediation guidance

Cashin AG, McAuley JH, VanderWeele TJ, Lee H.  
**Understanding how health interventions or exposures produce their effects using mediation analysis.**  
BMJ. 2023;382:e071757.

Checked current HTML 2026-11-17.

Key points:

- a mechanism is a causal process by which exposure causes outcome;
- mediator lies on the causal pathway;
- mediation questions are inherently causal;
- temporal order matters:
  - exposure → mediator → outcome;
- randomized treatment can remove treatment-related confounding, but does **not** automatically remove mediator-outcome confounding;
- causal mediation requires assumptions beyond ordinary randomized treatment-effect estimation.

https://www.bmj.com/content/382/bmj-2022-071757

---

## 10. AGReMA reporting guideline

Lee H, Cashin AG, Lamb SE, et al.  
**A Guideline for Reporting Mediation Analyses of Randomized Trials and Observational Studies: The AGReMA Statement.**  
JAMA. 2021.

Current reporting guidance checked.

It explicitly requires attention to:

- confounding;
- measurement error;
- selection;
- model specification;
- missing data;
- causal assumptions.

https://pmc.ncbi.nlm.nih.gov/articles/PMC8974292/

---

## 11. Exercise-specific mechanistic evidence discussion

A 2022 exercise-methodology paper was checked only for domain translation:

**Mechanistic evidence and exercise interventions: Causal claims, extrapolation, and implementation.**

Useful domain point:

- exercise evidence often combines intervention-effect studies with mechanistic evidence;
- acute physiological/mechanistic evidence may support causal plausibility or extrapolation;
- mechanism evidence should not be silently substituted for direct evidence of long-term training effect.

https://pmc.ncbi.nlm.nih.gov/articles/PMC9804705/

This source is used for exercise relevance, not as the canonical taxonomy authority.

---

# Part A — Canonical definition of a mechanistic question

## 1. Core scientific target

### Project synthesis
**Confidence: HIGH**

A mechanistic question asks:

> **What causal process, intermediate target, component, activity, or organized pathway explains how a putative cause/intervention produces an effect?**

Minimal conceptual structure:

`A → M → Y`

where:

- `A` = exposure/intervention/perturbation;
- `M` = one or more mechanistic intermediate processes/targets;
- `Y` = downstream phenomenon/outcome.

A more detailed mechanism may contain:

`A → M1 → M2 → M3 → Y`

and feedback/counter-regulation.

---

## 2. A direct A → Y effect estimate is not, by itself, a mechanism study

### Established distinction
**Confidence: HIGH**

Suppose a randomized training study shows:

> intervention A increases strength Y.

That establishes evidence about:

> intervention effect A → Y

under the study conditions.

It does **not** by itself establish:

> why A increased Y.

To support a mechanistic claim, the study needs evidence about one or more intermediate processes/features capable of explaining the causal path.

### Project rule

Do not label a study mechanistic merely because:

- authors discuss a plausible mechanism;
- biological markers were collected;
- the intervention was randomized;
- the outcome changed.

---

# Part B — Mechanistic purpose vs intervention efficacy/effectiveness

## 3. Same structural RCT can answer different questions

### Established finding
**Confidence: HIGH**

A randomized parallel or crossover experiment can have:

### Effectiveness/efficacy purpose

> Does intervention A change performance/health outcome Y?

### Mechanistic purpose

> Does A perturb target M as hypothesized, and does the behavior of M support mechanism hypothesis H?

### Hybrid purpose

> Does A change Y, and is the effect plausibly transmitted through M?

### Project rule

Classify separately:

1. **allocation/design structure**;
2. **scientific purpose**.

Mechanistic is primarily a **purpose/inferential-target axis**, not a replacement for:

- randomized parallel;
- crossover;
- factorial;
- within-person;
- nonrandomized intervention.

---

## 4. Mechanistic clinical trial != clinical outcome trial

### Current NIH/NCCIH distinction
**Confidence: HIGH**

Mechanistic trial:

- primary objective = process/pathway/mechanism.

Clinical outcome trial:

- primary objective = safety/efficacy/effectiveness/clinical management.

A mechanistic study may include a performance/clinical outcome.

But:

> presence of a clinical outcome does not redefine the primary mechanism aim.

---

# Part C — Current NIH human-experiment taxonomy

## 5. BESH

### Current 2026 NIH definition
**Confidence: HIGH**

BESH uses prospective experimental manipulation in humans to understand fundamental biological/behavioral phenomena without immediate specific application.

Since 2026-05-25:

> NIH no longer administratively classifies BESH as clinical trials.

### Exercise example

Randomly assign healthy volunteers to:

- normal oxygen;
- acute hypoxia;

to understand fundamental ventilatory/metabolic physiology.

If the purpose is basic phenomenon rather than treatment/health application:

> current NIH administrative category may be BESH.

---

## 6. Mechanistic clinical trial

### Current NIH-institute usage
**Confidence: HIGH**

A human intervention study can remain a mechanistic clinical trial when:

- it meets the applicable clinical-trial structure;
- its primary aim is mechanism/pathophysiology/mechanism of action;
- the target has direct health/intervention-development relevance.

### Project rule

BESH vs mechanistic clinical trial is useful metadata for current NIH research administration.

It is **not** the project's complete mechanistic design taxonomy.

---

# Part D — Mechanistic study vs etiologic/risk-factor study

## 7. Etiologic causal question

Question:

> Does exposure A cause outcome Y?

Primary target:

> causal effect of A on Y.

This can be investigated through:

- randomized experiments;
- observational causal designs;
- natural experiments;
- IV/MR-like strategies;
- other causal-identification approaches.

It does not necessarily reveal **how** the effect occurs.

---

## 8. Mechanistic question

Question:

> Through which intermediate process M does A produce Y?

Primary target:

> causal structure/details between cause and effect.

### Project rule

**Causal effect evidence and mechanism evidence are related but not identical.**

One can know:

> A causally affects Y

while still being uncertain about:

> A → M1 → M2 → Y.

And one can have detailed evidence for a pathway in a model system without demonstrating that A actually changes meaningful Y in the target human population.

---

# Part E — Mechanistic study vs ordinary observational association

## 9. Biomarker association is not automatically mechanism

Example:

> higher lactate is associated with greater hypertrophy.

This may provide:

- association;
- hypothesis-generation;
- possible mechanistic clue.

It does not prove:

> lactate causally mediates hypertrophy.

Potential alternatives:

- confounding;
- reverse causation;
- common upstream cause;
- lactate as correlated by-product;
- measurement artifact.

### Project rule

“Biologically plausible association” is not enough to classify the evidence as established mechanism.

---

## 10. Observational evidence can still contribute to mechanism

### Established finding
**Confidence: HIGH**

Observation can identify:

- intermediate entities;
- temporal patterns;
- pathway localization;
- anatomical structures;
- molecular states;
- population covariation consistent with mechanism.

But causal interpretation remains proportional to:

- temporal structure;
- confounding control;
- measurement validity;
- triangulation;
- perturbation evidence.

### Project classification

Observational mechanistic evidence is a valid **evidence source**, but it should not be granted experimental causal status.

---

# Part F — Target engagement

## 11. Definition for project use

**Target engagement** means:

> the intervention/manipulation measurably changed the prespecified biological/behavioral target it was intended to perturb.

Canonical:

`A → M`

Example:

> a specific loading manipulation increases phosphorylation of a prespecified mechanotransduction target.

---

## 12. Target engagement is not full mechanism proof

### Critical rule
**Confidence: HIGH**

Showing:

`A changes M`

does not establish:

`M causes Y`.

A complete mechanistic claim needs evidence addressing the downstream role of M.

Possible stronger structures include:

- mediation analysis;
- direct perturbation of M;
- blockade of M;
- rescue/restoration experiment;
- dose manipulation;
- temporally ordered target change followed by downstream effect;
- convergent evidence across methods/models.

### Project rule

Never write:

> “mechanism proven”

merely because a biomarker changed after intervention.

---

# Part G — Target engagement vs biomarker response

## 13. Any changed biomarker is not automatically a target

### Project synthesis
**Confidence: HIGH**

A biomarker response becomes **target engagement evidence** only if:

1. the target was specified as part of the hypothesized mechanism;
2. the measure validly reflects that target;
3. the manipulation precedes the measured target change;
4. the target is actually perturbed relative to an appropriate counterfactual/comparator.

Otherwise:

> biomarker changed

may be only descriptive physiology.

---

## 14. Proxies require special caution

Fitness examples:

- EMG amplitude;
- lactate;
- acute hormone response;
- acute MPS;
- cell swelling;
- phosphorylation markers.

These can measure real acute phenomena.

But:

> acute proxy ≠ chronic adaptation mechanism by default.

This is consistent with the existing Area 13 rule:

> acute activation/response does not replace longitudinal hypertrophy/strength outcomes.

---

# Part H — Mechanism vs mediation

## 15. Mediation is one formal causal framework

### Established finding
**Confidence: HIGH**

Causal mediation analysis asks whether some of the effect of A on Y operates through mediator M.

Typical estimands decompose:

- total effect;
- direct effect;
- indirect effect.

This is one way to test a pathway hypothesis.

---

## 16. Mechanistic evidence is broader than mediation analysis

A mechanistic study may use:

- direct experimental perturbation;
- target engagement;
- blockade/rescue;
- imaging;
- molecular assays;
- anatomy;
- animal models;
- cell systems;
- simulation;
- observational pathway evidence.

Therefore:

> mechanistic study != mediation analysis.

---

## 17. Mediation analysis does not become causal merely because A was randomized

### Established finding
**Confidence: HIGH**

Randomization of treatment helps identify:

- A → M;
- A → Y;

but the mediator M is usually **not randomized**.

The M → Y relation can remain confounded.

Therefore causal mediation requires assumptions about:

- mediator-outcome confounding;
- exposure-mediator confounding where applicable;
- exposure-outcome confounding;
- temporal order;
- measurement error;
- selection/missingness;
- model specification.

### Project rule

“Randomized trial + mediator regression” is not automatically valid mechanistic proof.

---

# Part I — Temporal sequence in mechanism studies

## 18. Required causal order

For mediator-like mechanisms:

`A before M before Y`

is the minimum temporal logic.

If mediator and outcome are measured simultaneously:

> causal direction may remain ambiguous.

If M is measured after Y:

> M cannot straightforwardly explain that already-occurring Y under the proposed pathway.

### Project rule

Record:

1. manipulation/exposure time;
2. mediator/target measurement time;
3. downstream outcome time.

---

# Part J — Controlled human physiology / laboratory experiments

## 19. Core structure

Controlled physiology experiments deliberately manipulate a physiological determinant/condition and measure the resulting response.

Possible manipulations:

- exercise load;
- contraction mode;
- rest interval;
- blood-flow restriction;
- oxygen availability;
- substrate availability;
- temperature;
- posture;
- pharmacologic probe;
- neural stimulation;
- nutritional dose.

Possible outcomes:

- force;
- metabolic flux;
- muscle protein synthesis;
- signaling;
- oxygen kinetics;
- blood flow;
- EMG;
- hormonal response;
- neural activation.

---

## 20. These experiments reuse ordinary allocation structures

### Project integration
**Confidence: HIGH**

A mechanistic physiology experiment may be:

- randomized parallel;
- crossover;
- randomized within-person/split-body;
- factorial;
- multi-arm;
- nonrandomized controlled;
- single-arm perturbation.

Therefore:

> “laboratory experiment” is not a mutually exclusive alternative to randomized/crossover/etc.

It adds:

- setting/control intensity;
- mechanistic purpose;
- target/process outcome.

---

## 21. Acute reversible mechanisms often fit crossover

### Existing RES-02 rule

For acute/reversible effects:

- crossover can be efficient if washout/recovery adequate.

Examples:

- caffeine;
- acute BFR;
- acute rest interval;
- hypoxia;
- nutrient dose.

For persistent training adaptation:

- crossover may be invalid due to carryover.

This remains an allocation/timing issue, not a mechanistic-definition issue.

---

# Part K — Perturbation logic

## 22. Stronger mechanism evidence asks what happens when a component is manipulated

Conceptual progression:

1. **Observe M**;
2. **Show A changes M**;
3. **Show M predicts/relates to Y**;
4. **Manipulate M specifically**;
5. **Block M and attenuate Y**;
6. **Restore/rescue M and restore Y**;
7. **replicate across methods/model systems**.

This is not a rigid universal hierarchy.

But in general:

> direct perturbation of the hypothesized mechanism component gives stronger causal information about that component than observing correlation alone.

---

## 23. Blockade and rescue are mechanistic modifiers, not separate top-level study designs

Examples:

- receptor blockade;
- pathway inhibitor;
- removal of mechanical stimulus;
- rescue/restoration of a deficient component.

They can be implemented inside:

- randomized parallel;
- crossover;
- factorial;
- cell/animal experiments.

### Project rule

Classify:

> underlying experimental design + perturbation logic + mechanism hypothesis.

---

# Part L — Dose-response evidence

## 24. Dose-response can support a mechanism hypothesis

A graded target response under controlled perturbation can strengthen causal plausibility.

But:

> dose-response alone does not reveal the complete mechanism.

Biological systems may also show:

- thresholds;
- saturation;
- U-shapes;
- feedback;
- compensation.

### Project rule

Do not require simple monotonic dose-response as a universal mechanism criterion.

---

# Part M — Descriptive physiology vs mechanistic inference

## 25. Descriptive acute-response study

Example:

> measure lactate, hormones and EMG before/after one resistance session in one group.

Can answer:

> what changed after the session in this sample?

Without credible comparator/manipulation logic, it is weak for:

> what caused the change?  
> which pathway caused future adaptation?

### Classification

Depending on exact structure:

- descriptive experimental response;
- uncontrolled before-after intervention;
- physiology characterization.

Not automatically strong mechanistic evidence.

---

## 26. Controlled mechanistic experiment

Example:

Randomized crossover:

- high-load condition;
- low-load condition;

with prespecified mechanotransduction markers chosen to discriminate mechanism hypotheses.

This can provide stronger evidence that:

> manipulated condition changes the target process.

Still does not automatically prove:

> target process mediates long-term hypertrophy.

---

# Part N — Acute mechanism vs chronic adaptation

## 27. Major fitness-specific boundary

Acute outcomes:

- phosphorylation;
- EMG;
- MPS;
- lactate;
- hormone concentrations;
- cell swelling.

Chronic outcomes:

- hypertrophy;
- maximal strength;
- tendon adaptation;
- bone adaptation;
- cardiorespiratory adaptation.

### Project rule

An acute experiment can establish:

> acute physiological mechanism/response.

It cannot by itself establish:

> that this acute signal is necessary, sufficient, or quantitatively predictive of chronic adaptation.

Linking acute pathway to chronic adaptation requires additional evidence.

---

# Part O — Human mechanistic evidence vs nonhuman/translational evidence

## 28. Human mechanistic studies

Advantages:

- direct target-population biological relevance;
- same organism/context;
- human physiology/behavior.

Limitations can include:

- inability to manipulate invasive targets;
- surrogate/proxy measurements;
- limited tissue access;
- ethical constraints.

---

## 29. Animal-model studies

Advantages:

- invasive sampling;
- genetic manipulation;
- tissue-specific perturbation;
- blockade/rescue;
- controlled environment.

But:

> mechanism in model organism ≠ automatically same mechanism/effect in humans.

Need separate assessment of:

- biological similarity;
- target expression/function;
- dose/exposure;
- timescale;
- compensatory pathways;
- phenotype relevance.

---

## 30. In vitro / ex vivo studies

Useful for:

- cellular/molecular interactions;
- receptor binding;
- signaling cascades;
- tissue-specific processes;
- direct perturbation.

Limitations:

- missing whole-organism context;
- systemic feedback;
- neural/endocrine/immune integration;
- realistic exposure/dose;
- tissue preparation artifacts.

### Project rule

High internal mechanistic specificity can coexist with poor human external validity.

---

## 31. Computational/simulation evidence

Can test whether:

> hypothesized mechanism structure is sufficient to reproduce observed behavior.

But simulation cannot independently establish that:

> the assumed biological components/relations are true.

Empirical corroboration is required.

---

# Part P — “Translational study” is not one atomic design

## 32. Translational describes evidence movement across levels

Possible chain:

`molecule/cell → tissue → animal → healthy human → target population → clinical/performance outcome`

Each step can use different designs.

### Project rule

Do not classify:

> design = translational.

Record:

- model system;
- underlying design;
- mechanism target;
- extrapolation step.

---

# Part Q — Mechanism evidence can be heterogeneous by nature

## 33. There is no single universal mechanistic design

Mechanistic evidence can come from:

- human randomized perturbation;
- human nonrandomized perturbation;
- within-person experiment;
- mediation analysis;
- longitudinal observation;
- imaging;
- molecular epidemiology;
- animal model;
- cell/tissue experiment;
- simulation.

Therefore:

> mechanistic = **question/evidence function**, not one allocation family.

This mirrors the existing project principle:

> purpose and structural design must be recorded separately.

---

# Part R — Mechanism hypothesis must be explicit

## 34. Minimal mechanism statement

Before classifying evidence as mechanism-focused, state:

1. putative cause/intervention A;
2. proposed intermediate target/process M;
3. downstream outcome/phenomenon Y;
4. predicted direction/behavior of M under perturbation;
5. predicted relation of M to Y;
6. competing mechanism(s), where plausible.

### Stronger design

A study is more mechanistically discriminating when its outcomes can distinguish:

- H1 mechanism;
- H2 alternative mechanism.

This is explicitly consistent with current NHLBI mechanistic-trial guidance.

---

# Part S — A biomarker is not automatically a mediator

## 35. Three different roles

A measured variable can be:

### Biomarker/readout

Correlates with biological state.

### Target

The process deliberately intended to be engaged/manipulated.

### Mediator

A variable on the causal path from A to Y.

These roles can overlap.

They are not synonyms.

### Project rule

Do not infer:

> biomarker changed → target engaged → mediator proven

as one automatic chain.

Each step needs evidence.

---

# Part T — A mediator is not automatically a useful surrogate endpoint

## 36. Adjacent boundary

A mediator can lie on a causal pathway without capturing enough of the intervention's total effect to substitute for the true outcome.

Conversely, a predictive surrogate marker may not itself be the causal mechanism.

### Scope decision

Formal surrogate-endpoint validation is deferred to later measurement/statistical/appraisal topics.

But the taxonomy must keep:

> mediator ≠ surrogate

as a boundary.

---

# Part U — Mechanistic vs moderation/effect modification

## 37. Moderator question

> For whom / under what conditions is the effect larger or smaller?

This is effect heterogeneity/modification.

It is not automatically a mechanism question.

A moderator may help generate mechanism hypotheses.

But:

> treatment × subgroup interaction ≠ mediation.

### Project rule

Mechanism asks:

> through what process?

Moderator asks:

> for whom / when / under what condition?

---

# Part V — Mechanistic evidence and causal claims

## 38. Mechanistic evidence can support causal inference but does not automatically replace effect evidence

### Project synthesis
**Confidence: HIGH**

Mechanistic evidence can:

- support biological plausibility;
- identify intermediate causal components;
- explain heterogeneity;
- support transportability/extrapolation;
- identify why an intervention succeeds/fails;
- help select targets.

But if the practical claim is:

> intervention A improves hypertrophy/strength Y,

direct evidence of intervention effect on Y remains necessary.

### Project rule

Mechanistic plausibility cannot silently substitute for long-term outcome evidence.

---

# Part W — Fitness/exercise examples

## 39. Acute MPS response

Question:

> Does resistance exercise acutely increase muscle protein synthesis?

Classification:

- experimental physiology response;
- potentially mechanistic depending hypothesis/comparator.

What it does **not** automatically answer:

> Does the condition produce more chronic hypertrophy?

---

## 40. mTORC1 target engagement

Question:

> Does loading condition A activate a prespecified mTORC1-related target more than B?

Classification:

> human mechanistic perturbation / target engagement.

Still incomplete for:

> mTORC1 change causally mediates hypertrophy difference.

---

## 41. Pharmacological blockade

Question:

> If pathway M is blocked, is response Y attenuated?

Classification:

> mechanistic perturbation with blockade logic.

Potentially stronger for causal pathway role than observing M alone.

Underlying structural design may still be:

- randomized;
- crossover;
- factorial;
- animal/in vitro.

---

## 42. EMG study

Question:

> Does exercise A produce higher surface EMG amplitude than B?

Primary evidence:

> difference in an acute electrophysiological readout.

This does not prove:

> greater muscle force;  
> greater hypertrophy;  
> a complete chronic adaptation mechanism.

---

## 43. Training intervention with mediator

RCT:

- high vs moderate training volume;
- mediator: early MPS or signaling;
- outcome: later hypertrophy.

Scientific layers:

1. A → Y intervention effect;
2. A → M target engagement;
3. M → Y pathway relation;
4. formal mediation only if causal mediation assumptions/design support it.

Do not collapse all four.

---

## 44. Animal overload model

Rodent muscle overload + molecular pathway manipulation.

Can provide strong evidence about:

- pathway components;
- necessity/sufficiency in that model.

Cannot by itself establish:

- same quantitative mechanism in human resistance training;
- practical training effect size;
- human safety/applicability.

---

# Part X — Mechanistic study record for future extraction

For every mechanism-focused study, record:

1. mechanistic purpose? YES/NO/PARTIAL;
2. mechanism hypothesis explicitly stated?;
3. cause/intervention/exposure A;
4. target/intermediate M;
5. downstream outcome/phenomenon Y;
6. competing mechanism hypothesis?;
7. model system:
   - human;
   - animal;
   - in vitro;
   - ex vivo;
   - organoid/tissue;
   - computational;
8. human study current administrative category if relevant:
   - BESH;
   - mechanistic clinical trial;
   - other;
9. underlying structural design:
   - randomized parallel;
   - crossover;
   - within-person;
   - factorial;
   - nonrandomized intervention;
   - cohort;
   - cross-sectional;
   - other;
10. manipulation/probe;
11. randomized?;
12. comparator/control;
13. mechanism component directly manipulated?;
14. blockade/rescue?;
15. dose-response?;
16. target engagement measured?;
17. target measure validity;
18. mediator measured?;
19. mediator timing;
20. downstream outcome timing;
21. formal causal mediation performed?;
22. mediator-outcome confounding addressed?;
23. descriptive biomarker only?;
24. acute or chronic target?;
25. acute-to-chronic extrapolation claimed?;
26. direct performance/clinical outcome measured?;
27. mechanism evidence independent of effect evidence?;
28. human-translation step required?;
29. alternative explanations addressed?;
30. final project classification;
31. unresolved causal/measurement/translation issues.

---

# Part Y — Canonical “do not confuse” rules

1. mechanistic purpose ≠ randomized design;
2. mechanistic clinical trial ≠ all mechanistic research;
3. current NIH BESH ≠ clinical trial after 2026-05-25;
4. BESH administrative category ≠ project study-design taxonomy;
5. intervention efficacy ≠ mechanism of action;
6. exposure-outcome causality ≠ detailed mechanism;
7. biomarker association ≠ mechanism;
8. biomarker response ≠ target engagement automatically;
9. target engagement ≠ mediation;
10. mediation ≠ all mechanism evidence;
11. randomized treatment ≠ randomized mediator;
12. moderator/effect modifier ≠ mediator;
13. acute physiological response ≠ chronic adaptation mechanism;
14. animal mechanism ≠ proven human mechanism;
15. simulation sufficiency ≠ empirical causal confirmation;
16. translational ≠ atomic study design;
17. correlation/dose-response ≠ mechanism proof;
18. mechanistic plausibility ≠ intervention effectiveness.

---

# Part Z — Taxonomy decision

## Mechanistic studies are a question-specific family, but internally multi-axis

Mechanistic research should be represented as:

`mechanism hypothesis + model system + manipulation/observation mode + underlying design + target engagement + pathway/mediation evidence + downstream outcome + translation boundary`

—not as one flat label:

> “mechanistic study”.

---

# Dedicated deeper passes required

The scope audit identifies four major branches that need separate granular work.

## PASS-06C2 — Human experimental mechanistic perturbation

Must cover:

- BESH;
- mechanistic clinical trials;
- controlled physiology experiments;
- intervention-as-probe logic;
- target engagement;
- challenge / perturbation / dose-response;
- blockade/rescue;
- parallel/crossover/within-person/factorial crosswalk;
- necessity vs sufficiency claims;
- acute exercise examples.

## PASS-06C3 — Causal mediation and pathway studies

Must cover:

- mediator definition;
- temporal ordering;
- randomized vs observational mediation;
- mediator-outcome confounding;
- direct/indirect effects at taxonomy level;
- post-treatment confounding;
- measurement error;
- multiple/serial mediators;
- why “adjusting for mediator” is not automatically causal mediation.

## PASS-06C4 — Observational mechanistic / biomarker / omics evidence

Must cover:

- descriptive pathway evidence;
- longitudinal biomarker association;
- molecular epidemiology;
- pathway/omics discovery;
- causal-vs-correlational boundary;
- reverse causation;
- temporality;
- hypothesis generation vs mechanism confirmation;
- likely boundary to MR/other causal designs without duplicating causal-inference topics.

## PASS-06C5 — Nonhuman and translational mechanistic models

Must cover:

- animal;
- in vitro;
- ex vivo;
- organoid/tissue;
- genetic perturbation;
- simulation/computational;
- model-system validity;
- human extrapolation;
- convergent/triangulated mechanism evidence.

Then:

> dedicated integration/gap audit before mechanistic synthesis.

This sequence may expand if later passes find blockers.

---

# Evidence limitations at scope stage

1. There is no single universal mechanistic-study design taxonomy accepted across all biomedical disciplines.
2. NIH definitions are administrative/scientific-purpose frameworks and should not be mistaken for a complete epistemic hierarchy.
3. BESH classification changed materially in 2026; older papers/guidance may still call BESH clinical trials.
4. “Mechanism” ranges from one intermediate target to detailed multilevel causal pathways.
5. Statistical mediation is only one way to study mechanism.
6. Mechanistic evidence often spans heterogeneous model systems and methods, making simple single-design ranking inappropriate.
7. Human applicability of nonhuman mechanism evidence is a separate external-validity/extrapolation question.
8. Many exercise studies use mechanistic language for acute biomarkers without directly testing necessity, sufficiency, mediation, or chronic outcome relevance.
9. Detailed causal identification belongs partly to later RES causal-inference topics; RES-02 responsibility is to classify what the design can and cannot support.

---

# Practical rules produced by PASS-06C1

1. Mechanistic research asks how/through what process a cause or intervention produces an effect.
2. A direct A→Y effect estimate is not itself detailed mechanism evidence.
3. Mechanistic purpose is orthogonal to randomized/crossover/factorial/etc. allocation structure.
4. The same RCT can be mechanistic, efficacy-focused, effectiveness-focused, or hybrid depending the primary question.
5. Current NIH policy no longer classifies BESH as clinical trials for applications due on/after 2026-05-25.
6. BESH remains experimental human research using manipulation to study fundamental phenomena.
7. Mechanistic clinical trials remain distinguished by mechanism/pathophysiology/mechanism-of-action purpose rather than ordinary efficacy/effectiveness purpose.
8. Controlled physiology experiments can be mechanistic human experiments.
9. Etiologic effect A→Y and mechanism A→M→Y are distinct causal questions.
10. Observational association can contribute to mechanism hypotheses but does not automatically establish mechanism.
11. Target engagement establishes A→M, not necessarily M→Y.
12. A changed biomarker is not automatically a valid target or mediator.
13. Causal mediation is one formal mechanism framework, not a synonym for mechanistic research.
14. Mediation questions are inherently causal.
15. Randomization of A does not automatically remove mediator-outcome confounding.
16. Mechanistic temporal order requires cause/manipulation before mediator/target before downstream outcome.
17. Human mechanistic perturbation can use parallel, crossover, within-person, factorial, or other ordinary experimental structures.
18. Blockade/rescue/challenge are perturbation logics layered on underlying designs.
19. Dose-response can strengthen a mechanism hypothesis but is not universal proof.
20. Descriptive acute physiology is not automatically mechanistic causal evidence.
21. Acute proxies cannot substitute for chronic adaptation outcomes.
22. Animal/in vitro/ex vivo evidence can provide detailed pathway evidence but requires separate human extrapolation.
23. Computational simulation can test sufficiency of assumptions but cannot independently verify biological truth.
24. Translational describes movement across evidence/model levels, not one atomic design.
25. Mechanism evidence should state the hypothesized intermediate target/process explicitly.
26. Biomarker, target, mediator and surrogate are different roles.
27. Moderator/effect modification asks for whom/when an effect differs, not through what process the effect occurs.
28. Mechanistic evidence can support causal plausibility and transportability but cannot silently replace direct effect evidence on the practical outcome.
29. Future study extraction must record model system + underlying design + perturbation + target engagement + mediator/pathway evidence + downstream outcome + translation boundary.
30. Mechanistic branch requires separate passes for human perturbation, mediation, observational pathway evidence, and nonhuman/translational models.

---

# Gap status after PASS-06C1

Mechanistic/explanatory **scope and taxonomy are established**, but the branch is not close to synthesis.

Required next sequence begins with:

1. PASS-06C2 — human experimental mechanistic perturbation;
2. PASS-06C3 — causal mediation/pathway;
3. PASS-06C4 — observational mechanistic/biomarker/omics;
4. PASS-06C5 — nonhuman/translational models;
5. integration/gap audit;
6. additional passes if audit finds gaps;
7. synthesis only afterward.

## Next micro-pass

**RES-02 / PASS-06C2 — human experimental mechanistic perturbation studies: BESH vs mechanistic clinical trial, intervention-as-probe logic, target engagement, randomized/nonrandomized human physiology experiments, crossover/within-person/parallel/factorial structures, dose/challenge/blockade/rescue logic, and what each can/cannot establish about necessity/sufficiency/mechanism.**

STOP after this saved micro-pass.
