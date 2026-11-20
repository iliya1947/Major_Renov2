# PHY-08 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-18  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 03 — Physiology  
Topic: PHY-08 — Strength physiology

## 0. Purpose

Проверить, что после PASS-01 тема PHY-08 достаточно закрывает physiology of strength development для downstream power, fatigue, biomechanics, exercise selection, programming and testing без:

- strength = hypertrophy;
- EMG = neural adaptation;
- architecture = one-variable explanation;
- tendon stiffness = direct proportional cause of strength;
- 1RM = isolated muscle-force capacity;
- one universal “strength” construct;
- ignoring joint-angle / velocity / contraction-mode / task specificity;
- RFD = maximal force;
- relative strength without scaling definition;
- strength endurance = maximal strength;
- assuming complete transfer across tasks.

## 1. Materials audited

1. `areas/03_physiology.md`, Section 9 — 15 exact items;
2. `NORMALIZED_KNOWLEDGE_TREE.md`, PHY-08;
3. `PASS-01_strength_physiology_revalidation.md`;
4. `EVIDENCE_LEDGER.md`, PHY08-01…PHY08-14;
5. current physiology findings inventory confirming no pre-existing PHY-08 canonical;
6. current external re-check of closure-critical evidence:
   - ACSM 2026 — PMID 41843416;
   - task-specificity meta-analysis 2025 — PMID 40314751;
   - isometric vs dynamic meta-analysis 2025 — PMID 40817007;
   - eccentric vs concentric strength meta-analysis 2025 — PMID 40839186;
   - tendon stiffness/strength meta-analysis 2026 — PMID 42924672;
   - strength-variable meta-analysis 2026 — PMID 41995957;
   - RFD meta-analysis — PMID 32034703;
   - joint-angle specificity study — PMID 31522276;
   - load/velocity-specific trial 2026 — PMID 41677845;
   - non-failure vs failure meta-analysis 2026 — PMID 42410632.

## 2. Exact area-map audit — 15/15

1. Neural adaptation — **PASS WITH NEU BOUNDARY**.
2. Hypertrophy contribution — **PASS**.
3. Muscle architecture contribution — **PASS**.
4. Tendon stiffness contribution — **PASS WITH CAUSAL UNCERTAINTY**.
5. Intermuscular coordination — **PASS WITH NEU BOUNDARY**.
6. Skill/technique contribution — **PASS WITH NEU/TEC BOUNDARY**.
7. Specificity of force production — **PASS**.
8. Joint-angle specificity — **PASS**.
9. Velocity specificity — **PASS**.
10. Contraction-mode specificity — **PASS**.
11. Rate of force development — **PASS WITH PHY-09 BOUNDARY**.
12. Maximal voluntary force — **PASS**.
13. Absolute vs relative strength — **PASS**.
14. Strength endurance — **PASS**.
15. Transfer of strength between tasks — **PASS**.

Result: **15/15 PASS.**

## 3. Size–strength dissociation audit

PASS.

Current model correctly explains both directions.

### Strength gain > hypertrophy
Can occur through:

- neural adaptation;
- task skill;
- coordination;
- joint-angle/velocity/mode specificity;
- architecture/MTU changes;
- familiarization with maximal effort.

### Hypertrophy > measured strength gain
Can occur when:

- training/test tasks differ;
- neural/skill transfer is limited;
- regional growth is poorly matched to test mechanics;
- relative rather than absolute strength is examined;
- measurement construct differs.

Canonical rule:

**hypertrophy changes force-producing capacity; neural/skill/mechanical specificity determines expression in a given test.**

No blocker.

## 4. Neural-contribution audit

PASS.

Neural adaptation is retained as a major contributor to strength development, especially early/task-specifically.

But the project does not infer neural adaptation solely from surface EMG amplitude.

Canonical rule:

**neural adaptation is real; surface EMG is incomplete and context-sensitive.**

Detailed central/motor-unit mechanisms remain NEU.

No blocker.

## 5. Hypertrophy-contribution audit

PASS.

Muscle size is a major determinant of force potential.

Current within-participant data support a strong association between muscle growth and strength gain, while the broader evidence shows strength changes also depend on non-size factors.

Canonical rule:

**larger muscle generally raises strength potential but does not uniquely determine task strength.**

No blocker.

## 6. Architecture audit

PASS.

PCSA, pennation and fascicle length can modify force expression.

But:

- their training responses are not uniform;
- architecture is muscle/region/protocol dependent;
- no single variable explains strength globally.

Canonical rule:

**architecture contributes to force expression without being a universal strength surrogate.**

No blocker.

## 7. Tendon-stiffness audit

PASS WITH PRESERVED CAUSAL UNCERTAINTY.

The 2026 paired meta-analysis found chronic mechanical loading increased both strength and tendon stiffness, but:

- the primary estimand was paired within-group change rather than a control-adjusted treatment effect;
- controlled-design restriction attenuated the contrast;
- functional/causal interpretation remained uncertain.

Canonical rule:

**tendon stiffness is an adaptation relevant to force transmission/RFD, but its change cannot be assigned a fixed causal share of maximal-strength gain.**

No blocker.

## 8. Intermuscular coordination / skill audit

PASS.

A multi-joint strength test includes:

- coordination;
- stabilization;
- sequencing;
- bar/device path;
- bracing;
- timing;
- familiarization.

Canonical rule:

**1RM performance contains skill/coordination in addition to contractile capacity.**

Detailed learning/control → NEU/TEC.

No blocker.

## 9. Task-specificity audit

PASS.

The 2025 meta-analysis shows dynamic RT produces larger gains in trained dynamic strength than in non-trained isometric strength.

This supports a graded transfer model:

`general adaptation + task-specific adaptation → observed test gain`.

Canonical rule:

**strength transfer exists but weakens as task distance increases.**

No blocker.

## 10. Joint-angle specificity audit

PASS.

Isometric training can produce the largest strength gain near the trained joint angle, with meaningful transfer to neighboring/untrained angles.

The controlled 2019 study confirmed angle-specific torque gains without equally clear angle-specific EMG changes.

Canonical rule:

**joint angle is part of the strength task; specificity is real but not confined to one exact angle.**

No blocker.

## 11. Velocity-specificity audit

PASS.

Current evidence supports:

- heavier/maximal-strength training → stronger specificity to high-force/maximal-strength outcomes;
- explosive/ballistic training → stronger specificity to high-velocity performance;
- fast intent can matter even when actual movement is constrained by high load;
- cross-velocity transfer exists.

The 2026 lower-body trial directly demonstrated different adaptation patterns across squat 1RM, loaded RFD and unloaded jump outcomes.

Canonical rule:

**no single training velocity maximizes every force–velocity outcome.**

No blocker.

## 12. Contraction-mode specificity audit

PASS.

Current meta-analyses show:

- eccentric-only training preferentially improves eccentric MVC;
- concentric/isometric outcomes show meaningful cross-mode transfer;
- isometric training preferentially improves isometric strength;
- isokinetic/dynamic outcomes can improve across modalities.

Canonical rule:

**mode specificity is substantial but not exclusive.**

No blocker.

## 13. RFD audit

PASS.

RFD remains distinct from maximal force.

Time-window logic is preserved:

- early RFD → greater relative influence of rapid neural activation;
- later RFD → increasing contribution from maximal force capacity and muscle/MTU properties.

Current meta-analysis supports improvement in early, late and maximal RFD after RT, with fast intent/speed and movement similarity favoring peak RFD.

Canonical rule:

**RFD requires its own measurement and training specificity.**

Detailed power/RFD synthesis remains PHY-09.

No blocker.

## 14. MVC / MVF vs 1RM audit

PASS.

### MVC / MVF
Maximum voluntary force/torque under a defined contraction, joint angle and setup.

### 1RM
Maximum external load successfully moved through a dynamic task.

1RM additionally contains:

- dynamic coordination;
- technique;
- movement-path mechanics;
- ROM;
- confidence/familiarization.

Canonical rule:

**MVC and 1RM are distinct strength constructs and must not be treated as interchangeable.**

No blocker.

## 15. Absolute vs relative strength audit

PASS.

Absolute strength is unnormalized force/load.

Relative strength depends on a denominator/scaling model:

- body mass;
- lean mass;
- PCSA;
- allometric scaling.

Simple ratio scaling is not universally scale-invariant.

Canonical rule:

**relative strength is not one universal metric; the denominator and scaling method must be stated.**

No blocker.

## 16. Strength-endurance audit

PASS.

Strength endurance depends on:

- maximal-strength reserve;
- local metabolic capacity;
- fatigue resistance;
- task/load;
- pacing.

It is therefore not reducible to maximal strength.

The 2026 failure-vs-nonfailure meta-analysis found no clear muscular-endurance advantage of failure training.

Canonical rule:

**maximal strength and strength endurance are separate outcomes.**

No blocker.

## 17. Heavy-load / dosage audit

PASS WITH INTERPRETATION BOUNDARY.

ACSM 2026 supports heavier loads (≥80% 1RM in its review classification) for greater voluntary-strength gains.

The 2026 strength-variable meta-analysis found non-linear dosage relationships and modeled group-level plateaus for chest/quadriceps outcomes.

Critical boundary:

**pooled modeled plateaus are not personal training ceilings.**

They are population-level model estimates and may vary with muscle group, study design and training status.

No blocker.

## 18. Transfer hierarchy audit

PASS.

Transfer depends on similarity across:

- movement pattern;
- joint angle/ROM;
- contraction mode;
- velocity;
- muscles;
- coordination;
- external mechanics.

Canonical rule:

**more general capacity transfers broadly; more task-specific skill/coordination transfers less as similarity decreases.**

No blocker.

## 19. Evidence-ledger audit

Current ledger covers closure-critical claims:

1. PHY08-01 — task-defined multi-factor strength;
2. PHY08-02 — size–strength dissociation;
3. PHY08-03 — neural contribution/EMG boundary;
4. PHY08-04 — architecture;
5. PHY08-05 — tendon stiffness causal boundary;
6. PHY08-06 — task specificity;
7. PHY08-07 — joint-angle specificity;
8. PHY08-08 — velocity specificity;
9. PHY08-09 — contraction-mode specificity;
10. PHY08-10 — RFD distinction;
11. PHY08-11 — MVC vs 1RM;
12. PHY08-12 — absolute/relative strength;
13. PHY08-13 — strength endurance;
14. PHY08-14 — heavy-load/dose boundary.

No additional ledger row is required for closure.

## 20. Uncertainty audit

PASS.

Remaining uncertainty is non-blocking:

1. exact percentage of a strength gain caused by hypertrophy vs neural/skill factors;
2. exact causal contribution of tendon stiffness;
3. exact architecture contribution in one exercise;
4. exact transfer gradient between arbitrary tasks;
5. optimal relative-strength normalization method for every purpose;
6. individual dose plateau;
7. exact velocity-specific dose for a person;
8. detailed RFD mechanisms.

These belong downstream rather than blocking the normalized question.

## 21. Scope-control audit

Neighboring topics remain separate:

- neural mechanisms → NEU;
- power/RFD → PHY-09;
- fatigue → PHY-10;
- tendon adaptation → PHY-12;
- mechanics → MEC;
- technique/exercise selection → TEC;
- dose prescription → PRO;
- measurement/testing → TST;
- personal targets → IND.

No new PASS is needed before closure.

## 22. Closure criterion test

Normalized-tree question:

> почему сила растёт без пропорциональной hypertrophy и наоборот?

Result: **PASS.**

Canonical synthesis:

`observed task strength`
`=`
`contractile capacity (size/PCSA/specific tension)`
`+`
`neural activation/coordination`
`+`
`architecture + MTU mechanics`
`+`
`task skill/specificity`
`+`
`test conditions`.

This is a causal organization model, not a literal additive calculation.

Therefore:

**muscle size changes capacity; training specificity and neuromuscular/mechanical factors determine how much capacity is expressed in a particular strength task.**

## 23. Closure decision

**PHY-08 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 15 exact Section 9 items pass;
2. strength is task/test-defined;
3. size and strength are related but non-equivalent;
4. neural/architecture/tendon/skill factors are integrated without false precision;
5. task, angle, velocity and contraction mode specificity are explicit;
6. RFD, MVC, 1RM, relative strength and endurance are distinct constructs;
7. transfer is graded by similarity;
8. pooled dosage plateaus are not individual ceilings;
9. no project-relevant blocker remains;
10. first canonical PHY-08 finding can now be created;
11. PHY-09 can proceed without reopening PHY-08 unless a concrete dependency appears.

## 24. Next dependency

**PHY-09 — Power / RFD.**

Do not start PHY-09 in this same working block.
