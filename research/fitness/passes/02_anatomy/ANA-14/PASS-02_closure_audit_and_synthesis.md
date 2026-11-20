# ANA-14 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-18  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 02 — Anatomy  
Topic: ANA-14 — Surface anatomy / landmarks

## 0. Purpose

Проверить, что после PASS-01 тема ANA-14 достаточно закрывает surface anatomy / landmarking для downstream anthropometry, ROM/video analysis and technique description без:

- landmark = exact internal anatomy simplification;
- palpation = perfect localization assumption;
- girth = protocol-independent number assumption;
- skin marker = bone trajectory assumption;
- visible contour = activation/force inference;
- asymmetry = diagnosis/prescription overclaim.

## 1. Materials audited

1. `areas/02_anatomy.md`, Section 17 — 6 exact items;
2. `NORMALIZED_KNOWLEDGE_TREE.md`, ANA-14;
3. `PASS-01_surface_anatomy_landmarks_revalidation.md`;
4. `EVIDENCE_LEDGER.md`, ANA14-01…ANA14-06;
5. current branch finding inventory, confirming no pre-existing ANA-14 canonical finding.

This is a closure audit. No new evidence branch is opened.

## 2. Exact area-map audit — 6/6

### 2.1 Palpable bony landmarks
**PASS.**

Covered:
- thorax/shoulder-girdle landmarks;
- upper-limb landmarks;
- pelvic/hip landmarks;
- knee/lower-leg landmarks;
- ankle/foot landmarks.

Critical caveat retained:
**palpable does not mean perfectly localizable.**

### 2.2 Visually identifiable muscle groups
**PASS.**

Covered:
- major upper-body contours;
- trunk contours;
- lower-body contours.

Critical caveat retained:
**visible contour ≠ activation, force, deep anatomy or isolated hypertrophy.**

### 2.3 Circumference landmarks
**PASS.**

Covered:
- upper-arm example;
- waist;
- hip;
- project rule for limb girths.

Critical caveat retained:
**circumference is protocol-dependent.**

### 2.4 Joint-position landmarks
**PASS.**

Covered:
- shoulder/thorax;
- elbow;
- pelvis/hip;
- knee;
- ankle/foot.

Critical caveat retained:
**surface landmark or skin marker ≠ internal joint center/axis.**

### 2.5 Landmarks relevant to safe technique
**PASS.**

Surface landmarks can describe:
- segment position;
- relative joint alignment;
- movement direction.

They do not define one universally safe/optimal path.

### 2.6 Landmark vs diagnosis
**PASS.**

Project rule:
**description ≠ diagnosis ≠ prescription.**

Static asymmetry, scapular position, pelvic landmarks, foot posture or knee position are not converted into pathology from appearance alone.

Result:
**6/6 PASS.**

## 3. Circumference-protocol audit

PASS.

A longitudinal girth requires control/documentation of:

1. anatomical site;
2. side;
3. body/joint position;
4. relaxed vs contracted state;
5. tape orientation;
6. tape tension/skin compression;
7. respiration where relevant;
8. repeated-measurement procedure;
9. time/context where relevant.

NHANES provides concrete landmarked procedures.

ISAK provides an active standardized anthropometric framework with quality/precision emphasis.

Project rule:
**a circumference value without protocol is incomplete tracking data.**

No blocker.

## 4. Waist-site interoperability audit

PASS.

Different valid protocols can use different anatomical levels.

Therefore:

**waist values from different sites/protocols are not assumed interchangeable.**

For longitudinal project use:
- choose one protocol;
- document it;
- repeat it.

Protocol selection itself remains TST/IND.

## 5. Surface landmark vs internal joint-center audit

PASS.

A surface point may serve as:
- segment endpoint;
- orientation reference;
- coordinate-system landmark;
- estimator/calibration input.

It is not automatically:
- the true anatomical center;
- the functional axis;
- a direct observation of bone motion.

This distinction is closure-critical.

## 6. Palpation uncertainty audit

PASS.

Prominent superficial landmarks are generally more suitable for repeatable localization.

Greater caution remains for:
- PSIS;
- spinal levels;
- scapular points under soft tissue;
- deep joint centers;
- small/deep carpal/tarsal landmarks.

Project rule:
**landmark selection must reflect expected localization error.**

No false-precision claim remains.

## 7. Marker-placement and soft-tissue-artifact audit

PASS.

Two error classes remain explicitly separated:

### Placement error
Marker starts offset from intended anatomical reference.

### Soft-tissue artifact
Skin/soft tissue moves relative to bone during motion.

Project rule:
**skin-marker trajectory ≠ bone trajectory.**

Magnitude is task/model dependent and belongs to MEC/TST.

No blocker.

## 8. Visible muscle-contour audit

PASS.

Surface visibility is affected by:
- body fat;
- muscle size;
- contraction;
- joint position;
- hydration/fluid;
- lighting;
- camera geometry;
- individual anatomy.

Canonical boundary:
**surface contour identifies an approximate region, not contribution to force or neural recruitment.**

No blocker.

## 9. Static-asymmetry / visual-diagnosis audit

PASS.

A visible asymmetry can reflect:
- normal anatomical variation;
- stance;
- soft-tissue distribution;
- camera perspective;
- measurement error;
- motor strategy;
- pathology.

Therefore:
**surface asymmetry is an observation requiring context, not a diagnosis.**

This is aligned with ANA-08, ANA-14 evidence and MED/TST boundaries.

## 10. Technique-landmark audit

PASS.

Landmarks can help describe:
- squat/lunge segment relations;
- press/pull shoulder–elbow–wrist relations;
- hinge pelvis–trunk–knee relations.

But:
**landmarks do not prescribe universal technique thresholds.**

Exercise-specific safety/optimization remains TEC/MEC/MED.

## 11. Cross-topic ownership audit

PASS.

### ANA-03…ANA-10
Detailed underlying structures.

### ANA-14
Surface accessibility and reference landmarks.

### ANA-15
Individual proportions, geometry and asymmetry.

### TST
Measurement protocol, reliability, MDC and longitudinal tracking.

### MEC
Coordinate systems, marker-error propagation and dynamic kinematics.

### TEC
Technique decisions.

### MED
Pathological interpretation.

No ownership conflict remains.

## 12. Evidence-ledger audit

Current ledger adequately covers closure-critical claims:

1. ANA14-01 — landmark utility + localization uncertainty;
2. ANA14-02 — protocol-dependent circumference;
3. ANA14-03 — surface landmark vs internal joint center;
4. ANA14-04 — marker placement + STA;
5. ANA14-05 — visible contour boundary;
6. ANA14-06 — asymmetry/landmark ≠ diagnosis.

No additional ledger claim is required for closure.

## 13. Scope-control audit

Potential neighboring questions do not block ANA-14:

1. exact girth protocol for Ilya → TST/IND;
2. photo/video protocol → TST;
3. goniometry/ROM protocol → TST;
4. detailed motion-capture marker sets → MEC/TST;
5. technique thresholds → TEC/MEC;
6. posture/pathology diagnosis → MED;
7. individual morphology → ANA-15;
8. imaging confirmation of deep landmarks → TST/MED if later required.

Opening these now would violate the purpose gate.

## 14. Closure criterion test

Normalized-tree question:

> какие landmarks нужны для измерений/техники?

Result: **PASS**.

The current model provides:
- practical surface bony landmarks;
- visible muscle-region references;
- circumference reference logic;
- joint-position landmark logic;
- marker/palpation uncertainty;
- non-diagnostic boundary.

It deliberately does not turn ANA-14 into a full measurement manual.

## 15. Closure decision

**ANA-14 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 6 exact area-map items pass;
2. no project-relevant surface-anatomy blocker remains;
3. first canonical ANA-14 finding can now be created;
4. ANA-15 can now take ownership of individual anatomy / anthropometry;
5. later TST/MEC/TEC/MED can refine measurement/technique/diagnosis without reopening basic surface anatomy unless a concrete dependency appears.

## 16. Next dependency

Next canonical topic:

**ANA-15 — Individual anatomy / anthropometry.**

Do not start ANA-15 in this same working block.
