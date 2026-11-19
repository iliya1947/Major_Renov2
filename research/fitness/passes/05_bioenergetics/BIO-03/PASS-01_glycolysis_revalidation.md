# BIO-03 / PASS-01 — Glycolysis content revalidation

Дата: 2026-11-19  
Статус: **CONTENT PASS COMPLETE — AUDIT/SYNTHESIS PENDING**  
Область: 05 — Bioenergetics / Exercise Metabolism  
Topic: BIO-03 — Glycolysis

## 0. Source-of-truth / exact scope

Area 05 Section 3 contains **11 exact items**:

1. Glucose vs glycogen as substrate.
2. Glycolytic pathway.
3. ATP yield.
4. Rate vs capacity.
5. Pyruvate.
6. Lactate formation.
7. NAD+/NADH regeneration.
8. Glycolytic contribution during high-intensity work.
9. Glycogen depletion.
10. Glycogen repletion — связь с питанием.
11. Glycolytic enzyme adaptations.

Upstream dependencies:

- BIO-01 — ATP turnover, ΔG, coupling, enzyme kinetics;
- BIO-02 — concurrent ATP-resynthesis systems, high-rate/limited-capacity distinction.

Downstream ownership:

- BIO-04 — lactate production, transport, oxidation, shuttle, thresholds;
- BIO-05 — acid-base physiology and buffering;
- BIO-06 — pyruvate oxidation, TCA, ETC/OXPHOS;
- BIO-07 — broader carbohydrate/fat/protein substrate selection;
- BIO-08 — quantitative interaction of energy systems;
- BIO-10 — glycogen depletion/repletion;
- BIO-11 — metabolic fatigue/limiting factors;
- BIO-12 — resistance-training-specific bioenergetics;
- BIO-16 — training adaptations;
- NUT — carbohydrate intake and glycogen-repletion prescription;
- PRO — exact work:rest/load programming.

No canonical BIO-03 finding exists yet.

---

## 1. Question Card

### Decision

Build the minimum glycolysis framework needed for later resistance-training and high-intensity-exercise reasoning without:

- treating blood glucose and muscle glycogen as metabolically identical entry substrates;
- using one ATP-yield number without naming the substrate and pathway boundary;
- calling glycolysis “anaerobic” as though glycolytic flux requires absence of oxygen;
- treating lactate formation as proof of tissue hypoxia;
- treating lactate as the cause of glycolytic ATP production rather than a redox-linked pyruvate fate;
- omitting NAD+ regeneration as a condition for sustained glycolytic flux;
- assuming pyruvate has only one fate;
- treating glycolysis as the only high-intensity ATP source;
- equating glycogen depletion with complete glycogen exhaustion;
- moving carbohydrate-repletion prescription into BIO-03;
- assuming every high-intensity or resistance-training program necessarily increases all glycolytic enzymes.

### Primary downstream context

Healthy human skeletal muscle during:

- brief/high-intensity exercise;
- repeated high-intensity efforts;
- resistance training;
- recovery/repeated sessions.

### Critical outputs

- glucose-vs-glycogen entry difference;
- pathway and net ATP logic;
- pyruvate/lactate/redox boundary;
- glycolytic rate vs finite capacity;
- concurrent phosphagen/oxidative contribution;
- glycogen depletion and nutrition handoff;
- glycolytic-enzyme adaptation as protocol specific.

---

## 2. Glycolysis — pathway boundary

Glycolysis is a cytosolic pathway that converts a six-carbon glucose unit to two three-carbon pyruvate molecules while:

- consuming ATP in the investment phase;
- generating ATP by substrate-level phosphorylation in the payoff phase;
- reducing NAD+ to NADH.

For one free glucose molecule entering through hexokinase:

- 2 ATP are invested;
- 4 ATP are generated;
- net glycolytic ATP = **2 ATP**;
- 2 NADH are generated;
- 2 pyruvate are produced.

Important boundary:

**glycolysis itself does not directly consume molecular O2.**

O2 becomes critical for mitochondrial oxidative metabolism and redox handling, not as a substrate of the glycolytic reactions themselves.

Confidence: **HIGH**.

---

## 3. Glucose vs muscle glycogen as substrate

Blood/interstitial glucose and muscle glycogen converge at glucose-6-phosphate (G6P), but their entry costs differ.

### Blood glucose

Glucose enters muscle and is phosphorylated by hexokinase:

`glucose + ATP → G6P + ADP`.

This consumes one ATP before downstream glycolysis.

### Muscle glycogen

Most glucosyl residues are released by glycogen phosphorylase as glucose-1-phosphate and converted by phosphoglucomutase to G6P.

This route bypasses the ATP-consuming hexokinase step.

Therefore, in the classic conversion to lactate:

- free glucose → net **2 ATP**;
- a glycogen-derived glucosyl unit entering as G6P → net **3 ATP**.

Nuance:

- glycogen branch-point debranching releases a small fraction as free glucose rather than glucose-1-phosphate;
- therefore “3 ATP per glycogen glucose” is a useful dominant-path stoichiometry, not an exact whole-polymer average for every residue.

Canonical rule:

**ATP yield must name whether glycolysis starts from free glucose or glycogen-derived G6P.**

Confidence: **HIGH**.

---

## 4. Muscle glycogen is local carbohydrate fuel

Skeletal muscle:

- stores a large share of whole-body glycogen;
- lacks glucose-6-phosphatase;
- therefore cannot release glycogen-derived G6P as free glucose into blood.

Muscle glycogen is primarily used locally to support muscle metabolism.

The 2026 NCBI glycogen reference explicitly distinguishes:

- hepatic glycogen → systemic glucose homeostasis;
- muscle glycogen → local contraction-related energy demand.

Canonical boundary:

**muscle glycogen is not interchangeable with liver glycogen or blood glucose.**

Confidence: **HIGH**.

---

## 5. Glycolytic control is distributed, not one “master switch”

The pathway contains multiple regulated steps, including:

- glucose transport/phosphorylation;
- glycogen phosphorylase/glycogenolysis;
- phosphofructokinase;
- glyceraldehyde-3-phosphate dehydrogenase/redox availability;
- pyruvate kinase;
- downstream pyruvate/lactate/mitochondrial handling.

Exercise regulation depends on:

- ATP demand;
- ADP/AMP/Pi;
- Ca2+-linked glycogen phosphorylase activation;
- substrate availability;
- redox state;
- hormonal signaling;
- pH and metabolite state.

Project rule:

**do not reduce exercise glycolytic flux to one enzyme or one metabolite concentration.**

Confidence: **HIGH**.

---

## 6. ATP yield — what the number means

The net ATP yield of glycolysis is a **stoichiometric yield per substrate unit**, not an ATP-production rate.

For free glucose:

`glucose → 2 pyruvate + net 2 ATP + 2 NADH`.

For most glycogen-derived glucosyl units entering at G6P:

`glycogen-derived G6P → 2 pyruvate + net 3 ATP + 2 NADH`.

If pyruvate is subsequently oxidized in mitochondria, additional ATP is generated downstream.

That additional oxidative ATP is **not glycolytic ATP yield**.

Canonical rule:

**glycolytic ATP yield ≠ total ATP eventually obtained from complete carbohydrate oxidation.**

Confidence: **HIGH**.

---

## 7. “Aerobic vs anaerobic glycolysis” terminology

The traditional labels are useful shorthand but can mislead.

Glycolysis:

- occurs in the cytosol;
- produces ATP without directly using O2;
- can operate when O2 is abundant;
- can operate when O2 availability is insufficient for total ATP demand.

Therefore:

**lactate formation or high glycolytic flux does not prove local absence of oxygen.**

A safer project distinction is:

- glycolytic ATP production;
- pyruvate/lactate redox handling;
- mitochondrial oxidation.

Detailed lactate-shuttle physiology remains BIO-04.

Confidence: **HIGH**.

---

## 8. Pyruvate

Pyruvate is the immediate three-carbon product of glycolysis.

In exercising skeletal muscle it can participate in multiple pathways, including:

- reduction to lactate via LDH;
- transport into mitochondria and conversion by pyruvate dehydrogenase to acetyl-CoA;
- transamination to alanine;
- other context-dependent reactions.

Canonical rule:

**pyruvate is a branch-point metabolite, not automatically “the aerobic product” while lactate is “the anaerobic product.”**

Confidence: **HIGH**.

---

## 9. Lactate formation

Lactate dehydrogenase catalyzes the reversible reaction:

`pyruvate + NADH + H+ ↔ lactate + NAD+`.

The forward lactate-forming direction:

- consumes pyruvate and NADH;
- regenerates cytosolic NAD+;
- can support continued glycolytic flux.

Current and foundational exercise literature establish that lactate can be formed under fully aerobic conditions.

Therefore:

**lactate formation ≠ proof of oxygen absence.**

Detailed lactate production/clearance/oxidation/shuttling belongs BIO-04.

Confidence: **HIGH**.

---

## 10. NAD+/NADH regeneration

At the glyceraldehyde-3-phosphate dehydrogenase step, NAD+ is reduced to NADH.

Sustained glycolytic flux requires regeneration of cytosolic NAD+.

Major routes include:

- LDH: pyruvate → lactate while NADH → NAD+;
- mitochondrial redox shuttles that transfer cytosolic reducing equivalents into mitochondria.

The 2023 integrated skeletal-muscle metabolism review explicitly describes malate-aspartate and glycerol-3-phosphate shuttles as mechanisms recycling extramitochondrial NAD+ / transferring reducing power.

Canonical rule:

**lactate formation is one major cytosolic NAD+-regeneration route, not the only possible redox route.**

Confidence: **HIGH**.

---

## 11. Lactate is not required because glycolysis “runs out of oxygen”

The classical causal chain:

`no O2 → pyruvate becomes lactate`

is too simple for healthy exercise muscle.

A more accurate applied chain is:

`high glycolytic flux`
→
`rapid pyruvate + cytosolic NADH production`
→
`LDH flux contributes to NAD+ regeneration and lactate formation`

while mitochondrial oxidation and redox shuttles operate concurrently.

O2 availability can influence the broader redox/oxidative system, but lactate formation itself does not diagnose tissue anoxia.

Confidence: **HIGH**.

---

## 12. Glycolytic ATP-production rate

Glycolysis can supply ATP rapidly during high-intensity exercise.

Direct human 31P-MRS (PMID **10457099**) during maximal exercise reported:

- peak glycogenolytic/glycolytic ATP synthesis around **207 ± 48 mM ATP/min** within 15 s;
- decline to **72 ± 34 mM ATP/min** by the end of 30 s;
- peak glycolytic ATP synthesis roughly **2.9-fold** maximal oxidative ATP synthesis in that protocol.

These values are protocol/muscle/method specific.

They establish:

**glycolytic ATP flux can rise very rapidly and can exceed maximal oxidative ATP-synthesis rate during intense work.**

They do not establish one universal glycolytic rate for resistance exercise.

Confidence: **HIGH for qualitative rate architecture / MODERATE for transfer of exact numbers**.

---

## 13. Glycolytic capacity

Glycolytic capacity is larger than the immediately available phosphagen pool but remains finite.

It is constrained by factors including:

- available muscle glycogen / glucose;
- pathway enzyme/regulatory state;
- NAD+ regeneration;
- metabolite accumulation / pH-linked effects;
- declining ATP demand as power falls;
- interaction with oxidative metabolism.

Barclay’s human muscle energetics review estimated a finite glycolytic ATP capacity on the order of tens of mM ATP in intense exercise, but exact capacity depends strongly on task and modeling assumptions.

Canonical rule:

**rate and capacity are separate dimensions; glycolysis is fast but not an unlimited ATP source.**

Confidence: **HIGH concept / MODERATE exact quantitative capacity**.

---

## 14. High-intensity exercise contribution

Direct human evidence supports major glycolytic contribution during short maximal work.

PMID **10457099**:

- very high early glycolytic ATP synthesis;
- aerobic ATP synthesis reached ~85% of its maximal capacity within 9 s and remained active.

PMID **9715738**:

- anaerobic ATP turnover fell markedly from the first to second 10 s of maximal sprinting;
- phosphocreatine breakdown rate fell strongly;
- glycolytic rate also fell;
- oxygen uptake increased.

Thus:

**high-intensity ATP supply is a moving mixture of phosphagen, glycolytic and oxidative contributions.**

Canonical rule:

**major glycolytic contribution ≠ glycolysis-only exercise.**

Confidence: **HIGH**.

---

## 15. Glycolytic rate can fall during an all-out bout

A crucial boundary is that “maximal effort” does not imply constant maximal glycolytic rate.

Direct sprint studies show glycolytic rate falls during prolonged maximal work.

Possible contributors include:

- substrate/regulatory changes;
- declining power/ATP demand;
- altered Pi/ADP/AMP;
- pH/metabolite state;
- changes in glycogenolytic/glycolytic enzyme activation.

Therefore:

**external maximal intent ≠ constant internal glycolytic flux.**

Exact rate-limiting mechanisms vary by task and remain partly downstream BIO-05/11.

Confidence: **HIGH for observed decline / MODERATE for mechanism partition**.

---

## 16. Glycogen depletion

Exercise can reduce muscle glycogen substantially.

Magnitude depends on:

- exercise mode;
- intensity;
- duration;
- number of sets/bouts;
- recruited fibers;
- initial glycogen;
- training status;
- recovery/nutrition.

Current resistance-training meta-analysis PMID **41420384**:

- 20 study clusters / 28 effect sizes;
- significant mean vastus-lateralis glycogen decrease;
- more depletion with more sets and longer sessions;
- substantial prediction-interval heterogeneity;
- protocol/training-status moderation.

Canonical rule:

**resistance exercise can meaningfully deplete muscle glycogen, but depletion is not a fixed percentage per set/session.**

Confidence: **HIGH**.

---

## 17. Glycogen depletion ≠ total glycogen exhaustion

Muscle glycogen is heterogeneous across:

- fibers;
- subcellular pools;
- recruited regions.

Whole-biopsy reduction does not mean every fiber or compartment reaches zero.

Likewise, performance can decline before whole-muscle glycogen is completely exhausted.

Current 2025 human study PMID **40895431** showed experimentally lowered glycogen reduced time to task failure by ~40% during ~5-min high-intensity one-legged exercise, without implying glycogen had to reach zero.

Canonical rule:

**low glycogen can constrain performance in some tasks, but “fatigue occurs when glycogen is empty” is not a universal rule.**

Confidence: **HIGH against total-exhaustion model / MODERATE-HIGH task-specific performance effect**.

---

## 18. Glycogen repletion

After glycogen-depleting exercise, muscle glycogen can be resynthesized.

This depends on:

- glucose availability;
- glycogen synthase activity;
- insulin and contraction-related glucose uptake;
- time;
- starting depletion;
- carbohydrate intake and total energy context.

BIO-03 retains only:

**glycogen depletion is reversible and repletion is nutrition- and time-dependent.**

Detailed questions of:

- carbohydrate dose;
- timing;
- meal composition;
- rapid recovery strategies;
- multi-session fueling

belong NUT/BIO-10.

Confidence: **HIGH mechanism / prescription deferred**.

---

## 19. Glycolytic enzyme adaptations

Glycolytic-enzyme adaptation is real but protocol specific.

2024 RCT PMID **38537252**:

- 5 weeks sprint interval training;
- increased content/activity of glycogen phosphorylase, hexokinase, PFK and LDH in the SIT group;
- increased muscle glycogen;
- biochemical adaptation did not translate into longer severe-intensity time-to-task-failure under the primary matched post-training condition.

Older human studies show heterogeneity:

- PMID **9609810**: sprint interval training increased HK and PFK along with oxidative enzymes;
- PMID **15518296**: sprint training increased power, VO2peak, CS and resting glycogen but **did not change PFK**;
- PMID **17111003**: 12-week resistance training increased HK by ~42% but **PFK remained unchanged**.

Therefore:

**training can increase glycolytic enzyme content/activity, but no universal “high-intensity training raises all glycolytic enzymes” rule is retained.**

Confidence: **HIGH for adaptability / HIGH for protocol heterogeneity**.

---

## 20. Enzyme activity ≠ whole-pathway flux ≠ performance

Measured maximal enzyme activity/content is a capacity marker.

It is not identical to:

- in-vivo glycolytic flux during a specific set;
- total ATP turnover;
- lactate accumulation rate;
- performance improvement.

The 2024 SIT RCT is a direct example: glycolytic enzyme content/activity increased, while the primary severe-intensity TTF outcome did not improve as a simple one-to-one consequence.

Canonical rule:

**enzyme adaptation is mechanistic evidence, not a direct performance surrogate.**

Confidence: **HIGH**.

---

## 21. Important non-equivalences

1. Blood glucose ≠ muscle glycogen.
2. Glucose entry cost ≠ glycogen-derived G6P entry cost.
3. Glycolytic ATP yield ≠ total carbohydrate oxidation ATP yield.
4. ATP yield ≠ ATP-production rate.
5. Glycolysis ≠ process requiring absence of O2.
6. Lactate formation ≠ proof of hypoxia/anoxia.
7. Pyruvate ≠ exclusively “aerobic product.”
8. Lactate ≠ exclusively “anaerobic product.”
9. Lactate formation ≠ only NAD+-regeneration route.
10. High glycolytic rate ≠ unlimited glycolytic capacity.
11. Major glycolytic contribution ≠ glycolysis-only exercise.
12. Maximal effort ≠ constant maximal glycolytic flux.
13. Glycogen depletion ≠ complete glycogen exhaustion.
14. Low glycogen ≠ universal sole cause of fatigue.
15. Glycogen repletion mechanism ≠ nutrition prescription.
16. Increased glycolytic enzyme activity ≠ guaranteed performance gain.
17. One enzyme activity ≠ whole-pathway flux.
18. Blood lactate ≠ direct measure of muscle glycolytic ATP production.

---

## 22. Measurement / terminology boundaries

### Glycolytic ATP yield
Net ATP formed by substrate-level phosphorylation within glycolysis per substrate unit; substrate entry must be specified.

### Glycolytic ATP flux/rate
ATP produced per unit time through glycolytic substrate-level phosphorylation.

### Glycogenolysis
Mobilization of glycogen, primarily to glucose-1-phosphate, upstream of glycolysis.

### Glycolysis
Cytosolic conversion of G6P/glucose-derived carbon to pyruvate with substrate-level ATP formation and NADH production.

### Lactate formation
LDH-mediated reversible conversion of pyruvate + NADH + H+ to lactate + NAD+.

### Glycogen depletion
Reduction in a measured muscle glycogen pool; not necessarily exhaustion of all fibers/subcellular pools.

### Glycolytic enzyme activity/content
Biochemical capacity marker; not identical to in-vivo pathway flux.

---

## 23. Sources checked

### Current / recent high-priority

1. **Biochemistry, Glycogen**. NCBI Bookshelf, updated 2026-03-21. Muscle glycogen localization, glycogenolysis, G1P→G6P and lack of skeletal-muscle G6Pase.
2. **Exercise metabolism and adaptation in skeletal muscle**. PMID **37225892**, PMCID **PMC10527431** (2023). Integrated glycolysis, pyruvate, lactate/redox shuttles and exercise adaptation.
3. Hamidvand A et al. **Acute effects of resistance exercise on skeletal muscle glycogen depletion: A systematic review and meta-analysis**. PMID **41420384** (2025). Current resistance-exercise glycogen-depletion evidence.
4. Thomassen M et al. **Exercise- and diet-induced glycogen depletion impairs performance during one-legged constant-load, high-intensity exercise in humans**. PMID **40895431**, PMCID **PMC12394474** (2025). Direct low-glycogen performance manipulation.
5. de Poli RAB et al. **Five Weeks of Sprint Interval Training Improve Muscle Glycolytic Content and Activity But Not Time to Task Failure in Severe-Intensity Exercise**. PMID **38537252** (2024). RCT, glycolytic enzyme adaptation.
6. **Redox signaling and skeletal muscle adaptation during aerobic exercise**. PMID **38650987** (2024). Current NAD+/NADH and lactate/redox framing.
7. **Popular myths vs physiological realities: The rehabilitation of lactate**. PMID **41524329** (2025). Current lactate/NAD+-regeneration framing, used as supportive review.
8. **Acute metabolic and molecular responses to sprint interval versus moderate-intensity continuous exercise in healthy young men**. PMID **41830465** (2026). Current direct muscle-biopsy glycogen depletion/repletion context.

### Core exercise-metabolism / direct human evidence

9. Hargreaves M, Spriet LL. **Skeletal muscle energy metabolism during exercise**. PMID **32747792** (2020).
10. Hargreaves M. **Skeletal muscle metabolism during exercise in humans**. PMID **10744352**.
11. Walter G et al. **In vivo ATP synthesis rates in single human muscles during high intensity exercise**. PMID **10457099**. Direct human glycolytic/oxidative ATP-synthesis kinetics.
12. Bogdanis GC et al. **Power output and muscle metabolism during and following recovery from 10 and 20 s of maximal sprint exercise in humans**. PMID **9715738**.
13. Barclay CJ. **Energy demand and supply in human skeletal muscle**. PMID **28286928**.
14. Katz A. **A century of exercise physiology: key concepts in regulation of glycogen metabolism in skeletal muscle**. PMID **35355125**, PMCID **PMC9287217**.
15. Spriet LL et al. **An enzymatic approach to lactate production in human skeletal muscle during exercise**. PMID **10776894**.
16. Brooks GA. **Lactate as a fulcrum of metabolism**. PMID **32113910**, PMCID **PMC7284908**.
17. Brooks GA. **The Science and Translation of Lactate Shuttle Theory**. PMID **29617642**.

### Biochemistry / stoichiometry

18. NCBI Bookshelf **Biochemistry, Glycolysis**.
19. NCBI Bookshelf **Biochemistry, Anaerobic Glycolysis**.
20. NCBI Bookshelf **Biochemistry, Glycogenolysis**.
21. *Molecular Biology of the Cell* / NCBI Bookshelf **How Cells Obtain Energy from Food**.
22. **Exercise and Regulation of Carbohydrate Metabolism**. PMCID **PMC4727532**. Used for glucose-vs-glycogen 2-vs-3 ATP applied stoichiometry.

### Adaptation heterogeneity

23. MacDougall JD et al. **Muscle performance and enzymatic adaptations to sprint interval training**. PMID **9609810**.
24. **Muscle metabolism during sprint exercise in man: influence of sprint training**. PMID **15518296**.
25. Tang JE et al. **Increased muscle oxidative potential following resistance training induced fibre hypertrophy in young men**. PMID **17111003**.
26. **Sprint interval training in hypoxia stimulates glycolytic enzyme activity**. PMID **23604068**.

---

## 24. Established content-level findings

### HIGH

1. Glycolysis is cytosolic and does not directly require molecular O2.
2. Free glucose and muscle glycogen converge at G6P but differ in entry cost.
3. Free glucose yields net 2 glycolytic ATP; most glycogen-derived glucosyl units entering at G6P yield net 3 ATP.
4. Glycolytic ATP yield is distinct from total ATP obtained after downstream mitochondrial oxidation.
5. Pyruvate is a branch-point metabolite with multiple fates.
6. LDH-mediated lactate formation regenerates cytosolic NAD+ from NADH.
7. Lactate can form under fully aerobic conditions; lactate formation does not prove O2 absence.
8. Cytosolic NAD+ can also be regenerated through redox-shuttle coupling to mitochondria.
9. Glycolytic ATP flux can rise rapidly and make a major contribution during high-intensity work.
10. Phosphagen, glycolytic and oxidative ATP production operate concurrently.
11. Glycolytic rate can fall during a continuing maximal effort.
12. Exercise can substantially reduce muscle glycogen.
13. Glycogen depletion is protocol/task dependent and does not mean all muscle glycogen is exhausted.
14. Low glycogen can impair some high-intensity exercise tasks.
15. Glycolytic enzymes are trainable but adaptation is protocol/enzyme specific.
16. Enzyme content/activity is not identical to in-vivo glycolytic flux or performance.

### MODERATE-HIGH

17. Resistance-exercise glycogen depletion is influenced by set number, session duration, intensity and training status; current meta-analysis shows large heterogeneity.
18. Glycolytic ATP capacity is finite and larger than the immediately available phosphagen reserve, but exact capacity is task/method dependent.
19. Glycogen repletion is time- and nutrient-dependent; exact prescription belongs NUT/BIO-10.

### LOW / NOT RETAINED AS UNIVERSAL RULE

20. One exact glycolytic ATP-production rate for resistance exercise.
21. One universal “glycolytic system dominates from X to Y seconds” interval.
22. One blood-lactate value that directly quantifies glycolytic ATP production.
23. One glycogen-depletion percentage per set/session.
24. One glycogen concentration threshold defining fatigue.
25. Universal increase of PFK/LDH/HK/glycogen phosphorylase after all high-intensity or resistance training.

---

## 25. Unresolved gaps

Non-blocking for PASS-01 content coverage but requiring PASS-02 audit:

1. exact pathway boundary between “glycolysis” and LDH-mediated lactate formation in project terminology;
2. how prominently to retain the 2-vs-3 ATP free-glucose vs glycogen distinction given branch-point glycogen nuance;
3. whether “anaerobic glycolysis” should be retained only as historical shorthand;
4. exact relative importance of LDH vs mitochondrial redox shuttles for NAD+ regeneration under different exercise intensities;
5. exact glycolytic rate/capacity in resistance sets rather than cycle-sprint paradigms;
6. direct compound-lift glycogen depletion data remain sparse relative to vastus-lateralis biopsy/cycling evidence;
7. exact glycogen threshold at which specific resistance/high-intensity tasks are impaired;
8. subcellular glycogen-pool implications belong BIO-10/11/PHY;
9. nutrition-dependent glycogen repletion kinetics belong BIO-10/NUT;
10. enzyme-adaptation magnitude differs strongly by protocol and assay;
11. blood lactate is not a direct quantitative estimator of muscle glycolytic ATP flux and belongs BIO-04/TST.

---

## 26. Evidence-ledger candidates

1. Glycolysis is a cytosolic ATP-producing pathway that does not directly consume O2; high glycolytic flux/lactate formation can occur in oxygenated muscle.
2. Free glucose and glycogen-derived glucosyl units differ in entry cost: classic net glycolytic yield is 2 ATP from free glucose and 3 ATP from most glycogen-derived units entering at G6P.
3. Glycolytic ATP yield is distinct from ATP-production rate and from total ATP generated by downstream carbohydrate oxidation.
4. Pyruvate is a branch-point metabolite; LDH-mediated conversion to lactate regenerates NAD+, while mitochondrial redox shuttles provide another route for cytosolic redox handling.
5. Lactate formation is not evidence of tissue anoxia and should not be used as a synonym for “oxygen-free metabolism.”
6. Glycolytic ATP flux can rise rapidly and make a major contribution in high-intensity exercise while phosphagen and oxidative pathways operate concurrently.
7. Glycolytic rate can decline during ongoing maximal work; maximal effort does not imply constant pathway flux.
8. Resistance/high-intensity exercise can substantially deplete muscle glycogen, but depletion is protocol-dependent and not equivalent to total glycogen exhaustion.
9. Glycogen repletion is reversible and nutrient/time dependent; detailed carbohydrate prescription belongs NUT/BIO-10.
10. Glycolytic enzyme content/activity can adapt to training, but changes are protocol/enzyme specific and are not direct surrogates for in-vivo flux or performance.

---

## 27. Exact Section 3 coverage audit — PASS-01 content level

| # | Exact Section 3 item | PASS-01 result | Main boundary |
|---|---|---|---|
| 1 | Glucose vs glycogen as substrate | **PASS at content level** | Converge at G6P; glycogen bypasses HK ATP cost for most residues |
| 2 | Glycolytic pathway | **PASS at content level** | Cytosolic glucose/G6P → pyruvate; O2 not directly consumed |
| 3 | ATP yield | **PASS at content level** | 2 ATP free glucose; 3 ATP most glycogen-derived units; yield ≠ rate |
| 4 | Rate vs capacity | **PASS at content level** | Rapid/high flux, finite task-dependent capacity |
| 5 | Pyruvate | **PASS at content level** | Branch-point metabolite, multiple fates |
| 6 | Lactate formation | **PASS at content/scope level** | LDH redox reaction; formation ≠ anoxia; deep lactate → BIO-04 |
| 7 | NAD+/NADH regeneration | **PASS at content level** | LDH + mitochondrial redox shuttles |
| 8 | Glycolytic contribution during high-intensity work | **PASS at content level** | Major contribution, concurrent systems |
| 9 | Glycogen depletion | **PASS at content level** | Task/protocol dependent; depletion ≠ exhaustion |
| 10 | Glycogen repletion — nutrition | **PASS at content/scope level** | Mechanism retained; prescription deferred NUT/BIO-10 |
| 11 | Glycolytic enzyme adaptations | **PASS at content level** | Trainable but protocol/enzyme specific |

Exact Area 05 Section 3 coverage = **11/11 at content/scope level**.

---

## 28. PASS decision

**BIO-03/PASS-01 = CONTENT PASS COMPLETE — AUDIT/SYNTHESIS PENDING.**

No content-level blocker was found.

BIO-03 is **not CLOSED_FOR_PRACTICE** because PASS-02 must independently challenge:

- glucose-vs-glycogen ATP stoichiometry and branch-point nuance;
- glycolysis vs LDH pathway boundary;
- “anaerobic glycolysis” terminology;
- lactate formation vs O2 availability;
- NAD+ regeneration via LDH vs redox shuttles;
- glycolytic rate vs finite capacity;
- exact high-intensity contribution without sequential-system mythology;
- glycogen depletion vs exhaustion/fatigue;
- current resistance-training glycogen evidence;
- glycogen-repletion scope handoff;
- enzyme adaptation vs in-vivo flux/performance;
- BIO-04/05/06/08/10/11/12, NUT and TST boundaries.

No canonical BIO-03 finding should be created before PASS-02.

---

## 29. Next pass

**BIO-03/PASS-02 — Closure audit and synthesis.**

Required tasks:

1. independently re-check all 11 Section 3 items;
2. audit glucose-vs-glycogen entry and 2-vs-3 ATP wording;
3. audit glycolysis pathway boundary and substrate-level phosphorylation;
4. audit “anaerobic glycolysis” terminology against O2-independent-but-not-anoxia framing;
5. independently verify pyruvate/lactate/NAD+ logic;
6. audit LDH vs mitochondrial redox-shuttle contribution without overclaiming;
7. stress-test high-rate/finite-capacity framing using direct human evidence;
8. independently challenge sequential energy-system interpretations;
9. audit glycogen depletion, low-glycogen performance and resistance-exercise evidence;
10. preserve glycogen-repletion prescription boundary with BIO-10/NUT;
11. audit glycolytic-enzyme adaptation heterogeneity;
12. create canonical BIO-03 finding only if closure is authorized;
13. update project state and STOP before BIO-04.

**Do not start BIO-04 in the same working block.**
