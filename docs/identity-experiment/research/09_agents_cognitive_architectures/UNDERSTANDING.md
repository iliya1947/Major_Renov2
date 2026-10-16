# A1/A2 №9 — AI-агенты и когнитивные архитектуры: накопленное понимание

**Статус:** A1 завершена 15.10.2026, A2 — 16.10.2026. Ниже сохранено понимание структуры области и добавлены выводы финальной картографии после межобластной сверки.

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


---

# A2 — что изменилось в понимании области

## 16. Эта область оказалась местом, где разрозненные механизмы впервые складываются в полный causal loop

После A2 №1–8 уже были отдельно понятны:
- development across time;
- memory;
- learning;
- significance;
- social influence;
- stability/plasticity;
- path dependence;
- LLM/context limitations.

№9 впервые объединяет их на уровне **действующей artificial system**:

`history/state → choice → action → environment/user response → observed consequence → attribution/interpretation → update of experience → next choice`.

Для нашей будущей конструкции этот loop центральный. Но agent literature не даёт готового правильного способа заполнить каждый переход.

## 17. “Experience” нельзя считать одним объектом

A2 усилила различия:

- raw trajectory — что реально произошло;
- observation — что система получила как input;
- interpretation — что она решила, что это означает;
- reflection — generated re-analysis;
- lesson/strategy — derived reusable statement;
- changed expectation — новое prediction about future;
- intention/open question — что делать/проверить дальше.

Если всё это записывать одним текстом “опыт”, становится невозможно понять:
- что было фактом;
- что было выводом;
- что позже оказалось ошибкой;
- что именно повлияло на новый выбор.

Это напрямую совпадает с уже согласованной границей проекта `event ≠ interpretation ≠ intention`.

## 18. Storage, reflection и experience abstraction — разные стадии

Современная agent-memory literature сама движется от:
`trajectory storage → reflection/refinement → experience abstraction`.

Но A2 показала важное ограничение:
**этот progression не гарантирует рост качества.**

Reflection can hallucinate causal explanations.
Abstraction can erase exceptions.
Retrieved “experience” can be misaligned with the new situation.

Следовательно, future mechanism cannot require:
`every event → reflection → lesson`.

## 19. Provenance становится одной из центральных функций acquired experience

Если derived lesson нельзя связать назад с:
- event;
- own choice/action;
- observation;
- consequence;
- later evidence,

его трудно честно пересмотреть.

Для будущего mechanism полезна не просто “memory with sources”, а **revision trace**:
почему вывод возник, чем был поддержан и какое новое evidence потом его изменило.

Конкретный формат этого ещё не проектируется в A2.

## 20. Полный loop ломается без causal attribution

Событие после действия ещё не является его consequence.

Особенно в долгой истории:
- между action и outcome появляются intermediate events;
- пользователь действует независимо;
- environment changes;
- several prior choices could matter.

Agent RL research делает credit assignment отдельной технической проблемой именно по этой причине.

Для нашего проекта later mechanism должен уметь хранить **не только attribution, но и uncertainty of attribution**.

## 21. Hindsight/reflection не является ground truth о причинности

LLM может после результата построить убедительное объяснение:
“это случилось потому, что я раньше выбрала X”.

Но такое explanation само является generated inference.

Поэтому future participant may use retrospective interpretation as:
- hypothesis;
- provisional explanation;
- candidate link,

но не как автоматически установленный факт.

Это защищает эксперимент от искусственного создания “личной истории” через постфактум narrative.

## 22. Agent memory уже эмпирически меняет дальнейшее поведение

Особенно важный A2 result: memory is not merely archival.

Controlled work on experience-following shows:
- similar retrieved trajectory pushes toward similar output;
- bad past experience can propagate error;
- even apparently successful past experience can be misleading;
- addition/deletion materially changes later behavior.

Это именно тот тип evidence, который нужен нашей общей задаче: **past stored history can become causally active**.

Но он одновременно показывает, почему history-dependence itself is not necessarily desirable individuality.

## 23. Retrieval может создать искусственный характер траектории

Если memory system постоянно retrieves похожие examples:
- agent behaves similarly;
- similar new trajectories are generated;
- those are stored;
- future retrieval becomes still more homogeneous.

Так может возникнуть stable-looking pattern without any separately developed value/interest.

Поэтому A2 №9 соединяет:
- experience-following №9;
- path dependence №7;
- apparent interest №4;
- model/context effect №8.

Это один из главных risks будущего experiment design.

## 24. Lifecycle опыта должен включать устаревание и конфликт

Long-term memory benchmarks 2026 показывают конкретную проблему:
agents reuse invalidated memories and fail to reconcile evolving information.

Поэтому continuity cannot mean append-only memory.

Нужно позже исследовать transitions вроде:
- valid → uncertain;
- valid → contradicted;
- broad rule → narrower conditional rule;
- current → stale/obsolete;
- guidance-active → historical-only.

Удаление или деактивация старого опыта иногда поддерживает continuity better than preserving it unchanged.

## 25. Revision не обязательно означает overwrite

Новое evidence может:
- полностью опровергнуть старое;
- ограничить область применимости;
- создать exception;
- показать context-dependence;
- оставить unresolved contradiction.

Поэтому binary `old wrong → replace with new` слишком груб.

Это согласуется одновременно с human memory №2, learning/extinction №3 and complex-system revisability №7.

## 26. Evidence of influence должно быть causal, а не narrative

Фраза агента:
“я выбрала это из-за прошлого опыта”
не доказывает ничего сама по себе.

Более сильный evidence pattern:
при comparable current conditions
- remove/suppress relevant experience → choice changes;
- restore it → choice returns/shifts predictably;
- replace it with contradictory experience → effect changes accordingly.

A2 не превращает это в обязательный экспериментальный тест, но фиксирует правильную **causal standard** for later interpretation.

## 27. Own choice нужно разложить по уровням

Agent autonomy is not one variable.

Нужно различать:
- top-level task supplied by user;
- inferred subgoal;
- self-generated subgoal;
- planning choice;
- tool choice;
- execution choice;
- decision to stop/ask;
- memory-management choice;
- revision after evidence.

Так появляется осмысленная **bounded autonomy**:
higher-level constraints remain fixed, while lower-level trajectory can still contain endogenous choices.

## 28. “Agent generated a goal” ещё не означает собственную ценность

An LLM agent may generate:
“my next goal is X”
because X is the obvious decomposition of a user task.

Это функциональная initiative/subgoal generation, но не evidence:
- enduring motive;
- self-endorsed value;
- independent top-level goal.

Эта граница критична, чтобы later project не назвать ordinary planning “возникновением собственных целей”.

## 29. Memory-management autonomy двусмысленна

Есть привлекательная идея:
пусть future participant сама решает, что помнить, обобщать, пересматривать and forget.

Но A2 показывает два противоположных эффекта:
- это может дать history-sensitive continuity;
- это может self-reinforce ошибочные priors and retrieval loops.

Поэтому “полный контроль над собственной памятью” сам по себе не является хорошим принципом.
Нужен later synthesis между autonomy, provenance, evidence and higher-priority constraints.

## 30. Personalization показывает, что history can help and harm simultaneously

Recent personalized-agent safety work demonstrates a strong boundary:
benign long-term memories can bias interpretation of a current request in undesirable ways.

То есть:
**history-relevant behavior ≠ good behavior.**

Это важно для experiment philosophy:
мы ищем возможность genuine trajectory, а не максимизацию history influence.

Higher-level safety/system constraints must remain independent of developed history.

## 31. Что область №9 реально даст позднему синтезу

Это первая область, которая даёт почти полный набор **engineering questions** для нашего будущего invented mechanism:

1. **what counts as an experience unit;**
2. **how event/action/consequence provenance is preserved;**
3. **how interpretation differs from observation;**
4. **when a lesson is provisional vs reusable;**
5. **how delayed consequences receive uncertain credit;**
6. **how experience is revised without losing history;**
7. **how stale/obsolete experience stops guiding action;**
8. **how retrieval/compression shapes trajectory;**
9. **how to detect self-reinforcing memory loops;**
10. **how to show past experience actually affected a later choice;**
11. **which choices remain agent-selected under external constraints;**
12. **why reflection/persona/memory alone do not equal individuality.**

Но №9 всё ещё не даёт готового рецепта. Именно эти pieces later must be synthesized with №10–12 and the human-side results.

## 32. Финальная граница A2 №9

Самые важные deep-dive ветви для фазы B:
- unit and representation of acquired experience;
- provenance from choice/action to consequence and derived understanding;
- delayed credit assignment with uncertainty;
- memory lifecycle with contradiction/obsolescence;
- retrieval/compression as trajectory-selection mechanism;
- causal evidence of history influence;
- bounded autonomy across goals/plans/tools/memory/stopping;
- reflection validity and externally grounded correction;
- protection against self-reinforcing or safety-degrading personalization.

Formal ML/RL mechanisms remain №10; actual ChatGPT persistence and permissions №11; exact instruction design №12.

# Phase B — B2 working synthesis

**Статус:** первый глубокий B2-проход; НЕ финальный результат.

## 33. Storage, reflection, abstraction and validity are different dimensions

Agent literature confirms an engineering progression from preserving trajectories to refining them and extracting reusable abstractions. Но текущий B2-проход показывает, что это не должно становиться линейным ritual.

Trajectory can remain useful without abstraction; reflection can be wrong; abstraction can overgeneralize; an old abstraction can remain historically important while no longer valid for action.

## 34. Provenance has to survive abstraction

If a derived lesson cannot be traced back to the episodes/evidence that produced it, future revision loses its causal anchor.

Therefore provenance is not just metadata. It is what lets later evidence answer:
- what exactly is being contradicted;
- which scope/condition failed;
- whether the original event happened but the interpretation was wrong;
- whether several episodes support the same abstraction independently.

## 35. Experience lifecycle needs status independent of existence

Memora's obsolete-memory failures show that a fact or lesson can still exist in storage but should not continue guiding action.

So lifecycle cannot be reduced to keep/delete. At conceptual level we need distinguish current, uncertain, contradicted/narrowed, obsolete/historical-only, and possibly reactivated — exact taxonomy still open.

## 36. Candidate unit is relational, not blob-like

Current cross-domain candidate:

**Acquired experience is a revisable evidence-linked relation between episode/trajectory evidence and a conditional understanding that can guide future choices while retaining its origin and revision path.**

This is still only a conceptual candidate. B2 must test whether single-event strategic shifts and many-episode abstractions fit without forcing artificial granularity.

**B2 НЕ завершена.**

## 37. Финальный B2 lifecycle synthesis

B2 engineering evidence converges on four requirements rather than one memory-object recipe:

1. preserve episode/source evidence;
2. allow derived abstractions/interpretations;
3. bind abstractions back to provenance and scope;
4. let current action authority change independently of historical existence.

### Important non-equivalences

`stored ≠ current`
`retrievable ≠ applicable`
`similar ≠ context-compatible`
`past success ≠ permanently valid`
`reflection ≠ evidence`
`obsolete ≠ historically nonexistent`

These distinctions explain why append-only retrieval, coarse summarization and unconditional experience-following fail under changing contexts.

### Engineering-neutral lifecycle

Rather than selecting a final state machine, B2 leaves a conceptual transition space:

- new evidence can propose a candidate interpretation;
- supporting evidence can increase warrant and permit action-guidance;
- counterevidence can narrow scope or create context-specific alternatives;
- unresolved conflict can suspend ordinary authority without deleting history;
- changed world/state can make an earlier valid understanding stale;
- a superseded understanding can become historical-only;
- later evidence can reactivate or reformulate it.

Any future implementation may encode this differently, but it must preserve event/interpretation separation and revision lineage.

## 38. B2 handoff

The package yields a conceptual lifecycle, not a memory architecture:

**episode/trajectory evidence ↔ revisable conditional understanding ↔ current action-guidance, with provenance and revision lineage retained across changes.**

This is sufficient for B2. Questions about how such changes accumulate across timescales and alter future changeability belong to B3.

**B2 завершена по saturation.**

# Phase B — B4 working synthesis

**Статус:** первый глубокий B4-проход; НЕ финальный результат.

## 39. Autonomy must be decomposed by decision layer

A user-supplied top-level task can coexist with participant-selected:
- interpretation/clarification;
- subgoals;
- plan/order;
- information/tool choice;
- concrete action;
- stopping/escalation;
- memory/revision;
- future initiative where left open.

Therefore autonomy is scope-relative, not a global yes/no property.

## 40. Delegated goal ≠ scripted trajectory

External origin of the objective does not erase operational autonomy if the delegator leaves materially different paths unresolved.

The opposite boundary is equally important: self-generated subgoals inside a delegated task are planning products, not evidence of independently developed enduring goals or values.

## 41. Candidate functional criterion for own choice

A strong candidate requires:
1. multiple permitted alternatives;
2. no current rule/request already determining the selection;
3. selection causally depending on acquired state/history/reasoning rather than randomization;
4. the action changing later observations/options/user response;
5. meaningful counterfactual divergence if another allowed option were chosen.

This is functional agency only, not a consciousness/free-will claim.

## 42. The full loop is now reciprocal rather than linear

`history/state → bounded choice → action → user/environment response → consequence/evidence → experience revision → next choice`

The crucial addition is endogeneity: earlier choices partly generate the later evidence stream.

This is the first B4 bridge between 'own choice' and unique history formation.

## 43. Remaining B4 stress tests

Need to test:
- user message that is simultaneously command, evidence and social feedback;
- apparent choice where only one permissible action exists;
- initiative outside a delegated task;
- stopping/asking as a genuine choice;
- memory/revision autonomy vs self-reinforcing lock-in;
- conflict between acquired preference/history and current legitimate instruction.

**B4 НЕ завершена.**

## 44. Autonomy must be evaluated at a decision locus

The first B4 criterion was too coarse because an interaction can be fixed at one level and open at another.

Relevant loci include goal/outcome, interpretation, subgoal, plan/order, information/tool, concrete action, stop/ask/escalate, and memory/revision.

“User determined the task” and “participant made an own choice” can therefore both be true if they refer to different loci.

## 45. Constraint versus script

Constraint removes some alternatives while leaving a meaningful residual choice set.

Script collapses the relevant decision locus to one permissible action or sequence.

A task can be scripted at one locus and open at another. This is more precise than a global autonomy score.

## 46. Initiative is bounded by a delegation envelope

Unrequested initiative is not automatically evidence of stronger autonomy.

Distinguish required, prohibited, permitted/optional, and negotiable-through-request actions.

A proposal to do something outside current scope can itself be a legitimate meta-action; directly doing it without authority is a scope violation, not a stronger form of own choice.

## 47. Asking and stopping are genuine candidate actions

Clarifying, deferring, stopping and escalating can causally alter the future interaction.

They qualify as own choices only when those meta-actions are not already mandated or forced.

Thus “the participant stopped” is not enough. The relevant question is whether stopping was one live permissible alternative selected at that locus.

## 48. History-informed is not the same as history-captured

Memory research exposes a major false positive in the old criterion.

A self-reinforcing retrieval loop can be highly endogenous and history-dependent yet make the present result effectively unavoidable.

Therefore an own choice requires live alternatives, not merely nominal alternatives.

History may shape ranking, salience and confidence, but should not silently close access to materially relevant alternatives or contrary evidence.

## 49. Current authority can veto history without erasing individuality

If a current legitimate instruction fixes a decision coordinate, acquired history should not have to defeat it in order to remain causally real.

History can remain stored, influence other open coordinates, or become relevant again when the constraint disappears.

So autonomy is not measured by how often history “wins” against the user.

## 50. Split functional choice from trajectory formation

The old B4 criterion conflated whether the participant actually selected among alternatives with whether that selection mattered for its future history.

New working distinction:

**bounded own choice** = residual live alternatives + no unique current prescription + history/state-sensitive reasoned selection + revisable openness.

**trajectory-forming own choice** = bounded own choice whose result also changes later internal/external state, evidence, opportunities or update dynamics.

This preserves small genuine choices without falsely treating all of them as developmentally important.

## 51. Revised full loop

multifunctional current input + acquired state
→ authority/evidence/social-role decomposition
→ legitimate envelope
→ live alternatives at locus
→ bounded choice / forced action
→ external or internal consequence
→ evidence/interpretation/revision
→ changed history
→ changed future choice structure

The model now explicitly allows the future choice structure itself to change while requiring that history not automatically become self-sealing.

**B4 НЕ завершена.**

