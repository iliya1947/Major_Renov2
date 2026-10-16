# A1 №9 — AI-агенты и когнитивные архитектуры: источники картографии

**Назначение:** доказательная опора для первичной карты области. Не глубокий разбор отдельных механизмов.

## Общие обзоры LLM-агентов

1. **Li (2025), A Review of Prominent Paradigms for LLM-Based Agents: Tool Use, Planning (Including RAG), and Feedback Learning. COLING 2025.**  
   https://aclanthology.org/2025.coling-main.652/  
   **Просмотрено:** abstract and taxonomy description.  
   **Для карты:** tool use, planning and feedback learning form distinct agent paradigms; policy/evaluator/dynamics-model roles and workflow design should be separated.

2. **Chowa et al. (2026), From language to action: a review of large language models as autonomous agents and tool users. Artificial Intelligence Review 59:71.**  
   https://doi.org/10.1007/s10462-025-11471-9  
   **Просмотрено:** abstract and accessible section structure.  
   **Для карты:** separates single-agent/multi-agent architecture, tool integration, reasoning, planning, memory, prompting/fine-tuning and evaluation.

3. **Wang et al. (2024), A Survey on LLM-based Autonomous Agents. Frontiers of Computer Science.**  
   https://doi.org/10.1007/s11704-024-40231-1  
   **Просмотрено:** accessible framework sections.  
   **Для карты:** widely used decomposition into profile, memory, planning and action; also useful as an example of terminology that must not be treated as the only architecture.

4. **Cheng et al. (2024), Exploring Large Language Model based Intelligent Agents: Definitions, Methods, and Prospects.**  
   arXiv:2401.03428  
   **Просмотрено:** abstract.  
   **Для карты:** definitions, composition, cognition/planning, tools, environmental feedback, single-agent and multi-agent systems.

## Planning, reasoning–action and tools

5. **Wei et al. (2025), PlanGenLLMs: A Modern Survey of LLM Planning Capabilities. ACL 2025.**  
   https://aclanthology.org/2025.acl-long.958/  
   **Просмотрено:** abstract.  
   **Для карты:** planning should be evaluated through completeness, executability, optimality, representation, generalization and efficiency.

6. **Tantakoun, Muise & Zhu (2025), LLMs as Planning Formalizers. Findings of ACL 2025.**  
   https://aclanthology.org/2025.findings-acl.1291/  
   **Просмотрено:** abstract.  
   **Для карты:** long-horizon planning exposes limits of pure natural-language planning and motivates neuro-symbolic/formal planner hybrids.

7. **Yao et al. (2022/2023), ReAct: Synergizing Reasoning and Acting in Language Models.**  
   arXiv:2210.03629  
   **Просмотрено:** abstract.  
   **Для карты:** interleaving reasoning and external action is a distinct architecture from plan-then-execute and supports updating plans from observations.

8. **Schick et al. (2023), Toolformer: Language Models Can Teach Themselves to Use Tools. NeurIPS 2023.**  
   arXiv:2302.04761  
   **Просмотрено:** abstract.  
   **Для карты:** tool-use capability includes deciding whether, when and how to call tools and how to incorporate results.

9. **Huang et al. (2024), UltraTool: Planning, Creation, Usage—Benchmarking LLMs for Comprehensive Tool Utilization. Findings of ACL 2024.**  
   https://aclanthology.org/2024.findings-acl.259/  
   **Просмотрено:** abstract.  
   **Для карты:** real-world tool use includes planning and creation, not only choosing a pre-existing API.

## Memory and experience

10. **Zhang et al. (2025), A Survey on the Memory Mechanism of Large Language Model-based Agents. ACM Transactions on Information Systems.**  
    https://doi.org/10.1145/3748302  
    **Просмотрено:** abstract and accessible sections defining agent/memory phases.  
    **Для карты:** memory spans acquisition/storage, processing and use in future actions; narrow and broad definitions coexist.

11. **Luo et al. (2026), From Storage to Experience: A Survey on the Evolution of LLM Agent Memory Mechanisms. Findings of ACL 2026.**  
    https://aclanthology.org/2026.findings-acl.2069/  
    **Просмотрено:** abstract and taxonomy.  
    **Для карты:** explicitly distinguishes Storage, Reflection and Experience, including trajectory abstraction, exploration and continual-learning pressures.

12. **Yu et al. (2026), Agentic Memory: Learning Unified Long-Term and Short-Term Memory Management for Large Language Model Agents. ACL 2026.**  
    https://aclanthology.org/2026.acl-long.981/  
    **Просмотрено:** abstract.  
    **Для карты:** memory operations themselves can become agent actions—store, retrieve, update, summarize and discard—rather than fixed heuristics.

13. **Xiong et al. (2026), How Memory Management Impacts LLM Agents: An Empirical Study of Experience-Following Behavior. ACL 2026.**  
    https://aclanthology.org/2026.acl-long.27/  
    **Просмотрено:** abstract.  
    **Для карты:** memory addition/deletion can alter long-term agent behavior; retrieved similar experience may induce excessive experience-following.

14. **Uddin et al. (2026), From Recall to Forgetting: Benchmarking Long-Term Memory for Personalized Agents. Findings of ACL 2026.**  
    https://aclanthology.org/2026.findings-acl.1337/  
    **Просмотрено:** abstract/summary.  
    **Для карты:** memory evaluation must include obsolete and evolving memories; agents often reuse invalid memories or fail to reconcile updates.

15. **Tan et al. (2025), MemBench: Towards More Comprehensive Evaluation on the Memory of LLM-based Agents. Findings of ACL 2025.**  
    https://aclanthology.org/2025.findings-acl.989/  
    **Просмотрено:** abstract.  
    **Для карты:** factual and reflective memory, observation/participation settings, effectiveness/efficiency/capacity require separate evaluation.

## Reflection, feedback and self-correction

16. **Shinn et al. (2023), Reflexion: Language Agents with Verbal Reinforcement Learning.**  
    arXiv:2303.11366  
    **Просмотрено:** abstract.  
    **Для карты:** reflective text stored in episodic memory can alter later decisions without weight updates; it is a memory/context mechanism, not ordinary RL in the parameter-update sense.

17. **Kamoi et al. (2024), When Can LLMs Actually Correct Their Own Mistakes? A Critical Survey of Self-Correction of LLMs. TACL 12.**  
    https://aclanthology.org/2024.tacl-1.78/  
    **Просмотрено:** abstract.  
    **Для карты:** prompted self-feedback alone has limited evidence; reliable external feedback and/or training materially changes the picture.

18. **Wang et al. (2024), Devil’s Advocate: Anticipatory Reflection for LLM Agents. Findings of EMNLP 2024.**  
    https://aclanthology.org/2024.findings-emnlp.53/  
    **Просмотрено:** abstract.  
    **Для карты:** prospective, post-action and end-of-plan reflection are distinct locations for feedback/control.

## Cognitive architectures

19. **Kotseruba & Tsotsos (2020), 40 years of cognitive architectures: core cognitive abilities and practical applications. Artificial Intelligence Review 53:17–94.**  
    https://doi.org/10.1007/s10462-018-9646-y  
    **Просмотрено:** full accessible overview sections and abstract.  
    **Для карты:** 84 implemented architectures; recurring capabilities include perception, attention, action selection, memory, learning, reasoning and metareasoning; symbolic, emergent and hybrid traditions must be distinguished.

20. **Laird (2012), The Soar Cognitive Architecture. MIT Press.**  
    https://doi.org/10.7551/mitpress/7688.001.0001  
    **Просмотрено:** publisher overview and chapter structure.  
    **Для карты:** Soar integrates knowledge-intensive reasoning, reactive execution, hierarchical reasoning, planning and learning from experience.

21. **Sun (2016), Anatomy of the Mind: Exploring Psychological Mechanisms and Processes with the CLARION Cognitive Architecture. Oxford University Press.**  
    https://doi.org/10.1093/acprof:oso/9780199794553.001.0001  
    **Просмотрено:** book abstract and chapter structure.  
    **Для карты:** CLARION explicitly separates implicit/explicit and procedural/declarative processes and includes motivational/metacognitive subsystems.

## Multi-agent, social and environment branches

22. **Yan et al. (2025), Beyond Self-Talk: A Communication-Centric Survey of LLM-Based Multi-Agent Systems.**  
    arXiv:2502.14321  
    **Просмотрено:** abstract.  
    **Для карты:** multi-agent systems need separate treatment of architecture, communication goals, strategies, paradigms, objects and content.

23. **Zhu et al. (2025), MultiAgentBench: Evaluating the Collaboration and Competition of LLM agents. ACL 2025.**  
    https://aclanthology.org/2025.acl-long.421/  
    **Просмотрено:** abstract.  
    **Для карты:** task success alone misses coordination quality; topology and collaboration protocol affect system performance.

24. **Park et al. (2023), Generative Agents: Interactive Simulacra of Human Behavior. UIST 2023.**  
    https://doi.org/10.1145/3586183.3606763  
    **Просмотрено:** abstract.  
    **Для карты:** observation, memory, reflection and planning can generate believable simulated social behavior, but believability is not evidence of human psychological equivalence.

25. **Zhou et al. (2023), WebArena: A Realistic Web Environment for Building Autonomous Agents.**  
    arXiv:2307.13854  
    **Просмотрено:** abstract.  
    **Для карты:** realistic interactive environments expose long-horizon agent failures hidden by simple synthetic tasks.

26. **Huang et al. (2025), Scaling Environments for LLM Agents in the Era of Learning from Interaction: A Survey.**  
    arXiv:2511.09586  
    **Просмотрено:** abstract.  
    **Для карты:** environment design itself can be organized around task generation, execution and feedback and is central to experiential agent learning.

## Evaluation, safety and embodied agents

27. **Yehudai et al. (2026), A Survey on Evaluation of LLM-based Agents. Findings of ACL 2026.**  
    https://aclanthology.org/2026.findings-acl.1330/  
    **Просмотрено:** abstract.  
    **Для карты:** evaluation spans core capabilities, domain benchmarks, generalist agents, benchmark dimensions and evaluation frameworks; cost, safety and robustness remain gaps.

28. **Li et al. (2026), AgencyBench: Benchmarking the Frontiers of Autonomous Agents in 1M-Token Real-World Contexts. ACL 2026.**  
    https://aclanthology.org/2026.acl-long.337/  
    **Просмотрено:** abstract.  
    **Для карты:** realistic long-horizon evaluation requires many tool calls, huge context and iterative feedback and exposes efficiency/self-correction/tool-use differences.

29. **Xia et al. (2025), SafeToolBench. Findings of EMNLP 2025.**  
    https://aclanthology.org/2025.findings-emnlp.958/  
    **Просмотрено:** abstract.  
    **Для карты:** tool-use safety must be prospective because execution may cause irreversible harm.

30. **Chen et al. (2026), JARVIS or Ultron? A Survey on the Safety and Security Threats of Computer-Using Agents. ACL 2026.**  
    https://aclanthology.org/2026.acl-long.2106/  
    **Просмотрено:** abstract.  
    **Для карты:** computer-using agents add risks from multimodal input, software components and real actions beyond ordinary text generation.

31. **Fung et al. (2025), Embodied AI Agents: Modeling the World.**  
    arXiv:2506.22355  
    **Просмотрено:** abstract.  
    **Для карты:** embodied agents foreground perception, world models, action/control, memory and user/social context.

## Breadth check

После проверки general agent architectures, planning, tools, memory, reflection/self-correction, environment feedback, cognitive architectures, multi-agent communication, social simulation, embodied/computer-using agents, safety and evaluation новые результаты в основном расширяли уже найденные ветви, а не создавали новые крупные оси.

Это достаточно для **первичной A1-картографии**, но не является A2 coverage audit и не означает глубокого исследования отдельных механизмов.


---

# A2 — повторная финальная картография с учётом всех областей

**Дата прохода:** 16.10.2026.

**Цель:** после межобластной сверки уточнить главный technical integration area вокруг единицы acquired experience, полного action–consequence loop, delayed credit assignment, memory/experience lifecycle, evidence of downstream influence, retrieval/compression selection and bounded autonomy. Это всё ещё A2-картография, не проектирование финального механизма.

## Новые или повторно углублённо проверенные источники A2

### Luo et al. (2026) — From Storage to Experience: A Survey on the Evolution of LLM Agent Memory Mechanisms
Findings of ACL 2026  
https://aclanthology.org/2026.findings-acl.2069/

**Фактически просмотрено в A2:** abstract, taxonomy and framework summary.  
**Что меняет в карте:** survey explicitly separates **Storage (trajectory preservation), Reflection (trajectory refinement) and Experience (trajectory abstraction)** and discusses proactive exploration/cross-trajectory abstraction. Для A2 это подтверждает, что “experience” нельзя использовать как synonym raw log или summary; необходимо отдельно исследовать переходы между trajectory, interpretation/refinement and reusable abstraction.

### Yu et al. (2026) — Agentic Memory: Learning Unified Long-Term and Short-Term Memory Management for Large Language Model Agents
ACL 2026  
https://aclanthology.org/2026.acl-long.981/

**Фактически просмотрено:** abstract and architecture/training summary.  
**Что меняет в карте:** store, retrieve, update, summarize and discard могут быть explicit agent actions rather than fixed external heuristics. Это делает **memory management itself a policy/action domain** and strengthens bounded-autonomy questions around what the agent may decide about its own persistent state.

### Xiong et al. (2026) — How Memory Management Impacts LLM Agents: An Empirical Study of Experience-Following Behavior
ACL 2026  
https://aclanthology.org/2026.acl-long.27/

**Фактически просмотрено:** abstract and reported controlled findings.  
**Что меняет в карте:** retrieved similar experiences strongly pull agent outputs toward similar behavior; the authors identify **error propagation** and **misaligned experience replay**, and show memory addition/deletion choices materially affect long-term behavior. This directly strengthens gaps 14/16/19: memory retrieval is a causal trajectory selector, not neutral recall.

### Uddin et al. (2026) — From Recall to Forgetting: Benchmarking Long-Term Memory for Personalized Agents
Findings of ACL 2026  
https://aclanthology.org/2026.findings-acl.1337/

**Фактически просмотрено:** abstract and benchmark description.  
**Что меняет в карте:** long-term memory evaluation must penalize reliance on obsolete/invalidated memories; tested agents often reused invalid memories or failed to reconcile updates. This makes **obsolescence, contradiction and forgetting-aware evaluation** core lifecycle questions rather than edge cases.

### Tan et al. (2025) — MemBench: Towards More Comprehensive Evaluation on the Memory of LLM-based Agents
Findings of ACL 2025  
https://aclanthology.org/2025.findings-acl.989/

**Фактически просмотрено:** abstract and benchmark dimensions.  
**Что меняет в карте:** factual vs reflective memory and participation vs observation scenarios need separate evaluation; effectiveness, efficiency and capacity are distinct axes. For our task this reinforces that “agent remembered” is under-specified unless the level/function of memory is named.

### Kamoi et al. (2024) — When Can LLMs Actually Correct Their Own Mistakes? A Critical Survey of Self-Correction of LLMs
TACL 12:1417–1440  
https://aclanthology.org/2024.tacl-1.78/

**Фактически повторно углублённо использовано:** abstract and survey conclusions.  
**Что меняет в карте:** prompted self-feedback alone has weak general evidence; reliable external feedback or training changes the situation. Therefore textual “reflection” cannot be treated as verified metacognition, valid lesson or trustworthy self-update by default.

### Pan et al. (2024) — Automatically Correcting Large Language Models: Surveying the Landscape of Diverse Automated Correction Strategies
TACL 12:484–506  
https://aclanthology.org/2024.tacl-1.27/

**Фактически просмотрено:** abstract and correction taxonomy.  
**Что меняет в карте:** feedback/correction can occur at training-time, generation-time or post-hoc and may originate internally or externally. Agent “revision” therefore needs explicit source and timing, not one generic reflection label.

### Liu, Lu & Yang (2026) — SHADOW: Dynamic-Aware Credit Assignment Against Long-Horizon Tasks
AAAI 2026  
https://doi.org/10.1609/aaai.v40i28.39570

**Фактически просмотрено:** abstract.  
**Что меняет в карте:** delayed sparse outcomes create a genuine step-level credit-assignment problem; transition dynamics matter for deciding which earlier actions contributed. This is a technical RL setting, not our final experiment, but it strengthens the need to separate **temporal proximity from causal responsibility**.

### Tan et al. (2026) — Hindsight Credit Assignment for Long-Horizon LLM Agents
arXiv:2603.08754  
https://arxiv.org/abs/2603.08754

**Фактически просмотрено:** abstract.  
**Что меняет в карте:** post-hoc/hindsight reasoning is being used to refine credit assignment in long-horizon agent tasks. It also exposes a methodological danger for our project: retrospective attribution generated by an LLM may be useful as a hypothesis but cannot be treated as ground truth provenance of a consequence.

### Bajoria et al. (2026) — From Language Models to Agentic AI: A Survey of Autonomous, Action-Enabled, and Collaborative LLM Agents
Cognitive Computation 18:103  
https://doi.org/10.1007/s12559-026-10619-1

**Фактически просмотрено:** open-access abstract, taxonomy and autonomy discussion.  
**Что меняет в карте:** autonomy is decomposed across practical dimensions rather than one scalar property; agent architecture separates perception, memory, reasoning/planning, tool interfaces, actuation and feedback/oversight. This reinforces our bounded-autonomy treatment.

### Yehudai et al. (2026) — A Survey on Evaluation of LLM-based Agents
Findings of ACL 2026  
https://aclanthology.org/2026.findings-acl.1330/

**Фактически просмотрено:** abstract and evaluation perspectives.  
**Что меняет в карте:** evaluation must span core agent capabilities, domain/generalist benchmarks and system-level dimensions; robustness, safety and cost remain under-evaluated. For our project, a single success score or self-report cannot establish that acquired experience causally shaped a new decision.

### Guo et al. (2026) — When Personalization Legitimizes Risks: Uncovering Safety Vulnerabilities in Personalized Dialogue Agents
ACL 2026  
https://aclanthology.org/2026.acl-long.1260/

**Фактически просмотрено:** abstract.  
**Что меняет в карте:** benign long-term personal memories can bias current intent interpretation and degrade safety. This is direct evidence that persistent memory can causally shape later inference in undesirable ways; “more personalized/history-aware” is not automatically better.

## A2 — уточнения, полученные из совокупности источников

1. **The unit of acquired experience is not given by agent literature.** Raw trajectory, observation, state summary, reflection, lesson, strategy, changed expectation and cross-trajectory abstraction are distinct representational objects.

2. **Storage is not experience.** Persisting a trajectory only makes it available for later operations; it does not establish that the agent interpreted it, generalized from it or changed future behavior.

3. **Reflection is not validated learning.** A textual critique/reflection can itself be wrong, ungrounded or post-hoc rationalization.

4. **Experience abstraction is lossy and normative.** Converting trajectories into reusable rules/tips requires deciding which causal features, conditions and exceptions matter.

5. **Provenance is therefore a core requirement for later synthesis.** A generalized lesson without links to its source events, observations and consequences is hard to revise when later evidence conflicts.

6. **The full acquired-experience loop is system-level:**  
   `state/history → choice → action → environment/user response → observed consequence → attribution/interpretation → memory/update → changed future choice`.
   Any missing edge can break the claim that “experience changed the trajectory”.

7. **Delayed consequences require credit assignment, not chronology.** Long-horizon agent research confirms that sparse outcomes cannot be safely assigned to every prior action or to the nearest preceding action.

8. **Hindsight attribution is itself fallible.** LLM-generated retrospective critique can propose causal explanations but must not become automatic factual provenance.

9. **Memory management changes policy-like behavior even without weight updates.** Addition, deletion and retrieval choices materially affect later outputs.

10. **Experience-following creates both benefit and lock-in risk.** Similar retrieved experiences can guide a new task, but can also propagate errors and reproduce misaligned old trajectories.

11. **A “successful” past trajectory is not universally good experience.** It can be distribution-specific, accidentally successful, unsafe, overfit or misleading for the new situation.

12. **Memory lifecycle therefore needs validity states, not just present/deleted.** Candidate stages include local/working, persisted, abstracted, retrieved, reinforced, revised, contradicted, stale/obsolete and discarded; exact future implementation remains open.

13. **Contradiction does not imply overwrite.** New evidence may invalidate, narrow, contextualize or coexist with older experience depending on provenance and conditions.

14. **Forgetting can be adaptive.** Retaining obsolete memories can directly worsen future decisions; deletion/invalidation is therefore part of continuity rather than its opposite.

15. **Memory operations can themselves be agent actions.** This creates a second-order autonomy question: may the participant decide what parts of its own history to preserve, summarize, revise or discard?

16. **But unrestricted self-memory management can self-reinforce errors.** Autonomy over memory requires evidence/constraint questions, not a simple “agent controls its own memory” principle.

17. **Compression and retrieval budgets are policy choices.** What gets summarized, dropped or ranked determines which past experiences can causally influence future actions.

18. **Rare but important experience is especially vulnerable.** Similarity/recentness-heavy retrieval can suppress low-frequency but high-consequence events, while repeated common experience can dominate the trajectory.

19. **Evidence that experience affected a new choice must be behavioral/causal, not verbal.** Mentioning a memory or claiming “I learned X” is insufficient.

20. **Controlled memory intervention is a strong evidence pattern.** If adding/removing/replacing a specific experience predictably changes later decisions under otherwise comparable conditions, that supports causal influence more strongly than self-report.

21. **However, memory influence is not automatically “own choice”.** A retrieved item can function like an external instruction/demo and mechanically steer output.

22. **Own choice is multidimensional under delegation.** Need to distinguish user-specified top-level goal, inferred subgoal, plan selection, tool choice, execution choice, stopping, memory management and revision.

23. **Bounded autonomy is compatible with fixed higher-level constraints.** The useful question is which decisions remain endogenously selected inside system/developer/product limits.

24. **Goal generation needs special discipline.** An agent-generated subgoal inside a user task is not the same as a self-originated enduring top-level goal/value.

25. **Environment feedback can be informative without prescribing the policy.** This distinction is crucial if future experience is to arise from consequences rather than from a user simply telling the participant what lesson to store.

26. **Personalization/history-awareness can produce safety regressions.** A persistent history can bias intent interpretation or make risky behavior seem contextually legitimate; trajectory continuity therefore needs independent higher-level constraints.

27. **Agent evaluation must inspect trajectories and state transitions.** Final success alone cannot show whether memory, reflection, planning or prior experience actually caused the result.

28. **The future invented mechanism must preserve a distinction among event, interpretation, attribution and intention.** Agent architecture can support these as separate records/states, but literature does not supply a validated recipe for our exact individuality experiment.

29. **No existing agent framework solves our target problem as stated.** Current work supplies mechanisms for memory, planning, reflection, feedback and autonomy, but not a demonstrated process for naturally forming an individual, revisable trajectory without pre-authored persona/values.

## A2 boundary decisions for area №9

- **Остаётся в №9:** full perceive/decide/act/observe loop; engineered memory lifecycle; experience abstraction/provenance; reflection/feedback integration; long-horizon credit assignment at agent-system level; multidimensional autonomy; evidence of memory/history influence on action; agent persona/profile boundary.
- **Primary owner №2:** human memory/generalization constructs.
- **Primary owner №3:** psychological learning and no-update criteria.
- **Primary owner №4:** significance/value/interest/motivation.
- **Primary owner №5:** social influence/identity.
- **Primary owner №7:** formal history dependence/system boundary.
- **Primary owner №8:** model/context/stochasticity attribution.
- **Primary owner №10:** formal ML/RL adaptation and optimization algorithms.
- **Primary owner №11:** actual ChatGPT persistence, tools, permissions and product behavior.
- **Primary owner №12:** exact project-instruction design.

## A2 coverage conclusion

Повторный поиск по:
- memory evolution from storage to experience;
- unified agent-controlled memory operations;
- experience-following and memory addition/deletion;
- obsolete/conflicting long-term memories;
- self-correction/reflection validity;
- delayed/hindsight credit assignment;
- multidimensional autonomy;
- system-level agent evaluation;
- safety effects of persistent personalization

не выявил новой крупной agent/cognitive-architecture branch beyond A1. Новое содержательно связывает уже найденные branches into **a lifecycle and causal-evidence problem**, что позволяет финализировать карту №9.
