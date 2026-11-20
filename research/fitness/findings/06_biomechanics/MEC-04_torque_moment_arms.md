# MEC-04 — Torque / moment arms

Статус: **CLOSED_FOR_PRACTICE v2.0 — revalidated 2026-11-20**  
Область: 06 — Biomechanics

## 0. Core decision

MEC-04 defines how force geometry creates rotational demand.

Canonical relation:

`tau = r × F`

and, in magnitude form,

`|tau| = F*r_perp`.

The critical geometric quantity is the perpendicular distance from the selected reference axis/point to the force line of action.

---

## 1. Torque requires a reference

A torque/moment is always about:
- a point;
- a joint;
- an axis;
or another defined reference.

The same force can produce different moments about different references.

Torque is therefore not a property of force magnitude alone.

---

## 2. Perpendicular moment arm

Moment arm is the shortest perpendicular distance between:
- reference axis/point;
- force line of action.

It is not automatically:
- segment length;
- distance to force application;
- distance from joint to the external object.

If the force line passes through the reference axis:

`r_perp = 0`

and the moment from that force about that axis is zero.

---

## 3. External moment arm

External moment arm describes leverage of an external force about a joint/reference.

Examples:
- gravity;
- cable force;
- band tension;
- machine resistance;
- GRF;
- manual resistance.

For one force:

`M_external = F_external*r_external`.

For multiple forces, the external moment is the signed/vector sum of their moments.

---

## 4. Same load does not mean same joint moment

The same nominal load can produce different joint moments because of:
- force direction;
- posture;
- line of action;
- external moment arm;
- acceleration/inertia;
- other contacts/supports.

Therefore:

**same kg ≠ same joint moment.**

A constant gravitational force can create a changing joint moment throughout ROM.

---

## 5. Internal muscle moment arm

A muscle moment arm is the rotational leverage of muscle/tendon force about a specified joint axis/DOF.

Simplified relation:

`M_muscle = F_muscle*r_muscle`.

The moment arm can vary with:
- joint angle;
- muscle/tendon path;
- joint geometry;
- rotational DOF;
- individual anatomy.

“The moment arm of muscle X” is incomplete unless pose and rotational direction are clear.

---

## 6. External vs internal moment arms

External moment arm:
- leverage of an external force.

Internal muscle moment arm:
- leverage of muscle/tendon force.

They are different quantities and can change differently throughout ROM.

---

## 7. Geometric vs tendon-excursion estimates

Moment arm has one mechanical role: linking force to joint moment.

But it can be estimated by different methods.

### Geometric approach
Uses:
- reference axis/center;
- force or tendon line of action;
- perpendicular distance.

### Tendon-excursion approach
Infers moment arm from musculotendon/tendon excursion as joint angle changes under method assumptions.

The two methods can produce different numerical values in vivo because of:
- tendon stretch;
- joint-axis assumptions;
- line-of-action estimates;
- measurement/model error.

Canonical rule:

**different estimation methods ≠ different fundamental physical quantities.**

Method validity belongs MEC-21.

---

## 8. Joint-angle dependence

Internal and external moment arms commonly vary through ROM.

Current evidence shows:
- complex hip/knee/ankle moment-arm-angle relations;
- continuous 3D shoulder leverage changes;
- angle-dependent Achilles moment arm;
- substantial inter-individual variability.

Therefore:

**one fixed literature moment arm is not an exact universal anatomical constant.**

---

## 9. Mechanical advantage

For a simple equilibrium lever:

`F_internal*r_internal = F_external*r_external`.

A useful leverage ratio is:

`MA = r_internal/r_external`.

If the internal moment arm is much shorter than the external moment arm, internal force may need to be much larger than external force.

This is ordinary mechanical force transformation.

---

## 10. Why muscle force can exceed external load

Simplified single-muscle relation:

`F_muscle = F_external*(r_external/r_muscle)`.

If:

`r_external >> r_muscle`

then:

`F_muscle >> F_external`.

This explains the possibility of large internal forces under modest external loads.

It does not uniquely solve individual muscle force in a multi-muscle joint.

---

## 11. Angle-specific torque capacity is multi-determinant

Joint torque-angle behavior can reflect:
- moment arms;
- muscle length/force-length state;
- contraction velocity;
- tendon mechanics;
- passive tissues;
- activation;
- multi-joint geometry.

Therefore:

**torque-angle relationship ≠ moment-arm curve alone.**

---

## 12. External joint moment and exercise difficulty

External joint moment is a useful mechanical-demand descriptor.

It is not equivalent to total exercise difficulty.

Difficulty and internal demand can also depend on:
- internal moment arms;
- force capacity;
- contraction velocity;
- muscle length;
- fatigue;
- coordination;
- stabilization;
- anthropometry;
- force sharing.

Two conditions with equal external moment can therefore produce different internal muscle demands.

---

## 13. Training-outcome boundary

Higher external/internal moment does not by itself prove:
- more hypertrophy;
- more strength adaptation;
- higher injury risk;
- better exercise selection.

Those require downstream:
- muscle/tissue mechanics;
- physiology;
- outcome evidence;
- program context.

---

## 14. Permanent anti-category-error rules

1. torque ≠ force.
2. torque ≠ energy.
3. torque requires a reference.
4. moment arm ≠ segment length.
5. moment arm ≠ point-to-joint distance.
6. moment arm ≠ torque.
7. external moment arm ≠ internal muscle moment arm.
8. same kg ≠ same joint moment.
9. constant external force ≠ constant joint moment.
10. moment arm ≠ constant through ROM.
11. geometric estimate ≠ automatically tendon-excursion estimate.
12. population-average moment arm ≠ exact individual leverage.
13. mechanical advantage ≠ training advantage.
14. moment balance ≠ unique muscle-force-sharing solution.
15. torque-angle relation ≠ moment-arm effect alone.
16. same external torque ≠ same internal muscle demand.
17. external torque ≠ whole-exercise difficulty.
18. torque difference ≠ training superiority.
19. higher torque ≠ automatically higher hypertrophy.
20. higher torque ≠ automatically higher injury risk.

---

## 15. Downstream ownership

- Newtonian torque foundation → MEC-01;
- FBD / moment classification → MEC-03;
- lever classes → MEC-05;
- muscle-tendon force capacity → PHY/MEC-08;
- joint-specific geometry/loading → MEC-12;
- exercise-specific mechanics → MEC-19;
- moment-arm estimation/model uncertainty → MEC-21;
- technique/exercise decisions → TEC;
- programming → PRO.

---

## 16. Sources retained at closure

1. NASA Glenn — Torque (Moment), current.
2. BIPM SI Brochure, 9th edition, v4.01, June 2026.
3. NSCA 2025 CSCS Job Task Analysis / DCO.
4. Chen & Franklin 2025, PMID 40343628.
5. Axford et al. 2025, PMID 39946823.
6. Kovács et al. 2026, PMID 41456489.
7. Chen & Franklin 2025, PMID 40117874.
8. Umehara et al. 2025, PMID 40192188.
9. Kos et al. 2025, PMID 39981993.
10. Medeiros et al. 2026, PMID 42856762.
11. Geometric vs tendon-excursion method boundary: PMID 24870582; PMID 29960733.

---

## 17. Closure

Closure audit:

`research/fitness/passes/06_biomechanics/MEC-04/PASS-02_independent_closure_gap_audit_and_synthesis.md`

Result:

**33/33 PASS.**

Area 06 Section 4:

**10/10 exact items PASS.**

No source-map mutation required.

MEC-04 = **CLOSED_FOR_PRACTICE v2.0**.

---

## 18. Next dependency

**MEC-05/PASS-01 — Lever systems content revalidation.**

Do not start MEC-05 without the next user continue signal.
