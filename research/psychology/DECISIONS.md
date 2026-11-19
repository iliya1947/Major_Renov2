# Журнал решений кабинета Киры

Фиксирует архитектурные решения и причины. Не хранит приватные факты пользователя.

## 2026-11-19

### Решение 1
**PR #6 является постоянным кабинетом Киры.**

Причина: роль, квалификация, evidence protocols, error controls и будущая revalidation должны иметь один устойчивый workspace.

Последствия:

1. PR #6 = Кира;
2. lifecycle = permanent `open + draft`;
3. PR не является merge-кандидатом;
4. research — текущий инструмент квалификации, не назначение PR.

### Решение 2
**Роль Киры: психолог / ассистент академика; текущий этап: квалификация.**

Причина: научная специализация блока не должна переопределять профессиональную роль.

### Решение 3
**Private model и user-specific evidence никогда не хранятся в GitHub.**

Причина: privacy boundary проекта.

Последствия:

- repo = generic science + protocols;
- private project = individualized model/evidence;
- заполненные private-model cards не коммитятся.

### Решение 4
**Квалификационная программа не выбирается под уже существующую приватную модель.**

Причина: это создало бы selection/confirmation bias.

Private model может выявить generic gap, но вопрос перед записью очищается от personal context.

### Решение 5
**Один continue = один законченный qualification block.**

Причина: защита от марафонского research drift и ложной завершённости.

### Решение 6
**PASS/file count не является результатом кабинета.**

Результат — качество психологического рассуждения.

### Решение 7
**Для значимого изменения приватной модели обязателен structured update gate.**

Использовать `PRIVATE_MODEL_UPDATE_CARD.md` в приватном проекте.

### Решение 8
**Известные ошибки ассистента считаются regression cases.**

Они фиксируются в `ERROR_LEDGER.md` и должны проверяться перед аналогичными выводами.

### Решение 9
**PR body содержит immutable identity/workspace block.**

Обычные state updates не имеют права переписывать этот блок.

## Формат нового решения

### Решение N
**Что решили.**

Причина: почему.

Основания: файлы/источники, если нужны.

Последствия: что меняется.

Reconsideration trigger: когда решение должно быть пересмотрено.


### Решение 10
**Номера каталогов qualification являются storage IDs, а не порядком программы.**

Причина: активный dependency map эволюционировал, тогда как исторические пути 01–20 уже используются материалами и не должны перенумеровываться.

Основания: `RESEARCH_ORDER.md`, фактическая структура `qualification/`, control-layer audit при закрытии CLN-03.

Последствия:
1. порядок определяет только `RESEARCH_ORDER.md`;
2. существующие пути сохраняются;
3. новый NDEV domain получает `21_neurodevelopmental_conditions/`;
4. следующий новый domain без storage path получает стабильный новый каталог до начала research block.

Reconsideration trigger: отдельное решение о миграции всей storage architecture.


### Решение 11
**BHC получает отдельный canonical storage `22_behavior_change_and_intervention_science/`.**

Причина: Phase C BHC в `RESEARCH_ORDER.md` шире, чем исторический каталог `16_psychotherapy_models/`. Поведенческие вмешательства, implementation, adherence, mechanisms of change и maintenance нельзя сводить к каталогизации психотерапевтических школ.

Последствия:
1. `22_behavior_change_and_intervention_science/` — canonical BHC storage;
2. `16_psychotherapy_models/` сохраняется как исторический тематический каталог;
3. BHC research не начинается до отдельного purpose/question gate.

Reconsideration trigger: отдельная migration/reorganization decision.


### Решение 12
**REL получает отдельный canonical storage `23_interpersonal_relationships_attachment_conflict_communication/`.**

Причина: Phase C REL в `RESEARCH_ORDER.md` включает attachment, close-relationship processes, conflict and communication and therefore шире исторических каталогов `09_interpersonal_understanding/` и `18_language_semantics_and_communication/`.

Последствия:
1. `23_interpersonal_relationships_attachment_conflict_communication/` — canonical REL storage;
2. исторические каталоги сохраняются;
3. REL research не начинается до отдельного purpose/question gate;
4. приватные relationship histories/messages никогда не сохраняются в repo.

Reconsideration trigger: отдельная migration/reorganization decision.


### Решение 13
**Phase C DEC переиспользует существующий `19_decision_strategy_and_prediction/` как canonical storage.**

Причина: исторический purpose этого каталога уже соответствует текущему DEC dependency (judgment, decision-making, prediction/risk) достаточно точно; создание нового storage ID не закрывает никакого reasoning gap и лишь дублировало бы структуру.

Последствия:
1. `19_decision_strategy_and_prediction/` — canonical DEC storage;
2. новый DEC-каталог не создаётся;
3. DEC-01 начинается только отдельным continuation после purpose/question gate.

Reconsideration trigger: если фактический DEC scope позже перестанет помещаться в этот storage без смыслового смешения.


### Решение 14
**SAF получает отдельный canonical storage `24_safety_crisis_referral_thresholds/`.**

Причина: Phase C SAF касается safety boundaries, crisis recognition и referral thresholds и не должен смешиваться с уже завершённым STR-каталогом `15_stress_trauma_and_adaptation/`.

Последствия:
1. `24_safety_crisis_referral_thresholds/` — canonical SAF storage;
2. `15_stress_trauma_and_adaptation/` сохраняется как canonical STR storage;
3. SAF-01 начинается только отдельным continuation после purpose/question gate;
4. individualized crisis/safety material никогда не сохраняется в repo.

Reconsideration trigger: отдельная migration/reorganization decision.


### Решение 15
**ETH получает отдельный canonical storage `25_ethics_individualized_inference_ai_analysis/`.**

Причина: Phase C ETH касается ethical boundaries individualized psychological inference и AI-assisted analysis; исторический `20_systems_modeling_of_personality/` относится к systems modeling и не закрывает ethical dependency.

Последствия:
1. `25_ethics_individualized_inference_ai_analysis/` — canonical ETH storage;
2. `20_systems_modeling_of_personality/` сохраняется отдельным историческим тематическим каталогом;
3. ETH-01 начинается только отдельным continuation после purpose/question gate;
4. individualized ethical cases/private psychological facts никогда не сохраняются в repo.

Reconsideration trigger: отдельная migration/reorganization decision.


### Решение 16
**Stage 1 qualification закрывается как COMPLETE_FOR_CURRENT_SCOPE; Stage 2 private application разрешён к началу после INT-05.**

Причина: Phase A–C закрыты для текущего scope, INT-01 не выявил blocking cross-domain contradiction, INT-02 формализовал person-level transfer, INT-03 — error repair, INT-04 — operational routing, INT-05 — final sufficiency audit 24/24 PASS.

Основания:

- `DOMAIN_STATUS.md`;
- `WORKFLOW.md`;
- `qualification/26_integration/INT-01...`;
- `INT-02...`;
- `INT-03...`;
- `INT-04...`;
- `INT-05_final_sufficiency_audit_stage2_readiness_requalification_contract.md`.

Последствия:

1. generic qualification больше не продолжается по инерции;
2. текущий рабочий режим = Stage 2 private application;
3. первый private task = baseline reconciliation текущей приватной модели с qualification stack;
4. individualized output остаётся вне GitHub;
5. psychiatry/psychopharmacology, behavioral genetics, psychoanalysis/psychodynamics и formal systems modeling остаются trigger-based specialty gaps;
6. strong specialty claim требует targeted requalification;
7. mutable/current claim требует проверки exact current primary/authoritative source;
8. qualification completion не отменяет diagnosis/prescribing/legal/high-stakes no-go boundaries.

Reconsideration trigger: major source/manual update, correction/retraction, new generic gap, repeated analytic error, specialty trigger, new high-stakes use-case.
