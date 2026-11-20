# MEC-04 / PASS-02 — Independent closure/gap audit and synthesis

Дата: 2026-11-20  
Статус: **CLOSED_FOR_PRACTICE v2.0 — 33/33 PASS**  
Область: 06 — Biomechanics  
Topic: MEC-04 — Torque / moment arms

## 0. Audit purpose

This is the mandatory independent closure/gap audit after:

- `MEC-04/PASS-01 — Torque / moment arms content revalidation`;
- exact Area 06 Section 4 coverage = **10/10**;
- PASS-01 content checks = **30/30 resolved**.

PASS-02 retests whether MEC-04 can close without source-map mutation.

It specifically audits:

1. line of action;
2. reference axis / center of rotation / instantaneous axis;
3. geometric vs tendon-excursion moment-arm definitions;
4. mechanical advantage vs velocity/excursion tradeoff;
5. multiple external forces / resultant external moment;
6. joint moment vs torque terminology;
7. torque vs exercise difficulty wording;
8. downstream ownership.

---

# PART A — EXACT 10-ITEM CLOSURE AUDIT

1. Torque/moment — force + geometry + specified reference → **PASS**.
2. Perpendicular moment arm — shortest perpendicular distance to force line of action → **PASS**.
3. External moment arm — external-force-specific leverage about a joint/reference → **PASS**.
4. Internal muscle moment arm — muscle/tendon leverage about a specified joint DOF → **PASS**.
5. Joint angle dependence — internal and external moment arms can change with pose → **PASS**.
6. Mechanical advantage — geometry-dependent force transformation, not “better exercise” → **PASS**.
7. Moment arms through ROM — muscle/joint/DOF/person-specific profiles → **PASS**.
8. Same load / different joint demand — constant force does not imply constant joint moment → **PASS**.
9. Muscle force can exceed external load — explained by short internal vs long external moment arms → **PASS**.
10. Torque vs exercise difficulty — external joint moment is one demand descriptor, not total difficulty/stimulus → **PASS**.

**Exact Section 4 closure: 10/10 PASS.**

---

# PART B — PASS-01 UNRESOLVED QUESTIONS

## 11. Should line of action become an explicit map item?

Decision: **NO.**

Reason:

Line of action is already structurally embedded in:
- torque/moment;
- perpendicular moment arm;
- external moment arm;
- internal muscle moment arm.

NASA's current torque explanation uses perpendicular distance from pivot/reference to the direction/line of the applied force.

Creating a separate map item would duplicate the defining geometry rather than add a new concept.

Check 11: **PASS — no mutation required**.

---

## 12. Should reference axis / center of rotation / instantaneous axis become explicit?

Decision: **NO new MEC-04 map item.**

MEC-04 must always state or imply the reference point/axis.

However:
- generic reference-frame/axis discipline already exists in MEC-01/MEC-02;
- joint-specific center/axis behavior belongs MEC-12;
- estimation sensitivity and instantaneous-axis/model issues belong MEC-21.

The current moment-arm literature itself uses center-of-rotation and joint-axis assumptions, confirming their relevance without requiring a duplicate source-map item.

Check 12: **PASS — boundary sufficient**.

---

## 13. Geometric vs tendon-excursion moment arm

Decision: **FOUNDATIONAL BOUNDARY REQUIRED, BUT NO NEW MAP ITEM.**

The physical role is the same:

**moment arm links force to joint moment.**

Operationally, muscle moment arms may be estimated using different approaches.

### Geometric method

Uses:
- joint/axis or center-of-rotation estimate;
- muscle/tendon line of action;
- perpendicular distance.

### Tendon-excursion method

Infers an effective moment arm from change in musculotendon/tendon excursion with joint angle under the method's assumptions.

These approaches are not guaranteed to produce identical in-vivo estimates.

Published comparisons show discrepancies caused by factors including:
- tendon stretch;
- joint/segment motion assumptions;
- line-of-action definition;
- method implementation.

Current 2025 systematic visualization explicitly treats moment-arm datasets from heterogeneous experimental methods as measurement data requiring careful interpretation.

Canonical rule:

**geometric and tendon-excursion methods are different estimation routes, not evidence for two unrelated physical moment-arm constructs.**

Detailed method validity remains MEC-21.

Check 13: **PASS WITH CANONICAL BOUNDARY**.

---

## 14. Mechanical advantage and velocity/excursion tradeoff

Decision: **NO new MEC-04 item.**

MEC-04 requires only the force-transformation meaning of leverage.

Detailed consequences for:
- endpoint speed;
- muscle excursion;
- lever-class behavior

belong MEC-05/MEC-08.

Check 14: **PASS / DEFER DETAIL**.

---

## 15. Multiple external forces / resultant external moment

Decision: **NO new item.**

MEC-03 already supplies:
- FBD;
- external-force inventory;
- resultant moment logic.

MEC-04 already states that total external moment is the signed/vector sum of relevant force moments.

Therefore a separate source-map item would duplicate MEC-03/MEC-04 content.

Check 15: **PASS**.

---

## 16. Joint moment vs torque terminology

Decision: **SUFFICIENT FOR PROJECT USE.**

At foundational mechanics level:
- torque;
- moment of force

refer to rotational effects of force.

In human biomechanics, **joint moment** is commonly used for joint-level resultant quantities.

Project convention:

- use **torque/moment** for generic mechanics;
- use **joint moment** for joint-level biomechanical resultants;
- always state internal/external/net context where relevant.

No source-map repair required.

Check 16: **PASS**.

---

## 17. “Relationship between torque and exercise difficulty” wording

Decision: **NO source-map mutation required.**

The map wording is broad, but PASS-01 already constrains its meaning:

- external joint moment is a mechanical-demand descriptor;
- perceived/physiological exercise difficulty is multi-determinant;
- torque alone does not establish muscle force, hypertrophy stimulus, injury risk or exercise superiority.

Canonical phrasing will be:

**external joint moment contributes to mechanical demand; it is not total exercise difficulty.**

Check 17: **PASS WITH CANONICAL TIGHTENING**.

---

## 18. Can MEC-04 close without source-map mutation?

After the independent gap search:

**YES.**

No missing foundational concept requires a new Section 4 item.

Check 18: **PASS**.

**PASS-01 unresolved-question audit: 8/8 PASS.**

---

# PART C — CURRENT SOURCE / EVIDENCE AUDIT

## 19. NASA foundational torque mechanics

Current NASA Glenn material confirms:
- torque/moment depends on force and perpendicular distance;
- force through the pivot/reference produces zero moment;
- force direction and reference geometry matter.

Check 19: **PASS**.

---

## 20. Current muscle moment-arm synthesis

Chen & Franklin 2025:
- systematic visualization;
- **300 datasets**;
- hip, knee and ankle;
- complex moment-arm vs joint-angle relationships;
- explicit relevance of center of rotation and tendon-excursion methodology.

This supports angle dependence and method sensitivity.

Check 20: **PASS**.

---

## 21. Current 3D shoulder moment-arm evidence

Axford et al. 2025:
- continuous 3D shoulder moment-arm mapping;
- tendon-excursion method;
- muscle- and plane-specific leverage.

This supports the rule that a muscle does not have one context-free scalar moment arm.

Check 21: **PASS**.

---

## 22. Current Achilles moment-arm evidence

Kovács et al. 2026:
- dynamic weight-bearing dual-fluoroscopy measurement;
- Achilles moment arm changed with ankle angle;
- substantial inter-individual variation;
- no universal angle-only model supported.

This confirms:
- angle dependence;
- individual variability;
- method/reference dependence.

Check 22: **PASS**.

---

## 23. Current professional scope

Current NSCA 2025 Job Task Analysis / DCO retains:
- torque;
- force;
- lever systems

inside kinetic biomechanics / Scientific Foundations.

Check 23: **PASS**.

**Current-source audit: 5/5 PASS.**

---

# PART D — DOWNSTREAM OWNERSHIP AUDIT

## 24. MEC-01

MEC-01 owns:
- torque as a rotational mechanics quantity;
- angular momentum foundation.

MEC-04 owns:
- force-line geometry;
- moment arms;
- leverage.

Check 24: **PASS**.

---

## 25. MEC-03

MEC-03 owns:
- system/FBD;
- external/internal/net moment classification.

MEC-04 owns:
- geometry producing those moments.

Check 25: **PASS**.

---

## 26. MEC-05

MEC-04 owns generic mechanical advantage.

MEC-05 owns:
- lever classes;
- fulcrum/effort/resistance structure;
- lever-system tradeoffs.

Check 26: **PASS**.

---

## 27. MEC-08 / PHY

MEC-04 owns geometric leverage.

MEC-08/PHY own:
- muscle force capacity;
- force-length;
- intrinsic force-velocity;
- tendon behavior.

Check 27: **PASS**.

---

## 28. MEC-12 / MEC-21

MEC-12 owns joint-specific geometry/loading.

MEC-21 owns:
- moment-arm estimation methods;
- joint-center/axis sensitivity;
- model uncertainty.

Check 28: **PASS**.

---

## 29. MEC-19 / TEC / PRO

MEC-04 can describe torque and moment-arm profiles.

It does not determine:
- best exercise;
- best ROM;
- best cable/machine setup;
- prescription.

Check 29: **PASS**.

**Downstream ownership: 6/6 PASS.**

---

# PART E — GOVERNANCE / FINAL GAP SEARCH

## 30. Evidence ledger completeness

MEC04-01…MEC04-12 cover:
- torque/reference;
- moment-arm definition;
- internal/external leverage;
- joint-angle variation;
- individual variability;
- mechanical advantage;
- same load/different moment;
- torque-angle interpretation;
- difficulty/stimulus boundary;
- posture sensitivity;
- professional scope.

No duplicate MEC04 IDs were identified.

Check 30: **PASS**.

---

## 31. PASS-01 integrity

PASS-01 was read to completion.

It contains:
- expected status marker;
- expected terminal STOP marker;
- no unresolved content item.

Check 31: **PASS**.

---

## 32. Source-map integrity

Area 06 Section 4 remains **10 exact items**.

No mutation is required because all candidate missing concepts are either:
- defining parts of current items;
- measurement/model details owned by MEC-21;
- downstream lever/joint/application details.

Check 32: **PASS**.

---

## 33. Final blocker search

The audit explicitly rechecked:
- line of action;
- reference axis;
- center of rotation;
- tendon-excursion vs geometric moment arm;
- multiple external forces;
- moment/torque terminology;
- mechanical advantage;
- torque vs difficulty;
- downstream ownership.

No project-relevant foundational MEC-04 blocker remains.

Check 33: **PASS**.

---

# 34. Closure matrix

| Audit layer | Checks | Result |
|---|---:|---:|
| Exact Section 4 items | 10 | 10/10 PASS |
| PASS-01 unresolved questions | 8 | 8/8 PASS |
| Current sources/evidence | 5 | 5/5 PASS |
| Downstream ownership | 6 | 6/6 PASS |
| Governance/final blocker search | 4 | 4/4 PASS |
| **TOTAL** | **33** | **33/33 PASS** |

---

# 35. Final canonical model

## Torque / moment

`tau = r × F`

Magnitude:

`|tau| = F*r_perp`.

Torque is defined about a specified point/axis.

## Moment arm

Moment arm is the shortest perpendicular distance between:
- reference axis/point;
and
- force line of action.

It is not generic segment length.

## External moment arm

Defines leverage of an external force about a joint/reference.

Constant nominal external load can create a changing joint moment through ROM.

## Internal muscle moment arm

Defines the rotational leverage of muscle/tendon force about a specified joint DOF.

It varies with:
- joint angle;
- muscle path;
- joint geometry;
- DOF;
- individual anatomy.

## Moment-arm estimation

Geometric and tendon-excursion methods are different estimation approaches.

Their numerical estimates can differ because of method assumptions and measurement/model error.

Exact method validity belongs MEC-21.

## Mechanical advantage

Simple equilibrium relation:

`F_internal*r_internal = F_external*r_external`.

A short internal moment arm can require a muscle/internal force much greater than the external force.

This does not uniquely solve multi-muscle force sharing.

## Exercise interpretation

External joint moment is one descriptor of mechanical demand.

It is not equivalent to:
- muscle force;
- total perceived difficulty;
- hypertrophy stimulus;
- injury risk;
- exercise superiority.

---

# 36. Permanent anti-category-error rules

1. torque ≠ force.
2. torque ≠ energy.
3. torque requires a reference.
4. moment arm ≠ segment length.
5. moment arm ≠ point-to-joint distance.
6. moment arm ≠ moment.
7. external moment arm ≠ internal muscle moment arm.
8. line-of-action distance ≠ generic lever length.
9. same kg ≠ same joint moment.
10. constant force ≠ constant joint moment through ROM.
11. muscle moment arm ≠ constant through ROM.
12. geometric estimate ≠ automatically tendon-excursion estimate.
13. population-average moment arm ≠ individual moment arm.
14. mechanical advantage ≠ training advantage.
15. simple moment balance ≠ unique multimuscle force-sharing solution.
16. joint torque-angle relation ≠ moment-arm effect alone.
17. same external moment ≠ same internal muscle demand.
18. external joint moment ≠ whole-exercise difficulty.
19. higher torque ≠ automatically higher hypertrophy stimulus.
20. higher torque ≠ automatically greater injury risk.

---

# 37. Source register retained at closure

1. NASA Glenn — Torque (Moment), current page checked 2026-11-20.
2. BIPM — SI Brochure, 9th edition, v4.01, June 2026.
3. NSCA — current 2025 CSCS Job Task Analysis / Detailed Content Outline.
4. Chen & Franklin 2025 — muscle moment arm-joint angle visualization, PMID 40343628.
5. Axford et al. 2025 — 3D continuous shoulder moment-arm maps, PMID 39946823.
6. Kovács et al. 2026 — dynamic Achilles moment arm, PMID 41456489.
7. Chen & Franklin 2025 — joint moment-angle/velocity relations, PMID 40117874.
8. Umehara et al. 2025 — muscle shape/mechanical advantage, PMID 40192188.
9. Kos et al. 2025 — posture sensitivity of joint moments, PMID 39981993.
10. Medeiros et al. 2026 — shoulder torque-angle systematic review, PMID 42856762.
11. Historical method-comparison evidence retained for geometric vs tendon-excursion boundary: PMID 24870582; PMID 29960733.

---

# 38. Status

**MEC-04 = CLOSED_FOR_PRACTICE v2.0.**

Independent closure audit:

**33/33 PASS.**

Current Area 06 Section 4:

**10/10 exact items PASS.**

No source-map mutation was required.

No project-relevant MEC-04 blocker remains.

---

# 39. Next dependency

Next canonical topic:

**MEC-05 — Lever systems.**

Next one block:

**MEC-05/PASS-01 — Lever systems content revalidation.**

Do not start MEC-05 until the next user continue signal.
