# BIO-04 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-19  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 05 — Bioenergetics / Exercise Metabolism  
Topic: BIO-04 — Lactate metabolism

## 0. Purpose

Независимо перепроверить PASS-01 и решить, достаточно ли BIO-04 закрывает Area 05 Section 4 для downstream BIO-05/08/09/11/12, TST, PRO и REC без:

- трактовки lactate как metabolic waste;
- смешения production, net release, appearance, disappearance и blood concentration;
- использования слова “clearance” как удаления бесполезного отхода;
- отрицания lactate oxidation как важного fuel pathway;
- превращения lactate shuttle в одну универсальную intracellular topology;
- трактовки MCT1/MCT4 как жестко однонаправленных;
- использования одного lactate-threshold метода как универсального;
- трактовки 4 mmol/L как индивидуальной физиологической константы;
- смешения blood lactate и intramuscular events;
- превращения blood lactate в прямой universal glycolytic ATP meter;
- объяснения DOMS через retained lactate;
- использования lactate как единственного fatigue/readiness marker;
- преждевременного углубления в acid-base causation (BIO-05) или threshold testing/programming (BIO-09/TST/PRO).

---

## 1. Materials audited

1. `areas/05_bioenergetics.md`, Section 4 — 9 exact items;
2. `PASS-01_lactate_metabolism_revalidation.md`;
3. `EVIDENCE_LEDGER.md`, BIO04-01…BIO04-09;
4. canonical BIO-03 finding;
5. independent source re-check:
   - current lactate review PMID **42717640**;
   - current blood-lactate review PMID **41241931**;
   - MCT systematic review PMID **38240467**;
   - current MCT directionality work PMID **42289603**;
   - MLSS review PMID **38317240**;
   - CP-vs-MLSS systematic reviews/meta-analyses PMIDs **38781475**, **40124604**;
   - current interindividual MLSS-lactate study PMID **42753273**;
   - direct human tracer lactate-disposal study PMID **3080398**;
   - direct human simultaneous lactate extraction/release study PMID **3084443**;
   - current intracellular-shuttle mechanistic study PMID **41881014**;
   - current lactate energetic perspective PMID **41677846**;
   - direct DOMS experiment PMID **27409551**;
   - current DOMS systematic review PMID **42824430**;
   - current acidosis/fatigue review PMID **40088272**;
   - current fatigue-biomarker meta-analysis PMID **42506460**.

No closure-critical contradiction was found.

---

## 2. Exact area-map audit — 9/9

1. Lactate ≠ metabolic waste — **PASS AS RECYCLABLE METABOLIC INTERMEDIATE/FUEL**.
2. Lactate production and clearance — **PASS; PRODUCTION/APPEARANCE/DISAPPEARANCE/CONCENTRATION SEPARATED**.
3. Lactate oxidation — **PASS AS MAJOR EXERCISE DISPOSAL/FUEL PATHWAY**.
4. Lactate shuttle concept — **PASS FOR CELL-CELL/INTERORGAN; DETAILED INTRACELLULAR TOPOLOGY NOT UNIVERSALLY CLOSED**.
5. Transport via MCTs — **PASS; PROTON-COUPLED, GRADIENT-DEPENDENT, DIRECTION BIASES NOT IRREVERSIBLE**.
6. Lactate threshold/turnpoint — **PASS AS METHOD-DEFINED INTENSITY CONSTRUCTS, NO UNIVERSAL 4 mmol/L RULE**.
7. Blood lactate vs intramuscular events — **PASS AS RELATED BUT NON-EQUIVALENT VARIABLES**.
8. Lactate not cause of DOMS — **PASS**.
9. Lactate not sole fatigue marker — **PASS AS NONSPECIFIC CONTEXTUAL METABOLIC MEASURE**.

Result: **9/9 PASS.**

---

## 3. Lactate-as-waste audit

PASS.

Current 2026 review PMID 42717640 explicitly rejects the historical lactate-waste model and frames lactate as:

- central intermediary in energy metabolism;
- redox-linked metabolite;
- interorgan communication substrate/mediator.

Human tracer evidence independently establishes active lactate turnover and oxidation.

Therefore:

**lactate is a mobile/recyclable metabolite, not a metabolic dead-end waste product.**

No blocker.

---

## 4. Production vs appearance vs concentration audit

PASS — CRITICAL MEASUREMENT BOUNDARY.

PMID 3084443 showed that exercising legs can:

- extract circulating lactate;
- while simultaneously showing net lactate release.

Thus:

**net lactate release cannot equal gross local lactate production.**

Current review PMID 41241931 confirms blood lactate concentration depends on:

- production;
- transport;
- consumption;
- methodological and biological factors.

Canonical rule:

**blood [lactate] is a concentration/state variable emerging from fluxes; it is not itself a production flux.**

No blocker.

---

## 5. “Clearance” terminology audit

PASS WITH TERMINOLOGICAL REFINEMENT.

“Clearance” is acceptable operational shorthand if explicitly defined.

Mechanistically, lactate disappearance/disposal includes:

- oxidation;
- gluconeogenesis;
- glycogen synthesis;
- redistribution/uptake into tissues.

PMID 3080398 showed:

- lactate disposal increased with metabolic rate;
- lactate oxidation increased with exercise;
- ~87% of tracer lactate disappearance was oxidized during exercise in that specific protocol;
- blood lactate concentration was not an accurate indicator of disposal/oxidation.

Canonical rule:

**when mechanism matters, prefer disappearance/disposal over “clearance”; lactate is metabolically used, not excreted as useless waste.**

No blocker.

---

## 6. Lactate oxidation audit

PASS.

Direct human tracer evidence demonstrates lactate as an oxidative fuel.

PMID 3080398 supports oxidation as a major lactate fate during exercise.

This is consistent with broader tracer literature showing lactate turnover/oxidation rises with exercise intensity and training.

Canonical rule:

**lactate-derived carbon can materially support oxidative metabolism during exercise.**

No universal percentage is retained.

No blocker.

---

## 7. Lactate-shuttle audit

PASS WITH EVIDENCE-TIER SEPARATION.

### Strongly retained

Cell-cell/interorgan lactate shuttling:

- producer and consumer cells/tissues can exchange lactate;
- working muscle can both release and extract lactate;
- less glycolytic/oxidative tissues can consume circulating lactate.

This is directly compatible with tracer data.

### Not hard-coded

One universal detailed intracellular mitochondrial lactate-shuttle topology.

Current 2026 work PMID 41881014:

- detected a mitochondrial-matrix lactate pool;
- found transport-related behavior;
- did **not** find measurable ETC fueling by lactate under tested conditions;
- explicitly states that the intracellular lactate shuttle remains controversial.

Canonical rule:

**cell-cell/interorgan shuttle = HIGH confidence; one exact intracellular mitochondrial route = contested/mechanism-specific.**

No blocker.

---

## 8. MCT transport audit

PASS.

MCT1/MCT4 mediate proton-coupled monocarboxylate transport.

Current 2026 directionality study PMID 42289603 demonstrates:

- isoform-specific affinity differences;
- differences in preferred transport directionality;
- transport behavior affected by substrate-binding properties.

This supports a nuanced model:

- MCT1 commonly favors uptake in oxidative contexts because of high affinity and cellular gradients;
- MCT4 commonly favors export in highly glycolytic contexts because of lower affinity/high-capacity behavior;
- direction is not an irreversible property independent of gradients/state.

Canonical rule:

**MCT1 uptake / MCT4 export are physiological tendencies, not one-way valves.**

No blocker.

---

## 9. MCT adaptation audit

PASS AS SUPPORTING CONTEXT ONLY.

2024 systematic review PMID 38240467 included 41 studies and found:

- exercise/training is a strong stimulus for increased human-muscle MCT1 protein;
- MCT4 can increase but response is less consistent;
- mRNA findings are less clear.

This does not need a separate canonical BIO-04 claim beyond transporter interpretation.

Detailed adaptation synthesis remains BIO-16.

No blocker.

---

## 10. Lactate-threshold terminology audit

PASS.

There is no single universal method named “the lactate threshold.”

Project-relevant constructs include:

- LT1 / first threshold;
- LT2 / second threshold;
- turnpoint methods;
- Dmax-type methods;
- fixed concentration methods;
- OBLA;
- MLSS.

These methods differ in:

- protocol;
- sampling;
- mathematical criterion;
- physiological boundary approximated.

Canonical rule:

**always name the threshold method and protocol when using lactate to anchor intensity.**

No blocker.

---

## 11. MLSS audit

PASS.

PMID 38317240 defines MLSS as the highest constant-load intensity at which blood lactate remains approximately stable according to a protocol-defined criterion.

The classic operational criterion described:

- repeated ~30-min constant-load bouts;
- blood lactate sampled during exercise;
- no >1 mmol/L increase over the final 20 min.

Therefore:

**MLSS is a protocol-defined test construct approximating a physiological exercise-intensity boundary, not a molecular constant.**

No blocker.

---

## 12. Fixed 4 mmol/L audit

PASS — UNIVERSAL RULE REJECTED.

Historical 4 mmol/L conventions can be useful in some contexts.

They are not individual physiological constants.

Current 2026 study PMID 42753273:

- n=29;
- repeated MLSS testing;
- individual blood lactate at MLSS ranged **3.6–12.0 mmol/L**;
- interindividual variability was repeatable.

Therefore:

**4 mmol/L cannot be retained as a universal individual lactate threshold.**

No blocker.

---

## 13. LT/MLSS/CP interchangeability audit

PASS — INTERCHANGEABILITY REJECTED.

2024 systematic review PMID 38781475:

- test design, modality and criterion affect CP-vs-MLSS differences;
- traditional MLSS and CP do not automatically represent equivalent intensities.

2025 meta-analysis PMID 40124604:

- power at CP was on average ~12.4 W higher than MLSS;
- limits of agreement were wide;
- high individual variability can compromise interchangeability.

Therefore:

**threshold/domain markers can be related without being numerically interchangeable.**

No blocker.

---

## 14. Blood vs intramuscular lactate audit

PASS.

PASS-01 direct biopsy/blood evidence supports:

- correlation at group level in some protocols;
- large muscle:blood gradients;
- substantial interindividual variation;
- different temporal/compartment responses.

Current blood-lactate review further supports strong transport/distribution/sampling dependence.

Canonical rule:

**blood [lactate] must not be substituted numerically for intramuscular [lactate].**

No blocker.

---

## 15. Blood lactate vs glycolytic ATP-flux audit

PASS WITH MODEL-BASED EXCEPTION.

Current 2026 perspective PMID 41677846 argues that blood lactate accumulation can provide valuable energetic estimates of anaerobic-lactic metabolic power under defined theoretical/model assumptions.

This does not invalidate the broader measurement boundary because:

- concentration ≠ production flux;
- appearance/disappearance occur simultaneously;
- distribution/washout matter;
- sampling time and exercise transition matter.

Therefore:

**blood lactate can support model-based glycolytic energetic estimates under validated assumptions, but one blood [lactate] value is not a universal direct measure of local muscle glycolytic ATP flux.**

No blocker.

---

## 16. DOMS audit

PASS — CAUSAL MYTH REJECTED.

PMID 27409551 directly dissociated lactate from DOMS:

- level running produced elevated blood lactate without significant delayed soreness;
- downhill running produced substantial DOMS without elevated lactate.

Current 2026 systematic review PMID 42824430 describes DOMS as multifactorial and involving:

- peripheral tissue responses;
- inflammatory signaling;
- neural sensitization;
- proprioceptive changes;
- central adaptations.

Canonical rule:

**acute exercise lactate accumulation does not cause DOMS.**

Detailed DOMS mechanisms remain REC/PHY.

No blocker.

---

## 17. Lactate vs fatigue audit

PASS.

2025 review PMID 40088272 reports:

- high lactate itself has little direct detrimental effect on muscle performance;
- severe intracellular acidosis can contribute to force/power fatigue;
- acidosis is not the sole fatigue cause;
- multiple metabolites/ions and physiological factors change concurrently.

Canonical rule:

**lactate concentration and fatigue can covary without lactate itself being the sole causal mechanism.**

Acid-base causation remains BIO-05.

No blocker.

---

## 18. Lactate as fatigue/readiness biomarker audit

PASS.

2026 meta-analysis PMID 42506460:

- 110 articles;
- 129 experiments;
- 1826 participants;
- lactate showed the strongest pooled acute exercise response;
- heterogeneity was extreme (I²=98%);
- authors explicitly conclude fatigue specificity remains unestablished.

Therefore:

**lactate is a strong exercise-responsive biomarker, not a validated standalone measure of fatigue mechanism or readiness.**

No blocker.

---

## 19. Acid-base scope audit

PASS.

BIO-04 retains only:

- lactate concentration ≠ H+ concentration;
- lactate itself is not the universal acid/fatigue cause.

Detailed questions of:

- proton sources;
- intracellular/extracellular buffering;
- bicarbonate;
- proton-coupled transport;
- pH effects on force/power

remain BIO-05.

No blocker.

---

## 20. Evidence-ledger audit

BIO04-01…BIO04-09 are adequate for closure.

Refinements:

- BIO04-02 should explicitly use disappearance/disposal terminology where mechanism matters;
- BIO04-04 should retain HIGH confidence for cell-cell/interorgan shuttle and lower confidence for exact intracellular topology;
- BIO04-05 should retain “directional bias, not irreversible direction”;
- BIO04-06 should retain named-method/protocol requirement;
- BIO04-07 should retain model-based exception without weakening the universal non-equivalence;
- BIO04-09 should retain exercise responsiveness ≠ fatigue specificity.

All rows can move from:

`REVALIDATED 2026-11-19 — CLOSURE AUDIT PENDING`

to:

`REVALIDATED 2026-11-19`.

No new row is required.

---

## 21. Uncertainty audit

Remaining uncertainty is real but non-blocking:

1. exact intracellular lactate-routing topology in human muscle;
2. exact contribution of lactate-derived carbon to oxidative ATP by task/intensity;
3. exact MCT1/MCT4 directionality under specific intracellular/extracellular gradients;
4. exact relation among LT1/LT2, MLSS, CP and ventilatory markers across modalities;
5. exact blood-lactate→glycolytic-ATP model validity across different exercise protocols;
6. resistance-training-specific blood vs intramuscular lactate kinetics;
7. device/sampling reliability and threshold-testing protocols;
8. fatigue/readiness algorithms using lactate in combination with other markers.

These belong BIO-08/09/11/12, TST and PRO or future evidence updates.

---

## 22. Closure criterion test

Topic:

> BIO-04 — Lactate metabolism

Result: **PASS.**

Canonical architecture:

`glycolytic/other lactate production`
↔
`cellular/tissue transport via MCTs`
↔
`circulating appearance/disappearance`
→
`oxidation / gluconeogenic handling / redistribution`.

Measurement architecture:

`blood [lactate]`
=
state variable emerging from multiple fluxes
≠
gross local production
≠
intramuscular concentration
≠
direct universal glycolytic ATP flux.

Threshold architecture:

`lactate-derived threshold`
=
method/protocol-defined intensity anchor
≠
one universal 4 mmol/L point
≠
automatically equivalent to MLSS/CP/other threshold constructs.

Critical non-equivalences:

- lactate ≠ waste;
- lactate ≠ anoxia;
- production ≠ net release ≠ blood concentration;
- clearance ≠ waste removal;
- cell-cell shuttle ≠ one settled intracellular topology;
- MCT1/MCT4 ≠ one-way valves;
- blood lactate ≠ muscle lactate;
- lactate ≠ DOMS;
- lactate ≠ sole fatigue cause;
- lactate response ≠ specific readiness marker.

---

## 23. Closure decision

**BIO-04 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 9 exact Section 4 items pass;
2. lactate is retained as a recyclable metabolic intermediate/fuel rather than waste;
3. production, net release, appearance, disappearance and blood concentration remain distinct;
4. “clearance” is acceptable only as operational shorthand; disappearance/disposal is preferred mechanistically;
5. oxidation is a major lactate fate during exercise;
6. cell-cell/interorgan lactate shuttling is strongly supported;
7. one exact intracellular mitochondrial lactate-shuttle topology is not treated as settled universal physiology;
8. MCT1/MCT4 transport is proton-coupled and gradient/state dependent;
9. MCT1-uptake/MCT4-efflux roles are directional biases rather than irreversible directions;
10. lactate threshold/turnpoint methods must be named;
11. 4 mmol/L is not a universal individual threshold;
12. MLSS is protocol/criterion dependent;
13. CP/MLSS/threshold constructs are not automatically interchangeable;
14. blood lactate and intramuscular lactate are non-equivalent;
15. blood lactate is not a universal direct measure of local glycolytic ATP flux, though validated model-based energetic estimates may be useful in defined settings;
16. lactate does not cause DOMS;
17. lactate is not the sole cause of fatigue;
18. lactate alone lacks specificity as a fatigue/readiness biomarker;
19. acid-base mechanisms remain BIO-05;
20. threshold testing/programming remains BIO-09/TST/PRO;
21. no project-relevant blocker remains.

---

## 24. Canonical finding authorization

Create:

`research/fitness/findings/05_bioenergetics/BIO-04_lactate_metabolism.md`

Status:

**CLOSED_FOR_PRACTICE v2.0 — revalidated 2026-11-19**.

Evidence-ledger rows:

`BIO04-01…BIO04-09`

remain the stable claim set after closure.

---

## 25. Next dependency

**BIO-05/PASS-01 — Acid–base physiology and buffering content revalidation.**

Do not start BIO-05 in this working block.
