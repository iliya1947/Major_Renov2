# RES-02 / PASS-06C11 — Mechanistic-branch structural synthesis

Статус: **COMPLETE SYNTHESIS — mechanistic branch SYNTHESIZED FOR RES-02 STRUCTURAL USE**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Purpose

Этот synthesis объединяет в одну каноническую архитектуру:

- PASS-06C1 — mechanistic scope/taxonomy;
- PASS-06C2 — human experimental mechanistic perturbation;
- PASS-06C3 — causal mediation/pathway;
- PASS-06C4 — observational biomarker/omics;
- PASS-06C5 — nonhuman/translational models;
- PASS-06C6 — first integration/gap audit;
- PASS-06C7 — N-of-1 / broader SCED;
- PASS-06C8 — repeat gap audit;
- PASS-06C9 — SMART / MRT / HED sequential randomization;
- PASS-06C10 — final closure/gap audit.

PASS-06C10 разрешил synthesis:

> **no remaining blocking mechanistic design-family gaps were identified.**

Этот файл заменяет необходимость восстанавливать mechanistic taxonomy из C1…C10 по отдельности при обычной RES-02 классификации.

C1…C10 остаются authoritative deep-detail sources.

---

# 1. Canonical principle

## Mechanistic is a scientific-purpose axis, not one atomic study design

Mechanistic question asks:

> **Through what causal process, target, component, activity or organized pathway does a putative cause/intervention A produce an effect Y?**

Minimal causal concept:

`A → M → Y`

where:

- `A` = exposure / intervention / perturbation;
- `M` = proposed mechanism target / intermediate process;
- `Y` = downstream phenomenon / outcome.

A study can therefore simultaneously be:

> mechanistic + randomized + crossover + human + acute + pharmacological blockade

or:

> mechanistic + observational + longitudinal + omics

or:

> mechanistic + animal + conditional knockout + rescue.

### Canonical rule

Never classify:

> “design = mechanistic”

without also recording the underlying structural design/model system.

---

# 2. Canonical mechanistic-study representation

Every mechanistic study should be represented as:

`scientific purpose`
+
`model system`
+
`underlying design`
+
`perturbation / observation mode`
+
`target engagement / biomarker evidence`
+
`pathway / mediation evidence`
+
`timing`
+
`downstream outcome`
+
`translation claim`

Expanded:

> **Mechanism hypothesis + model system + assignment structure + temporal structure + manipulation logic + target measurement + pathway evidence + downstream outcome + human relevance.**

---

# 3. Scientific-purpose layer

Mechanistic purpose must be separated from adjacent questions.

## Mechanism

> How / through what process does A produce Y?

## Intervention efficacy/effectiveness

> Does A change Y under the target conditions?

## Etiologic causal effect

> Does exposure A cause Y?

## Prognosis/prediction

> What current/future outcome is likely for this individual given X?

## Diagnostic/measurement

> Does test/device/measure validly classify or quantify the target?

## Moderation/effect modification

> For whom / under what conditions is A→Y different?

## Mediation

> How much / what part of A→Y operates through M under a defined causal estimand?

### Rule

The same dataset can support several layers, but each conclusion needs its own design/estimand justification.

---

# 4. Model-system axis

Record model system independently of design.

## Human

- healthy volunteers;
- athletes;
- patients;
- target population.

## Animal

- species;
- strain;
- sex;
- age;
- disease/training state.

## In vitro

- primary cells;
- immortalized cell lines;
- iPSC-derived systems.

## Ex vivo

- isolated tissue / organ preparation.

## Organoid / assembloid / microphysiological system

- 3D multicellular / engineered human-relevant systems.

## Computational mechanistic model

- equations / physics / mechanistic simulation.

### Rule

Model system answers:

> **where the mechanism is studied**,

not:

> **what the experimental design is**.

---

# 5. Human experimental parent-design axis

Human mechanistic studies can use the same experimental structures as ordinary intervention studies.

## Parallel randomized

Useful when effects are:

- persistent;
- long-lived;
- carryover-prone.

## Crossover

Best fit for:

- acute;
- reversible;
- adequate washout.

## Within-person / split-body

Useful for local contrasts if:

- systemic spillover;
- cross-education;
- neural/endocrine effects

do not invalidate local isolation.

## Factorial

Useful for:

- component/pathway interaction;
- joint perturbation;
- mechanistic dependence.

## Multi-arm / dose

Useful for:

- graded perturbation;
- multiple active conditions.

## Cluster / stepped-wedge / cluster crossover

Can host mechanistic outcomes but remain cluster/intervention architectures.

## Nonrandomized intervention

Can provide temporal/perturbation evidence, but has weaker causal protection against allocation/time confounding.

---

# 6. Human mechanistic administrative categories

## BESH

Current NIH 2026 administrative category:

- prospective human assignment/manipulation;
- biomedical/behavioral outcomes;
- fundamental phenomenon;
- no specific immediate health application.

For NIH applications due on/after 2026-05-25:

> BESH is no longer characterized as an NIH clinical trial.

## Mechanistic clinical trial

Primary aim:

- biological/behavioral process;
- pathophysiology;
- mechanism of action of intervention;

within a human health-related clinical-trial framework.

### Rule

BESH vs mechanistic clinical trial is:

> current administrative/scientific-purpose metadata,

not a replacement for:

- parallel;
- crossover;
- factorial;
- N-of-1;
- SMART/MRT.

---

# 7. Perturbation-logic axis

Mechanistic experiments become informative by specifying what is changed and what causal prediction follows.

## Challenge / provocation

Examples:

- exercise bout;
- hypoxia;
- heat;
- sleep deprivation;
- nutrient challenge.

Answers:

> how system responds under imposed physiological state.

Does not automatically establish:

- chronic adaptation;
- real-world benefit.

## Dose / exposure perturbation

Tests:

- threshold;
- saturation;
- graded target engagement;
- response shape.

Dose-response strengthens plausibility but is not universal mechanism proof.

## Blockade / inhibition

Reduce candidate component M.

If Y is attenuated:

> supports conditional dependence / necessity-like role,

only when:

- blockade is demonstrated;
- selectivity is credible;
- off-target effects are addressed.

## Activation / agonism / gain-of-function

Increase M.

If Y is induced:

> supports inducing / sufficiency-like role under the tested protocol.

Does not prove natural A normally works through M.

## Rescue / reversal

Disrupt M, then restore M/function and ask whether Y returns.

Strengthens:

- specificity;
- pathway interpretation.

## Orthogonal perturbation

Different tools with different bias/off-target structures converge on the same relation.

Strengthens mechanism inference.

---

# 8. Target-engagement layer

Target engagement asks:

> **Did manipulation A actually change the intended target M?**

Canonical:

`A → M`

Required where applicable:

1. valid assay;
2. relevant tissue/compartment;
3. correct timing;
4. sufficient sensitivity;
5. exposure/dose confirmation;
6. intervention fidelity.

### Target-engagement decision matrix

| A engages M? | Y changes? | Interpretation |
|---|---|---|
| No | No | manipulation may have failed; cannot cleanly refute M |
| No | Yes | simple proposed mechanism weakened; off-target/assay issues possible |
| Yes | No | evidence against sufficiency of this engagement under tested conditions |
| Yes | Yes | supports perturbation chain, but does not prove mediation/exclusivity |

### Critical rule

> **Target engagement A→M is not equivalent to causal mediation M→Y.**

---

# 9. Biomarker / target / mediator / moderator / surrogate roles

These are different roles.

## Biomarker

Measured indicator of biological state/process/response.

## Target

Process intended to be manipulated/engaged.

## Mediator

Causal intermediate on A→M→Y pathway.

## Moderator

Variable defining when/for whom A→Y differs.

## Surrogate endpoint

Endpoint intended to substitute for final practical/clinical outcome.

### Rule

Do not infer:

> biomarker changed → target engaged → mediator proven → valid surrogate.

Each transition requires separate evidence.

---

# 10. Causal mediation layer

Mediation is an inferential framework layered on an underlying design.

Canonical:

`A → M → Y`

## Source design can be

- randomized trial;
- cohort;
- other longitudinal causal structure;
- SCED;
- other suitable parent design.

## Temporal order

Need:

`A before M before Y`.

Cross-sectional mediation is generally weak for causal direction.

Pre/post change scores do not automatically establish:

> M changed before Y.

---

# 11. Randomized treatment does not randomize the mediator

In an RCT:

- A is randomized;
- M is usually post-randomization and nonrandomized.

Therefore M→Y can remain confounded.

### Fitness example

`training assignment A → hypertrophy M → strength Y`

Randomizing training does not randomize individual hypertrophy response.

Correlation:

> more hypertrophy ↔ more strength gain

does not identify causal mediation by itself.

---

# 12. Mediation estimand families

Record exact estimand.

## Total effect

Overall A→Y causal effect.

## Controlled direct effect

Effect of A on Y when M is fixed to a specified level.

## Natural direct / indirect effects

Counterfactual decomposition using mediator values that would naturally occur under exposure states.

## Interventional direct / indirect effects

Mediator-distribution interventions; useful under some structures where natural effects are difficult/not identified.

### Rule

Do not use generic:

> “direct effect” / “indirect effect”

without the estimand definition.

---

# 13. Exposure-induced mediator–outcome confounding

Canonical:

`A → L → M`  
`A → L → Y`  
`M → Y`

L is:

- caused by A;
- a confounder of M→Y.

Ordinary mediator adjustment is not a universal solution.

### Rule

Simple coefficient attenuation after adding M to regression is not automatically causal mediation.

---

# 14. Multiple / serial / longitudinal mediators

## Parallel

`A → M1 → Y`  
`A → M2 → Y`

## Serial

`A → M1 → M2 → Y`

## Longitudinal

`A0 → M1 → A1 → M2 → … → Y`

### Rules

1. Multiple mediators need an explicit joint causal structure.
2. Separate single-mediator models can double-count shared pathways.
3. Serial mediation requires credible order.
4. Longitudinal mediation may require g-methods when time-varying confounding is treatment-induced.

Detailed estimation belongs later causal/statistical methodology.

---

# 15. Observational mechanistic evidence

Observation can contribute to mechanism evidence without having experimental causal status.

Possible roles:

- identify entities/processes;
- characterize timing;
- locate pathways;
- generate hypotheses;
- support convergence.

## Cross-sectional biomarker

Usually supports:

> association / mechanistic clue.

Weak for causal direction.

## Longitudinal biomarker

Improves temporal ordering.

Still can be confounded.

## Prospective/nested biospecimen

Reduces overt reverse-causation concerns.

Does not prove causality.

---

# 16. Omics is a measurement/data layer, not a design

Modalities:

- genomics;
- epigenomics;
- transcriptomics;
- proteomics;
- phosphoproteomics;
- metabolomics;
- lipidomics;
- microbiome;
- multi-omics.

Underlying study can be:

- randomized experiment;
- cohort;
- case-control;
- cross-sectional;
- longitudinal repeated-measures.

### Rule

Classify:

> parent design + omics layer + biomarker role + scientific purpose.

---

# 17. Discovery vs validation in omics/biomarkers

Distinguish:

## Discovery

Candidate association/pathway found.

## Statistical replication

Same signal/association reproduced in independent sample.

## Analytical validation

Assay/tool technical performance.

## Functional validation

Biological role tested through targeted/perturbation evidence.

## Predictive/clinical validation

Prediction/diagnostic/decision performance.

### Rule

Never write only:

> “validated biomarker”.

Specify validation type.

---

# 18. High-dimensional omics limits

Record:

- number of features;
- hypothesis-driven vs exploratory;
- multiplicity correction;
- batch/preanalytics;
- annotation certainty;
- independent replication;
- pathway database/version;
- network type.

### Critical boundaries

- pathway enrichment ≠ causal pathway activation;
- co-expression edge ≠ direct causal regulation;
- hub centrality ≠ master causal regulator;
- learned network ≠ justified causal DAG.

---

# 19. Mendelian randomization / IV boundary

MR/IV can support causal target evidence.

But they are:

> causal-identification architectures,

not ordinary biomarker association and not a unique mechanistic-purpose design.

Route detailed MR/IV methodology to causal-inference topics.

---

# 20. N-of-1 / SCED branch

## N-of-1

Repeated experimental comparison in one person.

Canonical:

`A → B → A → B`

or randomized multi-crossover blocks.

Distinctive target:

> individual treatment/physiological effect under specified conditions.

### Not N-of-1

- case report;
- one-person pre/post;
- one A vs one B exposure only.

---

# 21. Broader SCED structures

Medical N-of-1 is a subset of broader SCED.

Main families:

1. withdrawal/reversal;
2. multiple baseline;
3. alternating/simultaneous treatment;
4. changing criterion.

## A-B phase change

Repeated baseline → intervention without replication/reversal.

Weaker/quasi-experimental.

## Multiple baseline

Stagger intervention onset across cases/behaviors/settings.

Useful when reversal impossible.

## Alternating treatment

Rapidly alternate conditions.

Requires low carryover.

## Changing criterion

Stepwise target changes.

Best for graded, modifiable outcomes.

---

# 22. N-of-1 fitness boundary

Good candidates:

- caffeine;
- acute warm-up;
- acute BFR;
- hydration/carbohydrate timing;
- reversible recovery intervention.

Poor classic ABAB candidates:

- hypertrophy;
- long-term strength adaptation;
- tendon remodeling.

### Rule

N-of-1 estimates:

> context-specific individual effect,

not immutable “responder phenotype”.

Detailed N-of-1 analysis belongs RES-27.

---

# 23. Sequential-randomization branch

Sequential randomization means:

> same experimental unit can be randomized at multiple scientifically meaningful decision points.

Distinct from:

- repeated measurement;
- ordinary crossover;
- adaptive trial design.

---

# 24. Adaptive intervention vs adaptive trial

## Adaptive trial design

Trial itself changes using accumulating study data:

- sample size;
- arm dropping;
- allocation ratio;
- stopping.

## Adaptive intervention

Intervention delivered to participant changes using that participant's information.

### Rule

> **adaptive trial design ≠ adaptive intervention.**

---

# 25. SMART

Sequential Multiple Assignment Randomized Trial.

Typical:

`stage 1 randomization → response/tailoring variable → stage 2 randomization → distal outcome`

Used to optimize:

- initial option;
- step-up/switch/augment decision;
- complete adaptive intervention sequence.

Can be:

- restricted;
- nonrestricted.

Tailoring variable is:

> prescriptive decision information,

not automatically predictor/moderator/mediator.

---

# 26. MRT

Micro-Randomized Trial.

At many decision points:

`H_t → randomize A_t → proximal Y_{t+Δ}`

Targets:

- average proximal causal effect;
- time-varying effect;
- context moderation.

Typical use:

- JITAI;
- prompts;
- notifications;
- rapidly deliverable components.

### Rule

MRT ≠ N-of-1.

MRT usually targets population/time-varying proximal effects across many randomizations, whereas N-of-1 primarily targets replicated individual treatment effect.

---

# 27. JITAI / HED / MOST boundaries

## JITAI

Adaptive intervention architecture.

Not itself an MRT.

## HED

Higher-order experimental architecture combining randomizations across timescales:

- factorial–SMART;
- factorial–MRT;
- SMART–MRT.

## MOST

Intervention-optimization framework.

Not an atomic design.

### Rule

A paper labelled:

> MOST

must still be classified by the actual experiment inside it.

---

# 28. Proximal vs distal outcome

MRT often estimates:

> proximal effect.

Example:

`activity suggestion → steps next 30 min`.

But proximal improvement does not automatically establish:

> long-term program efficacy.

If proximal outcome is proposed mediator toward distal Y:

> C3 mediation assumptions still apply.

---

# 29. Nonhuman animal models

Animal studies allow:

- whole-organism physiology;
- invasive sampling;
- genetic perturbation;
- blockade/rescue;
- controlled environment.

Record:

- species;
- strain;
- sex;
- age;
- housing;
- disease/training state;
- intervention;
- dose;
- outcome.

### Rule

“Animal study” identifies model system, not design.

---

# 30. Animal exercise translation

Do not equate:

- forced treadmill;
- voluntary wheel;
- swimming;
- ladder climbing;
- weighted wheel;
- electrical stimulation;
- synergist ablation.

They model different exposures.

Translate through:

- physiological dose;
- contraction pattern;
- outcome construct;
- timing;
- stress/context.

### Critical example

Rodent time-to-exhaustion ≠ directly measured human VO₂max automatically.

---

# 31. Genetic perturbation

## Knockout

Supports dependence only if functional loss is verified.

Potential problems:

- residual function;
- alternative splicing;
- transcriptional adaptation;
- paralog compensation.

## Conditional/tissue-specific knockout

Improves localization/timing.

Does not eliminate:

- incomplete recombination;
- compensation;
- systemic cross-talk.

## Gain-of-function

Supports inducing capability in the model.

Not necessarily normal physiological mediation.

## Rescue

Strengthens specificity.

Still depends on restoration level/location/timing.

---

# 32. In vitro / ex vivo / organoid continuum

## Primary cells

Closer to native biology; donor variability and culture drift.

## Immortalized lines

Scalable/tractable; potentially altered genotype/signaling/metabolism.

## Ex vivo tissue

Preserves local architecture; loses much systemic regulation.

## Organoid / MPS

Adds 3D architecture/multicellular context; still incomplete for vascular/immune/neural/systemic biology.

### Rule

More complex model ≠ automatically more valid.

Validity must be:

> fit for the target context of use.

---

# 33. Exercise mechanobiology translation

For cell/tissue models record:

- load;
- strain;
- contraction;
- frequency;
- substrate stiffness;
- 2D/3D geometry.

Static 2D culture may poorly reproduce mechanical signaling of human training.

### Rule

Cell type alone does not establish exercise-model validity.

---

# 34. Computational mechanistic models

Different from statistical/ML prediction models.

Need separate:

## Code verification

Were equations implemented correctly?

## Calculation verification

Was numerical solution sufficiently accurate/stable?

## Calibration

Were parameters fitted to data?

## Validation

Does model reproduce relevant independent behavior?

## Context of use

For what question/decision/range is model credible?

### Rule

Calibration fit ≠ independent validation.

Predictive accuracy ≠ mechanistic truth.

---

# 35. Translation axis

Canonical translational chain:

`molecule/cell → tissue → organ → animal → human physiology → human training/performance`

Every step is a separate extrapolation problem.

Record correspondence across:

1. species;
2. tissue/cell;
3. mechanism;
4. anatomy;
5. dose;
6. route;
7. duration;
8. timescale;
9. exercise modality;
10. outcome construct;
11. sex;
12. age/life stage;
13. environment;
14. target population.

### Rule

> model-specific mechanism ≠ human mechanism.

---

# 36. Necessity / sufficiency wording

Avoid universal language unless genuinely justified.

## Human blockade

Preferred:

> selective attenuation of M reduced/abolished Y under condition C, supporting dependence on M in that context.

## Human activation

Preferred:

> activation of M induced Y under the experimental protocol.

## Nonhuman knockout

Preferred:

> M was required for Y in model S under condition C.

## Gain-of-function

Preferred:

> M was capable of inducing/modulating Y in system S under protocol P.

### Rule

Necessity and sufficiency are:

- independent;
- context-specific;
- vulnerable to redundancy/compensation/off-target effects.

---

# 37. Canonical mechanism-evidence layers

This is a **descriptive project ladder**, not a universal evidence hierarchy.

## Layer 0 — Description

M/Y observed.

## Layer 1 — Association

M associated with A/Y.

## Layer 2 — Temporal support

M changes after A and before Y.

## Layer 3 — Experimental A→M target engagement

Assigned manipulation changes target.

## Layer 4 — Experimental pathway dependence / inducing evidence

Block/activate candidate component and observe downstream response.

## Layer 5 — Formal pathway decomposition

Causal mediation/path-specific estimands under assumptions.

## Layer 6 — Rescue / orthogonal perturbation / cross-model convergence

Independent evidence strengthens specificity.

### Critical rule

Higher layer does not automatically replace:

- direct long-term outcome evidence;
- human evidence;
- external validity.

---

# 38. Mechanism evidence is multi-source, not one universal hierarchy

Strong mechanism inference often triangulates:

- human perturbation;
- human longitudinal observation;
- omics;
- mediation;
- animal genetic evidence;
- primary human cells;
- organoid;
- computational model.

Best convergence occurs when methods have:

> different bias structures.

Exact replication and conceptual convergence answer different questions.

---

# 39. Mechanistic evidence cannot silently replace practical effect evidence

If practical claim is:

> intervention A increases hypertrophy/strength/VO₂max,

mechanistic plausibility alone is not enough.

Need direct evidence for:

> A→practical outcome.

### Fitness rule

Acute:

- EMG;
- MPS;
- lactate;
- hormone;
- phosphorylation;
- cell swelling

cannot automatically substitute for:

- chronic hypertrophy;
- strength;
- tendon adaptation;
- endurance adaptation.

---

# 40. Canonical “do not confuse” matrix

| Do not confuse | Why |
|---|---|
| mechanistic purpose vs randomized design | purpose and allocation are separate axes |
| BESH vs all mechanistic research | BESH is current NIH administrative/scientific category |
| efficacy/effectiveness vs mechanism | effect A→Y does not reveal pathway |
| etiologic causality vs detailed mechanism | A causes Y can be known without knowing M |
| biomarker vs mediator | indicator may be noncausal |
| target engagement vs mediation | A→M does not establish M→Y |
| moderator vs mediator | who/when vs through what process |
| mediator vs surrogate endpoint | causal intermediate ≠ substitute endpoint |
| response biomarker vs mechanism | biological response can be mechanistically agnostic |
| pathway enrichment vs causal pathway | enrichment is statistical annotation evidence |
| network edge vs causal regulation | association network does not identify direction |
| randomization of A vs randomization of M | mediator remains post-randomization |
| correlation of change scores vs mediation | shared causes / timing remain |
| blockade vs universal necessity | context/selectivity/engagement matter |
| activation vs natural mediation | artificial induction may be supraphysiologic |
| animal mechanism vs human mechanism | translation is separate |
| human cells vs intact human organism | systemic context absent |
| calibration vs validation | fitted data are not independent validation |
| ML prediction vs mechanistic simulation | prediction can work without causal mechanism |
| N-of-1 vs any N=1 study | requires replicated experimental comparison |
| N-of-1 vs MRT | individual replicated effect vs decision-point proximal effect |
| SCED vs self-controlled observational | assigned vs observed exposure |
| adaptive trial vs adaptive intervention | trial-level adaptation vs participant-level treatment adaptation |
| JITAI vs MRT | intervention architecture vs optimization experiment |
| SMART vs ordinary multi-stage care | SMART requires sequential randomization |
| proximal effect vs distal efficacy | immediate component effect ≠ whole-program outcome |

---

# 41. Canonical study-classification router

For any paper labelled mechanistic:

## Step 1 — State the mechanism hypothesis

`A → M → Y`

If M is not specified:

> mechanism claim may be vague/descriptive.

## Step 2 — Identify scientific purpose

- mechanism?;
- efficacy?;
- etiologic?;
- mediation?;
- optimization?;
- mixed purpose?

## Step 3 — Identify model system

- human;
- animal;
- in vitro;
- ex vivo;
- organoid/MPS;
- computational.

## Step 4 — Identify parent design

- randomized parallel;
- crossover;
- within-person;
- factorial;
- nonrandomized intervention;
- cohort;
- cross-sectional;
- N-of-1;
- broader SCED;
- SMART;
- MRT;
- HED;
- other.

## Step 5 — Identify manipulation logic

- challenge;
- dose;
- blockade;
- activation;
- rescue;
- observational only.

## Step 6 — Verify target evidence

- target prespecified?;
- assay valid?;
- right tissue?;
- right time?;
- fidelity?;
- selectivity?;

## Step 7 — Identify pathway evidence

- association only?;
- temporal?;
- mediation?;
- direct manipulation of M?;
- rescue?;
- orthogonal convergence?

## Step 8 — Identify downstream outcome

- acute target?;
- chronic adaptation?;
- practical/clinical outcome?;
- proximal vs distal?

## Step 9 — Identify translation claim

- model-specific?;
- human?;
- target population?;
- training recommendation?

## Step 10 — Calibrate language

Use only the strongest claim directly supported by the design.

---

# 42. Fitness/exercise crosswalk

| Question | Canonical classification |
|---|---|
| Does resistance exercise acutely raise MPS? | human acute physiology experiment; mechanism/response depending hypothesis |
| Does loading alter mTOR-related signaling? | human mechanistic perturbation + target engagement |
| Does blocker of pathway M attenuate response Y? | mechanistic blockade experiment; conditional dependence |
| Does acute signaling mediate 12-week hypertrophy? | longitudinal causal mediation problem; acute→chronic bridge required |
| Does hypertrophy mediate strength gain? | causal mediation layered on training trial/cohort |
| Trained vs untrained transcriptomics | observational cross-sectional omics |
| Randomized exercise + repeated omics | randomized experiment + omics measurement layer |
| Rodent synergist ablation → hypertrophy | animal mechanistic overload model; limited direct training translation |
| Electrical stimulation → muscle signaling | local contraction mechanism; not full voluntary training model |
| Cultured myotube signaling | in vitro cell-autonomous mechanism |
| Ex vivo muscle metabolism | local tissue mechanism |
| Organoid / engineered tissue response | fit-for-purpose reductionist model |
| Mathematical muscle model | computational mechanistic model; V&V required |
| Caffeine A/B repeated in one person | N-of-1 randomized multi-crossover candidate |
| Warm-up protocols repeatedly alternated | N-of-1 / alternating-treatment candidate |
| Daily activity prompt → next-30-min steps | MRT proximal causal effect |
| Nonresponse → rerandomized coaching step-up | SMART adaptive intervention |
| Monthly coaching + daily prompts | possible SMART–MRT / HED architecture |

---

# 43. Canonical extraction record

For future mechanistic papers, extract at minimum:

1. scientific purpose;
2. explicit mechanism hypothesis;
3. A;
4. M;
5. Y;
6. competing mechanism;
7. model system;
8. human administrative category if relevant;
9. parent study design;
10. allocation/randomization;
11. experimental unit;
12. comparator;
13. temporal structure;
14. perturbation type;
15. target engagement;
16. target assay;
17. tissue/compartment;
18. target timing;
19. manipulation fidelity;
20. selectivity/off-target concerns;
21. mediator claim;
22. mediation estimand if used;
23. M→Y confounding addressed?;
24. exposure-induced confounding?;
25. multiple/serial/time-varying mediators?;
26. biomarker role;
27. omics modality if applicable;
28. discovery vs confirmatory;
29. replication/validation type;
30. N-of-1/SCED structure if applicable;
31. SMART/MRT/HED structure if applicable;
32. proximal/distal outcome distinction;
33. nonhuman model correspondence;
34. dose/timescale correspondence;
35. acute→chronic extrapolation;
36. local→systemic extrapolation;
37. necessity/sufficiency wording;
38. human extrapolation claim;
39. practical training/health outcome measured?;
40. alternative explanations;
41. final project classification;
42. unresolved design/causal/measurement/translation issues.

Detailed branch-specific records remain in C2–C9.

---

# 44. Evidence boundaries preserved for later topics

Mechanistic taxonomy is structurally synthesized, but the following remain deliberately outside RES-02 mechanistic branch.

## Statistical / causal methods

- exact mediation estimators;
- g-methods;
- MR estimators;
- N-of-1 time-series models;
- SMART weighting;
- Q-learning/A-learning;
- MRT estimators;
- HED estimators;
- adaptive-intervention power.

## Risk of bias / appraisal

- animal RoB;
- mechanistic-study RoB;
- omics QC appraisal;
- causal-assumption appraisal.

## Measurement

- detailed assay reliability;
- measurement error models;
- surrogate validation.

## Prediction

- prediction lifecycle remains PASS-06B24.

## Qualitative / process mechanisms

- dedicated later qualitative/mixed-methods branches.

## N-of-1 execution

- detailed methods remain RES-27.

---

# 45. Interference / spillover handoff

PASS-06C10 identified:

- two-stage randomized interference designs;
- saturation/network randomization;
- direct/spillover/overall causal estimands

as a real **general randomized/causal design** issue.

### Decision

This is not a new mechanistic-purpose family and does not block C synthesis.

However:

> RES-02 overall should not be considered fully closed until the final randomized/causal design audit decides whether interference/spillover architectures need explicit canonical representation.

This handoff must be preserved.

---

# 46. Mechanistic branch status after synthesis

## Deep passes completed

- C1;
- C2;
- C3;
- C4;
- C5;
- C6;
- C7;
- C8;
- C9;
- C10;
- C11 synthesis.

## Blocking gaps

**None currently known within mechanistic branch.**

## Branch status

**SYNTHESIZED FOR RES-02 STRUCTURAL USE.**

This does **not** mean:

- RES-02 overall CLOSED_FOR_PRACTICE;
- causal methodology complete;
- qualitative/mixed-methods complete;
- overall design matrix complete.

---

# 47. Next RES-02 branch

Remaining unresolved primary-study question families from RES-02 scope include:

1. qualitative study families;
2. mixed-methods primary-study structures;
3. purpose-vs-design crosswalk across all families;
4. final “what each design can/cannot answer” matrix;
5. overall gap audit;
6. final RES-02 synthesis/closure sequence.

## Next micro-pass

**RES-02 / PASS-06D1 — qualitative primary-study structures: scope and taxonomy; distinguish qualitative scientific purpose from data-collection method alone; map major qualitative design families (e.g. phenomenology, grounded theory, ethnography, qualitative description/case study where appropriate), interviews/focus groups/observation as methods rather than designs, sampling/information-power/saturation concepts at taxonomy level, reflexivity/context, and boundaries with mixed methods, content-validity research and implementation/process studies.**

STOP after this saved synthesis.
