# NEU-22 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-19  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 04 — Neurophysiology / Motor Learning  
Topic: NEU-22 — Application to resistance exercise

## 0. Purpose

Независимо перепроверить PASS-01 и решить, достаточно ли NEU-22 закрывает Area 04 Section 22 для downstream BIO, MEC, MED, TEC, PRO, TST, COA и IND без:

- подмены motor learning текущим practice performance;
- превращения “стабильной техники” в требование одинаковой кинематики каждого повторения;
- выдуманного универсального light→working-load порога;
- предположения, что рост нагрузки просто масштабирует один неизменный movement pattern;
- смешения technical failure с momentary muscular failure, volitional failure или velocity loss;
- трактовки exercise complexity как самостоятельной ценности;
- трактовки variability как случайного шума или универсально лучшего способа обучения;
- предположения автоматического skill transfer между похожими силовыми упражнениями;
- выхода в exact mechanics / safety / programming / testing scope раньше MEC/MED/TEC/PRO/TST.

---

## 1. Materials audited

1. `areas/04_neurophysiology_motor_learning.md`, Section 22 — 8 exact items;
2. `PASS-01_application_to_resistance_exercise_revalidation.md`;
3. `EVIDENCE_LEDGER.md`, NEU22-01…NEU22-08;
4. upstream canonical findings NEU-08, 09, 11, 13, 15, 16, 18 and 21;
5. independent current-source re-check:
   - squat acquisition/retention RCT — PMID **37916599**;
   - intensity/fatigue squat-bench-deadlift systematic review — PMID **41085612**;
   - failure/proximity-to-failure review — PMID **35247203**;
   - squat/bench task-failure study — PMID **33194334**;
   - structured-variability squat RCT — PMID **42965663**;
   - dynamic-RT specificity/transfer meta-analysis — PMID **40314751**;
   - free-weight vs machine meta-analysis — PMID **37582807**;
   - current ACSM 2026 RT Position Stand — PMID **41843416**;
   - novice exercise-complexity Delphi study — PMID **40041305**;
   - resistance-exercise variation systematic review — PMID **35438660**;
   - general motor skill/transfer study with task-similarity manipulation — PMID **38081160**;
   - current general motor transfer evidence from upstream NEU-21 — PMIDs **40811438**, **41213806**;
   - older ACSM progression model — PMID **19204579**, used only to test whether historical load-progression rules were actually motor-learning thresholds.

No closure-critical contradiction was found.

---

## 2. Exact area-map audit — 8/8

1. Освоение нового упражнения — **PASS AS SENSORIMOTOR ACQUISITION THAT REQUIRES RETENTION TO CLAIM DURABLE LEARNING**.
2. Стабилизация техники — **PASS AS REPEATABLE ACCEPTABLE CONTROL UNDER DEFINED CONSTRAINTS, NOT IDENTICAL KINEMATICS**.
3. Переход от лёгкой к рабочей нагрузке — **PASS WITHOUT UNIVERSAL MOTOR-LEARNING %1RM THRESHOLD; TARGET-LOAD EXPOSURE REQUIRED WHEN TARGET-LOAD EXECUTION MATTERS**.
4. Рост нагрузки меняет motor solution — **PASS; INTENSITY CHANGES OBSERVABLE KINETICS/KINEMATICS/TIMING AND CAN CHANGE COORDINATION STRATEGY**.
5. Technical failure — **PASS AS PROJECT OPERATIONAL TASK-CRITERION ENDPOINT, DISTINCT FROM MOMENTARY/VOLITIONAL FAILURE**.
6. Exercise too complex for purpose — **PASS AS PURPOSE-RELATIVE HEURISTIC; NO UNIVERSAL COMPLEXITY THRESHOLD**.
7. Stability vs variability — **PASS; STABILITY AND TASK-RELEVANT STRUCTURED VARIABILITY SERVE DIFFERENT FUNCTIONS; RANDOM VARIABILITY IS NOT PRESUMED BENEFICIAL**.
8. Transfer between similar exercises — **PASS ONLY IF TARGET TASK IS DIRECTLY TESTED; STRENGTH TRANSFER ≠ MOTOR-SKILL TRANSFER**.

Result: **8/8 PASS.**

---

## 3. New-exercise acquisition audit

PASS.

Direct resistance-exercise evidence is limited but sufficient for the project boundary.

PMID 37916599:

- randomized 30 healthy squat novices;
- compared visual feedback, tactile feedback and control;
- acquisition changed in both feedback groups on several measured squat variables;
- several changes persisted 3 days to 1 week in the visual-feedback group;
- tactile-feedback changes did not show the same retention pattern.

Therefore:

**resistance-exercise practice can show acquisition and delayed retention, and the two outcomes can diverge.**

This does not establish:

- one universally superior feedback modality;
- one universally correct squat geometry;
- one universal practice dose.

Canonical rule:

**one good coached set/session is practice performance, not proof of durable technique learning.**

No blocker.

---

## 4. Technique-stabilization audit

PASS WITH TERMINOLOGY REFINEMENT.

PASS-01 used:

> Technique is stabilized when the learner repeatedly satisfies pre-specified task-relevant execution criteria under a defined condition and can reproduce them after a delay without requiring continuous external guidance.

This is retained as a **project operational definition**, not as a universal published construct.

Important distinction:

### Within-session performance stability
Repeated acceptable execution in the current session.

### Durable technique stabilization
Repeatable acceptable execution that survives a delayed test under the defined condition.

Thus:

**repeatability inside one session can describe performance stability, but durable “learned/stabilized technique” requires retention evidence.**

The definition does not require:

- zero variability;
- identical joint angles;
- one ideal trajectory;
- one morphology-independent template.

Exact tolerance bands remain MEC/TEC/TST.

No blocker.

---

## 5. Light→working-load threshold audit

PASS — UNIVERSAL MOTOR-LEARNING CUTOFF NOT ESTABLISHED.

Targeted re-check found no validated rule of the form:

- “X% 1RM means technique practice”;
- “Y repetitions means the movement is learned”;
- “after Z sessions the learner can move to working weight.”

The historical ACSM progression model (PMID 19204579) recommended increasing load by approximately 2–10% when a trainee could perform one to two repetitions above the target RM range.

That rule is:

- a **programming/progressive-overload rule**;
- not a motor-learning retention criterion;
- not evidence that technical skill is stabilized.

The current ACSM 2026 Position Stand (PMID 41843416):

- updates the 2009 progression model;
- supports progressive RT;
- gives outcome-linked load recommendations;
- does not provide a technique-learning threshold for transitioning from “practice” to “working” load.

Therefore:

**programming progression criteria ≠ motor-learning progression criteria.**

Canonical rule:

**progress load while execution remains interpretable and acceptable, then directly test execution in the target load range.**

Exact increments remain PRO/TEC.

No blocker.

---

## 6. Target-load exposure audit

PASS AS SPECIFICITY HEURISTIC, NOT NUMERIC PRESCRIPTION.

If the downstream skill goal includes:

- heavy squat execution;
- working-set bench technique;
- loaded hinge control;

then skill must eventually be demonstrated in that load context.

Reason:

- load is itself a task constraint;
- load changes velocity/timing/mechanics;
- light-load execution cannot establish heavy-load control.

This is consistent with specificity and direct load-mechanics evidence.

It does not mean:

- practice must begin heavy;
- one exact percentage is required;
- every load-induced movement change is an error.

No blocker.

---

## 7. Load changes motor output / solution audit

PASS — STRONG DIRECT SUPPORT.

The 2025 systematic review PMID 41085612 included:

- 22 studies;
- 293 experienced lifters;
- squat, bench press and deadlift.

With increasing intensity:

- mean and peak bar velocity decreased;
- concentric duration increased;
- force demands changed;
- joint mechanics/variability changed, especially around acceleration/sticking regions.

Fatigue produced overlapping but non-identical changes.

The review also emphasizes:

- between-lifter mechanical-strategy differences;
- limited deadlift evidence;
- heterogeneous reporting.

Therefore the defensible statement is:

**higher load changes the observable motor problem/output and may change the coordination strategy; it is not merely light-load kinematics plus more force.**

Important boundary:

**a kinematic change under higher load is not automatically a technique error.**

The change may represent:

- acceptable task adaptation;
- capacity constraint;
- fatigue;
- genuine criterion violation.

Exact classification belongs MEC/TEC.

No blocker.

---

## 8. Fatigue-related technique change audit

PASS — STATE CHANGE ≠ UNLEARNING.

PMID 41085612 confirms fatigue-associated changes in:

- velocity;
- power;
- timing;
- joint mechanics;
- variability.

Therefore:

**late-set change does not by itself prove loss of a learned motor skill.**

Project diagnostic sequence:

1. compare early vs late repetitions under comparable load;
2. retest after sufficient recovery;
3. if prior acceptable execution returns, classify the observed change primarily as state dependent;
4. if it persists, investigate task representation, capacity, mobility, cueing, learning or other constraints.

This is consistent with NEU-08, NEU-11 and NEU-18.

No blocker.

---

## 9. Technical-failure terminology audit

PASS — CONSTRUCT SEPARATION IS STRONG; EXACT CRITERION IS NOT UNIVERSAL.

PMID 35247203 documents inconsistent resistance-training failure terminology:

- momentary failure;
- volitional failure;
- undefined/other conventions.

Velocity loss is also not a universal proxy for repetitions in reserve or failure state.

PMID 33194334 operationalized squat/bench task termination through:

- momentary failure;
- participant-terminated repetition maximum;
- experimenter-determined technical failure.

This confirms that technical termination can be treated separately from muscular/volitional failure.

It does **not** establish one universal technical-failure criterion.

Therefore PASS-01 wording is retained only as a project operational definition:

**technical failure = crossing a pre-specified, justified execution/performance criterion for the exercise and goal, even if another repetition may still be mechanically possible.**

If no criterion was defined beforehand, “technical failure” should not be inferred merely from:

- slower velocity;
- sticking;
- visible effort;
- any trunk-angle change;
- any rep-to-rep variability.

Exact criteria belong MEC/TEC/MED/competition rules.

No blocker.

---

## 10. Exercise-complexity audit

PASS AS PURPOSE-RELATIVE HEURISTIC.

The current ACSM 2026 Position Stand (PMID 41843416):

- synthesized 137 systematic reviews and >30,000 participants;
- found exercise complexity did not consistently influence the chronic outcomes it evaluated.

Important limitation:

**this is not a motor-learning complexity trial.**

The novice exercise-selection Delphi study (PMID 40041305):

- had experts rate technical complexity of 77 resistance exercises;
- identified exercises considered more appropriate vs too advanced for novices;
- explicitly treats technical demand as a real exercise-selection dimension.

Important limitation:

**expert consensus is not a validated causal threshold for learning.**

Combined conclusion:

- technical complexity is real enough to affect practical exercise selection;
- more complexity is not inherently better for general RT adaptation;
- no universal complexity score determines whether an exercise is “too hard.”

Project rule:

**an exercise is too complex for the current purpose when added coordination/stability/information demand becomes the main limiter without serving the target adaptation, skill or transfer goal.**

If mastery of the complex movement itself is the goal, the complexity is target-relevant rather than unnecessary.

No blocker.

---

## 11. Complexity vs load audit

PASS.

Load difficulty and technical complexity are separable.

A movement can be:

- technically simple but heavily loaded;
- technically complex at light load;
- both;
- neither.

The novice Delphi work explicitly separated technical demand from load challenge.

Therefore:

**“too heavy” and “too complex” are different diagnoses.**

This prevents a common error in coaching analysis.

No blocker.

---

## 12. Stability vs variability audit

PASS WITH STRICT ACUTE-VS-LEARNING BOUNDARY.

PMID 42965663:

- randomized 67 participants;
- compared non-variable, structured-variability and unstructured-variability squat target trajectories;
- structured and non-variable groups had lower spatial error than the unstructured group in later sets;
- structured variability produced more persistent temporal organization.

But:

- performance was measured across five sets;
- there was no delayed retention test demonstrating superior durable learning;
- there was no direct transfer test demonstrating superior generalization.

Therefore:

**structured variability is feasible and can preserve immediate accuracy relative to random/unstructured variation, but durable-learning superiority remains unproven in direct resistance-exercise evidence.**

Canonical rule:

**variability should be task relevant and structured; do not add noise because “variability is good.”**

No blocker.

---

## 13. “Stable first, variable later” audit

PASS ONLY AS CONDITIONAL PRACTICAL HEURISTIC.

Current evidence does not justify a universal sequence:

`first constant practice → then variability`.

A more defensible rule is:

- keep safety-critical and diagnostic constraints stable;
- reduce irrelevant variation when the learner cannot yet identify task success/error;
- introduce variability when the varied dimension belongs to the future target space or when robustness/generalization is a real goal;
- verify retention/transfer rather than assuming benefit.

Thus PASS-01 is narrowed:

**stable early practice can be useful, but it is not a mandatory stage before any variability.**

No blocker.

---

## 14. Exercise variation vs movement variability audit

PASS — DISTINCT CONSTRUCTS.

PMID 35438660 concerns variation in **exercise selection** and chronic strength/hypertrophy adaptations.

It suggests:

- systematic exercise variation can support some adaptations;
- excessive random variation can be counterproductive.

This does not prove a motor-learning effect of movement variability.

Therefore:

**exercise rotation and movement variability must remain separate variables.**

No blocker.

---

## 15. Transfer audit

PASS — TARGET TEST REQUIRED.

Direct compound-lift skill-transfer evidence remains sparse.

PMID 40314751:

- 43 studies;
- 1660 participants;
- dynamic RT produced larger gains in trained dynamic strength than transfer to untrained isometric strength.

This is useful for **task specificity of strength**.

It is not direct evidence that:

- squat skill transfers to front squat;
- deadlift skill transfers to RDL;
- machine press skill transfers to free-weight bench;
- shared muscles imply shared motor skill.

General motor-transfer evidence (PMID 38081160 and upstream NEU-21 sources) supports that transfer depends on task similarity/overlap and can be incomplete or asymmetric.

Therefore:

**motor-skill transfer must be measured in the target task.**

No blocker.

---

## 16. Practical transfer test audit

PASS AS PROJECT MEASUREMENT HEURISTIC.

For source exercise A and target exercise B, evidence of useful skill transfer should be sought in B through:

1. baseline target-task performance where feasible;
2. target-task criterion success/error;
3. acquisition cost or feedback/trials required;
4. delayed retention in B;
5. relevant target-load/context performance.

Transfer is stronger when prior A practice improves B relative to the relevant baseline/comparator.

This is not a validated universal composite score.

It is a project measurement framework consistent with NEU-11.

No blocker.

---

## 17. Strength transfer ≠ motor-skill transfer audit

PASS — CLOSURE CRITICAL.

Resistance-training specificity evidence often measures:

- 1RM;
- isometric strength;
- muscle activation;
- hypertrophy;
- power.

Those outcomes do not directly measure:

- movement-solution acquisition;
- technical retention;
- cue dependence;
- error reduction in an untrained exercise.

Therefore:

**strength transfer cannot be silently re-labeled as skill transfer.**

No blocker.

---

## 18. Scope-boundary audit

### MEC
Owns:
- mechanics;
- resistance profile;
- joint moments;
- geometry;
- load-specific mechanical interpretation.

### TEC
Owns:
- exercise-specific acceptable technique;
- regression/progression choice;
- exercise selection;
- exact movement criteria.

### PRO
Owns:
- loading increments;
- set/rep progression;
- frequency/volume progression;
- working-set prescription.

### MED
Owns:
- pathology;
- contraindications;
- safety/injury claims.

### TST
Owns:
- reliability;
- measurement error;
- thresholds;
- formal decision cutoffs.

### COA / IND
Own:
- individualized coaching decision rules;
- N-of-1 adaptation;
- implementation.

NEU-22 retains:

- motor-learning architecture;
- performance vs learning distinction;
- load-as-task-constraint boundary;
- technical-failure construct separation;
- complexity/variability learning logic;
- transfer measurement logic.

No scope conflict found.

---

## 19. Cross-topic consistency audit

### NEU-08 — fatigue
PASS. Fatigue-related movement change remains state dependent unless persistent after recovery.

### NEU-09 — variability
PASS. Stable technique does not imply zero variability.

### NEU-11 — learning/retention/transfer
PASS. Acquisition ≠ learning; transfer requires target testing.

### NEU-13 — practice organization
PASS. No universal constant-vs-variable sequence is introduced.

### NEU-15/16 — feedback/cueing
PASS. New-exercise learning does not prescribe one feedback/cue schedule.

### NEU-18 — error correction
PASS. Load-related deviation is not automatically movement error.

### NEU-21 — individual differences
PASS. No learner typology or universal progression threshold is introduced.

No contradiction found.

---

## 20. Evidence-ledger audit

NEU22-01…NEU22-08 are adequate for closure with minor provenance refinement:

- NEU22-06 should explicitly include the novice complexity Delphi study PMID 40041305;
- NEU22-08 should explicitly note that direct compound-lift skill-transfer evidence is sparse and general motor-transfer evidence is indirect.

No new ledger row is required.

All eight rows can move from:

`REVALIDATED 2026-11-19 — CLOSURE AUDIT PENDING`

to:

`REVALIDATED 2026-11-19`.

---

## 21. Uncertainty audit

Remaining uncertainty is real but non-blocking:

1. direct longitudinal compound-lift learning studies manipulating light→working-load progression;
2. validated load-specific retention tests after technical instruction;
3. universal or exercise-specific technical-failure thresholds;
4. when a high-load strategy is acceptable vs criterion-breaking;
5. delayed retention/transfer effects of structured variability in resistance exercise;
6. validated motor-learning complexity scale;
7. direct skill-transfer matrices among squat/hinge/press variants;
8. novice-vs-expert differences in load-progression learning;
9. exact acceptable movement criteria by exercise/goal;
10. injury-risk implications of specific technical changes.

These are downstream MEC/MED/TEC/PRO/TST/IND questions or future evidence updates.

They do not block the motor-learning architecture needed from NEU-22.

---

## 22. Closure criterion test

Topic:

> NEU-22 — Application to resistance exercise

Result: **PASS.**

Canonical architecture:

`define task goal + justified execution criteria`
→
`choose a solvable task/load/complexity`
→
`practice with task-relevant feedback`
→
`separate practice performance from learning`
→
`verify repeatability and delayed retention`
→
`expose the skill to the actual target load/context`
→
`interpret load/fatigue-related changes against justified criteria`
→
`use technical failure only with an explicit criterion`
→
`add structured task-relevant variability when robustness/generalization is a target`
→
`test transfer in the target exercise/condition`.

No universal law was established for:

- one session = learned technique;
- stable technique = identical kinematics;
- one %1RM transition threshold;
- heavier load = same pattern with more force;
- velocity loss = technical failure;
- complexity = better training;
- variability = random noise;
- more variability = more learning;
- similar exercises = automatic skill transfer.

---

## 23. Closure decision

**NEU-22 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 8 exact Section 22 items pass;
2. new resistance exercises are treated as motor skills, not verbal-rule checklists;
3. acquisition performance is separated from durable learning;
4. technique stabilization means repeatable acceptable control under defined constraints, not identical kinematics;
5. no universal light→working-load motor-learning threshold is retained;
6. target-load execution must be tested when target-load execution matters;
7. increasing load/fatigue changes observable motor output and may change movement strategy;
8. load-related movement change is not automatically an error;
9. technical failure is a project operational task-criterion endpoint distinct from momentary/volitional failure;
10. exact technical-failure criteria remain exercise/goal specific;
11. exercise complexity must serve the target rather than be valued for itself;
12. stable and variable practice are tools, not universal stages;
13. structured variability is distinct from random variability;
14. direct RT evidence does not yet prove superior delayed learning from structured variability;
15. exercise variation is distinct from movement variability;
16. motor-skill transfer must be measured in the target task;
17. strength transfer does not establish motor-skill transfer;
18. MEC/MED/TEC/PRO/TST/COA/IND boundaries remain intact;
19. no project-relevant blocker remains.

---

## 24. Canonical finding authorization

Create:

`research/fitness/findings/04_neurophysiology_motor_learning/NEU-22_application_to_resistance_exercise.md`

Status:

**CLOSED_FOR_PRACTICE v2.0 — revalidated 2026-11-19**.

Evidence-ledger rows:

`NEU22-01…NEU22-08`

remain the stable claim set after provenance/status refinement.

---

## 25. Area-level conclusion

Area 04 Sections 1–22 have now been revalidated and closed for current project purpose through NEU-01…NEU-22.

Section 23 is an explicit cross-area boundary section, not a separate deep-research topic.

Therefore:

**Neurophysiology / Motor Learning dependency is complete for current project purpose.**

Remaining uncertainties are downstream or future-update issues, not reasons to delay dependency order.

---

## 26. Next dependency

**BIO-01/PASS-01 — Basic energy concepts content revalidation.**

Do not start BIO in this working block.
