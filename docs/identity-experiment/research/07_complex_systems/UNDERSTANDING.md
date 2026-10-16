# A1/A2 №7 — Кибернетика, сложные системы и самоорганизация: накопленное понимание

**Статус:** A1 завершена 15.10.2026, A2 — 16.10.2026. Ниже сохранено понимание структуры области и добавлены выводы финальной картографии после межобластной сверки.

## 1. Поле состоит не из одного «принципа самоорганизации»

Для дальнейшей работы нужно отдельно удерживать:
- feedback/control;
- homeostasis/rheostasis/allostasis;
- requisite variety and regulator models;
- nonlinear dynamics and attractors;
- bifurcations/tipping/hysteresis;
- emergence/coarse-graining;
- self-organization/pattern formation;
- complex adaptation;
- adaptive networks;
- multiscale organization;
- path dependence;
- robustness/resilience;
- evolvability;
- autonomy/viability;
- information dynamics;
- criticality;
- distributed control.

Нельзя использовать любое из этих понятий как общий синоним «система сама развивается».

## 2. Самоорганизация не означает обучения или агентности

Self-organized order может возникать из локальных взаимодействий в физических или химических системах без memory, goals or agency. Поэтому обнаружение self-organization само по себе не доказывает adaptation, learning, autonomy или individuality.

## 3. Adaptation, regulation and optimization — разные вопросы

Regulation может сохранять variables within bounds; adaptation changes responses to conditions; optimization presupposes a criterion; complex systems may exhibit useful adaptation without maximizing one fixed scalar objective.

Эти distinctions обязательны для later synthesis with AI.

## 4. Стабильность и изменение образуют одну проблему

Complex-system research repeatedly pairs:
- robustness with fragility;
- resilience with regime change;
- attractors with switching;
- homeostasis with adaptive setpoint change;
- modularity with integration;
- stability with evolvability.

Поэтому будущая модель приобретённого опыта должна будет объяснять не только изменение, но и то, почему система не меняется от каждого события. A1 только фиксирует этот общий класс вопросов.

## 5. History can matter without an explicit memory store

Hysteresis, state-dependent topology and path dependence show that system history can constrain future transitions through current structure. Это важная conceptual branch, но она не означает, что любой history-dependent system обладает cognitive memory.

## 6. Emergence requires scale discipline

Macro-level patterns can be useful and sometimes more predictive than raw microstates, but choice of coarse-graining matters. Emergence must not be used as a substitute for explaining interactions that generate the macro-pattern.

## 7. Local rules and global structure form reciprocal loops

Adaptive-network research makes explicit that:
- local states can reshape connectivity;
- changed connectivity reshapes later local dynamics.

Это отдельная family of mechanisms from simple fixed-network interaction and should later be compared with social/environmental transaction models.

## 8. Requisite variety is a formal constraint, not a slogan

Cybernetics supplies a precise intuition: effective regulation of diverse disturbances requires sufficient response/model variety. But informal uses of the principle can overclaim if «variety», disturbance space or performance criterion are not specified.

## 9. Autonomy and viability are stronger claims than self-regulation

Autopoiesis/enactive traditions ask whether the system maintains the organization that makes its own continued existence possible. This is conceptually different from an externally specified controller holding a variable near target.

Whether anything analogous transfers to a software system is a future question, not an A1 conclusion.

## 10. Free-energy/active-inference must remain a contested branch

FEP provides a mathematically ambitious unifying language for self-organization, inference and action, but modern literature also contains substantive critiques of its scope and assumptions.

Therefore it cannot be treated in later synthesis as established universal law merely because it offers a convenient unified vocabulary.

## 11. Modeling method strongly shapes what can be claimed

Differential equations, networks and agent-based models expose different levels of organization. Multiple micro-models can reproduce similar macro-patterns, so simulation alone does not identify a unique causal mechanism.

Future deep work will need intervention, robustness, sensitivity and out-of-sample perturbation checks.

## 12. Cross-domain transfer is itself a research problem

Complexity science is unusually prone to attractive but unsafe analogies. Later use for GPT must distinguish:
- mathematically defined transferable constraints;
- domain-specific physical mechanisms;
- loose metaphors.

In particular:
- emergence ≠ agency;
- feedback ≠ learning;
- persistence ≠ identity;
- self-organization ≠ self-directed goals;
- thermodynamic openness ≠ software-state change.

## 13. Что A1 №7 дала общей программе

Получена карта из **308 вопросов именно области №7**, в 31 блоке. Она нужна, чтобы позже не смешивать:
- regulation, adaptation and optimization;
- self-organization and autonomy;
- robustness, resilience and stability;
- emergence and causal explanation;
- attractor dynamics and historical path dependence;
- fixed networks and coevolving networks;
- information measures and mechanisms;
- universal mathematics and cross-domain metaphor.

## 14. Граница текущего результата

В этом проходе **ни один из 308 вопросов области №7 не исследовался глубоко**. Работа была направлена на картографию направлений, споров и методологических границ.

A1 №7 отвечает только на вопрос:

**«Какие части кибернетики и complexity science необходимо исследовать, чтобы позже понимать устойчивое самоизменение и адаптацию системы, не объявляя любое сложное поведение самоорганизацией, агентностью или индивидуальностью?»**

**Следующий шаг общего процесса:** A1 №8 «Архитектура и поведение GPT/LLM».


---

# A2 — что изменилось в понимании области

## 15. Граница системы стала центральным вопросом, а не технической деталью

Для будущего эксперимента нельзя говорить «система развилась», не указав, что именно считается системой.

Разные допустимые границы:
- bare model;
- model + current context;
- persistent project state;
- project + tools/runtime;
- recurrent project↔user interaction loop.

При разных границах меняются ответы на вопросы:
- где находится persistence;
- что считать internal state;
- что считать environment;
- насколько choice autonomous;
- что является causal source изменения.

Поэтому system boundary должна быть явной частью будущего causal model.

## 16. History dependence и explicit memory — разные вещи

Complex-systems literature показывает более широкий класс:
история может влиять на future trajectory через **current state/structure**, даже если прошлое нигде не хранится как отдельный retrievable record.

И наоборот, explicit archive может существовать и почти не влиять на future dynamics.

Для проекта это особенно важно после A2 №2:
`stored history` и `history-dependent system` не эквивалентны.

## 17. Retrieval может сам создавать trajectory

A2 позволила сформулировать важный формальный loop:

`retrieved past → current choice → changed future experience → changed stored history → higher probability of similar future retrieval`.

Такой loop способен:
- усиливать раннюю случайность;
- создавать lock-in;
- поддерживать apparent preference;
- уменьшать exposure to alternatives.

Это не доказывает, что именно так работает ChatGPT; конкретный retrieval mechanism принадлежит №9/11. Но №7 показывает **какой системный риск потом нужно искать**.

## 18. Path dependence нужно отличать от плохо описанного state

Если remote history кажется необходимой только потому, что аналитик не включил важную current-state variable, это ещё не genuine non-Markovian/path-dependent dynamics.

Для будущего synthesis полезен вопрос:
**какое минимальное текущее состояние достаточно, чтобы объяснить дальнейшее поведение, и какая часть более далёкой истории всё равно остаётся необходимой?**

Это поможет не объявлять любое действие «следствием уникальной истории» без проверки.

## 19. Hysteresis лучше простой persistence описывает некоторые виды lock-in

Persistence говорит только, что нечто сохранилось.

Hysteresis требует более сильного свойства:
при одинаковом current external condition система остаётся в разных состояниях в зависимости от пути, которым она туда пришла.

Для индивидуализации это потенциально полезный formal concept:
две разные истории могут давать устойчиво разные trajectories even under similar later conditions.

Но наличие hysteresis не равно personality/identity.

## 20. State и structure могут развиваться взаимно

Adaptive networks дают substrate-neutral схему:

`current state → change of interaction structure → changed future dynamics`.

Это формальный родственник уже найденных:
- person↔environment transactions №1;
- reciprocal social history №5;
- agent↔environment loops №9.

Общее здесь — не механизм, а **recursive change of both state and future interaction opportunities**.

## 21. Guided self-organization снимает ложную дихотомию «свобода или программа»

Система может иметь fixed constraints и при этом не иметь заранее указанного detailed outcome.

Полезное различие:
- **constraint:** ограничивает допустимое пространство dynamics;
- **local/history-dependent process:** определяет конкретную trajectory;
- **blueprint/script:** заранее задаёт desired detailed state/behavior.

Это очень важно для будущих project instructions. Но A2 №7 только формулирует системный критерий; конкретные instructions будут исследованы №12.

## 22. Внешние ограничения не отменяют bounded autonomy автоматически

Любая реальная artificial system будет иметь:
- system/developer constraints;
- permissions;
- tool availability;
- finite context;
- user requests.

Поэтому вопрос autonomy нужно раскладывать на dimensions:
- выбор между допустимыми options;
- planning;
- stopping;
- goal/subgoal selection;
- memory revision;
- tool use;
- response to evidence.

«Полной свободы нет» — недостаточный аргумент против всех форм functional autonomy.

Но stochasticity/unpredictability тоже не является доказательством autonomy.

## 23. Multiscale causality помогает не сводить всё к одной модели объяснения

Future participant can be analyzed at:
- token/model inference level;
- agent-control level;
- persistent-project level;
- longitudinal behavioral/individual level.

Macro-level pattern может быть scientifically useful и causally informative without requiring a new mystical entity.

То есть later we can discuss stable individual trajectory as a system-level pattern **without claiming consciousness or human personality substrate**.

## 24. Emergence — не объяснение по умолчанию

A2 усилила discipline:
если мы говорим «индивидуальность emerged», это ещё не объясняет:
- какие variables interacted;
- какой feedback operated;
- какой boundary использован;
- почему one trajectory rather than another;
- how stable/reversible the pattern is.

Emergence должна быть результатом explicated generative process, а не словом, закрывающим отсутствие механизма.

## 25. Open-endedness — потенциально важная, но сильная гипотеза

Pessoa's recent review highlights systems in which history may change not just current state but the set of accessible future possibilities.

Для нашего замысла это даёт полезное предупреждение:
не следует заранее перечислять все будущие interests, goals or personality states.

Но мы не имеем права из этого заключить, что ChatGPT project truly has open-ended state-space dynamics. Это отдельный будущий вопрос на стыке №7–12.

## 26. Что область №7 реально даст позднему синтезу

Не универсальную теорию самоорганизующейся личности, а formal vocabulary and constraints:

1. **boundary must be explicit;**
2. **history dependence ≠ explicit memory;**
3. **retrieval can create path dependence;**
4. **persistence ≠ hysteresis;**
5. **state and interaction structure can co-evolve;**
6. **constraints ≠ detailed script;**
7. **bounded autonomy is multidimensional;**
8. **stochasticity ≠ autonomy;**
9. **robustness ≠ rigidity;**
10. **macro-level stability may coexist with micro-level change;**
11. **emergence does not replace mechanism;**
12. **state space itself may need to be treated as evolving in genuinely open-ended systems.**

## 27. Финальная граница A2 №7

Самые важные deep-dive ветви для фазы B:
- operational system boundary of the future participant;
- formal conditions of history dependence vs hidden-state artifacts;
- retrieval-induced self-reinforcing loops and reversibility;
- guided self-organization vs scripting;
- bounded autonomy under fixed higher-level constraints;
- state↔structure/environment coevolution;
- robustness/resilience/revisability;
- multiscale causal description;
- criteria for legitimate use of emergence/open-endedness.

Concrete LLM mechanisms remain №8, agent architecture №9, ML adaptation №10, ChatGPT product boundaries №11 and project instructions №12.

# Phase B — B3 working synthesis

**Статус:** первый глубокий B3-проход; НЕ финальный результат.

## 28. First-order and second-order change are now separable

Working substrate-neutral distinction:

- **first-order:** history changes current state/content under a response rule that is effectively unchanged;
- **second-order:** history changes future responsiveness — update gain, threshold, adaptation strategy, or effective transition rule.

This distinction is supported by mechanistically different cases in human meta-learning, biological metaplasticity and ML meta-learning. It does **not** imply a shared substrate.

## 29. Gap 4 and gap 21 are orthogonal enough to require separate evidence

A long-term trajectory can arise through accumulation under a fixed rule, so trajectory continuity does not prove meta-change.

Conversely, future responsiveness can change while overt content/behavior remains similar, as in biological metaplasticity before later plasticity is tested.

Therefore our eventual mechanism cannot treat 'experience persists' and 'experience changed how later experience is learned' as synonyms.

## 30. A strong operational signature of second-order history dependence

Evidence should compare response to comparable new evidence after different prior histories.

Strongest pattern:
`history A vs history B → comparable current probe → systematically different update dynamics`

where the difference concerns magnitude/direction/threshold/speed/generalization and cannot be reduced to a known change in governing instructions, model/runtime or a simple retrieval difference.

## 31. Apparent hysteresis may be a boundary error

Complex-systems work warns that path dependence can appear when an analyst omits a relevant current-state variable. Therefore 'same visible situation, different response because of history' is not automatically evidence that the update rule itself changed.

Future B3 synthesis needs a hierarchy of explanations:
1. different currently represented content;
2. different latent/current state;
3. different accessibility/retrieval;
4. genuinely altered response/update dynamics.

Only the fourth is gap 21 in the strongest sense.

## 32. Second-order change is not inherently developmental progress

Dohare et al.'s loss-of-plasticity results give an important negative case: history can reduce future ability to learn.

So future changeability has at least direction and scope:
- more responsive;
- less responsive;
- differently responsive by context;
- more selective;
- rigid/locked-in.

Any project mechanism that only rewards increasing sensitivity would misunderstand the target.

## 33. Exact next question

B3 must now test whether this distinction survives cases where lower-level components turn over, where macro continuity is preserved despite micro change, and where the only persistent substrate is external memory/project state rather than model weights.

**B3 НЕ завершена.**
