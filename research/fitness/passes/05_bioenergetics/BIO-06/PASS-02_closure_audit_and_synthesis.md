# BIO-06 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-19  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 05 — Bioenergetics / Exercise Metabolism  
Topic: BIO-06 — Oxidative metabolism

## 0. Purpose

Независимо перепроверить BIO-06/PASS-01 и решить, достаточно ли Section 6 закрывает oxidative-metabolism / mitochondria foundation для downstream BIO-07/08/09/11/12/13/15/16, PRO и TST без следующих ошибок:

- pyruvate production = pyruvate oxidation;
- acetyl-CoA = glucose oxidation;
- TCA cycle = main direct ATP-producing step;
- ETC electron transfer = ATP synthesis;
- Complex II as proton pump;
- oxygen requirement = oxygen always being the sole rate limiter;
- one fixed ATP/glucose or P/O number as universal physiology;
- oxygen consumption = ATP production;
- mitochondrial content = intrinsic mitochondrial function;
- citrate synthase = complete mitochondrial function;
- PGC-1α expression = mitochondrial biogenesis itself;
- acute signaling = chronic adaptation;
- one universally superior training modality for mitochondrial adaptation;
- resistance training = no mitochondrial adaptation;
- mitochondrial adaptation = VO2max.

Exact source scope: Area 05 Section 6 = **10 items**.

---

## 1. Independent source re-check

Independent re-check used:

1. Spriet & Heigenhauser. **Regulation of pyruvate dehydrogenase activity in human skeletal muscle during exercise.** PMID **11991544**.
2. Hargreaves & Spriet. **Skeletal muscle energy metabolism during exercise.** PMID **32747792**.
3. **Mitochondrial electron transport chain: Oxidative phosphorylation, oxidant production, and methods of measurement.** PMID **32811789**.
4. **The mitochondrial respiratory chain.** PMID **37945170**.
5. Grassi et al. **An integrative approach to the regulation of mitochondrial respiration during exercise: Focus on high-intensity exercise.** PMID **32156501**.
6. Mookerjee et al. **Quantifying intracellular rates of glycolytic and oxidative ATP production and consumption using extracellular flux measurements.** PMID **28270511**.
7. Erol et al. **Mitochondrial efficiency in resting skeletal muscle in vivo...** PMID **39960635**.
8. Lundby et al. **Exercise training increases skeletal muscle mitochondrial volume density by enlargement of existing mitochondria and not de novo biogenesis.** PMID **28580772**.
9. Schytz et al. **Skeletal muscle mitochondria demonstrate similar respiration per cristae surface area independent of training status and sex in healthy humans.** PMID **38051639**.
10. Mølmen et al. **Effects of Exercise Training on Mitochondrial and Capillary Growth in Human Skeletal Muscle: A Systematic Review and Meta-Regression.** PMID **39390310**.
11. Abrego-Guandique et al. **The impact of exercise on mitochondrial biogenesis in skeletal muscle: A systematic review and meta-analysis of randomized trials.** PMID **40459444**.
12. **Markers of clinical and mitochondrial adaptation in response to moderate intensity continuous training: A systematic review and meta-analysis.** PMID **41481647**.
13. Fritzen et al. **Adaptations in mitochondrial enzymatic activity... after aerobic exercise training and deconditioning.** PMID **30871120**.
14. Porter et al. **Resistance Exercise Training Alters Mitochondrial Function in Human Skeletal Muscle.** PMID **25539479**.
15. **Human Skeletal Muscle Mitochondrial Adaptations Following Resistance Exercise Training.** PMID **32162291**.
16. Menezes et al. **Regulation of PERM1 and select target genes in human skeletal muscle following fasting and exercise.** PMID **41759080**.

No closure-critical contradiction was found.

---

## 2. Exact Section 6 audit — 10/10

1. Pyruvate oxidation — **PASS**.
2. Acetyl-CoA — **PASS**.
3. Krebs/TCA cycle — **PASS**.
4. Electron transport chain — **PASS**.
5. Oxidative phosphorylation — **PASS**.
6. Oxygen as terminal electron acceptor — **PASS WITH CONTROL BOUNDARY**.
7. ATP yield approximate / not fixed — **PASS WITH MODEL/METHOD BOUNDARY**.
8. Mitochondrial density/function — **PASS WITH MEASUREMENT BOUNDARY**.
9. Mitochondrial biogenesis — **PASS WITH TERMINOLOGY BOUNDARY**.
10. Oxidative enzyme adaptations — **PASS**.

Result: **10/10 PASS.**

---

## 3. Pyruvate oxidation / PDH audit

PASS.

Human skeletal-muscle evidence supports PDH as the mitochondrial gateway converting carbohydrate-derived pyruvate to acetyl-CoA and regulating carbohydrate entry into TCA oxidation.

Exercise PDH activation is influenced by relative intensity and regulatory signals including:

- Ca2+;
- free ADP;
- pyruvate;
- phosphorylation/dephosphorylation.

Required boundary:

**PDH is a major regulated gateway, not proof that all pyruvate is oxidized or that PDH alone controls total oxidative flux.**

No blocker.

---

## 4. Acetyl-CoA / TCA audit

PASS.

Acetyl-CoA can arise from:

- pyruvate;
- fatty-acid beta-oxidation;
- selected amino-acid pathways.

The TCA cycle:

- oxidizes acetyl-derived carbon;
- regenerates oxaloacetate;
- produces NADH/FADH2;
- produces a small substrate-level GTP/ATP equivalent;
- supplies/interchanges metabolic intermediates.

Canonical boundary:

**TCA cycle is a central oxidative hub, but most ATP from complete fuel oxidation is generated downstream through oxidative phosphorylation rather than directly in TCA.**

Anaplerosis/cataplerosis are retained conceptually but detailed pathway mapping is not required for trainer-level BIO-06 closure.

No blocker.

---

## 5. ETC topology audit

PASS.

Retain:

- Complex I: electron entry from NADH + proton translocation;
- Complex II: FAD-linked/succinate electron entry to CoQ without proton pumping;
- Complex III: electron transfer + proton translocation;
- cytochrome c: mobile electron carrier;
- Complex IV: electron transfer to O2 + proton translocation;
- CoQ: mobile lipid electron carrier.

Independent ETC reviews confirm:

**Complexes I, III and IV contribute to proton pumping; Complex II does not.**

No blocker.

---

## 6. Oxidative phosphorylation audit

PASS.

Retain the chemiosmotic sequence:

`substrate oxidation → NADH/FADH2 → ETC → proton-motive force → ATP synthase → ATP`.

Critical boundary:

- ETC electron flow;
- proton translocation;
- proton-motive force;
- ATP synthase catalysis;

are coupled but distinct.

ATP synthase does not obtain energy “from oxygen directly.”

No blocker.

---

## 7. Oxygen audit

PASS WITH IMPORTANT CONTROL BOUNDARY.

O2 is the terminal electron acceptor at Complex IV and is reduced to water.

Therefore adequate O2 availability is necessary for normal sustained OXPHOS.

However, independent exercise-metabolism synthesis supports that mitochondrial respiration during exercise is governed by interacting:

- O2 availability;
- ADP;
- Pi;
- free creatine / PCr state;
- carbon substrates;
- reducing equivalents;
- Ca2+;
- mitochondrial respiratory capacity;
- pH/redox factors.

In repeated/sprint exercise, comparatively low mitochondrial respiratory rates are not generally explained simply by lack of O2, substrate, reducing equivalents or Ca2+; demand-side stimulation such as ADP can be important.

Canonical rule:

**O2 is indispensable but not a universal one-variable rate limiter of oxidative ATP production.**

No blocker.

---

## 8. Concurrent energy-system audit

PASS.

Oxidative phosphorylation, phosphagen ATP buffering and substrate-level phosphorylation operate concurrently.

Relative contribution shifts continuously with:

- intensity;
- duration;
- energetic state;
- training status;
- substrate availability;
- recovery interval.

Canonical rule:

**there is no physiological “aerobic system switches on after X seconds” boundary.**

No blocker.

---

## 9. ATP yield / P/O audit

PASS WITH STRONG METHOD BOUNDARY.

Theoretical stoichiometric/chemiosmotic calculations can produce useful maxima.

Mookerjee et al. reported theoretical values under defined assumptions including:

- P/O ~2.73 for NAD-linked pyruvate/malate oxidation;
- P/O ~1.64 for succinate-linked entry;
- maximum cellular glucose yield ~33.45 ATP/glucose under their accounting framework.

These are **not universal in-vivo constants**.

Effective yield depends on:

- substrate entry point;
- redox shuttle costs;
- proton leak/uncoupling;
- transport costs;
- membrane state;
- tissue conditions;
- analytical method.

Current human in-vivo MRS work estimated resting skeletal-muscle P/O ~1.95 ± 0.68 in its method, while exercise estimates became physiologically implausible (>3), demonstrating current measurement limitations.

Closure rule:

**retain no single universal ATP/glucose, ATP/NADH, ATP/FADH2 or in-vivo P/O number.**

No blocker.

---

## 10. Oxygen consumption vs ATP production audit

PASS.

Respiration can support:

- ATP-generating proton return through ATP synthase;
- proton leak / uncoupling;
- other energetic losses.

Therefore:

**O2 consumption is not numerically identical to ATP production.**

P/O and coupling-efficiency metrics require:

- explicit respiratory state;
- substrate definition;
- measurement method;
- normalization.

No blocker.

---

## 11. Mitochondrial content vs function audit

PASS.

Retain separate constructs:

### Content / volume density
Amount/volume of mitochondrial structure relative to muscle.

### Mass-specific respiratory capacity
Respiration per muscle mass under specified conditions.

### Intrinsic mitochondrial respiratory function
Respiration normalized to mitochondrial content/structure.

### Cristae-normalized respiration
Respiration normalized to inner-membrane/cristae structural area.

### Coupling efficiency
ATP output relative to respiratory/O2 flux under defined state.

Human data provide direct evidence that these outcomes can diverge.

Lundby et al. reported ~55% increase in mitochondrial volume density after endurance training with no parallel increase in measured OXPHOS/COX capacity in that protocol.

Schytz et al. found active participants had higher mass-specific OXPHOS and greater mitochondrial/cristae density; differences disappeared when OXPHOS was normalized to cristae surface area.

Canonical rule:

**more mitochondrial machinery can raise whole-muscle oxidative capacity without requiring greater respiration per unit mitochondrial structure.**

No blocker.

---

## 12. Citrate synthase audit

PASS WITH PROXY BOUNDARY.

CS activity can track oxidative/mitochondrial adaptation and in some interventions correlates with mitochondrial volume density.

But CS is:

- an enzyme activity;
- a mitochondrial-content proxy in many contexts;
- sensitive to assay/timing/context.

It is **not** automatically:

- mitochondrial count;
- mitochondrial volume;
- OXPHOS capacity;
- intrinsic mitochondrial function;
- coupling efficiency.

Canonical rule:

**CS is a useful marker, not a complete mitochondrial-function measurement.**

No blocker.

---

## 13. Mitochondrial biogenesis terminology audit

PASS WITH REFINEMENT.

The phrase “mitochondrial biogenesis” should not imply production of fully separate new organelles as discrete units from nothing.

Human training microscopy showed increased mitochondrial volume density mainly through enlargement/remodeling of existing mitochondrial structures rather than increased profile number in that protocol.

Retain mitochondrial biogenesis as coordinated expansion/remodeling involving:

- nuclear and mitochondrial gene expression;
- protein synthesis/import;
- membrane/cristae remodeling;
- mtDNA maintenance/expression;
- fusion/fission dynamics;
- quality control/turnover.

Canonical rule:

**mitochondrial biogenesis = coordinated expansion/remodeling of mitochondrial machinery, not a literal mitochondrial birth counter.**

No blocker.

---

## 14. PGC-1α audit

PASS WITH ANTI-SURROGATE BOUNDARY.

PGC-1α is an important exercise-responsive transcriptional coactivator.

But independent evidence shows:

- acute exercise can substantially increase PGC-1α mRNA;
- chronic mitochondrial structural/function outcomes do not map one-to-one to chronic PGC-1α measurements;
- a 2025 systematic review/meta-analysis found substantial heterogeneity in PGC-1α exercise responses;
- a current MICT meta-analysis found increased MitoVD and VO2max without significant pooled chronic PGC-1α change.

Canonical rule:

**PGC-1α is a regulatory signal/marker, not the mitochondrial adaptation itself and not a solitary deterministic master switch.**

No blocker.

---

## 15. Training modality audit

PASS.

Large systematic review/meta-regression supports mitochondrial-content increases with:

- endurance training;
- high-intensity interval training;
- sprint-interval training.

Adjusted mean increases were in a similar broad range, while:

- baseline fitness;
- training frequency;
- training load;
- time efficiency;
- capillary responses;

modify interpretation.

Canonical rule:

**ET, HIT and SIT can all build mitochondrial content; “best modality” is outcome/dose/context dependent.**

No blocker.

---

## 16. Oxidative-enzyme adaptation audit

PASS.

Human training evidence supports increases in oxidative/TCA/respiratory-chain enzyme activities.

One-leg endurance training produced large increases in:

- citrate synthase activity;
- Complex I–IV activities;
- exercise capacity;

without corresponding change in mtDNA quantity.

Canonical boundary:

**enzyme activity adaptation is real, but enzyme activity ≠ whole-mitochondrion function ≠ whole-body performance.**

No blocker.

---

## 17. Resistance-training mitochondrial audit

PASS WITH DENOMINATOR BOUNDARY.

Resistance training can alter mitochondrial respiratory capacity/function.

A 12-week human RET study found increased coupled respiration supported by Complex I and I+II substrates.

However hypertrophy can change the denominator:

- mitochondrial density per muscle volume may remain stable or fall if fibre volume expands faster than mitochondrial material;
- absolute/mass-specific/intrinsic metrics can therefore move differently.

Canonical rule:

**resistance training is not “non-mitochondrial”; interpret adaptation with the normalization denominator and hypertrophy state.**

Detailed resistance bioenergetics remains BIO-12.

No blocker.

---

## 18. Mitochondrial adaptation vs VO2max audit

PASS.

VO2max integrates:

- ventilation/gas exchange;
- cardiac output;
- hemoglobin/O2 carrying;
- muscle perfusion/capillarization;
- O2 diffusion;
- mitochondrial utilization.

Therefore:

**mitochondrial adaptation ≠ VO2max and VO2max ≠ isolated mitochondrial function.**

No blocker.

---

## 19. Scope audit

PASS.

BIO-06 keeps only the foundational oxidative-metabolism / mitochondria model.

Deferred:

### BIO-07
Substrate selection, carbohydrate/fat oxidation and fuel preference.

### BIO-08
Quantitative energy-system interaction.

### BIO-09
VO2 kinetics, oxygen deficit, EPOC, thresholds/intensity domains.

### BIO-11
Integrated metabolic fatigue.

### BIO-12
Resistance-training-specific metabolism and work:rest.

### BIO-13/15/16
Energy-system development, aerobic capacity/economy, chronic metabolic adaptations/detraining.

### PRO
Training prescription.

### TST
Testing methodology and interpretation.

No premature programming prescription is authorized here.

---

## 20. Canonical non-equivalences

1. pyruvate production ≠ pyruvate oxidation.
2. pyruvate ≠ only acetyl-CoA source.
3. acetyl-CoA ≠ glucose oxidation.
4. TCA cycle ≠ main direct ATP-producing step.
5. electron transport ≠ ATP synthesis.
6. Complex II electron transfer ≠ proton pumping.
7. O2 requirement ≠ O2 always being the sole limiter.
8. O2 consumption ≠ ATP production.
9. theoretical ATP yield ≠ actual in-vivo yield.
10. one ATP/glucose value ≠ universal physiological constant.
11. mitochondrial content ≠ mitochondrial function.
12. mitochondrial volume density ≠ intrinsic respiration.
13. mass-specific OXPHOS ≠ intrinsic OXPHOS.
14. citrate synthase ≠ complete mitochondrial function.
15. PGC-1α expression ≠ mitochondrial biogenesis itself.
16. acute signaling ≠ chronic adaptation.
17. mitochondrial adaptation ≠ VO2max.
18. VO2max ≠ isolated mitochondrial capacity.
19. more mitochondria ≠ necessarily greater function per structural unit.
20. resistance training ≠ absence of mitochondrial adaptation.
21. “aerobic system” ≠ delayed-onset energy system.

---

## 21. Closure criterion test

Exact Area 05 Section 6:

1. Pyruvate oxidation — PASS.
2. Acetyl-CoA — PASS.
3. Krebs/TCA cycle — PASS.
4. Electron transport chain — PASS.
5. Oxidative phosphorylation — PASS.
6. Oxygen terminal acceptor — PASS.
7. ATP yield approximate — PASS.
8. Mitochondrial density/function — PASS.
9. Mitochondrial biogenesis — PASS.
10. Oxidative enzyme adaptations — PASS.

Result:

**10/10 PASS.**

No project-relevant blocker remains.

---

## 22. Closure decision

**BIO-06 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. carbohydrate-derived pyruvate enters oxidation through regulated PDH;
2. acetyl-CoA is a multi-substrate hub;
3. TCA is retained as a reducing-equivalent/metabolic hub rather than main direct ATP source;
4. ETC/proton pumping/ATP synthase are distinct coupled processes;
5. Complex II is not treated as a proton pump;
6. O2 is the terminal electron acceptor but not the universal sole rate limiter;
7. oxidative metabolism operates concurrently with phosphagen/glycolytic ATP production;
8. no universal fixed ATP/glucose or P/O value is retained;
9. O2 consumption and ATP production remain distinct;
10. mitochondrial content/function/intrinsic function/coupling remain separate constructs;
11. CS is a proxy/enzyme marker rather than complete function measure;
12. mitochondrial biogenesis is coordinated remodeling;
13. PGC-1α signaling is not the adaptation itself;
14. ET/HIT/SIT can all increase mitochondrial content;
15. resistance training can remodel mitochondria;
16. oxidative enzymes are trainable;
17. mitochondrial adaptation and VO2max remain non-equivalent.

---

## 23. Canonical finding authorization

Create:

`research/fitness/findings/05_bioenergetics/BIO-06_oxidative_metabolism.md`

Status:

**CLOSED_FOR_PRACTICE v2.0 — revalidated 2026-11-19**

Create/finalize evidence-ledger rows:

`BIO06-01…BIO06-10`.

---

## 24. Next dependency

**BIO-07/PASS-01 — Macronutrient metabolism / substrate selection content revalidation.**

Do not start BIO-07 in this working block.
