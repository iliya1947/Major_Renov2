# BIO-01 / PASS-01 — Basic energy concepts content revalidation

Дата: 2026-11-19  
Статус: **CONTENT PASS COMPLETE — AUDIT/SYNTHESIS PENDING**  
Область: 05 — Bioenergetics / Exercise Metabolism  
Topic: BIO-01 — Basic energy concepts

## 0. Source-of-truth / exact scope

Area 05 Section 1 contains **8 exact items**:

1. Energy transfer.
2. ATP as the immediate energy currency.
3. ATP turnover.
4. Free energy.
5. Exergonic vs endergonic reactions — applied level.
6. Coupled reactions.
7. Enzyme-mediated reactions.
8. Why skeletal-muscle ATP stores are small relative to demand and continuous resynthesis is required.

Upstream boundaries:

- PHY — muscle contraction, ATPases, fatigue and physiological function already established;
- NEU — motor control / learning complete for current purpose.

Downstream ownership:

- BIO-02 — phosphagen system;
- BIO-03 — glycolysis;
- BIO-04/05 — lactate and acid-base;
- BIO-06 — oxidative metabolism;
- BIO-08 — interaction of energy systems;
- BIO-10/11 — depletion/repletion and metabolic limitations;
- BIO-12 — resistance-training-specific bioenergetics;
- PRO — exact work:rest/loading prescriptions;
- NUT — substrate intake/repletion.

BIO-01 establishes the language needed to interpret all later bioenergetics topics without reopening pathway-specific details.

No canonical BIO-01 finding exists yet.

---

## 1. Question Card

### Decision

Build the minimum thermodynamic and biochemical framework needed to reason correctly about exercise bioenergetics without:

- treating energy as being created by metabolism;
- treating ATP as a large long-term fuel store;
- confusing ATP concentration with ATP turnover;
- treating standard free energy as the exact in vivo free energy;
- treating “exergonic” as synonymous with “fast”;
- treating “endergonic” as impossible in cells;
- claiming that enzymes change the thermodynamic favorability/equilibrium of a reaction;
- saying that energy is released simply because a phosphate bond in ATP is broken;
- assuming muscle ATP concentration must fall in proportion to ATP demand.

### Primary downstream context

Healthy human skeletal muscle at rest and during exercise, including later resistance-training interpretation.

### Critical outputs

- correct interpretation of energy transfer;
- correct role of ATP;
- pool vs flux distinction;
- correct use of ΔG;
- exergonic/endergonic distinction;
- coupling logic;
- enzyme kinetics vs thermodynamics boundary;
- reason continuous ATP resynthesis is necessary.

---

## 2. Energy is transferred and transformed, not “created”

Biological work depends on transfer/transduction of energy among forms.

For skeletal muscle, a useful simplified chain is:

`chemical free energy in substrates`
→
`ATP synthesis / phosphoryl-transfer network`
→
`ATP-coupled cellular processes`
→
`mechanical work + transport/signaling work + heat`.

The important project language is:

**metabolism transfers and transforms energy; it does not create energy.**

In muscle, chemical free energy from nutrients is not coupled directly to every actomyosin or ion-transport event. ATP and related phosphoryl-transfer systems provide an intermediate energy-transfer network.

This does not mean all cellular energy transfer occurs only through ATP; redox carriers, ion gradients and other activated carriers also participate.

For the exercise project, ATP remains the principal immediate interface between metabolic energy supply and ATP-consuming cellular work.

Confidence: **HIGH**.

---

## 3. ATP as “energy currency” — useful metaphor with limits

“ATP is the energy currency of the cell” is useful shorthand if interpreted correctly.

ATP functions as:

- an activated phosphoryl-transfer molecule;
- an immediate free-energy carrier;
- a reusable intermediate linking energy-producing and energy-consuming reactions.

In contracting skeletal muscle, ATP consumption is required for processes including:

- myosin ATPase / cross-bridge cycling;
- Ca²⁺ handling;
- ion-gradient restoration.

Exact ATPase partitioning belongs PHY/BIO downstream and is not reopened here.

Canonical boundary:

**ATP is not a large fuel reserve comparable with glycogen or fat.**

It is a rapidly turned-over intermediate whose concentration is defended by continual resynthesis.

Confidence: **HIGH**.

---

## 4. ATP hydrolysis: avoid the “breaking a high-energy bond releases energy” error

The shorthand “ATP contains a high-energy phosphate bond” is potentially misleading.

Breaking a chemical bond itself requires energy.

ATP hydrolysis is energetically favorable because the **overall reaction**:

`ATP + H₂O → ADP + Pi`

produces products with lower free energy under the relevant conditions.

Relevant contributors include:

- product stabilization;
- reduced electrostatic repulsion;
- resonance/solvation effects;
- actual reactant/product concentrations.

Therefore:

**the useful energy release belongs to the net free-energy change of the whole hydrolysis reaction, not to bond breaking by itself.**

Recent 2025–2026 biology-education literature independently identifies “bond breaking releases ATP energy” as a persistent biochemical misconception.

Project rule:

**never explain ATP by saying that breaking the terminal phosphate bond itself releases energy.**

Confidence: **HIGH**.

---

## 5. ATP turnover: pool ≠ flux

### ATP pool
The amount/concentration of ATP present at a given moment.

### ATP turnover
The rate/flux at which ATP is consumed and regenerated.

These are not equivalent.

During exercise:

- ATP demand can rise dramatically;
- ATP synthesis flux rises to match demand;
- muscle [ATP] can remain relatively stable for substantial periods.

Thus:

**large ATP turnover does not require a proportionally large ATP pool or a large fall in [ATP].**

Classic human biopsy/MRS studies directly measured large ATP turnover during contraction.

Modern in-vivo MRS work continues to demonstrate increasing ATP synthesis flux with muscle work and near-maintenance of ATP concentration under many conditions.

Confidence: **HIGH**.

---

## 6. Turnover means continual recycling

ATP turnover should not be visualized as:

`one fixed ATP store → progressive emptying`.

A better model is:

`ATP hydrolysis at sites of work`
↔
`ATP resynthesis from ADP + Pi`

with a rapidly cycling pool.

At steady or quasi-steady energetic conditions:

`ATP utilization rate ≈ ATP resynthesis rate`

so concentration can remain approximately stable despite high flux.

At sufficiently severe demand or energetic disturbance, this matching can become incomplete and ATP concentration can fall.

Project rule:

**stable [ATP] does not mean low ATP use; declining [ATP] is not required for high energetic demand.**

Confidence: **HIGH**.

---

## 7. ATP concentration is strongly defended but not invariant

It would be incorrect to say:

> “muscle ATP never falls during exercise.”

Recent direct human evidence shows exceptions.

PMID **39705717**:

- in vivo skeletal muscle during incremental contractions;
- approximately 9% ATP decline was associated with IMP formation;
- modeling indicated IMP formation helped preserve a favorable `ΔGATP`;
- ATP had not fully returned to baseline after 10 min recovery.

Older severe-exercise studies likewise documented ATP depletion under some exhaustive conditions.

Thus:

**ATP concentration is strongly regulated and often maintained, but it is not physiologically immutable.**

This distinction matters later when discussing:

- severe fatigue;
- adenine nucleotide loss;
- repeated-bout recovery.

Confidence: **HIGH**.

---

## 8. Free energy: what ΔG means

Gibbs free-energy change (`ΔG`) describes the thermodynamic driving force of a reaction under the specified conditions.

Operationally:

- `ΔG < 0` → forward reaction is thermodynamically favorable/exergonic;
- `ΔG > 0` → forward reaction is thermodynamically unfavorable/endergonic and requires coupling or changed conditions to proceed net-forward;
- `ΔG = 0` → equilibrium; no net thermodynamic driving force.

Important:

**thermodynamically favorable does not mean kinetically fast.**

A reaction can have negative ΔG yet proceed extremely slowly without an adequate catalytic pathway.

Confidence: **HIGH**.

---

## 9. Actual ΔG ≠ standard ΔG°′

The actual free-energy change inside a cell depends on:

- intrinsic reaction chemistry;
- concentrations/activities of reactants and products;
- temperature;
- ionic environment and other conditions.

Therefore:

`ΔG in vivo ≠ fixed textbook ΔG°′`.

The standard transformed free-energy value is a reference state.

For ATP hydrolysis specifically, intracellular `ΔGATP` varies with:

- ATP;
- ADP;
- Pi;
- cellular conditions.

Project rule:

**do not use one standard ATP-hydrolysis number as though it were the exact free energy available in every muscle state.**

Confidence: **HIGH**.

---

## 10. ΔGATP and [ATP] are not the same variable

ATP concentration alone does not define cellular energetic state.

The free energy of ATP hydrolysis depends on the ATP/ADP/Pi relationship and conditions.

PMID **39705717** is a useful direct demonstration:

- [ATP] fell modestly;
- IMP formation limited excessive ADP accumulation;
- modeled `ΔGATP` remained favorable.

Thus:

**a change in ATP pool size and a change in ATP hydrolysis potential are related but not interchangeable.**

This becomes important later when interpreting fatigue and recovery.

Confidence: **MODERATE-HIGH** for the specific human mechanism / **HIGH** for the thermodynamic distinction.

---

## 11. Exergonic reactions

An exergonic reaction has a negative ΔG in the stated conditions.

It can provide thermodynamic driving force.

But exergonic does not mean:

- instantaneous;
- enzyme-independent;
- fully converted to mechanical work;
- “all energy becomes ATP.”

Some free energy is dissipated as heat and actual pathway efficiency depends on the system.

Canonical rule:

**exergonic = thermodynamically favorable in the stated direction, not necessarily fast or efficient.**

Confidence: **HIGH**.

---

## 12. Endergonic reactions

An endergonic reaction has positive ΔG in the stated direction.

It is not “impossible.”

Cells can drive an endergonic process by coupling it to sufficiently favorable processes so that the **net combined ΔG is negative**.

Examples at the conceptual level include:

- ATP synthesis from ADP + Pi;
- biosynthetic reactions;
- active transport.

Specific pathway mechanisms belong downstream sections.

Canonical rule:

**endergonic reactions require an energy-coupling mechanism; they are not violations of thermodynamics.**

Confidence: **HIGH**.

---

## 13. Coupled reactions

For sequential/coupled reactions, free-energy changes are additive.

If:

- reaction A is unfavorable;
- reaction B is sufficiently favorable;

then the combined process can be favorable if:

`ΔG_A + ΔG_B < 0`.

ATP participates heavily in cellular coupling through:

- phosphoryl transfer;
- formation of activated intermediates;
- ATPase cycles.

Project rule:

**ATP coupling is more precise than saying ATP “gives energy” as an abstract substance.**

The mechanistic question is:

> What reaction/process is coupled to ATP conversion, and how does that coupling make the overall pathway favorable?

Confidence: **HIGH**.

---

## 14. ATP coupling does not require a literal free-energy “packet”

The “energy currency” metaphor can create a false picture of energy as a material packet carried inside ATP.

A more rigorous interpretation is:

- ATP participates chemically in coupled reaction networks;
- the coupled system has a favorable net free-energy change;
- the reaction mechanism transfers phosphate or changes molecular states/gradients.

Therefore:

**energy is a system property/transfer quantity, not a substance stored inside a phosphate bond.**

Status: **CONCEPTUAL BOUNDARY**.

---

## 15. Enzyme-mediated reactions: kinetics vs thermodynamics

Enzymes:

- lower activation barriers;
- increase reaction rates;
- provide specificity;
- organize coupled pathways;
- allow metabolism to proceed rapidly enough under physiological conditions.

Enzymes do **not**:

- change the equilibrium constant of a reaction;
- change the reaction's `ΔG°′`;
- make an energetically unfavorable isolated reaction favorable simply by catalyzing it.

They accelerate forward and reverse pathways toward the same equilibrium.

Canonical rule:

**enzyme catalysis changes kinetics, not the underlying thermodynamic equilibrium.**

Confidence: **HIGH**.

---

## 16. Enzymes can implement coupling without violating thermodynamics

The statement:

> “enzymes cannot make an unfavorable reaction favorable”

does not mean enzymes are irrelevant to coupled endergonic processes.

An enzyme or enzyme system can physically couple:

- an unfavorable reaction;
- to a favorable reaction such as ATP conversion;

so that the **combined reaction** has negative ΔG.

Thus:

- catalysis alone does not alter ΔG;
- coupling changes the overall reaction being considered.

This distinction prevents a common conceptual contradiction.

Confidence: **HIGH**.

---

## 17. Why muscle ATP stores are small relative to demand

Human skeletal muscle contains only a small ATP pool relative to the enormous potential demand during exercise.

A widely cited exercise-bioenergetics review estimates muscle ATP concentration at roughly **7–8 µmol/g muscle**, sufficient by itself for only a few seconds of high ATP demand.

The exact “seconds” estimate depends on:

- workload;
- contraction mode;
- muscle mass;
- ATP-use rate.

Therefore it should not be treated as one universal stopwatch value.

Hargreaves & Spriet explicitly state:

- muscle ATP stores are small;
- metabolic pathways must be activated to sustain the required ATP resynthesis rate during exercise.

Canonical rule:

**stored ATP is a buffer/pool, not a sufficient stand-alone fuel reservoir for sustained exercise.**

Confidence: **HIGH**.

---

## 18. Continuous resynthesis is required from exercise onset

Because ATP demand can rise tens-fold from rest during intense muscle work, sustained contraction requires immediate matching by ATP-resynthesis pathways.

This matching begins from exercise onset; energy systems do not wait for one system to “run out” before another turns on.

The exact partition among:

- phosphocreatine;
- glycolytic substrate-level phosphorylation;
- oxidative phosphorylation

belongs BIO-02/BIO-03/BIO-06/BIO-08.

BIO-01 retains only:

**continuous ATP resynthesis is mandatory because ATP demand greatly exceeds the capacity of the stored ATP pool.**

Confidence: **HIGH**.

---

## 19. ATP homeostasis is dynamic, not static

A better concept than “ATP stays constant” is:

**dynamic ATP homeostasis**.

This means:

- ATP is continuously hydrolyzed;
- ATP is continuously resynthesized;
- metabolic control adjusts flux to demand;
- [ATP] may change only modestly while underlying flux changes greatly.

Recent work:

- 2025 human multinuclear MRS (PMID **39960635**) measured oxidative ATP synthesis and found ATPox increased with workload, although the authors caution that exercise-state P/O estimation still needs methodological refinement;
- 2026 dynamic 31P-MRS study (PMID **41828020**, n=5) observed exercise/recovery changes in PCr/Pi/pH while ATP remained stable in that protocol.

These are methodologically informative but not used to assign universal ATP flux values.

Confidence: **HIGH for dynamic-homeostasis concept / MODERATE for current specific measurement estimates**.

---

## 20. Important non-equivalences

1. Energy transfer ≠ energy creation.
2. ATP ≠ long-term fuel store.
3. ATP “currency” ≠ literal packet of energy.
4. ATP pool ≠ ATP turnover.
5. Stable ATP concentration ≠ low ATP use.
6. High ATP turnover ≠ large ATP depletion.
7. ATP concentration ≠ ΔGATP.
8. ΔG ≠ ΔG°′.
9. Exergonic ≠ fast.
10. Endergonic ≠ impossible.
11. Enzyme catalysis ≠ change in reaction equilibrium.
12. Enzyme catalysis ≠ change in ΔG°′.
13. Coupling ≠ violation of thermodynamics.
14. Breaking an ATP phosphate bond ≠ source of the net released free energy.
15. Stored muscle ATP ≠ enough for sustained exercise.
16. Energy-system activation ≠ one pathway waiting until another is exhausted.

---

## 21. Measurement / terminology boundaries

### ATP concentration / pool
Amount of ATP present at a time.

### ATP utilization / hydrolysis flux
Rate of ATP consumption by ATP-dependent processes.

### ATP synthesis flux
Rate of ATP regeneration.

### ATP turnover
Rate at which ATP is consumed and regenerated; exact operational calculation depends on method.

### ΔG
Actual Gibbs free-energy change under specified conditions.

### ΔG°′
Biochemical standard transformed free-energy change; reference state, not exact in-vivo ΔG.

### Exergonic
`ΔG < 0` for the stated direction/conditions.

### Endergonic
`ΔG > 0` for the stated direction/conditions.

### Activation energy
Kinetic barrier; distinct from net reaction ΔG.

---

## 22. Sources checked

### Current / recent exercise-bioenergetics evidence

1. Lanza IR et al. / current human MRS line updated by **Mitochondrial efficiency in resting skeletal muscle in vivo: a novel non-invasive approach using multinuclear magnetic resonance spectroscopy in humans**. PMID **39960635** (2025). Primary human study; ATP synthesis-rate methodology checked.
2. **Skeletal muscle inosine monophosphate formation preserves ΔGATP during incremental step contractions in vivo**. PMID **39705717** (2025). Primary human in-vivo study; ATP decline / IMP / ΔGATP distinction checked.
3. **pH-Resolved ATP Synthesis in Skeletal Muscle: Concept, Implementation, and Assessment Using Dynamic 31P Magnetic Resonance Spectroscopy at 7T**. PMID **41828020** (2026). Primary human MRS study; ATP/PCr/Pi dynamic-homeostasis example checked.
4. **31P-MRS-Measured Phosphocreatine Recovery Kinetics in Human Muscles in Health and Disease — systematic review/meta-analysis**. PMID **40189235** (2025). Used only for current methodological context; detailed PCr recovery belongs BIO-02.
5. **Advances in understanding the energetics of muscle contraction**. PMID **37302165** (2023). Review used for free-energy-to-work framing.
6. **Regulation of skeletal muscle mitochondrial fuel utilization during exercise**. PMID **41881712** (2026). Current review used for downstream scope confirmation, not to pre-empt BIO-06/07.

### Core exercise-bioenergetics sources

7. Hargreaves M, Spriet LL. **Skeletal muscle energy metabolism during exercise**. Nat Metab. 2020. PMID **32747792**. Core modern review for continual ATP supply, small ATP stores and resynthesis pathways.
8. Baker JS et al. **The Bioenergetics of Exercise**. 2018. PMCID **PMC5932573**. Used for ATP-pool vs demand/turnover scale and practical exercise framing.
9. Barclay CJ. **Energy demand and supply in human skeletal muscle**. J Muscle Res Cell Motil. 2017. PMID **28286928**. Used for ATP breakdown/resynthesis flux framework.
10. Walter G et al. **In vivo ATP synthesis rates in single human muscles during high intensity exercise**. J Physiol. 1999. PMID **10457099**. Direct human 31P-MRS evidence that ATP synthesis flux is supplied simultaneously by multiple pathways.
11. Katz A et al. **Muscle ATP turnover rate during isometric contraction in humans**. J Appl Physiol. 1986. PMID **3722052**. Direct human biopsy evidence for ATP turnover.
12. Layec G et al. **Skeletal muscle ATP turnover by 31P magnetic resonance spectroscopy during moderate and heavy bilateral knee extension**. PMID **25281731**. Direct human ATP-turnover measurement.

### Thermodynamic / biochemical references

13. NCBI Bookshelf — **The Cell: A Molecular Approach, Metabolic Energy / Catalysis and the Use of Energy by Cells**. Used for ΔG, ΔG°′, reaction coupling, ATP and enzyme-catalysis fundamentals.
14. NCBI Bookshelf — **Biochemistry, Proteins Enzymes**. Used to independently confirm enzyme activation-energy / equilibrium boundary.
15. Fontecilla-Camps JC. **The Complex Roles of Adenosine Triphosphate in Bioenergetics**. ChemBioChem. 2022. PMID **35353443**. Used to challenge oversimplified ATP “energy currency/high-energy bond” language.
16. Hall H, Yang M. **Making sense of ATP hydrolysis: how students reconcile conflicting ideas from chemistry and biology**. 2026. PMID **41930964**. Used only as a current independent check of the bond-breaking misconception, not as primary thermodynamic evidence.

---

## 23. Established content-level findings

### HIGH

1. Biological/exercise energy is transferred/transformed rather than created.
2. ATP is the principal immediate free-energy/phosphoryl-transfer intermediate connecting metabolic supply to skeletal-muscle work.
3. ATP is a small, rapidly recycled pool rather than a large long-term energy reserve.
4. ATP pool size and ATP turnover are distinct.
5. Large ATP turnover can occur with relatively stable ATP concentration.
6. Actual ΔG depends on reaction conditions and is not identical to ΔG°′.
7. Exergonic means negative ΔG under specified conditions, not “fast.”
8. Endergonic processes can proceed through coupling when the net combined ΔG is favorable.
9. Free-energy changes of coupled reactions are additive.
10. Enzymes lower activation barriers / alter kinetics but do not change the equilibrium or ΔG°′ of the isolated reaction.
11. ATP hydrolysis should not be explained as energy release from bond breaking alone.
12. Continuous ATP resynthesis is required during sustained muscle work because stored ATP is small relative to demand.

### MODERATE-HIGH

13. ATP concentration and ΔGATP can change differently during severe muscular work because energetic state depends on ATP/ADP/Pi and adenine-nucleotide handling.
14. Modern 31P-MRS can quantify important components of ATP synthesis/energetic state in vivo, but method-specific limitations remain.

### LOW / NOT RETAINED AS UNIVERSAL RULE

15. One fixed intracellular ΔGATP value for all muscle/exercise states.
16. One universal number of seconds that stored ATP alone supports exercise.
17. One exact ATP-turnover rate for “resistance exercise.”
18. One fixed percentage contribution from each energy system at exercise onset.

---

## 24. Unresolved gaps

Non-blocking for PASS-01 content coverage but requiring PASS-02 audit:

1. whether “ATP as energy currency” should be retained as primary terminology or explicitly subordinated to “activated carrier/phosphoryl-transfer intermediate”;
2. exact wording of ATP hydrolysis so the canonical finding avoids the high-energy-bond misconception without becoming unnecessarily chemical;
3. whether BIO-01 should state a numerical resting muscle ATP concentration or keep only the qualitative small-pool boundary;
4. whether any modern source supersedes common 7–8 µmol/g ATP estimates enough to change practical wording;
5. exact in-vivo ΔGATP range is state/method dependent and should likely remain outside canonical numerical claims;
6. ATP turnover measurement differs across biopsy, 31P-MRS and modeling approaches;
7. precise pathway contributions belong BIO-02/03/06/08 and must not leak into BIO-01 closure;
8. detailed ATPase partitioning belongs PHY/BIO downstream rather than this foundational pass.

---

## 25. Evidence-ledger candidates

1. ATP in skeletal muscle is a small rapidly recycled free-energy/phosphoryl-transfer pool; sustained contraction requires continual ATP resynthesis.
2. ATP concentration and ATP turnover are distinct; high ATP flux can coexist with relatively stable [ATP].
3. Actual cellular ΔG is condition dependent and must not be replaced by one standard ΔG°′ value.
4. Exergonic/endergonic describe thermodynamic driving force, not reaction speed.
5. Energetically unfavorable cellular processes can proceed through coupling when the summed ΔG of the combined process is negative.
6. Enzymes alter reaction kinetics by lowering activation barriers but do not change the reaction equilibrium or standard free-energy change.
7. ATP hydrolysis is favorable because of the net free-energy difference between reactants and products; bond breaking itself is not the source of released energy.
8. ATP concentration is strongly defended during exercise but is not invariant under severe energetic stress.

---

## 26. Exact Section 1 coverage audit — PASS-01 content level

| # | Exact Section 1 item | PASS-01 result | Main boundary |
|---|---|---|---|
| 1 | Energy transfer | **PASS at content level** | Transfer/transduction, not creation |
| 2 | ATP as immediate energy currency | **PASS at content level** | Useful shorthand; immediate carrier, not large fuel store |
| 3 | ATP turnover | **PASS at content level** | Flux ≠ pool; utilization and resynthesis |
| 4 | Free energy | **PASS at content level** | Actual ΔG is condition dependent; ΔG ≠ ΔG°′ |
| 5 | Exergonic vs endergonic | **PASS at content level** | Thermodynamics ≠ kinetics |
| 6 | Coupled reactions | **PASS at content level** | Combined ΔG determines favorability |
| 7 | Enzyme-mediated reactions | **PASS at content level** | Enzymes alter rate/activation barrier, not equilibrium |
| 8 | Small ATP stores / continuous resynthesis | **PASS at content level** | Small pool relative to demand; continuous resynthesis required |

Exact Area 05 Section 1 coverage = **8/8 at content/scope level**.

---

## 27. PASS decision

**BIO-01/PASS-01 = CONTENT PASS COMPLETE — AUDIT/SYNTHESIS PENDING.**

No content-level blocker was found.

BIO-01 is **not CLOSED_FOR_PRACTICE** because PASS-02 must independently challenge:

- ATP “energy currency” wording;
- ATP hydrolysis/high-energy-bond language;
- ΔG vs ΔG°′ boundary;
- thermodynamics vs kinetics;
- enzyme catalysis vs energy coupling;
- pool vs turnover distinction;
- small-pool/continuous-resynthesis claim;
- whether numerical ATP-store statements are justified strongly enough for the canonical finding;
- scope leakage into phosphagen/glycolytic/oxidative pathway details.

No canonical BIO-01 finding should be created before PASS-02.

---

## 28. Next pass

**BIO-01/PASS-02 — Closure audit and synthesis.**

Required tasks:

1. independently re-check all 8 Section 1 items;
2. audit “energy transfer” language for thermodynamic accuracy;
3. stress-test “ATP energy currency” against more precise activated-carrier language;
4. audit ATP hydrolysis and explicitly reject the bond-breaking misconception;
5. independently audit ATP pool vs turnover using human exercise evidence;
6. verify actual ΔG vs ΔG°′ wording;
7. audit exergonic/endergonic against kinetics confusion;
8. audit coupling / summed-ΔG logic;
9. independently verify enzyme catalysis does not alter equilibrium;
10. audit the small-ATP-pool / continuous-resynthesis claim and any numerical estimates;
11. preserve BIO-02/03/06/08 and PHY boundaries;
12. create canonical BIO-01 finding only if closure is authorized;
13. update project state and STOP before BIO-02.

**Do not start BIO-02 in the same working block.**
