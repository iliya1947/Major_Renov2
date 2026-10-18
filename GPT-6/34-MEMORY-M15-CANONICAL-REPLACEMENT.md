# 34. Memory M15 — компактный канонический replacement для project/process Memory

**GPT-6 · проверено 2026-10-18, около 23:05 Asia/Jerusalem.** Задание [GPT-5.6 Sol M15](https://github.com/iliya1947/Major_Renov2/pull/3#issuecomment-6252595033). Это **проектный текст для последующего решения владельца**, **не** изменение account Memory.

## 1. Готовый REPLACEMENT BLOCK — copy-ready

> **Vico Forum — project/process Memory.**
>
> **DURABLE RULES**
>
> 1. Источник истины — актуальный GitHub `main` и действующие требования; прямое указание владельца выше `AGENTS.md`. Владелец принимает продуктовые/спорные решения и выполняет merge.
> 2. Роли: **Мира (ChatGPT-5.6 Sol)** — руководитель процесса; **Лира (ChatGPT-6)** — исполнитель и независимый проверяющий; **Мишаня (Codex-5.6 Sol)** — основной программист; **Лёва (Codex-6.1 Sol)** — главный архитектор/технический руководитель.
> 3. Служебный PR — для обсуждений, подтверждённого состояния и передачи задач между агентами; реализация — в **отдельных implementation PR**. Агенты фиксируют handoff в служебном PR и не вызывают друг друга; владелец только подключает нужного агента. Служебные PR не merge.
> 4. Обычная последовательность независимой проверки стабильной реализации: **Мира → Лира → Мишаня → Лёва**; прямое решение владельца может устанавливать исключения. Владелец не имеет локальной копии проекта — не требовать локальных операций.
>
> **VOLATILE CURRENT STATE — as of 2026-10-18 23:05 Asia/Jerusalem. Не использовать как live-источник: проверять GitHub перед каждым действием.**
>
> 1. **#234** — открытый общий служебный PR текущей разработки, преемник закрытого без merge **#147**. **#122** — открытый, но приостановленный служебный PR внешнего **Stage 6**.
> 2. **#215** — Editor 2.0 **merged**. **#232** — открытый **draft implementation follow-up** для известных оставшихся дефектов.
> 3. **#226** — открытый **draft** служебный архив аудита тестов (не merge). Пакеты **#227, #228, #229, #231** — **merged**.

Этот блок намеренно **не содержит** HEAD SHA, тестовых чисел, «CI зелёный», неактуальных handoff/review states, списка функций Editor, P1/#184, P2/#181, личных/account данных. В `DURABLE RULES` сохранено только подтверждённое публичным `AGENTS.md`; дополнительные прямые запреты пользователя в account instructions **не переносятся и не отменяются** этой редакцией.

## 2. DELETE / REMOVE LIST — из прежней *проектной* части видимого summary

Удалить/заменить **старые формулировки**, чтобы они не конкурировали с блоком выше; **не** стирать исходные проектные решения, историю GitHub или отдельные действующие owner instructions.

1. `Codex в целом архитектор/reviewer; GPT-5.6 Sol главный исполнитель` — неверное смешение разных Codex-моделей и ролей; **replace** на роли DURABLE.
2. `#122 единственный/общий действующий service PR всей текущей работы` — #122 относится к paused Stage 6; **replace** на #234 active / #122 paused.
3. `#147 открытый действующий Editor/UI-UX service channel` — **обновилось после M14**: [#147](https://github.com/iliya1947/vico-forum/pull/147) **closed, not merged** 18.10; [#234](https://github.com/iliya1947/vico-forum/pull/234) **open, new shared service**. **replace**, не оставлять оба как параллельно активные.
4. `#215 активный Editor implementation, новые исправления в #215` — #215 merged; **replace** на #215 historical merged и #232 open follow-up.
5. `#229 / Package 3 отложен, стоит в конце очереди` — #229 **merged**; **remove** pending instruction.
6. `#231 отдельная служебная проверка Codex / следующий review PR` — #231 фактически **Package 4 regression implementation, merged**; **replace** точной ролью PR, уже учтённой в кратком snapshot.
7. `#227/#228 ещё предстоят; все audit packages продолжаются` — #227, #228, #231 и #229 уже merged; **remove** незавершённую очередь, оставить consolidated results.
8. `#121 старый открытый/замороженный канал` — #121 закрыт без merge 09.10 и не нужен в active summary; **remove** из короткого блока (история остаётся в GitHub).
9. `#147/#215 нельзя менять без разрешения, потому что оба текущие open PR` — **удалить только устаревшую привязку к текущему open status**. **Не отменять самостоятельный прямой запрет владельца на неразрешённые изменения**, даже если PR закрыт или merged; правила разрешений имеют отдельный источник.
10. Повторные устаревшие entries о текущих HEAD, «CI green», числах тестов, future pending / next-review assignments, прошлых пакетах Editor и feature status — **remove** из live Memory project summary; проверять `main`/PR/CI по делу.
11. Исторические P1 `service PR abolished in #184` и P2 `#181 hold/not merged` **не появляются в текущем visible Memory**, поэтому **не объявлять их активными cleanup targets** и не добавлять в replacement ради «исправления».

Значительная часть списка — дубликаты **одного обновления workflow** (#147→#234) или **одного merge** (#215); не считать это 11 независимыми дефектами системы Memory.

## 3. Authoritative public source cross-check

| Утверждение | Проверенный источник / текущий факт |
| --- | --- |
| Роли, owner merge, handoff, separation, review order, отсутствие локальной копии | [`vico-forum/main/AGENTS.md`](https://github.com/iliya1947/vico-forum/blob/main/AGENTS.md), content blob `20acb9210685bf3347f153c0d44d19420e8dc9bc` |
| **#234 replaces #147** | [#234 OPEN](https://github.com/iliya1947/vico-forum/pull/234), created **18.10 16:58:27 UTC**; [#147 CLOSED, not merged](https://github.com/iliya1947/vico-forum/pull/147), updated 18.10 16:58:36 UTC |
| **#122** | [#122 OPEN](https://github.com/iliya1947/vico-forum/pull/122), paused Stage 6 service |
| **#215 / #232** | [#215 MERGED](https://github.com/iliya1947/vico-forum/pull/215) 18.10 10:54:21 UTC; [#232 OPEN DRAFT](https://github.com/iliya1947/vico-forum/pull/232), Editor follow-up |
| **#226** | [#226 OPEN DRAFT](https://github.com/iliya1947/vico-forum/pull/226), non-merge audit archive |
| **Packages** | [#227 MERGED](https://github.com/iliya1947/vico-forum/pull/227) 16.10; [#228 MERGED](https://github.com/iliya1947/vico-forum/pull/228) 16.10; [#231 MERGED](https://github.com/iliya1947/vico-forum/pull/231) 17.10; [#229 MERGED](https://github.com/iliya1947/vico-forum/pull/229) 18.10 |
| **#121** | [#121 CLOSED, not merged](https://github.com/iliya1947/vico-forum/pull/121) 09.10 |

### Важное отличие от M14

[M14](33-MEMORY-M14-CURRENT-INTEGRITY-CLEANUP.md) зафиксировал #147 как **OPEN**, что было верно при проверке **до 18.10 16:58 UTC**. В новой проверке для M15 [PR #147](https://github.com/iliya1947/vico-forum/pull/147) **уже CLOSED**; owner workflow переехал в [#234](https://github.com/iliya1947/vico-forum/pull/234). Это **новое фактическое изменение** public GitHub, а не доказательство недостоверности прежнего as-of M14. Поэтому **не копировать M14 status буквально** в M15.

## 4. Handoff Mira и границы

Проверь: (а) #234 как текущий единый service и закрытый #147; (б) точность owner/direct-instruction/review order в коротком DURABLE; (в) что #232 именно **open draft** и #226 **open draft**; (г) не предлагает ли DELETE list стирать актуальные отдельные owner restrictions (это запрещено); (д) достаточно ли даты/as-of для управления volatile статусами.

**Результат:** компактный replacement + удаляемые устаревшие project/process claims подготовлены для **owner review**, без правок account Memory. Ни Vico Forum, ни AGENTS, ни пользовательские данные не изменялись. Следующая фаза — только по отдельному поручению.
