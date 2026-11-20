# ANA-06 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-18  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 02 — Anatomy  
Topic: ANA-06 — Forearm, wrist and hand / pronators, supinator, wrist/finger flexors-extensors, grip and DRUJ/wrist/hand interfaces

## 0. Purpose

Проверить, что после PASS-01 тема ANA-06 достаточно закрывает structural anatomy предплечья, DRUJ/TFCC, запястья, кисти и grip для downstream biomechanics/technique work без:

- wrist-rotation mislabeling;
- TFCC-as-one-ligament simplification;
- wrist-as-one-joint model;
- finger-flexors-only grip model;
- false certainty about intrinsic-hand counts/variants;
- подмены anatomy mechanics/pathology.

## 1. Materials audited

1. `areas/02_anatomy.md`;
2. `PASS-01_forearm_wrist_hand_grip_revalidation.md`;
3. legacy `findings/02_anatomy/ANA-06_forearm_wrist_hand.md`;
4. `EVIDENCE_LEDGER.md` entries ANA06-01…ANA06-05;
5. source set already checked in PASS-01:
   - NCBI DRUJ / forearm compartments / forearm muscles / wrist extensors / wrist joint;
   - NCBI intrinsic hand / interossei / lumbricals / forearm nerves;
   - TFCC review 2026 PMID 42002607;
   - intrinsic-hand variants review 2026 PMID 41506640.

This is a closure audit. No new evidence branch is opened.

## 2. Legacy critical-outcome audit

Legacy ANA-06 requires 10 outcomes.

### 2.1 Radius / ulna / interosseous membrane

**PASS.**

Covered:

- radius and ulna positional/anatomical roles;
- PRUJ + IOM + DRUJ continuity;
- IOM as structural/force-transfer syndesmotic element rather than passive septum.

No blocker.

### 2.2 DRUJ and TFCC

**PASS.**

Covered:

- DRUJ = distal forearm pivot articulation;
- DRUJ is distinct from radiocarpal wrist motion;
- TFCC = multi-component ulnar-sided stabilizing/load-sharing complex.

Current 2026 TFCC update is preserved without reducing TFCC to one disc/ligament and without importing pathology.

No blocker.

### 2.3 Flexor-pronator / extensor-supinator compartments

**PASS.**

Anterior and posterior systems are covered, including the lateral/mobile-wad convention where useful.

Compartment labels are used as anatomical organization, not one-action categories.

No blocker.

### 2.4 Wrist / radiocarpal / midcarpal structures

**PASS.**

Covered:

- eight carpal bones;
- radiocarpal articulation;
- midcarpal/intercarpal contribution;
- ulnocarpal/TFCC interface.

Canonical rule:

**total wrist motion ≠ pure radiocarpal motion.**

No blocker.

### 2.5 Flexor/extensor retinacula and tendon sheaths

**PASS.**

Covered:

- flexor retinaculum/carpal-tunnel roof;
- median nerve + 9 flexor tendons;
- FCR separate fibro-osseous route;
- extensor retinaculum and typical six compartments;
- tendon sheaths as normal gliding structures.

No blocker.

### 2.6 Extrinsic finger/thumb muscles

**PASS.**

Covered:

- FDS;
- FDP;
- FPL;
- extensor digitorum;
- extensor indicis;
- extensor digiti minimi;
- APL;
- EPB;
- EPL.

Their multi-joint tendon paths are explicitly linked to wrist–finger coupling.

No blocker.

### 2.7 Intrinsic hand muscles

**PASS.**

Covered:

- thenar;
- hypothenar;
- lumbricals;
- dorsal/palmar interossei;
- adductor pollicis;
- thumb-specific mixed median/ulnar innervation nuance.

The palmar-interosseous count issue is represented as convention/variation-dependent rather than falsely fixed.

No blocker.

### 2.8 Grip anatomy

**PASS.**

Power grip is represented as distributed contribution from:

1. extrinsic finger flexors;
2. thumb opposition/adduction/flexion;
3. intrinsic hand muscles;
4. wrist stabilization;
5. forearm orientation.

Project explicitly rejects “strong grip = finger flexors alone”.

No blocker.

### 2.9 Finger extensor mechanism

**PASS.**

Covered:

- extensor digitorum;
- lumbricals;
- interossei;
- extensor expansion/hood;
- MCP/IP relationship.

Canonical rule:

**finger extension is an integrated mechanism, not one tendon acting alone.**

No blocker.

### 2.10 Neural distribution to pre-ANA-12 level

**PASS.**

Covered:

- median / anterior interosseous;
- ulnar;
- radial / posterior interosseous;
- carpal tunnel vs Guyon-region route.

Detail remains intentionally below clinical/branch-level nerve anatomy.

No blocker.

## 3. Forearm-rotation audit

PASS.

Canonical system:

`PRUJ ↔ radius/ulna + IOM ↔ DRUJ`

Major muscular system:

- pronator teres;
- pronator quadratus;
- supinator;
- biceps brachii;
- brachioradialis toward neutral from extremes.

This is sufficient for later MEC without treating wrist as the rotation joint.

## 4. TFCC certainty audit

PASS.

High-confidence closure claim:

**TFCC is a multi-component 3D ulnar-sided stabilizing/load-sharing complex.**

The project does not claim from ANA-06:

- exact mechanical effect of every TFCC variant;
- pathology from imaging morphology;
- one fixed “normal” TFCC configuration.

Those remain MEC/MED/TST.

## 5. Wrist-complex audit

PASS.

The canonical model distinguishes:

1. radiocarpal motion;
2. midcarpal/intercarpal contribution;
3. DRUJ forearm rotation;
4. TFCC/ulnocarpal interface.

This prevents the common error of treating “wrist” as one single articulation.

## 6. Grip-system audit

PASS.

Required structural dependencies are explicit:

- long finger flexors;
- thumb muscles;
- intrinsic hand muscles;
- wrist extensors/stabilizers;
- forearm orientation.

Current 2026 wrist-extensor reference is appropriately used only to support stabilization relevance.

No exact optimal wrist angle is inferred.

## 7. Tenodesis / multi-joint coupling audit

PASS.

Anatomy supports:

- wrist extension tends to passively flex fingers;
- wrist flexion tends to passively extend fingers;
- long flexor/extensor tendons create wrist–finger coupling.

The project does **not** convert this into a quantitative force-angle prescription.

Exact optimum → MEC/TST.

## 8. Intrinsic-hand variation audit

PASS.

Current model preserves variation in:

- palmaris longus;
- lumbricals;
- interossei;
- accessory intrinsic muscles;
- tendon slips;
- extensor compartments.

The palmar-interosseous count nuance is explicitly convention-dependent.

No pathology is inferred from normal variants.

## 9. “Forearm training” scope audit

PASS.

ANA-06 now clearly separates:

1. wrist flexion;
2. wrist extension;
3. radial/ulnar deviation;
4. pronation/supination;
5. finger flexion;
6. finger extension;
7. thumb/intrinsic hand function;
8. grip stabilization.

Therefore:

**forearm ≠ wrist curls** and **grip ≠ complete forearm development**.

This is the exact downstream structural distinction needed for later TEC/PRO work.

## 10. Anatomy vs biomechanics / technique / pathology

### Anatomy

- structures;
- attachments;
- compartment organization;
- broad action tendencies;
- joint/tendon relationships;
- normal variation.

### Biomechanics

- optimal wrist angle;
- grip force;
- handle diameter;
- moment arms;
- tendon force sharing.

### Technique

- exact exercise selection/path;
- wrist position under specific lifts;
- grip choice.

### Medicine

- TFCC lesion;
- carpal tunnel syndrome;
- Guyon neuropathy;
- tendon pathology.

Boundaries are preserved.

## 11. Evidence-ledger audit

Current ledger adequately represents closure-critical claims:

1. ANA06-01 — forearm rotational system / DRUJ distinction;
2. ANA06-02 — distributed power-grip architecture;
3. ANA06-03 — wrist–finger coupling without optimal-angle overclaim;
4. ANA06-04 — multi-component TFCC model;
5. ANA06-05 — palmar-interosseous count convention/variation.

No additional ledger claim is required for closure.

## 12. Scope-control audit

Potential neighboring topics do not block ANA-06:

1. exact grip-force/wrist-angle relation → MEC;
2. handle thickness → MEC/TEC;
3. forearm exercise superiority → TEC/PHY;
4. detailed nerve anatomy → ANA-12;
5. muscle architecture → ANA-11;
6. TFCC/carpal/tendon pathology → MED;
7. grip testing → TST.

Opening these now would violate the purpose gate.

## 13. Closure criterion test

Legacy criterion:

> Можно анатомически объяснить, как forearm rotation, wrist position and finger/thumb muscles combine to create grip and why “предплечье” нельзя сводить только к wrist curls.

Result: **PASS**.

The revalidated model now:

- separates forearm rotation from wrist motion;
- maps DRUJ/TFCC appropriately;
- maps forearm compartments and major muscles;
- maps wrist complex and tendon-retinacular systems;
- integrates extrinsic + intrinsic hand anatomy;
- explains grip as distributed;
- preserves wrist–finger coupling;
- preserves normal variation.

## 14. Closure decision

**ANA-06 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. no project-relevant forearm/wrist/hand structural blocker remains;
2. later MEC/TEC can analyze grip/wrist mechanics without reopening core anatomy;
3. ANA-11/ANA-12 retain architecture/nerve detail ownership;
4. uncertainty around count/variant conventions remains explicit rather than forced.

## 15. Next dependency

Next canonical topic:

**ANA-07 — Trunk and spine musculature / abdominal wall / erector spinae / multifidus / diaphragm / pelvic-floor structural role.**

Do not start ANA-07 in this same working block.
