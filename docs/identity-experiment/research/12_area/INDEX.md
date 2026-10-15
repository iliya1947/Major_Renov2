# A1 №12 — Prompt engineering и проектные инструкции

**Статус:** A1 в процессе первичной картографии 15.10.2026.

**Цель:** определить, какие направления prompt/instruction design необходимо будет исследовать глубоко позже. Здесь не составляется финальный prompt будущего эксперимента и не утверждаются project instructions.

## 1. Что считать prompt engineering

1. Какие определения prompt и prompt engineering используются в современной literature?
2. Чем prompt engineering отличается от instruction following?
3. Чем prompt design отличается от prompt optimization?
4. Чем manual prompting отличается от automatic prompt optimization?
5. Какие prompt components считаются instructions, context, examples, data, output contract?
6. Где проходит граница между prompt engineering and orchestration?
7. Чем prompt engineering отличается от fine-tuning?
8. Чем prompt engineering отличается от retrieval augmentation?
9. Как prompt engineering changes across text, multimodal and agentic settings?
10. Какие claims о “prompt effectiveness” task-, model- and version-specific?

## 2. Instruction types and task specification

11. Какие instruction types различаются: goals, constraints, process guidance, output requirements, style, permissions?
12. Чем task instruction отличается от contextual information?
13. Как explicit constraints отличаются от implicit expectations?
14. Как positive instructions отличаются от prohibitions?
15. Как hard constraints отличаются от preferences?
16. Как multiple simultaneous constraints represented?
17. Как task semantics can be specified by natural language versus examples?
18. Как instruction specificity affects model latitude?
19. Когда underspecification useful versus harmful?
20. Как instruction granularity влияет на compositional following?

## 3. Instruction hierarchy and authority

21. Какие instruction levels exist in OpenAI chain of command?
22. Как system/developer/user/tool authority differs from prompt position?
23. Что happens when instructions at same authority conflict?
24. Как lower-authority content should be treated when it contradicts higher authority?
25. Как quoted/retrieved text distinguished from authoritative instruction?
26. Как instruction hierarchy interacts with conversation history?
27. Как tool outputs can contain untrusted instruction-like text?
28. How well do models actually follow authority hierarchy under conflict?
29. Как hierarchy failures differ from general instruction-following failures?
30. Какие hierarchy behaviors are model-trained versus prompt-engineered?

## 4. System/developer/project-level persistent guidance

31. What properties belong in persistent high-level instructions rather than per-turn prompts?
32. How should stable rules differ from task-specific details?
33. What happens when persistent instructions grow over time?
34. How does repeated guidance interact with newer model behavior?
35. How can persistent instructions become stale?
36. How should contradictions inside one instruction set be detected?
37. How should priority among rules be made explicit?
38. How does project-level instruction differ from ordinary user prompt?
39. How do product-specific persistent instructions complicate cross-model portability?
40. How should persistent instructions be versioned and audited?

## 5. Clarity, specificity and ambiguity

41. What kinds of ambiguity most affect instruction following?
42. How does semantic ambiguity differ from missing constraints?
43. When does adding detail improve performance?
44. When does adding detail create overconstraint or contradiction?
45. How does vague language interact with model defaults?
46. How should exceptions be specified?
47. How should conditional rules be worded?
48. How does ambiguous referent resolution affect long instructions?
49. How can multiple interpretations be surfaced without unnecessary clarification?
50. What prompt properties make evaluation criteria themselves ambiguous?

## 6. Structure, delimiters and segmentation

51. How do markdown headings, XML tags, quotes and delimiters affect parsing?
52. When do delimiters reduce instruction/context confusion?
53. How should long context be segmented into roles, rules, data and examples?
54. Does markup improve reliability consistently across models?
55. How does nested structure affect instruction following?
56. When do too many sections increase cognitive/context overhead?
57. How do explicit labels like <instructions> and <context> alter behavior?
58. How should untrusted external text be delimited?
59. How does delimiter choice interact with prompt injection?
60. How should structured prompt templates be tested across models?

## 7. Output contracts

61. What is an output contract?
62. How do natural-language format requests differ from schema-constrained outputs?
63. How should required sections/order be specified?
64. How do exact length limits affect compliance?
65. How do word, sentence, token and character limits differ operationally?
66. How should optional versus required fields be marked?
67. How do conflicting format/content constraints get resolved?
68. How does strict output formatting affect content quality?
69. When should format be enforced by runtime/schema instead of prompt?
70. How should format compliance be evaluated separately from semantic quality?

## 8. Zero-shot prompting

71. What counts as zero-shot prompting?
72. How much task information is needed without demonstrations?
73. Which tasks benefit little from examples?
74. How do model priors dominate under sparse instructions?
75. How does zero-shot performance depend on instruction phrasing?
76. How does zero-shot prompting differ across reasoning and GPT-style models?
77. What kinds of constraints are reliably followed zero-shot?
78. How should zero-shot prompts be evaluated for robustness?
79. When does adding examples improve versus distort the task?
80. How should zero-shot prompts handle unusual/counterintuitive rules?


## 9. Few-shot prompting and demonstrations

81. What counts as a demonstration in few-shot prompting?
82. How many demonstrations are useful before returns diminish?
83. How does demonstration quality affect task induction?
84. How does demonstration diversity affect generalization?
85. How does similarity between demonstrations and query affect performance?
86. How do mislabeled or noisy examples influence task inference?
87. How do examples interact with explicit natural-language instructions?
88. When can examples override or distort written rules?
89. How does demonstration formatting matter?
90. How should counterexamples or negative examples be used?

## 10. Demonstration selection and ordering

91. How should examples be selected from a larger candidate pool?
92. How do semantic similarity and task coverage differ as selection criteria?
93. How model-dependent is optimal demonstration selection?
94. How does example order change predictions?
95. What are primacy and recency effects among demonstrations?
96. How should edge cases be represented in example sets?
97. Can demonstration selection itself be dynamic or query-dependent?
98. How does uncertainty guide example selection?
99. How reproducible are gains from optimized example order?
100. When does example optimization overfit an evaluation set?

## 11. Role and persona prompting

101. What distinct uses of role prompts exist: expertise, style, social simulation and task framing?
102. Does assigning an expert role reliably improve objective task performance?
103. How do irrelevant persona details affect outputs?
104. How does persona fidelity differ from performance advantage?
105. How does persona prompting affect style versus problem solving?
106. How stable is persona behavior across turns?
107. How do personas interact with factuality and confidence?
108. When does a role prompt create unwanted stereotypes?
109. How do neutral prompts compare with persona prompts?
110. Why must persona prompting be distinguished from acquired identity?

## 12. Intermediate-reasoning and rationale prompting

111. What families of intermediate-reasoning prompts are distinguished?
112. How do demonstration-based and zero-example rationale prompts differ?
113. Which task classes benefit from explicit intermediate steps?
114. How do model family and scale affect usefulness?
115. How important is correctness of demonstration rationales?
116. How important are relevance and ordering of rationale steps?
117. When can explicit rationale generation reduce performance?
118. How do reasoning models differ in recommended prompting from non-reasoning GPTs?
119. How should rationale quality be evaluated separately from answer correctness?
120. When is generated rationale not a faithful explanation of the process producing the answer?


## 13. Decomposition and staged task execution

121. When should a complex task be decomposed into subproblems?
122. How does staged prompting differ from one-pass generation?
123. How does plan-first prompting differ from direct execution?
124. How does explicit planning affect missing-step errors?
125. When can decomposition create error propagation?
126. How should dependencies among subproblems be represented?
127. How does decomposition interact with external tools?
128. When should plan creation and execution be separated?
129. How should plans be revised after new information?
130. Which decomposition gains are task-specific rather than general?


## 14. Multiple-candidate prompting

131. When is it useful to generate several candidate solution paths?
132. How do several candidate paths differ from a single pass?
133. How many candidates are useful before cost dominates?
134. How should candidate outputs be compared?
135. How should stopping criteria be defined?
136. How does candidate-generation cost scale with task complexity?
137. When do extra candidates add little value?
138. How do external checks change selection reliability?
139. What happens when generation and selection use closely related models?
140. How should multi-candidate prompting be separated from full agent planning?


## 15. Repeated-sample and ensemble prompting

141. When can generating multiple answers improve reliability?
142. How does output diversity affect aggregate quality?
143. How many repeated generations are useful before cost dominates?
144. How do decoding settings affect answer diversity?
145. How should conflicting answers be combined?
146. How can voting fail when errors are correlated?
147. When do repeated-generation methods become inefficient?
148. How do heterogeneous prompt/model ensembles compare with repeated sampling?
149. How should aggregate confidence be estimated?
150. Which gains remain on newer and stronger models?


## 16. Iterative output revision

151. When does a second pass improve an earlier answer?
152. How does review before finalization differ from later revision?
153. How does targeted revision differ from full regeneration?
154. Which tasks support reliable checking using only task-internal evidence?
155. How does external evidence change revision success?
156. How can repeated revision preserve an initial error?
157. How should suggested changes be evaluated independently from final output?
158. When should iterative revision stop?
159. How does revision interact with fixed output constraints?
160. How does prompt-level revision differ from long-term agent learning in area №9?


## 17. Проверка качества ответов

161. Какие способы оценки ответов применяются при разработке инструкций?
162. Чем оценка одного ответа отличается от попарного сравнения?
163. Как критерии оценки влияют на стабильность результатов?
164. Как разделять несколько критериев качества?
165. Как длина и порядок вариантов влияют на оценку?
166. Какие ошибки могут повторяться и при генерации, и при проверке?
167. Как программные проверки дополняют языковую оценку?
168. Когда нужны эталонные ответы?
169. Как учитывать неопределённость оценки?
170. Когда автоматической проверки недостаточно?


## 18. Retrieval-grounded prompting

171. How should retrieved evidence be presented to a model?
172. How should source material be separated from task instructions?
173. How does evidence ordering affect answer quality?
174. How many retrieved passages should be included?
175. How should conflicting sources be represented?
176. How should source provenance be retained?
177. How can prompts require abstention when sources are insufficient?
178. How does citation guidance affect factuality?
179. How do retrieval failures interact with instruction failures?
180. When should retrieval be repeated or the query reformulated?


## 19. Long-context prompt design

181. Where should instructions appear relative to long documents?
182. How does instruction position affect compliance?
183. When does repeating an instruction at strategic positions help or hurt?
184. How does relevant-information position affect task success?
185. How should long documents be segmented?
186. How do distractors interact with instruction following?
187. When does summarization improve versus damage context?
188. How should multiple documents be ordered?
189. How do long prompts trade completeness against attention dilution?
190. How should effective context use be measured rather than nominal window size?


## 20. Multi-turn and stateful prompting

191. How should persistent rules be separated from turn-specific requests?
192. How do earlier messages continue to constrain later turns?
193. When should a newer same-level instruction override an older preference?
194. How should temporary exceptions be scoped?
195. How should conversation summaries preserve instruction state?
196. How does accumulated context create contradictory guidance?
197. How should completed tasks reset or retain conversational assumptions?
198. How do branched conversations alter inherited context?
199. How can multi-turn prompting avoid silent state drift?
200. What must be recorded to reproduce a stateful prompting result?


## 21. Dynamic and context-dependent prompt construction

201. When should an instruction set vary by task, query or context?
202. How does dynamic routing differ from one fixed instruction template?
203. How should task metadata and user-supplied variables influence prompt construction?
204. When should optional prompt sections be activated conditionally?
205. How should retrieved policies or task rules enter a dynamically built prompt?
206. How do generated prompts differ from hand-authored dynamic templates?
207. How can dynamic construction create silent behavior drift?
208. What must be logged to reproduce a dynamically assembled prompt?
209. How can automatic adaptation of prompts overfit recent cases?
210. Which rules should remain stable while task-specific details vary?

## 22. Templates, variables and modularity

211. How does a reusable template differ from a literal one-off prompt?
212. How should typed variables be represented?
213. How should variable content be separated from fixed instructions?
214. How should missing, empty and null values be handled?
215. How can untrusted variable content alter interpretation of surrounding instructions?
216. How do nested templates affect clarity and maintenance?
217. When are default variable values useful or dangerous?
218. How should changes to variable schemas be versioned?
219. What validation should occur before rendering a prompt?
220. When does template abstraction become harder to understand than explicit text?

## 23. Composition, conflicts and overconstraint

221. How should goals, constraints, examples and output requirements be combined?
222. How should contradictions inside one instruction set be detected?
223. When do redundant instructions reinforce versus interfere?
224. How should priority be expressed among same-level rules?
225. How should exceptions to a general rule be represented?
226. How do independently reasonable instructions interact when combined?
227. When can many prohibitions make behavior brittle?
228. How should an impossible set of constraints be handled?
229. What constitutes graceful behavior under unresolved conflict?
230. How should conflict handling be evaluated systematically?


## 24. Устойчивость к формулировке

231. Насколько результат меняется при перефразировании с сохранением смысла?
232. Как влияют пунктуация и оформление?
233. Как влияют лексические и синтаксические варианты?
234. Насколько результат меняют несущественные подробности?
235. Как влияет порядок инструкций при неизменном смысле?
236. Какие метрики измеряют устойчивость, а не лучший единичный результат?
237. Как строить наборы контролируемых вариантов одной инструкции?
238. Насколько чувствительность зависит от конкретной модели?
239. Как случайность генерации взаимодействует с чувствительностью к формулировке?
240. Как отличать непонимание задачи от чувствительности к форме?


## 25. Cross-version consistency

241. How stable are prompt results across model families?
242. How do preferred task formulations differ across model types?
243. What changes after a model update?
244. How does the same prompt behave across model scales?
245. How portable are prompt patterns across providers?
246. What must be checked when moving to a newer model generation?
247. Which behaviors come from the prompt and which from the model?
248. When do version-specific patterns become obsolete?
249. How should obsolete scaffolding be identified?
250. What comparison tests are needed during a model migration?


## 26. Multilingual and cross-lingual prompting

251. How does instruction language affect compliance?
252. How does requested answer language interact with instruction language?
253. How do mixed-language prompts behave?
254. When are translations semantically equivalent but operationally different?
255. Which constraints require language-specific localization?
256. How does prompting differ for low-resource languages?
257. What script-specific constraints affect instruction following?
258. How do examples transfer across languages?
259. How do cultural references affect prompt equivalence?
260. How should instruction-following quality be compared fairly across languages?

## 27. Structured outputs and runtime constraints

261. When should natural-language format guidance be replaced by a formal schema?
262. What guarantees do schema-constrained outputs provide?
263. How does constrained generation differ from ordinary prompting?
264. How should function or tool arguments be schema-constrained?
265. How does schema complexity affect generation quality?
266. Can strict structural compliance reduce semantic quality?
267. How should refusals or incomplete outputs interact with schemas?
268. What validation should occur outside the model?
269. When should invalid output be retried, repaired or rejected?
270. Which responsibilities belong to runtime constraints rather than prompt wording?


## 28. Instructions around external actions

271. What information about available external capabilities must be present in context?
272. How should a model distinguish among several available capabilities?
273. How should prerequisites and possible consequences be represented?
274. When should an action require explicit user approval?
275. How should the result of an external action be integrated into the next step?
276. How should returned content be distinguished from trusted task guidance?
277. How much descriptive detail is needed for reliable capability selection?
278. How does a large capability set affect selection quality?
279. How should action-selection guidance be evaluated?
280. Which questions belong to agent architecture rather than prompt design?
