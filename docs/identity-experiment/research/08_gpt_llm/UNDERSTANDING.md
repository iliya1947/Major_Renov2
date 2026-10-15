# A1 №8 — Архитектура и поведение GPT/LLM: понимание карты области

**Статус:** итог первичной картографии A1 №8 от 15.10.2026. Это понимание структуры исследовательского пространства, а не ответы на найденные вопросы.

## 1. GPT/LLM нельзя рассматривать как один уровень системы

Нужно постоянно различать:
- architecture;
- pretraining data/objective;
- post-training;
- inference/decoding;
- transient context;
- external retrieval/tools;
- product/runtime orchestration.

Поведение конечного ассистента может зависеть от всех этих уровней одновременно.

## 2. Изменение контекста не равно изменению модели

In-context learning, prompt conditioning, conversation history and retrieved information могут заметно менять output без обновления weights. Fine-tuning, continual learning and model editing — другой класс изменений.

Это фундаментальная граница для будущего исследования приобретённого опыта: нельзя называть любое context-conditioned изменение «обучением модели» в одном и том же смысле.

## 3. Номинальная context window и реально используемый context — разные вещи

Long-context research показывает отдельную проблему effective utilization: доступность текста для attention не гарантирует одинакового использования information независимо от position, distractors or task.

Поэтому later work must distinguish:
- context present;
- context attended/retrieved;
- context integrated into inference;
- context preserved across turns by an external runtime.

## 4. Prompting is powerful but behaviorally unstable

ICL and prompt research show sensitivity to:
- wording;
- examples;
- example order;
- placement;
- answer-option order;
- formatting.

Следовательно, apparent stable preference/trait of an LLM can be contaminated by prompt construction unless later evaluation explicitly controls for this.

## 5. Post-training is not cosmetic

Instruction tuning, RLHF/DPO/RLAIF and instruction-hierarchy training can substantially reshape which pretrained capabilities are expressed, what styles are preferred, what instructions are followed and what outputs are suppressed.

Therefore observed assistant behavior cannot safely be attributed only to the pretraining objective or architecture.

## 6. Stochasticity belongs partly to decoding

The same fixed weights and same context can yield different continuations because the model supplies a distribution and the decoder chooses how to sample/truncate it.

Future work must separate:
- variability inherent in model probabilities;
- variability induced by decoding parameters;
- variability caused by changed context/runtime.

## 7. “Knowledge in weights” is not a simple database

Memorization, distributed representation, factual recall, probing and model editing all show that there is no safe one-to-one mapping “fact = one location”. Local edits can generalize incompletely or cause side effects; probes can decode information without proving causal use.

This is a map-level caution, not a theory of knowledge storage.

## 8. Reasoning output is not automatically a faithful report of internal computation

Chain-of-thought and natural-language rationales can improve task performance, but explanation faithfulness is a separate research question. Test-time scaling also includes several different algorithms—longer trajectories, multiple samples/voting, verification and search—which should not be collapsed into one scalar “thinking more”.

## 9. Factuality, confidence and uncertainty are separate dimensions

A fluent answer can be false; verbal confidence can differ from calibrated probability; token-level uncertainty may not map cleanly to semantic uncertainty.

Hence later work must distinguish:
- correctness;
- support/faithfulness to sources;
- internal/output uncertainty;
- verbal confidence;
- willingness to abstain.

## 10. User-responsiveness is not the same as reliable adaptation

Sycophancy, prompt injection and hierarchy-conflict research shows that responding strongly to contextual/user signals can improve steerability but can also override truth or higher-priority instructions.

Therefore “the model changed because of interaction” is not automatically evidence of useful acquired experience.

## 11. Persistent change in weights creates a stability–plasticity problem

Continual learning and model-editing literature makes explicit that adding or changing knowledge can interfere with old capabilities. This gives a separate future research branch from external memory or prompt-based adaptation.

A1 does not decide which route should be used in the experiment.

## 12. Frontier proprietary models impose a black-box evidence limit

Exact architecture, datasets and post-training procedures are often not public. Behavioral experiments can characterize outputs but cannot justify precise architectural claims about a closed model.

Later synthesis therefore must label:
- established Transformer/LLM principles;
- findings on open model families;
- vendor-documented behavior;
- black-box observations;
- unknown proprietary implementation details.

## 13. Model, agent and product must stay separated

Tool calling and retrieval can be selected by a model, executed by an external runtime and returned as new context. Persistent files, application memory, orchestration and autonomous loops belong partly to later areas №9 and №11.

Area №8 maps the LLM side and the boundary; it should not absorb agent architecture or ChatGPT product capabilities.

## 14. Что A1 №8 дала общей программе

Получена карта из **320 вопросов именно области №8**, в 34 блоках. Она нужна, чтобы позже не смешивать:
- weights and context;
- architecture and post-training;
- model and decoder;
- nominal and effective context;
- ICL and gradient learning;
- instruction following and sycophancy;
- confidence and factuality;
- generated reasoning and faithful explanation;
- model editing and external memory;
- standalone LLM and agent/runtime/product.

## 15. Граница текущего результата

В этом проходе **ни один из 320 вопросов области №8 не исследовался глубоко**. Источники использовались для картографии архитектурных уровней, training/inference regimes, behavioral phenomena and methodological limits.

A1 №8 отвечает только на вопрос:

**«Какие свойства архитектуры, обучения, контекста и inference GPT/LLM необходимо исследовать, чтобы позже понять, какие формы устойчивого изменения и индивидуализации вообще технически возможны, не приписывая модели свойства её prompt, runtime, tools или продукта?»**

**Следующий шаг общего процесса:** A1 №9 «AI-агенты и когнитивные архитектуры».
