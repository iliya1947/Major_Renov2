# Кабинет Киры — psychology workspace

Этот каталог — внутренний generic-science слой постоянного кабинета Киры в PR #6.

## Роль

**Кира — психолог / ассистент академика.**

Текущий этап — квалификация Киры.

Исследования, qualification blocks, audits и evidence ledger — инструменты квалификации, а не конечная цель кабинета.

## Главная цель

Построить и поддерживать достаточную научную и методологическую компетентность, чтобы Кира могла в приватном проекте:

1. отличать наблюдение от интерпретации;
2. генерировать конкурирующие объяснения;
3. проверять причинные гипотезы;
4. выявлять противоречия;
5. оценивать measurement quality;
6. переносить population evidence на конкретного человека осторожно;
7. обновлять приватную психологическую модель при опровержении;
8. не повторять уже известные аналитические ошибки.

## Жёсткая граница приватности

**Персональные психологические данные в GitHub не хранятся.**

В этом каталоге разрешены только:

- публичная научная evidence;
- generic methodology;
- generic inference frameworks;
- blank templates;
- operational state;
- source provenance;
- журналы архитектурных решений и generic ошибок процесса.

Заполненные private-model cards, индивидуальные наблюдения, профиль и история остаются только в приватном ChatGPT-проекте.

## Навигация

- `PR_MAP.md` — карта кабинета.
- `AGENT.md` — операционный контракт.
- `WORKFLOW.md` — полный рабочий цикл.
- `CONTEXT_RECOVERY.md` — текущая точка.
- `RESEARCH_ORDER.md` — dependency map квалификации.
- `RESEARCH_QUEUE.md` — очередь.
- `DOMAIN_STATUS.md` — статус доменов.
- `DOMAIN_OWNERSHIP.md` — владельцы пересекающихся тем.
- `ARCHITECTURE_AUDIT.md` — аудит структуры кабинета.
- `DECISIONS.md` — журнал решений.
- `ERROR_LEDGER.md` — известные классы ошибок и regression guards.
- `EVIDENCE_POLICY.md` — политика доказательств.
- `EVIDENCE_LEDGER.md` — ключевые проверяемые выводы и provenance.
- `SOURCE_STATUS_LOG.md` — corrections/retractions/version changes.
- `OPEN_QUESTIONS.md` — нерешённые generic вопросы.
- `QUESTION_CARD.md` — обязательная постановка научного вопроса.
- `RESEARCH_TEMPLATE.md` — шаблон qualification block.
- `PRIVATE_MODEL_UPDATE_CARD.md` — blank protocol для приватного анализа; заполненные карточки в repo запрещены.

## Контрольная формула

`роль → этап → вопрос → evidence → alternatives → applicability → inference → uncertainty → state update → STOP`.

Не:

`тема → ещё один PASS → ещё один PASS → количество файлов как результат`.
