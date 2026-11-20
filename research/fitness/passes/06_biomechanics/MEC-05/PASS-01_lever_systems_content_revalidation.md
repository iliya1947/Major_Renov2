# MEC-05 / PASS-01 — Lever systems content revalidation

Дата: 2026-11-20  
Статус: **CONTENT PASS COMPLETE — INDEPENDENT CLOSURE/GAP AUDIT PENDING**  
Область: 06 — Biomechanics  
Topic: MEC-05 — Lever systems

## 0. Source-of-truth / exact scope

Area 06 Section 5 contains **10 exact items**:

1. Fulcrum.
2. Effort force.
3. Resistance force.
4. First-class lever.
5. Second-class lever.
6. Third-class lever.
7. Human movement as predominantly third-class leverage.
8. Mechanical advantage/disadvantage.
9. Why poor mechanical advantage can be useful for speed/ROM.
10. Interaction of anatomical and external levers.

MEC-05 answers:

**how the relative positions of pivot, effort and resistance organize a lever system and transform force, displacement and velocity.**

It does not deeply own:
- generic torque/moment-arm geometry → MEC-04;
- force classification/FBD → MEC-03;
- muscle force-length/velocity and tendon mechanics → MEC-08/PHY;
- joint-specific anatomy/loading → MEC-12;
- exercise resistance profiles → MEC-09/10/11;
- exercise-specific synthesis → MEC-19/TEC;
- measurement/model uncertainty → MEC-21.

---

# 1. Qualification purpose / Question Card

## Decision

Can Nika identify a meaningful lever model in human movement without:
- confusing anatomical joint with universal fixed fulcrum;
- treating effort/resistance labels as intrinsic properties of a force;
- assuming every human movement is third-class;
- treating mechanical disadvantage as “bad”;
- treating lever geometry alone as proof of actual movement speed, ROM, muscle force or training effect?

## Question type

**Foundational lever-system classification / force-displacement transformation / musculoskeletal gearing / non-equivalence.**

## Critical outcomes

1. Define fulcrum/pivot relative to the modeled lever.
2. Define effort and resistance forces relative to the task/system.
3. Correctly distinguish first-, second- and third-class arrangements.
4. Treat lever class as a geometric model, not a universal label attached permanently to a joint.
5. Preserve the distinction between moment-arm mechanical advantage and actual dynamic performance.
6. Explain why short internal vs long external moment arms can amplify output excursion/velocity at the expense of force capacity in ideal/quasi-static geometry.
7. Preserve dynamic caveats: inertia, elasticity and muscle F-V can change actual speed/force outcomes.
8. Explain interaction between anatomical levers and external implement/machine levers.

## Evidence path

Priority:

1. foundational mechanics/simple-machine sources;
2. current anatomy/biomechanics educational sources for human lever mapping;
3. current musculoskeletal gearing literature;
4. current professional biomechanics scope.

---

# ITEM 1 — FULCRUM

## 2. Definition

A fulcrum/pivot is the reference about which a lever rotates in the simplified lever model.

In a rigid mechanical lever:
- it is the pivot point/axis.

In human movement:
- a joint or contact point can function as the modeled pivot;
- the relevant pivot depends on the selected system and task.

OpenStax describes a lever as a rigid arm pivoting on a fulcrum.

Canonical rule:

**fulcrum is model/task dependent; it is not automatically synonymous with one anatomical joint in every task.**

Confidence: **HIGH**.

---

## 3. Human-joint boundary

A synovial joint can be approximated as a pivot in simple planar analysis.

But biological joints may have:
- changing centers of rotation;
- translation plus rotation;
- multiple DOF.

Therefore the textbook lever fulcrum is an approximation.

Detailed joint-axis behavior remains MEC-12/MEC-21.

Canonical rule:

**anatomical joint ≠ mathematically fixed ideal hinge by default.**

Confidence: **HIGH**.

---

# ITEM 2 — EFFORT FORCE

## 4. Definition

Effort force is the input force used to act through the lever.

In a simple human musculoskeletal lever, effort commonly comes from:
- muscle/tendon force.

In an external machine/tool lever, effort may come from:
- hand force;
- foot force;
- cable/motor/other applied force.

Canonical rule:

**effort is a functional role in a lever model, not an intrinsic force category.**

Confidence: **HIGH**.

---

## 5. Effort arm

Effort-arm length is the relevant perpendicular/lever distance from fulcrum to the effort force line of action.

For ideal static lever balance:

`F_effort * r_effort = F_resistance * r_resistance`.

This is the same moment-balance foundation established in MEC-04.

Confidence: **HIGH**.

---

# ITEM 3 — RESISTANCE FORCE

## 6. Definition

Resistance/load force is the output-side force opposing or being moved/controlled by the effort.

It may be:
- body-segment weight;
- external load;
- gravity;
- contact load;
- machine/cable resistance;
- another mechanical interaction.

Canonical rule:

**resistance is a task-defined lever role, not necessarily one dumbbell or one gravitational force.**

Confidence: **HIGH**.

---

## 7. Resistance arm

Resistance arm is the relevant moment arm from fulcrum to resistance-force line of action.

It is not automatically:
- entire limb length;
- distance to the object center;
- segment anatomical length.

MEC-04 moment-arm rules remain controlling.

Confidence: **HIGH**.

---

# ITEM 4 — FIRST-CLASS LEVER

## 8. Geometric definition

First-class arrangement:

**fulcrum lies between effort and resistance.**

Order examples:

- effort — fulcrum — resistance;
- resistance — fulcrum — effort.

Because fulcrum position can vary, first-class geometry can have:
- MA > 1;
- MA = 1;
- MA < 1.

Canonical rule:

**first-class lever does not inherently mean force advantage or speed advantage.**

Confidence: **HIGH**.

---

## 9. Human example boundary

A common simplified example is head/neck balance or extension about the atlanto-occipital region:
- pivot/joint between muscle effort and anterior head-weight resistance.

This is a teaching model, not a complete cervical-spine loading model.

Confidence: **HIGH**.

---

# ITEM 5 — SECOND-CLASS LEVER

## 10. Geometric definition

Second-class arrangement:

**resistance lies between fulcrum and effort.**

In the ideal textbook arrangement:

- effort arm is longer than resistance arm;
- mechanical advantage > 1.

Thus a smaller effort force can balance/move a larger resistance force under ideal/quasi-static conditions.

Canonical rule:

**second-class geometry favors force transformation in the ideal lever model.**

Confidence: **HIGH**.

---

## 11. Human example boundary

Standing/rising onto the forefoot is commonly taught as a second-class lever:
- forefoot contact → fulcrum;
- body weight → resistance;
- Achilles/calf effort → effort.

However, the correct model depends on:
- which body/system is isolated;
- where the pivot/contact is defined;
- whether analysis is static, quasi-static or dynamic.

Canonical rule:

**lever-class example depends on the selected system/free body.**

Confidence: **HIGH**.

---

# ITEM 6 — THIRD-CLASS LEVER

## 12. Geometric definition

Third-class arrangement:

**effort lies between fulcrum and resistance.**

In the standard ideal arrangement:
- effort arm < resistance arm;
- force mechanical advantage < 1.

Therefore effort force generally must exceed the resistance force for static moment balance.

Canonical rule:

**third-class lever has a force disadvantage in the ideal lever geometry.**

Confidence: **HIGH**.

---

## 13. Common human example

Elbow flexion is commonly modeled as third-class:
- elbow joint → fulcrum;
- biceps/brachialis effort applied near elbow;
- forearm/hand/external load → resistance farther from elbow.

This explains why muscle force may exceed hand/load force.

Confidence: **HIGH**.

---

# ITEM 7 — HUMAN MOVEMENT AS PREDOMINANTLY THIRD-CLASS LEVERAGE

## 14. Evidence-qualified interpretation

Textbook anatomy sources commonly describe third-class levers as the most common lever arrangement in the human body.

A broader vertebrate biomechanics source likewise describes third-class levers as the most commonly encountered class in vertebrate bodies.

However, the project should not convert this into:

> “every human joint is a third-class lever.”

Human movement includes:
- first-class configurations;
- second-class configurations;
- third-class configurations;
- closed-chain/multi-contact conditions where simple single-lever classification is incomplete.

Canonical rule:

**many limb muscle actions are usefully modeled as third-class levers; human movement is not universally third-class.**

Confidence: **HIGH for common/predominant teaching model; context-dependent for individual movement.**

---

## 15. Lever class can change with model/task

The same anatomical region can be represented differently depending on:
- ground contact;
- whether proximal or distal segment is fixed;
- which resistance is modeled;
- chosen system boundary.

Therefore lever class belongs to:
- the modeled mechanical configuration;
not
- a permanent label attached to a bone/joint.

Canonical rule:

**lever class is configuration-dependent.**

Confidence: **HIGH**.

---

# ITEM 8 — MECHANICAL ADVANTAGE / DISADVANTAGE

## 16. Ideal lever mechanical advantage

For an ideal lever:

`IMA = r_effort / r_resistance`.

Equivalent force ratio at static ideal equilibrium:

`MA = F_resistance / F_effort`.

OpenStax explicitly relates ideal mechanical advantage to both:
- force ratio;
- effort/output displacement ratio.

Canonical rule:

**mechanical advantage is a transform ratio, not an absolute measure of performance quality.**

Confidence: **HIGH**.

---

## 17. Mechanical disadvantage

When:

`r_effort < r_resistance`

then:

`MA < 1`

and larger effort force is required for static equilibrium.

This is a force disadvantage.

It does not mean the system is biologically or functionally poorly designed.

Canonical rule:

**mechanical disadvantage ≠ functional disadvantage in every task.**

Confidence: **HIGH**.

---

## 18. Human musculoskeletal gearing

Current 2024 review on optimal musculoskeletal gearing describes mechanical advantage as the proportionality linking muscle input force/velocity to output force/velocity.

This supports treating skeletal lever geometry as a **gear ratio** between:
- muscle force/shortening;
and
- external force/motion.

Confidence: **HIGH**.

---

# ITEM 9 — WHY POOR MECHANICAL ADVANTAGE CAN BE USEFUL FOR SPEED / ROM

## 19. Geometric displacement/velocity transform

For a simple rigid lever with small rotations:

`s = r*theta`.

For the same angular displacement:
- a point farther from pivot travels a larger linear distance.

For angular velocity:

`v = omega*r`.

Thus when muscle effort acts close to the joint but the output point is farther away:
- small muscle/tendon excursion can correspond to larger distal displacement;
- muscle shortening velocity can map to larger distal velocity geometrically.

Classic human musculoskeletal analysis describes joint ROM and endpoint-speed capacity as inversely related to muscle moment arm for a given muscle excursion/shortening capacity.

Canonical rule:

**short internal leverage can geometrically amplify distal excursion and velocity.**

Confidence: **HIGH for kinematic/geometric transform.**

---

## 20. Current musculoskeletal evidence

A 2024 review of resistance-training adaptations explicitly notes the relationship:

`Delta L = Delta theta * r`

and explains that a larger internal moment arm requires greater muscle shortening for a given joint-angle change and greater muscle shortening velocity for a given joint angular velocity.

Thus a smaller internal moment arm can reduce required muscle excursion/shortening velocity for a given joint motion.

Confidence: **HIGH**.

---

## 21. Critical dynamic caveat

The simple statement:

> “poor mechanical advantage makes movement faster”

is too strong.

Actual movement speed also depends on:
- muscle force-velocity behavior;
- inertia;
- external load;
- tendon elasticity;
- stored elastic energy;
- neural activation;
- time available for acceleration.

Dynamic-lever literature has specifically challenged a universal force-speed tradeoff derived from lever geometry alone.

Current musculoskeletal gearing theory likewise treats performance as interaction of anatomy, muscle properties and external dynamics.

Canonical rule:

**mechanical disadvantage provides a geometric speed/excursion ratio; it does not guarantee higher realized movement speed.**

Confidence: **HIGH**.

---

## 22. ROM boundary

A small muscle moment arm can allow a given muscle excursion to support a larger joint angular excursion.

But actual joint ROM is also constrained by:
- joint anatomy;
- soft tissues;
- muscle-tendon length;
- contact/impingement;
- neuromotor control.

Canonical rule:

**lever geometry contributes to ROM capacity; it does not uniquely determine anatomical ROM.**

Confidence: **HIGH**.

---

# ITEM 10 — INTERACTION OF ANATOMICAL AND EXTERNAL LEVERS

## 23. Nested lever systems

Human exercise often contains multiple lever layers.

### Anatomical lever

Examples:
- bone segment about a joint;
- muscle effort acting through internal moment arm.

### External lever

Examples:
- dumbbell location relative to joint;
- barbell;
- machine arm;
- cable handle;
- tool;
- body-ground contact geometry.

The net joint demand depends on interaction between:
- internal anatomical leverage;
- external resistance leverage.

Canonical rule:

**exercise mechanics is often a coupled internal + external lever problem.**

Confidence: **HIGH**.

---

## 24. Same anatomical lever, different external lever

The same joint/muscle anatomy can face different external leverage when:
- grip position changes;
- load moves farther from joint;
- cable attachment changes;
- machine arm/cam geometry changes;
- body orientation changes.

Thus external joint moment can change without anatomical moment arm changing.

Confidence: **HIGH**.

---

## 25. Same external lever, different anatomy

Two people using the same machine/load can have different:
- limb lengths;
- joint centers;
- internal muscle moment arms;
- joint ROM;
- posture.

Therefore the same equipment geometry can produce different:
- external joint moments;
- muscle shortening requirements;
- internal force requirements.

Canonical rule:

**same machine setup ≠ same internal mechanics across people.**

Confidence: **HIGH**.

---

## 26. Machine/cam boundary

External mechanisms can alter resistance-arm geometry intentionally.

A current 2026 variable-cam study shows that changing machine moment-arm geometry can shape the external torque pattern through ROM.

This supports the general principle:

**external lever design can modify resistance profile.**

Detailed resistance-profile analysis belongs MEC-11/MEC-19.

Confidence: **HIGH**.

---

# PART B — LEVER CLASSIFICATION PRECISION

## 27. Class depends on relative order

Lever class is determined by the relative position/order of:

- fulcrum (F);
- effort (E);
- resistance/load (R).

### First class
F between E and R.

### Second class
R between F and E.

### Third class
E between F and R.

Canonical rule:

**class is determined by spatial ordering, not by whether a movement “feels hard” or which muscle is used.**

Confidence: **HIGH**.

---

## 28. Lever class does not uniquely determine mechanical advantage

First-class:
- MA can be <1, =1, or >1 depending on arm lengths.

Second-class ideal arrangement:
- typically MA >1.

Third-class ideal arrangement:
- typically MA <1.

Therefore:

**lever class constrains geometry but does not replace actual moment-arm calculation.**

Confidence: **HIGH**.

---

## 29. Static lever classification vs dynamic movement

Lever-class taxonomy is most transparent in:
- static;
- quasi-static;
- simplified planar conditions.

Dynamic multijoint movement adds:
- acceleration;
- segment inertia;
- time-varying moment arms;
- elastic elements;
- multi-contact interactions.

Canonical rule:

**lever class is an organizing model, not a complete dynamic simulation.**

Confidence: **HIGH**.

---

# PART C — CURRENT SOURCE / PROFESSIONAL CHECK

## 30. OpenStax mechanics

Current OpenStax simple-machine material defines:
- lever;
- fulcrum;
- effort/input force;
- resistance/output force;
- effort and resistance arms;
- ideal mechanical advantage.

It also states the fundamental force-distance tradeoff under ideal work conservation.

Confidence: **HIGH**.

---

## 31. OpenStax anatomy/physiology

Current OpenStax anatomy material describes:
- bones as lever elements;
- joints as modeled fulcrums;
- contracting skeletal muscle as effort;
- body/external resistance as load.

This supports the basic human-musculoskeletal mapping.

Confidence: **HIGH**.

---

## 32. Current musculoskeletal gearing review

Polet & Labonte 2024 reviews musculoskeletal gearing and defines mechanical advantage as the force/velocity transformation between muscle input and skeletal output.

This supports:
- mechanical advantage as a gear ratio;
- dynamic performance requiring more than static geometry.

Confidence: **HIGH**.

---

## 33. Current professional scope

Current NSCA CSCS DCO explicitly retains **lever systems** within kinetic laws/principles of movement under biomechanics.

MEC-05 is therefore a professional foundational topic.

Confidence: **HIGH professional-scope check**.

---

# PART D — BOUNDARIES WITH NEIGHBORING TOPICS

## 34. MEC-04

MEC-04 owns:
- moment arms;
- torque;
- generic mechanical advantage.

MEC-05 owns:
- lever-system roles;
- class taxonomy;
- force/displacement transformation;
- interaction of anatomical/external levers.

Canonical handoff:

**MEC-04 defines leverage geometry; MEC-05 organizes that geometry into lever systems.**

---

## 35. MEC-08 / PHY

MEC-05 can state the geometric force/velocity transform.

MEC-08/PHY own:
- muscle F-V;
- muscle excursion/fascicle architecture;
- tendon compliance;
- elastic storage/return.

Thus:

**lever ratio ≠ complete muscle performance.**

---

## 36. MEC-09/10/11

MEC-05 defines interaction between anatomical and external levers.

Specific resistance sources remain:
- MEC-09;
- MEC-10;
- MEC-11.

Examples:
- gravity;
- free weights;
- cables;
- bands;
- cams.

---

## 37. MEC-12 / MEC-21

MEC-12 owns:
- joint-specific anatomy;
- moving centers/axes;
- joint-specific loading.

MEC-21 owns:
- measurement/model uncertainty;
- exact lever/moment-arm estimation;
- dynamic models.

---

## 38. MEC-19 / TEC / PRO

MEC-05 can explain why changing:
- grip;
- load position;
- external lever arm;
- body orientation

changes mechanics.

It does not establish:
- best exercise;
- best lever setup;
- hypertrophy superiority;
- safe/unsafe technique;
- programming prescription.

---

# PART E — PERMANENT NON-EQUIVALENCES

## 39. MEC-05 rejects

1. fulcrum = always one fixed anatomical joint.
2. effort force = always muscle force.
3. resistance force = always external dumbbell weight.
4. lever class = intrinsic permanent label of a joint.
5. first-class lever = always mechanical advantage.
6. second-class lever = always better movement.
7. third-class lever = inefficient/bad design.
8. all human movement = third-class leverage.
9. mechanical advantage = training advantage.
10. mechanical disadvantage = functional disadvantage.
11. lever class = actual mechanical advantage value.
12. low MA = guaranteed high realized speed.
13. low MA = unlimited ROM.
14. geometric speed ratio = actual movement velocity.
15. simple static lever = full dynamic musculoskeletal system.
16. same external lever = same internal mechanics across people.
17. same anatomy = same external leverage across exercises.
18. distal displacement ratio = muscle force capacity.
19. lever geometry = training stimulus.
20. lever geometry = injury risk.

---

# PART F — EXACT 10-ITEM CONTENT AUDIT

## 40. Audit structure

Each exact Section 5 item was checked for:

1. definition/classification;
2. mechanical/dynamic boundary;
3. major misuse/non-equivalence.

| Item | Definition/class | Dynamic boundary | Misuse boundary | Result |
|---|---:|---:|---:|---:|
| 1 Fulcrum | PASS | PASS | PASS | PASS |
| 2 Effort force | PASS | PASS | PASS | PASS |
| 3 Resistance force | PASS | PASS | PASS | PASS |
| 4 First-class lever | PASS | PASS | PASS | PASS |
| 5 Second-class lever | PASS | PASS | PASS | PASS |
| 6 Third-class lever | PASS | PASS | PASS | PASS |
| 7 Predominantly third-class human movement | PASS | PASS | PASS | PASS |
| 8 Mechanical advantage/disadvantage | PASS | PASS | PASS | PASS |
| 9 Poor MA / speed-ROM utility | PASS | PASS | PASS | PASS |
| 10 Anatomical + external levers | PASS | PASS | PASS | PASS |

**PASS-01 content audit = 30/30 resolved.**

Exact current Section 5:

**10/10 content-covered.**

---

# PART G — STABLE FINDINGS

## 41. Stable findings

1. A lever model requires a defined fulcrum, effort and resistance.
2. Effort/resistance are task roles, not intrinsic force categories.
3. Lever class depends on the spatial order of fulcrum, effort and resistance.
4. First-class leverage can provide force advantage, disadvantage or neutrality depending on arm lengths.
5. Second-class ideal geometry generally has force MA >1.
6. Third-class ideal geometry generally has force MA <1.
7. Many human limb actions are usefully modeled as third-class, but human movement is not universally third-class.
8. Mechanical disadvantage can provide a geometric displacement/velocity ratio favoring distal excursion, but does not guarantee higher realized dynamic speed.
9. Mechanical advantage/disadvantage is not equivalent to training advantage/disadvantage.
10. Exercise mechanics often couples anatomical leverage with external equipment/load leverage.

---

# PART H — UNRESOLVED QUESTIONS RESERVED FOR PASS-02

## 42. Closure/gap questions

No exact Section 5 item is unresolved at content level.

PASS-02 must independently test:

1. Is **“Human movement as predominantly third-class leverage”** sufficiently precise, or should wording be narrowed to “many human limb actions are commonly modeled as third-class”?
2. Is standing on tiptoe safely retained as a second-class teaching example, or does system-boundary ambiguity require a source-map caveat?
3. Should **ideal vs actual mechanical advantage** become explicit in the source map?
4. Does the speed/ROM item need explicit wording that the relationship is **geometric/kinematic rather than guaranteed dynamic performance**?
5. Should the source map distinguish **force mechanical advantage** from **velocity/displacement ratio** explicitly?
6. Does “interaction of anatomical and external levers” require an explicit nested-lever or gearing item?
7. Is the first/second/third-class taxonomy sufficiently useful for exercise analysis, or should canonical synthesis demote it behind moment-arm mechanics?
8. Can MEC-05 close without source-map mutation?

If a foundational or high-risk wording gap is found, closure must be refused and a repair pass opened.

---

# PART I — SOURCE REGISTER

## Foundational / anatomy

1. **OpenStax Physics — 9.3 Simple Machines**, current site checked 2026-11-20.
2. **OpenStax Anatomy & Physiology — 11.1 Interactions of Skeletal Muscles, Their Fascicle Arrangement, and Their Lever Systems**, current site checked 2026-11-20.

## Current professional

3. **NSCA — current CSCS Detailed Content Outline**, current 2025 handbook/DCO checked 2026-11-20.

## Musculoskeletal gearing / mechanics

4. **Polet DT, Labonte D. Optimal Gearing of Musculoskeletal Systems. Integr Comp Biol. 2024;64(3):987-1006. PMID 38901962.**
5. **Chen Z, Franklin DW. Muscle Moment Arm-Joint Angle Relations in the Hip, Knee, and Ankle. Ann Biomed Eng. 2025;53(8):1757-1776. PMID 40343628.**
6. **Axford DT et al. Three-dimensional continuous muscle moment arm maps for the anatomical shoulder. J Biomech. 2025;182:112561. PMID 39946823.**
7. **Optimizing Resistance Training for Sprint and Endurance Athletes. 2024. PMID 39373864.**
8. **Umehara J et al. Skeletal muscle shape influences joint torque exertion through the mechanical advantages. J Appl Physiol. 2025. PMID 40192188.**

## Dynamic caveat / classic support

9. **Lieber RL et al. Musculotendon architecture and joint geometry review. 1992. PMID 1401783.**
10. **McHenry MJ. There is no trade-off between speed and force in a dynamic lever system. 2011. PMID 21147828.**
11. **Arnold AS et al. Comment: There is always a trade-off between speed and force in a lever system. 2011. PMID 21880618.**
12. **Nagano A, Komura T. Longer moment arm results in smaller joint moment development, power and work outputs in fast motions. 2003. PMID 14522209.**

These older dynamic papers are retained because they expose an important conceptual boundary: actual dynamic performance cannot be inferred from static lever geometry alone.

---

# 43. Confidence

### HIGH
- lever roles and class definitions;
- ideal mechanical advantage relation;
- third-class force disadvantage in the ideal lever model;
- anatomical + external lever interaction;
- geometric displacement/velocity transformation.

### HIGH with explicit context boundary
- many human limb actions commonly modeled as third-class;
- smaller internal leverage can support larger distal excursion/velocity ratio;
- second-class tiptoe teaching model.

### Not authorized as universal
- “all human movement is third-class”;
- “mechanical disadvantage makes actual motion faster”;
- lever geometry alone determines performance or training effect.

---

# 44. Status

**MEC-05/PASS-01 — CONTENT PASS COMPLETE.**

Results:

- exact Area 06 Section 5 = **10/10 content-covered**;
- content audit = **30/30 resolved**;
- no source-map mutation made yet;
- wording/architecture questions reserved for independent audit;
- canonical MEC-05 finding **not created**;
- `CLOSED_FOR_PRACTICE` **not assigned**.

Next one block:

**MEC-05/PASS-02 — independent closure/gap audit and synthesis.**

STOP after this PASS.
