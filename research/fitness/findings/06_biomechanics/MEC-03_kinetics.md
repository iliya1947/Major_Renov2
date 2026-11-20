# MEC-03 — Kinetics

Статус: **CLOSED_FOR_PRACTICE v2.0 — revalidated 2026-11-20**  
Область: 06 — Biomechanics

## 0. Core decision

Kinetics describes the forces and resultant moments associated with movement of a defined mechanical system.

Canonical workflow:

**define system → draw/define free body → identify external forces/moments → apply Newton-Euler → interpret resultants at the correct level.**

Kinetics does not make a force/moment estimate automatically:
- a direct measurement;
- an individual muscle force;
- a joint contact load;
- a training prescription.

---

## 1. System boundary comes first

External/internal classification is relative to the chosen system.

For a whole-body free body:
- gravity/contact forces are external;
- forces between body segments are internal.

For a single-segment free body:
- adjacent joint force/moment;
- muscle/tendon force crossing the boundary;
- segment gravity

can be external to that segment.

Canonical rule:

**the same interaction may be internal in one system and external in another.**

---

## 2. Free-body diagrams

An FBD isolates the selected body/system and shows the external interactions acting on it.

Include as relevant:
- gravity;
- contact forces;
- applied loads;
- joint force/moment when external to the isolated segment;
- coordinates/reference;
- force line/point of application when needed.

Do not add:
- acceleration as an applied force in an inertial-frame FBD;
- net force as an extra independent force;
- both members of a Newton-third-law pair on one free body.

---

## 3. Newton-Euler chain

For translation:

`sum(F_external) = dp/dt`.

For a constant-mass body:

`sum(F_external) = m*a`.

For rotation:

`sum(tau_external) = dL/dt`.

The equations are applied only after the system and force inventory are defined.

---

## 4. Ground-reaction force

GRF is the contact force exerted by the ground/support on the body.

It may contain:
- normal component;
- tangential/shear components.

Rules:
- GRF ≠ muscle force;
- GRF ≠ joint reaction force;
- a single resultant force-plate output does not automatically separate multiple simultaneous contacts.

---

## 5. Normal force and friction

Normal force is perpendicular to the contact surface.

It is not automatically equal to body weight.

In a simple Coulomb model:

- static friction satisfies `|F_f| ≤ μ_s*N`;
- equality applies only at the limiting condition;
- sliding friction may be approximated by `|F_f| ≈ μ_k*N` under model assumptions.

Static friction opposes relative slip tendency, not necessarily whole-body motion direction.

---

## 6. Muscle force

Muscle force is a mechanical force generated/transmitted through a muscle-tendon actuator.

Do not infer an individual muscle force directly from:
- EMG amplitude;
- external load;
- net joint moment.

Current EMG-to-force consensus supports only limited direct EMG-only estimation conditions and generally requires additional modeling.

---

## 7. Tendon force

Tendon force is the tensile force carried through tendon.

Muscle force and tendon force can be closely linked in simplified models but are not universally interchangeable under all dynamic/anatomical conditions.

In-vivo tendon-force estimates are method/model dependent.

---

## 8. Joint reaction force

JRF terminology must state the modeling approach.

Project reporting convention follows Baltzopoulos:

- **Total JRF** — Actual Forces approach;
- **Partial JRF** — Resultant Moments approach.

This terminology is used because it makes the mechanical model explicit; it is not claimed to be universally adopted across all literature.

Do not equate JRF automatically with:
- local articular contact distribution;
- cartilage stress;
- tissue stress.

Those require additional joint/contact modeling.

---

## 9. Inertial terms

D'Alembert can rewrite dynamics using a pseudo-force term:

`F_inertial = -m*a`.

This is analytical bookkeeping, not a new physical interaction force.

Separately, real accelerating mass distributions have physical dynamic consequences.

Canonical rule:

**pseudo-force convention ≠ physical mass-dynamics effect.**

---

## 10. External moment

Moment of an external force about a reference:

`tau = r × F`.

Therefore external moment depends on:
- force magnitude/direction;
- line of action;
- reference point/axis.

Detailed moment-arm geometry belongs MEC-04.

---

## 11. Internal and net joint moments

An internal joint moment is the resultant rotational effect of modeled internal structures under the reporting convention.

A net joint moment from inverse dynamics is a resultant mechanical requirement.

It does not uniquely identify:
- individual muscle moments;
- individual muscle forces;
- co-contraction;
- joint contact load.

Always state:
- internal vs external moment convention;
- positive/sign convention.

---

## 12. Force-time curve

A force-time curve is `F(t)` for a defined force/component/phase.

Derived metrics include:
- peak force;
- mean force;
- impulse;
- RFD;
- time to peak;
- phase-specific quantities.

These are non-equivalent.

Measurement/processing definitions can affect derived values.

---

## 13. Task-level force/load-velocity profile

MEC-03 owns the task-level external mechanics construct.

Examples:
- loaded jumps;
- resistance-exercise load-velocity data;
- sprint-derived external profiles.

These profiles depend on:
- task;
- technique;
- multijoint coordination;
- inertia/geometry;
- force/velocity definition;
- model/extrapolation.

Canonical rule:

**task-level F-V profile ≠ intrinsic muscle force-velocity relationship.**

Intrinsic muscle F-V remains PHY/MEC-08.

---

## 14. Measurement/model boundary

MEC-03 defines the kinetic quantities and interpretation rules.

MEC-21/TST own:
- inverse-dynamics algorithms;
- body-segment inertial parameter uncertainty;
- force-plate processing;
- EMG-to-force modeling;
- force-sharing optimization;
- musculoskeletal-model sensitivity;
- validity/reliability.

Canonical rule:

**correct mechanical construct ≠ validated numerical estimate.**

---

## 15. Practical exercise-analysis boundary

A kinetic observation such as:
- larger GRF;
- larger external moment;
- different force-time curve;
- different task-level F-V profile

does not automatically prove:
- higher target-muscle force;
- better hypertrophy stimulus;
- safer technique;
- greater injury risk;
- superior programming choice.

Those conclusions require downstream mechanics, physiology and outcome evidence.

---

## 16. Permanent anti-category-error rules

1. External force ≠ outside-the-body force independent of system.
2. Internal force ≠ unmeasurable force.
3. FBD ≠ every force in the environment.
4. Both Newton-III pair members ≠ forces on one free body.
5. Acceleration ≠ applied force.
6. GRF ≠ muscle force.
7. GRF ≠ JRF.
8. Normal force ≠ weight.
9. Static friction ≠ always μN.
10. EMG ≠ muscle force.
11. Muscle force ≠ tendon force in every model/state.
12. Net joint moment ≠ individual muscle force.
13. Net joint moment ≠ joint contact load.
14. Partial JRF ≠ Total JRF.
15. JRF ≠ local tissue stress.
16. D'Alembert pseudo-force ≠ physical interaction force.
17. Internal moment ≠ one muscle moment.
18. Peak force ≠ impulse.
19. Peak force ≠ RFD.
20. Force-time curve ≠ one derived metric.
21. Task-level F-V profile ≠ intrinsic muscle F-V.
22. Task-level F-V profile ≠ universal capacity.
23. Same net kinetics ≠ same force sharing.
24. Kinetic difference ≠ training superiority.

---

## 17. Downstream ownership

- moment arms / torque geometry → MEC-04;
- levers → MEC-05;
- tissue loading → MEC-07;
- muscle-tendon mechanics / intrinsic F-V → MEC-08;
- joint-specific loading → MEC-12;
- work/power → MEC-18;
- exercise-specific mechanical synthesis → MEC-19;
- inverse dynamics/model uncertainty → MEC-21;
- measurement validity → TST;
- prescription → PRO;
- execution/technique decisions → TEC.

---

## 18. Sources retained at closure

1. BIPM — SI Brochure, 9th edition, v4.01, June 2026.
2. NSCA — current CSCS Exam Description / Detailed Content Outline.
3. Baltzopoulos 2024, PMID 33433300.
4. CEDE EMG-to-force consensus 2024, PMID 39069427.
5. Reiter et al. 2024, PMID 38240495.
6. Skubich & Piszczatowski 2026, PMID 42885198.
7. Bobbert et al. 2023, PMID 36848926.
8. Vertical Force-Velocity Profiling systematic review 2026, PMID 41900506.
9. OpenStax University Physics — current FBD/system mechanics.

---

## 19. Closure

Closure audit:

`research/fitness/passes/06_biomechanics/MEC-03/PASS-04_repeat_closure_audit_and_synthesis.md`

Result:

**40/40 PASS.**

Corrected Area 06 Section 3:

**15/15 exact items PASS.**

MEC-03 = **CLOSED_FOR_PRACTICE v2.0**.

---

## 20. Next dependency

**MEC-04/PASS-01 — Torque / moment arms content revalidation.**

Do not start MEC-04 without the next user continue signal.
