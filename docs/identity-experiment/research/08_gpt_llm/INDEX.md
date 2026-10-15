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
