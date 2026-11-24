# BIO-03 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-19  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 05 — Bioenergetics / Exercise Metabolism  
Topic: BIO-03 — Glycolysis

## 0. Purpose

Независимо перепроверить PASS-01 и решить, достаточно ли BIO-03 закрывает Area 05 Section 3 для downstream BIO-04…BIO-12, PRO, TST и NUT без:

- смешения blood glucose и muscle glycogen как идентичных substrate-entry routes;
- использования одного ATP-yield числа без указания substrate/pathway boundary;
- буквального прочтения “anaerobic glycolysis” как отсутствия O2;
- трактовки lactate formation как маркера anoxia;
- включения LDH reaction внутрь core glycolytic pathway без терминологической оговорки;
- смешения ATP yield, ATP-production rate и total carbohydrate oxidation yield;
- предположения постоянного glycolytic flux при all-out effort;
- трактовки glycogen depletion как total exhaustion;
- трактовки low glycogen как универсальной единственной причины fatigue;
- переноса carbohydrate repletion prescription в BIO-03;
- трактовки enzyme activity/content как прямого surrogate in-vivo flux/performance.

---

## 1. Materials audited

1. `areas/05_bioenergetics.md`, Section 3 — 11 exact items;
2. `PASS-01_glycolysis_revalidation.md`;
3. `EVIDENCE_LEDGER.md`, BIO03-01…BIO03-10;
4. canonical BIO-01/BIO-02 findings;
5. independent source re-check:
   - NCBI Bookshelf, *Biochemistry, Glycolysis*;
   - NCBI Bookshelf, *Glycogenolysis*;
   - NCBI Bookshelf, *How Cells Obtain Energy from Food*;
   - exercise carbohydrate review PMCID **PMC4727532**;
   - exercise-metabolism review PMID **37225892**, PMCID **PMC10527431**;
   - lactate review PMID **32113910**, PMCID **PMC7284908**;
   - current lactate review 2026 PMCID **PMC13559195**;
   - direct human ATP-synthesis study PMID **10457099**;
   - direct sprint metabolism study PMID **9715738**;
   - resistance-exercise glycogen meta-analysis PMID **41420384**;
   - low-glycogen human experiment PMID **40895431**;
   - current acute exercise/glycogen RCT PMID **41830465**;
   - glycolytic-enzyme SIT RCT PMID **38537252**;
   - resistance-training enzyme study PMID **17111003**;
   - glycogen regulation review PMID **35355125**.

No closure-critical contradiction was found.

---

## 2. Exact area-map audit — 11/11

1. Glucose vs glycogen as substrate — **PASS; DIFFERENT ENTRY COSTS, SAME DOWNSTREAM G6P HUB**.
2. Glycolytic pathway — **PASS; CYTOSOLIC GLUCOSE/G6P → PYRUVATE PATHWAY, NO DIRECT O2 SUBSTRATE**.
3. ATP yield — **PASS; SUBSTRATE MUST BE NAMED; YIELD ≠ RATE ≠ TOTAL OXIDATIVE ATP**.
4. Rate vs capacity — **PASS; RAPID/HIGH FLUX, FINITE TASK-DEPENDENT CAPACITY**.
5. Pyruvate — **PASS AS BRANCH-POINT METABOLITE**.
6. Lactate formation — **PASS AS LDH-COUPLED REDOX FATE; DEEP LACTATE PHYSIOLOGY DEFERRED BIO-04**.
7. NAD+/NADH regeneration — **PASS; LDH + MITOCHONDRIAL REDOX SHUTTLES**.
8. Glycolytic contribution during high-intensity work — **PASS AS MAJOR DYNAMIC CONTRIBUTION WITH CONCURRENT PCr/OXIDATIVE FLUX**.
9. Glycogen depletion — **PASS AS TASK/PROTOCOL DEPENDENT, NOT TOTAL EXHAUSTION**.
10. Glycogen repletion — **PASS AT MECHANISTIC/SCOPE LEVEL; PRESCRIPTION DEFERRED BIO-10/NUT**.
11. Glycolytic enzyme adaptations — **PASS AS TRAINABLE BUT PROTOCOL/ENZYME SPECIFIC; NOT PERFORMANCE SURROGATE**.

Result: **11/11 PASS.**

---

## 3. Glucose vs glycogen entry audit

PASS WITH STOICHIOMETRIC REFINEMENT.

### Free glucose

Free glucose requires phosphorylation by hexokinase:

`glucose + ATP → G6P + ADP`.

That ATP cost is part of the classic two-ATP investment phase.

### Muscle glycogen

Glycogen phosphorylase cleaves most α-1,4-linked glucosyl residues by phosphorolysis to glucose-1-phosphate.

Phosphoglucomutase converts G1P to G6P.

Thus most glycogen-derived glucosyl units enter downstream glycolysis **without paying the hexokinase ATP cost**.

### Branch-point nuance

Debranching of α-1,6-linked branch residues releases some free glucose.

Therefore the canonical quantitative statement is:

- free glucose → **net 2 glycolytic ATP**;
- an α-1,4 glycogen-derived glucosyl unit entering as G1P→G6P → **net 3 glycolytic ATP**;
- whole-polymer average from glycogen is slightly below 3 ATP per glucosyl unit because branch-point residues can enter as free glucose.

No blocker.

---

## 4. ATP-yield audit

PASS.

NCBI biochemistry sources confirm that one free glucose molecule undergoing glycolysis:

- consumes 2 ATP;
- produces 4 ATP;
- net = **2 ATP**;
- yields 2 NADH and 2 pyruvate.

The glycogen-derived difference is an entry-cost distinction, not a different payoff phase.

Critical project distinction:

**glycolytic ATP yield is a substrate-level stoichiometric quantity.**

It is not:

- glycolytic ATP-production rate;
- total carbohydrate ATP yield after mitochondrial oxidation;
- total ATP turnover of the exercising muscle.

No blocker.

---

## 5. Glycolysis pathway boundary audit

PASS.

Core glycolysis is retained as the cytosolic pathway:

`glucose/G6P → pyruvate`

with:

- ATP investment;
- substrate-level ATP production;
- NAD+ reduction to NADH.

Strict pathway terminology:

**LDH is not one of the canonical core glycolytic steps; it is a tightly coupled downstream redox reaction that helps sustain glycolytic flux by regenerating NAD+.**

This avoids both errors:

- excluding lactate/NAD+ physiology from applied exercise glycolysis;
- incorrectly defining lactate formation as an obligatory terminal step of glycolysis itself.

No blocker.

---

## 6. “Anaerobic glycolysis” terminology audit

PASS WITH TERMINOLOGY RESTRICTION.

The phrase remains common in textbooks and exercise physiology.

But literal interpretation is misleading because glycolysis:

- occurs in the cytosol;
- does not directly consume O2;
- operates under both oxygenated and oxygen-limited conditions.

Therefore project language should prefer:

- **glycolytic ATP production**;
- **rapid glycolytic flux**;
- **lactate-forming glycolytic metabolism** when relevant.

“**Anaerobic glycolysis**” may be retained only as conventional shorthand when context is explicit.

Project rule:

**anaerobic glycolysis ≠ proof that muscle is without oxygen.**

No blocker.

---

## 7. Pyruvate audit

PASS.

Pyruvate is a branch-point metabolite.

Relevant fates include:

- LDH-mediated reduction to lactate;
- mitochondrial transport and PDH-mediated acetyl-CoA formation;
- transamination to alanine;
- other minor/state-dependent fates.

Therefore:

**pyruvate is not the uniquely “aerobic product” of glycolysis, just as lactate is not the uniquely “anaerobic product.”**

No blocker.

---

## 8. Lactate-formation audit

PASS — OXYGEN-MYTH REJECTED.

The reversible LDH reaction is:

`pyruvate + NADH + H+ ↔ lactate + NAD+`.

This reaction can:

- regenerate cytosolic NAD+;
- support continued glycolytic flux;
- occur when oxygen is available.

Current and foundational lactate literature explicitly documents lactate formation under fully aerobic conditions.

Therefore:

**lactate production/accumulation does not establish tissue hypoxia or anoxia.**

Detailed lactate transport, oxidation, shuttling and threshold physiology remains BIO-04.

No blocker.

---

## 9. NAD+/NADH audit

PASS.

The GAPDH step requires NAD+.

Sustained glycolytic flux therefore requires cytosolic NAD+ regeneration.

Two relevant routes are retained:

1. LDH-mediated pyruvate→lactate, oxidizing NADH→NAD+;
2. mitochondrial redox-shuttle systems, including malate-aspartate and glycerol-3-phosphate shuttles, which transfer reducing equivalents and support cytosolic NAD+ regeneration.

The 2023 skeletal-muscle metabolism review explicitly describes both shuttles.

Canonical boundary:

**LDH is a major rapid route for cytosolic redox balance during high glycolytic flux, but it is not the only NAD+-regeneration route.**

No universal fractional LDH-vs-shuttle contribution is retained.

No blocker.

---

## 10. High-rate glycolytic ATP-production audit

PASS.

PMID 10457099 directly measured ATP-synthesis rates in human medial gastrocnemius during 30 s maximal voluntary-rate exercise.

Key results:

- glycogenolytic/glycolytic ATP synthesis peaked at **207 ± 48 mM ATP/min** within 15 s;
- fell to **72 ± 34 mM ATP/min** by 30 s;
- peak glycolytic ATP synthesis was about **2.9-fold** maximal oxidative ATP synthesis in that protocol;
- oxidative ATP synthesis reached ~**85%** of maximal capacity within 9 s.

This supports:

**glycolysis can provide very high ATP flux during intense work.**

It does not justify transferring the exact rate to:

- squat;
- bench press;
- deadlift;
- all resistance-training sets.

No blocker.

---

## 11. Rate vs capacity audit

PASS.

The system-level distinction survives audit:

- glycolytic ATP production can be very fast;
- its sustainable capacity is finite and task dependent.

Capacity is constrained by interacting factors including:

- substrate availability;
- pathway regulation;
- cytosolic redox balance;
- pH/metabolite state;
- changing ATP demand;
- oxidative support.

No universal glycolytic-capacity value is retained.

No blocker.

---

## 12. Concurrent-system audit

PASS — SEQUENTIAL MODEL REJECTED.

PMID 10457099 shows substantial oxidative ATP synthesis already early in a 30 s maximal task while glycolysis is near peak.

PMID 9715738 shows from 10→20 s maximal sprint:

- anaerobic ATP turnover fell ~51%;
- PCr breakdown rate fell ~300%;
- glycolytic rate fell ~35%;
- VO2 rose from ~1.30 to ~2.40 L/min and partly compensated.

Therefore:

**phosphagen, glycolytic and oxidative pathways operate concurrently, while their relative flux changes over time.**

No “glycolysis begins after phosphagen” cutoff survives.

No blocker.

---

## 13. Maximal-effort / glycolytic-rate audit

PASS.

PMID 10457099 and PMID 9715738 independently show glycolytic ATP-production rate can fall during ongoing maximal exercise.

Thus:

**maximal intent/external effort ≠ constant maximal glycolytic flux.**

Mechanistic partition of the decline is not assigned to one cause.

Potential contributors include:

- changing ATP demand/power;
- glycogenolytic control;
- Pi/ADP/AMP;
- redox state;
- pH/metabolite state.

Detailed fatigue mechanisms remain BIO-05/11.

No blocker.

---

## 14. Resistance-exercise glycogen-depletion audit

PASS WITH STRONG CURRENT EVIDENCE.

PMID 41420384 is a current systematic review/meta-analysis of acute resistance exercise.

It included:

- 28 effect sizes;
- 20 study clusters.

Main finding:

- significant mean vastus-lateralis glycogen decrease;
- greater depletion with more sets;
- greater depletion with longer session duration;
- significant heterogeneity and wide prediction interval;
- moderation by intensity/training status.

Therefore:

**resistance exercise can substantially reduce muscle glycogen, but depletion is not a fixed percentage per set/session.**

The evidence is strongest for biopsied muscles/protocols represented in the literature, not all compound lifts and muscles.

No blocker.

---

## 15. Glycogen depletion vs exhaustion audit

PASS.

Muscle glycogen is heterogeneous across:

- fibers;
- recruited regions;
- subcellular pools.

A biopsy mean cannot establish that all glycogen stores are exhausted.

PMID 40895431 provides direct causal evidence that low starting glycogen can impair one high-intensity task:

- 10 healthy young men;
- one-leg glycogen-depleted vs glycogen-loaded comparison;
- time to task failure reduced ~40% in the depleted condition.

But:

**task impairment did not require or demonstrate complete glycogen exhaustion.**

Therefore:

**glycogen depletion ≠ glycogen empty ≠ universal fatigue threshold.**

No blocker.

---

## 16. Glycogen repletion audit

PASS AT MECHANISTIC LEVEL.

Current human work (PMID 41830465) directly confirms:

- acute exercise can deplete glycogen;
- glycogen can be resynthesized during recovery under nutrient/insulin availability.

The project retains:

**glycogen repletion is time- and nutrient-dependent.**

BIO-03 does not prescribe:

- carbohydrate grams/kg;
- timing windows;
- high-vs-low glycemic strategy;
- rapid multi-session recovery protocol.

These remain BIO-10/NUT.

No blocker.

---

## 17. Glycolytic-enzyme adaptation audit

PASS WITH HETEROGENEITY RETAINED.

PMID 38537252:

- randomized trial;
- 5 weeks SIT;
- increases in content/activity of glycogen phosphorylase, HK, PFK and LDH;
- no simple one-to-one improvement in the primary severe-intensity TTF outcome.

PMID 17111003:

- 12 weeks progressive resistance training;
- HK activity +42%;
- PFK unchanged.

Therefore:

**glycolytic-enzyme plasticity is real, but adaptation is enzyme- and protocol-specific.**

No universal rule that all glycolytic enzymes rise after all high-intensity or resistance training survives.

No blocker.

---

## 18. Enzyme assay vs pathway flux/performance audit

PASS.

Measured enzyme content/activity is a capacity marker.

It is not identical to:

- in-vivo pathway flux;
- ATP turnover;
- lactate production;
- glycogen depletion;
- performance.

The SIT RCT directly demonstrates the non-equivalence between enzyme adaptation and simple primary performance change.

Canonical rule:

**enzyme adaptation ≠ in-vivo flux ≠ guaranteed performance improvement.**

No blocker.

---

## 19. Evidence-ledger audit

BIO03-01…BIO03-10 are adequate for closure.

Refinements:

- BIO03-02 should retain the branch-point nuance and avoid “glycogen always exactly 3 ATP”;
- BIO03-04 should explicitly state LDH is a downstream redox reaction coupled to glycolysis rather than a core glycolytic step;
- BIO03-05 should retain lactate ≠ anoxia;
- BIO03-08 should retain resistance-exercise heterogeneity and avoid a universal depletion percentage;
- BIO03-10 should retain enzyme adaptation ≠ flux/performance.

All rows can move from:

`REVALIDATED 2026-11-19 — CLOSURE AUDIT PENDING`

to:

`REVALIDATED 2026-11-19`.

No new ledger row is required.

---

## 20. Uncertainty audit

Remaining uncertainty is real but non-blocking:

1. exact glycolytic ATP flux in specific compound resistance exercises;
2. exact rate/capacity across loads, repetition durations and set lengths;
3. exact LDH-vs-redox-shuttle contribution under different exercise states;
4. direct blood-lactate→muscle-glycolytic-flux mapping;
5. subcellular glycogen-pool contribution to specific failure modes;
6. precise glycogen threshold for performance impairment by task;
7. exact glycogen repletion kinetics under different nutrition strategies;
8. protocol-specific enzyme adaptation across resistance-training styles.

These belong BIO-04/08/10/11/12, TST, PRO and NUT or future evidence updates.

---

## 21. Closure criterion test

Topic:

> BIO-03 — Glycolysis

Result: **PASS.**

Canonical architecture:

`blood glucose or muscle glycogen`
→
`G6P entry with substrate-specific ATP cost`
→
`cytosolic glycolysis`
→
`substrate-level ATP + pyruvate + NADH`
→
`LDH and/or mitochondrial redox handling regenerate cytosolic NAD+`
→
`pyruvate/lactate carbon can continue into downstream oxidation`.

Exercise architecture:

`high ATP demand`
→
`rapid glycolytic flux can rise strongly`
+
`PCr and oxidative pathways remain concurrently active`
→
`glycolytic flux changes dynamically during the bout`.

Critical non-equivalences:

- free glucose ≠ glycogen-derived entry cost;
- ATP yield ≠ ATP-production rate;
- glycolysis ≠ absence of O2;
- lactate ≠ evidence of anoxia;
- LDH reaction ≠ core glycolysis step;
- major glycolytic contribution ≠ glycolysis-only exercise;
- glycogen depletion ≠ total exhaustion;
- enzyme adaptation ≠ pathway flux/performance.

---

## 22. Closure decision

**BIO-03 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 11 exact Section 3 items pass;
2. glycolysis is a cytosolic pathway that does not directly consume O2;
3. free glucose and glycogen-derived substrate have different ATP entry costs;
4. free glucose yields net 2 glycolytic ATP;
5. most α-1,4 glycogen-derived glucosyl units entering as G1P→G6P yield net 3 ATP, with branch-point nuance preventing a universal whole-polymer “exact 3” rule;
6. glycolytic ATP yield is distinct from ATP-production rate and total oxidative carbohydrate ATP yield;
7. pyruvate is a branch-point metabolite;
8. LDH-mediated lactate formation regenerates NAD+ but is conceptually downstream of core glycolysis;
9. lactate formation does not establish tissue anoxia;
10. mitochondrial redox shuttles provide another cytosolic redox-handling route;
11. glycolytic ATP flux can rise rapidly during high-intensity work;
12. phosphagen, glycolytic and oxidative pathways operate concurrently;
13. glycolytic rate can decline during ongoing maximal exercise;
14. resistance/high-intensity exercise can deplete glycogen substantially;
15. glycogen depletion is task/protocol dependent and not equivalent to complete exhaustion;
16. low glycogen can impair some high-intensity tasks but is not a universal fatigue threshold;
17. glycogen repletion is time/nutrient dependent; prescription remains BIO-10/NUT;
18. glycolytic enzymes are trainable but adaptation is protocol/enzyme specific;
19. enzyme activity/content is not a direct surrogate for in-vivo flux or performance;
20. BIO-04/05/06/08/10/11/12, TST, PRO and NUT boundaries remain intact;
21. no project-relevant blocker remains.

---

## 23. Canonical finding authorization

Create:

`research/fitness/findings/05_bioenergetics/BIO-03_glycolysis.md`

Status:

**CLOSED_FOR_PRACTICE v2.0 — revalidated 2026-11-19**.

Evidence-ledger rows:

`BIO03-01…BIO03-10`

remain the stable claim set after closure.

---

## 24. Next dependency

**BIO-04/PASS-01 — Lactate metabolism content revalidation.**

Do not start BIO-04 in this working block.
