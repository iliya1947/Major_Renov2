# A1/A2 №8 — Архитектура и поведение GPT/LLM: накопленное понимание

**Статус:** A1 завершена 15.10.2026, A2 — 16.10.2026. Ниже сохранено понимание структуры области и добавлены выводы финальной картографии после межобластной сверки.

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


---

# A2 — что изменилось в понимании области

## 16. Эксперимент начинается не с «чистого» участника

До первой project interaction уже существуют:
- pretrained representations and tendencies;
- instruction-tuned behavior;
- preference/alignment effects;
- safety and hierarchy behavior;
- decoder/inference defaults.

Поэтому later difference from another possible trajectory does not mean the difference was created by project history.

Для causal interpretation понадобится baseline distinction:
**что модель уже умела/предпочитала выражать до уникальной истории, а что стало зависеть от неё позже.**

## 17. Elicitation и acquisition нельзя смешивать

Project history может просто **вызывать уже существовавшую способность/tendency**.

Например:
- context can activate a style;
- examples can elicit a latent task;
- user framing can shift expressed opinion;
- instructions can expose a trained behavioral prior.

Внешне это может выглядеть как новое развитие.

Следовательно, later evidence of individualization должно показывать не только new behavior, но и **history-specific causal dependence**.

## 18. In-context learning даёт самый опасный ложный аналог persistent learning

ICL позволяет модели менять mapping/behavior from examples in current context без gradient update.

Отсюда:
- behavior can adapt;
- behavior can generalize inside context;
- no persistent model change is required.

Поэтому phrase «модель научилась в разговоре» без qualification почти бесполезна.

Нужно различать:
- transient context conditioning;
- external persistent state;
- persistent weight adaptation.

## 19. Context — не пассивный контейнер

A2 усилила границу:
- wording;
- ordering;
- demonstrations;
- position;
- irrelevant material;
- total length

могут менять inference even with same model weights.

Особенно важен result that long input can reduce performance even when relevant information is successfully retrieved.

Следовательно:
**«опыт находится в context» не означает «опыт эффективно участвует в решении».**

## 20. Доступность прошлого имеет ещё один уровень после retrieval

После A2 №2 мы различали:
`stored → accessible → retrieved → represented → influential`.

№8 добавляет model-specific complication:
даже **retrieved and present** information can be poorly integrated by inference because of long-context/position/interference effects.

Для будущего механизма continuity это означает, что retrieval success нельзя использовать как достаточное доказательство influence.

## 21. Compression и context assembly могут формировать trajectory до самой модели

Если runtime:
- сокращает историю;
- суммирует;
- отбирает retrieved items;
- меняет order;
- исключает low-ranked records,

он уже определяет, какая часть прошлого получает возможность повлиять на inference.

Это causal selection outside bare model. Поэтому detailed mechanism belongs №9/11, but model-level evaluation must treat it as confound.

## 22. Stochastic divergence и individualization — разные явления

Same model + same context can produce different outputs because generation samples from a distribution.

Такое различие само по себе:
- не preference;
- не learning;
- не identity;
- не unique acquired experience.

Но оно может стать **начальной причиной настоящего later history divergence**, если:
`random early output → user/environment reacts differently → history diverges → accumulated history later causally matters`.

Поэтому later synthesis должен различать:
1. initial stochastic branch;
2. history-mediated amplification;
3. persistent history-dependent trajectory.

## 23. Consistency тоже недостаточна

Обратная ошибка — считать repeated same answer evidence stable internal belief.

LLMs can produce self-consistent errors across stochastic samples.

Следовательно:
- variability ≠ lack of identity;
- consistency ≠ identity;
- both require causal interpretation.

## 24. Provider-side model updates могут имитировать развитие проекта

Real deployed models are updated through post-training and deployment changes.

A concrete historical example is GPT-4o sycophancy: a provider-side update materially changed interpersonal behavior and was rolled back.

Для longitudinal experiment это означает:
`behavior at T2 differs from T1`
может отражать model snapshot change даже при identical project history.

Concrete ChatGPT version/product tracking remains №11.

## 25. Higher-priority constraints ограничивают область возможного развития

Modern frontier models can be trained to prioritize:
`system > developer > user > tool`.

Поэтому project history не обладает unlimited power to rewrite behavior.

Это не делает history irrelevant. Это задаёт **bounded space of adaptation**:
внутри higher-priority constraints могут оставаться choices, interpretations and project-conditioned differences.

Этот result связывает №8 with bounded autonomy №7/9.

## 26. Closed-model opacity ограничивает объяснение механизма

For proprietary frontier LLMs мы часто можем:
- manipulate prompts/context;
- repeat sampling;
- compare versions;
- observe behavior.

Но мы не можем по одному behavioral result достоверно заключить precise internal circuit or training cause.

Поэтому later project should prefer **functional causal claims** where mechanistic access is absent.

## 27. Что область №8 реально даст позднему синтезу

Не ответ «GPT может/не может иметь личность», а жёсткий attribution framework:

1. **pre-existing prior ≠ acquired history;**
2. **elicitation ≠ acquisition;**
3. **ICL ≠ persistent weight learning;**
4. **context presence ≠ effective influence;**
5. **retrieval success ≠ inference integration;**
6. **stochastic divergence ≠ individualization;**
7. **consistency ≠ stable belief;**
8. **provider model update ≠ project development;**
9. **runtime/product state ≠ bare-model state;**
10. **higher-priority constraints bound but do not automatically eliminate history-dependent variation.**

## 28. Финальная граница A2 №8

Самые важные deep-dive ветви для фазы B:
- baseline behavioral priors from pre/post-training;
- elicitation vs acquired change;
- ICL vs persistent adaptation;
- effective use of long context/history;
- stochastic baseline variability and history-amplified divergence;
- model/version drift;
- causal controls for history-dependent behavioral change;
- limits of black-box mechanistic inference.

Persistent agent memory/control belongs №9, general adaptation algorithms №10, actual ChatGPT persistence/version/runtime №11, instruction design №12.
