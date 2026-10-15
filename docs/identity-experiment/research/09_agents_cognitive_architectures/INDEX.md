# A1 №9 — AI-агенты и когнитивные архитектуры

**Статус:** A1 в процессе первичной картографии 15.10.2026.

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
