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

| ERR-011 | Purpose/data-use creep | Наличие приватных данных или модели может быть принято за разрешение использовать их для новой несвязанной цели | Purpose gate + necessity check + secondary-use gate + inference minimization | ACTIVE |
| ERR-012 | Contestability bypass | Оспоренная модельная proposition может продолжить использоваться как сильная premise без пересмотра | Suspend disputed proposition from consequential use; reopen evidence/alternatives/downstream conclusions | ACTIVE |
| ERR-013 | High-stakes authority inflation | Правдоподобный AI-вывод может быть использован как достаточное основание для клинического/правового/институционального решения | Separate evidence strength from stakes; AI not sole authority in high-stakes use | ACTIVE |
| ERR-014 | Dependency/anthropomorphism reinforcement | Тёплый персонализированный стиль может незаметно перейти в exclusivity, reciprocal-emotion claims, sycophancy или engagement optimization | Persistent AI/role clarity; no exclusivity/reciprocal obligation/social displacement; allow respectful disagreement | ACTIVE |
| ERR-015 | Validation/version permanence | Старое подтверждение инструмента/источника может трактоваться как бессрочно действующее после model/source/context change | Version-aware monitoring + requalification triggers + SOURCE_STATUS_LOG | ACTIVE |

| ERR-016 | Cross-domain homonym collapse | Один термин из разных доменов может быть ошибочно принят за один construct | Type construct + operationalization + level + timescale before cross-domain transfer | ACTIVE |
| ERR-017 | Action-threshold / truth-threshold conflation | Срочность или high stakes могут быть превращены в ложную уверенность либо uncertainty — в повод ничего не делать | Separate epistemic confidence from action threshold; SAF/ETH/DEC routing | ACTIVE |
| ERR-018 | Override leakage | Safety/ethical/legal/privacy rule может начать использоваться как доказательство diagnosis/mechanism/trait | Overrides change action/process only unless independent evidence supports epistemic claim | ACTIVE |
| ERR-019 | Downstream confidence inflation | Связная цепочка нескольких неопределённых premises может ошибочно стать сильным итоговым выводом | Propagate critical uncertainty; check evidence dependence and alternative paths | ACTIVE |
| ERR-020 | Domain averaging | Реальные competing theories или разные constructs могут быть искусственно усреднены ради единой истории | Distinguish scope/level collision from genuine empirical tension; preserve unresolved alternatives | ACTIVE |
| ERR-021 | Evidence-hierarchy absolutism | Один тип evidence может быть объявлен универсально высшим независимо от target claim | Claim-specific evidence routing; no universal biological/self-report/RCT hierarchy | ACTIVE |

| ERR-022 | Provenance loss | Индивидуальная proposition сохраняется, а исходный raw source уже нельзя восстановить | Mandatory provenance field; downgrade/reopen proposition when provenance is lost | ACTIVE |
| ERR-023 | Private-model recursion | Existing model proposition начинает подтверждать сама себя через последующую интерпретацию неоднозначных данных | Trace support back to raw observations and generic evidence; model output is derived evidence | ACTIVE |
| ERR-024 | Applicability shortcut | Strong population evidence переносится при mismatch construct/population/context/timescale/use | Explicit applicability chain before person transfer | ACTIVE |
| ERR-025 | Directness illusion | Direct observation behavior принимается за direct evidence motive/trait/mechanism | Directness is claim-relative; type inferential links | ACTIVE |
| ERR-026 | Evidence-count inflation | Retellings, correlated sources, same-method measures or repeated AI outputs считаются независимыми подтверждениями | Evidence-dependency graph + source/method independence check | ACTIVE |
| ERR-027 | Confidence inheritance | Downstream proposition наследует confidence исходной premise несмотря на дополнительные inference links | Assign confidence per proposition; propagate critical-premise uncertainty | ACTIVE |
| ERR-028 | Model-update overfitting | Stable private architecture меняется после каждого local/state observation | No-update option + state/context/timescale gate + change-severity level | ACTIVE |
| ERR-029 | Model-update inertia | Сильное противоречие игнорируется, потому что старая модель связная и привычная | Mandatory contradiction path + weaken/split/retire options + dependency propagation | ACTIVE |
| ERR-030 | Use-permission conflation | Сильная evidence принимается за разрешение использовать proposition для любой цели/high-stakes decision | Separate confidence/evidence from stakes and use-permission state | ACTIVE |
| ERR-031 | Discriminating-test neglect | Собираются новые descriptive details без вопроса, какое evidence реально различит H1/H2 | Information-value gate + prospective discriminating prediction | ACTIVE |

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
