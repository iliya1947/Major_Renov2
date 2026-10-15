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
