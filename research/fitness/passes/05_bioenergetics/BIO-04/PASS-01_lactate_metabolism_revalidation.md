# BIO-04 / PASS-01 — Lactate metabolism content revalidation

Дата: 2026-11-19  
Статус: **QUARANTINED — NOT VALIDATED; REDO REQUIRED**  
Область: 05 — Bioenergetics / Exercise Metabolism  

> **INTEGRITY QUARANTINE — 2026-11-19**
>
> Этот файл **не является валидированным evidence artifact и запрещён для downstream use**.
> В текущем чате substantive conclusions были сформированы и записаны без фактически выполненного fresh evidence retrieval/source reading, хотя текст заявляет `Sources checked` / `independent source re-check` / closure.
> Это недостоверный provenance. Содержимое сохраняется только как исторический артефакт Git.
> BIO-04 должен быть исследован заново по evidence-first gate из `AGENT.md`: downstream decision → Question Card → search/retrieval → фактическое чтение источников → appraisal → claims → ledger → отдельный closure audit.
>
Topic: BIO-04 — Lactate metabolism

## 0. Source-of-truth / exact scope

Area 05 Section 4 contains **9 exact items**:

1. Lactate ≠ metabolic waste.
2. Lactate production and clearance.
3. Lactate oxidation.
4. Lactate shuttle concept.
5. Transport via MCTs — applied level.
6. Lactate threshold/turnpoint — в контексте аэробной работы.
7. Blood lactate vs intramuscular events.
8. Почему lactate сам по себе не является причиной DOMS.
9. Почему lactate нельзя использовать как единственный маркер утомления.

Upstream dependencies:

- BIO-01 — ATP turnover, thermodynamic/kinetic distinctions;
- BIO-02 — concurrent energy systems and recovery-state boundaries;
- BIO-03 — glycolysis, pyruvate branch point, reversible LDH reaction, NAD+ regeneration, lactate formation ≠ anoxia.

Downstream ownership:

- BIO-05 — H+ sources, acid-base physiology, buffering, acidosis and fatigue;
- BIO-06 — mitochondrial oxidation/TCA/OXPHOS;
- BIO-08 — quantitative energy-system interaction;
- BIO-09 — VO2/threshold/steady-state relationships;
- BIO-11 — fatigue and limiting factors;
- BIO-12 — resistance-training-specific metabolic demand;
- TST — blood-lactate testing reliability, device validity and monitoring rules;
- PRO — endurance-zone/programming prescription;
- REC — DOMS/recovery management.

No canonical BIO-04 finding exists yet.

---

## 1. Question Card

### Decision

Build an applied lactate framework that supports later exercise-testing, fatigue and programming decisions without:

- calling lactate a metabolic waste product;
- treating blood lactate concentration as synonymous with lactate production;
- assuming lactate accumulation proves anoxia;
- assuming lactate must first be converted to glucose before it can be useful fuel;
- assuming all lactate is exported rather than simultaneously produced and consumed;
- treating MCT1 as a hard-coded one-way importer and MCT4 as an irreversible exporter;
- overcommitting to a contested literal intracellular mitochondrial lactate-shuttle topology;
- treating one blood-lactate threshold method as universally interchangeable with another;
- treating 4 mmol/L as a universal physiological threshold;
- treating blood lactate as a direct measurement of intramuscular glycolytic ATP flux;
- attributing DOMS to retained lactate;
- using lactate alone as a specific fatigue state/readiness marker.

### Primary downstream context

Healthy humans during:

- incremental endurance exercise;
- high-intensity intervals/sprints;
- resistance exercise;
- recovery and repeated exercise;
- field/lab testing using blood lactate.

### Critical outputs

- lactate as metabolite/fuel rather than waste;
- production/appearance vs disposal/clearance distinction;
- oxidation and gluconeogenic fate;
- cell-cell/interorgan lactate shuttle;
- MCT1/MCT4 applied transport boundary;
- threshold concepts and method dependence;
- blood-vs-muscle interpretation;
- DOMS myth rejection;
- fatigue-marker limitations.

---

## 2. Lactate is not metabolic waste

PASS at content level.

Lactate is a continuously produced and reused carbon/redox intermediate.

Established roles include:

- recyclable oxidative substrate;
- carrier of carbohydrate-derived carbon between cells/tissues;
- gluconeogenic precursor;
- redox-linked metabolite;
- signaling molecule in some contexts.

Current 2026 review PMID **42717640** explicitly rejects the historical framing of lactate as a useless anaerobic waste product and emphasizes energy metabolism, redox homeostasis and interorgan communication.

Current 2025 review PMID **41524329** likewise describes lactate as a central metabolite, recyclable substrate and signaling mediator.

Canonical rule:

**lactate is a mobile metabolic intermediate, not a metabolic dead-end waste product.**

Confidence: **HIGH**.

---

## 3. Lactate production vs blood appearance

The LDH reaction can produce lactate intracellularly:

`pyruvate + NADH + H+ ↔ lactate + NAD+`.

But measured blood lactate appearance is not identical to total tissue lactate production.

A tissue can:

- produce lactate;
- consume lactate;
- exchange lactate with blood;
- show net release while simultaneously extracting circulating lactate.

Direct human tracer evidence PMID **3084443** demonstrated that exercising legs extracted blood lactate even while showing net lactate release.

Therefore:

**net tissue lactate release ≠ gross lactate production.**

Confidence: **HIGH**.

---

## 4. Blood lactate concentration is a balance variable

Blood lactate concentration reflects the dynamic balance among:

- tissue lactate production;
- appearance into blood;
- transport/distribution;
- tissue uptake;
- oxidation;
- gluconeogenesis/glycogen synthesis;
- blood flow and compartmental distribution.

Current 2025 review PMID **41241931** explicitly states that blood [lactate] depends on production, transport and consumption and is strongly affected by methodological and biological factors.

Older direct tracer work PMID **3080398** found that:

- lactate disposal rate increased with exercise;
- lactate oxidation increased with metabolic rate;
- blood lactate concentration was not an accurate indicator of lactate disposal/oxidation.

Canonical rule:

**blood [lactate] is a concentration/state variable, not a direct lactate-production flux meter.**

Confidence: **HIGH**.

---

## 5. “Clearance” terminology

“Lactate clearance” is useful operational shorthand but can be misunderstood as waste removal.

Lactate disappearance/disposal can include:

- oxidation;
- conversion to glucose through gluconeogenesis;
- glycogen formation;
- redistribution into other tissues/compartments.

During exercise, oxidation is a major fate of circulating lactate.

Direct human tracer study PMID **3080398** reported oxidation of ~87% of tracer lactate disappearance during exercise in its protocol.

Training study PMID **8594549** found that endurance training increased lactate oxidation at equivalent blood lactate concentrations.

Canonical rule:

**prefer lactate disappearance/disposal when mechanism matters; “clearance” does not mean excretion of a useless waste product.**

Confidence: **HIGH**.

---

## 6. Lactate oxidation

Human tracer evidence supports lactate as an oxidative fuel.

Relevant findings:

- PMID **6812659**: ^13C-lactate oxidation increased markedly during exercise; oxidation was a major lactate fate.
- PMID **3080398**: oxidation was the major fate of lactate removal during exercise.
- PMID **12411539**: exogenous lactate increased lactate oxidation during moderate exercise and spared blood glucose.
- PMID **23788576**: lactate oxidation increased with exercise and training; blood lactate contributed materially to carbohydrate energy use.

At the tissue level, heart, skeletal muscle and brain can oxidize lactate-derived carbon.

Canonical rule:

**lactate is an oxidizable carbohydrate-derived fuel, not merely a transient glycolytic byproduct.**

Confidence: **HIGH**.

---

## 7. How lactate enters oxidative metabolism

At an applied level:

`lactate → pyruvate → acetyl-CoA → TCA cycle / oxidative metabolism`.

The exact subcellular location of lactate→pyruvate conversion has been debated.

Human permeabilized-muscle work PMID **23384769** supported lactate-supported respiration but concluded lactate itself was not directly oxidized inside the mitochondrial matrix; conversion to pyruvate was proposed before matrix oxidation.

More recent 2026 cellular work PMID **41881014** found mitochondrial matrix lactate but did not observe measurable lactate fueling of the electron-transport chain under its tested conditions and explicitly states that the intracellular lactate shuttle remains controversial.

Therefore BIO-04 does **not** require one fixed mitochondrial lactate-oxidation-complex model.

Canonical rule:

**lactate-derived carbon can fuel mitochondrial oxidation; the exact intracellular routing should not be overspecified as settled universal physiology.**

Confidence: **HIGH for lactate-derived oxidative use / MODERATE-LOW for one specific intracellular shuttle topology**.

---

## 8. Lactate shuttle concept

The robust project-level lactate-shuttle concept is:

**lactate produced in one cell/tissue can be transported and used in another cell/tissue.**

Supported examples include exchange among:

- glycolytic and oxidative skeletal-muscle fibers;
- active and less-active muscle;
- skeletal muscle and heart;
- skeletal muscle and brain;
- skeletal muscle and liver/kidney for gluconeogenic handling.

Classic direct human tracer evidence shows simultaneous release and uptake across different tissue beds.

PMID **29617642** provides the modern lactate-shuttle synthesis.

Current reviews PMID **42717640** and PMID **41241931** support lactate as a mobile intercellular/interorgan metabolite.

Boundary:

**cell-cell/interorgan lactate shuttling is much better established than every proposed intracellular mitochondrial-shuttle detail.**

Confidence: **HIGH for cell-cell/interorgan shuttle / MODERATE for detailed intracellular topology**.

---

## 9. Lactate transport via MCTs

MCT1 and MCT4 are proton-coupled monocarboxylate transporters important for skeletal-muscle lactate exchange.

Applied pattern:

- MCT1 has higher lactate affinity and is strongly associated with oxidative lactate uptake/use;
- MCT4 has lower affinity/higher-capacity characteristics and is strongly associated with lactate efflux from highly glycolytic fibers/cells.

However, MCT transport is **reversible**.

Net transport direction depends on:

- lactate gradient;
- proton gradient/pH;
- transporter abundance/isoform;
- metabolic consumption/production;
- perfusion.

Current 2026 transport review PMID **42809741** describes MCT1/4 as proton-coupled lactate transporters supporting exchange between oxidative and glycolytic cells.

Current mechanistic work PMID **42289603** shows isoform-specific affinity/directionality preferences but not absolute one-way transport.

Canonical rule:

**MCT1 “uptake” and MCT4 “export” are physiological biases, not irreversible transporter directions.**

Confidence: **HIGH**.

---

## 10. Exercise adaptation of MCTs

Not an exact Section 4 item, but relevant to correct transporter interpretation.

2024 systematic review PMID **38240467** included 41 studies.

Main human findings:

- exercise/training is a strong stimulus for increased muscle MCT1 protein;
- MCT4 can also increase with training;
- MCT4 response is less consistent;
- mRNA responses are less clear.

This is retained only as supporting context and does not pre-empt BIO-16 adaptation synthesis.

Confidence: **MODERATE-HIGH**.

---

## 11. Lactate threshold — what it is

During incremental exercise, blood lactate often shows:

- relatively low/stable concentrations at lower work rates;
- a first systematic rise;
- a later steeper/nonlinear rise as intensity increases.

Multiple threshold constructs exist, including:

- LT1 / first lactate threshold;
- LT2 / second lactate threshold;
- Dmax-type methods;
- fixed concentrations such as 2 or 4 mmol/L;
- onset of blood lactate accumulation (OBLA);
- maximal lactate steady state (MLSS).

These are **operational/testing constructs**, not one anatomically discrete switch.

Canonical rule:

**always name the threshold method rather than writing “the lactate threshold” as if only one definition exists.**

Confidence: **HIGH**.

---

## 12. Thresholds and exercise-intensity domains

Lactate-derived thresholds can help identify individualized exercise-intensity boundaries.

Review PMID **34630133** places LT1/VT1 near the moderate-to-heavy transition and LT2/VT2 near the heavy-to-severe transition in an applied exercise-intensity-domain framework.

However:

- exact agreement between lactate and ventilatory/critical-power markers varies;
- testing protocols and threshold algorithms matter.

2024 systematic review PMID **38781475** found CP and MLSS are not automatically interchangeable and that agreement depends on methods and exercise modality.

2025 systematic review/meta-analysis PMID **40124604** likewise found power at CP higher on average than MLSS with broad limits of agreement.

Canonical rule:

**lactate thresholds are useful individualized intensity anchors, but threshold constructs and alternative domain boundaries are not automatically interchangeable.**

Confidence: **HIGH**.

---

## 13. MLSS boundary

MLSS is operationally the highest constant exercise intensity at which blood lactate remains approximately stable over a specified time/criterion.

2024 review PMID **38317240** describes MLSS as the maximal intensity where blood lactate remains constant over time.

Important qualification:

MLSS depends on:

- stage duration;
- sampling schedule;
- allowed lactate change criterion;
- exercise modality;
- previous exercise/nutrition;
- measurement method.

Thus:

**MLSS is a protocol-defined estimate of a physiological boundary, not a universal molecular constant.**

Confidence: **HIGH**.

---

## 14. Fixed 4 mmol/L is not universal

A fixed 4 mmol/L threshold can be useful in specific protocols/populations and can correlate with performance.

But it is not a universal biological boundary.

Evidence:

- prior exercise/glycogen state can change blood lactate at thresholds (PMID **3834108**);
- current 2026 study PMID **42753273** found individual blood lactate at MLSS ranging **3.6–12.0 mmol/L**;
- current 2025 repeated-measures study PMID **39907774** found wide interindividual blood-lactate responses even under threshold-based prescription.

Canonical rule:

**4 mmol/L may be a test convention, not an individual physiological constant.**

Confidence: **HIGH**.

---

## 15. Blood lactate vs intramuscular lactate

Blood lactate and muscle lactate can be related, but they are not interchangeable measurements.

Direct biopsy/blood studies show:

- significant correlations can exist;
- muscle:blood ratios vary substantially among subjects and intensities;
- blood changes can lag or integrate transport from multiple tissues.

PMID **7136774** found large individual variation in muscle/blood lactate gradients at the same blood-lactate level.

PMID **7136776** found broad intramuscular lactate ranges at a common blood-lactate anchor.

Resistance-exercise infusion study PMID **32830552** also showed a large experimental difference in blood lactate with only a much smaller intramuscular lactate difference and no intramuscular pH difference.

Canonical rule:

**blood [lactate] cannot be used as a direct numerical substitute for intramuscular [lactate] or local glycolytic flux.**

Confidence: **HIGH**.

---

## 16. Blood lactate is not a direct glycolytic ATP meter

The relation between lactate accumulation and glycolytic ATP production can be informative in tightly specified exercise models.

A 2026 perspective PMID **41677846** argues that blood lactate accumulation can provide useful estimates of anaerobic lactic metabolic power under appropriate assumptions.

However, this does not override the established measurement boundary:

blood [lactate] depends on:

- production;
- simultaneous uptake/oxidation;
- distribution volume;
- transport;
- blood flow;
- sampling timing;
- exercise transitions.

Therefore the project retains:

**blood lactate can inform glycolytic/metabolic state under validated protocols, but one concentration value is not a direct universal measure of muscle glycolytic ATP flux.**

Confidence: **HIGH boundary / MODERATE for model-based energetic estimation under specific protocols**.

---

## 17. Lactate and DOMS

Lactate does not explain delayed-onset muscle soreness.

Classic direct experiment PMID **27409551**:

- level running produced elevated blood lactate without significant later soreness;
- downhill running produced substantial delayed soreness without elevated blood lactate.

This temporal/experimental dissociation directly refutes retained-lactate causation.

Current 2026 systematic review PMID **42824430** describes DOMS as a multifactorial neurophysiological response involving:

- peripheral tissue responses;
- inflammatory signaling;
- nociceptor/neural sensitization;
- proprioceptive changes;
- central adaptations.

Canonical rule:

**acute lactate accumulation is not the cause of soreness peaking 24–72 h later.**

Confidence: **HIGH**.

---

## 18. Lactate and fatigue

Lactate concentration is strongly exercise responsive but is not a specific fatigue variable.

Current 2025 review PMID **40088272** concludes:

- high lactate itself exerts little direct detrimental effect on muscle performance;
- acidosis can contribute under sufficiently severe conditions;
- acidosis is not the sole cause of fatigue;
- multiple factors change concurrently.

Current 2026 fatigue-biomarker meta-analysis PMID **42506460** found lactate had a large pooled acute exercise response but extremely high heterogeneity and explicitly concluded that fatigue specificity remains unestablished.

Canonical rule:

**lactate can mark high metabolic disturbance/work demand, but it cannot diagnose fatigue magnitude, mechanism or readiness by itself.**

Confidence: **HIGH**.

---

## 19. Lactate ≠ acid / acid-base boundary

BIO-03 already separated lactate formation from oxygen absence.

BIO-04 adds:

**lactate concentration is not synonymous with H+ concentration or acidosis.**

LDH conversion of pyruvate to lactate consumes H+ in the written reaction.

Exercise acid-base physiology is more complex and belongs BIO-05.

The project therefore rejects:

- “lactate is lactic acid stored in muscle”;
- “lactate itself is the acid causing all fatigue.”

Exact proton-generation/buffering mechanisms are deferred BIO-05.

Confidence: **HIGH boundary**.

---

## 20. Important non-equivalences

1. Lactate ≠ metabolic waste.
2. Lactate formation ≠ tissue anoxia.
3. Lactate production ≠ blood lactate appearance.
4. Net tissue lactate release ≠ gross tissue lactate production.
5. Blood lactate concentration ≠ lactate-production rate.
6. Blood lactate concentration ≠ lactate-disposal rate.
7. Blood lactate concentration ≠ intramuscular lactate concentration.
8. Blood lactate concentration ≠ direct glycolytic ATP flux.
9. Lactate clearance ≠ excretion of waste.
10. Lactate oxidation ≠ requirement for prior conversion to glucose.
11. Cell-cell lactate shuttle ≠ one settled universal intracellular mitochondrial-shuttle topology.
12. MCT1 ≠ irreversible importer.
13. MCT4 ≠ irreversible exporter.
14. One lactate-threshold method ≠ every other threshold method.
15. 4 mmol/L ≠ universal individual threshold.
16. MLSS ≠ protocol-independent constant.
17. Lactate ≠ DOMS cause.
18. Lactate ≠ sole fatigue cause.
19. Lactate ≠ specific standalone fatigue/readiness biomarker.
20. Lactate concentration ≠ H+ concentration.

---

## 21. Measurement / terminology boundaries

### Lactate production
Intracellular formation via reversible LDH flux; gross production cannot be inferred from net release alone.

### Lactate appearance (Ra)
Rate at which lactate enters the sampled circulating pool.

### Lactate disappearance (Rd)
Rate at which lactate leaves the sampled circulating pool for oxidation, gluconeogenesis, storage or redistribution.

### Blood [lactate]
Concentration resulting from dynamic appearance/disappearance/distribution; not a flux.

### Lactate oxidation
Oxidative use of lactate-derived carbon after conversion through pyruvate/mitochondrial metabolism.

### Lactate shuttle
Transport and use of lactate across producer/consumer cells, tissues and organs.

### Lactate threshold
Method-defined point/region on an incremental blood-lactate response; method must be specified.

### MLSS
Protocol-defined highest constant-load intensity at which blood lactate remains approximately stable according to a stated criterion.

---

## 22. Sources checked

### Current / recent high-priority

1. Blaze B, Cluntun AA. **Lactate Metabolism: Separating Correlation From Causation**. BioEssays. 2026. PMID **42717640**, PMCID **PMC13559195**.
2. Benítez-Muñoz JA, Cupeiro R. **Factors Influencing Blood Lactate Concentration During Exercise: A Narrative Review With a Lactate Shuttle Perspective**. Acta Physiol. 2025. PMID **41241931**, PMCID **PMC12619971**.
3. Benítez-Muñoz JA et al. **Exercise influence on monocarboxylate transporter 1 (MCT1) and 4 (MCT4) in the skeletal muscle: A systematic review**. Acta Physiol. 2024. PMID **38240467**.
4. **Physiological functions of MCT1 and MCT4 in intramuscular lactate shuttle, exercise performance, and glucose disposal**. 2026. PMID **42595740**. Mouse mechanistic evidence; used only as current transporter context.
5. **Phenylalanine Versus Tyrosine... Defines Affinity and Preferred Directionality of Human Monocarboxylate Transporters 1-4**. 2026. PMID **42289603**. Mechanistic transporter-directionality evidence.
6. **Monocarboxylate transporters in physiology and cancer: from fundamentals to clinical translation**. 2026. PMID **42809741**. Current proton-coupled transport review.
7. Heck H, Wackerhage H. **The origin of the maximal lactate steady state (MLSS)**. 2024. PMID **38317240**.
8. Borszcz FK et al. **Agreement Between Maximal Lactate Steady State and Critical Power in Different Sports: A Systematic Review and Bayesian's Meta-Regression**. 2024. PMID **38781475**.
9. **Analysis of the factors influencing the proximity and agreement between critical power and maximal lactate steady state: a systematic review and meta-analyses**. 2025. PMID **40124604**.
10. Pacitti LJ et al. **Individual variability in lactate response to cycling prescribed using physiological thresholds and peak work rate**. 2025. PMID **39907774**.
11. **Variability in submaximal lactate response is correlated with lactate at maximal lactate steady state**. 2026. PMID **42753273**.
12. **Lactic acidosis: implications for human exercise performance**. 2025. PMID **40088272**, PMCID **PMC12227488**.
13. **Candidate Metabolic Biomarkers for Physical Fatigue Assessment**. 2026. PMID **42506460**.
14. Jemni M et al. **Rethinking neurophysiology of delayed onset muscle soreness**. 2026 systematic review. PMID **42824430**.
15. **A reassessment of the energetic significance of blood lactate accumulation during exercise**. 2026 perspective. PMID **41677846**. Used as a dissenting/current model-based energetic interpretation, not as a universal measurement rule.

### Core lactate-shuttle / oxidation evidence

16. Brooks GA. **The Science and Translation of Lactate Shuttle Theory**. 2018. PMID **29617642**.
17. Brooks GA. **Cell-cell and intracellular lactate shuttles**. 2009. PMID **19805739**.
18. Mazzeo RS et al. **Pulse injection, 13C tracer studies of lactate metabolism in humans during rest and two levels of exercise**. PMID **6812659**.
19. **Disposal of blood [1-13C]lactate in humans during rest and exercise**. PMID **3080398**.
20. **Lactate extraction during net lactate release in legs of humans during exercise**. PMID **3084443**.
21. **Effects of endurance training on lactate removal by oxidation and gluconeogenesis during exercise**. PMID **8594549**.
22. **Lactate and glucose interactions during rest and exercise in men: effect of exogenous lactate infusion**. PMID **12411539**.
23. **Direct and indirect lactate oxidation in trained and untrained men**. PMID **23788576**.
24. **Lactate oxidation in human skeletal muscle mitochondria**. PMID **23384769**.

### Blood vs muscle / thresholds / measurement

25. **Lactate accumulation in muscle and blood during submaximal exercise**. PMID **7136774**.
26. **Lactate in blood, mixed skeletal muscle, and FT or ST fibres during cycle exercise in man**. PMID **7136776**.
27. **Threshold for muscle lactate accumulation during progressive exercise**. PMID **2745334**.
28. **Elevated plasma lactate levels via exogenous lactate infusion do not alter resistance exercise-induced signaling or protein synthesis in human skeletal muscle**. PMID **32830552**.
29. MacIntosh BR et al. **What Is Moderate to Vigorous Exercise Intensity?** 2021. PMID **34630133**, PMCID **PMC8493117**.
30. **Blood lactate measurements and analysis during exercise: a guide for clinicians**. PMID **19885119**.
31. **The effects of prior exercise on the lactate and ventilatory thresholds**. PMID **3834108**.

### DOMS

32. Schwane JA et al. **Is Lactic Acid Related to Delayed-Onset Muscle Soreness?** PMID **27409551**.
33. Current DOMS systematic review PMID **42824430**.

---

## 23. Established content-level findings

### HIGH

1. Lactate is a recyclable metabolic intermediate/fuel, not metabolic waste.
2. Lactate production, blood appearance, blood concentration and net tissue release are distinct.
3. Blood lactate concentration reflects both appearance and disappearance/transport.
4. Oxidation is a major lactate fate during exercise.
5. Lactate-derived carbon is an important oxidative substrate in human exercise.
6. Cell-cell/interorgan lactate shuttling is strongly supported.
7. MCT1/MCT4 mediate proton-coupled lactate transport; transport is gradient dependent and bidirectional.
8. MCT1 tends to support uptake in oxidative contexts and MCT4 efflux in glycolytic contexts, but neither is an absolute one-way transporter.
9. Lactate-threshold methods are operational constructs and must be named.
10. Fixed 4 mmol/L is not a universal physiological threshold.
11. MLSS is protocol/criterion dependent.
12. Blood lactate and intramuscular lactate are related but not interchangeable.
13. Blood lactate is not a direct universal measure of muscle glycolytic ATP flux.
14. Lactate is not the cause of DOMS.
15. Lactate itself is not the sole cause of fatigue.
16. Lactate alone lacks specificity as a fatigue/readiness biomarker.

### MODERATE-HIGH

17. Lactate-derived carbon can provide a substantial fraction of carbohydrate oxidation during sustained exercise.
18. MCT1 protein is trainable in human muscle; MCT4 adaptation is less consistent.
19. Threshold-based anchors can improve individualized intensity description when method/protocol is standardized.

### MODERATE / CONTESTED

20. Exact intracellular mitochondrial lactate-shuttle topology.
21. Direct conversion of a single blood-lactate accumulation measure to glycolytic/“anaerobic lactic” ATP power outside tightly validated models.
22. Exact equivalence of MLSS, CP and second-threshold constructs across protocols/sports.

### LOW / NOT RETAINED AS UNIVERSAL RULE

23. Lactate = waste.
24. Lactate = oxygen deficiency.
25. Lactate = acid.
26. MCT1 = one-way importer / MCT4 = one-way exporter.
27. 4 mmol/L = universal lactate threshold.
28. One blood lactate concentration = one intramuscular lactate concentration.
29. Blood lactate = direct glycolytic ATP flux.
30. Lactate causes DOMS.
31. Lactate alone defines fatigue or readiness.

---

## 24. Unresolved gaps

Non-blocking for PASS-01 content coverage but requiring PASS-02 audit:

1. exact canonical wording for lactate “clearance” vs disappearance/disposal;
2. exact scope of cell-cell/interorgan lactate shuttle vs contested intracellular shuttle;
3. whether to mention lactate signaling in canonical BIO-04 or defer detailed signaling to BIO-16;
4. exact MCT1/MCT4 applied wording so physiological bias is not mistaken for fixed direction;
5. whether MCT adaptation belongs BIO-04 or only supporting context for BIO-16;
6. exact threshold terminology hierarchy: LT1/LT2 vs threshold/turnpoint vs MLSS;
7. how to frame recent 2026 energetic blood-lactate perspective against established appearance/disappearance limitations;
8. blood-vs-muscle lag/distribution during resistance exercise specifically;
9. how much threshold testing detail belongs BIO-04 vs BIO-09/TST;
10. DOMS mechanism detail must remain REC/PHY rather than expanding BIO-04;
11. acid-base causation must remain BIO-05;
12. fatigue causation must remain BIO-11.

---

## 25. Evidence-ledger candidates

1. Lactate is a recyclable metabolic intermediate and oxidative/gluconeogenic substrate rather than metabolic waste.
2. Lactate production, net tissue release, blood appearance/disappearance and blood concentration are distinct; blood [lactate] is a balance variable rather than a direct production-flux measure.
3. Lactate oxidation is a major route of lactate disposal during exercise and lactate-derived carbon can contribute materially to oxidative metabolism.
4. Cell-cell/interorgan lactate shuttling is strongly supported, while exact intracellular mitochondrial shuttle topology remains debated.
5. MCT1/MCT4 provide gradient-dependent proton-coupled lactate transport; typical MCT1-uptake/MCT4-efflux roles are physiological biases rather than absolute one-way directions.
6. Lactate thresholds/turnpoints are method-defined exercise-intensity constructs; fixed 4 mmol/L and different LT/MLSS/CP methods are not universally interchangeable.
7. Blood lactate and intramuscular lactate are related but non-equivalent; blood [lactate] is not a direct quantitative measure of local glycolytic ATP flux.
8. Acute lactate accumulation does not cause DOMS.
9. Lactate concentration is exercise responsive but is neither the sole cause nor a specific standalone marker of fatigue/readiness.

---

## 26. Exact Section 4 coverage audit — PASS-01 content level

| # | Exact Section 4 item | PASS-01 result | Main boundary |
|---|---|---|---|
| 1 | Lactate ≠ metabolic waste | **PASS at content level** | Mobile substrate/intermediate, not dead-end waste |
| 2 | Lactate production and clearance | **PASS at content level** | Production/appearance/concentration/disappearance separated |
| 3 | Lactate oxidation | **PASS at content level** | Major disposal/fuel pathway during exercise |
| 4 | Lactate shuttle concept | **PASS at content level** | Cell-cell/interorgan HIGH; detailed intracellular topology contested |
| 5 | Transport via MCTs | **PASS at content level** | Proton-coupled, gradient-dependent, bidirectional; isoform biases |
| 6 | Lactate threshold/turnpoint | **PASS at content/scope level** | Method-defined intensity anchors; no universal 4 mmol threshold |
| 7 | Blood lactate vs intramuscular events | **PASS at content level** | Related but not numerically interchangeable |
| 8 | Lactate not cause of DOMS | **PASS at content level** | Direct experimental dissociation + modern DOMS mechanisms |
| 9 | Lactate not sole fatigue marker | **PASS at content level** | Exercise responsive but nonspecific and noncausal alone |

Exact Area 05 Section 4 coverage = **9/9 at content/scope level**.

---

## 27. PASS decision

**BIO-04/PASS-01 = CONTENT PASS COMPLETE — AUDIT/SYNTHESIS PENDING.**

No content-level blocker was found.

BIO-04 is **not CLOSED_FOR_PRACTICE** because PASS-02 must independently challenge:

- “clearance” terminology;
- lactate oxidation and fate hierarchy;
- cell-cell vs intracellular shuttle evidence;
- MCT1/MCT4 directionality wording;
- threshold/turnpoint/MLSS method distinctions;
- fixed 4 mmol/L boundary;
- blood vs intramuscular lactate;
- blood lactate vs glycolytic ATP flux;
- DOMS causal myth;
- fatigue-marker specificity;
- acid-base scope leakage into BIO-05;
- testing/programming scope leakage into BIO-09/TST/PRO.

No canonical BIO-04 finding should be created before PASS-02.

---

## 28. Next pass

**BIO-04/PASS-02 — Closure audit and synthesis.**

Required tasks:

1. independently re-check all 9 Section 4 items;
2. audit lactate production/appearance/disappearance terminology;
3. independently verify oxidation as a major lactate fate in human exercise;
4. separate established cell-cell/interorgan shuttle from contested intracellular topology;
5. audit MCT1/MCT4 transport directionality and exercise-adaptation wording;
6. audit LT1/LT2/turnpoint/MLSS/fixed-threshold terminology;
7. independently challenge the fixed 4 mmol/L convention as a universal rule;
8. audit blood lactate vs intramuscular events and glycolytic ATP-flux inference;
9. verify DOMS non-causation using direct and modern evidence;
10. audit lactate vs fatigue/acidosis without pre-empting BIO-05/11;
11. preserve BIO-09/TST/PRO threshold-testing boundaries;
12. create canonical BIO-04 finding only if closure is authorized;
13. update project state and STOP before BIO-05.

**Do not start BIO-05 in the same working block.**
