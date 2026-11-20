# PHY-14 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-18  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 03 — Physiology  
Topic: PHY-14 — Cardiovascular exercise physiology

## 0. Purpose

Проверить, что после PASS-01 тема PHY-14 достаточно закрывает cardiovascular exercise physiology для downstream programming, testing, GPP, biomechanics/bioenergetics and safety без:

- HR = универсальная мера интенсивности;
- SV всегда plateau на одной и той же интенсивности;
- Q inferred from HR alone;
- exercise BP interpreted without task/breathing context;
- systemic TPR = local exercising-muscle resistance;
- blood-flow redistribution treated as complete shutoff of inactive beds;
- venous return reduced to muscle pump alone;
- resistance exercise treated as non-cardiovascular;
- chronic RT equated with endurance adaptation;
- acute PEH used as a chronic BP surrogate;
- capillary density treated as capillary number;
- normal exercise physiology used as clinical diagnosis.

## 1. Materials audited

1. `areas/03_physiology.md`, Section 15 — 13 exact items;
2. `NORMALIZED_KNOWLEDGE_TREE.md`, PHY-14;
3. `PASS-01_cardiovascular_exercise_physiology_revalidation.md`;
4. `EVIDENCE_LEDGER.md`, PHY14-01…PHY14-11;
5. current physiology findings inventory confirming no pre-existing PHY-14 canonical;
6. closure-critical re-check:
   - exercise-CMR reference study — PMID 40471075;
   - repetition-dependent squat hemodynamics — PMID 39985274;
   - quadriceps muscle-pump / expiratory-loading experiment — PMID 42053977;
   - 6-week endurance-training central/peripheral RCT — PMID 40047443;
   - capillary/mitochondrial systematic review and meta-regression — PMID 39390310;
   - resistance-exercise ambulatory-BP meta-analysis — PMID 40840538;
   - dynamic-RT BP meta-analysis by baseline BP — PMID 42291539;
   - aerobic postexercise-hypotension systematic review/meta-analysis — PMID 41649061.

No closure-critical contradiction was found.

## 2. Exact area-map audit — 13/13

1. Heart rate — **PASS**.
2. Stroke volume — **PASS WITH NON-UNIVERSAL-PLATEAU BOUNDARY**.
3. Cardiac output — **PASS WITH HR×SV SEPARATION**.
4. Blood pressure — **PASS WITH TASK/BREATHING BOUNDARY**.
5. Peripheral resistance — **PASS WITH SYSTEMIC-vs-LOCAL BOUNDARY**.
6. Blood-flow redistribution — **PASS**.
7. Venous return — **PASS AS MULTI-MECHANISTIC**.
8. Acute response to resistance exercise — **PASS**.
9. Chronic cardiovascular adaptations to resistance training — **PASS WITHOUT ENDURANCE-EQUIVALENCE CLAIM**.
10. Acute response to aerobic exercise — **PASS**.
11. Chronic aerobic adaptations — **PASS WITH CENTRAL+PERIPHERAL MODEL**.
12. Capillary adaptations — **PASS WITH METRIC BOUNDARY**.
13. Normal physiology vs clinical abnormalities — **PASS WITH MED ROUTING**.

Result: **13/13 PASS.**

## 3. HR / SV / Q audit

PASS.

Cardiac output remains:

`Q = HR × SV`.

Current exercise-CMR data in healthy adults show exercise-related increases in HR, end-diastolic volume, SV and Q with reduced end-systolic volume.

The project therefore retains three separate constructs:

- HR = rate;
- SV = volume ejected per beat;
- Q = flow per unit time.

The traditional universal SV-plateau rule is not retained because trajectory depends on posture, training status, blood volume, cardiac size, protocol and intensity.

Canonical rule:

**HR, SV and Q must be measured/interpreted separately; one component does not identify the others.**

No blocker.

## 4. Blood-pressure audit

PASS.

Dynamic aerobic exercise generally produces:

- rising SBP with work rate;
- relatively stable or slightly reduced DBP in many healthy protocols;
- a smaller MAP rise than SBP rise because systemic vasodilation offsets part of increased Q.

Resistance-exercise BP response is more protocol dependent and can be large.

Important modifiers remain:

- active muscle mass;
- repetition accumulation/set duration;
- fatigue/proximity to failure;
- mechanical vessel compression;
- breathing strategy;
- Valsalva/strain;
- timing and measurement method.

Canonical rule:

**exercise BP is a task- and measurement-dependent hemodynamic response, not one modality-specific fixed value.**

No blocker.

## 5. Systemic resistance / local vascular audit

PASS.

Total peripheral/systemic vascular resistance is a whole-circulation construct.

During dynamic aerobic exercise:

- active-muscle vasodilation increases strongly;
- Q rises;
- systemic resistance commonly falls despite sympathetic vasoconstriction in some nonactive beds.

During resistance exercise, local compression, sympathetic activation, metabolic vasodilation and postcontraction hyperemia coexist.

Canonical rule:

**whole-body TPR must not be equated with local vascular resistance in contracting muscle.**

No blocker.

## 6. Blood-flow redistribution audit

PASS.

Exercise redistributes flow according to competing regional demands.

Retained model:

- active skeletal muscle flow rises;
- coronary flow rises;
- renal/splanchnic flow is relatively reduced with sympathetic vasoconstriction;
- skin flow can rise with heat/duration;
- inactive beds are not assumed to be completely shut off.

Canonical rule:

**redistribution is graded, regional and context dependent.**

No blocker.

## 7. Venous-return audit

PASS.

Venous return remains multi-mechanistic:

- skeletal-muscle pump;
- respiratory pump;
- venous valves;
- venous tone/venoconstriction;
- pressure gradients/cardiac suction;
- blood volume and venous compliance.

The 2026 human experiment directly supports this interaction: rhythmic quadriceps contraction increased femoral venous flow, while expiratory loading attenuated the contraction-induced increase.

Canonical rule:

**muscle pump is important but not a complete theory of venous return.**

No blocker.

## 8. Acute resistance-exercise audit

PASS.

The integrated acute RT model remains:

`contraction + central command + reflex/autonomic drive + breathing/strain`
`→ HR/Q response + BP response + phase-dependent vascular behavior`.

The 2025 intensity-matched squat experiment showed that increasing repetitions from 10 to 20 to 30 at the same relative external intensity increased HR and Q, while TPR was lower in the longer conditions.

Therefore %1RM alone is insufficient to characterize cardiovascular stress.

Canonical rule:

**acute RT cardiovascular load depends on protocol, accumulated work/fatigue and breathing as well as external load.**

No blocker.

## 9. Chronic resistance-training audit

PASS WITH EVIDENCE-HETEROGENEITY BOUNDARY.

Current meta-analyses support chronic BP reductions after dynamic resistance training.

However:

- magnitude varies with baseline BP/population;
- study heterogeneity is substantial;
- ambulatory-BP evidence includes limited samples and risk-of-bias concerns;
- selected central/vascular changes from individual trials are not universal RT adaptations.

Canonical rule:

**RT produces real cardiovascular adaptation, but the phenotype is outcome/population specific and is not assumed to equal endurance adaptation.**

No blocker.

## 10. Acute aerobic-response audit

PASS.

Canonical integrated response:

`metabolic demand ↑`
`→ HR ↑ + SV commonly ↑`
`→ Q ↑`
`+ active-muscle vasodilation`
`→ systemic resistance ↓ relative to rest while arterial pressure is maintained/increased`
`→ regional oxygen delivery ↑`.

Venous return and regional redistribution support the response.

Canonical rule:

**acute aerobic exercise is an integrated flow-delivery/pressure-regulation response, not merely an HR increase.**

No blocker.

## 11. Chronic aerobic-adaptation audit

PASS.

Endurance/aerobic adaptation remains a combined central + peripheral model.

Central components can include:

- plasma/blood-volume expansion;
- greater ventricular filling;
- greater maximal SV;
- greater maximal Q;
- lower HR at the same absolute submaximal workload;
- cardiac remodeling with sustained training.

Peripheral components can include:

- vascular remodeling/function;
- capillarization;
- mitochondrial/oxidative adaptation;
- altered oxygen extraction.

The 6-week randomized cycling study supports larger VO2max gains at higher training intensities with substantial Qmax and blood/plasma-volume changes in selected groups; it does not justify a universal fixed central/peripheral share.

Canonical rule:

**aerobic adaptation is a systems response whose central/peripheral weighting depends on protocol and individual.**

No blocker.

## 12. Postexercise-hypotension audit

PASS.

PEH is retained as an acute postexercise response.

Current aerobic meta-analysis supports postexercise BP reductions and shows baseline-BP-dependent autonomic associations.

Current resistance-exercise meta-analysis also supports small acute ambulatory-BP effects in selected groups.

These findings do not establish that the magnitude of one acute PEH response predicts chronic BP lowering for an individual.

Canonical rule:

**acute PEH ≠ chronic BP-adaptation surrogate.**

No blocker.

## 13. Capillary-adaptation audit

PASS.

The large systematic review/meta-regression showed that:

- capillaries per fiber increased after ET, HIT and SIT;
- capillaries per tissue area changed differently across modalities;
- fiber CSA changed concurrently.

Therefore:

- capillary-to-fiber ratio;
- capillary density;
- fiber CSA

must remain separate.

RT evidence remains less uniform and can be confounded by hypertrophy-related changes in tissue area.

Canonical rule:

**capillary density ≠ capillary number; capillarization must be interpreted together with fiber size and metric definition.**

No blocker.

## 14. Clinical-boundary audit

PASS.

PHY-14 owns expected cardiovascular physiology/adaptation.

It does not diagnose or manage:

- hypertension;
- abnormal exercise BP;
- arrhythmia;
- ischemia;
- syncope/presyncope;
- heart failure;
- valvular disease;
- clinically abnormal recovery;
- individual Valsalva safety.

Canonical rule:

**normal physiology provides context; clinical interpretation/risk belongs to MED.**

No blocker.

## 15. Evidence-ledger audit

Current ledger already covers closure-critical claims:

1. PHY14-01 — HR/SV/Q separation;
2. PHY14-02 — acute RT hemodynamic load;
3. PHY14-03 — systemic vascular resistance;
4. PHY14-04 — regional blood-flow redistribution;
5. PHY14-05 — venous-return mechanisms;
6. PHY14-06 — chronic RT cardiovascular outcomes;
7. PHY14-07 — chronic aerobic central/peripheral adaptation;
8. PHY14-08 — postexercise hypotension boundary;
9. PHY14-09 — endurance capillarization metrics;
10. PHY14-10 — RT capillarization uncertainty;
11. PHY14-11 — clinical boundary.

No additional ledger row is required for closure.

## 16. Uncertainty audit

PASS.

Remaining uncertainty is non-blocking:

1. exact SV trajectory across intensity/posture/training status;
2. exact BP/TPR trajectory during individual RT protocols;
3. exact chronic central cardiac adaptation from hypertrophy-oriented RT in healthy young adults;
4. magnitude and durability of RT-related endothelial/microvascular adaptation by protocol;
5. exact central/peripheral contribution to aerobic adaptation for an individual;
6. exact relationship between one acute PEH response and long-term BP change;
7. exact capillary response to hypertrophy-oriented RT after accounting for fiber growth.

These belong to downstream MED/GPP/PRO/TST/BIO/MEC/IND decisions rather than blocking the normalized PHY-14 question.

## 17. Scope-control audit

Neighboring topics remain separate:

- local oxygen transport/metabolism → BIO;
- flow/pressure mechanics and exercise mechanics → MEC;
- cardiovascular disease/risk/contraindications → MED;
- aerobic/RT dose prescription → PRO;
- HR/BP/fitness measurement → TST;
- exercise selection/breathing technique → TEC;
- conditioning goals → GPP;
- personal cardiovascular decisions → IND.

No additional PHY-14 PASS is needed before closure.

## 18. Closure criterion test

Normalized-tree question:

> какие acute/chronic cardiovascular changes важны для strength/general fitness?

Result: **PASS.**

Canonical synthesis:

`exercise task demand`
`→ autonomic + local vascular + mechanical + respiratory adjustments`
`→ HR/SV/Q + arterial pressure + systemic/regional vascular response + venous return`
`→ acute oxygen-delivery/pressure-regulation response`
`→ repeated exposure`
`→ mode-specific central + vascular/microvascular adaptation`.

Resistance and aerobic exercise share cardiovascular components but weight them differently.

## 19. Closure decision

**PHY-14 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 13 exact Section 15 items pass;
2. HR, SV and Q remain distinct;
3. SV plateau is not treated as universal;
4. BP is interpreted with protocol/breathing context;
5. systemic and local vascular resistance remain distinct;
6. redistribution is graded/regional;
7. venous return is multi-mechanistic;
8. acute RT cardiovascular stress is not reducible to %1RM;
9. chronic RT adaptation is retained without endurance-equivalence overclaim;
10. acute aerobic response is integrated;
11. chronic aerobic adaptation includes central + peripheral components;
12. acute PEH is not a chronic surrogate;
13. capillary density and capillary-to-fiber ratio remain distinct;
14. clinical abnormality remains MED-owned;
15. no project-relevant blocker remains;
16. first canonical PHY-14 finding can now be created;
17. PHY-15 can proceed later without reopening PHY-14 unless a concrete dependency appears.

## 20. Next dependency

**PHY-15 — Respiratory physiology of exercise.**

Do not start PHY-15 in this same working block.
