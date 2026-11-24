# ANA-10 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-18  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 02 — Anatomy  
Topic: ANA-10 — Голеностоп и стопа

## 0. Purpose

Проверить, что после PASS-01 тема ANA-10 достаточно закрывает ankle/foot/calf/arch anatomy для downstream biomechanics/technique work без:

- one-hinge ankle model;
- one-muscle “foot core” simplification;
- rigid Achilles three-subtendon claim;
- navicular-only tibialis-posterior model;
- rigid windlass response;
- anatomy → barefoot/orthotic/arch-correction prescription.

## 1. Materials audited

1. `areas/02_anatomy.md`;
2. `PASS-01_ankle_foot_calf_arch_revalidation.md`;
3. legacy `findings/02_anatomy/ANA-10_ankle_foot.md`;
4. `EVIDENCE_LEDGER.md` entries ANA10-01…ANA10-06;
5. current source set already checked in PASS-01.

This is a closure audit. No new evidence branch is opened.

## 2. Legacy critical-outcome audit

Legacy ANA-10 requires 12 outcomes.

### 2.1 Tibia / fibula / talus and ankle mortise

**PASS.**

Covered:
- distal tibia/plafond/medial malleolus;
- distal fibula/lateral malleolus;
- talus/trochlear dome;
- mortise geometry.

Canonical rule:

**ankle mortise is an osseoligamentous tibia-fibula structure around the talus, not a simple tibia-only hinge.**

No blocker.

### 2.2 Distal tibiofibular syndesmosis

**PASS.**

Covered:
- AITFL;
- PITFL;
- inferior transverse ligament;
- interosseous ligament.

Canonical rule:

**syndesmosis is a distinct stabilizing joint complex preserving mortise congruence.**

No blocker.

### 2.3 Talocrural / subtalar / transverse-tarsal complexes

**PASS.**

Covered:
- talocrural = primary dorsiflexion/plantarflexion articulation;
- subtalar/talocalcaneal = major 3D inversion/eversion contributor;
- talonavicular + calcaneocuboid = transverse-tarsal/Chopart complex;
- midtarsal coupling.

Project rule:

**“ankle motion” is distributed across multiple joints.**

No blocker.

### 2.4 Medial / lateral ankle ligaments

**PASS.**

Covered:
- ATFL/CFL/PTFL lateral complex;
- deltoid superficial/deep complex;
- position-dependent restraint.

No single-ligament stability model remains.

No blocker.

### 2.5 Four leg compartments

**PASS.**

Covered:
1. anterior;
2. lateral;
3. superficial posterior;
4. deep posterior.

Major muscle and nerve grouping is represented at the correct pre-ANA-12 level.

No blocker.

### 2.6 Triceps surae / Achilles

**PASS.**

Covered:
- medial/lateral gastrocnemius;
- soleus;
- plantaris boundary;
- Achilles/calcaneal tendon;
- gastrocnemius biarticular vs soleus monoarticular distinction.

Current 2026 update is represented correctly:

**Achilles is structurally heterogeneous/twisted, but universal morphologically discrete three-subtendon anatomy is not treated as settled fact.**

No blocker.

### 2.7 Deep posterior muscles

**PASS.**

Covered:
- tibialis posterior;
- FDL;
- FHL;
- popliteus boundary to ANA-09.

Tibialis-posterior broad branching/insertion variability is preserved.

No blocker.

### 2.8 Intrinsic foot muscles

**PASS.**

Covered:
- dorsal intrinsic muscles;
- four plantar layers;
- hallux/lesser-toe functional structures;
- intrinsic/extrinsic distinction.

Project rule:

**intrinsic foot function is distributed; there is no single “foot-core muscle”.**

No blocker.

### 2.9 Plantar aponeurosis

**PASS.**

Covered:
- central/medial/lateral architecture;
- calcaneal origin region;
- distal slips;
- arch-support and windlass roles;
- normal origin variation.

No blocker.

### 2.10 Foot arches

**PASS.**

Covered:
1. medial longitudinal;
2. lateral longitudinal;
3. transverse.

Support model integrates:
- bone;
- ligaments;
- plantar aponeurosis;
- extrinsic muscles;
- intrinsic muscles.

Project rule:

**arches are integrated 3D systems, not isolated rigid beams.**

No blocker.

### 2.11 Windlass mechanism

**PASS.**

Covered:
- hallux/MTP dorsiflexion;
- plantar-aponeurosis tensioning;
- arch shortening/elevation/stiffening tendency;
- direct CT support;
- individual variation;
- simulated-posture limitation.

No rigid identical windlass response is claimed.

No blocker.

### 2.12 Structural distinctions relevant to training

**PASS.**

Covered:
- gastrocnemius vs soleus;
- medial vs lateral gastrocnemius non-identity;
- dorsiflexion vs inversion/eversion;
- extrinsic vs intrinsic foot systems;
- Achilles force transmission;
- arch support;
- single-leg support;
- knee-position effect on gastrocnemius geometry.

No exercise superiority is inferred from anatomy alone.

No blocker.

## 3. Achilles certainty audit

PASS.

High-confidence:
- triceps-surae force is transmitted through Achilles to calcaneus;
- tendon is structurally nonuniform/twisted;
- gastrocnemius/soleus contributions are not equivalent to one homogeneous rope.

Current uncertainty:
- universal, morphologically discrete subtendon boundaries are not reliably established.

Project consequence:

**later MEC/PHY models must state whether discrete subtendons are assumed rather than treating them as canonical anatomy.**

This is a modeled uncertainty, not a closure blocker.

## 4. Tibialis-posterior audit

PASS.

Established:
- broad posterior-leg origin;
- course behind medial malleolus;
- prominent navicular and multiple additional distal attachments;
- inversion/plantarflexion/arch-support contribution.

Current 2026 refinement:
- distal branching and insertion patterns are more variable than simple textbook diagrams.

Project rule:

**classification is descriptive, not exhaustive personal anatomy.**

No blocker.

## 5. Gastrocnemius / soleus audit

PASS.

Canonical distinctions:

### Gastrocnemius
- crosses knee + ankle;
- medial/lateral heads;
- plantarflexion + knee-flexion contribution.

### Soleus
- does not cross knee;
- plantarflexion/postural role.

Current 2026 review supports meaningful medial/lateral gastrocnemius differences, but exact task-specific differentiation remains MEC/NEU/TEC.

No blocker.

## 6. Arch / windlass audit

PASS.

Current model integrates:

- bony geometry;
- spring/plantar ligament systems;
- plantar aponeurosis;
- tibialis posterior/anterior;
- fibularis longus;
- FHL/FDL;
- intrinsic muscles.

Windlass is retained as a real mechanism with:
- direct imaging support;
- individual variability;
- no universal deformation magnitude.

No blocker.

## 7. Multi-joint foot-motion audit

PASS.

Canonical distinction:

### Talocrural
- primarily dorsiflexion/plantarflexion.

### Subtalar + transverse tarsal
- major inversion/eversion and composite pronation/supination.

Project rule:

**foot pronation/supination is a 3D multi-joint motion, not equivalent to forearm pronation/supination.**

No blocker.

## 8. Static / dynamic support audit

PASS.

Foot support integrates:

### Passive
- bone;
- joint geometry;
- ligaments;
- plantar aponeurosis.

### Dynamic
- triceps surae;
- tibialis anterior/posterior;
- fibularis muscles;
- FHL/FDL;
- intrinsic foot muscles.

Project rule:

**balance/arch support does not come from one muscle system alone.**

## 9. Anatomy vs biomechanics / technique / pathology

### Anatomy
structures, attachments, broad action tendencies, normal variation.

### Biomechanics
subtalar axes, arch stiffness, Achilles strain, dorsiflexion requirements, force sharing.

### Technique
calf exercise setup, squat ankle strategy, foot placement.

### Medicine
Achilles tendinopathy, plantar fasciopathy, ankle instability, nerve entrapment.

Boundaries are preserved.

## 10. Evidence-ledger audit

Current ledger adequately covers closure-critical claims:

1. ANA10-01 — multi-joint ankle/foot model;
2. ANA10-02 — syndesmosis;
3. ANA10-03 — Achilles heterogeneity + subtendon uncertainty;
4. ANA10-04 — tibialis-posterior insertion variability;
5. ANA10-05 — medial/lateral gastrocnemius non-identity;
6. ANA10-06 — integrated arches + windlass variability.

No additional ledger claim is required for closure.

## 11. Scope-control audit

Potential neighboring questions do not block ANA-10:

1. exact talocrural/subtalar axes → MEC;
2. Achilles force/strain/subtendon mechanics → MEC/PHY;
3. straight- vs bent-knee calf outcomes → TEC/PHY;
4. dorsiflexion requirements → MEC/TST/IND;
5. foot-pronation / arch mechanics → MEC;
6. Achilles/plantar-fascia pathology → MED;
7. barefoot/orthotic/short-foot interventions → TEC/MED;
8. muscle architecture → ANA-11;
9. detailed nerve anatomy → ANA-12.

Opening these now would violate the purpose gate.

## 12. Closure criterion test

Legacy criterion:

> Можно анатомически объяснить dorsiflexion/plantarflexion, inversion/eversion, toe function, calf force transfer and arch support without treating the “ankle” or “foot core” as one simple joint/muscle.

Result: **PASS**.

The revalidated model:
- covers mortise/syndesmosis;
- separates talocrural from subtalar/midtarsal motion;
- maps all four leg compartments;
- maps triceps surae/Achilles;
- maps deep posterior and intrinsic/extrinsic foot structures;
- covers plantar aponeurosis/arches/windlass;
- preserves normal anatomical variation;
- preserves Achilles uncertainty correctly;
- avoids anatomy-only training prescriptions.

## 13. Closure decision

**ANA-10 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. no project-relevant ankle/foot/calf structural blocker remains;
2. ANA-11 can now take ownership of muscle organization and architecture;
3. later MEC/TEC/TST/MED can refine mechanics/interventions without reopening basic ankle-foot anatomy;
4. Achilles subtendon uncertainty remains explicit rather than falsely resolved.

## 14. Next dependency

Next canonical topic:

**ANA-11 — Мышечная организация и архитектура.**

Do not start ANA-11 in this same working block.
