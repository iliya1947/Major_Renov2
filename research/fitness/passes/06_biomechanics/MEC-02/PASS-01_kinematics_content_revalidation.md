# MEC-02 / PASS-01 — Kinematics content revalidation

Дата: 2026-11-20  
Статус: **CONTENT PASS COMPLETE — INDEPENDENT CLOSURE/GAP AUDIT PENDING**  
Область: 06 — Biomechanics  
Topic: MEC-02 — Kinematics

## 0. Source-of-truth / exact scope

Area 06 Section 2 contains **14 exact items**:

1. Position.
2. Displacement.
3. Distance.
4. Velocity.
5. Acceleration.
6. Angular displacement.
7. Angular velocity.
8. Angular acceleration.
9. Planes of motion.
10. Axes of rotation.
11. Joint angles.
12. Segment trajectories.
13. Range of motion.
14. Temporal characteristics of movement.

MEC-02 answers:

**how position/orientation changes through time.**

It does not answer:

**what forces/torques caused the motion.**

That causal/mechanical layer belongs downstream:
- MEC-03 — Kinetics;
- MEC-04 — Torque / moment arms;
- MEC-12 — Joint biomechanics;
- MEC-21 — Measurement/modeling limits.

---

## 1. Qualification purpose / Question Card

### Decision

Can Nika describe human or implement motion correctly before inferring:
- forces;
- moments;
- muscle demand;
- training stimulus;
- injury risk?

### Question type

**Foundational kinematics / geometric description / reference-frame discipline / non-equivalence.**

### Population/context

Human movement, resistance exercise and sport movement at ordinary training scales.

### Critical outcomes

1. Correct linear kinematic definitions.
2. Correct angular kinematic definitions.
3. Correct distance/displacement and speed/velocity distinctions.
4. Explicit reference-frame dependence.
5. Correct use of anatomical planes and axes.
6. Correct interpretation limits for joint angles and ROM.
7. Explicit separation of motion description from kinetic causation.
8. Correct routing of measurement/model uncertainty to MEC-21/TST.

### Evidence path

This is primarily a mechanics/standardization question, not an intervention-effect question.

Priority:

1. current SI/metrology;
2. official foundational mechanics;
3. current professional biomechanics scope;
4. International Society of Biomechanics reporting standards;
5. current human-biomechanics literature where 3D rotation convention materially affects interpretation.

### Closure criterion for PASS-01

For each exact item:

- definition resolved;
- reference/convention requirement resolved;
- major non-equivalence/misuse resolved.

A separate independent closure/gap audit remains mandatory.

---

# PART A — CROSS-CUTTING PREREQUISITE

## 2. Reference frames are required for kinematics

A position is not meaningful without a reference frame.

A kinematic description must define, explicitly or implicitly:

1. origin;
2. axis directions;
3. coordinate-frame orientation;
4. global vs local/segment frame;
5. time reference;
6. sign convention.

Examples:

- barbell position relative to room/global frame;
- wrist position relative to shoulder;
- forearm orientation relative to upper arm;
- center-of-mass trajectory relative to ground.

Canonical rule:

**position, displacement, velocity and angle are reference-conditioned quantities.**

Confidence: **HIGH**.

---

## 3. Global vs local / segment coordinates

### Global frame

Used for motion relative to environment:
- vertical;
- horizontal;
- direction of progression;
- ground/lab frame.

### Segment/local frame

Attached to:
- pelvis;
- femur;
- tibia;
- upper arm;
- forearm;
- implement.

Joint motion is commonly expressed as:
- distal segment orientation/translation;
relative to
- proximal segment.

ISB standards explicitly formalize anatomical/joint coordinate systems for reporting human joint motion.

Canonical rule:

**global segment orientation ≠ joint angle.**

A forearm can change global orientation while elbow relative angle changes differently or not at all.

Confidence: **HIGH**.

---

## 4. Coordinate frames are cross-cutting, not yet a new exact map item

The current Section 2 does not contain an explicit item named:

- reference frame;
- coordinate system;
- segment coordinate system.

However, these are logically required by:
- position;
- planes/axes;
- joint angles;
- trajectories.

PASS-01 therefore treats coordinate-frame discipline as a **cross-cutting prerequisite**.

PASS-02 must independently decide whether this should:
- remain an implicit prerequisite;
or
- become an explicit source-map item.

No source-map mutation is made in PASS-01.

---

# ITEM 1 — POSITION

## 5. Position

Position locates a point relative to a chosen origin/reference frame.

In Cartesian 3D form:

[
mathbf r(t)=
egin{bmatrix}
x(t)\
y(t)\
z(t)
end{bmatrix}
]

SI unit for linear position:

[
mathrm{m}
]

Position is generally vector-valued in a coordinate system.

Examples:
- hand marker position;
- barbell center position;
- segment COM position;
- whole-body COM position.

### Boundary

Position does not tell:
- path traveled;
- velocity;
- force;
- effort.

Canonical rule:

**position ≠ displacement ≠ distance.**

Confidence: **HIGH**.

---

# ITEM 2 — DISPLACEMENT

## 6. Linear displacement

Displacement is the change in position:

[
Deltamathbf r=
mathbf r_2-mathbf r_1
]

SI:

[
mathrm{m}
]

It is a vector.

Displacement depends only on:
- initial position;
- final position;

for the chosen interval/frame.

It does **not** depend on the path taken between them.

## 7. Zero displacement does not mean no movement

If a dumbbell:
- starts at position A;
- moves through a repetition;
- returns to A;

then net displacement for the complete interval may be zero while:
- distance traveled is positive;
- work can have positive and negative phases;
- joint/segment trajectories were non-zero.

Canonical rule:

**zero net displacement ≠ zero movement.**

Confidence: **HIGH**.

---

# ITEM 3 — DISTANCE

## 8. Distance

Distance is scalar path length.

For a trajectory (mathbf r(t)):

[
s=int |mathrm dmathbf r|
]

SI:

[
mathrm{m}
]

Distance is:
- non-negative;
- path dependent.

For a given interval:

[
sgeq |Deltamathbf r|
]

with equality only when the path corresponds to the direct displacement without reversals/detours.

## 9. Distance vs displacement

Example:

one dumbbell curl:
- start and finish at same spatial point;
- full-rep displacement over entire cycle ≈ 0;
- traveled distance > 0.

Canonical rule:

**distance ≠ magnitude of displacement except under specific path conditions.**

Confidence: **HIGH**.

---

# ITEM 4 — VELOCITY

## 10. Velocity

Instantaneous linear velocity:

[
mathbf v=
rac{dmathbf r}{dt}
]

Average velocity:

[
mathbf v_{avg}=
rac{Deltamathbf r}{Delta t}
]

SI:

[
mathrm{m/s}
]

Velocity is a vector.

Speed:

[
v_{speed}=|mathbf v|
]

is scalar.

## 11. Average velocity vs average speed

For a full repetition returning to its starting position:

[
Deltamathbf rapprox0
]

so average velocity over the entire cycle may be near zero.

Average speed remains positive because path length was traveled.

Canonical rule:

**average velocity ≠ average speed.**

Confidence: **HIGH**.

---

# ITEM 5 — ACCELERATION

## 12. Linear acceleration

Instantaneous acceleration:

[
mathbf a=
rac{dmathbf v}{dt}
]

Average:

[
mathbf a_{avg}=
rac{Deltamathbf v}{Delta t}
]

SI:

[
mathrm{m/s^2}
]

Acceleration can reflect:
- speed increase;
- speed decrease;
- direction change;
- combinations.

## 13. Curvilinear movement

A point moving at constant speed along a curved path can have non-zero acceleration.

Therefore:

**constant speed ≠ zero acceleration.**

This is important in:
- limb arcs;
- circular implement motion;
- curved bar/segment trajectories.

## 14. Kinematics vs kinetics boundary

Kinematics can state:

> “the bar accelerated upward.”

It cannot alone state:

> “muscle X generated force Y.”

Force inference requires:
- system definition;
- mass;
- external forces;
- geometry;
- kinetic model.

Canonical rule:

**acceleration describes motion change; force explains dynamics only after the kinetic model is specified.**

Confidence: **HIGH**.

---

# ITEM 6 — ANGULAR DISPLACEMENT

## 15. Angular displacement

For simple planar/fixed-axis rotation:

[
Delta	heta=	heta_2-	heta_1
]

SI coherent angle unit:

[
mathrm{rad}
]

Degrees are widely used for reporting human joint angles, but radian is the coherent SI angle unit.

Current BIPM SI Brochure v4.01 retains the radian treatment introduced/refined in recent SI revisions.

## 16. Angular displacement vs linear displacement

NASA's current angular-motion material explicitly distinguishes them.

For a point at radius (r) in ideal fixed-axis rotation:

[
s=r	heta
]

Thus:
- same angular displacement;
- different radius;

produces different linear arc distance.

Canonical rule:

**angular displacement ≠ linear displacement.**

Confidence: **HIGH**.

---

## 17. Finite 3D rotations are not simple scalar angle subtraction

For planar motion, one signed angle can be sufficient.

For 3D segment orientation:
- rotations are not generally commutative;
- representation depends on chosen convention;
- orientation change cannot always be interpreted as three independent planar rotations.

Therefore MEC-02 must distinguish:

- true physical orientation change;
from
- a chosen angle parameterization.

Detailed representation/math remains MEC-21.

Confidence: **HIGH**.

---

# ITEM 7 — ANGULAR VELOCITY

## 18. Angular velocity

For simple fixed-axis rotation:

[
omega=
rac{d	heta}{dt}
]

SI:

[
mathrm{rad/s}
]

Angular velocity has axis/direction information.

For ideal rigid fixed-axis rotation:

[
v_t=omega r
]

so points farther from the axis have greater tangential speed at the same angular velocity.

## 19. Joint angular velocity vs endpoint velocity

A high joint angular velocity does not uniquely determine:
- hand speed;
- bar speed;
- endpoint trajectory;

because those depend on:
- segment lengths;
- multi-joint coordination;
- instantaneous geometry.

Canonical rule:

**joint angular velocity ≠ endpoint linear velocity.**

Confidence: **HIGH**.

---

# ITEM 8 — ANGULAR ACCELERATION

## 20. Angular acceleration

For simple fixed-axis rotation:

[
alpha=
rac{domega}{dt}
]

SI:

[
mathrm{rad/s^2}
]

Angular acceleration describes:
- change in angular speed;
- direction/sign change of angular velocity.

It does not by itself specify torque.

Torque relation belongs MEC-01/MEC-03/MEC-04 and requires inertia/system assumptions.

Canonical rule:

**angular acceleration ≠ torque.**

Confidence: **HIGH**.

---

# ITEM 9 — PLANES OF MOTION

## 21. Anatomical planes

Common human-movement reference planes:

1. **Sagittal plane**
   - divides body into left/right portions;
   - commonly used to describe flexion/extension-dominant motions.

2. **Frontal/coronal plane**
   - divides anterior/posterior portions;
   - commonly used for abduction/adduction-dominant motions.

3. **Transverse/horizontal plane**
   - divides superior/inferior portions;
   - commonly used for axial-rotation-dominant motions.

These are reference constructs.

## 22. Motion is not forced to remain in one anatomical plane

Human movement is commonly 3D.

A squat, press, row or curl may be described as:
- sagittal-dominant;
- frontal-dominant;
- transverse-dominant;

without being perfectly planar.

Canonical rule:

**“sagittal-plane exercise” usually means sagittal-dominant description, not zero motion in other planes.**

Confidence: **HIGH**.

---

# ITEM 10 — AXES OF ROTATION

## 23. Anatomical axes

For idealized planar rotation, an axis is perpendicular to the plane.

Common descriptive pairings:

- sagittal-plane rotation ↔ mediolateral/frontal axis;
- frontal-plane rotation ↔ anteroposterior/sagittal axis;
- transverse-plane rotation ↔ longitudinal/vertical axis.

This is an idealized anatomical convention.

## 24. Actual joint axes need not be fixed

Biological joints are not perfect mechanical hinges.

An instantaneous/floating/helical axis may:
- shift;
- change orientation;
- differ across joint angle or task.

Therefore a named anatomical axis is often a useful description, not proof of a perfectly fixed anatomical hinge.

Canonical rule:

**anatomical axis ≠ necessarily a fixed physical joint axis.**

Confidence: **HIGH**.

---

# ITEM 11 — JOINT ANGLES

## 25. Joint angle as relative segment orientation

A joint angle is generally a description of:
- distal segment orientation;
relative to
- proximal segment orientation;

under a defined convention.

It is not simply a global segment angle.

ISB joint-coordinate recommendations exist specifically because reproducible joint-angle reporting requires standardized segment coordinate systems and conventions.

## 26. 3D joint angles require a rotation convention

Common 3D reporting uses:
- Euler angles;
- Cardan angles;
- joint coordinate systems.

Finite 3D rotations are sequence dependent.

A current 2025 study on ankle-complex kinematics demonstrated that Cardan-sequence selection can materially change reported joint kinematic components from the same underlying motion.

Therefore:

**a 3D joint-angle number is not fully interpretable without the coordinate systems and rotation sequence/convention.**

Confidence: **HIGH**.

## 27. Joint angle vs anatomical motion label

Terms such as:
- flexion;
- abduction;
- internal rotation

are interpretable only relative to:
- defined axes;
- segment frames;
- sign conventions.

Canonical rule:

**movement label alone does not fully specify the 3D angle calculation.**

Confidence: **HIGH**.

---

# ITEM 12 — SEGMENT TRAJECTORIES

## 28. Trajectory

A trajectory is the time-ordered path of:
- a point;
- marker;
- segment reference point;
- center of mass;
- implement point.

Mathematically:

[
mathbf r(t)
]

and derived quantities may include:
- velocity trajectory;
- acceleration trajectory.

## 29. Same endpoints, different trajectories

Two repetitions can have:
- same start;
- same finish;
- same net displacement;

but different:
- path;
- distance;
- velocity profile;
- acceleration profile;
- joint coordination.

Canonical rule:

**endpoint position/displacement does not determine the trajectory.**

Confidence: **HIGH**.

## 30. Segment trajectory vs joint angle

A segment can follow a similar global trajectory while joint coordination differs.

Likewise similar joint angles can accompany different endpoint paths due to:
- other joints;
- trunk motion;
- anthropometry.

Canonical rule:

**segment/endpoint trajectory ≠ joint-angle pattern.**

Confidence: **HIGH**.

---

# ITEM 13 — RANGE OF MOTION

## 31. Kinematic ROM

For a defined angle/position variable:

[
ROM=x_{max}-x_{min}
]

where (x) may be:
- angular;
- linear;

under the defined task and convention.

ROM is therefore an **excursion measure**.

## 32. ROM is not one universal property

Need to distinguish:

- anatomical passive ROM;
- active joint ROM;
- task/exercise ROM;
- segment angular excursion;
- implement travel distance.

Example:

A deeper squat may increase:
- knee excursion;
- hip excursion;
- bar displacement;

but these are not interchangeable ROM variables.

Canonical rule:

**“ROM” must name what quantity and what task is ranged.**

Confidence: **HIGH**.

## 33. Kinematic ROM vs measurement validity

MEC-02 defines what ROM means.

TST/MEC-21 own:
- device validity;
- goniometry/video/motion-capture accuracy;
- repeatability;
- MDC/error.

Canonical rule:

**ROM construct ≠ proof that a measurement method measures it accurately.**

Confidence: **HIGH**.

---

# ITEM 14 — TEMPORAL CHARACTERISTICS OF MOVEMENT

## 34. Time-domain descriptors

Useful kinematic temporal variables can include:

- total movement/repetition duration;
- concentric/eccentric/hold phase duration;
- event timing;
- time to peak velocity;
- time to peak displacement;
- cadence/frequency;
- duty cycle;
- stance/contact/flight time in locomotor tasks;
- relative phase timing.

SI time unit:

[
mathrm{s}
]

## 35. Temporal characteristic vs tempo prescription

MEC-02 may describe:

> “eccentric phase lasted 2.1 s.”

It does not prescribe:

> “2.1 s eccentric is optimal.”

Prescription belongs:
- PRO;
- TEC;
with chronic evidence and task goal.

Canonical rule:

**measured movement timing ≠ optimal tempo prescription.**

Confidence: **HIGH**.

---

# PART B — CURRENT STANDARDIZATION / PROFESSIONAL CHECK

## 36. Current BIPM status

Current BIPM page checked 2026-11-20:

**SI Brochure, 9th edition, version 4.01, June 2026** remains the authoritative current SI reference.

Relevant units:

- position/displacement/distance → m;
- velocity → m/s;
- acceleration → m/s²;
- time → s;
- angle → rad;
- angular velocity → rad/s;
- angular acceleration → rad/s².

Confidence: **HIGH**.

---

## 37. Current NSCA professional scope

Current NSCA CSCS exam description keeps **Biomechanics** inside Exercise Science / Scientific Foundations.

The current official Certification Handbook effective 2025 specifically lists:

**Kinematic principles of movement**, including examples:
- anatomical planes of movement;
- joint angles;
- velocity.

This independently supports MEC-02 as a required professional foundation rather than an optional measurement specialty.

It does not establish:
- one universal coordinate system;
- one best exercise technique;
- one valid measurement method.

Confidence: **HIGH professional-scope check**.

---

## 38. ISB standardization check

The International Society of Biomechanics continues to maintain joint-coordinate-system standards/recommendations for reporting human joint motion.

Core implication:

**joint kinematics require defined coordinate systems and reporting conventions.**

This is particularly important for:
- pelvis/hip;
- knee;
- ankle/foot;
- shoulder;
- elbow;
- wrist/hand.

MEC-02 does not need to reproduce all joint-specific ISB definitions.

Those details belong:
- MEC-12 joint biomechanics;
- MEC-21 measurement/modeling.

Confidence: **HIGH**.

---

## 39. Current 3D rotation-sequence evidence

Current 2025 ankle-complex work directly tested Cardan-sequence selection and found that the sequence can materially affect reported joint kinematics, particularly for more multiplanar joints.

This supports a durable warning:

**reported joint-angle components are representation dependent even when the underlying physical motion is unchanged.**

It does not imply:
- all sequences are equally useful;
- ISB conventions should be ignored;
- joint angles are meaningless.

It means the convention must be stated and interpreted.

Confidence: **HIGH for sequence-dependence / context-dependent magnitude**.

---

# PART C — KINEMATICS VS NEIGHBORING DOMAINS

## 40. MEC-01 boundary

MEC-01 owns:
- vector basics;
- velocity/acceleration definitions;
- angular velocity/acceleration foundations.

MEC-02 owns:
- motion description through space/time;
- trajectories;
- planes/axes;
- joint-angle/ROM descriptions.

Canonical handoff:

**MEC-01 defines quantities; MEC-02 organizes them into motion description.**

---

## 41. MEC-03 / MEC-04 boundary

MEC-02 describes motion.

MEC-03/MEC-04 explain:
- forces;
- moments;
- torque;
- kinetic consequences.

Forbidden chain:

[
	ext{joint angle/velocity} Rightarrow 	ext{known muscle force}
]

without a kinetic/model layer.

Canonical rule:

**kinematics ≠ kinetics.**

---

## 42. MEC-12 boundary

MEC-02 owns generic joint-angle logic.

MEC-12 owns:
- shoulder-specific mechanics;
- elbow;
- radioulnar;
- wrist;
- spine;
- hip;
- knee;
- ankle/foot;
- joint loading.

No joint-specific “normal” angle or technique is established in MEC-02.

---

## 43. MEC-21 / TST boundary

MEC-02 defines:
- what motion variables mean.

MEC-21/TST own:
- whether a camera/IMU/motion-capture system estimates them accurately;
- filtering;
- marker/soft-tissue artifact;
- sampling rate;
- coordinate calibration;
- 2D vs 3D error;
- validity/reliability.

Canonical rule:

**kinematic construct ≠ measurement quality.**

---

## 44. PRO / TEC boundary

Kinematics can show:
- path;
- ROM;
- velocity;
- phase timing;
- angle sequence.

It cannot alone establish:
- hypertrophy superiority;
- strength superiority;
- safety;
- “correct” technique;
- optimal tempo.

Those require:
- physiology;
- kinetics;
- tissue loading;
- outcome evidence;
- task goal;
- individual constraints.

Canonical rule:

**kinematic difference ≠ training superiority.**

---

# PART D — FUNDAMENTAL NON-EQUIVALENCES

## 45. Permanent distinctions

MEC-02 rejects:

1. position = displacement.
2. displacement = distance.
3. distance = magnitude of displacement in all paths.
4. velocity = speed.
5. average velocity = average speed.
6. velocity = acceleration.
7. constant speed = zero acceleration.
8. angular displacement = linear displacement.
9. angular velocity = endpoint velocity.
10. angular acceleration = torque.
11. anatomical plane = physical constraint forcing planar motion.
12. named anatomical axis = necessarily fixed physical joint axis.
13. global segment angle = joint angle.
14. movement label = full 3D joint-angle definition.
15. joint angle = convention-free quantity.
16. trajectory = endpoint displacement.
17. trajectory = joint-angle pattern.
18. ROM = one universal anatomical property.
19. exercise ROM = passive joint ROM.
20. ROM construct = valid measurement.
21. phase duration = optimal tempo.
22. kinematics = kinetics.
23. kinematic difference = muscle-force difference.
24. kinematic difference = training superiority.

---

# PART E — EXACT 14-ITEM CONTENT AUDIT

## 46. Audit structure

Each exact Section 2 item was checked for:

1. definition;
2. reference/convention requirement;
3. major misuse/non-equivalence.

| Item | Definition | Reference/convention | Boundary | Result |
|---|---:|---:|---:|---:|
| 1 Position | PASS | PASS | PASS | PASS |
| 2 Displacement | PASS | PASS | PASS | PASS |
| 3 Distance | PASS | PASS | PASS | PASS |
| 4 Velocity | PASS | PASS | PASS | PASS |
| 5 Acceleration | PASS | PASS | PASS | PASS |
| 6 Angular displacement | PASS | PASS | PASS | PASS |
| 7 Angular velocity | PASS | PASS | PASS | PASS |
| 8 Angular acceleration | PASS | PASS | PASS | PASS |
| 9 Planes of motion | PASS | PASS | PASS | PASS |
| 10 Axes of rotation | PASS | PASS | PASS | PASS |
| 11 Joint angles | PASS | PASS | PASS | PASS |
| 12 Segment trajectories | PASS | PASS | PASS | PASS |
| 13 Range of motion | PASS | PASS | PASS | PASS |
| 14 Temporal characteristics | PASS | PASS | PASS | PASS |

**PASS-01 content audit = 42/42 resolved.**

Exact current Section 2:

**14/14 content-covered.**

---

# PART F — ESTABLISHED FINDINGS

## 47. Stable findings

1. Kinematics describes motion without requiring causal force explanation.
2. All position/orientation statements are reference-frame dependent.
3. Displacement is vector endpoint change; distance is scalar path length.
4. Velocity is displacement-rate; speed is its magnitude.
5. Acceleration is velocity-change and can exist at constant speed.
6. Angular and linear motion variables are non-equivalent but geometrically related under defined models.
7. Anatomical planes/axes are reference constructs, not proof that real human motion is strictly planar or fixed-axis.
8. Joint angle is a relative segment-orientation description requiring coordinate systems/convention.
9. 3D finite joint-angle components depend on rotation sequence/convention.
10. Segment/endpoint trajectory is distinct from joint-angle pattern.
11. ROM must specify the actual variable/task/convention.
12. Temporal descriptors describe timing; they do not prescribe optimal tempo.
13. Measurement validity/error is downstream MEC-21/TST, not resolved by defining the construct.
14. Kinematic differences alone cannot establish muscle force, adaptation superiority or injury risk.

---

# PART G — UNRESOLVED QUESTIONS RESERVED FOR PASS-02

## 48. Closure/gap questions

No exact Section 2 content item is unresolved at content level.

However PASS-02 must independently test:

1. Should **reference frame / coordinate system** become an explicit Section 2 source-map item rather than remain cross-cutting prerequisite?
2. Should **orientation / rotation representation** become an explicit item distinct from angular displacement?
3. Are sagittal/frontal/transverse plane definitions sufficiently precise for the project without overclaiming fixed anatomical axes?
4. Does the project need an explicit **instantaneous helical/screw axis** concept at MEC-02 level, or can it remain MEC-12/MEC-21?
5. Is generic `ROM = max-min` adequate where movement is cyclic/multidimensional?
6. Should trajectory explicitly include orientation trajectory, not only point-position trajectory?
7. Are any current MEC-12/16/17/21 map items duplicating rather than depending on MEC-02?
8. Can canonical MEC-02 be synthesized without adding a missing source-map concept?

If a real foundational gap is found, closure must be refused and a dedicated repair pass opened.

---

# PART H — SOURCE REGISTER

## Current SI / official mechanics

1. **BIPM — The International System of Units (SI), 9th edition, version 4.01, June 2026**  
   DOI: 10.59161/AUEZ1291.

2. **NASA Glenn — Aircraft Translations**  
   Used for velocity/acceleration and average vs instantaneous distinction.

3. **NASA Glenn — Angular Displacement, Velocity, Acceleration**  
   Used for angular displacement/velocity/acceleration and angular-vs-linear boundary.

## Biomechanics standardization

4. **International Society of Biomechanics — Standards / Joint Coordinate Systems**  
   Current standards index checked 2026-11-20.

5. **Wu et al. ISB joint-coordinate recommendations**  
   Retained as reporting-standard foundation for joint motion.

6. **Le et al. 2025 — Cardan Sequence Selection Influences Subtalar and Talonavicular Joint Kinematics**  
   Current empirical evidence that rotation sequence can materially change reported 3D joint-angle components from the same underlying motion.

## Current professional scope

7. **NSCA — CSCS Exam Description**, current page checked 2026-11-20.

8. **NSCA Certification Handbook**, effective January 1, 2025, current official handbook found on NSCA site.  
   Detailed outline retains:
   - kinematic principles of movement;
   - anatomical planes;
   - joint angles;
   - velocity.

9. **NSCA — Essentials of Strength Training and Conditioning, 5th Edition**  
   Chapter 2 remains Biomechanics of Resistance Exercise.

---

# 49. Confidence

### HIGH

- position/displacement/distance distinctions;
- velocity/speed distinction;
- acceleration definitions;
- angular kinematic definitions;
- reference-frame dependence;
- planes/axes as coordinate conventions;
- joint angles as relative segment orientation;
- sequence dependence of finite 3D angle representations;
- trajectory/ROM/time-descriptor distinctions;
- kinematics vs kinetics boundary.

### HIGH concept / convention-dependent implementation

- joint coordinate systems;
- exact joint-angle components;
- anatomical axis definitions.

### Deferred

- joint-specific coordinate-system implementation;
- quaternion/rotation-matrix/helical-axis math;
- sensor/camera/motion-capture error;
- filtering;
- 2D-to-3D inference;
- exact ROM testing protocols;
- joint-specific “normal” ranges.

---

# 50. Status

**MEC-02/PASS-01 — CONTENT PASS COMPLETE.**

Results:

- exact Area 06 Section 2 = **14/14 content-covered**;
- content audit = **42/42 resolved**;
- coordinate/reference-frame discipline made explicit as a cross-cutting prerequisite;
- no source-map mutation made yet;
- canonical MEC-02 finding **not created**;
- `CLOSED_FOR_PRACTICE` **not assigned**.

Next one block:

**MEC-02/PASS-02 — independent closure/gap audit and synthesis.**

STOP after this PASS.
