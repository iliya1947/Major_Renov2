# PHY-15 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-18  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 03 — Physiology  
Topic: PHY-15 — Respiratory exercise physiology

## 0. Purpose

Проверить, что после PASS-01 тема PHY-15 достаточно закрывает respiratory exercise physiology для downstream bioenergetics, conditioning, testing, technique/breathing and safety без:

- minute ventilation = alveolar ventilation;
- VT or breathing frequency interpreted alone;
- pulmonary gas exchange = whole-body oxygen delivery;
- VE used as a surrogate for VO2;
- CO2 removal reduced to breathing frequency;
- VE/VCO2 treated as a generic fitness score;
- exercise hyperpnea reduced to one sensor/controller;
- ventilatory thresholds treated as one literal biochemical switch;
- respiratory muscle work/fatigue treated as negligible or universal;
- steady-state aerobic breathing rules copied directly to resistance exercise;
- athlete lung-function differences treated as proof of ordinary training-induced lung enlargement;
- targeted IMT/RMT generalized to ordinary endurance training;
- exercise desaturation or disproportionate dyspnea automatically labeled normal.

## 1. Materials audited

1. `areas/03_physiology.md`, Section 16 — 11 exact items;
2. `NORMALIZED_KNOWLEDGE_TREE.md`, PHY-15;
3. `PASS-01_respiratory_exercise_physiology_revalidation.md`;
4. `EVIDENCE_LEDGER.md`, PHY15-01…PHY15-11;
5. current physiology findings inventory confirming no pre-existing PHY-15 canonical;
6. closure-critical re-check:
   - breathing/circulatory interactions review — PMID 41092427;
   - ventilation-efficiency/CO2-removal review — PMID 41124343;
   - exercise-hyperpnea study — PMID 42515836;
   - respiratory-muscle fatigue time-course study — PMID 41617217;
   - healthy-athlete lung-function review — PMID 39879121;
   - team-sport IMT/RMT systematic review/meta-analysis — PMID 42972395;
   - diaphragm-thickness IMT systematic review/meta-regression — PMID 41901690;
   - EIAH case/review — PMID 43032413.

No closure-critical contradiction was found.

## 2. Exact area-map audit — 11/11

1. Ventilation — **PASS WITH MINUTE-vs-ALVEOLAR BOUNDARY**.
2. Tidal volume — **PASS**.
3. Breathing frequency — **PASS**.
4. Gas exchange — **PASS AS VENTILATION+PERFUSION+DIFFUSION**.
5. Oxygen transport — **PASS WITH WHOLE-CASCADE BOUNDARY**.
6. CO2 removal — **PASS WITH VE/VCO2 / DEAD-SPACE BOUNDARY**.
7. Ventilatory response to exercise — **PASS AS MULTI-CONTROLLER**.
8. Respiratory muscle work — **PASS WITH FATIGUE CONTEXT**.
9. Acute vs chronic adaptations — **PASS WITH ORDINARY-TRAINING vs IMT/RMT BOUNDARY**.
10. Respiratory-system limitations across load types — **PASS WITH HEALTHY/ELITE/RT CONTEXT**.
11. Clinical dyspnea/pathology — **PASS WITH MED ROUTING**.

Result: **11/11 PASS.**

## 3. Minute ventilation / alveolar ventilation audit

PASS.

Minute ventilation remains:

`VE = VT × fB`.

Alveolar ventilation is approximately:

`VA = (VT - VD) × fB`.

Therefore equal VE can coexist with different effective alveolar ventilation because breathing pattern and physiological dead space differ.

Canonical rule:

**minute ventilation is total flow, not automatically effective gas-exchange ventilation.**

No blocker.

## 4. VT / breathing-frequency audit

PASS.

Both VT and breathing frequency contribute to VE.

Typical exercise pattern:

- VT rises substantially from rest at lower/moderate demand;
- mechanical constraints increasingly limit further VT expansion;
- breathing frequency contributes progressively more at high ventilatory demand.

Exact trajectories remain person-, age-, sex-, posture-, fitness- and modality-dependent.

Canonical rule:

**VT and fB must remain separate contributors rather than one generic “breathing rate” construct.**

No blocker.

## 5. Pulmonary gas-exchange audit

PASS.

Pulmonary gas exchange remains an integrated product of:

- alveolar ventilation;
- pulmonary perfusion;
- V/Q matching;
- alveolar-capillary diffusion;
- transit/contact conditions.

Current integrative physiology supports the lung and circulation as serially linked pumps for O2/CO2 transport.

Canonical rule:

**pulmonary gas exchange is not determined by ventilation alone.**

No blocker.

## 6. Whole-body oxygen-transport audit

PASS.

The serial transport model is retained:

`inspired O2`
`→ alveolar ventilation`
`→ pulmonary diffusion/V-Q matching`
`→ arterial O2 content`
`→ cardiac output / tissue perfusion`
`→ tissue diffusion`
`→ mitochondrial utilization`.

Therefore high VE does not prove high VO2 or high systemic O2 delivery.

Canonical rule:

**the lung is one step in the oxygen cascade; hemoglobin, cardiac output and peripheral utilization remain separate determinants.**

No blocker.

## 7. CO2-removal / VE-VCO2 audit

PASS.

Exercise ventilation is coupled strongly to CO2 elimination.

VE/VCO2 interpretation remains conditional on:

- physiological dead space;
- V/Q matching;
- arterial CO2 regulation;
- exercise phase;
- chosen analytic method.

The current review literature explicitly treats ventilatory efficiency as the VE required for a given VCO2 rather than a generic index of fitness.

Canonical rule:

**VE/VCO2 is a gas-exchange/ventilatory-efficiency construct, not a stand-alone performance score.**

No blocker.

## 8. Exercise-hyperpnea audit

PASS WITH MECHANISTIC UNCERTAINTY RETAINED.

Exercise hyperpnea remains multi-controller.

Current 2026 experimental work supports intensity-dependent interaction between feedforward exercise drive and CO2 chemofeedback, while broader physiology also supports afferent/mechanical inputs.

Exact weighting remains unresolved.

Canonical rule:

**no single universal “exercise ventilation sensor” is established.**

No blocker.

## 9. Ventilatory-threshold audit

PASS WITH CONSTRUCT BOUNDARY.

VT1/VT2/RCP-type landmarks remain useful exercise-response constructs.

They are not treated as:

- one instantaneous metabolic switch;
- direct proof of one biochemical event;
- protocol-independent constants.

Their estimates depend on:

- protocol;
- signal processing;
- criterion;
- gas-exchange noise;
- CO2 buffering/handling.

Detailed threshold measurement remains TST/GPP/PRO.

No blocker.

## 10. Respiratory-muscle work audit

PASS.

Respiratory muscles perform mechanical and metabolic work.

At high ventilation:

- inspiratory pressure generation increases;
- expiratory muscles become more active;
- respiratory oxygen cost rises;
- intrathoracic pressure influences cardiac filling/ejection;
- respiratory-circulatory interaction becomes more important.

Canonical rule:

**breathing is not metabolically or mechanically free during demanding exercise.**

No blocker.

## 11. Respiratory-muscle fatigue audit

PASS.

The 2026 severe-cycling experiment showed both expiratory and inspiratory twitch-pressure reductions by approximately 50% of tolerable severe-intensity exercise duration, with progressively greater fatigue toward intolerance.

This establishes that respiratory-muscle fatigue can occur before task failure.

It does not establish that:

- all exercise causes respiratory fatigue;
- ordinary RT causes the same fatigue;
- subjective dyspnea directly measures respiratory-muscle fatigue.

Canonical rule:

**respiratory-muscle fatigue is real but demand- and protocol-dependent.**

No blocker.

## 12. Acute aerobic-response audit

PASS.

Canonical response:

`metabolic demand / VCO2 ↑`
`→ neural + chemical ventilatory drive ↑`
`→ VT + fB adjust`
`→ VE / alveolar ventilation ↑`
`+ pulmonary perfusion/diffusion adjust`
`→ arterial gases usually defended`.

At high demand, respiratory work and mechanical constraints become progressively more relevant.

No blocker.

## 13. Acute resistance-exercise audit

PASS.

RT respiratory physiology remains separated from steady-state aerobic physiology.

Important determinants include:

- set duration;
- repetition accumulation;
- active muscle mass;
- metabolic disturbance;
- rest intervals;
- breath holding/Valsalva;
- BFR/occlusion.

Canonical rule:

**RT ventilation is intermittent and breathing-strategy dependent; %1RM alone does not define respiratory demand.**

No blocker.

## 14. Ordinary chronic training audit

PASS WITH CAUSALITY BOUNDARY.

Healthy athletes often display high standardized spirometric/diffusing-capacity values.

However, current athlete review data do not establish whether these metrics are related to VO2max, and cross-sectional superiority cannot separate:

- training effect;
- selection;
- anthropometry/body size;
- sport specialization;
- developmental exposure.

Canonical rule:

**improved endurance fitness does not by itself prove proportional structural enlargement or improved resting spirometry of the healthy lungs.**

No blocker.

## 15. Targeted IMT/RMT audit

PASS.

Targeted inspiratory/respiratory muscle training is retained as a distinct intervention.

Current evidence supports:

- improved inspiratory muscle strength;
- possible diaphragm hypertrophy/thickness increase.

But the 2026 athlete meta-analysis reports:

- small study counts;
- substantial heterogeneity;
- risk of bias;
- low-to-very-low certainty;
- nonrobust spirometric results after sensitivity analysis;
- conceptually heterogeneous performance outcomes.

Canonical rule:

**IMT/RMT can adapt respiratory muscles, but universal performance enhancement or lung-function improvement is not established.**

No blocker.

## 16. Healthy respiratory limitation audit

PASS.

The healthy respiratory system usually has substantial reserve in non-elite exercise.

At very high endurance demand, documented constraints can include:

- expiratory flow limitation;
- high work of breathing;
- respiratory-muscle fatigue;
- exercise-induced arterial hypoxemia;
- diffusion/V-Q limitation at very high pulmonary blood flow.

Canonical rule:

**healthy respiratory limitation is context dependent rather than universally absent or universally limiting.**

No blocker.

## 17. EIAH audit

PASS WITH CLINICAL-EXCLUSION BOUNDARY.

Current 2026 review describes EIAH as a recognized phenomenon in highly trained endurance athletes and supports a multifactorial model including:

- relative hypoventilation;
- V/Q mismatch;
- diffusion limitation.

The same source explicitly requires clinically relevant/unexplained desaturation to be evaluated for cardiopulmonary disease before physiological EIAH attribution.

Canonical rule:

**exercise desaturation is not automatically physiological EIAH.**

No blocker.

## 18. Dyspnea / pathology audit

PASS.

Hard exercise can normally produce marked breathlessness because ventilatory drive and respiratory muscle work rise.

PHY-15 does not diagnose:

- exercise-induced bronchoconstriction/asthma;
- COPD;
- interstitial lung disease;
- pulmonary vascular disease;
- dysfunctional breathing;
- inducible laryngeal obstruction;
- cardiac/anemic contributors to dyspnea;
- unexplained desaturation.

Canonical rule:

**normal exertional breathlessness and pathological dyspnea require contextual/clinical differentiation; clinical ownership is MED.**

No blocker.

## 19. Evidence-ledger audit

Current ledger covers closure-critical claims:

1. PHY15-01 — minute vs alveolar ventilation;
2. PHY15-02 — ventilation/perfusion/diffusion gas exchange;
3. PHY15-03 — whole-body oxygen cascade;
4. PHY15-04 — CO2 elimination / VE-VCO2;
5. PHY15-05 — multi-controller exercise hyperpnea;
6. PHY15-06 — respiratory muscle work/fatigue;
7. PHY15-07 — RT breathing/protocol dependence;
8. PHY15-08 — ordinary training / lung-function causality boundary;
9. PHY15-09 — targeted IMT/RMT;
10. PHY15-10 — healthy/elite respiratory limitations;
11. PHY15-11 — dyspnea/desaturation clinical boundary.

No additional ledger row is required for closure.

## 20. Uncertainty audit

PASS.

Remaining uncertainty is non-blocking:

1. exact feedforward/chemoreflex/afferent contribution to hyperpnea by intensity;
2. exact VT/frequency transition by individual and modality;
3. precise respiratory-muscle oxygen-cost/metaboreflex contribution to whole-body performance;
4. prevalence of EFL/EIAH across specific athlete populations;
5. magnitude of chronic lung-function change causally attributable to ordinary endurance training;
6. performance transfer magnitude from IMT/RMT;
7. exact ventilatory-threshold agreement across methods/protocols.

These belong to downstream TST/GPP/PRO/MED/IND questions rather than blocking the normalized PHY-15 question.

## 21. Scope-control audit

Neighboring topics remain separate:

- oxygen utilization / substrate energetics → BIO;
- cardiac output / blood flow → PHY-14;
- cardiopulmonary disease / clinical dyspnea → MED;
- breathing technique / lifting execution → TEC;
- ventilatory-threshold / CPET measurement → TST;
- conditioning dose → GPP/PRO;
- personal respiratory interpretation → IND.

No additional PHY-15 PASS is required before closure.

## 22. Closure criterion test

Normalized-tree question:

> как ventilation/gas exchange respond/adapt?

Result: **PASS.**

Canonical synthesis:

`exercise metabolic demand`
`→ neural + chemical ventilatory drive`
`→ VT/frequency pattern + alveolar ventilation`
`+ pulmonary perfusion/V-Q + diffusion`
`→ O2 loading / CO2 removal`
`→ integrated with hemoglobin + cardiac output + tissue utilization`.

At high demand:

`mechanical ventilatory constraints + respiratory-muscle work/fatigue ± EFL/EIAH`
can contribute to exercise limitation.

Chronic ordinary training mainly increases whole-body exercise capacity without proven proportional healthy-lung enlargement, whereas targeted IMT/RMT directly trains respiratory muscles.

## 23. Closure decision

**PHY-15 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 11 exact Section 16 items pass;
2. minute and alveolar ventilation remain distinct;
3. VT and breathing frequency remain distinct contributors;
4. pulmonary gas exchange is ventilation + perfusion/V-Q + diffusion;
5. whole-body O2 transport is not reduced to the lungs;
6. CO2-removal / VE-VCO2 interpretation is bounded correctly;
7. hyperpnea remains multi-controller;
8. respiratory muscle work/fatigue is retained without universalization;
9. aerobic and resistance respiratory responses remain distinct;
10. ordinary endurance adaptation is separated from targeted IMT/RMT;
11. healthy respiratory reserve is retained without claiming the respiratory system can never limit performance;
12. EFL/EIAH are recognized in appropriate high-demand contexts;
13. unexplained dyspnea/desaturation remains MED-owned;
14. no project-relevant blocker remains;
15. first canonical PHY-15 finding can now be created;
16. PHY-16 can proceed later without reopening PHY-15 unless a concrete dependency appears.

## 24. Next dependency

**PHY-16 — Endocrine / immune physiology.**

Do not start PHY-16 in this same working block.
