# NEU-06 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-19  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 04 — Neurophysiology / Motor Learning  
Topic: NEU-06 — Neural adaptation to strength training

## 0. Purpose

Проверить, что после PASS-01 тема NEU-06 достаточно закрывает Area 04 Section 6 для downstream NEU-07/08/09, TST, TEC, PRO, GPP и IND без:

- объяснения раннего прироста силы только нервной системой;
- превращения motor-unit recruitment или firing rate в универсальный однонаправленный adaptation marker;
- приравнивания normalized surface EMG к neural drive;
- предположения, что antagonist coactivation всегда должна снижаться;
- трактовки intermuscular coordination как единого показателя «эффективности»;
- игнорирования task/test specificity и motor-skill contribution;
- локализации adaptation в cortex по одному TMS outcome;
- локализации adaptation в spinal cord по одному H-reflex/V-wave outcome;
- смешения retention performance с retention каждого neural marker;
- назначения одного universal neural-detraining rate;
- трактовки быстрого retraining как доказательства отдельного neural-memory mechanism.

## 1. Materials audited

1. `areas/04_neurophysiology_motor_learning.md`, Section 6 — 12 exact items;
2. `NORMALIZED_KNOWLEDGE_TREE.md`, NEU-06;
3. `PASS-01_neural_adaptation_strength_training_revalidation.md`;
4. `EVIDENCE_LEDGER.md`, NEU06-01…NEU06-10;
5. upstream canonical boundaries:
   - `NEU-02_motor_units_recruitment_rate_coding.md`;
   - `NEU-05_neural_force_production_voluntary_activation_rfd.md`;
   - `PHY-18_detraining_retraining_muscle_memory.md`;
6. closure-critical re-check:
   - integrative neuromuscular RT review — PMID 41361993;
   - motor-unit firing systematic review/meta-analysis — PMID 35295567;
   - neural-drive/EMG study — PMID 41309067;
   - task-specificity systematic review/meta-analysis — PMID 40314751;
   - sites-of-neural-adaptation meta-analysis — PMID 31993949;
   - corticospinal multivariate meta-analysis — PMID 37353049;
   - 2026 TMS systematic review/meta-analysis — PMID 42460308;
   - intermuscular-coordination study — PMID 41945585;
   - detraining study — PMID 28223941;
   - periodic RT/retraining RCT — PMID 39364857.

No closure-critical contradiction was found.

---

## 2. Exact area-map audit — 12/12

1. Early strength gain without large hypertrophy — **PASS WITH MULTIFACTORIAL BOUNDARY**.
2. Change in motor-unit recruitment — **PASS AS TASK/MEASUREMENT-SPECIFIC ADAPTATION**.
3. Change in firing rates — **PASS WITH HETEROGENEITY BOUNDARY**.
4. Change in neural drive — **PASS WITH EMG PROXY BOUNDARY**.
5. Change in antagonist coactivation — **PASS; NO UNIVERSAL DECREASE RULE**.
6. Improved intermuscular coordination — **PASS AS TASK/LOAD-SPECIFIC REORGANIZATION**.
7. Improved task-specific skill — **PASS AS MAJOR COMPONENT OF STRENGTH ADAPTATION**.
8. Cortical adaptations — **PASS WITH TMS SITE-ATTRIBUTION LIMITS**.
9. Spinal adaptations — **PASS WITH H-REFLEX/V-WAVE/MOTOR-UNIT LIMITS**.
10. Retention of neural adaptations — **PASS AS DIFFERENTIAL / MARKER-SPECIFIC**.
11. Neural detraining — **PASS AS DIFFERENTIAL REGRESSION**.
12. Relearning after a break — **PASS FOR FUNCTIONAL REACQUISITION; UNIQUE NEURAL-MEMORY MECHANISM NOT ESTABLISHED**.

Result: **12/12 PASS.**

---

## 3. Early-strength-gain audit

PASS.

The current integrative review (PMID 41361993) supports early adaptation across supraspinal, spinal and motoneuronal levels before chronic muscular adaptation becomes dominant.

Direct motor-unit evidence (PMID 30727028) shows measurable recruitment/discharge changes after four weeks of isometric strength training.

However, early strength improvement can also include:

- task familiarization;
- movement-strategy improvement;
- intermuscular coordination;
- increased ability to express maximal effort;
- early structural changes below routine detection threshold.

Canonical rule:

**early strength gain can be strongly neural/skill-mediated before large measurable hypertrophy, but “early = purely neural” is not retained.**

No blocker.

---

## 4. Motor-unit recruitment / firing-rate audit

PASS WITH HETEROGENEITY BOUNDARY.

Direct longitudinal evidence supports adaptation of:

- recruitment thresholds;
- discharge rates;
- motor-neuron output.

But the systematic review/meta-analysis (PMID 35295567):

- included only seven trials;
- found no significant pooled MUDR change in its main meta-analysis;
- reported very high heterogeneity;
- judged several motor-unit outcomes as low-to-moderate certainty.

Therefore a direct study demonstrating increased firing rate in one muscle/protocol cannot become a universal project rule.

Canonical rule:

**motor-unit control adapts, but the sign and magnitude of recruitment/firing changes depend on task, muscle, contraction level, protocol and measurement.**

No blocker.

---

## 5. Neural-drive / EMG audit

PASS.

NEU-05 remains authoritative:

**neural drive = ensemble motoneuron discharge, not surface EMG amplitude.**

PMID 41309067 shows that absolute multichannel EMG can partly reflect within-participant early changes in recruitment/discharge under constrained conditions, whereas normalization to peak values can conceal those changes.

Therefore:

- unchanged normalized EMG does not prove unchanged neural drive;
- higher normalized EMG does not by itself establish increased neural drive;
- surface EMG remains a conditional proxy.

Canonical rule:

**training-induced neural-drive adaptation must not be inferred from one normalized EMG amplitude metric.**

No blocker.

---

## 6. Antagonist-coactivation audit

PASS.

The evidence does not support:

`strength training → universal decrease in antagonist activation`.

Closure-critical observations include:

- PMID 42555436: mean decrease in one coactivation condition, but no individual change exceeded the study's minimal-difference threshold;
- PMID 42088684: reduced antagonist-to-agonist coordination ratio with no significant change in absolute antagonist activation;
- PMID 40888935: transient coactivation change across training/detraining rather than monotonic reduction.

This is consistent with NEU-05: antagonist activity can impose a torque cost while contributing to stability/control.

Canonical rule:

**strength training may reorganize agonist-antagonist coordination; lower absolute antagonist activation is not a universal adaptation target.**

No blocker.

---

## 7. Intermuscular-coordination audit

PASS.

PMID 41945585 demonstrates changes in intermuscular coherence after six weeks of squat training alongside improved maximal and rapid force.

PMID 42516016 supports stage/load-specific changes in squat muscle-synergy organization.

However, neither study establishes one universal desirable direction for:

- coherence;
- synergy count;
- muscle weighting;
- coupling.

Canonical rule:

**intermuscular adaptation is task- and load-specific reorganization of timing/coupling/weighting, not movement toward one universal coordination signature.**

No blocker.

---

## 8. Task-specific-skill audit

PASS — HIGH-CONFIDENCE BOUNDARY.

The 2025 systematic review/meta-analysis (PMID 40314751):

- included 43 studies;
- included 1660 participants;
- found a substantially larger effect for trained dynamic strength than transfer to non-trained isometric strength.

Therefore training-specific strength improvement contains a real learned/task-specific component.

This does not mean all strength gain is “skill only.”

Canonical rule:

**strength is partly a task-specific motor performance; trained-test improvement and general force-capacity transfer are related but non-identical outcomes.**

No blocker.

---

## 9. Cortical / corticospinal audit

PASS WITH SITE-ATTRIBUTION LIMITS.

The 2020 meta-analysis (PMID 31993949) found:

- increased MEP during voluntary contraction;
- reduced cortical silent period;
- reduced active SICI;
- no consistent resting MEP change;
- no consistent TMS-VA change.

The 2023 multivariate meta-analysis (PMID 37353049) found training-mode dependence in the relationship between corticospinal excitability and strength.

The 2026 TMS systematic review/meta-analysis (PMID 42460308) found an overall increase in corticospinal excitability but substantial heterogeneity.

Thus:

- cortical/corticospinal plasticity is supported;
- marker direction is not universal;
- MEP/SICI/cSP cannot be collapsed into one “cortical activation” variable;
- one marker cannot quantify the cortical share of strength gain.

Canonical rule:

**resistance training can alter cortical/corticospinal excitability and inhibition, but anatomical/causal attribution requires converging measures.**

No blocker.

---

## 10. Spinal / motoneuron audit

PASS WITH MEASUREMENT BOUNDARY.

The 2020 meta-analysis found:

- increased V-wave amplitude;
- no consistent H-reflex change at rest or during contraction.

Direct motor-unit studies show adaptive changes in motor-neuron-pool output.

These observations are compatible because the measures probe different portions of the system.

Important boundary:

- H-reflex = specific evoked spinal reflex pathway measure;
- V-wave = maximal-effort response influenced by descending drive and motoneuron state;
- motor-unit discharge/recruitment = functional motor-neuron-pool output;
- none is a complete readout of “spinal adaptation.”

Canonical rule:

**spinal/motoneuron adaptation is supported, but H-reflex, V-wave and motor-unit measures are not interchangeable and do not uniquely localize causality by themselves.**

No blocker.

---

## 11. Retention audit

PASS.

PMID 28223941 demonstrates differential retention:

- MVC maintained across two weeks detraining;
- V-wave-related volitional drive maintained;
- MEP amplitude decreased.

PMID 40888935 similarly shows partial strength retention with changing corticospinal measures across four weeks detraining.

Therefore:

**performance retention ≠ retention of every neural marker.**

Conversely:

**regression of one neural marker ≠ erasure of the trained motor solution.**

No blocker.

---

## 12. Neural-detraining audit

PASS.

The evidence supports multiple neural clocks, not one decay curve.

Possible detraining effects include:

- corticospinal excitability/inhibition changes;
- agonist-antagonist coordination changes;
- reduced expression of trained motor-unit behavior;
- loss of task familiarity;
- reduced rapid-force expression.

This remains consistent with PHY-18:

**detraining is outcome specific and strength loss is not synonymous with muscle loss.**

Canonical rule:

**neural detraining is task-, marker-, muscle- and population-specific; no universal percentage-per-week or neural half-life is retained.**

No blocker.

---

## 13. Relearning / retraining audit

PASS WITH CAUSAL BOUNDARY.

The randomized periodic-training study (PMID 39364857) demonstrates rapid restoration after a planned training break: measured strength and size lost during detraining were regained rapidly during retraining, with several outcomes recovering previous levels within the first five weeks.

This supports:

- faster functional reacquisition is possible;
- previous training history is relevant.

It does not isolate a unique neural mechanism.

Potential retained contributors include:

- motor skill/task familiarity;
- coordination;
- residual neural adaptation;
- residual muscle size/architecture;
- myonuclear/molecular history.

PHY-18 remains authoritative for the broader muscle-memory construct.

Canonical rule:

**rapid retraining is a functional phenomenon; a unique neural “memory mechanism” is not established.**

No blocker.

---

## 14. Cross-topic consistency audit

### NEU-02

PASS.

NEU-06 does not overwrite the motor-unit rules:

- recruitment + rate coding remain complementary;
- thresholds/discharge behavior remain task dependent;
- one motor-unit variable does not define strength.

### NEU-05

PASS.

NEU-06 preserves:

- neural drive ≠ EMG;
- antagonist coactivation as cost/control tradeoff;
- maximal strength as neural + muscular + mechanical;
- no single neural measure explains strength.

### PHY-18

PASS.

NEU-06 preserves:

- detraining = multiple clocks;
- strength loss ≠ muscle loss;
- rapid regain ≠ proof of one memory mechanism;
- returners are not automatically novices, but present capacity governs re-entry.

No cross-topic contradiction found.

---

## 15. Evidence-ledger audit

Current ledger covers closure-critical claims:

1. NEU06-01 — early gain / non-hypertrophic contribution;
2. NEU06-02 — motor-unit recruitment/firing heterogeneity;
3. NEU06-03 — neural drive / EMG boundary;
4. NEU06-04 — antagonist coactivation;
5. NEU06-05 — intermuscular coordination;
6. NEU06-06 — task-specific strength skill;
7. NEU06-07 — cortical/corticospinal adaptation;
8. NEU06-08 — spinal/motoneuron adaptation;
9. NEU06-09 — retention/neural detraining;
10. NEU06-10 — retraining / neural-memory boundary.

No additional closure-critical ledger row is required.

---

## 16. Uncertainty audit

PASS.

Remaining uncertainty is real but non-blocking:

1. exact neural vs muscular contribution to one individual's early strength gain;
2. exact direction of motor-unit threshold/firing changes in a specific exercise;
3. causal contribution of one coherence/synergy change to performance;
4. exact optimal agonist-antagonist strategy for a joint/task;
5. exact cortical vs spinal share of adaptation;
6. exact interpretation of one TMS/H-reflex/V-wave change in an individual;
7. exact retention time of a neural adaptation;
8. exact neural contribution to rapid retraining;
9. transfer of task-specific neural adaptation across substantially different exercises.

These belong downstream to NEU-07/08/09, TST, TEC, PRO, GPP and IND where a concrete decision requires them.

---

## 17. Scope-control audit

Neighboring ownership remains separate:

- bilateral deficit/facilitation and cross-education → NEU-07;
- neuromuscular fatigue → NEU-08;
- broader motor-control/synergy/variability mechanisms → NEU-09;
- testing of neural or performance adaptations → TST;
- movement technique → TEC;
- load/volume/velocity/frequency prescription → PRO/GPP;
- individualized bottleneck diagnosis → IND;
- broader detraining/muscle-memory mechanisms → PHY-18.

No additional NEU-06 PASS is required before closure.

---

## 18. Closure criterion test

Topic:

> NEU-06 — Neural adaptation to strength training

Result: **PASS.**

Canonical synthesis:

`repeated task-specific resistance exposure`
→
`motor-unit recruitment/discharge changes + descending-drive/inhibition changes + intermuscular coordination + task learning`
interacts with
`muscle/tendon/architecture/mechanics`
→
`task-specific strength expression`.

With detraining:

`performance + neural markers + structural adaptations`
do not regress at one common rate.

With retraining:

`retained skill + residual neural/structural/molecular adaptation`
can accelerate return,
without proving one neural-memory mechanism.

---

## 19. Closure decision

**NEU-06 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 12 exact Section 6 items pass;
2. early strength gain is not reduced to hypertrophy or to a purely neural explanation;
3. motor-unit recruitment/firing adaptation remains task/protocol specific;
4. neural drive remains distinct from surface EMG;
5. antagonist coactivation has no universal downward rule;
6. intermuscular coordination is adaptable and task/load specific;
7. task-specific skill is retained as a real component of strength adaptation;
8. cortical/corticospinal adaptation is supported without over-interpreting one TMS marker;
9. spinal/motoneuron adaptation is supported without equating H-reflex, V-wave and motor-unit measures;
10. retention/detraining remain differential processes;
11. rapid relearning/retraining is supported functionally without assigning a unique neural-memory mechanism;
12. NEU-06 is consistent with NEU-02, NEU-05 and PHY-18;
13. no project-relevant blocker remains;
14. first canonical NEU-06 finding can now be created;
15. NEU-07 can proceed later without reopening NEU-06 unless a concrete dependency appears.

---

## 20. Next dependency

**NEU-07 — Bilateral effects / cross-education.**

Do not start NEU-07 in this same working block.
