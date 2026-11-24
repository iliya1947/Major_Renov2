# MEC-05 / PASS-03 — Lever-map wording / evidence-provenance repair

Дата: 2026-11-22  
Статус: **REPAIR CONTENT COMPLETE — REPEAT CLOSURE AUDIT PENDING**  
Область: 06 — Biomechanics  
Topic: MEC-05 — Lever systems

## 0. Why this pass exists

MEC-05/PASS-02 independently refused closure after identifying a bounded repair cluster:

1. Section 5 item 7 overstated a teaching generalization as a broad human-movement claim.
2. Item 8 did not state the direction of force vs displacement/velocity ratios explicitly.
3. Item 9 compressed geometric excursion/velocity amplification, realized dynamic speed and anatomical ROM.
4. OpenStax A&P §11.1 had been used too broadly in the draft provenance for class/prevalence claims.

This pass repairs only those defects.

It does not:
- add an 11th Section 5 item;
- reopen items 1–6 or 10;
- perform final closure;
- create the canonical MEC-05 finding;
- assign `CLOSED_FOR_PRACTICE`.

---

# PART A — SOURCE-MAP REPAIR

## 1. Section 5 item 7

Previous:

> Human movement as predominantly third-class leverage.

Repaired:

> **Third-class leverage as a common human musculoskeletal model — limits of universal classification.**

### Why

Current anatomy teaching sources support:
- first-/second-/third-class classification by F/E/R arrangement;
- third-class leverage as the most common class in the human body / a common musculoskeletal arrangement;
- elbow flexion as a standard third-class example.

But that does not justify a universal movement-level law.

The same region can be represented differently when:
- system boundary changes;
- ground/contact conditions change;
- different muscle groups or resistance definitions are selected;
- the task becomes multi-contact/multijoint.

Canonical rule:

**third-class prevalence is a bounded musculoskeletal teaching generalization, not a permanent label for every joint or every human movement.**

Result: **REPAIRED**.

---

## 2. Section 5 item 8

Previous:

> Mechanical advantage/disadvantage.

Repaired:

> **Mechanical advantage/disadvantage — force ratio and reciprocal displacement/velocity ratio.**

### Canonical ratio convention

For the simplified ideal instantaneous lever used in MEC-05:

`G = F_out/F_in = r_effort/r_resistance`.

The reciprocal kinematic ratio is:

`v_out/v_in = d_out/d_in = 1/G`.

Equivalent:

`G = F_out/F_in = v_in/v_out = d_in/d_out`.

Polet & Labonte 2024 explicitly distinguish:
- force advantage;
- velocity/displacement advantage;
and define them as reciprocals.

OpenStax simple-machine mechanics likewise expresses ideal mechanical advantage as a force ratio and reciprocal distance relation.

Canonical rule:

**force mechanical advantage and output displacement/velocity advantage do not increase in the same direction.**

Result: **REPAIRED**.

---

## 3. Section 5 item 9

Previous:

> Why poor mechanical advantage can be useful for speed/ROM.

Repaired:

> **Low mechanical advantage — geometric displacement/velocity amplification and limits for realized speed/anatomical ROM.**

### Geometric statement

Low force MA (`G < 1`) can correspond to:

`d_out/d_in > 1`

and

`v_out/v_in > 1`

at the instantaneous/geometric level.

This is the useful lever transform.

### Dynamic boundary

It does not guarantee higher realized movement speed.

Whole-movement output depends on:
- muscle force–velocity behavior;
- inertia;
- external forces/load;
- tendon/elastic dynamics;
- activation;
- acceleration history;
- energy transmission.

Polet & Labonte 2024 provide the modern synthesis:
instantaneous force/velocity gearing remains valid, while the relationship between gearing and complete dynamic performance is not one-to-one.

McHenry 2011 and Arnold et al. 2011 are retained as the classic debate illustrating this distinction.

### ROM boundary

Low force MA can reduce required input/muscle excursion for a given output displacement.

It does not uniquely determine anatomical ROM.

Anatomical ROM also depends on:
- joint geometry;
- soft tissues;
- muscle-tendon length;
- contact/impingement;
- task and control constraints.

Canonical rule:

**geometric excursion advantage ≠ guaranteed speed ≠ anatomical ROM.**

Result: **REPAIRED**.

---

# PART B — CLASS / PREVALENCE PROVENANCE REPAIR

## 4. Exact class definitions

Class-taxonomy support is now explicitly assigned to current anatomy teaching sources that actually state the arrangements.

### First class
Fulcrum between effort and resistance.

### Second class
Resistance between fulcrum and effort.

### Third class
Effort between fulcrum and resistance.

Current sources checked:
- Oregon State Open Anatomy & Physiology 2e, §11.2;
- Medicine LibreTexts Human Anatomy (OERI), §10.2.

Result: **PASS**.

---

## 5. Tiptoe teaching example

Current anatomy teaching sources explicitly retain standing on tiptoe / heel raise as a second-class example when modeled with:

- forefoot/metatarsophalangeal region as fulcrum;
- body load as resistance;
- calf/Achilles effort as input.

Project boundary remains:

**this is a teaching model of a selected free body/configuration, not a permanent ankle-joint class.**

Result: **PASS WITH BOUNDARY**.

---

## 6. Third-class prevalence

Oregon State Open A&P 2e explicitly states that third-class is the most common class of lever in the human body.

The project deliberately stores a narrower claim:

**third-class leverage is a common and often-described predominant human musculoskeletal model.**

It does not store:
- “all human movement is third-class”;
- a quantitative percentage of human movements;
- permanent third-class identity of specific joints.

Result: **PASS AFTER NARROWING**.

---

## 7. OpenStax A&P attribution correction

OpenStax A&P §11.1 remains valid for:
- bone as lever;
- joint as simplified fulcrum;
- muscle as effort;
- load/resistance mapping.

It is **not** retained as the sole/direct source for:
- first-/second-/third-class taxonomy;
- third-class prevalence.

Ledger rows for those claims now use exact class-specific sources.

Result: **REPAIRED**.

---

# PART C — EVIDENCE LEDGER REPAIR

## 8. MEC05-02

Repaired:
- generic “foundational/current anatomy sources” attribution replaced by exact current anatomy sources;
- configuration-dependence boundary made explicit.

Result: **PASS**.

---

## 9. MEC05-03 / MEC05-04

Repaired:
- “mechanical advantage” specified as **force mechanical advantage** where relevant;
- class labels separated from actual arm-ratio calculation;
- exact class-specific sources added.

Result: **PASS**.

---

## 10. MEC05-05

Repaired:
- removed OpenStax A&P as direct class/prevalence support;
- third-class claim narrowed to a bounded musculoskeletal teaching generalization;
- system-boundary dependency added explicitly.

Result: **PASS**.

---

## 11. MEC05-06 / MEC05-07 / MEC05-08

Repaired:

### MEC05-06
Now states:

`G = F_out/F_in = r_effort/r_resistance`

and:

`d_out/d_in = v_out/v_in = 1/G`.

### MEC05-07
Now distinguishes:
- geometric output displacement/velocity amplification;
- realized dynamic speed;
- anatomical ROM.

### MEC05-08
Now states that instantaneous gearing is reciprocal while complete movement performance is many-to-one with respect to:
- gearing;
- muscle properties;
- anatomy;
- environment.

Result: **PASS**.

---

## 12. Ledger status

All `MEC05-01…MEC05-12` remain non-final.

Status changed from:

**MEC-05 AUDIT PENDING**

to:

**MEC-05 REPEAT AUDIT PENDING**.

This pass does not pre-approve closure.

Result: **PASS**.

---

# PART D — REPAIR AUDIT

## 13. Repair checklist

1. Section 5 count remains 10 → **PASS**.
2. No new topic added → **PASS**.
3. Item 7 narrowed → **PASS**.
4. Item 8 ratio direction explicit → **PASS**.
5. Item 9 geometric/dynamic/ROM distinction explicit → **PASS**.
6. Exact class-taxonomy source added → **PASS**.
7. Third-class prevalence source repaired → **PASS**.
8. Tiptoe retained only as bounded teaching model → **PASS**.
9. OpenStax A&P over-attribution removed → **PASS**.
10. MEC05 gearing rows repaired → **PASS**.
11. Ledger remains audit-pending → **PASS**.
12. Canonical finding / closure not created → **PASS**.

**PASS-03 repair audit = 12/12 PASS.**

---

# PART E — CURRENT SECTION 5 AFTER REPAIR

1. Fulcrum.
2. Effort force.
3. Resistance force.
4. First-class lever.
5. Second-class lever.
6. Third-class lever.
7. Third-class leverage as a common human musculoskeletal model — limits of universal classification.
8. Mechanical advantage/disadvantage — force ratio and reciprocal displacement/velocity ratio.
9. Low mechanical advantage — geometric displacement/velocity amplification and limits for realized speed/anatomical ROM.
10. Interaction of anatomical and external levers.

Revised Section 5:

**10 exact items.**

---

# PART F — SOURCES CHECKED FOR THIS REPAIR

1. OpenStax Physics — 9.3 Simple Machines.  
   https://openstax.org/books/physics/pages/9-3-simple-machines

2. Oregon State Open Anatomy & Physiology 2e — 11.2 The Organization of Muscle Fascicles and Their Role in Generating Force.  
   https://open.oregonstate.education/anatomy2e/chapter/organization-muscle-fascicles/

3. Medicine LibreTexts — Human Anatomy (OERI), 10.2 Interactions of Skeletal Muscles, Their Fascicle Arrangement, and Their Lever Systems.  
   https://med.libretexts.org/Bookshelves/Anatomy_and_Physiology/Human_Anatomy_%28OERI%29/10%3A_Muscular_System/10.02%3A_Interactions_of_Skeletal_Muscles_Their_Fascicle_Arrangement_and_Their_Lever_Systems

4. Polet DT, Labonte D. Optimal Gearing of Musculoskeletal Systems. Integr Comp Biol. 2024;64(3):987-1006. PMID 38901962.  
   https://pubmed.ncbi.nlm.nih.gov/38901962/

5. McHenry MJ. There is no trade-off between speed and force in a dynamic lever system. Biol Lett. 2011. PMID 21147828.

6. Arnold AS et al. There is always a trade-off between speed and force in a lever system: comment on McHenry. Biol Lett. 2011. PMID 21880618.

7. Nagano A, Komura T. Longer moment arm results in smaller joint moment development, power and work outputs in fast motions. J Biomech. 2003. PMID 14522209.

---

# 14. Status

**MEC-05/PASS-03 — REPAIR CONTENT COMPLETE.**

Results:

- Section 5 remains **10 exact items**;
- items 7–9 repaired;
- class/prevalence provenance repaired;
- force vs velocity/displacement ratio direction made explicit;
- geometric excursion/velocity separated from realized speed and anatomical ROM;
- `MEC05-01…MEC05-12` remain **REPEAT AUDIT PENDING**;
- canonical MEC-05 finding still **not created**;
- `CLOSED_FOR_PRACTICE` still **not assigned**.

Next one block:

**MEC-05/PASS-04 — repeat independent closure audit and synthesis after wording/provenance repair.**

STOP after this PASS.
