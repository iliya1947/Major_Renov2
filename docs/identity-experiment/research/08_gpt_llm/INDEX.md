# A1 №8 — Архитектура и поведение GPT/LLM

**Статус:** A1 в процессе первичной картографии 15.10.2026.

**Цель:** определить, какие части архитектуры, обучения и поведения GPT/LLM необходимо будет исследовать глубоко позже. Здесь не решаются найденные вопросы, не проектируется агентная архитектура и не выводятся инструкции будущего эксперимента.

## 1. Что считать GPT/LLM и где проходит граница системы

1. Чем GPT как autoregressive decoder-only Transformer отличается от более общего класса LLM?
2. Какие свойства относятся к базовой архитектуре Transformer, а какие — к конкретной обучающей процедуре?
3. Чем base model отличается от instruction-tuned/chat model?
4. Чем reasoning model отличается от обычного chat LLM на уровне training/inference regime?
5. Какие свойства модели принадлежат весам, а какие возникают только из текущего context?
6. Где проходит граница между model, inference runtime, orchestration layer и product UI?
7. Какие capabilities требуют внешних tools/retrieval, а какие возникают у standalone model?
8. Как distinguish foundation model, language model, assistant and agent?
9. Какие свойства OpenAI GPT-family публично известны, а какие являются закрытыми implementation details?
10. Как исследовать proprietary models, не подменяя неизвестную архитектуру предположением?

## 2. Autoregressive objective и next-token prediction

11. Что именно оптимизирует causal language modeling objective?
12. Как token-level likelihood соотносится с sequence-level behavior?
13. Почему next-token objective может поддерживать task behavior, которого явно не было в objective?
14. Какие capabilities могут быть следствием learned statistical structure без отдельного task-specific training?
15. Как causal attention mask ограничивает доступ к будущим tokens?
16. Чем teacher-forced training отличается от autoregressive free generation?
17. Как exposure mismatch между training and generation влияет на behavior?
18. Как local next-token decisions accumulate into long-horizon outputs?
19. Что loss/perplexity реально говорит о downstream capability?
20. Где next-token prediction недостаточно для объяснения instruction-following, planning or reasoning behavior?

## 3. Tokenization и discrete input representation

21. Какие tokenizer families используются: BPE, unigram, WordPiece, byte-level and variants?
22. Как vocabulary size влияет на sequence length, compute and representation granularity?
23. Как tokenizer choice влияет на downstream performance?
24. Что такое token fertility/parity и почему они не всегда предсказывают quality?
25. Как English-centric tokenization меняет efficiency других языков?
26. Как morphology and script affect token fragmentation?
27. Какие tasks особенно чувствительны к token boundaries?
28. Как numbers, code, whitespace and unusual strings tokenized and represented?
29. Как tokenization affects context-window capacity in semantic terms?
30. Какие alternatives to fixed subword tokenization существуют?

## 4. Embeddings и positional representation

31. Как token embeddings and output unembedding relate?
32. Насколько tied versus untied embeddings matter?
33. Зачем Transformer нужен positional signal despite attention?
34. Чем absolute, relative, rotary and bias-based positional methods differ?
35. Что exactly limits length extrapolation beyond training context?
36. Как RoPE extensions alter attention geometry?
37. Как position interpolation differs from architectural long-context training?
38. Что такое positional bias and how is it measured?
39. Как sequence position interacts with semantic relevance?
40. Какие position-encoding claims generalize across model families?

## 5. Self-attention and causal attention

41. What computation does an attention head perform?
42. How do queries, keys and values differ functionally?
43. What is multi-head attention intended to provide?
44. How do attention patterns change across layers and tokens?
45. What can attention weights reveal, and what can they not establish?
46. How does causal masking shape information flow?
47. What are grouped-query and multi-query attention and why are they used?
48. How does attention complexity constrain context length?
49. What approximation/sparsity schemes trade accuracy for efficiency?
50. How do attention mechanisms interact with positional encoding?

## 6. MLP blocks, residual stream and normalization

51. What roles do feed-forward/MLP sublayers play relative to attention?
52. How are features distributed across neurons and directions rather than one-to-one units?
53. What is the residual stream and why is it useful as an interpretability abstraction?
54. How do residual connections preserve and combine information across depth?
55. How do LayerNorm/RMSNorm variants affect optimization and inference?
56. What is pre-norm versus post-norm and why does it matter for deep Transformers?
57. How do activation functions and gated MLPs change capacity?
58. What evidence supports viewing MLPs as associative memories, and where does that analogy break?
59. How do attention and MLP computations interact rather than form independent modules?
60. Which architectural internals are robustly understood versus inferred from specific open models?

## 7. Dense, sparse and Mixture-of-Experts architectures

61. What distinguishes dense Transformers from sparse MoE models?
62. How do routers/gates choose experts?
63. What does expert specialization mean empirically?
64. How stable is expert routing across contexts?
65. What are load-balancing and expert-collapse problems?
66. How does MoE increase parameter capacity without proportional active compute?
67. Does sparse routing alter interpretability or behavioral consistency?
68. How does expert diversity relate to task/language specialization?
69. What failure modes arise from routing errors?
70. Which behavioral conclusions from dense LLMs transfer to MoE systems?

## 8. Pretraining data and objective

71. How do data quantity, diversity and quality separately affect model behavior?
72. What roles deduplication, filtering and data mixture weighting play?
73. How do web text, books, code, academic text and dialogue contribute differently?
74. How does training chronology or curriculum affect final representations?
75. What is the role of synthetic data in pretraining?
76. How do repeated examples alter memorization versus generalization?
77. How do copyright/privacy filtering choices alter data distribution?
78. How do multilingual data proportions influence cross-lingual capability?
79. How does low-quality or contradictory training data affect later behavior?
80. How much can behavior be inferred from training-data composition without direct access to the corpus?

## 9. Scaling laws and compute/data/model trade-offs

81. Which quantities follow approximate scaling laws: loss, compute, parameters and data?
82. How do Kaplan-style and Chinchilla-style compute-optimal conclusions differ?
83. How do architectural changes alter apparent scaling relations?
84. What capabilities scale smoothly versus non-smoothly on task metrics?
85. How much claimed emergence depends on metric choice and thresholding?
86. How predictable are downstream abilities from pretraining loss?
87. What role does data quality play beyond raw token count?
88. How does inference-time compute create a second scaling axis?
89. What are the limits of extrapolating empirical scaling laws beyond observed regimes?
90. How should capability scaling be separated from alignment/steerability scaling?

## 10. Memorization, generalization and training-data extraction

91. What definitions of memorization are used: exact, approximate, counterfactual or exposure-based?
92. How does duplication increase memorization risk?
93. How do model size and context affect extractability?
94. How can a model memorize strings while still generalizing broadly?
95. What distinguishes memorized factual association from abstract learned structure?
96. How can membership or extraction attacks detect memorization?
97. How does deduplication alter both memorization and utility?
98. How do privacy concerns intersect with legitimate knowledge retention?
99. How does training-data contamination distort evaluation?
100. How can one distinguish benchmark competence from benchmark memorization?

## 11. Internal representation of knowledge and features

101. What does it mean for knowledge to be “stored in weights”?
102. Are facts localized, distributed or both depending on level and method?
103. How do representations change across layers?
104. What is superposition and why does it complicate neuron-level interpretation?
105. How do semantic, syntactic and task-related features appear in hidden states?
106. How stable are features across paraphrases and languages?
107. How do representations differ before and after instruction tuning?
108. What can linear probes establish versus merely decode?
109. How do causal interventions differ from correlational probing?
110. How much representational organization is architecture-specific versus training-specific?
