# Symbols — RESEARCH

**Статус:** targeted deep research, начато 17.10.2026; первый проход завершён, общая тема НЕ завершена.

## 1. Wei et al. — Symbol tuning improves in-context learning in language models (EMNLP 2023)

Источник: ACL Anthology, paper + PDF.  
Фактически просмотрено: abstract, introduction, method/setup, figures/sections on arbitrary symbol sets and evaluation.

Авторы заменяют natural-language labels на semantically unrelated arbitrary symbols и symbol-tune Flan-PaLM. Использованы десятки тысяч tuning-symbols и отдельно held-out symbols для evaluation; формы включают integers, character combinations и words. Symbol-tuned models лучше работают на unseen ICL tasks, особенно когда отсутствуют instructions/relevant labels, и лучше следуют flipped labels.

**Что это устанавливает:** transformer LMs способны функционально использовать произвольные обозначения через context mappings; форма label не обязана иметь естественный human semantic relation к class.

**Чего это НЕ устанавливает:** paper использует explicit input↔label exemplars и специальный finetuning. Он не показывает, что одиночный symbol-only chat turn самопроизвольно приобретёт новое устойчивое значение в обычном ChatGPT.

## 2. Wei et al. — Larger language models do in-context learning differently (2023)

Источник: arXiv abstract/search record.  
Фактически просмотрено: abstract.

Flipped-label и semantically-unrelated-label ICL показывают конкуренцию pretrained semantic priors и input-label mappings. Larger models лучше способны override priors через exemplars. Instruction tuning усиливает и priors, и mapping-use, но в reported experiments сильнее semantic priors.

**Для symbols:** даже «произвольный» знак не работает в пустоте. Current model may privilege pretrained/default interpretation unless interaction supplies enough evidence for another mapping.

## 3. Min et al. — Rethinking the Role of Demonstrations: What Makes In-Context Learning Work? (EMNLP 2022)

Источник: ACL Anthology.  
Фактически просмотрено: abstract.

Across classification/multiple-choice settings and 12 models including GPT-3, random replacement of demonstration labels often barely hurt performance. Authors identify label space, input distribution and sequence format as major drivers.

**Критическая альтернатива:** apparent adaptation around symbols can arise from structure/format without the model having learned the intended symbol↔meaning relation. Any later claim of symbol meaning needs evidence beyond response consistency.

## 4. Jang et al. — Rectifying Demonstration Shortcut in In-Context Learning (NAACL 2024)

Источник: ACL Anthology.  
Фактически просмотрено: abstract.

Authors explicitly describe a “Demonstration Shortcut”: LLMs may rely on pretrained semantic priors rather than input-label relations. Their calibration improves task learning with semantically unrelated tokens across OPT/GPT/Llama2 settings.

**Для symbols:** distinction semantic prior vs new relational mapping is experimentally real and must be preserved in our analysis.

## 5. Yu & Ananiadou — How do Large Language Models Learn In-Context? (EMNLP 2024)

Источник: ACL Anthology.  
Фактически просмотрено: abstract.

On sentence classification with “foo/bar” labels, interventions in a small subset of attention heads strongly changed ICL accuracy. Authors trace label-position information and attention-score changes and propose a metric-learning interpretation of ICL heads.

**Для symbols:** arbitrary labels can participate in specific internal context-routing mechanisms rather than merely being paraphrased into natural-language semantics. Transfer to frontier closed models is not established.

## 6. Yang, Zhang & Miao — The ELCo Dataset: Bridging Emoji and Lexical Composition (LREC-COLING 2024)

Источник: ACL Anthology PDF.  
Фактически просмотрено: abstract, intro/background, annotation/composition analysis, ChatGPT evaluation/results.

ELCo contains 1,655 emoji-sequence representations of 209 English concepts. Human emoji composition uses direct representation, metaphorical representation, semantic lists, reduplication and single-emoji representation. More abstract/metaphorical meanings produce more diverse symbol choices. ChatGPT-3.5 (May 2023) achieved about 60% zero-shot accuracy on their EmoTE composition task; models improved substantially after domain finetuning.

**Для symbols:** emoji sequences can carry compositional and metaphorical meaning, but that meaning is already culturally/training mediated. Emoji are therefore poor candidates for “semantically blank” symbols. Ambiguity and multiple valid interpretations are genuine, not noise.

## 7. Melamed, McCabe & Huang — Demystifying optimized prompts in language models (EMNLP 2025)

Источник: ACL Anthology paper + PDF.  
Фактически просмотрено: abstract, introduction/contributions, token-frequency analysis/results.

Gradient-optimized discrete prompts can strongly modulate LM behavior despite being largely uninterpretable to humans. The optimized prompts are enriched for rare tokens and punctuation; removal analyses find some punctuation tokens disproportionately influential. Internal activations distinguish optimized from natural-language prompts.

**Для symbols:** human-readable semantics is not necessary for tokens/symbol-like strings to exert strong causal influence. However these sequences are explicitly optimized for target behavior; this does NOT imply arbitrary manually chosen symbols have the same potency.

## 8. Chauhan et al. — Punctuations and Predicates in Language Models (Findings EACL 2026)

Источник: ACL Anthology abstract.  
Фактически просмотрено: abstract.

Intervention experiments find punctuation tokens can be computationally important, but effects differ sharply by model: strong necessity/sufficiency patterns in GPT-2, weaker in DeepSeek, absent in Gemma under their tests.

**Для symbols:** punctuation effects are architecture/model-specific. No universal “special symbol effect” may be assumed for ChatGPT.

## 9. Haslett — Tokenization Changes Meaning in Large Language Models: Evidence from Chinese (Computational Linguistics 2025)

Источник: ACL Anthology abstract.  
Фактически просмотрено: abstract.

Tokenization boundaries systematically affected semantic judgments over Chinese characters, showing that segmentation can alter model representations in ways not transparent from the visible string.

**Для symbols:** visual glyph identity is insufficient description of model input; tokenization/decomposition must be treated as a potential causal variable. This is evidence from Chinese characters, not direct evidence about arbitrary punctuation/emoji.

## 10. Glitch-token / special-character line — provisional

Found but not yet deeply reviewed:
- Li et al. (2024), *Glitch Tokens in Large Language Models*.
- Bai et al. (2024), *Special Characters Attack*.
- follow-up glitch-token work 2024–2026.

These works indicate some token/special-character strings can trigger anomalous or memorization-linked behavior. **Not yet incorporated as a firm conclusion** until methods/results are reviewed more closely.

## First-pass distinction

For any observed effect of a symbol, candidate causes must remain separate:

1. **Pretrained semantic/cultural prior** — e.g. emoji or familiar punctuation.
2. **Context-learned arbitrary mapping/convention** — relation inferred from interaction.
3. **Format/structure conditioning** — behavior changes because sequence form/label space changed.
4. **Tokenizer/representation effect** — glyph decomposes/embeds differently.
5. **Rare/glitch/adversarial-token effect** — behavior changes without a stable human-level meaning.

Current literature strongly supports existence of all but does not yet answer the exact symbol-only-start question.
