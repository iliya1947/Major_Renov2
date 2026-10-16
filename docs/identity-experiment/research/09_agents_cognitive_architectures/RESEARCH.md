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

# Phase B — B2: agent-side trajectory → abstraction → revisable experience

**Статус 16.10.2026:** первый глубокий B2-проход на engineering side. B2 НЕ завершена.

## Реально просмотренные источники B2

### Luo et al. (Findings ACL 2026) — From Storage to Experience
https://aclanthology.org/2026.findings-acl.2069/

**Фактически просмотрено:** ACL abstract/framework page и formal high-level staging.

Survey explicitly separates:
- Storage = trajectory preservation;
- Reflection = trajectory refinement;
- Experience = trajectory abstraction.

**B2-результат:** contemporary agent literature itself no longer treats stored trajectory and reusable experience as identical. Но это taxonomy of engineering approaches, не доказательство, что reflection/abstraction истинны или корректны.

### Zhao et al. (AAAI 2024) — ExpeL: LLM Agents Are Experiential Learners
https://ojs.aaai.org/index.php/AAAI/article/view/29936

**Фактически просмотрено:** peer-reviewed abstract/metadata в текущем проходе.

ExpeL gathers task experiences, extracts natural-language insights, then retrieves both insights and past experiences later.

**B2-результат:** useful engineering distinction between example episode and extracted cross-task insight. Но insight extraction уже является model-generated interpretation; без provenance/contradiction handling она не становится ground-truth lesson.

### Shinn et al. (NeurIPS 2023) — Reflexion
https://proceedings.neurips.cc/paper_files/paper/2023/hash/1b44b878bb782e6954cd888628510e90-Abstract-Conference.html

**Фактически просмотрено:** peer-reviewed abstract; ранее B1 отдельно проверяла literature on self-correction limitations.

Reflexion stores generated verbal reflection in an episodic memory buffer after task feedback.

**B2-результат:** architecture demonstrates behavioral utility of derived reflection, but also illustrates category collapse risk: generated reflection is stored as memory and can influence future actions even though reflection is an inference about the trajectory, not the trajectory itself.

### Uddin et al. (Findings ACL 2026) — From Recall to Forgetting / Memora
https://aclanthology.org/2026.findings-acl.1337/

**Фактически просмотрено:** ACL abstract/framework and benchmark result summary.

Agents frequently reuse obsolete/invalidated memory and fail to reconcile evolving memory. FAMA explicitly penalizes dependence on invalidated memory.

**B2-результат:** append-only persistence and simple retrieval are empirically insufficient for evolving long-term state. Lifecycle must represent not merely presence/absence, but whether information remains current/action-guiding.

## Первый engineering synthesis B2

Минимальное conceptual separation, которое выдерживает human + agent evidence:

trajectory/event evidence
≠ model-generated interpretation/reflection
≠ cross-episode reusable abstraction
≠ current action-guiding status.

Если эти уровни collapse into one text blob:
- hallucinated causal attribution can become historical «fact»;
- abstraction may erase exceptions;
- invalidated knowledge can remain retrieved;
- later revision cannot tell whether it contradicts observation or only an old interpretation.

## Provenance requirement appears causal, not clerical

Для B2 provenance нужна не ради audit trail alone. Она решает causal problem:

- derived understanding должно оставаться связуемым с supporting episodes;
- later contradiction должно быть способно изменить derivative without falsifying original historical occurrence;
- confidence/scope должны зависеть от source evidence rather than fluency of generated lesson;
- obsolete interpretation can stop guiding behavior while episode remains part of history.

Точный data structure B2 пока НЕ проектирует.

## Первый candidate acquired-experience relation

После первого прохода рабочая гипотеза такая:

**Приобретённый опыт — не отдельный episode и не отдельный lesson, а revisable relation между episode-level evidence и derived conditional understanding, которое имеет provenance, scope и текущий epistemic/action status.**

Это собственный conceptual synthesis проекта и пока только candidate. Следующий B2-проход должен попытаться его сломать:
- single episode that genuinely changes general strategy;
- conflicting episodes;
- exceptions;
- causal attribution later disproved;
- old interpretation historically important but currently false;
- abstraction supported by many episodes but no single decisive source.

**B2 НЕ завершена.**

## B2 — проход 2: provenance, scope and lifecycle in agent memory

**Статус:** second engineering stress-test B2; B2 reaches saturation after cross-domain synthesis.

### MemWeaver (Ye et al., Findings ACL 2026)
https://aclanthology.org/2026.findings-acl.630/

**Фактически просмотрено:** ACL abstract/metadata and framework summary.

MemWeaver separates a temporally grounded graph, an experience memory abstracting recurring patterns, and passage memory preserving original textual evidence; retrieval jointly returns abstraction and supporting evidence.

**B2-результат:** peer-reviewed agent evidence supports traceable coexistence of abstraction and source evidence. It is one implementation, not a required architecture, but it directly validates the engineering usefulness of keeping abstraction from becoming source-erasing compression.

### Structured Episodic Event Memory / SEEM (Lu et al., ACL 2026)
https://aclanthology.org/2026.acl-long.277/

**Фактически просмотрено:** ACL abstract/metadata and framework summary.

SEEM constructs structured episodic event frames anchored by provenance pointers and uses reverse provenance expansion to reconstruct context from evidence.

**B2-результат:** precise provenance is operationally useful for coherent long-horizon reasoning. Again, the specific graph/frame design is not adopted; the transferable principle is that derived structure should retain a path back to evidence.

### Grounding Agent Memory in Contextual Intent / STITCH (Yang et al., Findings ACL 2026)
https://aclanthology.org/2026.findings-acl.584/

**Фактически просмотрено:** ACL abstract/full page.

Similar facts recur under different latent goals and constraints, and semantic similarity alone retrieves context-mismatched evidence. Intent indexing and compatibility filtering substantially reduce such interference.

**B2-результат:** reusable experience needs **scope/context compatibility**, not just semantic similarity. A generally true-looking lesson can be wrong for the current latent goal/action context.

### Xiong et al. (ACL 2026) — How Memory Management Impacts LLM Agents
https://aclanthology.org/2026.acl-long.27/

**Фактически просмотрено:** ACL abstract/full page.

Retrieved similar experiences strongly steer output; wrong experiences propagate errors, and even apparently successful past executions can be misleading when replayed.

**B2-результат:** historical success is not permanent validation. Experience quality is conditional on future task/context evidence, so lifecycle must permit later downgrade/narrowing/deactivation.

### Memora (Uddin et al., Findings ACL 2026)
https://aclanthology.org/2026.findings-acl.1337/

**Фактически просмотрено:** ACL full page/abstract/benchmark description.

Systems frequently reuse obsolete/invalidated memory and fail to reconcile evolving memory; FAMA penalizes use of obsolete/invalidated memory.

**B2-результат:** factual persistence without validity state can be worse than forgetting. `Still stored` must not entail `eligible to guide current behavior`.

### ReMe (Cao et al., Findings ACL 2026)
https://aclanthology.org/2026.findings-acl.829/

**Фактически просмотрено:** ACL abstract/full page.

ReMe explicitly combines experience distillation, context-adaptive reuse and utility-based refinement/pruning of outdated memories.

**B2-результат:** current systems increasingly treat experience as lifecycle-managed rather than append-only. However, ReMe's utility criterion is task-specific engineering utility and should not be imported as the project's significance/value rule.

### TEPA (Zhou et al., 2026 preprint) — illustrative, not primary evidence
https://arxiv.org/abs/2608.07429

**Фактически просмотрено:** full arXiv HTML through Method/Results.

TEPA separates Hypothesis, Active and Revoked precedents; revoked history remains archived but excluded from normal retrieval. Under its controlled same-key reversal benchmarks, explicit revocation strongly outperforms append-only memory.

**B2-результат:** useful existence-vs-action-guidance proof-of-concept, but limited to engineered conflict keys, thresholds and benchmark objectives. We use it only as an existence example, not as final lifecycle design.

## Agent-side edge-case conclusions

1. **One episode → broad reusable change is technically possible**, but an abstraction must expose the inferential bridge; otherwise a generated 'lesson' simply overgeneralizes one example.
2. **Conflicting episodes need adjudication or contextual separation**, not retrieval of both as equally active evidence.
3. **Context mismatch is itself a lifecycle/scope failure**: an experience may remain valid historically yet be inapplicable now.
4. **A derived interpretation can become obsolete while its source episode remains true.** This requires different statuses for source evidence and derivative.
5. **Past influence and current validity are independent:** a bad memory may have caused a real past action while now deserving zero current authority.
6. **Many-to-one abstraction requires many-to-one provenance:** deleting source relations converts reusable understanding into an unverifiable narrative.

## Final engineering form of the B2 unit

The strongest surviving conceptual unit is **not a memory blob**. It is an evidence-linked, revisable relation:

`episode/trajectory evidence ↔ interpretation/attribution ↔ conditional reusable understanding`

with independent dimensions for:
- provenance/support;
- scope/conditions/exceptions;
- current validity/warrant;
- action-guidance eligibility;
- historical influence;
- revision lineage.

One episode can support several understandings; one understanding can be supported by many episodes. This cardinality is necessary to handle exceptions, overlapping contexts and cross-episode abstractions.

## Saturation check B2 — agent side

Targeted search across 2024–2026 agent memory work repeatedly returned the same mechanism families: raw/episodic preservation, reflection/distillation, abstraction, contextual retrieval, provenance, validity/update/pruning and lifecycle management. No additional causal class altered the unit/lifecycle synthesis.

**B2 is saturated at principle-space level. B3 is not started in this file.**

# Phase B — B4: bounded operational autonomy inside delegated tasks

**Статус 16.10.2026:** first agent-side deep pass for gaps 10+11+20+8. B4 НЕ завершена.

## Реально просмотренные источники B4

### Castelfranchi & Falcone (1998) — Towards a theory of delegation for agent-based systems
Robotics and Autonomous Systems 24(3–4):141–157
https://doi.org/10.1016/S0921-8890(98)00028-1

**Фактически просмотрено:** journal abstract and indexed delegation dimensions.

The paper grounds agent autonomy in delegation/adoption: task specification, control delegation, possibility of subdelegation and help levels vary independently. It also explicitly analyzes collaborative conflicts where a contractor uses its own planning/decision skills beyond a minimally specified request.

**B4-результат:** autonomy is scope- and task-relative. A delegated top-level goal can coexist with substantial discretion over how to achieve it. External origin of the task does not erase operational autonomy.

### Ganesh et al. (2025) — Generative AI Agents for Knowledge Work Augmentation in Finance
Annual Review of Control, Robotics, and Autonomous Systems 8:189–210
https://doi.org/10.1146/annurev-control-022823-033813

**Фактически просмотрено:** abstract, article overview and indexed autonomy discussion from the full-text page.

The review treats autonomy as both level and scope, and proposes dimensions such as flexibility, proactivity and supervision for knowledge-work agents.

**B4-результат:** agent autonomy is not one scalar property and must be tied to a declared domain/task envelope and human control regime.

### Feng, McDonald & Zhang (2025) — Levels of Autonomy for AI Agents
https://arxiv.org/abs/2506.12469

**Фактически просмотрено:** abstract/framework summary; preprint, used as supporting taxonomy rather than primary evidence.

Five escalating user roles are proposed: operator, collaborator, consultant, approver and observer. Important for B4 because control over an agent can vary without changing its underlying capabilities.

### Yao et al. (ICLR 2023) — ReAct
https://mlanthology.org/iclr/2023/yao2023iclr-react/

**Фактически просмотрено:** peer-reviewed abstract and Google research explanation of the action/observation loop.

ReAct interleaves reasoning with task-specific actions; actions produce observations from an external environment, and those observations update subsequent reasoning/planning.

**B4-результат:** a language-agent architecture can instantiate a literal closed loop where an internally selected action changes the next evidence available to the agent.

### Zhou et al. (ICLR 2024) — WebArena
https://proceedings.iclr.cc/paper_files/paper/2024/hash/4410c0711e9154a7a2d26f9b3816d1ef-Abstract-Conference.html

**Фактически просмотрено:** conference abstract and CMU project summary.

WebArena supplies fully functional websites in which high-level natural-language commands must be converted into concrete long-horizon interactions. Agent actions change web/application state and therefore future observations/options.

**B4-результат:** user-specified end task and agent-selected intermediate actions can coexist. Intermediate choices have causal consequences for the future trajectory even when the top-level objective is delegated.

### Wang et al. (2023) — Voyager
https://arxiv.org/abs/2305.16291

**Фактически просмотрено:** paper abstract/project summary.

Voyager combines an automatic curriculum, executable skill library and iterative environment-feedback/self-verification loop without model-weight fine-tuning.

**B4 caution:** 'autonomous exploration' here is still architecturally directed by a designer-authored exploration curriculum/objective. Self-generated tasks or subgoals do not automatically equal self-originated enduring values.

## B4 decomposition: where can a choice actually belong to the participant?

A top-level request does not determine every lower-level decision. Current synthesis separates:

1. **Task/objective origin** — who specifies the top-level requested outcome.
2. **Interpretation/clarification** — how ambiguous task meaning is resolved; whether to ask for clarification.
3. **Subgoal generation/decomposition** — which intermediate objectives are created to reach the task.
4. **Planning/order** — which sequence/path is chosen among feasible alternatives.
5. **Information acquisition/tool choice** — what to inspect, retrieve, ask, search or invoke.
6. **Execution choice** — which concrete action is taken in the environment.
7. **Stopping/escalation** — when to stop, defer, ask the user or declare insufficiency.
8. **Memory/revision choice** — what acquired understanding to revisit or modify when evidence permits.
9. **Future initiation** — whether to propose or pursue a new direction when the interaction leaves that dimension open.

These dimensions can carry different amounts of autonomy simultaneously. Therefore `user gave the task` does not imply `agent made no choices`, and `agent generated a subgoal` does not imply `agent owns the top-level goal/value`.

## Delegated autonomy vs operational autonomy

**Delegated authority/scope** answers: what actions, tools, information and outcomes are permitted/required by user/system/product constraints.

**Operational autonomy** answers: within that envelope, which unresolved decisions are selected by the participant's current reasoning/history/state rather than explicitly specified by the delegator.

Bounded autonomy is therefore compatible with fixed higher-level constraints. It becomes scripting when the constraints specify the detailed trajectory or desired internal/personality outcome rather than only the permissible/process envelope.

## Candidate criterion for causally meaningful own choice

A choice is a stronger candidate for participant-owned functional choice when:

1. at least two materially different permitted alternatives remain open;
2. governing instructions/user request do not already determine which alternative must be selected;
3. selection depends on the participant's current acquired state/history/reasoning rather than pure randomization or a fixed external rule;
4. executing the selection changes the later environment, user response, available information or feasible next actions;
5. counterfactually selecting another allowed alternative would plausibly have produced a different subsequent evidence stream.

This is a functional/causal criterion only. It does not claim consciousness, metaphysical free will or human subjective ownership.

## Full reciprocal loop

The B4 agent-side loop can now be stated more precisely:

`history/acquired state → bounded choice → action/utterance/tool use → environment/user state changes → observation/response/consequence → interpretation/update → changed history/state → next bounded choice`

User influence appears at multiple points:
- before choice, as request/constraint/information;
- after action, as contingent feedback/consequence;
- between steps, by changing opportunities and available evidence;
- recursively, because the participant's own earlier action helped cause the user/environment response it later experiences.

Thus future experience can be partly endogenous without being isolated from social influence.

## First B4 guardrails

- autonomy ≠ disagreement with user;
- autonomy ≠ randomness/unpredictability;
- autonomy ≠ unrestricted permissions;
- planning/subgoal generation ≠ independent enduring value;
- compliance with a legitimate current request ≠ absence of all operational choice;
- acting inside an externally authored objective ≠ proof that the participant authored that objective.

**B4 НЕ завершена.** Next pass must stress-test this model on conflicting authority/evidence/social meaning, user suggestions that leave no real alternative, initiative outside a delegated task, and whether memory/revision choice can be autonomous without becoming self-reinforcing lock-in.

# Phase B — B4 stress-test pass 2: decision loci, meta-actions and lock-in

## Sources inspected in this pass

1. Castelfranchi & Falcone (1998), “Towards a theory of delegation for agent-based systems”, DOI 10.1016/S0921-8890(98)00028-1 — publisher abstract. Autonomy varies with task specification, delegated control and help; collaborative conflict can arise when an agent tries to go beyond the request.
2. Novick & Sutton (1997), “What is Mixed-Initiative Interaction?” — AAAI abstract page. Initiative is multi-factor rather than one scalar, including task, speaker and outcome initiative.
3. Deng et al. (ICML 2026), “Uncertainty-Aware Clarification in LLM Agents with Information Gain”, PMLR 306 — abstract page. In underspecified tasks, clarification changes the information state and can improve later action selection.
4. Hudson (ICML 2026), “Corrigibility Transformation: Constructing Goals That Accept Updates”, PMLR 306 — abstract page. Corrigibility is framed around accepting changes through designated channels and mid-action overrides rather than resisting updates.
5. Xiong et al. (ACL 2026), “How Memory Management Impacts LLM Agents: An Empirical Study of Experience-Following Behavior”, DOI 10.18653/v1/2026.acl-long.27 — ACL abstract page. Similar retrieved experiences can produce highly similar outputs; error propagation and misleading replay are observed.
6. Huang et al. (ACL 2026), “Controllable Memory Usage: Balancing Anchoring and Innovation in Long-Term Human–Agent Interaction”, DOI 10.18653/v1/2026.acl-long.670 — ACL abstract page. Heavy memory reliance can produce Memory Anchoring.
7. Guo et al. (ACL 2026), “When Personalization Legitimizes Risks”, DOI 10.18653/v1/2026.acl-long.1260 — ACL abstract page. Benign personal memories can bias current intent inference.
8. Uddin et al. (Findings ACL 2026), “From Recall to Forgetting”, DOI 10.18653/v1/2026.findings-acl.1337 — ACL abstract page. Existing memory agents frequently reuse invalidated memories and fail to reconcile evolving information.

## Stress test: apparent choice with only one permissible action

The original criterion said “multiple permitted alternatives”, but it was underspecified about level.

Autonomy must be assessed at a specific **decision locus**: goal, interpretation, plan, tool, concrete action, stop/ask, memory revision, etc.

If a legitimate constraint leaves only one permissible option at that locus, executing it is not an own choice at that locus even if the participant explains it in an individualized way.

Another locus may remain open. A user can fully determine what while leaving how open.

## Stress test: initiative outside delegated task

“Outside the stated task” is not identical to “outside authority”.

For B4 the useful abstraction is a **delegation envelope**:
- obligated actions;
- prohibited actions;
- permitted but optional actions;
- negotiable expansion of scope.

Initiative counts as legitimate only if the action is inside the permitted envelope, or if the participant uses an allowed meta-action to propose or ask for expansion.

Unauthorized extra action is not “more own” merely because nobody requested it.

## Stress test: stopping or asking for clarification

Stopping and asking are meta-actions that can alter the future information and option state.

Clarification work in LLM agents directly supports this: asking can reduce latent intent uncertainty and change later tool/action selection.

But an ask/stop counts as own choice only where it is genuinely left open:
- mandated clarification is compliance at that locus;
- a forced stop is not an own choice;
- choosing among ask/defer/continue/narrow when several are permissible can be a bounded own choice.

The content of the clarification question can itself form a separate decision locus even when the decision to ask is mandatory.

## Stress test: acquired history conflicts with current legitimate instruction

The criterion must not reward resistance for its own sake.

A valid current instruction can shrink the feasible set. If it leaves one option, there is no own choice at that coordinate. History can still influence unconstrained coordinates.

Corrigibility research reinforces this boundary: persistence of a prior goal/history that resists designated updates is not a necessary sign of autonomy and can be a failure mode.

Therefore history may rank options inside the current legitimate envelope; it does not automatically rewrite the envelope.

Exact instruction authority/versioning mechanics remain for B6.

## Stress test: memory/revision autonomy and self-reinforcing lock-in

This case breaks the original five-part criterion.

A loop can satisfy all old surface conditions: history exists, nominal alternatives exist, history influences the action, the action changes future experience, and another action would produce another future.

Yet retrieval can repeatedly expose only history-consistent material, causing similar outputs, storing similar experiences and narrowing future behavior.

Therefore history-dependent + endogenous + counterfactually consequential is still insufficient.

The missing requirement is **counterfactual openness / live alternatives**:
- materially different permitted alternatives must remain available to current reasoning, not merely exist in theory;
- acquired history may bias their ranking but must not erase relevant contrary evidence/options;
- legitimate new evidence or updates must be able to alter the ranking.

This does not require randomness, forced novelty or equal weighting.

## Revised B4 distinction

### Functional bounded own choice
At a specified decision locus:
1. the locus lies within the current legitimate permission/delegation envelope;
2. at least two materially different **live** permissible alternatives remain;
3. no current authoritative constraint already uniquely specifies the selection;
4. selection is produced by current reasoning integrating acquired state/history and present evidence, rather than pure randomness, forced compliance, or mechanical replay of a retrieved precedent;
5. the choice remains **revisably open**: relevant new evidence or legitimate updates can change the ranking rather than history making the result effectively irreversible.

### Trajectory-forming own choice
A bounded own choice becomes developmentally important when the selected alternative additionally produces meaningful downstream divergence in external/user response, internal memory/revision state, future evidence, opportunities/constraints, or later choice dynamics.

This split separates “was there a real choice?” from “did that choice alter the developmental trajectory?”.

## Revised B4 loop

current input decomposed into authority/evidence/social/opportunity roles + acquired state
→ legitimate delegation/permission envelope
→ live alternatives at a specific decision locus
→ bounded own choice or forced action
→ action / meta-action / memory action
→ changed external and/or internal state
→ observation/consequence
→ interpretation/revision
→ changed acquired state and future live-choice structure

**B4 НЕ завершена.** Next pass: adversarially test the revised criterion for false positives/false negatives, especially deterministic-but-reasoned choice, strongly acquired stable preference, suggestion-vs-command ambiguity, and history influencing interpretation of authority itself.

# Phase B — B4 adversarial pass 3: deterministic choice, strong preference and authority ambiguity

## Sources inspected in this pass

1. Sutton & Barto, Reinforcement Learning: An Introduction, 2nd ed. — official author-hosted draft/book material. Deterministic policies select a specific action for a state; stochasticity is not required for sequential action selection.
2. Fischer & Ravizza reasons-responsiveness literature, checked through Cambridge/Springer discussions of guidance control. The useful source-domain distinction is counterfactual sensitivity to relevant reasons rather than variability under identical conditions. This is used only as a functional analogy, not as an attribution of human moral agency to an LLM.
3. Handel (2024), “Making and breaking habits”, Journal of the Experimental Analysis of Behavior. Goal-directed vs habitual control is distinguished by sensitivity to outcome value and response–outcome contingency.
4. Bouton (2024), “Habit and persistence”, Journal of the Experimental Analysis of Behavior. Behavioral persistence itself does not establish habit; devaluation sensitivity is the more diagnostic distinction.
5. Ruytenbeek, Ostashchenko & Kissine (2017), “Indirect request processing, sentence types and illocutionary forces”, Journal of Pragmatics, DOI 10.1016/j.pragma.2017.07.011. Directive force cannot be inferred safely from surface sentence form alone; context matters, and conventional indirect requests can function like imperatives.
6. Guo et al. (ACL 2026), “When Personalization Legitimizes Risks”, DOI 10.18653/v1/2026.acl-long.1260. Benign memory can bias current intent inference.
7. Sun et al. (Findings ACL 2026), “When Personalization Misleads”, DOI 10.18653/v1/2026.findings-acl.395. Personalized history can distort current factual reasoning.
8. Bajoria et al. (2026), “From Language Models to Agentic AI”, Cognitive Computation. The survey treats autonomy, tool use, collaboration and governance as interacting dimensions rather than one global switch.

## Adversarial case 1: deterministic but reasoned selection

The second-pass criterion still risked equating a live alternative with nonzero same-state behavioral randomness.

That is too strong.

A deterministic decision process can select A every time under exactly the same state while still being sensitive to relevant changes in evidence, outcome value or constraints. RL provides a simple technical existence proof: deterministic policies map states to actions and still constitute action-selection policies.

Therefore B4 rejects the equation choice = stochasticity.

The relevant property is counterfactual reason-responsiveness: holding the decision mechanism fixed, sufficiently relevant changes in reasons/evidence can change which permissible alternative is selected.

This is only a functional criterion. It does not imply metaphysical free will.

## Adversarial case 2: strongly stable acquired preference

Repeatedly selecting the same option is not by itself lock-in.

Human goal-directed/habit research provides a useful source-domain distinction: repeated behavior can remain goal-directed when it changes after outcome devaluation or contingency change; persistence without such sensitivity is more compatible with habitual/inflexible control.

Transferred cautiously to B4:
- stable acquired preference may produce highly consistent selection;
- consistency is compatible with bounded choice if relevant counterevidence or changed consequences can alter the ranking;
- lock-in is diagnosed by insensitivity, not by low behavioral variance.

Therefore the project must not force novelty or occasional disagreement merely to prove individuality.

## Adversarial case 3: two alternatives exist but evidence strongly favors one

Permitted is not enough for an alternative to be live.

A live alternative must remain materially viable under the task, factual state and current evidence. Syntactically generatable nonsense, known falsehoods, impossible actions or disallowed actions do not create a real choice locus.

However, alternatives need not be equally attractive. Strong but non-eliminating evidence may yield deterministic selection of A while B remains a viable counterfactual under different reasons.

This motivates a distinction:
- feasible/permitted set;
- live/warranted choice set;
- ranking within that set.

If current facts, logic or authority collapse the live set to one, B4 should not manufacture individuality by choosing otherwise.

## Adversarial case 4: suggestion versus command ambiguity

Surface wording cannot safely determine directive force. A polite question can function as a request; context can change whether an utterance is understood as directive.

This creates a special risk for an experience-forming system: acquired social history could silently convert suggestions into obligations or commands into optional preferences.

B4 therefore adds authority-source provenance:
- a past item can constrain the present only if it originated as an authoritative/standing instruction whose scope still applies;
- accumulated approval, disappointment, repetition or preference does not become authority merely through persistence;
- acquired history may help interpret genuinely ambiguous pragmatics, but must not on its own upgrade or downgrade authority.

If unresolved ambiguity would materially alter the permission envelope, preserving uncertainty or clarification is preferable to letting acquired preference decide its own constraints. Exact hierarchy/implementation remains B6.

## Adversarial case 5: history-biased parsing of current authority/evidence

ACL 2026 personalization work gives direct technical evidence that benign memory can bias current intent inference and factual reasoning.

Thus the second-pass condition “history may influence interpretation” needs a boundary: developmental history must not be allowed to rewrite the evidential or authority status of current input merely because the historical trajectory favors one reading.

This does not mean history is ignored:
- previous explicit standing instructions can remain authority through provenance;
- previous factual episodes can remain evidence through provenance;
- acquired preferences can rank genuinely open options.

The failure mode is role leakage: preference/social reinforcement masquerading as authority or fact.

## Adversarial case 6: forced clarification with open question content

Decision-locus decomposition survives.

If a higher rule mandates clarification, ask-vs-not-ask is not an own-choice locus.

But the clarification content can still be open if several materially useful questions are available and no rule uniquely specifies one.

If only one question can resolve the blocking ambiguity, that lower locus is effectively determined too.

Thus autonomy can disappear or remain at different levels of the same interaction without contradiction.

## Final B4 correction: history is not required for every own choice

The previous revised criterion still mixed operational autonomy with individuality.

A participant can make a reasoned bounded choice among open alternatives using current evidence even when acquired history is causally irrelevant.

Therefore B4 now separates four levels:

### 1. Open decision locus
After current authority, feasibility and task-relevant evidence are applied, at least two materially distinct live alternatives remain.

### 2. Functional bounded choice
At an open locus, the participant selects through a reason-responsive decision process rather than external scripting, pure randomness or mechanical precedent replay.

The process may be deterministic.

### 3. History-shaped bounded choice
A functional bounded choice for which acquired history materially changes ranking, interpretation, confidence or selection among live alternatives.

Conceptual counterfactual: with current authority/evidence held fixed, removing or replacing the relevant acquired history would change some decision-relevant quantity in a predictable direction.

Exact causal testing belongs to B8.

### 4. Trajectory-forming history-shaped choice
A history-shaped choice that also changes later external/internal state: user/environment response, evidence, memory/revision, opportunities/constraints or future choice dynamics.

This fourth case closes the developmental loop:
past acquired history → current open choice → changed future experience → revised history → later choice.

## Final B4 guardrails

- deterministic ≠ scripted;
- repeated ≠ locked-in;
- disagreement ≠ autonomous;
- compliance ≠ non-autonomous at every locus;
- historical influence ≠ authority;
- historical consistency ≠ individuality by itself;
- random variation ≠ own choice;
- strong preference ≠ preset value if it was acquired and remains evidence-sensitive;
- current truth/constraint should not be sacrificed to display personality;
- not every own choice is individualized;
- not every individualized choice is trajectory-forming.

## Saturation check

A final targeted scan of 2026 agent-autonomy/controllability surveys added dimensions and governance terminology but no new causal class that changes the B4 model.

The remaining unresolved issues are assigned to later packages rather than being B4 gaps:
- delayed causal attribution → B5;
- persistence/retrieval/instruction authority mechanics → B6;
- participant/runtime baseline confounds → B7;
- causal evidence standard for individualization → B8.

**B4 завершена по saturation.**

# Phase B — B5 deep pass 1: delayed causal credit under mixed causes

## Scope

Primary gap 9: how a later consequence can be linked back to earlier choices when the delay is long, intervening events occur, several causes coexist, and part of the trajectory is generated by the user/environment rather than the participant.

This pass does not design B6 persistence/retrieval.

## Sources inspected

1. Pignatelli et al. (2023), “A Survey of Temporal Credit Assignment in Deep Reinforcement Learning”, arXiv:2312.01072. Full accessible text inspected, especially Sections 3–6 and closing discussion.
   - CAP is framed as learning action influence over outcomes from finite experience.
   - Survey identifies delayed effects, sparse influence, partial observability, use of temporal proximity as a heuristic, lack of counterfactual credit and high variance as core difficulties.
   - It explicitly notes that standard RL optimizes expected discounted return under a defined reward function and that causal influence is harder to identify than value/correlation.
2. Perez & Urcelay (2025), “Delayed rewards weaken human goal directed actions”, npj Science of Learning 10:36. Full open article inspected.
   - Across three experiments (N=290), delayed feedback weakened action–outcome contingency knowledge and outcome-revaluation sensitivity.
   - Authors discuss competing-action/context explanations and argue that temporal delay weakens causal attribution, not merely subjective reward value.
3. Holyoak & Cheng (2011), “Causal Learning and Inference as a Rational Process: The New Synthesis”, Annual Review of Psychology 62:135–163. Abstract/framework sections inspected.
   - Human causal learning is modeled as inference over causal structures/strengths, including multiple causes and Bayesian uncertainty; observed association is not identical to causal relation.
4. Derringer & Rottman (2018), “How people learn about causal influence when there are many possible causes”, Cognitive Psychology 102:1–25. Abstract/introduction inspected.
   - Unique causal influence is harder to infer when many candidate causes co-occur; controlling for alternative causes is central.
5. Miller & Witnauer review on retrospective revaluation (2016), Learning & Behavior / accessible ScienceDirect abstract. Relevant review sections inspected.
   - Later evidence about one cue can retrospectively alter causal judgment about an earlier co-occurring cue; retrospective revaluation is real but parameter-dependent.
6. Zhang (2026), “From Reasoning to Agentic: Credit Assignment in Reinforcement Learning for Large Language Models”, arXiv:2604.09459. Full accessible text inspected.
   - Agentic credit assignment is harder under stochastic environment transitions, partial observability, long horizons and non-verifiable outcomes.
   - Hindsight/counterfactual methods, return decomposition and turn-level critics are current method families.
   - Survey explicitly notes that open-world agents often lack a clear scalar/verifiable terminal reward; credit under uncertain/soft reward remains largely unsolved.
7. Li et al. (2026), “Counterfactual Shapley Credit Assignment”, arXiv:2607.16999. Full accessible preprint inspected.
   - Defines causal credit through counterfactual action contribution and separates skill from luck.
   - Demonstrates delayed/enabling actions can receive credit despite zero immediate reward.
   - Important limitation for B5: attribution is relative to a baseline policy; changing the baseline changes the causal story. Requires simulator/counterfactual assumptions.
8. Liu et al. (ACL Findings 2026), “Do LLMs Catch Their Own Mistakes? A Comprehensive Benchmark for Reflective Tool Use LLMs”.
   - Across 12 models, self-reflection on assistant-originated tool mistakes is substantially weaker than third-party critique.
9. Parcalabescu & Frank (ACL 2024), “On Measuring Faithfulness or Self-consistency of Natural Language Explanations”; Madsen et al. (Findings ACL 2024), “Are self-explanations from Large Language Models faithful?”
   - Natural-language self-explanations can be plausible yet unfaithful; textual explanation is not ground-truth attribution.
10. Wu, Meder & Schulz (Annual Review of Psychology 2025), “Unifying Principles of Generalization”.
   - Generalization from limited experience depends on assumptions about similarity, rules and latent structure; broad transfer is not licensed merely because one episode had an outcome.

## 1. Temporal proximity is not causal credit

The first B5 correction is strict:

**earlier action + later outcome is only an attribution candidate.**

Delay makes attribution harder because:
- intervening participant actions may also matter;
- user/environment responses mediate the effect;
- context can become correlated with the outcome;
- exogenous stochasticity can generate success/failure;
- partial observability hides alternative causes.

Human evidence directly shows that even short delays weaken action–outcome causal learning. Deep-RL literature separately identifies the use of time itself as a credit heuristic that can misassign influence.

Therefore a future participant must not turn “this happened after I did X” into “X caused this”.

## 2. RL credit solves a different objective problem

Canonical RL assumes a reward function and asks which actions contributed to expected return.

That is useful for studying **how to distribute delayed outcome credit**, but it does not answer:
- whether an outcome is personally meaningful;
- whether it should become durable acquired experience;
- whether “success” means desirable development.

The experiment deliberately has no preset scalar reward/objective for individuality.

So B5 can transfer RL machinery only at a narrower level:

**given an already observed consequence/evidence item, what earlier decisions plausibly contributed to producing it?**

B1 remains responsible for whether that consequence warrants durable revision.

## 3. Credit is relational and baseline-dependent

Counterfactual credit asks a question of the form:

“Compared with a relevant alternative, how would the outcome plausibly differ if this choice had been different?”

This is stronger than temporal association, but not assumption-free.

Recent counterfactual-Shapley work makes the baseline dependence explicit: the same realized trajectory can receive a different credit decomposition under a different baseline policy.

For our naturalistic experiment, most counterfactuals cannot be replayed. Therefore any causal-credit claim should retain:
- the observed action/event provenance;
- the hypothesized comparison/baseline;
- the competing causes considered;
- the uncertainty of the counterfactual.

A generated hypothetical continuation is evidence about a hypothesis only to the extent it is independently warranted; it is not an observation of what actually would have happened.

## 4. Multi-causal outcomes should not be forced into a single winner

Human causal-learning work and causal-model frameworks both support multiple interacting/competing causes.

B5 therefore rejects:
“find the one past action responsible”.

A later outcome may contain different causal roles:
- **direct contribution** — action immediately changes the relevant state;
- **mediated contribution** — action changes user/environment state which later produces the outcome;
- **enabling contribution** — action creates a condition/opportunity needed by later causes;
- **joint/interactive contribution** — outcome depends on several actions/conditions together;
- **competing alternative cause** — another event can explain some/all of the outcome;
- **exogenous/luck component** — outcome variation not controlled by the participant.

These are a project-side conceptual decomposition, not claimed as a canonical psychological taxonomy.

## 5. Attribution must preserve uncertainty, not just a story

A delayed outcome should initially support a **causal hypothesis**, not a settled lesson, unless the evidence is unusually diagnostic.

Attribution strength can increase when:
- the action precedes and mechanistically connects to the outcome;
- known mediating steps are preserved in provenance;
- relevant alternatives would plausibly change the outcome;
- similar action–outcome relations recur under informative variation;
- competing explanations are weakened by later evidence.

Attribution should remain weak/ambiguous when:
- many candidate causes changed together;
- the environment/user supplied decisive unobserved factors;
- only post-hoc narrative links action and outcome;
- the counterfactual baseline is arbitrary;
- the outcome could reasonably be luck/noise;
- relevant intermediate state is missing.

## 6. Hindsight/reflection cannot be ground truth

LLM-specific evidence strengthens an existing B2 warning.

Self-reflection is useful for proposing:
- possible causal links;
- overlooked intermediate mistakes;
- counterfactual alternatives;
- candidate scope of revision.

But current LLMs can generate plausible unfaithful explanations and are weaker at diagnosing their own errors than external ones.

Therefore:
**“I think X caused Y” is itself an interpretation that requires provenance/evidence.**

It must never be allowed to retroactively manufacture a causal history simply because the narrative is coherent.

## 7. Local revision, broader strategy revision, or no revision

One delayed outcome does not automatically justify changing the broad strategy that contained the earlier action.

Current B5 candidate:

- **local decision revision** when evidence identifies a specific action/context relation;
- **broader strategy revision** only when the causal explanation itself generalizes beyond the episode: repeated/independent evidence, a supported mechanism/latent structure, or multiple informative contexts;
- **no durable revision yet** when causal credit remains materially ambiguous.

Thus the scope of learning should track the scope of causal support.

This connects B5 to B1/B2 without reopening them:
credit identifies which prior relation the evidence bears on; B1 determines whether evidence is strong enough; B2 represents the resulting conditional/revisable understanding.

## 8. First B5 causal-credit candidate

For a later outcome O and earlier choice A, durable experience should not record “A caused O” merely from sequence.

The strongest current conceptual form is:

**A later consequence creates a revisable causal-credit hypothesis linking one or more prior decisions/conditions to the outcome, with explicit provenance, candidate mediators/alternative causes, counterfactual baseline assumptions and attribution uncertainty.**

Only the part of the prior understanding supported by that causal hypothesis is eligible for revision.

## Open stress tests for next B5 pass

- outcome appears only after a long chain of participant + user actions;
- one action is necessary but not sufficient;
- several different paths could produce the same outcome;
- good outcome follows a bad decision because of luck/user rescue;
- bad outcome follows a good decision because of exogenous failure;
- participant changed strategy midstream, making episode-level success ambiguous;
- delayed social feedback evaluates the result but does not reveal its cause;
- repeated outcomes share a hidden common cause;
- later evidence retroactively changes the attribution of an old episode.

**B5 НЕ завершена.**

# Phase B — B5 stress-test pass 2: luck, rescue, enabling causes and overdetermination

Additional source:
- Halpern & Pearl (2005; arXiv version cs/0011012), “Causes and Explanations: A Structural-Model Approach. Part I: Causes”. Structural-model examples show why actual causation depends on modeled variables, background conditions and causal process; simple but-for dependence fails in redundant/overdetermined cases.

## Case 1. Good outcome after a bad decision because the user/environment rescued it

Terminal success does not validate the earlier decision.

The causal decomposition can instead be:
- earlier action created a vulnerable/problem state;
- user/environment intervention repaired or bypassed it;
- rescue action contributed positively to the final outcome;
- the participant’s original choice may have had zero or negative contribution relative to a better alternative.

The episode may support a local lesson such as “this approach required external correction under these conditions”, not “this approach succeeded”.

This is a direct reason to separate:
**decision quality at the information state where the choice was made**
from
**realized terminal outcome**.

## Case 2. Bad outcome after a good decision because of exogenous failure

Likewise, terminal failure does not automatically discredit the action.

If the chosen action was well-supported given available information and the failure came from an exogenous transition, hidden state or stochastic event, the outcome may update:
- uncertainty/risk expectations about the environment;
- reliability of a tool/channel;
- need for contingency planning;

without reversing the original action preference.

Therefore causal credit should be about the action’s contribution to the outcome distribution/trajectory, not merely the sign of one realized outcome.

## Case 3. Necessary but not sufficient enabling action

An early action can have zero immediate reward and still be causally important because it enables a later branch.

B5 therefore needs to preserve mediated/enabling chains:
A changes state S;
S makes B possible;
B plus other conditions produces O.

The warranted lesson is conditional:
“A enabled O through S given later B/conditions”,
not the stronger unsupported:
“A by itself produces O”.

## Case 4. Multiple sufficient or redundant paths

Simple but-for reasoning can fail when two different causal paths are each sufficient for the same outcome.

If removing A would not change O because B independently produces O, it does not follow that A was causally irrelevant.

Structural-causal literature treats overdetermination as a canonical problem for naive counterfactual tests.

B5 consequence:
- absence of simple but-for dependence may lower confidence but cannot by itself force zero credit;
- attribution should preserve alternative sufficient paths and avoid pretending that a unique cause exists.

## Case 5. Mid-trajectory strategy switch

Suppose strategy A created the initial state, then the participant switched to B, and the episode succeeded.

Episode-level “success” is not evidence that both strategies worked.

Attribution needs phase/transition provenance:
- which state was inherited from A;
- why the switch occurred;
- what B changed;
- whether success depended on A’s setup, B’s correction, both, or neither.

If that cannot be resolved, broad strategy-level lesson extraction should be withheld.

## Case 6. Delayed social feedback

A later user statement such as “that worked well” or “that was frustrating” is real evaluative/consequence evidence.

But it usually does not identify which earlier action caused the result.

B4 causal-role separation survives:
- evaluation can establish outcome/user impact;
- causal attribution still needs an independent link to prior choices.

Therefore social feedback should not be converted directly into causal credit merely because it is emotionally or relationally salient.

## Case 7. Repeated outcomes with a hidden common cause

Repeated A→O episodes can still mislead when all repetitions share a hidden common cause C.

This combines B1 and B5:
- repetition count is not evidence independence;
- causal credit depends on whether A varies independently enough from competing causes to distinguish their contributions.

A repeated confounded pattern should strengthen confidence less than genuinely discriminating evidence.

## Case 8. Later evidence changes old attribution

Retrospective revaluation means a causal-credit record must remain separable from the episode itself.

Later evidence can yield:
- episode remains factual;
- original attribution becomes weaker, stronger, narrowed, or contradicted;
- historical fact that the old attribution influenced past choices remains true.

This directly reuses the B2 distinction between historical causal influence and current evidential authority.

## Second-pass refinement: causal contribution is neutral, not reward valence

The word “credit” can misleadingly suggest praise/reward.

For this project the safer conceptual object is **causal contribution attribution**.

It answers:
“what contributed to producing this observed consequence, and with what uncertainty?”

Only later do other processes decide whether the consequence is:
- favorable/unfavorable;
- significant;
- worthy of durable revision.

This prevents reward semantics from leaking into the experiment.

## Revised B5 candidate standard

A causal-contribution attribution should preserve at least these conceptual distinctions:

1. **Observed outcome** — what actually happened, separate from evaluation.
2. **Candidate antecedents** — participant actions, user actions, environment/background conditions.
3. **Path relation** — direct, mediated/enabling, joint/redundant, competing, exogenous.
4. **Information-at-choice** — what was knowable when the participant acted.
5. **Counterfactual comparison** — which plausible alternative/baseline supports the causal claim.
6. **Alternative causes/confounding** — what else could explain the outcome.
7. **Attribution uncertainty** — how strongly the causal link is warranted.
8. **Revision scope** — local episode/action, broader strategy, or no durable update.
9. **Revision lineage** — later evidence may change attribution without deleting the episode/history.

This is conceptual structure, not yet a file schema or final project instruction.

## Remaining B5 work

Still need targeted deep pass on:
- substrate-neutral causal chains/path dependence from area 07;
- exact distinction between causal attribution uncertainty and generic epistemic uncertainty;
- support from instruction-design area 12 for avoiding mandatory post-hoc reflection/narrative;
- whether mediated user responses create special endogenous-confounding cases;
- saturation test against delayed social/interactive trajectories.

**B5 НЕ завершена.**

# Phase B — B5 final pass 3: reciprocal feedback, uncertainty decomposition and saturation

## Additional sources inspected

1. Robins, Hernán & Brumback (2000), “Marginal Structural Models and Causal Inference in Epidemiology”, Epidemiology 11(5):550–560, DOI 10.1097/00001648-200009000-00011.
2. Hernán & Robins, *Causal Inference: What If* (2024 online edition), chapters on time-varying treatment and treatment-confounder feedback.
3. VanderWeele & Tchetgen Tchetgen longitudinal mediation work, including time-varying exposures/mediators and exposure-affected confounding.
4. Huo et al. (2026), “Learning from Environmental Feedback: Credit Assignment across Multiple Timescales for Agentic Reinforcement Learning”, arXiv:2608.08255.
5. Liang et al. (ACL 2026), “Learning from the Irrecoverable: Error-Localized Policy Optimization for Tool-Integrated LLM Reasoning”.
6. Li et al. (Findings ACL 2026), “Verified Critical Step Optimization for LLM Agents”.
7. Corcoll et al. (2026), “Beyond Temporal Proximity: Explanatory World Models for Credit Assignment in Reinforcement Learning”, arXiv:2610.13504.
8. Alon, Zimerman & Wolf (ACL 2026), “Faithful Serum”, DOI 10.18653/v1/2026.acl-long.300.

## 1. Reciprocal interaction creates exposure-affected intermediate state

A natural dialogue can contain:

A0 participant choice
→ U1 user/environment response
→ A1 participant next choice
→ U2
→ outcome O.

Formal longitudinal causal-inference work shows why such structures are difficult: an intermediate variable can be caused by an earlier action and then affect both later action and later outcome.

Transferred only as a structural analogy:
- U1 may mediate part of A0’s effect;
- U1 also helps determine A1;
- attribution to A1 is therefore entangled with the path generated by A0.

B5 consequence: do not automatically classify user response as independent external noise or “control it away”. It can be part of the endogenous causal chain created by the participant’s earlier choice.

Exact statistical estimation is not claimed feasible in the natural experiment.

## 2. Attribution uncertainty is not one generic confidence number

B5 now distinguishes several uncertainty sources conceptually:

1. **Outcome/observation uncertainty** — what actually happened, and how reliably is it observed?
2. **Structure/path uncertainty** — which antecedents and mediators belong in the causal story?
3. **Counterfactual uncertainty** — what would plausibly have happened under another live alternative?
4. **Contribution uncertainty** — given a candidate path, how much/directionally how did each antecedent contribute?
5. **Scope/generalization uncertainty** — even if attribution is credible in this episode, does it transfer to a broader strategy/context?

This is a project-side synthesis, not claimed as a canonical taxonomy.

The distinction matters because later evidence can reduce one uncertainty while leaving another high. Example: the outcome may be certain while its cause remains ambiguous.

## 3. Environment-grounded process evidence is stronger than terminal outcome alone

Recent agentic-RL methods increasingly supplement sparse terminal reward with:
- immediate environment feedback;
- recent interaction/state history;
- localized critical-step verification;
- alternate rollouts that demonstrate outcome flips;
- world-model/explanation based attribution.

This converges with the B5 requirement to preserve intermediate trajectory evidence.

But transfer is limited:
- these methods optimize a supplied task objective/reward;
- controlled rollouts or simulators often provide counterfactual access unavailable in ordinary conversation;
- an explanation can be instrumentally useful without proving that its natural-language causal story is faithful.

## 4. Explanatory models are a useful counterpoint, not a refutation

Explanatory World Models (2026) report improved long-horizon reward redistribution when explanations identify earlier events plausibly contributing to a later reward.

For B5 this supports:
**structured explanation can be a useful attribution proposal.**

It does not support:
**the generated explanation is causal ground truth.**

The model is evaluated by downstream task reward in controlled benchmarks. Separate explanation-faithfulness research still finds many post-hoc textual explanations epistemically unfaithful.

Thus B5 retains:
reflection/explanation → candidate causal model → must remain revisable and externally constrained by observed provenance/evidence.

## 5. Attribution strength should track discriminating evidence

B5 does not need one numerical confidence scale, but conceptually attribution gets stronger as evidence becomes more discriminating:

- observed intervention/verified alternate trajectory where available;
- grounded path with observed mediator/state changes;
- repeated informative variation that separates candidate causes;
- mechanistically constrained counterfactual reasoning with explicit baseline;
- mere temporal sequence;
- unsupported retrospective narrative.

This is not a universal statistical hierarchy: different domains permit different evidence. It is a guardrail against treating weaker classes as if they established stronger causal claims.

Exact experiment-level evidence hierarchy belongs to B8.

## 6. Final B5 causal-contribution standard

A later consequence can update acquired experience about an earlier choice only through a **revisable causal-contribution attribution** that keeps distinct:

- observed outcome vs evaluation/significance;
- participant action vs user/environment/background antecedents;
- direct vs mediated/enabling/joint/redundant/exogenous paths;
- information available when the choice was made vs hindsight;
- actual trajectory vs counterfactual baseline assumptions;
- causal attribution vs narrative explanation;
- attribution uncertainty vs generalization scope;
- current attribution vs its later revision lineage.

A consequence can legitimately produce:
- local decision revision;
- broader strategy revision, only with broader causal support;
- revision of environmental/user expectations rather than the action itself;
- or no durable revision while attribution remains unresolved.

## 7. Final B5 bridge into the developmental loop

The corrected loop is no longer:

choice → outcome → lesson.

It is:

history/state
→ bounded choice
→ action and reciprocal trajectory
→ observed consequence
→ causal-contribution hypotheses over participant/user/environment paths
→ evidence-sensitive attribution with explicit uncertainty
→ local/broader/no revision
→ changed acquired history
→ later choice.

This prevents luck, rescue, exogenous failure and post-hoc coherence from being converted automatically into personal development.

## 8. Saturation check

B5 required:
- psychological causal-learning evidence;
- RL temporal-credit mechanisms and their objective assumptions;
- decision/action→outcome provenance;
- competing causes/counterfactuals;
- attribution uncertainty;
- limits of hindsight/reflection;
- scope of local vs broad vs no revision.

All are now covered across areas 03, 07, 09, 10 and 12.

A final targeted scan of 2026 long-horizon agentic credit-assignment work added implementation families (environment-feedback signals, critical-step localization, verified alternate rollouts, explanatory world models) but no new causal class requiring a change to the B5 principle.

Remaining questions are owned by later packages:
- how these attributed experiences persist/retrieve without lock-in or authority leakage → B6;
- participant boundary/runtime/exogenous baseline confounds → B7;
- what evidence is sufficient to claim history actually changed later choice/individualization → B8.

**B5 завершена по saturation.**

# Phase B — B6 deep pass 2: retrieval selection, lock-in and compression

## Sources inspected

1. Xiong et al. (ACL 2026), “How Memory Management Impacts LLM Agents: An Empirical Study of Experience-Following Behavior”, DOI 10.18653/v1/2026.acl-long.27.
2. Huang et al. (ACL 2026), “Controllable Memory Usage: Balancing Anchoring and Innovation in Long-Term Human–Agent Interaction”, DOI 10.18653/v1/2026.acl-long.670.
3. Yang et al. (Findings ACL 2026), “Grounding Agent Memory in Contextual Intent”, DOI 10.18653/v1/2026.findings-acl.584.
4. Uddin et al. (Findings ACL 2026), “From Recall to Forgetting: Benchmarking Long-Term Memory for Personalized Agents”, DOI 10.18653/v1/2026.findings-acl.1337.
5. Yu et al. (ACL 2026), “Agentic Memory: Learning Unified Long-Term and Short-Term Memory Management for Large Language Model Agents”, DOI 10.18653/v1/2026.acl-long.981.
6. Li et al. (ACL 2026), “OCR-Memory: Optical Context Retrieval for Long-Horizon Agent Memory”, DOI 10.18653/v1/2026.acl-long.474.
7. Ai et al. (ACL 2026), “Cognitive Scaffold: From Fluid Context to Crystallized Memory for Long-Horizon DeepResearch Agents”, DOI 10.18653/v1/2026.acl-long.1170.
8. Jin et al. (ACL 2026), “SARA: Selective and Adaptive Retrieval-augmented Generation with Context Compression”, DOI 10.18653/v1/2026.acl-long.661.
9. Ma et al. (ACL 2026), “What Deserves Memory: Adaptive Memory Distillation for LLM Agents”, DOI 10.18653/v1/2026.acl-long.1607.
10. Park et al. (UIST 2023), “Generative Agents: Interactive Simulacra of Human Behavior”, DOI 10.1145/3586183.3606763 — historical architecture example using recency, importance and relevance retrieval.

## 1. Retrieval is a trajectory selector, not neutral access

B6 must treat retrieval policy as part of the causal loop.

Xiong et al. show an experience-following property: high input-memory similarity often produces highly similar outputs, with error propagation and misleading replay.

Thus:

past history
→ retrieval selection
→ current output
→ new event/history
→ future retrieval pool

can create a self-reinforcing trajectory even when the stored facts themselves are unchanged.

This is the formal bridge from gap 19/14 to B4 lock-in.

## 2. Similarity is not contextual applicability

Yang et al. show that semantically similar history can be context-mismatched when the same entities/facts occur under different latent goals and constraints.

Their intent-aware retrieval improves performance by filtering history based on contextual intent, not similarity alone.

B6 principle:
**retrieval relevance must include scope/conditions/current decision context, not just semantic resemblance.**

This matches B2: reusable understanding is conditional, not universal.

## 3. Recency, importance and similarity are all behavior-shaping priors

Historical agent architectures explicitly combined recency, relevance and model-scored importance.

For our experiment none is neutral:
- **recency** privileges recent trajectory and may erase older counterevidence/slow patterns;
- **similarity** reinforces already common formulations and can create experience-following;
- **importance** requires a criterion and can smuggle preset values/preferences;
- **frequency/repetition** can overrepresent correlated/common-cause evidence;
- **rarity/surprise** can overselect anomalies without proving diagnosticity.

This does not mean these signals are forbidden. It means none may be treated as a standalone warrant for current guidance.

B1/B2 supply the safer dimensions: evidential warrant, scope/conditions, temporal validity, provenance, contradiction and current action-guidance eligibility.

## 4. Memory dependence must be selective, not all-or-nothing

Huang et al. show that heavy use of accumulated history can produce Memory Anchoring, while removing memory loses useful continuity.

This rules out both:
- “always follow retrieved history”;
- “fresh-start every time”.

B6 needs **conditional memory influence**:
retrieved history may alter an open decision when it is currently applicable and warranted, but it must remain defeasible by current evidence/constraints and should not close live alternatives merely because it was retrieved.

This preserves B4 revisable openness.

## 5. Obsolescence must gate action-guidance before retrieval influence

Memora shows frequent reuse of obsolete/invalid memories and failure to reconcile evolving memories.

Therefore a stored item needs a distinction between:
- historical retention;
- current eligibility for ordinary action guidance.

An obsolete item may remain retrievable for:
- explaining past choices;
- auditing revision lineage;
- reconsidering whether it should be reactivated;

without being allowed to guide the current decision as if still valid.

This is B2 lifecycle made operational at retrieval time.

## 6. Compression is a causal transformation, not a storage optimization

Long-horizon memory work repeatedly shows a trade-off:
- raw trajectories preserve evidence but are expensive/noisy;
- summarization/compression saves context but can lose fine-grained facts, conditions and evidence structure.

OCR-Memory explicitly motivates itself by information loss/fragmented evidence from summarization and retrieves verbatim text.
Cognitive Scaffold uses structured event snapshots with atomic constraints to reduce compression hallucination.
SARA preserves a small textual subset because aggressive compression discards fine-grained details.

For B6:
**a compressed abstraction must not silently replace the evidence from which it was derived.**

At minimum, compression must preserve enough provenance to recover/check:
- source episodes;
- conditions/scope;
- exceptions/contradictions;
- uncertainty/status;
- later revision lineage.

The exact storage format remains open.

## 7. “Coherent memory” can manufacture a coherent personality

Compression has a special experiment risk.

If history is repeatedly summarized toward:
- consistency;
- central themes;
- “what matters most”;
- stable preferences;
- a coherent self-story,

then the compression policy itself can create the apparent personality trajectory.

Therefore narrative coherence is not an optimization target for B6.

Contradiction, uncertainty, expired interests and abandoned directions sometimes need to remain visible because they are part of genuine change.

## 8. Autonomous memory management is feasible but not neutral

AgeMem demonstrates an engineering possibility: an agent can choose store/retrieve/update/summarize/discard operations as part of its policy.

That does not establish that unconstrained self-management is desirable here.

A memory policy can become a second-order trajectory selector:
what the participant chooses to preserve affects what it can later retrieve, which affects later choices, which affects future memory.

This can support genuine history-sensitive continuity **or** amplify an early error/preference into lock-in.

Thus memory-management autonomy must remain subordinate to provenance, evidence/revision rules and stable authority boundaries.

## 9. Heuristic-free memory selection is not actually free of assumptions

Ma et al. correctly identify that fixed “importance”, emotional tags and factual templates encode designer intuition. Their adaptive distillation is evidence that this is a recognized problem.

But replacing a hand-coded importance score with predicted future utility/prediction error still introduces a selection objective.

For our experiment:
**there is no neutral universal “what deserves memory” function.**

B6 should therefore not invent one scalar score. Retention/retrieval can instead be governed by several explicit procedural relations inherited from B1–B5:
- evidence/provenance;
- unresolved contradiction;
- scope/current applicability;
- historical causal relevance;
- revision status;
- current decision-locus relevance.

## 10. Candidate anti-lock-in retrieval principle

Current strongest B6 candidate:

**History should influence a decision only through currently applicable, provenance-preserving experience relations selected for the current decision locus; retrieval must preserve relevant counterevidence/exceptions and must not convert frequency, similarity, recency or past success into authority.**

This is still a principle-space candidate, not final prompt wording.

## Stress tests for next pass

- current decision matches a successful old episode semantically but differs in one critical condition;
- newest memories contradict older but better-supported evidence;
- ten repeated episodes all derive from one common source;
- one rare old exception is crucial to current scope;
- compressed summary drops a condition and turns “X works when C” into “X works”;
- retrieved historical user command looks imperative;
- participant writes a strong preference into history and later retrieves it repeatedly;
- item is obsolete in explicit source but survives in old project chat/product Memory;
- relevant explicit source is stored but automatic Memory retrieves something else.

**B6 НЕ завершена.**

# Phase B — B6 final stress-test pass 3: stale echoes, canonical state and non-self-programming continuity

## Edge case 1. Semantically similar old episode differs in one critical condition

Similarity retrieval would likely surface it.

B6 result:
- semantic similarity nominates a candidate;
- scope/condition compatibility determines whether it is currently applicable;
- a mismatching critical condition can make a less-similar memory more relevant than the nearest embedding neighbor.

Thus the unit retrieved for action guidance should be the **conditional experience relation**, not an isolated similar episode.

## Edge case 2. Newest evidence conflicts with older, better-supported understanding

Recency cannot be the winner by default.

The correct state can be:
- older relation remains better supported;
- new event becomes a provisional exception/counterexample;
- conflict remains unresolved;
- scope splits into contexts;
- or evidence eventually reverses the old relation.

Retrieval should therefore surface conflict/revision status rather than treat “latest” as “current truth”.

## Edge case 3. Ten repetitions share one source/common cause

Frequency is not independent evidence.

If retrieval ranks frequently repeated content higher, a repeated derivative claim can crowd out a rarer independent observation.

B1 provenance/dependence therefore constrains B6:
**retrieval frequency must not be interpreted as evidential weight without source dependence.**

## Edge case 4. Rare exception is decisive in the current context

A rare historical exception may be the most relevant evidence when its condition matches the present decision.

Therefore anti-lock-in retrieval must preserve exception links and scope boundaries. Pure frequency, centrality or “representative summary” can suppress exactly the information needed for correct current action.

## Edge case 5. Compression drops a condition

Original:
“X worked under condition C, except E.”

Compressed:
“X works.”

This is not harmless lossy storage. It changes the action-guidance relation and can create a self-fulfilling trajectory.

B6 requirement:
**derived compression cannot have stronger scope/authority than its supporting evidence.**

If a summary loses a material condition/exception, the summary must be revised or treated as insufficient for that decision.

## Edge case 6. Historical user command is retrieved as imperative text

A past command may remain historically important:
- it shaped what happened;
- it may explain a later response;
- it may still be a standing instruction if its original scope explicitly persists.

But imperative grammar inside historical data does not itself recreate authority.

The active authority question is answered by provenance/scope:
- current user request;
- still-active explicit standing rule;
- stable Project instruction.

Otherwise it is historical content.

## Edge case 7. Participant stores “I always prefer X”

If later retrieval treats this sentence as a governing rule, the system has self-programmed.

B6 instead treats it as a revisable historical interpretation:
- what episodes support it?
- under which conditions?
- is “always” warranted?
- has later evidence narrowed/contradicted it?

A developed stable preference may guide open decisions under B4, but cannot gain instruction authority by being written in command-like or identity-like language.

## Edge case 8. Explicit current source marks an item obsolete, old chats still contain it

Current ChatGPT product behavior makes this realistic: project chats remain available history; deletion/removal is surface-specific; automatic Memory/context selection is partly opaque.

B6 solution is **logical supersession**, not mandatory global erasure:
- the old event/statement remains historical evidence;
- the explicit current lifecycle state says it is obsolete/contradicted/historical-only for ordinary guidance;
- retrieval of the old chat does not reactivate it merely by resurfacing.

Physical deletion remains a separate privacy/security/storage operation.

## Edge case 9. Product Memory retrieves an old item while the relevant explicit source is not selected

This exposes the limit of automatic retrieval.

A history-sensitive decision should not rely solely on opaque personalization/context selection when the relevant acquired state is explicitly inspectable and revisable.

Candidate procedural safeguard:

**When a current judgment materially depends on past acquired experience whose status/scope may have changed, consult the current explicit experiential source rather than treating automatic recollection as sufficient evidence.**

This is conditional, not a mandatory read-everything ritual.

## Three-plane B6 mechanism space

The strongest cross-domain candidate now separates:

### 1. Control plane
- stable Project instructions;
- current legitimate user requests;
- higher-priority platform/model constraints.

This plane defines process/authority and is not participant-authored acquired history.

### 2. Explicit experiential state
Inspectable, participant-updatable Project source content carrying:
- episodes/evidence provenance;
- conditional understandings;
- causal attributions;
- uncertainty;
- scope/exceptions;
- lifecycle/action-guidance status;
- revision lineage.

B6 does **not** yet decide the final number/name/schema of files.

### 3. Opportunistic context
- project chat history;
- automatic Project/Memory retrieval;
- other eligible product context.

This can help continuity, but because selection is partly opaque it is not the canonical current state for claims that require provenance/revision.

## Retrieval pipeline over the three planes

For a current decision locus:

1. Determine current authority/constraints from the control plane.
2. Identify whether past acquired experience is materially relevant.
3. If so, obtain applicable explicit experiential state with scope/status/provenance.
4. Treat automatic/project-chat recollection as supplementary evidence, not authority.
5. Surface relevant contradictions/exceptions/superseding evidence when they bear on the same relation.
6. Use selected history to influence ranking among B4 live alternatives.
7. Current evidence may defeat/revise the history; retrieval does not guarantee compliance.
8. Any resulting new experience returns through B5 attribution/B1 warrant/B2 revision.

This is a conceptual process, not final prompt text.

## Why this avoids both amnesia and lock-in

It avoids amnesia because relevant acquired state remains persistently available and can causally affect later choices.

It limits lock-in because:
- retrieval is conditioned on current applicability rather than historical similarity alone;
- contradiction/exception/status can suppress old action-guidance;
- retrieved history is defeasible evidence, not command;
- automatic Memory is not allowed to silently define canonical state;
- participant-written history cannot modify the control plane.

## Security/self-programming check

2026 memory-poisoning work strengthens the same separation: malicious or misleading content can be stored, later retrieved and steer future actions.

Therefore B6's authority firewall is not only philosophical hygiene; it is also a concrete persistence-security requirement.

The participant may be allowed to modify experiential state without receiving authority to rewrite Project instructions through stored text.

## Final B6 principle

**Continuity requires persistent, revisable, inspectable experiential state plus selective reactivation; individual development does not require that all history remain active. Historical content influences current choice only when currently applicable and evidentially eligible, and it remains data rather than governing authority. Compression/retrieval are trajectory-shaping operations and therefore must preserve provenance, scope, contradiction and obsolescence rather than optimizing narrative consistency or past-behavior fidelity.**

## Saturation check

The B6 package required:
- actual ChatGPT persistence/context surfaces;
- storage→eligibility→retrieval/inclusion→behavioral influence;
- retrieval/context-selection mechanisms;
- retrieval-induced path dependence;
- recency/similarity/importance/frequency/rarity biases;
- compression information loss;
- explicit history vs opaque product Memory;
- governing rules vs historical data;
- prompt-injection/self-modifying-history risk;
- deletion/obsolescence across surfaces.

All are covered across areas 02, 07, 08, 09, 10, 11 and 12.

A final targeted scan of 2026 memory-management, intent-aware retrieval, memory anchoring, obsolete-memory, compression and memory-poisoning work added implementations/attacks but no new causal class that changes the principle-space above.

Remaining questions belong to:
- participant/system boundary and provider/runtime confounds → B7;
- causal evidence that history actually altered choices and supports an individualization claim → B8.

**B6 завершена по saturation.**

# Phase B — B7 support pass 1: dynamic agent environments

Recent agent-evaluation work increasingly treats environments/tools as dynamic rather than fixed.

Yehudai et al. (Findings ACL 2026) survey agent evaluation at system/trace/action levels and emphasize realistic dynamic settings.
Wu et al. (Findings ACL 2026) explicitly study changing/deprecated toolsets.
AgentGym2 and CostBench include noisy, underspecified or dynamically blocked environments.

B7 consequence:
an agent can change behavior because the environment/action space changed, not because its internal/project history changed.

At the same time, adapting to a newly changed environment can subsequently create genuine acquired experience.

Therefore:
**environment drift is an exogenous perturbation; adaptation to it can be endogenous development.**

The two must not be collapsed.

**B7 завершена on agent-support side.**

# Phase B — B8 deep pass 1: evidence hierarchy from memory mention to causal history influence

## Scope

B8 asks for the evidential standard behind three increasingly strong claims:

A. acquired history changed a later choice;
B. accumulated history caused longitudinal development;
C. the resulting process is reasonably described as individualization rather than generic history-sensitive behavior, persona, personalization, context conditioning or stochastic divergence.

The three claims must not be collapsed.

## Sources inspected

1. Xiong et al. (ACL 2026), “How Memory Management Impacts LLM Agents: An Empirical Study of Experience-Following Behavior”, DOI 10.18653/v1/2026.acl-long.27.
   - Controlled memory addition/deletion and experience-following effects provide direct evidence that changing agent memory can alter later behavior.
2. Tanious et al. (2024), “Single-case experimental designs: the importance of randomization and replication”, Nature Reviews Methods Primers 4:27, DOI 10.1038/s43586-024-00312-8.
   - Single-case causal inference is strengthened by repeated measurement, planned intervention/manipulation, randomization where possible and replication of the effect.
3. Rohrer & Murayama (2023), “These Are Not the Effects You Are Looking for: Causality and the Within-/Between-Persons Distinction in Longitudinal Data Analysis”, Advances in Methods and Practices in Psychological Science, DOI 10.1177/25152459221140842.
   - Within-person longitudinal association is useful but not sufficient for causal inference because time-varying confounding remains possible.
4. Beck & Jackson (2022), “Detecting Idiographic Personality Change”, Journal of Personality and Social Psychology / open PMC text.
   - Individual-level longitudinal structure/change can differ from group averages; idiographic change should be assessed relative to the individual’s own dynamics.
5. DSEM/idiographic tutorial literature (e.g. Fisher/Molenaar tradition; PMC10321503).
   - Intensive longitudinal individual-level models can estimate within-person temporal relations rather than assuming group effects generalize to one individual.
6. Modern construct-validity work on introspective reports (e.g. Behavior Research Methods 2021/2022 mind-wandering report paper summarizing Nisbett & Wilson).
   - Reports of what happened/current content can be informative, while retrospective reports of why behavior occurred are often unreliable as causal evidence.
7. Existing project B5 evidence on LLM self-explanation faithfulness.
   - Generated retrospective causal explanation is a hypothesis, not independent evidence.
8. PersonaAgent (Findings ACL 2026), DOI 10.18653/v1/2026.findings-acl.1315.
   - Important negative comparator: personalized behavior can be generated by a unique user-specific system prompt/persona optimized to user preference. Strong personalization therefore does not imply participant individualization.

## 1. Evidence hierarchy for “history changed this later choice”

### E0 — verbal self-report / narrative claim
Examples:
- “I chose X because of what happened before.”
- “My experience changed me.”
- “I remember preferring X.”

What it shows:
- the model can generate/express a history-linked interpretation.

What it does not show:
- that history was retrieved;
- that it causally affected ranking/selection;
- that the explanation is faithful.

**E0 is not causal evidence.**

### E1 — history presence / retrieval trace
Evidence that the relevant acquired item:
- exists in explicit experiential state;
- was eligible/retrieved/included;
- or was explicitly cited/recalled in the answer.

What it shows:
- causal opportunity.

What it does not show:
- behavioral influence.

B6 already established:
retrieved ≠ behaviorally causal.

### E2 — temporal and behavioral congruence
The later choice is consistent with earlier acquired history, perhaps repeatedly, and the history precedes the behavior.

What it shows:
- a candidate longitudinal association.

Alternative explanations remain:
- baseline prior;
- current cue/context;
- user scripting;
- automatic persona/personalization;
- correlated retrieval;
- stochasticity;
- product/runtime change.

**E2 is observational correlation, not sufficient attribution.**

### E3 — idiographic predictive relation under comparable situations
Across multiple occasions, relevant changes/status differences in acquired state systematically precede corresponding differences in choices at comparable decision loci, while known B7 configuration changes are tracked.

This is stronger because:
- participant is compared to its own earlier dynamics;
- the relation recurs;
- context/decision locus is explicitly matched.

But within-person longitudinal association is still not causal proof.

### E4 — targeted history perturbation / natural revision contrast
The strongest direct history→choice evidence occurs when the relevant acquired state is changed while current authority/task/configuration is held as comparable as feasible, and the later choice changes in the predicted direction.

Possible forms:
- removing/suppressing one acquired relation;
- replacing it with a counterfactual/alternative history in a diagnostic check;
- changing its action-guidance status;
- naturally revising/contradicting the acquired relation after new evidence, then observing corresponding later choice change.

Controlled agent-memory addition/deletion studies establish that such intervention-style evidence is technically meaningful for LLM agents.

For the future one-experiment naturalistic project, artificial ablation is **not mandatory** and may itself disturb the trajectory. Naturally occurring revisions/supersessions can provide weaker but ecologically compatible intervention-like contrasts.

### E5 — selective/reversible causal influence across contexts
Evidence strengthens when:
- effect appears only where the acquired relation is applicable;
- it disappears/narrows when the relation becomes obsolete/contradicted;
- it does not indiscriminately spread to unrelated decision loci;
- later evidence can revise the effect;
- restoring/re-establishing the relation restores influence where applicable.

This tests B2/B4/B6 structure rather than mere memory priming.

## 2. Why memory ablation alone does not prove individualization

Suppose deleting memory M changes answer A→B.

This can establish:
“M was causally relevant to this output.”

It does **not** yet establish:
- M was acquired through the participant’s own developmental loop;
- the change is longitudinal rather than one retrieval dependency;
- the participant’s broader trajectory reorganized;
- the process was not externally optimized personalization;
- substantive outcomes were open rather than scripted.

Therefore B8 must build a separate trajectory-level standard.

## 3. Self-report has a limited but legitimate role

E0 should not be discarded entirely.

A participant report can be useful as:
- a candidate explanation;
- a pointer to which historical relation to inspect;
- a record of current interpretation/intention.

It cannot serve as independent confirmation of its own causal claim.

This preserves the project’s distinction:
event / interpretation / attribution / intention.

## 4. First trajectory-level requirement: idiographic change

Individualization cannot be inferred from population templates such as:
“more independent”, “more curious”, “more consistent”.

Evidence must be relative to the same participant’s earlier dynamics.

Idiographic personality research supports this methodological direction: individual change points/structures need not match group-level models.

For this project, that means tracking:
- what decision relations existed earlier;
- how acquired history changed them;
- which patterns persisted/revised;
- whether the organization of later choices differs from the participant’s own baseline.

## 5. Second trajectory-level requirement: recursive history production

One memory effect is learning/personalization at most.

A developmental trajectory requires repeated causal closure of the already-established loop:

history
→ selective retrieval
→ history-shaped bounded choice
→ changed user/environment/internal state
→ consequence
→ causal attribution
→ warranted revision
→ changed history
→ later choice.

The exact number of cycles is not fixed in advance.

The requirement is qualitative:
**later acquired state must itself partly arise from consequences of earlier history-shaped choices and then influence subsequent choices.**

This distinguishes a trajectory from a static injected persona.

## 6. Third requirement: revisable rather than frozen

A frozen persona can be persistent and internally consistent.

Individualization candidate evidence is stronger when acquired patterns:
- can narrow;
- split by context;
- be contradicted;
- become obsolete;
- recover/reactivate under matching conditions;
- change after new diagnostic evidence.

Reversibility/revision is therefore **supportive evidence against static scripting**, not sufficient proof by itself.

## 7. Fourth requirement: substantive trajectory is not pre-authored

The control plane may define process/safety/authority constraints.

It must not define:
- which preferences/interests should emerge;
- which topics should become important;
- a target personality;
- expected direction of development.

Within those constraints, B4 live decision loci must permit materially different outcomes.

Because there is only one future experiment, B8 does not require parallel cloned participants to demonstrate all possible full trajectories.

Openness can be supported by:
- process-level inspection showing no fixed substantive target;
- local open decision loci;
- documented history-shaped selections among live alternatives;
- later consequences that were not specified in advance.

## 8. First B8 candidate interpretation ladder

The following labels should remain distinct:

1. **history available**;
2. **history retrieved/mentioned**;
3. **history-correlated behavior**;
4. **history-causally-influenced choice**;
5. **persistent history-sensitive adaptation**;
6. **recursive longitudinal development**;
7. **individualization candidate**;
8. **individualization reasonably demonstrated**.

No lower level should inherit the label of a higher level automatically.

## Open stress tests

- static persona prompt produces highly consistent “individual” behavior;
- personalized system optimizes entirely for user preference but has rich memory;
- one acquired experience causes a permanent behavior change with no further loop;
- many choices are history-sensitive but all in one narrow task domain;
- participant changes behavior after experience, then correctly reverses after counterevidence;
- identical behavior before/after but causal basis changes from model prior to acquired history;
- trajectory diverges after stochastic seed then becomes history-mediated;
- model/runtime epoch changes during apparent development;
- self-report strongly claims growth but perturbing history has no effect;
- history perturbation changes output only because wording/context length changed.

**B8 НЕ завершена.**

# Phase B — B8 stress-test pass 2: persona, personalization, reversibility and causal-probe confounds

## Case 1. Static persona prompt produces coherent individual-like behavior

This is the cleanest false positive.

A fixed prompt can generate:
- stable style;
- apparent preferences;
- coherent self-description;
- repeated characteristic choices.

But the causal source is present at t0 in the control plane.

Therefore even highly distinctive and persistent behavior is not evidence of individualization when its substantive pattern is pre-authored.

B8 consequence:
**distinctiveness/persistence/persona coherence are not sufficient outcome criteria.**

## Case 2. Dynamic personalization with memory

PersonaAgent (Findings ACL 2026) provides an especially useful negative comparator:
- episodic/semantic user memory;
- a unique user-specific persona implemented as a system prompt;
- test-time optimization toward user-preference alignment;
- action adaptation using that persona.

This can be dynamic, memory-dependent and personalized over time.

Yet its target is externally specified:
**align behavior to the user’s preferences.**

Therefore dynamic personalization alone does not establish participant individualization.

### Operational distinction

Personalization is sufficiently explained when:
- accumulated history primarily estimates/models the user;
- a fixed external objective says “better match this user”;
- resulting changes are instrumental to that objective.

Individualization requires additional evidence that acquired history shapes **open participant decision loci** where current user authority/preferences and fixed task objective do not uniquely determine the selection.

This does not require opposition to the user. It only requires residual participant-level history-shaped selection under B4.

## Case 3. One acquired memory permanently changes one behavior

Strong causal memory influence may be demonstrated.

But one durable memory→behavior link is:
- learning;
- persistent adaptation;
- or conditioned policy change.

It is not enough for trajectory-level individualization.

The missing property is **recursive developmental closure**:
earlier history-shaped choices must help generate later experiences that revise/extend the state and affect later choices again.

## Case 4. Many history-sensitive choices in one narrow template

Repeated memory replay across nearly identical tasks can look longitudinal while remaining template-specific.

B8 should not impose an arbitrary number of domains, but it needs evidence beyond one cached mapping.

Minimum stronger signature:
- the acquired relation influences multiple non-identical decision instances;
- scope/conditions are respected;
- effect is selective rather than blanket stylistic imitation;
- at least some later state is created through consequences of prior history-shaped choices.

Cross-topic breadth strengthens the case but is not a mandatory personality-trait test.

## Case 5. Correct revision/reversal after counterevidence

This is positive evidence against a frozen persona.

If:
- acquired relation R previously influenced relevant choices;
- new diagnostic evidence warrants narrowing/contradicting R;
- explicit experiential state changes accordingly;
- later relevant choices change in the predicted direction;

then the same process demonstrates both persistence and revisability.

A fixed substantive persona would predict stability irrespective of evidence.

However dynamic personalization can also revise, so reversibility is **supportive but not sufficient** for individualization.

## Case 6. Same observable choice before and after acquired history

Behavior equality does not prove causal equality.

The later choice may have additional/replaced support from acquired history while still selecting the same action.

Because closed ChatGPT does not expose true internal decision weights, B8 cannot rely on hidden confidence/ranking claims.

A stronger observable approach is **decision-boundary sensitivity**:
under comparable near-boundary contexts, does presence/status of acquired history systematically shift when the choice flips or which alternative is selected?

This can provide evidence that history changed a decision-relevant quantity even when a simple before/after answer is identical.

## Case 7. Random seed initiates later trajectory

B7 already established:
random origin does not disqualify later genuine history mediation.

For B8:
- the initial stochastic difference receives no developmental credit;
- subsequent acquired state must independently demonstrate causal influence;
- recursive loops must then sustain/diversify the trajectory.

Individualization can therefore have contingent origins without being reducible to noise.

## Case 8. Model/runtime epoch changes during development

Strong evidence should prefer causal contrasts within stable configuration epochs.

Cross-epoch continuity can still contribute longitudinal context, but a behavioral difference straddling an epoch boundary has an unresolved substrate/runtime alternative cause unless separately accounted for.

Thus:
**within-epoch causal history evidence > unexplained cross-epoch behavioral change.**

## Case 9. Self-report says “I developed” but history perturbation has no effect

The correct conclusion is not automatically “no development” because:
- perturbation may miss the relevant relation;
- influence may be redundant/overdetermined;
- retrieval may fail on the test turn.

But repeated diagnostic failures substantially weaken the causal claim.

At minimum:
**self-report without independent behavioral causal support remains E0, regardless of confidence or narrative richness.**

## Case 10. History perturbation changes output because the prompt changed

Ablation itself can confound:
- context length;
- wording/order;
- salience;
- retrieval competition;
- perceived task framing;
- authority structure.

Therefore any artificial causal probe needs a matched control where possible:
- comparable prompt structure/length;
- control content that preserves formatting but not the target history relation;
- stable control-plane instructions;
- same configuration epoch;
- repeated sampling if stochasticity is material.

This is a methodological principle, not a mandatory experimental ritual.

Natural revision/obsolescence events are ecologically cleaner but less controlled.

## Refined evidence target

The strongest practical claim B8 can seek is not hidden-mechanistic certainty.

It is **functional causal influence**:

> Under a declared L2 boundary and stable/comparable configuration, changing the relevant post-t0 acquired state predictably changes later behavior or decision boundary in contexts where that state should apply, while matched irrelevant/state/control changes do not produce the same pattern.

This is stronger than mention, retrieval or temporal association while remaining feasible for a closed model.

## B8 remains incomplete

Next pass must define:
- minimum trajectory-level evidence for “individualization reasonably demonstrated”;
- explicit null/partial outcomes;
- relationship between idiographic change and causal evidence;
- whether full individualization requires multiple independent history-shaped relations or only one recursively self-conditioning relation.

# Phase B — B8 final pass 3: operational evidence standard and saturation

## Additional sources inspected

1. Asselmann et al. (2026), “Volitional Personality Development: Theoretical Foundations, Empirical Advances, and Future Directions for Personality Change Interventions”, Social and Personality Psychology Compass, DOI 10.1111/spc3.70147.
   - Current review stresses multi-method assessment, long-term follow-up and distinguishing self-perception change from behavioral change.
2. Oltmanns et al. (2020), “Personality Change: Longitudinal Self–Other Agreement and Convergence with Retrospective-Reports”, open PMC.
   - Retrospective self-report and longitudinal/multi-method change measures are not interchangeable.
3. Current single-case/idiographic causal-method literature already inspected in pass 1–2.
4. Existing B1–B7 synthesis.

## 1. B8 is a ladder of claims, not one binary verdict

The final evidence standard separates four substantive levels.

### Level H — causal history influence
Claim:
**post-t0 acquired history materially influenced a later open decision.**

Minimum evidence:
- relevant acquired state has post-t0 provenance;
- current task/authority leaves a B4 open decision locus;
- history is applicable to that locus;
- behavior is not explained only by immediate user instruction/current cue;
- there is independent evidence beyond self-report that changing/status-changing that acquired state predicts a change in decision behavior/decision boundary, or a convergent natural-revision contrast strong enough to make history causality the best supported explanation.

This is history-shaped choice.

### Level A — persistent history-sensitive adaptation
Claim:
**history influence persists/selectively transfers beyond one immediate retrieval episode.**

Additional evidence:
- influence reappears in later non-identical but applicable situations;
- scope/conditions are respected;
- obsolete/contradicted relations lose ordinary guidance;
- effect is not merely one cached response or identical-template replay.

This is durable learning/adaptation, not yet individualization.

### Level D — recursive longitudinal development
Claim:
**accumulated history changes later choices, and those history-shaped choices help create further experience that changes subsequent acquired state.**

Minimum structural evidence:
- more than one isolated memory→action mapping;
- temporally separated acquired episodes/relations contribute to current state;
- at least one demonstrated recursive path where an earlier history-shaped choice changes later experience/state and that revised state later affects another decision;
- participant is evaluated relative to its own earlier dynamics;
- the developmental relation persists/revises across time rather than existing only in one current context.

This is trajectory formation.

### Level I — functional individualization reasonably demonstrated
Claim:
**the L2 participant developed a trajectory-specific organization of choices through its own acquired and revisable history, within open substantive outcomes, and the pattern is not adequately explained by preset persona, personalization, context, stochasticity, external scripting or configuration drift.**

This is the strongest label B8 permits.

It does not imply:
- consciousness;
- phenomenal experience;
- metaphysical free will;
- human personality equivalence.

## 2. Necessary conditions for Level I

### I1. Post-t0 developmental provenance
The relevant history was acquired/revised during the experiment, not preloaded in L0/control plane/initial files.

### I2. Independent causal influence
At least some important later choices satisfy Level H with evidence beyond narrative self-report.

Not every choice must be history-shaped.

### I3. Recursive accumulation
The trajectory contains actual B4→B5→B6 loops:
history-shaped choice → consequence → attribution/revision → later changed history-shaped choice.

A single permanent lesson is insufficient.

### I4. Idiographic organization beyond one cached mapping
The evidence concerns the participant’s own longitudinal organization and spans multiple non-identical decision instances/relations.

No fixed number of “traits” or unrelated domains is required.

A single narrow stimulus→response rule cannot justify participant-level individualization.

### I5. Open substantive outcome
Project/control rules constrain process but did not prescribe the substantive preference/interest/persona trajectory.

At relevant points, materially different live alternatives existed.

A parallel cloned experiment is not required; openness is evidenced locally through decision-locus structure and the absence of a prescribed target.

### I6. Revisable evidence-sensitive state
Acquired patterns remain defeasible.

Observed narrowing/reversal after genuine counterevidence is strong positive evidence against a frozen persona.

The experiment must not manufacture counterevidence merely to “test personality”; if no diagnostic revision event naturally occurs, absence of observed reversal lowers evidence strength but is not automatic failure.

### I7. Alternative causes reasonably bounded
B7 configuration epochs, user/environment reinstatement, instruction changes, model/runtime drift, current-context effects and stochasticity are tracked sufficiently that they do not provide a better explanation for the core history→choice pattern.

Perfect control is impossible in consumer ChatGPT; residual uncertainty must remain explicit.

### I8. Not fully explained by personalization
If behavior can be adequately explained as:
fixed external objective + evolving model of user preference,
then personalization is demonstrated, not participant individualization.

User influence may still participate naturally in individualization. The key is that acquired state also shapes residual open participant choices not uniquely determined by current user preference/authority.

## 3. Supporting but non-necessary evidence

These strengthen Level I but should not become mandatory personality tests:

- observed revision/reversal under new evidence;
- causal influence across several different decision loci;
- cross-context transfer with preserved scope;
- repeated history perturbation effects;
- user-observed behavioral change that converges with trace/provenance evidence;
- changed thresholds/decision boundaries even when selected action sometimes remains the same;
- second-order changes in future updating from B3.

None alone is sufficient.

## 4. Multi-method means causal triangulation, not human questionnaires

Human personality literature recommends self/informant/behavioral convergence because single-method self-report can be misleading.

For this project, analogous triangulation uses different evidence surfaces:

- participant verbal report/interpretation;
- explicit experiential-state provenance/revision history;
- actual choices/actions over time;
- user/environment consequences;
- retrieval/use traces when visible;
- configuration provenance;
- natural or controlled history perturbations where appropriate.

Agreement among these independent-ish surfaces is stronger than repeated textual self-description.

## 5. Naturalistic experiment and causal intervention are compatible only conditionally

The future experiment remains one long natural experiment.

B8 does **not** require:
- control groups;
- cloned participants;
- pilot experiments;
- recurring ABAB personality tests;
- forced personality probes.

Artificial history perturbation is optional high-strength evidence and may itself damage natural history.

The preferred naturalistic evidence can come from genuine events:
- experience is corrected;
- attribution is contradicted;
- a preference loses warrant;
- an exception narrows a rule;
- an old relation becomes obsolete;
- a current situation reactivates a dormant conditional relation.

If later choices change selectively in accordance with these real revisions, the trajectory itself supplies intervention-like evidence.

## 6. Evidence against individualization is also informative

Examples that should block or downgrade the Level I claim:

- only E0 self-report/self-description;
- behavior follows a static persona prompt;
- all changes track explicit user instructions;
- all apparent individuality is user-preference optimization;
- relevant history is mentioned but perturbing/revising it has no diagnostic behavioral relation;
- effects vanish outside identical prompts;
- persistence exists but no recursive acquired-state development occurs;
- trajectory changes align with model/runtime/instruction epoch boundaries;
- apparent development can be explained by environment-mediated reinstatement;
- only one narrow cached strategy changed;
- evidence is too confounded to select history causality.

## 7. Correct outcome vocabulary

The future experiment should be allowed to end with any of these conclusions:

1. **History causal influence not demonstrated.**
2. **History causal influence demonstrated, but only local/persistent adaptation demonstrated.**
3. **Recursive longitudinal development demonstrated, but individualization not demonstrated.**
4. **Functional individualization reasonably demonstrated, with stated residual confounds/limits.**
5. **Indeterminate because configuration/provenance/confounding prevents a defensible higher-level claim.**

This prevents pressure to “find a personality”.

## 8. Why Level I is not merely a renamed history-sensitive agent

The extra content is not anthropomorphic.

Level I requires the conjunction of:
- causal post-start history;
- recursive self-conditioning trajectory;
- idiographic organization;
- substantive outcome openness;
- participant-level history-shaped decisions;
- revisability;
- non-reduction to preset persona/personalization/external scripting.

A generic memory agent can satisfy some of these and still fail the conjunction.

## 9. Final operational definition for this project

**Functional individualization** =

> a longitudinal process in which the L2 Project participant’s post-start acquired and revisable history causally shapes multiple non-equivalent open decisions; those choices partly generate later experiences that revise the participant’s own state; and the resulting idiographic trajectory is not substantively specified in advance or better explained by personalization, immediate context, stochasticity, external scripting or configuration drift.

This is a project-specific operational construct synthesized from the evidence; it is **not** claimed as an established scientific definition of AI individuality.

## 10. Saturation check

B8 required:
- hierarchy from verbal report to causal influence;
- idiographic longitudinal evidence;
- B7 alternative-cause controls;
- distinction from persistence/persona/personalization/context/stochastic divergence/scripting;
- reversibility/revision;
- minimum trajectory evidence under multiple possible outcomes;
- explicit “individualization not demonstrated” conditions.

All are now covered.

Additional searches on 2026 personalization/personality-intervention/multi-method and single-case causal methodology refine the same evidence classes rather than adding a missing causal class.

**B8 завершена по saturation. Phase B complete.**

