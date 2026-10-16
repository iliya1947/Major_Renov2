# A1/A2 №10 — Машинное обучение и адаптивные системы: накопленное понимание

**Статус:** A1 завершена 15.10.2026, A2 — 16.10.2026. Ниже сохранено понимание структуры области и добавлены выводы финальной картографии после межобластной сверки.

## 1. «Адаптация» в ML — не один вид изменения

Нужно различать как минимум:
- parameter update;
- architecture/capacity change;
- representation change;
- data/replay selection;
- optimizer/hyperparameter adaptation;
- policy adaptation;
- personalization;
- test-time adaptation;
- distributed/federated update.

Поэтому later research должен всегда спрашивать **что именно меняется**, **каким сигналом** и **на каком timescale**.

## 2. Contextual adaptation и persistent learning нельзя смешивать

Область №8 уже отделила context-conditioned behavior LLM от weight updates. Область №10 добавляет общий ML-уровень: persistent adaptation может происходить через fine-tuning, continual learning, architecture change, replay and other mechanisms, но transient inference conditioning itself не является тем же процессом.

## 3. Stability–plasticity — центральная, но двухсторонняя проблема

Continual-learning literature выделяет как минимум две независимые failure directions:
- catastrophic forgetting — новое разрушает полезное старое;
- loss of plasticity — система сохраняет старое, но теряет способность эффективно учить новое.

Следовательно, successful adaptation требует не просто «меньше забывать».

## 4. Иногда забывание нужно

Concept-drift and nonstationary-stream research показывает, что старые закономерности могут стать неактуальными. Поэтому perfect retention также может быть дефектом.

Future work должно различать:
- useful retention;
- interference;
- deliberate/functional forgetting of obsolete structure;
- recurring concepts, которые могут снова стать полезными.

## 5. Continual, online, transfer, meta and test-time learning решают разные задачи

- **online learning** — последовательное обновление по поступающим данным/feedback;
- **continual/lifelong learning** — накопление/обновление знаний across tasks/domains/time;
- **transfer learning** — использование knowledge from source to target;
- **meta-learning** — learning how to adapt across task distributions;
- **test-time adaptation** — adaptation during deployment/test conditions;
- **domain generalization** — robust behavior on unseen domains without target adaptation.

Одинаковое слово “adaptation” не делает эти paradigms interchangeable.

## 6. Nonstationarity требует решения «когда меняться»

Adaptive system должен не только уметь обновляться, но и решать:
- произошёл ли meaningful shift;
- является ли он временным noise;
- достаточно ли evidence;
- какое изменение требуется;
- нужно ли сохранить old regime because it may recur.

Drift detection/uncertainty therefore forms a separate gating problem from adaptation algorithm itself.

## 7. Быстрая адаптация может быть узкой

Meta-learning/few-shot methods optimize rapid change relative to an assumed task distribution. Быстрое приспособление к nearby tasks не гарантирует robust adaptation far outside that distribution.

Это будущая проверка против слишком сильной аналогии «мета-обучение = универсальная способность учиться».

## 8. Data exposure itself can be adaptive

Curriculum learning, active learning, replay and data selection change not only the learner but **what experience reaches the learner and when**.

This creates a future branch important for experience-based systems:
- passive experience stream;
- selected/replayed experience;
- actively queried information;
- ordered curriculum.

A1 does not choose among them.

## 9. Representations constrain future adaptability

Self-supervised, multi-task and transfer-learning research suggests that what is learned as a representation shapes later sample efficiency, transfer and interference. But representation useful for one family of tasks may suppress information needed elsewhere.

Thus “general representation” is itself an empirical claim, not a neutral substrate.

## 10. Adaptive control adds a different standard of success

Adaptive control emphasizes stability and guarantees under explicit model/uncertainty assumptions, whereas much ML/RL emphasizes empirical return or predictive performance.

Later synthesis should not import “adaptation” from one field without carrying its success criterion and assumptions.

## 11. Personalization is not equivalent to learning an identity

A model can be personalized to user-specific distributions or feedback while merely fitting recent preferences. This is technically important but conceptually different from a self-directed history-dependent individuality.

Therefore personalization research is relevant comparison material, not proof of the experiment’s desired phenomenon.

## 12. Deployed adaptation creates governance and safety questions

A system that continually changes can:
- learn from poisoned data;
- amplify feedback loops;
- drift in fairness or objectives;
- become hard to audit;
- require rollback/versioning.

Thus adaptive ML cannot be evaluated only by instantaneous accuracy.

## 13. Что A1 №10 дала общей программе

Получена карта из **398 вопросов именно области №10**, в 36 блоках. Она нужна, чтобы позже не смешивать:
- online and continual learning;
- transfer and adaptation;
- domain adaptation and generalization;
- test-time and persistent learning;
- catastrophic forgetting and loss of plasticity;
- retention and functional forgetting;
- fast adaptation and broad generalization;
- active data acquisition and passive exposure;
- personalization and identity;
- ML adaptation and adaptive-control guarantees.

## 14. Граница текущего результата

В этом проходе **ни один из 398 вопросов области №10 не исследовался глубоко**. Источники использовались для первичной картографии paradigms, forms of adaptation, stability–plasticity problems, nonstationarity and evaluation boundaries.

A1 №10 отвечает только на вопрос:

**«Какие формы machine learning adaptation необходимо исследовать, чтобы позже понять, как система может накапливать и пересматривать приобретённое без либо катастрофического стирания прошлого, либо утраты способности меняться, не сводя адаптацию к одному алгоритму?»**

**Следующий шаг общего процесса:** A1 №11 «Возможности ChatGPT».


---

# A2 — что изменилось в понимании области

## 15. Главный вопрос ML — не «адаптируется ли система», а «что именно адаптируется»

После A2 слово `adaptation` без объекта стало практически бесполезным.

Меняться могут:
- base parameters;
- adapters/modules;
- representation;
- policy;
- optimizer/update rule;
- normalization/statistics;
- routing;
- architecture/capacity;
- replay/data selection;
- external memory/knowledge state.

Два systems могут показывать одинаковое behavioral change при совершенно разном locus of change.

Для будущего проекта это защищает от слишком общей фразы «ИИ научилась на опыте».

## 16. Persistence — отдельная ось от adaptation mechanism

Один механизм может менять поведение:
- только на одном batch/test window;
- до конца session;
- в persistent external state;
- в learned adapter/module;
- в core parameters.

Следовательно, later causal model must separately ask:
1. **what changed?**
2. **how long does it persist?**
3. **under what conditions is it expressed?**
4. **can it be rolled back/revised?**

## 17. Stability–plasticity имеет две симметричные failure directions

A1 уже зафиксировала catastrophic forgetting.

A2 усилила противоположность:
**loss of plasticity / catastrophic remembering** — чрезмерное сохранение старого может сделать систему неспособной эффективно осваивать новое.

Поэтому будущему acquired experience нельзя максимизировать persistence.

Слишком слабая continuity разрушает trajectory.
Слишком сильная continuity превращает history в lock-in.

## 18. Forgetting может быть функциональной частью adaptation

В nonstationary systems прошлое может стать:
- obsolete;
- context-specific;
- temporarily irrelevant;
- useful again if an old regime recurs.

Это значит, что later mechanism должен различать:
`forget`, `deactivate`, `archive`, `supersede`, `retain for possible recurrence`.

Простая цель «никогда ничего не терять» инженерно и концептуально неверна.

## 19. Replay и abstraction — принципиально разные операции

Experience replay:
- выбирает old samples/trajectories;
- снова подаёт их learner;
- поддерживает old performance or transfer.

Abstraction:
- преобразует examples;
- извлекает structure/rule/representation.

Повторное exposure к прошлому может поддерживать behavior без появления reusable understanding.

Это напрямую соединяется с №2 и №9:
**replayed history ≠ generalized acquired experience**.

## 20. Выбор replay data сам формирует будущую trajectory

Replay buffer — не нейтральный archive.

Его selection policy решает:
- что старое остаётся активным;
- что забывается;
- какие редкие события сохраняются;
- какие common patterns получают disproportionate rehearsal.

Поэтому replay может создавать path dependence так же, как retrieval №7/9.

## 21. Drift attribution должен быть двусторонним

Если system behaves differently at T2, возможны два fundamentally different causes:

1. **environment/data-generating process changed**;
2. **learner/model/system changed**.

И часто оба одновременно.

Concept drift literature полезна именно этой дисциплиной причинности:
нельзя автоматически интерпретировать deterioration/improvement as internal development.

## 22. Не всякий drift одинаков

Нужно различать:
- input/data distribution drift;
- concept/relationship drift;
- label/feedback availability change;
- user-preference drift;
- model/system drift;
- objective/value drift.

Последняя категория особенно важна:
изменение statistical environment не равно изменению того, **что система считает целью**.

## 23. Adaptation gating предшествует adaptation itself

До update возникает отдельный вопрос:
**достаточно ли evidence, что устойчивое изменение вообще произошло?**

Если labels delayed/absent, drift detection itself uncertain.

Это сильный инженерный аналог no-update problem №3:
не всякая новизна/ошибка должна немедленно менять persistent state.

Но ML thresholds не являются готовым психологическим/agent mechanism for our project.

## 24. Personalization и individualization нужно разорвать окончательно

Personalization может создавать:
- user profile;
- preference estimator;
- user-specific policy;
- tailored ranking/output;
- per-user embeddings.

Всё это может быть highly persistent and history-sensitive.

Но объектом adaptation остаётся **модель пользователя или policy serving the user**.

Это не то же самое, что сама system develops:
- own values;
- own interests;
- own enduring self-trajectory.

Поэтому персонализация — потенциальный компонент interaction history, но не evidence individuality.

## 25. Personalization может сама создавать то, что потом измеряет

Recommender feedback loop:

`estimated preference → exposure → user interaction → new data → updated preference estimate`.

Такая система partly shapes future evidence about the user.

Для нашего project this is a useful warning:
memory/retrieval/choice mechanisms могут **создавать собственную подтверждающую data stream**.

Это одна из strongest cross-links №10 ↔ №7/9.

## 26. RL решает другую задачу, чем «что стало значимым»

RL полезен для:
- state/action formalization;
- delayed outcomes;
- temporal credit assignment;
- exploration;
- policy adaptation.

Но standard RL assumes some reward/objective.

Даже perfect answer to:
**«какое раннее действие вызвало reward?»**

не отвечает:
**«почему именно этот outcome должен стать значимым acquired experience, если values заранее не заданы?»**

Поэтому reward/credit machinery может быть техническим инструментом later synthesis, но не заменяет №4/9.

## 27. Meta-learning тоже не означает развитие личности

Meta-learning может изменить:
- learning rate;
- initialization;
- exploration;
- update strategy;
- rapid-adaptation capability.

То есть history across tasks меняет **how the system learns**.

Это очень релевантно к нашей идее history-dependent future responsiveness.

Но optimization target/task distribution обычно заданы externally.

Следовательно:
`learning how to adapt` ≠ `developing own values/goals`.

## 28. Data selection — такая же часть adaptation, как weights

Active learning, curriculum, replay, sampling and recommendation decide **what is encountered next**.

Это делает ML especially relevant to our causal loop:
- learning algorithm changes from data;
- data-selection policy changes future data;
- future data changes the learner again.

Получается reciprocal loop similar to №1, №5, №7 and №9.

Но whether future ChatGPT participant can control enough of this loop is product/agent question №9/11.

## 29. Protected invariants и adaptive state не противоречат development

Safe deployed systems often preserve some higher-level constraints while allowing lower-level components to adapt.

Для нашего project this provides a useful abstract compatibility:
- fixed safety/system boundaries;
- revisable acquired history;
- changing lower-level choices.

Это **не** требует freezing a personality.

Именно detailed distinction between constraint and script from №7 matters here.

## 30. Evaluation target проекта принципиально шире обычных ML metrics

ML typically measures:
- accuracy/return;
- forgetting;
- forward/backward transfer;
- adaptation speed;
- regret;
- calibration;
- resources.

Для нашего experiment эти metrics могут оценивать pieces, но конечный вопрос другой:

**стала ли уникальная история causally relevant to later revisable choices without a pre-scripted personality endpoint?**

Поэтому ML cannot supply final success criterion by itself.

## 31. Что область №10 реально даст позднему синтезу

Не algorithm “for individuality”, а engineering vocabulary and trade-offs:

1. **specify what changes;**
2. **separate adaptation target from persistence;**
3. **retain without losing plasticity;**
4. **forget obsolete structure when necessary;**
5. **distinguish replay from abstraction;**
6. **treat replay/data selection as causal trajectory shapers;**
7. **distinguish environment drift from learner drift;**
8. **gate updates under uncertainty;**
9. **separate personalization from individualization;**
10. **use RL credit only where reward/objective assumptions apply;**
11. **separate meta-adaptation from values/goals;**
12. **preserve protected constraints while allowing lower-level revision.**

## 32. Финальная граница A2 №10

Самые важные deep-dive ветви для фазы B:
- continual learning beyond catastrophic forgetting;
- loss of plasticity/catastrophic remembering;
- beneficial forgetting and recurring regimes;
- replay selection vs abstraction/generalization;
- task-free/drift-aware adaptation;
- environment vs system drift attribution;
- personalization feedback loops;
- temporal credit assignment and limits of reward-based framing;
- meta-learning/adaptation-rule change;
- protected invariants vs adaptable state.

Concrete agent experience architecture остаётся primary №9, actual ChatGPT mechanisms — №11.

## 40. B5 formal transfer boundary

Temporal-credit algorithms are not a ready-made solution for this experiment because they presuppose a target return.

Their transferable contribution is narrower: separating delayed causal influence from temporal proximity, luck, routine actions and competing trajectory branches.

## 41. Outcome quality and decision quality must be separated

Under partial observability, a good decision can produce a bad outcome and a bad decision can succeed by luck or rescue.

Therefore future experience must not update a decision rule solely from terminal success/failure.

## 42. Baseline is part of a counterfactual attribution

Any statement like “this action mattered because otherwise Y would not have happened” depends on what alternative action/process is used as the counterfactual baseline.

For natural dialogue this baseline is often uncertain and cannot be rerun, so confidence should remain correspondingly limited.

**B5 НЕ завершена.**

