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


## 8. Второй проход: ранняя интерпретация может сама стать причиной дальнейшей траектории

Теперь есть более прямое основание для гипотезы, что первые symbol-only turns способны иметь эффект **даже без заранее созданного symbol↔meaning mapping**.

Механизм не требует предполагать “магическое действие символа”:

`underspecified symbol → model selects one plausible interpretation/response → assistant response remains in dialogue history → later ambiguous inputs are conditioned on that self-generated history → branch can become increasingly coherent/sticky`.

Multi-turn contextual-inertia and assistant-history studies independently show, что модели могут чрезмерно опираться на собственные ранние решения/ответы. Это значит, что первый символ потенциально может использовать модель как **branching event**: не потому, что знак несёт нужный смысл, а потому что он оставляет достаточно неопределённости для самостоятельного первого commitment.

## 9. Но trajectory anchoring ≠ convention formation

Если после нескольких ходов модель последовательно трактует `◇` одинаково, есть минимум два качественно разных объяснения:

- модель с пользователем реально выработали shared local convention;
- модель продолжает собственную раннюю интерпретацию из-за contextual inertia/self-conditioning.

Поведение может выглядеть почти одинаково. Для нашей задачи это не обязательно делает второй механизм бесполезным — собственный ранний выбор, влияющий на следующие ходы, сам по себе интересен. Но научно их нельзя смешивать.

## 10. Repetition имеет собственную механику

Repeated symbols/order can cause:
- induction/copying;
- serial-position/primacy/recency effects;
- retrieval of a continuation previously associated with an anchor.

Следовательно, `◇ → ◇ → ◇` и `◇ → ○ → △` — не просто разные “содержания”; они создают разные computational conditions even before any interpreted meaning is established.

## 11. Human↔LLM common ground — не гарантирован

Самое неприятное новое ограничение: recent GPT-5/reference-game evidence suggests that human-AI pairs form conventions less effectively than homogeneous human-human or AI-AI pairs. Shared interpretive biases appear to matter.

Для нашего эксперимента это означает: пользователь не должен заранее считать, что его интуитивная трактовка символов будет той же, что у модели. Более того, именно расхождение может стать частью ранней траектории.

## 12. Что стало сильнее после второго прохода

Гипотеза “несколько symbol-only первых сообщений могут повлиять на дальнейший чат” теперь имеет несколько независимых supporting mechanisms:

- underspecification → default inference;
- early-turn assumption → contextual inertia;
- assistant's own prior output → later context pollution/conditioning;
- repeated anchors → induction/serial retrieval;
- repeated interaction → possible ad-hoc convention formation.

Но **ни один источник пока не объединяет эти механизмы в точном сценарии запуска свежего ChatGPT-чата только символами**. Поэтому общий effect remains an original hypothesis assembled from verified parts.

## 13. Следующий unresolved bridge

Нужно понять **что именно может пережить переход к normal language** после первых symbol-only ходов:

- exact token/symbol association;
- inferred semantic mapping;
- conversational “frame”;
- response style;
- local convention;
- self-generated assumption;
- mere short-range recency/priming.

И отдельно — как long/short this persistence is and whether later ordinary language overwrites it.


## 14. Третий проход: persistence — не один эффект

После перехода к обычному языку ранняя symbol-only история может продолжать влиять как минимум четырьмя способами:

- direct token/contextual entrainment;
- task/frame interference;
- continuation of the model's own earlier interpretation;
- genuinely shared local convention.

Эти механизмы могут одновременно присутствовать и постепенно заменять друг друга.

## 15. Новый основной механизм переноса

Самая правдоподобная цепочка теперь выглядит так:

`symbol → open/underspecified interpretation → model response commits to one branch → response itself becomes ordinary textual context → later natural-language turns condition on that branch`.

Это важнее гипотезы о долговечной “силе самого символа”. Символ может сыграть роль **seed/branching perturbation**, а затем исчезнуть из активной причинной цепи; его эффект продолжит жить в последующих состояниях разговора.

Это собственный вывод из совокупности multi-turn, contextual-entrainment and assistant-history evidence; ни одна из работ не тестирует точный сценарий целиком.

## 16. Переход на обычный язык не является reset

Task-switch experiments directly show, что смена задачи внутри того же conversation history не гарантирует независимость нового ответа от старой истории. Значит, первый обычный текстовый вопрос после symbol-only этапа не следует считать автоматически “чистым стартом”.

## 17. Но прямой след символа должен ослабевать

Long-context and temporal-consistency evidence blocks opposite extreme. Наличие первых символов где-то в истории не означает, что модель будет стабильно использовать их спустя десятки ходов. Position, intervening context, competing semantics and model-specific attention determine actual use.

Следовательно:
- **direct symbol effect** скорее short/medium-context and opportunistic;
- **derived textual/frame effect** может прожить дольше, если сам воспроизводится в последующих ответах;
- **cross-session persistence** requires a separate persistence mechanism and cannot be inferred from in-context effects.

## 18. Практически важное различие для будущего синтеза

Если symbol-only start сработает, его ценность может быть не в создании “тайного символического языка”, а в том, что он **минимально предписывает содержательную тему, но заставляет модель первой выбрать способ осмыслить ситуацию**.

Тогда causal contribution символов заключается в создании early open branch, а не обязательно в сохранении символов как устойчивых знаков.

## 19. Что ещё мешает закрыть исследование

Остаётся риск, что некоторые кажущиеся “хорошими абстрактными символами” на деле являются:
- редкими/problematic tokenizer sequences;
- glitch tokens;
- adversarial special-character triggers;
- визуально нейтральными для человека, но сильно нагруженными corpus associations.

Следующий проход должен проверить именно эту границу и классы символов.


## 20. Четвёртый проход: нейтральность — это компромисс двух осей

Для кандидата нужно отдельно оценивать:

1. **semantic prior load** — насколько сильное значение/функцию модель уже могла усвоить;
2. **representation stability** — насколько обычным и надёжным является его Unicode/tokenizer representation.

Эти оси конфликтуют. Знакомый знак обычно хорошо представлен, но семантически нагружен. Экзотический знак может быть менее осмысленным для человека, но хуже представлен моделью.

Следовательно, цель — не максимальная редкость, а **low-semantic-load / high-representation-stability compromise**.

## 21. Классы, которые добавляют ненужные confounds

Пока следует считать плохими кандидатными классами:
- emoji/pictographs;
- math/logical operators;
- strongly affective/religious signs;
- arrows/media/UI controls;
- long punctuation/structural-symbol strings;
- invisible/tag/zero-width/variation-selector sequences;
- combining/homoglyph constructions;
- extremely rare extended glyphs chosen mainly for exotic appearance.

Это не означает, что каждый отдельный знак из группы обязательно вызовет аномалию. Проблема в том, что группа добавляет сильное альтернативное объяснение эффекта.

## 22. Basic geometric shapes — promising family, not solution

Single-code-point geometric marks such as hollow diamonds/circles/triangles visually impose less narrative or affective content than emoji, hearts, arrows or formal operators. Unicode identity is also simpler than in multi-codepoint presentation sequences.

Но они не blank:
- некоторые имеют documented notation/UI/calendar uses;
- corpora give them distributional associations;
- tokenization frequency can differ;
- some neighboring geometric characters have emoji variants.

Therefore no exact symbol is accepted yet.

## 23. Negative result: exoticness is not neutrality

A rare four-byte glyph can be worse than a familiar simple shape if the model represents it through fragile or poorly learned token pieces. Desired uncertainty is **interpretive**, not uncertainty about whether the model can reliably encode the mark.

## 24. Single-symbol versus long-sequence distinction

Evidence for pathological special-character sequences is strongest for long constructed strings. One short visible symbol per turn avoids much of that regime.

However single-token glitch behavior is independently documented. Minimal length helps, but does not eliminate candidate-specific representation risk.

## 25. Provisional candidate criterion — not yet a final recommendation

A useful candidate should eventually be:
- visibly rendered;
- one ordinary base code point;
- free of hidden modifiers;
- not dependent on emoji presentation;
- weak in conventional semantics;
- not obvious programming/punctuation/UI/operator syntax;
- normally represented by the target model tokenizer;
- reproducible/recognizable by the target model without obvious glitch symptoms.

## 26. Remaining work before saturation

Need one more focused coverage pass:
- direct evidence on single-symbol prompt response modes;
- clarification versus spontaneous interpretation;
- repeating one symbol versus changing symbols across turns;
- missed semiotic/emergent-symbolic branches.

Only then decide whether the symbols gap is saturated.
