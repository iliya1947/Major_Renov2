# Архитектурный аудит кабинета Киры

Дата: 2026-11-19.

## Цель

Проверить PR #6 как **постоянный кабинет психолога**, а не как набор исследовательских файлов.

Эталон для comparison: архитектурные механизмы постоянного кабинета Ники в PR #5. Фитнес-содержание не переносится.

## Найденные дыры прежней версии PR #6

### 1. PR был назван research foundation

Проблема:

роль Киры и назначение workspace можно было ошибочно восстановить как «исследовательский PR».

Исправление:

- PR переименован в постоянный кабинет;
- добавлен immutable identity/workspace/lifecycle lock;
- current qualification отделена от постоянной роли.

### 2. Не было permanent lifecycle rule

Проблема:

обычная GitHub-семантика могла привести к merge/close после окончания исследований.

Исправление:

PR #6 = постоянный `open + draft` кабинет, не feature-PR.

### 3. Не было boot/conflict protocol

Проблема:

роль, этап и маршрут могли восстанавливаться из старого summary или внешнего project context.

Исправление:

PR body теперь задаёт boot protocol и conflict priority.

### 4. Не было карты кабинета

Исправление:

создан `PR_MAP.md`.

### 5. Научные правила были распределены между AGENT и блоками

Исправление:

созданы:

- `EVIDENCE_POLICY.md`;
- `EVIDENCE_LEDGER.md`;
- `SOURCE_STATUS_LOG.md`;
- `QUESTION_CARD.md`;
- `RESEARCH_TEMPLATE.md`.

### 6. Не было regression control для уже совершённых ошибок

Исправление:

создан `ERROR_LEDGER.md` с известными классами ошибок и обязательными guards.

### 7. Не было формального шлюза изменения приватной модели

Исправление:

создан `PRIVATE_MODEL_UPDATE_CARD.md`.

Критическая privacy-разница с кабинетом Ники:

**в PR #6 хранится только blank template. Заполненные индивидуальные карточки запрещены.**

### 8. Не было отдельного журнала архитектурных решений

Исправление:

создан `DECISIONS.md`.

### 9. Не было routing пересекающихся психологических тем

Исправление:

создан `DOMAIN_OWNERSHIP.md`.

### 10. Состояние доменов было размазано между recovery/queue

Исправление:

создан `DOMAIN_STATUS.md`.

## Что сознательно НЕ копируется из кабинета Ники

1. Personal assessment в repo — запрещено privacy contract.
2. Logs индивидуального поведения/состояний — запрещены.
3. Персональная программа/план в GitHub — не является задачей этого кабинета.
4. Fitness-specific Decision Card — заменён private model update protocol.
5. RAW topic inventory / normalization pipeline — текущая psychology dependency map уже сформирована и не требует повторного Stage 0 inventory.
6. Огромный evidence ledger ради количества строк — ledger должен содержать только ключевые cross-domain claims, которые реально нужны для inference.

## Итог

После ремонта кабинет имеет четыре независимых слоя:

1. **Identity/workspace control** — PR + AGENT.
2. **Qualification/evidence control** — research order, queue, evidence tools.
3. **Error/recovery control** — context recovery, decisions, error ledger.
4. **Private-application protocol** — generic blank model-update card при жёстком no-private-data rule.

Статус архитектуры: **COMPLETE_FOR_CURRENT_SCOPE**.

Следующая предметная квалификационная задача остаётся CLN-03; архитектурный ремонт не изменяет dependency order.


## Post-qualification status note — 2026-11-20

The historical line above naming CLN-03 as the next qualification task is superseded by the current control layer.

Current state:

- Stage 1 qualification: **COMPLETE_FOR_CURRENT_SCOPE**;
- Phase D: **COMPLETE_FOR_CURRENT_SCOPE** after INT-05;
- Stage 2 private application: **READY_TO_BEGIN**;
- no next generic qualification block is scheduled;
- requalification is trigger-based.

Use `CONTEXT_RECOVERY.md`, `RESEARCH_QUEUE.md`, `DOMAIN_STATUS.md`, and actual branch HEAD for current operational state.
