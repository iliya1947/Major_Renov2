# 07 — Кибернетика, сложные системы и самоорганизация: A1 — карта необходимых вопросов

**Статус: A1 ПЕРВИЧНАЯ КАРТА ГОТОВА.** Финальная доводка будет на глобальном проходе A2 после картографии остальных областей. Здесь выясняется, какие общесистемные вопросы нужны для понимания адаптации и индивидуальной траектории без заранее заданного результата. Это не архитектура будущего ИИ.

## Что реально сделано

15.10.2026 проведён первый обзорный проход по npj Complexity, Annual Reviews, Nature/Nature Reviews, systems/control and complexity literature. Ищутся **общие формы динамики и ограничения**, а не готовая схема «самоорганизующейся личности».

## Рабочая карта

### C1. Что считать системой и где проводить её границу?
- system vs environment;
- state variables, parameters, inputs/outputs;
- open vs closed systems;
- component vs system-level property;
- boundary fixed or itself dynamically maintained?
- как определить identity/persistence системы при замене её компонентов?

### C2. Как feedback формирует поведение системы?
- negative feedback / stabilization;
- positive feedback / amplification;
- mixed feedback;
- feedback delays;
- nested feedback loops across scales.
- Когда feedback corrects deviations, а когда creates new dynamics?
- Как distinguish feedback from mere correlation?

### C3. Homeostasis, rheostasis и allostasis — разные типы regulation?
- поддержание fixed state/setpoint;
- shifting setpoints;
- anticipatory/predictive regulation;
- multiple interacting regulatory loops.
- Может ли система сохранять identity, изменяя то, что именно она регулирует?
- Что считать regulation без externally specified target?

### C4. Требует ли эффективная регуляция внутренней модели среды?
- Ashby/Conant “good regulator” lineage;
- internal models;
- state estimation;
- predictive control;
- model-based vs reactive regulation.
- Какие условия действительно требуют model, а где simple feedback достаточно?

### C5. Что означает requisite variety?
- сколько разнообразия внутренних responses нужно для environmental variety?
- attenuation/amplification of variety;
- trade-off excessive complexity vs insufficient repertoire;
- hierarchy/modularity as ways manage variety.
- Как measure relevant variety rather than raw number of states?

### C6. Что такое self-organization и чем она отличается от adaptation/optimization?
- local interactions → global organization;
- absence of central controller;
- open nonequilibrium dynamics;
- self-organization vs externally designed constraints/rules;
- spontaneous order vs adaptive order.
- Может ли designed system self-organize within designed rules?
- Как distinguish self-organization from designer having encoded the final pattern indirectly?

### C7. Что такое emergence и как доказать, что новый уровень объяснения нужен?
- micro interactions vs macro property;
- weak vs strong emergence;
- scale dependence;
- coarse-graining;
- downward/constraint effects?
- Когда “emergence” — полезный scientific concept, а когда label for ignorance?

### C8. Как attractors/multistability формируют устойчивые patterns?
- state space;
- attractor basins;
- multiple stable regimes;
- switching between attractors;
- transient/metastable states;
- basin depth and perturbations.
- Можно ли устойчивую индивидуальную pattern понимать как dynamical regime rather than fixed parameter?

**Только вопрос-кандидат:** не переносить attractor metaphor на GPT до A2/B.

### C9. Как история системы создаёт path dependence?
- initial conditions;
- positive feedback;
- lock-in;
- hysteresis;
- irreversibility/reversibility;
- branching trajectories;
- same environment, different history → different state.
- Когда history matters only transiently, а когда changes future accessible states?

### C10. Как возникают critical transitions и qualitative changes?
- bifurcations;
- tipping points;
- critical slowing down;
- regime shifts;
- gradual parameter change → abrupt state change.
- Все ли large changes требуют tipping point?
- Насколько generic early-warning signals действительно reliable across domains?

### C11. Что такое robustness и чем она отличается от resilience?
- maintain function under perturbation;
- recover after perturbation;
- adapt by changing organization;
- robust-yet-fragile trade-offs;
- redundancy/degeneracy;
- robustness vs rigidity.
- Может ли mechanism that protects old organization obstruct adaptation?

### C12. Как system сохраняет adaptability/evolvability?
- ability to generate useful variation;
- robustness ↔ evolvability;
- neutral/latent variation;
- modularity;
- exploration of alternative configurations.
- Можно ли “ability to change” itself change?
- Когда complexity facilitates vs impedes adaptation?

### C13. Как modularity и hierarchy affect adaptation?
- semi-autonomous modules;
- local change without global disruption;
- integration vs segregation;
- cross-module coordination;
- hierarchical regulation.
- Когда modularity increases evolvability, and when it traps system in local solutions?

### C14. Как coevolution системы и среды создаёт траекторию?
- adaptive networks: states and topology coevolve;
- niche/environment modification;
- agent actions alter future inputs;
- structural coupling.
- How distinguish adaptation to environment from environment being changed by the system?
- Can feedback create self-generated conditions for further adaptation?

### C15. Как noise, stochasticity и fluctuations участвуют в самоорганизации?
- noise as disturbance vs resource;
- stochastic resonance / noise-induced transitions;
- exploration;
- fluctuation-driven symmetry breaking;
- robustness under noise.
- Когда random variation becomes history-dependent structure?

### C16. Как information/constraints relate to organization?
- information flow;
- entropy/order;
- mutual information;
- causal information;
- constraints reducing possible states;
- memory/history encoded in state/structure.
- Какие информационные measures реально explain dynamics, а какие лишь describe?

### C17. Что такое autonomy/autopoiesis/operational closure и нужно ли это нашей задаче?
- self-maintenance/self-production;
- organizational closure;
- system–environment boundary;
- structural coupling;
- autonomy vs externally supplied goals/resources.
- Эти concepts описывают biological life, cognition, или более общий systems principle?
- Что из этого scientifically transferable, а что несёт философские commitments?

### C18. Как distributed local rules create coordinated global behavior?
- networks;
- local interactions;
- collective dynamics;
- decentralization;
- stigmergy/indirect coordination;
- consensus vs diversity;
- coordination without central planner.
- Как local adaptation can generate global failure?

### C19. Как измерять adaptation/self-organization without circularity?
- “система адаптивна, потому что выжила” — sufficient?
- define function/performance externally or internally?
- intervention/perturbation tests;
- causal models;
- simulation vs empirical validation;
- sensitivity to initial conditions;
- parameter fitting vs explanatory mechanism.
- How to distinguish a post-hoc narrative of emergence from predictive theory?

### C20. Чем адаптация отличается от optimization и как определить viability?
- global optimum vs local adaptation;
- satisficing;
- viability constraints / keeping state within survivable or acceptable region;
- multiple objectives/trade-offs;
- adaptation without a single scalar reward;
- constraints vs goals.
- Кто задаёт criterion of viability/function?
- Может ли system dynamically redefine acceptable region without losing identity?
- Как отличить “выжило” от “адаптировалось хорошо”?

**Почему отдельный блок:** dynamical adaptive-behavior literature формулирует agent–environment coupling через viability constraints; это не тождественно reward maximization.

### C21. Что такое open-endedness и как возникает долговременная novelty?
- ongoing innovation;
- expanding/restructuring state or rule space;
- novelty vs mere random variation;
- bounded resources vs apparently unbounded novelty;
- self-modification of rules/representations;
- maintaining diversity without converging to fixed endpoint;
- how to measure novelty/complexity without circularity?
- Is open-endedness necessary for individuality, or only one possible property?

**Граница:** OEE literature mostly concerns evolution/artificial life, not conversational agents. Include as a question, not assumption.

### C22. Границы области №7
- №1–6: specific human/biological mechanisms.
- №8: actual GPT dynamics/context/inference.
- №9: agent architectures.
- №10: formal adaptive algorithms/RL/continual learning.
- №11–12: real ChatGPT and instructions.

**Критическая граница:** complex-systems vocabulary (emergence, attractor, autopoiesis, criticality) не является доказательством механизма. Здесь выясняются formal/general constraints; перенос на GPT разрешён только после областей №8–12.

## Источники, реально открытые в первом проходе A1

1. Gershenson C. 2025. *Self-organizing systems: what, how, and why?* npj Complexity. https://doi.org/10.1038/s44260-025-00031-5
2. Lansing JS. 2003. *Complex Adaptive Systems*. Annual Review of Anthropology. https://doi.org/10.1146/annurev.anthro.32.061002.093440
3. Sepulchre R, Drion G, Franci A. 2019. *Control Across Scales by Positive and Negative Feedback*. Annual Review of Control, Robotics, and Autonomous Systems. https://doi.org/10.1146/annurev-control-053018-023708
4. Roth E et al. 2019. *Internal Models in Biological Control*. Annual Review of Control, Robotics, and Autonomous Systems. https://doi.org/10.1146/annurev-control-060117-105206
5. Sterling P. 2012. *Allostasis: a model of predictive regulation*. Physiology & Behavior. https://doi.org/10.1016/j.physbeh.2011.06.004
6. Ramsay DS, Woods SC. 2014. *Clarifying the roles of homeostasis and allostasis*. https://pmc.ncbi.nlm.nih.gov/articles/PMC4166604/
7. Artime O et al. 2024. *Robustness and resilience of complex networks*. Nature Reviews Physics. https://doi.org/10.1038/s42254-023-00676-y
8. Kitano H. 2004. *Biological robustness*. Nature Reviews Genetics. https://doi.org/10.1038/nrg1471
9. Houle D, Rossoni DM. 2022. *Complexity, Evolvability, and the Process of Adaptation*. Annual Review of Ecology, Evolution, and Systematics. https://doi.org/10.1146/annurev-ecolsys-102320-090809
10. Payne JL, Wagner A. 2019. *The causes of evolvability and their evolution*. Nature Reviews Genetics. https://doi.org/10.1038/s41576-018-0069-z
11. Melo D et al. 2016. *Modularity: Genes, Development, and Evolution*. Annual Review of Ecology, Evolution, and Systematics. https://doi.org/10.1146/annurev-ecolsys-121415-032409
12. Gross T, Blasius B. / adaptive-network lineage; overview opened: *Modeling complex systems with adaptive networks* (2013). https://doi.org/10.1016/j.camwa.2012.12.005
13. Scheffer M et al. 2009. *Early-warning signals for critical transitions*. Nature. https://doi.org/10.1038/nature08227
14. Scheffer M et al. 2015. *Generic Indicators of Ecological Resilience*. Annual Review of Ecology, Evolution, and Systematics. https://doi.org/10.1146/annurev-ecolsys-112414-054242
15. Briat C et al. 2023. *Noise in Biomolecular Systems: Modeling, Analysis, and Control Implications*. Annual Review of Control, Robotics, and Autonomous Systems. https://doi.org/10.1146/annurev-control-042920-101825
16. Allen M, Friston KJ. 2018. *From cognitivism to autopoiesis*. Synthese. https://doi.org/10.1007/s11229-016-1288-5
17. Hooker C. 2011. *Philosophy of Complex Systems*, path-dependence/historicity chapter/overview.
18. Helmich MA et al. 2024. *Slow down and be critical before using early warning signals in psychopathology*. Nature Reviews Psychology. https://doi.org/10.1038/s44159-024-00369-y

## Проверка пропусков после второго прохода A1

- **Adaptation / optimization / satisficing / viability:** настоящий пробел. Добавлен C20, потому что viable behavior can be framed without global maximization and this matters for systems without one fixed objective.
- **Degeneracy vs redundancy:** real systems concept; enrich C11–C13. Different structures can produce same function and later enable different responses; no separate top block needed.
- **Hysteresis/path dependence:** remains C8/C9; formal distinction between attractor basin, lock-in and hysteretic transition will be checked in B.
- **Self-organized criticality / edge of chaos:** important but disputed/non-universal traditions. Keep as subquestions C10/C15; do not assume optimal adaptation occurs “at the edge of chaos”.
- **Active inference / Free Energy Principle:** substantial modern theory family with both broad claims and explicit critiques. Include under C3/C4/C17 for future comparison, not as privileged unifying law.
- **Morphological computation/embodiment:** genuine robotics/biology field, but largely dependent on physical body–environment coupling. Boundary note only; technical relevance later №9/№11.
- **Collective intelligence/swarm systems:** demonstrates local→global coordination, already C18; deep group intelligence is not central to one conversational AI.
- **Open-endedness / novelty:** настоящий отдельный пробел; added C21. Artificial Life literature itself lacks universally accepted definition and warns finite systems can satisfy weak definitions trivially.

**Вывод:** after adding viability (C20) and open-endedness (C21), working map C1–C22 is sufficient for first global A1. Final relevance and formal rigor will be audited at A2.

## Следующий шаг
Перейти к **A1 области №8 — «GPT/LLM: архитектура и поведение»**.
