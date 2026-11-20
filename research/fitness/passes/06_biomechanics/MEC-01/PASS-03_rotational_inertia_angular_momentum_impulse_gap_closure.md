# MEC-01 / PASS-03 — Rotational inertia, angular momentum and angular impulse gap closure

Дата: 2026-11-20  
Статус: **GAP CONTENT COMPLETE — REPEAT CLOSURE AUDIT PENDING**  
Область: 06 — Biomechanics  
Topic: MEC-01 — Newtonian mechanics / vectors

## 0. Why this pass exists

MEC-01/PASS-02 found one blocking conceptual cluster:

**the map had angular kinematics and downstream torque, but lacked the rotational-dynamics bridge connecting mass distribution, angular momentum and torque over time.**

The missing primary constructs were:

1. mass moment of inertia / rotational inertia;
2. angular momentum;
3. angular impulse / torque→change-in-angular-momentum relation.

This PASS closes only that gap cluster.

It does not:
- re-open already-valid linear mechanics from PASS-01;
- perform the final repeat closure audit;
- deeply research torque/moment-arm geometry → MEC-04;
- deeply research anthropometric parameter estimation → MEC-16;
- deeply research ballistic technique → MEC-17;
- deeply research rotational work/power/energy → MEC-18;
- deeply research inverse-dynamics error/modeling → MEC-21.

---

## 1. Source-of-truth / map correction decision

PASS-02 established that this was a **real knowledge-map omission**, not merely a wording gap.

Therefore Area 06 Section 1 is corrected in this PASS by adding:

16. Rotational inertia / mass moment of inertia.
17. Angular momentum.
18. Angular impulse.

The existing 15 items remain unchanged.

Revised MEC-01 source scope:

**18 exact items.**

This is a corrective map expansion based on the independent gap audit.

---

## 2. Evidence path

This is a foundational mechanics question rather than an intervention-effect question.

Primary/current evidence hierarchy used:

1. **BIPM SI Brochure, 9th edition, v4.01, June 2026** — current SI/metrology authority.
2. **NASA current STEM / Glenn mechanics resources** — official foundational mechanics.
3. **NASA Space Vehicle Control Systems educational mechanics** — angular momentum / torque relationship.
4. Current human-biomechanics literature only to establish project relevance:
   - Homma & Yamaura 2025, human segment inertial parameters / inverse dynamics;
   - Lahkar et al. 2025, body-segment inertial parameters from 3D scans.
5. Existing MEC downstream architecture.

No training-outcome claim is made in this PASS.

---

# ITEM 16 — ROTATIONAL INERTIA / MASS MOMENT OF INERTIA

## 3. Translational inertia vs rotational inertia

For translation, mass (m) is the inertial quantity linking net force and acceleration in the constant-mass model.

For rotation, total mass alone is insufficient.

Rotational response depends on:
- how much mass exists;
- where that mass lies relative to the chosen axis.

This distribution-dependent quantity is the **mass moment of inertia**, also called **rotational inertia**.

Canonical distinction:

**mass governs translational inertia; mass distribution about an axis governs rotational inertia.**

Confidence: **HIGH**.

---

## 4. Definition

For discrete masses about a selected axis:

[
I=sum_i m_i r_{perp,i}^2
]

For a continuous mass distribution:

[
I=int r_perp^2,dm
]

where:
- (r_perp) = perpendicular distance from each mass element to the selected axis.

SI unit:

[
mathrm{kg,m^2}
]

Important consequence:

Mass farther from the axis contributes disproportionately because distance is squared.

NASA's current Moment of Inertia STEMonstration explicitly demonstrates that changing mass distribution changes angular speed/ease of rotation.

Canonical rule:

**same total mass ≠ same moment of inertia.**

Confidence: **HIGH**.

---

## 5. Axis dependence

Moment of inertia is defined **about an axis**.

The same body can therefore have different (I) values about:
- different axes;
- different joint centers;
- different body orientations;
- different whole-body configurations.

Thus a statement such as:

> “this limb has moment of inertia X”

is incomplete unless the axis/reference is defined.

Canonical rule:

**moment of inertia is axis dependent.**

Confidence: **HIGH**.

---

## 6. Radius of gyration

Radius of gyration (k) provides a compact representation of mass distribution about an axis:

[
I=mk^2
]

or:

[
k=sqrt{I/m}
]

Interpretation:

(k) is the distance from the axis at which the total mass could be conceptually concentrated to reproduce the same moment of inertia.

This is useful in body-segment parameterization.

It does **not** mean the segment's actual mass is physically located at one radius.

Canonical rule:

**radius of gyration is an equivalent mass-distribution parameter, not an anatomical point mass.**

Confidence: **HIGH**.

---

## 7. Human-segment relevance

Current human-biomechanics evidence confirms that segment inertial properties are not optional details in dynamic models.

Homma & Yamaura 2025 explicitly describe human inverse dynamics as requiring predetermined limb inertial properties and study the minimum set of inertial parameters.

Lahkar et al. 2025 identify body-segment inertial parameters as including:
- segment mass;
- center-of-mass position;
- moments of inertia.

Therefore later MEC topics cannot reliably reason about rotational dynamics using segment mass and length alone.

Canonical project implication:

**body-segment mass distribution matters mechanically, especially when estimating rotational kinetics.**

Confidence: **HIGH for modeling relevance**.

---

## 8. Configuration dependence in the whole body

For one approximately rigid segment, its segment-fixed inertia can often be treated as approximately constant over a short movement.

But whole-body rotational inertia can change when:
- limbs move closer to/farther from an axis;
- posture changes;
- an implement changes position;
- the body changes configuration.

NASA's current rotational examples use this principle directly: bringing mass closer to the axis reduces rotational inertia and can increase angular speed when angular momentum is conserved.

Canonical rule:

**segment inertia may be approximated as fixed in a rigid-segment model; whole-body inertia can change substantially with configuration.**

Confidence: **HIGH conceptual / model dependent in exact magnitude**.

---

## 9. Rotational inertia is not “resistance” in every sense

Higher (I) means greater resistance to a given angular acceleration about the defined axis.

It does not automatically mean:
- greater muscle activation;
- greater joint contact force;
- greater hypertrophy stimulus;
- greater injury risk;
- greater metabolic cost.

Those require downstream geometry, tissue, physiology and task analysis.

Canonical rule:

**higher rotational inertia ≠ automatically better/worse training stimulus.**

Confidence: **HIGH boundary**.

---

# ITEM 17 — ANGULAR MOMENTUM

## 10. General angular momentum concept

Angular momentum is the rotational momentum quantity.

For a particle relative to a chosen origin:

[
mathbf L=mathbf r	imesmathbf p
]

where:
- (mathbf r) = position vector from the chosen origin;
- (mathbf p) = linear momentum.

SI unit:

[
mathrm{kg,m^2/s}
]

BIPM v4.01 explicitly identifies (mathrm{kg,m^2,s^{-1}}) as the unit of angular momentum.

Canonical rule:

**angular momentum is reference-point/axis dependent.**

Confidence: **HIGH**.

---

## 11. Fixed-axis rigid-body simplification

For rotation about a fixed principal axis in the simple rigid-body case:

[
L=Iomega
]

This relation is useful but must not be generalized carelessly.

In full 3D rigid-body mechanics:

- (I) is an inertia tensor;
- (mathbf L) and (oldsymbolomega) need not be parallel unless rotation is about a principal axis or another simplifying condition applies.

Therefore:

**(L=Iomega) is a fixed-axis/principal-axis scalar simplification, not the complete 3D definition.**

Confidence: **HIGH**.

---

## 12. Angular momentum vs angular velocity

Angular velocity alone does not determine angular momentum.

Two systems can have the same (omega) but different (L) because their moments of inertia differ.

Likewise, the same angular momentum can occur with:
- high (I) and lower (omega);
- low (I) and higher (omega).

NASA's space-control mechanics gives this exact conceptual relationship.

Canonical rule:

**angular velocity ≠ angular momentum.**

Confidence: **HIGH**.

---

## 13. Angular momentum vs linear momentum

Linear momentum:

[
mathbf p=mmathbf v
]

Angular momentum about a point:

[
mathbf L=mathbf r	imesmathbf p
]

They are distinct quantities.

An object moving in a straight line can have non-zero angular momentum about an origin that does not lie on its line of motion.

Therefore:

**rotation of the object about its own center is not required for angular momentum about an external point.**

Confidence: **HIGH**.

---

# ITEM 18 — ANGULAR IMPULSE / TORQUE–MOMENTUM BRIDGE

## 14. Torque as angular-momentum rate

The general rotational momentum relation about a suitable fixed inertial origin is:

[
sum oldsymbol	au_{ext}=rac{dmathbf L}{dt}
]

NASA's rotational mechanics explicitly states the conceptual analogue:

**force is the time rate of change of linear momentum; torque is the time rate of change of angular momentum.**

This is the general bridge MEC-01 lacked.

Canonical rule:

**net external torque changes angular momentum.**

Confidence: **HIGH**.

---

## 15. Angular impulse

Integrating torque over time:

[
mathbf J_	au=
int_{t_1}^{t_2}sumoldsymbol	au_{ext},dt
]

gives:

[
mathbf J_	au=Deltamathbf L
]

For constant average torque over the interval:

[
Deltamathbf L=
oldsymbol	au_{avg}Delta t
]

SI unit:

[
mathrm{N,m,s}
]

which is dimensionally equivalent to:

[
mathrm{kg,m^2/s}
]

Canonical rule:

**angular impulse ≠ peak torque.**

Two torque-time curves can have:
- the same peak torque but different angular impulse;
- the same angular impulse with different peak torque/duration.

Confidence: **HIGH**.

---

## 16. Linear vs angular impulse

Linear:

[
intmathbf F,dt=Deltamathbf p
]

Rotational:

[
intoldsymbol	au,dt=Deltamathbf L
]

This parallel is foundational:

| Translational | Rotational |
|---|---|
| mass (m) | moment of inertia (I) |
| velocity (mathbf v) | angular velocity (oldsymbolomega) |
| momentum (mathbf p) | angular momentum (mathbf L) |
| force (mathbf F) | torque (oldsymbol	au) |
| impulse (int Fdt) | angular impulse (int	au dt) |
| (Sigma F=d p/dt) | (Sigma	au=dL/dt) |

This table is an analogy, not proof that every translational equation maps one-to-one under every 3D condition.

Confidence: **HIGH**.

---

# 17. Why τ = Iα is not the universal rotational law

For a simple rigid body rotating about a fixed principal axis with constant (I):

[
sum	au=Ialpha
]

This is valid and useful.

But if (I) changes with time in an aligned scalar model:

[
L=Iomega
]

so:

[
	au=rac{dL}{dt}
=Ialpha+dot I,omega
]

More generally in 3D:
- inertia is tensor-valued;
- (mathbf L) need not be parallel to (oldsymbolomega);
- rotating reference frames and moving origins add modeling complexity.

Therefore MEC-01 retains:

**(sum	au=dL/dt) as the general conceptual law; (sum	au=Ialpha) as a constrained/simple rotational form.**

Detailed tensor/reference-frame dynamics remains MEC-21.

Confidence: **HIGH**.

---

# 18. Conservation of angular momentum

If the net external torque about the chosen reference is zero:

[
rac{dmathbf L}{dt}=0
]

therefore:

[
mathbf L=mathrm{constant}
]

For the simple fixed-axis scalar case:

[
I_1omega_1=I_2omega_2
]

when angular momentum is conserved.

This explains why changing mass distribution can change angular speed without external torque.

Important boundary:

**conservation of angular momentum does not imply conservation of rotational kinetic energy.**

Internal work can change kinetic energy while total angular momentum remains conserved.

Detailed energy accounting remains MEC-18.

Confidence: **HIGH**.

---

# 19. Human movement relevance

## 19.1 Limb repositioning

Moving a limb segment relative to a joint/whole-body axis changes:
- geometry;
- potentially the whole-body moment of inertia;
- the relationship between torque, angular acceleration and angular momentum.

Exact joint/muscle consequences require:
- segment inertial parameters;
- force geometry;
- joint moments;
- motion data.

Those belong MEC-12/MEC-16/MEC-21.

## 19.2 Implement position

Two external loads with equal mass can create different rotational dynamics if their mass is distributed differently relative to the relevant axis.

This is conceptually relevant to:
- long vs compact implements;
- load position;
- distal vs proximal mass;
- dumbbell/bar configurations.

But MEC-01 does **not** infer a training advantage from this alone.

## 19.3 Ballistic actions

Throws, jumps and rapid segment rotations can involve:
- linear momentum/impulse;
- angular momentum/angular impulse;
- coordinated transfer between segments.

Detailed sport/exercise application remains MEC-17/MEC-19.

## 19.4 Flywheel/inertial devices

“Inertial resistance” devices cannot be understood from mass alone.

Rotational inertia depends on the flywheel's mass distribution and radius.

Exact device mechanics remains MEC-09.

---

# 20. Human inverse-dynamics boundary

Modern human inverse-dynamics workflows require body-segment inertial parameters.

Current evidence:

- Homma & Yamaura 2025: external/joint forces in human inverse dynamics are calculated from measured motion plus predetermined limb inertial properties.
- Lahkar et al. 2025: BSIPs include mass, COM position and moments of inertia.

Therefore:

**segment moment of inertia is not an optional vocabulary detail if later joint kinetics/inverse dynamics are to be interpreted correctly.**

But MEC-01 does not yet own:
- how BSIPs are estimated;
- uncertainty in anthropometric tables;
- soft-tissue artifact;
- inverse-dynamics sensitivity.

Those remain MEC-16/MEC-21.

Confidence: **HIGH for relevance; downstream uncertainty deferred**.

---

# 21. Radius-of-gyration boundary

Radius of gyration can be useful because human-segment databases often express inertial distribution through normalized segment parameters.

But MEC-01 only needs:

[
I=mk^2
]

It does not need:
- person-specific regression equations;
- sex/age-specific coefficients;
- segment tables;
- scanner-derived estimation methods.

Those belong MEC-16/MEC-21.

---

# 22. Axis/reference discipline

Every angular-momentum / moment-of-inertia statement must specify or imply:

1. the system;
2. reference point/axis;
3. coordinate frame/sign convention;
4. whether the model is fixed-axis/planar or 3D;
5. whether (I) is treated as constant.

Without these, equations such as:
- (L=Iomega);
- (	au=Ialpha);
- angular momentum conservation

can be applied incorrectly.

Canonical project rule:

**rotational mechanics claims are reference- and model-conditioned.**

Confidence: **HIGH**.

---

# 23. Core non-equivalences added by PASS-03

MEC-01 now additionally rejects:

1. mass = rotational inertia.
2. same mass = same (I).
3. moment of inertia = moment arm.
4. moment of inertia = torque.
5. angular velocity = angular momentum.
6. angular acceleration = angular momentum.
7. torque = angular momentum.
8. peak torque = angular impulse.
9. (L=Iomega) = universal 3D identity in scalar form.
10. (	au=Ialpha) = universally complete rotational Newton II.
11. zero external torque = zero angular velocity.
12. angular-momentum conservation = rotational-energy conservation.
13. segment mass alone = sufficient inverse-dynamics inertial description.
14. higher (I) = automatically higher training stimulus.

---

# 24. Corrected translational–rotational foundation

After this PASS, MEC-01 has a complete trainer-level bridge:

## Translation

[
mathbf p=mmathbf v
]

[
summathbf F_{ext}=rac{dmathbf p}{dt}
]

[
intmathbf F,dt=Deltamathbf p
]

## Rotation

[
mathbf L=mathbf r	imesmathbf p
]

and, for fixed principal-axis rigid-body simplification:

[
L=Iomega
]

General conceptual relation:

[
sumoldsymbol	au_{ext}=rac{dmathbf L}{dt}
]

Angular impulse:

[
intoldsymbol	au,dt=Deltamathbf L
]

Simple fixed-axis constant-(I) reduction:

[
sum	au=Ialpha
]

This closes the exact bridge identified by PASS-02.

---

# 25. Map correction

Area 06 Section 1 is updated from 15 to 18 items.

Added:

16. Rotational inertia / mass moment of inertia.
17. Angular momentum.
18. Angular impulse.

No new normalized topic ID is required because all three concepts belong inside:

**MEC-01 — Newtonian mechanics / vectors.**

This is a scope repair, not a new major topic.

---

# 26. PASS-03 gap-content audit

Required scope from PASS-02:

1. translational vs rotational inertia → **PASS**.
2. mass moment of inertia (I) → **PASS**.
3. mass distribution / axis dependence → **PASS**.
4. radius of gyration → **PASS**.
5. angular momentum (mathbf L) → **PASS**.
6. fixed-axis (L=Iomega) boundary → **PASS**.
7. torque as (dL/dt) → **PASS**.
8. angular impulse (=Delta L) → **PASS**.
9. conservation of angular momentum → **PASS**.
10. (	au=Ialpha) special-case boundary → **PASS**.
11. human/segment/implement relevance → **PASS**.
12. handoff to MEC-04/16/17/18/21 → **PASS**.

**PASS-03 gap-content audit = 12/12 PASS.**

---

# 27. Revised MEC-01 content coverage

Original PASS-01:

- original source-map items = **15/15**;
- checks = **45/45**.

PASS-03 corrected scope:

- new map items added = **3/3**;
- gap-content checks = **12/12**.

Revised current Section 1 source scope:

**18/18 content-covered.**

This does **not** authorize closure.

A repeat independent closure audit is still mandatory because:
- the source map changed;
- new equations/boundaries require consistency checks;
- ledger statuses remain audit-pending.

---

# 28. Evidence ledger status

Rows:
- MEC01-01…MEC01-10 remain valid and audit-pending.
- MEC01-11…MEC01-13 can now move from `GAP IDENTIFIED — CONTENT PASS REQUIRED` to:
  - **REVALIDATED 2026-11-20 — MEC-01 AUDIT PENDING**.

No final row may be marked fully closed until the repeat audit.

---

# 29. Source register

## Current SI authority

1. **BIPM — The International System of Units (SI), 9th edition, v4.01, June 2026**  
   DOI: 10.59161/AUEZ1291  
   Current brochure confirms:
   - torque → N·m;
   - angular velocity → rad/s;
   - angular acceleration → rad/s²;
   - angular momentum → kg·m²/s.

## NASA official mechanics

2. **NASA — STEMonstrations: Moment of Inertia**  
   Current NASA resource demonstrating that mass distribution affects rotational inertia and angular speed.

3. **NASA — STEMonstrations: Angular Momentum**  
   Current NASA resource establishing angular momentum as a distinct rotational mechanics construct.

4. **NASA Glenn — Torque (Moment)**  
   Current page establishing torque/moment as rotational effect of force and the role of force location.

5. **NASA Space Vehicle Control Systems — Attitude Dynamics**  
   Official NASA educational mechanics:
   - (H=IOmega) in the simple rotational model;
   - torque is the time rate of change of angular momentum;
   - (	au=Ialpha) for the stated simple attitude-dynamics model;
   - angular momentum conservation when external torque is absent.

## Human biomechanics relevance

6. **Homma T, Yamaura H. 2025. Identification of the minimum set of inertial parameters of human body segments using free-vibration measurements. Journal of Biomechanical Science and Engineering.**  
   Current human-biomechanics evidence that inverse dynamics depends on segment inertial properties.

7. **Lahkar BK et al. 2025. Body segment inertial parameters of children derived from a large database of 3D body scans. Journal of Biomechanics 189:112840.**  
   BSIPs explicitly include mass, COM and moments of inertia.

---

# 30. Confidence

### HIGH

- moment-of-inertia definition;
- kg·m² unit;
- dependence on mass distribution/axis;
- radius-of-gyration relationship;
- angular momentum as distinct quantity;
- angular-momentum SI unit;
- (	au=dL/dt);
- angular impulse = (Delta L);
- angular-momentum conservation with zero net external torque;
- special-case status of scalar (L=Iomega) and (	au=Ialpha).

### HIGH project relevance / exact individual magnitude downstream

- need for body-segment inertial parameters in inverse dynamics;
- configuration effects on rotational inertia;
- anthropometric relevance.

### Deferred

- full inertia tensor treatment;
- Euler equations;
- gyroscopic/precession dynamics;
- moving-reference-point angular momentum;
- subject-specific BSIP estimation;
- rotational power/work/energy;
- inverse-dynamics sensitivity/error.

---

# 31. Status

**MEC-01/PASS-03 — GAP CONTENT COMPLETE.**

Results:

- blocking rotational-dynamics content cluster addressed;
- Area 06 Section 1 corrected from **15 to 18 exact items**;
- revised MEC-01 content coverage = **18/18**;
- PASS-03 gap checks = **12/12 PASS**;
- canonical MEC-01 finding still **not created**;
- `CLOSED_FOR_PRACTICE` still **not assigned**.

Next one block:

**MEC-01/PASS-04 — repeat independent closure audit and synthesis after rotational-dynamics gap repair.**

STOP after this PASS.
