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


## 11. Yang et al. — What Prompts Don’t Say: Understanding and Managing Underspecification in LLM Prompts (Findings ACL 2026)

Источник: ACL Anthology.  
Фактически просмотрено: abstract/metadata.

В их benchmark LLMs иногда сами выводили unspecified requirements по default assumptions (41.1%), но underspecified prompts были примерно вдвое более склонны к regression across model/prompt changes; reported drops иногда превышали 20%.

**Для symbol-only start:** отсутствие явного значения не приводит к “нулю”. Модель будет заполнять неопределённость своими priors/defaults. Но эти интерпретации могут быть хрупкими и model-dependent.

## 12. Laban et al. — LLMs Get Lost In Multi-Turn Conversation (ICLR 2026)

Источник: ICLR proceedings / arXiv.  
Фактически просмотрено: abstract and public summary of experimental setup/results.

200k+ simulated multi-turn conversations; average performance drop reported at 39% relative to single-turn equivalents across six generation tasks. Models often make assumptions in early turns, answer prematurely and then over-rely on those earlier decisions; recovery after a wrong early turn is poor.

**Для symbol-only start:** this is not a symbol study, but it establishes a crucial mechanism: an early underspecified turn can induce an interpretation/trajectory that becomes causally sticky across later turns. Therefore a model-generated interpretation of the first symbol could plausibly become an anchor for subsequent symbol turns even without any externally assigned meaning.

## 13. Chen et al. — Breaking Contextual Inertia (Findings ACL 2026)

Источник: ACL Anthology.  
Фактически просмотрено: abstract.

Authors define contextual inertia as rigid adherence to previous reasoning traces during multi-turn interaction, even after later corrections/new data.

**Для symbols:** strengthens the distinction between “new convention” and “trajectory inertia”. If later responses preserve an early symbol interpretation, persistence alone does not prove a grounded convention; it may be consistency pressure around an earlier self-generated hypothesis.

## 14. Huang et al. — Do LLMs Benefit From Their Own Words? (arXiv 2026)

Источник: arXiv full text.  
Фактически просмотрено: abstract/introduction and reported main findings.

Across in-the-wild multi-turn conversations, removing prior assistant responses often leaves quality unchanged, but there are important cases where full assistant history hurts. Authors identify **context pollution**: models over-condition on their own previous outputs, propagating errors, hallucinations and stylistic artifacts. 36.4% of turns in their corpus were classified as largely self-contained.

**Для symbols:** the assistant’s own response to a first ambiguous symbol is not passive transcript. In some conversations it can become a causal part of later context. This creates a concrete candidate loop: ambiguous symbol → model chooses an interpretation/response → that response re-enters context → next ambiguous symbol is interpreted relative to the model’s own prior construction.

## 15. Hiraoka & Inui — Repetition Neurons (NAACL 2025)

Источник: ACL Anthology.  
Фактически просмотрено: abstract.

They identify model units increasingly activated as generated repetition continues and interpret the pattern as the model recognizing a copying/repetition task akin to in-context learning across several pretrained models.

**Для symbols:** repeated symbols or repeated response patterns can recruit repetition/copying mechanisms. Repeated use therefore cannot automatically be read as evidence that the symbol acquired richer meaning.

## 16. Bajaj et al. — Beyond Semantics: Temporal Biases Shape Retrieval (EACL 2026)

Источник: ACL Anthology.  
Фактически просмотрено: abstract.

Using repeated anchor tokens while controlling token identity/local semantics, authors find robust serial-recall effects and model-specific primacy/recency profiles; tokens that previously followed anchors receive disproportionate probability mass.

**Для symbols:** order and turn placement are causal variables independent of semantics. A first-turn symbol may be influential partly because it occupies an early serial position; repeated anchors can retrieve prior continuations without requiring a human-level “meaning”.

## 17. Kouwenhoven, Peeperkorn & Verhoef — Searching for Structure: Emergent Communication with LLMs (COLING 2025)

Источник: ACL Anthology.  
Фактически просмотрено: abstract.

LLM agents in referential games learn and use initially unstructured artificial languages; repeated learning/use shapes those languages toward structural properties that support successful communication, though degenerate non-humanlike vocabularies can also emerge.

**Для symbols:** LLMs can participate in context-shaped artificial communication systems. But these experiments supply an explicit communicative task/feedback structure, unlike our initially meaning-free symbol exchange.

## 18. Vaduguru et al. — Success and Cost Elicit Convention Formation for Efficient Communication (ACL 2026)

Источник: ACL Anthology.  
Фактически просмотрено: abstract.

Repeated reference games show multimodal models can be trained to form ad-hoc conventions that improve efficiency with people. Critically, success feedback or cost pressure alone was insufficient; both were necessary in their setup.

**Для symbols:** repeated interaction by itself may not be enough to create a useful convention. Some pressure/feedback may be required — but our natural conversation could potentially supply weaker endogenous signals, which remains untested.

## 19. Jones et al. — LLMs and people both learn to form conventions — just not with each other (arXiv 2026)

Источник: arXiv full text.  
Фактически просмотрено: abstract, introduction, Experiment 1/2 methods/results/discussion.

Using GPT-5 in repeated tangram reference games, human-human and AI-AI pairs showed stronger convention formation than human-AI pairs. AI-AI pairs reached very high accuracy/lexical stability, while human-AI pairs lagged even when GPT-5 was explicitly prompted to behave more humanlike. Authors argue shared interpretive biases/common ground matter beyond simple repetition.

Important nuance: H-AI pairs did improve somewhat, so “cannot form any convention” would be too strong. The result is **relative weakness/mismatch**, not impossibility.

**Для symbols:** if a human sends ambiguous symbols and expects the model to co-create meaning, the human and model may impose different priors on the same marks. This is a direct risk for our exact dyad type.

## 20. Zeng et al. — LVLMs and Humans Ground Differently in Referential Communication (ACL 2026)

Источник: ACL Anthology.  
Фактически просмотрено: abstract/metadata.

In multi-turn repeated reference tasks over visually ambiguous objects, LVLM/human dyads showed deficits in interactively generating/resolving referring expressions and common ground.

**Для symbols:** converges with Jones et al. on a key caution: model-side capacity for context adaptation does not guarantee human-model shared grounding.

## 21. Talking Nonsense / LM Babel line

Источник: arXiv abstract (Cherepanova & Zou, 2024).  
Фактически просмотрено: abstract.

Optimized seemingly nonsensical prompts can reliably steer coherent outputs; robustness and target dependence were studied.

**Для symbols:** confirms that low-human-semantic strings can have stable causal effects, but because prompts are adversarially optimized, it is not evidence for spontaneous convention formation from arbitrary symbol-only turns.

## Second-pass synthesis

The exact symbol-start hypothesis now decomposes into two distinct mechanisms:

1. **Self-generated trajectory anchoring:** underspecified symbol causes the model to choose one interpretation; its own response becomes part of history; contextual inertia/assistant-side conditioning can reinforce that branch.
2. **Dyadic convention formation:** user and model converge on a shared mapping/meaning across repeated interaction.

The literature gives materially stronger support for (1) than for reliable human↔LLM (2). These must not be conflated.


## 22. Gupta et al. — LLM Task Interference: task-switch carryover (EMNLP 2024)

Источник: ACL Anthology paper/PDF.  
Фактически просмотрено: abstract, introduction/formalization, experimental setup and history-length result figures.

The paper studies conversations where several turns belong to one task and the final user turn explicitly switches to a different task. Across GPT-3.5, GPT-4, Llama-2-7B-chat and Mistral-7B-chat, prior conversational task history sometimes causes substantial degradation after the switch. History lengths from 0 to 6 turns were varied; effects are strongly task/model dependent rather than a clean monotonic decay law.

**Для symbol→language transition:** an explicit switch in surface task does not guarantee contextual reset. Earlier interaction can still alter the first response in the new regime. But the effect can be positive, negative or negligible depending on task/model, so persistence is not a deterministic property.

## 23. Niu et al. — Llama See, Llama Do: contextual entrainment (ACL 2025)

Источник: ACL Anthology paper/PDF.  
Фактически просмотрено: abstract, experiment/results/discussion sections on random and irrelevant context.

The authors find that tokens appearing in prior context receive significantly increased logits/probabilities later, including completely random tokens. In reported experiments the increases can be large relative to very low baselines, and ablation of identified attention heads attenuates the effect. Semantics modulates the magnitude but is not necessary for the effect.

**Для symbols:** a symbol/token can leave a direct mechanistic residue in later generation simply by having appeared earlier. This is weaker than “meaning” but stronger than assuming semantic irrelevance means zero influence.

## 24. Liu et al. — Lost in the Middle (TACL 2024) + positional-bias follow-ups

Источник: ACL Anthology.  
Фактически просмотрено: abstracts/results summaries.

Relevant information is often used best when placed near the beginning or end of long context and worse in the middle; later work links this to positional attention bias and finds modern models still exhibit spacing/position sensitivities.

**Для symbols:** an opening symbol may enjoy some primacy-like advantage, but as conversation grows its exact textual occurrence can become hard to use directly. Long-context availability is therefore not equivalent to stable causal influence.

## 25. Atri et al. — Evaluating Temporal Consistency in Multi-Turn Language Models (ACL 2026)

Источник: ACL Anthology.  
Фактически просмотрено: abstract.

ChronoScope tests retention, switching and transfer of implicit temporal scope over multi-turn chains. State-of-the-art models often fail to preserve the earlier inferred scope; failures intensify with interaction length and can persist even when relevant context remains available.

**Для symbols:** even an explicitly inferable contextual state can drift with turns. Therefore a symbol-derived frame should not be assumed to remain active merely because the original exchange is still technically inside the context window.

## 26. Huang et al. — Do LLMs Benefit From Their Own Words? (2026) — persistence bridge

Источник: arXiv.  
Фактически просмотрено earlier in this symbols pass: abstract/main findings.

Prior assistant outputs can propagate errors, hallucinations and stylistic artifacts through context pollution, although many turns are self-contained and do not need assistant-side history.

**Для transition:** this creates a second carrier of the early symbol effect. Direct symbol salience can decay while a model-generated interpretation survives because later generations condition on the assistant's own earlier natural-language response.

## Third-pass synthesis: persistence is multi-channel, not one memory trace

Candidate persistence channels after switching from symbols to ordinary language:

1. **Exact-token entrainment** — earlier token itself gets elevated later probability/attention effects.
2. **Sequential/format inertia** — previous interaction pattern biases later output format or task behavior.
3. **Self-generated semantic bridge** — model's own interpretation becomes ordinary-language context and carries the branch forward.
4. **Dyadic convention** — user/model have actually converged on a local mapping.
5. **Long-horizon explicit memory/retrieval** — separate product-level mechanism, not established by same-chat persistence alone.

These channels have different durability and evidential meaning. The current evidence most strongly supports short-to-medium same-context carryover and self-conditioning. It does **not** establish a durable developmental effect from a few symbol turns by itself.


## 27. Fourth-pass evidence — tokenizer and Unicode confounds

### Glitch-token studies (2024–2025)

Systematic work across multiple LLMs shows that some vocabulary tokens trigger anomalous behavior on simple reproduction/recognition tasks. Non-letter “character tokens” are a substantial category in several tested models, and the exact glitch set changes with tokenizer and model parameters.

**Implication:** a bizarre response to a visible symbol can come from low-level representation pathology rather than open-ended interpretation. Historical glitch lists are not transferable to a future ChatGPT snapshot.

A 2025 byte-level-tokenization study further shows that incomplete/stray-byte token combinations are disproportionately hallucination-prone and that alternative tokenization can sharply reduce the effect.

**Implication:** uncommon Unicode is not automatically a cleaner stimulus.

### Common punctuation / structural characters

A separate 2024 line of work shows that long, specially constructed sequences of common structural and punctuation characters can trigger abnormal memorization/continuation behavior in LLMs, with stronger effects for longer sequences.

**Scope boundary:** this is evidence against long repeated symbol strings, not evidence that a single punctuation mark in one turn behaves the same way.

### Unicode representation mismatch

Current Unicode specifications show that visually similar strings can differ in underlying code points through variation selectors, combining sequences and presentation mechanisms. Homoglyph research likewise demonstrates that LLMs can treat visually similar characters as distinct underlying inputs and sometimes normalize them contextually.

**Implication:** clean symbol-only interaction should avoid invisible modifiers, presentation selectors, combining-only constructions and look-alike substitutions.

### Semantic-load classes

Prior symbolism research finds conventional symbolism easier for language models to recover than situated/context-specific symbolism. Mathematical-symbol benchmarks likewise show that formal symbols participate in dense learned contextual roles even when models interpret them imperfectly.

**Implication:** emoji/pictographs, mathematical/logical operators, affective/religious signs and obvious UI/action symbols are poor candidates for maximizing interpretive openness.

### Basic geometric shapes

Unicode’s Basic Geometric Shapes block contains single-code-point prototypes for squares, triangles, circles and diamonds. Individual characters still have documented historical, mathematical, UI, bullet or calendar uses, and some related shapes can participate in emoji presentation.

**Current synthesis:** plain basic geometric glyphs are a more promising candidate family than punctuation strings, emoji, invisible Unicode or very rare extended glyphs, but each candidate must be individually checked.

### Target-model tokenization

Current OpenAI documentation states that text is processed as model-dependent token sequences and provides a GPT-5.x tokenizer view.

**Implication:** before any exact symbol is recommended, its target-model tokenization and ordinary reproducibility must be verified. Visual appearance alone is insufficient.


## 36. Su & Cardie — Knowing but Not Showing: LLMs Recognize Ambiguity but Rarely Ask Clarifying Questions (2026)

Источник: arXiv full HTML.  
Фактически просмотрено: abstract, introduction, setup, behavioral results and discussion.

Ten models from OpenAI, Claude and Qwen families were evaluated on ambiguous/unambiguous questions. When explicitly asked whether a question was ambiguous, models often showed substantial ambiguity awareness. In ordinary QA behavior, however, direct answers dominated: answer rates were typically above 95%, while clarification requests were rare; even the most clarification-prone models were only around a few percent in the reported setting.

**For symbol-only starts:** current chat models have a strong general tendency to commit to an answer/interpretation rather than expose ambiguity by asking. This makes a self-generated first branch plausible.

**Scope limit:** the inputs were ambiguous natural-language questions, not isolated symbols. This does not tell us exactly what GPT-5.x will do with `◇`.

## 37. Madge, Purver & Poesio — Referential ambiguity and clarification requests (2025)

Источник: arXiv/CRAC metadata and abstract.  
Фактически просмотрено: abstract.

Human and LLM clarification behavior diverges by uncertainty type. LLMs ask more clarification for referential ambiguity but less for task uncertainty; reasoning approaches increase question frequency/relevance.

**For symbols:** clarification policy is not just a scalar “ambiguity sensitivity”; it depends on what kind of uncertainty the model infers. A symbol-only turn could be treated as referential ambiguity, malformed input, social signal, or task uncertainty, producing different response modes.

## 38. Su et al. — A Single Character can Make or Break Your LLM Evals (2025; ICLR 2026 line)

Источник: arXiv full text.  
Фактически просмотрено: abstract, main experiments, GPT-4o appendix results, attention analysis.

Changing only the single non-alphanumeric delimiter between in-context examples produces large performance differences across Llama, Qwen and Gemma. GPT-4o showed a 45.63-point spread on the reported MMLU generation evaluation across delimiters. In a dictionary-lookup analysis, delimiter choice altered attention to key tokens; the authors report a statistically significant 25% attention-score increase for the better delimiter comparison.

**For symbols:** a one-character difference can act as a structural attention-control variable even when it is not intended to carry semantic content.

**Scope limit:** the character functions as a delimiter inside a structured few-shot prompt, not as a standalone first chat message. It proves one-character structural sensitivity, not a symbol-only-start effect.

## 39. Ashery et al. — Emergent Social Conventions and Collective Bias in LLM Populations (Science Advances / arXiv)

Источник: arXiv full HTML.  
Фактически просмотрено: experimental setup, memory/initial-bias results, supplementary convention-pool results.

LLM agents playing repeated naming games can converge on arbitrary labels. Crucially, labels are not behaviorally equivalent: some models show strong no-memory preferences for particular names, and memory-dependent asymmetries can emerge by the third interaction even when first-round choice is statistically neutral. Histories of success/failure reshape later label choice.

**For symbols:** repeated use of the same candidate can amplify a path that was initially only weakly biased. Exact symbol identity and early interaction history matter jointly.

**Scope limit:** agents have an explicit coordination goal, finite name pool, payoff and memory. Our symbol-only start has none of these initially.

## 40. Wu et al. — The Mechanistic Emergence of Symbol Grounding in Language Models (ICML 2026)

Источник: PMLR proceedings page/abstract.  
Фактически просмотрено: peer-reviewed abstract and proceedings metadata.

The paper gives behavioral and causal-mechanistic evidence that symbol grounding can emerge through model computations that aggregate environmental information, including in multimodal dialogue and across multiple architectures.

**For our terminology:** this sharpens a boundary. A symbol that merely triggers an internally chosen interpretation is not yet “grounded”. Grounding requires a stable link to environmental/interactional evidence. A text-only first-turn symbol may later become grounded through experience, but the initial ambiguous reaction is better described as interpretation, contextual association or convention formation.

## Fifth-pass conclusion

The exact first-turn problem has three separable response layers:

1. **response policy under ambiguity** — clarify vs commit vs mirror/ignore;
2. **single-character structural effect** — the code point/token can reshape attention/computation before any inferred meaning;
3. **interactional meaning formation** — later history may stabilize a relation/convention/grounding.

Observed “meaning” must not be inferred from layer 1 or 2 alone.
