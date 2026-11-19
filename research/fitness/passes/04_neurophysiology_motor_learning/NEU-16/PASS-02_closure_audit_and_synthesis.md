# NEU-16 / PASS-02 — Closure audit and synthesis

Дата: 2026-11-19  
Статус: **CLOSURE AUDIT COMPLETE — CLOSED_FOR_PRACTICE AUTHORIZED**  
Область: 04 — Neurophysiology / Motor Learning  
Topic: NEU-16 — Cueing

## 0. Purpose

Независимо перепроверить PASS-01 и решить, достаточно ли NEU-16 закрывает Area 04 Section 16 для downstream NEU-17, NEU-18, TEC, TST, PSY/COA и IND без:

- универсализации “one cue at a time”;
- подмены качества cue его краткостью;
- подмены specificity verbosity/микроменеджментом;
- восстановления universal external-cue superiority;
- трактовки analogy как process-pure implicit learning;
- универсализации outcome > process;
- выдачи visible error за causal mechanism;
- fixed learner-type cueing;
- прямого переноса feedback fading на cue removal;
- выдумывания fixed cognitive-load threshold;
- преждевременной ADHD-specific prescription внутри NEU-16;
- подмены durable learning acute RT performance effect.

---

## 1. Materials audited

1. `areas/04_neurophysiology_motor_learning.md`, Section 16 — 11 exact items;
2. `NORMALIZED_KNOWLEDGE_TREE.md`, NEU-16;
3. `PASS-01_cueing_revalidation.md`;
4. `EVIDENCE_LEDGER.md`, NEU16-01…NEU16-13;
5. upstream canonical boundaries:
   - NEU-11 — acquisition vs retention vs transfer;
   - NEU-12 — explicit/implicit/analogy/constraints;
   - NEU-14 — attentional focus;
   - NEU-15 — feedback / learner error detection;
6. independent closure re-check:
   - working memory × multiple explicit instructions — PMID 28878701;
   - reduced-information explicit vs analogy — PMID 26367306;
   - analogy cognitive demand — PMID 27063681;
   - analogy systematic review/meta-analysis — PMID 39419241;
   - analogy/explicit acute lifting — PMID 41558250;
   - instruction/chunk representation persistence — PMID 32997556;
   - 2026 internal-focus movement-form RCT — PMID 41700657;
   - 2026 internal-focus visuomotor adaptation — PMID 42261257;
   - 2026 attentional-focus network meta-analysis — PMID 42419609;
   - focus-preference individual differences — PMID 29617214;
   - youth multicenter cue/analogy experiments — PMID 36862750;
   - 2026 CMJ cue-choice exploratory study — PMID 42911075;
   - 2025 hex-bar process/outcome cue study — PMID 41037919;
   - 2025 bench-press action-verb study — PMID 40602018;
   - 2026 trunk/bracing cueing study — PMID 42190132;
   - high-intended-velocity verbal cue RT study — PMID 33476409;
   - context-dependent motor-skill study — PMID 22065045.

No closure-critical contradiction was found.

---

## 2. Exact area-map audit — 11/11

1. Один cue vs множество cues — **PASS AS LOAD-MANAGEMENT PROBLEM; NO UNIVERSAL ONE-CUE OPTIMUM**.
2. Краткость cue — **PASS AS USEFUL ONLY WHEN INFORMATION SUFFICIENCY IS PRESERVED**.
3. Конкретность — **PASS AS INFORMATIONAL PRECISION, NOT VERBOSITY/MICROMANAGEMENT**.
4. External vs internal cue — **PASS AS TASK-/OUTCOME-DEPENDENT; NO UNIVERSAL HIERARCHY**.
5. Analogy cues — **PASS AS PROMISING FORMAT WITH HETEROGENEITY/BIAS LIMITS**.
6. Cue tied to outcome — **PASS AS TASK-GOAL ALIGNMENT, NOT UNIVERSAL OUTCOME SUPERIORITY**.
7. Cue tied to error cause — **PASS AS PRACTICAL HEURISTIC; DIRECT CAUSAL TRIALS SPARSE**.
8. Индивидуальная реакция — **PASS AS EMPIRICAL INDIVIDUALIZATION, NOT FIXED LEARNER TYPE**.
9. Когда cue убрать — **PASS AS INDEPENDENCE TEST, NO UNIVERSAL REMOVAL SCHEDULE**.
10. Когда инструкция становится overload — **PASS AS LOAD × TASK × CAPACITY INTERACTION**.
11. Cueing + ADHD / attentional control — **PASS AT SCOPE LEVEL; ADHD-SPECIFIC DESIGN DEFERRED TO AREA 12**.

Result: **11/11 PASS.**

---

## 3. One cue vs multiple cues audit

PASS — “ONE CUE” RETAINED ONLY AS HEURISTIC.

PMID 28878701 provides direct evidence that explicit instruction load can interact with working-memory capacity:

- 90 children were screened;
- low-WM and high-WM groups practiced basketball shooting;
- five explicit technique rules were presented before each block;
- high-WM learners improved;
- low-WM learners showed the opposite learning pattern through retention.

This establishes:

**multiple explicit rules can exceed available cognitive resources in some learners.**

It does not establish:

- one cue as the universal optimum;
- five cues as a universal overload threshold;
- the same effect size in adults/compound lifts.

PMID 26367306 provides an important counterweight:

- analogy, reduced-information explicit and larger-information explicit instruction showed no decisive overall performance hierarchy;
- reducing explicit informational volume may mitigate some explicit-learning cost.

Canonical rule:

**start with the minimum simultaneously active information needed to solve the current problem; “one cue at a time” is a low-risk default, not a biological law.**

No blocker.

---

## 4. Brevity audit

PASS — “SHORTER IS BETTER” REJECTED.

The 2026 trunk/bracing study (PMID 42190132):

- n = 40;
- baseline vs simple directive (“activate your core”) vs detailed coaching;
- simple directive did not significantly modify the targeted low-back displacement/stiffness;
- detailed coaching reduced displacement and increased rotational stiffness;
- both cue conditions reduced maximal lifting force.

This directly demonstrates a trade-off:

`more information`
can improve a target coordination variable
while also
`increasing acute attentional/performance cost`.

Therefore:

**cue brevity is valuable only if the necessary task relation survives compression.**

No universal word count is established.

No blocker.

---

## 5. Specificity audit

PASS — SPECIFICITY = PRECISION OF RELEVANT INFORMATION.

PMID 40602018:

- n = 26;
- bench press;
- external/internal focus crossed with “push” vs “punch”;
- external conditions increased velocity relative to internal conditions in that protocol;
- “punch” increased velocity relative to “push” independent of focus category;
- no significant interaction between focus direction and action verb.

This proves that semantic/action wording can matter independently of a broad cue category.

PMID 42190132 further shows a generic cue can lack enough information to alter the intended coordination.

Canonical rule:

**a specific cue identifies the relation/action goal that matters; specificity does not mean adding words or prescribing every joint angle.**

No blocker.

---

## 6. External vs internal cue audit

PASS — NEU-14 BOUNDARY PRESERVED.

No universal external-cue default is authorized.

The 2026 movement-form RCT (PMID 41700657):

- 30 healthy adults;
- internal, external and control conditions;
- internal-focus cues produced greater improvement in reach distance/form than external focus in that movement-form task.

The 2026 visuomotor adaptation study (PMID 42261257):

- internal focus produced greater adaptation than external focus where proprioceptive hand information was directly relevant.

The 2026 network meta-analysis (PMID 42419609) additionally showed classification and expertise sensitivity.

Therefore:

**cue direction must be chosen according to task-relevant information and outcome, not “external is always better.”**

No blocker.

---

## 7. Analogy cue audit

PASS WITH BIAS-SENSITIVE INTERPRETATION.

The 2025 analogy systematic review/meta-analysis (PMID 39419241):

- 16 randomized controlled trials;
- analogy vs control: pooled ES ≈ 0.32;
- analogy vs explicit: pooled ES ≈ 0.29;
- favorable retention results were reported;
- children/novices appeared more likely to benefit in subgroup analyses;
- high heterogeneity affected many comparisons;
- included studies had high risk of bias.

The authors explicitly recommend caution.

PMID 26367306 provides a counterexample:

- analogy had somewhat fewer declarative rules/technical differences;
- no statistically significant overall performance difference versus explicit-light/traditional explicit groups.

PMID 32332826 likewise found analogies useful for changing kinematics/strategy in some circumstances but not superior on most performance outcomes.

Canonical rule:

**analogy is a potentially efficient representational format, not a universally superior instruction.**

No blocker.

---

## 8. Analogy ≠ implicit process audit

PASS.

Analogy is the instructional manipulation.

It does not demonstrate:

- absence of explicit strategy;
- absence of conscious knowledge;
- process-pure implicit learning.

The meta-analysis itself uses analogy in the broader implicit-learning literature, but process inference cannot be made from the intervention label alone.

This is fully consistent with NEU-12.

Canonical rule:

**analogy cue = cue format; implicit learning = process claim requiring separate evidence.**

No blocker.

---

## 9. Direct analogy lifting audit

PASS WITH ACUTE-OUTCOME BOUNDARY.

PMID 41558250:

- 20 novices;
- analogy, explicit and control conditions across three consecutive days;
- both instruction strategies changed lower-limb EMG;
- explicit instruction reduced early RFD vs control;
- control showed higher overall force;
- analogy maintained performance more closely while reorganizing motor control.

This demonstrates that instruction format can acutely alter resistance-exercise motor organization.

It does **not** establish:

- delayed technique retention;
- long-term transfer;
- analogy superiority for compound-lift learning.

No blocker.

---

## 10. Process vs outcome cue audit

PASS — DIMENSIONS MUST REMAIN SEPARATE.

PMID 41037919:

- 24 strength-trained participants;
- hex-bar deadlift at 60% self-reported 1RM;
- internal-process, internal-outcome, external-process, external-outcome;
- external-process produced highest velocity vs internal conditions;
- external-outcome maximized displacement relative to internal conditions;
- outcome depended on what variable was considered the goal.

Therefore:

`external`
≠
`outcome`

and

`internal`
≠
`process`.

Canonical rule:

**cue direction and process/outcome target are separate dimensions; align the cue with the task variable that matters.**

No blocker.

---

## 11. Cue semantics audit

PASS — WORDING CAN MATTER BEYOND CATEGORY.

PMID 40602018 shows action verbs independently changed bench-press velocity.

PMID 42911075 (2026 exploratory CMJ):

- n = 60 young adults;
- choosing among external-focus cues increased perceived autonomy;
- choice did not improve jump height;
- different cue formulations were associated with different jump outcomes;
- participants frequently omitted/substituted intended linguistic features and reinterpreted cues.

Therefore:

**the learner’s represented meaning matters more than the coach’s nominal cue label.**

No blocker.

---

## 12. Individual response audit

PASS — EMPIRICAL INDIVIDUALIZATION, NOT TYPOLOGY.

PMID 29617214:

- 25 children;
- internal and external putting conditions;
- both improved performance;
- no overall internal-vs-external difference;
- task-specific preference correlated with differential performance (r ≈ 0.56).

PMID 36862750:

- 173 youth participants across sites;
- sprint/jump comparisons among external, internal, analogy and neutral cues;
- most comparisons showed no meaningful differences;
- only 3/11 repeated-measures analyses were significant;
- control was sometimes best.

PMID 42911075:

- autonomy from choosing a cue did not itself improve jump height;
- wording/interpretation differed.

Therefore:

**individualization should be based on observed response and interpretation for the actual task, not a permanent “cue learner type.”**

Preference is a candidate signal, not proof of long-term optimality.

No blocker.

---

## 13. Cue tied to outcome audit

PASS — GOAL ALIGNMENT, NOT OUTCOME-CUE IDEOLOGY.

Outcome cues can be useful when:

- the success criterion is clear;
- task effects are directly observable;
- movement redundancy makes one exact body geometry unnecessary.

But the hex-bar evidence shows external-process and external-outcome cues optimized different acute metrics.

Therefore:

**tie the cue to the task goal; do not assume outcome cues always outperform process cues.**

No blocker.

---

## 14. Cue tied to error cause audit

PASS AS PRACTICAL_HEURISTIC ONLY.

Independent search did not identify strong direct RCT evidence comparing:

`cause-targeted cue`
vs
`symptom-targeted cue`

for resistance-exercise learning.

The rationale remains supported indirectly by:

- prescriptive-vs-descriptive feedback evidence in NEU-15;
- instruction shaping movement representation;
- acute cue-specific coordination effects.

PMID 32997556 shows that imposed chunk instructions can shape motor-sequence representation and leave temporal traces after 10 days, meaning instruction is not neutral.

Canonical rule:

**diagnose the probable mechanism before choosing the cue; verify that the intended determinant actually changes.**

Exact causal diagnosis remains NEU-18.

Status:

**PRACTICAL_HEURISTIC**, not direct universal evidence.

No blocker.

---

## 15. Cue removal audit

PASS WITH EVIDENCE-SPARSITY WARNING.

No robust universal cue-removal schedule was identified.

No validated rule supports:

- remove after N repetitions;
- remove after N successes;
- fade at a fixed percentage;
- keep the cue permanently if practice looks better.

PMID 22065045 provides indirect context-learning evidence:

- changing contextual cues impaired performance after limited practice;
- this context dependency diminished with extensive practice;
- removal itself was not identical to changing context.

This is not a verbal cue-fading RCT.

Therefore:

**cue independence must be tested directly by execution/retention without the cue.**

NEU-15 feedback-fading evidence cannot be directly reused as verbal-cue fading evidence.

No blocker.

---

## 16. Cognitive-overload audit

PASS — INTERACTION MODEL CONFIRMED.

Current evidence supports:

`instruction load`
×
`task demand`
×
`learner cognitive capacity`
→
`performance / learning cost`.

Relevant evidence:

- PMID 28878701: five explicit rules harmed lower-WM learners;
- PMID 27063681: explicit instruction generated greater secondary-memory cost than analogy in a speech motor task;
- PMID 26367306: reduced informational load may mitigate explicit instruction costs;
- PMID 42190132: detailed instruction can solve an information deficit but reduce maximal force acutely.

Therefore:

**there is no universal cue-count or word-count threshold for overload.**

The correct question is whether the instruction demand competes with executing/learning the task.

No blocker.

---

## 17. “Less information is always better” audit

PASS — REJECTED.

The evidence supports both sides:

### Too much information can harm
Especially when multiple explicit rules exceed working-memory resources.

### Too little information can fail
The generic “activate your core” directive did not alter the target coordination in PMID 42190132, while detailed coaching did.

Thus the closure rule is:

**use the minimum information that is still sufficient to specify the task relation the learner currently lacks.**

This is the central NEU-16 synthesis.

No blocker.

---

## 18. Acute resistance-exercise cueing audit

PASS WITH LEARNING BOUNDARY.

Direct resistance-exercise studies show acute cue sensitivity:

- hex-bar cue target → velocity/displacement differences;
- bench-press action verb → velocity differences;
- trunk/bracing instruction → stiffness/posture/force changes;
- attentional focus → EMG redistribution;
- analogy vs explicit → EMG/RFD/force differences.

A longer 3-week RT study (PMID 33476409) also provides a useful counterexample to simplistic intention cueing:

- high-intended-velocity verbal cueing did not produce superior neurophysiological/performance adaptation vs traditional cueing;
- traditional cueing produced greater mean-power improvement at the trained slow speed.

Therefore:

**verbal cues can change current motor output, but this does not establish one superior long-term cue architecture.**

No blocker.

---

## 19. Performance vs learning audit

PASS AND CONSISTENT WITH NEU-11.

A cue can:

- increase velocity immediately;
- change EMG;
- change force;
- change posture/stiffness;

without demonstrating:

- delayed retention;
- transfer;
- cue-free execution.

Therefore:

**acute cue response is a diagnostic/performance signal, not sufficient evidence of learning.**

No blocker.

---

## 20. ADHD scope audit

PASS AT SCOPE LEVEL.

Exact Area 04 Section 16 item 11 says:

> “Связь cueing с СДВГ и attentional control — область 12.”

Therefore NEU-16 correctly does not prescribe:

- ADHD-specific optimal cue count;
- ADHD-specific wording;
- ADHD-specific timing;
- individualized ADHD cue-removal architecture.

What NEU-16 legitimately passes downstream:

- multiple explicit rules can overload limited WM;
- no fixed cue count exists;
- cue semantics/interpretation matter;
- empirical individualization is preferable to typology.

ADHD-specific translation remains PSY/COA/IND.

No blocker.

---

## 21. Measurement non-equivalence audit

PASS.

Separate:

### Cue count
Number of simultaneously active instructions.

### Cue length
Verbal/representational complexity.

### Specificity
Precision of relevant information.

### Focus direction
Internal vs external.

### Task target
Process vs outcome.

### Format
Literal/explicit vs analogy/metaphor.

### Semantics
The action representation invoked by actual wording.

### Acute cue effect
Immediate change in performance/movement.

### Cue-learning effect
Delayed retention/transfer after cue removal.

### Cue dependence
Inability to express the relation independently.

### Cognitive overload
Instructional demand exceeding available resources for task execution/learning.

Project rule:

**do not collapse these into one “good cue” construct.**

No blocker.

---

## 22. Cross-topic consistency audit

### NEU-11 — learning vs performance

PASS.

NEU-16 preserves acute cue effect ≠ durable learning.

### NEU-12 — explicit/implicit

PASS.

Analogy cue ≠ proof of implicit process.

### NEU-14 — attention/focus

PASS.

Universal external superiority remains rejected.

### NEU-15 — feedback

PASS.

Cueing before/during an attempt remains distinct from post-attempt feedback; feedback fading does not become cue fading by analogy.

No contradiction found.

---

## 23. Evidence-ledger audit

Current NEU16-01…NEU16-13 coverage is adequate for closure.

No closure-critical rewrite is required.

The strongest boundaries are already explicit:

- no universal cue-count optimum;
- brevity ≠ quality;
- specificity ≠ verbosity;
- external/internal remains task dependent;
- analogy ≠ implicit process purity;
- semantics/process/outcome matter;
- individualization ≠ learner typology;
- no universal cue-removal schedule;
- overload is an interaction, not threshold;
- direct RT evidence is mainly acute;
- ADHD-specific cue design remains deferred.

No new ledger row is required.

---

## 24. Uncertainty audit

PASS.

Remaining uncertainty is real but non-blocking:

1. direct adult one-vs-many cue RCTs;
2. linguistic complexity dose-response;
3. exact cue count for novice compound lifts;
4. exact cue length;
5. which analogy features predict successful learning;
6. analogy vs literal instruction for delayed compound-lift retention;
7. process-vs-outcome cue retention after removal;
8. direct cause-targeted vs symptom-targeted cue trials;
9. objective cue-selection algorithm;
10. cue-removal/fading RCTs;
11. cue-load interaction with fatigue/heavy loads;
12. exact ADHD-specific architecture;
13. long-term squat/hinge/press cueing RCTs.

These belong downstream TEC, NEU-18, TST, PSY/COA and IND when concrete decisions require them.

---

## 25. Scope-control audit

Neighboring ownership remains separate:

- demonstration/video/modeling → NEU-17;
- error cause diagnosis/correction → NEU-18;
- exact exercise-specific cue library → TEC;
- retention monitoring → TST;
- ADHD-specific instruction architecture → PSY/COA;
- individual cue selection → IND/COA.

No additional NEU-16 PASS is required before closure.

---

## 26. Closure criterion test

Topic:

> NEU-16 — Cueing

Result: **PASS.**

Canonical synthesis:

`cue quality`
depends on

`task information need`
+
`learner capacity/interpretation`
+
`cue semantics`
+
`focus direction`
+
`process/outcome target`
+
`current error/goal`
+
`ability to perform without cue`.

No universal law was established for:

- one cue > multiple cues;
- shorter > longer;
- detailed = worse;
- external > internal;
- analogy > explicit;
- outcome > process;
- preferred cue = optimal cue;
- cue removal after fixed repetitions;
- fixed overload threshold.

The central practical rule is:

**use the minimum information that is sufficient to specify the task-relevant relation the learner currently needs, then verify that the cue changes the intended variable and that the skill can later be expressed without it.**

---

## 27. Closure decision

**NEU-16 = CLOSED_FOR_PRACTICE v2.0.**

Meaning:

1. all 11 exact Section 16 items pass at content/scope level;
2. one-cue-at-a-time is a practical default, not universal law;
3. multiple explicit instructions can overload limited working memory;
4. brevity is not equivalent to cue quality;
5. detailed coaching can be necessary when generic instructions are insufficient;
6. specificity means informational precision, not verbosity;
7. external/internal cue direction remains task/outcome dependent;
8. analogy cues are promising but heterogeneous/high-risk-of-bias;
9. analogy does not prove implicit process purity;
10. process/outcome target and internal/external direction are separate dimensions;
11. action semantics can matter independently of broad cue category;
12. individualization should be based on observed response/interpretation, not typology;
13. cue-to-error-cause matching remains a practical heuristic pending direct causal trials;
14. no universal cue-removal schedule exists;
15. cue independence must be tested without the cue;
16. cognitive overload is load × task × learner interaction, not a fixed cue threshold;
17. direct RT cueing evidence is mainly acute;
18. acute cue response ≠ durable learning;
19. ADHD-specific cue architecture remains deliberately deferred to Area 12 / PSY-COA;
20. no project-relevant blocker remains;
21. first canonical NEU-16 finding can now be created.

---

## 28. Next dependency

**NEU-17 — Demonstration / video / modeling.**

Do not start NEU-17 in this same working block.
