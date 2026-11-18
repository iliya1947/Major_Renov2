# NEU-02 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-19  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 04 — Neurophysiology / Motor Learning  
Topic: NEU-02 — Motor units: recruitment/rate coding

## 0. Purpose

Проверить, что после PASS-01 тема NEU-02 достаточно закрывает Area 04 Section 2 для downstream NEU-05/06/08/09, TEC, PRO, TST и IND без:

- fixed universal recruitment thresholds;
- rigid task-independent reading of the size principle;
- derecruitment treated as recruitment reversed;
- force control reduced to recruitment alone or rate coding alone;
- rate coding confused with temporal summation;
- common synaptic input equated with synchronization;
- greater synchronization treated as a universal strength/RFD advantage;
- one universal motor-unit firing curve across muscles/tasks;
- firing-rate decline treated as a universal causal fatigue marker;
- human slow/fast motor units overclassified from HD-sEMG alone;
- decomposed motor units treated as a complete census of the active pool.

## 1. Materials audited

1. `areas/04_neurophysiology_motor_learning.md`, Section 2 — 12 exact items;
2. `NORMALIZED_KNOWLEDGE_TREE.md`, NEU-02;
3. `PASS-01_motor_units_recruitment_rate_coding_revalidation.md`;
4. `EVIDENCE_LEDGER.md`, NEU02-01…NEU02-12;
5. current findings inventory confirming no pre-existing NEU-02 canonical;
6. closure-critical re-check:
   - MU discharge systematic review/meta-analysis — PMID 40095845;
   - recruitment-threshold / ankle-position human study — PMID 40421865;
   - task-dependent common-input human study — PMID 42667666;
   - common-input / RFD study — PMID 31120812;
   - fatigue review — PMID 40590945;
   - low-intensity fatigue dissociation study — PMID 42550926;
   - HD-sEMG methods review — PMID 41065861;
   - HD-sEMG decomposition concerns review — PMID 40085467;
   - firing-rate sample-size study — PMID 38458102;
   - motor-unit phenotype review — PMID 40725136;
   - peer-reviewed mouse motor-unit classification — PMID 41955226.

Source-status correction during closure:
- PMID 40832332 is a **preprint** and is not used as the sole closure basis;
- PMID 41955226 is the peer-reviewed 2026 J Physiol update of the 2025 mouse-classification preprint.

No closure-critical contradiction was found.

## 2. Exact area-map audit — 12/12

1. Alpha motor neuron + innervated fibers — **PASS**.
2. Motor-unit size — **PASS AS MULTIDIMENSIONAL PROPERTY**.
3. Recruitment threshold — **PASS AS TASK/CONTEXT DEPENDENT**.
4. Size principle — **PASS AS DEFAULT ORDERLY-RECRUITMENT CONSTRAINT WITH TASK MODULATION**.
5. Derecruitment — **PASS WITH HYSTERESIS / INTRINSIC-PROPERTY BOUNDARY**.
6. Rate coding — **PASS AS COMPLEMENTARY FORCE-CONTROL MECHANISM**.
7. Temporal summation — **PASS AS MUSCLE-MECHANICAL CONSEQUENCE, NOT SYNONYM FOR RATE CODING**.
8. Common drive — **PASS AS SHARED SYNAPTIC-INPUT / LOW-DIMENSIONAL CONTROL**.
9. Synchronization — **PASS WITH COMMON-INPUT-vs-STRENGTH BOUNDARY**.
10. Behavior across effort — **PASS AS MUSCLE/TASK/PROFILE DEPENDENT**.
11. Behavior during fatigue — **PASS AS TASK DEPENDENT AND NON-UNIVERSAL CAUSAL PATTERN**.
12. Slow vs fast motor units — **PASS WITH CONTINUUM / HUMAN-MEASUREMENT BOUNDARY**.

Result: **12/12 PASS.**

## 3. Motor-unit definition / size audit

PASS.

Motor unit:

`one alpha motor neuron + axon/branches + all skeletal-muscle fibers innervated by that neuron`.

“Size” can refer to:
- motoneuron soma/axon/excitability;
- innervation ratio;
- motor-unit territory;
- twitch/tetanic force;
- MUAP-related measures.

Canonical rule:

**motor-unit size is multidimensional; one surface-EMG amplitude is not a universal unit-size metric.**

No blocker.

## 4. Recruitment-threshold audit

PASS.

Human evidence confirms recruitment thresholds can shift with:
- muscle length/joint position;
- contraction profile;
- rate of force development;
- training;
- fatigue/neuromodulation;
- normalization to a changing MVC.

The 2025 triceps-surae study showed matched units changed recruitment threshold across ankle positions.

Canonical rule:

**recruitment threshold is task/context dependent, not an immutable unit identity.**

No blocker.

## 5. Size-principle audit

PASS.

The size principle remains the default organization:

`smaller / more excitable motoneurons → larger / less excitable motoneurons`
as shared excitation rises.

But it does not imply:
- fixed %MVC thresholds across tasks;
- identical synaptic weighting to every motor neuron;
- no influence of muscle length/force profile/sensory input.

Canonical rule:

**orderly recruitment is a constraint; observed threshold is context dependent.**

No blocker.

## 6. Derecruitment / hysteresis audit

PASS.

Human discharge-pattern data support recruitment–derecruitment hysteresis and force-dependent changes consistent with altered neuromodulation/inhibition and persistent inward-current effects.

Canonical rule:

**derecruitment is not recruitment played backward.**

No blocker.

## 7. Recruitment / rate-coding audit

PASS.

The 2025 systematic review/meta-analysis included **262 human studies** and demonstrated strong muscle-specific differences in firing rates and force–discharge relations.

Force is scaled through:
- recruitment of additional units;
- rate coding of active units.

Canonical rule:

**recruitment and rate coding are complementary and muscle/task dependent.**

No universal firing-rate target is retained.

No blocker.

## 8. Rate-coding / temporal-summation audit

PASS.

Rate coding:
- neural discharge-frequency control.

Temporal summation:
- mechanical overlap/fusion of twitch responses.

Canonical rule:

**rate coding acts through, but is not identical to, temporal summation.**

No blocker.

## 9. Common-input audit

PASS.

Current human evidence supports substantial shared synaptic input to motor-neuron pools and low-dimensional control.

The 2026 Experimental Physiology study directly showed common-input composition changed with:
- force profile;
- muscle length.

Canonical rule:

**common input is fundamental but task modulated.**

No blocker.

## 10. Synchronization audit

PASS.

Synchronization is correlated timing of motor-unit discharges and can arise from common input.

However:
- synchronization metrics depend on discharge rate and unit sample;
- common-input strength and pairwise synchronization are not interchangeable;
- the human RFD study found average discharge rate, not synchronization strength, explained most between-person rapid-force variance.

The 2026 J Physiol work adds indirect evidence for impulsive common inputs that can generate synchronization.

Canonical rule:

**synchronization is not a generic “more = stronger” adaptation target.**

No blocker.

## 11. Effort-level audit

PASS.

The 2025 meta-analysis shows:
- firing rates differ markedly across muscles;
- contraction intensity positively relates to mean firing rate;
- slopes differ by muscle.

Fast contractions can alter:
- initial firing rate;
- recruitment threshold;
- recruitment timing.

Canonical rule:

**there is no universal firing-rate curve indexed only to %MVC.**

No blocker.

## 12. Fatigue audit

PASS.

The 2025 muscular-wisdom review argues firing-rate decline in sustained maximal fatigue is more consistent with protective/adaptive regulation than a simple cause of force loss.

Current primary evidence further shows:
- firing-rate recovery can precede torque recovery;
- nonvolitional peripheral fatigue can suppress maximal firing rate;
- substantial torque loss can occur without significant firing-rate decline.

Canonical rule:

**fatigue-related firing-rate behavior can be consequence, compensation and/or contributor; it is not a universal causal biomarker.**

Detailed central/peripheral fatigue remains NEU-08-owned.

No blocker.

## 13. Slow / fast motor-unit audit

PASS WITH HUMAN-EVIDENCE BOUNDARY.

Useful physiological archetypes remain:
- S;
- FR;
- FI;
- FF.

But:
- properties overlap;
- transitional states exist;
- direct full phenotype classification is much easier in animal preparations than intact humans;
- recruitment threshold or surface-EMG features alone do not establish full contractile phenotype.

The 2025 continuum source PMID 40832332 is a preprint and is used only as supporting mechanistic nuance.
The 2026 peer-reviewed mouse study PMID 41955226 supports identifiable S/FR/FI/FF group structure with overlap, especially between adjacent fast categories.

Canonical rule:

**retain archetypes, avoid overclassifying individual human units from HD-sEMG.**

No blocker.

## 14. HD-sEMG audit

PASS.

HD-sEMG decomposition is highly informative but remains method/sample dependent.

Current reviews emphasize challenges in:
- dynamic contractions;
- high-force contractions;
- reliability/validation of decomposed units;
- tracking units across tasks/sessions.

The 2024 sampling study showed the number of units required for stable mean firing-rate estimates rises with contraction intensity.

Canonical rule:

**decomposed units are a sample of motor-neuron output, not a complete census.**

No blocker.

## 15. Evidence-ledger audit

Current ledger covers closure-critical claims:

1. NEU02-01 — definition/size;
2. NEU02-02 — task-dependent recruitment threshold;
3. NEU02-03 — size principle;
4. NEU02-04 — derecruitment/hysteresis;
5. NEU02-05 — recruitment + rate coding;
6. NEU02-06 — rate coding vs temporal summation;
7. NEU02-07 — common synaptic input;
8. NEU02-08 — synchronization boundary;
9. NEU02-09 — effort/task dependence;
10. NEU02-10 — fatigue;
11. NEU02-11 — motor-unit phenotype boundary;
12. NEU02-12 — HD-sEMG limits.

NEU02-11 source status was clarified during closure.

No additional ledger row is required.

## 16. Uncertainty audit

PASS.

Remaining uncertainty is non-blocking:

1. exact threshold of one motor unit across dynamic exercises;
2. direct human mapping between recruitment threshold and full S/FR/FI/FF phenotype;
3. exact role of PICs/neuromodulation at high-force dynamic tasks;
4. practical significance of synchronization for specific strength tasks;
5. transfer of steady isometric HD-sEMG findings to complex dynamic resistance exercise;
6. complete active-pool sampling at high forces;
7. exact motor-unit strategy in a specific individual/exercise.

These belong downstream to NEU-05/06/08/09, TEC, PRO, TST and IND.

## 17. Scope-control audit

Neighboring ownership remains separate:

- sensory feedback → NEU-03;
- reflexes → NEU-04;
- neural force production / voluntary activation / RFD → NEU-05;
- neural adaptation to RT → NEU-06;
- fatigue → NEU-08;
- motor-control coordination → NEU-09;
- training prescription → PRO;
- measurement validity → TST.

No additional NEU-02 PASS is required before closure.

## 18. Closure criterion test

Topic:

> NEU-02 — Motor units: recruitment/rate coding

Result: **PASS.**

Canonical synthesis:

`shared + task-specific synaptic input`
`→ orderly recruitment constrained by motoneuron excitability`
`+ rate coding of active units`
`→ motor-unit action potentials`
`→ twitch summation / force`.

Observed behavior is then modified by:
- muscle;
- task;
- force profile;
- muscle length;
- fatigue;
- sensory input;
- neuromodulation;
- measurement method.

## 19. Closure decision

**NEU-02 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 12 exact Section 2 items pass;
2. motor-unit size is treated as multidimensional;
3. recruitment threshold is task/context dependent;
4. size principle remains the default recruitment architecture without rigid task-independent thresholds;
5. derecruitment remains history/neuromodulation dependent;
6. recruitment and rate coding jointly regulate force;
7. rate coding remains distinct from temporal summation;
8. common input remains distinct from synchronization;
9. greater synchronization is not treated as a universal strength/RFD advantage;
10. motor-unit behavior across effort remains muscle/task dependent;
11. fatigue-related firing-rate changes are not treated as a universal causal marker;
12. slow/fast motor-unit archetypes are retained with continuum/human-classification limits;
13. HD-sEMG sampling limits remain explicit;
14. preprint evidence is not closure-critical;
15. no project-relevant blocker remains;
16. first canonical NEU-02 finding can now be created;
17. NEU-03 can proceed later without reopening NEU-02 unless a concrete dependency appears.

## 20. Next dependency

**NEU-03 — Sensory feedback / proprioception.**

Do not start NEU-03 in this same working block.
