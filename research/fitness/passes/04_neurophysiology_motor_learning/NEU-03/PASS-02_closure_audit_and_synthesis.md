# NEU-03 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-19  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 04 — Neurophysiology / Motor Learning  
Topic: NEU-03 — Sensory feedback / proprioception

## 0. Purpose

Проверить, что после PASS-01 тема NEU-03 достаточно закрывает Area 04 Section 3 для downstream NEU-04/08/09/10/11, TEC, TST, PRO и IND без:

- proprioception treated as one receptor or one global trait;
- balance treated as direct proprioception;
- spindle Ia/II reduced to absolute “velocity-only / position-only” labels;
- GTO reduced to a high-tension shut-off switch;
- joint receptors treated as either irrelevant or primary universal joint-angle sensors;
- cutaneous information ignored;
- vision/vestibular input relabeled as proprioception;
- fixed sensory weighting assumed;
- position/movement/force sense collapsed into one construct;
- joint-reposition scores treated as pure peripheral proprioceptor readouts;
- force sense equated with GTO firing;
- fatigue effects generalized across every joint/task/test.

## 1. Materials audited

1. `areas/04_neurophysiology_motor_learning.md`, Section 3 — 12 exact items;
2. `NORMALIZED_KNOWLEDGE_TREE.md`, NEU-03;
3. `PASS-01_sensory_feedback_proprioception_revalidation.md`;
4. `EVIDENCE_LEDGER.md`, NEU03-01…NEU03-12;
5. current findings inventory confirming no pre-existing NEU-03 canonical;
6. closure-critical re-check:
   - proprioceptive integration review/experiment — PMID 41848550;
   - position-sense measurement critique — PMID 41755364;
   - memory-based position-sense commentary — PMID 42178171;
   - active skin-stretch human study — PMID 42156008;
   - visual/proprioceptive reference-frame human study — PMID 41711342;
   - integrated spindle/GTO modeling — PMID 40551411;
   - joint-receptor biomimetic study — PMID 41634020;
   - lower-extremity fatigue meta-analysis — PMID 38311746;
   - knee fatigue systematic review — PMID 38810655;
   - postural-control fatigue meta-analysis — PMID 41650689.

No closure-critical contradiction was found.

## 2. Exact area-map audit — 12/12

1. Proprioception — **PASS AS MULTIMODAL BODY-STATE ESTIMATE**.
2. Muscle spindle — **PASS WITH Ia/II OVERLAP + FUSIMOTOR CONTEXT**.
3. Golgi tendon organ — **PASS AS FORCE/TENSION FEEDBACK, NOT SHUT-OFF SWITCH**.
4. Joint receptors — **PASS WITH SUPPLEMENTARY/CONTEXT-DEPENDENT EVIDENCE LEVEL**.
5. Cutaneous receptors — **PASS WITH SKIN-STRETCH CONTRIBUTION**.
6. Vision — **PASS AS DISTINCT SOURCE INTEGRATED WITH PROPRIOCEPTION**.
7. Vestibular system — **PASS AS DISTINCT HEAD-MOTION/GRAVITY SOURCE**.
8. Sensorimotor integration — **PASS AS TASK/RELIABILITY-DEPENDENT REWEIGHTING**.
9. Position sense — **PASS WITH MEMORY/PERIPHERAL-INPUT MEASUREMENT BOUNDARY**.
10. Movement sense — **PASS AS DISTINCT KINESTHETIC DIMENSION**.
11. Force sense — **PASS AS PERIPHERAL + CENTRAL-MOTOR-COMMAND ESTIMATE**.
12. Fatigue effect — **PASS AS JOINT/TASK/METRIC DEPENDENT**.

Result: **12/12 PASS.**

## 3. Proprioception-vs-balance audit

PASS.

Proprioception is treated as body-state sensing/perception based mainly on internal somatosensory input plus central prediction.

Balance requires additional:
- vestibular input;
- vision;
- postural motor output;
- task/context.

Canonical rule:

**balance performance is not a direct proprioception assay.**

No blocker.

## 4. Muscle-spindle audit

PASS.

PMID 41848550 supports:
- strong Ia sensitivity to stretch velocity;
- use of velocity-related signals for ongoing position estimation;
- vibration-induced position and velocity biases.

Boundary retained:

**Ia ≠ velocity-only and II ≠ position-only.**

Spindle output depends on mechanical state and fusimotor context.

No blocker.

## 5. GTO audit

PASS.

PMID 40551411 supports integrated interpretation of spindle + GTO signals for mechanical-state estimation, including force-related information.

Canonical rule:

**GTOs provide force/tension-related afferent information but are not simple “autogenic inhibition” emergency switches.**

Force sense is not a direct conscious readout of Ib firing.

No blocker.

## 6. Joint-receptor audit

PASS WITH LOWER EVIDENCE CONFIDENCE.

PMID 41634020 shows Type-I-like joint-receptor signals can encode joint configuration in a biomimetic robotic model.

This is mechanistic support, not direct intact-human receptor evidence.

Therefore closure retains:
- joint receptors can contribute;
- exact human weighting remains uncertain;
- they are neither ignored nor treated as the sole joint-angle sensor.

Canonical rule:

**joint-receptor contribution is supplementary/context dependent and evidence-limited.**

No blocker.

## 7. Cutaneous audit

PASS.

PMID 42156008 directly showed controlled augmentation of natural skin stretch during active finger movement shifted perceived finger posture.

Canonical rule:

**cutaneous deformation can materially change proprioceptive estimates even when muscle-spindle/efferent signals remain available.**

No blocker.

## 8. Vision / vestibular audit

PASS.

Vision:
- provides external spatial reference;
- remains distinct from proprioception.

Vestibular input:
- provides head-motion/gravity/self-motion reference;
- remains distinct from proprioception.

PMID 41711342 supports systematic consequences of misalignment between visual and proprioceptive reference frames.

Canonical rule:

**vision, vestibular input and proprioception are distinct sources integrated into movement control.**

No blocker.

## 9. Sensorimotor-reweighting audit

PASS.

No fixed-weight model is retained.

Sensory weighting changes with:
- signal reliability;
- task;
- availability;
- conflict;
- context.

Canonical rule:

**multisensory integration uses dynamic task/reliability-dependent weighting rather than simple averaging.**

No blocker.

## 10. Position-sense audit

PASS WITH STRONG MEASUREMENT BOUNDARY.

PMID 41755364 compared:
- matching;
- pointing;
- repositioning.

Manipulations altering spindle contributions changed matching/pointing but not repositioning in the tested paradigms.

PMID 42178171 further argues that some repositioning paradigms rely on remembered target position rather than current peripheral proprioceptive input.

Canonical rule:

**a repositioning/JPS score is task-specific perceptual performance and may not be a pure peripheral proprioception measure.**

No blocker.

## 11. Movement-sense audit

PASS.

Movement/kinesthesia is separable from static position judgment.

PMID 41848550 supports:
- velocity-related proprioceptive information;
- coupling of perceived velocity and endpoint position;
- fast corrective responses to vibration-biased sensory input.

Canonical rule:

**movement sense and position sense interact but are not interchangeable tests.**

No blocker.

## 12. Force-sense audit

PASS.

Force sense is retained as a combined estimate involving:
- force/tension-related afferent input;
- muscle/joint/cutaneous consequences;
- efference-copy/sense-of-effort information.

Canonical rule:

**force sense ≠ GTO firing alone.**

No blocker.

## 13. Fatigue audit

PASS WITH TASK DEPENDENCE.

The 2024 lower-extremity meta-analysis (PMID 38311746) found fatigue increased active absolute repositioning error at knee, ankle and hip, while some passive/relative-error outcomes were not significantly altered.

The 2024 knee review (PMID 38810655) supports negative effects across position, kinesthetic and force-sense tasks but with substantial protocol heterogeneity.

The 2026 postural-control meta-analysis (PMID 41650689) shows fatigue impairs postural control, but this remains a broader multisensory/motor outcome rather than a direct proprioception measure.

Canonical rule:

**fatigue can degrade proprioceptive accuracy, but effect size/direction depends on joint, fatigue protocol and measurement construct.**

No blocker.

## 14. Measurement audit

PASS.

No single gold-standard proprioception test is retained.

Different tests sample different constructs:

- active reposition → sensory input + motor command + memory;
- passive matching/detection → different peripheral/central weighting;
- force reproduction → force/effort sense;
- vibration → spindle-biased perturbation;
- balance/postural sway → multisensory motor outcome.

Canonical rule:

**one proprioception test does not establish a global proprioception trait.**

Detailed validity remains TST-owned.

No blocker.

## 15. Evidence-ledger audit

Current ledger covers closure-critical claims:

1. NEU03-01 — multimodal proprioception;
2. NEU03-02 — spindle;
3. NEU03-03 — GTO;
4. NEU03-04 — joint receptors;
5. NEU03-05 — cutaneous input;
6. NEU03-06 — vision boundary;
7. NEU03-07 — vestibular boundary;
8. NEU03-08 — sensory reweighting;
9. NEU03-09 — position vs movement;
10. NEU03-10 — position-test measurement boundary;
11. NEU03-11 — force sense;
12. NEU03-12 — fatigue.

No additional ledger row is required.

## 16. Uncertainty audit

PASS.

Remaining uncertainty is non-blocking:

1. exact weighting of spindle/GTO/joint/cutaneous signals for one exercise;
2. direct human contribution of specific joint-receptor populations;
3. exact neural weighting under fatigue;
4. best task-specific proprioception test for a given sport/exercise;
5. whether “proprioceptive training” changes sensory acuity specifically versus broader motor/balance skill;
6. relationship between acute sensory error and injury risk.

These belong downstream to NEU-04/08/09/10/11, TST, TEC, PRO and IND.

## 17. Scope-control audit

Neighboring ownership remains separate:

- reflex regulation → NEU-04;
- fatigue mechanisms → NEU-08;
- motor control / coordination → NEU-09;
- balance → NEU-10;
- learning/adaptation → NEU-11 onward;
- measurement validity → TST;
- exercise implementation → TEC/PRO.

No additional NEU-03 PASS is required before closure.

## 18. Closure criterion test

Topic:

> NEU-03 — Sensory feedback / proprioception

Result: **PASS.**

Canonical synthesis:

`spindle + GTO + joint + cutaneous afferents`
`+ central prediction/efference-related signals`
`+ visual + vestibular context`
`→ task/reliability-dependent integration`
`→ position / movement / force-related body-state estimate`
`→ motor correction/control`.

No single receptor or test owns the construct.

## 19. Closure decision

**NEU-03 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 12 exact Section 3 items pass;
2. proprioception remains multimodal and distinct from balance;
3. spindle Ia/II roles retain overlap/context;
4. GTOs are not treated as inhibitory shut-off switches;
5. joint-receptor evidence remains explicitly weaker/context dependent;
6. cutaneous contribution is established;
7. vision and vestibular signals remain distinct but integrated;
8. multisensory weighting remains dynamic;
9. position, movement and force sense remain separable;
10. JPS/repositioning is not treated as pure peripheral proprioception;
11. fatigue effects remain task/joint/metric dependent;
12. no global proprioception gold standard is assumed;
13. no project-relevant blocker remains;
14. first canonical NEU-03 finding can now be created;
15. NEU-04 can proceed later without reopening NEU-03 unless a concrete dependency appears.

## 20. Next dependency

**NEU-04 — Reflex regulation.**

Do not start NEU-04 in this same working block.
