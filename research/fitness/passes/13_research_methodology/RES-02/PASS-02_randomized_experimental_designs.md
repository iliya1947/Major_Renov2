# RES-02 / PASS-02 — Randomized experimental design families and structural variants

Статус: **COMPLETE PASS — topic remains RESEARCHING**  
Дата: 2026-11-16  
Topic: RES-02 — Study designs / what they answer

## Scope этого прохода

Только randomized experimental structures:

1. individually randomized parallel-group trial;
2. crossover trial;
3. randomized within-person / body-part designs;
4. cluster-randomized trial;
5. stepped-wedge cluster randomized trial;
6. cluster crossover;
7. multi-arm trial;
8. factorial trial;
9. adaptive randomized design as a conditional design modifier;
10. platform/master-protocol architecture as a conditional higher-order structure;
11. distinction between structural design vs trial objective/intent modifiers.

Не покрывается здесь:
- detailed random sequence generation/allocation concealment → RES-03;
- detailed RoB → RES-04;
- causal estimands beyond RES-01 framing;
- sample-size/statistical models → RES-07/08+;
- network meta-analysis → RES-21;
- detailed N-of-1 methodology → RES-27;
- non-randomized/quasi-experimental designs → next pass.

---

## Sources checked

1. **Cochrane Handbook Chapter 23 — Including variants on randomized trials**  
   Current official page checked 2026-11-16.  
   Chapter citation: last updated October 2019; Handbook v6.5.  
   Covers cluster-randomized, stepped-wedge, crossover, cluster-crossover, multi-arm and factorial structures.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-23

2. **Cochrane Handbook Chapter 6 — Choosing effect measures and computing estimates of effect**, section 6.2  
   Current official page checked 2026-11-16; chapter last updated August 2023.  
   Covers unit-of-analysis consequences of cluster randomization, crossover, repeated observations and multiple body parts.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-06

3. **Cochrane Handbook — Versions and changes**  
   Overall current release checked 2026-11-16: **6.5.1 (2026)**.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/versions-and-changes-handbook

4. **CONSORT 2025 Statement**  
   Current reporting standard checked 2026-11-16.  
   CONSORT 2025 supersedes CONSORT 2010 and focuses on the common two-group parallel randomized design.  
   BMJ 2025;389:e081123.  
   https://www.bmj.com/content/389/bmj-2024-081123

5. **SPIRIT–CONSORT Extensions current official site**  
   Checked 2026-11-16.  
   Current extension list includes adaptive, cluster, cluster-crossover, crossover, factorial, multi-arm, stepped-wedge and within-person trial extensions. Most legacy extensions are still based on SPIRIT 2013 / CONSORT 2010 while alignment with the 2025 statements is ongoing.  
   https://www.consort-spirit.org/extensions/overview/randomised-trials-using-adaptive-designs

6. **FDA — Adaptive Design Clinical Trials for Drugs and Biologics, final guidance (2019)**  
   Current FDA page checked 2026-11-16.  
   Defines adaptive design as prospectively planned modification(s) based on accumulating trial data.  
   https://www.fda.gov/regulatory-information/search-fda-guidance-documents/adaptive-design-clinical-trials-drugs-and-biologics-guidance-industry

7. **ICH E20 Adaptive Designs for Clinical Trials — FDA page**  
   Current status checked 2026-11-16: draft guidance issued September 2025; not for implementation.  
   Used only to track current harmonization direction, not as final authoritative standard.  
   https://www.fda.gov/regulatory-information/search-fda-guidance-documents/e20-adaptive-designs-clinical-trials

8. **FDA Master Protocols for Drug and Biological Product Development**  
   Current status checked 2026-11-16: revised draft June 2026; not for implementation.  
   Used only to classify master-protocol/platform architecture as a higher-order structure.  
   https://www.fda.gov/regulatory-information/search-fda-guidance-documents/master-protocols-drug-and-biological-product-development

## Version note

- Overall Cochrane Handbook release: **6.5.1 (2026)**.
- Chapter 23 substantive text remains older (last updated October 2019).
- CONSORT core was updated in 2025, but many specialized extensions remain older and are awaiting alignment with CONSORT 2025.
- ICH E20 and FDA Master Protocol guidance cited here are drafts; their draft status must remain explicit.

---

# Part A — Baseline randomized architecture

## 1. Individually randomized parallel-group trial

### Established finding
**Confidence: HIGH**

This is the basic reference structure:

1. individual participants are randomized;
2. each participant is assigned to one intervention group;
3. groups proceed in parallel;
4. outcomes are compared between assigned groups.

CONSORT 2025 explicitly says its core statement focuses on the common **two-group parallel design**.

### Project role

This is the default structural reference for many intervention-effect questions when:
- treatment effects persist;
- crossover would create carryover;
- intervention can be assigned at participant level.

### Exercise relevance

Commonly appropriate for:
- chronic resistance-training programs;
- strength/hypertrophy comparisons;
- exercise + nutrition interventions;
- adherence-support interventions delivered individually.

Randomization does not by itself solve:
- adherence;
- contamination;
- attrition;
- measurement bias;
- short duration;
- poor intervention definition.

Those remain downstream topics.

---

# Part B — Crossover

## 2. Randomized crossover trial

### Established finding
**Confidence: HIGH**

Participants receive multiple interventions in sequence and are randomized to treatment order.

In a simple AB/BA structure:
- sequence 1: A → B;
- sequence 2: B → A.

Each participant acts as their own control.

### Strength

Stable between-person differences are controlled by design, often improving precision.

### Structural requirement

The intervention effect must be sufficiently:
- temporary;
- reversible;
- separable between periods.

### Main threats

1. carryover;
2. period effects;
3. evolving underlying condition/state;
4. insufficient interval before outcome measurement in the next period.

Cochrane explicitly says crossover is inappropriate when intervention causes permanent or long-lasting modification.

### Exercise consequence

Good fit:
- acute caffeine;
- warm-up;
- acute rest interval;
- short-term technique condition;
- acute nutrition;
- transient recovery intervention.

Usually poor fit for:
- hypertrophy;
- chronic strength adaptation;
- persistent motor learning;
- tendon/bone adaptation.

A washout cannot necessarily reverse training adaptation.

### Project rule

**Crossover suitability is a biological/design question, not merely a convenience or sample-size decision.**

---

# Part C — Randomization within one participant

## 3. Within-person / body-part randomized designs

### Established finding
**Confidence: HIGH**

Cochrane distinguishes situations where different body parts/sites within one person receive different interventions.

Examples:
- left vs right limb;
- different muscle/site conditions.

This is structurally analogous to matched/paired designs:
- multiple treatment units are nested within one participant;
- outcomes are correlated within participant.

### Important distinction

Do not confuse:

A. participant randomized, multiple body parts get the **same** intervention;

with

B. body parts themselves receive **different randomized interventions**.

The second is the relevant split-body randomized structure.

### Exercise relevance

Potentially strong for:
- unilateral hypertrophy;
- local muscle/tendon outcomes;
- local strength when intervention can be isolated.

### Structural limits

Potential violation of independence from:
- systemic training effects;
- cross-education;
- shared diet/recovery;
- neural spillover;
- bilateral movement interactions.

Detailed consequences are later bias/analysis topics.

### Project rule

Classify this as:

> randomized within-person/site design

with explicit:
- randomized unit;
- intervention unit;
- observation unit.

Not as an entirely separate top-level evidence universe.

---

# Part D — Cluster randomization

## 4. Cluster-randomized trial

### Established finding
**Confidence: HIGH**

Groups/clusters rather than individuals are randomized.

Examples:
- teams;
- gyms;
- classes;
- clinics;
- coaching groups.

### Why use it

1. intervention is delivered at group level;
2. individual randomization would create contamination;
3. target effect may itself operate through group-level delivery.

### Core structural consequence

Participants within a cluster are correlated.

Therefore:
- unit of allocation != individual participant;
- analysis must account for clustering.

Detailed ICC/statistical methods are deferred.

### Exercise-project relevance

Particularly relevant for:
- coaching systems;
- adherence interventions;
- team programs;
- gym-level policy/implementation strategies.

Usually not needed for a simple individual exercise comparison.

---

## 5. Individually randomized trials with treatment clustering

### Important structural edge case
**Confidence: HIGH**

Participants can be individually randomized while intervention delivery creates clusters, for example:
- participants randomized individually;
- but trained by a small number of coaches/classes/groups.

Thus:
**unit of randomization and dependency structure can differ**.

Project rule:
record separately:
1. unit randomized;
2. unit delivering intervention;
3. unit observed;
4. clustering source.

This prevents falsely classifying every clustered dataset as a cluster-randomized trial.

---

# Part E — Stepped-wedge cluster randomized trial

## 6. Stepped-wedge

### Established finding
**Confidence: HIGH**

Structure:
1. randomization occurs by cluster;
2. clusters begin under comparator/control;
3. clusters switch to intervention at randomized/sequenced time points;
4. by the end, typically all clusters receive the intervention.

### Main structural issue

Intervention exposure is entangled with calendar/time position:
- more clusters receive intervention later.

Therefore secular/time trends can confound naive comparisons.

### Appropriate contexts

Often useful for:
- service;
- policy;
- organizational;
- implementation interventions
where rollout occurs sequentially.

### Fitness-project relevance

Could appear in:
- gym rollout;
- school/team physical-activity intervention;
- coaching-system implementation.

Low relevance for ordinary strength/hypertrophy physiology studies.

### Project taxonomy

**Cluster-randomized + staggered time-switch structure.**

Not a wholly separate evidence class.

---

# Part F — Cluster crossover

## 7. Cluster crossover trial

### Established finding
**Confidence: HIGH**

Clusters are randomized to intervention sequences and cross over between interventions over periods.

Analysis must recognize:
1. within-cluster similarity;
2. pairing of periods within clusters;
3. possible carryover/period effects.

### Project relevance

Rare but possible for:
- team/gym-level short-lived coaching or implementation conditions.

### Taxonomy

**Cluster allocation + crossover sequence**.

This demonstrates why design should be represented by composable features rather than flat labels.

---

# Part G — Multi-arm trials

## 8. Multi-arm randomized trial

### Established finding
**Confidence: HIGH**

More than two intervention groups are randomized.

Examples:
- low / medium / high dose;
- three training programs + control;
- two active interventions + control.

### Structural advantage

Can estimate multiple contrasts in one trial and share infrastructure/control groups.

### Critical interpretation rule

One trial may answer multiple pairwise comparisons.

The same shared control participants must not be naively counted multiple times as independent evidence in one analysis.

Detailed meta-analysis handling belongs to RES-16/21.

### Exercise relevance

High:
- volume-dose comparisons;
- load comparisons;
- multiple exercise variants;
- progression strategy comparisons.

### Project taxonomy

Multi-arm = **number/structure of randomized arms**, not a different causal paradigm.

---

# Part H — Factorial trials

## 9. Factorial randomized trial

### Established finding
**Confidence: HIGH**

A factorial trial randomizes participants across two or more intervention factors.

Canonical 2×2:
- A + B;
- A + not-B;
- not-A + B;
- not-A + not-B.

This can address:
- main effect of A;
- main effect of B;
- interaction A×B.

### Key distinction

A three-arm study:
- A;
- B;
- A+B

is not automatically a factorial trial.

Factorial structure requires crossed randomization of factors.

### Exercise example

Factor 1:
- high vs low volume.

Factor 2:
- creatine vs placebo.

Potential questions:
- volume effect;
- creatine effect;
- volume × creatine interaction.

### Project rule

Factorial = **crossed intervention-factor structure**.

Do not treat every multi-component or multi-arm study as factorial.

---

# Part I — Adaptive designs

## 10. Adaptive randomized design

### Established finding
**Confidence: HIGH for definition; CONDITIONAL relevance**

FDA final 2019 guidance defines adaptive design as a clinical trial allowing **prospectively planned modifications** based on accumulating trial data.

Current ICH E20 draft uses the same core idea and emphasizes pre-specification.

Possible adaptations can include:
- sample size;
- stopping;
- allocation/randomization ratio;
- dropping arms;
- dose selection;
- other prospectively defined changes.

### Critical distinction

Adaptive != ad hoc protocol change after seeing results.

The adaptation rules must be planned in advance in the relevant methodological sense.

### Project taxonomy decision

Adaptive design is a **dynamic design modifier**, not a replacement for structural labels such as:
- parallel;
- multi-arm;
- factorial;
- platform.

An adaptive trial can simultaneously be:
- randomized;
- multi-arm;
- parallel;
- adaptive.

### Fitness-project relevance

Likely low in ordinary exercise trials, but not impossible.

Therefore:
- include in taxonomy;
- do not allocate a large core branch unless later evidence requires it.

Detailed adaptive inference is outside RES-02.

---

# Part J — Platform / master-protocol architecture

## 11. Platform trial

### Current-methodology status
**Confidence: HIGH for classification; low direct relevance to project**

Current FDA terminology/guidance treats platform trials within **master-protocol** structures.

Typical features:
- multiple intervention questions under one ongoing protocol;
- arms may be added/dropped;
- shared infrastructure/control;
- often adaptive, but “platform” and “adaptive” are not synonyms.

### Project taxonomy decision

Platform/master protocol is a **higher-order trial architecture**.

It can contain:
- randomized comparisons;
- multiple arms;
- adaptive rules;
- multiple substudies.

It should not be confused with a basic participant-level allocation design.

### Fitness relevance

Very low for ordinary training literature.

Keep as:
**conditional advanced randomized architecture**.

Current FDA master-protocol guidance located in this pass is a **June 2026 revised draft**, so no final-regulatory claim is made from it.

---

# Part K — Trial-purpose modifiers that must stay orthogonal

## 12. Superiority / non-inferiority / equivalence

### Project architecture decision
**Confidence: HIGH**

These describe the **target hypothesis / inferential objective**, not the basic allocation structure.

A trial can be:
- parallel randomized + superiority;
- parallel randomized + non-inferiority;
- cluster randomized + superiority.

Do not treat these as mutually exclusive alternatives to parallel/crossover/cluster.

Detailed inferential methods are outside this pass.

---

## 13. Pragmatic vs explanatory

### Project architecture decision
**Confidence: HIGH**

This is an orientation/continuum about:
- real-world conditions;
- implementation;
- eligibility;
- delivery;
- decision context.

A pragmatic trial can still be:
- individually randomized parallel;
- cluster randomized.

Thus pragmatic is not a replacement for structural design classification.

---

## 14. Pilot / feasibility trial

### Project architecture decision
**Confidence: HIGH**

Pilot/feasibility describes the **primary purpose**:
- can a later definitive study/intervention be done?
- recruitment?
- adherence?
- procedures?
- measurement feasibility?

It does not by itself define the allocation structure.

A pilot can be randomized or non-randomized.

Do not interpret a small randomized pilot as a fully powered effectiveness trial merely because randomization occurred.

Detailed feasibility methodology is outside RES-02 unless later audit requires it.

---

# Part L — CONSORT extension list does not equal one design axis

## 15. Important current-source observation

The current SPIRIT–CONSORT extension catalogue includes categories such as:
- adaptive;
- cluster;
- crossover;
- factorial;
- multi-arm;
- non-inferiority/equivalence;
- pilot/feasibility;
- pragmatic;
- within-person.

These are all valid reporting-extension targets, but they describe **different dimensions**.

### Project inference

Do not copy the CONSORT extension list directly as a flat “study-design taxonomy”.

Instead map each item to an axis:

| Extension / term | Project axis |
|---|---|
| cluster | unit of allocation |
| crossover | intervention sequence |
| factorial | crossed factor structure |
| multi-arm | arm structure |
| within-person | unit/dependency structure |
| adaptive | dynamic modification rules |
| non-inferiority/equivalence | inferential objective |
| pragmatic | trial orientation |
| pilot/feasibility | trial purpose |

This is a project organizational decision grounded in the source taxonomy.

---

# Part M — Exercise-science routing

## 16. Chronic training adaptation

For:
- hypertrophy;
- chronic strength;
- tendon/bone adaptation;

default plausible randomized structures:
1. parallel-group;
2. randomized within-person/body-part where biologically isolatable;
3. multi-arm/factorial variants.

Crossover is generally suspect because adaptation persists.

---

## 17. Acute reversible effects

For:
- caffeine;
- warm-up;
- acute nutrition;
- acute rest interval;
- acute biomechanical condition;

crossover may be efficient if:
- state is stable;
- washout/recovery adequate;
- carryover negligible.

---

## 18. Coaching / implementation

Possible structures:
- individual parallel randomized;
- cluster randomized;
- stepped-wedge cluster;
- cluster crossover.

Choice depends on:
- delivery unit;
- contamination risk;
- rollout constraints.

---

# Part N — Randomized design record for future evidence extraction

Project-specific structure:

For every randomized study record:

1. Randomized? YES/NO
2. Unit randomized
3. Number of randomized arms
4. Parallel / crossover / other sequence
5. Cluster structure?
6. Stepped-wedge?
7. Within-person/body-part allocation?
8. Factorial?
9. Multi-arm?
10. Adaptive?
11. Master-protocol/platform?
12. Intervention delivery unit
13. Observation unit
14. Repeated measures?
15. Persistent-effect/carryover concern?
16. Trial objective:
   - superiority;
   - non-inferiority;
   - equivalence;
   - feasibility/pilot;
   - other.
17. Pragmatic/explanatory orientation if material
18. Structural features requiring special analysis

This record is project-specific and does not replace formal appraisal tools.

---

# Part O — Practical rules produced by PASS-02

1. Two-group individually randomized parallel trial is the baseline reference structure.
2. Crossover is for temporary/reversible effects, not simply “a more efficient RCT”.
3. Persistent training adaptation can invalidate crossover logic.
4. Split-body/within-person randomization is a paired nested structure, not an independent-participant trial.
5. Unit randomized, intervention unit and observation unit must be recorded separately.
6. Cluster randomization is defined by group-level allocation.
7. Individual randomization can still create treatment clustering.
8. Stepped-wedge = cluster randomization + staggered switch over time.
9. Cluster crossover combines cluster dependence with crossover dependence.
10. Multi-arm describes number/arrangement of arms.
11. Factorial requires crossed randomization of intervention factors.
12. Multi-arm != factorial automatically.
13. Adaptive is a prospectively planned dynamic modifier.
14. Adaptive != ad hoc post-result protocol change.
15. Platform/master-protocol is higher-order architecture, often but not necessarily adaptive.
16. Superiority/non-inferiority/equivalence describe inferential objective, not allocation structure.
17. Pragmatic/explanatory describes trial orientation, not allocation structure.
18. Pilot/feasibility describes trial purpose, not allocation structure.
19. Current CONSORT extension categories must not be copied as one flat taxonomy.
20. Randomized-design classification should be compositional/multi-axis.

---

# Unresolved for RES-02

1. Non-randomized intervention / quasi-experimental families.
2. Observational analytic families.
3. Descriptive designs.
4. Question-specific study families.
5. Purpose-vs-design audit across all families.
6. Final design-selection matrix.
7. Gap audit.
8. New synthesis.

## Next pass

**RES-02 / PASS-03 — non-randomized intervention and quasi-experimental design families.**
