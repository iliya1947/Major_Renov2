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
