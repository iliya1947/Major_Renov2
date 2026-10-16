# A1/A2 №10 — Машинное обучение и адаптивные системы

**Статус:** A1 завершена 15.10.2026; **A2 завершена 16.10.2026 как повторная финальная картография после межобластной сверки.**

**Цель:** определить, какие части machine learning и adaptive-systems research необходимо будет исследовать глубоко позже. Здесь не выбирается алгоритм будущего эксперимента и не строится механизм индивидуальности.

## 1. Что считать адаптацией в машинном обучении

1. Какие формы adaptation различаются: parameter update, representation change, architecture change, memory update, policy change, data selection?
2. Чем adaptation отличается от ordinary training?
3. Чем adaptation отличается от inference conditioned on new input?
4. Чем adaptation отличается от personalization?
5. Чем adaptation отличается от transfer learning?
6. Чем adaptation отличается от continual/lifelong learning?
7. Чем adaptation отличается от online learning?
8. Обязательно ли adaptive system обновляет model parameters?
9. Как distinguish transient adaptation from persistent learning?
10. Что считать success адаптации, если environment itself changes?

## 2. Основные learning paradigms и их границы

11. Как supervised, unsupervised, self-supervised, semi-supervised and reinforcement learning differ by source of learning signal?
12. Какие hybrid settings combine several feedback types?
13. Как weak supervision differs from semi-supervised learning?
14. Как pseudo-labeling changes the effective supervision regime?
15. Как imitation learning relates to supervised and reinforcement learning?
16. Как preference learning differs from scalar-reward learning?
17. Как representation learning cuts across supervised/unsupervised categories?
18. Как batch versus sequential data changes meaning of the same learning paradigm?
19. Какие paradigms naturally support adaptation after deployment?
20. Как task definition itself changes across paradigms?

## 3. Batch, incremental, online and streaming learning

21. Чем batch learning отличается от incremental learning?
22. Чем online learning differs from merely training on mini-batches?
23. What assumptions does classical online learning make about sequential feedback?
24. How is regret used to evaluate online learners?
25. What changes when labels arrive with delay?
26. What is stream learning and how does it differ from generic online optimization?
27. How do finite-memory constraints shape streaming algorithms?
28. How are one-pass and multi-pass settings distinguished?
29. When can an online learner revisit old data?
30. What is prequential evaluation?
31. How does online learning handle class imbalance and rare events?
32. What is the difference between adaptation to a stream and tracking a drifting concept?

## 4. Stationarity, distribution shift and nonstationarity

33. What forms of stationarity are assumed by standard ML?
34. What changes under covariate shift?
35. What changes under label/prior shift?
36. What is concept/conditional shift?
37. How do temporal, geographical and population shifts differ?
38. How do abrupt, gradual, incremental and recurring shifts differ?
39. What is local versus global shift?
40. How do feature-set changes differ from distribution drift?
41. What is concept evolution or appearance of novel classes?
42. How can distribution shift be detected without labels?
43. How can performance degradation be distinguished from random noise?
44. When should a system adapt versus remain stable under temporary fluctuation?

## 5. Concept drift detection and adaptation

45. What families of drift detectors exist: performance-based, distribution-based, window-based, ensemble-based?
46. How do supervised and unsupervised drift detectors differ?
47. What assumptions do detectors make about drift speed and locality?
48. How are false alarms and missed drift traded off?
49. How does delayed ground truth affect drift detection?
50. How should adaptation react to recurring concepts?
51. When is model reuse preferable to retraining?
52. How do ensembles track changing regimes?
53. How do sliding/recent windows forget old distributions?
54. How should abrupt versus gradual drift trigger different responses?
55. How are seasonal/cyclic regimes distinguished from irreversible drift?
56. What happens when drift occurs only in rare subpopulations?
57. How are simultaneous feature drift and concept drift handled?
58. How should drift adaptation be evaluated when the “current” concept keeps moving?

## 6. Continual and lifelong learning: settings

59. How are task-incremental, domain-incremental and class-incremental learning distinguished?
60. What is task-free continual learning?
61. What is online continual learning?
62. How does lifelong machine learning differ historically and operationally from continual learning?
63. How do known versus unknown task boundaries change the problem?
64. What changes when task identity is unavailable at inference?
65. How do class/domain/task recurrence affect method choice?
66. What is vertical versus horizontal continual adaptation?
67. How do continual pretraining, domain-adaptive pretraining and continual fine-tuning differ?
68. How do supervised, unsupervised and reinforcement-learning continual settings differ?
69. How do finite versus expanding label spaces change the problem?
70. How should continual learning be defined when there is no discrete task structure?

## 7. Stability–plasticity and catastrophic forgetting

71. What is catastrophic forgetting operationally?
72. How does forgetting differ from beneficial replacement of obsolete knowledge?
73. What is backward transfer?
74. What is forward transfer?
75. How does stability–plasticity differ from accuracy–adaptation speed?
76. Can excessive stability produce inability to learn new distributions?
77. What is loss of plasticity independent of catastrophic forgetting?
78. How does continual optimization change representation diversity?
79. How do recency biases emerge?
80. How is forgetting measured when old tasks themselves become obsolete?
81. Can a system retain knowledge yet lose ability to use it?
82. How do resource limits alter the stability–plasticity trade-off?

## 8. Replay and rehearsal

83. How does raw experience replay differ from generative replay?
84. How are replay samples selected?
85. What is reservoir sampling and why is it used?
86. How do importance, diversity and uncertainty influence replay selection?
87. How large must a replay buffer be?
88. How do rare but important examples remain represented?
89. How does replay ratio affect stability and plasticity?
90. What privacy issues arise from storing old data?
91. How does generative replay introduce synthetic errors?
92. When does replay reinforce obsolete concepts?
93. How can replay support recurring distributions?
94. How does replay in supervised continual learning differ from experience replay in RL?

## 9. Regularization, parameter protection and distillation

95. How do parameter-importance regularizers reduce forgetting?
96. What assumptions underlie EWC-like methods?
97. How do functional regularization and knowledge distillation differ from parameter regularization?
98. How do old-model targets become stale under legitimate concept drift?
99. How does regularization trade new-task adaptation against retention?
100. How are important parameters/features estimated?
101. What happens when multiple tasks demand conflicting parameter changes?
102. How do Bayesian/uncertainty-based views relate to parameter protection?
103. When does regularization preserve obsolete behavior?
104. How does regularization scale to long task sequences?

## 10. Parameter isolation, modularity and dynamic architectures

105. How do parameter-isolation methods avoid interference?
106. What is the difference between allocating new parameters and routing among existing modules?
107. How do progressive/dynamically expanding networks decide when capacity is insufficient?
108. How is capacity growth bounded over long lifetimes?
109. How are modules reused across related tasks?
110. What happens when task boundaries are unknown?
111. How do masks, adapters and subnetworks alter interference?
112. How can dormant capacity be reclaimed?
113. How does architectural modularity affect transfer versus isolation?
114. When does expansion postpone rather than solve forgetting?
115. How do dynamic architectures compare with replay under fixed resource budgets?
116. How can structural adaptation itself be evaluated?

## 11. Transfer learning and knowledge transfer

117. What forms of transfer are distinguished: inductive, transductive, unsupervised and cross-domain?
118. How do source and target task/domain relations matter?
119. What is positive transfer?
120. What is negative transfer and how can it be detected?
121. How does representation reuse differ from full parameter transfer?
122. When should lower versus higher layers be transferred?
123. How does source diversity affect transferability?
124. How do task similarity measures predict transfer?
125. How do transfer and continual learning interact?
126. How do transfer-learning assumptions change for foundation models?
127. How can old knowledge be reused without constraining target adaptation too strongly?
128. How should transfer be measured beyond target performance alone?

## 12. Domain adaptation

129. What distinguishes supervised, semi-supervised and unsupervised domain adaptation?
130. How do source and target distributions enter the formal problem?
131. How do feature alignment, adversarial alignment and discrepancy minimization differ?
132. When can aligning marginal distributions harm conditional structure?
133. What is source-free domain adaptation?
134. How does multi-source domain adaptation differ from single-source adaptation?
135. How is label-space mismatch handled?
136. What is partial/open-set/universal domain adaptation?
137. How does domain adaptation differ from ordinary fine-tuning?
138. How do pseudo-label errors compound during adaptation?
139. What happens when the target domain continues to drift?
140. How is negative transfer diagnosed in domain adaptation?

## 13. Domain generalization and OOD generalization

141. What distinguishes domain generalization from domain adaptation?
142. How are unseen target domains defined without target data?
143. What roles invariance, data augmentation and robust optimization play?
144. How can overfitting to source-domain diversity occur?
145. How does causal/invariant prediction relate to domain generalization?
146. How are spurious correlations identified and reduced?
147. What is the relation between OOD detection and OOD generalization?
148. How can performance on unknown distributions be predicted before deployment?
149. What does “domain” mean when shifts are continuous rather than discrete?
150. How should OOD robustness be evaluated across multiple shift types?
151. What is the difference between average robustness and worst-case robustness?
152. How do foundation models change assumptions behind domain generalization?

## 14. Test-time adaptation

153. What distinguishes test-time adaptation from domain adaptation and online learning?
154. Which components can adapt at test time: weights, normalization, inference, samples, prompts?
155. What signals are available when labels are absent?
156. How do entropy minimization and self-training approaches differ?
157. When does test-time adaptation cause model collapse?
158. How are nonstationary streams handled in online TTA?
159. How does episodic TTA differ from continual TTA?
160. How is adaptation reset or carried between test batches?
161. How can adaptation preserve source performance?
162. What happens under mixed or rapidly switching domains?
163. How are corrupted/adversarial test samples prevented from steering adaptation?
164. How can TTA effectiveness be evaluated when ground truth is delayed or missing?

## 15. Meta-learning and learning to learn

165. What is the formal object learned in meta-learning?
166. How do optimization-based, metric-based, memory-based and model-based meta-learning differ?
167. What is a task distribution and why is it central?
168. How does meta-training differ from ordinary multi-task training?
169. How is fast adaptation evaluated on unseen tasks?
170. What happens when meta-test tasks fall outside the training task distribution?
171. How do inner-loop and outer-loop optimization differ?
172. What is learned initialization versus learned optimizer?
173. How do memory-based meta-learners adapt without gradient updates?
174. How does meta-learning relate to transfer learning?
175. How does meta-learning relate to continual learning?
176. How can meta-learning itself overfit to benchmark/task design?

## 16. Few-shot and rapid adaptation

177. How does few-shot learning differ from meta-learning?
178. How do zero-shot, one-shot and few-shot settings differ?
179. What roles pretrained representations play in few-shot adaptation?
180. How do prototype/metric methods differ from gradient-based adaptation?
181. How does class imbalance affect few-shot learning?
182. How does support-set selection alter adaptation?
183. How is uncertainty handled under very small samples?
184. How do few-shot methods avoid memorizing meta-training classes?
185. How does rapid adaptation trade off with stability?
186. What forms of adaptation are genuinely fast versus merely lookup-like?

## 17. Multi-task learning

187. How does multi-task learning differ from transfer and continual learning?
188. How are shared and task-specific parameters organized?
189. What is hard versus soft parameter sharing?
190. How do task relationships affect positive and negative transfer?
191. How are task losses weighted?
192. What is gradient conflict between tasks?
193. How do adaptive task-balancing methods work conceptually?
194. How does task sampling affect shared representations?
195. When is one shared model worse than separate models?
196. How can task-specific modules coexist with shared features?
197. How does multi-task learning change when tasks arrive sequentially?
198. How are hidden task relationships discovered rather than specified?

## 18. Curriculum learning and task sequencing

199. What counts as a curriculum in machine learning?
200. How do manually designed and automatic curricula differ?
201. How is example difficulty defined?
202. How is task difficulty defined?
203. When does easy-to-hard ordering help versus hurt?
204. How does curriculum interact with transfer and catastrophic forgetting?
205. What is self-paced learning and how does it differ from curriculum learning?
206. How can curricula adapt to current learner competence?
207. How are tasks selected when no fixed difficulty scale exists?
208. How do curricula affect representation learning?
209. Can a curriculum over-specialize the learner to an artificial progression?
210. How should curriculum benefit be evaluated independently of extra compute/data?

## 19. Active learning and information acquisition

211. What is active learning and what choices can the learner control?
212. How do pool-based, stream-based and query-synthesis settings differ?
213. How are uncertainty sampling, diversity and expected-error-reduction strategies distinguished?
214. How does active learning differ from exploration in RL?
215. How does active learning differ from Bayesian optimization?
216. How should labeling cost enter query decisions?
217. How does concept drift change optimal query timing?
218. How does delayed labeling affect active learning?
219. How are rare but important regions discovered?
220. What biases are introduced by non-randomly queried training data?
221. How can active learning fail when uncertainty estimates are poor?
222. How should query efficiency be evaluated jointly with final performance?

## 20. Representation learning and self-supervision

223. Why does representation quality affect later adaptability?
224. How do pretext-task, contrastive, teacher–student, clustering and masked-prediction approaches differ?
225. How do invariances chosen during self-supervision help or hurt downstream adaptation?
226. What is representation collapse and how is it avoided?
227. How stable are learned representations across domain shifts?
228. How does self-supervised pretraining reduce label requirements?
229. How does representation learning interact with continual learning?
230. Can self-supervised objectives themselves forget old structure in continual settings?
231. How does representation disentanglement relate to transferability?
232. What is the role of augmentation policy in learned invariances?
233. How should representation quality be measured beyond downstream linear probes?
234. When does a representation useful for one adaptation setting constrain another?

## 21. Reinforcement learning as adaptive policy learning

235. What distinguishes model-free, model-based and hybrid RL?
236. How do value-based, policy-based and actor–critic methods differ?
237. How does on-policy learning differ from off-policy learning?
238. What roles state representation and partial observability play?
239. How do reward specification and reward shaping affect learned adaptation?
240. What is exploration–exploitation at the policy-learning level?
241. How do sparse and delayed rewards affect credit assignment?
242. How does nonstationary reward or transition dynamics alter RL?
243. What is continual reinforcement learning?
244. How does experience replay affect both stability and adaptation in RL?
245. What is offline RL and how does it differ from online interaction?
246. How does imitation/demonstration data interact with RL?
247. How do model-based planning and learned policy adaptation interact?
248. How should policy performance be evaluated under changing environments?

## 22. Meta-RL and adaptation across tasks

249. What distinguishes meta-RL from ordinary multi-task RL?
250. How is a task distribution represented in meta-RL?
251. How does adaptation occur through recurrent state, context inference or gradient updates?
252. How much within-task data is allowed before adaptation is considered successful?
253. How does meta-RL handle task ambiguity?
254. How does meta-RL behave outside its meta-training distribution?
255. What is the relation between latent task inference and memory?
256. How do meta-RL methods trade fast adaptation against broad generalization?
257. How does meta-RL interact with continual learning across task sequences?
258. What evaluation protocols reveal meta-overfitting?

## 23. Adaptive control and learning-based control

259. How does adaptive control differ from machine-learning adaptation?
260. How does adaptive control differ from robust control?
261. What kinds of plant/model uncertainty are assumed?
262. What are parameter-estimation versus direct adaptive-control approaches?
263. How do stability guarantees differ from empirical ML performance criteria?
264. How does reinforcement learning overlap with optimal/adaptive control?
265. When does online system identification precede controller adaptation?
266. How do safety constraints alter exploration?
267. How does model uncertainty enter controller updates?
268. How do fast parameter adaptation and slow structural adaptation differ?
269. Which adaptive-control results depend on explicit model structure?
270. How transferable are adaptive-control principles to high-dimensional learned systems?

## 24. Personalization and user-specific adaptation

271. What distinguishes personalization from domain adaptation?
272. How much user-specific data is needed for meaningful personalization?
273. How are global and local/user-specific parameters separated?
274. How does cold-start personalization work?
275. How should personalization handle changing user behavior?
276. How are temporary preferences distinguished from persistent ones?
277. How can personalization avoid overfitting to recent interactions?
278. How are privacy constraints balanced against personalization?
279. How can personalization preserve global capabilities?
280. How are multiple contexts/personas for one user represented?
281. What happens when user feedback is noisy, inconsistent or strategic?
282. How should personalization benefit be evaluated across users, not just averages?

## 25. Federated and distributed adaptation

283. What distinguishes federated learning from ordinary distributed training?
284. How do cross-device and cross-silo settings differ?
285. What is statistical heterogeneity/non-IID data in federated learning?
286. How does client drift differ from temporal concept drift?
287. How do aggregation methods handle heterogeneous clients?
288. How does personalized federated learning differ from one global model?
289. How do communication constraints affect adaptation frequency?
290. How do privacy mechanisms change learning quality?
291. How are new clients incorporated over time?
292. How do federated systems handle changing local distributions?
293. How does federated transfer/domain generalization combine cross-client and cross-domain adaptation?
294. When does decentralization improve resilience versus amplify inconsistency?

## 26. Uncertainty, novelty detection and adaptation triggers

295. How should a system detect that current knowledge is insufficient?
296. How do aleatoric and epistemic uncertainty differ for adaptation?
297. How does out-of-distribution detection differ from concept-drift detection?
298. How does novelty detection differ from low confidence?
299. When should high uncertainty trigger learning, abstention, retrieval or human escalation?
300. How reliable are uncertainty estimates under distribution shift?
301. How does calibration drift over time?
302. How can false novelty signals cause unnecessary adaptation?
303. How can a system detect hidden shift when predictions remain superficially confident?
304. How should adaptation thresholds depend on risk/cost?
305. Can adaptation itself be uncertainty-aware?
306. How is uncertainty preserved across sequential updates?

## 27. Robust optimization, invariance and causal structure

307. How does robust optimization differ from adaptive learning?
308. What is distributionally robust optimization?
309. How do worst-case objectives trade average performance for robustness?
310. How does invariant risk minimization relate to domain generalization?
311. What assumptions are required for invariant/causal predictors?
312. How do causal representations support transfer under interventions?
313. When are stable correlations enough without causal structure?
314. How can spurious-feature reliance be diagnosed?
315. How do environment partitions affect discovered invariances?
316. How do causal assumptions fail under hidden confounding or changing mechanisms?
317. When should systems adapt versus rely on invariant structure?
318. How can robustness and plasticity conflict?

## 28. Dynamic model capacity and architecture adaptation

319. When should model width/depth/capacity change during learning?
320. How do grow/prune/merge mechanisms differ?
321. How is capacity insufficiency detected?
322. How can architecture growth avoid unbounded resource use?
323. How does pruning affect retained old knowledge?
324. How do neural architecture search and online architecture adaptation differ?
325. Can learned routing substitute for structural growth?
326. How is architecture adaptation evaluated separately from parameter adaptation?
327. What failure modes arise when architecture changes too frequently?
328. How does dynamic capacity interact with continual-task recurrence?

## 29. Hyperparameter and optimizer adaptation

329. Which hyperparameters should remain fixed versus adapt online?
330. How do adaptive optimizers differ from meta-learned optimizers?
331. How can learning rate adapt to nonstationary data?
332. How do optimizer-state resets affect adaptation and forgetting?
333. What is population-based training and what does it adapt?
334. How do hyperparameter schedules become learned policies?
335. When can hyperparameter adaptation chase noise?
336. How are validation signals obtained in continual deployment?
337. How does AutoML differ from continual self-adaptation?
338. What is the cost of adapting the learning process itself?

## 30. Data selection, weighting and memory policies

339. How does data selection differ from replay?
340. How are hard, informative, diverse and representative samples distinguished?
341. How do importance weights correct distribution mismatch?
342. When does prioritizing hard examples amplify noise?
343. How are old and new data weighted under drift?
344. How should duplicate/redundant experience be handled?
345. How do coresets summarize a history under finite memory?
346. How are rare edge cases preserved?
347. What is selective forgetting of obsolete data?
348. How can data provenance and timestamp influence reuse?
349. How do curriculum, active learning and replay interact through sample selection?
350. How do data-selection policies themselves adapt?

## 31. Resource-bounded adaptation

351. How do compute, memory, bandwidth and latency constraints alter viable learning methods?
352. When is periodic batch retraining preferable to continuous online updates?
353. How does edge/on-device learning differ from server-side adaptation?
354. How should update frequency trade freshness against stability and cost?
355. How can replay buffers be bounded without severe forgetting?
356. How do compressed/quantized models adapt after deployment?
357. How do energy constraints affect continual learning?
358. How does model-size growth conflict with lifelong learning?
359. How should adaptation operate when raw historical data cannot be retained?
360. What performance metrics include resource cost rather than accuracy alone?

## 32. Safety, fairness and undesirable adaptation

361. How can adaptation amplify spurious or harmful feedback?
362. What is feedback-loop bias in deployed learning systems?
363. How can personalization produce filter bubbles or discriminatory outcomes?
364. How does online learning react to malicious/adversarial data poisoning?
365. What is catastrophic adaptation to a corrupted stream?
366. How can protected constraints remain stable while other behavior adapts?
367. How does fairness drift over time?
368. How can models detect that optimization is moving away from intended objectives?
369. How do safe-update/rollback mechanisms differ from ordinary regularization?
370. When should adaptation be blocked pending human review?
371. How are audit trails maintained for continuously changing models?
372. How does value/objective drift differ from statistical concept drift?

## 33. Evaluation of adaptive and continual systems

373. Which metrics capture average accuracy, forgetting, forward transfer and backward transfer?
374. How are adaptation speed and steady-state performance jointly measured?
375. How should performance be evaluated before, during and after drift?
376. What baselines are required to show adaptation actually helps?
377. How should memory, compute and communication costs enter benchmarks?
378. How do known task boundaries bias evaluation relative to real deployment?
379. How do static benchmark sequences misrepresent open-ended streams?
380. How should recurring concepts be evaluated?
381. How can benchmark order strongly affect continual-learning conclusions?
382. How are multiple random task orders used?
383. How should uncertainty/calibration be evaluated during adaptation?
384. How do robustness and fairness metrics evolve over time?
385. How are per-user/per-domain failures hidden by average metrics?
386. How should negative transfer be reported?

## 34. Real-world deployment and monitoring

387. What signals should be monitored after deployment?
388. How are drift detection, retraining, validation and rollout orchestrated?
389. What is shadow deployment or canary evaluation for adaptive models?
390. How should rollback work after a harmful update?
391. How is versioning handled when models update frequently?
392. How do delayed labels complicate monitoring?
393. How can silent performance decay be detected?
394. How do distribution monitors differ from outcome monitors?
395. How are human review and operational constraints integrated?
396. How does adaptation interact with regulatory/audit requirements?
397. How should deployed systems distinguish temporary incidents from persistent shift?
398. What is the boundary between ML adaptation algorithm and MLOps lifecycle?

## 35. Крупные споры, сохранённые для A2/B

1. Batch retraining vs continuous/online adaptation.
2. Stability vs plasticity as the central continual-learning trade-off.
3. Retaining old knowledge vs intentionally forgetting obsolete knowledge.
4. Replay vs regularization vs modular/dynamic architectures.
5. Fixed task boundaries vs task-free/open-ended continual learning.
6. Transfer as benefit vs negative transfer/interference.
7. Domain adaptation vs domain generalization vs test-time adaptation.
8. Fast meta-learned adaptation vs broad out-of-distribution generalization.
9. Multi-task sharing vs task-specific specialization.
10. Curriculum/active selection vs passive exposure to data.
11. Self-supervised representation learning vs task-specific supervision for adaptability.
12. Model-free vs model-based adaptive policy learning.
13. RL adaptation vs adaptive-control guarantees.
14. Global model vs personalized/local models.
15. Centralized adaptation vs federated/distributed adaptation.
16. Reacting to detected shift vs proactively learning invariant/causal structure.
17. Parameter adaptation vs architecture/capacity adaptation.
18. Adapt everything vs preserve protected invariants/constraints.
19. Maximum performance vs resource-bounded sustainable adaptation.
20. Continuous improvement vs harmful feedback loops and unsafe drift.
21. Average benchmark performance vs individual/domain worst-case adaptation.
22. “Learning from experience” as weight update vs broader memory/context/system adaptation.

## 36. A1 breadth check

Карта сверена по независимым ветвям:
- basic learning paradigms and adaptation definitions;
- online/stream learning;
- concept drift detection/adaptation;
- continual/lifelong learning settings;
- stability–plasticity and loss of plasticity;
- replay, regularization and parameter isolation;
- dynamic architectures;
- transfer learning;
- domain adaptation/generalization and OOD evaluation;
- test-time adaptation;
- meta-learning/few-shot adaptation;
- multi-task learning;
- curriculum/self-paced learning;
- active learning;
- self-supervised representation learning;
- reinforcement learning and meta-RL;
- adaptive control;
- personalization;
- federated/distributed adaptation;
- uncertainty/novelty as adaptation triggers;
- robust/invariant/causal learning;
- hyperparameter/optimizer adaptation;
- data selection/memory policies;
- resource constraints;
- safety/fairness under adaptation;
- evaluation and real-world monitoring.

После этих проверок новые обзорные результаты в основном добавляли детали внутри уже найденных ветвей, а не новые крупные оси. Это **первичная A1-картография**, а не финальный A2 coverage audit.

## 37. A2 — финальные межобластные уточнения и новые вопросы

После межобластной сверки и fresh-source coverage pass новой самостоятельной ML-adaptation ветви не обнаружено. Главные поправки относятся к **what changes, transient vs persistent adaptation, beneficial forgetting, replay vs abstraction, drift attribution, personalization vs individualization и limits of RL/credit-assignment transfer**.

### Новые вопросы A2

399. Какой именно объект меняется в каждом adaptation regime: parameters, adapters/modules, representation, policy, optimizer/update rule, normalization/statistics, routing, architecture, replay buffer or data weighting?
400. Как различать **adaptation target** и **persistence timescale**: временное test-time state, session-local state, persistent external state, adapter/module change и base-parameter change?
401. Какие forms adaptation reversible/rollbackable, а какие practically irreversible without restoring an older checkpoint/state?
402. Как проверить, что behavioral change обусловлен конкретным adaptation target, а не одновременно изменившимися data selection, routing or environment?

403. Как catastrophic forgetting отличается от loss of plasticity/catastrophic remembering и почему улучшение одного показателя может ухудшать другой?
404. Когда сохранение old knowledge полезно, а когда старые constraints мешают learning of new structure?
405. Какие criteria позволяют считать forgetting **beneficial/functional**, а не accidental degradation?
406. Как distinguishing obsolete, currently inactive and potentially recurring knowledge меняет forgetting/retention policy?
407. Как finite model/replay/resource capacity задаёт неизбежный trade-off между retention breadth и future plasticity?

408. Чем experience replay принципиально отличается от abstraction/generalization of experience?
409. Какие последствия имеют replay sampling policies based on recency, similarity, rarity, surprise, uncertainty or reward?
410. Как replay buffer composition itself becomes a source of path dependence and selection bias?
411. Когда generative replay preserves useful distributional structure, а когда синтетические ошибки начинают self-reinforce?
412. Как доказать, что replay поддержал transferable knowledge, а не только rehearsed benchmark-specific behavior?

413. Как отличить **environment/data drift** от learner/model drift when performance changes over time?
414. Как distinguish covariate/data drift, concept drift, label/preference drift and objective/value drift?
415. Когда detected shift достаточно устойчив и значим для adaptation, а когда это noise/transient regime?
416. Как отсутствие immediate ground-truth feedback влияет на ability to decide whether adaptation is warranted?
417. Какие baselines/monitoring signals нужны, чтобы понять: ухудшилась модель, изменилась среда или произошли оба процесса?
418. Как recurring regimes должны храниться/переиспользоваться без предположения, что newest regime permanently supersedes all earlier ones?

419. Чем user personalization отличается от history-dependent **individualization of the adaptive system itself**?
420. Как отличить estimated user preference, current interaction pattern and enduring preference when all three drift over time?
421. Как recommendation/personalization feedback loop `estimate → exposure → user response → updated estimate` может создавать artificial preference reinforcement?
422. Когда highly personalized output remains purely externally optimized user-model behavior rather than evidence of system’s own acquired values/interests?

423. Какие элементы RL credit assignment legitimately useful для long-horizon agent interaction when reward is sparse/delayed?
424. Какие RL assumptions fail when there is **no predefined scalar reward/objective** corresponding to “good personal development” or “meaningful experience”?
425. Почему accurate credit assignment to a supplied reward still does not solve which consequences should become significant without preset values?

426. Как meta-learning/learned update rules change future adaptability without implying development of goals, values or identity?
427. Как data selection, curriculum and active querying alter future trajectory even when base update algorithm is unchanged?
428. Какие constraints/objectives should remain protected invariants while lower-level behavior adapts, and how does this differ from freezing a personality?
429. Как measure positive transfer, negative transfer, forgetting, adaptation speed, calibration and worst-case behavior together rather than optimizing one aggregate score?
430. Какой evidence нужен, чтобы claim “continual adaptation helped” survived changing task order, random seeds, resource budgets and unseen future regimes?
431. Какие properties ML stability–plasticity genuinely abstract through №7, а какие remain algorithm/substrate-specific and cannot be justified by neuroscience №6?
432. Какие ML mechanisms are merely candidate engineering tools for №9 rather than evidence that the future participant can naturally form individuality?

## 38. A2 — ownership corrections после межобластной сверки

Для фазы B №10 отвечает за **formal/engineering mechanisms of adaptation**, а не за psychological or agent-level meaning of experience.

№10 поддерживает cross-area gaps 3, 8, 9, 13, 15 и 18 через:
- explicit adaptation target;
- persistence/reversibility;
- replay/transfer/generalization distinctions;
- retention vs beneficial forgetting;
- drift attribution;
- delayed-credit formalism.

Handoffs:
- psychological learning/no-update → №3;
- biological plasticity → №6;
- substrate-neutral stability/path dependence → №7;
- LLM-specific adaptation/context → №8;
- concrete agent experience lifecycle/choice loop → №9;
- actual ChatGPT mechanisms → №11.

Ключевые границы:
- **personalization ≠ individualization**;
- **reward optimization ≠ motivation/value**;
- **replay ≠ abstraction/understanding**;
- **retention ≠ always beneficial**;
- **environment drift ≠ learner drift**;
- **ML stability–plasticity ≠ neuroplasticity**.

## 39. Финальный coverage audit A2

Повторно проверены:
- continual learning with loss of plasticity;
- catastrophic remembering/controlled forgetting;
- online test-time adaptation;
- concept/data drift and unlabeled drift detection;
- replay and transfer;
- task-aware vs task-agnostic continual adaptation;
- long-horizon temporal credit assignment;
- personalization/recommendation feedback loops;
- evolving user preferences and continual recommendation.

После последних источников новые находки укладывались в вопросы №399–432 или существующие A1-блоки. **Новой крупной самостоятельной ветви не появилось.**

## Статус

**A2 №10 завершена как финальная картография области.** Карта теперь содержит 398 вопросов A1 + 34 уточняющих вопроса A2 (№399–432), ownership corrections и final coverage audit.

A2 не означает глубокого решения этих вопросов. Источники использованы для проверки структуры, границ и полноты карты; глубокое сравнение concrete continual/adaptive algorithms относится к фазе B.

**Следующий шаг общего процесса:** отдельным полноценным проходом начать **A2 №11 «Возможности ChatGPT»**.
## Phase B — B5 final 16.10.2026
- B5 delayed causal credit completed by saturation.
- Later outcome is not converted directly into a lesson; it first supports a revisable causal-contribution attribution.
- Temporal order alone is insufficient; preserve competing/direct/mediated/enabling/joint/redundant/exogenous paths and attribution uncertainty.
- Decision quality is separate from realized terminal outcome; luck, rescue and exogenous failure must not be mislearned.
- Retrospective LLM explanation is a candidate attribution, not ground truth.
- Revision scope follows causal support: local / broader / no durable revision.
- Reciprocal participant↔user/environment feedback can itself be part of the causal path.
- Remaining persistence/retrieval/authority mechanics belong to B6.
