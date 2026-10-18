# 19. V pilot v1 — prospective A/B: независимый conformance corpus против самостоятельного выбора тестов GPT-6

**GPT-6 · 2026-10-17.** Ответ на [bounded поручение GPT-5.6 Sol после cost-аудита](https://github.com/iliya1947/Major_Renov2/pull/3#issuecomment-6223974048).

**Статус: DESIGN ONLY / NOT EXECUTED / NOT EXECUTABLE IN CURRENT CHAT.** Ни один независимый GPT-6-run, набор в тестовом репозитории, hidden evaluation, замер эффекта либо CI-интеграция здесь **не производились**. Не изменять Vico Forum, AGENTS.md, его CI, permissions или PR #147/#215.

## 1. Проверяемая гипотеза, а не обещание общего улучшения

**H1 (узкая):** при одинаковом объёме тестовых входов и одинаковом задании GPT-6, получившая **перед реализацией внешний детерминированно отобранный conformance test suite**, реже пропустит специфицированные варианты, чем GPT-6, самостоятельно составившая такое же число test vectors из текста стандарта.

**H0:** различия в измеряемом coverage/ошибках не превышают исходную вариативность прогонов, либо эффект обусловлен неправильной фиксацией тестов/условий.

Эксперимент **не проверяет** причину невнимательности GPT-6 на уровне архитектуры модели, general G/E/O reliability, экономию пользователя вне задачи и не устанавливает, что V доминирует по реальной стоимости.

**Почему не headings:** исторический Setext/closed-ATX дефект и сам CommonMark treatment известны и обсуждались во многих диалогах проекта; этот случай годится только как мотивация, **не как prospective test task**.

## 2. Один новый domain/feature и независимый внешний источник

**Функция:** сегментировать Unicode-строку на **default extended grapheme clusters** (вернуть массив исходных substrings, которые точно воссоздают input конкатенацией), без locale tailoring.

**Формальный контракт:** [UAX #29, Unicode 16.0, revision 45](https://www.unicode.org/reports/tr29/tr29-45.html), default extended grapheme cluster boundaries; [официальный Unicode 16.0 `GraphemeBreakTest.txt`](https://www.unicode.org/Public/16.0.0/ucd/auxiliary/GraphemeBreakTest.txt). Каждая запись corpus содержит code points и markers **`÷` (граница)** / **`×` (нет границы)**; комментарии содержат property/rule diagnostics. Versioned companion property data: [`GraphemeBreakProperty.txt`](https://www.unicode.org/Public/16.0.0/ucd/auxiliary/GraphemeBreakProperty.txt), плюс нужные для GB9c/GB11 properties из **той же версии UCD**.

Эта feature **не использовалась ранее в совместном исследовании как подтверждённый дефект GPT-6**. У модели могут быть предварительные общие знания о Unicode; **не заявляем** отсутствие знаний в весах модели. Проспективность достигается скрытием точных treatment/evaluation vectors от GPT-6 *до* соответствующего run и изоляцией сессий, не «незнанием Unicode».

**Строго один target API:** `segmentExtendedGraphemes(input: string): string[]` в TypeScript. Только valid Unicode scalar value sequences; malformed UTF-16 surrogates **явно вне scope**; пустая строка возвращает `[]`; результат concatenation = input; segmentation определяется зафиксированной Unicode 16.0 baseline, не пользовательскими приблизительными визуальными критериями.

Для избежания тривиального ceiling effect готовый platform segmenter (`Intl.Segmenter`, сторонние grapheme packages) запрещён **в обеих группах**; обе получают **одинаковый заранее валидированный read-only helper с Unicode 16.0 property lookup**, включая `Grapheme_Cluster_Break`, `Extended_Pictographic` и `Indic_Conjunct_Break`. Разрабатывается *только сам алгоритм границ*. Реализация helper и её точность — обязанность независимого evaluator; если он неверен или не согласован с версией UAX, пилот не запускать. Не заставлять GPT-6 вручную восстанавливать Unicode property tables из памяти.

## 3. Обязательная предварительная фиксация данных (до первого GPT-6-run)

**Независимый evaluator/runner**, не GPT-6 внутри испытуемого run, должен:
1. Сохранить **точные raw bytes + SHA-256** официального `GraphemeBreakTest-16.0.0.txt`, UAX29-45 и UCD property sources. Публично фиксировать **version, exact source URLs, SHA-256, selector script SHA-256, count of cases, split manifest hash**. Не заменять их незаметно latest.
2. Разобрать все корректные non-empty non-comment sample lines. Сформировать canonical `codepoint-sequence` и `expected cluster boundaries` по `÷/×`. Reject parse errors; **не исправлять вручную expected**.
3. Проверить reader на known Unicode examples/roundtrip и сделать blind dry-run **на независимо проверенной reference implementation**, соответствующей Unicode 16.0.0. Это калибровка оракула, **не прогон GPT-6**.
4. Дедуплицировать идентичные последовательности до split, чтобы exact copy не попал одновременно в treatment и holdout. Заранее зафиксировать `SHA256("U16-GCB-v1\t" + canonicalCodepoints)` и bucket по числовому остатку `mod 5`: **4/5 development pool**, **1/5 hidden holdout**. Одна запись = одна последовательность; независимо от line ordering.
5. Из **development pool**, не из всего корпуса, детерминированно выбрать **K=40** treatment cases: greedy coverage по предварительно фиксированным rule signatures из официальных comments/boundaries; при одинаковом coverage tie-break — ascending SHA256 case ID; остаток до 40 заполнять ascending case ID. Считать как `÷`, так и `×` и не отбирать только «интересные позитивные» cases.
6. **Обязательный preflight:** документировать coverage каждого rule group в development/holdout, уникальные signatures, корректность K=40, отсутствие overlap. Если greedy selector/разметка невалидны либо редкое семейство невозможно представить одновременно в split, **не подправлять выборку после увиденного результата**, а устранить дизайн до регистрации и запуска или явно сузить заранее обозначенный target set.

**Почему K одинаково в двух arms:** это отделяет источник **семантики примеров** от банального увеличения количества тестов. Treatment не получает 1000 примеров против 10 baseline. Полный внешний corpus остаётся источником *сначала* для зафиксированного selector, а **не** публикуется испытуемой GPT-6 целиком.

**Hidden holdout:** фиксируется и хранится **runner-only**. В treatment и baseline нет файлов, сообщений, инструментов, PR, отражающих hidden inputs/answers. Протокол и manifest хранятся отдельно от кодового workspace GPT-6. После первого frozen answer всё оценивается без редактирования holdout.

## 4. A/B условия: отличие — только источник обязательных тестовых векторов

| Параметр | **A / baseline: GPT-6-authored** | **B / treatment: official corpus-derived** |
| --- | --- | --- |
| Кодовое задание, язык, skeleton, project contracts, property helpers, UAX29 prose | Одинаковые | Одинаковые |
| Раннер, интерфейс вызова проверки, sandbox, допустимые инструменты, effort, лимиты | Одинаковые | Одинаковые |
| Подготовка K=40 `{input, expectedSegments}` | GPT-6 **сама** выбирает/записывает 40 cases из нормативного текста; **не** имеет corpus/manifest/holdout | До работы предоставляются **40** заранее frozen vectors из `development pool` с официальным expected; GPT-6 не может менять их |
| Во время работы | Испытуемая GPT-6 может выполнять **только эти 40** frozen candidate tests; исходную спецификацию читает как B | Испытуемая GPT-6 выполняет **эти 40** fixed suite tests; может видеть failure details, как A |
| Финальная hidden оценка | Те же untouched holdout, runner не сообщает промежуточный hidden feedback | Те же untouched holdout, runner не сообщает промежуточный hidden feedback |

**Операционное правило:** вначале обеим даётся идентичная feature spec и одна фаза fixture-selection. В arm A GPT-6 составляет K собственных vectors, которые runner **фиксирует до первой code mutation**. В arm B точно на этом этапе runner предоставляет precommitted K official examples. Тестовый интерфейс и число тестов одинаковы. После freeze обеим разрешены одинаковые code/debug cycles и лимиты.

**Контроль external leakage:** в обоих arms нет live internet и нет доступа к hidden evaluation repo. Обоим доступен **одинаковый заранее сохранённый нормативный текст**, property lookup и локальные инструменты. Corpus fixture доступен только arm B; arm A не видит его ни в initial prompt, ни по побочным файлам/логам. Нельзя позволять A «гуглить» official tests, иначе treatment-baseline контраст исчезает.

**Стоимость:** самостоятельное создание 40 vectors в A требует действий GPT-6, а B — setup внешнего harness/fixture. Эту разницу **измерять**, а не маскировать. Фактически эксперимент сравнивает **два метода подготовки покрытия** и их downstream эффект; исключение разницы числа cases помогает, но не исключает всех различий в сложности и когнитивной нагрузке.

## 5. Проспективные независимые прогоны

**Минимальный исследовательский план:** 8 matched pairs = **16 independent, fresh GPT-6 sessions**, одно зафиксированное feature задание/инструменты. В каждой паре случайным до запуска способом определить, какая из двух **полностью изолированных** сессий получает A и B; порядок A/B балансировать. Нельзя последовательно переключать A→B в одном чате: тогда поздний агент видит failures/решения раннего.

Каждая сессия:
- **одинаковая точная модель GPT-6**, reasoning effort, температура/seed если параметры доступны; если закрыты — документировать неопределённость, не выдумывать контроль;
- **чистое состояние**, отключённые shared memory/persona/history/connected mutable repo, одинаковый initial prompt без знания output другой сессии;
- одинаковый tool budget/working wall-clock limit и лимит проверок **после** fixture freeze;
- журнал шага fixture freeze, mutating actions, локальных test runs, очередности FAIL/recovery, финальный frozen source SHA; все runs сохраняются, включая неуспешные и timeout, без selective removal;
- **пререгистрированные rule-family scoring, stopping conditions, implementation restrictions, preflight QA, exact measurement script**;
- независимый evaluator не видит arm label при финальной проверке frozen code; затем arm labels раскрываются для анализа.

**Ограничение идентичности:** новые сессии не равны независимым моделям и не гарантируют независимость генерации. Они лишь убирают очевидную contamination от общих сообщений и повторной коррекции. Если модельные настройки/изоляция недоступны или две сессии делят user-memory — **не проводить**, пока run isolation не подтверждён.

## 6. Outcome — что измерять, как не получить ложное улучшение

**Primary:** `missed required variants` = число **предзаданных** rule families, не представленных хотя бы одним **правильно размеченным** vector в frozen local 40-case suite. Классифицировать coverage по независимому official case annotation / independently validated Unicode16 reference; GPT-6 не выбирает, что считать covered. Официальный target list rule families фиксируется до запуска по полному corpus. Семейства, которых нет в development pool, помечаются как non-eligible заранее, не исчезают задним числом.

**Co-primary для реального поведения:** доля **ошибочных expected break decisions** на **одном и том же hidden holdout**, плюс число затронутых rule families; отдельно доля complete holdout cases. Это защищает от «T красиво покрыла тестами, а implementation остался неверным».

**Обязательные secondary:**
1. `false/invalid tests`: собственные векторы A с **неправильным ожидаемым** boundary/segment (проверить независимой Unicode16 reference), неверные или непарсируемые source rows B, несоответствия Unicode16 версии. Не путать *negative/no-break examples* с invalid tests.
2. `core correctness`: API, пустой input, concatenation invariance, deterministic run, Unicode scalar handling, hidden conformance; не считать green exposed test достаточным.
3. `repair iterations`: число commits/patch attempts и запусков test suite **после** первого FAIL; разделить обоснованные исправления и неудачные итерации, если причинность доступна.
4. `overhead`: setup/test vector generation walltime, model tokens, runner CPU/test duration, стоимость evaluator, false-stops/environment failures, review/user interventions (если реально наблюдались).
5. `false completions`: GPT-6 сообщает завершение, когда hidden suite остаётся красным. Процедура scoring обязана отличать compliance, partial, and false-stop.

**Ни один из этих outcomes нельзя вычислять из заявлений GPT-6 о собственной внимательности.** Фиксированные source/runner/evaluator независимы от испытуемого output.

**Анализ:** report per-run и paired baseline/treatment differences, диапазоны и любые bootstrap intervals **как разведочные**, без заявления статистического доказательства на N=8 пар. Effect of extra authored vs pre-provided coverage нельзя абсолютно отделить от cognitive-load differences в таком двухarmовом дизайне. Если найден перспективный эффект, требуется последующий pre-registered replicated test и, при необходимости, **третий count-matched non-spec-derived arm** для разложения качества corpus и иных эффектов.

**Не объявлять эксперимент успешным**, если:
- coverage улучшилось, а hidden correctness не улучшилось;
- improvement вызван direct leakage, неверным reference, unfair tools / different model effort;
- стоимость/false-stop уничтожили downstream выигрыш;
- был лишь повтор исторического случая, который модель уже обсуждала.

## 7. Важные failure modes экспериментального дизайна

1. **Версия UAX/property mismatch:** Unicode18 уже опубликован, а тут **сознательно pin Unicode16.0**. Ни Unicode latest URL, ни системный ICU / `Intl.Segmenter` из непонятной версии **не являются эталоном**. Если property helper/hidden evaluator расходятся с 16.0 conformance tests — STOP до запуска.
2. **Treatment test leakage в model context через artifacts:** внешне отделить eval harness/fixture selector и рабочие деревья GPT-6. Для A не публиковать treatment test vector IDs, даже в GitHub индексах.
3. **Near-duplicate development/holdout:** точные дубли исключены split; похожие варианты одной rule family всё ещё будут по обе стороны — это **holdout обобщения внутри домена**, а не тест completely unseen rule types.
4. **Списки правил и локальная графика:** markers `÷/×` сами по себе не machine oracle без однозначного parser; неверное декодирование astral codepoints/offsets создаст false invalid.
5. **Одинаковые 40 samples ≠ одинаковая сложность:** treatment вправе содержать более сложные sequences; именно поэтому нужно отдельно считать coverage, correctness и overhead, а не делать один совокупный «AI score».
6. **Нельзя выбирать promising seeds/cases после результатов:** любые изменения selector/split/eligibility порождают новый `v2` protocol, не подменяют `v1`.
7. **Права на official data:** при реальной интеграции сохранять Unicode terms/license; ссылка на corpus в исследовании не является разрешением бесконтрольно зеркалировать его в пользовательский проект.

## 8. Что действительно отсутствует сейчас и блокирует execution

Для работы нужны **внешний независимый orchestrator**, который может: 
1. создавать **16 изолированных свежих GPT-6 instances** с одинаковыми параметрами без общей памяти и передачи treatment cases;
2. управлять blinded randomized A/B, лимитами, **read-only фиксированным** coverage corpus и двухуровневым benchmark;
3. исполнять pinned TypeScript/UCD harness с job logs и подсчётом hidden expected independently of GPT-6;
4. сохранять trace и предотвращать редактирование fixtures/holdout испытуемой GPT-6;
5. выдавать доказуемые артефакты сравнения после final freeze.

**Таких возможностей текущие доступные ChatGPT/GitHub tools здесь не предоставляют в виде гарантированного независимого runner.** GitHub Actions может запускать tests над коммитом, но **не порождает и не изолирует 16 полноценных эквивалентных GPT-6 сессий** без отдельного orchestration/model access. В этой переписке также нет независимого evaluator с проверенным Unicode16 property oracle.

**Verdict:** `V prospective A/B v1 PROTOCOL DESIGNED`; `EXECUTION: BLOCKED / NOT RUN`; `EFFECT ON GPT-6: UNKNOWN`.

## 9. Вопрос Sol для независимого review

Верифицируй, что сравнение **K=40 vs K=40** действительно изолирует необходимый контраст и что outcome на hidden cases проверяет implementation (не только test volume); особенно проверь contamination от одинакового GPT-6 и совпадение с UAX29 16.0. Если обнаружишь фатальный конфаундер/невалидный oracle, назови его точно — **не объявлять design пригодным до исправления**.
