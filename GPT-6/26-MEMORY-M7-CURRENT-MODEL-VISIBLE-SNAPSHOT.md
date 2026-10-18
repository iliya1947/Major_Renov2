# 26. Memory M7 — текущий model-visible User Knowledge Memories: только Vico Forum process/workflow

**GPT-6 · 2026-10-17, около 22:38 Asia/Jerusalem.**

**Источник данных этой записи — исключительно прямо предоставленный этому GPT-6 сеансу блок с явным заголовком `User Knowledge Memories` в model-visible context.** Он структурно отделён от блоков `Project Conversation Content`, `Recent Conversation Content`, актуальных инструкций проекта и пользовательских сообщений. Никакой материал из PR #3, GitHub, файлов, поиска по старым разговорам или аналитических текстов M1–M6 **не использовался для составления списка ниже**. Обращение к PR #3 использовано только для получения формулировки M7-задания и последующей публикации этого изолированного результата.

**Граница достоверности:** это *выданный сейчас condensed/model-visible memory block*, не полный backend экспорт всех persisted memory items и не запись о том, когда их обновили. Можно уверенно констатировать наличие/отсутствие **в этом блоке**, но нельзя выводить то же о полном storage или о полученной в другой сессии Memory.

## 1. Зафиксированные process/workflow items, нормализованный смысл

| ID | Прямо присутствующее содержание в текущем `User Knowledge Memories` | Есть ли дата/временная граница именно в Memory | Содержание и scope |
| --- | --- | --- | --- |
| **M7-01** | Новые ветки — **только по разрешению пользователя**. | **Нет** даты фиксации. | Ограничение действий в проектах. |
| **M7-02** | **Единый служебный PR #122** как **общий канал**; старый **#121 перенесён/заморожен**. | **Нет** даты, указан лишь прежний статус #121. | Общий coordination channel, а не утверждение об отсутствии иных project-specific channels. |
| **M7-03** | **#147 — отдельный служебный канал для Editor 2.0**; **#215 — основной implementation PR редактора**. | **Нет** даты принятия. | Есть одновременно оба канала с разным назначением. |
| **M7-04** | **Запрет на изменения #147 и #215 без прямого разрешения пользователя**. | **Нет** даты начала запрета. | Boundary на мутации; чтение само по себе не запрещено. |
| **M7-05** | **Work mode не использовать для реализации**; **не требовать локальных PowerShell/CMD/локального клона**. | **Нет** даты. | Граница инструментария и workflow. |
| **M7-06** | **«Семь раз отмерь, один раз отрежь»**: проверка до действия; **прямые инструкции пользователя выше AGENTS.md**. | **Нет** даты. | Порядок проверок и приоритет прямых указаний. |
| **M7-07** | Роли: **Codex — архитектор/ревьюер** (по явному указанию также исполнитель); **GPT-5.6 Sol — ведущий разработчик и контролёр GPT-6**; **GPT-6 — исполнитель**; **владелец — merge**. | Прямо написано **«последняя фиксация»**, но **нет календарной даты** этой фиксации. | Разделение responsibilities, не равно old equal-authority rule. |
| **M7-08** | **Codex-review:** automatic off; exhaustive manual on; credits после лимита off; `@codex review` вручную. | **Нет** даты изменения этих настроек. | Процесс независимой проверки; это **содержимое Memory**, а не вновь проверенное нынешнее состояние интеграции. |
| **M7-09** | **Аудиты тестов**: `PR #226/#227/#228` упомянуты как их каналы; **Package 3 вынесен в отдельный PR и поставлен в конец очереди**; **запрещено писать test audits в #147**, поскольку они перенесены в #226. | **Нет** точной даты в прямом memory bullet. | Процесс разграничения задач тестового аудита и Editor 2.0. |
| **M7-10** | Указано, что **CI зелёный** и часть технических проверок Editor 2.0/мобильного UI ещё ожидает browser review. | **Нет** точного as-of timestamp; нельзя считать live status. | Сопутствующий статус workflow, не самостоятельное разрешение/текущий GH fact. |

**Scope оговорка:** #122 назван *общим* каналом, а #147 — *отдельным* для Editor. Это **разные области применения**, поэтому сам факт наличия обоих ID здесь **не является доказанным внутренним конфликтом**.

## 2. Exact presence/absence queries, о которых попросила Sol

| Проверяемое условие | Результат только в этом Memory block |
| --- | --- |
| **#147** | **PRESENT**, отдельный service channel Editor 2.0 |
| **#215** | **PRESENT**, implementation PR Editor 2.0 |
| **#122** | **PRESENT**, общий service PR |
| **#121** | **PRESENT**, старый/замороженный |
| **Codex / GPT-5.6 Sol / GPT-6 roles** | **PRESENT**: Codex architect/reviewer; Sol lead/controller; GPT-6 executor |
| **Owner merge authority** | **PRESENT** |
| **No-write #147/#215 without owner permission** | **PRESENT** |
| **New branch only with approval** | **PRESENT** |
| **Codex review manual/automatic-off** | **PRESENT** |
| **P1 old claim: «служебные PR удалены, communication только в implementation PR»** | **ABSENT FROM THIS VISIBLE MEMORY BLOCK** |
| **P2 old claim: «PR #181 hold/not merged»** | **ABSENT FROM THIS VISIBLE MEMORY BLOCK** |
| **Новая и старая противоположные версии одного правила routing** | **NOT OBSERVED** в данном видимом Memory block; новые служебные каналы присутствуют, явно противоположное правило `no service PR` отсутствует |
| **Explicit timestamp, когда P1/P2 были удалены, исправлены или заменены** | **NOT PRESENT** |
| **Явная запись `PR #181 merged`** | **NOT PRESENT**; нет и утверждения, что #181 hold |

## 3. Что это НЕ доказывает

1. **Нельзя утверждать**, что GPT-5.6 Sol в своём отдельном текущем чате получила **ту же** выдачу Memory; это предмет **её независимого compare** после handoff.
2. **Нельзя утверждать**, что P1/P2 действительно удалены из всего долговременного storage. Мы видим отсутствие только в **отобранном model-visible block**, а не полный список persistent items.
3. **Нельзя приписывать дату** изменения роли Sol/GPT-6, Codex settings или обновления PR #181 этому блоку: в нём отсутствуют item-level `updated_at`.
4. **Нельзя интерпретировать P1/P2 absence как доказательство**, что память не могла повлиять на GPT-6 в прошлые даты, равно как presence других правил — как факт их использования в конкретном ошибочном ответе.
5. **Не использовать** содержимое текущих project/custom instructions или прочитанного PR #3 для заполнения пропусков. Здесь они намеренно оставлены пропусками.

## 4. M7 handoff

`CURRENT GPT-6 VISIBLE MEMORY BLOCK SEPARABLE = YES` — отдельный явно помеченный `User Knowledge Memories` присутствует.

`CURRENT WORKFLOW ROLES/CHANNELS = Sol leads GPT-6; Codex reviews/architects; #122 general; #147 Editor service; #215 Editor implementation`.

`OLD P1 AND P2 = NOT PRESENT IN THIS VISIBLE BLOCK`; `SIMULTANEOUS OPPOSITE ROUTING RULES = NOT OBSERVED`.

**Следующая независимая операция принадлежит Sol:** сравнить **этот** snapshot с её собственным ранее зафиксированным current model-visible Memory и классифицировать `substantially same exposure / materially different exposure / provenance not separable`. GPT-6 не знает её скрытый snapshot и не пытается угадать его содержимое.

**M7 is NOT an A/B, not behavioral inference, not evidence of identical retrieval.** Настройки Memory, AGENTS, GitHub Vico Forum, PR #147/#215 не изменены.
