# Межобластная сверка после A1

**Статус:** этап 1 завершён 15.10.2026. Этап 2 не начат.

**Назначение:** сверить 12 первичных карт A1 до начала A2. Сверка проводится поэтапно, без попытки закрыть весь межобластной анализ одним ответом.

## Этапы

1. **Границы областей, дубли и неверно разделённые темы — завершён.**
2. Зависимости и пересечения между областями — не начат.
3. Пропущенные вопросы, видимые только межобластно — не начат.
4. Противоречия, терминологические ложные совпадения и несовместимые постановки — не начат.
5. Пакет конкретных поправок для A2 каждой области — не начат.

---

# Этап 1 — границы, дубли и неверно разделённые темы

## Как проверялось

Сопоставлены все 12 актуальных `INDEX.md` и итоговые `UNDERSTANDING.md`.

Дополнительно проверены все 66 пар областей по формулировкам вопросов. Лексическое сходство использовалось только как способ найти подозрительные зоны; решение о дубле принималось после содержательного сравнения. Совпадение слов вроде `memory`, `adaptation`, `plasticity`, `identity` или `instruction` само по себе дублем не считается.

## Главный вывод

**Ни одну из 12 областей не нужно удалять или объединять целиком.** Карта в целом разделена осмысленно.

Проблема находится ниже уровня областей: ряд тем повторяется в нескольких картах без достаточно явной маркировки **уровня анализа**. Это создаёт риск, что A2 повторно исследует один вопрос как будто он один и тот же, хотя на самом деле речь идёт о разных объектах.

Основное исправление для A2: не механически удалять повторяющиеся термины, а закрепить для каждой области собственный объект объяснения и на стыках оставлять cross-reference.

## Рабочие границы 12 областей

### №1 Психология развития личности

**Собственная область:** структура и изменение person-level индивидуальных различий во времени: traits, personality states как часть trait-dynamics, personality development, lifespan trajectories, person–environment transactions, agency в развитии личности.

**Не её основной объект:**
- identity как самостоятельная social/self system → №5;
- мотивационные механизмы goals/values/interest → №4;
- нейронные механизмы изменения → №6.

**Граничный дубль:** identity development присутствует и в №1, и в №5. В A2 №1 должен сохранять только вопрос, **как identity относится к более общей personality development**; детальная теория identity development принадлежит №5.

### №2 Когнитивная психология и память

**Собственная область:** human cognitive memory — encoding, consolidation, storage/representation, retrieval, forgetting, reconstruction, episodic/semantic/autobiographical memory, generalization из памяти.

**Не её основной объект:**
- acquisition of behavior/associations → №3;
- engineered memory architecture → №9;
- ChatGPT product memory/files/history → №11;
- neural substrate memory → №6.

**Граничные дубли:**
- implicit memory ↔ implicit learning;
- generalization/transfer;
- forgetting ↔ extinction;
- metamemory ↔ metacognition.

Для A2: №2 рассматривает эти темы со стороны **representation/retention/retrieval**, №3 — со стороны **acquisition/change in behavior**.

### №3 Психология обучения и поведения

**Собственная область:** изменение поведения/предсказаний/ассоциаций под влиянием опыта, feedback, consequences, practice and observation.

**Не её основной объект:**
- why something becomes valuable/interesting → №4;
- memory retention/retrieval → №2;
- algorithmic machine learning adaptation → №10;
- neural implementation → №6.

**Граничные дубли:**
- reinforcement learning с №10;
- exploration/generalization/transfer;
- feedback learning;
- implicit learning с №2.

Для A2: №3 оставляет **psychological/behavioral learning phenomena and theories**; №10 — computational/engineering algorithms.

### №4 Мотивация, эмоции и интересы

**Собственная область:** value, significance, goals, effort, persistence, approach/avoidance, curiosity, interest, affect/emotion и их dynamics.

**Не её основной объект:**
- identity-specific motives и group/self processes → №5;
- acquisition mechanism через reinforcement → №3;
- personality structure → №1.

**Граничный дубль:** goals, values, social comparison, internalization, curiosity/exploration. В A2 №4 отвечает за **почему/насколько нечто значимо и поддерживает действие**, №3 — за **как опыт меняет learned behavior**, №5 — за **как это связано с self/group identity**.

### №5 Социальная психология и идентичность

**Собственная область:** self, personal/social/relational identity, roles, groups, norms, belonging, relationships, influence, reputation, social comparison, social context.

**Не её основной объект:**
- общая personality development → №1;
- general motivational dynamics → №4;
- agent social simulation → №9.

**Граничный дубль:** identity development с №1 и identity motives с №4. В A2 №5 является главным местом для **identity-specific constructs and mechanisms**.

### №6 Нейробиология и нейропластичность

**Собственная область:** biological mechanisms and levels of experience-dependent neural change: synaptic, cellular, molecular, circuit, systems and lifespan plasticity.

**Не её основной объект:**
- behavioral learning theory → №3;
- cognitive memory theory → №2;
- abstract stability/adaptation principles → №7;
- ML stability–plasticity → №10.

**Критическая терминологическая граница:** `plasticity` здесь означает neural/biological change. Совпадение со `stability–plasticity dilemma` в №10 и adaptation/stability в №7 не должно превращаться в прямое отождествление.

### №7 Кибернетика, сложные системы и самоорганизация

**Собственная область:** domain-general formal concepts: feedback, regulation, stability, attractors, path dependence, emergence, self-organization, adaptive systems, autonomy, robustness, multiscale organization.

**Не её основной объект:**
- конкретные ML algorithms → №10;
- конкретная agent architecture → №9;
- neural implementation → №6.

**Самая сильная зона терминологического наложения:** №7 ↔ №10. Слова adaptation, control, stability, plasticity, exploration встречаются массово в обеих картах.

Для A2 граница должна быть жёсткой:
- №7 — **общий системный принцип и условия его применимости между доменами**;
- №10 — **конкретный computational learning/adaptation mechanism**.

### №8 Архитектура и поведение GPT/LLM

**Собственная область:** model-level architecture, training/post-training, inference behavior, context, ICL as model phenomenon, decoding, representations, factuality, model-level instruction following, LLM-specific adaptation.

**Не её основной объект:**
- orchestration of model+tools+memory as agent → №9;
- general ML adaptation algorithms → №10;
- exact ChatGPT product behavior → №11;
- design of prompts/project instructions → №12.

**Крупные boundary leaks:**
1. instruction hierarchy / prompt sensitivity / long context ↔ №12;
2. tool calling ↔ №9;
3. continual learning/fine-tuning ↔ №10;
4. model/runtime/product boundary ↔ №11.

Правило A2:
- №8 спрашивает **что модель умеет/почему ведёт себя так**;
- №12 — **как проектировать и проверять instructions**;
- №9 — **как составная agent system использует модель**;
- №11 — **что конкретно даёт текущий продукт ChatGPT**.

### №9 ИИ-агенты и когнитивные архитектуры

**Собственная область:** composite agent systems: perceive–decide–act loops, goals, planning, tools, engineered memory, reflection, long-horizon state, action selection, autonomy, cognitive architectures.

**Не её основной объект:**
- bare LLM mechanisms → №8;
- general learning algorithms → №10;
- product feature availability → №11;
- prompt wording/techniques → №12;
- human memory theory → №2.

**Настоящие дубли для A2:**
- sparse/delayed reward и policy learning с №10;
- reflection/self-correction с №12;
- engineered memory terminology с №2;
- tool/action instructions с №12;
- product actions/permissions с №11.

Граница: №9 исследует **system architecture and control loop**, а соседние области — соответствующий механизм на своём уровне.

### №10 Машинное обучение и адаптивные системы

**Собственная область:** algorithms/systems that adapt parameters, representations, policies, data selection or architecture: continual/online learning, transfer, domain adaptation, meta-learning, RL, personalization, drift adaptation.

**Не её основной объект:**
- psychological learning → №3;
- abstract systems theory → №7;
- LLM-specific implementation details → №8;
- agent orchestration → №9;
- ChatGPT product behavior → №11.

**Самые плотные дубли:** №7↔10, №8↔10, №3↔10, №9↔10.

Для A2 №10 должен быть общим engineering-level каталогом adaptation methods; соседние области должны оставлять только domain-specific instantiation или conceptual relation.

### №11 Возможности ChatGPT

**Собственная область:** актуальные product facts: Projects, project memory, files/sources, history, plugins/apps, Work, browser, automations, limits, permissions, plan/region variability, current product behavior.

**Не её основной объект:**
- prompt design → №12;
- model architecture/capability in abstraction → №8;
- agent architecture as research field → №9.

**Крупный дубль №11↔12:** project instructions.

Граница для A2:
- №11: **что project instructions представляют собой в текущем продукте, где действуют, с чем взаимодействуют, какие имеют документированные ограничения**;
- №12: **как их формулировать, структурировать, тестировать и поддерживать**.

### №12 Prompt Engineering и проектные инструкции

**Собственная область:** design, composition, robustness, evaluation and maintenance of prompts/instructions, persistent guidelines, examples, wording, hierarchy as instruction-design concern, prompt optimization.

**Не её основной объект:**
- underlying model capability/training mechanism → №8;
- full agent orchestration/policy → №9;
- product feature facts → №11;
- runtime guarantees not created by prompt text.

**Главные boundary leaks:** №8↔12, №9↔12, №11↔12. Они исправляются не удалением области, а маркировкой уровня.

---

## Настоящие дубли/утечки границы, которые надо исправить в A2

1. **№1 ↔ №5 — identity development.** Детальная identity theory остаётся в №5; №1 хранит связь identity с personality development.
2. **№2 ↔ №3 — implicit learning/memory, generalization, forgetting/extinction.** Разделить acquisition/change и retention/retrieval.
3. **№3 ↔ №10 — reinforcement learning, transfer, exploration, feedback.** Psychology vs ML algorithmics.
4. **№4 ↔ №5 — identity-related goals/values/motives.** General motivation vs identity/social-specific mechanisms.
5. **№6 ↔ №7 ↔ №10 — plasticity/stability/adaptation.** Biological vs formal systems vs ML meanings; прямые аналогии запрещены без отдельного обоснования.
6. **№7 ↔ №10 — adaptation/control.** Общая теория vs engineered adaptation.
7. **№8 ↔ №9 — tools, state, model-vs-agent capability.** Bare model vs composite agent.
8. **№8 ↔ №10 — fine-tuning/continual learning/adaptation.** LLM-specific instantiation vs general ML methods.
9. **№8 ↔ №12 — instruction following, hierarchy, prompt sensitivity, long context, ICL.** Model phenomenon/capability vs instruction design/evaluation.
10. **№9 ↔ №10 — RL, learning from interaction, self-improvement.** Agent loop/system adaptation vs learning algorithm.
11. **№9 ↔ №12 — decomposition, reflection, tool instructions, prompt injection.** Agent-level orchestration vs prompt-level technique.
12. **№2 ↔ №9 ↔ №11 — слово “memory”.** Human cognitive memory vs engineered agent memory vs ChatGPT product memory/history/files.
13. **№11 ↔ №12 — project instructions.** Product semantics/capability vs design/maintenance methodology.

## Темы, которые выглядят одинаково, но НЕ являются дублями

1. Human `plasticity`, complex-systems `adaptation`, ML `stability–plasticity`.
2. Human cognitive memory, agent memory, ChatGPT memory.
3. Psychological RL, ML RL, agent-level reward/credit assignment.
4. Personality identity, social identity, agent persona.
5. Human goals/motivation, agent goals, optimization objectives.
6. Human self-regulation, cybernetic regulation, adaptive control.
7. In-context learning, psychological learning, continual ML learning.

Эти совпадения должны быть явно помечены в A2 как разные levels/constructs, иначе дальнейший синтез будет склонен делать ложные аналогии.

## Итог этапа 1

1. Структура из 12 областей сохраняется.
2. Объединять или удалять целые области не требуется.
3. Основная проблема — **boundary leakage на уровне отдельных вопросов** и одинаковые термины для разных механизмов.
4. Зафиксированы 13 основных зон дублей/утечек.
5. Для каждой области определён рабочий объект исследования, который должен использоваться при A2.

**Этап 2 — зависимости и пересечения — в этом проходе не начинался.**
