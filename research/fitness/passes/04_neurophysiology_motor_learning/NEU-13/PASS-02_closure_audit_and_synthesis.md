# NEU-13 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-19  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 04 — Neurophysiology / Motor Learning  
Topic: NEU-13 — Practice organization

## 0. Purpose

Независимо перепроверить PASS-01 и решить, достаточно ли NEU-13 закрывает Area 04 Section 13 для downstream NEU-14…NEU-18, TEC, PRO, TST, COA и IND без:

- смешения practice frequency, practice volume и practice distribution;
- переноса declarative spacing effect в универсальный motor-spacing law;
- трактовки massed practice как автоматически вредной;
- трактовки blocked practice как автоматически inferior learning;
- трактовки random/interleaved practice как универсально superior;
- отождествления contextual interference с хаосом/максимальной вариативностью;
- смешения blocked/random с constant/variable;
- трактовки variable practice как универсально superior;
- предположения универсального whole-vs-part winner;
- превращения “repetition without repetition” в разрешение на бесконтрольную вариативность;
- игнорирования specificity;
- предположения, что fatigue practice автоматически создаёт fatigue resilience;
- трактовки plateau как доказательства, что дальнейшая практика бесполезна;
- объявления diminishing returns универсальной dose-response функцией;
- назначения точной RT-skill frequency/volume из непрямых motor-learning paradigms.

---

## 1. Materials audited

1. `areas/04_neurophysiology_motor_learning.md`, Section 13 — 12 exact items;
2. `NORMALIZED_KNOWLEDGE_TREE.md`, NEU-13;
3. `PASS-01_practice_organization_revalidation.md`;
4. `EVIDENCE_LEDGER.md`, NEU13-01…NEU13-12;
5. upstream canonical boundaries:
   - `NEU-09_motor_control.md`;
   - `NEU-11_learning_vs_performance_retention_transfer.md`;
   - `NEU-12_explicit_implicit_constraints_based_learning.md`;
6. independent closure re-check:
   - random-vs-blocked 24-h retention — PMID 42691817;
   - CI retention meta-analysis — PMID 38987617;
   - CI transfer meta-analysis — PMID 39205981;
   - sprint-hurdle applied CI study — PMID 38198493;
   - working-memory × schedule study — PMID 39011949;
   - context-dependent learning study — PMID 29498594;
   - spacing / reactive-inhibition study — PMID 42177224;
   - massed serial-motor RCT — PMID 40778584;
   - tennis spacing RCT — PMID 42640629;
   - constant-vs-variable registered report — PMID 41351896;
   - variable-practice load study — PMID 38948206;
   - constant→variable stabilization study — PMID 36132213;
   - specific-vs-variable retention/transfer study — PMID 16158696;
   - whole-vs-part meta-analysis — PMID 20038005;
   - medical/procedural motor-learning systematic review — PMID 26768734;
   - juggling whole-vs-parts study — PMID 38022928;
   - repetition-without-repetition perspective — PMID 32903689;
   - execution retention/transfer study — PMID 42607302;
   - procedural-skill retention meta-analysis — PMID 40455501;
   - practice-dose modeling — PMID 32830617;
   - personalized plateau/overpractice RCT — PMID 36189036;
   - long-horizon high-volume skill dataset — PMID 34987368;
   - fatigue systematic review — PMID 42480681;
   - fatigue scoping review — PMID 41616950;
   - fatigued-practice RCT — PMID 42811472;
   - squat acquisition/retention RCT — PMID 37916599;
   - acute isometric random/serial/constant study — PMID 42836868.

No closure-critical contradiction was found.

One claim was tightened:

> “diminishing marginal efficiency” is a recurring pattern in several dose datasets, not a universal law. Practice beyond a within-session plateau can still improve later retention in some populations/tasks.

---

## 2. Exact area-map audit — 12/12

1. Practice frequency — **PASS AS A DISTINCT TEMPORAL DIMENSION WITHOUT UNIVERSAL OPTIMUM**.
2. Practice volume — **PASS AS DOSE/EXPOSURE WITHOUT UNIVERSAL LINEAR DOSE-RESPONSE**.
3. Distributed vs massed practice — **PASS AS TASK- AND TIME-SCALE-DEPENDENT**.
4. Blocked practice — **PASS AS LEGITIMATE SCHEDULE, OFTEN ACQUISITION-FRIENDLY**.
5. Random/interleaved practice — **PASS WITH AVERAGE RETENTION BENEFIT BUT NON-UNIVERSAL APPLIED EFFECT**.
6. Constant vs variable practice — **PASS AS SPECIFICITY–TRANSFER DESIGN CHOICE, NOT UNIVERSAL HIERARCHY**.
7. Whole vs part practice — **PASS AS TASK-ORGANIZATION/SEPARABILITY-DEPENDENT**.
8. Repetition without mindless repetition — **PASS AS FLEXIBLE TASK-RELEVANT REPETITION, NOT MAXIMAL VARIABILITY**.
9. Contextual interference — **PASS AS REAL AVERAGE EFFECT WITH STRONG MODERATION / APPLIED LIMITS**.
10. Specificity of practice — **PASS AS NECESSARY TARGET-CONDITION EXPOSURE**.
11. Fatigue as modifier — **PASS AS STATE-/TASK-SPECIFIC MODIFIER**.
12. When additional practice stops useful signal — **PASS AS MARGINAL-VALUE HEURISTIC, NOT FIXED THRESHOLD**.

Result: **12/12 PASS.**

---

## 3. Frequency / volume / distribution audit

PASS — TAXONOMY BOUNDARY CONFIRMED.

These are different variables:

- **frequency** = recurrence of practice occasions;
- **volume** = amount of task exposure;
- **distribution** = temporal spacing/rest structure.

A schedule can have equal total volume but different:

- session count;
- days between sessions;
- inter-block rest;
- inter-trial rest.

Therefore no “frequency effect” is interpretable without dose and spacing.

No evidence reviewed supports one universal motor-skill practice frequency independent of:

- task;
- learner;
- fatigue;
- practice amount;
- spacing scale.

For compound resistance-exercise technique, no exact sessions/week prescription is justified from NEU-13 evidence alone.

Canonical rule:

**frequency, volume and distribution must be specified separately.**

No blocker.

---

## 4. Distributed vs massed audit

PASS — UNIVERSAL SPACING SUPERIORITY REJECTED.

The 2026 motor-sequence study (PMID 42177224) found:

- pronounced end-of-training performance advantage under spaced practice;
- later performance became statistically indistinguishable when test conditions were equated;
- no support for a simple “more breaks = more motor learning” rule.

The 2026 serial-motor RCT (PMID 40778584) provides a direct counterexample:

- 2-s inter-trial intervals produced better 24-h learning than 30-s intervals in children on that serial task.

The 2026 tennis-serve RCT (PMID 42640629):

- controlled practice volume;
- found no significant acquisition or retention difference between short-rest/consecutive-day and longer-rest/nonconsecutive-day schedules.

Therefore:

`distributed > massed`

is not a universal motor-learning law.

Spacing can change:

- fatigue/reactive inhibition;
- immediate performance;
- retrieval demands;
- consolidation opportunity;
- number of repetitions achievable;
- task continuity.

Canonical rule:

**name the exact spacing scale and infer learning from delayed outcomes, not fresh-state practice performance.**

No blocker.

---

## 5. Blocked vs random audit

PASS WITH ACQUISITION–RETENTION BOUNDARY.

The 2026 DSP study (PMID 42691817) showed:

- blocked practice better at the end of acquisition;
- no BP–RP difference at 5 min or 6 h;
- random practice better at 24 h.

This is strong contemporary confirmation of the learning-performance distinction.

However it is not universal evidence for random practice across all skills.

Counterweight:

- applied motor tasks can show smaller, absent or task-specific benefits;
- practice-schedule × learner/task interactions remain plausible;
- the 2026 acute knee-extension force-reproduction study (PMID 42836868) found no condition-specific immediate accuracy benefit after random vs serial vs constant practice.

Canonical rule:

**blocked practice can be useful for early execution/stability; random/interleaved practice can improve delayed learning in many paradigms, but neither is universally superior.**

No blocker.

---

## 6. Contextual-interference audit

PASS — EFFECT REAL, GENERALIZATION LIMITED.

### Retention

The 2024 systematic review/meta-analysis (PMID 38987617):

- included 54 studies in meta-analysis;
- found a statistically significant medium beneficial effect of high CI overall;
- found clear benefit in laboratory settings;
- found applied-setting retention benefit almost negligible;
- young-participant pooled effect was negligible/non-significant.

### Transfer

The transfer meta-analysis (PMID 39205981):

- 42 studies in review;
- 34 in quantitative synthesis;
- overall transfer SMD ≈ 0.55 favoring random practice;
- laboratory SMD ≈ 0.75 and significant;
- applied SMD ≈ 0.34 and statistically non-significant.

### Applied countercheck

The sprint-hurdle study (PMID 38198493):

- found no retention difference;
- found delayed transfer advantage for increasing CI.

This mixed pattern is consistent with a real but moderated effect.

Canonical rule:

**contextual interference is an average learning effect, not a guarantee and not a reason to maximize randomness.**

No blocker.

---

## 7. CI mechanism / chaos boundary

PASS.

Random/interleaved practice can increase:

- action-plan reconstruction;
- retrieval;
- discrimination among task variants;
- resistance to incidental context dependence.

The context-learning study (PMID 29498594) found blocked learners more disrupted by altered incidental context than random learners.

But CI should not be translated into:

- changing unrelated exercises every repetition;
- maximizing movement error;
- removing all stable practice;
- randomizing safety-critical setup;
- randomizing dimensions irrelevant to target transfer.

Canonical rule:

**interleave relevant variants to create useful reconstruction/retrieval demand; do not equate CI with chaos.**

No blocker.

---

## 8. Constant vs variable audit

PASS — UNIVERSAL VARIABILITY SUPERIORITY REJECTED.

The 2026 registered report (PMID 41351896; n=80):

- compared constant criterion practice with criterion + four additional targets;
- found no significant 24-h retention difference;
- Bayesian analysis supported the null.

The 2024 variable-load study (PMID 38948206):

- showed that more variability was not better;
- lower variability produced larger error reduction in that throwing task.

The stabilization study (PMID 36132213):

- found no retention advantage from adding variable practice after stabilization.

Older specific-vs-variable evidence (PMID 16158696) supports a plausible trade-off:

- specific practice better for criterion retention;
- variable practice better for transfer to an untrained speed.

Canonical rule:

**variable practice is justified by relevant transfer/generalization demands, not by a universal “variability improves learning” rule.**

No blocker.

---

## 9. Practice content vs practice order audit

PASS — CRITICAL TAXONOMY.

These contrasts are not synonymous.

### Constant vs variable
What task conditions/parameter values are practiced.

### Blocked vs random
In what order multiple practiced variants are arranged.

Therefore:

- variable-blocked;
- variable-random;
- serial/progressive;
- constant

are distinct designs.

A CI effect cannot automatically be used as evidence for variability-of-practice theory, and vice versa.

Canonical rule:

**practice content and practice order must be reported separately.**

No blocker.

---

## 10. Whole vs part audit

PASS WITH EVIDENCE-QUALITY LIMIT.

The 2009 whole/part meta-analysis (PMID 20038005):

- located 44 articles;
- only 20 had sufficient data for effect sizes;
- several comparisons were limited by too few studies;
- average findings generally supported classic task-organization/complexity recommendations.

The 2016 systematic review in procedural/medical learning (PMID 26768734):

- found all included studies at high risk of bias;
- judged evidence insufficient for definitive whole-vs-part recommendations.

The 2023 juggling study (PMID 38022928):

- whole-task group improved faster early;
- part-learning group caught up by the end of training.

Therefore no universal whole/part winner is defensible.

Canonical rule:

**use whole practice when preserving integrated coordination is important and feasible; use part practice when a meaningful separable bottleneck must be isolated, then verify transfer back to the whole target.**

No blocker.

---

## 11. Repetition without repetition audit

PASS WITH EVIDENCE-TYPE BOUNDARY.

“Repetition without repetition” (PMID 32903689) is a conceptual/perspective framework, not an RCT proving that more movement variability causes better learning.

Its useful project contribution is narrower:

- stable skill outcome can coexist with changing movement solutions;
- skilled behavior requires some flexibility;
- exact repetition identity is not required.

Upstream NEU-09/12 already established:

- multiple successful motor solutions can exist;
- variability may be functional or nonfunctional.

Therefore:

**repeat the task-relevant control problem, not an exact universal kinematic template.**

This does not authorize:

- maximal variability;
- random errors;
- abandoning technique constraints.

No blocker.

---

## 12. Specificity audit

PASS — TARGET EXPOSURE REMAINS NECESSARY.

The 2026 execution study (PMID 42607302) showed:

- practice-dependent execution gains were retained;
- transfer could be broad;
- transfer remained constrained by movement direction.

The constant-vs-variable registered report also shows that adding task variants does not automatically improve retention of one criterion target.

Thus specificity and variability are not mutually exclusive.

A defensible schedule can contain:

- target-condition repetitions for specificity;
- relevant variations for desired transfer.

Canonical rule:

**variation should correspond to a transfer dimension that matters, while the actual target condition must still be practiced and tested.**

No blocker.

---

## 13. Practice volume / diminishing-returns audit

PASS WITH IMPORTANT REFINEMENT.

PASS-01 correctly rejected a universal linear “more is always proportionally better” model.

However closure audit tightens the alternative.

### Evidence for diminishing efficiency

The chronic-stroke dose-modeling study (PMID 32830617) found:

- larger doses increased total efficacy;
- gain per unit practice decreased with greater dose/additional bouts.

The large real-world video-game dataset (PMID 34987368) found nonlinear relations among daily practice amount and learning.

These support **possible/recurring diminishing marginal efficiency**.

### Counterexample to “plateau = stop”

The older-adult RCT (PMID 36189036):

- compared low dose, practice-to-plateau and 100% overpractice beyond plateau;
- higher/personalized practice doses improved some delayed learning outcomes;
- total number of trials predicted learning more strongly than PtP vs OVP assignment for some outcomes.

Therefore:

- plateau does not prove further practice has zero learning value;
- overpractice can sometimes improve later learning;
- diminishing efficiency is not a universal monotonic law.

Canonical rule:

**practice dose should be judged by marginal learning value, not by a universal plateau or repetition threshold.**

No blocker.

---

## 14. “When does practice stop giving useful signal?” audit

PASS AS PRACTICAL HEURISTIC ONLY.

No universal stopping number was found for healthy adult motor skill or resistance-exercise technique.

Additional trials may still contribute via:

- refinement;
- consolidation;
- retrieval;
- robustness;
- relevant transfer exposure.

Their value becomes less compelling when trials mainly add:

- fatigue-driven deterioration;
- repetitive failure without new information;
- trivial success in a solved condition unrelated to transfer goals;
- practice of a non-target condition with no reason to expect transfer.

Project operational rule:

Continue/reorganize practice based on:

1. target-specific quality;
2. error information;
3. retention/transfer objective;
4. fatigue state;
5. marginal improvement/learning value.

Status:

**PRACTICAL_HEURISTIC**, not a validated universal biological cutoff.

No blocker.

---

## 15. Fatigue audit

PASS — STATE/TASK DEPENDENCE CONFIRMED.

The 2026 systematic review (PMID 42480681; 43 experiments) found acquisition effects:

- 65.1% detrimental;
- 9.3% facilitatory;
- 16.3% neutral;
- 9.3% mixed/inconclusive.

Retention findings varied by:

- fatigue modality;
- task demands;
- test context.

Local neuromuscular fatigue appeared most consistently disruptive.

The 2026 fatigued-practice RCT (PMID 42811472):

- found learning in both fatigue and control groups;
- found no reliable group-level impairment;
- found no clear fatigue-resilience benefit from practicing after cardiovascular fatigue.

Canonical rule:

**fatigue can alter the learning problem, but fatigue practice neither universally impairs learning nor automatically inoculates against fatigue.**

No blocker.

---

## 16. Direct resistance-exercise evidence audit

PASS WITH STRONG INDIRECTNESS WARNING.

The direct evidence located remains narrow.

### Squat

PMID 37916599 establishes:

- acquisition of several squat variables;
- delayed retention of some variables;
- feedback-dependent effects.

It does not compare:

- massed vs distributed;
- blocked vs random;
- constant vs variable;
- whole vs part.

### Isometric knee extension

PMID 42836868:

- n=15 physically active men;
- randomized crossover of constant/serial/random intensity order;
- one acute 15-min force-reproduction session;
- no schedule-specific immediate accuracy advantage;
- no long-term retention result.

This is resistance-adjacent practice-order evidence, not a compound-lift learning prescription.

### Search boundary

The closure search did not identify a direct long-term RCT in squat/press/deadlift-type technique comparing the main NEU-13 schedule families.

Therefore:

**general motor-learning evidence can constrain RT coaching logic but cannot specify an exact compound-lift schedule.**

No blocker for NEU-13 because exact programming belongs downstream to PRO/TEC/IND.

---

## 17. Retention-decay / practice-frequency boundary

PASS.

The 2025 procedural-skill retention meta-analysis (PMID 40455501) confirms that nonuse is associated with skill decay, but decay varies with:

- outcome type;
- task type;
- task complexity;
- intermittent use;
- instructions.

It does not provide one universal refresher frequency for compound lifts.

Therefore “practice often enough not to forget” is qualitatively valid but not numerically prescriptive at NEU-13.

Canonical rule:

**frequency should eventually be matched to observed retention/decay of the actual target skill, not borrowed from a universal motor-memory half-life.**

No blocker.

---

## 18. Cross-topic consistency audit

### NEU-09 — Motor control

PASS.

NEU-13 preserves:

- motor abundance;
- functional variability;
- multiple valid task solutions;
- exact kinematic identity is not required.

### NEU-11 — Learning vs performance

PASS.

NEU-13 preserves:

- acquisition ≠ learning;
- delayed retention is stronger evidence;
- transfer must be tested;
- fresh-state performance does not establish fatigue robustness.

### NEU-12 — Constraints / progression / challenge

PASS.

NEU-13 preserves:

- no universal optimal difficulty;
- no universal easy→hard law;
- practice variation should serve target-specific learning rather than ideology.

No contradiction found.

---

## 19. Evidence-ledger audit

Current NEU13-01…NEU13-12 coverage is adequate for closure.

One wording correction is required:

### NEU13-02

PASS-01 ledger phrasing could be read as if marginal efficiency always declines with added practice.

Closure refinement:

- diminishing marginal efficiency is supported in some dose datasets;
- it is **not universal**;
- plateau does not imply zero future learning value;
- overpractice can improve retention in some settings.

The ledger should be updated accordingly.

No other closure-critical ledger change is required.

---

## 20. Uncertainty audit

PASS.

Remaining uncertainty is real but non-blocking:

1. exact compound-lift practice frequency;
2. optimal within-session rest for technique learning under load;
3. optimal inter-session spacing independent of physical recovery;
4. applied CI magnitude in high-force resistance skills;
5. best random/block transition point for a novice lift;
6. exact amount/type of variability that improves desired load/implement transfer;
7. whole-vs-part decomposition for specific lifts;
8. objective marginal-value stopping metric;
9. best use of overpractice after apparent plateau;
10. best fatigue-state exposure for technical robustness;
11. learner-specific modifiers such as working memory/attention;
12. interaction with feedback, focus, cueing and demonstration.

These are downstream PRO, TEC, TST, COA and IND questions when a concrete decision requires them.

---

## 21. Scope-control audit

Neighboring ownership remains separate:

- attentional focus → NEU-14;
- feedback timing/frequency → NEU-15;
- cueing → NEU-16;
- demonstration/video → NEU-17;
- error diagnosis/correction → NEU-18;
- exact exercise frequency/volume/rest prescriptions → PRO;
- exercise-specific drills/progressions → TEC;
- test schedule / skill-retention monitoring → TST;
- individual practice architecture → IND/COA.

No additional NEU-13 PASS is required before closure.

---

## 22. Closure criterion test

Topic:

> NEU-13 — Practice organization

Result: **PASS.**

Canonical synthesis:

`practice organization`
is multidimensional:

`frequency`
+
`volume`
+
`spacing`
+
`content variability`
+
`order/interleaving`
+
`whole/part structure`
+
`target specificity`
+
`fatigue state`.

No single axis has a universal optimum.

A defensible learning schedule must balance:

- enough repetition for acquisition/refinement;
- delayed retention;
- relevant transfer;
- target specificity;
- informative variation;
- manageable fatigue.

The main project-level rule is:

**organize practice around the target skill and the learning outcome being tested, not around a universal slogan such as “always random,” “always spaced,” “always variable,” or “more is always better.”**

---

## 23. Closure decision

**NEU-13 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 12 exact Section 13 items pass;
2. practice frequency, volume and distribution remain separate;
3. no universal practice-frequency optimum is established;
4. distributed practice is not universally superior to massed motor practice;
5. blocked practice can improve acquisition and is not inherently inferior;
6. random/interleaved practice has an average retention benefit but is not universally superior;
7. CI retention/transfer effects are substantially moderated and weaker in applied settings;
8. CI does not mean chaos or maximal randomness;
9. blocked/random and constant/variable are distinct dimensions;
10. variable practice is not universally superior;
11. specificity and variability can be combined;
12. whole-vs-part choice depends on task architecture and transfer back to the whole;
13. repetition need not mean exact kinematic duplication;
14. diminishing marginal efficiency is possible/recurring, not a universal law;
15. plateau does not prove extra practice is useless;
16. no universal repetition stopping threshold exists;
17. fatigue modifies learning in task/state-specific ways;
18. fatigue practice does not automatically create fatigue robustness;
19. direct compound-lift schedule evidence remains sparse;
20. exact RT practice scheduling remains downstream PRO/TEC/IND work;
21. no project-relevant blocker remains;
22. first canonical NEU-13 finding can now be created.

---

## 24. Next dependency

**NEU-14 — Attention and focus.**

Do not start NEU-14 in this same working block.
