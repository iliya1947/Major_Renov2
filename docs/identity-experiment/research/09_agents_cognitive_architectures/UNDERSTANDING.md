# A1 №9 — AI-агенты и когнитивные архитектуры: понимание карты области

**Статус:** итог первичной картографии A1 №9 от 15.10.2026. Это понимание структуры исследовательского пространства, а не ответы на найденные вопросы.

## 1. Agent — это система вокруг модели, а не синоним LLM

Современные agent frameworks добавляют к model как минимум часть следующих механизмов:
- observation/state construction;
- goals and planning;
- tools/actions;
- memory;
- feedback/reflection;
- environment loop;
- orchestration and permissions.

Поэтому later research должен всегда различать capability core model и capability whole agent system.

## 2. Memory is not just storage

Agent-memory literature increasingly treats memory as a **management process**:
- decide what to store;
- retrieve;
- update;
- summarize/consolidate;
- delete/forget;
- connect abstraction to source episodes.

Эта ветвь особенно важна для проекта, но A1 не делает из неё готовую файловую архитектуру.

## 3. “Experience” has several incompatible meanings in agent literature

Под experience могут подразумеваться:
- raw trajectory;
- retrieved prior example;
- textual reflection;
- generalized rule/tip;
- learned memory policy;
- parameter update from interaction.

Future phases must distinguish these meanings before borrowing results about “experience-based agents”.

## 4. Reflection is not automatically reliable self-correction

Agent papers often use another LLM call to critique or reflect. Critical self-correction literature shows that this should not be equated automatically with metacognitive accuracy: externally grounded feedback can matter substantially.

Thus “agent reflected” and “agent correctly revised its understanding” are different claims.

## 5. Planning is a system-level family, not one prompt technique

Planning can involve:
- task decomposition;
- plan selection;
- replanning;
- external formal planners;
- search;
- hierarchical goals;
- interleaved reasoning and action.

Long-horizon reliability depends not only on producing a plausible plan but on executability, state tracking, verification and recovery.

## 6. Agent autonomy is multidimensional

Autonomy can refer separately to:
- choosing subgoals;
- choosing plans;
- choosing tools;
- executing actions;
- managing memory;
- learning/adapting;
- deciding when to ask a human.

A system can be highly autonomous on one dimension and tightly constrained on another. Therefore later work should not use one scalar “autonomy level” without specifying dimension.

## 7. Persona/profile is not the same thing as developed identity

A large branch of LLM-agent work simply injects a role/persona/profile by prompt. This can create consistent-looking behavior, but it is architecturally different from history-dependent change.

That distinction is critical for this experiment because designer-authored personas would directly violate the project’s goal if mistaken for emergent individuality.

## 8. Classical cognitive architectures supply useful distinctions, not a ready blueprint

ACT-R, Soar, CLARION, LIDA, Sigma and related systems explicitly separate memory systems, action selection, procedural/declarative knowledge, learning and metacognition more carefully than many ad hoc LLM-agent frameworks.

But their mechanisms and empirical commitments were developed for different computational substrates and goals. They are comparison material, not something to copy wholesale into GPT.

## 9. Environment feedback is part of the agent problem

For an agent, experience comes from a loop where actions change or query an environment and later observations reveal consequences. Static prompt-response evaluation misses:
- delayed consequences;
- partial success;
- irreversible actions;
- changing environments;
- correction after failure.

Environment design therefore forms its own research branch.

## 10. Long-horizon behavior exposes architecture-level failures

Over many steps, agents can accumulate:
- stale assumptions;
- memory pollution;
- state drift;
- repeated tool failures;
- goal drift;
- incorrect summaries;
- false success signals.

A final success score alone cannot reveal where the failure arose.

## 11. Multi-agent systems introduce new variables rather than simply “more intelligence”

Multiple agents add:
- communication protocols;
- role allocation;
- topology/governance;
- shared versus private memory;
- coordination cost;
- consensus failure and error amplification.

Therefore a multi-agent result cannot automatically be attributed to the cognitive strength of individual agents.

## 12. Cognitive language is especially dangerous here

The field routinely uses terms such as memory, reflection, experience, autonomy, identity, metacognition and world model. Some are precise engineering constructs; others are analogies to cognitive science.

Later synthesis must repeatedly ask whether two papers use the same word for the same functional object before transferring conclusions across humans and AI.

## 13. Evaluation has to target system behavior, not just final answers

Current surveys and benchmarks distinguish:
- planning;
- memory;
- tool use;
- self-correction;
- robustness;
- safety;
- efficiency;
- long-horizon task success.

Agent evaluation therefore cannot be reduced to ordinary LLM benchmark accuracy.

## 14. Что A1 №9 дала общей программе

Получена карта из **402 вопросов именно области №9**, в 37 блоках. Она нужна, чтобы позже не смешивать:
- LLM and agent system;
- memory storage and memory management;
- trajectory and experience abstraction;
- reflection and verified correction;
- persona and history-dependent identity;
- planning and execution;
- autonomy and mere permissions;
- model learning and memory/prompt adaptation;
- single-agent and multi-agent mechanisms;
- cognitive-architecture terminology and literal cognitive equivalence.

## 15. Граница текущего результата

В этом проходе **ни один из 402 вопросов области №9 не исследовался глубоко**. Источники использовались для первичной картографии agent architectures, cognitive architectures, memory/feedback loops, autonomy, multi-agent systems, environments, safety and evaluation.

A1 №9 отвечает только на вопрос:

**«Какие части agent and cognitive-architecture research необходимо исследовать, чтобы позже понять, какие технические механизмы могут поддерживать длительную историю, память, самостоятельный выбор и пересмотр поведения, не подменяя индивидуальность заранее прописанной persona и не называя любой agent loop “личностью”?»**

**Следующий шаг общего процесса:** A1 №10 «Машинное обучение и адаптивные системы».
