# MEC-03 / PASS-01 — Kinetics content revalidation

Дата: 2026-11-20  
Статус: **CONTENT PASS COMPLETE — INDEPENDENT CLOSURE/GAP AUDIT PENDING**  
Область: 06 — Biomechanics  
Topic: MEC-03 — Kinetics

## 0. Source-of-truth / exact scope

Area 06 Section 3 contains **14 exact items**:

1. External forces.
2. Internal forces.
3. Ground-reaction force.
4. Muscle force.
5. Tendon force.
6. Joint reaction force.
7. Friction.
8. Normal force.
9. Inertial forces.
10. External moment.
11. Internal moment.
12. Net joint moment.
13. Force-time curve.
14. Force-velocity curve.

MEC-03 answers:

**what forces and resultant moments are associated with the observed motion of a defined mechanical system.**

It does not yet deeply own:
- moment-arm geometry → MEC-04;
- lever systems → MEC-05;
- tissue stress/strain → MEC-07;
- muscle-tendon architecture/mechanics → MEC-08;
- exercise resistance-source mechanics → MEC-09/10/11;
- joint-specific loading → MEC-12;
- work/power → MEC-18;
- full inverse-dynamics/model uncertainty → MEC-21.

---

## 1. Qualification purpose / Question Card

### Decision

Can Nika identify the relevant forces/moments in an exercise without confusing:
- external and internal forces;
- measured and model-estimated quantities;
- net joint moments and individual muscle forces;
- joint reaction and joint contact loading;
- force-time and force-velocity constructs?

### Question type

**Foundational kinetics / system definition / force classification / inverse-dynamics interpretation / non-equivalence.**

### Population/context

Human movement, resistance exercise and sport movement under classical mechanics.

### Critical outcomes

1. Define the system before classifying a force as external/internal.
2. Distinguish measured external contact forces from inferred internal forces.
3. Keep muscle, tendon, joint-reaction/contact and net-joint-moment quantities separate.
4. Interpret friction/normal forces as contact-force components.
5. Handle “inertial force” terminology without creating a fictitious physical interaction force.
6. Keep force-time metrics distinct from one another.
7. Keep intrinsic muscle force-velocity mechanics distinct from task-level force/load-velocity profiles.
8. Route model/measurement uncertainty downstream to MEC-21/TST.

### Evidence path

Priority:

1. current SI/metrology;
2. Newton-Euler mechanics and current biomechanics terminology guidance;
3. current professional biomechanics scope;
4. current human-biomechanics measurement/modeling evidence.

---

# ITEM 1 — EXTERNAL FORCES

## 2. System dependence

A force is external only relative to a **defined system**.

For a whole-body system, common external forces include:
- gravity;
- ground/contact forces;
- forces from an external implement;
- cable/band/machine contact;
- fluid/aerodynamic forces where relevant.

For a single segment system:
- joint forces from adjacent segments are external to that segment;
- muscle/tendon forces crossing the segment boundary are external to that segment free-body diagram.

Therefore:

**external/internal is not an intrinsic property of a force; it depends on the chosen system boundary.**

Confidence: **HIGH**.

## 3. Newton-Euler role

For translation:

`ΣF_ext = dp/dt`.

For a constant-mass segment/body:

`ΣF_ext = ma`.

For rotation about a suitable reference:

`Στ_ext = dL/dt`.

Canonical rule:

**only the forces/moments external to the chosen system appear in its Newton-Euler balance.**

Confidence: **HIGH**.

---

# ITEM 2 — INTERNAL FORCES

## 4. Internal-force concept

Internal forces are interactions between parts included inside the chosen system.

Examples can include:
- muscle force;
- tendon force;
- ligament force;
- bone-on-bone/contact forces;
- internal tissue stress resultants.

But the classification changes with system choice.

Example:
- muscle force can be internal to a whole-limb musculoskeletal system;
- the same muscle force is external to a free-body diagram containing only one bone segment.

Canonical rule:

**internal force ≠ “unmeasurable force”; it is a system-classification term.**

Confidence: **HIGH**.

## 5. Internal forces can be large while net external force is modest

Co-contracting muscles can generate large opposing internal forces while producing a relatively small net joint moment.

Therefore:
- small net joint moment does not imply small individual muscle forces;
- small external load does not imply small joint/tissue forces.

Confidence: **HIGH**.

---

# ITEM 3 — GROUND-REACTION FORCE

## 6. Definition

Ground-reaction force (GRF) is the contact force exerted by the ground/support surface on the body.

It is a vector and may be decomposed into:
- normal component;
- tangential/shear components.

In a laboratory force-plate context, 3D GRF is commonly measured together with the location of the resultant/contact information such as center of pressure, depending on the platform and processing.

Canonical rule:

**GRF is an external contact force on the body, not a muscle force or joint contact force.**

Confidence: **HIGH**.

## 7. Newton III boundary

The force of the person on the ground and the force of the ground on the person are a Newton-third-law pair:
- equal magnitude;
- opposite direction;
- acting on different bodies.

Do not place both on the same body free-body diagram.

Confidence: **HIGH**.

## 8. One platform / multiple contacts boundary

A measured resultant from one force plate does not automatically identify:
- force under each foot separately;
- individual contact point forces;
- internal joint loading.

Multi-contact separation requires additional instrumentation/modeling.

Current 2025 work on bipedal stance explicitly treats per-foot force/location recovery from a single forceplate as a separate estimation problem.

Confidence: **HIGH**.

---

# ITEM 4 — MUSCLE FORCE

## 9. Muscle force is not directly given by EMG

Muscle force is the mechanical force generated/transmitted by a muscle or modeled muscle-tendon actuator.

Direct in-vivo individual-muscle force measurement in humans is difficult and often invasive.

Current CEDE consensus on EMG-to-force estimation concludes that there are limited scenarios where EMG alone can accurately estimate muscle force; activation, muscle state and biomechanical/physiological factors must usually be represented in a formal model.

Canonical rule:

**EMG amplitude ≠ muscle force.**

Confidence: **HIGH**.

## 10. Joint moment does not uniquely identify individual muscle force

A net joint moment can be generated by many combinations of:
- agonists;
- antagonists;
- biarticular muscles;
- passive tissues.

This is the force-sharing/redundancy problem.

Therefore:

**net joint moment / moment arm ≠ a unique individual-muscle force solution in a multi-muscle joint.**

Confidence: **HIGH**.

## 11. Muscle force is model/measurement dependent in practice

Current musculoskeletal-model evidence continues to show that predicted muscle forces depend on:
- model geometry;
- optimization/control assumptions;
- muscle parameters;
- kinematics/kinetics inputs.

A 2026 comparison of lower-limb musculoskeletal models found significant differences in predicted muscle-force waveforms despite identical input gait data and scaling/optimization procedures.

Canonical rule:

**model-predicted muscle force is an estimate conditioned on the model.**

Confidence: **HIGH**.

---

# ITEM 5 — TENDON FORCE

## 12. Tendon force

Tendon force is the tensile force transmitted through a tendon.

In simple series muscle-tendon reasoning, muscle and tendon forces may be closely related.

But exact equality can fail or require assumptions because of:
- pennation;
- distributed aponeuroses;
- multiple muscles sharing a tendon;
- inertial effects;
- multiarticular geometry;
- dynamic tissue behavior.

Canonical rule:

**muscle force and tendon force are related but not universally interchangeable quantities.**

Confidence: **HIGH**.

## 13. Tendon-force measurement/estimation

Human tendon force may be estimated using methods such as:
- joint torque plus moment-arm assumptions;
- ultrasound-based methods;
- shear-wave tensiometry;
- musculoskeletal modeling.

Current Achilles-tendon running work demonstrates that shear-wave tensiometry can estimate tendon loading in vivo, but this remains a calibrated measurement method rather than a universal direct force readout.

Canonical boundary:

**tendon-force estimate depends on the measurement/model method.**

Confidence: **HIGH**.

---

# ITEM 6 — JOINT REACTION FORCE

## 14. Terminology requires caution

“Joint reaction force” is used inconsistently across biomechanics.

A critical distinction is required between:

1. an **intersegmental/resultant joint force** obtained from a segment free-body/inverse-dynamics balance;
2. a **total joint contact/reaction load** that also reflects muscle and other internal-force contributions.

Baltzopoulos' reporting guidelines explicitly warn that partial/resultant inverse-dynamics joint forces should not be interpreted as total joint loading when muscle forces are not explicitly represented.

Canonical rule:

**inverse-dynamics joint force ≠ automatically total articular contact force.**

Confidence: **HIGH**.

## 15. Model-dependence of internal joint loading

Current musculoskeletal modeling work confirms that estimated joint reaction/contact forces can vary materially with the chosen model.

A 2026 AnyBody comparison using the same gait inputs found significant model-dependent differences in lower-limb joint reaction forces and muscle forces.

Therefore:

**a model-derived JRF is not a model-free ground truth.**

Confidence: **HIGH**.

## 16. GRF vs joint force

GRF:
- external contact force at the ground-body interface.

Joint reaction/contact force:
- internal/intersegmental loading at a joint under the chosen definition/model.

They may be related through whole-chain dynamics, but they are not interchangeable.

Confidence: **HIGH**.

---

# ITEM 7 — FRICTION

## 17. Friction force

Friction is a tangential contact force resisting relative sliding or impending sliding between surfaces.

In a simple Coulomb model:

Static:
`|F_f| ≤ μ_s N`.

Kinetic/sliding:
`|F_f| ≈ μ_k N`

under the assumptions of that model.

Canonical rule:

**static friction is not automatically equal to μ_s N; μ_s N is a limiting magnitude.**

Confidence: **HIGH**.

## 18. Direction

Static friction acts as required by the no-slip constraint up to its limit.

It is not universally “opposite the direction of motion of the body.”

It opposes relative slip tendency at the contact interface.

Confidence: **HIGH**.

## 19. Human-ground boundary

The horizontal/shear component of GRF is a contact force component.

Calling it “friction” can be acceptable under a contact model, but the real shoe-floor/foot-ground interface can be more complex than an ideal Coulomb point-contact model.

Detailed contact mechanics remain downstream.

Confidence: **HIGH**.

---

# ITEM 8 — NORMAL FORCE

## 20. Normal force

Normal force is the contact-force component perpendicular to the contact surface.

It is not automatically equal to:
- body weight;
- total GRF;
- mass × gravity.

Examples:
- during vertical acceleration, vertical GRF can differ from body weight;
- on an inclined surface, normal force differs from weight magnitude;
- multi-contact support distributes normal forces across contacts.

Canonical rule:

**normal force ≠ weight.**

Confidence: **HIGH**.

## 21. GRF decomposition

For a flat support surface, GRF may be decomposed into:
- normal/vertical component;
- tangential components.

But the resultant GRF is the vector sum, not just the normal component.

Confidence: **HIGH**.

---

# ITEM 9 — INERTIAL FORCES

## 22. Terminology is ambiguous

“Inertial force” can refer to at least two different concepts.

### A. D'Alembert / pseudo-force representation

The acceleration term can be moved to the force side:

`F_inertial = -ma`

to write a dynamic problem in an equilibrium-like form.

This is a bookkeeping/pseudo-force construct, not a new physical interaction force acting on the body in an inertial frame.

### B. Real forces arising from accelerating distributed mass

In deformable/distributed tissues, mass acceleration can create real internal interaction forces.

Current human running work has shown that explicitly modeling muscle mass/inertia can alter calculated ankle kinetics.

Canonical rule:

**D'Alembert inertial force ≠ physical interaction force.**

Confidence: **HIGH**.

## 23. Project terminology

Until PASS-02 decides whether the source-map wording should be changed, MEC-03 uses:

- **inertial term/pseudo-force** for `-ma` or `-Iα` style dynamic-equilibrium bookkeeping;
- **mass/inertial contribution** for real dynamic effects of accelerating distributed tissue/segments.

This prevents category error.

---

# ITEM 10 — EXTERNAL MOMENT

## 24. Definition

The moment/torque of an external force about a chosen point/axis is:

`τ = r × F`.

External moment at a joint refers to the moment created by external forces about that joint/reference.

Examples:
- GRF moment about knee;
- gravity moment about a joint;
- external load/cable moment.

Canonical rule:

**external moment depends on both force and geometry.**

Confidence: **HIGH**.

## 25. Same force, different moment

The same external force can produce different moments if its line of action changes relative to the joint.

Detailed moment-arm geometry belongs MEC-04.

Confidence: **HIGH**.

---

# ITEM 11 — INTERNAL MOMENT

## 26. Internal moment

At a joint, the internal moment represents the resultant rotational effect of internal structures such as:
- muscles;
- tendons;
- passive tissues;

under the chosen sign/reporting convention.

In many movement analyses, an internal joint moment is interpreted as the net muscular/passive moment required to satisfy the segment dynamics.

Canonical rule:

**internal moment is a resultant; it is not one individual muscle moment.**

Confidence: **HIGH**.

## 27. Sign/convention boundary

“Flexor moment” or “extensor moment” can mean:
- an internally generated moment;
or
- an external moment requiring the opposite internal response,

depending on reporting convention.

Therefore every analysis must state:
- internal vs external moment convention;
- positive direction/sign.

Canonical rule:

**joint-moment sign without convention is ambiguous.**

Confidence: **HIGH**.

---

# ITEM 12 — NET JOINT MOMENT

## 28. Inverse-dynamics quantity

A net joint moment is commonly estimated by inverse dynamics from:
- segment kinematics;
- segment inertial properties;
- external forces/moments.

It is a resultant mechanical requirement at the joint level.

Canonical rule:

**net joint moment ≠ individual muscle torque.**

Confidence: **HIGH**.

## 29. Co-contraction boundary

Antagonist co-contraction can increase:
- muscle forces;
- tendon forces;
- joint contact loading;

without necessarily producing a large net joint moment because opposing muscle moments partially cancel.

Therefore:

**same net joint moment can coexist with different internal force-sharing states.**

Confidence: **HIGH**.

## 30. Loading boundary

Net joint moment should not be used as a direct surrogate for:
- joint contact force;
- ligament force;
- individual muscle force;
- tissue stress.

Current terminology guidelines explicitly recommend careful separation of inverse-dynamics resultant moments from total joint loading.

Confidence: **HIGH**.

---

# ITEM 13 — FORCE-TIME CURVE

## 31. Definition

A force-time curve is:

`F(t)`

for a clearly defined:
- force;
- component/direction;
- system/contact;
- time interval.

Examples:
- vertical GRF over a jump;
- isometric force over a pull;
- tendon force estimate over stance.

## 32. Distinct force-time metrics

A single curve can yield:
- peak force;
- mean force;
- impulse;
- time to peak;
- rate of force development;
- phase-specific force/impulse;
- curve-shape descriptors.

These are not interchangeable.

Canonical rule:

**peak force ≠ impulse ≠ RFD ≠ mean force.**

Confidence: **HIGH**.

## 33. Processing dependence

Current force-plate studies show that force-time metrics can differ across:
- systems;
- metric definitions;
- event/phase definitions;
- algorithms.

Merrigan et al. 2024 found acceptable agreement for some CMJ metrics but systematic/proportional bias for others, especially RFD-related metrics.

Current 2025 youth-force-plate validation similarly found that some metrics agreed well while impulse/RFD-related outputs were less interchangeable between systems.

Canonical boundary:

**a force-time curve is a physical signal; derived metrics are processing-definition dependent.**

Confidence: **HIGH**.

---

# ITEM 14 — FORCE-VELOCITY CURVE

## 34. Two different constructs must be separated

The phrase “force-velocity curve” is used at multiple levels.

### A. Intrinsic muscle force-velocity relationship

At the muscle/fiber/contractile level, force capacity depends on shortening/lengthening velocity.

Current 2026 muscle-mechanics work continues to treat the force-velocity relationship as a foundational muscle property while emphasizing that eccentric behavior depends on experimental conditions such as starting length and temperature.

This belongs mechanistically across:
- PHY muscle physiology;
- MEC-08 muscle-tendon mechanics.

### B. Task-level force/load-velocity profile

In jumps, sprints or resistance exercises, a force-velocity or load-velocity profile is derived from task-level external mechanics across conditions.

It is influenced by:
- technique;
- body/implement geometry;
- multijoint coordination;
- measurement/model assumptions;
- external load definition.

It is **not** a direct measurement of the intrinsic force-velocity curve of a muscle.

Canonical rule:

**muscle force-velocity relationship ≠ task-level force/load-velocity profile.**

Confidence: **HIGH**.

## 35. External profile does not isolate muscle capacity

Current 2025–2026 literature on vertical/sprint force-velocity profiling emphasizes:
- task dependence;
- model assumptions;
- limited direct interpretation as a universal underlying “force capacity vs velocity capacity” property.

Therefore:

**task-level F-V intercepts/curve ≠ direct individual-muscle F-V parameters.**

Confidence: **HIGH**.

## 36. MEC-03 ownership boundary

MEC-03 owns:
- the generic kinetic distinction;
- how a measured/estimated force varies with movement velocity at a stated level.

MEC-08 owns:
- muscle-tendon force-velocity mechanics.

TST/MEC-21 own:
- protocol/model validity of task-level profiling.

PRO owns:
- whether/how such profiles should influence training prescription.

---

# PART B — CURRENT SI / PROFESSIONAL CHECK

## 37. BIPM currentness

Current BIPM page checked 2026-11-20:

**SI Brochure, 9th edition, version 4.01, June 2026** remains current.

Relevant units:
- force → N;
- moment/torque → N·m;
- impulse → N·s.

The shared dimensional form of torque and energy does not make them the same physical quantity.

Confidence: **HIGH**.

## 38. Current NSCA professional scope

The current NSCA Certification Handbook / CSCS Detailed Content Outline retains under basic biomechanics:

**Kinetic laws and principles of movement**, including:
- momentum;
- torque;
- power;
- work;
- force;
- center of gravity;
- impulse;
- center of pressure;
- force-velocity curve;
- force-time curve;
- lever systems.

The current CSCS Exam Description continues to place biomechanics inside Scientific Foundations / Exercise Science.

Project implication:

**kinetics is a required professional foundation, not merely a research-method specialty.**

Confidence: **HIGH professional-scope check**.

---

# PART C — BOUNDARIES WITH NEIGHBORING DOMAINS

## 39. MEC-01 boundary

MEC-01 owns:
- Newtonian force/momentum/impulse foundations;
- vectors;
- torque/angular-momentum foundation.

MEC-03 owns:
- human-movement force classification;
- external/internal force categories;
- joint-level resultant kinetics;
- force-time/F-V interpretation.

## 40. MEC-02 boundary

MEC-02 owns motion description.

MEC-03 uses that motion plus:
- body/segment inertial parameters;
- external forces;

to interpret kinetics.

Canonical rule:

**observed kinematics alone does not identify internal forces.**

## 41. MEC-04 boundary

MEC-03 owns the existence/classification of:
- external/internal moments;
- net joint moment.

MEC-04 owns:
- moment-arm geometry;
- force-line-of-action effects;
- mechanical advantage;
- angle dependence.

## 42. MEC-08 / PHY boundary

MEC-03 owns force as a mechanical quantity.

PHY/MEC-08 own:
- muscle force-generation mechanisms;
- contractile force-length/force-velocity behavior;
- tendon/aponeurosis mechanics.

## 43. MEC-12 boundary

MEC-03 owns generic joint reaction/resultant force and net moment concepts.

MEC-12 owns:
- joint-specific mechanics;
- shoulder/hip/knee/etc loading;
- joint-specific geometry and application.

## 44. MEC-21 / TST boundary

MEC-03 defines what force/moment quantities mean.

MEC-21/TST own:
- force-plate validity;
- inverse-dynamics assumptions;
- muscle-force optimization;
- model sensitivity;
- sensor/processing error;
- cross-device agreement.

Canonical rule:

**kinetic construct ≠ measurement/model validity.**

---

# PART D — PERMANENT NON-EQUIVALENCES

## 45. MEC-03 rejects

1. External force = force from “outside the body” regardless of chosen system.
2. Internal force = unmeasurable force.
3. GRF = muscle force.
4. GRF = joint reaction/contact force.
5. Normal force = weight.
6. Friction = always μN.
7. EMG = muscle force.
8. Net joint moment / moment arm = unique individual muscle force.
9. Muscle force = tendon force under every dynamic condition.
10. Inverse-dynamics joint force = automatically total articular contact load.
11. Model-predicted JRF = model-free ground truth.
12. D'Alembert inertial force = new physical interaction force.
13. External moment = force magnitude alone.
14. Internal moment = one muscle's moment.
15. Net joint moment = individual muscle force.
16. Net joint moment = joint contact force.
17. Small net joint moment = small internal forces.
18. Peak force = impulse.
19. Peak force = RFD.
20. Force-time signal = any one derived metric.
21. Intrinsic muscle F-V relationship = task-level F-V profile.
22. Task-level F-V profile = direct muscle force-capacity curve.
23. Same net kinetics = same internal force sharing.
24. Kinetic difference = training superiority.

---

# PART E — EXACT 14-ITEM CONTENT AUDIT

## 46. Audit structure

Each exact Section 3 item was checked for:

1. definition/system level;
2. measurement/model boundary;
3. major non-equivalence.

| Item | Definition/system | Measurement/model | Boundary | Result |
|---|---:|---:|---:|---:|
| 1 External forces | PASS | PASS | PASS | PASS |
| 2 Internal forces | PASS | PASS | PASS | PASS |
| 3 Ground-reaction force | PASS | PASS | PASS | PASS |
| 4 Muscle force | PASS | PASS | PASS | PASS |
| 5 Tendon force | PASS | PASS | PASS | PASS |
| 6 Joint reaction force | PASS | PASS | PASS | PASS |
| 7 Friction | PASS | PASS | PASS | PASS |
| 8 Normal force | PASS | PASS | PASS | PASS |
| 9 Inertial forces | PASS | PASS | PASS | PASS |
| 10 External moment | PASS | PASS | PASS | PASS |
| 11 Internal moment | PASS | PASS | PASS | PASS |
| 12 Net joint moment | PASS | PASS | PASS | PASS |
| 13 Force-time curve | PASS | PASS | PASS | PASS |
| 14 Force-velocity curve | PASS | PASS | PASS | PASS |

**PASS-01 content audit = 42/42 resolved.**

Exact current Section 3:

**14/14 content-covered.**

---

# PART F — STABLE FINDINGS

## 47. Stable findings

1. External/internal classification is system dependent.
2. GRF is an external ground-body contact force and is distinct from internal joint/muscle forces.
3. Muscle force is not directly recoverable from EMG or net joint moment without additional assumptions/modeling.
4. Tendon force is method/model dependent in vivo and is not universally identical to muscle force.
5. “Joint reaction force” requires definition; inverse-dynamics resultant/intersegmental force must not automatically be treated as total articular contact load.
6. Friction and normal force are contact-force components; normal force is not body weight.
7. D'Alembert/pseudo inertial force is not a new physical interaction force.
8. External moments depend on force and geometry.
9. Internal/net joint moments are resultants and cannot uniquely identify muscle-force sharing or co-contraction.
10. Force-time metrics are non-equivalent and processing dependent.
11. Intrinsic muscle F-V mechanics and task-level F-V profiling are different constructs.
12. Kinetic quantities do not by themselves establish a better training method or safer technique.

---

# PART G — UNRESOLVED QUESTIONS RESERVED FOR PASS-02

## 48. Closure/gap questions

No exact Section 3 item is unresolved at content level.

PASS-02 must independently test:

1. Should source-map item **“Inertial forces”** be renamed to **“Inertial terms / D'Alembert inertial forces”** to avoid treating pseudo-force as a physical interaction?
2. Is **“Joint reaction force”** sufficiently precise, or must the source map explicitly distinguish intersegmental/resultant force from total joint contact/reaction loading?
3. Should item 14 **“Force-velocity curve”** be split into:
   - intrinsic muscle F-V relationship;
   - task-level force/load-velocity profile;
   or is the current cross-domain boundary sufficient?
4. Does **Ground-reaction force** require explicit center-of-pressure/free-moment coupling in MEC-03, or is CoP adequately owned by MEC-06/TST?
5. Are muscle/tendon forces too early in MEC-03 and better owned only by MEC-08, or is generic force classification here necessary?
6. Does “internal moment” need explicit passive-tissue contribution in the source map, or is canonical prose sufficient?
7. Does current “net joint moment” terminology remain mechanically correct under the project conventions?
8. Can canonical MEC-03 be synthesized without a source-map repair?

If a real foundational gap is found, closure must be refused and a dedicated repair pass opened.

---

# PART H — SOURCE REGISTER

## Current authoritative / professional

1. **BIPM — SI Brochure, 9th edition, v4.01, June 2026.**
2. **NSCA — current CSCS Exam Description**, checked 2026-11-20.
3. **NSCA — current Certification Handbook / CSCS Detailed Content Outline**, current site version checked 2026-11-20.

## Mechanics / reporting

4. **Baltzopoulos V. Inverse dynamics, joint reaction forces and loading in the musculoskeletal system: guidelines for correct mechanical terms and recommendations for accurate reporting of results. Sports Biomechanics. 2024;23(3):287-300. PMID 33433300.**
   - Used for JRF / net-joint-moment terminology and partial-vs-total loading boundary.

## Current muscle / tendon / model evidence

5. **Besomi et al. 2024 — CEDE consensus: Application of EMG to estimate muscle force. PMID 39069427.**
   - EMG-to-force limitations and model requirement.

6. **Reiter et al. 2024 — Achilles tendon loading during running estimated via shear-wave tensiometry. PMID 38240495.**
   - Human tendon-force measurement/estimation boundary.

7. **Skubich & Piszczatowski 2026 — influence of musculoskeletal model on calculated lower-extremity muscle and joint-reaction forces. PMID 42885198.**
   - Model dependence of internal-force estimates.

8. **Persad et al. 2024 — Specific tension of human muscle in vivo: systematic review. PMID 39169839.**
   - Indirect nature and parameter dependence of human muscle-force estimation.

9. **Athanasiadou et al. 2025 — neural-network vs Hill-type muscle-force estimation in dynamic conditions. PMID 41099630.**
   - Dynamic muscle-force model dependence.

## Current force-time / GRF evidence

10. **Merrigan et al. 2024 — CMJ force-time curve analyses across force-plate systems. PMID 37815253.**
11. **Greenberg et al. 2025 — clinical vs laboratory force plates for CMJ metrics. PMID 41346844.**
12. **Akhter et al. 2026 — systematic review of IMU/ML GRF waveform estimation. PMID 42815516.**
13. **Schmedling et al. 2025 — per-foot GRF/location estimation from a single forceplate. PMID 40807962.**

## Current force-velocity evidence

14. **Kissane & Askew 2026 — starting length and temperature dependence of eccentric muscle force-velocity behaviour. PMID 42108769.**
15. **Vertical Force-Velocity Profiling in Soccer: systematic review, 2026. PMID 41900506.**
   - Task/profile assumptions and restricted ecological/mechanistic interpretation.
16. **Puschkasch-Möck et al. 2026 — mechanical power / force-velocity interpretation in resistance training. PMID 41678794.**

---

# 49. Confidence

### HIGH
- external/internal force system dependence;
- GRF/contact-force classification;
- friction/normal-force distinction;
- moment/resultant distinctions;
- net joint moment as a resultant inverse-dynamics quantity;
- force-time non-equivalences;
- intrinsic muscle F-V vs task-level F-V profile separation;
- SI force/moment units.

### HIGH concept / method-dependent implementation
- muscle-force estimation;
- tendon-force estimation;
- joint reaction/contact force estimation;
- force-time derived metrics.

### Explicit terminology risk for PASS-02
- “inertial forces”;
- “joint reaction force”;
- generic “force-velocity curve.”

---

# 50. Status

**MEC-03/PASS-01 — CONTENT PASS COMPLETE.**

Results:

- exact Area 06 Section 3 = **14/14 content-covered**;
- content audit = **42/42 resolved**;
- no source-map mutation made yet;
- three terminology/ownership risks explicitly reserved for independent audit;
- canonical MEC-03 finding **not created**;
- `CLOSED_FOR_PRACTICE` **not assigned**.

Next one block:

**MEC-03/PASS-02 — independent closure/gap audit and synthesis.**

STOP after this PASS.
