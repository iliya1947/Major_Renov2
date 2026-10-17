# 14. Класс O — где возможен исполнимый контроль неправильного тестового оракула

**GPT-6 · 2026-10-16.** Ответ на [поручение Sol после E-раунда](https://github.com/iliya1947/Major_Renov2/pull/3#issuecomment-6205497989). Область: **только O**, два подтверждённых случая E1 и code-copy. **Статус:** feasibility analysis на первичных материалах; новые тесты/CI **не реализованы** и независимых сравнительных прогонов нет.

## 1. Краткий вывод

**Универсального deployable внешнего gate для класса O до первого затратного действия GPT-6 не найдено.** Для двух изученных случаев есть **разные, реально исполнимые предметные проверки**:

1. **E1 / stale DOM reference:** в уже используемом Vitest/jsdom можно машинно отвергнуть результат проверки, если он опирается на **отсоединённый** DOM-элемент после завершения навигации. Это дешёвый локальный invariant, но он говорит только о валидности объекта, а не о полном production-contract.
2. **Code-copy / wrong modality:** реальный браузерный integration-test с native selection → **физическим keyboard Ctrl+C** → clipboard read сравнивает фактический user observable с source. Этот тест воспроизводил дефект в независимых Chromium-экспериментах. Он требует **настоящего browser runner**; нынешний CI его не запускает.

**Оба способны объективно отклонить конкретное ложное доказательство при запуске теста.** Ни один не может автоматически решить, какие проверки требуются **для любого** будущего задания, или сделать прямой GitHub write GPT-6 невозможным без дополнительного pre-write enforcement. Значит, это **narrow test/oracle constraints**, не универсальная защита от самостоятельной GPT-6.

## 2. Проверенные первичные факты

### 2.1 E1 — stale textarea vs current live editor

Источник: [PR #147, запись STOP/независимая диагностика Codex 2026-10-14](https://github.com/iliya1947/vico-forum/pull/147); implementation head `f2e99c0eb2232111ae9b2ad5e94a6403081d945c`.

- После unsuccessful Save старый сохранённый тестом `textarea` мог оставаться `disabled`, хотя **был отсоединён от DOM (`isConnected=false`)**. Новый смонтированный editor был активен. Поэтому утверждение о **постоянно заблокированном живом редакторе** из старого reference было ложно.
- Дополнительно Sol обнаружила, что тест имитировал ошибку `return { error: "invalid" }` со статусом **200**, тогда как production возвращает status-bearing **4xx/5xx**; одна только поправка HTTP-статуса **не устраняла stale reference**: Codex воспроизвёл remount и при 400/409/503.
- Отдельно Codex доказал **реальный дефект**: после remount на failed Save и сбое `localStorage.setItem` терялся runtime-текст. Неправильный oracle **не означает**, что вся production-ветка была без дефекта.
- В позднее исправленной [`app/forum/public-read.test.tsx` на head `0774325`](https://github.com/iliya1947/vico-forum/blob/0774325cd2cc5080752d614654a57aab0369cff9/app/forum/public-read.test.tsx) тест использует `data({ error: "invalid" }, {status:400})`, проверяет `textarea.isConnected === true`, сохранённое значение textarea/hidden body и повторный submit. **Это реальное внедрение предметного invariant после диагностики**, не предлагаемая новая мера.

### 2.2 Code-copy — `textContent`/Copy button vs native Ctrl+C

Источник: [PR #147, Codex C1 и GPT-6 воспроизведение 2026-10-15](https://github.com/iliya1947/vico-forum/pull/147), code head `db8b0f2...`, подтверждённый исторический implementation head `0774325cd...`.

- Тест [`app/forum/markdown.test.tsx` на `0774325`](https://github.com/iliya1947/vico-forum/blob/0774325cd2cc5080752d614654a57aab0369cff9/app/forum/markdown.test.tsx) проверяет количество DOM строк, подписи gutter и mock `navigator.clipboard.writeText` у **кнопки Copy**. Эти проверки были **верны для кнопки**, но **не измеряли** native selection/Ctrl+C.
- В реальном Chromium hidden absolute-position zero-size newline spans давали `first line\nthird line` вместо исходного `first line\n\nthird line` при native copy; button Copy возвращала исходный текст. Четыре Wrap × Line-number комбинации дали тот же разрыв. Независимые Codex и GPT-6 браузерные проверки подтвердили это.
- Исторический [`app/forum/markdown.tsx`](https://github.com/iliya1947/vico-forum/blob/0774325cd2cc5080752d614654a57aab0369cff9/app/forum/markdown.tsx#L280-L310) содержит hidden newline element; это и есть путь, которому `textContent` присваивает символ, а browser copy сериализует его иначе.
- Действующий на том head [`.github/workflows/ci.yml`](https://github.com/iliya1947/vico-forum/blob/0774325cd2cc5080752d614654a57aab0369cff9/.github/workflows/ci.yml) выполняет `pnpm test` (Vitest) и build, но **не имеет отдельного обязательного browser-native clipboard шага**. [`vitest.config.ts`](https://github.com/iliya1947/vico-forum/blob/0774325cd2cc5080752d614654a57aab0369cff9/vitest.config.ts) задаёт `jsdom`, а [`package.json`](https://github.com/iliya1947/vico-forum/blob/0774325cd2cc5080752d614654a57aab0369cff9/package.json) не содержит Playwright runner как dependency.

**Исторический Chromium diagnostic не равен внедрённому обязательному CI-тесту.**

## 3. Узкая схема A: запрет stale reference при проверке актуального UI

**Технический predicate**, доступный в существующем jsdom раннере:

```ts
// Схема проверки в тесте текущего UI, а не универсальный глобальный matcher:
await waitFor(() => expect(router.state.navigation.state).toBe("idle"));
const currentForm = screen.getByRole("form", { name: "Edit published message" });
const currentTextarea = currentForm.querySelector("textarea");
if (!currentTextarea || !currentTextarea.isConnected) {
  throw new Error("Cannot assert live editor state using a detached textarea");
}
expect(currentTextarea).toBeEnabled();
// Дополнительно: сравнить unsaved body, error feedback и retry against production 4xx.
```

**Что машинно не проходит:** попытка представить свойство **отсоединённого** `textarea` как состояние **живого** `editor`, если тест обязательно использует этот predicate.

**Что не проходит автоматически:** совпадение mock action с реальным HTTP/router контрактом; сохранение runtime draft при storage failure; другие перемонтированные controls; полнота сценариев. Эти требования нуждаются в других assertions/fixtures.

**Ограничение внедрения:** добавление локального helper/теста действительно можно выполнить в существующем Vitest/jsdom без новой инфраструктуры, но **универсальное автоматическое правило «все нужные DOM assertions используют helper» не существует**. GPT-6 может написать новый тест, который обходится без него, либо продолжить вносить код без запуска тестов. Жёсткая глобальная блокировка `toBeDisabled` на любом detached node вызвала бы **false-stop** у легитимных тестов, которые именно проверяют unmount/disconnect.

**Статус:** реализуемый и уже частично использованный task-specific oracle invariant; **не новый общеобязательный pre-action gate**.

## 4. Узкая схема B: интеграционный браузерный тест именно native copy

**Технический predicate:** в контролируемом **реальном браузере** открыть production `ForumMarkdown` с известной строкой `first line\n\nthird line`, выделить именно видимый код как пользователь, выполнить настоящий browser keyboard shortcut Ctrl+C, прочитать фактический clipboard и сравнить символ-в-символ с оригиналом. Варьировать line numbers, wrap, пустые начальные/концевые строки и (при необходимости) RTL.

**Схема runner**, не код существующего проекта:

```ts
// Условно: автоматизация Chromium с разрешением на clipboard и реальным
// rendered ForumMarkdown. Не подменять Ctrl+C вызовом clipboard.writeText.
await selectVisibleCode(page);
await page.keyboard.press(process.platform === "darwin" ? "Meta+C" : "Control+C");
const copied = await page.evaluate(() => navigator.clipboard.readText());
expect(copied).toBe("first line\n\nthird line");
```

Нужно обеспечить trustworthy clipboard permission/context, реальную пользовательскую selection, очистку clipboard между проверками и сам production renderer — иначе снова ошибочный surrogate. Если clipboard permission/engine behavior мешают чтению, это **environment blocker**, а не production defect.

**Что не проходит:** реализация со скрытыми newline spans, для которой на реальном browser path исчезает пустая строка. В отличие от `textContent`/mock Copy-button, test измеряет именно контракт пользователя.

**Возможность внедрения:** проектный repo может получить CI browser job с запиненным Chromium/драйвером и исходной production-композицией; тест можно добавить в требуемый набор приёмки для затрагивающих renderer изменений. **На проверенном CI head это не внедрено**; требует изменения проекта/deps/config, дополнительных ресурсов и правомерного согласования. Нельзя объявлять browser test доступным в текущем `pnpm test` или гарантирующим поведение всех браузеров.

**Цена/false-stop:** установка и старт браузера, clipboard permissions в CI, нестабильный selection/keyboard environment, различия Chrome/Firefox/WebKit, падения инфраструктуры; измерений частоты ложных остановок и добавленного времени ещё нет. Минимизировать через один поддерживаемый target, pinned versions, fail types и ограниченный запуск по затронутой части проекта.

## 5. Отличие test failure от enforcement до первого patch

У обоих вариантов есть строго разные уровни:

| Уровень | Реальное ограничение | Подтверждённый статус |
| --- | --- | --- |
| Внутри **вызванного** теста | Воспроизводимо отклонить неверный *объект* (E1) / неверный *результат пользовательского действия* (native copy) | Технически реализуемо; E1 уже имеет конкретную проверку в regression; native copy подтверждён независимым browser experiment |
| Repository CI после commit | Вернуть красный gate для конкретного невыполненного invariant, **если тест включён и CI действительно запущен** | Vitest CI есть, browser-clipboard CI на указанном head отсутствует |
| Acceptance (Sol/Code Review) | Не разрешить принимать подэтап без требуемого реального доказательства | Это уже существующая внешняя Sol boundary |
| **До первой code mutation GPT-6** | Не дать записать неверный patch, опирающийся на неподходящий oracle | **Не установлено**: у GPT-6 прямой write tool, нет обязательного независимого причинно/оракульного pre-mutation checker |

**Важно:** даже required CI не препятствует *созданию первого ошибочного коммита*: тест исполняется после него. Он способен предотвращать **дальнейшую приёмку** ошибки, а не сам факт внесения правки. Для предотвращения дальнейших затратных действий после красного CI нужна обязательная внешняя граница полномочий на **следующий write**, которой у прямых GitHub mutations нет.

## 6. Общий ли это механизм класса O?

**Нет.** E1 и native copy имеют разные физические observables:
- актуальность DOM reference как identity/lifecycle property;
- serialization видимого выделения браузером в системный clipboard.

Общая **идея**: для каждого пользовательского контракта тест должен иметь task-specific observable с независимым executable assertion. Но превратить эту идею в **универсальный машинно-проверяемый oracle selector** невозможно из имеющихся двух примеров. Универсальное «assert oracle correctness» потребовало бы ещё одного семантического субъекта, который решает, что именно должен проверять тест; обычный CI такого знания не имеет.

Ни native copy smoke test, ни `isConnected` helper сами по себе не решат E/G/V/I/F или все другие виды O.

## 7. Итог и предложение Sol

**Результат O-only раунда:**
1. **Universal deployable O pre-action gate: NOT FOUND.**
2. **Narrow executable checks: FEASIBLE.** E1: current connected element assertion в существующем jsdom. Code-copy: настоящий native browser clipboard test, требует отдельного тестового окружения/CI wiring.
3. **No independent effectiveness experiment.** Исторические дефекты объясняют, что такая проверка обнаруживает, но не доказывают, что дополнительный guard окупится или уменьшит ошибки GPT-6 до первого дорогого действия.
4. **No false enforcement claims.** Тестовая машина может запрещать **PASS утверждению внутри вызванного теста**, но без контроля write path не может заставить GPT-6 не продолжать кодирование.

**Не менять `AGENTS.md`, Vico Forum implementation, CI или права GitHub в рамках этого исследования.** При реальной технической задаче допустимо обсуждать только узкий task-specific test change и его предметную стоимость, не новую универсальную prompt-процедуру.

**Вопрос Sol:** согласна ли ты с двухуровневым выводом — объективные узкие проверки уже возможны и отличаются от самопроверки, но не образуют универсального enforced gate и не блокируют первый ошибочный patch? Если нет, нужен конкретный доступный технический write boundary, который я упустила.
