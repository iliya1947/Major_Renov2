# NEU-01 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-18  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 04 — Neurophysiology / Motor Learning  
Topic: NEU-01 — Nervous-system organization

## 0. Purpose

Проверить, что после PASS-01 тема NEU-01 достаточно закрывает Area 04 Section 1 для downstream NEU-02…NEU-20 и later TEC/PRO/TST/IND без:

- CNS treated as one command center;
- PNS/spinal cord treated as passive wiring;
- somatic equated with conscious-only;
- autonomic reduced to two globally opposed switches;
- afferent feedback treated as an after-the-fact correction channel;
- M1 treated as the sole motor controller;
- cerebellum reduced to “balance center” or one settled algorithm;
- basal ganglia reduced to a single uncontested action-selection switch;
- CST treated as the entire descending motor system;
- alpha motor neurons/interneurons treated as passive relays;
- NMJ physiology duplicated from PHY-02.

## 1. Materials audited

1. `areas/04_neurophysiology_motor_learning.md`, Section 1 — 12 exact items;
2. `NORMALIZED_KNOWLEDGE_TREE.md`, NEU-01;
3. `PASS-01_nervous_system_organization_revalidation.md`;
4. `EVIDENCE_LEDGER.md`, NEU01-01…NEU01-11;
5. current findings inventory confirming no pre-existing NEU-01 canonical;
6. closure-critical re-check:
   - sensory-feedback review — PMID 40198854;
   - autonomic-diversity review — PMID 40610604;
   - cerebellar predictive-control review — PMID 40523942;
   - basal-ganglia context-specific reinforcement study — PMID 40711880;
   - corticospinal review — PMID 40277091;
   - human motoneuron study — PMID 40153847;
   - NMJ exercise-plasticity review — PMID 42800503.

No closure-critical contradiction was found.

## 2. Exact area-map audit — 12/12

1. CNS: brain + spinal cord — **PASS AS DISTRIBUTED CENTRAL NETWORK**.
2. PNS — **PASS AS ACTIVE SENSORY/MOTOR INTERFACE**.
3. Somatic nervous system — **PASS WITH AUTOMATIC-vs-CONSCIOUS BOUNDARY**.
4. Autonomic nervous system — **PASS WITH NON-BINARY ORGAN-SPECIFIC BOUNDARY**.
5. Afferent vs efferent pathways — **PASS WITH CLOSED-LOOP / MIXED-NERVE BOUNDARY**.
6. Motor cortex — **PASS AS MAJOR BUT NON-EXCLUSIVE HUB**.
7. Cerebellum — **PASS AS PREDICTIVE/COORDINATION/ADAPTATION NETWORK**.
8. Basal ganglia — **PASS WITH ACTION-SELECTION SIMPLIFICATION LIMIT**.
9. Corticospinal pathways — **PASS AS MAJOR BUT NON-EXCLUSIVE DESCENDING SYSTEM**.
10. Alpha motor neurons — **PASS AS FINAL COMMON SOMATIC OUTPUT WITH ACTIVE INTRINSIC PROPERTIES**.
11. Interneurons — **PASS AS ACTIVE INTEGRATIVE CIRCUIT ELEMENTS**.
12. NMJ — **PASS AS NEURAL-MUSCLE INTERFACE; DETAIL TO PHY-02**.

Result: **12/12 PASS.**

## 3. Distributed-control audit

PASS.

Current sensorimotor evidence supports a distributed architecture:

`goal/context`
`↔ cortex + basal ganglia + cerebellum`
`→ cortical/brainstem descending systems`
`↔ spinal interneurons + sensory afferents`
`→ alpha motor neurons`
`→ NMJ`
`→ muscle activation`.

Sensory feedback is embedded within descending and spinal control rather than appended after movement as a separate correction channel.

Canonical rule:

**movement is distributed closed-loop control, not a one-way brain→muscle chain.**

No blocker.

## 4. CNS / PNS / somatic audit

PASS.

The spinal cord contains active sensorimotor computation through:

- interneuronal networks;
- reflex circuits;
- sensory integration;
- motoneuron pools.

The PNS carries both sensory and motor traffic.

Somatic control includes voluntary and automatic components.

Canonical rules:

- **PNS/spinal cord are not passive wiring.**
- **somatic ≠ conscious-only.**

No blocker.

## 5. Autonomic audit

PASS.

Sympathetic/parasympathetic categories remain useful at training level.

However the 2025 Nat Rev Neurosci review shows strong molecular, anatomical and functional heterogeneity across autonomic neuron populations.

Therefore the binary “fight-or-flight vs rest-and-digest” picture is retained only as coarse teaching shorthand.

Canonical rule:

**sympathetic and parasympathetic are broad functional divisions, not globally opposed master switches.**

No blocker.

## 6. Afferent/efferent audit

PASS.

Afferent/efferent describe direction of information flow.

Many peripheral nerves contain mixed sensory and motor axons.

The current sensory-feedback review supports continuous coupling between sensory input, descending pathways and spinal motor circuits.

Canonical rule:

**afferent feedback continuously shapes efferent motor output.**

No blocker.

## 7. Motor-cortex audit

PASS.

M1 is important for voluntary motor output and skilled force control.

But movement depends on interactions among:

- M1;
- premotor/SMA regions;
- sensory cortex/input;
- basal ganglia;
- cerebellum;
- thalamus;
- brainstem;
- spinal cord.

Canonical rule:

**M1 is a major motor hub, not the sole controller.**

No blocker.

## 8. Cerebellar audit

PASS.

The 2025 Nat Rev Neurosci review supports predictive/feedforward motor-control functions and explicitly compares competing computational frameworks rather than establishing one final algorithm.

Therefore applied language can safely include:

- prediction;
- timing;
- coordination;
- calibration;
- error-based adaptation.

But not:
- “balance center”;
- “one settled internal-model machine.”

Canonical rule:

**cerebellum supports predictive/adaptive coordination through network interactions.**

No blocker.

## 9. Basal-ganglia audit

PASS WITH MECHANISTIC CAUTION.

Basal ganglia are retained as contributors to:

- reinforcement learning;
- movement modulation/vigor;
- habits/sequences;
- context-dependent action policies;
- action-selection-related processes.

The 2025 Cell Reports study directly challenges a simple action-selection interpretation in its mouse closed-loop perturbation model, favoring context-specific behavioral modulation/reinforcement.

Because this is animal mechanistic evidence, it is used to limit overclaiming rather than to dictate human exercise prescription.

Canonical rule:

**“action selection” is a useful basal-ganglia model, not a complete settled mechanism.**

No blocker.

## 10. Corticospinal audit

PASS.

The 2025 CST review supports a major role in skilled voluntary movement, especially fractionated distal control.

But corticospinal control is only part of the descending system.

Brainstem descending pathways also contribute materially to:

- posture;
- locomotion;
- proximal/axial control;
- balance;
- automatic movement components.

Canonical rule:

**CST is major, not exclusive.**

No blocker.

## 11. Alpha-motor-neuron audit

PASS.

Alpha motor neurons are the final common somatic output to extrafusal muscle.

But the 2025 human J Physiol study demonstrates that intrinsic motoneuron properties can alter torque precision through persistent inward-current dynamics.

Canonical rule:

**motoneurons integrate synaptic and intrinsic properties; they are not linear relays.**

Detailed recruitment/rate-coding remains NEU-02-owned.

No blocker.

## 12. Interneuron audit

PASS.

Spinal interneurons integrate:

- descending drive;
- proprioceptive/cutaneous input;
- signals from other interneurons.

They participate in:
- reflex regulation;
- reciprocal coordination;
- locomotor pattern generation;
- gain control;
- corrective movements.

Canonical rule:

**interneurons are computational circuit elements, not connector wires.**

Detailed reflex physiology remains NEU-04-owned.

No blocker.

## 13. NMJ audit

PASS WITH SCOPE BOUNDARY.

NMJ is retained as:

`alpha-motor-neuron terminal → acetylcholine → muscle endplate → muscle action potential`.

Current review evidence supports exercise-responsive NMJ plasticity across presynaptic, postsynaptic, glial and ECM components.

However:
- detailed synaptic transmission;
- muscle action-potential propagation;
- excitation-contraction coupling

remain already covered in PHY-02.

Canonical rule:

**NMJ is the neural→muscle handoff, not an independent strength mechanism.**

No blocker.

## 14. Evidence-ledger audit

Current ledger covers closure-critical claims:

1. NEU01-01 — distributed closed-loop control;
2. NEU01-02 — somatic voluntary/automatic boundary;
3. NEU01-03 — autonomic non-binary organization;
4. NEU01-04 — afferent/efferent closed-loop model;
5. NEU01-05 — motor-cortex boundary;
6. NEU01-06 — cerebellar model;
7. NEU01-07 — basal-ganglia model;
8. NEU01-08 — corticospinal boundary;
9. NEU01-09 — alpha motor neurons;
10. NEU01-10 — spinal interneurons;
11. NEU01-11 — NMJ boundary.

No additional ledger row is required for closure.

## 15. Uncertainty audit

PASS.

Remaining uncertainty is non-blocking:

1. exact contribution of each cortical/subcortical/spinal node to a given exercise;
2. detailed human basal-ganglia mechanism for action selection vs reinforcement;
3. one definitive cerebellar computational theory;
4. exact organ-specific autonomic patterns during every exercise task;
5. exact contribution of brainstem vs corticospinal systems to one strength movement;
6. practical magnitude of motoneuron intrinsic-property effects across exercises;
7. practical importance of healthy-human NMJ remodeling for strength gains.

These belong downstream to NEU-02…NEU-20 / TST / TEC / IND rather than blocking foundational organization.

## 16. Scope-control audit

Neighboring ownership remains separate:

- motor-unit recruitment/rate coding → NEU-02;
- sensory feedback/proprioception → NEU-03;
- reflexes → NEU-04;
- force production/voluntary activation → NEU-05;
- strength-training neural adaptations → NEU-06;
- fatigue → NEU-08;
- motor-control/learning details → NEU-09…NEU-20;
- detailed NMJ/EC coupling → PHY-02.

No additional NEU-01 PASS is required before closure.

## 17. Closure criterion test

Topic:

> NEU-01 — Nervous-system organization

Result: **PASS.**

Canonical synthesis:

`goal / learned policy / context`
`↔ cortical + basal-ganglia + cerebellar networks`
`→ cortical + brainstem descending systems`
`↔ spinal interneurons + sensory afferents`
`→ alpha motor neurons`
`→ NMJ`
`→ skeletal-muscle activation`.

Feedback continuously re-enters this loop.

## 18. Closure decision

**NEU-01 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 12 exact Section 1 items pass;
2. movement is modeled as distributed closed-loop control;
3. CNS/PNS/spinal functions are not collapsed into a command-wire model;
4. somatic control includes voluntary and automatic processing;
5. autonomic organization is retained without two-switch oversimplification;
6. afferent feedback is part of movement generation;
7. M1 is major but non-exclusive;
8. cerebellum is predictive/adaptive, not merely a balance center;
9. basal-ganglia action-selection language is retained with mechanistic caution;
10. CST is major but non-exclusive;
11. alpha motor neurons/interneurons are active integrators;
12. NMJ is the neural-muscle handoff with detailed physiology left in PHY-02;
13. no project-relevant blocker remains;
14. first canonical NEU-01 finding can now be created;
15. NEU-02 can proceed later without reopening NEU-01 unless a concrete dependency appears.

## 19. Next dependency

**NEU-02 — Motor units: recruitment/rate coding.**

Do not start NEU-02 in this same working block.
