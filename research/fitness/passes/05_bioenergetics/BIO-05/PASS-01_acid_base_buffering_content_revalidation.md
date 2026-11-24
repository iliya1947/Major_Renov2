# BIO-05 / PASS-01 — Acid–base physiology and buffering content revalidation

Дата: 2026-11-19  
Статус: **CONTENT PASS COMPLETE — AUDIT/SYNTHESIS PENDING**  
Область: 05 — Bioenergetics / Exercise Metabolism  
Topic: BIO-05 — Acid–base physiology и buffering

## 0. Source-of-truth / exact scope

Area 05 Section 5 contains **8 exact items**:

1. H+ accumulation.
2. Sources of acidosis during intense exercise.
3. Intracellular buffering.
4. Extracellular buffering.
5. Bicarbonate system.
6. Transport of H+ equivalents.
7. Связь кислотно-щелочного состояния с утомлением.
8. Не приписывать всю «жгучесть» одному lactate.

Upstream dependencies:

- BIO-01 — ATP turnover, reaction thermodynamics/kinetics and ATP hydrolysis boundaries;
- BIO-02 — PCr/CK buffering, concurrent energy systems and recovery-state boundaries;
- BIO-03 — glycolysis, pyruvate/LDH redox handling and lactate formation ≠ anoxia;
- BIO-04 — lactate ≠ waste, lactate ≠ H+, MCT transport and lactate ≠ sole fatigue/readiness marker.

Downstream ownership:

- BIO-08 — quantitative interaction of energy systems;
- BIO-09 — threshold/steady-state relationships;
- BIO-11 — integrated fatigue/limiting factors;
- BIO-12 — resistance-training-specific metabolic demand and repeated-set recovery;
- PRO — work:rest, set structure and programming decisions;
- TST — blood/metabolic testing interpretation;
- REC — recovery between bouts/sessions;
- NUT — sodium bicarbonate, beta-alanine/carnosine and other buffering interventions.

This PASS does **not** prescribe sodium bicarbonate or beta-alanine dosing. Those are downstream NUT questions.

No canonical BIO-05 finding exists yet.

---

## 1. Qualification purpose / Question Card

### Why this block is required

A fitness trainer needs an acid–base model that is accurate enough to prevent several practical errors:

- calling lactate “the acid”;
- assuming blood lactate numerically represents muscle H+ or muscle pH;
- assuming all high-intensity fatigue is “acid buildup”;
- assuming acidosis is irrelevant because lactate formation itself does not release H+;
- assuming one universal muscle-pH value defines failure;
- assuming intracellular and extracellular buffering are the same process;
- assuming buffering and H+ transport are the same process;
- interpreting post-set “burn” as a direct lactate meter;
- prescribing rest or buffering interventions from a simplistic lactate-clearance story.

### Primary downstream context

Healthy humans during:

- high-intensity cycling/running/sprints;
- resistance exercise and repeated sets;
- repeated high-intensity bouts;
- short recovery intervals;
- acid–base manipulation experiments used to infer mechanism.

### Critical outputs

The trainer must be able to distinguish:

1. H+ generation/acidifying reactions;
2. physicochemical determinants of pH;
3. intracellular chemical buffering;
4. extracellular/blood buffering;
5. transmembrane transport of acid/base equivalents;
6. respiratory/systemic handling;
7. local contractile effects of severe acidosis;
8. sensory consequences of metabolites and pH;
9. lactate from H+ and pH.

---

## 2. Core definitions

### pH is not “amount of acid”

pH is a logarithmic representation of hydrogen ion activity/concentration.

A fall in pH means an increase in H+ activity, but the relationship is logarithmic rather than linear.

Therefore:

**pH change and H+ concentration change must not be treated as interchangeable linear quantities.**

### Compartments matter

Exercise acid–base state differs among:

- myoplasm/intracellular skeletal muscle;
- muscle interstitium;
- venous blood draining active muscle;
- arterial/systemic blood.

Direct human work shows that interstitial pH can fall during graded exercise and can recover with kinetics different from venous/systemic blood.

Human microdialysis work (PMID **11744771**) reported resting interstitial pH near 7.38 and intensity-related decreases to approximately 7.04 at the highest tested workload, with the lowest values occurring around 1 min after exercise.

Human ^31P-MRS studies show much larger intracellular pH excursions during severe local exercise than are seen in systemic arterial blood.

Canonical rule:

**muscle pHi, interstitial pH and blood pH are related but non-equivalent compartments.**

Confidence: **HIGH**.

---

## 3. H+ accumulation during intense exercise

PASS at content level.

During high-intensity exercise, intramuscular H+ can accumulate sufficiently for pHi to fall substantially.

The 2025 critical review PMID **40088272** summarizes whole-muscle exercise pHi changes from approximately 7.1–7.0 at rest toward roughly 6.9–6.3 in severe exercise, with larger acidification in fast-twitch fibres than slow-twitch fibres.

Classic human ^31P-MRS work has directly observed:

- falling pHi during intense contractions;
- simultaneous PCr depletion and Pi accumulation;
- subsequent pH recovery after exercise.

The magnitude of pH change varies with:

- exercise intensity and duration;
- recruited fibre populations;
- glycolytic/oxidative balance;
- perfusion and metabolite transport;
- starting acid–base state;
- protocol and muscle group.

Canonical rule:

**high-intensity exercise can produce substantial local intracellular and interstitial acidification, but there is no single universal pH response for every task or muscle.**

Confidence: **HIGH**.

---

## 4. “Acidosis” needs a mechanism, not a one-word cause

The project rejects the primitive chain:

`glycolysis → lactic acid → H+ → fatigue`

because it collapses several distinct biochemical and physicochemical processes.

Two complementary explanatory frames are useful.

### 4.1 Reaction/proton-bookkeeping frame

Robergs et al. (PMID **15308499**) emphasized that:

- ATP hydrolysis can release H+ under physiological conditions;
- ATP turnover rises enormously during intense contraction;
- non-mitochondrial ATP supply can support high ATP turnover while proton disposal/consumption fails to fully match proton generation;
- the LDH reaction written as `pyruvate + NADH + H+ ↔ lactate + NAD+` consumes H+ in the forward lactate-forming direction;
- therefore lactate formation itself should not be described as dissociation of “lactic acid” that directly releases the exercise H+ load.

PCr breakdown through creatine kinase also participates in proton handling and can consume H+ while buffering ATP.

### 4.2 Physicochemical / strong-ion frame

The simple reaction-bookkeeping story is not the only valid description of acid–base chemistry.

The physicochemical approach treats H+ and HCO3− as dependent variables constrained by:

- PCO2;
- strong-ion difference (SID);
- total weak acids/bases.

Lindinger (PMID **8541798**) described exercise-related intracellular H+ changes as arising from changes in SID, weak-acid pools and PCO2, including contributions from lactate anion, K+ shifts, Pi/creatine and other ions.

Human exercise data (PMID **28914359**) showed that both Henderson–Hasselbalch and modified physicochemical analyses describe exercise acidosis, while the physicochemical model identifies strong ions and non-volatile weak acids as additional contributors beyond lactate.

### Qualification boundary

It is therefore too simplistic to teach either:

- “lactate production releases the H+ that causes acidosis”; or
- “lactate is chemically irrelevant to acid–base state.”

Lactate formation via LDH does not itself require a “lactic acid dissociation” mechanism, yet lactate anion accumulation and associated strong-ion changes can be part of the physicochemical state accompanying acidosis.

Canonical rule:

**exercise acidosis is an integrated consequence of very high ATP turnover plus acid–base/ion chemistry, buffering, transport and oxidative/respiratory handling; no single metabolite is a complete causal explanation.**

Confidence: **HIGH for multi-process model / MODERATE for assigning exact fractional causation to individual reactions across all exercise conditions**.

---

## 5. ATP hydrolysis and proton balance

At an applied level, the reaction:

`ATP + H2O → ADP + Pi + H+`

is a useful representation of proton-generating ATP hydrolysis under relevant intracellular conditions.

However, net cellular proton balance cannot be inferred from that one equation alone because ATP resynthesis pathways themselves consume or generate acid/base equivalents.

Relevant coupled processes include:

- ATP hydrolysis by myosin ATPase and other ATPases;
- creatine kinase / PCr buffering;
- glycolytic reactions;
- LDH;
- mitochondrial oxidative phosphorylation;
- CO2/HCO3− chemistry;
- membrane transport.

The key trainer-level distinction is:

**ATP turnover is upstream of much of the acid–base disturbance, while the measured pH is the net result after coupled reactions, buffers and transport act.**

The project therefore avoids a universal statement such as “one ATP hydrolyzed = one retained H+ in muscle.”

Confidence: **HIGH conceptual boundary**.

---

## 6. Lactate formation is not “lactic acid production”

BIO-04 established lactate ≠ H+.

BIO-05 strengthens this boundary.

The forward LDH reaction:

`pyruvate + NADH + H+ → lactate + NAD+`

consumes a proton in stoichiometric reaction notation.

Direct human sodium-lactate infusion during resistance exercise (PMID **32830552**) produced:

- much higher blood lactate;
- only a small difference in intramuscular lactate;
- **no difference in intramuscular pH**;
- higher blood pH in the lactate condition.

Therefore a high lactate concentration is not sufficient evidence for a corresponding low muscle pH.

Canonical rule:

**lactate can covary strongly with acidosis during intense exercise without being numerically or chemically identical to the H+ load.**

Confidence: **HIGH**.

---

## 7. Intracellular buffering

PASS at content level.

A chemical buffer reduces the change in free H+ / pH for a given acid/base perturbation.

It does **not** make protons disappear.

Major intracellular buffering contributors in skeletal muscle include:

- protein histidyl groups;
- inorganic phosphate species;
- carnosine;
- bicarbonate/CO2 chemistry;
- phosphagen/creatine chemistry, especially PCr-linked proton handling;
- other weak-acid/base groups.

Human in-vivo ^31P-MRS work (PMID **8457430**) estimated effective muscle buffering capacity in the range of roughly 20–30 mmol/L per pH unit in its analytical framework.

Biopsy/titration studies show that measured buffer capacity is method-dependent and training-state dependent.

### Important distinction

`buffering capacity` ≠ `proton efflux capacity`.

A muscle can resist a pH fall through chemical buffering and/or restore pH through membrane transport and metabolic consumption.

These are not the same mechanism.

Canonical rule:

**intracellular buffering temporarily limits pH change; it must be separated from transmembrane H+ equivalent transport and from systemic acid removal.**

Confidence: **HIGH**.

---

## 8. Carnosine as one intracellular buffer, not “the buffer”

Carnosine is a histidine-containing dipeptide present in human skeletal muscle and can accept protons in the exercise pH range.

Review PMID **31083045** supports intracellular pH buffering as an important physiological role of carnosine while also noting possible roles in:

- Ca2+ handling;
- myofilament sensitivity;
- reactive-species chemistry.

Classic human muscle data (PMID **1735411**) estimated that normal carnosine may account for only a minority of total muscle buffering on average, with wide interindividual variation.

Resistance-trained bodybuilders in PMID **16287364** had substantially higher muscle carnosine than untrained controls, but the study cannot establish that resistance training alone caused the difference because diet/supplements and other factors were not controlled.

Canonical rule:

**carnosine contributes to muscle buffering, but total intracellular buffering is distributed across multiple buffers and mechanisms.**

Confidence: **HIGH for buffering role / MODERATE for exact percentage contribution in an individual**.

Supplementation prescription remains NUT.

---

## 9. Intracellular buffering can adapt

Human studies support plasticity of muscle buffer capacity.

Sprint-training study PMID **3957514** reported increased muscle buffer capacity after eight weeks of sprint training.

Cross-sectional human data PMID **3968004** found higher deproteinized muscle buffer capacity in sprint/rowing athletes than marathoners or untrained controls.

Acute high-intensity exercise can itself transiently affect measured membrane MCT abundance and in-vitro buffer capacity (PMID **17082373**), so timing of biopsy/testing matters when interpreting “training adaptation.”

Canonical rule:

**buffer capacity is trainable/measurable but assay timing and method can materially affect the observed value.**

Confidence: **MODERATE-HIGH**.

Detailed chronic adaptation ownership remains downstream physiology/training synthesis.

---

## 10. Extracellular buffering

PASS at content level.

Once acid/base equivalents leave contracting muscle, the extracellular/interstitial/blood compartments participate in pH control.

Relevant extracellular buffering/handling includes:

- bicarbonate/CO2;
- hemoglobin and plasma proteins;
- phosphate and other weak buffers;
- blood flow and distribution;
- pulmonary CO2 elimination.

The extracellular compartment is not merely a passive “dump.”

It creates gradients that influence transmembrane transport.

Increasing extracellular bicarbonate/pH can alter the gradient for H+ equivalent efflux from muscle and can attenuate intracellular acidification in some human experiments.

Intravenous bicarbonate study PMID **12027853** increased blood bicarbonate and attenuated the fall in muscle pHi during rhythmic handgrip.

Canonical rule:

**extracellular buffering supports continued acid/base equivalent transfer from active muscle and helps stabilize systemic pH; its effect on muscle depends on gradients, transport and task context.**

Confidence: **HIGH mechanism / MODERATE-HIGH task-specific performance translation**.

---

## 11. Bicarbonate system

The core reversible system is:

`CO2 + H2O ↔ H2CO3 ↔ H+ + HCO3−`

Carbonic anhydrases accelerate the CO2/HCO3− interconversion.

At an applied level:

- HCO3− can accept H+;
- the resulting CO2 can be transported and eliminated via ventilation;
- bicarbonate concentration and PCO2 therefore interact with extracellular pH;
- bicarbonate transporters also contribute to cellular pH regulation.

The Henderson–Hasselbalch relationship is useful descriptively for the CO2/HCO3− system, but it is not a complete mechanistic account of all exercise acid–base changes.

The physicochemical/Stewart framework adds strong-ion and weak-acid effects.

Canonical rule:

**the bicarbonate system is a major extracellular acid–base mechanism, but exercise pH regulation cannot be reduced to bicarbonate alone.**

Confidence: **HIGH**.

---

## 12. Sodium bicarbonate experiments are mechanistic probes, not proof of one universal limiter

Manipulating extracellular bicarbonate provides useful causal evidence that extracellular acid–base conditions can influence high-intensity exercise.

Relevant human evidence:

- PMID **6094373**: pre-exercise bicarbonate increased blood pH/HCO3− and improved repeated supramaximal exercise in that protocol;
- PMID **22941193**: bicarbonate increased total repetitions in a hypertrophy-style resistance protocol;
- PMID **11932569**: bicarbonate altered blood/muscle acid–base state during intense endurance cycling but **did not improve performance**;
- 2026 systematic review/meta-analysis PMID **42781544** found a small average benefit for high-intensity intermittent exercise, but the prediction interval crossed zero and certainty was low/very low for several outcomes.

This means:

**acid–base manipulation can matter, but performance limitation is task- and individual-dependent rather than universally “buffer-limited.”**

No dosing recommendation is retained in BIO-05.

Confidence: **HIGH for non-universality**.

---

## 13. Transport of H+ equivalents across skeletal-muscle membranes

PASS at content level.

Human skeletal muscle pH regulation uses multiple membrane systems.

### 13.1 MCT1 / MCT4

MCTs transport monocarboxylates such as lactate together with H+.

They contribute to:

- lactate exchange;
- H+ equivalent movement;
- intracellular pH regulation.

As established in BIO-04, they are gradient-dependent and not irreversible one-way valves.

### 13.2 Na+/H+ exchanger 1 (NHE1)

NHE1 extrudes H+ in exchange for Na+ and contributes to pHi recovery/regulation.

### 13.3 Na+/HCO3− cotransport

Human skeletal muscle expresses bicarbonate cotransporter proteins.

PMID **15329059** demonstrated NBC proteins in human skeletal muscle and provided functional evidence for bicarbonate-dependent pH recovery in muscle membrane preparations.

### 13.4 Carbonic anhydrase

Carbonic anhydrase isoforms facilitate rapid CO2/HCO3− interconversion and support pH regulation/transport coupling.

Human supramaximal-exercise work PMID **17289910** linked MCT/NHE/carbonic-anhydrase-related protein content and dynamic buffer capacity with acid–base regulation and work capacity.

Canonical rule:

**muscle H+ equivalent transport is multi-pathway: MCT lactate/H+ cotransport, NHE1 and bicarbonate-dependent transport all contribute; no single transporter is the universal rate-limiter.**

Confidence: **HIGH for pathway existence / MODERATE for exact fractional contribution in vivo by task**.

---

## 14. Proton efflux is pH- and state-dependent

Direct human ^31P-MRS studies demonstrate that post-exercise proton efflux is dynamic rather than constant.

PMID **9367287** found:

- proton efflux declined during recovery;
- efflux had a significant dependence on muscle pH;
- both pH-dependent and pH-independent components were inferred.

Earlier human work PMID **8457430** likewise estimated substantial pH-dependent proton efflux during recovery.

Important boundary:

**pH recovery kinetics cannot be converted into one fixed “H+ clearance half-time” valid for every exercise bout.**

Confidence: **HIGH**.

---

## 15. pH recovery ≠ lactate disappearance

BIO-04 already separated lactate appearance/disappearance from concentration.

BIO-05 adds:

- lactate can be transported with H+ via MCTs;
- but proton efflux also occurs through non-MCT pathways;
- proton buffering changes free H+ without necessarily changing total lactate;
- PCr resynthesis during recovery changes proton balance;
- oxidative metabolism and ventilation contribute to recovery;
- blood and muscle compartments recover with different kinetics.

PMID **9367287** concluded lactate/H+ cotransport could account for only a small part of initial recovery proton efflux in its human calf-muscle analysis.

Canonical rule:

**“lactate clearance” and “muscle pH recovery” are related processes but are not the same variable or the same kinetics.**

Confidence: **HIGH**.

---

## 16. Acid–base state and fatigue: reject both extremes

PASS at content level.

Two extreme claims are both rejected:

1. “H+ is the sole cause of fatigue.”
2. “Acidosis has no meaningful effect on force/power.”

Current 2025 review PMID **40088272** integrates evidence across muscle preparations and human exercise.

Key boundary:

- moderate acidosis around pHi ~6.7–6.6 at physiological temperatures may have relatively small effects on force/power in non-fatigued muscle;
- more severe acidosis around pHi ~6.5–6.2 can reduce maximal force, shortening velocity and peak power;
- fatigue occurs alongside changes in Pi/H2PO4−, K+, Ca2+ handling, glycogen, ROS and other factors;
- relationship between pH and performance depends on exercise regime.

Therefore:

**severe acidosis can contribute to fatigue, especially in fast/glycolytic fibres during intense work, but it is neither necessary nor sufficient to explain all fatigue.**

Confidence: **HIGH**.

---

## 17. H+, Pi and myofilament effects are coupled

Acid–base effects cannot be interpreted in isolation from phosphate chemistry.

The 2025 review PMID **40088272** highlights effects of:

- H+;
- diprotonated inorganic phosphate (H2PO4−);

on:

- cross-bridge activity;
- Ca2+ sensitivity;
- myosin ATPase activity.

Classic human ^31P-NMR work PMID **3403417** found strong relationships among force, pH and H2PO4−, while experimental comparisons suggested phosphate species may explain fatigue better than pH alone in some protocols.

Canonical rule:

**when high-intensity force falls, H+ and Pi-related disturbances should be treated as interacting parts of a broader fatigue state rather than isolated single-cause variables.**

Confidence: **HIGH for multi-factor boundary / MODERATE for exact causal partition in vivo**.

---

## 18. Acid–base state can also have protective interactions

Acidosis is not uniformly detrimental to every part of muscle function.

The 2025 review PMID **40088272** notes evidence that extracellular acidosis/lactate can attenuate some detrimental effects of high extracellular K+ on membrane excitability/action potentials in experimental muscle.

Thus the net performance effect of acidification reflects competing actions:

- negative myofilament/Ca2+ effects at sufficiently low pH;
- possible protective membrane-excitability interactions;
- afferent/sensory effects;
- coexisting Pi/K+/metabolic disturbances.

Canonical rule:

**acid–base effects are mechanism- and state-dependent; “lower pH = proportionally lower performance” is not a valid universal model.**

Confidence: **HIGH boundary**.

---

## 19. “Burning” during hard exercise is not a lactate sensor

PASS at content level.

The exercise “burn” / discomfort is a sensory phenomenon, not a direct chemical assay.

Human experimental metabolite infusion (PMID **24142455**) found:

- individual infusion of protons, lactate or ATP at tested doses did not reproduce the full fatigue/pain sensation;
- combinations of protons + lactate + ATP at exercise-like concentrations evoked fatigue sensations and, at higher levels, pain/ache.

The likely sensory pathways involve metabolite-sensitive receptors and group III/IV muscle afferents.

Review PMID **25458423** and later literature support group III/IV afferents as contributors to:

- cardiovascular/ventilatory reflexes;
- perception/feedback;
- central motor-output limitations under some conditions.

The 2025 acid–base review PMID **40088272** specifically states raised extracellular H+/lactate can contribute to perceived exertion/fatigue sensations through group III/IV afferents.

Canonical rule:

**exercise burn/discomfort emerges from interacting chemical, mechanical and neural signals; it cannot be attributed to lactate alone.**

Confidence: **HIGH**.

---

## 20. Lactate can participate in sensory signaling without being “the acid”

Rejecting the lactate-causes-acidosis myth does not mean lactate is physiologically inert.

Lactate can:

- cotransport with H+ via MCTs;
- participate with H+ and ATP in afferent activation;
- change alongside exercise intensity and metabolic flux.

Therefore:

**“lactate is not the acid” and “lactate can participate in a metabolite signal” are simultaneously true.**

This distinction prevents the opposite error of replacing one myth with another.

Confidence: **HIGH**.

---

## 21. Blood acid–base ≠ muscle acid–base

Systemic blood pH is tightly regulated and generally changes much less than local active-muscle pHi.

Human bicarbonate studies show blood alkalosis can alter muscle pH gradients, but one blood pH value does not directly specify:

- pHi in all active fibres;
- interstitial pH;
- H+ production;
- buffer occupancy;
- local transporter flux.

PMID **12027853** showed bicarbonate increased arterial/venous pH and attenuated but did not eliminate muscle pHi decline.

PMID **32830552** showed higher blood pH during sodium-lactate infusion with no difference in intramuscular pH.

Canonical rule:

**blood pH/HCO3− are systemic measurements, not direct numerical proxies for local muscle pHi.**

Confidence: **HIGH**.

---

## 22. Fibre-type heterogeneity matters

The 2025 review PMID **40088272** summarizes larger exercise-induced pH falls in fast-twitch fibres than slow-twitch fibres.

This is consistent with:

- higher glycolytic flux in recruited fast fibres;
- different metabolic/transport characteristics;
- heterogeneous fibre recruitment during high-intensity exercise.

Therefore whole-muscle biopsy or MRS averages can hide substantial fibre-level differences.

Canonical rule:

**“muscle pH” is often an average over heterogeneous fibres; local fast-fibre acidosis can be more severe than the whole-muscle mean.**

Confidence: **MODERATE-HIGH**.

---

## 23. Recovery kinetics: no universal “acid cleared in X minutes”

Post-exercise pH recovery depends on:

- end-exercise pH;
- PCr resynthesis;
- oxidative capacity;
- perfusion;
- membrane transport;
- lactate/H+ gradients;
- ventilation;
- exercise mode and muscle mass.

Human interstitial pH study PMID **11744771** reported an average recovery half-time around 5 min in its specific graded exercise protocol.

Human intracellular MRS studies report different kinetics depending on muscle/protocol.

Canonical rule:

**do not convert one study’s pH-recovery half-time into a universal rest prescription.**

Exact set-rest programming remains BIO-12/PRO.

Confidence: **HIGH**.

---

## 24. Practical resistance-training boundary

For resistance exercise, the qualification-level model is:

`high ATP turnover + PCr/glycolytic flux`
→
`Pi / ion / acid-base disturbance`
+
`buffering + transport`
+
`local perfusion/reperfusion`
→
`task-specific force/power/perception changes`.

This means:

- shorter rests can begin the next set before full restoration of several metabolic variables;
- local pH is only one of those variables;
- blood lactate is not a direct measure of pHi;
- “burn” is not a quantitative fatigue metric;
- restoring pH alone does not guarantee full performance recovery;
- performance can improve with extracellular alkalosis in some repeated/high-intensity tasks, but not universally.

No exact rest interval is prescribed here.

Confidence: **HIGH framework / downstream programming deferred**.

---

## 25. Important non-equivalences

1. H+ concentration ≠ pH as a linear quantity.
2. Muscle pHi ≠ interstitial pH.
3. Muscle pHi ≠ blood pH.
4. Lactate concentration ≠ H+ concentration.
5. Lactate formation ≠ “lactic acid dissociation.”
6. Lactate production ≠ proton-production rate.
7. ATP hydrolysis reaction ≠ net cellular H+ retention by itself.
8. Intracellular buffering ≠ proton efflux.
9. Proton efflux ≠ lactate disappearance.
10. Bicarbonate buffering ≠ total acid–base regulation.
11. Blood HCO3− ≠ muscle buffer capacity.
12. Higher buffering capacity ≠ guaranteed performance improvement in every task.
13. Lower pH ≠ sole cause of fatigue.
14. Normal blood pH ≠ normal pH in every active muscle fibre.
15. Exercise “burn” ≠ lactate concentration.
16. MCT transport ≠ total H+ transport.
17. pH recovery ≠ complete metabolic recovery.
18. One pH threshold ≠ universal task-failure threshold.

---

## 26. Terminology rules

### Acidosis
A state/process involving increased H+ activity / reduced pH in the specified compartment.

Always name the compartment when possible.

### Acidification
A fall in pH / rise in H+ activity over time.

### Buffer
A chemical system that resists pH change by reversible binding/release of H+.

### Buffer capacity
Quantitative resistance to pH change under a defined measurement method.

### H+ equivalent transport
Movement of acid/base equivalents across membranes through systems such as:

- MCT lactate/H+ cotransport;
- NHE1;
- bicarbonate transport.

### Extracellular alkalosis
Higher extracellular pH/HCO3− state, experimentally inducible with bicarbonate.

It does not imply all muscle fibres become alkalotic.

### “Lactic acidosis”
Allowed only as a historical/clinical shorthand if explicitly separated from the false claim that lactate formation itself directly releases the causal H+ load.

For mechanistic work, prefer:

**exercise-induced metabolic acidosis / muscle acidification**.

---

## 27. Sources checked

### Current/recent high-priority

1. **Lactic acidosis: implications for human exercise performance.** 2025. PMID **40088272**. Current critical synthesis of lactate, acidosis, force/power, Pi and afferent effects.
2. **Delaying task failure in high-intensity exercise: a Pi-afferent-effort framework for targeted sports nutrition.** 2026. PMID **42530633**. Hypothesis-generating current integration; used only for multi-factor fatigue context, not as settled causal architecture.
3. **Effects of acute or short-term oral sodium bicarbonate supplementation on high-intensity intermittent exercise performance and physiological responses in team-sport athletes: a systematic review and meta-analysis.** 2026. PMID **42781544**. Current task-specific extracellular-buffering evidence.
4. **Common questions and misconceptions of sodium bicarbonate as an ergogenic aid: what does the science really show?** 2026. PMID **42696273**. Current buffering-intervention context; no dosing retained here.
5. **Enhancing exercise performance and recovery through sodium bicarbonate supplementation: introducing the ingestion recovery framework.** 2024. PMID **39177769**. Acid–base/recovery context.
6. **Does sodium bicarbonate based extra-cellular buffering support reduce high intensity exercise-induced fatigue and enhance short-term recovery...?** 2024. PMID **38188117**.
7. **The effect of pre-exercise alkalosis on lactate/pH regulation and mitochondrial respiration following sprint-interval exercise in humans.** 2023. PMID **36776968**.
8. **Proton-Sensing G Protein-Coupled Receptors and Their Potential Role in Exercise Regulation of Arterial Function.** 2025. PMID **40563452**. Used only as receptor context, not as authority for lactate-acidosis causation.

### Core acid–base mechanism / human physiology

9. Robergs RA, Ghiasvand F, Parker D. **Biochemistry of exercise-induced metabolic acidosis.** 2004. PMID **15308499**.
10. Kemp G et al. **Explaining pH change in exercising muscle: lactic acid, proton consumption, and buffering vs. strong ion difference.** 2006. PMID **16760335**. Debate/qualification source.
11. Lindinger MI. **Origins of [H+] changes in exercising skeletal muscle.** 1995. PMID **8541798**.
12. Kowalchuk JM, Scheuermann BW. **Acid-base balance: origin of plasma [H+] during exercise.** 1995. PMID **8541797**.
13. **Changes in acid-base and ion balance during exercise in normoxia and normobaric hypoxia.** Human randomized crossover. PMID **28914359**.
14. Kemp GJ et al. **The production, buffering and efflux of protons in human skeletal muscle during exercise and recovery.** PMID **8457430**.
15. Kemp GJ et al. **Proton efflux in human skeletal muscle during recovery from exercise.** PMID **9367287**.
16. **Interstitial pH in human skeletal muscle during and after dynamic graded exercise.** PMID **11744771**.
17. **Intracellular pH and bicarbonate concentration in human muscle during recovery from exercise.** PMID **29868**.

### pH regulation / membrane transport

18. Juel C. **Regulation of pH in human skeletal muscle: adaptations to physical activity.** PMID **18267000**.
19. **Expression of Na+/HCO3− co-transporter proteins (NBCs) in rat and human skeletal muscle.** PMID **15329059**.
20. **Importance of pH regulation and lactate/H+ transport capacity for work production during supramaximal exercise in humans.** PMID **17289910**.
21. **High-intensity exercise acutely decreases the membrane content of MCT1 and MCT4 and buffer capacity in human skeletal muscle.** PMID **17082373**.
22. **Distinct protein and mRNA kinetics of skeletal muscle proton transporters following exercise...** PMID **27689626**.
23. **Effects of acute and chronic exercise on sarcolemmal MCT1 and MCT4 contents in human skeletal muscles.** PMID **22012699**.

### Intracellular buffering / carnosine

24. **The Physiological Roles of Carnosine and β-Alanine in Exercising Human Skeletal Muscle.** PMID **31083045**.
25. **Carnosine and anserine concentrations in the quadriceps femoris muscle of healthy humans.** PMID **1735411**.
26. **The carnosine content of vastus lateralis is elevated in resistance-trained bodybuilders.** PMID **16287364**.
27. **Buffering capacity of deproteinized human vastus lateralis muscle.** PMID **3968004**.
28. **Effects of eight weeks of bicycle ergometer sprint training on human muscle buffer capacity.** PMID **3957514**.

### Extracellular buffering / causal manipulation

29. **Bicarbonate attenuates intracellular acidosis.** PMID **12027853**.
30. **Acid-base balance during repeated bouts of exercise: influence of HCO3.** PMID **6094373**.
31. **Effect of sodium bicarbonate on muscle metabolism during intense endurance cycling.** PMID **11932569**.
32. **Sodium bicarbonate supplementation improves hypertrophy-type resistance exercise performance.** PMID **22941193**.
33. ISSN position stand: **sodium bicarbonate and exercise performance.** PMID **34503527**. Used for broad evidence context only; prescription remains NUT.

### Fatigue / sensation / lactate separation

34. **Relationship of muscular fatigue to pH and diprotonated Pi in humans: a 31P-NMR study.** PMID **3403417**.
35. **Elevated plasma lactate levels via exogenous lactate infusion do not alter resistance exercise-induced signaling or protein synthesis in human skeletal muscle.** PMID **32830552**.
36. **Exogenously applied muscle metabolites synergistically evoke sensations of muscle fatigue and pain in human subjects.** PMID **24142455**.
37. **Autonomic responses to exercise: group III/IV muscle afferents and fatigue.** PMID **25458423**.
38. **On the Influence of Group III/IV Muscle Afferent Feedback on Endurance Exercise Performance.** PMID **32658041**.

---

## 28. Established content-level findings

### HIGH

1. High-intensity exercise can substantially lower skeletal-muscle pHi.
2. Muscle, interstitial and blood pH are distinct compartmental measurements.
3. Lactate concentration is not H+ concentration.
4. Lactate formation through LDH is not correctly described as simple lactic-acid dissociation releasing the exercise proton load.
5. Exercise acidification reflects integrated ATP turnover, ion/weak-acid chemistry, buffering, transport and oxidative/respiratory handling.
6. Intracellular buffering and H+ equivalent efflux are different mechanisms.
7. Muscle pH regulation involves MCT lactate/H+ cotransport, NHE1 and bicarbonate-dependent transport.
8. Bicarbonate/CO2 is a major extracellular acid–base system.
9. Increasing extracellular bicarbonate can modify blood/muscle acid–base gradients.
10. Severe intracellular acidosis can contribute to loss of force/power.
11. Acidosis is not the sole cause of fatigue.
12. Lactate alone does not explain exercise burn/pain.
13. Exercise metabolite sensations arise from combinations of chemical signals and afferent processing.
14. pH recovery and lactate disappearance are not the same kinetics.
15. No universal muscle-pH failure threshold or recovery time is retained.

### MODERATE-HIGH

16. Muscle buffer capacity can adapt to high-intensity training.
17. Carnosine contributes meaningfully to intracellular buffering but is only one component.
18. Fibre-type differences can produce substantial within-muscle pH heterogeneity.
19. Extracellular alkalosis can improve some repeated/high-intensity tasks but the response is task/individual dependent.

### MODERATE / CONTEXT DEPENDENT

20. Exact fraction of exercise acidification attributable to specific biochemical reactions vs strong-ion/weak-acid shifts across different tasks.
21. Exact quantitative contribution of MCT vs NHE1 vs bicarbonate transport during a given exercise bout.
22. Exact contribution of acidosis vs Pi/K+/Ca2+/other factors to task failure in vivo.
23. Exact percentage of total human muscle buffering supplied by carnosine in a given individual.

### NOT RETAINED AS UNIVERSAL RULE

24. Lactate = acid.
25. Lactate production = proton-production rate.
26. “Anaerobic glycolysis” = tissue anoxia.
27. One blood lactate value = one muscle pH.
28. H+ = sole fatigue cause.
29. Acidosis = irrelevant to fatigue.
30. Bicarbonate = universal performance enhancer.
31. MCTs = only proton transport pathway.
32. Exercise burn = lactate accumulation.
33. pH recovery = lactate clearance.
34. One pH value = universal failure threshold.

---

## 29. Evidence-ledger candidates

1. Exercise-induced muscle acidification is an integrated acid–base state arising from ATP turnover, strong-ion/weak-acid chemistry, buffering, transport and oxidative/respiratory handling; lactate concentration is not equivalent to H+ concentration.
2. Lactate formation through LDH does not support the model “lactic acid dissociation directly releases the exercise proton load”; lactate can nevertheless participate in physicochemical acid–base state and H+-coupled transport.
3. Intracellular muscle buffering is distributed across proteins/histidyl groups, phosphate species, carnosine, bicarbonate/CO2 and phosphagen-linked chemistry; buffering must be separated from proton efflux.
4. Extracellular buffering, especially bicarbonate/CO2 together with blood proteins/hemoglobin and perfusion, supports systemic pH regulation and transmembrane acid/base gradients.
5. Skeletal-muscle H+ equivalent transport uses multiple pathways including MCT lactate/H+ cotransport, NHE1 and bicarbonate-dependent transport; no single transporter is a universal rate-limiter.
6. Severe intracellular acidosis can contribute to force/power fatigue, but fatigue is multifactorial and interacts with Pi/H2PO4−, K+, Ca2+ handling and other disturbances.
7. Muscle/interstitial/blood pH are non-equivalent compartments, and blood lactate or blood pH cannot be substituted numerically for local muscle pHi.
8. Exercise burn/fatigue sensation is produced by interacting metabolite and afferent signals; lactate alone is not the causal sensory variable.
9. Muscle pH recovery and lactate disappearance are related but non-equivalent recovery processes; no universal pH recovery time is retained.

---

## 30. Exact Section 5 coverage audit — PASS-01 content level

| # | Exact Section 5 item | PASS-01 result | Main boundary |
|---|---|---|---|
| 1 | H+ accumulation | **PASS at content level** | Local pHi can fall substantially; compartment/task dependent |
| 2 | Sources of acidosis during intense exercise | **PASS at content level** | Integrated ATP-turnover + physicochemical + transport model; not lactic-acid dissociation |
| 3 | Intracellular buffering | **PASS at content level** | Multiple buffers; buffering ≠ efflux |
| 4 | Extracellular buffering | **PASS at content level** | Bicarbonate/proteins/perfusion support gradients and systemic pH |
| 5 | Bicarbonate system | **PASS at content level** | CO2/HCO3− major extracellular system; not whole acid–base story |
| 6 | Transport of H+ equivalents | **PASS at content level** | MCT + NHE1 + bicarbonate transport; pH/state dependent |
| 7 | Acid–base state and fatigue | **PASS at content level** | Severe acidosis contributes; not sole fatigue mechanism |
| 8 | Do not attribute all “burn” to lactate | **PASS at content level** | Combined metabolites + group III/IV afferent processing |

Exact Area 05 Section 5 coverage = **8/8 at content/scope level**.

---

## 31. Unresolved gaps for independent closure audit

PASS-02 must independently challenge:

1. exact wording around ATP hydrolysis as a proton source so reaction bookkeeping is not mistaken for full acid–base causation;
2. exact treatment of lactate anion within strong-ion/physicochemical analysis without reviving “lactic acid” mythology;
3. bicarbonate vs non-bicarbonate buffer hierarchy in intracellular vs extracellular compartments;
4. whether PCr/CK should be called a “buffer” here or retained as linked proton/energy buffering with explicit wording;
5. exact role and relative importance of carnosine in normal human muscle;
6. exact MCT/NHE1/NBC contribution under active exercise vs recovery;
7. whether carbonic anhydrase needs a canonical claim or only supporting context;
8. exact pH range where acidosis materially impairs force/power at physiological temperature;
9. interaction of H+ with Pi/H2PO4− and K+;
10. blood-vs-muscle pH interpretation in resistance exercise specifically;
11. distinction between sensory burn, pain, perceived effort and contractile fatigue;
12. pH-recovery vs lactate-disappearance terminology;
13. scope boundary: supplementation dose/timing remains NUT;
14. scope boundary: exact work:rest prescription remains BIO-12/PRO;
15. no universal “critical pH” should survive unless supported across protocols.

---

## 32. PASS decision

**BIO-05/PASS-01 = CONTENT PASS COMPLETE — AUDIT/SYNTHESIS PENDING.**

No content-level blocker was found for the 8 exact Section 5 items.

BIO-05 is **not CLOSED_FOR_PRACTICE**.

No canonical BIO-05 finding should be created before an independent PASS-02 closure audit.

No sodium-bicarbonate or beta-alanine prescription is authorized from this PASS.

---

## 33. Next pass

**BIO-05/PASS-02 — Closure audit and synthesis.**

Required tasks:

1. independently re-check all 8 exact Section 5 items;
2. audit biochemical proton-source wording against physicochemical acid–base models;
3. audit intracellular/extracellular buffering boundaries;
4. audit bicarbonate system and membrane-transport wording;
5. challenge severe-acidosis fatigue claims at physiological temperature;
6. challenge lactate/H+/“burn” sensory wording;
7. check scope leakage into NUT, BIO-11, BIO-12, TST and PRO;
8. if all closure criteria pass:
   - create canonical `BIO-05_acid_base_buffering.md`;
   - finalize BIO05 evidence-ledger rows;
   - mark BIO-05 `CLOSED_FOR_PRACTICE v2.0`;
   - advance state to BIO-06 only after closure.

STOP after PASS-01 state update.
