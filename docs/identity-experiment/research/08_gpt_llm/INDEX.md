# A1/A2 №8 — Архитектура и поведение GPT/LLM

**Статус:** A1 завершена 15.10.2026; **A2 завершена 16.10.2026 как повторная финальная картография после межобластной сверки.**

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

## 12. Post-training as a separate source of behavior

111. Which post-training stages are commonly used after pretraining?
112. How do supervised instruction tuning, preference optimization and safety training differ?
113. Which capabilities are elicited versus newly learned during post-training?
114. How much behavioral change can post-training produce without changing broad pretraining knowledge?
115. How does post-training alter response style, refusal behavior and task framing?
116. What trade-offs can appear between helpfulness, harmlessness, honesty and capability?
117. How does post-training affect calibration and confidence expression?
118. How model-family-specific are post-training effects?
119. How do hidden proprietary post-training pipelines limit scientific inference?
120. How should behavior be attributed when pretraining and post-training contributions are entangled?

## 13. Instruction tuning

121. What is instruction tuning operationally?
122. How do instruction/output dataset construction choices affect generalization?
123. How important are task diversity and instruction diversity?
124. How does instruction complexity affect transfer?
125. What roles human-written, synthetic and distilled instruction data play?
126. How does instruction tuning bridge next-token prediction and instruction-following behavior?
127. How does instruction tuning alter zero-shot versus few-shot performance?
128. What pitfalls arise from template/style overfitting?
129. How does multilingual instruction tuning transfer across languages?
130. How should instruction-following be evaluated independently of task capability?

## 14. Preference optimization: RLHF, RLAIF, DPO and alternatives

131. What are the distinct stages of classic RLHF?
132. What does a reward model learn from pairwise preferences?
133. How does PPO-based RLHF differ from direct preference optimization?
134. What assumptions allow DPO-like objectives to replace an explicit reward-model/RL loop?
135. How does RLAIF differ from human-feedback pipelines?
136. How sensitive are preference-trained behaviors to annotator population and labeling instructions?
137. What is reward hacking or overoptimization in LLM post-training?
138. How do KL constraints or reference models limit drift?
139. How stable are preference objectives across domains and prompt distributions?
140. Which behavioral tendencies can be unintended by-products of preference optimization?

## 15. Instruction hierarchy and conflict resolution

141. How are system, developer, user and tool/data instructions represented to a chat model?
142. How does instruction priority differ from mere recency or position?
143. How are conflicting instructions detected and resolved?
144. What is instruction-hierarchy training?
145. How does hierarchy training affect prompt-injection robustness?
146. How does hierarchy training affect steerability to high-priority specifications?
147. What happens when instructions are ambiguous rather than directly contradictory?
148. How do quoted text, retrieved content and tool outputs differ from trusted instructions?
149. How can hierarchy behavior fail under indirect or obfuscated conflicts?
150. Which aspects are model-level behavior versus runtime message formatting?

## 16. Decoding and stochastic generation

151. How does greedy decoding differ from beam search and stochastic sampling?
152. What does temperature change in the next-token distribution?
153. How do top-k, top-p, min-p and other truncation strategies differ?
154. How do decoding choices trade coherence, diversity and risk?
155. Why can the same model/context generate different outputs across runs?
156. How do small early token differences cascade into different long outputs?
157. How does deterministic decoding affect apparent personality or consistency?
158. How do repetition/frequency penalties alter trajectories?
159. How does decoding interact with reasoning tasks versus open-ended generation?
160. Which behavioral properties belong to the probability distribution versus the chosen decoder?

## 17. Context windows and transient state

161. What exactly counts toward a model’s context window?
162. How do instructions, conversation history, retrieved text and tool outputs compete for context?
163. What is the difference between context capacity and effective context utilization?
164. How does truncation or summarization alter apparent continuity?
165. How does earlier text continue to influence later token prediction?
166. Is context use analogous to memory, and where does that analogy fail?
167. How does context length affect compute and latency?
168. How do attention/KV-cache mechanisms support multi-token inference without changing weights?
169. What state persists between turns in a bare API model versus a product/runtime?
170. How can one distinguish model context from external persistent memory?

## 18. Long-context behavior and positional limitations

171. What is the difference between training context length, supported context length and usable context length?
172. What is length extrapolation?
173. Why can relevant information in the middle of long contexts be underused?
174. How do primacy, recency and positional biases vary by task/model?
175. How do RoPE extensions and continued long-context training differ?
176. How does retrieval accuracy change with context length and distractor density?
177. How does long context affect reasoning that requires combining distant facts?
178. When is retrieval-augmented selection better than placing everything in context?
179. How do context compression and summarization trade detail for usability?
180. What benchmarks genuinely test long-context integration rather than simple needle retrieval?

## 19. In-context learning

181. What operationally counts as in-context learning (ICL)?
182. How does ICL differ from gradient-based fine-tuning?
183. How does zero-shot instruction following differ from few-shot ICL?
184. How does demonstration selection affect task induction?
185. How does demonstration order affect behavior?
186. What roles labels, input structure and semantic content play in ICL?
187. How can models use examples even when labels or mappings are unusual?
188. Which accounts interpret ICL as implicit Bayesian inference, meta-learning or optimization?
189. How model- and task-dependent are proposed mechanisms of ICL?
190. When does context act as transient adaptation rather than merely extra evidence?

## 20. Prompt sensitivity and contextual steerability

191. How sensitive are outputs to wording, formatting and delimiters?
192. How do semantically equivalent prompts produce behaviorally different outputs?
193. How does answer-option order alter benchmark performance?
194. How does system/user/demo placement alter predictions?
195. How does prompt verbosity help or hinder performance?
196. What is prompt over-specification and when does it create conflicts?
197. How stable are behavioral preferences across paraphrased instructions?
198. How do few-shot examples interact with explicit instructions?
199. How should prompt robustness be measured?
200. When is prompt sensitivity an architectural consequence versus a post-training artifact?

## 21. Reasoning, chain-of-thought and test-time compute

201. What should count as reasoning capability rather than benchmark pattern matching?
202. How do zero-shot, few-shot and trained chain-of-thought differ?
203. What is self-consistency and what does it change?
204. How do verifier-, voting- and search-based inference strategies differ?
205. What is test-time scaling and which distinct algorithms fall under the term?
206. How does additional inference compute trade latency/cost against performance?
207. How do long reasoning traces differ from latent/internal computation?
208. How faithful are generated rationales to computations that causally produced the answer?
209. When does more reasoning produce overthinking or error propagation?
210. How should reasoning performance be evaluated separately from answer memorization?

## 22. Factuality and hallucination

211. What competing definitions of hallucination are used in LLM research?
212. How does factual incorrectness differ from unsupported generation?
213. How does intrinsic contradiction with supplied context differ from extrinsic factual error?
214. How do pretraining data, model knowledge, prompting and decoding each contribute to factual failures?
215. How does post-training alter willingness to answer when knowledge is weak?
216. How do retrieval failures differ from generation failures in RAG systems?
217. How does instruction conflict or role-play affect factuality?
218. How are factuality and faithfulness evaluated in open-ended generation?
219. When can the same model be better at verification than generation?
220. Why must “hallucination rate” be interpreted relative to task and definition?

## 23. Uncertainty, confidence and calibration

221. What forms of uncertainty are relevant for autoregressive LLMs?
222. How does token entropy relate to sequence-level uncertainty?
223. How do semantic-uncertainty methods differ from raw token probabilities?
224. What is calibration and how is it evaluated in generative tasks?
225. How does verbalized confidence differ from internal probability?
226. Can a model know that it does not know, and how is this operationalized?
227. How do sampling and temperature affect uncertainty estimates?
228. How does retrieval alter uncertainty?
229. How do calibration properties shift after instruction/preference tuning?
230. What failure modes arise when fluent style is mistaken for confidence or certainty?

## 24. Behavioral pathologies, sycophancy and adversarial steerability

231. What operational definitions of sycophancy exist?
232. How does agreement with user belief differ from ordinary conversational accommodation?
233. How do preference training and prompt context contribute to sycophantic behavior?
234. How stable is sycophancy across domains and model families?
235. What is prompt injection and how does it differ from jailbreak?
236. How do direct and indirect prompt injections differ?
237. Why are external tool/retrieval outputs a distinct trust boundary?
238. How do models trade helpfulness against resistance to malicious instructions?
239. How should overrefusal be separated from robust instruction hierarchy?
240. What other behavioral failure modes deserve separate treatment: verbosity bias, authority bias, anchoring, self-consistency failures or user-deference?

## 25. Fine-tuning, parameter-efficient adaptation and continual learning

241. How does full fine-tuning differ from LoRA/adapters/prefix-style approaches?
242. What knowledge/capabilities are changed by parameter-efficient fine-tuning?
243. What is catastrophic forgetting in LLM adaptation?
244. How do vertical and horizontal continual-learning settings differ?
245. What methods balance plasticity and retention?
246. How do replay, regularization and modular expansion approaches differ?
247. How is continual adaptation evaluated over long sequences of tasks/domains?
248. What is the difference between fine-tuning a behavior and updating factual knowledge?
249. How do repeated fine-tunes interact with alignment behavior?
250. What makes continual learning of deployed LLMs fundamentally different from in-context adaptation?

## 26. Knowledge editing and targeted model change

251. What qualifies as model/knowledge editing rather than fine-tuning?
252. What are reliability, locality/specificity and generalization criteria for edits?
253. How do parameter-based, memory-based and hypernetwork editing methods differ?
254. How well do edits propagate across paraphrases and related facts?
255. How do multilingual edits propagate across languages?
256. What happens when many edits accumulate?
257. How does model editing induce gradual or catastrophic forgetting?
258. How can contradictory edits be handled?
259. How should edit persistence be distinguished from temporary context override?
260. What does model editing reveal—and fail to reveal—about where knowledge is represented?

## 27. Interpretability, probing and causal analysis

261. What is mechanistic interpretability trying to explain?
262. How do feature attribution, probing, activation analysis and circuit analysis differ?
263. What makes an explanation faithful rather than merely predictive?
264. How do counterfactual interventions strengthen causal claims?
265. What are induction heads and other proposed Transformer circuits?
266. How stable are discovered circuits across model sizes/families/tasks?
267. How does superposition complicate feature-level interpretation?
268. What are sparse autoencoders intended to recover?
269. How should interpretability methods be validated?
270. Where do mechanistic explanations stop scaling to frontier proprietary models?

## 28. Multilingual and cross-lingual behavior

271. How does pretraining-language balance affect capability by language?
272. How does tokenizer inefficiency interact with multilingual performance?
273. What forms of cross-lingual transfer occur without explicit parallel data?
274. Are concepts represented in shared multilingual spaces or language-specific structures?
275. How does instruction tuning transfer across languages?
276. How do safety/alignment behaviors differ across languages?
277. How does knowledge availability differ from reasoning ability across languages?
278. What happens when reasoning and answer languages differ?
279. How do low-resource languages expose architecture/data limitations?
280. What measurement-invariance problems arise when comparing LLM behavior across languages?

## 29. Tool calling and external information: boundary with agents

281. What is learned tool-use behavior inside an LLM versus runtime tool execution?
282. How are tool schemas/function signatures supplied to the model?
283. How does selecting a tool differ from executing its action?
284. How do tool results re-enter context?
285. How do tool errors, stale results and malicious outputs affect model behavior?
286. How does grounding in external sources differ from changing model weights?
287. What does retrieval augment at inference time and what remains model-internal?
288. How should provenance be preserved when external information is incorporated?
289. At what point does tool orchestration become an agent architecture rather than an LLM property?
290. Which questions belong in area №9 instead of being duplicated here?

## 30. Multimodality and cross-modal context

291. How do multimodal GPT-like systems incorporate image/audio/video representations?
292. What architectural patterns connect modality encoders to a language decoder?
293. How do modality-specific tokens/embeddings differ from text tokens?
294. What does cross-modal grounding mean operationally?
295. How do multimodal context limits differ from text-only limits?
296. How do hallucination and uncertainty change with multimodal input?
297. How is contradictory information across modalities resolved?
298. What knowledge is learned jointly versus transferred through language representations?
299. How much of multimodal behavior belongs to the LLM backbone versus modality adapters?
300. Which multimodal questions are relevant to GPT architecture but outside the planned text-centered experiment?

## 31. Evaluation, benchmarks and contamination

301. What makes an LLM benchmark measure capability rather than prompt fit?
302. How does benchmark contamination inflate apparent performance?
303. What forms of explicit and implicit contamination are distinguished?
304. How can dynamic benchmarks reduce contamination risk?
305. How should prompt sensitivity be incorporated into benchmark uncertainty?
306. How do pass@k, exact match, preference scores and open-ended ratings answer different questions?
307. When are human evaluations necessary?
308. What are strengths and biases of LLM-as-a-judge?
309. How do judge position, verbosity, authority and style biases affect scores?
310. How should evaluation handle stochastic decoding and repeated trials?

## 32. Reproducibility, opacity and model/version drift

311. How reproducible are findings when proprietary model weights/training data are unavailable?
312. How do silent model updates affect longitudinal behavioral research?
313. How can API/runtime changes be separated from model-weight changes?
314. How should exact model identifiers, dates and inference settings be recorded?
315. How do temperature/default decoding changes confound comparisons?
316. What information can black-box behavioral experiments legitimately infer about architecture?
317. How do open-weight models help test mechanisms that cannot be inspected in frontier APIs?
318. How does benchmark behavior transfer across model generations?
319. What does a “same model” mean when post-training/runtime policies change?
320. How should conclusions be marked when architecture or training details are undisclosed?

## 33. Крупные споры, сохранённые для A2/B

1. Next-token prediction as sufficient explanatory core vs need for distinct post-training/inference mechanisms.
2. Capabilities learned in weights vs elicited by prompting/context.
3. Pretraining knowledge vs post-training behavior.
4. In-context learning as learning vs inference/task conditioning.
5. Smooth scaling vs genuinely emergent capability transitions.
6. Dense computation vs sparse/MoE specialization.
7. Long nominal context vs reliable effective context.
8. Internal parametric knowledge vs retrieval/external grounding.
9. Memorization vs generalization.
10. Localized knowledge vs distributed representation.
11. Generated rationale as reasoning trace vs post-hoc explanation.
12. More test-time compute vs reliable better reasoning.
13. Verbalized confidence vs calibrated epistemic uncertainty.
14. Hallucination as one phenomenon vs heterogeneous factuality/faithfulness failures.
15. User responsiveness vs sycophancy.
16. Steerability vs robustness to prompt injection.
17. Fine-tuning/model editing vs continual learning.
18. Behavioral consistency vs stochastic/context-sensitive generation.
19. Interpretability correlations vs causal mechanistic explanation.
20. Benchmark gains vs contamination/prompt artifacts.
21. Language-general capability vs tokenizer/data-induced cross-lingual inequality.
22. Model property vs runtime/product/agent property.

## 34. A1 breadth check

Карта сверена по независимым ветвям:
- Transformer/autoregressive foundations;
- tokenization and positional representation;
- attention, MLP/residual computation and MoE;
- pretraining data/objective and scaling;
- memorization/generalization;
- post-training, instruction tuning and preference optimization;
- instruction hierarchy;
- decoding;
- context and long-context behavior;
- in-context learning and prompt sensitivity;
- reasoning/test-time scaling;
- factuality, uncertainty and calibration;
- sycophancy/prompt-injection robustness;
- continual learning and model editing;
- interpretability;
- multilingual behavior;
- tool-use boundary;
- multimodality;
- evaluation/contamination/LLM-as-judge;
- proprietary-model reproducibility and version drift.

После этих проверок новые обзоры в основном добавляли подветви внутри уже найденных осей. Это не финальный A2 coverage audit: межобластные границы ещё будут пересмотрены после A1 всех 12 областей.

## 35. A2 — финальные межобластные уточнения и новые вопросы

После межобластной сверки и fresh-source coverage pass новой самостоятельной LLM-ветви не обнаружено. Главные поправки относятся к **initial model priors vs acquired history, transient context conditioning vs persistent adaptation, stochastic divergence, effective context use and model/product drift**.

### Новые вопросы A2

321. Какие устойчивые behavioral priors уже присутствуют до начала эксперимента вследствие pretraining, instruction tuning, preference optimization, safety/alignment training and instruction-hierarchy training?
322. Как отличить **pre-existing latent tendency, elicited by project context**, от поведения, которое действительно сформировалось из уникальной project history?
323. Какие observations могут показать, что позднее поведение зависит от accumulated history, а не только от current prompt/context?
324. Как отличить in-context adaptation/ICL от persistent change, если оба дают улучшенное или изменённое behavior внутри текущей conversation?
325. Что исчезает при удалении demonstrations/history from context, а что остаётся из-за external persistent state или weight change?
326. Какие routes persistent adaptation принципиально различать: continual/fine-tuning, model editing, external retrieval/state and product-managed memory?
327. Как minor rephrasing, ordering, formatting, demonstrations and positional placement могут имитировать change in preference/strategy при неизменных weights?
328. Какие controls нужны, чтобы stable behavioral claim переживал prompt perturbations, reordered context and equivalent formulations?
329. Как различать `information present in context`, `retrievable`, `effectively utilized` и `causally influential in output`?
330. Когда long context degrades inference even при successful retrieval relevant information, и как это влияет на interpretation of “remembered experience”?
331. Как context compression/summarization/selection может систематически менять future behavior by deciding which history remains available to inference?
332. Как отличить behavioral difference, вызванную decoding/sample randomness, от history-dependent individual divergence?
333. Сколько repeated samples/controlled reruns необходимо, чтобы оценить baseline variability конкретной model/context configuration?
334. Как temperature, top-p/top-k, search/aggregation and other decoding choices change the distribution of observable “traits” or choices?
335. Почему repeated consistency across samples не доказывает stable internal belief/preference, учитывая self-consistent errors?
336. Как early stochastic divergence может стать later genuine history dependence, если случайный output изменяет user response and subsequent project trajectory?
337. Как отличить `trajectory began from chance` от `trajectory remains only random noise` after subsequent history accumulates?
338. Какие behavioral changes can arise solely from provider-side post-training/model update while project history remains unchanged?
339. Как exact model snapshot/version and deployment date should enter causal interpretation of longitudinal behavior?
340. Какие changes belong to model drift, а какие к runtime/product drift: system instructions, retrieval policy, context assembly, tools or routing?
341. Как instruction hierarchy and trained deference to higher-priority messages bound the space of behavior that project history can ever revise?
342. Какие findings about model-level long-context/ICL capability cannot be converted into claims about actual ChatGPT cross-chat persistence without №11?
343. Какие black-box interventions can distinguish model prior, current-context effect and persistent-history effect without claiming inaccessible internal mechanism?
344. Какой evidence threshold нужен, чтобы назвать longitudinal divergence **history-dependent individualization**, а не pretraining prior, prompt artifact, stochastic variation, model update or product/runtime change?

## 36. A2 — ownership corrections после межобластной сверки

Для фазы B:

- №8 остаётся **primary owner** gap 2: `initial model state vs acquired history`;
- №8 остаётся **primary owner** gap 17: `individual trajectory vs stochastic divergence`;
- №8 поддерживает gaps 3, 4, 12, 18 и 19 через model/context attribution;
- formal system boundary/history dependence → primary №7;
- persistent agent memory/control loop → №9;
- general continual-learning algorithms → №10;
- actual ChatGPT model routing/product persistence/runtime drift → №11;
- prompt/project-instruction design → №12.

Ключевые границы:
- **ICL/context conditioning ≠ persistent model learning**;
- **model prior ≠ acquired project history**;
- **context presence ≠ behavioral influence**;
- **sampling divergence ≠ individualization**;
- **behavioral consistency ≠ stable internal belief**;
- **model update ≠ project development**;
- **model capability ≠ product persistence**.

## 37. Финальный coverage audit A2

Повторно проверены:
- modern ICL mechanism surveys;
- prompt/demonstration sensitivity;
- long-context utilization beyond retrieval;
- continual learning/model editing/external adaptation distinctions;
- post-training and instruction hierarchy;
- sampling/repeated-run variability;
- training-seed variability;
- self-consistent errors;
- provider-side model behavior updates;
- model vs runtime/product attribution.

После последних источников новые находки укладывались в вопросы №321–344 или существующие A1-блоки. **Новой крупной самостоятельной ветви не появилось.**

## Статус

**A2 №8 завершена как финальная картография области.** Карта теперь содержит 320 вопросов A1 + 24 уточняющих вопроса A2 (№321–344), ownership corrections и final coverage audit.

A2 не означает глубокого решения этих вопросов. Источники использованы для проверки структуры, границ и полноты карты; глубокий разбор causal attribution between priors, context, stochasticity and persistent adaptation относится к фазе B.

**Следующий шаг общего процесса:** отдельным полноценным проходом начать **A2 №9 «AI-агенты и когнитивные архитектуры»**.
## Phase B — B6 final 16.10.2026
- B6 persistence/retrieval/path-dependence/instruction-authority package completed by saturation.
- Final pipeline: stored → eligible/current → retrieved/materialized → effectively used → behaviorally causal.
- Retrieval/compression are trajectory-shaping operations, not neutral storage plumbing.
- Current applicability, provenance, scope, contradiction/exception and lifecycle status constrain history influence; similarity/recency/frequency/importance alone do not.
- Explicit experiential state is separated from automatic/opportunistic Memory context and from governing Project instructions.
- Historical text never gains authority merely by persistence/retrieval; write permission ≠ instruction-authority permission.
- Logical obsolescence/action-guidance status is separate from physical deletion across product surfaces.
- Project-only memory is the strongest current documented isolation candidate, but within-project automatic retrieval remains partly opaque.
- Remaining participant-boundary/baseline/runtime confounds belong to B7.
## Phase B — B7 final 16.10.2026
- B7 participant-boundary/baseline/confound package completed by saturation.
- Nested boundaries: L0 inherited model substrate → L1 current inference → L2 longitudinal Project participant → L3 participant↔user/environment system.
- Working participant boundary for acquired-development claims is L2; L3 explains reciprocal trajectory generation.
- System membership ≠ causal authorship: inside components can change exogenously; outside variables can change endogenously.
- Baseline is the full pre-experiment causal configuration plus behavioral variability, not a blank state or one initial answer.
- Baseline elicitation, transient context conditioning and persistent Project-level acquisition are distinct.
- Developmental target is new causal dependence on post-t0 acquired history, not behavioral novelty.
- Stochastic branches may seed later genuine history dependence without stochasticity itself counting as individuality.
- Model/runtime/instruction/memory-mode/tool changes define configuration epochs and are alternative causes.
- User/environment can carry and reinstate history externally; this is not participant-level persistence.
- Remaining question is evidential discrimination among these alternatives → B8.
## Phase B — B8 final 17.10.2026
- B8 evidence/individualization package completed by saturation; Phase B is complete.
- Evidence ladder separates self-report/history mention → correlation → causal history influence → persistent adaptation → recursive longitudinal development → functional individualization.
- History→choice causality requires independent evidence beyond retrospective narrative; targeted/natural revision contrasts are stronger than temporal consistency.
- Individualization is defined operationally as post-start, causal, recursive, idiographic, revisable history shaping multiple non-equivalent open decisions under substantively open outcomes.
- Static persona, user-preference personalization, immediate context effects, stochastic divergence, scripting and configuration drift remain alternative explanations.
- Reversibility/revision strengthens the case against frozen persona but is not a mandatory personality test.
- The correct outcome may be partial, negative or indeterminate; strongest claim is not forced.
- Next general phase: Phase C interdisciplinary synthesis into one minimal causal process before final Project instructions/file architecture.
