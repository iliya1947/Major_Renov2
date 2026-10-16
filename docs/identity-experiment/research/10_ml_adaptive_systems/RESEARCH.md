# A1 №10 — Машинное обучение и адаптивные системы: источники картографии

**Назначение:** доказательная опора для первичной карты области. Не глубокий разбор отдельных алгоритмов.

## Continual/lifelong learning

1. **Wang et al. (2023/2024), A Comprehensive Survey of Continual Learning: Theory, Method and Application.** arXiv:2302.00487.  
   **Просмотрено:** abstract and taxonomy summary.  
   **Для карты:** continual learning is organized around settings, stability–plasticity, generalization and resource efficiency; replay, regularization and parameter-isolation/dynamic approaches are distinct families.

2. **Khodaee, Viktor & Michalowski (2024), Knowledge transfer in lifelong machine learning: a systematic literature review. Artificial Intelligence Review 57:217.** DOI: 10.1007/s10462-024-10853-9.  
   **Просмотрено:** abstract and introductory taxonomy.  
   **Для карты:** lifelong learning explicitly emphasizes sequential tasks, accumulated knowledge and transfer across an unbounded sequence.

3. **Dohare et al. (2024), Loss of plasticity in deep continual learning. Nature 632:768–774.** DOI: 10.1038/s41586-024-07711-7.  
   **Просмотрено:** abstract and extended discussion.  
   **Для карты:** loss of plasticity is distinct from catastrophic forgetting; continual systems can fail not only by losing old knowledge but also by becoming worse at acquiring new useful information.

4. **Addressing catastrophic forgetting in class-incremental learning—a survey (2026), Artificial Intelligence Review.** DOI: 10.1007/s10462-026-11575-w.  
   **Просмотрено:** overview/taxonomy excerpts.  
   **Для карты:** class-incremental learning has a refined taxonomy spanning replay, regularization, parameter isolation and hybrid methods and highlights recency bias, resource constraints and theoretical gaps.

## Online learning and concept drift

5. **Hoi et al. (2021), Online learning: A comprehensive survey. Neurocomputing 459:249–289.** DOI: 10.1016/j.neucom.2021.04.112.  
   **Просмотрено:** abstract and introduction.  
   **Для карты:** online learning differs from batch learning by sequential updates and includes full-feedback, limited-feedback and unsupervised settings; regret and sequential decisions are core evaluation ideas.

6. **Online deep learning’s role in conquering the challenges of streaming data: a survey (2025), Knowledge and Information Systems.** DOI page reviewed.  
   **Просмотрено:** abstract and challenge taxonomy.  
   **Для карты:** streaming deep learning brings together concept drift, catastrophic forgetting, skewed learning and dynamic network adaptation.

7. **Lu et al. (2018), Learning under Concept Drift: A Review. IEEE TKDE.**  
   **Просмотрено:** abstract.  
   **Для карты:** concept drift is not merely distribution shift detection; the field explicitly separates detection, understanding and adaptation.

8. **Lukats et al. (2024/2025), A benchmark and survey of fully unsupervised concept drift detectors on real-world data streams. International Journal of Data Science and Analytics.** DOI page reviewed.  
   **Просмотрено:** abstract.  
   **Для карты:** ground-truth labels may be unavailable at drift time, making unsupervised detection a separate research branch.

9. **Suárez-Cetrulo, Quintana & Cervantes (2023), A survey on machine learning for recurring concept drifting data streams. Expert Systems with Applications 213:118934.** DOI: 10.1016/j.eswa.2022.118934.  
   **Просмотрено:** abstract/highlights.  
   **Для карты:** recurring concepts/regimes, active vs passive adaptation, model reuse and meta-learning are separate problems from one-way drift.

## Distribution shift, domain adaptation/generalization and test-time adaptation

10. **Xiao & Snoek (2024), Beyond Model Adaptation at Test Time: A Survey.** arXiv:2411.03687.  
    **Просмотрено:** abstract and taxonomy.  
    **Для карты:** test-time adaptation may alter model, inference, normalization, sample or prompt; it is a distinct deployment-time adaptation paradigm.

11. **Liang, He & Tan (2023), A Comprehensive Survey on Test-Time Adaptation under Distribution Shifts.** arXiv:2303.15361.  
    **Просмотрено:** abstract.  
    **Для карты:** test-time domain, batch and online adaptation differ by available test data and update regime.

12. **Yu et al. (2024), A Survey on Evaluation of Out-of-Distribution Generalization.** arXiv:2403.01874.  
    **Просмотрено:** abstract.  
    **Для карты:** OOD evaluation itself splits into performance testing, performance prediction and characterization of safe/risky regions.

13. **Khoee, Yu & Feldt (2024), Domain generalization through meta-learning: a survey. Artificial Intelligence Review 57:285.** DOI: 10.1007/s10462-024-10922-z.  
    **Просмотрено:** abstract.  
    **Для карты:** meta-learning and domain generalization intersect but are not identical; adaptation to unseen domains may be learned at a meta level.

## Meta-learning, active learning and curriculum

14. **Gharoun et al. (2023), Meta-learning approaches for few-shot learning: A survey of recent advances.** arXiv:2303.07502.  
    **Просмотрено:** abstract.  
    **Для карты:** metric-, memory- and learning/optimization-based meta-learning are distinct families; few-shot adaptation is a setting, not a synonym for meta-learning.

15. **Cacciarelli & Kulahci (2024), Active learning for data streams: a survey. Machine Learning 113:185–239.** DOI: 10.1007/s10994-023-06454-2.  
    **Просмотрено:** abstract and listed research questions.  
    **Для карты:** query strategy, query timing, update timing, scalability and evaluation are separate dimensions of adaptive information acquisition.

16. **Di Fiore, Nardelli & Mainini (2024), Active Learning and Bayesian Optimization: A Unified Perspective to Learn with a Goal. Archives of Computational Methods in Engineering 31:2985–3013.** DOI: 10.1007/s11831-024-10064-z.  
    **Просмотрено:** article overview.  
    **Для карты:** active learning and Bayesian optimization are related through acquisition decisions but optimize different targets and should not be conflated.

17. **Nesterova, Skrynnik & Panov (2025), Environments for Automatic Curriculum Learning: A Short Survey. Doklady Mathematics 110:S223–S229.** DOI: 10.1134/S1064562424602099.  
    **Просмотрено:** abstract/introduction.  
    **Для карты:** curriculum learning includes generation and sequencing of tasks and has a distinct evaluation problem involving task environments.

## Representation learning and multi-task learning

18. **Uelwer et al. (2025), A survey on self-supervised methods for visual representation learning. Machine Learning 114:111.** DOI: 10.1007/s10994-024-06708-7.  
    **Просмотрено:** abstract, introduction and taxonomy.  
    **Для карты:** self-supervised representation learning includes pretext, information-maximization, teacher–student, contrastive and clustering families, with learned invariances affecting downstream adaptation.

19. **Abdelsamie, Azab & Hefny (2026), Deep multi-task learning: a review of concepts, methods, and cross-domain applications. International Journal of Data Science and Analytics 21:77.** DOI page reviewed.  
    **Просмотрено:** abstract.  
    **Для карты:** multi-task learning depends on task selection, shared/task-specific components and adaptive balancing and suffers from task interference.

## Reinforcement learning, meta-RL and adaptive control

20. **Beck et al. (2023), A Survey of Meta-Reinforcement Learning.** arXiv:2301.08028.  
    **Просмотрено:** abstract.  
    **Для карты:** meta-RL learns policies capable of fast adaptation across a task distribution; adaptation budget and task distribution are central axes.

21. **Annaswamy et al. (2023), Adaptive Control and Intersections with Reinforcement Learning. Annual Review of Control, Robotics, and Autonomous Systems 6.** DOI: 10.1146/annurev-control-062922-090153.  
    **Просмотрено:** abstract.  
    **Для карты:** adaptive control and RL address uncertain systems differently: adaptive control emphasizes structured models and stability guarantees; RL emphasizes broad policy optimization, often with extensive data/simulation.

22. **Advances and challenges in learning from experience replay (2025), Artificial Intelligence Review.** DOI page reviewed.  
    **Просмотрено:** continual/RL replay and catastrophic-forgetting section.  
    **Для карты:** experience replay sits at the intersection of RL and continual learning and directly exposes the stability–plasticity trade-off.

## Federated/distributed adaptation

23. **Guo et al. (2024), A comprehensive survey of federated transfer learning: challenges, methods and applications. Frontiers of Computer Science 18.** DOI: 10.1007/s11704-024-40065-x.  
    **Просмотрено:** abstract.  
    **Для карты:** federated transfer learning combines transfer under heterogeneous/distributed private data with communication and privacy constraints.

24. **Federated learning design and functional models: survey (2025), Artificial Intelligence Review 58:21.** DOI: 10.1007/s10462-024-10969-y.  
    **Просмотрено:** abstract.  
    **Для карты:** distributed local data, aggregation and knowledge transfer create a different adaptation problem from centralized continual learning.

## Breadth check

Дополнительно проверены branches on continual curricula, OOD/domain shift, self-supervised low-shot transfer, online ensembles, recurring drift and resource-constrained deployment. После этого новые обзорные результаты преимущественно уточняли найденные blocks rather than adding new major axes.

Это достаточно для **первичной A1-картографии**, но не является финальным A2 coverage audit и не означает глубокого исследования отдельных алгоритмов.


---

# A2 — повторная финальная картография с учётом всех областей

**Дата прохода:** 16.10.2026.

**Цель:** после межобластной сверки уточнить финальную карту artificial adaptation: что именно меняется, на каком временном масштабе, каким сигналом и с каким retention/forgetting trade-off. Особый фокус — replay vs abstraction, beneficial forgetting, environment drift vs system drift, personalization vs individualization, delayed credit assignment и граница между RL objective optimization и нашим будущим acquired-experience mechanism. Это всё ещё A2-картография, не выбор конкретного алгоритма.

## Новые или повторно углублённо проверенные источники A2

### Dohare et al. (2024) — Loss of plasticity in deep continual learning
Nature 632:768–774  
https://doi.org/10.1038/s41586-024-07711-7

**Фактически повторно углублённо просмотрено:** abstract and main results/interpretation.  
**Что меняет в карте:** continual systems can fail in two different directions: catastrophic forgetting of old competence and **loss of plasticity**, where the model becomes progressively worse at acquiring new useful information. For A2 this makes `retain old knowledge` and `remain able to change` separate evaluation axes.

### Bonnet et al. (2025) — Bayesian continual learning and forgetting in neural networks
Nature Communications 16:9614  
https://doi.org/10.1038/s41467-025-64601-w

**Фактически просмотрено в A2:** abstract, introduction, results and discussion.  
**Что меняет в карте:** authors explicitly frame the opposite failure as **catastrophic remembering**—excessive retention constraints can make later learning ineffective. Their proposed method uses controlled forgetting/uncertainty and a finite memory window. This is specific to a Bayesian neural-network setting, but it strongly supports the general ML distinction **retention ≠ universally desirable preservation**.

### Wang et al. (2025) — In Search of Lost Online Test-Time Adaptation: A Survey
International Journal of Computer Vision 133:1106–1139  
https://doi.org/10.1007/s11263-024-02213-5

**Фактически просмотрено:** full open-access overview/taxonomy and continual-OTTA discussion.  
**Что меняет в карте:** test-time adaptation can alter optimization state/model parameters, model modules/statistics, or the data processing stream. In continual deployment, error accumulation and catastrophic forgetting can arise even without conventional offline retraining. This reinforces that **deployment-time adaptation is a family of mechanisms, not one persistent-learning mode**.

### Lukats et al. (2025) — A benchmark and survey of fully unsupervised concept drift detectors on real-world data streams
International Journal of Data Science and Analytics 19:1–31  
https://doi.org/10.1007/s41060-024-00620-y

**Фактически просмотрено:** abstract, benchmark framing and limitations.  
**Что меняет в карте:** environment/data relations can change without immediate ground-truth labels; drift detection itself is uncertain and method-dependent. Therefore adaptation gating must distinguish **evidence that the world changed** from **evidence that the learner itself degraded or changed**.

### Online deep learning’s role in conquering the challenges of streaming data: a survey (2025)
Knowledge and Information Systems  
https://doi.org/10.1007/s10115-025-02351-3

**Фактически просмотрено:** challenge taxonomy and concept-drift sections.  
**Что меняет в карте:** online parameter updates interact with concept drift, forgetting, imbalance and architecture adaptation. This strengthens the separation between **stream/environment nonstationarity** and **learner update dynamics**.

### Neves, Ishitani & Patrocínio Júnior (2025) — Advances and challenges in learning from experience replay
Artificial Intelligence Review 58:54  
https://doi.org/10.1007/s10462-024-11062-0

**Фактически просмотрено:** full review abstract/taxonomy and challenge framing.  
**Что меняет в карте:** experience replay is fundamentally a **data-selection/reuse mechanism** for learning, with many prioritization, sampling and storage choices. Replaying a past transition is not the same operation as deriving an abstract rule or reusable experience representation from it.

### Khodaee, Viktor & Michalowski (2024) — Knowledge transfer in lifelong machine learning: a systematic literature review
Artificial Intelligence Review 57:217  
https://doi.org/10.1007/s10462-024-10853-9

**Фактически повторно просмотрено in A2:** replay/transfer taxonomy and lifelong-learning framing.  
**Что меняет в карте:** lifelong systems can transfer prior knowledge via replay, regularization, architecture and representations, but transfer can be positive or negative. This strengthens the need to ask **which past knowledge should constrain a new situation and which should not**.

### Julian, Koh & Bifet (2025) — Building adaptive knowledge bases for evolving continual learning models
npj Artificial Intelligence 1:26  
https://doi.org/10.1038/s44387-025-00028-4

**Фактически просмотрено:** abstract and article overview.  
**Что меняет в карте:** dynamic architectures may preserve a fixed backbone while adding/selecting task-specific components, shifting the problem from overwriting one model to **detecting/selecting the right knowledge component**. This shows that continual adaptation can change system structure/selection without rewriting the full base model.

### Vicente-Sola et al. (2025) — From task-aware to task-agnostic parameter isolation for incremental learning
Neural Processing Letters 57:81  
https://doi.org/10.1007/s11063-025-11792-4

**Фактически просмотрено:** abstract and problem framing.  
**Что меняет в карте:** many continual-learning methods rely on task identifiers, replay buffers or frozen backbones; task-agnostic deployment makes hidden assumptions about boundaries and routing visible. For our project this strengthens the question **who/what decides which regime or past knowledge applies now**.

### Pignatelli et al. (2023) — A Survey of Temporal Credit Assignment in Deep Reinforcement Learning
arXiv:2312.01072

**Фактически просмотрено:** abstract and formal framing surfaced in A2.  
**Что меняет в карте:** temporal credit assignment is the problem of estimating an action’s influence on later outcomes from finite experience. RL provides formal tools for delayed outcomes, but those tools presuppose a defined decision process and evaluation/reward structure.

### Liu, Lu & Yang (2026) — SHADOW: Dynamic-Aware Credit Assignment Against Long-Horizon Tasks
AAAI 2026  
https://doi.org/10.1609/aaai.v40i28.39570

**Фактически просмотрено:** abstract and reported results.  
**Что меняет в карте:** long-horizon credit can depend on transition dynamics, and coarse reward attribution can be biased. This supports importing the **question of causal contribution**, not automatically importing reward maximization into our experiment.

### Klimashevskaia et al. (2024) — A survey on popularity bias in recommender systems
User Modeling and User-Adapted Interaction 34:1777–1834  
https://doi.org/10.1007/s11257-024-09406-0

**Фактически просмотрено:** abstract and reinforcement-effects discussion.  
**Что меняет в карте:** personalization/recommendation can create feedback loops in which exposure affects future interactions and the accumulated data used for later recommendations. Thus personalization can actively shape the user-specific data stream rather than simply estimate a static preference.

### Continual Recommender Systems (Yoo, Kang & Tong, 2025)
arXiv:2507.03861

**Фактически просмотрено:** abstract/tutorial framing.  
**Что меняет в карте:** continual recommendation must handle changing user interests, changing item pools and continual streaming feedback while balancing per-user stability/plasticity. This is useful comparison material for **preference drift**, but a recommender’s changing user model remains categorically different from the system developing its own individuality.

## A2 — уточнения, полученные из совокупности источников

1. **“What adapts?” is the first ML question.** Possible targets include parameters, adapters/modules, representation space, policy, optimizer/update rule, normalization/statistics, memory/replay buffer, data weights, routing and architecture/capacity.

2. **Adaptation target and persistence are separate dimensions.** A test-time statistic update, temporary adapter state, persistent parameter update and external memory change can all alter behavior but have different persistence and reversibility.

3. **Retention has two failure directions.** Too little retention causes forgetting; too much constraint can cause loss of plasticity/catastrophic remembering. Therefore maximal preservation is not a neutral goal.

4. **Beneficial forgetting is a real engineering possibility.** When environments/preferences/concepts change, old structure can become harmful. The question becomes which information is obsolete versus potentially recurring.

5. **Replay and abstraction are fundamentally different.** Replay re-exposes the learner to selected past samples/trajectories; abstraction creates a transformed representation/rule. Replay can support retention without producing a generalized understanding.

6. **Replay selection is itself an adaptation policy.** Recency, rarity, priority, uncertainty and reward-based sampling determine which past data continue shaping the learner.

7. **Task boundaries are often an unrealistic hidden variable.** Many continual-learning algorithms become easier when the system is told that “task 2 has begun”. A natural long-term interaction may not supply such clean boundaries.

8. **Drift detection is an inference problem before it is an update problem.** The system must distinguish real persistent shift from noise, episodic variation and measurement error.

9. **Environment drift and learner drift are different causal directions.** Performance can change because the world/data-generating process changed, because the model adapted/degraded, or both.

10. **Model/system drift must also be separated from objective/value drift.** A predictor becoming inaccurate under new data is not the same phenomenon as a system changing what it optimizes.

11. **Personalization is adaptation toward a user/data distribution, not individualization of the adaptive system itself.** A personalized user model, recommendation profile or preference estimator can become highly user-specific while the underlying system has no self-directed developmental trajectory.

12. **Dynamic preference models can mistake interaction-produced preference for independently existing preference.** Recommendations alter exposure; exposure alters clicks/feedback; this data then updates the recommender. The loop can amplify early estimates or popularity biases.

13. **Therefore personalization can create path dependence without creating individuality.** This directly connects №10 to retrieval/exposure loops in №7/9.

14. **RL concepts are relevant only when their assumptions are explicit.** Temporal credit assignment, exploration and policy updating are useful formal tools when there is a defined state/action/outcome structure.

15. **Reward is not a generic synonym for consequence.** Standard RL methods optimize a specified reward/objective. Our future project intentionally does not begin with a scalar objective encoding “become this kind of individual”.

16. **Reward redistribution does not solve the significance problem.** Even perfect temporal credit only says which actions contributed to a defined outcome/reward; it does not determine which outcomes should become personally meaningful without a supplied objective.

17. **Meta-learning changes the adaptation rule, not necessarily the agent’s values.** Faster/slower future updating can be learned across tasks while the optimization criterion remains externally specified.

18. **Data selection can shape trajectory as strongly as parameter updates.** Active learning, curricula, replay and sampling decide what experience reaches the learner and therefore what it can become adapted to.

19. **Adaptive capacity has resource limits.** Finite parameters, replay capacity, compute and context force selection/forgetting; “retain everything forever” is not just undesirable but often infeasible.

20. **Protected invariants and adaptable state should be separated.** Safe deployed systems often require some constraints/objectives not to drift while task/domain-specific components remain adaptive.

21. **This maps cleanly to our bounded-development problem only at an abstract level.** Higher-priority rules can remain fixed while acquired history changes lower-level decisions; the exact mechanism must come from №8/9/11/12, not from generic continual-learning algorithms.

22. **Algorithmic success criteria differ from our target.** CL usually optimizes task accuracy/return/transfer/forgetting metrics; our project asks whether unique history becomes revisable experience that causally affects later choice without predefining a personality endpoint.

23. **Consequently, ML provides mechanisms and failure modes, not a definition of individuality.** Continual learning, personalization, meta-learning and RL can each support components of a future mechanism while remaining conceptually insufficient on their own.

## A2 boundary decisions for area №10

- **Остаётся в №10:** formal/engineering adaptation mechanisms; continual/online/test-time/meta learning; replay/regularization/modularity; concept drift; RL/credit assignment as optimization machinery; personalization algorithms; stability–plasticity and forgetting.
- **Primary owner №3:** psychological learning.
- **Primary owner №6:** biological plasticity.
- **Primary owner №7:** substrate-neutral stability/history/path-dependence concepts.
- **Primary owner №8:** LLM-specific ICL/fine-tuning/model behavior.
- **Primary owner №9:** concrete agent experience/memory/action loop.
- **Primary owner №11:** actual ChatGPT available adaptation/persistence mechanisms.

## A2 coverage conclusion

Повторный поиск по:
- loss of plasticity and catastrophic remembering;
- controlled/beneficial forgetting;
- online test-time adaptation;
- concept/environment drift;
- replay and lifelong knowledge transfer;
- dynamic/task-agnostic architecture selection;
- temporal credit assignment;
- personalization/recommender feedback loops and preference drift

не выявил новой крупной ML-adaptation branch beyond A1. Новые результаты существенно уточнили **what changes, what should persist, when forgetting is useful, what counts as drift, and why personalization/RL optimization are not equivalent to individualization**. Этого достаточно для финализации карты №10.
