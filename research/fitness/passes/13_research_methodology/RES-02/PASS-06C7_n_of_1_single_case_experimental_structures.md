# RES-02 / PASS-06C7 — N-of-1 and single-case experimental structures for mechanistic / physiology research

Статус: **COMPLETE MICRO-PASS — mechanistic branch RESEARCHING pending repeat closure audit**  
Дата: 2026-11-17  
Topic: RES-02 — Study designs / what they answer

## Scope этого micro-pass

Только:

1. N-of-1 trial vs broader single-case experimental design (SCED);
2. randomized replicated multi-crossover N-of-1;
3. nonrandomized repeated challenge–withdrawal structures;
4. withdrawal/reversal designs;
5. multiple-baseline designs;
6. alternating-/simultaneous-treatment designs;
7. changing-criterion designs;
8. A-B / pre-post boundary;
9. individual vs population estimands;
10. repeated outcome measurement;
11. randomization, blocking and counterbalancing at taxonomy level;
12. onset/offset, washout and carryover;
13. period/time trends and autocorrelation;
14. outcome reliability and measurement burden;
15. target-engagement / mediator measurement inside SCED;
16. relation to ordinary crossover;
17. relation to self-controlled observational designs;
18. exercise / experimental-physiology use cases;
19. explicit ownership boundary with RES-27.

Не покрывается здесь:

- exact randomization schedules;
- exact block construction;
- sample-size/power formulas;
- exact autocorrelation models;
- ARIMA/dynamic-regression details;
- Bayesian/hierarchical models;
- exact randomization tests;
- visual-analysis rules;
- SCED effect-size formulas;
- meta-analysis of N-of-1 trials;
- response-adaptive algorithms;
- stopping rules;
- digital platform implementation;
- individualized decision thresholds;
- final mechanistic synthesis.

Detailed N-of-1 methodology remains owned by **RES-27**.

---

# Sources checked

## 1. Konigorski, Ried-Larsen & Schmid — current 2026 experimental-physiology review

Konigorski S, Ried-Larsen M, Schmid CH.  
**Digital N-of-1 trials and their application in experimental physiology.**  
Exp Physiol. 2026;111(8):3525–3545.  
DOI: 10.1113/EP092753.

Current Wiley/PubMed/PMC records checked 2026-11-17.

Key current points:

- N-of-1 uses a **replicate / multi-crossover design**;
- one participant receives each of two or more conditions multiple times;
- treatment order is usually randomized;
- one or more outcomes may be repeatedly measured within each period;
- repeated exposure to each condition permits individual-level treatment-effect estimation;
- series of N-of-1 trials can be aggregated for population-level inference;
- ordinary repeated measurements under one intervention do not establish individual treatment effects;
- a conventional two-period crossover, where each intervention is received once, does not provide the same replicated individual-effect evidence;
- experimental physiology is a particularly relevant application because digital/high-frequency physiological measurement is increasingly feasible.

https://doi.org/10.1113/EP092753  
https://pubmed.ncbi.nlm.nih.gov/42318774/

---

## 2. CENT 2015

Vohra S, Shamseer L, Sampson M, et al.  
**CONSORT extension for reporting N-of-1 trials (CENT) 2015 Statement.**  
BMJ. 2015;350:h1738.

Current BMJ record checked 2026-11-17.

CENT defines medical N-of-1 as:

- an experimental clinical design;
- one study participant;
- repeated challenge-withdrawal / repeated crossover;
- repeated treatment-control comparisons;
- period/block/sequence structure;
- optional randomization of period order;
- possible placebo, standard care, alternate treatment or multiple active conditions;
- possible single trial or prospectively planned series of N-of-1 trials.

CENT explicitly places N-of-1 inside the broader family of single-case experimental designs rather than treating the terms as synonyms.

https://www.bmj.com/content/350/bmj.h1738

---

## 3. SPENT 2019

**SPIRIT extension and elaboration for n-of-1 trials: SPENT 2019 checklist.**  
BMJ. 2020;368:m122.

Current BMJ and official SPIRIT–CONSORT extension listing checked 2026-11-17.

SPENT:

- restricts “N-of-1” to repeated multiple-crossover trials in one individual;
- covers individual N-of-1 and prospectively planned series;
- requires explicit:
  - number of periods;
  - number of crossovers;
  - period duration;
  - run-in;
  - washout;
  - comparator;
  - randomization;
  - repeated outcome measurement;
  - individual vs series analysis.

Current official CONSORT/SPIRIT site still lists N-of-1 extensions under the older SPIRIT-2013 / CONSORT-2010 extension set; they have not yet been replaced by a fully 2025-aligned N-of-1 extension.

https://www.bmj.com/content/368/bmj.m122  
https://www.consort-spirit.org/extensions/overview/non-inferiority-and-equivalence-trials

---

## 4. SCRIBE 2016

Tate RL, Perdices M, Rosenkoetter U, et al.  
**The Single-Case Reporting Guideline In BEhavioural Interventions (SCRIBE) 2016 Statement.**

Current EQUATOR/PMC listing checked 2026-11-17.

SCRIBE covers the broader SCED family.

Four prototypical experimental structures:

1. withdrawal/reversal;
2. multiple baseline;
3. alternating-/simultaneous-treatments;
4. changing-criterion.

Important distinctions:

- systematic intervention manipulation occurs across multiple phases;
- dependent variable is measured repeatedly/frequently;
- A-B phase-change designs have weaker internal validity and are commonly regarded as quasi-experimental;
- simple pre-post and case descriptions are not SCED experiments;
- any of the prototypical SCEDs can incorporate randomization, although randomization is not inherent in all SCEDs;
- medical N-of-1 is a subset of the withdrawal/reversal family.

https://equator-network.org/reporting-guidelines/scribe-statement/  
https://pmc.ncbi.nlm.nih.gov/articles/PMC4960517/

---

## 5. Current 2026 N-of-1 methodology review

De Carvalho MCL, et al.  
**N-of-1 trials in clinical research: Methodological foundations, statistical approaches and implementation challenges.**  
Br J Clin Pharmacol. 2026;92(3):809–821.

Current PubMed/PMC full text checked.

Important design-level points:

- single-person intervention effects are the primary target;
- repeated periods and repeated within-period measurements are core;
- carryover, time trends and autocorrelation are intrinsic threats;
- series of N-of-1 trials can estimate individual and group-level effects;
- “sample size” for one N-of-1 involves repeated periods/measurements rather than simply number of participants.

Detailed statistical methods are deferred to RES-27.

https://pubmed.ncbi.nlm.nih.gov/41355573/  
https://pmc.ncbi.nlm.nih.gov/articles/PMC12930012/

---

## 6. Current 2026 SCED analysis/reporting update

Kratochwill TR, Ferron J, Levin JR.  
**Reporting guidelines for single-case experimental design research: Recommendations for data analysis.**  
J Sch Psychol. 2026;115:101528.

Current PubMed record checked.

This confirms that SCED analytic/reporting methodology remains an active specialized field in 2026.

Used only for current-status confirmation; detailed analysis is outside this PASS.

https://pubmed.ncbi.nlm.nih.gov/41833442/

---

## 7. Single-case causal mediation

**Causal Mediation Effects in Single Case Experimental Designs.**  
Psychol Methods. 2023;28(2):488–506.

Checked current PMC record.

It confirms:

- SCEDs can contain repeated baseline and treatment phases;
- mediation can be embedded in SCED;
- causal mediation still requires explicit causal assumptions;
- repeated target/outcome timing does not make mediation automatically causal.

https://pmc.ncbi.nlm.nih.gov/articles/PMC10601531/

---

## 8. Current 2026 mechanism-of-change SCED example

Ooms MHPO, et al.  
**Mechanism of change in functional neurological (motor) disorder: a pilot study using a single-case experimental design.**  
Neuropsychol Rehabil. 2026.

Current PubMed record checked.

Design:

- non-concurrent multiple-baseline SCED;
- repeated mediator-like mechanism measure;
- repeated physical-function outcome;
- tested whether mechanism change preceded outcome change.

The study found concurrent association but not the hypothesized predictive temporal relationship, illustrating that repeated measurement can directly test — and fail to confirm — a proposed mechanism sequence.

https://pubmed.ncbi.nlm.nih.gov/42747035/

---

## 9. Current 2026 exercise-physiology response-reproducibility evidence

Odden IU, et al.  
**Limited reproducibility of individual physiological adaptations to repeated endurance exercise training.**  
J Appl Physiol. 2026;141(1):38–57.

Current PubMed/journal record checked.

The same training intervention was repeated in the same individuals after detraining.

Observed physiological adaptation was often not a stable individual trait across repeated exposures.

This is not itself a canonical N-of-1 randomized multi-crossover trial, but it is directly relevant to the inference boundary:

> one observed individual response is not sufficient evidence of stable “responder” status.

https://pubmed.ncbi.nlm.nih.gov/42241643/

---

# Part A — N-of-1 is not synonymous with any study of one person

## 1. Core current definition

### Established finding
**Confidence: HIGH**

A medical N-of-1 trial is an **experimental repeated-comparison design in one participant**.

Canonical structure:

`A → B → A → B`

or randomized blocks such as:

`BA → AB → BA → AB`

or more than two conditions:

`A → B → C → A → C → B ...`

Key feature:

> each relevant treatment/condition is administered **multiple times** to the same person.

---

## 2. One-person pre-post study is not an N-of-1 trial

Structure:

`baseline → intervention → post`

This has:

- one intervention transition;
- no replicated treatment contrast;
- no repeated reversal/crossover logic.

### Project rule

Do not call:

> “one participant measured before and after treatment”

an N-of-1 trial.

It is a single-person uncontrolled before-after structure.

---

## 3. Case report is not N-of-1

Case report:

> descriptive observation of one person.

N-of-1:

> prospectively structured experimental manipulation with repeated comparator periods.

Same N=1 does not imply same design.

---

# Part B — N-of-1 vs broader SCED

## 4. Broader SCED family

SCRIBE recognizes four main experimental families:

1. withdrawal/reversal;
2. multiple baseline;
3. alternating-/simultaneous treatments;
4. changing criterion.

Medical N-of-1 occupies a subset of:

> withdrawal/reversal / repeated multi-crossover designs.

### Project rule

Use:

> **SCED** = broad family  
> **N-of-1** = specific repeated individual trial architecture.

---

## 5. Not every SCED is randomized

Randomization can be introduced into SCED.

But some valid/commonly used SCED structures use:

- fixed phase order;
- staggered onset;
- systematic criterion changes.

### Project rule

Record randomization explicitly.

Do not infer:

> SCED = randomized trial.

---

# Part C — Randomized replicated multi-crossover N-of-1

## 6. Canonical experimental structure

One participant receives:

- A multiple times;
- B multiple times;

with order randomized or randomized within blocks/pairs where feasible.

Example:

`AB | BA | AB | BA`

Each block contains both conditions.

Repeated outcomes are collected during each period.

---

## 7. Why replication matters

### Current 2026 physiology principle
**Confidence: HIGH**

Ordinary two-period crossover:

`A → B`

provides only one realized response under each condition for that person.

Observed A–B difference can include:

- true treatment effect;
- random biological variation;
- period effect;
- learning;
- measurement error;
- day-to-day physiology.

Replicating A and B across several periods provides within-person evidence about reproducibility of the treatment contrast.

### Project rule

Do not call someone:

> responder/non-responder

from one exposure to A and one exposure to B without a design that can separate treatment effect from within-person variation.

---

# Part D — Individual estimand

## 8. Primary distinctive question

> What is the effect of A versus B **for this individual** over the target conditions/timeframe?

This differs from conventional parallel/group crossover primary aim:

> What is the average effect in the target population?

---

## 9. Individual effect is still context-specific

The individual contrast belongs to:

- this participant;
- this time period;
- these doses;
- these conditions;
- this outcome;
- this measurement protocol.

### Project rule

N-of-1 does not create a timeless personal “true response”.

Individual treatment response may itself vary over:

- training status;
- season;
- sleep;
- nutrition;
- disease status;
- adaptation;
- environment.

---

# Part E — Series of N-of-1 trials

## 10. Structure

Run replicated N-of-1 trials in several participants.

Each participant can yield:

> individual effect estimate.

The series can then support:

- population-average effect;
- between-person heterogeneity;
- individual effects.

---

## 11. Not equivalent to an ordinary parallel RCT

Participants contribute:

> repeated within-person treatment contrasts,

not one assigned arm only.

### Project rule

Record separately:

1. individual-trial estimand;
2. aggregated/population estimand.

---

# Part F — Periods, pairs, blocks and sequence

## 12. Period

Time during which one treatment/condition is applied.

---

## 13. Pair/block

Repeated unit containing multiple treatment periods.

Example pair:

`AB`

Example block:

`AABB`

---

## 14. Sequence

Full ordered set of periods/blocks.

### Project rule

The sequence is part of the experimental design, not merely scheduling metadata.

---

# Part G — Randomization

## 15. What can be randomized

Depending on design:

- order within pairs;
- block sequence;
- treatment onset;
- phase start;
- criterion-change timing;
- alternating-condition order.

---

## 16. Why randomization matters

It reduces systematic alignment between treatment and:

- secular trend;
- day-of-week;
- time-of-day;
- learning;
- fatigue;
- other time-varying causes.

### Project rule

Randomization improves causal interpretability but does not solve:

- carryover;
- poor measurement;
- poor adherence;
- autocorrelation;
- unblinded expectancy.

---

# Part H — Blocking / counterbalancing

## 17. Blocked randomization

Can ensure A and B both occur repeatedly over the trial.

This prevents one condition from being concentrated only early/late.

---

## 18. Counterbalancing

Useful when complete randomization is constrained.

Can distribute:

- order effects;
- period effects.

### Scope boundary

Exact optimal sequence generation belongs to RES-27.

---

# Part I — Blinding / placebo / sham

## 19. Particularly valuable when outcomes are expectancy-sensitive

Examples:

- perceived exertion;
- fatigue;
- pain;
- readiness;
- voluntary performance.

Blinding may be easier for:

- capsules;
- beverages;
- device settings;

and harder for:

- warm-up protocol;
- sleep duration;
- obvious training conditions.

### Project rule

Lack of blinding does not invalidate all N-of-1 research, but it can weaken causal attribution when expectancy can affect the outcome.

---

# Part J — Withdrawal / reversal design

## 20. Core structure

Examples:

`A → B → A`

or stronger replicated:

`A → B → A → B`

where:

- A = baseline/control/one treatment;
- B = active treatment/alternative condition.

Experimental control is strengthened if outcome changes systematically with introduction and withdrawal/reintroduction.

---

## 21. Mechanistic use

If B selectively engages mechanism M:

Repeated pattern:

`B on → M changes → Y changes`  
`B off → M/Y return`

can support a functional mechanistic relation.

### Important limitation

Reversal does not automatically prove:

- M is mediator;
- M is exclusive mechanism.

PASS-06C3 assumptions still apply.

---

# Part K — When reversal is unsuitable

## 22. Irreversible/persistent outcomes

Poor fit when intervention produces:

- hypertrophy;
- long-lasting neural learning;
- structural tendon adaptation;
- lasting skill acquisition;
- permanent injury/healing.

Because returning to A does not restore original biological state.

---

## 23. Ethical/practical non-withdrawal

Poor fit if stopping treatment:

- is unsafe;
- removes needed therapy;
- creates unacceptable harm.

Use another SCED family where appropriate.

---

# Part L — Multiple-baseline design

## 24. Core logic

Repeated baseline is collected across multiple:

- participants;
- behaviors/outcomes;
- settings;
- body regions/tasks;

and intervention is introduced at **staggered times**.

Mechanistic/causal support comes from:

> change appearing when intervention begins, not simultaneously across all still-unexposed tiers.

---

## 25. Strength

Useful when:

- treatment cannot be withdrawn;
- effect is persistent;
- reversal would be unethical or impossible.

---

## 26. Experimental unit / “case” can be broader than one person

A multiple-baseline SCED can use replicated tiers across:

- several individuals;
- several behaviors within one individual;
- several settings/tasks.

### Project rule

“Single-case” methodology does not necessarily mean only one human participant in every study.

The replicated **case/tier** structure is the key.

---

## 27. Concurrent vs non-concurrent multiple baseline

Both exist.

Concurrent staggered baselines provide stronger direct control against a shared historical event because some tiers remain untreated at the same calendar time.

Non-concurrent versions can still provide useful evidence but have weaker protection against some history/time threats.

### Project rule

Record concurrent vs non-concurrent explicitly.

Detailed standards belong RES-27/RoB topics.

---

# Part M — Mechanism-of-change multiple baseline

## 28. Repeated M and Y

Possible structure:

- repeated putative mechanism M;
- repeated outcome Y;
- staggered treatment onset.

Questions:

1. does treatment onset change M?
2. does M change before Y?
3. is this temporal sequence replicated across tiers?

### Current example

2026 FND study used non-concurrent multiple-baseline SCED and found:

- concurrent relation;
- no convincing predictive temporal mechanism relation.

This is methodologically valuable because SCED can **falsify/weakly support**, not merely illustrate, a mechanism hypothesis.

---

# Part N — Alternating-treatment design

## 29. Core structure

Two or more conditions are alternated rapidly:

`A, B, A, B, B, A ...`

with repeated outcome measurement.

Aim:

> compare near-contemporaneous response to conditions.

---

## 30. Best fit

When:

- condition effects occur quickly;
- effects dissipate quickly;
- rapid alternation is feasible.

Potential physiology examples:

- two warm-up protocols;
- two rest intervals;
- acute pacing strategies;
- two hydration/beverage conditions.

---

## 31. Main threat

Carryover/interference between adjacent conditions.

### Project rule

Rapid alternation is only interpretable when:

> prior condition does not materially contaminate the next condition, or design/analysis explicitly addresses it.

---

# Part O — Simultaneous-treatment designs

## 32. Related structure

Different treatments can be applied simultaneously to separable:

- behaviors;
- body regions;
- tasks.

Example conceptually:

- left/right limb local intervention differences.

### Boundary

This overlaps with randomized within-person/split-body designs from PASS-02/C2.

### Project rule

Classify both:

> SCED treatment structure + biological experimental unit/spillover risk.

---

# Part P — Changing-criterion design

## 33. Core structure

After baseline, target criterion is changed stepwise.

Example:

`criterion 1 → criterion 2 → criterion 3 → criterion 4`

Evidence strengthens when the measured behavior/outcome tracks those planned criterion shifts.

---

## 34. Best fit

Outcomes that can change gradually/quantitatively.

Examples:

- step count;
- sleep duration;
- rehabilitation exercise volume;
- training adherence target;
- perhaps progressive physiological-behavioral goals.

---

## 35. Not suited to every physiology outcome

Changing criterion is less natural when outcome:

- is binary;
- cannot be directly shaped;
- changes slowly for biological reasons independent of the criterion;
- has irreversible accumulation.

### Project rule

Do not force changing-criterion logic onto outcomes merely because intervention “progresses”.

---

# Part Q — A-B design boundary

## 36. A-B structure

`repeated baseline A → repeated intervention B`

No reversal/staggered replication/alternation.

SCRIBE treats this as having weaker internal validity and commonly quasi-experimental status.

---

## 37. Why weaker

A change at B onset can also reflect:

- history;
- maturation;
- regression to mean;
- learning;
- secular trend.

### Project rule

Repeated measurement alone does not create strong experimental control.

---

# Part R — Pre-post single-person boundary

## 38. Structure

`one/few baseline measure(s) → intervention → one/few post measure(s)`

Not a true SCED experiment because repeated phase measurement/systematic replication is absent.

### Project rule

Do not relabel:

> case report / pre-post N=1

as:

> N-of-1 trial / SCED.

---

# Part S — Outcome measurement density

## 39. Repeated outcomes are intrinsic

Need enough repeated data to characterize:

- within-condition level;
- variability;
- trend;
- transition;
- condition contrast.

### Project rule

A “single-case design” with only one outcome per condition usually cannot support the core time-series/replication logic of SCED.

---

# Part T — Outcome reliability

## 40. Measurement noise directly limits individual inference

If outcome day-to-day error is large relative to treatment effect:

> observed A–B variability can be dominated by noise.

### Fitness relevance

Possible outcomes:

- countermovement jump;
- HRV;
- bar velocity;
- RPE;
- blood glucose;
- resting HR;
- performance time.

Each needs appropriate measurement quality/repeatability.

### Project boundary

Detailed reliability/error methods remain in measurement topics, but RES-02 must record this dependency.

---

# Part U — Treatment onset

## 41. Fast-onset interventions

Best fit for replicated crossover when effect becomes observable within each period.

Examples:

- caffeine;
- acute nutritional manipulation;
- warm-up;
- acute BFR;
- brief recovery intervention.

---

## 42. Delayed onset

If effect requires many days/weeks:

- periods must be long enough;
- early measurements may not represent full treatment state.

### Project rule

Period length is part of the estimand.

---

# Part V — Offset / washout

## 43. Washout purpose

Allow prior condition effect to dissipate before the next condition.

---

## 44. Insufficient washout creates carryover

Then outcome under B may still partly reflect A.

### Project rule

Treatment effect must be interpreted as:

> effect under the actual sequence/carryover architecture,

unless carryover is credibly absent/handled.

---

# Part W — Persistent training adaptation

## 45. Classic multi-crossover limitation

Chronic training adaptations such as:

- hypertrophy;
- strength learning;
- tendon remodeling;

often do not wash out rapidly.

Therefore classic randomized N-of-1 multi-crossover is usually a poor fit for directly comparing long training programs over short alternating periods.

---

## 46. Alternative single-case structures

Persistent effects may sometimes fit better with:

- multiple-baseline;
- carefully planned changing-criterion;
- long washout/detraining with major feasibility costs.

### Project rule

Do not claim:

> N-of-1 is ideal for all personalization questions.

Suitability depends on reversibility and timescale.

---

# Part X — Period effects

## 47. Outcome may change with calendar period independently of treatment

Examples:

- familiarization;
- accumulated fatigue;
- seasonal training progression;
- sleep trend;
- injury recovery;
- body-mass change.

### Project rule

Randomization/counterbalancing helps, but period trends remain a design/analysis target.

---

# Part Y — Autocorrelation

## 48. Repeated outcomes from one person are not independent

Today’s outcome may depend on yesterday’s outcome.

Ignoring serial dependence can distort:

- uncertainty;
- significance;
- apparent treatment effects.

### Ownership boundary

RES-02 records autocorrelation as intrinsic design structure.

Exact modeling:

> RES-27 / statistical topics.

---

# Part Z — Cyclical/periodic confounding

## 49. Examples

- weekday/weekend;
- menstrual cycle;
- training microcycle;
- circadian rhythm;
- work schedule.

If one treatment systematically occurs during one phase:

> treatment can be confounded with cycle.

### Project rule

Randomization/blocking should consider known periodic structure where relevant.

---

# Part AA — Measurement reactivity

## 50. Repeated monitoring can change behavior

Examples:

- daily weight;
- sleep logging;
- RPE tracking;
- food logging;
- step count feedback.

Then:

> measurement itself can become part of the intervention.

### Project rule

Record whether participants see feedback and whether measurement changes behavior.

---

# Part AB — Adherence/fidelity

## 51. Assigned period ≠ received physiological exposure

Need verify where relevant:

- caffeine dose consumed;
- sleep intervention followed;
- BFR pressure achieved;
- warm-up completed;
- supplement timing;
- recovery protocol adherence.

### Mechanistic relevance

Without fidelity:

> failed target engagement may reflect failed delivery rather than failed mechanism.

---

# Part AC — N-of-1 for mechanistic target engagement

## 52. Repeated target measurement

Possible architecture:

`A period → target M → Y`  
`B period → target M → Y`  
repeated across blocks.

Can estimate:

- within-person A→M effect;
- within-person A→Y effect;
- temporal repeatability.

---

## 53. Stronger mechanism evidence

If across repeated blocks:

- A consistently changes M;
- M precedes Y;
- B does not;
- pattern reproduces;

mechanistic plausibility strengthens.

### But

This still does not automatically establish:

- formal causal mediation;
- necessity/sufficiency;
- exclusivity.

Route mediation claims through C3.

---

# Part AD — SCED mediation

## 54. Causal mediation can be embedded in SCED

Current methods exist to estimate direct/indirect effects in single-case experimental data.

### Project rule

The same constraints remain:

- mediator-outcome confounding;
- timing;
- measurement quality;
- causal assumptions.

Repeated measurement is helpful but not a free causal identification device.

---

# Part AE — Individual “responder” inference

## 55. Major exercise-science relevance

A one-time pre/post response:

> cannot distinguish stable individual responsiveness from measurement error + within-person biological variation.

A two-period crossover with one A and one B also lacks replicated individual exposure.

### Current 2026 physiology support

The N-of-1 review explicitly argues replicated multi-crossover is required for individual treatment-effect inference.

The 2026 repeated endurance-training study independently shows that observed training adaptations can be poorly reproducible within the same person.

### Project rule

Do not label stable responder/non-responder status without repeated evidence sufficient to estimate within-person variation.

---

# Part AF — N-of-1 vs ordinary group crossover

## 56. Ordinary group crossover

Typical structure:

- many participants;
- each treatment once/few times;
- primary estimand = group/population contrast.

---

## 57. N-of-1

Typical structure:

- one participant;
- each treatment repeated multiple times;
- primary estimand = individual contrast.

### Project rule

N-of-1 is a **replicated crossover**, not merely a crossover with N=1.

---

# Part AG — N-of-1 vs within-person body-part design

## 58. Split-body trial

Different limbs/body parts receive conditions concurrently.

Primary within-person contrast can be local.

---

## 59. N-of-1 temporal trial

Same person receives conditions repeatedly over time.

### Project rule

These are both within-person but have different:

- experimental units;
- contamination risks;
- time/carryover structures.

Do not collapse them.

---

# Part AH — N-of-1 vs self-controlled observational designs

## 60. Experimental N-of-1

Investigator prospectively assigns/manipulates treatment periods.

---

## 61. Case-crossover / SCCS

Exposure occurs observationally; investigator compares within-person times.

### Project rule

Self-control is not enough to make them equivalent.

Critical distinction:

> **assigned exposure vs observed exposure**.

---

# Part AI — Observational N-of-1

## 62. Related but distinct

A person may collect repeated exposure/outcome data without assigned intervention periods.

This can characterize:

- associations;
- temporal patterns;
- self-tracking.

It is **not** a randomized experimental N-of-1 trial.

### Route

Classify according to:

- longitudinal observational time-series;
- self-controlled observational structure;

depending the question.

---

# Part AJ — Exercise/fitness use cases

## 63. Acute caffeine

Question:

> Does caffeine improve this individual’s repeated performance relative to placebo?

Good N-of-1 candidate if:

- dose/timing standardized;
- washout adequate;
- placebo/blinding feasible;
- performance measured repeatedly;
- training/fatigue cycle controlled.

---

## 64. Warm-up protocol

Question:

> Does warm-up A vs B improve this individual’s jump/sprint/strength performance?

Possible randomized alternating/multi-crossover structure.

Threats:

- learning;
- fatigue;
- day-to-day readiness;
- order;
- prior training.

---

## 65. Acute BFR pressure

Question:

> How do repeated pressure conditions affect local physiological response in this person?

Possible:

- alternating-treatment;
- randomized blocked N-of-1;
- mechanistic target measurements.

Need manage:

- carryover;
- local/systemic effects;
- safety.

---

## 66. Carbohydrate / hydration timing

Potential rapid-onset N-of-1 structure if:

- exposure standardized;
- diet controlled enough;
- task repeatable;
- washout/context stable.

---

## 67. Recovery intervention

Examples:

- cooling;
- compression;
- brief recovery protocol.

Possible N-of-1 when:

- effects reversible;
- periods/events repeatable.

Need avoid confounding with:

- underlying training load;
- muscle damage trajectory.

---

## 68. Sleep intervention

Potentially useful but more difficult.

Threats:

- residual effects across nights;
- cumulative sleep debt;
- weekday/work schedule;
- measurement reactivity.

### Project rule

Suitability depends on realistic onset/offset, not on intervention popularity.

---

# Part AK — Chronic hypertrophy / strength example

## 69. Poor classic multi-crossover target

Question:

> Which 12-week hypertrophy program is best for this person?

Problem:

- each program creates persistent adaptation;
- washout/detraining is long;
- sequence changes biological baseline.

Classic ABAB N-of-1 is therefore difficult.

### Alternatives

- split-body/local design for some exercise variables;
- multiple-baseline structures;
- repeated long cycles with cautious interpretation;
- later personalized adaptive evidence methods.

---

# Part AL — Multiple-baseline fitness example

## 70. Conceptual example

Introduce intervention at staggered times across:

- different exercises;
- different movement tasks;
- perhaps limbs/settings where spillover is limited.

If outcome changes only after each staggered introduction:

> evidence for functional relation strengthens.

### Limitation

Training adaptations and systemic spillover can violate independence of tiers.

---

# Part AM — Changing-criterion fitness example

## 71. Behavioral adherence target

Gradually raise:

- weekly step target;
- adherence threshold;
- sleep-duration goal.

If behavior tracks stepwise criterion changes:

> supports intervention control over behavior.

### Boundary

This says more about behavior regulation than mechanism of hypertrophy/strength directly.

---

# Part AN — Mechanistic physiology vs personalization

## 72. Same N-of-1 design can serve different purposes

### Mechanistic purpose
> How does condition A alter physiological target M in this person?

### Personalized effectiveness purpose
> Which condition produces better practical outcome Y for this person?

### Project rule

Purpose and design remain separate axes.

Do not infer mechanism merely because an individualized treatment effect exists.

---

# Part AO — Digital N-of-1

## 73. Digital measurement enables dense repeated data

Potential tools:

- wearables;
- continuous glucose monitoring;
- home BP;
- sleep sensors;
- training devices;
- ecological momentary assessment.

### Advantage

Reduces burden of repeated laboratory visits and increases temporal resolution.

---

## 74. Digital measurement does not remove measurement validity problems

Wearables can have:

- device bias;
- firmware changes;
- missingness;
- algorithm changes;
- nonwear;
- behavioral feedback effects.

### Project rule

Dense data ≠ valid data automatically.

---

# Part AP — Individual vs population generalization

## 75. Individual inference

Strongest target:

> effect for the studied person under tested conditions.

---

## 76. External validity

One N-of-1 cannot establish:

> effect for everyone.

A series can improve population inference, but transportability still depends on:

- participant selection;
- heterogeneity;
- contexts;
- intervention standardization.

---

# Part AQ — Replication dimensions

## 77. Within-person replication

Repeated A/B periods.

Supports:

- stability/reproducibility of individual contrast.

---

## 78. Between-person replication

Series of N-of-1 trials.

Supports:

- population pattern;
- heterogeneity.

---

## 79. Cross-context replication

Repeat under:

- different training phases;
- settings;
- seasons.

Can test stability of individualized effect.

### Project rule

These are different replication targets.

---

# Part AR — Time-varying individual effects

## 80. Individual response can change

Treatment effect may depend on:

- training state;
- adaptation;
- age;
- injury;
- baseline exposure;
- season.

### Project rule

N-of-1 estimates:

> an individual effect over a specified experimental context,

not immutable biological identity.

---

# Part AS — Mechanistic claims hierarchy inside SCED

## 81. Repeated A→Y

Supports:

> within-person functional treatment relation.

---

## 82. Repeated A→M

Supports:

> within-person target engagement.

---

## 83. Repeated A→M→Y with correct timing

Supports:

> mechanism hypothesis more strongly.

---

## 84. Directly manipulating M

Supports:

> stronger causal evidence about M.

### Project rule

SCED replication strengthens temporal/functional evidence but does not bypass C2/C3 requirements for target specificity and causal mediation.

---

# Part AT — Structural record for N-of-1 / SCED

For every study, record:

1. single-case methodology? YES/NO;
2. participant count;
3. number of replicated cases/tiers;
4. specific design:
   - randomized N-of-1 multi-crossover;
   - nonrandomized N-of-1;
   - withdrawal/reversal;
   - multiple baseline;
   - alternating treatment;
   - simultaneous treatment;
   - changing criterion;
   - A-B quasi-experimental;
   - other;
5. medical N-of-1 or broader SCED?;
6. scientific purpose:
   - mechanistic;
   - individualized effect;
   - behavioral;
   - feasibility;
   - other;
7. intervention/condition A;
8. comparator B/C/etc.;
9. outcome Y;
10. mechanism target M if present;
11. mediator claim?;
12. period/phase count;
13. block/pair structure;
14. treatment sequence;
15. randomized?;
16. randomization unit:
   - period;
   - block;
   - onset;
   - tier;
   - other;
17. counterbalancing?;
18. blinding/placebo/sham?;
19. run-in?;
20. washout?;
21. onset time;
22. offset time;
23. carryover plausible?;
24. reversible intervention effect?;
25. baseline stable enough?;
26. outcome repeatedly measured?;
27. measurements per phase/period;
28. outcome reliability/error;
29. autocorrelation/time-series structure;
30. secular trend;
31. periodic/cyclic confounding;
32. learning/fatigue;
33. measurement reactivity;
34. adherence/fidelity;
35. target engagement repeated?;
36. target timing relative to Y;
37. formal mediation performed?;
38. multiple-baseline:
   - concurrent/nonconcurrent;
   - stagger variable;
39. alternating-treatment:
   - rapid carryover risk;
40. changing-criterion:
   - criterion sequence;
   - outcome capable of graded response;
41. individual effect estimand;
42. population/series estimand;
43. within-person replication;
44. between-person replication;
45. context/time-specific effect recognized?;
46. persistent adaptation limitation?;
47. self-controlled observational boundary;
48. ordinary crossover boundary;
49. detailed analysis ownership deferred to RES-27?;
50. final project classification;
51. unresolved design/statistical/measurement issues.

---

# Practical rules produced by PASS-06C7

1. N-of-1 trial is not synonymous with any study involving one person.
2. Medical N-of-1 is a repeated individual experimental comparison, usually a replicated multi-crossover / withdrawal-reversal structure.
3. Each relevant condition should be administered repeatedly when the goal is replicated individual treatment-effect inference.
4. One-person pre-post study is not an N-of-1 trial.
5. Case report is not an N-of-1 trial.
6. N-of-1 is a subset of the broader SCED family.
7. Broader prototypical SCEDs include withdrawal/reversal, multiple baseline, alternating/simultaneous treatments and changing criterion.
8. SCEDs can incorporate randomization, but not every SCED is randomized.
9. Randomization status and randomization unit must be recorded explicitly.
10. Randomized multi-crossover N-of-1 is structurally different from an ordinary two-period crossover.
11. A single A-vs-B exposure per person is insufficient for robust individual responder inference because treatment effect cannot be separated well from within-person variation.
12. Repeated A/B exposures allow direct estimation of reproducibility of the individual condition contrast.
13. Individual N-of-1 estimand concerns the studied person under specified conditions/time.
14. An N-of-1 effect is not an immutable personal trait.
15. A prospectively planned series of N-of-1 trials can estimate both individual and population-level effects.
16. Series of N-of-1 trials are not structurally equivalent to a parallel-group RCT.
17. Period, pair/block and sequence are design elements, not scheduling trivia.
18. Blocking/counterbalancing can distribute time/order effects; detailed sequence optimization remains RES-27.
19. Blinding/placebo/sham can be especially important for expectancy-sensitive physiological/performance outcomes.
20. Withdrawal/reversal strengthens a functional relation by repeated introduction/removal when effect is reversible.
21. Reversal is poor fit for persistent/irreversible adaptations or when treatment withdrawal is unsafe.
22. Multiple-baseline designs stagger intervention onset across replicated tiers and are useful when reversal is impossible.
23. Concurrent vs non-concurrent multiple baseline should be recorded explicitly.
24. A “case” in SCED can be a participant, behavior, setting or other replicated tier; SCED does not always mean one participant total.
25. Alternating-treatment designs rapidly compare conditions and require strong attention to carryover/interference.
26. Simultaneous-treatment designs overlap structurally with local/within-person body-part experiments and require spillover assessment.
27. Changing-criterion designs test whether behavior/outcome tracks planned stepwise criterion changes.
28. Changing-criterion is most natural for graded, modifiable outcomes and should not be forced onto irreversible biological adaptation.
29. A-B phase-change design is weaker/quasi-experimental because history/maturation/trend are not strongly controlled.
30. Simple pre-post N=1 is not a SCED experiment.
31. Repeated outcome measurement is intrinsic to SCED causal/time-series logic.
32. Measurement reliability directly limits individual-effect inference.
33. Fast-onset/fast-offset interventions are especially suitable for classic N-of-1 multi-crossover.
34. Washout is required when residual effects would contaminate the next period.
35. Chronic hypertrophy/strength/tendon adaptation often fits classic ABAB N-of-1 poorly because effects persist.
36. Period trends, autocorrelation and cyclic confounding are intrinsic design concerns.
37. Exact time-series/autocorrelation modeling is owned by RES-27/statistical methodology, not RES-02.
38. Repeated measurement can itself modify behavior; feedback visibility should be recorded.
39. Assigned period is not equivalent to delivered exposure; adherence/manipulation fidelity matters.
40. Repeated A→M measurement can establish repeated target engagement within an individual.
41. Repeated A→M→Y timing strengthens mechanism evidence but does not automatically identify causal mediation.
42. SCED causal mediation remains subject to mediator-outcome confounding and C3 assumptions.
43. Experimental N-of-1 assigns/manipulates exposures; case-crossover/SCCS observe naturally occurring exposure periods.
44. Within-person comparison alone does not make experimental and observational self-controlled designs equivalent.
45. Observational self-tracking is not a randomized N-of-1 trial.
46. Ordinary split-body/within-person trials and temporal N-of-1 trials use different experimental units and contamination structures.
47. Digital/wearable measurement can enable dense N-of-1 data but does not guarantee measurement validity.
48. Within-person replication, between-person replication and cross-context replication are separate evidence dimensions.
49. N-of-1/SCED can answer mechanistic or personalized-effect questions; design does not determine scientific purpose by itself.
50. Current 2026 experimental-physiology literature supports N-of-1 as a distinct design deserving explicit RES-02 taxonomy.
51. Detailed N-of-1 planning, statistics, aggregation and personalization remain owned by RES-27.

---

# Evidence limitations

1. CENT/SPENT apply specifically to medical N-of-1 repeated crossover trials and not the full SCED family.
2. CENT 2015 and SPENT 2019 remain current specialized extensions listed by CONSORT/SPIRIT, but they are based on the pre-2025 core statements and await full alignment with CONSORT/SPIRIT 2025.
3. SCRIBE 2016 remains the current EQUATOR-listed broad SCED reporting guideline; it is a reporting guideline, not a design-validity guarantee.
4. Different SCED fields use terminology somewhat differently.
5. Exact minimum phase lengths/data points cannot be universalized across physiology outcomes.
6. Carryover can be difficult to distinguish from delayed biological onset/offset.
7. High-frequency measurements can create apparent statistical precision while systematic device error remains.
8. Repeated N-of-1 effects may themselves vary over calendar/training state.
9. Series-of-N-of-1 population inference requires methods not covered in RES-02.
10. Multiple-baseline and changing-criterion structures are much more established in behavioral/rehabilitation research than in exercise physiology specifically.
11. Mechanistic mediation inside SCED remains methodologically specialized and does not eliminate standard causal assumptions.
12. Chronic adaptation questions may need other within-person/longitudinal designs rather than classic multi-crossover N-of-1.

---

# Gap status after PASS-06C7

The blocking gap identified by PASS-06C6 is now covered at taxonomy level:

- randomized replicated multi-crossover N-of-1;
- medical N-of-1 vs broader SCED;
- withdrawal/reversal;
- multiple baseline;
- alternating/simultaneous treatment;
- changing criterion;
- A-B / pre-post boundary;
- individual vs population estimands;
- repeated measurement;
- onset/offset/washout/carryover;
- autocorrelation/time trend recognition;
- mechanistic target/mediator use;
- exercise/fitness applicability;
- boundary with ordinary crossover and self-controlled observational designs;
- explicit ownership handoff to RES-27.

This **does not automatically authorize mechanistic synthesis**.

Workflow requires a repeat closure/gap audit.

## Next micro-pass

**RES-02 / PASS-06C8 — repeat mechanistic-branch closure/gap audit after PASS-06C7: recheck PASS-06C1…C7 plus randomized/quasi-experimental/observational/prediction/measurement boundaries; verify no remaining mechanism-evidence design family, SCED crosswalk, target-engagement/mediation/translation contradiction or exercise-specific blocker remains; decide whether mechanistic structural synthesis is finally permitted.**

STOP after this saved micro-pass.
