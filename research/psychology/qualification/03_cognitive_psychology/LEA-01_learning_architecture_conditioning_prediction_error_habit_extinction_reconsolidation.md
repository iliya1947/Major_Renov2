# LEA-01 — Learning architecture: conditioning, prediction error, habit, extinction, and reconsolidation boundaries

Status: **CLOSED_FOR_PRACTICE v1.0**

## Purpose

Establish a current architecture of learning before opening deeper blocks on associative learning, reinforcement learning, habits, extinction, and memory updating.

The block separates:

- learning from immediate performance change;
- Pavlovian/classical from instrumental/operant learning;
- stimulus–outcome from action–outcome and stimulus–response relations;
- reinforcement from reward and punishment;
- contingency from simple temporal pairing;
- learned prediction from causal belief;
- prediction error from surprise and from all learning;
- reward-prediction-error models from dopamine as a whole;
- model-free/model-based computation from habit/goal-directed action;
- repetition/automaticity from habit;
- habit from perseveration/compulsion;
- extinction from erasure and ordinary forgetting;
- extinction learning from reconsolidation-based updating;
- retrieval/reactivation from memory destabilization;
- reconsolidation from the claim that every retrieval rewrites memory.

## Core rule

**Learning is a family of experience-dependent changes in prediction, representation, valuation, or action policy. To explain a behavioral change, specify what relation was learned, what evidence updated it, what representation/policy controls behavior now, and whether the observed change reflects acquisition, expression, extinction, updating, or retrieval rather than treating "learning" as one mechanism.**

A generic architecture is:

`experience: cue / action / context / outcome`
-> `prediction + current representation`
-> `outcome / discrepancy / contingency evidence`
-> `update of association, state model, action value, causal belief, or policy`
-> `later behavior under current context/value`

with parallel influences from:

- memory;
- attention;
- working memory;
- goals;
- reward/punishment;
- context;
- explicit knowledge;
- habits;
- executive control.

## 1. Learning is not identical to performance

Observed performance can change because of:

- learning;
- motivation;
- fatigue;
- arousal;
- response strategy;
- context;
- retrieval failure;
- motor constraints.

Likewise, learning can occur without immediately changing the measured response.

Canonical rule:

**performance change is evidence relevant to learning, not learning itself.**

## 2. Associative learning is a broad family

Associative learning concerns experience-dependent relations among events, actions, outcomes, and contexts.

Common relation types include:

- stimulus–outcome (S–O);
- action–outcome (A–O / R–O);
- stimulus–response (S–R);
- stimulus–stimulus (S–S);
- context–outcome.

These relations can coexist.

Therefore:

**one learned behavior does not reveal which associative relation controls it.**

## 3. Pavlovian/classical conditioning

In Pavlovian conditioning, the organism learns predictive relations between events.

Typical architecture:

`conditioned stimulus (CS) -> predicts unconditioned/outcome event (US/O)`.

The critical property is that the outcome is not contingent on performing the measured instrumental response.

Pavlovian learning can alter:

- anticipatory responses;
- attention;
- approach/avoidance;
- action vigor;
- later instrumental choice.

Canonical rule:

**Pavlovian learning is about predictive cue–outcome structure, not simply "automatic reflex learning."**

## 4. Instrumental/operant learning

Instrumental learning concerns relations between actions and their consequences.

Typical architecture:

`action -> outcome`.

Behavior can become more or less likely depending on:

- outcome value;
- action–outcome contingency;
- reinforcement history;
- learned context.

Instrumental action can be:

- goal-directed;
- habitual;
- controlled by mixtures of both.

## 5. Pavlovian and instrumental learning interact

Pavlovian cues can influence instrumental behavior even when the instrumental contingency itself has not changed.

Pavlovian-to-instrumental transfer (PIT) illustrates this.

Recent human work shows that PIT can depend partly on:

- learned reward expectancies;
- working memory;
- beliefs about cue relevance;
- strategic use of cues.

A residual transfer effect can remain after manipulations designed to reduce explicit inference.

Canonical rule:

**PIT should not automatically be labelled a purely automatic associative effect in humans.**

## 6. General versus outcome-specific PIT

### General PIT

A reward-predictive cue broadly increases response vigor.

### Outcome-specific PIT

A cue selectively facilitates an action associated with the same expected outcome.

These effects imply different representational demands and should not be collapsed.

## 7. Reinforcement is not synonymous with reward

In behavioral terminology, reinforcement is defined functionally by an increase or maintenance of behavior due to its consequences.

- **positive reinforcement**: a consequence is added;
- **negative reinforcement**: an aversive condition is removed/avoided.

"Negative" does not mean punishment.

Punishment refers to consequences that reduce behavior.

Canonical rule:

**negative reinforcement != punishment.**

## 8. Reward is not identical to reinforcement

A rewarding/pleasant outcome may fail to reinforce a particular action if:

- it is not contingent on the action;
- timing is poor;
- another process dominates;
- the action–outcome relation is not learned.

Conversely, reinforcement is operationally defined by its behavioral effect rather than subjective pleasure alone.

## 9. Temporal pairing is not sufficient to establish contingency

Two events can occur close together without one reliably predicting the other.

Learning depends on information such as:

- probability of outcome given cue/action;
- probability of outcome in its absence;
- background rate;
- timing;
- competing predictors.

Canonical rule:

**contiguity != contingency.**

## 10. Contingency is not automatically causal belief

A learner may detect statistical contingency without concluding that one event causes another.

Human causal judgments can additionally use:

- explicit instructions;
- prior knowledge;
- temporal structure;
- alternative causes;
- verbal reasoning.

Recent work even shows that explicit descriptions of causal relations can alter subsequent associative blocking.

Canonical rule:

**learned prediction != causal belief by definition.**

## 11. Prediction error

A prediction error is a discrepancy between an expected and obtained event/value.

In reward learning:

`RPE = obtained reward - expected reward`.

A positive RPE indicates better-than-expected reward; a negative RPE indicates worse-than-expected reward.

NIMH RDoC currently treats Reward Prediction Error as a subconstruct of Reward Learning.

## 12. Prediction error is a teaching signal, not the learned representation itself

Prediction error can determine how much updating occurs.

But the learned content may concern:

- value;
- outcome identity;
- timing;
- state transition;
- causal contingency;
- sensory features.

Canonical rule:

**prediction error says that an expectation should update; it does not by itself specify the full content of the representation being learned.**

## 13. Prediction error is not identical to surprise

An outcome can be surprising because:

- its value differs;
- its identity differs;
- timing differs;
- context differs.

A scalar reward-prediction error captures only some of these dimensions.

Current dopamine research increasingly distinguishes value RPE from richer/generalized prediction-error signals.

## 14. Dopamine is not a pure scalar RPE meter

Phasic dopamine often behaves consistently with reward-prediction-error models.

However, 2024–2025 reviews emphasize that dopamine responses can also reflect:

- sensory features;
- movement/action variables;
- novelty;
- timing/state uncertainty;
- associative information beyond scalar value.

Canonical rule:

**dopamine signal -> RPE** can be a useful model-based inference, but **dopamine = reward prediction error** is too strong as a universal identity claim.

## 15. Prediction-error models are powerful but incomplete

Prediction-error models explain classic phenomena including:

- acquisition;
- blocking;
- extinction-like updating;
- contingency effects.

But timing itself requires representation.

Recent 2025–2026 work shows that:

- temporal structure can alter learning;
- inter-reward duration can affect behavioral and dopaminergic learning rates;
- temporal-causal models can reproduce phenomena commonly explained by simpler trial-wise PE rules.

Canonical rule:

**number of pairings alone is not a complete learning-dose variable.**

## 16. Blocking

Blocking occurs when prior learning about one predictor reduces learning about a newly added predictor.

Classic structure:

1. A predicts outcome.
2. A + B predict the same already-expected outcome.
3. Little learning about B occurs.

Prediction-error theory explains this because the outcome is already predicted.

But human blocking can also be influenced by:

- explicit causal descriptions;
- inference;
- attention;
- task representation.

Therefore blocking is not a unique proof of one associative algorithm.

## 17. Reinforcement learning is a computational framework

Reinforcement-learning (RL) models describe how agents update action/state values or policies from outcomes.

Important families include:

- temporal-difference learning;
- Q-learning;
- policy learning;
- model-free RL;
- model-based RL.

These are computational descriptions.

Canonical rule:

**fit by an RL model != proof that the brain literally implements that exact algorithm.**

## 18. Model-free versus model-based RL

### Model-free

Learns cached values/policies from experienced outcomes without explicitly planning through a learned transition model.

### Model-based

Uses an internal model of transitions/outcomes to prospectively evaluate actions.

The distinction is computationally useful.

But human behavior can additionally depend on:

- working memory;
- episodic memory;
- explicit reasoning;
- perseveration;
- task misunderstanding.

## 19. Model-free is not identical to habit

Habit and model-free RL are often treated as parallels.

They overlap conceptually because both can produce efficient behavior with reduced sensitivity to current outcome structure.

But they are not definitionally identical.

Human habit measurement is usually grounded in behavioral sensitivity to:

- outcome devaluation;
- contingency change;

whereas model-free/model-based status is inferred from computational task structure/model fits.

Canonical rule:

**model-free != habit, and model-based != goal-directed, without additional behavioral evidence.**

## 20. Working memory can masquerade as reinforcement learning

Recent human work shows that reward-based learning can mix:

- fast working-memory processes;
- slower associative/habit-like processes;
- perseveration.

These contributions can be misattributed to standard RL learning rates or model-based/model-free computations.

Canonical rule:

**RL parameter != pure learning mechanism.**

## 21. Goal-directed action

An instrumental action is considered goal-directed when behavior depends on:

1. knowledge of the action–outcome relation;
2. the current value of that outcome.

Canonical tests include:

- outcome devaluation;
- contingency degradation.

A goal-directed action should change when the desired outcome changes in value or when the action stops controlling it.

## 22. Habit

NIMH RDoC currently defines habit as a learned behavior triggered by internal/external stimuli that can proceed without continuous oversight and can become resistant to current outcome value.

A strong behavioral habit claim therefore requires more than:

- frequency;
- familiarity;
- speed;
- subjective automaticity;
- repetition.

Canonical rule:

**repeated behavior != habit by definition.**

## 23. Outcome devaluation

In devaluation paradigms:

1. an action is trained to produce an outcome;
2. the outcome's value is later reduced independently;
3. action is tested, often without delivering the outcome.

If behavior decreases appropriately, this supports current goal-directed control.

Persistent responding despite successful devaluation can support habit-like control.

But the **success of the devaluation manipulation itself must be verified**.

## 24. Failed devaluation can create false habits

A preregistered 2026 study found that participants appearing most "habitual" were often those for whom the devaluation procedure itself had worked least effectively.

Reanalysis of previous datasets supported the same pattern.

Canonical rule:

**insensitivity to devaluation is interpretable as habit only if the outcome was actually devalued.**

## 25. Contingency degradation

Contingency degradation weakens the relation between an action and its outcome, for example by delivering outcomes independently of the action.

Goal-directed behavior should reduce when the action no longer causes/predicts the outcome.

However, human contingency-degradation tests have not consistently demonstrated habit induction and can themselves have validity limitations.

## 26. Habit measures in humans do not fully converge

Current human habit paradigms can show:

- acceptable reliability within a measure;
- weak/no convergent validity across different habit measures.

A 2025 study comparing two time-pressure-based habit paradigms found reliable effects but no association between individual-difference measures.

Canonical rule:

**there is no single validated scalar "habit strength" measure across human paradigms.**

## 27. Habits can occur at different action stages

Recent 2025 work distinguishes habit in:

- response preparation;
- response initiation.

These can dissociate.

Thus even "habit" may describe multiple learned components of action control.

## 28. Habit is not simply behavioral persistence

Habits can be efficient and context-triggered without being universally more persistent.

Review evidence shows that habit identified by outcome devaluation is not necessarily:

- permanent;
- extinction-resistant;
- context-general.

Habits can be highly context-specific.

Canonical rule:

**persistence != habit.**

## 29. Habit is not compulsion

Compulsive behavior involves persistent/repetitive action despite adverse consequences and can involve:

- value/action-learning abnormalities;
- threat avoidance;
- goal structure;
- cognitive control;
- habit-like processes.

Habit is one candidate contributor, not a synonym for compulsion.

Clinical inference is deferred to CLN.

## 30. Goal-directed and habitual control can coexist

Behavior need not transition cleanly from one system to another.

Current actions can reflect mixtures of:

- goal-directed outcome evaluation;
- habit-like stimulus–response tendencies;
- working memory;
- learned context;
- Pavlovian influences.

Canonical rule:

**behavioral control is often hybrid rather than winner-take-all.**

## 31. Repetition does not guarantee habitual control

Extended practice can promote efficient stimulus-linked responding.

But in human experiments:

- strong task instructions;
- explicit outcome knowledge;
- working memory;
- goal relevance

can preserve goal-directed control even after substantial training.

Therefore:

**overtraining -> habit** is a hypothesis, not an automatic rule.

## 32. Extinction

Extinction occurs when a previously predictive cue/action is repeatedly encountered without the expected outcome/reinforcer and the learned response decreases.

Examples:

- CS no longer followed by US;
- action no longer produces reward.

Canonical rule:

**extinction is a learning procedure and behavioral phenomenon, not proof that the original memory was erased.**

## 33. Extinction commonly creates competing/context-sensitive learning

A dominant contemporary account is that extinction establishes new learning that suppresses expression of the original association under relevant conditions.

Evidence includes return-of-response phenomena.

This should not be reified as one universal anatomical "inhibitory trace"; extinction mechanisms can vary across learning systems.

## 34. Spontaneous recovery

An extinguished response can return after time passes.

This demonstrates that low responding at the end of extinction does not necessarily mean the original learning is gone.

A 2026 systematic review of 242 human fear-conditioning studies found substantial paradigm heterogeneity but broad evidence supporting spontaneous-recovery phenomena.

## 35. Renewal

An extinguished response can return when context changes after extinction.

The 2024 human fear-conditioning meta-analysis found renewal is strongly paradigm-dependent, with ABA designs producing especially robust renewal and multi-context extinction reducing renewal.

Canonical rule:

**extinction learning is often context-sensitive.**

## 36. Reinstatement

An extinguished response can return after unsignaled exposure to the outcome/US.

Current work continues to model reinstatement partly through changed context–outcome associations.

Thus relapse after extinction is expected under some conditions and does not imply that extinction "failed to learn anything."

## 37. Extinction burst and increased variability

Early extinction can transiently produce:

- increased response rate/intensity;
- greater behavioral variability.

This is important because a temporary increase after removing reinforcement does not prove that the intervention is strengthening the original behavior.

Interpretation depends on design and timescale.

## 38. Extinction is not ordinary forgetting

Forgetting can arise through:

- retrieval failure;
- interference;
- contextual change;
- representational transformation.

Extinction specifically involves new experience in which an expected outcome no longer follows the cue/action.

Canonical rule:

**time-dependent loss != extinction.**

## 39. Extinction is not always equivalent across Pavlovian and instrumental learning

Pavlovian extinction removes the expected cue–outcome relation.

Instrumental extinction removes the outcome following an action.

In instrumental behavior, responding can decline while knowledge of outcome value and goal-directed control remains intact.

A 2026 human study found reduced responding after extinction/noncontingent outcome exposure while later behavior remained sensitive to outcome devaluation.

Canonical rule:

**less responding after extinction != habit or loss of action–outcome knowledge.**

## 40. Reconsolidation

Reconsolidation refers to a proposed restabilization process after an already consolidated memory is reactivated and becomes modifiable.

Critical distinction:

`retrieval/reactivation`
does not automatically imply
`destabilization/reconsolidation`.

Boundary conditions matter.

## 41. Prediction error is a candidate boundary condition for destabilization

For reconsolidation-oriented updating, mere reminder exposure may be insufficient.

Current human fear-memory work supports prediction error/mismatch as an important candidate condition determining whether reactivation opens a modifiable state.

However:

- operational definitions of prediction error vary;
- effect sizes and replication are inconsistent;
- memory strength and other factors matter.

Canonical rule:

**prediction error may enable reconsolidation; it does not guarantee it.**

## 42. Memory strength can limit retrieval-extinction effects

A 2025 human fear-conditioning study found stronger memories were more resistant to retrieval-extinction intervention even when prediction-error manipulations were used.

This is one example of a reconsolidation boundary condition.

Other proposed boundaries include:

- memory age;
- reminder duration;
- retrieval conditions;
- learning strength.

These are not universal constants.

## 43. Retrieval-extinction is not settled as reconsolidation rewriting

Retrieval followed by extinction has sometimes produced reduced return of fear compared with standard extinction.

But human findings are inconsistent.

A 2026 systematic review of TMS/reactivation studies explicitly notes that it remains unclear whether effects uniquely support reconsolidation rather than broader post-retrieval modulation.

Canonical rule:

**retrieval-extinction effect != reconsolidation proven.**

## 44. Every retrieval does not rewrite memory

Retrieval can lead to:

- successful recall with little durable change;
- strengthening;
- integration of new information;
- extinction/new learning;
- reconsolidation-like modification under particular conditions.

Therefore:

**remembering something once != automatically changing the memory.**

## 45. Reconsolidation and extinction are competing/update outcomes, not synonyms

After retrieval:

- limited mismatch under suitable conditions may permit updating of an existing memory;
- extended unreinforced exposure commonly supports extinction/new learning.

The boundary is influenced by:

- prediction error;
- exposure duration;
- memory strength;
- task/context.

The exact transition is not governed by one established universal threshold.

## 46. Learning can update existing models or create new ones

Recent memory-updating theories propose that small prediction errors may favor editing/updating an existing memory/model, whereas large discrepancies may favor formation of a new episodic representation.

This is a current theoretical framework, not a settled universal law.

Canonical rule:

**new evidence can update an old representation or trigger a new representation; behavioral change alone may not reveal which occurred.**

## 47. Associative prediction is not necessarily automatic/unconscious

Human associative behavior can involve:

- explicit expectancy;
- propositional reasoning;
- working memory;
- strategic use of cues.

The 2026 PIT work found that directed forgetting and working-memory load reduced outcome-specific PIT, supporting an important cognitive contribution.

Thus:

**associative learning != unconscious learning by definition.**

## 48. Explicit knowledge does not eliminate associative influence

Conversely, residual cue effects can remain even when participants are instructed that cue relations are obsolete or are asked to forget them.

Therefore a strict:

`explicit cognition OR association`

dichotomy is also too simple.

## 49. Learning is not necessarily monotonic

Behavior can show:

- rapid acquisition;
- plateaus;
- relapse;
- savings/reacquisition;
- context effects;
- generalization gradients.

A temporarily absent response does not imply the underlying learned structure has disappeared.

## 50. Generalization and discrimination are part of learning

Learning includes deciding:

- which cues/states are equivalent;
- which differences matter;
- whether a learned relation applies in a new context.

Overgeneralization and undergeneralization can both occur.

Detailed generalization mechanisms can be opened downstream.

## 51. State representation is often the hidden variable

RL/associative models update predictions conditional on an internal representation of "state."

Two learners exposed to the same objective environment may learn differently because they represent:

- context;
- timing;
- cue identity;
- task phase

differently.

Canonical rule:

**apparent learning-rate difference can be a state-representation difference.**

## 52. Learning-rate parameters are not pure traits

A fitted learning rate can absorb:

- memory limitations;
- state representation;
- exploration;
- perseveration;
- noise;
- working memory;
- model misspecification.

Therefore:

**high/low α -> stable personal learning speed**

is not justified without strong model validation and replication.

## 53. Learning Architecture Inference Gate

Before making a learning-mechanism inference, ask:

### A. Observed change

1. What behavior/judgment changed?
2. Is the change acquisition, expression, retrieval, extinction, or update?
3. Could motivation/state/performance explain it without learning?

### B. Learned relation

4. Is the candidate relation S–O, A/R–O, S–R, S–S, context–outcome, or another relation?
5. Is more than one relation learned?
6. Is the task Pavlovian, instrumental, or mixed?

### C. Contingency

7. Is the relation merely contiguous or actually predictive/contingent?
8. What is the background outcome rate?
9. What alternative predictors/causes exist?
10. Is temporal structure modeled?

### D. Prediction error

11. What was expected?
12. What outcome occurred?
13. Is the error about value, identity, timing, or state?
14. Is PE observed, inferred, or model-derived?
15. Could the same behavior follow without a scalar RPE account?

### E. RL model

16. Which RL family is used?
17. What state representation is assumed?
18. Are working memory/perseveration/exploration modeled?
19. Is model fit being treated as mechanistic proof?
20. Could another model explain the same choices?

### F. Goal-directed versus habit

21. Is action–outcome knowledge demonstrated?
22. Was outcome value manipulated successfully?
23. Is responding sensitive to devaluation?
24. Is contingency degradation used and valid?
25. Is repetition/frequency being mistaken for habit?
26. Could WM/task instructions preserve goal-directed control?
27. Is a model-free index being equated with habit without devaluation evidence?

### G. Pavlovian influence

28. Is cue–outcome learning demonstrated?
29. Is PIT general or outcome-specific?
30. Could explicit expectancies/strategic cue use explain transfer?
31. Does a residual transfer remain after reducing explicit inference?

### H. Extinction

32. Was the expected outcome actually omitted?
33. Is response reduction within extinction measured?
34. Is spontaneous recovery tested?
35. Is renewal tested across context?
36. Is reinstatement tested?
37. Is extinction being called erasure?
38. Could reduced responding coexist with retained goal-directed knowledge?

### I. Reconsolidation

39. Was an established memory reactivated?
40. Is there evidence that reactivation destabilized it?
41. Was a prediction error/mismatch induced?
42. Is memory strength/age/reminder duration considered?
43. Is retrieval-extinction being interpreted as reconsolidation without a discriminating test?
44. Could ordinary extinction/post-retrieval modulation explain the result?

### J. Individual inference

45. Is the measure reliable across sessions?
46. Are task/model parameters identifiable?
47. Is the learning pattern replicated across tasks/contexts?
48. Could state, memory, attention, motivation, or explicit knowledge explain it?
49. What rival learning mechanism remains?
50. What manipulation would best distinguish the candidates?
51. What is the strongest warranted conclusion?
52. What wording would overclaim habit, PE, erasure, or reconsolidation?

## 54. High-value failure modes

### Failure A — performance changed = learning occurred

Incorrect.

Correct:

Performance and latent learning must be separated.

### Failure B — repeated pairing = learned contingency

Incorrect.

Correct:

Background rates, temporal structure, and alternative predictors matter.

### Failure C — Pavlovian learning = reflex

Incorrect.

Correct:

Pavlovian cues can support rich predictions and influence decision/action systems.

### Failure D — negative reinforcement = punishment

Incorrect.

Correct:

Negative reinforcement strengthens behavior through removal/avoidance of an aversive condition.

### Failure E — prediction error = surprise

Incorrect.

Correct:

Prediction discrepancies can concern value, identity, timing, or state; scalar RPE is one subtype/model.

### Failure F — dopamine = RPE

Incorrect as a universal identity.

Correct:

RPE accounts explain substantial dopamine activity, but current evidence supports broader signals/functions.

### Failure G — RL model fit = brain algorithm proven

Incorrect.

Correct:

RL is a computational model family and human behavior mixes memory, explicit reasoning, and other processes.

### Failure H — model-free = habit

Incorrect.

Correct:

Habit requires behavioral evidence of outcome-value/contingency insensitivity; computational model-free indices are not identical.

### Failure I — repeated/automatic behavior = habit

Incorrect.

Correct:

Frequency, automaticity, and habit are related but distinct.

### Failure J — devaluation-insensitive responding = habit automatically

Incorrect.

Correct:

First verify that devaluation actually changed outcome value.

### Failure K — extinction = erasure

Incorrect.

Correct:

Return-of-response phenomena show persistence/context dependence of prior learning.

### Failure L — extinction = forgetting

Incorrect.

Correct:

Extinction is new experience with outcome omission, not time-dependent memory loss.

### Failure M — response declined after instrumental extinction = action became habitual

Incorrect.

Correct:

Responding can decline while outcome-value sensitivity remains intact.

### Failure N — retrieval = reconsolidation

Incorrect.

Correct:

Reactivation need not destabilize memory.

### Failure O — prediction error = reconsolidation guaranteed

Incorrect.

Correct:

Prediction error is a candidate boundary condition among several.

### Failure P — retrieval-extinction effect = original memory rewritten

Incorrect.

Correct:

Extinction/new learning or other post-retrieval modulation can produce similar behavioral outcomes.

### Failure Q — associative = unconscious

Incorrect.

Correct:

Human associative behavior can rely substantially on explicit expectancy and inference.

### Failure R — one learning-rate parameter = stable learning trait

Incorrect.

Correct:

Parameters depend on model/state representation, memory, exploration, perseveration, and task.

## 55. Closure audit

### Criterion 1 — learning is separated from immediate performance expression

**PASS.**

### Criterion 2 — Pavlovian, instrumental, and mixed/PIT learning are separated

**PASS.**

### Criterion 3 — S–O, A/R–O, and S–R relations are distinguished

**PASS.**

### Criterion 4 — reinforcement/reward/punishment terminology is correctly bounded

**PASS.**

### Criterion 5 — contiguity, contingency, prediction, and causal belief are separated

**PASS.**

### Criterion 6 — prediction error is represented as a teaching/update signal rather than all learning

**PASS.**

### Criterion 7 — dopamine/RPE identity is explicitly constrained by current evidence

**PASS.**

### Criterion 8 — computational RL is separated from mechanistic proof and memory/task confounds

**PASS.**

### Criterion 9 — model-free/model-based are not equated automatically with habit/goal-directed control

**PASS.**

### Criterion 10 — human habit inference requires validated outcome-value/contingency tests

**PASS.**

### Criterion 11 — devaluation validity and cross-measure habit limitations are explicit

**PASS.**

### Criterion 12 — habit is separated from repetition, persistence, automaticity, and compulsion

**PASS.**

### Criterion 13 — extinction is represented as new/context-sensitive learning rather than simple erasure

**PASS.**

### Criterion 14 — spontaneous recovery, renewal, and reinstatement boundaries are explicit

**PASS.**

### Criterion 15 — extinction is separated from forgetting and from loss of goal-directed knowledge

**PASS.**

### Criterion 16 — retrieval/reactivation and reconsolidation are separated

**PASS.**

### Criterion 17 — reconsolidation boundary conditions and retrieval-extinction uncertainty are explicit

**PASS.**

### Criterion 18 — reusable Learning Architecture Inference Gate exists

**PASS.**

A 52-question Learning Architecture Inference Gate is now canonical.

## Canonical working rule

**Identify the learned relation, establish contingency and state representation, specify the prediction/update signal, separate computational model from behavioral control mode, verify goal-directed/habit tests, distinguish extinction from erasure, and infer reconsolidation only when retrieval, destabilization boundary conditions, and alternative extinction accounts have been discriminated.**

Never:

**repeated behavior -> habit; omitted outcome -> memory erased; retrieval -> reconsolidation; model fit -> mechanism.**

## Sources

1. National Institute of Mental Health. *Definitions of the RDoC Domains and Constructs — Reward Learning / Habit*. Current official resource. https://www.nimh.nih.gov/research/research-funded-by-nimh/rdoc/definitions-of-the-rdoc-domains-and-constructs
2. National Institute of Mental Health. *Reward Learning — RDoC*. https://www.nimh.nih.gov/research/research-funded-by-nimh/rdoc/constructs/reward-learning
3. National Institute of Mental Health. *Reward Prediction Error — RDoC*. https://www.nimh.nih.gov/research/research-funded-by-nimh/rdoc/constructs/reward-prediction-error
4. National Institute of Mental Health. *Habit — Positive Valence Systems*. https://www.nimh.nih.gov/research/research-funded-by-nimh/rdoc/constructs/habit-pvs
5. Kahnt, T., & Schoenbaum, G. (2025). The curious case of dopaminergic prediction errors and learning associative information beyond value. *Nature Reviews Neuroscience, 26*, 169–178. https://doi.org/10.1038/s41583-024-00898-8
6. Gershman, S. J., Assad, J. A., Datta, S. R., et al. (2024). Explaining dopamine through prediction errors and beyond. *Nature Neuroscience, 27*, 1645–1655. https://doi.org/10.1038/s41593-024-01705-4
7. Hamou, N., Gershman, S. J., & Reddy, G. (2025). Reconciling time and prediction error theories of associative learning. *Nature Communications, 16*, 10265. https://doi.org/10.1038/s41467-025-65137-9
8. Burke, D. A., Taylor, A., Jeong, H., et al. (2026). Duration between rewards controls the rate of behavioral and dopaminergic learning. *Nature Neuroscience*. https://doi.org/10.1038/s41593-026-02206-2
9. Collins, A. G. E. (2026). A habit and working memory model as an alternative account of human reward-based learning. *Nature Human Behaviour, 10*, 357–369. https://doi.org/10.1038/s41562-025-02340-0
10. Oh, S., & Collins, A. G. E. (2026). Naturally disengaging control to reveal habits. *Journal of Experimental Psychology: General, 155*(10), 2350–2393. https://doi.org/10.1037/xge0001981
11. Vázquez-Millán, A., Martínez-López, P., Rueda, M., León, J. J., & Luque, D. (2026). The evaluation of devaluation: Deficient outcome devaluation leads to wrongly considering goal-directed actions as habits. *Behavior Research Methods, 58*(8). https://doi.org/10.3758/s13428-026-03099-6
12. *Assessing the validity evidence for habit measures based on time pressure.* (2025). PMID 41286251.
13. Du, Y., & Haith, A. M. (2025). Dissociable habits of response preparation versus response initiation. *Nature Human Behaviour, 9*, 1941–1958. https://doi.org/10.1038/s41562-025-02215-4
14. Huseynzade, U., Dignath, D., & Eder, A. B. (2026). Directed forgetting and working-memory load reduce outcome-selective Pavlovian-to-instrumental transfer in humans. *Scientific Reports, 16*, 32070. https://doi.org/10.1038/s41598-026-75419-x
15. *Unraveling the influence of Pavlovian cues on decision-making: A pre-registered meta-analysis on Pavlovian-to-instrumental transfer.* (2024). PMID 39074674.
16. Anselme, P., & Güntürkün, O. (2026). Connecting extinction learning in the laboratory and the wild. *Nature Reviews Psychology, 5*, 352–365. https://doi.org/10.1038/s44159-026-00561-2
17. *Renewal in human fear conditioning: A systematic review and meta-analysis.* (2024). PMID 38431150. https://doi.org/10.1016/j.neubiorev.2024.105606
18. *A systematic review of spontaneous recovery in human fear conditioning.* (2026). PMID 42500404.
19. Perez, O. D., Oh, S., Dickinson, A., Arenas, J., & Merlo, E. (2026). Human goal-directed behavior is resistant to interventions on the action-outcome contingency. *BMC Psychology*. https://doi.org/10.1186/s40359-026-04115-2
20. Chen, J., Fang, Z., Zhang, X., Zheng, Y., & Chen, Z. (2025). How Fear Memory is Updated: From Reconsolidation to Extinction? *Neuroscience Bulletin, 41*, 1054–1084. https://doi.org/10.1007/s12264-025-01367-7
21. *The effect of degree of prediction error elicited by retrieval on the reconsolidation of fear memory.* (2025). PMID 40570716. https://doi.org/10.1016/j.cognition.2025.106224
22. *Investigating the effect of memory strength within reactivation-extinction paradigm on cue-dependent amnesia.* (2025). PMID 40653191.
23. *Rewriting Reactivated Memories? A Systematic Review of Transcranial Magnetic Stimulation and Memory Reactivation and Reconsolidation Paradigms.* (2026). PMID 42536010. https://doi.org/10.1016/j.neurom.2026.05.016
24. Chow, J. Y. L., Don, H. J., Colagiuri, B., & Livesey, E. J. (2026). Predicting continuous outcomes: Some new tests of associative approaches to contingency learning. *PLOS Computational Biology, 22*, e1013220. https://doi.org/10.1371/journal.pcbi.1013220
25. *Blocking of associative learning by explicit descriptions.* (2024). PMID 39637517.

## Current-standard note

As of 2026-11-19:

- NIMH RDoC retains Reward Learning, Reward Prediction Error, and Habit as distinct constructs/subconstructs rather than treating reward learning as one unitary mechanism;
- contemporary dopamine reviews continue to support prediction-error theory as highly influential while explicitly rejecting a simple one-dimensional dopamine = scalar RPE identity;
- current associative-learning work integrates prediction error with timing, contingency, causal/state representation, and memory rather than treating number of pairings as a sufficient learning law;
- current human habit research remains measurement-sensitive: successful outcome devaluation must be verified, different laboratory habit indices do not necessarily converge, and working memory/goal-directed control can mask or mimic putative habit/RL effects;
- extinction is strongly constrained by context and return-of-response effects including renewal, reinstatement, and spontaneous recovery, which argue against simple erasure accounts;
- human reconsolidation/retrieval-extinction findings remain boundary-condition dependent and do not justify the claim that retrieval automatically destabilizes or rewrites memory.

## Scope note

This block establishes the learning architecture.

Detailed Pavlovian/instrumental associative learning, contingency, blocking, conditioned inhibition, and PIT will be deepened in **LEA-02**. Detailed reinforcement-learning/prediction-error computation will be deepened later in LEA. Habit formation and goal-directed/habit arbitration will be deepened separately. Extinction/reconsolidation mechanisms will receive a dedicated block before the LEA sequence is closed.
