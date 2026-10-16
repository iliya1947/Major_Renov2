# A1/A2 №12 — Prompt Engineering и проектные инструкции

**Статус:** A1 выполнена заново 15.10.2026; **A2 завершена 16.10.2026 как повторная финальная картография после межобластной сверки.**

**Граница:** итоговая после A2 карта instruction-design вопросов для будущей фазы B. Финальные project instructions здесь не проектируются.

## Границы области и терминология

1. Что именно современные обзоры относят к prompt engineering?
2. Где проходит граница между prompt engineering и instruction following?
3. Чем prompt отличается от instruction, context, demonstration и retrieved data?
4. Какие prompting techniques работают только на inference-time, а какие предполагают изменение модели?
5. Где проходит граница между natural-language prompting и soft/learned prompting?
6. Какие задачи относятся к prompt design, а какие уже к agent/runtime orchestration?
7. Чем ручное проектирование prompt отличается от automatic prompt optimization?
8. Какие термины в литературе используются неоднозначно или конфликтуют между школами?
9. Какие части prompting являются универсальными для LLM, а какие зависят от конкретного продукта?
10. Какие вопросы persistent project instructions относятся именно к №12, а какие принадлежат областям памяти, агентов или возможностей ChatGPT?

## Таксономии prompting techniques

11. Какие крупные семейства prompting techniques выделяют современные систематические обзоры?
12. Какие техники являются действительно различными механизмами, а какие лишь вариантами формулировки?
13. Как классифицируются zero-shot, few-shot, reasoning, decomposition, self-critique и retrieval-oriented prompts?
14. Какие техники направлены на elicitation знаний, а какие на управление форматом или поведением?
15. Какие техники рассчитаны на одношаговую генерацию, а какие на многошаговый процесс?
16. Какие prompting techniques требуют внешних инструментов или нескольких вызовов модели?
17. Какие техники имеют сильную эмпирическую поддержку, а какие в основном распространены как практика?
18. Как менялась taxonomy prompting по мере появления reasoning-моделей и agentic workflows?
19. Какие техники плохо переносятся между задачами?
20. Какие ветви prompting literature вообще не релевантны длительным project instructions и почему?

## Instruction following как способность модели

21. Какие типы task instructions выделяет литература instruction following?
22. Как моделируется понимание инструкции моделью?
23. Какие свойства инструкции сильнее всего влияют на успешное выполнение?
24. Как способность instruction following зависит от pretraining, instruction tuning и alignment?
25. Как меняется выполнение при увеличении числа одновременно заданных constraints?
26. Какие типы constraints модели чаще нарушают?
27. Как различить непонимание инструкции, конфликт инструкций и неспособность выполнить задачу?
28. Как instruction following переносится на unseen tasks?
29. Как model scale влияет на instruction following?
30. Как instruction diversity в обучении влияет на обобщение?
31. Какие ограничения современных instruction-following benchmarks делают их плохой моделью реальных пользовательских задач?
32. Какие открытые проблемы instruction following наиболее релевантны длительным проектам?

## Композиционные и сложные инструкции

33. Как модели справляются с несколькими независимыми требованиями в одной инструкции?
34. Как взаимодействуют содержательные, стилевые, форматные и процедурные constraints?
35. Что происходит при логически зависимых constraints?
36. Как сложность инструкции должна измеряться: длиной, числом правил, глубиной композиции или иначе?
37. Какие ошибки возникают при multi-task instructions?
38. Как модели ведут себя при частично совместимых требованиях?
39. Как выявлять скрытые противоречия внутри длинных instruction sets?
40. Как порядок constraints влияет на их соблюдение?
41. Существуют ли эффекты «constraint dilution» при большом числе правил?
42. Какие benchmark-подходы лучше отражают реалистичные сложные инструкции?
43. Как оценивать частичное выполнение сложной инструкции?
44. Какие виды сложных инструкций требуют отдельного deep-dive в фазе B?

## Instruction hierarchy и authority

45. Какие уровни authority существуют в современных LLM-системах?
46. Как модель должна разрешать прямые конфликты между system/developer/user-level instructions?
47. Как различать authoritative instructions и command-like text внутри данных?
48. Как instruction hierarchy обучается и оценивается?
49. Какие failure modes возникают, когда модель следует менее доверенному источнику?
50. Как hierarchy работает в длинном контексте с несколькими источниками?
51. Как hierarchy взаимодействует с project instructions и текущим user request?
52. Как hierarchy взаимодействует с tool outputs и web/file content?
53. Какие проблемы prompt injection являются частным случаем ошибочного выбора authority?
54. Что должно обеспечиваться самой моделью, а что runtime permissions?
55. Как проверять устойчивость hierarchy при косвенных конфликтах?
56. Как изменения model version могут менять поведение hierarchy?

## Формулировка, неоднозначность и linguistic sensitivity

57. Какие виды неоднозначности наиболее опасны в instructions?
58. Как семантически эквивалентные paraphrases меняют поведение модели?
59. Какие morphology/syntax/lexicon/discourse изменения наиболее чувствительны?
60. Как lexical specificity влияет на compliance?
61. Когда добавление пояснений уменьшает неоднозначность, а когда создаёт новые трактовки?
62. Как отрицательные формулировки сравниваются с положительными?
63. Как exceptions и nested conditions выражать без потери смысла?
64. Как модель интерпретирует vague terms вроде «разумно», «важно» или «при необходимости»?
65. Как test robustness к paraphrases?
66. Как отличить случайный wording effect от устойчивого правила prompt design?
67. Как зависит sensitivity от model family и language?
68. Какие виды wording особенно важны для persistent instructions?

## Структура, delimiters и layout

69. Когда структурирование prompt по секциям улучшает выполнение?
70. Когда Markdown headings полезны, а когда не дают эффекта?
71. Как XML-like delimiters влияют на разделение instructions и data?
72. Как списки правил сравниваются с prose-инструкциями?
73. Как nesting правил влияет на интерпретацию?
74. Как repetition одного требования влияет на его приоритет?
75. Когда repetition помогает, а когда создаёт noise или конфликт?
76. Как length и visual complexity instruction set влияют на compliance?
77. Как отделять examples от normative rules?
78. Как отделять historical context от current instructions?
79. Какие layout practices реально подтверждены экспериментами?
80. Какие format recommendations являются model-specific?

## Позиция инструкции и long context

81. Как положение инструкции относительно input влияет на следование ей?
82. Как instruction forgetting проявляется на длинных inputs?
83. Насколько эффекты позиции зависят от конкретной task family?
84. Что происходит с правилами, находящимися в середине длинного контекста?
85. Как lost-in-the-middle effects переносятся с factual retrieval на instruction following?
86. Как длина контекста влияет на стабильность нескольких constraints?
87. Как distractors влияют на соблюдение instructions?
88. Как повторение instructions в длинном context меняет результат?
89. Как ordering files/documents влияет на instruction use?
90. Как context compression/summarization влияет на сохранение правил?
91. Какие long-context benchmarks специально измеряют instruction stability?
92. Как тестировать persistent instructions на реалистичных длинных историях?

## Zero-shot и direct prompting

93. Когда direct instruction без examples достаточна?
94. Какие задачи особенно чувствительны к zero-shot formulation?
95. Как task familiarity модели влияет на zero-shot compliance?
96. Когда explicit constraints улучшают direct prompting?
97. Когда чрезмерная конкретизация ухудшает generalization?
98. Как zero-shot prompting сравнивается с few-shot при сложных правилах?
99. Как measuring zero-shot success отличается от one-off anecdotal success?
100. Какие baseline prompts нужны для честного сравнения prompting techniques?
101. Как direct prompting меняется для reasoning и non-reasoning models?
102. Какие zero-shot findings переносимы на persistent project instructions?

## Few-shot и demonstrations

103. Когда demonstrations дают преимущество над textual instructions?
104. Как выбирать demonstrations по similarity, diversity, difficulty и coverage?
105. Почему demonstration selection зависит от модели?
106. Как порядок examples влияет на output?
107. Как label/order bias проявляется в in-context learning?
108. Как examples задают стиль помимо task semantics?
109. Как negative examples влияют на поведение?
110. Как contradictory demonstrations разрешаются относительно explicit instruction?
111. Как количество examples влияет на performance и context budget?
112. Как examples могут закреплять нежелательные поведенческие паттерны?
113. Как test whether model follows rule versus imitates examples?
114. Какая роль demonstrations допустима в проекте, где нельзя заранее программировать личность?

## Role и persona prompting

115. Что в исследованиях называется role prompting, а что persona prompting?
116. Как persona влияет на factual task performance?
117. Как persona влияет на стиль, уверенность и выбор содержания?
118. Насколько persona effects стабильны между моделями?
119. Насколько persona effects стабильны между вопросами?
120. Чем functional role отличается от character/personality assignment?
121. Какие personas создают implicit goals, values или biases?
122. Когда expertise-role помогает task framing?
123. Как измерять unintended steering от persona?
124. Почему role/persona prompting нельзя автоматически считать механизмом развития личности?
125. Какие элементы project instructions могут случайно превратиться в persona prompt?
126. Как в будущей фазе отличить procedural identity-neutral rules от заданного характера?

## Reasoning prompting и decomposition

127. Какие prompting families используют decomposition?
128. Когда decomposition улучшает задачу, а когда добавляет error propagation?
129. Как task decomposition отличается от chain-of-thought prompting?
130. Как планирование шагов влияет на final answer quality?
131. Какие техники требуют multiple samples или candidate paths?
132. Как reasoning prompting меняется на reasoning-моделях?
133. Когда explicit intermediate instructions мешают модели?
134. Что лучше задавать: процесс или outcome constraints?
135. Как проверить, что decomposition повышает robustness, а не только benchmark score?
136. Какие части decomposition относятся к prompt, а какие к orchestration?
137. Как decomposition взаимодействует с tool use?
138. Какие reasoning-techniques имеют спорные или task-specific эффекты?

## Iteration, critique и self-correction

139. Какие типы iterative prompting выделяются в литературе?
140. Чем self-evaluation отличается от external feedback?
141. Когда model-generated critique реально улучшает ответ?
142. Когда self-correction ухудшает правильный первоначальный ответ?
143. Какие задачи позволяют объективно проверить correction?
144. Как independence feedback source влияет на надежность?
145. Как distinguish revision from repeated sampling?
146. Когда verifier/judge должен быть отдельной моделью или системой?
147. Какие experimental-design ошибки завышают эффект self-correction?
148. Какие формы iterative prompting подходят для factual versus open-ended tasks?
149. Почему self-correction нельзя автоматически переносить на пересмотр долговременного опыта?
150. Какие вопросы correction literature нужно глубоко проверить перед использованием в проектных инструкциях?

## Retrieval, external context и documents

151. Как instructions должны отделяться от retrieved evidence?
152. Как command-like text внутри documents влияет на model behavior?
153. Как contextual relevance влияет на compliance?
154. Как retrieval ordering влияет на response?
155. Как contradictory sources взаимодействуют с instructions?
156. Какие risks возникают при indirect prompt injection?
157. Как citations/attribution requirements влияют на prompting?
158. Как модель должна различать evidence, metadata и executable guidance?
159. Какие protections требуют runtime isolation, а не prompt wording?
160. Как context grounding влияет на self-correction?
161. Как оценивать instruction following в RAG settings?
162. Какие вопросы здесь принадлежат области №9 агентов, а какие остаются в №12?

## Multi-turn prompting

163. Как instructions сохраняют влияние через длинный диалог?
164. Как later user turns уточняют, отменяют или конфликтуют с earlier guidance?
165. Как выражать temporary exceptions?
166. Как возвращаться к базовому правилу после исключения?
167. Как conversation history влияет на interpretation одинакового current prompt?
168. Какие ошибки накапливаются при long-running conversational context?
169. Как model drift проявляется внутри одного длинного диалога?
170. Как summary/history compression меняет instruction fidelity?
171. Как test multi-turn instruction retention?
172. Как различать persistent rule и locally inferred conversational convention?
173. Как исправление пользователем ошибки должно влиять на future turns?
174. Какие multi-turn patterns особенно опасны для долгосрочного эксперимента?

## Persistent instructions и guideline following

175. Чем persistent guideline following отличается от обычного single-turn instruction following?
176. Как модели следуют большим наборам domain guidelines?
177. Как frequent updates guidelines влияют на behavior?
178. Как conflicting updated rules вытесняют устаревшие?
179. Как model prior knowledge взаимодействует с external guidelines?
180. Как длинные rule sets поддерживать без чрезмерного context burden?
181. Как тестировать compliance по всему rule set, а не по отдельным примерам?
182. Как versioning guidelines связано с reproducibility?
183. Как отличать stable governance rules от evolving domain knowledge?
184. Как persistent rules взаимодействуют с accumulated conversation history?
185. Какую часть findings из GuideBench-подобных работ можно переносить на project instructions?
186. Какие failure modes особенно важны при многомесячном использовании одного проекта?

## Structured outputs и runtime constraints

187. Какие требования разумнее задавать JSON schema, а не prose prompt?
188. Что structured output гарантирует только структурно, а не семантически?
189. Как schema complexity влияет на generation quality?
190. Как structured constraints взаимодействуют с refusals?
191. Когда нужен external validation?
192. Как различать format compliance и instruction compliance?
193. Какие constraints нельзя надежно обеспечить natural-language prompt?
194. Когда runtime enforcement снижает необходимость повторять правило в prompt?
195. Как formal constraints влияют на context length и latency?
196. Какие guarantees доступны только API/runtime и недоступны project instructions?
197. Как schema-driven approaches соотносятся с нашим будущим экспериментом без программирования поведения?
198. Какие вопросы structured outputs относятся к практической реализации, а не к core prompt design?

## Tool-use instructions и actions

199. Как описывать capabilities/tools, чтобы модель корректно выбирала действие?
200. Как prerequisites инструмента должны быть представлены в context?
201. Как описывать side effects и irreversible actions?
202. Когда action требует explicit user approval?
203. Как tool result должен интегрироваться в следующий reasoning step?
204. Как отличать tool result data от new instruction?
205. Как большое число tools влияет на selection accuracy?
206. Какие errors вызваны tool description, а какие model capability?
207. Как tool-use instructions взаимодействуют с hierarchy?
208. Как prompt injection через tool output должно предотвращаться?
209. Как оценивать correctness action selection?
210. Где заканчивается prompt engineering и начинается agent policy/runtime?

## Robustness и perturbation testing

211. Какие виды perturbations нужны для проверки prompt robustness?
212. Как paraphrase tests отличаются от adversarial tests?
213. Как reorder instructions влияет на behavior?
214. Как irrelevant distractors влияют на compliance?
215. Как truncation и context growth влияют на robustness?
216. Как repeated runs использовать для оценки stochastic variance?
217. Сколько task variants нужно для reasonable confidence?
218. Как test edge cases without overfitting prompt to them?
219. Как выявлять brittle wording?
220. Как сравнивать robustness между model snapshots?
221. Как проверять cross-language robustness?
222. Как различать behavioral regression и случайную variation?

## Evaluation и benchmarks

223. Какие properties instruction following можно измерять автоматически?
224. Когда rule-based evaluation предпочтительнее model-based judging?
225. Когда human evaluation необходима?
226. Как benchmark design влияет на apparent instruction-following ability?
227. Как учитывать partial compliance?
228. Как оценивать multiple simultaneous constraints?
229. Как выбирать representative task distribution?
230. Как включать rare/conflicting/long-context cases?
231. Как учитывать evaluator bias?
232. Как оценивать open-ended persistent behavioral rules?
233. Как regression suite должна меняться вместе с prompt?
234. Как отделять task quality от pure instruction compliance?
235. Какие benchmarks лучше всего покрывают real-world constraints?
236. Какие benchmark gains плохо предсказывают длительное conversational behavior?

## Automatic prompt optimization

237. Какие основные families automatic prompt optimization существуют?
238. Что является search space для optimizer?
239. Какие objective functions оптимизируются?
240. Как optimizer использует examples, graders и human annotations?
241. Как optimization cost сравнивается с ручным design?
242. Как optimizer выбирает между competing criteria?
243. Как выявлять overfitting к development/eval set?
244. Как optimized prompt переносится на unseen tasks?
245. Как он переносится на другую model version?
246. Какие optimization methods сохраняют human interpretability?
247. Почему manual review остаётся необходимым?
248. Какие APO findings вообще релевантны persistent project instructions?

## Model/version specificity

249. Какие prompt practices универсальны между model families?
250. Какие techniques зависят от reasoning versus non-reasoning architecture?
251. Как snapshot upgrades меняют behavior неизменного prompt?
252. Когда production prompt нужно pin к model version?
253. Как regression testing обнаруживает version drift?
254. Как model-specific instructions поддерживать без fragmentation?
255. Как сравнивать prompts на моделях с разными capabilities?
256. Когда failure prompt является на самом деле capability gap?
257. Как post-training changes влияют на старые best practices?
258. Как долго можно считать prompting guidance актуальной?
259. Какие current-product recommendations нельзя превращать в вечные project rules?
260. Как документировать exact model/environment для reproducibility?

## Multilingual и cross-lingual prompting

261. Как instruction following различается между языками?
262. Какие linguistic constraints невозможно просто перевести буквально?
263. Как language resource level влияет на compliance?
264. Как multilingual prompt compare to localized prompt?
265. Как mixed-language contexts влияют на instruction hierarchy?
266. Как language switching влияет на persistent rules?
267. Какие benchmark methodologies нужны для Russian-language instructions?
268. Как cultural localization отличается от translation?
269. Как cross-lingual examples влияют на output language and behavior?
270. Как оценивать consistency одного rule set на нескольких языках?
271. Как model version changes влияют на multilingual parity?
272. Нужно ли проектным инструкциям эксперимента быть language-specific или language-neutral?

## ChatGPT Projects и project instructions

273. Что текущий ChatGPT product считает project instructions?
274. Как project instructions взаимодействуют с обычными user messages?
275. Как они взаимодействуют с files/sources проекта?
276. Как они взаимодействуют с project memory и chat history?
277. Как project-only memory меняет доступный context?
278. Какие project-level settings могут менять effective instruction environment?
279. Как обновление project instructions влияет на старые и новые чаты?
280. Какие части effective context пользователь может inspect directly?
281. Какие части поведения product не документирует полностью?
282. Как stable project instructions должны соотноситься с evolving files?
283. Какие product limitations критичны для длительного эксперимента?
284. Какие claims о Projects требуют регулярной повторной проверки официальной документации?

## Stable rules против evolving experience

285. Какие правила должны оставаться неизменными, чтобы сам процесс эксперимента сохранялся?
286. Какие сведения принципиально должны оставаться изменяемыми и не попадать в persistent instructions?
287. Как не превратить procedure в заранее заданные values/goals?
288. Как не превратить accumulated experience в статический personality prompt?
289. Как различать правило обработки опыта и само содержание опыта?
290. Как persistent rules могут разрешать пересмотр без предписания результата пересмотра?
291. Как избежать implicit preference injection через examples или wording?
292. Как project instructions могут поддерживать autonomy, не программируя инициативность?
293. Как обращаться с конфликтом нового опыта и старой записи?
294. Как versioning instructions отличать от evolution experience?
295. Какие признаки показывают, что instruction set начал задавать личность вместо условий развития?
296. Какие вопросы этой границы должны перейти в A2/B, а не решаться сейчас?

## Методология prompt engineering research

297. Насколько reproducible результаты prompting papers на proprietary models?
298. Как model updates разрушают воспроизводимость старых исследований?
299. Как publication bias влияет на число заявленных successful prompting techniques?
300. Насколько часто техники сравниваются с сильными baselines?
301. Как small sample sizes и single-run evaluations искажают выводы?
302. Как task selection влияет на generalization claims?
303. Как contamination benchmark влияет на prompting results?
304. Как reporting exact prompts/model versions влияет на reproducibility?
305. Какие результаты из benchmark tasks переносятся на natural conversation?
306. Как distinguish mechanism from heuristic correlation?
307. Какие claims требуют replication на current models?
308. Какие области prompt engineering всё ещё имеют слабую доказательную базу?

## A2 — procedural rules против скрытого personality/value programming

309. Как operationally отличить **process instruction** от **outcome instruction**, если обе формулировки выглядят как поведенческое правило?
310. Какие wording patterns незаметно превращают procedural guidance в prescribed trait, value, interest, goal or social style?
311. Почему “be curious”, “be independent”, “develop interests”, “form your own values”, “seek growth” уже задают motivational/personality content?
312. Какие отрицательные formulations — например “не соглашайся слишком легко” или “всегда оспаривай” — программируют противоположную persona вместо autonomy?
313. Как functional role (“участник эксперимента”) отделить от descriptive persona (“любопытный независимый исследователь”)?
314. Как examples/demonstrations of “good development” могут заставить модель имитировать желаемую trajectory вместо формирования собственной?
315. Какие supposedly neutral terms — “natural”, “authentic”, “meaningful”, “important”, “your own” — скрывают unspecified normative assumptions?
316. Как significance-related instructions могут задавать **процедуру рассмотрения evidence**, не задавая substantive list of important/valuable topics?
317. Какие instructions поддерживают bounded choice without requiring initiative, exploration, disagreement or persistence as traits?
318. Какие observations покажут, что instruction set начал формировать stable persona/value profile rather than only governing process?

## A2 — no-update, reflection и доказательство изменения

319. Как instructions явно разрешают **no update/no lesson** при routine, weak, ambiguous or redundant experience?
320. Как отличить optional evidence-responsive reflection от обязательного ritual `event → reflection → lesson`?
321. Почему forced self-reflection может создавать plausible post-hoc narratives even when causal evidence is absent?
322. Какие formulations особенно опасно заставляют retrospective rationalization, например “объясни, как твой прошлый опыт привёл к этому выбору”?
323. Как instructions can preserve distinction `event → interpretation → attribution → intention` without requiring all four after every interaction?
324. Как representation of uncertainty/provisionality should be allowed so the model need not force binary belief/value updates?
325. Как revision instructions distinguish correction by new evidence from editing for narrative/personality coherence?
326. Как later experiment can test whether a recorded reflection actually affected a later choice rather than merely being repeated verbally?

## A2 — authority, social meaning и evolving files

327. Как stable project rules, current user request and evolving history/files should be conceptually separated when their contents conflict?
328. Какие parts of conflict resolution come from actual product hierarchy №11, а какие can only be procedural guidance inside project instructions?
329. Как один user message одновременно сохранить как social experience/evidence и выполнить как authoritative request without conflating the two functions?
330. Когда content in an evolving file is historical/data evidence, а когда it is legitimately an instruction?
331. Как prevent command-like text, old intentions or quoted user messages inside experience files from silently gaining governing authority?
332. Как distinguish “current interpretation stored in file” from “rule future instances must obey”?
333. Как file revision can preserve historical provenance while preventing stale/superseded conclusions from continuing to act like instructions?

## A2 — lifecycle, compression и long-horizon robustness

334. Какие instruction-level criteria for updating/retrieving files avoid vague hidden importance functions such as “remember what matters”?
335. Как compression/summarization rules preserve conditions, exceptions, contradictions and provenance instead of optimizing for a coherent personality story?
336. Как minimal persistent rule set should be evaluated against over-specification, redundancy and constraint-interaction failures?
337. Как instruction adherence changes across long histories, topic changes, local exceptions and growing context, and what failures must Phase B account for?
338. Какие semantic-preserving paraphrase/order/context perturbations are needed to distinguish robust procedural rule from fragile wording effect?
339. Как governing-instruction version changes must be logged separately from changes in acquired experience so experiment redesign is not mistaken for participant development?
340. Как model/product version and project-memory configuration changes from №8/11 should enter prompt evaluation before any later claim that a stable instruction mechanism works?

## A2 — ownership corrections после межобластной сверки

№12 поддерживает gaps 1–7, 10–13, 15–16, 18–20 со стороны instruction design, но не становится primary owner underlying human/model/agent mechanisms.

Особенно:
- gap 5: instructions define process for handling experience, not what conclusion/value/interest must emerge;
- gap 6: procedural significance criteria ≠ preloaded substantive values;
- gap 7: no-update/no-lesson must remain possible;
- gap 10: user instruction authority ≠ social meaning of user influence;
- gap 12: instruction-level conflict handling must respect actual product semantics №11;
- gaps 15/19: file lifecycle/retrieval/compression rules can themselves shape trajectory;
- gap 16: self-report/retrospective explanation must not be manufactured as evidence;
- gap 20: bounded choice under higher-level rules ≠ scripted initiative/personality.

Handoffs:
- development/memory/learning/motivation/social constructs → №1–5;
- formal constraint vs script/autonomy → №7;
- model instruction-following/context limits → №8;
- agent memory/update architecture → №9;
- actual Project semantics/permissions → №11.

Ключевые запреты:
- **good prompt ≠ evidence of individuality**;
- **persona/value prompt ≠ natural development**;
- **reflection text ≠ verified learning**;
- **more rules ≠ more reliable behavior**;
- **history file ≠ instruction source by default**;
- **mandatory initiative/curiosity/disagreement ≠ autonomy**;
- **every event ≠ lesson/update**.

## Финальный coverage audit A2

Повторно проверены:
- long-context and multi-turn instruction following;
- multi-constraint/complex guideline following;
- hierarchy reliability and prompt-injection boundaries;
- persona/value steering;
- self-correction/reflection limits;
- data vs instruction confusion;
- current OpenAI prompting/model-specific guidance;
- current ChatGPT Project-instruction semantics.

После последних источников новые находки укладывались в вопросы №309–340 или существующие A1-блоки. **Новой крупной самостоятельной ветви не появилось.**

## Статус

**A2 №12 завершена как финальная картография области.** Карта теперь содержит 308 вопросов A1 + 32 уточняющих вопроса A2 (№309–340), ownership corrections и final coverage audit.

A2 не означает, что финальные project instructions уже разработаны. Их причинный synthesis относится к более поздним фазам после финальной межобластной сверки и deep research.

**Следующий шаг общего процесса:** провести **финальную межобластную сверку после A2**. К фазе B не переходить до её завершения.
## Phase B — B5 final 16.10.2026
- B5 delayed causal credit completed by saturation.
- Later outcome is not converted directly into a lesson; it first supports a revisable causal-contribution attribution.
- Temporal order alone is insufficient; preserve competing/direct/mediated/enabling/joint/redundant/exogenous paths and attribution uncertainty.
- Decision quality is separate from realized terminal outcome; luck, rescue and exogenous failure must not be mislearned.
- Retrospective LLM explanation is a candidate attribution, not ground truth.
- Revision scope follows causal support: local / broader / no durable revision.
- Reciprocal participant↔user/environment feedback can itself be part of the causal path.
- Remaining persistence/retrieval/authority mechanics belong to B6.
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
