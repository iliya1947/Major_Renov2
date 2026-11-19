# LEA-03 — Reinforcement learning and prediction error: TD/RPE, learning rates, state representation, model-free/model-based limits, and dopamine boundaries

Status: **CLOSED_FOR_PRACTICE v1.0**

## Purpose

Deepen reward-learning computation after LEA-01/02.

This block separates:

- reinforcement learning as a computational framework from biological mechanism;
- reward prediction error from broader prediction mismatch/surprise;
- temporal-difference prediction error from simple trial-wise delta rules;
- learning rate from stable "learning speed";
- volatility-sensitive updating from stochastic/noisy feedback;
- state representation from value updating;
- reward representation from reward sensitivity;
- exploration from random/noisy responding;
- inverse temperature from a pure exploration trait;
- model-free/model-based computation from habit/goal-directed behavior;
- two-step-task indices from unique strategy mechanisms;
- working memory, episodic memory, perseveration, and compression from RL parameters;
- parameter recovery from reliability and cross-task generalizability;
- neural correlates from unique algorithmic identity;
- dopamine RPE evidence from a universal dopamine = scalar RPE claim.

## Core rule

**Reinforcement learning models are computational hypotheses about how values, predictions, states, and policies are updated from outcomes. Model variables such as prediction error, learning rate, inverse temperature, and model-based weights are interpretable only relative to the task, state representation, competing processes, and validated model.**

A minimal value-learning form is:

`δ_t = r_t - V_t`

`V_{t+1} = V_t + α × δ_t`

but real reward-guided learning may also require:

- temporal/state transition structure;
- hidden-state inference;
- rich memory of prior trials;
- working memory;
- reward-function representation;
- exploration policy;
- action repetition/perseveration;
- goal-dependent planning.

## 1. Current official reward-learning scaffold

NIMH RDoC currently places:

- Probabilistic and Reinforcement Learning;
- Reward Prediction Error;
- Habit

under Reward Learning in Positive Valence Systems.

Reward Prediction Error is defined as the difference between anticipated and obtained rewards, with positive and negative errors corresponding to better- or worse-than-expected reward.

Canonical rule:

**RDoC treats RPE as one reward-learning subconstruct, not as the whole of learning.**

## 2. Reinforcement learning is a computational framework

RL formalizes how an agent can learn action/state values or policies from experienced consequences.

Common model families include:

- Rescorla–Wagner / delta-rule learning;
- temporal-difference learning;
- Q-learning;
- actor–critic models;
- model-free RL;
- model-based RL;
- hybrid models.

These are computational descriptions.

Canonical rule:

**behavior fitted by an RL model does not prove the nervous system literally runs that algorithm.**

## 3. Reward prediction error

A reward prediction error is the difference between expected and obtained reward.

Simple form:

`δ_t = r_t - V_t`.

This signal can drive value updating.

But a prediction mismatch can also concern:

- reward identity;
- timing;
- state transition;
- sensory feature;
- action;
- context.

Therefore:

**scalar RPE is one type of prediction error, not all surprise.**

## 4. Temporal-difference prediction error

TD learning extends prediction error across sequential states.

A common form is:

`δ_t = r_t + γ V(s_{t+1}) - V(s_t)`.

This permits reward-predictive value to move backward from outcomes to earlier states/cues.

The discount factor `γ` controls weighting of delayed future value.

Canonical rule:

**TD-RPE depends on the represented state sequence and timing structure.**

## 5. TD learning assumes a state representation

The same objective environment can be represented differently by different learners.

A "state" may include:

- cue identity;
- context;
- elapsed time;
- latent task phase;
- previous choice;
- hidden environmental state.

Learning depends on what the model treats as the same or different state.

Canonical rule:

**apparent value-learning differences can originate from state representation rather than update rate.**

## 6. State aliasing

If two objectively different situations are represented as the same state, their outcomes will be pooled.

This can produce:

- apparently noisy values;
- slow adaptation;
- inconsistent choices;
- distorted learning-rate estimates.

Conversely, excessively splitting states can reduce generalization.

Thus:

**state representation is a core inferential target, not a nuisance detail.**

## 7. Learning rate α

In a simple delta rule, `α` controls how strongly new prediction error updates the current value estimate.

Higher `α` means:

- more weight on recent evidence;
- faster updating per model-defined event.

Lower `α` means:

- greater persistence of prior value estimates;
- slower updating.

Canonical rule:

**α is a model parameter, not a direct psychological "learning speed."**

## 8. Optimal learning rate depends on environment

In stable environments:

- excessive updating can chase noise.

In volatile environments:

- slow updating can lag behind real change.

Therefore:

**high α is not globally better than low α.**

The appropriate rate depends on:

- volatility;
- stochasticity;
- state uncertainty;
- temporal structure.

## 9. Volatility and stochasticity demand opposite responses

Both volatility and stochastic feedback increase observed variability.

But:

- **volatility** = latent contingencies are genuinely changing → faster updating may be useful;
- **stochasticity** = outcomes are noisy around stable contingencies → slower updating may be useful.

Canonical rule:

**"unexpected outcomes" must be classified as change versus noise before interpreting learning-rate adaptation.**

## 10. Learning rate need not be constant

Many standard RL models fit a single `α`.

But human learning can adapt updating strength trial by trial as uncertainty changes.

Recent 2025 work also shows that the relationship between prediction-error magnitude and effective learning rate can be nonlinear.

Therefore:

**one constant α can be a useful approximation without being the true updating law.**

## 11. Trial count is not the universal unit of learning

Burke et al. (2026) showed in cue–reward conditioning that behavioral and dopaminergic learning rates scaled with the interval between rewards.

Animals with longer inter-reward intervals learned in fewer reward experiences, while total conditioning time remained similar.

This directly challenges the assumption that more cue–reward trials per fixed duration necessarily produce more learning.

Canonical rule:

**per-trial learning rate can depend on real-time outcome spacing.**

## 12. Standard TD-RL is not guaranteed to explain timing effects

Burke et al. found proportional inter-reward-interval scaling was not naturally captured by standard trial-based TD-RL formulations and was better explained by an outcome-triggered retrospective learning account in their paradigm.

This does not invalidate all TD models.

It constrains simple trial-wise implementations.

Canonical rule:

**timing results are evidence about the update architecture, not merely another fitted α.**

## 13. Reward representation is not always scalar

Reward-guided learning can depend on:

- reward magnitude;
- identity;
- features;
- abstract task goals.

Molinaro and Collins (2026) show that goal-dependent learning can initially rely on capacity-limited working memory and become more efficient when a complex reward function is compressed into a simpler stable representation.

Canonical rule:

**learning a value can require learning how outcomes should be valued under the current goal.**

## 14. Reward-function compression is distinct from ordinary value updating

If the agent must first compute:

> What counts as good under this goal?

then simple value updating is insufficient.

A learned/compressed reward function can reduce future working-memory demand.

This creates a separate mechanism from changing a Q-value after each reward.

## 15. Working memory can masquerade as RL

Collins (2026) reanalyzed seven datasets, n=594, and found that human contextual reward learning was better explained by:

- a fast working-memory process;
- a slower habit-like associative process

than by a standard RL algorithm alone.

Therefore:

**fast trial-to-trial learning does not automatically imply high RL learning rate.**

## 16. Rich memory can outperform scalar incremental summaries

Eckstein et al. (2026) used hybrid neural–cognitive models and found that successful models of human reward learning required flexible memory variables tracking richer histories of rewards and choices.

Simple Q-learning-style models, where a small number of incrementally updated scalar values summarize the past, were insufficient for their dataset.

Canonical rule:

**human reward learning can depend on memory representations not captured by standard scalar value variables.**

## 17. Episodic and working memory should be modeled as competitors/partners

Reward-based choice may use:

- incrementally learned values;
- recent working-memory contents;
- episodic retrieval of particular trials;
- persistent choice tendencies.

If these are omitted, an RL parameter can absorb their effects.

Canonical rule:

**parameter interpretation is only as clean as the alternative-process model.**

## 18. Choice perseveration is not model-free learning

Repeating a previous choice can arise because:

- it was rewarded;
- action value increased;
- a choice repetition bias exists;
- motor/action history persists.

Brands et al. (2025) found higher-order perseveration terms improved models of two-step-task behavior.

Therefore:

**stay behavior != model-free value updating by definition.**

## 19. Exploration is not random responding

Exploration can include:

- undirected/random exploration;
- directed information seeking;
- novelty seeking;
- uncertainty-directed choice.

A softmax inverse-temperature parameter primarily captures value sensitivity/choice stochasticity under the assumed model.

Canonical rule:

**low inverse temperature β != pure curiosity/exploration trait.**

## 20. Inverse temperature depends on value scale

Softmax choice probability depends jointly on:

- value differences;
- inverse temperature `β`.

If reward/value scaling changes, `β` can change in interpretation even if the underlying choice policy does not.

Reward sensitivity and inverse temperature can also trade off statistically.

Therefore:

**β is not an absolute unit of "decision noise."**

## 21. Learning rate and inverse temperature interact

High `α` with high `β` can produce very different behavior from high `α` with low `β`.

The optimal combination depends on task:

- stable reward schedules;
- reversal frequency;
- volatility.

Canonical rule:

**single-parameter psychological labels should not be assigned without considering the joint model.**

## 22. Model-based RL

Model-based RL uses an internal model of:

- state transitions;
- outcome/reward structure

to evaluate candidate actions prospectively.

This permits rapid adjustment when:

- transition structure changes;
- outcome values change;
- goals change.

But model-based control can be computationally demanding.

## 23. Model-free RL

Model-free RL learns cached action/state values or policies from experience without explicitly simulating the transition model at decision time.

It is computationally cheaper and less immediately flexible to structural changes.

Canonical rule:

**model-free/model-based are computational distinctions, not direct psychological personality types.**

## 24. Model-free != habit

Habit is behaviorally defined through reduced current sensitivity to outcome value/contingency.

Model-free RL is defined computationally.

The two can correspond in some tasks, but they are not synonyms.

This boundary established in LEA-01 remains mandatory.

## 25. Model-based != goal-directed automatically

Model-based planning is compatible with goal-directed action.

But behavior labeled "model-based" from a task model may also depend on:

- explicit task knowledge;
- working memory;
- heuristics;
- learned abstractions.

Goal-directed status should be validated behaviorally when that claim matters.

## 26. Model-based/model-free arbitration is context-sensitive

Human control can shift with:

- working-memory load;
- cognitive cost;
- environment structure;
- reward;
- experience.

Yang et al. (2025) found increased model-based use under lower WM load and more model-free use under higher load in their task.

Canonical rule:

**one strategy weight should not automatically be treated as a stable person trait.**

## 27. Environmental demand can regulate strategy

Recent work shows people can learn when a detailed model-based strategy is worth using.

Thus arbitration can itself be learned.

A behavior that looks model-free in one environment can be a rational response to low benefit of planning rather than incapacity to plan.

## 28. Intermediate/abstract world models challenge a binary architecture

Humans need not choose only between:

- full model-based planning;
- pure model-free caching.

They can use:

- temporally abstract models;
- compressed transition models;
- hierarchical rules;
- successor-like representations.

Canonical rule:

**model-based versus model-free is a useful axis, not a complete taxonomy of planning algorithms.**

## 29. Two-step task indices are model-dependent

The classic two-step task infers model-based and model-free influence from interaction patterns involving:

- previous reward;
- common versus rare transitions.

But behavior can also reflect:

- perseveration;
- transition misunderstanding;
- working memory;
- exploration;
- latent-state inference;
- task-specific heuristics.

Therefore:

**stay/switch signature != pure strategy readout.**

## 30. Model extensions can change inferred strategy

Brands et al. (2025) showed that higher-order perseveration and directed-exploration terms improved fit to two independent two-step datasets.

This means omitted processes can shift estimates of model-based/model-free weights.

Canonical rule:

**strategy parameters depend on the competitor model.**

## 31. Neural model-based/model-free signals are not interchangeable with behavioral weights

A 2026 large fMRI study found:

- model-based vmPFC value signals were strongly related to behavioral model-based use;
- model-free value signals were widespread even when behavior showed little model-free reliance;
- impaired state-prediction-error signals tracked low model-based behavior in some participants.

Therefore:

**presence of a neural model-free-like signal does not prove behavior is controlled model-free on that trial/person.**

## 32. State prediction error is distinct from reward prediction error

Model learning can require prediction errors about:

- which state occurred;
- whether a transition matched expectation.

These state prediction errors update the world/transition model.

Reward prediction errors update value/reward expectations.

Canonical rule:

**learning the world structure != learning its reward values.**

## 33. Parameter recovery

A parameter should be recoverable:

> if data are generated with known parameters, fitting the model should recover them accurately.

Poor recovery means empirical parameter estimates may not uniquely map onto the intended construct.

Canonical rule:

**model fit without parameter recovery is insufficient for parameter-level psychological inference.**

## 34. Model recovery

Model recovery asks whether data generated by Model A are correctly identified as coming from Model A rather than Model B.

A task can support good parameter recovery within a model while failing to discriminate competing models.

Therefore both are needed.

## 35. Predictive accuracy does not guarantee parameter identifiability

Different fitting approaches can produce:

- similar held-out prediction;
- different parameter estimates.

Recent 2025 methodological work showed this ambiguity across RL tasks and argued for evaluating:

- generalizability;
- robustness;
- parameter recovery;
- test–retest reliability.

Canonical rule:

**good prediction != scientifically interpretable latent parameter.**

## 36. Test–retest reliability is task/model specific

Computational parameters are not uniformly unreliable or reliable.

A 2026 multi-task study found good-to-excellent reliability and recovery for winning models in several reward-processing tasks.

But conceptually similar parameters generally failed to correlate across different tasks.

Thus:

**stable within-task parameter != domain-general trait.**

## 37. Cross-task generalizability can fail even when reliability is good

Pike et al. (2026) found parameters theoretically intended to capture similar processes were mostly unrelated across five tasks, except some inverse-temperature-like parameters.

This is a major constraint on using a learning-rate parameter as a generic person-level property.

Canonical rule:

**same parameter name across tasks != same psychological construct.**

## 38. Clinical parameter associations require an additional validity layer

The same 2026 study found only weak symptom associations for parameters from two of five tasks.

Therefore:

**recoverable + reliable parameter != clinical biomarker.**

Clinical interpretation is routed to CLN.

## 39. Dopamine and classic RPE theory

A major body of evidence supports phasic midbrain dopamine responses consistent with RPE:

- responses transfer from unexpected reward to predictive cues;
- better/worse-than-expected outcomes produce signed responses;
- causal dopamine manipulations can modify learning.

This remains one of computational neuroscience's strongest model–neural correspondences.

## 40. Dopamine != homogeneous scalar RPE

Gershman et al. (2024) review several challenges:

- dopamine ramps;
- sensory/motor feature encoding;
- action-selection effects;
- heterogeneous neural populations.

Some can be incorporated by generalized prediction-error models.

Others may require additional theory.

Canonical rule:

**classic RPE is foundational but incomplete as a universal dopamine theory.**

## 41. Dopamine can encode reward features beyond value

Kahnt and Schoenbaum (2025) review evidence that dopamine transients can support learning about:

- reward identity/features;
- value-neutral associative information;
- cue–cue structure.

Thus:

**dopamine learning signal can contain richer information than integrated scalar reward value.**

## 42. Feature-specific prediction errors

Recent neural models propose that heterogeneous dopamine populations may encode prediction errors over different reward/state features rather than all neurons broadcasting one scalar signal.

This preserves prediction-error logic while relaxing homogeneity.

Canonical rule:

**generalized/feature-specific PE is different from classic scalar RPE.**

## 43. Dopaminergic action prediction error

Greenstreet et al. (2025) found a dopamine signal in mouse tail striatum consistent with a value-free action prediction error that reinforced repeated state–action associations.

This signal could not alone support reward-guided learning, but complemented canonical reward-prediction-error circuitry.

Canonical rule:

**dopaminergic prediction error can concern actions, not only reward value.**

## 44. Dopamine causal manipulation strengthens but does not trivialize inference

A 2025 formal study separated value and prediction-error interpretations of dopamine stimulation and showed that VTA dopamine stimulation could unblock learning in a manner consistent with an artificial RPE.

Causal manipulation provides stronger evidence than correlation.

But interpretation still depends on the computational model and stimulation regime.

## 45. Dopamine learning rate and trial timing

Burke et al. (2026) found dopaminergic learning itself scaled with inter-reward interval.

This is difficult for simple trial-count-based TD accounts.

Therefore dopamine should not be interpreted as proof that canonical trial-wise TDRL is the correct learning algorithm.

## 46. Reward-guided learning can compress over experience

Molinaro and Collins (2026) show a pathway from:

`complex goal-dependent reward evaluation`
-> `WM-intensive processing`
-> `compressed reward function`
-> `faster automatic evaluation`.

This demonstrates that an apparently more "automatic" later policy can arise from learned representational compression, not necessarily model-free habit.

## 47. Reinforcement Learning Inference Gate

Before interpreting an RL result, ask:

### A. Learning target

1. What is learned: value, policy, transition, reward function, action, state, or reward feature?
2. Is the task reward learning, state learning, or both?
3. What counts as the represented state?
4. Could state aliasing/splitting explain behavior?

### B. Prediction error

5. Is the PE about reward value, identity, state transition, timing, or action?
6. Is PE directly observed or model-derived?
7. Could surprise/novelty explain the signal?
8. Is a scalar RPE being generalized to broader mismatch?

### C. Learning rate

9. Is α fixed or adaptive?
10. What does one update/event mean in this task?
11. Is the environment stable, volatile, or stochastic?
12. Could timing/inter-reward interval alter effective learning?
13. Could memory explain fast/slow apparent updating?
14. Is α being interpreted as a stable personal learning speed?

### D. Choice policy

15. Is softmax/inverse temperature used?
16. What is the reward/value scale?
17. Could reward sensitivity trade off with β?
18. Is low β being called exploration/randomness without directed-exploration tests?
19. Is perseveration explicitly modeled?

### E. Memory and representation

20. Is working memory modeled?
21. Is episodic/rich history information potentially available?
22. Is reward-function learning/compression required?
23. Could omitted memory processes be absorbed into α/β?

### F. Model-free/model-based

24. What task signature defines MF/MB control?
25. Does the participant know the transition structure?
26. Could WM load alter the strategy?
27. Could heuristics/latent-state inference mimic MB behavior?
28. Could perseveration mimic MF behavior?
29. Is MF being equated with habit?
30. Is MB being equated with goal-directed action without devaluation/contingency evidence?
31. Could an intermediate/abstract world model explain behavior better?

### G. Model validation

32. Were alternative models compared?
33. Was posterior predictive checking performed?
34. Is parameter recovery adequate?
35. Is model recovery adequate?
36. Are parameters identifiable?
37. Does held-out prediction remain good?
38. Could different optimization/fitting methods yield different parameters?

### H. Reliability/generalization

39. Is test–retest reliability known?
40. Does the same named parameter generalize across tasks?
41. Are state/context effects controlled?
42. Is a within-task reliable parameter being called a general trait?

### I. Dopamine/neural inference

43. Does the neural signal match signed RPE predictions?
44. Could sensory/motor/action/state features explain part of it?
45. Is the signal homogeneous or population-specific?
46. Is causal manipulation available?
47. Does dopamine evidence identify scalar RPE, generalized PE, action PE, or another function?
48. Is neural encoding being equated with behavioral control?

### J. Individual inference

49. What exact computational property is supported?
50. What rival model/process remains viable?
51. What manipulation would best distinguish them?
52. What wording would overclaim "habit", "model-free", "learning rate", or "dopamine RPE"?

## 48. High-value failure modes

### Failure A — RL model fit = biological RL mechanism

Incorrect.

Correct:

RL is a computational framework whose variables require model/task validation.

### Failure B — prediction error = all surprise

Incorrect.

Correct:

PEs can concern value, state, action, identity, and timing.

### Failure C — α = learning ability

Incorrect.

Correct:

α is update weight conditional on the model, environment, state representation, and timing.

### Failure D — higher α = better learner

Incorrect.

Correct:

Optimal updating depends on volatility versus stochasticity.

### Failure E — more trials = more learning

Incorrect as a universal law.

Correct:

Real-time reward spacing can strongly alter per-experience learning.

### Failure F — fast human learning = high RL α

Incorrect.

Correct:

Working memory or episodic memory can produce rapid behavior change.

### Failure G — inverse temperature = exploration trait

Incorrect.

Correct:

β is value sensitivity/choice stochasticity under a particular scaling/model and can trade off with reward sensitivity.

### Failure H — stay behavior = model-free RL

Incorrect.

Correct:

Perseveration and action history can produce repetition independently.

### Failure I — model-free = habit

Incorrect.

Correct:

Habit needs behavioral outcome-value/contingency evidence.

### Failure J — model-based = goal-directed automatically

Incorrect.

Correct:

Task-based MB indices can reflect knowledge, WM, heuristics, or abstract representations.

### Failure K — MF/MB is the complete planning taxonomy

Incorrect.

Correct:

Compressed, hierarchical, successor-like, and temporally abstract strategies can occupy intermediate solutions.

### Failure L — neural MF signal = MF behavioral control

Incorrect.

Correct:

Neural computations can be present without dominating behavior.

### Failure M — good model prediction = valid parameter

Incorrect.

Correct:

Parameter/model recovery, robustness, and identifiability are separately required.

### Failure N — reliable α in one task = general learning-rate trait

Incorrect.

Correct:

Cross-task generalization of same-named parameters can be weak.

### Failure O — dopamine = homogeneous scalar RPE

Incorrect.

Correct:

Dopamine strongly supports PE accounts but also carries feature-, action-, timing-, and other signals.

### Failure P — dopamine evidence proves canonical TD-RL

Incorrect.

Correct:

Current timing and heterogeneity findings constrain simple TD implementations.

## 49. Closure audit

### Criterion 1 — computational RL and biological mechanism are separated

**PASS.**

### Criterion 2 — scalar RPE is separated from broader prediction errors/surprise

**PASS.**

### Criterion 3 — TD-RPE/state-transition structure is explicit

**PASS.**

### Criterion 4 — state representation and state aliasing are explicit

**PASS.**

### Criterion 5 — α is separated from stable learning ability and contextualized by uncertainty/timing

**PASS.**

### Criterion 6 — volatility and stochasticity are distinguished

**PASS.**

### Criterion 7 — constant learning rate is not treated as universally valid

**PASS.**

### Criterion 8 — working memory/rich memory/reward-function representation are explicit alternatives to simple RL updating

**PASS.**

### Criterion 9 — β/exploration and perseveration boundaries are explicit

**PASS.**

### Criterion 10 — MF/MB are separated from habit/goal-directed behavior

**PASS.**

### Criterion 11 — MF/MB arbitration and intermediate strategies are context-sensitive

**PASS.**

### Criterion 12 — two-step-task indices retain heuristic/WM/perseveration/task-knowledge alternatives

**PASS.**

### Criterion 13 — parameter recovery, model recovery, identifiability, prediction, and reliability are separated

**PASS.**

### Criterion 14 — within-task reliability is separated from cross-task generalizability

**PASS.**

### Criterion 15 — dopamine RPE evidence is retained while scalar/homogeneous identity is constrained

**PASS.**

### Criterion 16 — feature/action/generalized prediction-error alternatives are explicit

**PASS.**

### Criterion 17 — neural encoding is separated from actual behavioral control

**PASS.**

### Criterion 18 — reusable Reinforcement Learning Inference Gate exists

**PASS.**

A 52-question Reinforcement Learning Inference Gate is now canonical.

## Canonical working rule

**Specify what is being learned and how the state/reward is represented; identify the relevant prediction error and timing; test whether memory, perseveration, exploration, or reward-function learning explain behavior; validate parameter/model recovery and reliability; separate model-free/model-based computation from habit/goal-directed control; then interpret dopamine only at the level supported by the specific signal/manipulation.**

Never:

**RL fit -> mechanism; α -> learning trait; stay -> model-free/habit; dopamine -> homogeneous scalar RPE.**

## Sources

1. National Institute of Mental Health. *Reward Learning — RDoC*. Current official resource. https://www.nimh.nih.gov/research/research-funded-by-nimh/rdoc/constructs/reward-learning
2. National Institute of Mental Health. *Reward Prediction Error — RDoC*. Current official resource. https://www.nimh.nih.gov/research/research-funded-by-nimh/rdoc/constructs/reward-prediction-error
3. National Institute of Mental Health. *Definitions of the RDoC Domains and Constructs*. Current official resource. https://www.nimh.nih.gov/research/research-funded-by-nimh/rdoc/definitions-of-the-rdoc-domains-and-constructs
4. Gershman, S. J., Assad, J. A., Datta, S. R., et al. (2024). Explaining dopamine through prediction errors and beyond. *Nature Neuroscience, 27*, 1645–1655. https://doi.org/10.1038/s41593-024-01705-4
5. Kahnt, T., & Schoenbaum, G. (2025). The curious case of dopaminergic prediction errors and learning associative information beyond value. *Nature Reviews Neuroscience, 26*, 169–178. https://doi.org/10.1038/s41583-024-00898-8
6. Lee, R. S., Sagiv, Y., Engelhard, B., Witten, I. B., et al. (2024). A feature-specific prediction error model explains dopaminergic heterogeneity. *Nature Neuroscience, 27*, 1574–1586. https://doi.org/10.1038/s41593-024-01689-1
7. Greenstreet, F., Martinez Vergara, H., Johansson, Y., et al. (2025). Dopaminergic action prediction errors serve as a value-free teaching signal. *Nature, 641*, 1002–1010. https://doi.org/10.1038/s41586-025-09008-9
8. Burke, D. A., Taylor, A., Jeong, H., et al. (2026). Duration between rewards controls the rate of behavioral and dopaminergic learning. *Nature Neuroscience, 29*, 825–839. https://doi.org/10.1038/s41593-026-02206-2
9. Collins, A. G. E. (2026). A habit and working memory model as an alternative account of human reward-based learning. *Nature Human Behaviour, 10*, 357–369. https://doi.org/10.1038/s41562-025-02340-0
10. Eckstein, M. K., Summerfield, C., Daw, N. D., et al. (2026). Hybrid neural–cognitive models reveal how memory shapes human reward learning. *Nature Human Behaviour, 10*, 972–987. https://doi.org/10.1038/s41562-025-02324-0
11. Molinaro, G., & Collins, A. G. E. (2026). Reward function compression facilitates goal-dependent reinforcement learning. *Nature Communications*. https://doi.org/10.1038/s41467-026-78295-1
12. Yang, C., Liu, T., Wen, M., & Liu, X. (2025). The distinct functions of working memory and intelligence in model-based and model-free reinforcement learning. *npj Science of Learning, 10*, 72. https://doi.org/10.1038/s41539-025-00363-w
13. Brands, A. M., Mathar, D., & Peters, J. (2025). Signatures of Perseveration and Heuristic-Based Directed Exploration in Two-Step Sequential Decision Task Behaviour. *Computational Psychiatry, 9*, 39–62. https://doi.org/10.5334/cpsy.101
14. Pike, A. C., Board, R., Travers, E., et al. (2026). The recoverability, reliability, and generalizability of reward processing parameters and relation to mental health symptoms. *Psychological Medicine, 56*, e238. https://doi.org/10.1017/S0033291726105340
15. *Model-based and model-free valuation signals in the human brain vary markedly in relation to individual differences in behavioral control.* (2026). *Cell Reports*. PMID 42228569.
16. *When models matter: Environmental demand guides the arbitration between model-based and model-free control.* (2025). PMID 41083652.
17. Ikwunne, B., Parham, J., & Pulcu, E. (2025). A nonlinear relationship between prediction errors and learning rates in human reinforcement-learning. *PLOS Computational Biology, 21*, e1013445. https://doi.org/10.1371/journal.pcbi.1013445
18. *Deep Learning Improves Parameter Estimation in Reinforcement Learning Models.* (2025). PMCID PMC12262606.
19. Eckstein, M. K., et al. (2022). The interpretation of computational model parameters depends on the context. *eLife*. PMID 36331872.
20. Sutton, R. S., & Barto, A. G. (2018). *Reinforcement Learning: An Introduction* (2nd ed.). MIT Press.

## Current-standard note

As of 2026-11-19:

- NIMH RDoC continues to distinguish probabilistic/reinforcement learning, reward prediction error, and habit within Reward Learning;
- classic RPE/TD accounts remain foundational, but current dopamine research rejects a simple homogeneous scalar dopamine = RPE identity and supports feature-, action-, timing-, and generalized prediction-error signals;
- new 2026 reward-learning work directly challenges the assumption that number of reward trials is the universal unit governing learning rate;
- current human reward-learning evidence shows that working memory, rich trial-history memory, perseveration, reward-function compression, and explicit task representations can be mistaken for or absorbed into standard RL parameters;
- model-free/model-based indices remain useful computational summaries but do not map one-to-one onto habit/goal-directed action, and their expression changes with working-memory load and environmental demand;
- parameter recovery and within-task reliability can be good while cross-task generalizability of theoretically similar parameters remains weak, so computational parameters should not be treated as domain-general person traits without direct evidence.

## Scope note

This block establishes reinforcement-learning computation and dopamine boundaries.

**LEA-04** should deepen habit formation and goal-directed/habit arbitration: outcome devaluation, contingency degradation, automaticity, S–R control, overtraining, habit measurement validity, and links/limits between RL and habit. Extinction/reconsolidation will be deepened separately before LEA closure.
