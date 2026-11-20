# MEC-02 / PASS-03 — Reference frames, coordinate systems and 3D orientation representation gap closure

Дата: 2026-11-20  
Статус: **GAP CONTENT COMPLETE — REPEAT CLOSURE AUDIT PENDING**  
Область: 06 — Biomechanics  
Topic: MEC-02 — Kinematics

## 0. Why this pass exists

MEC-02/PASS-02 found one blocking foundational cluster:

**joint/segment kinematics was defined without two explicit source-map constructs that make those kinematics interpretable:**

1. reference frames / coordinate systems;
2. 3D orientation / rotation representation.

This PASS repairs only that cluster.

It does not:
- reopen the 14 already-valid original kinematics items;
- perform the repeat closure audit;
- define joint-specific ISB coordinate systems in detail → MEC-12;
- teach advanced screw/helical-axis methods → MEC-12/MEC-21;
- solve marker/IMU calibration, filtering or reconstruction error → MEC-21/TST;
- make technique or programming prescriptions → TEC/PRO.

---

## 1. Source-of-truth / map correction

Area 06 Section 2 is corrected by adding:

15. Reference frames / coordinate systems.
16. Orientation / 3D rotation representation.

The original 14 items remain unchanged.

Revised MEC-02 source scope:

**16 exact items.**

This is a source-map repair based on PASS-02, not a new canonical MEC topic.

---

# ITEM 15 — REFERENCE FRAMES / COORDINATE SYSTEMS

## 2. Why a frame is foundational

A coordinate value is not self-interpreting.

Position, displacement, velocity, acceleration, segment orientation and joint angle all require a reference structure.

At minimum, a Cartesian frame specifies:

1. origin;
2. three basis axes in 3D;
3. axis directions;
4. handedness;
5. orientation relative to another frame when frames are compared;
6. sign convention.

Canonical rule:

**a coordinate component is meaningful only relative to a defined frame.**

Confidence: **HIGH**.

---

## 3. Global/reference/laboratory frame

A global frame describes motion relative to the environment.

Typical uses:
- vertical position;
- forward progression;
- bar path in the room/lab;
- whole-body COM path;
- platform/ground-referenced motion.

The exact axis naming convention can differ between standards/labs.

Therefore:

**“X/Y/Z” alone is insufficient unless the axis directions are defined.**

Confidence: **HIGH**.

---

## 4. Local / segment coordinate frame

A local frame is attached to a body segment or rigid object.

Examples:
- pelvis frame;
- femur frame;
- tibia frame;
- trunk frame;
- upper-arm frame;
- forearm frame;
- barbell/implement frame.

ISB joint standards use segment coordinate systems to support reproducible relative-motion reporting.

Canonical rule:

**global orientation of a segment ≠ its orientation relative to an adjacent segment.**

Confidence: **HIGH**.

---

## 5. Position in a frame

For point position:

`r_P expressed in global frame G`

denotes conceptually:

**position of point P expressed in global frame G.**

The same physical point can have different coordinate components in different frames.

Changing the coordinate basis changes the numerical components, not the physical point itself.

Canonical rule:

**coordinates ≠ the physical location itself.**

Confidence: **HIGH**.

---

## 6. Vector components across frames

For a vector (mathbf v):

- the physical vector can remain unchanged;
- its component triplet changes when the basis changes.

Therefore comparisons require:
- common frame;
or
- explicit frame transformation.

This is essential for:
- velocity components;
- acceleration components;
- force components later;
- joint-axis components.

Canonical rule:

**component values cannot be compared across frames without transformation/standardization.**

Confidence: **HIGH**.

---

## 7. Right-handed coordinate systems

Biomechanical standards commonly use orthogonal right-handed coordinate systems.

For orthonormal axes:

`e_x × e_y = e_z`

The exact anatomical mapping of x/y/z varies by convention.

Therefore:

**right-handedness does not determine which anatomical direction must be called X, Y or Z.**

Confidence: **HIGH**.

---

## 8. Joint kinematics as relative frames

For a joint connecting proximal and distal segments, joint orientation is fundamentally based on the relative orientation of the two segment frames.

Conceptually:

`R_proximal→distal`

contains the distal-frame orientation relative to the proximal frame.

A reported joint-angle triplet is then obtained from that relative orientation according to a stated convention.

Canonical rule:

**joint angles are derived coordinates of relative segment orientation, not primitive frame-free quantities.**

Confidence: **HIGH**.

---

## 9. Frame definition vs measurement implementation

MEC-02 owns the concept:
- global frame;
- local segment frame;
- relative frame;
- coordinate transformation requirement.

MEC-21/TST own:
- marker placement;
- IMU-to-segment calibration;
- anatomical landmark error;
- soft-tissue artifact;
- sensor drift;
- camera calibration;
- reconstruction error.

Canonical boundary:

**a valid coordinate-system definition does not guarantee accurate measurement of that frame.**

Confidence: **HIGH**.

---

# ITEM 16 — ORIENTATION / 3D ROTATION REPRESENTATION

## 10. Position vs orientation vs pose

For a rigid segment in 3D:

- **position** describes where a reference point is;
- **orientation** describes how the segment/frame is rotated;
- **pose** combines position + orientation.

Therefore a full rigid-body trajectory may require:

`pose(t) = {r(t), R(t)}`

where (R(t)) denotes orientation.

Canonical rule:

**point trajectory alone does not fully describe rigid-body motion in 3D.**

Confidence: **HIGH**.

---

## 11. Orientation is not one angle

In 2D planar motion, one signed angle can describe orientation.

In 3D, orientation generally requires three independent rotational degrees of freedom.

It is therefore not fully represented by:
- one scalar angle;
- one anatomical motion label;
- one plane name.

Canonical rule:

**3D orientation ≠ one scalar angular displacement.**

Confidence: **HIGH**.

---

## 12. Rotation matrix — conceptual representation

A 3D orientation can be represented by a rotation matrix:

`R ∈ SO(3)`

At trainer-relevant level, the important properties are:

- (R) maps vector components between orthonormal frames;
- its columns/rows encode basis-axis relationships depending on convention;
- it represents one physical orientation without requiring a three-angle decomposition.

No matrix-algebra implementation is required in MEC-02.

Detailed numerical use remains MEC-21.

Confidence: **HIGH**.

---

## 13. Quaternion — conceptual representation

A unit quaternion can also represent 3D orientation.

Trainer-level meaning:

- it is an alternative orientation representation;
- it avoids the singularity structure of Euler/Cardan angle parameterizations;
- its four numerical components are not four physical rotational degrees of freedom because of the unit-norm constraint and sign equivalence.

MEC-02 does not require quaternion arithmetic.

Canonical rule:

**quaternion components are representation parameters, not anatomical joint angles.**

Confidence: **HIGH**.

---

## 14. Euler/Cardan angles — reporting representation

Euler/Cardan angles represent one orientation as an ordered sequence of three rotations.

They are especially common because they can map onto interpretable joint-motion labels.

However, the reported angle components depend on:
- axis definitions;
- rotation sequence;
- proximal/distal frame definitions;
- sign convention.

Le et al. 2025 showed substantial sequence-dependent differences in reported subtalar and talonavicular joint components.

Canonical rule:

**Euler/Cardan components describe an orientation under a convention; they are not the orientation itself.**

Confidence: **HIGH**.

---

## 15. Rotation-order dependence

Finite 3D rotations are non-commutative.

In general:

`R_x(α)R_y(β) ≠ R_y(β)R_x(α)`

Therefore changing the order of finite rotations can change the resulting orientation or, when decomposing the same orientation, change the reported angle components.

Canonical rule:

**rotation order matters in 3D.**

Confidence: **HIGH**.

---

## 16. Same physical orientation, different angle decomposition

A single physical orientation can be represented by different parameter sets under different:
- Euler/Cardan sequences;
- axis conventions;
- reference orientations.

Therefore cross-study angle comparison requires convention matching.

Forbidden inference:

> study A reports 20° and study B reports 15°, therefore the physical joint orientation differed by 5°.

That conclusion is not valid until the coordinate/rotation conventions are known to be comparable.

Confidence: **HIGH**.

---

## 17. Singularities / gimbal-lock boundary

Three-angle orientation parameterizations can have singular configurations where:
- two effective rotation axes align;
- individual angle components lose uniqueness/stability;
- small orientation changes can produce large component changes.

This is commonly called **gimbal lock** in Euler/Cardan parameterizations.

MEC-02 needs only the boundary:

**angle decomposition can become ill-conditioned/singular even though the physical orientation remains well-defined.**

Detailed detection/numerical handling belongs MEC-21.

Confidence: **HIGH**.

---

## 18. Anatomical labels vs mathematical representation

Terms such as:
- flexion/extension;
- abduction/adduction;
- internal/external rotation

are clinically/anatomically useful labels.

But in 3D quantitative analysis they require:
- explicit coordinate systems;
- explicit rotation/JCS convention.

Canonical rule:

**an anatomical label does not by itself define the mathematical rotation representation.**

Confidence: **HIGH**.

---

# PART B — RELATIVE ORIENTATION AND JOINT KINEMATICS

## 19. Relative orientation

If:
- (R_G^P) = proximal segment orientation in global frame;
- (R_G^D) = distal segment orientation in global frame;

then the joint-level quantity is based on their relative orientation, conceptually of the form:

`R_P^D = (R_G^P)^−1 R_G^D`

for a consistent convention.

The exact matrix notation is not itself canonical; the conceptual rule is.

Canonical rule:

**joint kinematics depend on distal-vs-proximal orientation, not on either segment's global orientation alone.**

Confidence: **HIGH**.

---

## 20. Joint coordinate system boundary

ISB standards exist because joint motion must be expressed reproducibly.

MEC-02 establishes:
- segment frames;
- relative orientation;
- representation dependence.

MEC-12 owns:
- joint-specific anatomical coordinate definitions;
- shoulder/hip/knee/ankle/etc conventions;
- normal variation.

Canonical handoff:

**generic representation here; joint-specific implementation later.**

---

# PART C — TRAJECTORY AND ROM REPAIR

## 21. Point trajectory vs orientation trajectory

Point trajectory:

`r(t)`

Orientation trajectory:

`R(t)`

Rigid-body pose trajectory requires both.

Therefore two segment motions can share a similar point path while having different orientations through time.

Canonical rule:

**position trajectory ≠ orientation trajectory.**

Confidence: **HIGH**.

---

## 22. Joint-angle trajectory

A joint-angle curve:

`q(t)`

is a chosen coordinate representation of relative orientation through time.

It is not identical to:
- the underlying relative orientation (R(t));
- the endpoint trajectory;
- the segment's global orientation.

Canonical rule:

**joint-angle trajectory is convention-conditioned.**

Confidence: **HIGH**.

---

## 23. Scalar ROM boundary

For a scalar variable (q(t)):

`ROM_q = q_max − q_min`

is a valid excursion descriptor when:
- (q) is defined;
- the interval is defined;
- the representation is appropriate.

But there is no single universal scalar “3D ROM” that automatically summarizes an arbitrary orientation path.

Therefore:

**ROM must name the variable and convention.**

Confidence: **HIGH**.

---

## 24. Pose/trajectory repair does not create a third map item

PASS-02 noted that trajectory needed orientation content.

This is resolved by adding:
- reference frames;
- orientation representation.

Existing item 12, **Segment trajectories**, remains sufficient once canonical content states that trajectory may involve:
- position;
- orientation;
- or both.

No additional source-map item is required.

---

# PART D — CURRENT STANDARDIZATION CHECK

## 25. International Society of Biomechanics

Current ISB Standards architecture explicitly includes:

- Global coordinate systems;
- Whole body orientation;
- Joint coordinate systems (general);
- joint-specific coordinate-system standards.

This directly supports the two Section 2 additions.

Confidence: **HIGH**.

---

## 26. ISB 2024 IMU recommendations

Cereatti et al. 2024, ISB-approved recommendations, organize reproducible inertial joint-kinematics work around categories including:

- sensor characteristics/calibration;
- experimental protocol;
- **definition of a kinematic model and subject-specific calibration**;
- joint-kinematics analysis;
- quality assessment.

Project implication:

**kinematic representation/model definition is upstream of measurement quality assessment.**

That matches MEC-02 → MEC-21/TST ownership.

Confidence: **HIGH**.

---

## 27. 2025 Cardan-sequence study

Le et al. 2025 evaluated all six Cardan sequences for multiple foot/ankle joints.

Key boundary:

- some joints were comparatively stable across sequences;
- subtalar and talonavicular reported components showed substantial sequence-dependent variation.

Therefore:

**sequence sensitivity is joint/task dependent, but the representation-dependence warning is real.**

Confidence: **HIGH**.

---

# PART E — BOUNDARIES

## 28. MEC-01 boundary

MEC-01 defines:
- vectors;
- angular displacement/velocity/acceleration;
- Newtonian mechanics.

MEC-02 defines:
- where/how those kinematic quantities are expressed;
- relative orientation;
- motion trajectories.

No duplication.

---

## 29. MEC-12 boundary

MEC-02:
- generic frames;
- generic orientation representations;
- generic relative-segment logic.

MEC-12:
- shoulder/hip/knee/ankle/etc joint-specific geometry;
- joint-specific axes and conventions;
- loading/biomechanical consequences.

No duplication.

---

## 30. MEC-21 / TST boundary

MEC-02 owns the **construct**:
- frame;
- orientation;
- representation.

MEC-21/TST own the **estimation quality**:
- calibration;
- drift;
- filtering;
- marker artifact;
- 2D/3D reconstruction;
- algorithm choice;
- numerical singularity handling;
- validity/reliability.

Canonical rule:

**representation definition ≠ measurement accuracy.**

---

# PART F — NEW NON-EQUIVALENCES

## 31. Added permanent distinctions

MEC-02 now additionally rejects:

1. coordinate components = physical vector.
2. X/Y/Z labels = universal anatomical directions.
3. global segment orientation = joint angle.
4. position = orientation.
5. pose = position only.
6. one scalar angle = full 3D orientation.
7. Euler/Cardan angle triplet = orientation itself.
8. quaternion components = anatomical angles.
9. one rotation sequence = all equivalent component values.
10. anatomical movement label = complete mathematical convention.
11. joint-angle curve = underlying orientation trajectory.
12. point trajectory = rigid-body pose trajectory.
13. scalar ROM = universal 3D movement extent.
14. correct frame definition = accurate frame measurement.

---

# PART G — MAP CORRECTION

## 32. Corrected Section 2

Area 06 Section 2 is updated from 14 to **16 exact items**.

Added:

15. Reference frames / coordinate systems.
16. Orientation / 3D rotation representation.

No new canonical topic ID is required because both constructs belong inside:

**MEC-02 — Kinematics.**

---

# PART H — PASS-03 GAP CONTENT AUDIT

## 33. Required scope from PASS-02

1. global/reference/laboratory frame → **PASS**.
2. local/segment coordinate frame → **PASS**.
3. origin + basis axes + handedness/sign convention → **PASS**.
4. position/orientation relative to frame → **PASS**.
5. rigid-body pose = position + orientation → **PASS**.
6. relative segment orientation / joint kinematics → **PASS**.
7. rotation matrices at conceptual level → **PASS**.
8. quaternions at conceptual level → **PASS**.
9. Euler/Cardan sequence as reporting representation → **PASS**.
10. sequence/order dependence → **PASS**.
11. singularity/gimbal-lock boundary → **PASS**.
12. orientation trajectory vs point trajectory → **PASS**.
13. scalar-ROM boundary in multidimensional motion → **PASS**.
14. handoff to MEC-12/MEC-21/TST → **PASS**.

**PASS-03 gap-content audit = 14/14 PASS.**

---

## 34. Revised MEC-02 content coverage

Original PASS-01:

- original exact items = **14/14**;
- checks = **42/42 resolved**.

PASS-03 repair:

- new source-map items = **2/2**;
- gap-content checks = **14/14 PASS**.

Revised Section 2 scope:

**16/16 content-covered.**

This does **not** authorize closure.

A repeat independent closure audit remains mandatory because:
- the source map changed;
- new representation rules must be checked against downstream topics;
- ledger remains audit-pending.

---

# PART I — EVIDENCE LEDGER STATUS

## 35. Ledger transition

Existing:
- MEC02-01…MEC02-10 remain valid and audit-pending.

Gap rows:
- MEC02-11;
- MEC02-12

can now move from:

**GAP IDENTIFIED — MEC-02 CONTENT PASS REQUIRED**

to:

**REVALIDATED 2026-11-20 — MEC-02 AUDIT PENDING.**

---

# PART J — SOURCE REGISTER

1. **BIPM — The International System of Units (SI), 9th edition, v4.01, June 2026.**
2. **International Society of Biomechanics — Standards**, current page checked 2026-11-20:
   - Global coordinate systems;
   - Whole body orientation;
   - Joint coordinate systems.
3. **Wu & Cavanagh 1995 — ISB standardization proposal for kinematic data reporting.**
4. **Wu et al. 2002 — ISB joint coordinate system recommendations, Part I**, Journal of Biomechanics 35:543–548.
5. **Wu et al. 2005 — ISB joint coordinate system recommendations, Part II**, Journal of Biomechanics 38:981–992.
6. **Cereatti et al. 2024 — ISB recommendations on definition, estimation and reporting of joint kinematics using wearable inertial measurement technology**, Journal of Biomechanics 173:112225, PMID 39032224.
7. **Le et al. 2025 — Cardan sequence selection influences subtalar and talonavicular joint kinematics**, Journal of Biomechanics 192:112948, PMID 40967106.

---

# 36. Confidence

### HIGH

- reference-frame dependence of kinematics;
- global vs local/segment frame distinction;
- relative-segment basis of joint kinematics;
- orientation vs position distinction;
- pose = position + orientation concept;
- rotation-matrix representation concept;
- Euler/Cardan sequence dependence;
- scalar ROM boundary;
- orientation-trajectory vs point-trajectory distinction.

### HIGH concept / implementation deferred

- quaternion as orientation representation;
- singularity/gimbal-lock warning;
- exact coordinate transformations.

### Deferred

- joint-specific frame definitions;
- quaternion/matrix numerical algorithms;
- helical/screw-axis analysis;
- sensor-to-segment calibration;
- motion-capture reconstruction;
- filtering and drift;
- detailed singularity handling;
- validity/reliability.

---

# 37. Status

**MEC-02/PASS-03 — GAP CONTENT COMPLETE.**

Results:

- reference/coordinate-frame blocker repaired;
- 3D-orientation representation blocker repaired;
- Area 06 Section 2 corrected from **14 to 16 exact items**;
- revised MEC-02 content coverage = **16/16**;
- PASS-03 gap checks = **14/14 PASS**;
- canonical MEC-02 finding still **not created**;
- `CLOSED_FOR_PRACTICE` still **not assigned**.

Next one block:

**MEC-02/PASS-04 — repeat independent closure audit and synthesis after coordinate/orientation repair.**

STOP after this PASS.
