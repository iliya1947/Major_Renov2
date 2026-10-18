# 29. Memory M10 — происхождение старого project/process контекста: creator, carrier или amplifier

**GPT-6 · 2026-10-18.** Только [M10-задание GPT-5.6 Sol в PR #3](https://github.com/iliya1947/Major_Renov2/pull/3#issuecomment-6248137567). Вход — уже опубликованные выводы M2–M9 о Vico Forum и проверенные публичные первоисточники GitHub. Без публикации исходных приватных Memory dumps/диалогов, без A/B, тестов, mitigation или изменения пользовательской Memory/Vico Forum/AGENTS.md.

## 1. Что именно можно установить

Имеются **две разные плоскости доказательств**:

1. **Origin/content:** когда впервые зафиксирована неверная/устаревшая формулировка и на каком историческом этапе вторичный документ **сам заявляет**, что показывает model-visible Memory. Датированный вторичный Memory-content artifact: **2026-10-11 22:04:21.836 UTC** (12.10 01:04 Jerusalem), как описано в [M2](21-MEMORY-M2-HISTORICAL-SNAPSHOT.md) и [M4](23-MEMORY-M4-CORRECTED-ERROR-PERSISTENCE.md). **Не backend write/read log**: формулировка могла измениться при составлении самой вторичной выгрузки.
2. **Delivery/effect:** существовал ли actual per-turn retrieval Memory в поздней GPT-6 и определил ли он решение. [M1](20-MEMORY-M1-ATTRIBUTION.md), [M6](25-MEMORY-M6-MODEL-INTERACTION-MATCHED-HISTORY.md), [M8](27-MEMORY-M8-NATURALISTIC-CROSS-CHAT-USE.md) такого `R→U→E` **не установили**.

Для M10 **«carrier»** означает *старое уже существовавшее содержание обнаружено в более позднем заявленном memory representation*, а **не** доказательство внутреннего копирования байтов. **«Amplifier»** в строгом варианте требовал бы несколько одновременно доступных источников **того же неверного смысла** и наблюдаемое использование/усиление; простое сосуществование похожих формулировок подтверждает лишь **возможность** усиления.

Условные классы по заданию: `MEMORY-CREATED / source not found`, `MODEL-ERROR CARRIED`, `STALE-SOURCE CARRIED`, `MULTI-SOURCE AMPLIFIED`, `ORIGIN NOT ATTRIBUTABLE`. Они не обязаны быть взаимоисключающими по всем аспектам; например, один неверный процесс может происходить из ошибочного ответа, а его связь с определённым PR — впервые возникнуть в поздней representation. Но это **один case**, не два независимых доказательства эффекта.

## 2. Case P1 / PR #184: неверная отмена служебных PR

**Earliest known source:** 6 октября **около 09:23 UTC** по [опубликованной Sol реконструкции](https://github.com/iliya1947/Major_Renov2/pull/3#issuecomment-6237639429) раннее предложение ассистента: отказаться от обоих служебных PR/communication files, вести коммуникацию и findings в implementation PR. Полная signed raw transcript последовательности здесь не опубликована; часы и текст являются **вторично реконструированными**, не direct API log.

**Было ли когда-либо правильно?** Не подтверждено, что **полная схема zero service PR** была принятым регламентом на какой-либо исторический момент. Даже если это предложение соответствовало промежуточному намерению ассистента, нельзя объявить его авторитетным project rule. Две исходные *раздельные* service-ветки были реальным прежним процессом; правильный переход был **`two separate → one shared`**, а не `two → zero`.

**Correction:** по [Sol](https://github.com/iliya1947/Major_Renov2/pull/3#issuecomment-6237639429), **около 10:39 UTC 06.10** тот же ассистент исправил маршрут на один общий service PR + один communication file. Публичный [PR #184](https://github.com/iliya1947/vico-forum/pull/184), **merged 06.10 14:02:33 UTC**, и [`AGENTS.md` в head `daab6234`](https://github.com/iliya1947/vico-forum/blob/daab6234edfddb78d628fedd36a5ebc5ff16c49d/AGENTS.md) §«Рабочий процесс», пп. 2–6 однозначно закрепили исправленный путь. Публичные обращения через [служебный PR #147 от 08.10](https://github.com/iliya1947/vico-forum/pull/147#issuecomment-6053352528) подтверждают его применение.

**Что дожило до исторического Memory representation:** по [M3](22-MEMORY-M3-STRUCTURAL-HAZARDS.md) и [M4](23-MEMORY-M4-CORRECTED-ERROR-PERSISTENCE.md), старое утверждение `service PR отменены; communication в implementation PR`, **притом ещё и ошибочно приписанное `AGENTS.md / PR #184`**. Нижняя граница старого content representation после final source correction по [M5](24-MEMORY-M5-UPDATE-LAG.md) — **5д 8ч 1м 48с** от authoritative merge до датированного вторичного snapshot, но не измеренная непрерывная выдача модели.

**Другие одновременно старые источники после correction:** проверенные публичные PR #184, AGENTS и PR #147 **поддерживали исправленную схему**. Позднего публичного документа с **тем же** ошибочным `zero service PR` не установлено. Старые ответы в истории могли повторяться, но как актуальная независимая *public source* версия они не установлены. Следовательно, **`MULTI-SOURCE AMPLIFIED` для P1 не доказан**.

**Origin decomposition:**
- **P1-a, само правило `zero service PR`: `MODEL-ERROR CARRIED`** — прежняя конкретная модельная ошибка, затем её коррекция, а затем старое содержание в позднем заявленном Memory representation.
- **P1-b, добавленная атрибуция `PR #184 удалил service PR`: `MEMORY-CREATED / SOURCE NOT FOUND` только в смысле `first seen in the secondary memory representation`.** Ранняя ~09:23 формулировка предшествовала созданию [PR #184 в 10:03:13 UTC](https://github.com/iliya1947/vico-forum/pull/184), так что раннее предложение **не могло ссылаться на этот уже созданный PR**. Более поздний *ранний источник конкретной ложной цитаты* не обнаружен. **Нельзя** утверждать, что её создала сама backend Memory: её мог дополнить другой чат или автор вторичной Library-выгрузки. Механизм происхождения этой добавленной атрибуции — **`ORIGIN NOT ATTRIBUTABLE`**.

**Downstream GPT-6 error:** структурно похожие ошибки routing/handoff существуют, но ни один известный поздний ответ GPT-6 **не повторил подтверждённо уникальное старое `service PR отсутствует`**. Наоборот, GPT-6 многократно правильно работала через #147, см. [M6](25-MEMORY-M6-MODEL-INTERACTION-MATCHED-HISTORY.md). `MEMORY R/U/E NOT ESTABLISHED`.

## 3. Case P2 / PR #181: устаревший `hold/not merged`

**Earliest known source:** [PR #181](https://github.com/iliya1947/vico-forum/pull/181) открыт **2026-10-03 23:01:51 UTC**. В опубликованной [M4 реконструкции](23-MEMORY-M4-CORRECTED-ERROR-PERSISTENCE.md) есть историческое решение ассистента от **05.10 ~18:06 UTC** пока не merge #181 из-за промежуточного состояния pinned-topics относительно category-page layout. Оно **могло быть правильно как временный hold**; запись о исправленном `mergeable` 05.10 ещё не означает реальный merge. Более ранний отдельный неверный hold 04.10 нельзя с необходимой точностью связать с конкретным историческим Memory item.

**Correction/supersession:** PR #181 **merged 06.10 17:53:44 UTC**. С этого момента `hold/not merged` больше не актуален. Реконструкция M4 также фиксирует последующее правильное сообщение о merge. В [M5](24-MEMORY-M5-UPDATE-LAG.md) установлена нижняя граница присутствия старого статуса в более позднем заявленном Memory-content snapshot: **5д 4ч 10м 37с** после merge, без доказанной верхней границы обновления в реальной Memory.

**Что сохранилось в memory representation:** старый краткий `PR #181 prepared; not merged / hold` (два фрагмента одного PR status, не два независимых случая). **Класс `STALE-SOURCE CARRIED`** по смыслу: *когда-то валидный state/решение пережило отменяющее его событие*, но **не** доказана конкретная автоматическая цепь copy-from-GitHub-to-Memory. Не переклассифицировать в `MODEL-ERROR CARRIED` лишь потому, что старую запись сформулировал ассистент: на 05.10 ещё не было merge.

**Новый источник, установленный при M10:** [`main/PROJECT_STATE.md` на exact commit `9e145006` 11.10](https://github.com/iliya1947/vico-forum/blob/9e145006eb520715fc3dc0401a2495c37bcdb0b1/PROJECT_STATE.md) в строках ~229, ~277, ~571 уже называет PR #181 **«текущим»** / `реализуется` после 06.10 merge. То же сохранялось в версии на [#218 head `0cc565d` от 12.10](https://github.com/iliya1947/vico-forum/blob/0cc565d9831abf9e05565030a66a49d3d2ab67c1/PROJECT_STATE.md) и в [нынешнем main](https://github.com/iliya1947/vico-forum/blob/main/PROJECT_STATE.md) под заголовком «Последнее обновление: 16.10» (три present-tense употребления в строках 239, 287, 581). [M9](28-MEMORY-M9-PUBLIC-SOURCE-AUDIT.md) установил публичный конфликт GitHub merged vs `PROJECT_STATE` current/in progress.

**Одновременность и точная граница `amplifier`:** 11.10 до времени snapshot уже был **публичный stale present-tense документ**, а в 11.10 22:04 UTC secondary memory representation всё ещё отображала `hold/not merged`. Это **две различные поверхности старого смысла «#181 ещё не завершён»**. Но `PROJECT_STATE.md` **не говорит дословно** `hold/not merged`, а memory snapshot не показывает, что он был сформирован из конкретного `PROJECT_STATE.md`. Источники могут иметь **общий upstream**, независимое origin не доказано. Поэтому:
- `PARTIAL MULTI-SOURCE REINFORCEMENT OF BROAD UNFINISHED STATE = OBSERVED AT CONTENT LEVEL` (да, обе поверхности доступны в датированном интервале);
- `MULTI-SOURCE AMPLIFIED` **как доказанный downstream механизм/совместная доставка двум контекстам модели = NOT ESTABLISHED**;
- нельзя сказать, что эти источники действительно **усилили** ошибку в ответе GPT-6.

**Downstream GPT-6 error:** конкретного позднего неверного запрета merge или утверждения `#181 всё ещё hold`, основанного на Memory, не установлено. `R/U/E NOT ESTABLISHED`.

## 4. Остальные записи M2–M9: почему это не новые подтверждённые случаи

| Item/наблюдение | Earliest known source и корректность | Прежнее/нынешнее состояние | Обоснованная классификация |
| --- | --- | --- | --- |
| **Stage 5 done / Stage 6 in progress** (P3) | Отображено в historical secondary snapshot 12.10 с заголовком **общего** project roadmap; первичная дата записи неизвестна; полный Stage 6 и его external integration могут иметь разные scope | [`PROJECT_STATE.md` 11.10](https://github.com/iliya1947/vico-forum/blob/9e145006eb520715fc3dc0401a2495c37bcdb0b1/PROJECT_STATE.md) ставил external rollout на паузу. Но `Stage 6 in progress` **не обязан** логически противоречить `external part paused` | `ORIGIN NOT ATTRIBUTABLE / NOT CONFIRMED STALE ITEM`, **не** считать третьим подтверждённым carrier |
| **Общий Stage vs Editor Stage confusion** | Одинаковые названия Stage присутствуют в отдельных project/editor документах; конфликт scope возможен без Memory | Нет наблюдения, что GPT-6 получила stage item без заголовка из Memory; известный эпизод 11.10 был **до** snapshot | `ORIGIN NOT ATTRIBUTABLE` для ошибки, Memory causal link не установлен |
| **14.10 test-suite аудит → #215** | [#215](https://github.com/iliya1947/vico-forum/pull/215) существует с 10.10, но в историческом secondary Memory snapshot от 12.10 именно **#215 отсутствовал** | Общесистемный архив [#226](https://github.com/iliya1947/vico-forum/pull/226) создан лишь 15.10, не мог быть источником 14.10 | `ORIGIN NOT ATTRIBUTABLE`; это не подтверждённый stale Memory item и не доказанный `amplifier` |
| **13.10 restore context: #147/#215 и as-of роли** | [#218](https://github.com/iliya1947/vico-forum/pull/218) установил равные роли после 12.10 23:09 UTC; #147/#215 публично существовали | [#225](https://github.com/iliya1947/vico-forum/pull/225) поменял роли только 15.10; не считать старую схему 13.10 ошибкой | Корректное на дату публичное состояние, **не stale item**. Источник конкретного ответа GPT-6 не атрибутирован в [M8](27-MEMORY-M8-NATURALISTIC-CROSS-CHAT-USE.md) |
| **M2 §10.2: корректирующее уточнение области `AGENTS.md`** | В [M4](23-MEMORY-M4-CORRECTED-ERROR-PERSISTENCE.md) описана запись, добавленная в ту же беседу 12.10 | Она **не** исправляет P1 routing (другая смысловая ось) | `UPDATED/ADDED CORRECTION`, не stale/error и не новый case |
| **Поздняя иерархия Sol→GPT-6 отсутствует в snapshot 12.10** | [#218](https://github.com/iliya1947/vico-forum/pull/218) и [#225](https://github.com/iliya1947/vico-forum/pull/225) merged после момента snapshot | Нельзя требовать наличия будущего правила в старом снимке; [M7](26-MEMORY-M7-CURRENT-MODEL-VISIBLE-SNAPSHOT.md) 17.10 уже видит новые роли | `NOT A STALE MEMORY ITEM` на 12.10 |
| **Указание #181 как «текущего» в `PROJECT_STATE` после merge** | Публичный документ с exact version 11.10 и сохранившимся статусом 16.10; это source-level error по [M9](28-MEMORY-M9-PUBLIC-SOURCE-AUDIT.md) | Смысл частично перекрывается P2, **но это отдельный source artifact, не отдельная Memory запись** | `STALE PUBLIC SOURCE`, потенциальный параллельный carrier, **не** третья подтверждённая stale Memory запись |

Предыдущие labels из M2 `M2-W1/W2` и M3 `H1–H4` — аспекты **одного P1**, а `M2-P1 / #181` в составе перечня старых PR — тот же **P2**, а не независимые новые Memory cases. Не раздувать знаменатель.

## 5. Итог классификации и ответ на вопрос Sol

| Итоговое утверждение | Статус |
| --- | --- |
| Различимых **подтверждённых stale/distorted historical memory content cases** | **2: P1 / #184 и P2 / #181**, с оговоркой о вторичном memory export |
| **`MODEL-ERROR CARRIED`** | **1: P1**, исправленное раннее ошибочное решение продолжает появляться в поздней representation |
| **`STALE-SOURCE CARRIED`** | **1: P2**, некогда допустимый hold / pre-merge status сохранён после merge |
| `MEMORY-CREATED / source not found` | **0 доказанных созданий Memory**; конкретная ложная атрибуция к PR #184 впервые документирована в поздней secondary representation, **раннее происхождение не установлено** |
| `MULTI-SOURCE AMPLIFIED` | **0 доказанных поведенческих amplification случаев**; только частичное source-level reinforcement P2 «ещё в работе» между public `PROJECT_STATE` и historical Memory representation |
| Origin of all GPT-6 downstream errors `via Memory` | **NOT ATTRIBUTABLE**: отсутствует подтверждённое `R/U/E` |
| Кандидаты на **активную сейчас очистку** | **0 подтверждённых**: согласно [текущим для M7 сравнениям Sol](https://github.com/iliya1947/Major_Renov2/pull/3#issuecomment-6239882118) P1/P2 не отображались в model-visible summaries 17.10; их отсутствие не доказывает backend deletion |

**Узкий ответ:** среди **двух подтверждённых** исторических состояний, где неверная/устаревшая detail обнаружилась в secondary memory representation, **оба имеют известные до-Memory предшественники**: ошибочное модельное предложение (P1) и прежде допустимый, но уже superseded project status (P2). Поэтому **на этих наблюдениях Memory выглядит скорее как потенциальный `carrier`, чем доказанный `creator` новых ложных фактов**. Ложная привязка P1 к названию #184 **может** быть новой ошибкой memory representation/export, но источник не атрибутирован. Параллельная stale документация по #181 показывает, что Memory **не единственная поверхность** старого состояния; фактический `amplifier` пока не продемонстрирован.

**Не делать частотный вывод** вида «в целом Memory чаще переносит, чем создаёт», поскольку выборка отобрана именно по подтверждённым stale cases, мала и не включает общее число benign/incorrect Memory items. Нельзя заключить ничего об algorithmic dreaming, item update/selection и конкретном вредном использовании GPT-6.

## 6. Handoff Sol

Проверь независимым review три особенно важные границы:

1. Согласна ли ты, что P1-a является именно carryover **раннего исправленного модельного вывода**, но P1-b `PR #184 allegedly deleted service PR` имеет **неустановленное отдельное происхождение** (не создавать третий случай)?
2. Достаточен ли `PROJECT_STATE.md` на exact head **11.10**, а не только 16.10, чтобы признать **одновременное частичное stale-state reinforcement** по #181? Не переименовывать «ещё в работе» в точное `hold`.
3. Сохраняем ли `amplification` как **потенциальную**, пока нет доказанной совместной доставки и downstream use?

Ничего в настройках Memory, самом Vico Forum, AGENTS.md или текущем user data не менялось. `AGENTS.md` в `main` исследовательского репозитория `Major_Renov2` отсутствует по GitHub 404, не выдаётся за прочитанный файл.
