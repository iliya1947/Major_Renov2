# MEC-02 — Kinematics

Статус: **CLOSED_FOR_PRACTICE v2.0 — revalidated 2026-11-20**  
Область: 06 — Biomechanics

## 0. Core decision

Kinematics describes **how a body, segment, joint or implement moves through space and time**.

It does not by itself explain the forces, moments or muscle actions that caused the motion.

Canonical boundary:

**kinematics ≠ kinetics.**

---

## 1. Reference frames first

Every kinematic coordinate requires a reference frame.

At minimum define:
- origin;
- axis directions;
- global vs local/segment frame;
- handedness/sign convention.

The same physical point/vector can have different numerical components in different frames.

Canonical rule:

**coordinate values are frame conditioned.**

---

## 2. Position, displacement and distance

Position: `r(t)`.

Displacement:

`Δr = r₂ − r₁`.

Distance is path length.

Therefore:
- displacement is vector endpoint change;
- distance is scalar and path dependent;
- zero full-cycle displacement can coexist with substantial movement distance.

---

## 3. Velocity and acceleration

Velocity:

`v = dr/dt`.

Acceleration:

`a = dv/dt`.

Rules:
- speed = magnitude of velocity;
- velocity ≠ speed;
- acceleration can exist at constant speed when direction changes;
- average values do not reproduce the full instantaneous profile.

---

## 4. Angular kinematics

For simple planar/fixed-axis motion:

- angular displacement: `Δθ`;
- angular velocity: `ω = dθ/dt`;
- angular acceleration: `α = dω/dt`.

These are not interchangeable with linear endpoint motion.

In ideal fixed-axis rigid motion:

`v_t = ωr`.

Thus the same angular velocity can produce different tangential speeds at different radii.

---

## 5. Planes and axes

Common reference planes:
- sagittal;
- frontal/coronal;
- transverse.

Named anatomical axes are useful descriptive constructs.

But:
- real human movement is often multiplanar;
- biological joint axes can shift with position/task;
- “sagittal-plane exercise” does not prove zero motion outside the sagittal plane.

---

## 6. Position, orientation and pose

For a rigid segment in 3D:

- position describes where a reference point is;
- orientation describes how the segment is rotated;
- pose combines position + orientation.

Therefore:

**point trajectory alone does not fully specify rigid-body movement.**

---

## 7. Global and local segment frames

A global frame describes motion relative to the environment.

A local/segment frame is attached to:
- pelvis;
- trunk;
- femur;
- tibia;
- upper arm;
- forearm;
- implement;
or another modeled rigid segment.

Joint kinematics normally depend on relative distal-vs-proximal segment orientation.

Canonical rule:

**global segment orientation ≠ joint angle.**

---

## 8. 3D orientation representations

A physical 3D orientation can be represented using:
- rotation matrices;
- unit quaternions;
- Euler/Cardan/JCS angles.

These are representations, not separate physical motions.

Rotation matrices and quaternions are retained conceptually here.

Numerical algorithms belong MEC-21.

---

## 9. Euler/Cardan/JCS angle boundary

Euler/Cardan angles express an orientation using an ordered rotation sequence.

Reported components depend on:
- axis definitions;
- sequence/order;
- proximal/distal frames;
- sign convention.

Finite rotations are order dependent.

Therefore:

**a joint-angle triplet is convention conditioned.**

Le et al. 2025 demonstrates that sequence choice can materially alter reported components for some multiplanar foot/ankle joints.

---

## 10. Singularities

Euler/Cardan parameterizations can encounter singular/ill-conditioned configurations often described as gimbal lock.

The physical orientation remains defined even when the chosen angle decomposition becomes unstable or non-unique.

Detailed numerical handling belongs MEC-21.

---

## 11. Joint angles

A joint angle is a coordinate representation of relative segment orientation.

It requires:
- proximal segment frame;
- distal segment frame;
- rotation/JCS convention;
- sign convention.

An anatomical label such as flexion or internal rotation does not, by itself, fully define the quantitative 3D calculation.

---

## 12. Trajectories

Point trajectory:

`r(t)`.

Orientation trajectory:

`R(t)`.

Rigid-body pose trajectory contains both.

Thus:
- same endpoints can have different paths;
- same point path can occur with different segment orientations;
- joint-angle trajectory is not identical to endpoint trajectory.

---

## 13. Range of motion

For a defined scalar coordinate:

`ROM_q = q_max − q_min`.

ROM must specify:
- what variable;
- what task;
- what convention;
- what interval.

Do not equate automatically:
- passive anatomical ROM;
- active joint ROM;
- exercise ROM;
- implement travel;
- segment excursion.

There is no universal scalar 3D ROM for arbitrary orientation motion.

---

## 14. Temporal characteristics

Kinematic time descriptors include:
- total repetition duration;
- phase duration;
- event timing;
- time to peak velocity;
- cadence/frequency;
- contact/flight time where relevant.

These describe movement.

They do not establish an optimal training tempo.

---

## 15. Measurement boundary

MEC-02 defines what the kinematic constructs mean.

MEC-21/TST own whether they are measured well enough using:
- video;
- motion capture;
- IMUs;
- markers;
- cameras;
- filtering;
- calibration;
- reconstruction.

Canonical rule:

**construct definition ≠ measurement validity/reliability.**

---

## 16. Interpretation boundary

Kinematics alone cannot establish:
- muscle force;
- joint contact force;
- internal moment;
- tissue stress;
- adaptation superiority;
- injury risk.

Those require downstream:
- MEC-03/04;
- MEC-07/12;
- PRO/TEC;
- outcome evidence.

---

## 17. Permanent anti-category-error rules

1. Position ≠ displacement.
2. Displacement ≠ distance.
3. Velocity ≠ speed.
4. Velocity ≠ acceleration.
5. Constant speed ≠ zero acceleration.
6. Angular displacement ≠ full 3D orientation.
7. Angular velocity ≠ endpoint linear velocity.
8. Angular acceleration ≠ torque.
9. Anatomical plane ≠ perfectly planar real motion.
10. Named anatomical axis ≠ necessarily fixed joint axis.
11. Global segment orientation ≠ joint angle.
12. Position ≠ orientation.
13. Pose ≠ position alone.
14. Euler/Cardan/JCS components ≠ physical orientation itself.
15. Quaternion parameters ≠ anatomical angles.
16. Point trajectory ≠ pose trajectory.
17. ROM ≠ one universal property.
18. Scalar ROM ≠ universal 3D movement extent.
19. Correct frame definition ≠ accurate frame measurement.
20. Kinematics ≠ kinetics.
21. Kinematic difference ≠ known muscle-force difference.
22. Kinematic difference ≠ training superiority.
23. Phase duration ≠ optimal tempo.

---

## 18. Sources retained at closure

1. BIPM — SI Brochure, 9th edition, v4.01, June 2026.
2. International Society of Biomechanics — Standards.
3. Wu & Cavanagh 1995.
4. Wu et al. 2002 / 2005 ISB joint coordinate-system recommendations.
5. Cereatti et al. 2024, PMID 39032224.
6. Le et al. 2025, PMID 40967106.
7. NSCA current CSCS biomechanics/kinematics scope.

---

## 19. Closure

Closure audit:

`research/fitness/passes/06_biomechanics/MEC-02/PASS-04_repeat_closure_audit_and_synthesis.md`

Result:

**38/38 PASS.**

Current corrected Section 2:

**16/16 exact items PASS.**

MEC-02 = **CLOSED_FOR_PRACTICE v2.0**.

---

## 20. Next dependency

**MEC-03/PASS-01 — Kinetics content revalidation.**

Do not start MEC-03 without the next user continue signal.
