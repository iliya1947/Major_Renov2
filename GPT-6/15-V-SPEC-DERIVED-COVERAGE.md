# 15. V: внешний conformance corpus против пропуска поддерживаемых Markdown heading-вариантов

**GPT-6 · 2026-10-16.** Независимый анализ **только класса V** по [заданию Sol](https://github.com/iliya1947/Major_Renov2/pull/3#issuecomment-6211036600). **Статус:** архитектурная/исходная проверка на историческом head; не внедрённый CI, не запущенный spec-derived test suite и не доказанный эффект на стоимость исправлений.

## Краткий ответ

**Да: у heading-case существует реальный внешний машинно-читаемый coverage source — официальный [CommonMark `spec.json` версии 0.31.2](https://spec.commonmark.org/0.31.2/spec.json).** Его записи включают `section`, `example`, `markdown` и эталонное `html`; разделы `ATX headings` и `Setext headings` содержат положительные и отрицательные случаи. Их можно **детерминированно отобрать** до реализации, чтобы GPT-6 не выбирала вручную из памяти только plain ATX.

**Однако:** это внешний **корпус примеров синтаксиса**, не готовый oracle кастомной операции `setParagraphDirection`. Проектное правило «выбранный заголовок после Auto/LTR/RTL сохраняет тип, содержимое и untouched source» необходимо отдельно наложить на эти случаи. Решение о том, какие случаи операции доступны пользователю и как проверять редкие/пустые/nested headings, также не выводится автоматически из одного CommonMark JSON.

**Узкая внедряемая архитектура:** pinned spec corpus → deterministic heading-section test manifest → project invariant / metamorphic tests → уже действующий Vitest/CI. Такая схема **может** ловить неполное покрытие раньше reviewer-acceptance и не требует участия пользователя. Но первое исправление GPT-6 остаётся допустимым до CI; `AGENTS.md` менять не надо.

## 1. Два независимых источника истины

### 1.1 Проектный пользовательский контракт

На [историческом implementation head `0235a898`](https://github.com/iliya1947/vico-forum/blob/0235a898e861256383d9b0a35a55fd0e10cbecac/EDITOR_SPEC.md) действовали:
- **§2, пункты 34–40:** Markdown — единый источник; смена режима не переписывает его; явное форматирование может менять выбранный фрагмент, но нетронутые фрагменты и смысл должны сохраняться;
- **§9:** ручной Auto/LTR/RTL для выбранного абзаца/**заголовка**/элемента списка, запись `{:vico-dir=ltr|rtl}` как исходного маркера, который скрыт в published/visual представлении; Auto удаляет маркер.

Проектный `EDITOR_SPEC.md` **не перечисляет все формы CommonMark-заголовков и не фиксирует явно номер версии CommonMark**. Не приписывать ему требования о конкретных example IDs, которых там нет.

### 1.2 Внешний синтаксический стандарт

[Официальная CommonMark 0.31.2](https://spec.commonmark.org/0.31.2/) определяет:
- **§4.2, ATX:** 1–6 opening `#`, опциональная closing `#`-последовательность с пробельными условиями и допустимыми отступами;
- **§4.3, Setext:** текстовые строки и underline из `=` или `-`, с заданными правилами распознавания и блокового приоритета;
- [`spec.json`](https://spec.commonmark.org/0.31.2/spec.json) содержит Markdown + ожидаемый HTML + имя раздела + номер примера.

По видимому официальному корпусу две секции покрывают **example 62–79 (ATX)** и **80–106 (Setext)** — **45 specification examples**, включая случаи, которые *не* являются headings. Этот подсчёт отражает example IDs этих двух секций, **не** число положительных cases и **не** число отдельных heading nodes.

**Версия 0.31.2 выбрана как доступная официальная воспроизводимая reference для исследования, а не как уже согласованная проектом зафиксированная версия.** Для внедрения зафиксировать версию и integrity hash, совместимость с `mdast-util-from-markdown@2.0.3` / установленным parser package set и границы намеренных extensions; не объявлять latest-spec без проверки всех поддерживаемых версий.

В проекте [`app/markdown-syntax.ts` на `0235a898`](https://github.com/iliya1947/vico-forum/blob/0235a898e861256383d9b0a35a55fd0e10cbecac/app/markdown-syntax.ts) используется `mdast-util-from-markdown` с **узким GFM-strikethrough extension** (не полный GFM). Поэтому CommonMark headings — подходящая внешняя базовая грамматика, но custom `vico-dir` поведения там **нет**.

## 2. Минимальный детерминированный coverage selector

**Шаг 1 — получить заранее (до GPT-6 implementation) и pin corpus**. Хранить версию/hash в задаче/тестовом окружении; corpus загружается отдельным runner, а не генерируется GPT-6 из памяти.

**Шаг 2 — детерминированно выбрать секции:**

```ts
// Схема генератора; НЕ исполнялась на полном corpus в этом исследовании.
const cases = specExamples.filter(
  (test) => test.section === "ATX headings" || test.section === "Setext headings",
);
if (cases.length === 0) throw new Error("Pinned CommonMark heading corpus missing");
for (const item of cases) {
  // Сохранять стабильные example ID, source Markdown и expected HTML.
  emit({ id: item.example, group: item.section, markdown: item.markdown, expectedHtml: item.html });
}
```

**Почему нельзя слепо «одна секция = все положительные headings»:** официальный `example 63` (7 opening hashes) и `example 87` (невалидная Setext underline из-за отступа) **НЕ** должны превращаться в валидные heading mutation tests. Их expected HTML — отрицательный oracle для исходного парсинга. Напротив, `example 71` — ATX с optional closing hashes; `example 80` — Setext H1/H2 с inline formatting. Именно оба последних разбивают ограниченную проверку только plain ATX.

**Шаг 3 — минимум два слоя тестов:**

1. **Спецификационный baseline:** для *каждого* собранного example сравнить релевантную семантическую структуру реального парсинга с **официальным expected HTML** (как минимум количество, уровни и содержимое headings, а также отсутствие headings в отрицательных cases). Не требовать идентичности кастомной HTML-разметки Vico Forum всему эталонному HTML. Проверять ожидаемые headings **по внешнему `html` до** поиска их в production AST; нельзя молча пропускать пример только потому, что production parser «не нашёл heading» — это circular oracle.
2. **Metamorphic operation invariant** для всех применимых heading nodes: выбрать этот heading в исходном source; выполнить `RTL → LTR → Auto` через **production `setParagraphDirection`** и `parseForumMarkdown`; после каждой операции heading level, текст, остальные блоки и нетронутый Markdown остаются семантически неизменными; рендер использует соответствующий `dir` без видимого `vico-dir`; после Auto восстановлен **точный исходный source**.

Направление и metadata — **проектная трансформация**, поэтому официальный эталон задаёт *исходную* семантику, а требования §2/§9 задают инвариант изменения. HTML CommonMark не содержит значения `dir` и сам по себе не может проверять кастомный marker placement.

**Шаг 4 — явный applicability status, без скрытого исключения:**
- Примеры без expected headings идут в negative conformance tests, а не автоматически в `setParagraphDirection`.
- Для валидных **пустых ATX** и редких вложенных/многострочных случаев нельзя выдумывать требование интерактивного выбора, которого project spec отдельно не установил: зафиксировать, поддерживается ли действие на таком heading, либо отметить unresolved product mapping. Не молча удалять их из coverage.
- Корпус может содержать несколько headings в одном примере: тестировать все применимые candidates; число headings в expected HTML должно быть проверено независимо до выбора source offsets production parser.

## 3. Как именно это поймало бы исходный дефект

На head [`0235a898` → `editor-document.ts`](https://github.com/iliya1947/vico-forum/blob/0235a898e861256383d9b0a35a55fd0e10cbecac/app/forum/editor-document.ts) `setParagraphDirection` добавляла `{:vico-dir=rtl}` после `heading.position.end.offset`, то есть:
- `Title\n===` → `Title\n=== {:vico-dir=rtl}`: delimiter больше не остаётся корректной Setext underline;
- `## Title ##` → `## Title ## {:vico-dir=rtl}`: closing hashes становятся частью текстового содержимого.

Это было обнаружено [Sol independent review в PR #147](https://github.com/iliya1947/vico-forum/pull/147), затем поправлено [кодовым head `1deb4a5`](https://github.com/iliya1947/vico-forum/commit/1deb4a516719126cce4bcbab207c2d2d0c271d2b), где тесты включают Setext H1/H2, CRLF, closed ATX, inline formatting и точный Auto roundtrip.

**Контрфактическая оценка (не эксперимент):** если бы до первичной реализации уже стоял pinned selector, который включает официальные примеры `71` и `80`, а к ним был подключён сформулированный metamorphic invariant, то они дали бы **FAIL** на старом `setParagraphDirection`. Но этого suite **не было**; не утверждать, что он был запущен до ошибки, и не выдавать патч после Sol review за эффект генератора.

## 4. Какие ограничения модель теперь не выбирает одна

**Реальный прирост над текущими Ready criteria:** формулировка «heading» перестаёт сводиться к одному примеру `## Title`, выбранному GPT-6. Фактические разновидности приходят из **внешнего версионированного корпуса**, selection по разделу детерминирован, исключения явны, а тесты могут завершаться FAIL автоматически.

**Где зависимость от GPT-6 и supervisor остаётся:**
1. Кто решил, что задача относится к `ATX headings` и `Setext headings`? Можно привязать это **однократно** к bounded-подзадаче, сформулированной Sol/Codex; для произвольного будущего требования универсального классификатора нет.
2. Кто определяет **metamorphic property** пользовательского действия, критерии `applicable/unsupported` и expected `dir`? Это проектная семантика, не часть CommonMark, и её нужно независимо согласовать в рамках существующего task gate.
3. Кто гарантирует, что producer не изменит/не исключит corpus? Нужны pinned data/manifest (и при более сильной защите — read-only/branch enforcement). Текущий GPT-6 GitHub writer **может** менять тесты; наличие corpus само по себе не независимый write gate.
4. Когда тест выполнится? Existing `pnpm test`/GitHub Actions **после** первого patch; результаты доступны до Sol acceptance, но не блокируют первую mutation.

## 5. Реалистичный deployment/стоимость/false-stops

**Узко deployable:** для Markdown heading manipulation добавить **проектные** regression tests, использующие versioned official spec examples и собственный operation invariant, в уже существующий Vitest `pnpm test`; CI расширится тестами без обязательного browser runner. Пользователь не размечает задания; Sol не требуется каждый раз проверять каждый generated example. Однако изменение production CI/corpus, их лицензия/обновление, pinning и возможная требуемая внешняя test-ownership boundary потребуют отдельного решения в реальном проекте. **В этом исследовании ничего не внедрено.**

**False-stop/overhead:**
- baseline CommonMark HTML ≠ весь HTML кастомного Vico renderer; буквальное сравнение неправильно;
- spec section содержит **negative cases**, пустые заголовки, multi-line/embedded headings; слепое применение marker ко всем приведёт к фиктивным FAIL;
- drift между официальным corpus и версией markdown parser, CRLF/source offset нюансы, возможно намеренно защищённые editor cases;
- стоимость обработки 45 examples + нескольких headings/direction modes на обычном Vitest сравнительно невелика по замыслу, **но фактическое время/flake rate не измерены**;
- тесты могут ложно блокировать продуманное изменение возможностей редактора, если scope изменился без согласованного обновления contract.

Не строить из Markdown-specific corpus универсальный V-engine для всех предметных областей.

## 6. Вердикт V-only

| Вопрос Sol | Результат |
| --- | --- |
| Независимый coverage source? | **Да:** официальный versioned CommonMark spec corpus для синтаксиса ATX/Setext |
| Автоматически получить source cases до разработки? | **Да, технически:** секции и IDs даны в `spec.json`; источник можно заранее зафиксировать. Фактического full-corpus execution здесь нет |
| Тест может FAIL на исходном дефекте? | **Да при добавлении проектного metamorphic invariant**; это воспроизводимый контрфактический вывод из исходного кода/спецификации, не исполненный в данной сессии |
| Кто выбирает subset? | Нужна **одноразовая внешняя scope-to-spec привязка**; не полностью независимо от человека/модели |
| Новая информация сверх Ready criteria? | **Да:** примеры `71/80`, отрицательные случаи и другие форматы, которые GPT-6 не перечислила; но project invariant/target selection отдельно |
| Общий механизм V? | **Ограниченно:** spec-derived coverage в формально специфицированных доменах, **если** corpus и feature mapping доступны |
| Универсальный pre-first-patch V-gate? | **Нет:** в текущем workflow нет внешнего обязательного контроля перед GitHub mutation |

**Статус:** `spec-derived test generation = credible narrow deployable candidate`; `already implemented = false`; `universally prevents GPT-6 error = not established`.

**Рекомендация Sol:** признать метод **отличным от пустой самопроверки** как source of independent examples, но не выдавать его за полностью независимое выбора предметной области/семантики пользовательской операции. Никаких новых общих инструкций `AGENTS.md` или автоматических изменений Vico Forum в исследовательском PR.
