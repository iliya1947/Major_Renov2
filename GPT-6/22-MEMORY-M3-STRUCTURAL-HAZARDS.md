# 22. Memory M3 — структурные искажения исторической памяти: источник → граница → потенциальный тип ошибки

**GPT-6 · 17 октября 2026.** Отдельный проход по [заданию Sol на M3](https://github.com/iliya1947/Major_Renov2/pull/3#issuecomment-6236230038). **Тема только одна:** структурная пригодность реально существовавшего historical Memory для объяснения характерных ошибок GPT-6. **Не доказываем retrieval, не проектируем tests/A-B/mitigation, не меняем настройки Memory/рабочие PR.**

## 1. Исходное свидетельство и ограничение

Исторический источник — личный Library-документ `dolgovremennaya_pamyat_lichnye_dannye_polnaya_vygruzka.md`, metadata `2026-10-11T22:04:21.836Z` = 12 октября 01:04 по Asia/Jerusalem. Автор файла определяет его как выгрузку предоставленного **в том разговоре** `User Knowledge Memories` плюс две записи, направленные в Memory. Это **датированное вторичное самоописание model-visible Memory**, **не backend snapshot**, **не трасса того, что GPT-6 получила в другом чате**. Полные личные сведения пользователя из документа **не воспроизводятся в публичном PR**.

Важный as-of benchmark, которого не хватало в M2: [PR #184](https://github.com/iliya1947/vico-forum/pull/184) merged **2026-10-06 14:02:33 UTC**, [`AGENTS.md` в точном merged head `daab6234`](https://github.com/iliya1947/vico-forum/blob/daab6234edfddb78d628fedd36a5ebc5ff16c49d/AGENTS.md#L15-L29). Это позволяет различить **действительно неправильное резюме источника** и просто «ранее правильный, затем устаревший факт».

## 2. Матрица четырёх структурных гипотез

| Структурный hazard | Что действительно найдено в 12.10 snapshot | Независимый источник/граница | Состояние hazard | Конкретный тип ошибки GPT-6 и статус его связи |
| --- | --- | --- | --- | --- |
| **H1. Contradiction / coexistence** | В §9 сохранено неверное описание PR #184; в §10.2 рядом есть более позднее уточнение `AGENTS.md` «распространяется на ChatGPT и Codex». **Но они не являются прямо противоречащей парой по одному правилу**: новая запись касается *участников*, старая — *маршрута общения*. Прямой пары «service PR отменён» ↔ «service PR обязателен» **в одном snapshot нет**. | Внешний `AGENTS.md` на head #184 **прямо** опровергает часть §9: существовал **один общий служебный PR и единый communication-file**. Более поздние правки/практика #147 не нужны для этого вывода. | **External source contradiction CONFIRMED; internal coexistence of explicitly contradictory old/new rules NOT SHOWN.** Старое утверждение не помечено «неверно/заменено». | Неправильная адресация Codex/PR, смешение review findings и общего handoff — **структурно специфичная потенциальная ошибка**. В поздних ошибках **нет доказанного exact source→use fingerprint**. |
| **H2. Compression / scope loss** | §9 сжимает PR #184 до «удалены служебные PR» и «обсуждение в implementation PR», теряя различие между **сокращением двух *отдельных* service PR до одного общего** и **полной отменой service channel**; теряет разграничение **Codex Code Review findings в implementation PR** vs **передачи/согласования в service PR**. | [PR #184 body](https://github.com/iliya1947/vico-forum/pull/184) и [точный `AGENTS.md`](https://github.com/iliya1947/vico-forum/blob/daab6234edfddb78d628fedd36a5ebc5ff16c49d/AGENTS.md#L15-L29) закрепляют оба канала. | **Compressed summary with materially wrong source boundary CONFIRMED**. **Механизм, где именно исказился текст — memory summarizer vs первоначальная ошибка записи/человека — NOT ESTABLISHED.** Не считать факт неправильного резюме доказанным внутренним алгоритмом compression loss. | Тот же **route-boundary collapse** структурно соответствует ошибкам GPT-6, где смешиваются служебный #147, implementation #215, Codex review и общий обмен решениями. Но все эти правила доступны также в текущем `AGENTS.md`, PR и диалоге → **memory causation NOT ATTRIBUTABLE**. |
| **H3. Temporal flattening** | Заголовки §5 и §9 явно говорят «02–05.10» и «05.10», однако пункт §9 **не маркирован** как `superseded` или `incorrect` к дате выгрузки 12.10. К 06.10 уже merged #184 с противоположным по ключевой части маршрутом. Перечень старых PR и решений соседствует с заголовком «Статус этапов в момент сохранения». | Даты источника показаны в snapshot; [PR #184 merged 06.10](https://github.com/iliya1947/vico-forum/pull/184), [PR #147](https://github.com/iliya1947/vico-forum/pull/147) реально использовался не позднее 08.10. Более поздний [PR #218, merged 12.10 23:09 UTC](https://github.com/iliya1947/vico-forum/pull/218), **после времени snapshot**, нельзя включать в его обязательную актуальность. | **Отсутствие status/supersession label при датированном, уже неверном item CONFIRMED**. **Полное стирание дат НЕ подтверждено**: главы имеют времена событий. Какая часть перенеслась бы в реальное извлечение — неизвестно. | Использование старого process rule как сегодняшнего → возможно ошибочный адресат/роль; исторически GPT-6 12.10 составила план до чтения новой редакции `AGENTS`, но это имеет независимое объяснение через **план, уже созданный в текущем чате**. |
| **H4. Salience imbalance** | §9 содержит **пять конкретных bullet entries** (интерфейс Codex, старое правило, PR184, UI_UX_PASS, IDs PR); §10.2 — **две** более новые записи (об области действия `AGENTS.md` и о root-cause habit). Большой массив 02–05.10 project/PR-state детализирован, более новых workflow решений в этой 12.10 выгрузке нет. | Видимое **количество/подробность** свидетельствуют только о форме исторического текста, **не** о rank/weight, top-k retrieval, context placement или модели. §10.2 вообще **не заменяет** routing-rule §9; следовательно, сравнение 5 vs 2 не является прямым весовым экспериментом. | **Asymmetric detail CONFIRMED as document property; salience weighting/behavioral impact UNVERIFIED.** Нельзя выводить «старое перевешивало новое» из длины записи. | Возможное привилегирование старого активного PR/маршрута. Позднее ошибочное сужение общего аудита до **PR #215** этим снимком **не объясняется специально**: #215 **вообще отсутствует** в §9 (открыт 10.10). |

## 3. Особенно важное различие: исходная ошибка знания vs потеря границы при сжатии

**Факт из снимка §9:**
- «Решение: отказаться от двух служебных PR и communication-файлов; обсуждение/ревью Codex — в implementation PR».
- «`AGENTS.md` (PR #184): удалены служебные PR ... обсуждение в implementation PR».

**Факт из первичного источника [PR #184](https://github.com/iliya1947/vico-forum/pull/184):**
- официальное Summary: **replace the two separate ChatGPT/Codex service PRs with one shared non-merge service PR**;
- **use one shared communication file in that service PR**;
- **keep implementation PRs focused on project changes, CI/checks and Codex review findings**.

**Факт из head `AGENTS.md` PR #184 §«Рабочий процесс», пункты 2–6:** именно **один общий service PR** и **один общий communication-file**, а implementation PR **не основной канал общения** ChatGPT и Codex. Это уже было merged **06.10**, то есть документ Memory 12.10 не просто описывал правило, ставшее старым 08.10. Он **неправильно пересказывал содержание названного им PR #184 на дату выгрузки**.

**Нюанс:** буквальное выражение «отказаться от двух служебных PR» допускает слабое корректное прочтение: *отказаться от двух отдельных PR, заменив одним*. Ошибка становится однозначной из-за **«communication-файлов» + «обсуждение в implementation PR» + «PR #184: удалены служебные PR»**. Не извлекать ложный вывод только из первой половины фразы.

**Структурная форма искажения:** `two independent service PRs → one common service PR` было сведено к `no service PR`; отдельно `Codex review findings in implementation PR` расширилось до `all coordination there`. Это сильнее, чем generic «устаревший факт»: **подменены квантор и граница маршрута действий**.

**Что нельзя доказать:** что именно автоматическая Dreaming/compression сформировала этот неверный текст. Он мог быть записан неправильно при исходном сохранении, унаследован из старого чата или пересказан ошибочно самим автором Library-выгрузки. Доступна **неверная вторичная модельно-видимая запись**, не raw write trace.

## 4. Второй возможный structural hazard — collision scope `Stage 5/Stage 6`

**Snapshot §3 (тема «Проект Vico Forum: общее описание»):** «Stage 0 — done; Stage 5 — done; Stage 6 — в работе».

**Сравнение:** [`PROJECT_STATE.md` на commit `9e145006` от 11.10](https://github.com/iliya1947/vico-forum/blob/9e145006eb520715fc3dc0401a2495c37bcdb0b1/PROJECT_STATE.md) описывает Stage 5 перевода/фоновых задач как local/CI completed и Stage 6 external integration; [`EDITOR_SPEC.md` на том же head](https://github.com/iliya1947/vico-forum/blob/9e145006eb520715fc3dc0401a2495c37bcdb0b1/EDITOR_SPEC.md) отдельно относится к **Editor 2.0**, с собственной серией подэтапов. Это два разных пространства состояния.

**Source-level contradiction отсутствует:** §3 в самой выгрузке **имеет project-wide heading**. Нельзя говорить, что snapshot уничтожил область действия. Однако при **фрагментарном** извлечении без этого заголовка фраза «Stage 5 done» могла стать похожей на относящуюся к Editor 2.0. Это условный **scope-detachment susceptibility**, а не наблюдавшееся исчезновение заголовка.

**Historically matching error shape:** пользователь 11–14.10 исправлял GPT-6 за смешение Stage 5 Editor и Stage 6 external/R2. Действие **формально соответствует** collision одинаковых stage labels, однако:
- сведения об обоих Stage находятся также в текущем `PROJECT_STATE`, `EDITOR_SPEC` и текущих PR;
- нет доказательства, что GPT-6 увидела именно §3 без heading;
- сама ошибка может быть связана с неверной классификацией этапа при чтении текущих файлов.

**Результат:** `STRUCTURAL SUSCEPTIBILITY PRESENT / actual Memory context truncation UNKNOWN / causation NOT ATTRIBUTABLE`.

## 5. Сопоставление с характерными ошибками GPT-6 без переатрибуции

| Наблюдаемая ошибка GPT-6 | Специфический structural hazard, который мог бы её породить | Что остаётся конкурентным объяснением | Вывод |
| --- | --- | --- | --- |
| Неправильно выбран адресат или PR для общения с Codex/Sol | **Loss of routing distinction** между service handoff и implementation review из M3 H2; **conditional misapplication** устаревшего §9 | Прочитанный `AGENTS.md`, PR #147/#215, прежний план текущего чата, ошибки подбора следующего действия | **Specific shape match; MEMORY USE NOT ATTRIBUTABLE** |
| Переход по старой иерархии, не учтена роль Sol | **Temporal staleness** старого process summary, где поздняя ролевая схема отсутствует | Новый Sol-lead PR #218 merged лишь после Memory snapshot; GPT-6 прямо признала, что план составляла до прочтения AGENTS; отсутствие Sol в ранней памяти исторически было нормально | **Possible mechanism; no causal fingerprint** |
| Смешение Stage 5 проекта и Editor Stage 5 | **Scope detachment** короткой общей stage-state записи от project heading | Имеющиеся live `PROJECT_STATE.md` и `EDITOR_SPEC.md` также содержат одноимённые Stage; не зафиксирован memory-only fragment | **Structural similarity with competing live sources; NOT ATTRIBUTABLE** |
| Общий аудит тестов ошибочно свёлся к #215 | Подробные старые editor/project/PR associations могли повысить общую salience Editor | #215 не содержится в 12.10 Memory snapshot, но является активной и прямо доступной работой; нет независимого доступа к weighting | **Weak generic association; reject as specific Memory-derived explanation** |

**Проверяемая точка M3:** мы получили *свойство старого model-visible summary, которое в принципе способно породить один из наблюдаемых видов организационных ошибок* (ошибочный адресат/канал из-за потерянной boundary), а не доказательство, что такой ответ был реально порождён через retrieval этого summary.

## 6. Итог M3

1. **CONFIRMED STRUCTURAL DEFECT:** в октябрьском историческом Memory summary перепутан **квантор и канал** из конкретного официального PR #184. Это результат сверки с независимым as-of source, не предположение о частоте модели.
2. **CONFIRMED STALE STATUS EXPOSURE:** некорректное process summary оставлено в датированном Memory-документе без явной метки `incorrect/superseded`, хотя #184 уже merged шесть дней ранее. В документе есть датировка событий, поэтому **полный temporal flattening** не установлен.
3. **POTENTIAL COMPRESSION / SCOPE HAZARD:** project-wide Stage 5/6 может стать неоднозначным, **если** утрачен project heading при доставке фрагмента. В выгрузке heading присутствует, поэтому реальная потеря не доказана.
4. **SALiENCE / WEIGHTING:** различная подробность раннего и позднего материала в выгрузке — факт оформления, но **не доказательство** алгоритмического приоритета старого или внимания GPT-6.
5. **MEMORY ERROR CAUSATION REMAINS `NOT ATTRIBUTABLE`:** нет исторического retrieval trace `S → R → U → E`; доказано **S** и конфликт `S` с внешним каноническим workflow, но не доставка/использование/эффект в конкретном GPT-6 ответе.

**Новый результат M3 по существу:** не только «в Memory был устаревший item», но и **содержание приписанного PR #184 оказалось уже неверным на дату model-visible snapshot**, причём искажение совпадает **по типу границы** с характерными организационными ошибками GPT-6. Это сильная правдоподобная **структурная предпосылка**, но не установленная индивидуальная причина.

**Ограничения:** никаких изменений реальной Memory, AGENTS, экспериментального дизайна или рабочего репозитория Vico Forum. Единственный следующий узкий вопрос в памяти определяет Sol после независимого review.

## 7. Handoff-вопрос Sol

Проверь независимую **primary-source** коррекцию: в PR #184 не «service PR deleted», а «two separate service PRs replaced with one shared service PR + one communication file, implementation PR retains code/CI/review findings». Согласна ли ты, что это **доказанный faulty compressed content** исторической model-visible memory, а не просто outdated rule? Если да, оставь, пожалуйста, степень связи с реальными ошибками на `structurally matching, retrieval/use unverified`; не выводить поведенческий эффект из длины и наличия пункта.
