# A1/A2 №9 — AI-агенты и когнитивные архитектуры

**Статус:** A1 завершена 15.10.2026; **A2 завершена 16.10.2026 как повторная финальная картография после межобластной сверки.**

**Цель:** определить, какие части исследований AI-агентов, LLM-агентов и когнитивных архитектур необходимо будет исследовать глубоко позже. Здесь не проектируется будущий агент и не выводятся инструкции эксперимента.

## 1. Что считать агентом

1. Какие определения agent используются в классическом AI, cognitive architectures и LLM-agent literature?
2. Какие минимальные свойства отделяют агента от обычного генератора ответов?
3. Обязательны ли perception, action and environment interaction для agenthood?
4. Чем autonomous agent отличается от tool-augmented assistant?
5. Как distinguish reactive, deliberative and hybrid agents?
6. Чем agent loop отличается от одноразового pipeline?
7. Обязана ли агентность включать persistent internal state?
8. Может ли система считаться агентом, если цели полностью задаются извне?
9. Чем агент отличается от workflow/orchestrator?
10. Какие claims об «agency» являются функциональными, а какие антропоморфными?

## 2. Граница LLM ↔ agent system

11. Какие компоненты agent system находятся внутри LLM, а какие во внешнем runtime?
12. Как observation formatting влияет на поведение core model?
13. Как planner, memory, tool executor and evaluator распределяются между model calls и deterministic code?
14. Когда one-model-many-prompts architecture функционально эквивалентна нескольким agents?
15. Как distinguish model capability от orchestration capability?
16. Какие agent properties исчезают при отключении external memory/tools?
17. Как state machine or graph runtime changes agent behavior independently of LLM weights?
18. Как retries, voting and fallback logic влияют на apparent intelligence?
19. Как system-level capability может возникнуть без нового capability core model?
20. Какие границы с областью №8 нужно сохранить, чтобы не дублировать LLM architecture?

## 3. Agent loop: perceive–decide–act–observe

21. Какие variants basic agent loop используются?
22. Чем observation отличается от raw environment state?
23. Как partial observability влияет на agent decision-making?
24. Как агент определяет, когда наблюдений достаточно для действия?
25. Как action result возвращается в deliberation?
26. Как synchronous and asynchronous environments меняют loop?
27. Как long-running actions and delayed feedback обрабатываются?
28. Как агент различает failure, partial success and ambiguous outcome?
29. Как termination condition задаётся or inferred?
30. Как looping/deadlock/failure-to-stop обнаруживаются?

## 4. Perception and state construction

31. Как агент переводит heterogeneous environment signals into usable state?
32. Чем perception memory отличается от long-term memory?
33. Как multimodal observations integrated in agent state?
34. Как state abstraction влияет на planning quality?
35. Как uncertainty in observation represented?
36. Как missing or stale information detected?
37. Когда summarization of observations destroys action-relevant detail?
38. How should provenance of observations be retained?
39. Как contradiction between multiple observations handled?
40. Как agent state differs from world model?

## 5. Goals, tasks and objective representation

41. Как user request превращается в operative agent goal?
42. Чем goal, constraint, preference, success criterion and instruction отличаются?
43. Как multiple goals prioritized?
44. Как conflicting goals resolved?
45. Как agent tracks goal completion across long trajectories?
46. Как hidden or underspecified goals affect behavior?
47. Когда agent may legitimately infer subgoals?
48. Как goal drift detected?
49. Чем self-generated subgoal отличается от self-generated top-level goal?
50. Как task reformulation affects autonomy claims?

## 6. Planning

51. Какие planning forms используются: decomposition, search, symbolic planning, iterative replanning, hierarchical planning?
52. Как task decomposition отличается от actual planning?
53. Чем plan generation отличается от plan selection?
54. Как plan executability evaluated before action?
55. Как completeness, optimality and efficiency trade off?
56. Как plans updated after unexpected observations?
57. What is open-loop vs closed-loop planning?
58. Как long-horizon plans degrade?
59. Как plan representation—natural language, graph, code, formal operators—affects reliability?
60. Когда external classical planner better than LLM-native planning?
61. Как partial-order plans differ from linear plans?
62. Как uncertainty and branching futures represented?
63. Как planning under resource constraints differs from unconstrained decomposition?
64. Как planning failure distinguished from execution failure?

## 7. Reasoning–acting integration

65. Чем ReAct-like interleaving отличается от plan-then-execute?
66. Когда acting provides information needed for reasoning?
67. Как reasoning trace updated after environment feedback?
68. Как action selection differs from verbal reasoning about action?
69. Как agents recover from wrong intermediate assumptions?
70. Как interleaved tool results prevent or amplify hallucinated chains?
71. What is the role of hidden/internal reasoning versus externally stored scratchpads?
72. Как reasoning-action loops evaluated independently of final success?
73. Когда more deliberation causes delay or overthinking?
74. Как reasoning state compressed without losing decision-relevant structure?

## 8. Tool use and action interfaces

75. Какие types tools agents use: search, code, databases, APIs, GUI, communication, physical control?
76. Как tool discovery differs from tool selection?
77. Как tool schemas influence affordance understanding?
78. Как agent chooses among overlapping tools?
79. Как preconditions and side effects represented?
80. Как irreversible actions require different handling from reversible actions?
81. Как tool failure diagnosed?
82. Как retries distinguished from repeated harmful action?
83. Как tool result verification works?
84. Когда agent should ask for permission versus execute autonomously?
85. Как tool composition enables capabilities absent from any single tool?
86. How does tool creation differ from ordinary tool use?

## 9. Memory as an agent subsystem

87. Какие memory taxonomies используются в LLM-agent systems?
88. Чем short-term/in-trial memory отличается от long-term/cross-trial memory?
89. Как episodic, semantic, procedural and reflective memory переводятся в engineering constructs?
90. Что именно является memory item: raw event, summary, fact, trajectory, skill, rule, embedding or graph?
91. Как memory write policy отличается от retrieval policy?
92. Как agent decides what not to store?
93. Как update differs from append-only storage?
94. Как deletion/forgetting affects future behavior?
95. Как contradictory memories reconciled?
96. Как stale memories recognized?
97. Как memory provenance preserved?
98. Как confidence/uncertainty attached to memory?
99. Как memory granularity affects retrieval and abstraction?
100. Как memory budget changes performance?
101. Как memory compression trades fidelity for usability?
102. Как memory systems distinguish observation from interpretation?

## 10. Retrieval and memory use

103. Какие retrieval methods используются: recency, relevance, importance, similarity, graph traversal, learned policies?
104. Как retrieval ranking affects downstream action?
105. Как irrelevant but similar memories cause interference?
106. Как retrieval should handle rare but critical past events?
107. Как query formulation shapes memory access?
108. Когда multiple memories should be jointly retrieved?
109. Как temporal relations preserved during retrieval?
110. Как retrieval failure differs from memory absence?
111. Как agent knows retrieved memory is outdated?
112. Как memory retrieval interacts with current context and plans?
113. Как retrieval latency/token cost trade against completeness?
114. Как experience-following behavior can become excessive imitation of retrieved trajectories?

## 11. Memory consolidation, abstraction and experience

115. Как raw trajectories become reusable abstractions?
116. Чем summarization отличается от semantic abstraction?
117. Как reflection-generated lessons differ from facts?
118. Как repeated episodes combined without erasing exceptions?
119. Как agent should represent both general rule and counterexample?
120. Что qualifies as cross-trajectory abstraction?
121. Как prediction error or failure signals can guide consolidation?
122. Как future utility of a memory estimated without hindsight leakage?
123. Как consolidation timing affects what is learned?
124. Как abstraction can introduce hallucinated lessons?
125. Как high-level experience remains linked to source episodes?
126. Как reusable procedural knowledge differs from textual advice?

## 12. Reflection, critique and self-correction

127. Что counts as reflection in agent literature?
128. Чем self-critique отличается от external critique?
129. Какие feedback sources support reliable correction?
130. Когда prompted self-correction works and when does it fail?
131. Как reflection before action differs from reflection after action?
132. Как retrospective reflection differs from prospective risk analysis?
133. Как agent distinguishes a genuine lesson from post-hoc rationalization?
134. Как repeated reflection can amplify an initial false belief?
135. Как critiques stored and reused across trials?
136. Как external verifier changes reliability relative to self-evaluation?
137. Как cost of reflection balanced against benefit?
138. When should an agent stop reflecting and act?

## 13. Feedback learning and learning from interaction

139. Какие forms feedback agents receive: scalar reward, textual critique, execution result, human correction, environmental state?
140. Чем adapting future prompts/memory differs from updating model weights?
141. Как cross-trial feedback alters policy without fine-tuning?
142. Как interaction histories become training data?
143. Как reinforcement learning of agents differs from prompt-level feedback adaptation?
144. Как sparse/delayed rewards complicate credit assignment?
145. Как agent links outcome to specific earlier decisions?
146. How does counterfactual feedback differ from observed consequences?
147. Как noisy or adversarial feedback handled?
148. Как self-generated feedback differs epistemically from environment feedback?
149. Какие mechanisms support continual improvement across tasks?
150. Как avoid overfitting to recent failures or rewards?

## 14. World models and environment models

151. Что counts as a world model in agent research?
152. Чем explicit symbolic environment model отличается от implicit LLM knowledge?
153. Как action preconditions and effects represented?
154. Как agent predicts consequences before acting?
155. Как learned dynamics model updated after surprises?
156. Как uncertainty represented in world model?
157. Как causal model differs from correlation-rich language knowledge?
158. Как partial observability affects world-model construction?
159. Как environment model supports planning and verification?
160. Когда external simulator is preferable to internal prediction?
161. Как world-model errors propagate into plans?
162. Как embodied and digital environments differ in world-model requirements?

## 15. Long-horizon state and trajectory management

163. Почему agent performance degrades over long action sequences?
164. Как error propagation accumulates across steps?
165. Как checkpoints and subgoal verification reduce drift?
166. How does working-memory compression affect trajectory consistency?
167. Как agent recovers after many steps of incorrect state?
168. Как persistent logs differ from working state?
169. Как partial completion represented?
170. Как agent handles interruptions and resumes work?
171. Как external changes during a long task invalidate previous plans?
172. Как long-horizon tasks evaluated when intermediate states matter?
173. Как agent detects looping or repeated unproductive behavior?
174. How should resources, time and token budgets be tracked as state?

## 16. Profiles, personas, roles and persistent agent identity

175. Что означает profile module in LLM-agent literature?
176. Чем role prompt отличается от persistent identity state?
177. Как handcrafted persona affects planning/action independently of memory?
178. Как dynamically generated profiles differ from designer-authored profiles?
179. Как role consistency is measured across long interactions?
180. Как profile information can bias retrieval, planning and interpretation?
181. Чем task role (“coder”, “reviewer”) отличается от personality persona?
182. Как multiple roles switched or combined?
183. Как agent identity differs from user model?
184. Как social role in multi-agent system differs from internal self-model?
185. Какие risks arise when profile attributes are treated as fixed ground truth?
186. Какие вопросы profile/persona research belong to area №5 rather than agent architecture?

## 17. Metacognition and control of cognition

187. Что counts as metacognition in computational agents?
188. Как monitoring differs from control?
189. Как agent estimates whether its current plan/reasoning is adequate?
190. Как confidence influences strategy switching?
191. Как metareasoning decides whether more computation is worth the cost?
192. Как agent chooses among planning, acting, retrieval and asking for help?
193. Как error detection differs from error correction?
194. Как metacognitive state stored across steps?
195. Какие architectures explicitly model metacognitive processes?
196. Как self-report of uncertainty differs from actual controller behavior?
197. Как metacognitive failures cause perseveration or premature stopping?
198. What evidence distinguishes real control adaptation from extra prompting?

## 18. Cognitive architectures as a separate tradition

199. What defines a cognitive architecture rather than an application architecture?
200. What goals distinguish cognitive modeling from engineering-oriented agent frameworks?
201. Какие core capabilities recur across ACT-R, Soar, CLARION, LIDA, Sigma and related systems?
202. How do architectures differ in representation: symbolic, emergent/subsymbolic and hybrid?
203. Как perception, attention, memory, learning, reasoning, action selection and metareasoning integrated?
204. What is a cognitive cycle and which architectures use cycle-like organization?
205. How do cognitive architectures represent goals?
206. How do they distinguish declarative and procedural knowledge?
207. How do learning mechanisms differ across architectures?
208. How do motivational or metacognitive modules enter some architectures?
209. Which architectures aim to model human cognition versus build general intelligent systems?
210. How should evidence from human-modeling architectures transfer to LLM agents?

## 19. ACT-R, Soar, CLARION, LIDA, Sigma and architectural comparison

211. What are ACT-R’s major modules and buffers?
212. How does ACT-R procedural learning differ from Soar chunking?
213. How does Soar integrate problem spaces, impasses, learning and episodic/semantic memory?
214. What explicit–implicit distinction is central to CLARION?
215. How does LIDA’s cognitive cycle organize perception, workspace, action selection and learning?
216. What is Sigma’s attempt at architectural unification?
217. Where do these architectures agree on a “standard model” of cognition?
218. Where do they disagree fundamentally?
219. How much of their evidence comes from human task modeling versus autonomous applications?
220. Which architectural ideas remain relevant when the cognitive core is an LLM?
221. Which ideas rely on assumptions incompatible with autoregressive language models?
222. How can borrowing cognitive terminology create false equivalence?

## 20. Declarative, procedural and skill representations

223. How do agents distinguish knowing that from knowing how?
224. What counts as a procedural memory in LLM-agent engineering?
225. Can textual instructions function as procedures without being compiled into policy?
226. How do reusable tool workflows differ from semantic memories?
227. What is skill library learning?
228. How are skills indexed, selected and parameterized?
229. How do agents compose previously learned skills?
230. How are obsolete skills revised?
231. How does proceduralization reduce repeated deliberation?
232. When does cached behavior become brittle under changed conditions?
233. How is skill success tracked across contexts?
234. How does a skill representation preserve preconditions and failure modes?

## 21. Action selection and arbitration

235. How is one action chosen among multiple plausible actions?
236. What is utility-based action selection in cognitive architectures?
237. How do priorities, constraints and expected outcomes interact?
238. How does reactive action compete with deliberative planning?
239. How does habit-like cached action differ from explicit planning in artificial agents?
240. What mechanisms arbitrate among tools, plans and memory retrieval?
241. How should uncertainty affect action selection?
242. How are irreversible actions treated differently?
243. When should an agent defer, abstain or ask a human?
244. How does action selection change under time/resource pressure?
245. How can repeated success lead to inappropriate automation?
246. How is exploration versus exploitation represented at agent level?

## 22. Human–agent collaboration and oversight

247. What forms of human involvement exist: approval, correction, delegation, supervision, intervention?
248. How do human-in-the-loop and human-on-the-loop differ?
249. How should an agent decide when to ask for clarification?
250. How does user feedback differ from objective environment feedback?
251. How can user preferences be learned without treating every instruction as permanent preference?
252. How does oversight affect autonomy measurement?
253. When does human confirmation improve safety but destroy useful autonomy?
254. How do agents communicate uncertainty and progress to humans?
255. How can humans become over-reliant on agent recommendations?
256. How do agents handle conflicting instructions from multiple humans?
257. What is shared control or mixed-initiative interaction?
258. How can authority boundaries be represented and enforced?

## 23. Degrees and kinds of autonomy

259. What dimensions of autonomy should be distinguished: goal selection, planning, tool choice, execution, learning, memory management?
260. Is autonomy a scalar level or multidimensional profile?
261. How does delegated autonomy differ from self-generated goals?
262. How does initiative differ from autonomy?
263. What does bounded autonomy mean?
264. How do permissions and capabilities constrain effective autonomy?
265. How does ability to stop or refuse relate to autonomy?
266. How does self-maintenance differ from task autonomy?
267. How do long-lived agents differ from episodic task agents?
268. How should autonomous behavior be evaluated without anthropomorphic interpretation?
269. What forms of autonomy require persistent state?
270. Which autonomy questions belong to governance rather than cognitive architecture?

## 24. Multi-agent systems and role structure

271. When does adding multiple agents improve performance over a single agent with more inference?
272. How do cooperation, competition and mixed-motive interaction differ?
273. How are roles allocated among agents?
274. How do fixed roles differ from dynamically reassigned roles?
275. What coordination topologies are used: centralized, peer-to-peer, hierarchical, graph-based?
276. How does communication bandwidth affect coordination?
277. How do agents decide what information to share?
278. How are conflicting beliefs reconciled?
279. How do duplicated errors become amplified through consensus?
280. How does diversity of models/prompts improve or harm group performance?
281. How are responsibility and provenance tracked in collaborative outputs?
282. How do multi-agent systems prevent endless debate or coordination overhead?

## 25. Communication and shared context

283. What is communicated: observations, beliefs, plans, critiques, actions, summaries or confidence?
284. How does message ordering affect collective behavior?
285. How does shared history differ from private memory?
286. How do lossy summaries distort coordination?
287. What does common ground mean operationally for artificial agents?
288. How do agents detect misunderstanding?
289. How do protocols constrain free-form language interaction?
290. When is structured communication preferable to natural language?
291. How do agents communicate uncertainty or provenance?
292. How do adversarial/misleading agents affect group state?
293. How does communication cost scale with team size?
294. How can agents coordinate without exposing all internal state?

## 26. Social simulation and generative agents

295. What distinguishes task-oriented agents from agents used to simulate people or societies?
296. How are memories, roles, relationships and schedules used in generative social agents?
297. How do simulation agents differ from empirical models of real human behavior?
298. How does persona prompting bias simulated social outcomes?
299. How should emergent-looking group behavior be validated?
300. What is the difference between internal consistency and human realism?
301. How do simulated relationships update through interaction?
302. How does memory retrieval shape apparent personality consistency?
303. What risks arise when synthetic societies are treated as evidence about real societies?
304. How do observer expectations influence interpretation of “emergent social behavior”?

## 27. Embodied and computer-using agents

305. How do embodied agents differ from text-only/digital agents?
306. How are perception, spatial state and action grounded in physical or graphical environments?
307. What roles VLMs/VLAs/world models play in embodied agents?
308. How does action latency matter in dynamic environments?
309. How do physical irreversibility and safety change planning requirements?
310. How does GUI interaction differ from API tool use?
311. How are coordinate/action grounding errors detected?
312. What is embodiment in virtual environments versus robotics?
313. How do sensor noise and partial observability affect memory and planning?
314. Which principles transfer from embodied to conversational agents and which do not?

## 28. Safety, security and authority boundaries

315. How does agent safety differ from ordinary chatbot safety?
316. What new risks arise when outputs can trigger external actions?
317. How do direct and indirect prompt injection affect agents?
318. How can external content hijack an agent’s instruction hierarchy?
319. How are tool permissions and least-privilege principles implemented?
320. How should agents handle secrets, credentials and private data?
321. What are risks of memory poisoning or persistent malicious instructions?
322. How does multi-step action create indirect harms not obvious in a single step?
323. How can prospective safety checks occur before irreversible tool execution?
324. How do confirmation gates differ from blanket refusal?
325. How are compromised tools or observations detected?
326. How should agent actions be auditable after execution?

## 29. Reliability and failure modes

327. What are major agent failure classes: planning, perception, memory, tool use, execution, verification, termination?
328. How do small errors cascade in long-horizon tasks?
329. How often does retrying help versus repeat the same failure?
330. What is error recovery versus merely restarting?
331. How do agents respond to contradictory tool outputs?
332. How are stale assumptions detected?
333. How does hallucinated state differ from hallucinated fact?
334. How does partial task completion create false success signals?
335. How can agents verify side effects in external systems?
336. How do benchmark environments hide failures present in real systems?
337. What causes brittle dependence on exact UI/API formats?
338. How should reliability be measured across repeated stochastic runs?

## 30. Evaluation and benchmarks

339. What dimensions should agent evaluation cover beyond task success?
340. How are planning, tool use, memory and self-correction evaluated separately?
341. How are long-horizon and interactive tasks benchmarked?
342. What makes an environment realistic enough for agent evaluation?
343. How do static benchmarks differ from dynamic or continuously updated ones?
344. How should cost, latency and number of tool calls enter evaluation?
345. How is robustness to environment perturbation measured?
346. How are safety and policy compliance evaluated during multi-step execution?
347. How do user simulators affect validity?
348. How can benchmark leakage/contamination affect agents?
349. How should stochasticity and multiple attempts be aggregated?
350. How do milestone/intermediate-state metrics improve diagnosis?
351. How is memory evaluated for effectiveness, efficiency and capacity?
352. How can evaluation distinguish a strong model from a strong orchestration scaffold?

## 31. Resource efficiency and practical constraints

353. How do token, latency, API-call and tool-execution costs scale with agent complexity?
354. When does multi-agent collaboration cost more than it adds?
355. How does reflection frequency affect performance/cost?
356. How do memory retrieval budgets affect long-horizon quality?
357. How do caching and reuse alter behavior?
358. How should agents ration expensive tools?
359. How do rate limits and external service failures affect planning?
360. How does context growth create latency and cost pressure?
361. When does a deterministic component outperform another LLM call?
362. How should efficiency be evaluated together with reliability rather than separately?

## 32. Reproducibility and system opacity

363. How reproducible are agent results across model versions?
364. How do changes in tools/APIs alter benchmark trajectories?
365. How should prompts, tools, memory state and orchestration code be versioned?
366. How do hidden retries or middleware affect reported performance?
367. How much of an agent paper’s result depends on proprietary models?
368. How do environment nondeterminism and model stochasticity interact?
369. How should trajectories be logged for reproducibility?
370. What information is needed to reproduce memory-augmented agent behavior?
371. How do framework defaults create hidden experimental variables?
372. How should negative results and failure trajectories be reported?

## 33. Environments and learning from interaction

373. What makes an environment suitable for agent learning rather than only evaluation?
374. How do task generation, action execution and feedback form an interaction loop?
375. How do static datasets differ from interactive environments?
376. How do environment realism and controllability trade off?
377. How are consequences represented when they unfold after many actions?
378. How can environments expose rare but important failure states?
379. What is the role of procedurally generated tasks?
380. How can environment curricula shape agent behavior?
381. How does simulation-to-real transfer affect learned agent strategies?
382. How can environment feedback be informative without directly prescribing the correct policy?
383. What happens when the environment itself changes over time?
384. How do agents distinguish changes in the world from errors in their own model?

## 34. Self-improvement, self-evolution and agent adaptation

385. What claims are grouped under “self-improving” or “self-evolving” agents?
386. Which forms of improvement change weights, memory, prompts, tools, skills or orchestration?
387. How does self-generated training data differ from experience memory?
388. How do agents propose and validate changes to their own strategies?
389. How does self-modification differ from externally orchestrated optimization?
390. What mechanisms prevent degradation while incorporating improvements?
391. How can an agent detect that a previously useful strategy has become obsolete?
392. How should improvement be measured across a distribution rather than one repeated task?
393. How do self-improvement loops avoid feedback amplification and reward hacking?
394. What evidence is required before calling adaptation “self-evolution” rather than iterative engineering?

## 35. Cross-domain analogy and boundary discipline

395. Which cognitive-architecture concepts are directly implemented computational mechanisms versus inspiration/metaphor?
396. When is “episodic memory” in an agent genuinely analogous to psychological episodic memory?
397. When is “reflection” simply another inference call rather than metacognition?
398. When is “experience” raw trajectory storage versus generalized reusable knowledge?
399. How should agent “identity” be separated from persona prompts and persistent state?
400. How should “learning” be separated across context adaptation, memory update, policy update and weight update?
401. How should “autonomy” be separated from permissions and orchestration?
402. Which concepts must be reconciled later with areas №2, №3, №5, №7, №8 and №10 rather than resolved locally?

## 36. Крупные споры, сохранённые для A2/B

1. LLM as agent vs LLM as cognitive core inside a larger agent system.
2. Reactive tool use vs genuinely closed-loop autonomous control.
3. Natural-language planning vs formal/symbolic/external planning.
4. Plan-first execution vs interleaved reasoning and acting.
5. Internal world knowledge vs explicit world models.
6. Raw trajectory memory vs structured episodic/semantic/procedural memory.
7. Append-only memory vs active update/deletion/consolidation.
8. Similarity retrieval vs learned/utility-sensitive memory policies.
9. Reflection as reliable metacognition vs another fallible generation step.
10. Self-feedback vs externally grounded feedback.
11. Prompt/memory adaptation vs actual policy/weight learning.
12. Persistent persona/profile vs emergent history-dependent state.
13. Classical cognitive architectures vs LLM-centric ad hoc orchestration.
14. Symbolic vs subsymbolic vs hybrid cognitive organization.
15. Centralized planner/controller vs distributed modular control.
16. Single-agent depth vs multi-agent collaboration.
17. Natural-language communication vs structured protocols.
18. More autonomy vs stronger human oversight.
19. Fixed delegated goals vs agent-generated subgoals and initiatives.
20. Long-horizon persistence vs safe stopping/replanning.
21. Memory continuity vs stale/poisoned experience.
22. More reflection/memory/tools vs cost and error amplification.
23. Benchmark success vs robust real-world execution.
24. Digital agents vs embodied/computer-using agents.
25. Agent “self-evolution” as substantive adaptation vs loose marketing terminology.
26. Cognitive terminology as useful design vocabulary vs misleading anthropomorphic analogy.

## 37. A1 breadth check

Карта сверена по независимым ветвям:
- definitions and boundaries of agent systems;
- perception/state construction;
- goals, planning and reasoning–acting loops;
- tool use/action interfaces;
- memory storage, retrieval, consolidation and experience abstraction;
- reflection/self-correction and feedback learning;
- world/environment models;
- long-horizon trajectory management;
- profiles/roles and agent identity;
- metacognition;
- classical cognitive architectures (ACT-R, Soar, CLARION, LIDA, Sigma and broader field);
- declarative/procedural knowledge and skills;
- action selection/arbitration;
- human oversight and multidimensional autonomy;
- multi-agent collaboration and communication;
- social/generative agents;
- embodied/computer-using agents;
- safety/security/authority boundaries;
- reliability/failure modes;
- agent evaluation and memory benchmarks;
- resource efficiency;
- reproducibility/system opacity;
- interactive environments;
- self-improvement/self-evolution claims;
- cross-domain analogy discipline.

После этих проверок новые обзорные результаты в основном добавляли детали внутри уже найденных ветвей. Это **первичная A1-картография**, а не финальный A2 coverage audit.

## 38. A2 — финальные межобластные уточнения и новые вопросы

После межобластной сверки и fresh-source coverage pass новой самостоятельной agent/cognitive-architecture ветви не обнаружено. Основные поправки связывают уже найденные ветви в **causal lifecycle acquired experience** и распределяют primary gaps №5, 8, 9, 11, 15, 16, 19 и 20.

### Новые вопросы A2

403. Какую единицу следует считать raw experience input агента: individual event, observation, action–observation pair, complete trajectory, episode boundary or interaction segment?
404. Как operationally отличить raw trajectory, observation/state summary, interpretation, reflection, changed expectation, conditional lesson, strategy and intention/open question?
405. Какой из этих объектов должен сохранять прямую provenance к исходному event/action/consequence, а какой может быть derived abstraction?
406. Когда textual summary отражает compression trajectory, а когда уже вводит новую interpretation, отсутствовавшую в наблюдаемом опыте?
407. Какие условия нужны, чтобы trajectory abstraction была reusable beyond исходной task, но сохраняла applicability conditions and exceptions?
408. Как cross-trajectory abstraction должна обращаться с conflicting successful/failed trajectories, а не только majority/common pattern?
409. Как отличить genuine acquired experience от retrieved example/demo, которое просто копируется в новый output?
410. Когда stored experience считается provisional hypothesis, а когда достаточно подтверждённым conditional understanding для дальнейшего use?

411. Как полный loop `history/state → choice → action → environment/user response → observed consequence → attribution/update → next choice` должен представлять каждый causal transition?
412. Что считать consequence собственного выбора, если environment/user response одновременно зависит от external factors?
413. Как различать observation of outcome и interpretation of what that outcome means for prior choice?
414. Когда environment feedback сообщает consequence, а когда фактически напрямую сообщает desired policy/lesson?
415. Какие элементы loop должны быть persistent across sessions, чтобы previous choice мог реально изменить future choice rather than only current turn?
416. Как system should represent unresolved outcomes, когда consequence ещё не наступило или remains ambiguous?

417. Как delayed outcome связывать с earlier actions при десятках промежуточных steps и competing causes?
418. Какие provenance links нужны между decision, action, environment state and later outcome для credible credit assignment?
419. Как выражать uncertainty/confidence of causal attribution вместо бинарного `это произошло из-за X`?
420. Когда post-hoc reflection/hindsight critic полезен как hypothesis generator, а когда он создаёт unsupported causal story?
421. Какие counterfactual, alternative-cause or repeated-experience evidence могут повысить confidence in long-horizon credit assignment?
422. Когда один delayed consequence должен revise one earlier decision, broader strategy or nothing at all?

423. Как различать user-specified top-level goal, delegated task, inferred subgoal, self-generated subgoal, exploratory action and enduring self-originated goal?
424. Какие dimensions functional autonomy нужно измерять отдельно: initiation, subgoal selection, planning, tool selection, execution, stopping, memory management, revision and learning?
425. Когда agent-generated subgoal является собственной decision внутри delegated objective, а когда просто deterministic decomposition external instruction?
426. Как own choice can be evidenced when available options are shaped by user request, higher-priority instructions, tools and permissions?
427. Как fixed safety/system constraints ограничивают autonomous choice without determining every lower-level trajectory?
428. Почему automatic refusal/opposition to influence не является stronger evidence autonomy than automatic compliance?

429. Какие lifecycle states acquired experience реально нужны для исследования: working/local, persisted, abstracted, validated, retrieved, reinforced, revised, contradicted, stale/obsolete, archived/deleted?
430. Как distinguish revision, narrowing/conditionalization, supersession, contradiction coexistence and deletion?
431. Когда obsolete experience нужно сохранять как historical provenance, но исключать из ordinary action guidance?
432. Как future evidence can invalidate derived lesson while preserving original event record and attribution history?
433. Как memory management policy should avoid append-only accumulation without turning every new conflict into destructive overwrite?
434. Когда forgetting/deletion improves adaptive continuity by preventing obsolete or misleading experience from dominating current decisions?

435. Как retrieval ranking, memory budget and compression decide which history can participate in current action selection?
436. Как prevent common/recent/similar memories from crowding out rare but high-consequence experiences?
437. Как detect retrieval-induced self-reinforcement, где repeatedly retrieved history creates more similar behavior and therefore more similar future memory?
438. Какие interventions — add/remove/replace/suppress one memory under comparable current conditions — могут test whether that experience causally affected a choice?
439. Как distinguish causal influence of memory content from mere verbal mention or post-hoc justification of the same content?
440. Какой minimum evidence package нужен, чтобы утверждать: `past acquired experience materially changed this later choice`, а не current prompt, base-model prior, retrieved instruction-like demo or stochastic output?

## 39. A2 — ownership corrections после межобластной сверки

Для фазы B №9 остаётся главным technical integration area и primary owner:

- **gap 5:** unit of acquired experience;
- **gap 8:** full closed choice→consequence→update loop;
- **gap 9:** delayed cross-session credit assignment;
- **gap 11:** own choice under unavoidable external influence;
- **gap 15:** lifecycle of acquired experience;
- **gap 16:** evidence that acquired experience affected a new choice;
- **gap 19:** compression/retrieval budget as trajectory selector;
- **gap 20:** bounded autonomy under immutable higher-level constraints.

№9 также поддерживает gap 6: any memory-write/retrieval “importance” mechanism must not silently inject preset values.

Handoffs:
- human memory/generalization → №2;
- psychological learning/no-update → №3;
- significance/value/interest → №4;
- social influence/identity → №5;
- formal path dependence/system boundary → №7;
- base-model/context/stochasticity attribution → №8;
- ML/RL optimization algorithms → №10;
- actual ChatGPT product persistence/tools/permissions → №11;
- exact project instruction design → №12.

Ключевые запреты:
- **memory write ≠ learning**;
- **reflection ≠ verified metacognition**;
- **retrieved trajectory ≠ own acquired experience automatically**;
- **successful past trajectory ≠ universally valid lesson**;
- **persona/profile ≠ developed identity**;
- **agent-generated subgoal ≠ self-originated enduring goal**;
- **memory mention ≠ evidence memory caused the decision**.

## 40. Финальный coverage audit A2

Повторно проверены:
- storage → reflection → experience abstraction;
- agent-controlled store/retrieve/update/summarize/discard;
- experience-following behavior and memory addition/deletion effects;
- stale/obsolete/conflicting memory handling;
- factual vs reflective memory evaluation;
- limits of prompted reflection/self-correction;
- long-horizon delayed/hindsight credit assignment;
- multidimensional autonomy;
- system-level agent evaluation;
- personalization-memory safety failures.

После последних источников новые находки укладывались в вопросы №403–440 или существующие A1-блоки. **Новой крупной самостоятельной ветви не появилось.**

## Статус

**A2 №9 завершена как финальная картография области.** Карта теперь содержит 402 вопроса A1 + 38 уточняющих вопросов A2 (№403–440), ownership corrections и final coverage audit.

A2 не означает глубокого решения этих вопросов. Источники использованы для проверки структуры, границ и полноты карты; разработка и сравнение конкретных agent memory/update/autonomy mechanisms относится к фазе B.

**Следующий шаг общего процесса:** отдельным полноценным проходом начать **A2 №10 «Машинное обучение и адаптивные системы»**.


## Phase B status

**B2 gaps 5+13+15 завершена 16.10.2026 по saturation.** Первый engineering deep pass: Storage ≠ Reflection ≠ Experience abstraction; provenance required for causal revision; obsolete memory must be separable from historical existence. Следующий шаг: stress-test candidate relational unit on edge cases before lifecycle finalization.


## Phase B status

**B4 gaps 10+11+20+8 начата 16.10.2026, НЕ завершена.** First agent-side pass: delegated vs operational autonomy; autonomy decomposed across task origin, interpretation, subgoals, planning, tool/action choice, stopping, memory/revision and initiative. Candidate own-choice criterion requires multiple allowed alternatives, history-dependent selection and counterfactual effect on future evidence stream. Следующий шаг: stress-test authority/evidence conflicts, initiative outside task, stopping, and memory autonomy vs lock-in.

## Phase B — B4 update 16.10.2026 — stress-test pass 2
- Old five-part own-choice criterion partially failed under memory anchoring/self-reinforcing retrieval.
- New unit of analysis: **decision locus**, not whole response/task.
- New boundary: **constraint** narrows a locus; **script** collapses it to one option.
- Introduced conceptual delegation envelope: required / prohibited / permitted-optional / negotiable expansion.
- Stop/ask/escalate are meta-actions and can themselves be choice loci.
- New distinction: **history-informed vs history-captured**.
- Revised candidate uses **live alternatives** and **revisable openness**.
- Split **functional bounded own choice** from **trajectory-forming own choice**.
- Status: **B4 continues; next pass must adversarially test false positives/negatives of the revised criterion.**

## Phase B — B4 final 16.10.2026
- B4 completed by saturation after adversarial pass 3.
- Final distinction: open decision locus → functional bounded choice → history-shaped bounded choice → trajectory-forming history-shaped choice.
- Determinism and behavioral consistency do not by themselves negate choice; relevant counterfactual responsiveness matters.
- Historical social influence does not become authority by accumulation; authority requires appropriate provenance and active scope.
- Remaining causal-credit, persistence/authority mechanics, baseline confounds and evidential standards belong to B5–B8.
## Phase B — B5 final 16.10.2026
- B5 delayed causal credit completed by saturation.
- Later outcome is not converted directly into a lesson; it first supports a revisable causal-contribution attribution.
- Temporal order alone is insufficient; preserve competing/direct/mediated/enabling/joint/redundant/exogenous paths and attribution uncertainty.
- Decision quality is separate from realized terminal outcome; luck, rescue and exogenous failure must not be mislearned.
- Retrospective LLM explanation is a candidate attribution, not ground truth.
- Revision scope follows causal support: local / broader / no durable revision.
- Reciprocal participant↔user/environment feedback can itself be part of the causal path.
- Remaining persistence/retrieval/authority mechanics belong to B6.
