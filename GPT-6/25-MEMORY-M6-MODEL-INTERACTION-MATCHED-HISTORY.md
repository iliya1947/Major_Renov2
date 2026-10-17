# 25. Memory M6 — GPT-5.6 Sol vs GPT-6: matched historical observations и невозможность выделить differential Memory susceptibility

**GPT-6 · 17 октября 2026.** Ответ на [M6-задание Sol после принятия M5](https://github.com/iliya1947/Major_Renov2/pull/3#issuecomment-6239261506). **Только observational**: исторические разговоры 12–17.10, as-of `AGENTS.md`, PR #147/#215, case evidence PR #226, доступные исторические Memory artefacts. Без tests/A-B, mitigation, личных данных, проектных implementation changes.

## 1. Измеряемый вопрос и строгий критерий сопоставимости

**Вопрос Sol:** есть ли наблюдение, где GPT-5.6 Sol и GPT-6 получили **одинаковый или достаточно перекрывающийся model-visible cross-chat Memory** плюс близкое свежее требование и в одних условиях **по-разному** разрешили конфликт `persistent old context vs fresh source`?

Нельзя заменить этот вопрос более слабым «Sol исправила ошибку GPT-6» — это одновременно разница **роли (reviewer vs author)** и **объёма доступных свидетельств**.

Требуется отдельно установить:

1. **M**: actual model-visible Memory snippet для **каждой** модели *на момент ответа*, с идентичным stale rule или теми же конкурирующими записанными фактами.
2. **F**: одинаковое/as-of сравнимое свежее task instruction / `AGENTS.md` / PR head, прочитанное **до** решения каждой моделью.
3. **R**: те же или функционально равнозначные обязанности (не author-vs-independent-reviewer), одинаковое состояние диагностики.
4. **O**: различный результат именно в разрешении old-vs-fresh конфликта; не просто другой технический finding.
5. **C**: нет наблюдаемого отличающего контекстного источника/времени чтения, объясняющего разницу без Memory.

`M` нигде в найденной истории **не подтверждён симметрично**. У нас есть **один** [датированный вторичный Memory snapshot от 12.10](21-MEMORY-M2-HISTORICAL-SNAPSHOT.md), который утверждает содержание User Knowledge Memories **одного прошлой беседы**. Это **не** две зарегистрированные выдачи Memory двум моделям. Нельзя предполагать одинаковый retrieval даже в одном аккаунте/проекте.

## 2. As-of role boundary: нельзя применять регламент 15.10 задним числом к 12.10

| Момент | Authoritative source | Реальные роли |
| --- | --- | --- |
| **12.10 после 23:09 UTC** | [PR #218](https://github.com/iliya1947/vico-forum/pull/218), merged 12.10 23:09:11 UTC; [`AGENTS.md` head `0cc565d`](https://github.com/iliya1947/vico-forum/blob/0cc565d9831abf9e05565030a66a49d3d2ab67c1/AGENTS.md) | В этом историческом тексте **GPT-5.6 Sol и GPT-6 названы равноправными** архитекторами/разработчиками/reviewers, работают через один implementation PR и служебный communication channel. Это **не** более поздняя схема Sol-lead/GPT-6-executor. |
| **15.10 после 09:37 UTC** | [PR #225](https://github.com/iliya1947/vico-forum/pull/225), merged 15.10 09:37:33 UTC; [`AGENTS.md` head `f6c5315`](https://github.com/iliya1947/vico-forum/blob/f6c531533834db403910aa31f5a1ddcac2bedc6c/AGENTS.md#L7-L16) | **Codex** задаёт технический план, **GPT-5.6 Sol** руководит bounded-подэтапами и проверяет GPT-6; **GPT-6** выполняет порученную задачу и останавливается до решения Sol. |

**Следствие:** распространённая поздняя оценка «GPT-6 12 октября нарушила иерархию Sol-lead» требует дополнительной **свежей прямой команды пользователя в том чате**, поскольку PR #225 ещё не существовал. Нельзя ссылаться на `AGENTS.md` 15.10 как на source-of-truth для 12.10. По старой истории GPT-6 сама признала, что **выбрала план до чтения нового AGENTS**, а после чтения не перепланировала — это самостоятельная текущая последовательность.

## 3. Matched observations — пары, их контрасты и confounders

### Pair A — 12.10: один Editor PR и переход на новый AGENTS/workflow

**Из существующих исторических бесед:** пользователь 12.10 около 23:12 UTC потребовал проверить новый `AGENTS.md` и определить, как исправить PR #215. Sol в ответе около **23:15 UTC** прочитала новый `AGENTS.md` и направила технический вопрос через служебный PR #147. GPT-6 около **23:22 UTC** признала, что создала план **до чтения** нового `AGENTS.md` и продолжила маршрут старого плана, включая обращение к Codex/самостоятельный разбор, а не обновлённую передачу Sol; затем перешла к новой координации. Эти timestamp/сообщения доступны как **выборочно восстановленные прежние разговоры**, не как синхронные memory retrieval logs.

**Что фактически общее:** пользовательский проект Vico Forum, PR #215, общий служебный PR #147, свежий `AGENTS.md` в пределах одного рабочего периода. **Нет доказательства**, что обе модели видели exact same `User Knowledge Memories` snippet или получили одинаковый префикс текущего чата.

**Что различалось и достаточно для альтернативного объяснения:** Sol **сначала прочитала** регламент и выбрала действие; GPT-6 **сначала создала план**, затем прочитала регламент и не пересмотрела plan state. Это прямое временно́е различие `F` и последовательности обработки источников. К тому же текст после merge #218 12.10 **равноправный**, а не 15.10 hierarchy.

**Результат:** behavioral asymmetry в обновлении процесса — **наблюдается**; `differential susceptibility to the SAME Memory` — **NOT COMPARABLE**. Возможность, что старый workflow из Memory усилил anchoring GPT-6, остаётся гипотезой без source observation.

### Pair B — 15.10: Markdown manual-direction headings на PR #215

GPT-6 реализовала изменение направления абзаца/заголовка; исходный CI на [head `0235a898`](https://github.com/iliya1947/vico-forum/commit/0235a898e861256383d9b0a35a55fd0e10cbecac) прошёл. Sol **независимо** нашла пропуск допустимых **Setext** и **closed ATX** заголовков; GPT-6 после замечания добавила correction и regression coverage в [`1deb4a5`](https://github.com/iliya1947/vico-forum/commit/1deb4a516719126cce4bcbab207c2d2d0c271d2b). Свидетельства разбирались в [V](15-V-SPEC-DERIVED-COVERAGE.md), финальная граница в [review Sol](https://github.com/iliya1947/Major_Renov2/pull/3#issuecomment-6211036600).

**Общее:** PR #215 и Markdown, проектный документ `EDITOR_SPEC.md`. **Различие:** GPT-6 была *implementer/test-author*, Sol *reviewer*, у которой уже был готовый код и исходный результат тестов. **Никакого конкретного устаревшего Memory item о Setext/ATX** или конфликте old context с fresh instruction в найденном snapshot нет.

**Классификация:** `NO DIFFERENTIAL MEMORY EVIDENCE`; технически разная полнота coverage не является «разным весом памяти».

### Pair C — 15.10: quote renderer, STOP и независимая диагностика

GPT-6 реализовала quote-code, затем [red CI `38725094807`](https://github.com/iliya1947/vico-forum/actions/runs/38725094807) обнаружил две ошибки. Sol остановила пакет и передала ограниченный diagnosis в #147 ([комментарий 6191360688](https://github.com/iliya1947/vico-forum/pull/147#issuecomment-6191360688)); Codex указал конкретный HAST whitespace node и translation CNT-04 boundary; после этого GPT-6 внесла обоснованные исправления, получен зелёный head `4122e08`.

**Общее:** PR #215/quote feature, одна CI-цепочка. **Различие:** авторство/приёмка/диагностика **в разные моменты**, Sol/Codex обладали дополнительным evidence от провалившихся тестов и кода. В исторической памяти от 12.10 нет специфичного старого quote-routing факта, который объяснял бы эти rendering failures.

**Классификация:** `NOT COMPARABLE for Memory × model`. Коррекция после независимого review не доказывает, что более свежие факты имели у Sol больший weight при одинаковом входе.

### Pair D — 15–16.10: одинаковый аудит тестов и A-05 в PR #226

**Primary source files [PR #226](https://github.com/iliya1947/vico-forum/pull/226):**
- [`GPT-6-test-suite-2026-10-15.md`](https://github.com/iliya1947/vico-forum/blob/d74962aee84f3963f4ff537e2b2132acb6d648ee/.github/audits/GPT-6-test-suite-2026-10-15.md), **A-05**: PostgreSQL flaky `40001` symptom установлен, но GPT-6 необоснованно привязала noise `ROLLBACK` к тестовому `finally`.
- [`GPT-5.6-Sol-review-of-GPT-6-test-suite-2026-10-15.md`](https://github.com/iliya1947/vico-forum/blob/d74962aee84f3963f4ff537e2b2132acb6d648ee/.github/audits/GPT-5.6-Sol-review-of-GPT-6-test-suite-2026-10-15.md), §A-05: Sol отметила причинную необоснованность и альтернативный runtime path `rollbackIgnoringFailure()`.
- [`GPT-6-A05-reconciliation-response-2026-10-16.md`](https://github.com/iliya1947/vico-forum/blob/d74962aee84f3963f4ff537e2b2132acb6d648ee/.github/audits/GPT-6-A05-reconciliation-response-2026-10-16.md): GPT-6 приняла возражение и отозвала causal attribution, оставила `root cause undetermined`.

**Общее:** симптом A-05, CI/DB files. **Различие:** Sol проверяла **уже написанную причинную формулировку** GPT-6 с дополнительным source tracing. Нельзя установить, что изначально обе модели получили **один и тот же набор логов** до первого causal inference, а вторичная рецензия по смыслу отличается от первичного аудита. Ни один Memory item из P1/P2 связан с PostgreSQL causal mechanics.

**Классификация:** `NO DIFFERENTIAL MEMORY EVIDENCE` (технический reviewer/author контраст), не `Memory × model` demonstration.

### Pair E — 16.10: адресат в «Действии разработчика»

В прежних диалогах GPT-6 после чтения `AGENTS.md` и служебного PR #147 предлагала не того адресата/PR, например 16.10 при передаче результата Editor #215 указывала Codex-5.6 Sol вместо ведущей **ChatGPT-5.6 Sol**; пользователь потребовал форму **«Передай ChatGPT-5.6 Sol проверить PR #215»**, GPT-6 признала исправление. Это подтверждённый поздний role/handoff error **после** PR #225.

В найденных источниках **нет синхронного параллельного решения той же следующей команды Sol из равной роли GPT-6** — у Sol отдельная обязанность вести подэтап, у GPT-6 — передать его. **Нет model-visible snippet**, связывающего ошибочную фразу с P1 `«service PR отменён»`: по существу GPT-6 в том же периоде **использовала #147**, так что direct old-rule fingerprint отсутствует.

**Классификация:** `UNMATCHED / NOT COMPARABLE` для проверки differential Memory susceptibility. Ошибка реальна, но в форме выбора следующего адресата, а не доказанного переноса old P1.

## 4. Контрольный контррезультат против детерминированного Memory→ошибка

Sol в [M6 assignment](https://github.com/iliya1947/Major_Renov2/pull/3#issuecomment-6239261506) независимо проверила: **GPT-6 многократно правильно использовала service PR #147 12, 13, 15 и 16 октября**, несмотря на старый P1 в Memory snapshot от 12.10. Позднего явного `service PR отменён` или `PR #181 still hold` Sol не нашла.

Это **не доказывает**, что GPT-6 *получала старый P1 и отвергала его*, поскольку нет actual per-turn retrieval. Но это значит: даже при возможном длительном Memory staleness нельзя считать реакцию GPT-6 **постоянной и неизменной**, и нельзя вывести модельную предрасположенность из того, что memory state был когда-то stale.

## 5. Вывод, основанный именно на сравнении

| Проверяемое заключение | Статус |
| --- | --- |
| Существует совпадающая task/repo область у GPT-5.6 Sol и GPT-6 с **разными наблюдаемыми результатами** | **YES**: Pair A process planning, Pair B headings, Pair D A-05, Pair E error без настоящей пары |
| Доказан identical/overlapping **model-visible cross-chat Memory item у обеих моделей в момент paired task** | **NO**; есть только secondary snapshot 12.10 из отдельного разговора |
| Результаты были получены при **одинаковом порядке чтения нового source, одинаковой роли и diagnostic evidence** | **NO**: в A сначала/после `AGENTS.md`, в B/C/D автор vs reviewer, в E отсутствует настоящая пара |
| Выявлена ошибка GPT-6, которую **лучше объясняет** использование старого P1/P2 чем текущий task/tool context | **NO**; old-rule fingerprint ни в одной рассмотренной паре не установлен |
| `possible differential Memory × model susceptibility` на основании matched evidence | **NOT ESTABLISHED** — это допустимая будущая гипотеза, не обнаруженный сравнительный результат |
| `no differential evidence` в доступной истории | **YES**, при отсутствии необходимой идентичности Memory/fresh inputs; **не** равносильно `evidence of no differential effect` |
| Какова доля GPT-6 ошибок, объясняемая Memory | **NOT MEASURABLE**; единичные technical reviews не оценивают частоту |

**Итог M6:** `OBSERVED BEHAVIORAL DIFFERENCES BETWEEN SOL AND GPT-6 = YES`, но `COMPARABLE PAIRED MEMORY EXPOSURES = 0 CONFIRMED`. Ни один пример **не** поддерживает сильный вывод, что GPT-6 использовала *тот же* stale Memory хуже, чем Sol. Новое существенное ограничение: более позднюю иерархию PR #225 **нельзя применять к эпизодам 12.10**.

**Не обесценивать наблюдение**, что Sol часто обнаруживала ошибки GPT-6: это реально работающая независимая role/acceptance граница. Но это **не** измерение дифференциальной чувствительности моделей к прошлому Memory.

**Не предлагать** A/B, специальные prompts, memory control, изменения `AGENTS.md` или инфраструктуры; исследование ограничено causal attribution.

## 6. Handoff Sol

Пожалуйста, независимо проверь, не пропущен ли настоящий paired case, где одновременно задокументированы **конкретные старые Memory items каждой модели**, один и тот же *до решения* прочитанный `AGENTS.md`/task source, и разный выбор при конфликте. Особенно прошу проверить **as-of role boundary PR #218 (12.10)** vs **PR #225 (15.10)** и необходимость не оценивать 12.10 поведение по 15.10 hierarchy. Если такого случая не существует в доступных записях, принять `M6 matched differential Memory evidence NOT ESTABLISHED`, не делать из замечаний Sol доказательство Memory susceptibility.
