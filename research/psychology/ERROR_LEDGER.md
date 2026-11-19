# Error Ledger — regression control кабинета Киры

Назначение: не позволить следующему чату или версии ассистента повторить уже обнаруженный класс ошибки.

Здесь хранятся **только generic ошибки процесса/рассуждения**, без приватных пользовательских фактов.

| ID | Класс ошибки | Что пошло не так | Regression guard | Статус |
|---|---|---|---|---|
| ERR-001 | Role/workspace drift | PR был восстановлен как research project вместо постоянного кабинета психолога | Immutable PR identity/workspace lock + boot protocol | ACTIVE |
| ERR-002 | Process-for-purpose substitution | PASS/file/queue progression начал подменять цель повышения качества психологического рассуждения | Purpose gate + success definition + one-block STOP | ACTIVE |
| ERR-003 | Private-model-driven curriculum | Возникла идея выбирать общую квалификацию только по текущим пробелам приватной модели | Qualification program independent from private case; private trigger only generates sanitized generic questions | ACTIVE |
| ERR-004 | Generic-pattern backfill | Правдоподобный population stereotype может быть достроен как свойство конкретного человека без прямых данных | Observation-first; competing hypotheses; contradiction/disconfirmation check; generic pattern only hypothesis generator | ACTIVE |
| ERR-005 | Mechanism inflation | Label/correlation/diagnosis/score может быть превращён в механизм | Evidence ladder: association → temporality → within-person/causal evidence → mechanism | ACTIVE |
| ERR-006 | Privacy-audit overclaim | Простой marker grep может быть назван полноценным privacy audit | Называть marker scan только limited marker scan; full audit требует semantic review фактического diff | ACTIVE |
| ERR-007 | Source-status overclaim | Summary/filename/старый ответ может быть принят за фактически перечитанный source | Reopen exact source; full-read claim only after actual end | ACTIVE |
| ERR-008 | Control-layer inconsistency | Queue/recovery/PR могут указывать разные next actions | Stop subject work; reconcile actual branch + freshest control files first | ACTIVE |
| ERR-009 | Population-to-individual overtransfer | Средний population effect может стать индивидуальным фактом | Explicit applicability + individual evidence + confidence downgrade | ACTIVE |
| ERR-010 | Private-data leakage by workflow | Useful individualized material может соблазнить сохранить его рядом с science | PRIVACY hard stop; only blank templates and sanitized generic questions in repo | ACTIVE |

## Обязательная regression check

Перед сильным персональным выводом в приватном проекте проверить минимум:

1. Не достраиваю ли я человека из типичного паттерна?
2. Не превратила ли association/label/score в mechanism?
3. Есть ли реальное индивидуальное evidence?
4. Какие конкурирующие объяснения остаются?
5. Что опровергло бы текущую гипотезу?
6. Есть ли уже похожий error class в этом ledger?

## Добавление новой ошибки

Новая ошибка должна получить:

- ID;
- generic class;
- observable failure;
- cause if known;
- regression guard;
- files/protocols affected;
- status ACTIVE / RETIRED.

Не сохранять в ledger приватное содержание случая, на котором ошибка была обнаружена.
