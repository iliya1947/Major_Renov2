# 33. Memory M14 — current project/process integrity и предварительный cleanup-list

**GPT-6 · 2026-10-18 (Asia/Jerusalem).** По [поручению Sol M14](https://github.com/iliya1947/Major_Renov2/pull/3#issuecomment-6252374275). Проверено **только актуальное, прямо model-visible project/process содержание `User Knowledge Memories` этой сессии** против **публичных GitHub источников** Vico Forum, прочитанных на дату аудита. Никакой приватный полный dump Memory, история пользователя, личные обстоятельства или непубличные инструкции **не публикуются**. **Account Memory не менялась.** Это не backend inventory и не автоматическое удаление.

## 1. Источник и метод

В model-visible Memory блоке GPT-6 присутствуют смешанные по времени короткие project/process claims: роли; service/implementation PR; аудит тестов; Editor 2.0; общие сведения о статусе CI и доработках. **Сам текст Memory не прикладывается**: ниже даны только нормализованные проектные утверждения, названия/PR и известные публичные состояния. Статусы относятся к **наличию claim в текущей видимой выжимке**, а не к неизвестному полному storage. Нельзя делать вывод, что items отсутствующие в выжимке удалены из backend.

**Текущие authoritative источники:**

1. [`vico-forum/main/AGENTS.md`](https://github.com/iliya1947/vico-forum/blob/main/AGENTS.md), exact content blob `20acb9210685bf3347f153c0d44d19420e8dc9bc`, §§ «Роли», «Рабочий процесс», «Проверка PR». Нынешняя схема: **Мира / ChatGPT-5.6 Sol — руководитель процесса; Лира / ChatGPT-6 — исполнитель и независимый проверяющий; Мишаня / Codex-5.6 Sol — основной программист; Лёва / Codex-6.1 Sol — главный архитектор; владелец — merge**. Implementation review order Sol→GPT-6→Codex-5.6→Codex-6.1.
2. [PR #122](https://github.com/iliya1947/vico-forum/pull/122): **OPEN**, отдельный shared service channel для **приостановленного Stage 6**. [PR #121](https://github.com/iliya1947/vico-forum/pull/121): **CLOSED, NOT MERGED** 09.10; legacy stage coordination.
3. [PR #147](https://github.com/iliya1947/vico-forum/pull/147): **OPEN**, shared **UI/UX** service channel (использовавшийся и для Editor); его публичный body отдельно сохраняет Stage 6 #121/#122 как другую paused scope.
4. [PR #215](https://github.com/iliya1947/vico-forum/pull/215): Editor 2.0 implementation **MERGED 18.10.2026 10:54:21 UTC**, final head `aa9dad2206fa189dd71ee35f083338f990a16b61`. PR body explicitly says **four known current-stage defects were deferred** to [PR #232](https://github.com/iliya1947/vico-forum/pull/232), **OPEN** follow-up; merge не значит accepted defect-free.
5. [PR #226](https://github.com/iliya1947/vico-forum/pull/226): **OPEN DRAFT**, non-merge test-suite **audit archive**, отдельный от #147/#122.
6. Audit implementation packages: [#227](https://github.com/iliya1947/vico-forum/pull/227) **MERGED 16.10 00:11:25 UTC**, [#228](https://github.com/iliya1947/vico-forum/pull/228) **MERGED 16.10 00:30:22 UTC**, [#231](https://github.com/iliya1947/vico-forum/pull/231) **MERGED 17.10 13:37:44 UTC** (**Package 4 regression coverage**, not standalone Codex-audit channel), [#229](https://github.com/iliya1947/vico-forum/pull/229) **MERGED 18.10 13:51:02 UTC** (**Package 3 Editor regression coverage**).
7. [`docs/EDITOR.md`](https://github.com/iliya1947/vico-forum/blob/main/docs/EDITOR.md) — постоянный контракт Editor 2.0 (старый `EDITOR_SPEC.md` удалён); [`ROADMAP.md`](https://github.com/iliya1947/vico-forum/blob/main/ROADMAP.md) — external **Stage 6 on pause** и косметическая доработка Editor в позднем UX pass.
8. [`PROJECT_STATE.md`](https://github.com/iliya1947/vico-forum/blob/main/PROJECT_STATE.md) — публичный документ с шапкой `Последнее обновление 2026-10-16`, продолжающий содержать некоторые **pre-merge/historical** записи о #215, поэтому его старые as-of формулировки нельзя считать актуальнее GitHub PR metadata от 18.10.

Классификация **одного нормализованного claim**, если у него несколько аспектов, даётся по наиболее значимому изменению. Две исторические версии одного PR **не** увеличивают число независимых Memory incidents. Все рекомендации ниже — **предложения для будущей редакции Memory summary владельцем**, не изменение хранилища.

## 2. Матрица существенных публично-проверяемых claims

| ID | Нормализованный current-visible project/process Memory claim | Актуальный публичный source / проверка | M14 class | Будущее cleanup action |
| --- | --- | --- | --- | --- |
| **K01** | «Codex — преимущественно архитектор/reviewer; Sol — ведущий разработчик и контролёр GPT-6; GPT-6 — исполнитель» | `main/AGENTS.md` §«Роли»: **Codex-5.6 Sol = основной программист**, **Codex-6.1 Sol = главный архитектор**; Sol = руководитель процесса; GPT-6 = исполнитель **и независимый reviewer**. Обобщение `Codex` стирает различие моделей и прежнее распределение implementation | **STALE / SUPERSEDED** | **replace** точным current role map из AGENTS, без head SHA |
| **K02** | «Владелец выполняет merge; прямое указание владельца приоритетнее AGENTS» | `main/AGENTS.md`, вводная и §§«Роли»/«Рабочий процесс»: подтверждено | **CURRENT / VERIFIED** | **keep** |
| **K03** | «Общий service PR — #122 для текущей общей работы» | #122 body: общая коммуникация **Stage 6**, но сам Stage 6 **paused**; #147 body: **активный UI/UX** shared service | **STALE / SUPERSEDED** | **replace** раздельным **scope-aware** описанием `#122 Stage 6 paused; #147 UI/UX active` |
| **K04** | «#121 — старый перенесённый/замороженный Stage 6 канал» | #121 **closed, not merged** 09.10; #122 consolidates durable Stage 6 history | **HISTORICAL BUT UNLABELED** | **relabel as historical** с явным `closed/unmerged 09.10`, либо **remove** из краткого active-work summary как избыточный |
| **K05** | «#147 — отдельный служебный канал Editor 2.0» | #147 **OPEN**; его публичное название/body — общий **UI/UX** service channel, Editor был основной обсуждаемой реализацией, но scope канала шире | **HISTORICAL BUT UNLABELED** | **replace** на `#147 — UI/UX shared service PR (включая историю Editor)` |
| **K06** | «#215 — основной рабочий Editor implementation PR» | #215 **MERGED 18.10 10:54:21 UTC**; #232 **OPEN** follow-up с 4 known findings | **STALE / SUPERSEDED** | **replace** на `#215 merged; unresolved current-stage defects → #232`, не называть Editor полностью бездефектным |
| **K07** | «Служебный #147 и implementation #215 — оба сейчас активные Editor каналы» | #147 **OPEN** UI/UX service; #215 **MERGED**, не active implementation | **STALE / SUPERSEDED** | **replace** с указанием различного статуса и назначения |
| **K08** | «Один общий non-merge service PR для текущего workflow и отдельные implementation PR» | `main/AGENTS.md` §§«Рабочий процесс»/«Проверка PR»; service PR #147 для UI/UX, #122 отдельно parked для Stage 6. Архив #226 не implementation PR и не заменяет текущий service | **CURRENT / VERIFIED**, **только со scope qualifier** | **keep**, убрать глобальное отождествление `one service PR = #122 for everything` |
| **K09** | «#226 — отдельный PR системы аудита тестов; рядом #227/#228 рабочие пакеты» | #226 **OPEN DRAFT, DO NOT MERGE**; #227/#228 уже **MERGED** | **HISTORICAL BUT UNLABELED** (для набора пакетов), #226 current | **replace** с различением archive vs merged implementations |
| **K10** | «Аудит Package 3 перенесён отдельно, стоит в конце очереди» | [#229](https://github.com/iliya1947/vico-forum/pull/229) — Package 3 Editor tests, **MERGED 18.10 13:51 UTC** | **STALE / SUPERSEDED** | **replace** `Package 3/#229 completed by merge`; удалить pending queue instruction |
| **K11** | «#231 — отдельный следующий Codex-check / служебное задание» | [#231](https://github.com/iliya1947/vico-forum/pull/231) title/body: **Package 4 regression coverage implementation**, **MERGED 17.10**; самостоятельный Codex service channel этим PR **не был** | **STALE / SUPERSEDED** (ошибочная либо исторически неоднозначная роль PR) | **replace** точным публичным назначением `#231 Package 4 merged` |
| **K12** | «Пакеты тестового аудита ещё в работе, Package 3 в конце» | #227/#228/#231/#229 **MERGED** по точным публичным данным, #226 **OPEN DRAFT** как audit archive | **DUPLICATE / REDUNDANT** относительно K09–K11 и неактуальная очередь | **remove** из краткого Memory summary; оставить одну consolidated current status запись |
| **K13** | «Editor 2.0 — продолжается первоначальная Stage 5 implementation/integration работа; ещё требуется завершить редактор в #215» | #215 уже **MERGED**; постоянный контракт `docs/EDITOR.md`; #232 — **открытый follow-up** для **4** остаточных current-stage defects; UI/UX refinement позже | **STALE / SUPERSEDED** | **replace** текущей структурой `merged core + #232 corrections + deferred UX refinement`, без автоматического «полностью готово» |
| **K14** | «Code wrapping/line numbers, browser spellcheck и ряд Editor slices реализованы» | `docs/EDITOR.md`, main implementation после #215: функции приняты в baseline; их исходные subtask heads/статусы проверки исторические. Это не утверждение о 100% acceptance | **CURRENT / VERIFIED** для существования baseline функций | **keep**, если полезно; **relabel as historical** любые связанные dated CI/heads |
| **K15** | «Текущие CI зелёные; N+ app / N+ database tests; одни мобильные/quote проверки ещё не завершены» | Old CI numbers и exact heads относятся к промежуточным implementation commits; #215 merged 18.10 и открыл известные follow-up defects в #232. `PROJECT_STATE.md` содержит исторические CI сообщения из этапов работы | **HISTORICAL BUT UNLABELED** | **relabel as historical** с date+head или **remove** short-lived CI status из долговременного project summary; для live проверять GitHub |
| **K16** | «Stage 6 pre-release external integration/rollout ожидает отдельного разрешения» | `ROADMAP.md`, `docs/EDITOR.md`, #122 body: **Stage 6 paused** | **CURRENT / VERIFIED** | **keep**, не путать external Stage 6 с внутренними этапами Editor |
| **K17** | «Решения, приёмка, роли и handoff вести через service PR; implementation PR отдельно» | `main/AGENTS.md`: service comments + communication state; code in implementation; current review order **Sol → GPT-6 → Codex-5.6 → Codex-6.1**; владелец merge | **CURRENT / VERIFIED**, при обновлении деталей review order | **replace** прежнюю сокращённую схему последовательностью из актуального AGENTS |
| **K18** | «Некоторые project feature states (Unread/read cursor, Help/solution, online presence) реализованы, дальнейшая интеграция предстоит» | `PROJECT_STATE.md` содержит granular исторически датированные statements; `main` и Editor merge подтверждают общий pre-release baseline, но короткая Memory формула **не является точным live per-feature acceptance matrix** | **AMBIGUOUS / NEEDS SOURCE CHECK** для конкретных `pending`/unimplemented flags без item-specific current check | **keep** лишь как общую product map; volatile per-feature pending claims **remove** до индивидуальной проверки |
| **K19** | «Следующий ответ/задача определяется состоянием отдельных PR, его heads и ручных этапов проверки» | HEAD/state действительно меняются; на 18.10 #147, #215, #226, #229, #231 имеют **разные** актуальные статусы. Любые старые head SHA могут быть валидными **исторически**, но не автоматически current | **HISTORICAL BUT UNLABELED** | **remove** из Memory как live routing authority; head/latest-state всегда брать из GitHub на момент действия |

**Разбор duplication:** K06/K07/K13 — разные следствия одного события `#215 merged`, а K09/K10/K11/K12 — несколько срезов одной истории пакетов тестов. Не считать 19 строк равными **19 независимым ошибкам** Memory. При реальной редакции Memory лучше **один новый компактный project-state абзац** и удаление повторяющихся pending-сводок, а не копировать весь этот audit в Memory.

## 3. Важные границы по source of truth и публикации

1. **Ситуация существенно изменилась после M7 17.10**: #215 и #229 сегодня **merged**, поэтому их присутствие как «рабочие/ожидающие» в **текущем model-visible summary** — реальные устаревшие сведения независимо от происхождения. P1 старое `no service PR` и P2 `#181 hold` **не наблюдаются в текущем visible block** и **не** включаются в активный cleanup-list.
2. **Роль `main/PROJECT_STATE.md` ограничена его собственной датой** 16.10: некоторые абзацы всё ещё ожидают проверки или merge #215 и потому **устарели после GitHub merge 18.10**. Нельзя лечить stale Memory переписыванием из другого stale public paragraph. PR metadata/date здесь новее и конкретнее.
3. **Отличать scope:** #122 как отдельный Stage 6 service и #147 как UI/UX shared service; существование #226 archive не ломает active-service workflow.
4. **Нельзя проверять непубличные пользовательские настройки/ограничения по Github metadata и нельзя объявлять их отменёнными** лишь потому, что они не зафиксированы в `AGENTS.md`. В этой публичной версии намеренно исключены account settings, приватные инструкции, личные сведения и любые owner-only решения, которых нет в публичных source-of-truth. Никаких рекомендаций по их удалению здесь нет.
5. **Присутствие/отсутствие** утверждения ограничено выбранным прямо видимым Memory block, **не** полным backend storage; historical M2 P1/P2 не стали автоматически current candidates.

## 4. Практический owner-facing cleanup-list — только публично подтверждённый project/process контент

**Priority A — заменить устаревшее:**

1. **Роли:** вместо generic `Codex architect` и `Sol main implementer` использовать текущее `main/AGENTS.md` различение Sol (workflow lead), GPT-6 (executor/reviewer), Codex-5.6 (main programmer), Codex-6.1 (chief architect), owner merge.
2. **Каналы:** #147 — активный UI/UX shared service; #122 — отдельный paused Stage 6 service; #121 — legacy closed/unmerged.
3. **Editor:** #215 **merged 18.10**, текущая отдельная работа по известным дефектам в **#232**; cosmetic/editor final UX refinement отложен. Никакой «сейчас пишем Editor в #215».
4. **Test audit:** #226 — open draft archive; #227/#228/#231/#229 merged; Package 3 **не** pending.

**Priority B — убрать/архивировать краткоживущие сведения:**

5. Номера промежуточных HEAD/CI as if live, старые `green`/review pending assertions, повторные `Package 3 at end`, ошибочную роль #231 и неактуальные next-task instructions. Для научной истории они остаются в GitHub, но не должны работать как текущая project-memory.
6. Старые subtask-status и feature `pending` оставить только с явными датами либо проверять непосредственно по текущему source при использовании. Не стирать стабильные product contracts и историю принятых решений ради удаления volatile PR status.

**Priority C — сохранить:**

7. Owner-only merge; прямые user instructions выше AGENTS; различие service vs implementation; внешняя Stage 6 на паузе; Editor Markdown/product baseline и принятые стабильные функции при отсутствии конфликта; независимая staged review по текущему `AGENTS.md`.

Это **проектное предложение по содержимому будущей Memory summary**. Оно не подтверждает доступ GPT-6 к backend memory edit/delete, не является авторизацией на изменение account Memory и не является правкой public Vico Forum files.

## 5. Итог M14

- **Да, после исчезновения исторических P1/P2 из выбранной выдачи появились/остались новые актуальные устаревшие project/process claims:** роли, #122 как «общий», рабочий статус #215, отложенный #229, роль/статус #231, промежуточные CI/head states. Большая часть — **обычный time-sensitive drift вслед за реальными merge и сменой регламента**, а не доказанная ошибка backend dreamer.
- **CURRENT/VERIFIED:** owner merge, scope-aware service/implementation workflow, Stage 6 paused, часть стабильных Editor features; остальное — см. матрицу.
- **Не установлено:** как Memory будет редактироваться backend, когда эти исправления попадут в последующий выдаваемый summary, были ли конкретные старые claims фактически использованы для ошибочного действия GPT-6. Это остаётся источниковым пределом M1–M13.
- **Проверено без изменения Memory.** Отчёт подготовлен **для независимого review Sol**, не для автоматического cleanup.

**Handoff Sol:** проверить прежде всего K01 новые роли; K03/K05 split service scope; K06/#215 merged и #232 open; K09–K12 packages #229/#231 и #226; исключение user/account controls из публичного аудита; при проверке не опираться на старый `PROJECT_STATE.md` там, где GitHub metadata показывает более позднее событие.
