# MEC-04 / PASS-01 — Torque / moment arms content revalidation

Дата: 2026-11-20  
Статус: **CONTENT PASS COMPLETE — INDEPENDENT CLOSURE/GAP AUDIT PENDING**  
Область: 06 — Biomechanics  
Topic: MEC-04 — Torque / moment arms

## 0. Source-of-truth / exact scope

Area 06 Section 4 contains **10 exact items**:

1. Torque/moment.
2. Perpendicular moment arm.
3. External moment arm.
4. Internal muscle moment arm.
5. Joint angle dependence.
6. Mechanical advantage.
7. How moment arms change through ROM.
8. Why the same load creates different joint demands at different positions.
9. Why muscle force can greatly exceed external load.
10. Relationship between torque and exercise difficulty.

MEC-04 answers:

**how force geometry creates rotational demand about a joint/reference axis and how internal/external moment arms transform force into joint moment.**

It does not deeply own:
- Newtonian rotational foundations → MEC-01;
- generic force/resultant classification and FBD → MEC-03;
- lever-class taxonomy → MEC-05;
- joint-specific anatomy/loading → MEC-12;
- muscle-tendon force production mechanisms → MEC-08/PHY;
- exercise-specific recommendations → MEC-19/TEC;
- inverse-dynamics/model uncertainty → MEC-21.

---

# 1. Qualification purpose / Question Card

## Decision

Can Nika correctly reason from:
- external force;
- line of action;
- moment arm;
- joint angle;
- internal muscle leverage;

to:
- external/internal joint moment;
- approximate force requirement;
- position-dependent mechanical demand;

without equating:
- load mass with joint moment;
- moment with muscle force;
- larger external moment with universally greater difficulty/stimulus?

## Question type

**Foundational rotational geometry / moment-arm mechanics / mechanical-advantage interpretation / non-equivalence.**

## Critical outcomes

1. Correct torque/moment definition.
2. Correct perpendicular-moment-arm definition.
3. Separate external and internal moment arms.
4. Make reference axis/joint center explicit.
5. Preserve joint-angle dependence.
6. Define mechanical advantage at the correct system level.
7. Explain why external joint moment can change across ROM under constant load.
8. Explain why internal muscle force can exceed external load.
9. Avoid converting net/internal moments into a unique individual-muscle force.
10. Avoid treating torque alone as exercise difficulty or adaptation.

## Evidence path

Priority:

1. current foundational mechanics;
2. current biomechanics moment-arm literature;
3. current professional biomechanics scope;
4. current human modeling/measurement evidence.

---

# ITEM 1 — TORQUE / MOMENT

## 2. Definition

Torque or moment of a force about a point/axis is the rotational effect of that force.

Vector form:

`tau = r × F`.

Magnitude:

`|tau| = r*F*sin(phi)`.

Equivalent perpendicular-distance form:

`|tau| = F*r_perp`.

where:
- `r` = position vector from reference point/axis to the force application point;
- `phi` = angle between `r` and `F`;
- `r_perp` = perpendicular distance from the reference axis/point to the force's line of action.

NASA's current torque reference uses this same perpendicular-distance logic.

Canonical rule:

**moment depends on force + geometry + chosen reference.**

Confidence: **HIGH**.

---

## 3. Torque requires a reference

A statement such as:

> “the force creates 100 N·m”

is incomplete unless it is clear:
- about what point;
- about what joint;
- about what axis;
- under what sign convention.

The same force can produce:
- positive moment;
- negative moment;
- zero moment;

about different references.

Canonical rule:

**force has no single universal torque independent of reference.**

Confidence: **HIGH**.

---

## 4. Torque unit vs energy unit

SI torque unit:

`N·m`.

Energy/work also uses:

`J = N·m`.

But torque and energy are different physical quantities.

Torque is not normally reported in joules.

Canonical rule:

**same dimensional product N·m does not make torque equal to work/energy.**

Confidence: **HIGH**.

---

# ITEM 2 — PERPENDICULAR MOMENT ARM

## 5. Definition

The perpendicular moment arm is the shortest perpendicular distance between:
- the chosen axis/reference;
and
- the force's line of action.

It is not necessarily:
- the anatomical segment length;
- the distance to the point where force is applied;
- the straight-line distance from joint to load.

Canonical rule:

**moment arm = perpendicular distance to line of action, not generic lever length.**

Confidence: **HIGH**.

---

## 6. Line of action matters

If a force line passes directly through the chosen joint axis:

`r_perp = 0`

therefore:

`tau = 0`

about that axis, even if:
- force magnitude is large;
- the application point is physically far from the joint.

Canonical rule:

**large force + zero moment arm = zero moment about that axis.**

Confidence: **HIGH**.

---

## 7. Point of application vs line of action

Moving a force application point along the same infinite line of action does not necessarily change the moment about a given point in ideal rigid-body mechanics.

What matters is the perpendicular offset of that line from the reference.

Real exercise contacts can also change:
- line of action;
- force direction;
- distributed load/contact pattern.

Those changes can alter moment.

Canonical rule:

**point distance alone is insufficient; line of action is the controlling geometry.**

Confidence: **HIGH**.

---

# ITEM 3 — EXTERNAL MOMENT ARM

## 8. Definition

External moment arm is the perpendicular distance from the relevant joint/reference axis to the line of action of an external force.

Common external forces:
- gravity on an implement/body segment;
- cable force;
- band tension;
- machine resistance;
- GRF;
- manual resistance.

External joint moment magnitude for one force:

`M_ext = F_ext * r_ext`.

For multiple forces:

`M_ext,total = sum of signed/vector moments of all relevant external forces`.

Canonical rule:

**external moment arm belongs to a specific external force and reference axis.**

Confidence: **HIGH**.

---

## 9. External load mass is not external joint moment

A 20 kg implement does not impose one fixed joint moment.

Joint moment depends on:
- gravitational force;
- acceleration/inertia;
- external force direction;
- moment arm;
- joint/segment posture;
- other contacts/supports.

Therefore:

**same kg ≠ same external moment.**

Confidence: **HIGH**.

---

## 10. External resistance profile

As joint position changes, the external force line can change relative to the joint.

Examples:
- gravity remains approximately vertical but segment/load position changes;
- cable direction can change with pulley geometry;
- band force magnitude and direction can change with stretch;
- machine cams can deliberately change effective external moment arm.

Thus:

**constant nominal load does not imply constant joint torque through ROM.**

Confidence: **HIGH**.

---

# ITEM 4 — INTERNAL MUSCLE MOMENT ARM

## 11. Definition

A muscle moment arm is the perpendicular distance from the relevant joint axis to the muscle/tendon line of action, for a specified rotational degree of freedom.

For one simplified muscle contribution:

`M_muscle = F_muscle * r_muscle`.

Current systematic review evidence describes moment arm as the property that associates muscle force with joint moment.

Canonical rule:

**muscle moment arm converts muscle force into a joint moment contribution.**

Confidence: **HIGH**.

---

## 12. Muscle moment arm is not external moment arm

External moment arm:
- geometry of an external force line relative to the joint.

Internal muscle moment arm:
- geometry of muscle/tendon line of action relative to the joint axis.

They can change differently across ROM.

Canonical rule:

**external moment arm ≠ internal muscle moment arm.**

Confidence: **HIGH**.

---

## 13. Muscle moment arm is not moment

Moment arm unit:

`m`.

Moment/torque unit:

`N·m`.

A large moment arm does not itself mean a large joint moment unless the force is known.

Canonical rule:

**moment arm is geometry; moment is force × geometry.**

Confidence: **HIGH**.

---

## 14. 3D / degree-of-freedom boundary

In 3D joints, a muscle can have different moment-arm components about different rotational axes/degrees of freedom.

A muscle may contribute:
- flexion/extension;
- ab/adduction;
- axial rotation;

with different moment-arm magnitudes/signs depending on pose.

Current 2025 shoulder mapping work demonstrates continuous 3D moment-arm variation and direction-specific contributions.

Canonical rule:

**“the moment arm of a muscle” is incomplete without joint pose and rotational axis/DOF.**

Confidence: **HIGH**.

---

# ITEM 5 — JOINT ANGLE DEPENDENCE

## 15. Moment arms vary with joint angle

Muscle/tendon lines of action and joint geometry change as joints rotate.

Therefore internal moment arms are generally functions of joint angle:

`r_m = r_m(theta)`.

A 2025 systematic visualization collected **300 moment-arm datasets** across hip, knee and ankle and showed complex moment-arm/joint-angle relationships.

Current Achilles data also show clear angle-dependent moment-arm changes under weight-bearing conditions.

Canonical rule:

**internal moment arm is not generally a constant across ROM.**

Confidence: **HIGH**.

---

## 16. External moment arms also vary with posture

For many exercises, posture changes:
- joint position;
- segment orientation;
- load line relative to the joint.

Therefore:

`r_ext = r_ext(theta, posture, force direction)`.

Even with constant external force magnitude:

`M_ext(theta) = F_ext * r_ext(theta)`

can vary substantially.

Confidence: **HIGH**.

---

## 17. Joint angle affects more than moment arm

Observed joint torque capacity across angle can change because of multiple factors:

- internal muscle moment arms;
- muscle length/force-length state;
- tendon behavior;
- passive tissue contribution;
- neural activation;
- multi-joint geometry.

Current 2025 joint moment-angle synthesis confirms that joint moment-angle relationships are complex.

Canonical rule:

**angle-dependent joint torque ≠ moment-arm effect alone.**

Confidence: **HIGH**.

---

# ITEM 6 — MECHANICAL ADVANTAGE

## 18. Lever-system mechanical advantage

For a simple equilibrium lever:

`F_internal * r_internal = F_external * r_external`.

Therefore:

`F_external / F_internal = r_internal / r_external`.

A useful mechanical-advantage quantity can be written:

`MA = r_internal / r_external`.

If:

`r_internal < r_external`

then the internal force required for moment balance is larger than the external force.

Canonical rule:

**mechanical advantage is a force-transformation ratio determined by moment-arm geometry under the specified model.**

Confidence: **HIGH**.

---

## 19. Mechanical advantage does not mean “better”

A high mechanical advantage can:
- reduce required force for a given external moment;
- reduce muscle shortening speed for a given joint angular speed depending on geometry.

A low mechanical advantage can permit:
- larger endpoint movement/speed for a given muscle excursion;
- different force/velocity tradeoffs.

Detailed lever-system implications remain MEC-05/MEC-08.

Canonical rule:

**mechanical advantage ≠ training advantage.**

Confidence: **HIGH**.

---

## 20. Whole-joint systems are not one-muscle levers

Real joints often have:
- multiple agonists;
- antagonists;
- passive structures;
- multiple DOF;
- changing centers/axes;
- co-contraction.

Therefore simple `MA = r_internal/r_external` is a useful conceptual model, not a complete muscle-force solution.

Canonical rule:

**simple lever mechanical advantage ≠ unique multimuscle force-sharing solution.**

Confidence: **HIGH**.

---

# ITEM 7 — HOW MOMENT ARMS CHANGE THROUGH ROM

## 21. Internal moment-arm profiles

Current evidence directly supports non-linear variation across ROM.

Chen & Franklin 2025 compiled 300 datasets for hip/knee/ankle muscles and found muscle-specific joint-angle relations.

Axford et al. 2025 measured continuous 3D shoulder moment-arm maps and showed plane/position-dependent differences among shoulder muscles.

Current 2026 glenohumeral modeling work likewise calculates dynamic muscle moment arms throughout motion.

Canonical rule:

**moment-arm profiles are muscle-, joint-, DOF- and angle-specific.**

Confidence: **HIGH**.

---

## 22. Individual variability

Moment arms vary across individuals because of:
- bone geometry;
- attachment locations;
- joint-center estimates;
- tendon path/wrapping;
- body size/shape.

Current Achilles work reports sufficiently high inter-individual variability that one universal angle-based model was not supported.

Canonical rule:

**population-average moment arm ≠ exact individual moment arm.**

Confidence: **HIGH**.

---

## 23. Measurement/model boundary

Muscle moment arms may be estimated using:
- geometric imaging;
- tendon-excursion methods;
- dynamic imaging;
- musculoskeletal modeling.

Different methods/models can yield different estimates.

MEC-04 owns the mechanical meaning.

MEC-21 owns:
- method validity;
- joint-center sensitivity;
- model uncertainty;
- subject-specific estimation.

Canonical rule:

**moment-arm estimate ≠ directly observed invariant anatomical constant.**

Confidence: **HIGH**.

---

# ITEM 8 — SAME LOAD, DIFFERENT JOINT DEMANDS AT DIFFERENT POSITIONS

## 24. External geometry effect

For the same external force magnitude:

`M_ext = F_ext * r_ext`.

If joint/posture changes alter `r_ext`, external joint moment changes.

This is the basic mechanical reason one load can feel mechanically different across positions.

Confidence: **HIGH**.

---

## 25. Example: gravity resistance

For a constant mass under gravity:
- weight is approximately constant;
- gravitational moment arm about a joint changes as the segment/load line changes.

Therefore gravitational joint moment can:
- increase;
- peak;
- decrease;

through a repetition.

Canonical rule:

**constant gravitational force ≠ constant joint moment.**

Confidence: **HIGH**.

---

## 26. Dynamic boundary

During acceleration/deceleration:
- inertial terms;
- changing force directions;
- additional segment dynamics

also contribute.

Therefore the simple `F*r_perp` external-gravity analysis is most directly applicable to:
- static;
- quasi-static;
- or isolated force-component reasoning.

Canonical rule:

**position-dependent gravity moment ≠ complete dynamic joint demand.**

Confidence: **HIGH**.

---

## 27. Posture sensitivity

Current 2025 computational work on one-arm pulling found that joint-angle deviations under 5° could create meaningful changes in upper-extremity/trunk joint moments.

This supports a project warning:

**small posture changes can materially change modeled joint demand when they change force geometry.**

Magnitude is task/model dependent.

Confidence: **HIGH**.

---

# ITEM 9 — WHY MUSCLE FORCE CAN GREATLY EXCEED EXTERNAL LOAD

## 28. Moment-balance mechanism

In a simple static/quasi-static single-muscle model:

`F_muscle * r_muscle = F_external * r_external`.

Therefore:

`F_muscle = F_external * (r_external / r_muscle)`.

If the muscle moment arm is much shorter than the external moment arm:

`r_external >> r_muscle`

then:

`F_muscle >> F_external`.

This is normal human-joint mechanics and does not violate force balance.

Confidence: **HIGH**.

---

## 29. Current evidence relevance

Current 2024 systematic review of human muscle specific tension emphasizes that estimating muscle force from joint torque requires:
- muscle contribution;
- activation;
- tendon compliance;
- joint moment arm.

Current 2026 ankle-equilibrium work states directly that a longer Achilles moment arm requires less muscle force for a given plantarflexion moment.

Canonical rule:

**joint moment + moment-arm geometry, not external load magnitude alone, governs force transformation.**

Confidence: **HIGH**.

---

## 30. Multi-muscle boundary

Real joint force sharing includes:
- synergists;
- antagonists;
- passive tissues;
- biarticular muscles.

Therefore:

`F_muscle = M_joint/r_muscle`

is not a valid unique individual-muscle estimate unless the contribution of that muscle is separately established.

Canonical rule:

**moment equilibrium explains why muscle forces can be high; it does not uniquely solve muscle force sharing.**

Confidence: **HIGH**.

---

# ITEM 10 — RELATIONSHIP BETWEEN TORQUE AND EXERCISE DIFFICULTY

## 31. External joint moment as one demand descriptor

For a given task, larger external joint moment generally means a larger opposing internal joint moment is required to satisfy the rotational dynamics, all else equal.

Therefore external moment is a useful mechanical-demand descriptor.

Confidence: **HIGH**.

---

## 32. Torque is not whole-exercise difficulty

Perceived/actual exercise difficulty also depends on:
- internal moment arms;
- angle-specific strength;
- muscle length/state;
- contraction velocity;
- fatigue;
- coordination;
- stabilization;
- multiple-joint load sharing;
- acceleration/inertia;
- technique;
- participant-specific anthropometry.

Canonical rule:

**external torque ≠ complete exercise difficulty.**

Confidence: **HIGH**.

---

## 33. Same torque, different internal demand

Two conditions can create similar external joint moment while differing in:
- muscle moment arms;
- muscle force sharing;
- contraction velocity;
- muscle length;
- co-contraction;
- passive tissue contribution.

Therefore:

**same external joint moment ≠ same muscle force/stimulus.**

Confidence: **HIGH**.

---

## 34. Difficulty vs training stimulus

A larger external or internal joint moment does not automatically prove:
- greater hypertrophy;
- greater strength adaptation;
- greater injury risk;
- superior exercise selection.

Those require:
- physiological mechanism;
- tissue loading;
- outcome evidence;
- program context.

Canonical rule:

**mechanical demand descriptor ≠ training-outcome proof.**

Confidence: **HIGH**.

---

# PART B — CURRENT SOURCE / PROFESSIONAL CHECK

## 35. Current NASA foundational mechanics

Current NASA Glenn torque material retains:
- moment/torque as force × perpendicular distance;
- force line through pivot → zero moment;
- geometry/reference dependence.

This supports MEC-04's basic mechanics.

Confidence: **HIGH**.

---

## 36. Current professional scope

Current NSCA CSCS Exam Description continues to place biomechanics inside Scientific Foundations / Exercise Science.

The current detailed content outline retains:
- momentum;
- torque;
- force;
- lever systems;
- force-time;
- force-velocity

as kinetic biomechanics competencies.

MEC-04 therefore remains a professional foundational topic.

Confidence: **HIGH professional-scope check**.

---

## 37. Current moment-arm evidence

Chen & Franklin 2025 systematic visualization:
- 300 moment-arm datasets;
- hip/knee/ankle;
- complex muscle-specific moment-arm/joint-angle relations.

Axford et al. 2025:
- continuous 3D shoulder moment-arm mapping;
- clear position/plane-specific muscle leverage.

Hardy et al. 2026:
- dynamic moment-arm computation through glenohumeral motion.

These sources support:
- joint-angle dependence;
- 3D/DOF dependence;
- method/model relevance.

Confidence: **HIGH**.

---

## 38. Current angle-torque evidence

Chen & Franklin 2025 joint moment-angle/velocity synthesis compiled **962 datasets** and confirms that joint torque capacity changes with angle/velocity and cannot be reduced to moment arm alone.

A 2026 shoulder-rotator systematic review similarly finds angle-dependent torque curves and substantial methodological heterogeneity.

Canonical rule:

**joint torque-angle relationship is multi-determinant.**

Confidence: **HIGH**.

---

# PART C — BOUNDARIES WITH NEIGHBORING TOPICS

## 39. MEC-01

MEC-01 owns:
- torque as rotational mechanics quantity;
- angular momentum relationship;
- vector foundations.

MEC-04 owns:
- force-line geometry;
- perpendicular distance;
- external/internal moment arms;
- mechanical advantage.

Canonical handoff:

**MEC-01 defines torque; MEC-04 explains how force geometry creates it.**

---

## 40. MEC-03

MEC-03 owns:
- FBD;
- external/internal/net moment classification.

MEC-04 owns:
- moment-arm geometry that creates those moments.

Canonical handoff:

**MEC-03 identifies the forces/moments; MEC-04 resolves their leverage geometry.**

---

## 41. MEC-05

MEC-04 defines mechanical advantage through moment-arm ratios.

MEC-05 owns:
- first/second/third-class lever taxonomy;
- fulcrum/effort/resistance architecture;
- human lever-system interpretation.

No duplication.

---

## 42. MEC-08 / PHY

MEC-04 owns geometric leverage.

MEC-08/PHY own:
- muscle force capacity;
- force-length;
- intrinsic force-velocity;
- tendon behavior;
- architecture.

Moment arm affects how muscle force maps to joint moment but does not define force-generating physiology.

---

## 43. MEC-12 / MEC-21

MEC-04 owns generic moment-arm mechanics.

MEC-12 owns:
- joint-specific geometry/loading.

MEC-21 owns:
- moment-arm estimation methods;
- joint-center sensitivity;
- inverse-dynamics/model uncertainty.

---

## 44. TEC / PRO / MEC-19

MEC-04 may describe:
- where external moment peaks;
- how load geometry changes;
- how internal leverage changes.

It does not prescribe:
- “best ROM”;
- “best exercise”;
- “optimal machine/cable angle”;
- load/reps/tempo.

Those remain TEC/PRO/MEC-19 with outcome evidence.

---

# PART D — PERMANENT NON-EQUIVALENCES

## 45. MEC-04 rejects

1. torque = force.
2. torque = energy.
3. moment arm = segment length.
4. moment arm = distance to force application point.
5. external moment arm = internal muscle moment arm.
6. moment arm = moment/torque.
7. same kg = same joint moment.
8. constant force = constant joint moment through ROM.
9. muscle moment arm = constant across ROM.
10. population-average moment arm = exact individual moment arm.
11. large moment arm = large moment without force information.
12. mechanical advantage = training advantage.
13. external joint moment = individual muscle force.
14. net joint moment / one muscle moment arm = unique muscle force in a multimuscle joint.
15. angle-dependent torque = moment-arm effect alone.
16. same external torque = same internal muscle demand.
17. higher external torque = automatically greater hypertrophy.
18. higher external torque = automatically greater injury risk.
19. exercise difficulty = external torque alone.
20. moment-arm estimate = invariant directly measured anatomy.

---

# PART E — EXACT 10-ITEM CONTENT AUDIT

## 46. Audit structure

Each exact Section 4 item was checked for:

1. mechanical definition;
2. geometric/model boundary;
3. major non-equivalence/practical misuse.

| Item | Definition | Geometry/model | Boundary | Result |
|---|---:|---:|---:|---:|
| 1 Torque/moment | PASS | PASS | PASS | PASS |
| 2 Perpendicular moment arm | PASS | PASS | PASS | PASS |
| 3 External moment arm | PASS | PASS | PASS | PASS |
| 4 Internal muscle moment arm | PASS | PASS | PASS | PASS |
| 5 Joint angle dependence | PASS | PASS | PASS | PASS |
| 6 Mechanical advantage | PASS | PASS | PASS | PASS |
| 7 Moment arms through ROM | PASS | PASS | PASS | PASS |
| 8 Same load / different joint demands | PASS | PASS | PASS | PASS |
| 9 Muscle force can exceed external load | PASS | PASS | PASS | PASS |
| 10 Torque vs exercise difficulty | PASS | PASS | PASS | PASS |

**PASS-01 content audit = 30/30 resolved.**

Exact current Section 4:

**10/10 content-covered.**

---

# PART F — STABLE FINDINGS

## 47. Stable findings

1. Torque/moment is force × perpendicular distance about a specified reference.
2. Moment arm is the perpendicular distance to the force line of action, not generic segment length.
3. External and internal muscle moment arms are different geometric quantities.
4. Moment arms can vary substantially with joint position/ROM.
5. Muscle moment arms are joint-, muscle-, DOF- and person-specific.
6. External joint moment can change across ROM under constant nominal load.
7. Joint torque-angle capacity is determined by more than moment arms alone.
8. Short internal muscle moment arms can require muscle force much greater than external load.
9. Simple moment balance explains force transformation but does not solve multimuscle force sharing.
10. External joint moment is a useful mechanical-demand descriptor but not a complete measure of exercise difficulty or training stimulus.

---

# PART G — UNRESOLVED QUESTIONS RESERVED FOR PASS-02

## 48. Closure/gap questions

No exact Section 4 item is unresolved at content level.

PASS-02 must independently test:

1. Should **line of action** become an explicit source-map item rather than remain embedded inside moment-arm definitions?
2. Should **reference axis / center of rotation / instantaneous axis** become explicit in MEC-04 or remain MEC-02/MEC-12/MEC-21?
3. Is “internal muscle moment arm” sufficient, or should the map explicitly distinguish **muscle/tendon excursion moment arm vs geometric perpendicular moment arm**?
4. Does the simple mechanical-advantage ratio need an explicit **velocity/excursion tradeoff** in MEC-04, or is that better owned by MEC-05/MEC-08?
5. Should MEC-04 explicitly include **multiple external forces / resultant external moment** as a map item?
6. Is **joint moment vs joint torque terminology** sufficiently standardized for project use?
7. Is “relationship between torque and exercise difficulty” too vague and in need of a source-map wording correction such as **external joint moment as mechanical demand, not total difficulty**?
8. Can MEC-04 close without source-map mutation?

If a real foundational gap is found, closure must be refused and a dedicated repair pass opened.

---

# PART H — SOURCE REGISTER

## Current foundational/professional

1. **NASA Glenn — Torque (Moment)**, current page checked 2026-11-20.
2. **NSCA — current CSCS Exam Description**, checked 2026-11-20.
3. **NSCA — current Certification Handbook / Detailed Content Outline**, current site version checked 2026-11-20.

## Current moment-arm / joint-angle evidence

4. **Chen Z, Franklin DW. Muscle Moment Arm-Joint Angle Relations in the Hip, Knee, and Ankle: A Visualization of Datasets. Ann Biomed Eng. 2025;53(8):1757-1776. PMID 40343628.**
5. **Axford DT et al. Three-dimensional continuous muscle moment arm maps for the anatomical shoulder. J Biomech. 2025;182:112561. PMID 39946823.**
6. **Hardy BJ et al. Quantifying dynamic muscle lengths and moment arms of musculoskeletal joints using FEBio Studio. J Biomech. 2026;202:113308. PMID 41996994.**
7. **Dynamic changes in the moment arm of the Achilles tendon during weight bearing conditions. 2026. PMID 41456489.**

## Current force / torque interpretation

8. **Chen Z, Franklin DW. Joint moment-angle/velocity relations in the hip, knee, and ankle: A meta-visualization of datasets. J Biomech. 2025. PMID 40117874.**
9. **Persad LS et al. Specific tension of human muscle in vivo: a systematic review. J Appl Physiol. 2024;137(4):945-962. PMID 39169839.**
10. **Khair RM et al. Mechanical equilibrium of the ankle joint: Implications for Achilles tendon injury. Clin Biomech. 2026;136:106827. PMID 41865661.**
11. **Umehara J et al. Skeletal muscle shape influences joint torque exertion through the mechanical advantages. J Appl Physiol. 2025;138(5):1119-1132. PMID 40192188.**
12. **Subtle Kinematic Changes During One-Arm Pulling and Their Implications on Upper Extremity and Trunk Moments. 2025. PMID 39981993.**
13. **The torque-angle relationship of shoulder rotator muscles: A systematic review. 2026. PMID 42856762.**

---

# 49. Confidence

### HIGH
- torque/moment definition;
- perpendicular moment arm definition;
- external/internal moment-arm distinction;
- joint-angle dependence;
- simple mechanical-advantage / moment-balance reasoning;
- same load ≠ same joint moment;
- muscle force can exceed external load through leverage.

### HIGH concept / model dependent in exact magnitude
- angle-specific muscle moment arms;
- person-specific moment arms;
- external joint-demand profiles;
- internal muscle-force inference.

### Deferred
- exact muscle moment-arm measurement method validity;
- joint-center/axis uncertainty;
- full 3D instantaneous-axis formulation;
- force-sharing optimization;
- exercise-specific resistance profiles;
- training-outcome inference.

---

# 50. Status

**MEC-04/PASS-01 — CONTENT PASS COMPLETE.**

Results:

- exact Area 06 Section 4 = **10/10 content-covered**;
- content audit = **30/30 resolved**;
- no source-map mutation made yet;
- reference-axis / line-of-action / moment-arm-method / wording questions reserved for independent audit;
- canonical MEC-04 finding **not created**;
- `CLOSED_FOR_PRACTICE` **not assigned**.

Next one block:

**MEC-04/PASS-02 — independent closure/gap audit and synthesis.**

STOP after this PASS.
