# MEC-01 — Newtonian mechanics / vectors

Статус: **CLOSED_FOR_PRACTICE v2.0 — revalidated 2026-11-20**  
Область: 06 — Biomechanics

## 0. Core decision

MEC-01 defines the minimum classical-mechanics language required before analyzing exercise mechanics.

The project uses a paired translational/rotational structure:

### Translation
- mass;
- velocity/acceleration;
- momentum;
- force;
- impulse.

### Rotation
- mass moment of inertia;
- angular velocity/acceleration;
- angular momentum;
- torque;
- angular impulse.

Canonical rule:

**define the system, reference frame/axis and physical quantity before interpreting a mechanical number.**

---

## 1. Mass vs weight

Mass:
- scalar;
- SI kg;
- translational inertial property.

Weight:
- gravitational force;
- near Earth `W = mg`;
- SI N.

Therefore:

**kg ≠ N.**

A dumbbell's kg label does not directly state:
- net force;
- joint moment;
- muscle force.

---

## 2. Force and Newton II

General translational relation:

[
summathbf F_{ext}=rac{dmathbf p}{dt}
]

For constant mass:

[
summathbf F_{ext}=mmathbf a
]

The relevant quantity is the **net external force on the defined system**.

One measured/applied force is not automatically the resultant.

---

## 3. Newton I and III

Newton I:

zero net external force means constant linear momentum/velocity, not necessarily rest.

Newton III:

interaction forces are equal/opposite and act on **different bodies**.

Therefore third-law pairs do not cancel on the free-body diagram of one body.

---

## 4. Velocity and acceleration

Velocity:

[
mathbf v=rac{dmathbf r}{dt}
]

Acceleration:

[
mathbf a=rac{dmathbf v}{dt}
]

Rules:
- speed ≠ velocity;
- velocity ≠ acceleration;
- constant speed can coexist with acceleration if direction changes;
- average acceleration ≠ full instantaneous profile.

The source-map terms `Acceleration` and `Linear acceleration` are retained as:
- general concept;
- translational application.

---

## 5. Linear momentum and impulse

Momentum:

[
mathbf p=mmathbf v
]

Impulse:

[
mathbf J=intmathbf Fdt=Deltamathbf p
]

Rules:
- momentum ≠ force;
- impulse ≠ peak force;
- same peak force can produce different impulse;
- same impulse can occur with different force-time curves.

---

## 6. Work

Mechanical work:

[
W=intmathbf Fcdot dmathbf r
]

For constant force and straight displacement:

[
W=Fscos	heta
]

Only the force component along displacement contributes to external mechanical work.

A near-isometric external hold can therefore have near-zero external work while:
- force remains non-zero;
- biological energy expenditure remains non-zero.

---

## 7. Energy

Mechanical energy is measured in joules.

Useful forms include:
- translational kinetic energy;
- gravitational potential energy;
- elastic potential energy.

Work and energy share J but are not the same physical quantity.

Canonical boundary:

**mechanical energy ≠ metabolic energy by default.**

---

## 8. Power

Mechanical power:

[
P=rac{dW}{dt}
]

For translational point mechanics:

[
P=mathbf Fcdotmathbf v
]

Rules:
- force ≠ power;
- velocity ≠ power;
- work ≠ power;
- mechanical W ≠ metabolic W without an explicit energetic model.

Detailed joint/rotational power belongs MEC-18.

---

## 9. Vectors and resultants

Force, velocity, acceleration, momentum and impulse require vector treatment.

Resultant force:

[
mathbf F_{net}=sum_imathbf F_i
]

It is not generally:

[
sum_i|mathbf F_i|
]

Components depend on the selected coordinate system.

The physical vector does not change merely because axes are rotated.

---

## 10. Angular velocity and acceleration

Angular velocity:

[
omega=rac{d	heta}{dt}
]

SI:

[
mathrm{rad/s}
]

Angular acceleration:

[
alpha=rac{domega}{dt}
]

SI:

[
mathrm{rad/s^2}
]

For simple fixed-axis rigid motion:

[
v_t=omega r
]

Thus angular and linear velocity are not interchangeable.

---

## 11. Rotational inertia / mass moment of inertia

For discrete masses:

[
I=sum_i m_i r_{perp,i}^2
]

For a continuous distribution:

[
I=int r_perp^2dm
]

SI:

[
mathrm{kg,m^2}
]

Rules:
- mass ≠ moment of inertia;
- same mass ≠ same (I);
- (I) depends on the chosen axis and mass distribution.

Radius of gyration:

[
I=mk^2
]

where (k) is an equivalent distribution parameter, not a literal anatomical point mass.

---

## 12. Angular momentum

For a particle about a chosen origin:

[
mathbf L=mathbf r	imesmathbf p
]

SI:

[
mathrm{kg,m^2/s}
]

For a simple rigid body rotating about a fixed principal axis:

[
L=Iomega
]

This scalar form is not the universal 3D definition.

In general:
- inertia is tensor-valued;
- (mathbf L) need not be parallel to (oldsymbolomega).

Detailed 3D rigid-body modeling belongs MEC-21.

---

## 13. Torque and angular impulse foundation

General rotational momentum relation:

[
sumoldsymbol	au_{ext}=rac{dmathbf L}{dt}
]

Angular impulse:

[
intoldsymbol	au dt=Deltamathbf L
]

Therefore:
- torque ≠ angular momentum;
- peak torque ≠ angular impulse.

For simple fixed-axis constant-(I) motion:

[
sum	au=Ialpha
]

This is a constrained reduction, not the universal rotational law.

Detailed torque geometry/moment arms belong MEC-04.

---

## 14. Conservation of angular momentum

If net external torque about the selected reference is zero:

[
rac{dmathbf L}{dt}=0
]

so angular momentum is constant.

In a simple fixed-axis scalar model:

[
I_1omega_1=I_2omega_2
]

when angular momentum is conserved.

Changing body configuration can therefore change angular velocity by changing (I).

Important:

**angular-momentum conservation ≠ rotational-energy conservation.**

---

## 15. Translational–rotational crosswalk

| Translation | Rotation |
|---|---|
| mass (m) | moment of inertia (I) |
| velocity (mathbf v) | angular velocity (oldsymbolomega) |
| acceleration (mathbf a) | angular acceleration (oldsymbolalpha) |
| momentum (mathbf p) | angular momentum (mathbf L) |
| force (mathbf F) | torque (oldsymbol	au) |
| impulse (int Fdt) | angular impulse (int	au dt) |
| (Sigma F=dp/dt) | (Sigma	au=dL/dt) |

This is a conceptual crosswalk, not permission to transfer every scalar equation unchanged into arbitrary 3D motion.

---

## 16. Human biomechanics relevance

Body-segment mechanics depends on inertial properties including:
- segment mass;
- COM location;
- inertia tensor / moments of inertia.

Therefore later:
- anthropometry;
- joint kinetics;
- ballistic mechanics;
- inverse dynamics

cannot be reduced to segment mass alone.

Exact:
- BSIP coefficients;
- subject-specific estimates;
- inverse-dynamics sensitivity/error

remain MEC-16/MEC-21.

---

## 17. Exercise translation

### Free weight label
kg specifies mass, not joint/muscle force.

### Moving implement
Momentum does not reveal instantaneous applied force without its change over time.

### Fast repetition
High velocity alone does not establish high force, power or impulse.

### Isometric hold
Near-zero external work does not mean zero force or metabolic cost.

### Load position
Moving mass farther from a rotation axis can increase rotational inertia and can also change external moment arms; these are related but distinct mechanical effects.

### Ballistic/reversal phases
Momentum/angular momentum and their changes matter; peak force/torque alone do not fully describe the event.

---

## 18. Boundaries

MEC-01 owns foundational mechanics.

Downstream owners:

- detailed kinematics → MEC-02;
- force categories → MEC-03;
- torque/moment-arm geometry → MEC-04;
- lever systems → MEC-05;
- COM/stability → MEC-06;
- tissue loading → MEC-07;
- muscle-tendon mechanics → MEC-08;
- resistance sources → MEC-09;
- free-weight mechanics → MEC-10;
- resistance profiles → MEC-11;
- joint biomechanics → MEC-12;
- anthropometric inertial parameters → MEC-16;
- ballistic mechanics → MEC-17;
- work/power/efficiency → MEC-18;
- exercise-specific mechanics → MEC-19;
- inverse dynamics/model uncertainty → MEC-21.

BIO owns metabolic energy/ATP cost.

PRO/TEC own prescription and practical exercise execution decisions.

---

## 19. Anti-category-error rules

1. kg ≠ N.
2. mass ≠ weight.
3. one force ≠ net force.
4. momentum ≠ force.
5. impulse ≠ peak force.
6. speed ≠ velocity.
7. velocity ≠ acceleration.
8. work ≠ energy ≠ power.
9. mechanical output ≠ metabolic cost.
10. angular velocity ≠ angular momentum.
11. mass ≠ rotational inertia.
12. same mass ≠ same (I).
13. moment of inertia ≠ moment arm.
14. torque ≠ angular momentum.
15. peak torque ≠ angular impulse.
16. `L=Iω` scalar form ≠ universal 3D identity.
17. `τ=Iα` ≠ universal rotational Newton II.
18. zero net force ≠ zero velocity.
19. zero net torque ≠ zero angular velocity.
20. angular-momentum conservation ≠ rotational-energy conservation.
21. third-law pair ≠ two forces on the same free body.
22. vector resultant ≠ arithmetic sum of magnitudes.

---

## 20. Sources retained at closure

1. BIPM — The International System of Units (SI), 9th edition, **v4.01, June 2026**.
2. NIST — current SI references.
3. NASA Glenn — Newton's laws / vector / work / power / weight / rotational mechanics resources.
4. NASA — STEMonstrations: Moment of Inertia.
5. NASA — STEMonstrations: Angular Momentum.
6. NASA Space Vehicle Control Systems educational mechanics.
7. Homma & Yamaura 2025 — human-body segment inertial parameters.
8. Lahkar et al. 2025 — body-segment inertial parameters, PMID 40609396.
9. NSCA — current CSCS Exam Description and Detailed Content Outline.
10. NSCA — Essentials of Strength Training and Conditioning, 5th Edition.

---

## 21. Confidence

### HIGH
- translational Newtonian mechanics;
- vector/resultant rules;
- work/power definitions;
- rotational inertia;
- angular momentum;
- torque–angular-momentum relationship;
- angular impulse;
- conservation boundaries;
- SI quantities/units.

### Model conditioned
- fixed-axis (L=Iomega);
- fixed-axis constant-(I) (	au=Ialpha);
- rigid-body segment approximation.

### Deferred
- full 3D tensor/Euler dynamics;
- individualized segment inertial estimation;
- inverse-dynamics uncertainty;
- detailed exercise-specific application.

---

## 22. Closure

Closure audit:

`research/fitness/passes/06_biomechanics/MEC-01/PASS-04_repeat_closure_audit_and_synthesis.md`

Result:

**40/40 PASS.**

Current corrected Area 06 Section 1:

**18/18 exact items PASS.**

MEC-01 = **CLOSED_FOR_PRACTICE v2.0**.

---

## 23. Next dependency

**MEC-02/PASS-01 — Kinematics content revalidation.**

Do not start MEC-02 without the next user continue signal.
