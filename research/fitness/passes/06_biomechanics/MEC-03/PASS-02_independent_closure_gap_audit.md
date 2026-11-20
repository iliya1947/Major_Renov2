# MEC-03 / PASS-02 — Independent closure / gap audit after kinetics content pass

Дата: 2026-11-20  
Статус: **CLOSURE NOT AUTHORIZED — FREE-BODY / TERMINOLOGY REPAIR REQUIRED**  
Область: 06 — Biomechanics  
Topic: MEC-03 — Kinetics

## 0. Audit purpose

This is the mandatory independent audit after:

- `MEC-03/PASS-01 — Kinetics content revalidation`;
- exact Area 06 Section 3 coverage = **14/14**;
- PASS-01 content checks = **42/42 resolved**.

PASS-02 tests whether MEC-03 can be closed without a foundational kinetics gap or ambiguous source-map terminology.

The audit specifically retests:

1. external/internal force classification;
2. free-body/system-boundary logic;
3. ground-reaction/contact-force interpretation;
4. muscle/tendon/internal-force inference;
5. joint-reaction-force terminology;
6. inertial-force terminology;
7. external/internal/net joint moments;
8. force-time and force-velocity scope;
9. downstream ownership with MEC-04/08/12/21.

---

# PART A — ORIGINAL 14-ITEM RE-AUDIT

## 1. External and internal forces

PASS-01 correctly states that external/internal classification depends on the chosen system.

Audit questions:

1. Is the mechanical system required before classifying forces? → **PASS**.
2. Are only external forces included in the Newton-Euler balance of that free body? → **PASS**.
3. Can the same physical interaction change external/internal classification when the system boundary changes? → **PASS**.

However, the source map itself has no explicit item for the tool that operationalizes this distinction:

**free-body diagram / system-boundary analysis.**

This becomes the primary blocker.

---

## 2. Ground-reaction force

Audit:

4. GRF is correctly classified as an external ground-body contact force → **PASS**.
5. GRF is distinct from muscle and joint-reaction/contact quantities → **PASS**.
6. Multi-contact separation is correctly left to additional measurement/modeling → **PASS**.

Center of pressure/free moment are not required additions here because:
- CoP already exists in MEC-06;
- detailed force-plate measurement remains TST/MEC-21.

No separate blocker.

---

## 3. Muscle and tendon force

Audit:

7. EMG ≠ muscle force → **PASS**.
8. Net joint moment does not uniquely determine individual muscle forces → **PASS**.
9. Tendon-force estimation is method/model dependent → **PASS**.
10. Muscle force and tendon force are related but not universally identical → **PASS**.

Current CEDE consensus remains fully consistent with these limits.

No separate blocker.

---

## 4. Joint reaction force

PASS-01 correctly recognized terminology risk, but the wording still needs tightening.

Baltzopoulos' reporting guidance states that inverse-dynamics outputs include joint reaction forces and recommends distinguishing:

- **Total Joint Reaction Force** when actual internal forces are explicitly represented;
- **Partial Joint Reaction Force** when actual internal forces are replaced by equivalent resultant moments.

The paper explicitly argues against ambiguous alternative labels such as:
- net joint force;
- resultant force;
- intersegmental force;
- bone-on-bone force

as substitutes for properly defined JRF terminology.

Therefore the PASS-01 shorthand:

> inverse-dynamics resultant/intersegmental force ≠ automatically total articular contact load

captures the anti-overreach intent but is not sufficiently precise as canonical terminology.

Required repair:

**source-map item 6 should become “Joint reaction force — partial vs total definition/reporting”.**

Audit check 11: **TERMINOLOGY REPAIR REQUIRED**.

---

## 5. Friction / normal force

Audit:

12. normal force ≠ weight → **PASS**.
13. static friction need not equal μN except at limiting slip → **PASS**.
14. real contact interfaces need not behave as ideal Coulomb point contacts → **PASS**.

No blocker.

---

## 6. Inertial forces

The current source-map label:

**Inertial forces**

is too ambiguous.

It can be interpreted as:
- D'Alembert pseudo-force/bookkeeping term;
- non-inertial-frame fictitious force;
- physical dynamic effects associated with accelerating distributed mass.

PASS-01 correctly separated these, but the map label still invites category error.

Required repair:

**source-map item 9 should become “Inertial terms / D'Alembert pseudo-forces and distributed-mass inertial contributions”.**

This keeps:
- pseudo-force bookkeeping distinct from real interactions;
- distributed-mass dynamics available for later human-segment modeling.

Audit check 15: **TERMINOLOGY REPAIR REQUIRED**.

---

## 7. External / internal / net joint moments

Audit:

16. external moment depends on force + geometry → **PASS**.
17. internal moment is a resultant, not one muscle's moment → **PASS**.
18. net joint moment does not uniquely identify force sharing/co-contraction → **PASS**.
19. sign convention / internal-vs-external reporting must be stated → **PASS**.

No additional source-map item is required.

Detailed moment-arm geometry remains MEC-04.

---

## 8. Force-time curve

Audit:

20. force-time curve is a time-resolved signal → **PASS**.
21. peak force, mean force, impulse and RFD are non-equivalent → **PASS**.
22. derived metrics can depend on processing/event definitions → **PASS**.

No source-map repair required.

Detailed validity/reliability remains TST/MEC-21.

---

## 9. Force-velocity curve

The current generic source-map label:

**Force-velocity curve**

is ambiguous because Area 06 Section 8 separately owns:

**Muscle force-velocity relationship.**

Current evidence directly supports the distinction.

Samozino-related task-level jumping F-V work and later critical analyses emphasize that the task-level profile is specific to the task and does not represent the intrinsic lower-extremity muscle F-V relationship.

The 2026 systematic review of vertical F-V profiling likewise describes task-level profiles as context/model-dependent descriptive constructs rather than universal mechanistic force-capacity curves.

Therefore retaining generic “Force-velocity curve” in MEC-03 would preserve a duplicate/ambiguous owner.

Required repair:

**source-map item 14 should become “Task-level force/load-velocity curve or profile”.**

MEC-08 retains:
- intrinsic muscle force-velocity relationship.

Audit check 23: **TERMINOLOGY / OWNERSHIP REPAIR REQUIRED**.

---

# PART B — BLOCKING FOUNDATIONAL GAP

## 10. Missing concept — free-body diagrams / system boundary

Current Section 3 contains:
- external forces;
- internal forces;
- GRF;
- muscle/tendon/joint forces;
- moments.

But it does not explicitly contain:

**Free-body diagrams / system-boundary analysis.**

This is a foundational omission.

### Why it matters

The definitions of:
- external vs internal;
- which forces enter Newton-Euler equations;
- which joint force/moment acts on which segment;
- how inverse dynamics proceeds

all depend on isolating a defined body/system.

A free-body diagram makes this explicit by showing:
- the selected body/system;
- all external forces acting on it;
- relevant external moments;
- coordinate/reference conventions.

OpenStax's current mechanics treatment describes a free-body diagram as the diagram of the system/body of interest with the external forces acting on it.

More importantly for biomechanics, Baltzopoulos explicitly states that inverse dynamics is based on free-body diagrams, either:
- Actual Forces approach;
or
- Resultant Moments approach.

Therefore FBD/system-boundary analysis is not optional vocabulary.

It is the operational foundation connecting MEC-01 Newtonian mechanics to MEC-03 human kinetics.

**BLOCKER CONFIRMED.**

---

## 11. Why this is project relevant

Without an explicit FBD layer, later exercise analysis can make errors such as:

1. placing both members of a Newton-third-law pair on one body;
2. calling a force “internal” without defining the analyzed system;
3. treating GRF as if it acts directly at every joint;
4. mixing whole-body and single-segment force balances;
5. confusing external load force with joint reaction force;
6. inferring muscle force directly from a net joint moment;
7. omitting gravity/contact forces from a segment analysis;
8. combining quantities expressed about different reference points.

This directly affects:
- MEC-04 torque/moment arms;
- MEC-10 free-weight mechanics;
- MEC-12 joint biomechanics;
- MEC-19 exercise-specific analysis;
- MEC-21 inverse dynamics/modeling.

---

# PART C — SOURCE-MAP REPAIR ARCHITECTURE

## 12. One new item + three wording repairs

PASS-02 does not require splitting MEC-03 into new canonical topics.

The repair should be:

### Add new item

15. **Free-body diagrams / system-boundary analysis.**

### Clarify existing item 6

From:

6. Joint reaction force.

To:

6. **Joint reaction force — partial vs total definition/reporting.**

### Clarify existing item 9

From:

9. Inertial forces.

To:

9. **Inertial terms / D'Alembert pseudo-forces and distributed-mass inertial contributions.**

### Clarify existing item 14

From:

14. Force-velocity curve.

To:

14. **Task-level force/load-velocity curve or profile.**

No other Section 3 structural change is required by this audit.

Revised scope after repair would remain:

**15 exact items**, not 18, because three changes are renames/clarifications rather than additions.

---

# PART D — NON-BLOCKING OWNERSHIP CHECKS

## 13. Muscle/tendon forces in MEC-03 vs MEC-08

Generic classification belongs MEC-03 because a kinetics analysis must know what force type is being discussed.

MEC-08 retains:
- force-length;
- intrinsic force-velocity;
- tendon stiffness;
- elastic components;
- muscle-tendon mechanics.

No duplicate blocker.

Audit check 24: **PASS**.

---

## 14. Joint reaction force vs MEC-12

MEC-03 should own:
- generic JRF definition/reporting;
- partial vs total distinction;
- anti-overreach boundaries.

MEC-12 should own:
- shoulder/hip/knee/etc joint-specific loading.

No duplicate blocker.

Audit check 25: **PASS**.

---

## 15. CoP / free moment

Center of pressure already exists in MEC-06.

A force-plate free moment is a more technical measurement/output concept and can remain:
- MEC-06/MEC-21/TST depending use.

It is not required for generic MEC-03 closure.

Audit check 26: **PASS / DEFER**.

---

## 16. Inverse dynamics

Full inverse-dynamics methodology belongs MEC-21.

MEC-03 only needs:
- FBD/system boundary;
- Newton-Euler balance;
- generic partial/total JRF and net-joint-moment interpretation.

No separate “inverse dynamics” source-map item is required here.

Audit check 27: **PASS / DEFER DETAIL**.

---

# PART E — CURRENT SOURCE / PROFESSIONAL CHECK

## 17. Baltzopoulos reporting guidance

Current indexed publication:

Baltzopoulos V. Sports Biomechanics. 2024;23(3):287-300. PMID 33433300.

Key implications for this audit:
- inverse dynamics is explicitly built on free-body diagrams;
- JRF terminology needs mechanically accurate reporting;
- partial vs total JRF is the preferred distinction described in the paper.

Audit check 28: **PASS / SUPPORTS REPAIR**.

---

## 18. Current musculoskeletal-model evidence

Skubich & Piszczatowski 2026 compared two AnyBody lower-limb models using identical gait inputs/scaling/optimization and found significant model-dependent differences in:
- muscle-force waveforms;
- hip/knee/ankle JRF waveforms.

This supports retaining model-dependence warnings.

Audit check 29: **PASS**.

---

## 19. Current EMG-force consensus

CEDE consensus, 2024, PMID 39069427:

- only limited scenarios support accurate EMG-only force estimation;
- dynamic force estimation typically requires muscle state and formal biomechanical/physiological modeling.

Audit check 30: **PASS**.

---

## 20. Force-velocity ownership evidence

A critical 2023 jumping F-V analysis explicitly concludes that the task-level jumping F-V profile does **not** represent the intrinsic force-velocity relationship of the lower extremities.

The 2026 vertical F-V profiling systematic review likewise reports task dependence and modeling-assumption sensitivity.

This confirms that the source-map wording must separate:
- task-level profile → MEC-03;
- intrinsic muscle F-V → MEC-08/PHY.

Audit check 31: **PASS / SUPPORTS REPAIR**.

---

## 21. NSCA scope

Current NSCA DCO continues to list:
- force;
- torque;
- impulse;
- force-time curve;
- force-velocity curve

under kinetic biomechanics.

This confirms the topic belongs in the biomechanics foundation.

NSCA's generic wording does not remove the need for the project's more precise task-vs-muscle ownership.

Audit check 32: **PASS WITH PROJECT CLARIFICATION**.

---

# 22. Closure audit matrix

| Audit domain | Result |
|---|---|
| Original 14 items | PASS at content level |
| Free-body/system-boundary analysis | **BLOCKER — missing explicit item** |
| JRF terminology | **REPAIR REQUIRED** |
| Inertial-force terminology | **REPAIR REQUIRED** |
| Force-velocity ownership | **REPAIR REQUIRED** |
| Muscle/tendon ownership | PASS |
| CoP/free moment | PASS — defer |
| Inverse-dynamics detail | PASS — defer MEC-21 |
| Current evidence/professional scope | PASS |

---

# 23. Closure decision

**MEC-03 CANNOT BE CLOSED YET.**

One repair cluster remains:

**free-body/system-boundary foundation + three terminology/ownership corrections.**

Primary missing concept:

1. **Free-body diagrams / system-boundary analysis.**

Required source-map wording repairs:

2. **Joint reaction force — partial vs total definition/reporting.**
3. **Inertial terms / D'Alembert pseudo-forces and distributed-mass inertial contributions.**
4. **Task-level force/load-velocity curve or profile.**

No other project-relevant MEC-03 blocker was identified.

---

# 24. What remains valid

PASS-01 remains valid for:
- external/internal force system dependence;
- GRF;
- muscle/tendon force limitations;
- friction/normal force;
- external/internal/net joint moments;
- force-time non-equivalences;
- model dependence;
- kinematics-vs-kinetics boundary.

Existing MEC03-01…MEC03-12 remain valid but audit-pending.

---

# 25. Exact next-pass scope

Next one narrow block:

**MEC-03/PASS-03 — free-body diagrams and kinetics terminology repair.**

Required content:

1. free-body/system definition;
2. rules for constructing a human/segment FBD;
3. external forces/moments only on the selected free body;
4. Newton-third-law pair placement;
5. whole-body vs segment FBD distinction;
6. FBD → Newton-Euler → inverse-dynamics conceptual chain;
7. partial vs total JRF terminology;
8. JRF vs articular/contact-force boundary;
9. D'Alembert pseudo-force vs physical inertial contribution;
10. task-level F-V profile vs intrinsic muscle F-V;
11. source-map correction;
12. downstream handoff to MEC-04/08/12/21.

After PASS-03:

**MEC-03/PASS-04 — repeat independent closure audit and synthesis.**

---

# 26. Evidence/source register

1. Baltzopoulos V. Inverse dynamics, joint reaction forces and loading in the musculoskeletal system. Sports Biomechanics. 2024;23(3):287-300. PMID 33433300.
2. Dick et al. / CEDE. Application of EMG to estimate muscle force. J Electromyogr Kinesiol. 2024. PMID 39069427.
3. Skubich J, Piszczatowski S. Influence of musculoskeletal model on lower-extremity muscle and JRF calculations. 2026. PMID 42885198.
4. Samozino-related critical analysis: The Force-Velocity Profile for Jumping: What It Is and What It Is Not. 2023. PMID 36848926.
5. Vertical Force-Velocity Profiling in Soccer: systematic review of evidence, assumptions and limitations. 2026. PMID 41900506.
6. OpenStax University Physics — current free-body-diagram mechanics reference.
7. NSCA current CSCS Detailed Content Outline.
8. BIPM SI Brochure, 9th edition, v4.01, June 2026.

---

# 27. Status

**MEC-03/PASS-02 — GAP AUDIT COMPLETE.**

Result:

- original Section 3 content remains **14/14**;
- original content checks remain **42/42 resolved**;
- closure **NOT AUTHORIZED**;
- **1 missing foundational concept**: free-body/system-boundary analysis;
- **3 source-map wording/ownership repairs** required;
- canonical MEC-03 finding is **not created**.

Next:

**MEC-03/PASS-03 — free-body diagrams and kinetics terminology repair.**

STOP after this PASS.
