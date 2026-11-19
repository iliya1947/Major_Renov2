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
