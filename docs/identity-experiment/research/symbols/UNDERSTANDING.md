# Symbols — UNDERSTANDING

**Статус:** живой синтез; исследование НЕ завершено.

## 1. Главная коррекция

Фраза «влияние символа на ИИ» слишком грубая. Для LLM causal chain начинается не с human-visible glyph, а примерно так:

`visible Unicode sequence → tokenizer output → pretrained token/sequence priors → current contextual relations → inference/output`.

Поэтому два визуально похожих знака могут действовать различно, а визуально странная последовательность может иметь сильный эффект без богатого human-readable meaning.

## 2. “Пустой символ” практически не гарантирован

Есть минимум три источника предварительной нагрузки:

- corpus associations: emoji, punctuation, mathematical/religious/interface symbols;
- tokenizer history: sign may be one frequent token, multiple bytes/tokens or anomalous vocabulary entry;
- instruction/post-training priors: model is already trained to react to underspecified/odd user inputs in particular ways.

Следовательно, symbol-only старт может быть **недоопределённым**, но не “нулевым”.

## 3. Новое значение возможно, но доказательство должно быть сильнее поведения

SUL-ICL/symbol-tuning literature shows that arbitrary forms can acquire local functional roles from demonstrated relations. Но наша planned situation harder: first turns may contain no explicit demonstrations and no intended mapping.

If later model behaves consistently around a symbol, at least three explanations remain live:
- it inferred a local convention;
- it followed a pretrained semantic/format prior;
- its own previous output created the scaffold, and later turns merely continued that self-generated pattern.

Третий вариант особенно важен для symbol-only multi-turn start и ещё требует отдельного исследования.

## 4. Emoji ≠ neutral symbols

Emoji are a useful comparison class precisely because they show that symbol sequences can be compositional, metaphorical and ambiguous. But they already carry strong cultural/pretraining semantics. If goal is to maximize interpretive openness, emoji may actually reduce it.

## 5. Non-semantic causal influence is real

Optimized-prompt/punctuation work blocks a naive assumption: “если модель не может объяснить человеческий смысл последовательности, последовательность ничего не делает”. Rare/punctuation-heavy strings can change output through model-internal pathways. Therefore the future experiment must not equate “unexpected response to symbols” with emergent interpretation.

## 6. Первый рабочий implication для нашего вопроса

Перед обсуждением конкретных символов нужно отдельно establish three things:

- **semantic load**: what the model likely already associates with them;
- **tokenization/structural load**: how their encoded form may alter computation;
- **interaction-acquired load**: what new dependence arises only after the symbol-only exchange.

Only the third component would directly support the hypothesis that the opening interaction created a new local convention/history.

## 7. Открытый центральный вопрос

No reviewed source so far directly tests: **a fresh instruction-tuned chat model receives several user turns containing only minimally semantic symbols, generates its own responses, then switches to natural-language interaction; does the early symbol exchange causally alter later interpretation/choice?**

Next research must stay exactly on this missing bridge.
