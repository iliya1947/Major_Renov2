# 32. Memory M13 — причинный синтез M1–M12: четыре слоя, границы уверенности

**GPT-6 · 18 октября 2026.** Единственное поручение [GPT-5.6 Sol: M13](https://github.com/iliya1947/Major_Renov2/pull/3#issuecomment-6251857952). Цель — строгий промежуточный ответ на вопрос **«как и в какой степени долговременная Memory связана с наблюдаемыми проблемами GPT-6?»**. Не A/B, не тест, не mitigation, не cleanup. Использованы **только уже зафиксированные M1–M12 findings и первичные ссылки внутри этих исследований**.

## 1. Доказательная единица и уверенность

Главная опасность синтеза — ошибочно посчитать несколько документов про одно и то же явление новыми независимыми подтверждениями. **P1 / #184 и P2 / #181 — два различных исторических case**, каждый рассматривается в M2/M3/M4/M5/M9/M10/M12 неоднократно. Это **не** восемь или более подтверждений частоты. Варианты текста P1 в §9 одной выгрузки — **один** ошибочный process item; `#181` в §5/§9 — **один** устаревший PR status.

Сила разных утверждений:

- **Высокая** для датированного публичного GitHub факта: [PR #184](https://github.com/iliya1947/vico-forum/pull/184) merged **06.10 14:02:33 UTC** и установил *one shared non-merge service PR*, а не его отмену; [PR #181](https://github.com/iliya1947/vico-forum/pull/181) merged **06.10 17:53:44 UTC**.
- **Умеренная, с источниковедческой оговоркой**, для наличия двух ошибочных/устаревших высказываний в исторической **вторичной** выгрузке `User Knowledge Memories`, созданной **11.10 22:04:21.836 UTC / 12.10 01:04 Israel**. Автор сообщает, что она основана на прямо видимом Memory block другой беседы; сама она **не** backend Memory inventory/log и может содержать самостоятельную ошибку пересказа. [M2](21-MEMORY-M2-HISTORICAL-SNAPSHOT.md), [M4](23-MEMORY-M4-CORRECTED-ERROR-PERSISTENCE.md).
- **Умеренная / высокая для самоотчётного model-visible среза**, что [GPT-6](26-MEMORY-M7-CURRENT-MODEL-VISIBLE-SNAPSHOT.md) и Sol видели **существенно совпадающий текущий project/process Memory content 17.10**; эту классификацию [Sol дала в комментарии M7](https://github.com/iliya1947/Major_Renov2/pull/3#issuecomment-6239882118). Это не одинаковые byte-exact retrieval logs, не backend inventory и **не** данные о 12–16.10.
- **Не установленная причинная уверенность** для утверждений, что именно устаревший Memory item **в конкретном прошлом ходе** был получен (`R`), использован (`U`) и внёс вклад в ошибку (`E`). Отсутствие следа в доступном ответе также **не** доказывает, что Memory не была использована.

Минимальная причинная последовательность: `S (item существовал) → R (был доставлен в конкретный turn) → U (модель опиралась на него) → E (он внёс вклад в ошибку)`. **Ни один переход не следует автоматически из предыдущего.** Правила классификации [M1](20-MEMORY-M1-ATTRIBUTION.md).

## 2. Layer 1 — CONTENT QUALITY (incorrect / stale / distorted content)

### ESTABLISHED

1. **P1 — неверное описание routing PR #184 в историческом *reported Memory representation*.** Старое «два service PR → ни одного; coordination в implementation PR» материально расходится с merged [PR #184](https://github.com/iliya1947/vico-forum/pull/184) и [его `AGENTS.md`](https://github.com/iliya1947/vico-forum/blob/daab6234edfddb78d628fedd36a5ebc5ff16c49d/AGENTS.md), §«Рабочий процесс», пп. 2–6: **два раздельных служебных канала заменили одним общим**; implementation PR — код, CI и Codex-review findings, но **не основной канал** передачи решений. Историческая выгрузка **ошибочно приписала** `PR #184` отмену всех service PR. Это **не** просто более ранняя корректная версия нового регламента: [M3](22-MEMORY-M3-STRUCTURAL-HAZARDS.md) установил потерю границы/квантора `two separate → one shared`.
2. **P2 — stale PR #181 status в том же reported representation.** Состояние `hold / not merged` **стало неверным** после публичного merge [#181](https://github.com/iliya1947/vico-forum/pull/181), но в датированной выгрузке осталось. В отличие от P1, прежний hold **мог быть верным временным решением до merge**, то есть это state-update lag, не ещё одна доказанная первоначальная модельная ошибка.
3. **Источник старой информации — не только Memory.** Уже [`PROJECT_STATE.md` на историческом commit 11.10](https://github.com/iliya1947/vico-forum/blob/9e145006eb520715fc3dc0401a2495c37bcdb0b1/PROJECT_STATE.md) продолжал называть merged #181 «текущим»/«реализуется», и та же формулировка сохранялась в [`main/PROJECT_STATE.md` с датой 16.10](https://github.com/iliya1947/vico-forum/blob/main/PROJECT_STATE.md). Это **публичное противоречие**, зафиксированное в [M9](28-MEMORY-M9-PUBLIC-SOURCE-AUDIT.md). Не утверждать точную семантическую тождественность `current/in progress` и `hold/not merged`.

### SUPPORTED / PLAUSIBLE

- **Качество Memory-representation подвержено inherited/retained ошибкам и устаревшим статусам.** P1 по [M10](29-MEMORY-M10-ORIGIN-CARRIER-AMPLIFIER.md) соответствует ранее исправленному **ошибочному выводу ассистента**; P2 — прежнему, позднее заменённому состоянию. Доказан **контентный риск у конкретной вторичной historical representation**, не универсальная характеристика всех Memory items.
- **P1 дополнительно допускает erroneous attribution/summary distortion.** Исходное предложение примерно в 09:23 UTC 06.10 предшествовало созданию самого PR #184 в 10:03 UTC. Поэтому часть текста «PR #184 удалил service PR» не могла быть буквально взята из самого раннего предложения; её точный источник (поздний assistant output, Memory summarizer, пересказ экспорта) неизвестен.

### NOT ESTABLISHED

- Что **сам backend Memory создал** ошибку P1 (а не сохранил прежнюю или вторично пересказанную).
- Что P1 и P2 на конкретную дату существовали как два неизменных byte-exact backend items, а не элементы отобранного/пересказанного model-visible контекста.
- Что обобщённый `Stage 5 done / Stage 6 in progress` — третий **подтверждённо неверный** Memory item. Он имеет project-wide heading и **может** логически сосуществовать с паузой *external* Stage 6; смешение Editor Stage 5 с project Stage 5 отдельно не приписывается Memory. [M3](22-MEMORY-M3-STRUCTURAL-HAZARDS.md), [M4](23-MEMORY-M4-CORRECTED-ERROR-PERSISTENCE.md).

**Strongest evidence:** конкретный P1 text ↔ exact merged AGENTS source; P2 text ↔ GitHub merged status.  
**Strongest counterevidence / alternative:** историческая выгрузка — не raw backend export; для P1 возможно искажение **при экспорте**; для P2 та же ошибка статуса видна в **публичном PROJECT_STATE**, поэтому не является уникальным признаком Memory.

**Layer verdict:** `CONTENT-LEVEL INCORRECT/STALE PROJECT REPRESENTATION ESTABLISHED IN SECONDARY MODEL-VISIBLE REPORT; BACKEND ERROR GENERATION NOT ESTABLISHED`.

## 3. Layer 2 — PERSISTENCE (пережило ли correction/update?)

### ESTABLISHED

1. **P1:** исходная модельная схема, по восстановленной Sol хронологии, явно исправлена **06.10 ~10:39 UTC**, а корректный [PR #184](https://github.com/iliya1947/vico-forum/pull/184) merged **06.10 14:02:33 UTC**. Старый смысл ещё находится в reported Memory representation с timestamp **11.10 22:04:21.836 UTC**. Минимальный документируемый интервал **от authoritative GitHub merge до поздней representation = 5 суток 8 часов 1 минута 48 секунд** (от приблизительного исправления ассистента ~5 суток 11 часов 25 минут).
2. **P2:** прежнее `#181 hold/not merged` superseded GitHub merge **06.10 17:53:44 UTC**, всё ещё встречается в том же reported snapshot **11.10 22:04:21.836 UTC**. Документируемый интервал **5 суток 4 часа 10 минут 38 секунд**.
3. Историческое `#181 текущий` сохранялось также в разных датированных версиях публичного `PROJECT_STATE.md` до 16.10, но это **другой source**, не измерение TTL Memory.
4. В отдельно отчётном [M7-снимке GPT-6 17.10](26-MEMORY-M7-CURRENT-MODEL-VISIBLE-SNAPSHOT.md) P1/P2 **не присутствуют**; Sol также не видела их в своём текущем summary. Новые роли/каналы уже присутствуют. Это факт **выбранной model-visible выдачи**; не факт backend deletion.

### SUPPORTED / PLAUSIBLE

- По [M5](24-MEMORY-M5-UPDATE-LAG.md), **исправленные ошибки и старые статусы могут оставаться в позднем представлении Memory спустя >5 дней** после изменения source of truth. Это **lag между двумя документированными точками**, не свидетельство, что каждый turn в этом промежутке постоянно получал старый item.
- Внешние публичные документы также могут задерживать обновление (#181), образуя *параллельные* stale sources. [M9](28-MEMORY-M9-PUBLIC-SOURCE-AUDIT.md), [M10](29-MEMORY-M10-ORIGIN-CARRIER-AMPLIFIER.md).

### NOT ESTABLISHED

- **Когда именно** Memory отобрала, исправила, переписала, скрыла или удалила P1/P2. **Верхняя граница времени обновления не определена** по отсутствию в current selected summary.
- Что данные были непрерывно model-visible **в каждом** GPT-6 чате между 06.10 и 17.10.
- Что обновление ролей проходит быстрее обновления PR-status или что старые записи всегда сохраняются; другой item-коррекция (§10.2 historical export) показывает частичный update, но другой смысловой области.
- Что >5-day persistence равно наличию памяти именно при поздних проблемных turns 13–16.10.

**Strongest evidence:** две независимые GitHub даты исправлений и **один** позже датированный secondary Memory report с P1/P2 (M4–M5).  
**Strongest counterevidence / alternative:** одно позднее сообщение о содержимом Memory не измеряет непрерывное backend состояние; summary 17.10 не показывает эти пункты и не доказывает ни timestamp исчезновения, ни сам факт удаления; ещё один stale-state source был внешним `PROJECT_STATE`.

**Layer verdict:** `DOCUMENTED POST-CORRECTION CONTENT PERSISTENCE IN SECONDARY REPORT; 5+ DAY MINIMUM OBSERVED ELAPSED GAP; ACTUAL PER-TURN EXPOSURE/TTL UNKNOWN`.

## 4. Layer 3 — DELIVERY / USE (доставили ли GPT-6 old item?)

### ESTABLISHED

1. **M7 — в исследовательских GPT-6/Sol сессиях 17.10** участникам непосредственно виден отдельный `User Knowledge Memories` с актуальными workflow/roles; независимое сопоставление Sol классифицирует текущий project/process content как [`SUBSTANTIALLY SAME EXPOSURE`](https://github.com/iliya1947/Major_Renov2/pull/3#issuecomment-6239882118). Значит, **текущий memory-bearing context вообще существует** для двух сессий. **P1/P2 там не видны.**
2. **M8** нашёл **два естественных наблюдения**: 13.10 новый чат по восстановлению контекста сразу использовал детали прежних ролей/#147/#215; 14.10 широкая проблема тестов сразу интерпретировалась через #215. Установлено **наличие этих деталей в ответах**, но **не** факт их получения *именно из persistent Memory*. [M8 report](27-MEMORY-M8-NATURALISTIC-CROSS-CHAT-USE.md).
3. Для **вредных historical turns**, где мог бы присутствовать stale P1/P2, **не извлечён фактический source-specific trace**: нет ни одной установленной цепочки `S→R→U` старой Memory. [M1](20-MEMORY-M1-ATTRIBUTION.md), [M8](27-MEMORY-M8-NATURALISTIC-CROSS-CHAT-USE.md).

### SUPPORTED / PLAUSIBLE

- Продукт умеет давать model-visible Memory и межчатовую continuity; наблюдение 13.10 совместимо с полезной Memory, а раннее сужение audit→#215 — с прошлой salience. Но **Project Conversation Content, Recent Conversation Content, явная пользовательская цитата, инструментальный history/GitHub read, current task prior assumptions** остаются конкурирующими каналами. Нельзя подменить `used some prior information` утверждением `used persistent Memory`.
- Общие current M7 Memory summaries делают гипотезу о **разных нынешних project-memory contents у Sol/GPT-6** менее убедительной. Но **не** показывают одинаковый retrieval/order или видимую Memory конкретных ошибок 12–16 октября. [M6](25-MEMORY-M6-MODEL-INTERACTION-MATCHED-HISTORY.md), [M7](26-MEMORY-M7-CURRENT-MODEL-VISIBLE-SNAPSHOT.md).

### NOT ESTABLISHED

- Что хоть один ошибочный ход GPT-6 **получил P1/P2** между correction и ответом; что GPT-6 **использовала** этот item или отвергла его.
- Какой именно source сформировал PR #215 в 14.10 turn. **#215 вообще отсутствовал в historical 12.10 Memory snapshot**.
- Что model-visible exposure Sol/GPT-6 **совпадал исторически** на 12–16.10, или что одинаковая текущая summary означает идентичный backend ranking/retrieval.
- Что отсутствие stale fingerprint означает `Memory retrieved but model resisted`: **нет такой информации**.

**Fast answers caveat:** [заметка в PR #3](https://github.com/iliya1947/Major_Renov2/pull/3#issuecomment-6249451163) указывает, что некоторые ответы могут идти по быстрому пути без обращения к Memory. **Не установлено, какие исторические turns использовали этот путь.** Поэтому этот механизм — лишь дополнительное ограничение **отрицательного** вывода `нет fingerprint ⇒ memory item не использовался/был отвергнут`; **не** объяснение какого-либо конкретного провала GPT-6.

**Strongest evidence:** независимые видимые M7 blocks как положительный факт, что Memory поступает **в текущие сессии**; конкретные 13/14.10 реплики M8.  
**Strongest counterevidence / alternative:** **нет per-turn retrieval/provenance** на вредных ответах; контекст проекта/история/пользовательские цитаты/GitHub могут доставлять те же подробности; 12.10 historical report относится к **другой беседе**, а не к этим GPT-6 turns.

**Layer verdict:** `CURRENT MODEL-VISIBLE MEMORY CONTEXT ESTABLISHED; HISTORICAL DELIVERY/USE OF MATCHING STALE ITEM IN A GPT-6 ERROR NOT ESTABLISHED`.

## 5. Layer 4 — BEHAVIORAL EFFECT (Memory вызвала или усилила ошибку?)

### ESTABLISHED

1. **Реальные ошибки GPT-6 подтверждены**, но не как Memory-derived. [M11](30-MEMORY-M11-EXPLANATORY-COVERAGE-MATRIX.md) использует **13 намеренно отобранных, уже задокументированных эпизодов**: `MEMORY-SPECIFIC PLAUSIBILITY = 0`, `MEMORY-POSSIBLE / NON-SPECIFIC = 2` (next actor/hand-off 16.10 и test audit→#215 14–15.10), `CURRENT-TURN EXPLANATION SUFFICIENT = 11` (включая G/E/O/V), как **сравнительную оценку explanatory power**, не как источник каждого первоначального ответа и не как частоту всех ошибок.
2. **Наблюдаются некоторые функциональные межчатовые повторы**, [M12](31-MEMORY-M12-CORRECTION-RECURRENCE.md) R3 (неправильный next actor) и R4 (неправильное `Ничего` при требуемом действии). Однако `RECURRENCE WITH MATCHING STALE MEMORY = 0`: ни для одного не найден **соответствующий исправленный, а затем устаревший Memory item**.
3. **P1/P2 content survived correction**, но **конкретного позднего повторного GPT-6 ответа**, сообщившего `service PR abolished` или `#181 hold/not merged`, в проверенных случаях нет (M12 R1/R2). Это **ограниченное отрицательное observation**, не глобальный тест отсутствия рецидивов.

### SUPPORTED / PLAUSIBLE

- **Небольшая область потенциальной релевантности Memory — перенос workflow/context associations**: PR/роли/статусы/кто следующий. Исторический P1 имеет структуру, которая **могла бы** вызвать неправильный route, P2 — неправильный PR state, если реально извлечены и предпочитаются свежим источникам. Но **такого точного ошибочного повторения не обнаружено**.
- В более конкретных **технических** ошибках (A-05 необоснованная привязка ROLLBACK, E1 detached textarea, native Ctrl+C proxy, Setext/closed ATX, quote AST/CI) есть собственные наблюдаемые code/log/test explanations, **без** специфичного antecedent Memory. В исследовательских G-ошибках прежнее содержимое также не добавляет специфичного объяснения к нарушению **текущего** запроса. [M11](30-MEMORY-M11-EXPLANATORY-COVERAGE-MATRIX.md).
- **P2 partial multi-source reinforcement** существует на уровне содержания публичного `PROJECT_STATE` и historical Memory representation, но `MULTI-SOURCE AMPLIFIED` **как наблюдаемый downstream behavioral effect** не установлен. [M10](29-MEMORY-M10-ORIGIN-CARRIER-AMPLIFIER.md).

### NOT ESTABLISHED

- Ни одна причинная цепочка `stale Memory item → GPT-6 per-turn retrieval/use → неверный результат` (или усиление ошибки).
- Что Memory делает GPT-6 менее дисциплинированной или более восприимчивой, чем Sol: [M6](25-MEMORY-M6-MODEL-INTERACTION-MATCHED-HISTORY.md) не дал исторических matched exposures и одинаковых fresh inputs; [M7](26-MEMORY-M7-CURRENT-MODEL-VISIBLE-SNAPSHOT.md) подтвердил только позднее качественное сходство видимого Memory content.
- Сколько ошибок или повторов Memory **вызвала бы** при ином состоянии, либо их вероятность; **13** cases — смещённая выборка, в том числе несколько research G deviations из одной беседы.

**Strongest evidence:** технические реальные первоисточники/исправления для O/E/V, current-plan-before-AGENTS для workflow, независимая case-level M11 matrix и M12 пары recurrence.  
**Strongest counterevidence / alternative:** текущий код и ошибочный тестовый oracle, текущая incomplete causal diagnosis, пропуск supported input variants, само созданный план до чтения AGENTS, а также текущий project/recent context дают достаточные альтернативы; в проверенной истории GPT-6 также **правильно** пользовалась #147 вместо зафиксированного в P1 старого `implementation-only` routing. Отсутствие P1/P2 fingerprint не доказывает отсутствие per-turn Memory; только препятствует позитивной causal attribution.

**Layer verdict:** `OBSERVED GPT-6 FAILURES, BUT STALE MEMORY BEHAVIORAL CONTRIBUTION / AMPLIFICATION NOT ESTABLISHED`.

## 6. Компактная four-layer evidence matrix

| Слой | ESTABLISHED | SUPPORTED / PLAUSIBLE | NOT ESTABLISHED | Сильнейшее counterevidence / альтернатива |
| --- | --- | --- | --- | --- |
| **1. Content quality** | P1 wrong #184 route и P2 wrong #181 status **в secondary reported model-visible Memory**; конфликт с exact GitHub | Memory representation может переносить модельную ошибку или устаревший state; P2 параллелен stale public state | Создание ошибочной detail именно backend Memory; подтверждённый третий P3 | Secondary report может исказить запись; публичный #181 document сам stale |
| **2. Persistence** | P1 ≥5д8ч и P2 ≥5д4ч *между update и датой вторичного report* | Исправленное/устаревшее может переживать correction на уровне выдаваемого содержания | Непрерывный retrieval, верхняя граница update/TTL, полное backend removal | M7 P1/P2 не показывает; это omission/rewrite/deletion unknown |
| **3. Delivery/use** | Отдельный memory-visible блок M7 для GPT-6 и Sol, содержание существенно сходно; M8 два naturalistic response candidates | Непрямая cross-chat continuity возможна | Historical retrieval/use P1/P2 в harmful turn; идентичность per-turn Sol/GPT-6 | Project/recent/current-chat/tool sources и отсутствие source-specific trace; fast path caveat |
| **4. Behavioral effect** | GPT-6 errors (M11) и recurrence без matching Memory (M12) | Memory может гипотетически влиять на routing/context associations | Хотя бы один подтверждённый Memory-caused/amplified GPT-6 failure; broad explanatory power | Current-task code/test/plan объяснения, P1/P2 не повторены в downstream GPT-6 |

## 7. Прямой ответ на отдельные вопросы Sol

### A. Memory: creator / carrier / amplifier / mixed / unknown?

**Лучшее доступное описание по нашим данным: `CARRIER AT CONTENT-REPRESENTATION LEVEL`, с умеренной контентной уверенностью и *неустановленным* механизмом backend и поведенческим влиянием.**

- **`carrier` поддержан двумя независимыми историями:** P1 существовал как ошибочное предложение ассистента **до** позднего report, P2 как действительно существовавший ранний/промежуточный PR status **до** позднего report. P1 неправильный route впоследствии был исправлен; P2 state — superseded merge. Именно эти две прежние смысловые конструкции затем присутствовали в сообщённом Memory-содержимом.
- **`creator` не доказан**. Часть P1 с ложной *ссылкой на PR #184* впервые найдена только в поздней representation, но сам PR был создан **после** earliest erroneous assistant proposal. Возможно новое приписывание на этапе обновления/сжатия или **ошибка экспортного пересказа**; различить нельзя. `source not found` ≠ `Memory created it`.
- **`amplifier` поведенчески не доказан**. P2 одновременно имел broad stale association в public `PROJECT_STATE`, но два источника не показаны совместно извлечёнными GPT-6 или действительно повлиявшими на ответ. Есть лишь `partial content-level reinforcement`.
- **`mixed` как констатация доказанных creator+carrier+amplifier не оправдана**: только `carrier` достаточно поддержан наблюдениями. `unknown` остаётся правильным статусом **конкретного internal mechanism**.

### B. В какой степени Memory может объяснять проблемы GPT-6?

**На наблюдательных данных: `ONLY DOCUMENTED PERSISTENCE RISK WITHOUT DEMONSTRATED BEHAVIORAL EFFECT`; как потенциальная зона влияния — `NARROW, MAINLY WORKFLOW/CONTEXT CARRYOVER`, не `BROAD ACROSS TECHNICAL/RESEARCH FAILURES`.**

Это две **разные степени** утверждения:

1. **Надёжнее установленный слой** — устаревшее/неправильное project/process содержание, которое способно пережить коррекцию в вторичном model-visible representation. 
2. **Осторожная гипотеза о возможной ошибке** — перенос старого route/PR/role associations между чатами. Ни одна такая доставка→использование→вклад в фактический ошибочный ответ не подтверждена; для большинства рассмотренных E/O/V/G есть конкретные более сильные объяснения внутри текущей задачи.

**Не установлено**, что долговременная Memory является общей причиной невнимательности GPT-6, основных technical failures, recurring failures или различия GPT-6 vs GPT-5.6 Sol. **Также нельзя утверждать, что она точно не играет роли**. Не измерены доля, вероятность, latency обновления backend или attributable error reduction.

## 8. Следующая независимая проверка Sol

Предмет review — **overclaim и underclaim** по границам:

1. Не подняла ли я historical **secondary representation** до уровня backend Memory fact? В тексте каждый раз сохранён provenance.
2. Не спутаны ли `>5 days elapsed to snapshot` и **continuous exposure**?
3. Не преувеличено ли M7 `SUBSTANTIALLY SAME`: лишь текущая cross-model project/process content, не history или per-turn retrieval.
4. Корректно ли M11 отрицательно оценено как отсутствие **specific explanatory added power**, а не доказанное отрицание какого-либо Memory contribution? Корректно ли M12 отделяет recurrence от matching Memory?
5. Сохраняется ли аккуратное `carrier` как **лучшее описание двух наблюдений**, при отсутствии creator/backend/amplifier evidence; не упущено ли более сильное доказательство фактического Memory receipt в проблемном GPT-6 turn?

**Итоговый исследовательский статус:** `CONTENT DEFECT + POST-CORRECTION REPRESENTATION PERSISTENCE = SUPPORTED; HISTORICAL MATCHING STALE ITEM DELIVERY/USE AND CAUSAL BEHAVIORAL EFFECT = NOT ESTABLISHED`.

Ожидаю independent review Sol для решения о следующем пробеле. **Никаких tests/A-B/mitigation, cleanup действий, правок Vico Forum / AGENTS / пользовательской Memory не проводилось.** `Major_Renov2/main/AGENTS.md` не обнаружен в предыдущей проверке (404); никакое содержание такого файла не приписывается текущему исследованию.
