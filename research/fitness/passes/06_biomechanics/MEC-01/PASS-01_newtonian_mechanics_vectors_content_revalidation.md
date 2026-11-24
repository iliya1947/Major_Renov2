# MEC-01 / PASS-01 — Newtonian mechanics / vectors content revalidation

Дата: 2026-11-20  
Статус: **CONTENT PASS COMPLETE — AUDIT/SYNTHESIS PENDING**  
Область: 06 — Biomechanics  
Topic: MEC-01 — Newtonian mechanics / vectors

## 0. Source-of-truth / exact scope

Area 06 Section 1 contains **15 exact items**:

1. Mass.
2. Force.
3. Weight.
4. Acceleration.
5. Momentum.
6. Impulse.
7. Work.
8. Power.
9. Energy.
10. Velocity.
11. Angular velocity.
12. Linear acceleration.
13. Angular acceleration.
14. Newton's laws.
15. Vectors and resultant forces.

This PASS establishes the mechanics language that later MEC topics require.

It does **not** yet deeply own:

- detailed kinematics → MEC-02;
- force categories / ground-reaction / joint reaction → MEC-03;
- torque / moment arms → MEC-04;
- lever systems → MEC-05;
- COM / stability → MEC-06;
- tissue stress/strain → MEC-07;
- muscle-tendon mechanics → MEC-08;
- resistance-source mechanics → MEC-09;
- free-weight mechanics → MEC-10;
- resistance profiles / strength curves → MEC-11;
- joint inverse dynamics → MEC-12;
- velocity/inertia/ballistic application → MEC-17;
- full mechanical-work/power analysis → MEC-18;
- exercise-specific analysis → MEC-19;
- modeling/measurement uncertainty → MEC-21.

MEC-01 must therefore be deep enough to prevent category errors later, but it must not prematurely replace those downstream topics.

---

## 1. Qualification purpose / Question Card

### Decision

Can Nika correctly translate an exercise into basic mechanical quantities before making any claim about:
- force;
- acceleration;
- momentum;
- impulse;
- work;
- power;
- energy;
- vector resultants?

### Question type

**Foundational mechanics / definition / dimensional consistency / non-equivalence.**

### Population/context

Classical human movement and resistance exercise at ordinary training speeds, sizes and gravitational conditions.

### Critical outcomes

1. Correct definitions.
2. Correct SI quantities/units.
3. Correct scalar/vector status.
4. Correct Newtonian relationships.
5. Explicit conditions under which simplified equations are valid.
6. Explicit separation of commonly confused quantities.
7. Correct routing to later biomechanical topics.

### Evidence path

This is not an intervention-effect question.

Priority is therefore:

1. current authoritative SI/metrology documents;
2. official classical-mechanics educational/engineering references;
3. current professional strength-and-conditioning scope documents;
4. downstream empirical biomechanics only when a definition cannot be settled from mechanics.

### Closure criterion for PASS-01

For every exact Section 1 item:

- concept resolved;
- unit/dimension resolved;
- at least one major non-equivalence or misuse resolved.

A separate closure audit remains mandatory.

---

## 2. Current-source check

### BIPM — current SI

The current valid SI reference is:

**BIPM, The International System of Units (SI), 9th edition, version 4.01, June 2026.**

Current SI relationships relevant here:

- mass → kilogram, kg;
- velocity → m/s;
- acceleration → m/s²;
- angular velocity → rad/s;
- angular acceleration → rad/s²;
- force → newton, N = kg·m/s²;
- work / energy → joule, J = N·m;
- power → watt, W = J/s.

Important current SI clarification:

**the unit alone does not define the physical quantity.**

Different quantities can share a unit/dimension while remaining conceptually different.

This is directly relevant to:
- work vs energy;
- torque vs energy downstream;
- angular quantities and explicit radian usage.

### NIST

Current NIST SI pages agree with:
- force = N;
- work/energy = J;
- power = W;
- standard free-fall acceleration reference (g_n = 9.80665 mathrm{m/s^2}).

The project does not treat (g_n) as the exact local gravitational acceleration at every location.

### NASA Glenn / NASA Science

Current NASA reference pages were checked for:
- Newton's three laws;
- force as rate of momentum change;
- constant-mass reduction to (F=ma);
- mass vs weight;
- velocity and acceleration;
- vector addition/components;
- work;
- power;
- angular displacement/velocity/acceleration;
- impulse.

### NSCA

Current NSCA CSCS architecture explicitly places **Biomechanics** within Exercise Science.

NSCA Essentials of Strength Training and Conditioning, 5th Edition:
- Chapter 2 = Biomechanics of Resistance Exercise;
- later applied chapters separate testing, technique and program design.

Project implication:

**basic mechanics is a scientific foundation, not itself an exercise prescription.**

---

# ITEM 1 — MASS

## 3. Mass

For current trainer-level classical mechanics, mass is treated as a scalar inertial property of the body/system.

SI unit:

[
mathrm{kg}
]

Mass is not:
- force;
- weight;
- energy;
- load in newtons;
- automatically the resistance experienced at a joint.

For a constant-mass object under net external force:

[
sum mathbf{F}_{ext}=mmathbf{a}
]

Mass is therefore part of the relationship between net force and acceleration.

### Training boundary

A dumbbell labeled “20 kg” is conventionally specifying **mass**, not a 20-newton force.

Near Earth, its gravitational force magnitude is approximately:

[
W=mg
]

Using standard gravity as a reference:

[
20 mathrm{kg}	imes9.80665 mathrm{m/s^2}approx196.1 mathrm{N}
]

That does **not** mean:
- the hand always experiences exactly 196.1 N;
- the joint moment is fixed;
- the muscle force is 196.1 N.

Those depend on acceleration, geometry, moment arms and system constraints.

### Canonical rule

**kg is a mass unit; N is a force unit.**

Confidence: **HIGH**.

---

# ITEM 2 — FORCE

## 4. Force

Force is a vector quantity.

The general Newtonian translational relationship is:

[
sum mathbf{F}_{ext}=rac{dmathbf{p}}{dt}
]

For constant mass:

[
sum mathbf{F}_{ext}=mmathbf{a}
]

SI unit:

[
1 mathrm{N}=1 mathrm{kg,m/s^2}
]

Force has:
- magnitude;
- direction;
- point/line of application when applied to rigid-body mechanics.

MEC-01 owns the vector concept.

Detailed:
- external vs internal force;
- GRF;
- muscle/tendon/joint-reaction forces

remain MEC-03/MEC-12.

## 5. Net force vs one force

Newton's second law uses the **net external force** on the defined system.

Therefore:

[
mathbf{F}_{net}=sum_i mathbf{F}_i
]

not:

[
F_{net}=sum_i |mathbf{F}_i|
]

unless all relevant forces happen to align in the same direction/sign.

### Canonical rule

**motion responds to the vector resultant, not the arithmetic sum of force magnitudes.**

Confidence: **HIGH**.

---

# ITEM 3 — WEIGHT

## 6. Weight

Weight is gravitational force.

Near Earth:

[
mathbf{W}=mmathbf{g}
]

Magnitude:

[
W=mg
]

SI unit:

[
mathrm{N}
]

NASA's current mechanics material explicitly separates mass and weight:
- mass remains the body's inertial property;
- weight changes with the gravitational field.

## 7. Standard gravity vs local gravity

The conventional standard value is:

[
g_n=9.80665 mathrm{m/s^2}
]

This is a reference value.

Actual local (g):
- varies with location/altitude;
- is not exactly equal to (g_n) everywhere.

For ordinary resistance-training calculations, the difference is usually practically negligible relative to much larger biomechanical uncertainties.

### Canonical rules

- **mass ≠ weight**;
- **kg ≠ N**;
- **weight is one force, not synonymous with all external load**.

Confidence: **HIGH**.

---

# ITEM 4 — ACCELERATION

## 8. Acceleration as the general concept

Acceleration is the time rate of change of velocity:

[
mathbf{a}=rac{dmathbf{v}}{dt}
]

Average acceleration:

[
mathbf{a}_{avg}=rac{Deltamathbf{v}}{Delta t}
]

Because velocity is a vector, acceleration can occur through:
- change in speed;
- change in direction;
- both.

Therefore:

**constant speed does not always mean zero acceleration.**

Circular/curvilinear motion can have acceleration even when speed magnitude is unchanged.

## 9. Item 4 vs Item 12 normalization

The source map contains both:
- Item 4 — Acceleration;
- Item 12 — Linear acceleration.

These are not treated as two independent physical constructs.

Project normalization:

- Item 4 = general derivative/change-of-velocity concept;
- Item 12 = translational/linear application in ordinary Cartesian biomechanics.

This resolves the apparent duplication without mutating the source map during PASS-01.

Confidence: **HIGH**.

---

# ITEM 5 — MOMENTUM

## 10. Linear momentum

For a particle/body with mass (m) and velocity (mathbf{v}):

[
mathbf{p}=mmathbf{v}
]

Momentum is a vector.

SI unit:

[
mathrm{kg,m/s}
]

NASA's current Newton-law material uses momentum as the more general foundation of the second law.

## 11. Momentum is not force

A body can have high momentum while net force is currently zero.

Example:
- a body moving at constant velocity in an inertial frame has non-zero momentum;
- if net external force is zero, that momentum remains constant.

Force concerns the **rate of momentum change**:

[
mathbf{F}_{net}=rac{dmathbf{p}}{dt}
]

### Training implication

A moving barbell having momentum does not tell us the instantaneous force applied by the athlete without knowing how momentum is changing.

### Canonical rule

**momentum ≠ force.**

Confidence: **HIGH**.

---

# ITEM 6 — IMPULSE

## 12. Impulse

Impulse is the time integral of force:

[
mathbf{J}=int_{t_1}^{t_2}mathbf{F},dt
]

Impulse-momentum relation:

[
mathbf{J}=Deltamathbf{p}
]

For constant force:

[
mathbf{J}=mathbf{F}Delta t
]

For a varying force, average force can be used:

[
mathbf{J}=mathbf{F}_{avg}Delta t
]

SI unit:

[
mathrm{N,s}=mathrm{kg,m/s}
]

## 13. Impulse is not peak force

Two force-time curves can have:
- the same peak force but different impulse;
- the same impulse but different peak force;
- the same impulse but different duration.

Therefore:

**peak force ≠ impulse.**

This distinction is essential for later:
- force-time analysis;
- jumping;
- ballistic work;
- RFD/power interpretation.

Detailed performance application remains MEC-17/MEC-18/TST.

Confidence: **HIGH**.

---

# ITEM 7 — WORK

## 14. Mechanical work

For a force acting through displacement:

[
W=int mathbf{F}cdot dmathbf{r}
]

For constant force and straight displacement:

[
W=F scos	heta
]

where (	heta) is the angle between force and displacement.

SI unit:

[
mathrm{J}=mathrm{N,m}
]

Work is a scalar.

NASA's current work page explicitly distinguishes:
- simple aligned (Fs);
- general force component along displacement.

## 15. Work depends on displacement and direction

Important consequences:

- force with zero displacement → zero external mechanical work on that object;
- a force perpendicular to displacement contributes zero instantaneous work;
- opposing force can do negative work under the chosen system/sign convention.

This does **not** mean:
- muscle ATP turnover is zero during an isometric hold;
- internal tissue/muscle work is fully represented by external barbell work.

That metabolic/mechanical translation belongs BIO/MEC-18.

### Canonical rule

**external mechanical work ≠ metabolic energy expenditure.**

Confidence: **HIGH**.

---

# ITEM 8 — POWER

## 16. Mechanical power

Power is the rate of doing work:

[
P=rac{dW}{dt}
]

Average:

[
P_{avg}=rac{Delta W}{Delta t}
]

For translational motion of a point of force application:

[
P=mathbf{F}cdotmathbf{v}
]

SI unit:

[
mathrm{W}=mathrm{J/s}
]

Power is a scalar quantity; its sign depends on the force-velocity relationship and sign convention.

## 17. Force is not power

High force with low velocity can produce modest power.

Lower force at higher velocity can produce higher power.

Therefore:

- force ≠ power;
- velocity ≠ power;
- work ≠ power.

Later MEC-18 will handle:
- external power;
- segment/joint power;
- positive/negative power;
- measurement methods.

## 18. Mechanical power vs metabolic power

Mechanical power is not automatically:
- ATP turnover rate;
- caloric expenditure;
- metabolic power.

The quantities can be related through efficiency/energetic analysis, but they are not interchangeable.

Canonical rule:

**mechanical W ≠ metabolic W without an explicit model.**

Confidence: **HIGH**.

---

# ITEM 9 — ENERGY

## 19. Mechanical energy

Energy is a physical quantity measured in joules.

Within classical mechanics, useful mechanical forms include:
- kinetic energy;
- gravitational potential energy;
- elastic potential energy.

For translational kinetic energy:

[
K=rac12 mv^2
]

For near-Earth gravitational potential differences:

[
Delta U_gapprox mgDelta h
]

subject to the selected reference and near-uniform-(g) approximation.

## 20. Work-energy boundary

Net work changes kinetic energy:

[
W_{net}=Delta K
]

Work and energy share the joule.

They are still not the same conceptual quantity:
- energy describes state/storage/accounting;
- work describes energy transfer by force through displacement.

BIPM's current SI guidance explicitly warns that a shared unit does not make physical quantities identical.

## 21. Mechanical energy vs biological energy

Mechanical energy in MEC is not synonymous with:
- ATP pool;
- substrate energy;
- metabolic energy expenditure.

Those belong BIO.

MEC may later connect mechanical output to biological cost, but only with explicit assumptions/measurements.

### Canonical rule

**same unit J ≠ same physical construct.**

Confidence: **HIGH**.

---

# ITEM 10 — VELOCITY

## 22. Velocity

Velocity is the time derivative of position:

[
mathbf{v}=rac{dmathbf{r}}{dt}
]

Average velocity:

[
mathbf{v}_{avg}=rac{Deltamathbf{r}}{Delta t}
]

SI unit:

[
mathrm{m/s}
]

Velocity is a vector.

Speed is the magnitude:

[
speed=|mathbf{v}|
]

Therefore:
- same speed can occur with different velocity directions;
- average speed and magnitude of average velocity need not be equal.

Detailed trajectories remain MEC-02.

### Canonical rule

**speed ≠ velocity.**

Confidence: **HIGH**.

---

# ITEM 11 — ANGULAR VELOCITY

## 23. Angular velocity

For fixed-axis rotation:

[
omega=rac{d	heta}{dt}
]

SI unit:

[
mathrm{rad/s}
]

Current BIPM v4.01 explicitly lists:
- angular velocity → rad/s;
- angular acceleration → rad/s².

NASA's current rotational-motion page similarly defines angular velocity as change in angle with time.

In three-dimensional mechanics, angular velocity carries an axis/direction convention; in planar fixed-axis analysis it is often represented by signed scalar notation.

## 24. Angular vs linear velocity

For a rigid body rotating around a fixed axis:

[
v_t=omega r
]

for tangential speed at radius (r).

Thus two points on the same rigid body can have:
- the same angular velocity;
- different linear/tangential velocities because their radii differ.

### Canonical rule

**angular velocity ≠ linear velocity.**

Confidence: **HIGH**.

---

# ITEM 12 — LINEAR ACCELERATION

## 25. Linear acceleration

Linear/translational acceleration is:

[
mathbf{a}=rac{dmathbf{v}}{dt}
]

SI unit:

[
mathrm{m/s^2}
]

It applies to:
- a point;
- a segment's center of mass;
- whole-body center of mass;
- an implement point/COM,

depending on the defined system.

## 26. Average vs instantaneous acceleration

Average:

[
mathbf{a}_{avg}=rac{Deltamathbf{v}}{Delta t}
]

Instantaneous:

[
mathbf{a}=rac{dmathbf{v}}{dt}
]

A coarse average can hide:
- peak acceleration;
- sign changes;
- direction changes;
- brief braking/propulsive phases.

Detailed sampling/measurement remains MEC-21/TST.

### Canonical rule

**average acceleration ≠ instantaneous acceleration profile.**

Confidence: **HIGH**.

---

# ITEM 13 — ANGULAR ACCELERATION

## 27. Angular acceleration

For fixed-axis rotation:

[
alpha=rac{domega}{dt}
]

SI unit:

[
mathrm{rad/s^2}
]

NASA's current rotational-motion reference defines angular acceleration as change in angular velocity with time.

Angular acceleration is distinct from:
- angular velocity;
- linear acceleration;
- torque.

Torque can produce angular acceleration, but the exact relationship depends on rotational inertia and system dynamics, which are downstream MEC-03/MEC-04.

### Canonical rule

**angular acceleration ≠ torque.**

Confidence: **HIGH**.

---

# ITEM 14 — NEWTON'S LAWS

## 28. First law — inertia

Operationally in an inertial frame:

if net external force is zero, translational velocity remains constant.

That includes:
- rest;
- constant non-zero velocity.

Important correction:

**zero net force does not imply zero velocity.**

It implies zero translational acceleration.

## 29. Second law — momentum form

General particle/system translational form:

[
summathbf{F}_{ext}=rac{dmathbf{p}}{dt}
]

Constant-mass reduction:

[
summathbf{F}_{ext}=mmathbf{a}
]

Important correction:

**(F=ma) is the constant-mass form, not the most general momentum statement.**

For ordinary body segments and free weights within a short repetition, treating mass as constant is usually appropriate.

## 30. Third law — interaction pairs

If object A exerts force on object B:

[
mathbf{F}_{A	o B}=-mathbf{F}_{B	o A}
]

The pair:
- has equal magnitude;
- opposite direction;
- acts on **different bodies**.

Therefore third-law pairs do not cancel on a free-body diagram of one of the bodies.

### Training example

If a lifter pushes down/back on the ground, the ground exerts an equal/opposite interaction force on the lifter.

Detailed ground-reaction-force analysis remains MEC-03.

## 31. Common Newton-law errors

Reject:

1. “If an object is moving, a net force must be acting in the direction of motion.”
2. “No net force means the object must be stationary.”
3. “Action and reaction cancel because they are equal/opposite” on the same body's FBD.
4. “(F=ma) means one measured force alone equals (ma)” when multiple external forces exist.
5. “Force is caused by velocity.”
6. “Weight and support force are a Newton-third-law pair.”

Canonical rule:

**define the system, identify external forces, vector-sum them, then relate the resultant to momentum/acceleration.**

Confidence: **HIGH**.

---

# ITEM 15 — VECTORS AND RESULTANT FORCES

## 32. Scalar vs vector

Relevant scalars in this pass:
- mass;
- work;
- energy;
- power;
- speed.

Relevant vectors:
- force;
- weight;
- displacement;
- velocity;
- acceleration;
- momentum;
- impulse.

Angular velocity and angular acceleration carry directional/axis information.

## 33. Vector components

A vector can be decomposed into orthogonal components.

In 2D:

[
mathbf{A}=A_xhat{mathbf{i}}+A_yhat{mathbf{j}}
]

NASA's vector-addition reference explicitly notes that vector addition is performed by adding corresponding components.

For forces:

[
F_{net,x}=sum F_x
]

[
F_{net,y}=sum F_y
]

and analogously in 3D.

## 34. Resultant force

The resultant/net force is:

[
mathbf{F}_{net}=sum_imathbf{F}_i
]

It is one vector representing the combined translational effect of all included external forces on the defined system.

Resultant magnitude is generally **not**:

[
sum_i |mathbf{F}_i|
]

because directions matter.

## 35. Coordinate-system dependence

Vector components depend on:
- selected axes;
- axis orientation;
- sign convention.

The physical vector does not change merely because coordinates are rotated.

Therefore an analysis must document:
- frame;
- axes;
- direction conventions.

Detailed coordinate transformations and 3D modeling remain MEC-02/MEC-21.

### Canonical rule

**vector component ≠ vector magnitude; coordinate representation ≠ physical vector itself.**

Confidence: **HIGH**.

---

# 36. Fundamental SI / quantity table

| Quantity | Symbol | Scalar/vector | SI unit | Key boundary |
|---|---|---|---|---|
| Mass | (m) | scalar | kg | mass ≠ weight |
| Force | (mathbf F) | vector | N | one force ≠ net force |
| Weight | (mathbf W) | vector | N | weight ≠ mass |
| Velocity | (mathbf v) | vector | m/s | velocity ≠ speed |
| Linear acceleration | (mathbf a) | vector | m/s² | acceleration ≠ velocity |
| Momentum | (mathbf p) | vector | kg·m/s | momentum ≠ force |
| Impulse | (mathbf J) | vector | N·s | impulse ≠ peak force |
| Work | (W) | scalar | J | work ≠ energy expenditure |
| Power | (P) | scalar | W | power ≠ force |
| Energy | (E) | scalar | J | shared unit ≠ shared construct |
| Angular velocity | (oldsymbolomega) | axis/direction quantity | rad/s | angular ≠ linear velocity |
| Angular acceleration | (oldsymbolalpha) | axis/direction quantity | rad/s² | angular acceleration ≠ torque |

---

# 37. Core non-equivalences

MEC-01 rejects the following substitutions:

1. kg = N.
2. mass = weight.
3. one external force = net force.
4. force = momentum.
5. momentum = impulse.
6. impulse = peak force.
7. velocity = speed.
8. velocity = acceleration.
9. constant speed = zero acceleration.
10. work = energy.
11. work = power.
12. force = power.
13. mechanical work = metabolic energy expenditure.
14. mechanical power = metabolic power.
15. angular velocity = linear velocity.
16. angular acceleration = torque.
17. zero net force = zero velocity.
18. equal-and-opposite third-law pair = two forces acting on the same body.
19. vector magnitude sum = vector resultant.
20. coordinate component = whole vector.

---

# 38. Practical translation to resistance exercise

## 38.1 Dumbbell/barbell label

A kilogram label is mass.

Gravity generates a weight force approximately:

[
W=mg
]

but actual hand/bar acceleration means the total external force balance is not just (mg).

Later analysis must include:
- acceleration;
- external forces;
- resistance source;
- geometry.

## 38.2 “More force” from a heavier implement

Heavier mass increases gravitational force near Earth.

But:
- net force;
- muscle force;
- joint force;
- joint moment;
- power

are not automatically proportional to the labeled mass.

Those require later MEC layers.

## 38.3 Fast repetition

Higher velocity does not automatically mean:
- higher force;
- higher power;
- higher impulse.

Power depends on force × velocity alignment.

Impulse depends on the force-time integral.

## 38.4 Isometric hold

External displacement can be approximately zero, so external mechanical work on the implement over the hold can be near zero.

That does not mean:
- muscle force is zero;
- ATP turnover is zero;
- metabolic cost is zero.

This is a critical MEC/BIO boundary.

## 38.5 Reversal / braking

An implement can have substantial momentum before reversal.

Changing its momentum requires impulse.

Peak force depends on how quickly/over what motion strategy that momentum is changed.

Detailed eccentric/braking mechanics remain downstream.

---

# 39. Boundary with BIO

BIO owns:
- ATP turnover;
- substrate metabolism;
- energetic cost.

MEC owns:
- mechanical force;
- work;
- power;
- momentum;
- impulse.

Canonical boundary:

**external mechanical output cannot be converted into internal metabolic cost without an explicit efficiency/measurement model.**

This prevents:
- joule-to-calorie shortcuts from barbell work;
- power-to-ATP-flux shortcuts;
- isometric “zero work = zero energy cost” errors.

---

# 40. Boundary with PHY

PHY owns:
- force generation by muscle;
- excitation–contraction;
- force-length/velocity physiology.

MEC owns:
- how forces interact with geometry, mass, acceleration and external constraints.

Canonical boundary:

**muscle's physiological capacity to generate force ≠ external force requirement of the task.**

Detailed integration follows MEC-08/MEC-12.

---

# 41. Boundary with PRO / TEC

MEC-01 does not prescribe:
- exercise selection;
- load;
- tempo;
- reps;
- rest;
- technique.

It supplies mechanical constraints that PRO/TEC later use with:
- adaptation evidence;
- anatomy;
- safety;
- equipment;
- individual response.

Canonical rule:

**mechanically describable ≠ automatically preferable.**

---

# 42. Scope limits / classical-model assumptions

MEC-01 uses Newtonian mechanics because resistance exercise operates far from regimes requiring relativistic or quantum mechanics.

Common simplifying assumptions may include:
- constant body/implement mass;
- inertial or approximately inertial lab/room frame;
- rigid-body approximations;
- near-constant local gravity;
- planar analysis where explicitly chosen.

These are model assumptions, not literal properties of all human movement.

Later MEC-21 will own:
- model error;
- marker error;
- soft-tissue artifact;
- inverse-dynamics assumptions;
- 2D vs 3D limitations.

---

# 43. Current professional consistency

Current NSCA CSCS scope lists Biomechanics within Exercise Science.

Current NSCA Essentials 5th Edition has a distinct Chapter 2:
**Biomechanics of Resistance Exercise**.

This supports the dependency position:

MEC foundation should be learned before:
- exercise technique analysis;
- resistance-profile analysis;
- detailed program application.

It does not establish one “best” exercise technique.

---

# 44. PASS-01 content audit

Each exact item was checked for:

1. definition / relationship;
2. SI quantity/unit + scalar/vector status;
3. major category-error boundary.

| Exact item | Definition | SI / type | Boundary | Result |
|---|---:|---:|---:|---:|
| 1 Mass | PASS | PASS | PASS | PASS |
| 2 Force | PASS | PASS | PASS | PASS |
| 3 Weight | PASS | PASS | PASS | PASS |
| 4 Acceleration | PASS | PASS | PASS | PASS |
| 5 Momentum | PASS | PASS | PASS | PASS |
| 6 Impulse | PASS | PASS | PASS | PASS |
| 7 Work | PASS | PASS | PASS | PASS |
| 8 Power | PASS | PASS | PASS | PASS |
| 9 Energy | PASS | PASS | PASS | PASS |
| 10 Velocity | PASS | PASS | PASS | PASS |
| 11 Angular velocity | PASS | PASS | PASS | PASS |
| 12 Linear acceleration | PASS | PASS | PASS | PASS |
| 13 Angular acceleration | PASS | PASS | PASS | PASS |
| 14 Newton's laws | PASS | PASS | PASS | PASS |
| 15 Vectors/resultants | PASS | PASS | PASS | PASS |

**PASS-01 content audit = 45/45 resolved.**

Exact Area 06 Section 1 coverage:

**15/15 at content/scope level.**

---

# 45. Established findings

1. Mass is scalar and measured in kg; weight is gravitational force measured in N.
2. Net external force is the vector sum of external forces on the defined system.
3. Newton's second law is fundamentally a momentum-rate relation; (F=ma) is the constant-mass reduction.
4. Momentum (mmathbf v) is not force.
5. Impulse is the force-time integral and equals momentum change; it is not peak force.
6. Work is the force-displacement dot-product integral; only the force component along displacement contributes.
7. Power is the rate of work; translational instantaneous power can be represented by (mathbf Fcdotmathbf v).
8. Work, energy and power are distinct despite related equations/units.
9. External mechanical work/power are not direct measures of metabolic energy expenditure/ATP flux.
10. Velocity is vector-valued and differs from speed.
11. Acceleration is change of velocity and can exist at constant speed when direction changes.
12. Angular velocity and angular acceleration are distinct from their linear counterparts and use rad/s and rad/s² in SI.
13. Third-law pairs act on different bodies.
14. Resultant force requires vector addition, not addition of magnitudes.
15. The apparent Section 1 duplication “Acceleration” vs “Linear acceleration” is resolved operationally as general concept vs translational application.

---

# 46. Unresolved questions reserved for closure audit

No exact Section 1 content item remains unresolved.

PASS-02 must independently test:

1. whether the Item 4 / Item 12 normalization should remain explicit in the canonical finding or require a source-map edit;
2. whether energy should remain in MEC-01 or be shortened and routed more strongly to MEC-18/BIO;
3. whether inertia deserves an explicit canonical subsection even though it is represented through mass/Newton's first law rather than a separate exact item;
4. whether angular momentum is a project-relevant missing concept for later free-weight/ballistic analysis or should remain outside MEC-01 exact scope;
5. whether mechanical power sign and rotational power (P=	auomega) should stay deferred to MEC-18;
6. whether any downstream area-map terminology conflicts with these definitions;
7. whether a first canonical `MEC-01_newtonian_mechanics_vectors.md` can be created without premature content from MEC-02/03/04/18.

---

# 47. Evidence/source register

## Current authoritative SI / metrology

1. **BIPM — The International System of Units (SI), 9th edition, version 4.01, June 2026**  
   DOI: 10.59161/AUEZ1291  
   Used for current SI units and the principle that unit identity does not uniquely identify physical quantity.

2. **NIST Guide to the SI — current web reference**  
   Used for derived units and standard acceleration of free fall (g_n=9.80665 mathrm{m/s^2}).

## Official mechanics references

3. **NASA Glenn — Newton's Laws of Motion**  
   Used for the three laws, momentum-rate form and constant-mass (F=ma) reduction.

4. **NASA Glenn — Weight Equation / Mass and Weight**  
   Used for mass-weight distinction and (W=mg).

5. **NASA Glenn — Vector Addition**  
   Used for vector magnitude/direction, component decomposition and resultants.

6. **NASA Glenn — Aircraft Translations**  
   Used for velocity/linear acceleration definitions.

7. **NASA Glenn — Angular Displacement, Velocity, Acceleration**  
   Used for angular velocity/acceleration and linear-vs-angular distinction.

8. **NASA Glenn — Work Equals Force Times Distance**  
   Used for aligned simple work and general force-component/displacement relationship.

9. **NASA Glenn — What is Power?**  
   Used for (P=W/t) and aligned (P=Fv) special case.

10. **NASA Glenn — Specific Impulse / Ideal Rocket Equation**  
    Used for impulse as force-time integral and momentum-change relationship.

11. **NASA Glenn — Conservation of Momentum**  
    Used for momentum definition/vector status.

## Current professional scope

12. **NSCA — CSCS Exam Description**, current page checked 2026-11-20.  
    Biomechanics remains a Scientific Foundations / Exercise Science domain.

13. **NSCA — Essentials of Strength Training and Conditioning, 5th Edition**, current page checked 2026-11-20.  
    Chapter 2 = Biomechanics of Resistance Exercise.

---

# 48. Confidence

### HIGH

- SI quantity/unit distinctions;
- mass vs weight;
- force/momentum/impulse distinctions;
- velocity/acceleration distinctions;
- Newton's laws at classical training scale;
- work/power relationships;
- vectors/resultants;
- angular velocity/acceleration units and definitions;
- mechanical vs metabolic quantity boundary.

### Project architecture / not a physical law

- Item 4 vs Item 12 normalization;
- routing of depth to later MEC topic IDs;
- exact MEC/BIO/PRO/TEC ownership labels.

---

# 49. Status

**MEC-01/PASS-01 — CONTENT PASS COMPLETE.**

- Exact Area 06 Section 1: **15/15 content items revalidated**.
- Content audit: **45/45 resolved**.
- No exact-scope content blocker remains.
- No canonical MEC-01 finding is created yet.
- `CLOSED_FOR_PRACTICE` is **not** assigned yet.

Next one block:

**MEC-01/PASS-02 — independent closure audit and synthesis.**
