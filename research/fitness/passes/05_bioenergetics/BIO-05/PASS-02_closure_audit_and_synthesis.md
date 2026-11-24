# BIO-05 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-19  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 05 — Bioenergetics / Exercise Metabolism  
Topic: BIO-05 — Acid–base physiology и buffering

## 0. Purpose

Независимо перепроверить BIO-05/PASS-01 и решить, достаточно ли Section 5 закрывает acid–base/buffering foundation для downstream BIO-08/09/11/12, PRO, TST, REC и NUT без следующих ошибок:

- lactate = H+;
- lactate production = direct proton-production rate;
- “lactic acid dissociation” как универсальная причина exercise acidosis;
- ATP hydrolysis как единственная полная модель acid–base causation;
- blood pH/lactate как прямой proxy muscle pHi;
- intracellular buffering = proton efflux;
- bicarbonate = вся acid–base система;
- MCT = единственный H+ transport route;
- severe acidosis = sole fatigue cause;
- acidosis = physiologically irrelevant;
- exercise burn = lactate;
- pH recovery = lactate clearance;
- universal critical muscle pH;
- universal pH recovery/rest time;
- преждевременная prescription sodium bicarbonate/beta-alanine.

Exact source scope: Area 05 Section 5 = **8 items**.

---

## 1. Independent source re-check

Independent re-check used:

1. Cairns & Lindinger. **Lactic acidosis: implications for human exercise performance**. 2025. PMID **40088272**.
2. Robergs et al. **Biochemistry of exercise-induced metabolic acidosis**. PMID **15308499**.
3. Lühker et al. **Changes in acid-base and ion balance during exercise in normoxia and normobaric hypoxia**. PMID **28914359**.
4. Juel. **Regulation of pH in human skeletal muscle: adaptations to physical activity**. PMID **18267000**.
5. Kristensen et al. **Expression of Na+/HCO3− co-transporter proteins in rat and human skeletal muscle**. PMID **15329059**.
6. Kemp et al. **Proton efflux in human skeletal muscle during recovery from exercise**. PMID **9367287**.
7. Bicarbonate attenuates intracellular acidosis. PMID **12027853**.
8. Liegnell et al. sodium-lactate infusion / resistance exercise. PMID **32830552**.
9. Pollak et al. metabolite-combination infusion and fatigue/pain sensations. PMID **24142455**.
10. Sharp et al. sprint training and muscle buffer capacity. PMID **3957514**.
11. 2026 systematic review/meta-analysis of sodium bicarbonate in HIIE/team-sport athletes. PMID **42781544**.

No closure-critical contradiction was found.

---

## 2. Exact Section 5 audit — 8/8

1. H+ accumulation — **PASS**.
2. Sources of acidosis during intense exercise — **PASS WITH DUAL-FRAME BOUNDARY**.
3. Intracellular buffering — **PASS**.
4. Extracellular buffering — **PASS**.
5. Bicarbonate system — **PASS**.
6. Transport of H+ equivalents — **PASS**.
7. Acid–base state and fatigue — **PASS WITH MULTIFACTOR BOUNDARY**.
8. Do not attribute all “burn” to lactate — **PASS**.

Result: **8/8 PASS.**

---

## 3. Compartment audit

PASS.

Retain distinct compartments:

- muscle intracellular pHi;
- muscle interstitial pH;
- venous blood draining active muscle;
- arterial/systemic blood.

Human evidence supports substantial local muscle acidification during intense work while systemic blood pH changes are smaller and differently regulated.

Direct sodium-lactate infusion in resistance exercise increased blood lactate and blood pH without changing intramuscular pH.

Canonical rule:

**blood pH, blood lactate, interstitial pH and muscle pHi are related but non-equivalent measurements.**

No blocker.

---

## 4. Proton-source / acidosis causation audit

PASS WITH IMPORTANT REFINEMENT.

### Retained

The primitive model:

`glycolysis → lactic acid dissociation → H+ → fatigue`

is rejected.

The forward LDH reaction consumes H+ in stoichiometric notation, so lactate formation itself should not be described as direct release of the exercise proton load.

High ATP turnover and coupled ATP-resynthesis reactions are central to biochemical proton bookkeeping.

### Required refinement

Do **not** replace the lactate myth with:

`all exercise acidosis = ATP hydrolysis alone`.

The physicochemical framework treats H+ and HCO3− as dependent variables constrained by:

- PCO2;
- strong-ion difference;
- total weak acids/bases.

Human exercise data show strong ions and weak acids provide additional explanatory information beyond a one-variable lactate interpretation.

Canonical rule:

**exercise acidification is an integrated ATP-turnover + ion/weak-acid + buffering + transport + oxidative/respiratory state; exact fractional causation is task dependent.**

Confidence: HIGH multi-process boundary / MODERATE exact partition.

No blocker.

---

## 5. Lactate/H+ audit

PASS.

Retain simultaneously:

1. lactate concentration ≠ H+ concentration;
2. lactate formation via LDH is not direct “lactic acid dissociation”;
3. lactate can still participate in acid–base physiology through:
   - lactate/H+ cotransport;
   - strong-ion changes;
   - metabolite signaling;
   - correlations with glycolytic state.

Direct human resistance-exercise sodium-lactate infusion showed higher blood lactate without lower intramuscular pH.

Canonical rule:

**lactate is neither “the acid” nor chemically irrelevant to the exercise acid–base state.**

No blocker.

---

## 6. Intracellular-buffering audit

PASS.

Retain multiple contributors:

- protein/histidyl groups;
- phosphate species;
- carnosine;
- bicarbonate/CO2 chemistry;
- phosphagen/creatine-linked proton handling;
- other weak-acid/base groups.

Critical distinction:

**buffering ≠ efflux**.

Buffering changes free H+/pH response without itself proving transmembrane removal.

Sprint-training evidence supports that measured muscle buffer capacity can increase, but method/timing dependence prevents one universal quantitative buffer-capacity value.

Carnosine remains one contributor, not the unique or dominant universal buffer.

No blocker.

---

## 7. Extracellular buffering / bicarbonate audit

PASS.

Bicarbonate/CO2 is a major extracellular acid–base system, interacting with:

- blood proteins/hemoglobin;
- phosphate/weak buffers;
- perfusion/distribution;
- ventilation/CO2 elimination.

Human bicarbonate infusion directly attenuated the exercise-induced fall in muscle pHi in one crossover study.

Current 2026 systematic review/meta-analysis found only a small average HIIE performance benefit, with prediction interval crossing zero and low/very-low certainty for several outcomes.

Therefore:

**extracellular alkalosis can modify acid–base gradients and sometimes performance, but bicarbonate is neither the whole acid–base system nor proof of a universal buffer-limited performance mechanism.**

Prescription/dosing remains NUT.

No blocker.

---

## 8. H+ equivalent transport audit

PASS.

Human skeletal muscle pH regulation uses parallel pathways:

- MCT lactate/H+ cotransport;
- Na+/H+ exchange (NHE1);
- Na+/HCO3− cotransport;
- carbonic-anhydrase-assisted CO2/HCO3− interconversion.

Human skeletal muscle expresses bicarbonate cotransport proteins.

Review evidence supports NHE, bicarbonate cotransport and lactate/H+ cotransport as major components of skeletal-muscle pH regulation.

Canonical rule:

**no single transporter is treated as the universal H+ clearance pathway or rate limiter.**

No blocker.

---

## 9. Proton-efflux / recovery audit

PASS.

Human 31P-MRS recovery data show:

- proton efflux is dynamic;
- it has pH-dependent and pH-independent components;
- efflux rate changes during recovery;
- lactate/H+ cotransport may account for only a minority of early recovery proton efflux in some protocols.

Therefore:

**no universal H+ clearance half-time is retained.**

And:

**pH recovery ≠ lactate disappearance.**

Exact rest prescription remains BIO-12/PRO.

No blocker.

---

## 10. Acid-base / fatigue audit

PASS WITH NONLINEAR / MULTIFACTOR BOUNDARY.

Current 2025 synthesis supports:

- lactate itself has little direct detrimental effect on muscle performance at high concentrations;
- pHi ~6.7–6.6 at physiological temperatures may have relatively small direct force/power effects in non-fatigued muscle;
- more severe pHi ~6.5–6.2 can reduce maximal force, shortening velocity and peak power;
- fatigue coexists with Pi/H2PO4−, K+, glycogen, Ca2+ handling, ROS and other disturbances;
- acidosis can also have protective interactions with K+-related membrane excitability.

Canonical rule:

**severe intracellular acidosis can contribute to force/power fatigue, but lower pH is neither necessary nor sufficient to explain all exercise fatigue.**

No universal “critical pH” is retained.

No blocker.

---

## 11. Pi/H2PO4− interaction audit

PASS AS SUPPORTING CONTEXT.

H+ changes phosphate speciation toward H2PO4−.

Current synthesis and classic human 31P-NMR evidence support interactions among:

- H+;
- inorganic phosphate species;
- cross-bridge function;
- Ca2+ sensitivity;
- myosin ATPase.

Therefore:

**acid–base effects should not be isolated from phosphate-related fatigue chemistry.**

Detailed integrated fatigue ownership remains BIO-11.

No blocker.

---

## 12. “Burn” / sensory audit

PASS.

Direct human intramuscular infusion evidence showed:

- individual protons, lactate or ATP at tested doses did not reproduce the full fatigue/pain sensations;
- combinations of H+ + lactate + ATP produced fatigue sensations and, at higher concentrations, pain/ache.

Group III/IV muscle afferents remain a relevant sensory/neural pathway.

Canonical rule:

**exercise burn/discomfort is an emergent metabolite + mechanical + neural signal; lactate alone is not the sensory variable.**

No blocker.

---

## 13. Blood vs muscle interpretation audit

PASS.

Direct human evidence supports:

- blood lactate can change greatly without corresponding change in intramuscular pH;
- blood alkalosis can alter but does not directly equal local muscle pHi;
- systemic and local compartments have distinct kinetics.

Canonical rule:

**blood lactate, blood pH and blood bicarbonate are contextual systemic measurements, not direct numerical muscle-pH meters.**

No blocker.

---

## 14. Buffering-intervention scope audit

PASS.

BIO-05 retains only mechanistic conclusions:

- extracellular buffering can alter acid–base gradients;
- intracellular buffering capacity can be modified;
- acid–base manipulation may affect some high-intensity tasks.

BIO-05 does **not** authorize:

- sodium bicarbonate dose;
- ingestion timing;
- sodium-load management;
- GI strategy;
- beta-alanine dose;
- carnosine-targeting supplementation protocol.

Those remain NUT.

No blocker.

---

## 15. Resistance-training scope audit

PASS.

For resistance exercise, retain:

`high ATP turnover + PCr/glycolytic flux`
→
`Pi / ion / acid-base disturbance`
+
`buffering / transport / perfusion`
→
`task-specific force/power/perception change`.

Do not infer:

- exact rest interval from lactate;
- exact rest interval from one pH recovery curve;
- complete performance recovery from normalized pH;
- local muscle pH from blood lactate.

Exact resistance-set energetics/rest ownership remains BIO-12/PRO.

No blocker.

---

## 16. Canonical non-equivalences

1. pH ≠ linear H+ quantity.
2. muscle pHi ≠ interstitial pH.
3. muscle pHi ≠ blood pH.
4. lactate concentration ≠ H+ concentration.
5. lactate formation ≠ direct lactic-acid dissociation.
6. lactate production ≠ proton-production rate.
7. ATP-hydrolysis equation ≠ complete net-cellular proton balance.
8. intracellular buffering ≠ proton efflux.
9. proton efflux ≠ lactate disappearance.
10. bicarbonate ≠ total acid–base regulation.
11. blood bicarbonate ≠ muscle buffer capacity.
12. MCT ≠ total H+ transport.
13. lower pH ≠ sole cause of fatigue.
14. normal blood pH ≠ normal pHi in all active fibres.
15. exercise burn ≠ lactate concentration.
16. pH recovery ≠ complete metabolic recovery.
17. one pH value ≠ universal task-failure threshold.
18. extracellular alkalosis ≠ guaranteed performance improvement.

---

## 17. Closure criterion test

Exact Area 05 Section 5:

1. H+ accumulation — PASS.
2. Sources of acidosis — PASS.
3. Intracellular buffering — PASS.
4. Extracellular buffering — PASS.
5. Bicarbonate system — PASS.
6. Transport of H+ equivalents — PASS.
7. Acid–base and fatigue — PASS.
8. Burn not attributed to lactate alone — PASS.

Result:

**8/8 PASS.**

No project-relevant blocker remains.

---

## 18. Closure decision

**BIO-05 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. local exercise acidification is retained as real and compartment specific;
2. lactate is not treated as H+ or direct acid source;
3. ATP-turnover bookkeeping is retained without claiming a single universal acidification reaction;
4. physicochemical strong-ion / weak-acid / PCO2 framing is preserved;
5. intracellular buffering is separated from membrane transport;
6. bicarbonate is retained as a major extracellular system without becoming the whole model;
7. MCT/NHE/bicarbonate transport all contribute to pH regulation;
8. pH recovery is separated from lactate disappearance;
9. severe acidosis can contribute to fatigue;
10. acidosis is not the sole fatigue mechanism;
11. H+/Pi/K+/Ca2+ and other factors interact;
12. exercise burn is not a lactate sensor;
13. blood measurements are not direct muscle-pH proxies;
14. no universal critical pH, pH-recovery time or rest prescription is retained;
15. supplementation prescription remains NUT;
16. exact resistance work:rest decisions remain BIO-12/PRO.

---

## 19. Canonical finding authorization

Create:

`research/fitness/findings/05_bioenergetics/BIO-05_acid_base_buffering.md`

Status:

**CLOSED_FOR_PRACTICE v2.0 — revalidated 2026-11-19**

Create/finalize evidence-ledger rows:

`BIO05-01…BIO05-09`.

---

## 20. Next dependency

**BIO-06/PASS-01 — Oxidative phosphorylation / mitochondria content revalidation.**

Do not start BIO-06 in this working block.
