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
