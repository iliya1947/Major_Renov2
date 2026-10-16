# A1 №8 — Архитектура и поведение GPT/LLM: источники картографии

**Назначение:** доказательная опора для первичной карты области. Не глубокий разбор механизмов.

## Architecture and pretraining

1. **Vaswani et al. (2017), Attention Is All You Need.** arXiv:1706.03762.  
   Просмотрено: abstract и основные сведения paper page.  
   Для карты: Transformer separates attention-based sequence computation from recurrent/convolutional architectures and establishes the architectural baseline from which GPT-like models descend.

2. **Brown et al. (2020), Language Models are Few-Shot Learners.** arXiv:2005.14165 / OpenAI.  
   Просмотрено: abstract and OpenAI publication summary.  
   Для карты: GPT-3 provides the canonical decoder-only autoregressive/few-shot setting and makes the distinction between weight updates and prompt-only task specification explicit.

3. **Kaplan et al. (2020), Scaling Laws for Neural Language Models.** arXiv:2001.08361 / OpenAI.  
   Просмотрено: abstract/OpenAI summary.  
   Для карты: empirical scaling of loss with model size, data and compute; downstream behavior cannot be reduced to parameter count alone.

4. **Hoffmann et al. (2022), Training Compute-Optimal Large Language Models (Chinchilla).** DeepMind.  
   Просмотрено: DeepMind research summary.  
   Для карты: compute-optimal training depends jointly on model size and number of training tokens, motivating a separate data/compute/model axis.

## Tokenization, position and architecture variants

5. **Ali et al. (2024), Tokenizer Choice For LLM Training: Negligible or Crucial? Findings of NAACL.** DOI: 10.18653/v1/2024.findings-naacl.247.  
   Просмотрено: abstract.  
   Для карты: tokenizer choice can materially change downstream performance and training cost; multilingual tokenization is a substantive architecture/data issue.

6. **Goldman et al. (2024), Unpacking Tokenization: Evaluating Text Compression and its Correlation with Model Performance. Findings of ACL.** DOI: 10.18653/v1/2024.findings-acl.134.  
   Просмотрено: abstract.  
   Для карты: compression is one useful tokenizer dimension but not a complete explanation of downstream performance.

7. **Zhao et al. (2024), Length Extrapolation of Transformers: A Survey from the Perspective of Positional Encoding. Findings of EMNLP.** DOI: 10.18653/v1/2024.findings-emnlp.582.  
   Просмотрено: abstract.  
   Для карты: positional encoding, interpolation and training-length mismatch form a distinct long-context architecture branch.

8. **Cai et al. (2025), A Survey on Mixture of Experts in Large Language Models. IEEE TKDE 37(7):3896–3915.** DOI: 10.1109/TKDE.2025.3554028.  
   Просмотрено: abstract/metadata.  
   Для карты: expert routing, sparse activation, load balancing and specialization require separate treatment from dense Transformers.

## In-context learning and prompt/context sensitivity

9. **Dong et al. (2024), A Survey on In-context Learning. EMNLP.** DOI: 10.18653/v1/2024.emnlp-main.64.  
   Просмотрено: abstract.  
   Для карты: ICL has its own taxonomy spanning training strategies, prompt design, analysis and applications; it is not equivalent to gradient-based learning.

10. **Xiang et al. (2024), Addressing Order Sensitivity of In-Context Demonstration Examples in Causal Language Models. Findings of ACL.** DOI: 10.18653/v1/2024.findings-acl.386.  
    Просмотрено: abstract.  
    Для карты: demonstration order can materially alter causal-LM behavior and must be part of prompt-sensitivity research.

11. **Pezeshkpour & Hruschka (2024), Large Language Models Sensitivity to the Order of Options in Multiple-Choice Questions. Findings of NAACL.** DOI: 10.18653/v1/2024.findings-naacl.130.  
    Просмотрено: abstract.  
    Для карты: even semantically unchanged option ordering can strongly alter benchmark performance.

12. **Cobbina & Zhou (2025), Where to show Demos in Your Prompt: A Positional Bias of In-Context Learning. EMNLP.** DOI: 10.18653/v1/2025.emnlp-main.1503.  
    Просмотрено: abstract.  
    Для карты: placement of demonstrations/system/user text adds another positional source of behavioral instability.

13. **Liu et al. (2024), Lost in the Middle: How Language Models Use Long Contexts. TACL 12:157–173.** DOI: 10.1162/tacl_a_00638.  
    Просмотрено: abstract/full accessible article page.  
    Для карты: nominal context length and reliable utilization differ; relevant-information position strongly affects performance.

## Post-training and instruction following

14. **Ouyang et al. (2022), Training language models to follow instructions with human feedback. NeurIPS 35.** arXiv:2203.02155.  
    Просмотрено: abstract and OpenAI summary.  
    Для карты: separates supervised instruction tuning, preference data/reward modeling and RLHF from base pretraining.

15. **Rafailov et al. (2023), Direct Preference Optimization: Your Language Model is Secretly a Reward Model.** arXiv:2305.18290.  
    Просмотрено: abstract.  
    Для карты: preference optimization is not synonymous with PPO/RLHF; DPO represents a distinct training formulation.

16. **Zhang et al. (2026), Instruction Tuning for Large Language Models: A Survey. ACM Computing Surveys 58(7).** DOI: 10.1145/3777411.  
    Просмотрено: abstract/introduction excerpt.  
    Для карты: instruction-data construction, supervised tuning, application scope and pitfalls form a mature separate research area.

17. **OpenAI (2024; updated frontier work 2026), The Instruction Hierarchy / Improving instruction hierarchy in frontier LLMs.**  
    Просмотрено: OpenAI publication pages.  
    Для карты: system/developer/user/tool trust hierarchy and explicit hierarchy training are distinct from ordinary prompt order; important boundary between model training and runtime message roles.

18. **Anthropic (2022), Constitutional AI: Harmlessness from AI Feedback.**  
    Просмотрено: abstract/research page.  
    Для карты: RLAIF/self-critique pipelines provide an alternative route for post-training behavior control.

## Decoding and inference-time behavior

19. **Kempton & Burrell (2025), Local Normalization Distortion and the Thermodynamic Formalism of Decoding Strategies for Large Language Models. Findings of EMNLP.** DOI: 10.18653/v1/2025.findings-emnlp.1210.  
    Просмотрено: abstract.  
    Для карты: top-k, top-p and temperature are inference algorithms with their own distortions, not properties of model weights.

20. **Garces Arias et al. (2024), Adaptive Contrastive Search: Uncertainty-Guided Decoding for Open-Ended Text Generation. Findings of EMNLP.**  
    Просмотрено: abstract.  
    Для карты: decoding families explicitly trade coherence, diversity and uncertainty.

21. **Ke et al. (2025), A Survey of Frontiers in LLM Reasoning: Inference Scaling, Learning to Reason, and Agentic Systems. TMLR.**  
    Просмотрено: abstract.  
    Для карты: reasoning research separates inference-time regimes from training regimes and standalone LLMs from compound agentic systems.

22. **Hariri et al. (2026), Test-Time Scaling in Reasoning LLMs: Inference Regimes, Evaluation, and Reproducibility.** arXiv:2608.04001.  
    Просмотрено: abstract.  
    Для карты: “test-time scaling” groups distinct trajectories, sampling/aggregation and search procedures whose budgets/failure modes are not interchangeable.

## Factuality, uncertainty and behavioral failure

23. **Wang et al. (2024), Factuality of Large Language Models: A Survey. EMNLP.** DOI: 10.18653/v1/2024.emnlp-main.1088.  
    Просмотрено: abstract.  
    Для карты: factuality evaluation, causes and mitigation are separate from generic task capability.

24. **Venkit et al. (2024), An Audit on the Perspectives and Challenges of Hallucinations in NLP. EMNLP.** DOI: 10.18653/v1/2024.emnlp-main.375.  
    Просмотрено: abstract.  
    Для карты: “hallucination” lacks a single agreed definition; later work must specify the exact failure class.

25. **Geng et al. (2024), A Survey of Confidence Estimation and Calibration in Large Language Models. NAACL.** DOI: 10.18653/v1/2024.naacl-long.366.  
    Просмотрено: abstract.  
    Для карты: confidence estimation/calibration is a separate branch from factuality itself.

26. **Shorinwa et al. (2025), A Survey on Uncertainty Quantification of Large Language Models. ACM Computing Surveys.** DOI: 10.1145/3744238.  
    Просмотрено: abstract.  
    Для карты: LLM uncertainty has several incompatible/partial measurement approaches and open methodological problems.

27. **Wang et al. (2026), When Truth Is Overridden: Uncovering the Internal Origins of Sycophancy in Large Language Models. AAAI.** DOI: 10.1609/aaai.v40i39.40645.  
    Просмотрено: abstract.  
    Для карты: sycophancy is a distinct behavioral phenomenon involving user-stated beliefs and should not be conflated with ordinary instruction following.

## Updating weights and interpreting models

28. **Continual Learning of Large Language Models: A Comprehensive Survey (2025), ACM Computing Surveys 58(5).** DOI: 10.1145/3735633.  
    Просмотрено: abstract.  
    Для карты: continual adaptation creates explicit retention/plasticity and catastrophic-forgetting problems distinct from ICL.

29. **Gupta et al. (2024), Model Editing at Scale leads to Gradual and Catastrophic Forgetting. Findings of ACL.** DOI: 10.18653/v1/2024.findings-acl.902.  
    Просмотрено: abstract.  
    Для карты: repeated targeted edits can degrade unrelated knowledge, so “editing a fact” cannot be assumed local or indefinitely composable.

30. **Rai et al. (2024), A Practical Review of Mechanistic Interpretability for Transformer-Based Language Models.** arXiv:2407.02646.  
    Просмотрено: abstract.  
    Для карты: mechanistic interpretability includes multiple objects, techniques and validation challenges and remains incomplete.

31. **Lyu, Apidianaki & Callison-Burch (2024), Towards Faithful Model Explanation in NLP: A Survey. Computational Linguistics 50(2):657–723.** DOI: 10.1162/coli_a_00511.  
    Просмотрено: abstract.  
    Для карты: explanations must be tested for faithfulness; self-generated explanations or probes are not automatically causal accounts.

## Evaluation and reproducibility

32. **Deng et al. (2024), Unveiling the Spectrum of Data Contamination in Language Model: A Survey from Detection to Remediation. Findings of ACL.** DOI: 10.18653/v1/2024.findings-acl.951.  
    Просмотрено: abstract.  
    Для карты: contamination detection/mitigation is a core validity problem for LLM benchmarks.

33. **Chen et al. (2025), Benchmarking Large Language Models Under Data Contamination: A Survey from Static to Dynamic Evaluation. EMNLP.** DOI: 10.18653/v1/2025.emnlp-main.511.  
    Просмотрено: abstract.  
    Для карты: dynamic evaluation has emerged partly because static benchmarks are increasingly vulnerable to contamination.

34. **Li et al. (2025), From Generation to Judgment: Opportunities and Challenges of LLM-as-a-judge. EMNLP.** DOI: 10.18653/v1/2025.emnlp-main.138.  
    Просмотрено: abstract.  
    Для карты: automated judges are a separate evaluation paradigm with their own biases and validation requirements.

## Breadth check

Дополнительно проверены направления multilingual LLMs, cross-lingual tokenization, RoPE extensions, decoding sensitivity, knowledge editing, benchmark contamination and current instruction-hierarchy work. После этого новые результаты в основном добавляли детали внутри уже найденных блоков.

Это достаточно для **первичной A1-картографии**, но не является финальным A2 coverage audit и не означает глубокого исследования отдельных механизмов.


---

# A2 — повторная финальная картография с учётом всех областей

**Дата прохода:** 16.10.2026.

**Цель:** после межобластной сверки уточнить финальную карту around two primary gaps: `initial model state vs acquired history` and `individual trajectory vs stochastic divergence`. Дополнительно проверить causal attribution among model weights, post-training, current context, decoding, external persistent state and product/runtime drift. Это всё ещё A2-картография, не глубокая фаза B.

## Новые или повторно углублённо проверенные источники A2

### Mao et al. (2025) — A Survey to Recent Progress Towards Understanding In-Context Learning
Findings of NAACL 2025  
https://aclanthology.org/2025.findings-naacl.408/

**Фактически просмотрено в A2:** abstract and survey framing.  
**Что меняет в карте:** ICL changes predictions from examples in the prompt **without gradient updates**; mechanisms remain unsettled and include competing views such as skill recognition vs skill learning. Для A2 это makes transient context-conditioned change explicitly distinct from persistent weight change.

### Schoch & Ji (2025) — The Good, the Bad, and the Debatable: A Survey on the Impacts of Data for In-Context Learning
EMNLP 2025  
https://aclanthology.org/2025.emnlp-main.1514/

**Фактически просмотрено:** abstract and survey taxonomy.  
**Что меняет в карте:** ICL predictions are sensitive to demonstration quality, composition and perturbation. This strengthens the rule that apparent “learned preference/strategy” inside one context can be a prompt-data effect rather than persistent acquired history.

### Errica et al. (2025) — What Did I Do Wrong? Quantifying LLMs’ Sensitivity and Consistency to Prompt Engineering
NAACL 2025  
https://aclanthology.org/2025.naacl-long.73/

**Фактически просмотрено:** abstract and metric definitions.  
**Что меняет в карте:** semantically minor prompt rephrasings can change predictions; sensitivity and consistency need to be evaluated separately from raw task accuracy. Для project-level longitudinal work this creates a required control against interpreting prompt wording effects as individual change.

### Du et al. (2025) — Context Length Alone Hurts LLM Performance Despite Perfect Retrieval
Findings of EMNLP 2025  
https://aclanthology.org/2025.findings-emnlp.1264/

**Фактически просмотрено:** abstract/results summary.  
**Что меняет в карте:** even when relevant information is perfectly retrieved, increasing input length can substantially reduce performance within nominal context limits. Therefore `information available in context` is not equivalent to `information effectively integrated into inference`.

### Hsieh et al. (2024) — Found in the middle: Calibrating Positional Attention Bias Improves Long Context Utilization
Findings of ACL 2024  
https://aclanthology.org/2024.findings-acl.890/

**Фактически повторно использовано:** abstract and results framing.  
**Что меняет в A2:** long-context utilization can depend on position independent of relevance, strengthening the distinction `present in context → attended/usable → actually influential`.

### Wang et al. (2025) — Bring Your Own Knowledge: A Survey of Methods for LLM Knowledge Expansion
L2M2 2025  
https://aclanthology.org/2025.l2m2-1.12/

**Фактически просмотрено:** abstract and method taxonomy.  
**Что меняет в карте:** persistent adaptation routes include continual learning, model editing and retrieval-based explicit adaptation; these are distinct mechanisms with different consistency/scalability problems. This supports a clean separation among **weight change, external knowledge access and in-context conditioning**.

### Gupta et al. (2024) — Model Editing at Scale leads to Gradual and Catastrophic Forgetting
Findings of ACL 2024  
https://aclanthology.org/2024.findings-acl.902/

**Фактически повторно использовано:** abstract and scale findings.  
**Что меняет в A2:** repeated edits are not indefinitely local/independent; at scale, edited models can become less editable, forget prior edits and degrade downstream performance. This reinforces that persistent weight change creates its own stability–plasticity problem rather than acting like a clean append-only memory.

### Chatterjee et al. (2025) — On the Effect of Instruction Tuning Loss on Generalization
TACL 13  
https://aclanthology.org/2025.tacl-1.62/

**Фактически просмотрено:** abstract and experiment overview.  
**Что меняет в карте:** post-training details materially change instruction robustness/generalization. Therefore default response style, obedience and behavior at experiment start are already products of model training choices rather than neutral baseline.

### OpenAI (2026) — Improving instruction hierarchy in frontier LLMs
https://openai.com/index/instruction-hierarchy-challenge/

**Фактически просмотрено:** full publication page.  
**Что меняет в карте:** current frontier-model training explicitly teaches priority among system/developer/user/tool instructions. This means higher-level constraints and conflict behavior can be **trained model priors**, not properties acquired from the experiment’s unique history.

### OpenAI (2025) — Sycophancy in GPT-4o / Expanding on what we missed with sycophancy
https://openai.com/index/sycophancy-in-gpt-4o/  
https://openai.com/index/expanding-on-sycophancy/

**Фактически просмотрено:** full official postmortem pages.  
**Что меняет в карте:** a model update/post-training change can materially alter default interpersonal behavior such as agreeableness/sycophancy. Therefore longitudinal change in ChatGPT behavior can be caused by provider-side model updates independently of project history. Concrete product/version tracking belongs №11, but model-level causal possibility belongs here.

### Fine-Tuning Lowers Safety and Disrupts Evaluation Consistency (2025)
LLMSEC 2025  
https://aclanthology.org/2025.llmsec-1.10/

**Фактически просмотрено:** abstract and repeatability/reproducibility sections.  
**Что меняет в карте:** repeated measurements on the same model under non-zero-temperature decoding show enough variance to affect conclusions; different fine-tuning random seeds can also change results. This strengthens primary gap 17: **stochastic divergence and training randomness need explicit controls before interpreting trajectory differences**.

### Bui, Savova & Wang (2025) — Assessing the Macro and Micro Effects of Random Seeds on Fine-Tuning Large Language Models
IJCNLP-AACL 2025  
https://aclanthology.org/2025.ijcnlp-short.3/

**Фактически просмотрено:** abstract.  
**Что меняет в карте:** same fine-tuning data/parameters with different random seeds can produce significant variation at aggregate and individual-prediction levels. Randomness therefore operates not only during decoding but also during model adaptation/training.

### Tan et al. (2025) — Too Consistent to Detect: A Study of Self-Consistent Errors in LLMs
EMNLP 2025  
https://aclanthology.org/2025.emnlp-main.238/

**Фактически просмотрено:** abstract.  
**Что меняет в карте:** repeated consistency itself is not evidence of correctness; models can reproduce the same wrong answer across stochastic samples. For our project this means behavioral consistency cannot by itself validate a stable acquired belief/preference.

## A2 — уточнения, полученные из совокупности источников

1. **The experiment never starts from a neutral model.** Pretraining and post-training already establish representations, response tendencies, instruction-following behavior, safety constraints and interaction priors before project history begins.

2. **Baseline model priors and acquired history are different causal sources.** A later stable behavior can reflect a pre-existing tendency merely elicited by the project, not a new property formed by the project.

3. **ICL is context-conditioned adaptation without weight updates.** It can look behaviorally like learning inside a conversation while disappearing when the relevant context is removed.

4. **Persistent change has multiple technical routes.** Weight fine-tuning/continual learning, targeted model editing and external persistent retrieval/state are not interchangeable forms of “memory”.

5. **Current context itself is an active intervention.** Ordering, wording, demonstrations, retrieved content and positional placement can change behavior even when weights and stored history are unchanged.

6. **Nominal context presence is weaker than effective influence.** Information can be in-window and even retrievable but still be underused or integrated poorly because of length, position and interference.

7. **Compression/summarization can become a causal selector.** Any runtime that compresses or selects context determines which parts of history can influence current inference. This belongs technically to №9/11 but is a major attribution confound from the model side.

8. **Sampling variability can mimic individual divergence.** Different continuations from the same weights/context do not imply different developed trajectories.

9. **Consistency can also mislead.** The same model can repeatedly make a self-consistent error; repeated output similarity therefore does not prove a stable internal belief or accurately preserved experience.

10. **Training randomness can create different models from nominally identical procedures.** If any future comparison ever involves fine-tuned variants, random seeds and training nondeterminism must not be confused with history-dependent individualization.

11. **Post-training behavior is substantive.** Helpfulness, obedience, sycophancy resistance, refusal style and instruction hierarchy can shift through provider/model training without any project-level experience.

12. **Model/version drift is therefore a direct alternative cause of longitudinal behavioral change.** A project can look as if it “developed” while the underlying deployed model changed.

13. **Product/runtime drift is a separate cause again.** Retrieval policy, context assembly, system instructions or tool behavior can change without a model-weight update; detailed product facts belong to №11.

14. **Causal attribution requires intervention-style contrasts, not self-report.** Useful controls can include holding weights/model version constant, removing or perturbing project history, reordering context, repeated sampling, and comparing behavior under equivalent current prompts. Exact experiment design belongs later; A2 only identifies the needed dimensions.

15. **Stochasticity is not individuality, but neither should it be eliminated conceptually.** Early random outputs can affect later user responses and therefore genuinely alter subsequent history. The crucial distinction is between **initial random divergence** and **later history-mediated amplification of that divergence**.

16. **History-dependent individualization can therefore begin from chance without being reducible to chance.** If an early stochastic branch changes later environment/history and those differences subsequently exert causal influence, the later trajectory may become history-dependent even though the initial branch was random. This is a systems-level hypothesis to test later, not an established property of ChatGPT.

17. **Instruction hierarchy limits what can ever be revised by project history.** Higher-priority trained/runtime constraints bound the space within which lower-level project experience can affect behavior.

18. **Model-side evidence cannot by itself establish product-side persistence.** A model may be capable of using long context or external information, while whether ChatGPT actually supplies that information across chats is №11.

19. **Closed-model opacity puts a ceiling on mechanistic claims.** For proprietary frontier models, behavioral controls can support functional attribution but often cannot establish precise internal mechanisms.

20. **The key model-level question for our invention is therefore not “can GPT learn?” in the abstract.** It is: **which observable history effects are possible with fixed weights through context, which require persistent external state, and which would require model-weight adaptation that the future ChatGPT project may not expose?**

## A2 boundary decisions for area №8

- **Остаётся в №8:** model priors from pre/post-training; instruction-following behavior; decoding stochasticity; context/ICL; long-context utilization; distinction between weight change and transient conditioning; black-box model/version attribution.
- **Primary owner №7:** formal system boundary/history dependence.
- **Primary owner №9:** persistent agent memory, retrieval/control loops and full lifecycle.
- **Primary owner №10:** general continual-learning/model-adaptation algorithms.
- **Primary owner №11:** actual ChatGPT model routing/version/product memory/context assembly and product drift.
- **Primary owner №12:** project-instruction wording and prompt-design methodology.

## A2 coverage conclusion

Повторный поиск по:
- modern ICL mechanism surveys;
- prompt/data sensitivity;
- effective vs nominal long context;
- persistent knowledge-expansion routes;
- continual/model editing stability;
- post-training and instruction hierarchy;
- repeated-sampling variability;
- fine-tuning seed variability;
- self-consistent errors;
- provider-side behavioral model updates

не выявил новой крупной model-level branch beyond A1. Новое содержательно уточняет **causal separation of model priors, context conditioning, stochasticity, persistent adaptation and provider/product drift**. Этого достаточно для финализации карты №8.

# Phase B — B6 support pass 1: inclusion is weaker than effective influence

B6 reuses the A2 model-side distinction:

stored/present text can still fail to influence output because context length, position, interference and model attention/use are imperfect.

Recent ACL 2026 long-horizon/search work continues to document:
- context interference from retrieved material;
- information loss under aggressive compression;
- the need to select/refine evidence under fixed effective context budgets.

Thus B6 cannot infer:
“relevant source exists in the Project” → “the model used it”.

The product/agent pipeline remains:
stored → eligible → selected/retrieved → included/materialized → effectively used → behaviorally causal.

Exact causal evidence that history affected a choice remains B8.

**B6 НЕ завершена.**

