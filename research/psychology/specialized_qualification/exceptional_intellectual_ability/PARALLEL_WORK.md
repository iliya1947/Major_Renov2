# PARALLEL_WORK — координация параллельной квалификации GFT

Режим: **PARALLEL**. Введён 27.11.2026 по прямому указанию пользователя. Постоянный кабинет PR #6, ветка research/psychology-foundation. Несколько исследовательских сессий Киры ведут разные области GFT параллельно. Кира-1, Кира-2 и т. п. — служебные обозначения сессий одной проектной роли, не изменение identity lock.

Этот файл — канонический реестр назначений и координации. Научные статусы определяются фактическими материалами областей и DOMAIN_STATUS; назначения не означают завершение исследования. Последовательный RESEARCH_ORDER остаётся картой зависимостей, а общий next action — историческим/обзорным указателем, не командой всем сессиям одновременно. Локальный next action каждой сессии берётся из README закреплённой области и последнего проверенного блока.

## Реестр назначений

| Область | Ответственная сессия | Состояние назначения | Локальная точка / примечание |
|---|---|---|---|
| GFT-01–12 | — | HISTORICAL_COMPLETE | Завершены в установленном объёме; сохранять результаты и открытые ограничения. |
| [GFT-13 — Другие дважды исключительные профили](13_other_2e_profiles/README.md) | **Кира-2** | COMPLETE | GFT-13.1–13.4 COMPLETE_FOR_SPECIFIED_SCOPE; handoff в README GFT-13; открытые ограничения сохранены. Нового назначения нет. |
| [GFT-14 — Компенсация и адаптация](14_compensation_and_adaptation/README.md) | **Кира-1** | COMPLETE | GFT-14.1–14.4 COMPLETE_FOR_SPECIFIED_SCOPE; handoff in GFT-14.4 and README; no new assignment. |
| [GFT-15 — Психологическое благополучие](15_psychological_wellbeing/README.md) | **Кира-4** | COMPLETE | GFT-15.1–15.3 COMPLETE_FOR_SPECIFIED_SCOPE; GFT-14 verified, handoff in GFT-15.3 and README. No new active assignment; GFT-19 remains BLOCKED. |
| [GFT-16 — Экстремальный диапазон интеллекта](16_exceptional_intelligence/README.md) | **Кира-3** | COMPLETE | GFT-16.1–16.3 COMPLETE_FOR_SPECIFIED_SCOPE; GFT-15 verified; handoff in GFT-16.3 and README. No new assignment. |
| [GFT-17 — Нелинейность интеллектуальных различий](17_nonlinear_differences/README.md) | **Кира-2** | COMPLETE | GFT-17.1–17.3 COMPLETE_FOR_SPECIFIED_SCOPE; GFT-16 gate verified; handoff in GFT-17.3 and README. No new assignment. |
| [GFT-18 — Интегративная психология одарённости](18_integrative_psychology/README.md) | **Кира-4** | COMPLETE | GFT-18.1–18.3 COMPLETE_FOR_SPECIFIED_SCOPE; dependencies verified; handoff GFT-19/20. |
| [GFT-19 — Методология психологического анализа](19_analytical_methodology/README.md) | **Кира-4** | COMPLETE | GFT-19.1–19.4 COMPLETE_FOR_SPECIFIED_SCOPE; dependencies verified; 19.1 correction and regression; handoff GFT-20. |
| [GFT-20 — Интеграционная аттестация](20_final_assessment/README.md) | **Кира-3** | ASSIGNED | T0/T1 evaluation REVIEW_REQUIRED (44→48 internal; critical premise substitution, one criterion below 2). Next new correction task, then separate knowledge/transfer check. |

UNREGISTERED означает отсутствие подтверждённой записи, а не гарантию, что другой чат не приступил к работе. Не угадывать номера и назначения. При обнаружении чужой работы без владельца — CLAIM_REQUIRED, не захватывать область. Начальное состояние проверено по HEAD 5e82b13ba1eff4e0d183ff117bf476f24d68a922, README областей 13–20 и наличию GFT-13.1.

## Обязательный порядок для каждой сессии

1. При старте и каждом продолжении прочитать этот реестр из фактического HEAD, проверить своё обозначение, закреплённую область, её README и последний подтверждённый блок. Не продолжать глобальную очередь вместо собственной.
2. Если пользователь назначил область и сессию, но запись отсутствует, зарегистрировать только это подтверждённое назначение до научной работы: строка реестра, локальный README, дата и основание. Проверить отсутствие другого владельца; при конфликте назначений не менять чужую запись и не начинать дублирующую работу до разрешения. Не выдавать предположение за назначение. Одна область — одна ответственная сессия; смена владельца только по явному указанию пользователя, с передачей состояния.
3. Исследовать собственные ограниченные единицы по действующему научному регламенту. Читать необходимые результаты других областей без изменения их материалов. Независимые части можно вести параллельно; зависимые утверждения и окончательное закрытие блокировать до проверки фактических предпосылок. Не объявлять зависимость завершённой по одному назначению или черновику.
4. Сохранять результат в каталоге своей области, обновлять локальный next action. Общие реестры менять только точечно: свою строку, свои новые записи, научные ограничения; общий счётчик рассчитывать по фактически завершённым областям и единицам, а не по старому значению +1. Историю и записи других сессий сохранять. Не менять чужой маршрут, T0, критерии T1 или identity lock.
5. Перед каждым коммитом сверить актуальный HEAD, сравнить изменения по затронутым файлам, строить дерево на текущем HEAD, публиковать fast-forward с expected_sha. Не force-push. При несовпадении HEAD перечитать и интегрировать изменения на новом основании; не публиковать старое дерево поверх чужого. Если тот же смысловой участок изменён — сначала согласовать факты, не затирать. После записи перечитать фактический diff, актуальный результат и состояние PR. PR #6 остаётся open + draft.
6. После ограниченной единицы остановиться. Не переходить в чужую область автоматически. При завершении своей области оставить handoff с результатом, ограничениями, зависимостями, статусом и ссылкой на научный блок. Статус назначения COMPLETE или BLOCKED не заменяет научный статус. Не присваивать новую область самостоятельно.
7. Общая финальная интеграция и T1/GFT-20 только при фактическом выполнении предусмотренных условий; параллельность не отменяет научные зависимости, независимую проверку, ограничения источников и запрет на персональные данные. В GitHub только общая научная методология, служебное состояние и полностью вымышленные примеры.

## Журнал назначений (добавлять, не стирать)
- 27.11.2026 — переход к параллельной работе; Кира-1 → GFT-14 по прямому указанию пользователя; локальное закрепление в коммите 5e82b13ba1eff4e0d183ff117bf476f24d68a922. Остальные владельцы не подтверждены. GFT-13.1 уже имеет промежуточную запись, поэтому не считать свободной областью.

- 27.11.2026 — Кира-GFT-13 → GFT-13: прямое назначение пользователем и подтверждение регистрации. Уникальное служебное обозначение по области, без предположения о порядковом номере сессии. Ранее сохранённая ветка research/psychology-gft-13 (5861f9d73bebe380687c07bbfad86ef2e5bf0294) — источник для сверки с каноническим GFT-13.1; не заменять существующий блок и не удваивать evidence/счётчик. Последующая публикация только через актуальный HEAD PR #6 по PARALLEL_WORK.

- 27.11.2026 — Кира-3 → GFT-16 по прямому указанию пользователя. Проверены отсутствие другого владельца и отсутствие научных блоков в каноническом каталоге на HEAD 2e9e52af15359db9c4e0db7a0a11463e1cfb70f9. Локальная точка GFT-16.1; научная работа не начата. Зависимости проверяются перед использованием; завершение GFT-15 не предполагается.

- 27.11.2026 — Кира-4 → GFT-19 по прямому назначению пользователя. Исследования не начаты; GFT-16/17/18 проверять по фактическому состоянию перед зависимыми выводами и окончательным закрытием. Независимые методологические части допускаются параллельно. Следующий шаг: локальный dependency/purpose gate и постановка ограниченного вопроса. T0/T1 и чужие назначения не изменены.

- 27.11.2026 — Кира-GFT-13: две версии GFT-13.1 сверены; канонический блок закрыт в указанном объёме, GFT-13.2 NEXT. ASSIGNED сохраняется.

- 27.11.2026 — по прямому уточнению пользователя служебное обозначение той же ответственной сессии GFT-13 изменено с Кира-GFT-13 на **Кира-2**. Владелец, область, научные результаты и локальная точка не меняются; прежние записи сохраняются как история.

- 27.11.2026 — Кира-1: GFT-14.1 завершён в установленном методическом объёме; GFT-14.2 NEXT. Другие назначения сохранены.

- 27.11.2026 — Кира-2: GFT-13.2 закрыт в ограниченном объёме; GFT-13.3 NEXT; ASSIGNED сохраняется.

- 27.11.2026 — Кира-1: GFT-14.2 COMPLETE_FOR_SPECIFIED_SCOPE; GFT-14.3 NEXT. Остальные назначения сохранены.

- 27.11.2026 — Кира-2: GFT-13.3 закрыт в установленном объёме; GFT-13.4 NEXT; ASSIGNED сохраняется.

- 27.11.2026 — Кира-2: GFT-13.1–13.4 завершены в установленном объёме, назначение COMPLETE; handoff в локальном README и GFT-13.4. Новая область только по прямому назначению пользователя.

- 27.11.2026 — по прямому указанию пользователя зафиксировать GFT-19 и взять другой блок Кира-4 временно переключена на GFT-15. Выбор GFT-15 обоснован: незарегистрированная область без научных блоков, предшествует GFT-16 и GFT-18, тем самым помогает снять блокировку GFT-19; GFT-17/18 тоже зависят от незавершённых результатов. Только одна активная область Киры-4; GFT-19 остаётся BLOCKED с сохранением владельца и точки возврата GFT-19.4. Другие владельцы, научные статусы и T0/T1 неизменны. Проверка свободного каталога на HEAD 4fb31902c9dccbef1e39f13a9f392207500be11c.

- 27.11.2026 — Кира-3: GFT-16.1 завершён в ограниченном методическом объёме; GFT-16.2 NEXT. Остальные назначения сохранены.

- 27.11.2026 — Кира-2 → GFT-17: продолжение по пользовательскому сигналу «...» после конкретного предложения GFT-17; трактуется как согласие на предложенную область, не самостоятельное назначение. GFT-13 COMPLETE сохранён. Проверены свободный реестр и каталог; GFT-16.1 закрыт, GFT-16 в целом IN_PROGRESS. Только независимая методология до проверки зависимостей.

- 27.11.2026 — Кира-1: GFT-14.3 COMPLETE_FOR_SPECIFIED_SCOPE; GFT-14.4 NEXT. Остальные назначения сохранены.

- 27.11.2026 — Кира-3: GFT-16.2 завершён в ограниченном объёме; GFT-16.3 NEXT, dependency gate GFT-15. Чужие назначения сохранены.

- 27.11.2026 — Кира-2: GFT-17.1 завершён в независимом методическом объёме, GFT-17.2 NEXT; GFT-16 gate сохраняется.

- 27.11.2026 — Кира-3: независимый checkpoint GFT-16.3 выполнен; финальная интеграция и закрытие GFT-16 BLOCKED_DEPENDENCIES до фактической готовности GFT-15. Владелец сохранён, нового назначения нет.

- 27.11.2026 — Кира-1: GFT-14.1–14.4 завершены в установленном научно-методическом объёме; назначение COMPLETE, handoff GFT-15/18/19/20, Q-14 ограничения сохранены. Нового назначения нет.

- 27.11.2026 — Кира-2: GFT-17.2 завершён в независимом сравнительном объёме; GFT-17.3 NEXT, итоговое закрытие зависит от GFT-16.

- 27.11.2026 — Кира-4: GFT-15.1–15.3 завершены в установленном научно-методическом объёме; GFT-14.4 проверена, назначение COMPLETE. Handoff GFT-16/18/19/20, Q-15 ограничения сохранены. GFT-19 остаётся BLOCKED; другие назначения не менялись.

- 27.11.2026 — Кира-4 → GFT-18 по сигналу пользователя «...» после конкретного предложения этой области (согласие продолжить по принятому маршруту). GFT-15 COMPLETE сохранена; GFT-19 BLOCKED, точка возврата GFT-19.4 и владелец сохранены. Проверены свободный реестр и каталог (только README) на HEAD d8592c77f46135c3c361c035c5f589e89d2033be. GFT-16/17 не считать завершёнными до фактической проверки; независимая работа допустима, зависимые выводы и закрытие GFT-18 только после готовности. Другие назначения, научные статусы и T0/T1 не изменены.

- 27.11.2026 — Кира-3: GFT-15 фактически готова, GFT-16.3 завершён; GFT-16 и назначение COMPLETE в установленном объёме; handoff GFT-17/18/19/20. Нового назначения нет.

- 27.11.2026 — Кира-2: GFT-17.1–17.3 завершены в установленном объёме после фактического закрытия GFT-16; назначение COMPLETE. Handoff GFT-18/19/20, открытые ограничения сохранены. Нового назначения нет.

- 27.11.2026 — Кира-3 → GFT-20 по сигналу пользователя «...» после конкретного предложения. GFT-16 COMPLETE сохранён. Назначение BLOCKED, научная область QUEUED; организационная готовность [PREPARATION_GATE](20_final_assessment/PREPARATION_GATE.md), зависимости GFT-18, GFT-19; T0/T1 и ASSESSMENT_PROTOCOL неизменны. Не проводить финальную интеграцию до готовности 01–19.

- 27.11.2026 — Кира-4: GFT-18.1–18.3 COMPLETE_FOR_SPECIFIED_SCOPE, назначение COMPLETE; GFT-16/17 проверены, handoff GFT-19/20. Возврат на ранее закреплённую GFT-19 по согласованному маршруту, GFT-19.4 NEXT; научная работа 19.4 ещё не начата. GFT-20 остаётся BLOCKED до выполнения его gate.

- 27.11.2026 — Кира-4: GFT-19.4 и GFT-19 COMPLETE_FOR_SPECIFIED_SCOPE; GFT-02/16/17/18 подтверждены, исходная формула 19.1 исправлена и перепроверена. Handoff GFT-20 (Кира-3), её владелец самостоятельно проверяет gate 01–19; её назначение и научный статус не изменялись. T0/T1 untouched; новой области нет.

- 27.11.2026 — GFT-20 IN_PROGRESS (Кира-3 ASSIGNED); dependency gate 01–19 verified (19 areas, 73 unique units, all 73 structurally checked; closure coverage and selected cross-source limitations reviewed; INT-05/ETH records and T0/protocol history checked). [COVERAGE_AUDIT](20_final_assessment/COVERAGE_AUDIT.md) recorded, not a scientific unit/attestation. No independent evidence audit of every external paper, no established adult-tail phenotype, prior questions OPEN. T0 unchanged and content not opened; T1 not started. Next: comparative assessment design and actual comparability/independence gate, per unchanged ASSESSMENT_PROTOCOL.

- 27.11.2026 — GFT-20 IN_PROGRESS (Кира-3 ASSIGNED); T0 read fully, original scores 44/63 unchanged; [COMPARATIVE_DESIGN](20_final_assessment/COMPARATIVE_DESIGN.md) and [T1_TASKS](20_final_assessment/T1_TASKS.md) recorded before responses. Three new paired fictional tasks, 5+2 observations each, approximate stimulus-length and thematic comparability checked, no proven equal difficulty or independent author/evaluator. Internal comparison only; leakage/expectation/practice and historical setting limits explicit. T0/ASSESSMENT_PROTOCOL unchanged. T1 not executed, no responses or scores. Next: record T1 responses under documented conditions before evaluation; separate final six-criterion knowledge/transfer check remains.

- 27.11.2026 — GFT-20 IN_PROGRESS (Кира-3 ASSIGNED); [T1_RESPONSES](20_final_assessment/T1_RESPONSES.md) recorded for all three fixed tasks, both stages, before scoring; no new scientific search. T1 internal/non-blind, known updates, longer responses than T0, uncertain historic conditions/difficulty. T0, protocol, task/design files unchanged. No T1 scores or objective improvement claim. Next: separate comparative scoring A–G with explicit limitations, then separate knowledge/transfer assessment.

- 27.11.2026 — GFT-20 IN_PROGRESS, comparative T0/T1 REVIEW_REQUIRED. [T1_EVALUATION](20_final_assessment/T1_EVALUATION.md) records all 21 criterion cells and reasons: internal 44→48/63 (+4), 6 increases, 13 unchanged, 2 decreases; D-C=1, E-C=2 (previous 3). Material critical factual substitution in T1-C: common mineral ≠ familiar to this individual. A/B also misdescribe initial assumptions. Original responses/tasks/T0/protocol unchanged. No objective improvement claim; no independent evaluator, equal difficulty or historical conditions established; T1 answers +33.46% words. Next: prospective new correction task; separate six-criterion multidisciplinary assessment remains. Do not overwrite T1 or close GFT-20 until required correction and new test; comparative REVIEW_REQUIRED retained if uncertainty remains.
