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

