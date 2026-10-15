# A1 №9 — AI-агенты и когнитивные архитектуры

**Статус:** A1 в процессе первичной картографии 15.10.2026.

**Цель:** определить, какие части исследований AI-агентов, LLM-агентов и когнитивных архитектур необходимо будет исследовать глубоко позже. Здесь не проектируется будущий агент и не выводятся инструкции эксперимента.

## 1. Что считать агентом

1. Какие определения agent используются в классическом AI, cognitive architectures и LLM-agent literature?
2. Какие минимальные свойства отделяют агента от обычного генератора ответов?
3. Обязательны ли perception, action and environment interaction для agenthood?
4. Чем autonomous agent отличается от tool-augmented assistant?
5. Как distinguish reactive, deliberative and hybrid agents?
6. Чем agent loop отличается от одноразового pipeline?
7. Обязана ли агентность включать persistent internal state?
8. Может ли система считаться агентом, если цели полностью задаются извне?
9. Чем агент отличается от workflow/orchestrator?
10. Какие claims об «agency» являются функциональными, а какие антропоморфными?

## 2. Граница LLM ↔ agent system

11. Какие компоненты agent system находятся внутри LLM, а какие во внешнем runtime?
12. Как observation formatting влияет на поведение core model?
13. Как planner, memory, tool executor and evaluator распределяются между model calls и deterministic code?
14. Когда one-model-many-prompts architecture функционально эквивалентна нескольким agents?
15. Как distinguish model capability от orchestration capability?
16. Какие agent properties исчезают при отключении external memory/tools?
17. Как state machine or graph runtime changes agent behavior independently of LLM weights?
18. Как retries, voting and fallback logic влияют на apparent intelligence?
19. Как system-level capability может возникнуть без нового capability core model?
20. Какие границы с областью №8 нужно сохранить, чтобы не дублировать LLM architecture?

## 3. Agent loop: perceive–decide–act–observe

21. Какие variants basic agent loop используются?
22. Чем observation отличается от raw environment state?
23. Как partial observability влияет на agent decision-making?
24. Как агент определяет, когда наблюдений достаточно для действия?
25. Как action result возвращается в deliberation?
26. Как synchronous and asynchronous environments меняют loop?
27. Как long-running actions and delayed feedback обрабатываются?
28. Как агент различает failure, partial success and ambiguous outcome?
29. Как termination condition задаётся or inferred?
30. Как looping/deadlock/failure-to-stop обнаруживаются?

## 4. Perception and state construction

31. Как агент переводит heterogeneous environment signals into usable state?
32. Чем perception memory отличается от long-term memory?
33. Как multimodal observations integrated in agent state?
34. Как state abstraction влияет на planning quality?
35. Как uncertainty in observation represented?
36. Как missing or stale information detected?
37. Когда summarization of observations destroys action-relevant detail?
38. How should provenance of observations be retained?
39. Как contradiction between multiple observations handled?
40. Как agent state differs from world model?

## 5. Goals, tasks and objective representation

41. Как user request превращается в operative agent goal?
42. Чем goal, constraint, preference, success criterion and instruction отличаются?
43. Как multiple goals prioritized?
44. Как conflicting goals resolved?
45. Как agent tracks goal completion across long trajectories?
46. Как hidden or underspecified goals affect behavior?
47. Когда agent may legitimately infer subgoals?
48. Как goal drift detected?
49. Чем self-generated subgoal отличается от self-generated top-level goal?
50. Как task reformulation affects autonomy claims?

## 6. Planning

51. Какие planning forms используются: decomposition, search, symbolic planning, iterative replanning, hierarchical planning?
52. Как task decomposition отличается от actual planning?
53. Чем plan generation отличается от plan selection?
54. Как plan executability evaluated before action?
55. Как completeness, optimality and efficiency trade off?
56. Как plans updated after unexpected observations?
57. What is open-loop vs closed-loop planning?
58. Как long-horizon plans degrade?
59. Как plan representation—natural language, graph, code, formal operators—affects reliability?
60. Когда external classical planner better than LLM-native planning?
61. Как partial-order plans differ from linear plans?
62. Как uncertainty and branching futures represented?
63. Как planning under resource constraints differs from unconstrained decomposition?
64. Как planning failure distinguished from execution failure?

## 7. Reasoning–acting integration

65. Чем ReAct-like interleaving отличается от plan-then-execute?
66. Когда acting provides information needed for reasoning?
67. Как reasoning trace updated after environment feedback?
68. Как action selection differs from verbal reasoning about action?
69. Как agents recover from wrong intermediate assumptions?
70. Как interleaved tool results prevent or amplify hallucinated chains?
71. What is the role of hidden/internal reasoning versus externally stored scratchpads?
72. Как reasoning-action loops evaluated independently of final success?
73. Когда more deliberation causes delay or overthinking?
74. Как reasoning state compressed without losing decision-relevant structure?

## 8. Tool use and action interfaces

75. Какие types tools agents use: search, code, databases, APIs, GUI, communication, physical control?
76. Как tool discovery differs from tool selection?
77. Как tool schemas influence affordance understanding?
78. Как agent chooses among overlapping tools?
79. Как preconditions and side effects represented?
80. Как irreversible actions require different handling from reversible actions?
81. Как tool failure diagnosed?
82. Как retries distinguished from repeated harmful action?
83. Как tool result verification works?
84. Когда agent should ask for permission versus execute autonomously?
85. Как tool composition enables capabilities absent from any single tool?
86. How does tool creation differ from ordinary tool use?
