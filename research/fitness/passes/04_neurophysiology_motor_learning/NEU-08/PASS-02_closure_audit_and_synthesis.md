# NEU-08 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-19  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 04 — Neurophysiology / Motor Learning  
Topic: NEU-08 — Neuromuscular fatigue

## 0. Purpose

Проверить, что после PASS-01 тема NEU-08 достаточно закрывает Area 04 Section 8 для downstream NEU-09, TST, TEC, PRO, REC и IND без:

- смешения central fatigue с mental fatigue;
- трактовки peripheral fatigue как второстепенной или всегда меньшей;
- трактовки VA как буквального процента CNS capacity;
- трактовки surface EMG как прямого neural-drive/fatigue score;
- универсального правила “firing rate падает”;
- универсального правила “recruitment растёт”;
- интерпретации coordination/coherence в одном направлении;
- превращения proprioception в глобальный единый показатель;
- отождествления fatigue-related technique change с technical failure или injury mechanism;
- назначения одного recovery clock.

## 1. Materials audited

1. `areas/04_neurophysiology_motor_learning.md`, Section 8 — 10 exact items;
2. `NORMALIZED_KNOWLEDGE_TREE.md`, NEU-08;
3. `PASS-01_neuromuscular_fatigue_revalidation.md`;
4. `EVIDENCE_LEDGER.md`, NEU08-01…NEU08-10;
5. upstream canonical boundaries:
   - `PHY-10_fatigue.md`;
   - `NEU-05_neural_force_production_voluntary_activation_rfd.md`;
   - `NEU-06_neural_adaptation_strength_training.md`;
6. closure-critical re-check:
   - central/peripheral integrative review — PMID 42551098;
   - RT fatigue systematic review — PMID 40644670;
   - VA/ITT validity study — PMID 42709149;
   - motor-unit fatigue study — PMID 41543359;
   - motor-unit recruitment study — PMID 39421412;
   - corticomuscular-coherence systematic review — PMID 42088947;
   - proprioception systematic reviews/meta-analysis — PMIDs 38810655, 38311746;
   - barbell kinematics/kinetics systematic review — PMID 41085612;
   - fatigue-timing study — PMID 42881562;
   - recovery after failure/nonfailure RT — PMID 28965198;
   - repeated-bout neurophysiology meta-analysis — PMID 42762323.

No closure-critical contradiction was found.

---

## 2. Exact area-map audit — 10/10

1. Central fatigue — **PASS AS REDUCED EFFECTIVE VOLUNTARY DRIVE/ACTIVATION CAPACITY, NOT ONE BIOMARKER**.
2. Peripheral fatigue — **PASS; DETAILED MECHANISMS REMAIN PHY-10**.
3. Reduced voluntary activation — **PASS AS POSSIBLE, METHOD-/TASK-DEPENDENT CHANGE**.
4. Motor-unit firing changes — **PASS AS NON-UNIFORM POPULATION RESPONSE**.
5. Recruitment changes — **PASS AS COMPENSATORY BUT TASK-CONSTRAINED**.
6. Coordination changes — **PASS AS HETEROGENEOUS / TASK-DEPENDENT**.
7. Proprioception changes — **PASS WITH SUBMODALITY/MEASUREMENT BOUNDARY**.
8. Fatigue effects on technique — **PASS AS MOVEMENT-STRATEGY CHANGE, NOT AUTOMATIC FAILURE/INJURY**.
9. Task dependency — **PASS AS CORE ORGANIZING PRINCIPLE**.
10. Recovery of neuromuscular function — **PASS AS MULTIPLE OUTCOME-SPECIFIC CLOCKS**.

Result: **10/10 PASS.**

---

## 3. Central-fatigue audit

PASS.

Current integrative evidence supports central fatigue as one component of neuromuscular fatigue arising from interaction between descending drive and peripheral/afferent state.

The construct is retained as:

> exercise-induced reduction in capacity to generate effective voluntary neural drive/activation.

It is not retained as:

- mental fatigue;
- subjective tiredness;
- surface-EMG reduction;
- a single transmitter mechanism;
- one TMS or VA number.

Canonical rule:

**central fatigue is a functional/location class, not one mechanism or one marker.**

No blocker.

---

## 4. Mental-fatigue boundary audit

PASS.

The 2026 RCT-only meta-analysis (PMID 42168782) supports a small-to-moderate reduction in resistance-exercise volume after cognitively demanding tasks, but the evidence quality was limited.

This supports:

- mental fatigue can impair resistance performance.

It does not support:

- mental fatigue = neuromuscular central fatigue.

Canonical rule:

**cognitive/mental fatigue and central neuromuscular fatigue remain separate constructs even when both reduce performance.**

No blocker.

---

## 5. Peripheral-fatigue / central-peripheral audit

PASS.

The RT fatigue systematic review (PMID 40644670; 51 studies) found that contractile function, afferent/perceptual responses and voluntary performance were often affected more consistently than muscle-activation measures.

This is closure-critical because it rejects:

> large performance loss must imply large central-drive loss.

PHY-10 remains authoritative for:

- E-C coupling;
- Ca²⁺ handling;
- ionic/metabolic state;
- cross-bridge/contractile impairment.

Canonical rule:

**central and peripheral fatigue can coexist, and peripheral/contractile impairment may dominate a resistance-training fatigue state.**

No blocker.

---

## 6. Voluntary-activation audit

PASS WITH MEASUREMENT LIMITS.

VA may decrease after some fatiguing protocols.

However:

- some protocols show substantial performance/contractile impairment with little VA change;
- VA estimates are muscle-/method-/protocol-dependent;
- ITT can overestimate VA, including in dorsiflexors (PMID 42709149).

Therefore:

**VA decline is evidence of reduced voluntary activation under that test, not a literal percentage loss of total nervous-system capacity.**

Also:

**unchanged VA does not prove absence of every central-fatigue process.**

No blocker.

---

## 7. Motor-unit firing audit

PASS.

The closure re-check confirms that fatigue-related motor-unit firing is not uniformly downward.

Recent direct evidence (PMID 41543359) found within one fatiguing BFR paradigm:

- lower-threshold units decreased discharge rate;
- higher-threshold units increased discharge rate;
- recruitment/derecruitment thresholds decreased.

The wider literature also supports task-/threshold-specific divergence.

Canonical rule:

**motor-unit firing during fatigue is a population-control response; different units can change in different directions.**

No blocker.

---

## 8. Recruitment audit

PASS WITH TASK-CONSTRAINT BOUNDARY.

Submaximal fatiguing tasks often require:

- greater excitation;
- additional recruitment;
- reduced recruitment thresholds,

as force per active fiber falls.

The 2024 RT study (PMID 39421412) showed increasing sEMG excitation and MUAP amplitude with worsening torque steadiness during the fatigue test.

However near-maximal tasks may have little remaining recruitment reserve.

Canonical rule:

**recruitment demand often rises during fatigue, but the response depends on initial force level, motor-unit reserve, contraction mode and duration.**

No blocker.

---

## 9. Coordination audit

PASS.

The 2026 CMC systematic review (PMID 42088947) found heterogeneous fatigue-related corticomuscular-coherence changes:

- reductions were common;
- preserved or increased coherence also occurred;
- no universal limb-specific pattern emerged.

The 2026 trained-vs-untrained study (PMID 41297828) also showed fatigue effects that differed by muscle pair and training status.

Canonical rule:

**fatigue changes coordination, but one coherence direction is not a universal fatigue or “coordination quality” score.**

No blocker.

---

## 10. Proprioception audit

PASS WITH SUBMODALITY BOUNDARY.

The 2024 knee systematic review and lower-extremity meta-analysis support increased active joint-repositioning error after fatigue.

Importantly:

- some passive repositioning outcomes were not significantly affected;
- effects differ by joint, task and method;
- one cortical sensory-processing measure can remain unchanged.

The 2024 meta-analysis authors discuss potential injury implications, but these studies do not establish a direct causal chain from measured repositioning error to injury occurrence.

Canonical rule:

**fatigue can impair active proprioceptive accuracy, but does not imply global proprioceptive failure or prove an injury mechanism.**

No blocker.

---

## 11. Technique / biomechanics audit

PASS.

The 2025 systematic review of experienced lifters (PMID 41085612) found consistent fatigue/intensity-related changes in:

- bar velocity;
- power;
- concentric duration;
- joint-mechanics variability.

But exact joint-force/kinematic changes were inconsistent.

Therefore:

**fatigue changes movement strategy; it does not produce one universal “bad technique” pattern.**

And:

**a fatigue-related biomechanical change alone is insufficient to establish technical failure or injury causality.**

Detailed acceptable-technique criteria remain TEC/MEC/MED.

No blocker.

---

## 12. Task-dependency audit

PASS — CORE RULE.

The apparently conflicting literature becomes coherent when conditioning on:

- force/intensity;
- duration;
- contraction mode;
- muscle group/mass;
- movement complexity;
- duty cycle/rest;
- blood flow;
- proximity to failure;
- training status;
- measurement method;
- measurement time.

Thus:

- VA may fall or remain stable;
- motor-unit firing can diverge;
- recruitment can rise or be constrained;
- coherence can fall, rise or remain stable;
- proprioception can change selectively.

Canonical rule:

**fatigue must be interpreted as “what function changed in this task, at this stage, with this measurement?”**

No blocker.

---

## 13. Recovery audit

PASS.

Neuromuscular recovery is not one clock.

The failure-vs-nonfailure study (PMID 28965198) showed slower recovery of mechanical performance after training to failure, with differences persisting into roughly 24–48 h.

The 2026 timing study (PMID 42881562) showed that measured fatigue magnitude and test reliability changed materially with post-training measurement time.

The 2026 repeated-bout meta-analysis (PMID 42762323) further supports dissociation among neural, voluntary and contractile outcomes across recovery.

Canonical rule:

**recovery is specific to the target function, test and time point; normalization of one marker does not prove complete neuromuscular recovery.**

No blocker.

---

## 14. One-marker audit

PASS.

Rejected inferences:

- normal VA = fully recovered;
- normal EMG = no neural fatigue;
- reduced CMJ = specifically central fatigue;
- normal CMJ = all neural/contractile systems recovered;
- soreness = neuromuscular readiness;
- bar-velocity loss = one identified mechanism.

Project rule:

**performance markers answer performance-state questions; mechanistic markers answer only the mechanism they validly probe.**

No blocker.

---

## 15. Cross-topic consistency audit

### PHY-10

PASS.

NEU-08 preserves:

- fatigue ≠ task failure;
- central/peripheral coexistence;
- peripheral fatigue as a mechanism class;
- no universal central/peripheral percentage;
- task dependency;
- multidimensional recovery.

### NEU-05

PASS.

NEU-08 preserves:

- neural drive ≠ surface EMG;
- VA ≠ neural drive ≠ cortical activation;
- force/RFD/power as multifactorial outcomes.

### NEU-06

PASS.

NEU-08 preserves:

- motor-unit/corticospinal/spinal markers are non-interchangeable;
- neural state is task/method dependent;
- one marker cannot localize the whole mechanism.

No cross-topic contradiction found.

---

## 16. Evidence-ledger audit

Current ledger covers closure-critical claims:

1. NEU08-01 — central-fatigue construct;
2. NEU08-02 — central/peripheral interaction;
3. NEU08-03 — VA;
4. NEU08-04 — firing non-uniformity;
5. NEU08-05 — recruitment;
6. NEU08-06 — coordination;
7. NEU08-07 — proprioception;
8. NEU08-08 — technique/biomechanics;
9. NEU08-09 — task dependency;
10. NEU08-10 — recovery.

No additional closure-critical ledger row is required.

---

## 17. Uncertainty audit

PASS.

Remaining uncertainty is real but non-blocking:

1. exact central/peripheral share of one set or session;
2. exact validity of VA for a specific muscle/task;
3. exact motor-unit strategy in dynamic multijoint lifting;
4. exact interpretation of one coherence change;
5. exact sensory mechanism behind position-sense error;
6. exact relation between fatigue-related movement change and injury probability;
7. exact time course of each neural subsystem’s recovery;
8. individual readiness thresholds;
9. optimal proximity-to-failure or velocity-loss prescription.

These belong downstream to TST, TEC, PRO, REC and IND when a concrete decision requires them.

---

## 18. Scope-control audit

Neighboring ownership remains separate:

- broader motor control / synergies / variability → NEU-09;
- detailed peripheral fatigue mechanisms → PHY-10/BIO;
- test selection/readiness thresholds → TST;
- technical-failure definitions → TEC;
- exercise dose/failure/RIR/rest prescription → PRO/GPP;
- recovery-day decisions → REC;
- individual fatigue profile → IND.

No additional NEU-08 PASS is required before closure.

---

## 19. Closure criterion test

Topic:

> NEU-08 — Neuromuscular fatigue

Result: **PASS.**

Canonical synthesis:

`task demand`
interacts with
`descending voluntary drive + afferent feedback + motor-unit control + peripheral contractile state + coordination/sensory state`
→
`momentary force / velocity / power / steadiness / technique`.

With fatigue:

`compensatory neural strategies`
may preserve output temporarily,
while
`peripheral + central + sensory/coordination constraints`
change on task-specific trajectories.

With recovery:

`performance + VA + contractile function + proprioception + coordination + perception`
do not normalize at one common rate.

---

## 20. Closure decision

**NEU-08 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 10 exact Section 8 items pass;
2. central fatigue is separated from mental fatigue and one-marker interpretations;
3. peripheral fatigue remains distinct and can dominate;
4. VA is method-/task-dependent, not a CNS percentage;
5. motor-unit firing responses are non-uniform;
6. recruitment compensation is task constrained;
7. coordination changes are heterogeneous;
8. proprioceptive impairment is submodality specific;
9. fatigue-related technique changes are real without one universal failure/injury pattern;
10. task dependency is the organizing principle;
11. recovery follows multiple clocks;
12. NEU-08 is consistent with PHY-10, NEU-05 and NEU-06;
13. no project-relevant blocker remains;
14. first canonical NEU-08 finding can now be created;
15. NEU-09 can proceed later without reopening NEU-08 unless a concrete dependency appears.

---

## 21. Next dependency

**NEU-09 — Motor control.**

Do not start NEU-09 in this same working block.
