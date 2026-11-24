# BIO-01 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-19  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 05 — Bioenergetics / Exercise Metabolism  
Topic: BIO-01 — Basic energy concepts

## 0. Purpose

Независимо перепроверить PASS-01 и решить, достаточно ли BIO-01 закрывает Area 05 Section 1 для downstream BIO-02…BIO-18 без:

- трактовки metabolism как создания энергии;
- превращения метафоры “ATP currency” в буквальную модель;
- смешения ATP pool и ATP turnover;
- подмены actual ΔG стандартным ΔG°′;
- смешения thermodynamics и kinetics;
- трактовки endergonic reaction как невозможной;
- утверждения, что enzyme catalysis меняет equilibrium;
- утверждения, что разрыв ATP phosphate bond сам по себе выделяет энергию;
- жёсткого числового claim о muscle ATP pool или “секундах stored ATP”;
- преждевременного разбора PCr/glycolysis/oxidative contributions.

---

## 1. Materials audited

1. `areas/05_bioenergetics.md`, Section 1 — 8 exact items;
2. `PASS-01_basic_energy_concepts_revalidation.md`;
3. `EVIDENCE_LEDGER.md`, BIO01-01…BIO01-08;
4. upstream PHY boundaries for ATP-dependent muscle function;
5. independent current-source re-check:
   - Hargreaves & Spriet, skeletal-muscle energy metabolism — PMID **32747792**;
   - in-vivo ATP/IMP/ΔGATP study — PMID **39705717**;
   - multinuclear MRS mitochondrial-efficiency study — PMID **39960635**;
   - dynamic 31P-MRS ATP-synthesis study — PMID **41828020**;
   - human ATP-turnover study — PMID **25281731**;
   - classic direct human ATP-turnover biopsy study — PMID **3722052**;
   - high-intensity in-vivo ATP-synthesis study — PMID **10457099**;
   - ATP bioenergetics review — PMID **35353443**;
   - current ATP-hydrolysis misconception study — PMID **41930964**;
   - NCBI Bookshelf, *Catalysis and the Use of Energy by Cells*;
   - NCBI Bookshelf, *Metabolic Energy*.

No closure-critical contradiction was found.

---

## 2. Exact area-map audit — 8/8

1. Energy transfer — **PASS AS TRANSFER / TRANSFORMATION, NOT CREATION**.
2. ATP as immediate energy currency — **PASS AS METAPHOR; PRIMARY TECHNICAL DESCRIPTION = ACTIVATED CARRIER / IMMEDIATE PHOSPHORYL-TRANSFER AND FREE-ENERGY INTERMEDIARY**.
3. ATP turnover — **PASS AS FLUX DISTINCT FROM ATP POOL SIZE**.
4. Free energy — **PASS; ACTUAL ΔG IS CONDITION DEPENDENT AND DISTINCT FROM ΔG°′**.
5. Exergonic vs endergonic — **PASS AS THERMODYNAMIC DIRECTIONALITY, NOT REACTION SPEED**.
6. Coupled reactions — **PASS; NET COMBINED ΔG DETERMINES THERMODYNAMIC FAVORABILITY**.
7. Enzyme-mediated reactions — **PASS; CATALYSIS LOWERS ACTIVATION BARRIERS WITHOUT CHANGING EQUILIBRIUM**.
8. Small ATP stores / continuous resynthesis — **PASS QUALITATIVELY; NO UNIVERSAL NUMERIC POOL OR “SECONDS” RULE RETAINED**.

Result: **8/8 PASS.**

---

## 3. Energy-transfer audit

PASS.

The first law boundary is straightforward:

**energy can be converted/transferred among forms but is not created or destroyed by cellular metabolism.**

For this project:

`chemical free energy in substrates`
→
`activated carriers / electrochemical intermediates`
→
`ATP-dependent cellular work + heat`.

This is a deliberately simplified exercise-bioenergetics model.

It does not imply:

- ATP is the only cellular energy carrier;
- all substrate energy becomes ATP;
- all ATP free energy becomes mechanical work.

Canonical rule:

**use “energy transfer/transformation,” not “energy creation.”**

No blocker.

---

## 4. ATP “energy currency” audit

PASS WITH TERMINOLOGY REFINEMENT.

NCBI *Molecular Biology of the Cell* explicitly describes ATP as:

- the most important/versatile activated carrier;
- a convenient “currency” metaphor;
- an intermediate connecting energy-yielding and energy-requiring reactions.

The metaphor is therefore legitimate.

However, literal use can obscure mechanism.

Canonical terminology hierarchy:

1. **technical description:** activated carrier / immediate phosphoryl-transfer and free-energy intermediary;
2. **shorthand:** “energy currency”;
3. **not allowed:** literal packet/substance model of energy stored inside one bond.

For skeletal-muscle work, ATP is the immediate chemical substrate for ATP-dependent molecular processes, while substrate oxidation and other energetic pathways maintain ATP resynthesis.

No blocker.

---

## 5. ATP hydrolysis / bond-breaking audit

PASS — MISCONCEPTION EXPLICITLY REJECTED.

A bond cannot be broken without an energetic input.

Therefore the statement:

> “breaking the terminal phosphate bond releases energy”

is chemically misleading.

The thermodynamically relevant event is the **overall hydrolysis reaction**:

`ATP + H₂O → ADP + Pi`

and its net free-energy change under the specified conditions.

The favorable ΔG reflects the free-energy difference between the complete reactant and product states, including molecular stabilization and cellular concentrations.

Current education research (PMID 41930964) independently confirms that “bond breaking releases energy” remains a common ATP misconception.

This study is used only to verify misconception prevalence; the biochemical claim rests on thermodynamics/biochemistry sources.

Canonical rule:

**never attribute ATP’s usable free energy to bond breaking alone.**

No blocker.

---

## 6. ATP pool vs ATP turnover audit

PASS — DIRECT HUMAN EVIDENCE.

ATP turnover is a flux.

ATP concentration is a pool/state variable.

PMID 3722052 directly measured substantial ATP turnover during fatiguing human isometric contraction.

PMID 25281731 used 31P-MRS to estimate total ATP turnover during moderate and heavy bilateral knee-extension exercise and demonstrated workload-dependent ATP-turnover behavior.

PMID 10457099 measured high ATP synthesis rates during 30 s high-intensity exercise and showed simultaneous ATP supply from multiple pathways.

Therefore:

**high ATP demand/turnover does not require a proportionally large ATP pool.**

No blocker.

---

## 7. Stable [ATP] does not mean low ATP flux

PASS.

The dynamic-homeostasis model survives independent challenge.

PMID 41828020:

- five healthy subjects;
- dynamic 31P-MRS during plantar-flexion exercise;
- PCr/Pi/pH changed substantially;
- ATP remained stable in that protocol.

PMID 39960635:

- 12 healthy adults;
- oxidative ATP synthesis rate increased with graded workload;
- exercise-state P/O estimation produced non-physiological values, so the authors explicitly call for further methodological refinement.

The important inference is narrow:

**large changes in ATP synthesis flux can occur without a large fall in measured [ATP].**

The 2025 method should not be used to claim exact exercise P/O efficiency.

No blocker.

---

## 8. ATP concentration is not invariant

PASS.

PMID 39705717 provides a current counterexample to an overly rigid homeostasis statement:

- eight males;
- incremental isotonic knee extensions;
- [ATP] fell from approximately 8.2 to 7.5 mM;
- IMP increased;
- modeled ΔGATP remained favorable;
- ATP had not fully recovered after 10 min.

Therefore:

**ATP concentration is strongly regulated but can decline under sufficiently demanding conditions.**

Canonical wording is:

**ATP homeostasis is dynamic, not absolute.**

No blocker.

---

## 9. ATP concentration vs ΔGATP audit

PASS.

PMID 39705717 is particularly useful because modest ATP depletion occurred while modeled ΔGATP remained favorable through adenine-nucleotide handling.

Thus:

`[ATP]`
≠
`ΔGATP`.

Actual ATP-hydrolysis driving force depends on the ATP/ADP/Pi relationship and cellular conditions, not ATP concentration alone.

No universal in-vivo ΔGATP number is retained.

No blocker.

---

## 10. ΔG vs ΔG°′ audit

PASS — CLOSURE CRITICAL.

Actual Gibbs free-energy change depends on:

- standard-state chemical properties;
- reactant/product activities or concentrations;
- temperature;
- biochemical conditions.

NCBI biochemical sources explicitly distinguish standard free-energy change from actual intracellular ΔG.

For ATP hydrolysis, actual intracellular ΔG is more favorable than the standard transformed value under common cellular conditions because ATP, ADP and Pi are not present at equal standard-state activities.

Project rule:

**ΔG°′ is a reference value; actual in-vivo ΔG must not be treated as fixed.**

Exact numeric ΔGATP ranges remain outside BIO-01 canonical claims.

No blocker.

---

## 11. Exergonic / endergonic audit

PASS.

### Exergonic
Forward reaction has negative ΔG under the specified conditions.

### Endergonic
Forward reaction has positive ΔG under the specified conditions.

Neither term specifies reaction rate.

Therefore:

- negative ΔG ≠ fast;
- positive ΔG ≠ impossible.

An energetically favorable reaction can be kinetically blocked by a large activation barrier.

An energetically unfavorable process can proceed if it is properly coupled to a sufficiently favorable process.

No blocker.

---

## 12. Thermodynamics vs kinetics audit

PASS — IMPORTANT CROSS-TOPIC BOUNDARY.

The independent NCBI source explicitly separates:

- `ΔG` / equilibrium → thermodynamic direction;
- activation energy → kinetic barrier.

This prevents two common errors:

1. “negative ΔG means the reaction will be fast”;
2. “an enzyme makes a positive-ΔG reaction negative by catalysis.”

Both are rejected.

No blocker.

---

## 13. Coupling audit

PASS.

For coupled/sequential reactions, free-energy changes are additive.

If:

`ΔG_A > 0`

and

`ΔG_B < 0`

with

`ΔG_A + ΔG_B < 0`,

then the combined process can be thermodynamically favorable.

ATP is widely used because biochemical pathways can couple ATP conversion/phosphoryl transfer to otherwise unfavorable cellular processes.

Project rule:

**ask what reactions/processes are physically coupled and what the net reaction is; do not treat ATP as abstract “energy donation.”**

No blocker.

---

## 14. Enzyme audit

PASS — CATALYSIS ≠ THERMODYNAMIC REWRITE.

Enzymes:

- lower activation barriers;
- accelerate forward and reverse reaction pathways;
- provide specificity;
- organize reaction coupling.

They do not:

- change the equilibrium constant of the isolated reaction;
- change its standard free-energy difference;
- make an isolated positive-ΔG reaction favorable by catalysis alone.

NCBI explicitly states that forward and reverse rates are accelerated without changing the equilibrium point.

Important refinement:

**an enzyme system can make a biologically useful process proceed by coupling it to another reaction; this changes the overall reaction pathway being analyzed, not the thermodynamics of the isolated step.**

No blocker.

---

## 15. Small muscle ATP pool audit

PASS QUALITATIVELY.

Hargreaves & Spriet (PMID 32747792) explicitly state:

- skeletal-muscle ATP stores are small;
- metabolic pathways must be activated to maintain the ATP resynthesis rate required by exercise.

The project does not need one exact resting ATP concentration to use this fact.

Direct studies show values depend on:

- muscle;
- method;
- participant;
- contraction protocol;
- energetic state.

PMID 39705717, for example, reported approximately 8.2 mM at baseline in its specific knee-extensor protocol.

Therefore the canonical finding will **not** state one universal ATP concentration.

No blocker.

---

## 16. “How many seconds of stored ATP?” audit

PASS BY REMOVING FALSE PRECISION.

Older exercise literature commonly expresses stored ATP as enough for only very brief maximal work.

The qualitative direction is correct.

But the exact duration depends on:

- recruited muscle mass;
- contraction mode;
- ATPase rate;
- force/power demand;
- measurement convention.

Therefore BIO-01 retains:

**stored ATP alone is far too small to sustain exercise demand, so continuous resynthesis is required.**

It does not retain one universal “1 s / 2 s / 3 s” value.

No blocker.

---

## 17. Continuous ATP resynthesis audit

PASS.

PMID 32747792 states that continual ATP supply is essential during exercise and that small muscle ATP stores require activation of resynthesis pathways.

Direct human measurements also show simultaneous ATP-supply flux during exercise rather than a sequential tank model.

Canonical rule:

**ATP is continually resynthesized from exercise onset; later BIO topics determine which pathways contribute how much under specific conditions.**

No blocker.

---

## 18. Energy-system sequencing boundary

PASS AT SCOPE LEVEL.

BIO-01 does not quantify:

- phosphagen contribution;
- glycolytic contribution;
- oxidative contribution;
- crossover times;
- percentages by set duration.

It establishes only:

**stored ATP is insufficient, and multiple ATP-resynthesis processes can operate concurrently.**

Detailed partitioning belongs BIO-02, BIO-03, BIO-06 and BIO-08.

No blocker.

---

## 19. Numerical-claim audit

PASS.

Removed from canonical closure:

- one universal muscle [ATP];
- one universal “seconds of ATP” value;
- one universal ΔGATP;
- one universal ATP-turnover rate;
- one fixed energy-system percentage.

Retained:

- qualitative small-pool boundary;
- pool-vs-flux distinction;
- condition-dependent ΔG;
- continuous ATP resynthesis.

This reduces false precision without losing any downstream-required knowledge.

---

## 20. Evidence-ledger audit

BIO01-01…BIO01-08 are adequate for closure.

Minor refinement required:

- BIO01-01 should explicitly describe “energy currency” as shorthand and activated-carrier terminology as the technical form;
- BIO01-03 should make clear that ΔG°′ is a standard transformed biochemical reference rather than exact in-vivo ΔG;
- BIO01-08 should retain the “small relative to demand” qualitative claim and not add a universal numeric ATP pool.

All eight rows can move from:

`REVALIDATED 2026-11-19 — CLOSURE AUDIT PENDING`

to:

`REVALIDATED 2026-11-19`.

No new ledger row is required.

---

## 21. Uncertainty audit

Remaining uncertainty is real but non-blocking:

1. exact ATP synthesis/utilization flux for specific resistance-training sets;
2. method-dependent differences among biopsy, 31P-MRS and modeling estimates;
3. exact in-vivo ATP-hydrolysis free energy by muscle/state;
4. exact ATP pool by muscle/fiber/condition;
5. detailed contribution of PCr, glycolysis and oxidative phosphorylation from exercise onset;
6. ATPase partitioning among cross-bridge, ion-pump and other processes during specific tasks.

These belong BIO-02/03/06/08/12 and PHY.

They do not block the foundational energy vocabulary required downstream.

---

## 22. Closure criterion test

Topic:

> BIO-01 — Basic energy concepts

Result: **PASS.**

Canonical architecture:

`energy conserved and transformed`
→
`metabolic reactions capture transferable free energy`
→
`ATP acts as a rapidly recycled activated carrier / immediate intermediary`
→
`ATP-dependent cellular processes consume ATP`
→
`small ATP pool requires continuous resynthesis`.

Thermodynamic architecture:

`actual ΔG determines directional driving force under stated conditions`
+
`activation barrier determines kinetic accessibility`
+
`enzymes lower activation barriers`
+
`coupling combines reactions so the net ΔG can become favorable`.

No universal law was retained for:

- ATP = literal packet of energy;
- bond breaking itself releases ATP energy;
- [ATP] = ATP turnover;
- stable [ATP] = low demand;
- ΔG = ΔG°′;
- negative ΔG = fast reaction;
- enzyme = changed equilibrium;
- one exact ATP pool;
- one exact number of seconds from stored ATP.

---

## 23. Closure decision

**BIO-01 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 8 exact Section 1 items pass;
2. energy is treated as conserved/transferred/transformed rather than created;
3. ATP “currency” is retained only as shorthand;
4. activated carrier / immediate phosphoryl-transfer and free-energy intermediary is the preferred technical framing;
5. ATP pool and ATP turnover are distinct;
6. high ATP flux can coexist with stable or near-stable ATP concentration;
7. ATP concentration can decline under severe demand and is not invariant;
8. [ATP] and ΔGATP are distinct variables;
9. actual ΔG is condition dependent and distinct from standard transformed ΔG°′;
10. exergonic/endergonic describe thermodynamics, not kinetics;
11. coupled reactions can make a net process favorable;
12. enzymes lower activation barriers without changing reaction equilibrium;
13. ATP hydrolysis is not explained as energy release from bond breaking itself;
14. muscle ATP stores are small relative to exercise demand;
15. continuous ATP resynthesis is required during sustained work;
16. no false-precision ATP-pool/time/ΔG/turnover value is retained;
17. BIO-02/03/06/08/12 and PHY boundaries remain intact;
18. no project-relevant blocker remains.

---

## 24. Canonical finding authorization

Create:

`research/fitness/findings/05_bioenergetics/BIO-01_basic_energy_concepts.md`

Status:

**CLOSED_FOR_PRACTICE v2.0 — revalidated 2026-11-19**.

Evidence-ledger rows:

`BIO01-01…BIO01-08`

remain the stable claim set after status/wording refinement.

---

## 25. Next dependency

**BIO-02/PASS-01 — Phosphagen system content revalidation.**

Do not start BIO-02 in this working block.
