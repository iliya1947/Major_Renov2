# LEA-06 — Learning synthesis and sufficiency audit: associative learning, RL, habit, extinction and reconsolidation

**Status: COMPLETE_FOR_CURRENT_SCOPE — 20/20 PASS**
**Domain decision: LEA sequence COMPLETE_FOR_CURRENT_SCOPE (LEA-01…06).**
Evidence cut-off: 2026-11-19. Scope: generic scientific reasoning only.

## 1. Purpose and inputs

Audit the internal consistency and practical completeness of:

1. LEA-01: learning architecture;
2. LEA-02: associative learning, contingency, blocking, inhibition and PIT;
3. LEA-03: RL, prediction errors, representational learning, computational psychometrics and dopamine;
4. LEA-04: habit, goal-directed control, overtraining and measurement;
5. LEA-05: extinction, return of responding, inhibitory learning, and reconsolidation.

This synthesis is **not** a claim that every mechanism of learning, every citation or every scientific controversy is settled. It asks whether the covered distinctions are sufficient to prevent important false inferences in ordinary psychological reasoning, while preserving specific downstream dependencies.

## 2. Cross-block invariant: learning versus performance

Learning refers to change in acquired representations, associations, values, policies or behavior-generating processes. Performance is the measured expression of those changes under present motivational, environmental, executive and measurement conditions.

**Observed response change is not unique evidence of a particular learning process.**

Decrease in responding can represent new extinction learning, competing response selection, altered value, reduced arousal, reduced opportunity or contextual retrieval failure.
Increase can reflect reinforcement, sensitization, context-dependent renewal, better retrieval, urgency or learned action policy.

This distinction is established in LEA-01, qualified in LEA-02 and LEA-03, and required by LEA-04 and LEA-05. **No contradiction.**

## 3. Relation taxonomy

Before mechanistic inference specify which relation or target is learned:

| Target | Example formal relation | Unique inferential question |
| --- | --- | --- |
| Pavlovian outcome prediction | S → O / CS → US | Does the cue predict the outcome? |
| Instrumental action–outcome knowledge | R → O | Does action change outcome probability/value? |
| Stimulus–response propensity | S → R | Does context elicit a learned action tendency despite outcome changes? |
| World-state/transition structure | s,a → s' | Which state transitions are expected? |
| Value/reward-function representation | s,a,goal → subjective utility | What counts as desirable under present goals? |
| Policy or choice tendency | history,state → action | Which response is selected and why? |
| Inhibitory extinction/context learning | context,CS → no US | Under what conditions is response suppressed? |
| Episodic/reconstructed memory | event/context/source | What is recollected or inferred? |

Do not collapse S–O, S–R, R–O, value functions and memory retrieval into the word "association."

## 4. Contiguity, contingency and causal knowledge

LEA-02 distinguishes close timing from statistical contingency and from inferred causal control. Background rates, temporal spacing, alternative causes and contextual knowledge change learning.

An action followed by an outcome does not establish that the action *caused* the outcome; a stimulus paired with an event does not establish informative prediction.

**Unresolved dependence:** decision causality and belief formation in natural social situations belong to DEC/SOC, not additional foundational LEA taxonomy.

## 5. Prediction error hierarchy

PE may concern:
- scalar reward value;
- outcome identity or feature;
- timing;
- state-transition structure;
- action;
- surprising omission or other mismatch.

A discrepancy can support value updating, extinction, state segmentation, attention shift, or candidate memory destabilization. **PE is not an outcome-independent universal rewriting switch.**

LEA-01 and LEA-02 allow PE-based models without making them exclusive; LEA-03 supplies state/representation and dopamine boundaries; LEA-05 makes the extinction/reconsolidation alternatives explicit. **No contradiction.**

## 6. Associative phenomena and alternatives

Blocking, overshadowing, conditioned inhibition, latent inhibition, occasion setting and PIT are distinct constructs.

- Blocking cannot uniquely prove a scalar PE algorithm.
- Conditioned inhibition is not executive response inhibition.
- Retardation alone is not sufficient evidence of conditioned inhibition.
- PIT does not establish unconscious cue control in every human task.
- Explicit knowledge and instructions can alter some cue effects.
- Behavioral model fit alone cannot prove a unique representation.

These are conditional phenomena, not universal signatures.

## 7. RL parameter interpretation

The minimal delta rule is an approximation: parameter alpha indexes update weight relative to model-defined states, events, history, task and reward scaling. It is not a stable global human "learning speed."

Inverse temperature beta is model-relative value sensitivity/stochasticity, not a pure exploration trait.

Before parameter inference examine:
- state aliasing and latent-state inference;
- inter-reward timing and volatility versus stochasticity;
- working memory, episodic and rich choice-history memory;
- choice perseveration;
- reward-function learning/compression;
- model/parameter recovery and identifiability;
- test–retest stability and cross-task generalizability.

A reliable parameter in one task need not generalize to another.

## 8. MF/MB computational control versus habit

Model-free/model-based RL describes computational strategies, not a one-to-one behavioral taxonomy:
- MF does not automatically equal S–R habit;
- MB does not automatically equal verified goal-directed action;
- compressed, hierarchical, successor-like, and temporally abstract world models are alternatives;
- two-step-task choice histories can mix perseveration, working memory, exploration and heuristics.

LEA-03 and LEA-04 agree. **No contradiction.**

## 9. Habit measurement

A classical S–R habit is suggested when trained responding persists despite valid alteration of expected outcome value or response–outcome contingency. But negative test results are vulnerable to manipulation failures, task knowledge, executive response demands, reaction-time windows and response opportunities.

Key conditions:
1. verify initial action–outcome learning;
2. verify value/contingency change *worked*;
3. compare valued and devalued conditions;
4. compare early response preparation and later control;
5. distinguish repeated practice, fast skill, self-reported automaticity and genuine instrumental outcome-insensitivity;
6. evaluate reliability and convergent validity separately.

The 2026 deficient-devaluation study and outcome-devaluation/remapping comparisons tighten these inferences. A November 2026 review of human habit circuitry and measurement likewise highlights the divide between laboratory and naturalistic measures.

**A repeated behavior may be automatic, efficient and still goal-directed.**

## 10. Extinction inference

Extinction training reduces expression of previously acquired conditioned behavior but does not, on its own, demonstrate erasure.

Possible recovery modes:
- spontaneous recovery after time;
- renewal after context shift (ABA, ABC, AAB);
- reinstatement after unsignaled reinforcer exposure;
- rapid reacquisition when contingency returns;
- instrumental resurgence when reinforcement for a competing response disappears.

Not all are the same mechanism or apply equally to Pavlovian and instrumental tasks.

The 2024 renewal meta-analysis and 2026 spontaneous-recovery systematic review support the importance of context/delay and measurement heterogeneity. **No contradiction with LEA-01.**

## 11. Reconsolidation inference

Retrieval, destabilization, postretrieval restabilization and behavioral change are different targets.

Some animal studies provide causal reconsolidation evidence under defined manipulations. Human postretrieval extinction/reconsolidation translation is mixed and boundary-sensitive, with registered replication failures of prominent retrieval–extinction findings.

PE is a candidate destabilization condition in some protocols, but also supports new learning and state inference. Duration, age, strength, reminder structure and testing context matter.

**No reappearance of a previous response ≠ proof of erased trace or of reconsolidation-mediated rewriting.**

LEA-05 resolves rather than contradicts LEA-01's original overview.

## 12. Cross-domain invariants

1. **Learning vs performance** — distinguish latent update and observable output.
2. **Computation vs mechanism** — fitted formalism ≠ unique biological implementation.
3. **Prediction vs causation** — predictive pairing ≠ causal influence.
4. **Signal vs representation** — PE may teach but is not identical to what was learned.
5. **Acquisition vs expression** — learned tendency can be masked by control/contingency.
6. **Automaticity vs habit** — neither implies the other in every operationalization.
7. **Suppression vs erasure** — extinction may preserve recoverable learning.
8. **Retrieval vs destabilization** — remembering alone does not prove lability.
9. **Reliability vs validity** — repeatable scores may measure different constructs.
10. **Group evidence vs individual mechanism** — population results generate hypotheses, not diagnosis or unique individual explanations.

## 13. Cross-block contradiction matrix

| Potential collision | Resolution | Result |
| --- | --- | --- |
| LEA-01 PE as core learning signal vs LEA-03 richer PE taxonomy | Initial framework is nonexclusive; RL update models are conditional | Compatible |
| LEA-02 blocking vs LEA-03 reward-PE | Blocking has inferential/attentional explanations; cannot prove exclusive scalar RPE | Compatible |
| LEA-03 MF vs LEA-04 habit | Computational vs behavioral constructs explicitly separated | Compatible |
| LEA-03 fast updating vs working memory | Fast human behavior can reflect WM/rich memory rather than high alpha | Compatible |
| LEA-04 overtraining vs individual differences | Training dose does not guarantee valid habit induction | Compatible |
| LEA-05 inhibition vs LEA-01 extinction | Context-sensitive competing learning is leading but not exclusive interpretation | Compatible |
| LEA-05 reconsolidation vs extinction | Both can follow reminders under differing conditions; outcome alone insufficient | Compatible |
| LEA-02 conditioned inhibition vs LEA-05 inhibitory extinction | Both involve conditional inhibitory functions but are not identical procedures | Compatible |
| LEA-04 habitual performance vs LEA-05 response persistence | Outcome-insensitivity and extinction resistance are not interchangeable | Compatible |
| Neural dopamine/engram signal vs observed choice | Encoding or circuit correlation does not identify unique behavioral controller | Compatible |

**Science-content contradictions that would block completion: none found in current core rules.**
This is an internal coherence audit, not independent replication of every cited study.

## 14. Minor maintenance issue

LEA-01's historical scope note uses future tense for studies subsequently completed in LEA-02…05. This is documentation drift, not a scientific inconsistency. The chronological narrative may be retained as historical scope, while current navigation uses RESEARCH_QUEUE, CONTEXT_RECOVERY and domain README.

No additional foundational LEA block is justified solely to repair a historical future-tense note.

## 15. Red-team inference cases

**Case A: rapidly learned action.** Competing explanations: WM retrieval, episodic history, RL value updating, improved state representation. Conclusion: fast acquisition only, mechanism unresolved.

**Case B: repeated action remains after devaluation.** Verify actual devaluation, mappings and inhibition opportunity. Conclusion: potential reduced outcome sensitivity under conditions; not a universal habit trait.

**Case C: fast wrong action, slow correct action.** Competing habit-like action preparation and slower goal-directed correction are plausible. Conclusion: time-dependent competition; no categorical controller identity.

**Case D: low conditioned reaction after cue-only exposure.** Extinction/habituation/contextual expression alternatives. Conclusion: response reduction, not erasure.

**Case E: no response recurrence after a reminder protocol.** Competing inhibitory learning, new state learning, value updating, retrieval effects and reconsolidation. Conclusion: durability in tested conditions; unique mechanism unproven.

**Case F: dopamine signal matches a signed PE.** Competing representations of outcome identity, state, action, temporal structure. Conclusion: PE-compatible neural signal, not proof of homogeneous scalar dopamine/RL algorithm.

**Case G: similar computational parameters across two tasks.** Test measurement invariance, recovery and cross-task correlation. Conclusion: nominal parameter identity does not imply a general personality trait.

**Case H: no recurrence for months.** Longitudinal behavioral outcome is stronger evidence for durability, but cannot alone prove trace erasure. Conclusion: stable expression under observed conditions.

## 16. Minimum general inference workflow

1. Define observation precisely (what changed, when, under which cues).
2. Separate behavior/performance from latent learning.
3. Specify learned relation and represented state.
4. Identify outcome identity, value, contingency, timing and context.
5. Characterize acquisition dose and memory/task knowledge.
6. Test candidate processes: associative, WM/episodic, RL, value, S–R, inhibitory, retrieval.
7. Identify whether a prediction error was measured or merely hypothesized.
8. Use manipulations that discriminate alternatives, not just model fit.
9. Evaluate reliability, validity, recovery, replication and transfer.
10. State the narrowest mechanism inference justified by the evidence.
11. Preserve unresolved explanations rather than assigning confident labels.
12. Keep personalized inference outside the scientific repository.

## 17. Evidence strengths and limitations

### High practical confidence

- learning vs performance;
- contiguity vs contingency;
- Pavlovian vs instrumental relations;
- PE is not identical to all surprise;
- model fit is not mechanism identification;
- valid habit testing needs devaluation/contingency controls;
- extinction is not synonymous with erasure;
- retrieval is not automatically memory destabilization.

### Established but conditional

- blocking and PIT depend on representation, training and task awareness;
- RL estimates can depend on memory, state and event timing;
- context can regulate expression of extinction learning;
- overtraining/time-pressure effects can reveal habitual response preparation.

### Contested or measurement-limited

- stable, generalizable human "habit strength" from any single task;
- unique interpretation of two-step MF/MB coefficients;
- uniform dopamine = scalar RPE;
- universal human behavioral reconsolidation updating;
- arbitrary prediction-error thresholds for destabilization;
- broad clinical translation from simple fear-conditioning procedures.

### Not supported by LEA alone

- person-specific neurobiological learning mechanism;
- personality- or diagnostic-level habit/learning traits from a single task;
- claim that an old reaction was permanently erased;
- claim that successful behavioral change proves reconsolidation.

## 18. Remaining research dependencies: route, do not sprawl

1. **MOT:** motivational value, goal pursuit, reward, effort, incentives and state-dependent preference.
2. **AFF:** emotion regulation, affective learning and appraisal.
3. **STR:** stress-dependent acquisition/retrieval and context effects.
4. **SOC:** social learning, mentalization, observational and norm learning.
5. **NEU:** neural implementation, heterogeneous dopamine, circuits and causal evidence.
6. **PSYCHOMETRICS:** individual-level estimation, longitudinal reliability, ecological validity.
7. **CLN/NDEV/BHC:** diagnosis boundaries, neurodevelopment and intervention claims.
8. **DEC:** belief updating, causality and strategic choice.

These are **dependencies**, not missing foundations that force LEA-07.

## 19. Sufficiency decision

**LEA-01…06 are sufficient for the project's current general-purpose learning-mechanism inference.**

Close the sequence as **COMPLETE_FOR_CURRENT_SCOPE**, not "psychological learning science completely mastered."

This is justified because:
- all five mechanism blocks have operational definitions, alternatives, validity constraints and inference gates;
- cross-block conceptual collisions have been audited;
- every high-risk inference leap is explicitly blocked;
- remaining questions have named downstream domains;
- adding undirected categories has diminishing practical value.

**Next dependency-driven block: MOT-01 — Motivation foundations: needs, incentives, value, effort, goal pursuit, and construct boundaries.**

## 20. Integrated Learning Inference Gate — 40 questions

### A. Observations and target
1. Is the datum learning, performance, or a report?
2. What response variable changed?
3. When and in what context?
4. What was actually learned: cue–outcome, action–outcome, stimulus–response, state, value or memory?
5. Is the target a stable pattern or single observation?

### B. Associations and expectations
6. What was the objective contingency?
7. What background outcome rate existed?
8. Was temporal spacing controlled?
9. Does prediction imply causality here?
10. Were awareness/instructions measured?

### C. Computation and state
11. Which PE type is relevant, if any?
12. Was PE actually observed?
13. What is the represented state?
14. Could WM or episodic recall explain rapid learning?
15. Could state aliasing change the fitted update rate?
16. Is the assumed reward function stable?
17. Could choice perseveration explain repeated actions?
18. Are RL parameters valid/recoverable in this task?

### D. Action control
19. Is there evidence of goal/outcome-value sensitivity?
20. Was devaluation effective?
21. Was action–outcome contingency knowledge verified?
22. Does time pressure uncover an early action tendency?
23. Is response preparation separated from final action?
24. Is automaticity being mistaken for habit?
25. Is MF being mistaken for habitual behavior?
26. Are convergent habit measures available?

### E. Extinction and recovery
27. Is attenuated responding distinct from memory loss?
28. Was extinction in Pavlovian or instrumental learning?
29. Was spontaneous recovery tested?
30. Was renewal assessed after a context shift?
31. Was reinstatement or reacquisition tested?
32. Could extinction reflect competing inhibitory learning?
33. Were retrieval and destabilization distinguished?
34. Is reconsolidation evidence stronger than an improved delayed outcome?

### F. Validation and transfer
35. Were competing mechanisms compared?
36. Does measurement reliably detect the proposed effect?
37. Does it validly measure the intended construct?
38. Does group/task evidence generalize to target context?
39. What remains only a hypothesis?
40. What is the narrowest claim consistent with all controls?

## 21. Closure audit — 20 criteria

1. All five predecessor blocks read and mapped: **PASS**.
2. Learning versus performance integrated: **PASS**.
3. S–O/R–O/S–R/transition/value distinctions integrated: **PASS**.
4. Contingency and causality boundaries explicit: **PASS**.
5. PE types and competing updates integrated: **PASS**.
6. Cue competition/conditioned inhibition/PIT included: **PASS**.
7. RL alpha/beta/state/memory confounds controlled: **PASS**.
8. MF/MB versus habit distinctions preserved: **PASS**.
9. Outcome-devaluation manipulation validity addressed: **PASS**.
10. Overtraining and time-pressure measurement caveats included: **PASS**.
11. Extinction recovery modes separated: **PASS**.
12. Retrieval–destabilization–reconsolidation chain separated: **PASS**.
13. Cross-block contradiction matrix completed: **PASS**.
14. Distinction between internal audit and independent study verification explicit: **PASS**.
15. Mechanism-competition red-team cases included: **PASS**.
16. Reusable integrated 40-question inference gate included: **PASS**.
17. Open dependencies routed to named downstream domains: **PASS**.
18. No new LEA topic without a concrete purpose: **PASS**.
19. No personal or individualized information included: **PASS**.
20. Unambiguous domain completion and MOT-01 next action: **PASS**.

## 22. Canonical operating rule

**Observation -> expression versus acquisition -> learned relation/state/outcome -> causal and timing structure -> prediction and memory alternatives -> controller competition -> extinction/recovery alternatives -> measurement validity -> restricted inference -> downstream routing.**

**Never** convert:
- single action -> latent learning mechanism;
- PE -> unique rewriting;
- alpha -> permanent learning ability;
- MF -> habit;
- automaticity -> value-insensitive S–R;
- reduced response -> erased memory;
- memory reactivation -> reconsolidation;
- model fit or neural correlation -> unique biology.

## References and provenance

**Core evidence:** bibliography, methodological controls and source-level limitations in LEA-01, LEA-02, LEA-03, LEA-04 and LEA-05.

Additional current checks:
1. *Capturing Habits in Humans: Neural Circuitry, Computations, and Clinical Mechanisms* (2026, published November). https://pubmed.ncbi.nlm.nih.gov/43015113/ — contemporary synthesis of neural, computational, laboratory and naturalistic measurement limitations.
2. *The evaluation of devaluation: Deficient outcome devaluation leads to wrongly considering goal-directed actions as habits* (2026). https://pubmed.ncbi.nlm.nih.gov/42414812/ — manipulation effectiveness is a prerequisite for habit classification.
3. *A systematic review of spontaneous recovery in human fear conditioning* (2026). https://pubmed.ncbi.nlm.nih.gov/42500404/ — recovery effects vary with paradigm and retention interval.
4. *Renewal in human fear conditioning: A systematic review and meta-analysis* (2024). https://pubmed.ncbi.nlm.nih.gov/38431150/ — renewal across contexts and generalization limits.
5. *Human goal-directed behavior is resistant to interventions on the action-outcome contingency* (2026). https://pubmed.ncbi.nlm.nih.gov/41691312/ — goal-directed control can persist after contingency manipulations.

## State transition

**LEA -> COMPLETE_FOR_CURRENT_SCOPE.**
**Phase B -> IN PROGRESS.**
**Next: MOT-01 — Motivation foundations: needs, incentives, value, effort, goal pursuit, and construct boundaries.**
