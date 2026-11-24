# MEC-03 / PASS-03 — Free-body diagrams and kinetics terminology repair

Дата: 2026-11-20  
Статус: **REPAIR CONTENT COMPLETE — REPEAT CLOSURE AUDIT PENDING**  
Область: 06 — Biomechanics  
Topic: MEC-03 — Kinetics

## 0. Why this pass exists

MEC-03/PASS-02 found one repair cluster:

1. missing foundational concept: **free-body diagrams / system-boundary analysis**;
2. ambiguous JRF terminology;
3. ambiguous inertial-force terminology;
4. ambiguous generic force-velocity ownership.

This PASS repairs only that cluster.

It does not:
- reopen valid PASS-01 force/moment content;
- perform final closure;
- deeply teach inverse-dynamics algorithms → MEC-21;
- deeply teach joint-specific loading → MEC-12;
- deeply teach intrinsic muscle force-velocity mechanics → PHY/MEC-08;
- make exercise/programming prescriptions → TEC/PRO.

---

## 1. Source-map correction

Area 06 Section 3 is corrected as follows.

### Existing item 6

From:

6. Joint reaction force.

To:

6. **Joint reaction force — partial vs total definition/reporting.**

### Existing item 9

From:

9. Inertial forces.

To:

9. **Inertial terms / D'Alembert pseudo-forces and distributed-mass inertial contributions.**

### Existing item 14

From:

14. Force-velocity curve.

To:

14. **Task-level force/load-velocity curve or profile.**

### New item

15. **Free-body diagrams / system-boundary analysis.**

Revised MEC-03 source scope:

**15 exact items.**

---

# ITEM 15 — FREE-BODY DIAGRAMS / SYSTEM-BOUNDARY ANALYSIS

## 2. Free-body diagram definition

A free-body diagram (FBD) isolates a selected mechanical system/body and shows the external forces acting on that selected free body.

Current OpenStax mechanics states the rule directly:

- identify the body/system of interest;
- show the external forces acting on it;
- do not include forces that the selected body exerts on its environment;
- do not put both members of a Newton-third-law pair on the same FBD.

Canonical project rule:

**select the system before classifying forces.**

Confidence: **HIGH**.

---

## 3. FBD contents

For MEC-03, an FBD should identify:

1. selected body/system;
2. reference frame/axes;
3. external force vectors;
4. external applied/free moments where relevant;
5. point/line of action when required for moment analysis;
6. gravity;
7. contact forces;
8. joint/resultant forces and moments when they are external to the selected segment.

Do not add:
- acceleration as if it were a physical force;
- “net force” as another independent applied force;
- both action and reaction forces on the same selected body.

Canonical rule:

**the FBD contains applied external interactions, not derived resultants masquerading as extra forces.**

Confidence: **HIGH**.

---

## 4. Whole-body vs segment FBD

### Whole-body system

For a person plus all body segments considered as one system:
- muscle forces between body segments are internal;
- joint forces between segments are internal;
- gravity and ground/contact forces are external.

### Single-segment system

For one segment:
- muscle/tendon forces crossing the segment boundary can be external to that segment;
- joint reaction force/moment from an adjacent segment is external to that segment;
- gravity on the segment is external.

Therefore:

**the same physical interaction can be internal in one model and external in another.**

Confidence: **HIGH**.

---

## 5. Newton-third-law pair placement

If the foot pushes on the ground, the ground pushes on the foot/body with an equal and opposite interaction force.

For a body FBD:
- include ground-on-body force;
- do not also include body-on-ground force on the same free body.

For the ground FBD, the opposite member would appear.

Canonical rule:

**Newton-third-law pairs act on different free bodies.**

Confidence: **HIGH**.

---

## 6. FBD → Newton-Euler chain

Once the free body is defined:

Translation:

`sum(F_external) = dp/dt`

or, under constant-mass assumptions:

`sum(F_external) = m*a`.

Rotation about a suitable reference:

`sum(tau_external) = dL/dt`.

Thus the conceptual chain is:

**system definition → FBD → Newton-Euler balance → inferred kinetic resultants.**

This is the upstream foundation for inverse dynamics.

Confidence: **HIGH**.

---

## 7. FBD and inverse dynamics

Baltzopoulos explicitly describes inverse dynamics as being based on free-body diagrams.

Two conceptual approaches are distinguished:

1. **Actual Forces approach**
   - actual muscle/other internal forces are represented explicitly;

2. **Resultant Moments approach**
   - internal forces are replaced by an equivalent resultant force and moment description.

MEC-03 only needs this conceptual distinction.

Detailed numerical inverse dynamics remains MEC-21.

Canonical rule:

**inverse dynamics does not eliminate the need to define the free body; it depends on it.**

Confidence: **HIGH**.

---

# REPAIR 1 — JOINT REACTION FORCE TERMINOLOGY

## 8. JRF remains a real mechanical interaction quantity

A joint reaction force represents interaction between adjacent segments at a joint under the selected model.

The key problem is not whether JRF exists.

The problem is **what portion of internal loading is represented in a given modeling approach**.

---

## 9. Partial vs Total JRF

Baltzopoulos recommends:

### Total Joint Reaction Force

Use when:
- actual internal forces such as muscle forces are represented explicitly;
- the calculated joint reaction reflects the remaining joint interaction after those modeled forces are included.

### Partial Joint Reaction Force

Use when:
- internal muscle/other forces are not represented individually;
- they are replaced by equivalent resultant moments in the segment free-body formulation.

Canonical rule:

**Partial JRF and Total JRF are not interchangeable loading quantities.**

Confidence: **HIGH**.

---

## 10. Why ambiguous substitute labels are rejected

The reporting guideline specifically criticizes substitute terms such as:
- net joint force;
- resultant force;
- intersegmental force;
- bone-on-bone force

when used to avoid stating the actual mechanics/model.

Project rule:

**report the JRF definition/model directly rather than inventing a vague synonym.**

Confidence: **HIGH**.

---

## 11. JRF vs articular/contact loading

Even when “Total JRF” is used correctly, exact articular contact distribution still depends on:
- joint geometry;
- contact areas;
- soft tissues;
- model assumptions.

MEC-03 therefore retains only the generic force-level distinction.

Detailed joint-specific contact/loading remains:
- MEC-12;
- MEC-21.

Canonical rule:

**JRF magnitude is not the same thing as local cartilage/tissue stress.**

Confidence: **HIGH**.

---

# REPAIR 2 — INERTIAL TERMS

## 12. D'Alembert pseudo-force

In an inertial-frame Newtonian formulation:

`sum(F_external) = m*a`.

D'Alembert rearrangement can write:

`sum(F_external) + F_inertial = 0`

with:

`F_inertial = -m*a`.

This “inertial force” is a bookkeeping/pseudo-force term.

It is not a new physical interaction such as:
- contact force;
- gravity;
- muscle force;
- tendon force.

Canonical rule:

**D'Alembert inertial force is an analytical term, not a physical interaction force.**

Confidence: **HIGH**.

---

## 13. Rotational analogue

The same idea can be applied to rotational dynamics in a chosen simplified representation by moving inertial terms to the equilibrium side.

The exact rotational form depends on:
- chosen reference;
- inertia model;
- whether inertia is constant;
- planar vs full 3D dynamics.

Detailed formulation remains MEC-21.

---

## 14. Distributed-mass inertial contribution

Human tissues and segments have distributed mass.

Their acceleration can affect:
- joint kinetics;
- tissue force transmission;
- dynamic internal loads.

These are real consequences of mass dynamics.

They must not be confused with the fictitious/pseudo-force convention above.

Canonical rule:

**dynamic inertial contribution of real mass ≠ D'Alembert pseudo-force.**

Confidence: **HIGH**.

---

## 15. Source-map wording decision

The previous label:

**Inertial forces**

is replaced by:

**Inertial terms / D'Alembert pseudo-forces and distributed-mass inertial contributions.**

This wording is intentionally verbose because it prevents a high-risk category error.

---

# REPAIR 3 — TASK-LEVEL FORCE/LOAD-VELOCITY PROFILE

## 16. Why generic F-V wording was ambiguous

Area 06 also contains MEC-08:

**Muscle force-velocity relationship.**

Therefore a generic MEC-03 item named only:

**Force-velocity curve**

creates duplicate ownership between:
- intrinsic muscle mechanics;
- external task-level profiling.

The source map now separates them.

---

## 17. Task-level profile

A task-level force/load-velocity profile can describe relationships across external performance conditions such as:
- jumping at different loads;
- sprint-derived external profiles;
- resistance-exercise load-velocity data.

It is influenced by:
- movement task;
- body/implement inertia;
- multijoint coordination;
- technique;
- chosen force/velocity definitions;
- mathematical model and extrapolation.

Canonical rule:

**task-level F-V profile is a task/model-specific external mechanics construct.**

Confidence: **HIGH**.

---

## 18. Intrinsic muscle F-V remains MEC-08 / PHY

The intrinsic force-velocity relationship describes force-generating behavior of muscle/contractile tissue as a function of shortening/lengthening velocity under defined physiological/mechanical conditions.

That belongs:
- PHY for physiological mechanism;
- MEC-08 for muscle-tendon mechanics.

Canonical rule:

**task-level force/load-velocity profile ≠ intrinsic muscle force-velocity relationship.**

Confidence: **HIGH**.

---

## 19. Current direct evidence

Bobbert et al. 2023 tested whether jumping F-V profiles represent intrinsic lower-extremity F-V mechanics and concluded that the jumping profile is task specific and does not represent the intrinsic relationship.

The current 2026 systematic review of vertical F-V profiling likewise characterizes these profiles as context/model dependent and warns against mechanistic overinterpretation.

Therefore the source-map rename is evidence supported.

---

# PART B — DOWNSTREAM HANDOFFS

## 20. MEC-04

MEC-03 now supplies:
- FBD;
- external/internal moments;
- generic force classification.

MEC-04 owns:
- moment arms;
- line-of-action geometry;
- mechanical advantage.

No duplication.

---

## 21. MEC-08 / PHY

MEC-03 owns:
- force as a mechanical quantity;
- generic muscle/tendon force classification;
- task-level F-V profile.

MEC-08/PHY own:
- intrinsic muscle force-velocity mechanics;
- force-length;
- architecture;
- tendon stiffness and elastic behavior.

No duplication.

---

## 22. MEC-12

MEC-03 owns:
- Partial vs Total JRF terminology;
- generic loading anti-overreach rules.

MEC-12 owns:
- joint-specific contact/loading mechanics;
- shoulder/hip/knee/etc applications.

No duplication.

---

## 23. MEC-21 / TST

MEC-03 owns:
- free-body/system logic;
- physical quantity definitions;
- generic inverse-dynamics interpretation.

MEC-21/TST own:
- numerical inverse dynamics;
- BSIP uncertainty;
- force-plate processing;
- optimization/model sensitivity;
- validation/reliability.

Canonical rule:

**correct FBD/quantity definition ≠ validated numerical estimate.**

---

# PART C — REPAIRED NON-EQUIVALENCES

## 24. Permanent distinctions added/strengthened

MEC-03 now rejects:

1. free-body diagram = drawing of every force in the environment.
2. internal force = force omitted because it is “small”.
3. action and reaction pair = two forces on one free body.
4. acceleration = physical force on an inertial-frame FBD.
5. net force = additional applied force.
6. Partial JRF = Total JRF.
7. JRF = local articular stress.
8. vague “intersegmental/resultant/net force” label = sufficient JRF definition.
9. D'Alembert pseudo-force = physical contact/muscle force.
10. distributed-mass inertial effect = pseudo-force convention.
11. generic task-level F-V profile = intrinsic muscle F-V relationship.
12. task-level F-V profile = universal force or velocity capacity.

---

# PART D — SOURCE-MAP REPAIR AUDIT

## 25. Required repair scope from PASS-02

1. free-body/system definition → **PASS**.
2. FBD construction rules → **PASS**.
3. external forces/moments only on selected free body → **PASS**.
4. Newton-third-law pair placement → **PASS**.
5. whole-body vs segment FBD distinction → **PASS**.
6. FBD → Newton-Euler → inverse-dynamics conceptual chain → **PASS**.
7. Partial vs Total JRF terminology → **PASS**.
8. JRF vs local contact/tissue loading boundary → **PASS**.
9. D'Alembert pseudo-force vs real inertial contribution → **PASS**.
10. task-level F-V vs intrinsic muscle F-V → **PASS**.
11. source-map correction → **PASS**.
12. downstream handoff MEC-04/08/12/21 → **PASS**.

**PASS-03 repair audit = 12/12 PASS.**

---

## 26. Revised MEC-03 content coverage

Original PASS-01:

- original source-map items = **14/14**;
- checks = **42/42 resolved**.

PASS-03:

- 1 new foundational item added;
- 3 existing items clarified/renamed;
- repair checks = **12/12 PASS**.

Revised Section 3 scope:

**15/15 content-covered.**

This does **not** authorize closure.

A repeat independent closure audit is required because:
- the source map changed;
- terminology changed;
- JRF/F-V ownership must be rechecked against downstream areas.

---

# PART E — EVIDENCE LEDGER STATUS

## 27. Ledger transition

MEC03-01…MEC03-12 remain valid and audit-pending.

MEC03-13…MEC03-16 can move from:

**GAP IDENTIFIED 2026-11-20 — MEC-03 CONTENT PASS REQUIRED**

to:

**REVALIDATED 2026-11-20 — MEC-03 AUDIT PENDING.**

---

# PART F — SOURCE REGISTER

1. Baltzopoulos V. Inverse dynamics, joint reaction forces and loading in the musculoskeletal system: guidelines for correct mechanical terms and recommendations for accurate reporting of results. Sports Biomechanics. 2024;23(3):287-300. PMID 33433300.
2. OpenStax University Physics Volume 1 — current sections 5.1, 5.7 and 6.1 on forces, free-body diagrams and system definition.
3. Dick TJM et al. CEDE consensus: Application of EMG to estimate muscle force. J Electromyogr Kinesiol. 2024;79:102910. PMID 39069427.
4. Bobbert MF et al. The Force-Velocity Profile for Jumping: What It Is and What It Is Not. Med Sci Sports Exerc. 2023;55(7):1241-1249. PMID 36848926.
5. Vertical Force-Velocity Profiling in Soccer: A Systematic Review of Evidence, Assumptions, and Limitations. 2026. PMID 41900506.
6. Skubich & Piszczatowski 2026 — musculoskeletal-model influence on muscle/JRF estimates. PMID 42885198.
7. Current NSCA CSCS Detailed Content Outline.
8. BIPM SI Brochure, 9th edition, v4.01, June 2026.

---

# 28. Confidence

### HIGH

- system-boundary/FBD foundation;
- third-law pair placement;
- Partial vs Total JRF terminology from Baltzopoulos;
- D'Alembert pseudo-force distinction;
- task-level vs intrinsic muscle F-V ownership;
- downstream routing.

### HIGH concept / implementation deferred

- whole-body vs segment inverse-dynamics implementation;
- exact numerical JRF calculation;
- distributed tissue inertial modeling;
- task-level F-V profile calculation.

### Deferred

- detailed inverse-dynamics algorithms;
- joint-specific contact modeling;
- muscle-force optimization;
- force-plate validation;
- numerical uncertainty.

---

# 29. Status

**MEC-03/PASS-03 — REPAIR CONTENT COMPLETE.**

Results:

- free-body/system-boundary gap repaired;
- JRF terminology repaired;
- inertial-term terminology repaired;
- task-level F-V ownership repaired;
- Area 06 Section 3 corrected from **14 to 15 exact items**;
- revised MEC-03 content coverage = **15/15**;
- PASS-03 repair checks = **12/12 PASS**;
- canonical MEC-03 finding still **not created**;
- `CLOSED_FOR_PRACTICE` still **not assigned**.

Next one block:

**MEC-03/PASS-04 — repeat independent closure audit and synthesis after free-body/terminology repair.**

STOP after this PASS.
