# MEC-05 / PASS-02 — Independent closure / gap audit

Дата: 2026-11-20  
Статус: **CLOSURE REFUSED — TARGETED WORDING / PROVENANCE REPAIR REQUIRED**  
Область: 06 — Biomechanics  
Topic: MEC-05 — Lever systems

## 0. Audit purpose

This pass independently rechecks MEC-05/PASS-01 against:

- exact Area 06 Section 5;
- current source attribution;
- lever-class/model boundaries;
- mechanical-advantage ratio direction;
- geometric vs realized speed/ROM claims;
- neighboring-topic ownership;
- project closure criteria.

PASS-01 is treated as a hypothesis set to audit, not as authority.

Closure rule:

**if a foundational wording or provenance defect can predictably create downstream category error, MEC-05 does not close until the map/ledger is repaired and re-audited.**

---

# PART A — EXACT SECTION 5 RECHECK

Current Area 06 Section 5 contains 10 exact items:

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

Content coverage remains complete.

However, **items 7–9 require wording repair before closure**.

Result:

- items 1–6 → PASS;
- item 7 → REPAIR REQUIRED;
- item 8 → REPAIR REQUIRED;
- item 9 → REPAIR REQUIRED;
- item 10 → PASS.

Exact-item closure status:

**7/10 PASS; 3/10 REPAIR REQUIRED.**

No new Section 5 item is required.

---

# PART B — RESERVED CLOSURE QUESTIONS

## 1. “Human movement as predominantly third-class leverage”

### Audit decision

**REPAIR REQUIRED.**

The underlying teaching proposition is legitimate:

- third-class levers are commonly described as the most common musculoskeletal lever arrangement;
- many limb-muscle actions are usefully taught with third-class geometry.

But the current map wording:

> Human movement as predominantly third-class leverage

is broader than the evidence.

It can be misread as a statement about:
- the majority of all human movement events;
- every joint;
- closed-chain and multi-contact tasks;
- a fixed lever class attached permanently to an anatomical region.

The available evidence supports a **musculoskeletal teaching/generalization**, not a quantitative census of all human movement.

### Required replacement

Recommended Section 5 item 7:

**Third-class leverage as a common human musculoskeletal model — limits of universal classification.**

Equivalent shorter wording is acceptable if it preserves:
- common/prevalent teaching model;
- configuration dependence;
- no universal claim.

### Canonical boundary

**many human limb actions are commonly modeled as third-class; “human movement is predominantly third-class” is not a universal movement-level law.**

Check 1: **REPAIR REQUIRED**.

---

## 2. Tiptoe as a second-class lever

### Audit decision

**PASS WITH PEDAGOGICAL BOUNDARY.**

Standing/rising onto the forefoot is widely used as a second-class teaching example when the modeled system is:

- forefoot/ball-of-foot contact → pivot/fulcrum;
- body-load/resultant → resistance;
- Achilles/calf action → effort.

But the anatomical ankle joint itself is not thereby assigned a permanent second-class identity.

The classification depends on:
- selected system/free body;
- contact definition;
- which output/resistance is modeled;
- static/quasi-static vs dynamic analysis.

Some anatomy/kinesiology sources explicitly note that second-class human-body examples are interpretation-dependent.

Therefore:

**retain tiptoe only as a bounded teaching model; do not promote it into a source-map item or universal ankle classification.**

Check 2: **PASS WITH BOUNDARY**.

---

## 3. Ideal vs actual mechanical advantage

### Audit decision

**REPAIR REQUIRED IN TERMINOLOGY, NOT AS A NEW ITEM.**

OpenStax simple-machine mechanics distinguishes ideal mechanical advantage from actual machine performance/efficiency.

Musculoskeletal biomechanics commonly uses an instantaneous/geometric mechanical advantage or gearing ratio.

For the project, the safer convention is:

### Instantaneous/geometric force mechanical advantage

For a simplified rigid lever in magnitude form:

`G = r_effort / r_resistance`.

Under the ideal instantaneous lever relation:

`F_output / F_input = G`.

The reciprocal kinematic relation is:

`v_output / v_input = 1/G`

and, for corresponding small/displacement increments,

`d_output / d_input = 1/G`.

Equivalent statement:

`G = F_output/F_input = v_input/v_output = d_input/d_output`.

This is the **instantaneous/geometric transform**.

It does not guarantee:
- actual peak velocity;
- acceleration history;
- whole-contraction energy output;
- training outcome.

### Project terminology rule

Do not create a second musculoskeletal construct called “actual mechanical advantage” unless a source explicitly defines it.

Instead distinguish:

1. **geometric/instantaneous mechanical advantage**;
2. **realized force/motion/performance under system dynamics**.

### Required map repair

Item 8 should explicitly state the direction of the ratios.

Recommended wording:

**Mechanical advantage/disadvantage — force ratio and reciprocal displacement/velocity ratio.**

Check 3: **REPAIR REQUIRED**.

---

## 4. Speed / ROM claim

### Audit decision

**REPAIR REQUIRED.**

PASS-01 correctly added a dynamic caveat, but the source-map item itself remains too loose:

> Why poor mechanical advantage can be useful for speed/ROM.

Two distinct quantities are being compressed.

### A. Geometric excursion / velocity transform

For the same lever angular motion:

`s = r*theta`

and:

`v = r*omega`.

A smaller internal moment arm relative to an output arm can therefore map:
- smaller muscle/tendon excursion → larger output excursion;
- lower muscle shortening velocity → larger output velocity at the same instant.

This is a geometric/kinematic relation.

### B. Realized dynamic speed

Realized speed over a movement also depends on:
- muscle force–velocity behavior;
- inertia;
- external forces/load;
- elastic energy storage/return;
- activation;
- contraction duration;
- acceleration history.

Polet & Labonte 2024 explicitly show that instantaneous force/velocity gearing does not map one-to-one onto whole-contraction performance.

McHenry 2011 and Arnold et al. 2011 illustrate why the apparently contradictory dynamic conclusions arise from different questions about instantaneous ratios vs movement outcomes.

### C. Anatomical ROM

Lever geometry can change excursion requirements.

It does **not** uniquely determine anatomical joint ROM.

ROM is additionally constrained by:
- joint geometry;
- soft tissue;
- muscle-tendon length;
- contact/impingement;
- task/control conditions.

Therefore “speed/ROM” should not remain unqualified.

### Required map repair

Recommended item 9:

**Low mechanical advantage — geometric displacement/velocity amplification and limits for realized speed / anatomical ROM.**

Check 4: **REPAIR REQUIRED**.

---

## 5. Force MA vs velocity/displacement ratio

### Audit decision

**REPAIR REQUIRED AS PART OF ITEM 8.**

The project must not use “mechanical advantage” as though force advantage and output-speed advantage increase in the same direction.

For ideal instantaneous lever gearing:

- larger `G` → larger output/input force ratio;
- larger `G` → smaller output/input velocity ratio;
- smaller `G` → smaller output/input force ratio;
- smaller `G` → larger output/input velocity/displacement ratio.

Canonical anti-error equation:

`G = F_out/F_in = v_in/v_out = d_in/d_out`.

Therefore:

**output velocity/displacement advantage is the reciprocal of force mechanical advantage.**

Check 5: **REPAIR REQUIRED; no additional item needed**.

---

## 6. Nested anatomical + external levers

### Audit decision

**NO NEW MAP ITEM.**

Current item 10 already owns the concept.

The canonical synthesis should retain:

`muscle/tendon force -> internal moment arm -> joint/segment mechanics -> external moment arm/equipment geometry -> external output`.

Exact equipment-specific behavior remains downstream:
- MEC-09 resistance sources;
- MEC-10 free weights;
- MEC-11 resistance profiles;
- MEC-19 exercise synthesis.

Check 6: **PASS — item 10 sufficient**.

---

## 7. Usefulness of first/second/third-class taxonomy

### Audit decision

**KEEP, BUT DEMOTE BELOW MOMENT-ARM MECHANICS FOR QUANTITATIVE ANALYSIS.**

Lever-class taxonomy is useful for:
- teaching;
- quick configuration recognition;
- identifying which of F/E/R lies in the middle.

It is not sufficient for quantitative exercise analysis because it does not encode:
- exact perpendicular moment arms;
- force directions;
- acceleration/inertia;
- time-varying geometry;
- elasticity;
- multi-joint redistribution;
- multi-contact constraints.

Project hierarchy:

1. define system/free body;
2. identify forces and lines of action;
3. calculate moments/moment arms;
4. use lever class as an organizing label where useful.

Not:

1. assign lever class;
2. infer complete mechanics from the class.

Check 7: **PASS WITH HIERARCHY RULE**.

---

## 8. Can MEC-05 close without source-map mutation?

### Audit decision

**NO.**

Items 7–9 are content-covered but their map labels preserve predictable category-error routes:

- prevalence teaching shorthand → universal human-movement claim;
- force MA → ambiguous velocity/displacement direction;
- geometric speed/excursion ratio → realized speed/anatomical ROM.

These are exactly the errors MEC-05 is supposed to prevent.

Check 8: **FAIL CLOSURE — TARGETED MAP REPAIR REQUIRED**.

---

# PART C — INDEPENDENT SOURCE / PROVENANCE AUDIT

## 9. OpenStax Physics 9.3

Current OpenStax Physics supports:

- lever / fulcrum / effort / resistance;
- effort and resistance arms;
- ideal mechanical advantage;
- force–distance tradeoff;
- `IMA = F_r/F_e = d_e/d_r`;
- lever `IMA = L_e/L_r`.

Audit result:

**PASS for foundational simple-machine mechanics.**

---

## 10. OpenStax Anatomy & Physiology 2e §11.1

Current OpenStax A&P 2e supports:

- bones as levers;
- synovial joint regions as simplified fulcrums;
- muscle contraction as effort;
- external/body load as resistance.

However, the current fetched §11.1 page does **not** itself present:
- first-/second-/third-class taxonomy;
- third-class prevalence.

Therefore PASS-01 / ledger wording that treats OpenStax A&P §11.1 as direct support for those class-specific claims is too broad.

The class claims remain supportable from other anatomy/biomechanics teaching sources, but the provenance must be named precisely.

Audit result:

**PROVENANCE REPAIR REQUIRED.**

---

## 11. Polet & Labonte 2024

The current review directly supports:

- mechanical advantage `G` as force gearing;
- inverse velocity gearing;
- instantaneous force/velocity trade-off;
- failure of `G` alone to determine whole-contraction dynamic performance;
- mechanical performance as many-to-one mapping from anatomy, muscle physiology and environment.

Audit result:

**PASS.**

---

## 12. McHenry 2011 / Arnold et al. 2011

These papers support a critical distinction.

McHenry:
- skeletal geometry alone can fail to predict realized peak speed in a spring–mass dynamic system.

Arnold et al.:
- an ideal rigid lever still has instantaneous force and velocity ratios linked reciprocally by mechanical advantage.

The modern synthesis is not “one paper proved the other wrong.”

Correct project interpretation:

**instantaneous gearing relations remain; whole-movement outcomes are not determined by gearing alone.**

Audit result:

**PASS.**

---

## 13. Current force–velocity / moment-arm synthesis

Nagano & Komura 2003 and current 2024 resistance-training review material support:

- muscle/musculotendon shortening velocity scales with moment arm for a given joint angular velocity;
- larger moment arms can force faster muscle shortening at the same joint angular velocity;
- muscle F–V can therefore reverse naive static expectations in fast movement.

Audit result:

**PASS for dynamic caveat.**

---

## 14. Current professional scope

Current NSCA CSCS Detailed Content Outline retains:

**lever systems**

inside kinetic laws/principles of movement / biomechanics.

Audit result:

**PASS professional-scope check.**

---

## 15. Source-audit result

| Source layer | Result |
|---|---:|
| OpenStax Physics foundational lever mechanics | PASS |
| OpenStax A&P general musculoskeletal lever mapping | PASS |
| OpenStax A&P as class/prevalence support | REPAIR |
| Polet & Labonte 2024 gearing | PASS |
| McHenry / Arnold dynamic distinction | PASS |
| Moment-arm / muscle-FV dynamic support | PASS |
| NSCA professional scope | PASS |

No content claim collapses.

One source attribution must be repaired before evidence-ledger finalization.

---

# PART D — EXACT ITEM AUDIT

## 16. Items 1–3

Fulcrum, effort and resistance remain correctly treated as **roles in a defined system**.

No repair needed.

Checks 16–18: **3/3 PASS**.

---

## 17. Items 4–6

First/second/third class remain correctly defined by relative ordering of:

- fulcrum;
- effort;
- resistance.

Boundary retained:

**class does not replace actual perpendicular moment-arm calculation.**

Checks 19–21: **3/3 PASS**.

---

## 18. Item 7

Underlying content is valid after narrowing.

Current map wording is too broad.

Check 22: **REPAIR REQUIRED**.

---

## 19. Item 8

Underlying content is valid.

Map wording must explicitly distinguish:
- force mechanical advantage;
- reciprocal displacement/velocity advantage;
- instantaneous/geometric relation vs realized performance.

Check 23: **REPAIR REQUIRED**.

---

## 20. Item 9

Underlying geometric idea is valid.

Map wording must replace unqualified “speed/ROM” with:
- output displacement/velocity amplification;
- explicit realized-speed and anatomical-ROM limits.

Check 24: **REPAIR REQUIRED**.

---

## 21. Item 10

Anatomical + external lever interaction is sufficient as one map item.

No nested-lever item is needed.

Check 25: **PASS**.

---

# PART E — DOWNSTREAM OWNERSHIP

## 22. MEC-03 / MEC-04

MEC-03 owns:
- system boundary;
- FBD;
- force inventory.

MEC-04 owns:
- torque;
- moment arms;
- generic mechanical advantage geometry.

MEC-05 owns:
- F/E/R lever roles;
- class taxonomy;
- gearing interpretation;
- internal/external lever coupling.

Check 26: **PASS**.

---

## 23. MEC-08 / PHY

MEC-05 may state instantaneous/geometric transform.

MEC-08/PHY own:
- muscle F–V;
- architecture;
- tendon compliance;
- muscle-tendon excursion mechanics.

Check 27: **PASS**.

---

## 24. MEC-09/10/11

Specific resistance-source geometry remains downstream.

Check 28: **PASS**.

---

## 25. MEC-12 / MEC-21

Joint-specific moving axes, model sensitivity and measurement uncertainty remain downstream.

Check 29: **PASS**.

---

## 26. MEC-19 / TEC / PRO

Lever classification/gearing does not establish:
- best exercise;
- safe/unsafe technique;
- hypertrophy superiority;
- programming prescription.

Check 30: **PASS**.

**Downstream ownership = 5/5 PASS.**

---

# PART F — REQUIRED REPAIR CLUSTER

## 27. Source-map changes required

Do not add or remove Section 5 items.

Targeted wording repair only:

### Item 7

Current:

> Human movement as predominantly third-class leverage.

Replace with:

> **Third-class leverage as a common human musculoskeletal model — limits of universal classification.**

### Item 8

Current:

> Mechanical advantage/disadvantage.

Replace with:

> **Mechanical advantage/disadvantage — force ratio and reciprocal displacement/velocity ratio.**

### Item 9

Current:

> Why poor mechanical advantage can be useful for speed/ROM.

Replace with:

> **Low mechanical advantage — geometric displacement/velocity amplification and limits for realized speed/anatomical ROM.**

Section 5 remains **10 items**.

---

## 28. Evidence-ledger repair required

Do not finalize `MEC05-01…MEC05-12` yet.

At minimum:

1. make class-taxonomy support explicit rather than generic “foundational/current anatomy sources”;
2. remove OpenStax A&P §11.1 as direct evidence for third-class prevalence unless paired with an exact class-specific source;
3. make the force/velocity ratio direction explicit in the mechanical-advantage rows;
4. keep dynamic caveat attached to realized speed/performance claims.

Ledger status remains:

**MEC-05 AUDIT PENDING.**

---

## 29. No new content topic required

The audit did **not** find a missing 11th concept.

The gap is precision, not breadth.

This prevents unnecessary taxonomy expansion.

---

# PART G — CLOSURE DECISION

## 30. Closure matrix

| Layer | Result |
|---|---:|
| Exact Section 5 content coverage | 10/10 covered |
| Exact map items safe for closure | 7/10 PASS; 3 REPAIR |
| Reserved closure questions | 3 PASS; 4 REPAIR; 1 FAIL closure |
| Current-source/provenance audit | content retained; 1 attribution repair |
| Downstream ownership | 5/5 PASS |
| New topic/item needed | NO |
| Canonical finding authorized | NO |
| CLOSED_FOR_PRACTICE authorized | NO |

---

# 31. Final decision

**MEC-05 does not close in PASS-02.**

Reason:

three existing map items need targeted wording repair and the ledger needs source/ratio precision.

This is not a substantive rejection of PASS-01.

It is a correction of the interface through which future work will reuse PASS-01.

No canonical MEC-05 finding is created in this pass.

`CLOSED_FOR_PRACTICE` is not assigned.

---

# 32. Sources independently checked

1. OpenStax Physics — 9.3 Simple Machines  
   https://openstax.org/books/physics/pages/9-3-simple-machines

2. OpenStax Anatomy & Physiology 2e — 11.1 Interactions of Skeletal Muscles, Their Fascicle Arrangement, and Their Lever Systems  
   https://openstax.org/books/anatomy-and-physiology-2e/pages/11-1-interactions-of-skeletal-muscles-their-fascicle-arrangement-and-their-lever-systems

3. Polet DT, Labonte D. Optimal Gearing of Musculoskeletal Systems. Integr Comp Biol. 2024;64(3):987-1006. PMID 38901962.  
   https://pubmed.ncbi.nlm.nih.gov/38901962/

4. McHenry MJ. There is no trade-off between speed and force in a dynamic lever system. Biol Lett. 2011;7(3):384-386. PMID 21147828.  
   https://pubmed.ncbi.nlm.nih.gov/21147828/

5. Arnold AS, Richards CT, Ros IG, Biewener AA. There is always a trade-off between speed and force in a lever system: comment on McHenry (2010). Biol Lett. 2011;7(6):878-879. PMID 21880618.  
   https://pubmed.ncbi.nlm.nih.gov/21880618/

6. Nagano A, Komura T. Longer moment arm results in smaller joint moment development, power and work outputs in fast motions. J Biomech. 2003;36(11):1675-1681. PMID 14522209.  
   https://pubmed.ncbi.nlm.nih.gov/14522209/

7. Optimizing Resistance Training for Sprint and Endurance Athletes: Balancing Positive and Negative Adaptations. Sports Med. 2024. PMID 39373864.  
   https://pubmed.ncbi.nlm.nih.gov/39373864/

8. NSCA — 2025 CSCS Detailed Content Outline / Certification Handbook.  
   Current DCO checked 2026-11-20.

---

# 33. Next one block

**MEC-05/PASS-03 — lever-map wording / evidence-provenance repair.**

Required work:

1. patch only Section 5 items 7–9;
2. repair MEC05 ledger source/ratio wording;
3. preserve 10-item map count;
4. do not create canonical finding yet;
5. leave final closure to a repeat independent audit.

After PASS-03:

**MEC-05/PASS-04 — repeat closure audit and synthesis.**

STOP after this PASS.
