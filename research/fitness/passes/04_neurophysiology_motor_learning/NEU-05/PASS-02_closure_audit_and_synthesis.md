# NEU-05 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-19  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 04 — Neurophysiology / Motor Learning  
Topic: NEU-05 — Neural force production / voluntary activation / RFD

## 0. Purpose

Проверить, что после PASS-01 тема NEU-05 достаточно закрывает Area 04 Section 5 для downstream NEU-06/08/09, TST, TEC, PRO, GPP и IND без:

- neural drive equated with surface EMG;
- VA treated as direct neural drive or “percent of CNS used”;
- agonist EMG equated with agonist force;
- antagonist coactivation treated as universally harmful;
- synergist/intermuscular coordination treated as fixed;
- intramuscular coordination treated as a vague non-measurable construct;
- force steadiness equated with maximal strength;
- all RFD windows treated as one variable;
- explosive activation equated with plateau MVC activation;
- maximal strength attributed primarily to one neural mechanism;
- power treated as a pure neural outcome;
- one EMG/TMS/VA metric treated as the neural contribution to performance.

## 1. Materials audited

1. `areas/04_neurophysiology_motor_learning.md`, Section 5 — 14 exact items;
2. `NORMALIZED_KNOWLEDGE_TREE.md`, NEU-05;
3. `PASS-01_neural_force_production_voluntary_activation_rfd_revalidation.md`;
4. `EVIDENCE_LEDGER.md`, NEU05-01…NEU05-13;
5. current findings inventory confirming no pre-existing NEU-05 canonical;
6. closure-critical re-check:
   - neural-drive methods review — PMID 38518426;
   - VA dorsiflexor study — PMID 42709149;
   - early-strength-training coordination study — PMID 41945585;
   - RFD neuromechanics review — PMID 36123735;
   - burst-vs-MVIC study — PMID 42565821;
   - ACSM 2026 RT position stand — PMID 41843416.

No closure-critical contradiction was found.

## 2. Exact area-map audit — 14/14

1. Recruitment — **PASS WITH NEU-02 TASK-DEPENDENT BOUNDARY**.
2. Rate coding — **PASS AS COMPLEMENTARY TO RECRUITMENT**.
3. Neural drive — **PASS AS ENSEMBLE MOTOR-NEURON DISCHARGE, NOT EMG**.
4. Voluntary activation — **PASS AS METHOD/MUSCLE-DEPENDENT MEASUREMENT CONSTRUCT**.
5. Agonist activation — **PASS WITH EMG-vs-FORCE BOUNDARY**.
6. Antagonist coactivation — **PASS AS TORQUE-COST + STABILITY/CONTROL TRADEOFF**.
7. Synergist coordination — **PASS AS TASK-DEPENDENT FORCE-SHARING / DRIVE DISTRIBUTION**.
8. Intermuscular coordination — **PASS AS TIMING/COUPLING ACROSS MUSCLES**.
9. Intramuscular coordination — **PASS AS MOTOR-UNIT-POOL ORGANIZATION**.
10. Force steadiness — **PASS AS OUTPUT-VARIABILITY CONSTRUCT DISTINCT FROM MAXIMAL FORCE**.
11. Rate of force development — **PASS AS TIME-WINDOW-SPECIFIC NEUROMECHANICAL OUTCOME**.
12. Explosive voluntary activation — **PASS AS RAPID DRIVE DEVELOPMENT DISTINCT FROM PLATEAU VA**.
13. Neural contribution to maximal strength — **PASS WITH NEURAL + MUSCULAR/MECHANICAL BOUNDARY**.
14. Neural contribution to power — **PASS WITH FORCE×VELOCITY / TECHNIQUE / MECHANICS BOUNDARY**.

Result: **14/14 PASS.**

## 3. Recruitment / rate-coding audit

PASS.

NEU-02 remains authoritative:

- force is scaled through recruitment + rate coding;
- recruitment threshold is task/context dependent;
- discharge behavior is muscle/task dependent;
- neither mechanism alone is sufficient to explain force production.

Canonical rule:

**neural force output is population-level motor-unit control, not a single recruitment or firing-rate variable.**

No blocker.

## 4. Neural-drive audit

PASS.

The 2024 NeuroMechanics review defines neural drive as the ensemble of action potentials discharged by active spinal motor neurons and transmitted to muscle fibers.

This is the correct project-level construct.

Surface EMG remains indirect because it is influenced by:

- motor-unit discharge;
- motor-unit action-potential properties;
- muscle-fiber conduction/membrane state;
- electrode geometry;
- cancellation;
- anatomy;
- normalization.

Canonical rule:

**neural drive = ensemble motoneuron output; EMG is a conditional proxy, not the construct itself.**

No blocker.

## 5. Voluntary-activation audit

PASS WITH STRONG MEASUREMENT BOUNDARY.

VA is a stimulation-based estimate of incomplete voluntary activation.

The 2026 dorsiflexor study (PMID 42709149) found ITT substantially overestimated VA, with apparent ~95% saturation around 73% MVIC and ~90% estimated VA already around 50% MVIC.

Therefore:

- VA is method dependent;
- VA is muscle dependent;
- VA cannot be interpreted as a direct percentage of neural drive or cortical activation.

Canonical rule:

**VA is a protocol-specific measurement construct, not a universal neural-capacity percentage.**

No blocker.

## 6. Agonist-activation audit

PASS.

Agonist activation is necessary for target torque generation.

But:

`surface EMG amplitude ≠ muscle force`.

Force also depends on:

- muscle length;
- moment arm;
- velocity;
- contractile state;
- muscle-tendon mechanics.

Canonical rule:

**agonist EMG is not a direct force meter.**

No blocker.

## 7. Antagonist-coactivation audit

PASS.

Coactivation can:

- oppose net agonist torque;
- increase joint stiffness;
- support stability/control;
- redistribute joint loading.

Training-related changes are task specific.

Canonical rule:

**lower antagonist activity is not universally better; coactivation is a control strategy with costs and benefits.**

No blocker.

## 8. Synergist / intermuscular-coordination audit

PASS.

The 2026 early-training study (PMID 41945585) showed:

- maximal and rapid force improved after training;
- agonist activation changes were muscle specific;
- intermuscular coherence changed across selected synergist and agonist-antagonist pairs.

This supports adaptable coordination rather than a fixed muscle-sharing pattern.

Canonical rule:

**intermuscular coordination can change through timing/coupling/weighting without implying wholesale replacement of the movement strategy.**

No blocker.

## 9. Intramuscular-coordination audit

PASS.

Intramuscular coordination is retained as organization of motor-unit population behavior within one muscle:

- recruitment;
- rate coding;
- common synaptic input;
- discharge variability;
- synchronization-related timing;
- motoneuron intrinsic effects.

Canonical rule:

**intramuscular coordination is measurable motor-unit population control, not “mind-muscle connection.”**

No blocker.

## 10. Force-steadiness audit

PASS.

Force steadiness is a control/variability outcome during target-force maintenance.

It depends strongly on:

- common synaptic-input variability;
- motor-unit discharge variability;
- recruitment state;
- task force level;
- sensory feedback.

Canonical rule:

**force steadiness and maximal strength are distinct outcomes and may adapt partly independently.**

No blocker.

## 11. RFD audit

PASS.

RFD is:

`Δforce / Δtime`.

The 2023 neuromechanics review explicitly frames RFD as jointly determined by neural drive and musculotendinous properties.

Canonical temporal model:

- early RFD: stronger dependence on rapid neural activation, initial recruitment and firing rates;
- later RFD: progressively larger influence from maximal-force capacity and muscle/tendon/contractile properties.

Therefore:

**RFD must always be interpreted with its time window.**

No blocker.

## 12. Explosive-voluntary-activation audit

PASS.

Explosive voluntary activation concerns how rapidly voluntary activation/neural drive rises after contraction onset.

It is not the same as plateau VA during an MVC.

The 2026 burst-vs-MVIC study (PMID 42565821) showed burst instructions produced greater maximal RFD and faster EMG rise than conventional MVIC trials.

Canonical rule:

**rapid activation rate is a distinct performance dimension from maximal plateau activation.**

No blocker.

## 13. Maximal-strength audit

PASS.

Maximal voluntary strength depends on:

### Neural
- recruitment/rate coding;
- effective neural drive;
- voluntary activation;
- agonist/synergist coordination;
- antagonist regulation;
- spinal/corticospinal/motoneuron state.

### Muscular/mechanical
- muscle size;
- architecture;
- fiber/contractile properties;
- tendon/mechanical transmission;
- joint moment arms;
- technique.

The 2026 ACSM overview synthesized 137 systematic reviews and supports RT effects on strength, hypertrophy, power and other muscle-function outcomes, reinforcing that strength adaptation is not one isolated neural process.

Canonical rule:

**maximal strength is a neuromuscular/mechanical output; one neural metric cannot define its neural contribution.**

No blocker.

## 14. Power audit

PASS.

Mechanical power:

`P = F × v`.

Neural factors can improve power through:
- rapid recruitment;
- high initial discharge rates;
- activation timing;
- intermuscular coordination.

But power additionally depends on:
- maximal strength;
- force–velocity properties;
- muscle architecture;
- tendon/mechanics;
- technique;
- external load.

The 2026 ACSM position stand supports power-oriented RT with fast concentric intent and selected moderate-load methods, but this is a programming outcome and does not establish a purely neural mechanism.

Canonical rule:

**power is a force–velocity outcome with important neural contribution, not a pure neural variable.**

No blocker.

## 15. Evidence-ledger audit

Current ledger covers closure-critical claims:

1. NEU05-01 — neural-drive definition / EMG boundary;
2. NEU05-02 — recruitment + rate coding;
3. NEU05-03 — VA construct boundary;
4. NEU05-04 — agonist EMG vs force;
5. NEU05-05 — antagonist coactivation;
6. NEU05-06 — synergist/intermuscular coordination;
7. NEU05-07 — intramuscular coordination;
8. NEU05-08 — force steadiness;
9. NEU05-09 — RFD;
10. NEU05-10 — explosive activation;
11. NEU05-11 — maximal strength;
12. NEU05-12 — power;
13. NEU05-13 — normalized-EMG measurement correction.

No additional ledger row is required.

## 16. Uncertainty audit

PASS.

Remaining uncertainty is non-blocking:

1. exact contribution of one neural mechanism to a specific multi-joint exercise;
2. exact optimal antagonist coactivation for a task;
3. exact causal role of synergy/coherence changes in strength gains;
4. exact relation between one VA/TMS/EMG measure and performance;
5. transfer from isometric RFD to dynamic sport performance;
6. individual neural limitation to strength or power;
7. exact neural share of power at a given load/velocity.

These belong downstream to NEU-06/08/09, TST, TEC, PRO, GPP and IND.

## 17. Scope-control audit

Neighboring ownership remains separate:

- chronic strength-training neural adaptation → NEU-06;
- fatigue → NEU-08;
- broader motor coordination/control → NEU-09;
- measurement validity → TST;
- exercise technique → TEC;
- training prescription → PRO/GPP;
- individual limitation diagnosis → IND.

No additional NEU-05 PASS is required before closure.

## 18. Closure criterion test

Topic:

> NEU-05 — Neural force production / voluntary activation / RFD

Result: **PASS.**

Canonical synthesis:

`motor-unit recruitment + rate coding`
`→ ensemble neural drive`
`→ task-specific agonist/synergist/antagonist coordination`
interacts with
`muscle + tendon + joint mechanics + technique`
`→ force / steadiness / RFD / power`.

Different outcomes emphasize different portions of this system.

## 19. Closure decision

**NEU-05 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 14 exact Section 5 items pass;
2. neural drive is not equated with EMG;
3. VA is not equated with neural drive or cortical activation;
4. agonist EMG is not treated as direct muscle force;
5. antagonist coactivation remains a task-dependent cost/stability tradeoff;
6. synergist/intermuscular coordination remains adaptable/task specific;
7. intramuscular coordination is defined via motor-unit population control;
8. force steadiness remains distinct from maximal strength;
9. RFD remains time-window specific;
10. explosive activation remains distinct from plateau VA;
11. maximal strength remains neural + muscular + mechanical;
12. power remains neural + force–velocity + mechanical/technical;
13. no project-relevant blocker remains;
14. first canonical NEU-05 finding can now be created;
15. NEU-06 can proceed later without reopening NEU-05 unless a concrete dependency appears.

## 20. Next dependency

**NEU-06 — Neural adaptation to strength training.**

Do not start NEU-06 in this same working block.
