# MEC-02 / PASS-02 — Independent closure / gap audit after kinematics content pass

Дата: 2026-11-20  
Статус: **CLOSURE NOT AUTHORIZED — REFERENCE/ORIENTATION GAP FOUND**  
Область: 06 — Biomechanics  
Topic: MEC-02 — Kinematics

## 0. Audit purpose

This is the mandatory independent audit after:

- `MEC-02/PASS-01 — Kinematics content revalidation`;
- exact Area 06 Section 2 coverage = **14/14**;
- PASS-01 content checks = **42/42 resolved**.

PASS-02 tests whether MEC-02 can be closed without a foundational gap.

It specifically rechecks the unresolved questions left by PASS-01:

1. whether reference frame / coordinate system must become an explicit source-map item;
2. whether 3D orientation / rotation representation must become an explicit item;
3. whether planes/axes are sufficiently bounded;
4. whether instantaneous helical/screw axis is foundational or downstream;
5. whether scalar ROM logic is adequate;
6. whether trajectory needs orientation/pose treatment;
7. whether downstream MEC-12/16/17/21 duplicate or depend on MEC-02;
8. whether canonical MEC-02 synthesis is authorized.

---

## 1. Current-source recheck

### BIPM

Current authoritative SI source remains:

**BIPM, The International System of Units (SI), 9th edition, version 4.01, June 2026.**

Relevant current units remain:
- position/displacement/distance → m;
- time → s;
- velocity → m/s;
- acceleration → m/s²;
- angle → rad;
- angular velocity → rad/s;
- angular acceleration → rad/s².

No SI change invalidates PASS-01.

### International Society of Biomechanics

Current ISB Standards page explicitly separates standardization areas for:
- global coordinate systems;
- whole-body orientation;
- joint coordinate systems;
- joint-specific kinematics.

This is strong architectural evidence that coordinate frames and orientation are not optional implementation details.

### Current ISB recommendations for IMU joint kinematics

The 2024 ISB-approved recommendations explicitly require:
- definition of the kinematic model;
- subject-specific calibration;
- definition/estimation/reporting of joint kinematics;
- sufficient reporting for reproducibility/comparability.

This reinforces that a joint-angle number without the underlying reference/model convention is incomplete.

### Current 2025 Cardan-sequence evidence

Le et al. 2025 systematically evaluated six Cardan sequences and found:
- some joints were comparatively robust;
- subtalar/talonavicular components showed substantial sequence-dependent differences.

Therefore rotation representation is not merely a documentation preference; it can materially change reported component angles.

---

# PART A — ORIGINAL 14-ITEM RE-AUDIT

## 2. Position / displacement / distance

Audit:

1. position requires a reference frame → **PASS at content level**;
2. displacement correctly treated as endpoint vector change → **PASS**;
3. distance correctly treated as scalar path length → **PASS**.

However, item 1 depends on an unlisted coordinate-frame construct.

This dependency becomes part of the blocker below.

---

## 3. Velocity / acceleration

Audit:

4. velocity vs speed separation → **PASS**;
5. average velocity vs average speed → **PASS**;
6. acceleration as change in velocity → **PASS**;
7. constant speed with directional acceleration → **PASS**;
8. kinematics vs kinetics boundary → **PASS**.

No separate blocker.

---

## 4. Angular displacement / velocity / acceleration

Audit:

9. angular displacement defined for simple/fixed-axis context → **PASS**;
10. angular velocity → **PASS**;
11. angular acceleration → **PASS**;
12. angular vs linear quantities separated → **PASS**.

But finite 3D orientation change is not fully represented by one scalar angular displacement.

PASS-01 correctly warned about this, but the map still lacks an explicit orientation-representation item.

This becomes part of the blocker below.

---

## 5. Planes / axes

Audit:

13. sagittal/frontal/transverse planes as reference constructs → **PASS**;
14. named anatomical axes as idealized descriptive constructs → **PASS**;
15. real movement can be multiplanar → **PASS**;
16. actual joint axes need not be fixed → **PASS**.

No separate blocker.

---

## 6. Joint angles

Audit:

17. joint angle correctly treated as relative segment orientation → **PASS at content level**;
18. global segment angle ≠ joint angle → **PASS**;
19. 3D angle components require a defined convention → **PASS**;
20. movement label alone does not define the 3D calculation → **PASS**.

Again, these claims depend on two constructs that are currently not explicit source-map items:
- segment/global coordinate systems;
- orientation representation / rotation parameterization.

This confirms rather than resolves the blocker.

---

## 7. Trajectories / ROM / temporal characteristics

Audit:

21. trajectory ≠ endpoint displacement → **PASS**;
22. trajectory ≠ joint-angle pattern → **PASS**;
23. ROM is construct/task specific → **PASS**;
24. ROM construct ≠ measurement validity → **PASS**;
25. timing descriptor ≠ tempo prescription → **PASS**.

No independent blocker.

---

# PART B — BLOCKING FOUNDATIONAL GAP

## 8. Missing construct 1 — reference frames / coordinate systems

Current Section 2 contains:
- position;
- displacement;
- velocity;
- acceleration;
- planes;
- axes;
- joint angles;
- trajectories.

All of these require a reference structure.

Yet there is no explicit Section 2 item for:

**reference frame / coordinate system.**

This is a substantive gap.

### Why it matters

A kinematic coordinate needs:
- an origin;
- basis/axis directions;
- orientation;
- handedness/sign convention;
- global vs local/segment relation.

Without that:
- “position” is incomplete;
- vector components are ambiguous;
- segment orientation is ambiguous;
- joint angle is not reproducible;
- comparison between studies/people can silently mix conventions.

### Current standardization support

The current ISB Standards page explicitly contains dedicated categories for:
- **Global coordinate systems**;
- **Whole body orientation**;
- **Joint coordinate systems (general)**.

The ISB standards material also describes local segment coordinate systems and the reporting of distal-segment motion relative to proximal segments.

Therefore reference frames are part of foundational human-movement kinematics, not merely a sensor-analysis detail.

### Project relevance

This affects later:
- MEC-12 joint biomechanics;
- MEC-16 anthropometry;
- MEC-19 exercise-specific mechanical analysis;
- MEC-21 measurement/modeling;
- TST video/IMU/motion-capture interpretation.

**BLOCKER 1 CONFIRMED.**

---

## 9. Missing construct 2 — orientation / 3D rotation representation

Current Section 2 contains:
- angular displacement;
- angular velocity;
- angular acceleration;
- joint angles.

But it contains no explicit item for:

**orientation / 3D rotation representation.**

This is a separate foundational gap.

### Why angular displacement is not enough

A body's rotational state in 3D is an orientation.

Orientation can be represented by:
- rotation matrix;
- quaternion;
- Euler/Cardan angles;
- other equivalent representations under stated conventions.

A finite 3D orientation change cannot generally be treated as three independent scalar planar angles because:
- rotations are order dependent;
- angle decompositions are representation/convention dependent;
- singularities/crosstalk can occur in angle parameterizations.

### Current evidence

The current ISB Standards page separately lists **whole body orientation** and **joint coordinate systems**.

Le et al. 2025 showed that changing Cardan rotation sequence materially changed reported component kinematics for some foot/ankle joints from the same underlying physical motion.

This confirms that “joint angle” is not a convention-free primitive.

### Project relevance

Without an explicit orientation layer, later claims can incorrectly equate:
- physical 3D orientation;
- one chosen Cardan/Euler decomposition;
- an anatomical motion label;
- a single reported angle component.

This directly affects:
- joint-angle interpretation;
- multiplanar technique analysis;
- trajectory/orientation analysis;
- 2D-vs-3D reasoning;
- motion-capture/IMU comparison.

**BLOCKER 2 CONFIRMED.**

---

## 10. One blocker cluster, two primary constructs

The two blockers form one conceptual cluster:

**reference-frame + 3D-orientation foundation is missing beneath joint/segment kinematics.**

They should be repaired together because:
- orientation is always expressed relative to a frame;
- joint angles are derived from relative segment orientations;
- trajectories can include both position and orientation over time.

---

# PART C — NON-BLOCKING QUESTIONS

## 11. Instantaneous helical / screw axis

PASS-01 asked whether an instantaneous helical/screw axis must be added at MEC-02 level.

Audit decision:

**NO.**

It is useful in advanced 3D joint motion representation, but it is not required for trainer-level closure of generic kinematics.

Route to:
- MEC-12 for joint-specific mechanics where relevant;
- MEC-21 for advanced representation/modeling.

Audit check 26: **PASS / DEFER**.

---

## 12. Scalar ROM definition

PASS-01 used:

[
ROM=x_{max}-x_{min}
]

for a defined scalar kinematic variable.

Audit decision:

**ACCEPTED WITH CONDITION.**

This is adequate when:
- the variable is explicitly scalar;
- the convention and interval are defined.

It is not a universal norm for full multidimensional orientation excursion.

Once orientation representation is added, canonical MEC-02 must state:

**3D movement extent must not be reduced to one scalar ROM unless the chosen variable/representation justifies it.**

Audit check 27: **PASS WITH BOUNDARY**.

---

## 13. Trajectory should include orientation trajectory

PASS-01 defined trajectory mainly as (mathbf r(t)) for a point/marker/COM/implement.

Audit decision:

This is incomplete but repairable within the same orientation gap.

For a rigid segment in 3D, kinematic state over time may require:
- position trajectory;
- orientation trajectory.

A full rigid-body pose trajectory is therefore richer than point trajectory alone.

This does **not** require a third new source-map concept beyond:
- coordinate/reference frames;
- orientation/rotation representation.

Audit check 28: **PASS WITH REPAIR INSIDE SAME GAP CLUSTER**.

---

## 14. Planes / axes precision

The current treatment is sufficient for generic trainer-level anatomy/kinematics:

- planes/axes are descriptive references;
- real motion is 3D;
- actual joint axes can shift.

No need to introduce joint-specific axis definitions in MEC-02.

Those remain MEC-12/MEC-21.

Audit check 29: **PASS**.

---

# PART D — DOWNSTREAM CONSISTENCY AUDIT

## 15. MEC-12 — Joint biomechanics

MEC-02 should supply:
- reference frames;
- relative segment orientation;
- rotation-representation basics.

MEC-12 should supply:
- joint-specific anatomical mechanics;
- joint-specific loading;
- normal variation.

This is a clean dependency once the gap is repaired.

Check 30: **PASS AFTER GAP REPAIR**.

---

## 16. MEC-16 — Anthropometry/scaling

MEC-16 influences:
- segment geometry;
- landmark positions;
- movement paths;
- feasible ROM.

It should not own the coordinate-frame/orientation definitions themselves.

Check 31: **PASS AFTER GAP REPAIR**.

---

## 17. MEC-17 — Movement speed/inertia

MEC-17 depends on:
- velocity;
- acceleration;
- trajectory;
- angular motion.

No duplicate foundational issue.

Check 32: **PASS**.

---

## 18. MEC-21 — Measurement/modeling

MEC-21 should own:
- calibration errors;
- marker/sensor alignment;
- soft-tissue artifact;
- filtering;
- 2D vs 3D error;
- algorithmic orientation estimation;
- gimbal-lock/singularity handling;
- measurement validity.

But MEC-21 should not be forced to introduce the basic existence of:
- coordinate frames;
- orientation representations.

Those belong upstream in MEC-02.

Check 33: **CONFIRMS BLOCKER ROUTING**.

---

# PART E — CURRENT PROFESSIONAL / STANDARDIZATION AUDIT

## 19. NSCA

Current official CSCS Detailed Content Outline retains:

**Kinematic principles of movement**
with examples:
- anatomical planes of movement;
- joint angles;
- velocity.

This supports MEC-02 as a core professional foundation.

NSCA does not provide enough technical detail to settle coordinate-system/orientation completeness.

Therefore it does not remove the identified blocker.

Check 34: **PASS WITH LIMITATION**.

---

## 20. ISB currentness

The current ISB Standards page was checked 2026-11-20 and still provides dedicated standardization material for:
- global coordinate systems;
- whole body orientation;
- joint coordinate systems;
- joint-specific kinematics.

The 2024 ISB-approved IMU joint-kinematics recommendations remain current and explicitly emphasize kinematic-model definition and reporting for reproducibility/comparability.

Check 35: **PASS**.

---

## 21. Current empirical representation evidence

Le et al. 2025:
- six Cardan sequences;
- in vivo and in vitro data;
- sequence choice produced substantial differences in some reported joint components.

This is sufficient to establish:
- representation/convention dependence is practically real;
- not every joint/task is equally sensitive.

Check 36: **PASS**.

---

# 22. Closure audit matrix

| Audit domain | Result |
|---|---|
| Original 14 exact items | PASS at content level |
| Reference frame / coordinate system | **BLOCKER** |
| 3D orientation / rotation representation | **BLOCKER** |
| Helical/screw axis | PASS — defer MEC-12/21 |
| Scalar ROM boundary | PASS with explicit condition |
| Trajectory completeness | repair within orientation cluster |
| Downstream ownership | coherent after repair |
| Current SI/professional/ISB evidence | PASS |

---

## 23. Closure decision

**MEC-02 CANNOT BE CLOSED YET.**

Reason:

The current source map contains kinematic outputs but omits the two constructs that define how those outputs are represented:

1. **reference frames / coordinate systems**;
2. **orientation / 3D rotation representation**.

One blocking conceptual cluster:

**coordinate/reference + orientation representation.**

No other project-relevant MEC-02 blocker was identified.

---

## 24. What remains valid

PASS-01 remains valid for all original 14 items.

Do not reopen:
- position;
- displacement;
- distance;
- velocity;
- acceleration;
- angular displacement;
- angular velocity;
- angular acceleration;
- planes;
- axes;
- joint-angle relative-orientation logic;
- segment trajectories;
- ROM;
- temporal characteristics;
- kinematics-vs-kinetics boundary.

Existing `MEC02-01…MEC02-10` remain valid but retain:

**MEC-02 AUDIT PENDING**

until the gap is repaired and repeat closure succeeds.

---

## 25. Exact next-pass scope

Next one narrow block:

**MEC-02/PASS-03 — reference frames, coordinate systems and 3D orientation representation gap closure.**

Required content:

1. global/reference/laboratory frame;
2. local/segment coordinate frame;
3. origin + basis axes + handedness/sign convention;
4. position/orientation relative to a frame;
5. rigid-body pose as position + orientation;
6. relative segment orientation / joint kinematics;
7. rotation matrices at conceptual level;
8. quaternions at conceptual level;
9. Euler/Cardan sequence as reporting representation;
10. sequence/order dependence;
11. singularity/gimbal-lock boundary without deep numerical treatment;
12. orientation trajectory vs point trajectory;
13. scalar ROM boundary in multidimensional motion;
14. handoff to MEC-12/MEC-21/TST.

After PASS-03:

**MEC-02/PASS-04 — repeat independent closure audit and synthesis.**

---

## 26. Evidence/source register

1. **BIPM — SI Brochure, 9th edition, v4.01, June 2026.**
2. **International Society of Biomechanics — Standards**, current page checked 2026-11-20.
3. **Cereatti et al. 2024 — ISB recommendations on the definition, estimation, and reporting of joint kinematics using wearable inertial measurement technology**, Journal of Biomechanics 173:112225, PMID 39032224.
4. **Wu et al. 2002 — ISB recommendation on joint coordinate systems**, Journal of Biomechanics 35:543–548, PMID 11934426.
5. **Le et al. 2025 — Cardan sequence selection influences subtalar and talonavicular joint kinematics**, Journal of Biomechanics 192:112948, PMID 40967106.
6. **NSCA — current CSCS Exam Description / Detailed Content Outline.**

---

## 27. Status

**MEC-02/PASS-02 — GAP AUDIT COMPLETE.**

Result:

- PASS-01 original content remains **14/14**;
- original content checks remain **42/42 resolved**;
- closure **NOT AUTHORIZED**;
- **1 blocking conceptual cluster** found;
- **2 primary missing constructs**:
  - reference frames / coordinate systems;
  - orientation / 3D rotation representation;
- trajectory/ROM refinements belong inside the same repair;
- canonical MEC-02 synthesis is **not created**.

Next:

**MEC-02/PASS-03 — reference frames, coordinate systems and 3D orientation representation gap closure.**

STOP after this PASS.
