# Symbols — targeted post-Phase-C research gap

**Статус:** исследование начато 17.10.2026, НЕ завершено.

## Практический вопрос

Что реально происходит с LLM/ChatGPT, если начало нового длительного чата состоит из нескольких сообщений только из символов, без заранее объяснённого значения и без обычного языка? Может ли такой старт создать собственную раннюю траекторию интерпретации, и как отличить это от pretraining priors, tokenization/format effects и обычного priming?

## Граница

Исследуется только влияние символов и symbol-only interaction. Другие темы подключаются только если непосредственно объясняют этот эффект.

## Карта вопросов — рабочая, расширяемая

1. Что является «символом» для LLM после Unicode/normalization/tokenization?
2. Насколько разные визуально сходные/разные знаки превращаются в один или несколько токенов?
3. Какие символы уже имеют сильные pretrained semantic/cultural priors?
4. Какие знаки относительно слабо семантизированы, но всё равно имеют distributional/token priors?
5. Может ли модель установить новое произвольное symbol↔meaning/function mapping только из текущего контекста?
6. Когда модель действительно использует mapping, а когда опирается на format/label-space/input-distribution shortcuts?
7. Как instruction tuning меняет баланс semantic prior vs newly inferred mapping?
8. Как emoji sequences композиционно интерпретируются без текста?
9. Как punctuation/special characters могут менять внутреннее вычисление независимо от человеческого смысла?
10. Какие rare/glitch/adversarial-token effects могут имитировать «особое значение символа»?
11. Что происходит в диалоге без явных demonstrations, когда первый input — одиночный или последовательный символ?
12. Как repetition, order, spacing, grouping и turn boundaries меняют эффект?
13. Может ли собственный ответ модели на первый неоднозначный символ стать частью контекста, определяющей трактовку следующего?
14. Сохраняется ли эффект после перехода к обычному языку в том же чате?
15. Может ли он сохраняться межчатово через Project context/memory, и что именно тогда переносится?
16. Как отличить: semantic interpretation / convention formation / priming / format conditioning / tokenization artifact / stochastic branch?
17. Какие классы символов пригодны для максимально недоопределённого старта, а какие заранее слишком нагружены смыслом?
18. Есть ли прямые исследования symbol-only multi-turn starts у современных chat LLMs?

## Первый проход — установлено

- Визуальный знак не является гарантированно атомарной единицей модели: его воздействие проходит через tokenizer/representation.
- Arbitrary labels могут получать task-local функцию из in-context mappings; это показано в SUL-ICL/symbol-tuning работах, но не доказывает spontaneous meaning formation из одиночных symbol-only turns.
- Semantic priors конкурируют с newly supplied mappings; instruction tuning может усиливать оба, особенно priors.
- Правильные input-label mappings не всегда являются причиной ICL performance: format, label space и input distribution могут давать shortcuts.
- Emoji уже несут богатые pretrained/conventional meanings и композиционные закономерности; поэтому emoji не являются «пустыми» символами.
- Punctuation/rare tokens могут иметь непропорциональный вычислительный эффект; optimized prompts показывают, что человеческая интерпретируемость не обязательна для сильного влияния на output.
- Эффекты punctuation/model-internal routing существенно model-specific; нельзя переносить результат одной архитектуры на ChatGPT.

## Точная следующая точка

Исследовать **symbol-only / minimally semantic multi-turn interaction без заранее заданного mapping**: nonsense/gibberish prompts, arbitrary conventions, repeated-symbol sequences, turn-order effects, emergent communication with LLMs и persistence после перехода к natural language. Не переходить к дизайну запуска эксперимента, пока этот блок не насыщен.


## Второй проход — symbol-only multi-turn / ранняя траектория

- Under-specified prompts заставляют LLM заполнять недостающие требования собственными default assumptions; такое поведение реально, но нестабильно.
- Multi-turn studies показывают **contextual inertia**: ранняя интерпретация/решение может закрепляться и продолжать влиять даже после появления нового контекста.
- Assistant-side history itself can become causal: models sometimes over-condition on their own previous responses, propagating errors, hallucinations or style across later turns.
- Repetition is not semantically neutral: repeated context can recruit copying/induction-like mechanisms; position and order affect which prior associations are retrieved.
- Repeated interactions can produce ad-hoc conventions in LLMs, but convention formation depends on interaction pressures and partner type.
- Human↔LLM convention formation is materially weaker/more fragile than human↔human and, in some setups, AI↔AI. Shared interpretive biases matter.
- Direct paper on exact scenario `symbol-only first turns → model self-interprets → later natural language` still not found.

## Новые вопросы

19. При symbol-only first turn модель чаще asks clarification, mirrors the symbol, invents a meaning, or treats it as formatting/noise — и как это varies by model?
20. Does the model's own first response create a self-generated anchor that later symbol turns reinforce?
21. How many turns/repetitions are needed before a local convention becomes behaviorally detectable?
22. Does switching to natural language preserve, reinterpret, or erase the convention?
23. Which component persists: exact symbol, inferred meaning, interaction style, or broader conversational frame?
24. How strongly do early-turn position/primacy effects matter relative to later symbol evidence?
25. When does repetition create copying inertia rather than meaning/convention?
26. Can human↔LLM symbol convention formation fail because the two sides impose different interpretive biases on the same symbols?
27. Are there symbol classes whose ambiguity is high enough for open interpretation but whose tokenization is stable enough to avoid glitch effects?

## Точная следующая точка

Продолжить только symbols: глубже проверить **persistence and transition** — что именно сохраняется после 2–N symbol-only turns, когда далее появляется обычный язык; отдельно проверить primacy/recency, self-generated assistant anchors, repeated-token induction и human↔LLM convention failure. Не проектировать конкретный старт эксперимента до завершения этого блока.


## Третий проход — persistence после перехода к natural language

- Conversational task-switch studies show that prior history can continue to affect a later, explicitly different task; the carryover can survive a mode/task transition rather than vanish at the boundary.
- Contextual entrainment gives a lower-level mechanism: tokens previously present in context receive elevated probability later even when they are random/irrelevant; semantic relevance modulates but is not required for the effect.
- Long-context work shows persistence is not reliable memory: information use depends strongly on position, with beginning/end often favored and middle information degraded.
- Multi-turn temporal-scope work shows implicit carryover itself can drift or collapse as conversations lengthen.
- Therefore the symbol trace can persist at several levels with different half-lives: exact-token entrainment, task/frame interference, assistant-self-conditioning, explicit semantic convention.
- **New inference:** the most plausible durable bridge is not necessarily `symbol token → later choice`, but `symbol → model-generated interpretation/text → later conditioning`. Once the model verbalizes or behaviorally instantiates an interpretation, ordinary language can become a secondary carrier even if direct symbol salience fades.
- A task switch to normal language may therefore attenuate direct token effects while preserving higher-level frame/interference.
- No source found that measures the exact decay curve for `2–N symbol-only turns → ordinary conversation` in frontier ChatGPT.

## Новые вопросы

28. How quickly does direct token-level contextual entrainment decay as intervening natural-language turns accumulate?
29. Can an early symbol remain influential after it is no longer repeated, or is persistence mostly carried by assistant-generated text?
30. Does explicit natural-language topic switching reset the frame or merely compete with it?
31. Are initial-turn symbols advantaged by primacy, and when are they instead lost in the middle as context grows?
32. What form of early interpretation is most likely to survive: lexical association, discourse frame, style, task hypothesis, or conversational convention?
33. Can later natural-language interaction overwrite the early branch completely without any explicit correction?

## Точная следующая точка

Продолжить symbols: проверить **какие конкретно классы знаков** создают минимум заранее заданного human meaning при приемлемой tokenizer stability, и отдельно глубоко разобрать glitch/special-character/adversarial-token literature, чтобы не спутать interpretive openness с tokenizer pathology. После этого вернуться к remaining persistence edge cases and coverage audit.
