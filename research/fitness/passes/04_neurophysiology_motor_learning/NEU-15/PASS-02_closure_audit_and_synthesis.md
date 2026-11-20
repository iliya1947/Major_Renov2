# NEU-15 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-19  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 04 — Neurophysiology / Motor Learning  
Topic: NEU-15 — Feedback

## 0. Purpose

Независимо перепроверить PASS-01 и решить, достаточно ли NEU-15 закрывает Area 04 Section 15 для downstream NEU-16…NEU-18, TEC, PRO, TST, COA и IND без:

- смешения intrinsic и augmented feedback;
- смешения KR и KP;
- смешения descriptive и prescriptive KP;
- универсализации immediate > delayed;
- универсализации terminal > concurrent;
- трактовки guidance hypothesis как установленного закона;
- универсализации reduced-frequency / faded / bandwidth / summary schedules;
- универсализации self-controlled feedback;
- вывода о dependency только по высокой feedback frequency;
- подмены learner error detection внешней коррекцией;
- подмены motor learning acute RT performance effect;
- назначения точной compound-lift feedback architecture из лабораторных/rehab задач.

---

## 1. Materials audited

1. `areas/04_neurophysiology_motor_learning.md`, Section 15 — 15 exact items;
2. `NORMALIZED_KNOWLEDGE_TREE.md`, NEU-15;
3. `PASS-01_feedback_revalidation.md`;
4. `EVIDENCE_LEDGER.md`, NEU15-01…NEU15-12;
5. upstream canonical boundaries:
   - NEU-11 — acquisition vs retention vs transfer;
   - NEU-12 — explicit/implicit learning;
   - NEU-13 — practice organization;
   - NEU-14 — attention/focus;
6. independent closure re-check:
   - augmented feedback review — PMID 23132605;
   - augmented-feedback systematic review — PMID 34976475;
   - KR-vs-KP systematic review — DOI 10.1080/1750984X.2021.1986849;
   - temporal locus of KR meta-analysis — PMID 7624211;
   - KR delay + subjective estimation RCT — PMID 9200248;
   - reduced-feedback-frequency meta-analysis — DOI 10.1016/j.psychsport.2022.102165;
   - reduced-frequency postural-control RCT — PMID 38474940;
   - frequent-feedback complex-skill study — PMID 20037033;
   - faded KR study — PMID 31528010;
   - faded-vs-constant walking RCT — PMID 41353792;
   - bandwidth KR — PMID 7973073, 7644839;
   - summary KR — PMID 1925056, 2522520, 2028090;
   - self-controlled feedback meta-analysis — PMID 41009321;
   - self-controlled timing RCTs — PMID 41050791;
   - replication challenge — PMID 34963413;
   - error-estimation × KR frequency — PMID 11404216;
   - error-detection study — PMID 16898274;
   - RT feedback meta-analysis — PMID 37410360;
   - squat visual/tactile feedback RCT — PMID 37916599;
   - technological vs traditional squat feedback — PMID 36056403;
   - AI real-time motor-feedback meta-analysis — PMID 43016567.

No closure-critical contradiction was found.

---

## 2. Exact area-map audit — 15/15

1. Intrinsic feedback — **PASS AS TASK-GENERATED SENSORY INFORMATION**.
2. Extrinsic/augmented feedback — **PASS AS EXTERNALLY SUPPLIED SUPPLEMENTAL INFORMATION**.
3. Knowledge of results — **PASS AS OUTCOME INFORMATION**.
4. Knowledge of performance — **PASS AS MOVEMENT INFORMATION; DESCRIPTIVE/PRESCRIPTIVE DISTINCTION REQUIRED**.
5. Immediate feedback — **PASS AS POSSIBLY ACQUISITION-FRIENDLY, NOT UNIVERSALLY BEST FOR LEARNING**.
6. Delayed feedback — **PASS AS POSSIBLY SUPPORTING SELF-EVALUATION, NO UNIVERSAL DELAY OPTIMUM**.
7. Concurrent feedback — **PASS AS STRONG GUIDANCE/PERFORMANCE TOOL WITH POSSIBLE WITHDRAWAL COST**.
8. Terminal feedback — **PASS AS INDEPENDENCE-FRIENDLY IN SOME TASKS, NOT UNIVERSALLY SUPERIOR**.
9. Feedback frequency — **PASS WITH UNIVERSAL REDUCED-FREQUENCY SUPERIORITY REJECTED**.
10. Faded feedback — **PASS AS PLAUSIBLE ADAPTIVE SCHEDULE, NOT UNIVERSAL LAW**.
11. Bandwidth feedback — **PASS AS ERROR-TOLERANCE STRATEGY, NO UNIVERSAL BAND**.
12. Summary feedback — **PASS AS BATCHED FEEDBACK STRATEGY, NO UNIVERSAL SUMMARY LENGTH**.
13. Self-controlled feedback — **PASS AS PROMISING RETENTION/TRANSFER STRATEGY WITH BIAS/HETEROGENEITY LIMITS**.
14. Dependency risk — **PASS AS EMPIRICAL WITHDRAWAL PHENOMENON, NOT FREQUENCY LABEL**.
15. Error detection by learner — **PASS AS CORE SELF-EVALUATION CAPACITY MODULATING FEEDBACK EFFECTS**.

Result: **15/15 PASS.**

---

## 3. Feedback taxonomy audit

PASS — CORE TAXONOMY CONFIRMED.

### Intrinsic feedback

Information naturally available from performing the task:

- proprioception;
- vision;
- audition;
- tactile input;
- vestibular input;
- force/effort sensation.

### Augmented feedback

Externally supplied information that supplements intrinsic information:

- coach statement;
- video replay;
- externally added display;
- velocity readout;
- force trace;
- haptic guidance;
- software/AI.

Canonical rule:

**feedback source is separate from feedback content, timing, modality and schedule.**

No blocker.

---

## 4. KR vs KP audit

PASS — NO UNIVERSAL HIERARCHY.

### KR

Information about task outcome relative to the goal.

### KP

Information about movement execution/characteristics.

The KR-vs-KP systematic review:

- included 19 studies;
- was almost entirely novice-dominant;
- could not be meta-analyzed because of heterogeneity;
- found no clear universal KR-vs-KP winner;
- found relatively consistent benefit of KR + prescriptive KP over KR alone;
- found prescriptive KP more favorable than purely descriptive KP in several comparisons.

Therefore:

`KP > KR`

and

`KR > KP`

are both rejected as universal rules.

Canonical rule:

**select feedback by the information problem: outcome error → KR; missing movement information → KP; when KP is used, prescriptive vs descriptive content matters.**

No blocker.

---

## 5. Descriptive vs prescriptive KP audit

PASS — CLOSURE-CRITICAL DISTINCTION.

### Descriptive KP

States what occurred:

> “your trunk flexed earlier.”

### Prescriptive KP

Connects the observation to an intended change:

> “next repetition, delay trunk flexion relative to knee motion.”

The systematic review's most practically useful result is not “KP wins,” but:

**feedback that contains actionable movement information can be more useful than movement description alone.**

Limit:

- mostly novice evidence;
- task heterogeneity;
- exact cue wording belongs NEU-16.

No blocker.

---

## 6. Immediate vs delayed feedback audit

PASS — UNIVERSAL TIMING RULE REJECTED.

Classic timing evidence indicates:

- immediate feedback can improve current acquisition;
- delayed feedback can sometimes improve retention;
- effects are small/task dependent;
- learner self-estimation during the delay may matter.

PMID 9200248 showed:

- immediate KR improved acquisition accuracy;
- delayed KR improved retention;
- subjective form estimation improved later error estimation/accuracy.

Therefore:

**delay is not valuable merely because it is delay; its potential value includes allowing intrinsic processing/self-evaluation before augmented information arrives.**

No universal optimal delay duration is established.

No blocker.

---

## 7. Concurrent vs terminal audit

PASS — PERFORMANCE/LEARNING DISSOCIATION CONFIRMED.

PMID 41050791 provides contemporary direct evidence:

- concurrent visual feedback produced the smallest practice error;
- terminal feedback produced larger practice error;
- at one-week no-feedback retention, terminal and self-controlled groups outperformed concurrent;
- self-controlled participants shifted from more concurrent feedback early toward more terminal feedback later.

This is a strong example of:

`better guided practice performance`
≠
`better independent retention`.

However:

- this was a grasping-force task;
- concurrent feedback can be useful in complex tasks;
- one timing result cannot define all motor learning.

Canonical rule:

**concurrent feedback is optimized for online guidance in some tasks; terminal feedback preserves more learner-generated control in some tasks.**

No blocker.

---

## 8. Feedback-frequency / guidance-hypothesis audit

PASS — UNIVERSAL GUIDANCE HYPOTHESIS REJECTED.

The 2022 meta-analysis:

- 61 eligible papers;
- k = 75;
- N = 2228;
- substantial heterogeneity;
- no significant benefit of reduced relative feedback frequency for acquisition;
- no significant benefit for immediate retention;
- no significant benefit for delayed retention;
- no significant acquisition-to-retention reversal;
- literature was severely underpowered.

Therefore the classical statement:

> high-frequency feedback improves acquisition but harms learning; reduced feedback is generally better for retention

is **not supported as a robust universal law**.

This does not mean guidance/dependency effects never occur.

It means:

**frequency alone is insufficient to predict learning.**

No blocker.

---

## 9. Counterexamples to one universal frequency rule

PASS.

Task-specific studies show opposite directions.

### Reduced-frequency positive example

PMID 38474940:

- postural-control task;
- 67% feedback outperformed 0%, 33% and 100% under that protocol.

### High-frequency positive example

PMID 20037033:

- complex ski-simulator task;
- 100% feedback outperformed reduced/no-feedback conditions.

Therefore:

**feedback frequency interacts with task complexity, information availability and what the feedback contributes.**

No universal feedback percentage is defensible.

No blocker.

---

## 10. Faded feedback audit

PASS — POSITIVE TASK-SPECIFIC EVIDENCE, NO UNIVERSAL LAW.

PMID 31528010:

- faded KR showed positive retention findings in an isometric force task.

PMID 41353792:

- n = 36 healthy adults;
- constant KR every trial vs 50% faded KR;
- both improved immediately;
- faded group outperformed constant group at 24 and 48 h retention;
- faded group also outperformed at transfer with ankle weight.

This is strong contemporary task-specific support for fading.

But it does not override the broader null frequency meta-analysis.

Canonical rule:

**fading is a plausible way to shift from external support toward independent control when the learner can use intrinsic information, but no universal fade rate or final frequency exists.**

No blocker.

---

## 11. Bandwidth feedback audit

PASS WITH LAB-TASK LIMIT.

Bandwidth feedback provides augmented feedback only when error exceeds a predefined tolerance.

This changes two things simultaneously:

1. feedback frequency;
2. semantic meaning of silence (“inside acceptable band”).

Classic studies show possible retention/error-detection benefits.

Therefore bandwidth effects cannot be interpreted as pure frequency effects.

Canonical rule:

**bandwidth feedback means intervene outside a task-relevant tolerance, not apply a universal percentage band.**

The evidence is old and mostly simple-task based.

No blocker.

---

## 12. Summary feedback audit

PASS WITH APPLIED-RT LIMIT.

Summary feedback provides feedback after multiple attempts rather than after each trial.

Potential value:

- less moment-to-moment guidance;
- self-processing across trials;
- pattern recognition.

Classic studies found task-dependent retention benefits, but different studies favored different summary lengths.

Therefore:

**there is no universal “feedback every N repetitions” summary rule.**

For compound lifts, summary feedback after a set is plausible, but exact set/repetition timing remains downstream.

No blocker.

---

## 13. Self-controlled feedback audit

PASS WITH BIAS-SENSITIVE INTERPRETATION.

The 2025 meta-analysis (PMID 41009321):

- 29 studies;
- 1147 participants;
- no significant acquisition benefit vs passively received feedback:
  - SMD ≈ 0.20, CI included zero;
- retention:
  - SC > PR, SMD ≈ 0.63;
- transfer:
  - SC > PR, SMD ≈ 0.68;
- similar positive retention/transfer comparisons vs yoked groups.

However:

- significant heterogeneity was present;
- Egger tests indicated publication bias for retention and transfer;
- many studies were small (median sample size about 28);
- most participants were college-aged;
- moderation by skill type/cognitive status was inconsistent/limited by subgroup size.

Therefore:

**self-controlled feedback is promising, especially for retention/transfer, but universal superiority is not established.**

No blocker.

---

## 14. Self-controlled timing audit

PASS — USEFUL MECHANISTIC CLUE, NOT UNIVERSAL ALGORITHM.

PMID 41050791 showed:

- self-controlled timing improved one-week retention relative to concurrent feedback;
- self-controlled outperformed yoked control;
- learners progressively chose less concurrent and more terminal feedback over practice.

This suggests learners can adapt feedback timing to perceived information needs.

But:

- one grasping-force task;
- relatively small samples;
- cannot prove that all learners self-regulate optimally.

Canonical rule:

**learner control can be useful as one feedback architecture; it is not evidence that coach-controlled feedback should be abandoned.**

No blocker.

---

## 15. Feedback dependency audit

PASS — EMPIRICAL DEFINITION REQUIRED.

Dependency should mean:

> performance drops disproportionately when augmented feedback is removed.

It is not equivalent to:

- 100% feedback frequency;
- concurrent feedback by definition;
- repeated coaching by itself.

Evidence shows dependency can occur, especially with concurrent online guidance.

But the broad frequency meta-analysis does not support using feedback frequency itself as a proxy.

Canonical rule:

**test dependency through no-feedback retention/transfer, not through feedback-frequency labels.**

No blocker.

---

## 16. Learner error-detection audit

PASS — CORE MECHANISM BOUNDARY CONFIRMED.

PMID 11404216 showed a critical interaction:

- 100% KR + required error estimation produced strong retention;
- 100% KR without error estimation produced poor retention.

This directly undermines a simplistic:

`100% feedback = dependency`

interpretation.

PMID 9200248 likewise supports learner self-estimation before/around KR.

Therefore the more useful model is:

`intrinsic estimate`
→
`augmented feedback comparison`
→
`updated action hypothesis`.

Project rule:

**feedback should ideally calibrate learner error detection rather than permanently substitute for it.**

This is a practical principle, not proof of one universal sequence.

No blocker.

---

## 17. RT feedback meta-analysis audit

PASS WITH PERFORMANCE-vs-LEARNING BOUNDARY.

PMID 37410360 synthesized 20 resistance-training feedback studies.

The review supports:

- acute performance enhancement;
- approximately 8.4% higher barbell velocity in pooled acute comparisons;
- positive pooled acute effect;
- visual feedback often larger than verbal in acute contexts;
- possible chronic benefits for strength/power/technical outcomes.

But:

- chronic evidence was much smaller;
- study populations/modalities were heterogeneous;
- many outcomes were acute output, not delayed skill retention;
- high-frequency feedback during RT cannot be reinterpreted as proof that 100% technical feedback maximizes motor learning.

Canonical rule:

**feedback that improves acute output can be useful for performance/training intent without proving superior technique learning.**

No blocker.

---

## 18. Direct squat feedback audit

PASS — DIRECT BUT NARROW EVIDENCE.

PMID 37916599:

- randomized double-blind controlled trial;
- n = 30 healthy novices;
- visual video feedback vs tactile/manual feedback vs control;
- feedback was given after each set;
- visual feedback improved multiple squat variables;
- visual-group retention persisted:
  - 3 days for neutral knee position;
  - 1 week for trunk forward lean, anterior knee displacement and AP COP;
- tactile-group changes were not similarly retained.

This is genuine direct compound-exercise acquisition/retention evidence.

Limitations:

- n = 10/group;
- one exercise;
- selected kinematic/COP outcomes;
- no factorial comparison of feedback frequency/timing/content;
- no proof that visual feedback is universally best for squats or other lifts.

Canonical rule:

**visual augmented feedback can improve novice squat learning under at least one protocol, but exact feedback architecture remains unresolved.**

No blocker.

---

## 19. Technology-vs-trainer squat audit

PASS — NO UNIVERSAL MODALITY WINNER.

PMID 36056403:

- n = 19 untrained women;
- five weeks;
- technological open-ended augmented feedback vs traditional verbal trainer feedback;
- both groups improved squat resistance/strength;
- no significant between-group differences in observed changes.

Therefore:

**technology is not inherently superior to trainer feedback.**

Modality should be chosen by:

- information quality;
- usability;
- cost;
- access;
- task relevance.

No blocker.

---

## 20. Current AI real-time feedback audit

PASS — PERFORMANCE ≠ DURABLE LEARNING.

PMID 43016567 (2026):

- 18 studies in systematic review;
- 11 in meta-analysis;
- pooled post-intervention Hedges g ≈ 1.48;
- I² ≈ 94.7%;
- 95% prediction interval crossed zero;
- GRADE certainty very low;
- none of the pooled outcomes assessed delayed retention or transfer.

Therefore:

**large real-time post-intervention effects cannot be called durable motor learning without delayed retention/transfer.**

This source reinforces NEU-11 boundaries.

No blocker.

---

## 21. Cross-topic consistency audit

### NEU-11 — learning vs performance

PASS.

NEU-15 preserves:

- feedback-supported acquisition ≠ durable learning;
- retention should preferably remove the feedback being tested;
- transfer is separate.

### NEU-12 — explicit/implicit

PASS.

Feedback format does not establish process purity.

### NEU-13 — practice organization

PASS.

Feedback schedule is one practice variable, not a universal learning optimizer.

### NEU-14 — attention

PASS.

Feedback content can alter attentional focus, but attentional-focus effects are not treated as feedback effects by default.

No contradiction found.

---

## 22. Measurement non-equivalence audit

PASS.

Separate:

### Source
Intrinsic vs augmented.

### Content
KR vs KP; descriptive vs prescriptive.

### Modality
Visual, verbal, auditory, haptic, multimodal.

### Temporal locus
Concurrent vs terminal.

### Post-response interval
Immediate vs delayed.

### Frequency
Relative/absolute feedback frequency.

### Schedule
Constant, faded, bandwidth, summary, self-controlled.

### Acquisition
Performance during practice.

### Learning
Delayed retention/transfer.

### Dependency
Withdrawal cost.

### Error detection
Learner's own estimate accuracy.

Project rule:

**feedback studies are interpretable only when these dimensions are not collapsed.**

No blocker.

---

## 23. Practical synthesis for later strength-technique coaching

A defensible future coaching heuristic is:

1. let the learner experience the attempt and intrinsic information;
2. when feasible, ask for a brief self-estimate of outcome/error;
3. provide KR when the outcome itself is unclear;
4. provide targeted/prescriptive KP when the learner lacks movement information needed to correct a justified error;
5. use concurrent feedback when online guidance is needed, but verify independent execution without it;
6. use terminal/delayed feedback when preserving learner-generated processing is more important;
7. fade/reduce/bandwidth feedback only when it remains informative and independence is improving;
8. allow self-controlled feedback when the learner can use that autonomy productively;
9. verify learning with no-feedback retention/transfer;
10. do not force a fixed feedback percentage across tasks/learners.

Status:

**PRACTICAL_HEURISTIC**, not a proven universal algorithm.

---

## 24. Evidence-ledger audit

NEU15-01…NEU15-12 are adequate for closure.

No closure-critical correction is required.

The most important ledger boundaries are already explicit:

- universal reduced-frequency superiority rejected;
- faded positive evidence kept task specific;
- self-controlled retention/transfer benefit tempered by publication bias;
- dependency defined through withdrawal;
- error estimation can make high-frequency KR compatible with good retention;
- RT acute performance separated from motor learning.

No new ledger row is required for closure.

---

## 25. Uncertainty audit

PASS.

Remaining uncertainty is real but non-blocking:

1. exact KP/KR balance for specific compound-lift errors;
2. exact immediate/delayed interval;
3. exact concurrent-to-terminal transition;
4. optimal feedback frequency by lift and learner;
5. optimal fade rate;
6. meaningful bandwidth definition for technique;
7. practical summary schedule after sets;
8. who benefits most from self-controlled feedback;
9. feedback architecture under ADHD/attention constraints;
10. error-detection calibration metrics for lifting;
11. video dependency vs visual-learning benefit;
12. direct long-term squat/hinge/press feedback RCTs;
13. whether technological/AI feedback improves delayed retention beyond expert coaching;
14. expertise-dependent feedback scheduling.

These belong downstream NEU-16…18, TEC, TST, COA and IND when concrete decisions require them.

---

## 26. Scope-control audit

Neighboring ownership remains separate:

- cue wording/count/removal → NEU-16;
- demonstration/video observation → NEU-17;
- error taxonomy/correction workflow → NEU-18;
- exercise-specific technique → TEC;
- training architecture → PRO;
- measurement/retention tests → TST;
- ADHD implementation → PSY/COA;
- individual feedback preference/response → IND.

No additional NEU-15 PASS is required before closure.

---

## 27. Closure criterion test

Topic:

> NEU-15 — Feedback

Result: **PASS.**

Canonical synthesis:

Feedback should be modeled as:

`source`
+
`content`
+
`modality`
+
`timing`
+
`frequency/schedule`
+
`learner self-evaluation`
+
`task/goal`
→
`practice performance + retention + transfer`.

No universal law was established for:

- KP > KR;
- KR > KP;
- immediate > delayed;
- terminal > concurrent;
- reduced frequency > 100%;
- faded > constant;
- one bandwidth;
- one summary length;
- self-controlled > coach-controlled;
- frequent feedback = dependency;
- real-time feedback gain = durable learning.

---

## 28. Closure decision

**NEU-15 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 15 exact Section 15 items pass;
2. intrinsic and augmented feedback remain distinct;
3. KR and KP remain distinct;
4. descriptive vs prescriptive KP is closure-critical;
5. no universal KR-vs-KP hierarchy is retained;
6. immediate vs delayed timing is task dependent;
7. concurrent feedback can improve practice while producing withdrawal cost in some tasks;
8. terminal feedback is not universally superior;
9. universal reduced-frequency superiority / simple guidance hypothesis is rejected;
10. feedback frequency alone does not predict learning;
11. fading is plausible and supported in some tasks, not universal;
12. bandwidth feedback has no universal error band;
13. summary feedback has no universal summary length;
14. self-controlled feedback is promising for retention/transfer but bias/heterogeneity limit certainty;
15. dependency must be demonstrated after feedback withdrawal;
16. learner error estimation materially changes feedback effects;
17. feedback should calibrate self-evaluation rather than permanently replace it;
18. RT feedback improves acute output, but acute output ≠ motor learning;
19. direct visual-feedback squat retention evidence exists but is narrow;
20. technology/AI is not inherently superior;
21. exact compound-lift feedback architecture remains downstream;
22. no project-relevant blocker remains;
23. first canonical NEU-15 finding can now be created.

---

## 29. Next dependency

**NEU-16 — Cueing.**

Do not start NEU-16 in this same working block.
