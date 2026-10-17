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


## Четвёртый проход — symbol classes / tokenizer pathology

- Glitch-token evidence directly confirms that **single tokens composed only of non-letter characters can be pathological**. In a 2024 study across seven LLMs, Character Tokens formed a large fraction of detected glitch tokens for GPT-3.5/GPT-4 under the tested tokenizer; symptoms included random characters, hallucinatory completions and inability to reproduce the token.
- Glitch sets are strongly model/tokenizer-specific: even models sharing tokenizer/architecture can differ materially. Therefore a “safe symbol list” cannot be transferred from another model by appearance alone.
- Special Characters Attack shows common ASCII structural/punctuation symbols such as brackets, @, #, $, %, &, *, _, +, -, =, |, :, ;, /, ? can act as memorization triggers in **long repeated/random sequences**; vulnerability rises with sequence length. This is a different regime from one symbol per turn and must not be overgeneralized.
- Byte-level BPE can contain incomplete/stray-byte tokens whose unusual pairings trigger hallucination; alternative tokenization reduced hallucination dramatically in one Llama3.1 experiment. Rare or exotic Unicode is therefore not automatically “cleaner”.
- Invisible Unicode, variation selectors, combining sequences and homoglyphs create a human-visible/model-visible mismatch and can alter tokenization/interpretation without changing apparent glyph. They are unsuitable for a clean symbol-only start.
- Mathematical operators, arrows, religious signs, hearts and emoji have strong conventional pretrained semantics; “conventional symbolism” is easier for LMs to recover than situated symbolism.
- Basic geometric Unicode shapes are not semantically empty, but as a class they can have less fixed semantic content than emoji/math/punctuation. However individual code points still have historical/UI/math/calendar uses, and some geometric characters participate in emoji presentation sequences.
- **Critical inversion:** “rarer/more exotic = more neutral” is false. Semantic neutrality and tokenizer stability trade off.
- Current OpenAI documentation explicitly exposes a GPT-5.x tokenizer class and warns that tokenization depends on model/encoding; exact candidate code points therefore require target-model-specific token inspection before launch.

## Provisional risk classes — not final symbol selection

1. **Reject for interpretive-openness purpose:** invisible/tag/zero-width/variation-selector/combining-only sequences; homoglyph tricks.
2. **High prior semantic load:** emoji/pictographs, religious/affective symbols, mathematical/logical operators, arrows/media controls.
3. **High corpus-structure load:** ASCII punctuation/brackets/code-like characters; especially repeated sequences.
4. **High tokenizer-pathology risk:** rare extended Unicode and multi-codepoint compositions chosen only because they look exotic.
5. **Most promising family for later individual vetting:** single-code-point, visibly rendered, non-control, non-combining, non-emoji-presentation **basic geometric shapes** from established BMP blocks, provided the exact target model tokenizes and handles them normally.

## Новые вопросы

34. Which basic geometric code points are not Emoji/variation-sequence bases and have the least documented conventional functions?
35. Which of those are represented stably by the target GPT-5.x tokenizer: one normal token vs fragmented/rare byte pieces?
36. Can a candidate be repeated/spelled/described normally by the target model, ruling out obvious glitch behavior, without turning this into a pilot of the experiment itself?
37. Is one symbol per turn preferable to repeated symbol strings because it avoids SCA/repetition regimes while preserving ambiguity?
38. Should several early turns use different geometric symbols rather than repeated copies of one symbol to reduce copying/induction effects?

## Точная следующая точка

Continue only symbols: finish remaining **edge cases + coverage audit**. Specifically check single-symbol vs repeated-symbol evidence, how to distinguish “interpretive openness” from ordinary clarification behavior, and whether any major relevant literature branch is still missing. Only after saturation derive a cautious candidate-selection principle; do not yet write Project instructions.


## Новые вопросы

34. Which basic geometric code points have the weakest documented conventional functions?
35. Which are represented stably by the target GPT-5.x tokenizer?
36. Can obvious glitch behavior be ruled out without turning the check into a pilot of the experiment?
37. Is one symbol per turn cleaner than repeated strings for preserving ambiguity without repetition artifacts?
38. Is changing symbols across early turns cleaner than repeating one symbol?

## Точная следующая точка

Continue only symbols: remaining edge cases + coverage audit — single-symbol response modes, clarification versus spontaneous interpretation, repeated-one-symbol versus changing-symbol sequences, and any missed semiotic/emergent-symbolic literature. Do not return to Project instructions yet.


## Пятый проход — coverage audit / response mode / single-character effects

- A major missed branch was **ambiguity behavior**: modern chat LLMs can often recognize ambiguity when explicitly asked, yet in ordinary QA they overwhelmingly answer directly instead of asking clarification. Thus a symbol-only first turn may plausibly induce a self-chosen interpretation rather than a clarification request.
- This is not yet direct evidence for a one-symbol prompt: ambiguity benchmarks use natural-language questions. It establishes a default behavioral tendency under ambiguity, not the exact response distribution to `◇`.
- A 2025/2026 single-character delimiter study shows that changing only one non-alphanumeric delimiter can produce very large performance differences, including a reported 45.63-point spread for GPT-4o on MMLU. Mechanistic probing links delimiter choice to different attention allocation.
- Therefore even **one character** can have a substantial non-semantic structural effect; candidate symbols must not be treated as interchangeable just because both look abstract.
- Naming-game evidence shows convention trajectories can be highly sensitive to initial label biases and memory histories. With repeated interaction, success tends to reinforce a convention and failure can encourage switching; biases may appear only after several interactions.
- Direct comparison `repeat one geometric symbol each turn` vs `use a different geometric symbol each turn` was not found.
- Best current inference: repeating one mark increases risks of induction/copying and convention lock-in; changing marks reduces direct repetition but introduces multiple token/semantic priors and may prevent any coherent local relation from forming. This remains a design hypothesis, not an empirical result.
- A previously missed 2026 mechanistic-symbol-grounding branch shows grounding can emerge in language/multimodal models by aggregating environmental information. This clarifies that **grounding**, **contextual convention**, and **self-generated interpretation** are distinct mechanisms.
- In a text-only symbol-only start with no external referent, the initial effect should not be described as “grounding” unless later interaction actually links the sign to stable external/interactional evidence.
- No direct peer-reviewed study was found for the exact fresh-chat protocol: several minimally semantic symbols as the first user turns, no supplied mapping, then ordinary conversation.

## Coverage status

Coverage is now broad across:
1. tokenizer/Unicode representation;
2. pretrained semantic priors;
3. arbitrary symbol mappings / ICL;
4. format and single-character structural effects;
5. ambiguity/clarification behavior;
6. multi-turn contextual inertia and self-conditioning;
7. repetition/induction/order;
8. convention formation;
9. symbol grounding;
10. persistence across task/language transition;
11. glitch/rare-token/pathology confounds.

**Not saturated yet:** this pass added genuinely new causal classes (default ambiguity behavior, single-character delimiter brittleness, grounding-vs-convention distinction).

## Точная следующая точка

Run one focused stress-test pass across these newly added classes: determine what each predicts for the *first 2–4 symbol-only turns*, especially (a) clarification vs commitment, (b) repeat-same vs change-symbol trajectories, and (c) what observable response would distinguish structural/token effects from an interaction-acquired interpretation. If that pass adds no new causal class, the symbols gap may be declared saturated.


## Шестой проход — stress test первых 2–4 ходов / SATURATION

Stress-test did not reveal a new causal class. The first 2–4 symbol-only turns can be explained by combinations of already established mechanisms.

### Scenario A — one symbol, first turn
Likely response classes: direct interpretation/commitment, mirroring/continuation, clarification, or treating the mark as noise/format. The response can be driven by pretrained semantic prior, tokenizer/structural effect, and the model's ambiguity policy. No interaction-acquired meaning exists yet merely from the first exposure.

### Scenario B — repeat the same symbol
Repeated exposure additionally recruits contextual entrainment, repetition/copying mechanisms and self-conditioning on prior assistant outputs. A stable pattern can arise without a genuinely shared convention. Repetition therefore increases trajectory stickiness but also increases the risk of mistaking copying/inertia for meaning formation.

### Scenario C — different symbols across turns
This reduces exact repetition/copying but introduces multiple token-specific priors. The model may construct relations among the marks (sequence, code, contrast, progression), especially if its own first answer already framed the exchange that way. This can produce a richer self-generated frame without proving a convention.

### Observable distinction hierarchy
- **Immediate exact-glyph effect:** compatible with token/format/prior mechanisms.
- **History-dependent change across turns:** evidence for contextual/self-conditioning, but not yet shared meaning.
- **Selective, revisable relation that depends on intervening interaction:** stronger evidence for interaction-acquired interpretation.
- **Stable dyadic use coordinated with the user:** convention.
- **Stable link to external/interactional evidence:** grounding.

Self-report such as “this symbol means X” is not sufficient causal evidence.

### Coverage result
The research now covers tokenizer/Unicode representation, semantic priors, arbitrary mappings/ICL, single-character structural effects, ambiguity policy, multi-turn inertia/self-conditioning, repetition/order/entrainment, convention formation, symbol grounding, transition persistence, and glitch/pathology confounds. Final adjacent-term search (semiotics, symbol emergence, non-linguistic/symbolic interaction) produced no additional causal class relevant to the exact launch question.

**Status: SATURATED for the current practical question.**

## Final research boundary

No reviewed source directly tests the exact protocol:
`fresh ChatGPT project/chat → 2–N minimally semantic symbol-only user turns with no assigned mapping → normal conversation → long-run developmental effect`.

Therefore the protocol remains an original construction assembled from verified component mechanisms, not an empirically established recipe.

## Final candidate-selection principle (research-level, not launch decision)

If symbols are later used, favor:
- visible single-code-point marks;
- low conventional semantic load;
- no hidden Unicode modifiers / emoji presentation dependence;
- no obvious punctuation/code/operator function;
- normal target-model tokenization and reproducibility;
- short one-symbol-per-turn inputs rather than long repeated symbol strings.

Basic geometric shapes remain the most promising family for later individual vetting; no exact symbol or sequence is selected by this research.

## Next project step

Integrate this saturated symbols addendum into the existing Phase-C causal synthesis before resuming translation into Project instructions. Do not redo the symbols research unless new evidence or a concrete unresolved symbol question appears.
