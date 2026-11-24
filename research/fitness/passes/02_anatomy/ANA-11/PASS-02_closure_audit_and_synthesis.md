# ANA-11 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-18  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 02 — Anatomy  
Topic: ANA-11 — Мышечная организация и архитектура

## 0. Purpose

Проверить, что после PASS-01 тема ANA-11 достаточно закрывает skeletal-muscle organization/architecture для downstream PHY/MEC/TEC/TST без:

- fiber/fascicle conflation;
- PCSA = force simplification;
- fascicle length = serial sarcomere count simplification;
- fixed pennation model;
- one-site ultrasound → whole-muscle extrapolation;
- preprint methodology promoted to standard;
- architecture → exercise prescription overclaim.

## 1. Materials audited

1. `areas/02_anatomy.md`;
2. `PASS-01_muscle_organization_architecture_revalidation.md`;
3. legacy `findings/02_anatomy/ANA-11_muscle_architecture.md`;
4. `EVIDENCE_LEDGER.md` entries ANA11-01…ANA11-06;
5. current source set already checked in PASS-01.

This is a closure audit. No new evidence branch is opened.

## 2. Legacy critical-outcome audit

Legacy ANA-11 requires 11 outcomes.

### 2.1 Structural hierarchy

**PASS.**

Covered:

`whole muscle → fascicle → myofiber → myofibril → sarcomere → myofilaments`

Connective-tissue hierarchy is retained:
- epimysium;
- perimysium;
- endomysium.

No blocker.

### 2.2 Fascicle vs fiber terminology

**PASS.**

Canonical distinction:
- myofiber = one skeletal muscle cell;
- fascicle = bundle of fibers.

Measurement-language boundary is explicit:
- ultrasound usually tracks fascicle path;
- true myofiber and fascicle length must not be silently conflated.

No blocker.

### 2.3 Architectural classes

**PASS.**

Covered:
- parallel/strap;
- fusiform;
- convergent/triangular;
- uni-/bi-/multipennate;
- mixed/complex 3D patterns.

Project rule:
**architectural labels are gross summaries, not literal complete blueprints.**

No blocker.

### 2.4 Fascicle length

**PASS.**

Covered as:
- serial/path dimension;
- relevant to excursion/shortening potential;
- state-, geometry- and method-dependent.

Canonical rule:
**fascicle length is not automatically serial sarcomere number.**

No blocker.

### 2.5 Pennation angle

**PASS.**

Covered as:
- regional;
- state-dependent;
- dynamically changing with contraction;
- related to packing/orientation, not a fixed “force-loss angle”.

No blocker.

### 2.6 Anatomical CSA vs physiological CSA

**PASS.**

Covered:
- ACSA = geometric cross-section at chosen site/orientation;
- PCSA = structural estimate/concept of contractile cross-section acting in parallel.

These are not interchangeable.

No blocker.

### 2.7 PCSA assumptions / limits

**PASS.**

PCSA retained as:
- established approximate structural proxy for force capacity;
- assumption-dependent;
- not direct muscle force;
- not direct joint torque.

Current PCSS proposal is correctly held at emerging/preprint status.

No blocker.

### 2.8 Sarcomeres in series vs parallel organization

**PASS.**

Serial:
- contributes to excursion / shortening-distance potential.

Parallel:
- contributes to effective contractile cross-section / force-capacity potential.

Project rule:
**same muscle volume can encode different serial/parallel architectural trade-offs.**

No blocker.

### 2.9 Tendon / aponeurosis relationships

**PASS.**

Covered:
- free/cord-like tendon;
- sheet-like aponeurosis;
- distributed fascicle insertion;
- deformable aponeurosis;
- MTU force transmission.

No rigid-plate model remains.

No blocker.

### 2.10 Regional / compartmental architecture

**PASS.**

Covered:
- region-specific fascicle length/pennation/curvature;
- superficial/deep or proximal/distal variation;
- named-muscle nonhomogeneity;
- architecture compartment ≠ independently trainable compartment.

No blocker.

### 2.11 Measurement limitations

**PASS.**

Covered:
- site;
- joint position;
- rest vs contraction;
- contraction intensity;
- 2D vs 3D;
- fascicle extrapolation;
- acquisition repeatability;
- method dependence;
- local vs whole-muscle inference.

No blocker.

## 3. Area-map audit — all 12 items

Area-map Section 12 requires 12 items.

### 3.1 Muscle → fascicle → fiber → myofibril → sarcomere

**PASS.**

### 3.2 Origin / insertion

**PASS.**

Current project distinction:

**origin/insertion are anatomical naming conventions, not guarantees about which endpoint is mechanically fixed in a task.**

### 3.3 Monoarticular / multiarticular

**PASS.**

Current model requires considering all crossed joint positions.

### 3.4 Fusiform / pennate architecture

**PASS.**

Gross classes retained with 3D/mixed-pattern caveat.

### 3.5 PCSA

**PASS.**

Defined and bounded appropriately.

### 3.6 ACSA

**PASS.**

Separated from PCSA and volume.

### 3.7 Pennation angle

**PASS.**

Dynamic/state-dependent interpretation retained.

### 3.8 Fascicle length

**PASS.**

Serial-architecture relevance retained without equating to sarcomere count.

### 3.9 Tendon length / muscle-belly length

**PASS.**

Individual variation and contour/mechanical implications retained.

### 3.10 Architectural differences between muscles

**PASS.**

Serial/parallel packing, regional heterogeneity and compartmental differences retained.

### 3.11 Fiber types — structural part only

**PASS.**

Type I / IIa / IIx are retained as a separate cellular structural dimension; metabolism/recruitment/adaptation remain PHY/NEU.

### 3.12 Architectural plasticity belongs to physiology

**PASS.**

ANA-11 defines variables/measurement; adaptation mechanisms/dose remain PHY/PRO.

No area-map blocker remains.

## 4. Human serial-sarcomere evidence audit

PASS.

Critical distinction is correct.

Andrews et al.:
- directly measured in-vivo sarcomere length by microendoscopy;
- measured fascicle length by 3D ultrasound;
- **calculated** serial sarcomere number from fascicle length / sarcomere length.

Therefore current project wording is:

**human intervention evidence supporting serial sarcomere addition exists, but serial sarcomere number was estimated/calculated rather than literally counted through a full fascicle.**

The small BFlh/NHE intervention does not establish universal adaptation across all muscles/exercises.

No blocker.

## 5. PCSA / PCSS certainty audit

PASS.

### PCSA
Established:
- useful approximate structural proxy for parallel contractile capacity;
- assumption-heavy;
- not direct force.

### PCSS
Current status:
- 2026 bioRxiv preprint;
- promising 3D geometric refinement;
- not canonical replacement standard.

Project rule:

**do not promote PCSS above its evidence maturity.**

No blocker.

## 6. Regional/compartmental architecture audit

PASS.

Current evidence supports:
- within-muscle architecture differences;
- region-dependent contraction behavior;
- local imaging limitations.

Project boundary:

**regional/compartmental architecture does not itself prove independent trainability or exercise isolation.**

That inference remains NEU/MEC/TEC.

## 7. Measurement-method audit

PASS.

Current canonical minimum requires recording:

1. muscle;
2. region/site;
3. joint angle;
4. rest/active state;
5. contraction intensity;
6. method;
7. 2D vs 3D;
8. trajectory/extrapolation assumptions;
9. acquisition protocol;
10. repeatability/reliability;
11. local vs whole-muscle outcome.

This is sufficient for downstream evidence appraisal.

## 8. Force-capacity boundary audit

PASS.

Architecture constrains capacity but does not uniquely determine strength.

Joint torque additionally depends on:
- neural activation;
- force-length state;
- contraction velocity;
- tendon/aponeurosis behavior;
- moment arms;
- synergists;
- task constraints.

Canonical rule:

**no single architecture metric is a complete strength score.**

## 9. Anatomy vs physiology / biomechanics / programming

### Anatomy
- structural hierarchy;
- architecture variables;
- regional organization;
- tendon/aponeurosis geometry;
- measurement boundaries.

### Physiology
- contraction;
- force-length/velocity;
- hypertrophy;
- sarcomerogenesis;
- fiber-type adaptation.

### Biomechanics
- force transmission;
- moment arms;
- gearing;
- tendon/aponeurosis strain.

### Programming / technique
- exercise selection;
- dose;
- architecture-targeted training claims.

Boundaries are preserved.

## 10. Evidence-ledger audit

Current ledger adequately represents closure-critical claims:

1. ANA11-01 — architecture metrics are distinct and not interchangeable;
2. ANA11-02 — pennation is dynamic/regional;
3. ANA11-03 — fascicle length vs direct sarcomere measurement/calculated serial count;
4. ANA11-04 — regional architecture / one-site limitation;
5. ANA11-05 — method/acquisition dependence;
6. ANA11-06 — PCSA established proxy; PCSS emerging preprint.

No additional ledger claim is required for closure.

## 11. Scope-control audit

Potential neighboring questions do not block ANA-11:

1. force–length / force–velocity → PHY/MEC;
2. specific tension application → PHY/MEC;
3. hypertrophy mechanisms → PHY-07;
4. strength physiology → PHY-08;
5. sarcomerogenesis generalizability → PHY;
6. architecture-specific exercise selection → TEC;
7. compartment-specific recruitment → NEU;
8. individual tendon/belly proportions → ANA-15;
9. regional hypertrophy programming → PHY/TEC/PRO.

Opening these now would violate the purpose gate.

## 12. Closure criterion test

Legacy criterion:

> Можно объяснить, почему muscle volume, anatomical CSA, PCSA, fascicle length and pennation describe different structural properties and why no single one is a complete “strength score”.

Result: **PASS**.

The revalidated model:
- distinguishes structural hierarchy and terminology;
- distinguishes all major architecture metrics;
- preserves serial vs parallel logic;
- preserves tendon/aponeurosis geometry;
- incorporates regional/3D/state dependence;
- incorporates modern human sarcomere evidence correctly;
- preserves measurement uncertainty;
- avoids anatomy-only exercise prescriptions.

## 13. Closure decision

**ANA-11 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. no project-relevant muscle-architecture structural blocker remains;
2. ANA-12 can now take ownership of nervous anatomy of movement;
3. PHY/MEC/TEC can refine adaptation/mechanics without reopening core architecture;
4. PCSS remains explicitly emerging;
5. serial-sarcomere intervention evidence remains explicit with the direct-vs-calculated distinction.

## 14. Next dependency

Next canonical topic:

**ANA-12 — Нервная анатомия движения.**

Do not start ANA-12 in this same working block.
