# A1 №11 — Возможности ChatGPT

**Статус:** A1 завершена как первичная картография 15.10.2026.

**Цель:** определить реальные product-level возможности и ограничения ChatGPT, которые позже нужно будет исследовать глубоко при проектировании эксперимента. Здесь не проектируются итоговые инструкции и не выбирается финальная структура файлов.

## 1. Граница продукта

1. Какие возможности принадлежат selected model, а какие интерфейсу ChatGPT?
2. Какие возможности принадлежат Projects, а какие обычному chat?
3. Какие возможности создаются plugins/apps, а не ChatGPT без подключения?
4. Как Chat, Work, Codex и Voice различаются как product surfaces?
5. Какие функции доступны только через desktop app?
6. Какие функции выполняются cloud-side, а какие требуют local device?
7. Что сохраняется между turns, chats, projects and devices?
8. Какие properties зависят от plan, region, workspace and role?
9. Какие product features могут изменяться независимо от model version?
10. Как отделять documented capability от behavior observed в одном account?

## 2. Projects как контейнер контекста

11. Что именно Projects объединяют: chats, files/sources and project instructions?
12. Какие элементы проекта доступны новой беседе внутри проекта?
13. Как project context отличается от ordinary chat history?
14. Можно ли перемещать существующие chats в project и какие chats не eligible?
15. Что происходит с moved chat после inheritance project instructions/file context?
16. Как chats удаляются из project без удаления самого chat?
17. Как branching сохраняет original thread и создаёт новую conversation?
18. Какие project elements persist across devices?
19. Какие limits apply to number of projects?
20. Какие project behaviors отличаются в shared и private projects?

## 3. Project instructions

21. Где project instructions задаются и редактируются?
22. Как их scope отличается от global custom instructions?
23. В каком смысле project instructions override global custom instructions?
24. Как instruction changes влияют на future conversations in project?
25. Как изменения инструкций взаимодействуют с existing conversation history?
26. Как conflict между project instructions и user request разрешается?
27. Какие length/format limits применяются?
28. Как project instructions представляются разным models?
29. Как changes to project instructions можно audit/reconstruct?
30. Какие вопросы относятся уже к area №12 prompt engineering?

## 4. Project sources and uploaded files

31. Какие file types можно добавлять как project sources?
32. Чем uploaded files отличаются от pasted text sources?
33. Как sources становятся доступными model during chat?
34. Как relevant passages выбираются из project sources?
35. Все ли project files доступны каждой беседе проекта?
36. Что происходит при удалении source?
37. Как обрабатываются duplicate file names?
38. Как представляются updated versions source material?
39. Какие source operations может выполнять assistant, а какие только user?
40. Чем project-source operations отличаются от Library?

## 5. Saving generated content as project sources

41. Какие assistant responses можно сохранить как project sources?
42. Чем saved response отличается от ordinary chat history?
43. Становится ли saved response обычным retrievable source?
44. Как сохраняется provenance к originating chat?
45. Можно ли saved response позже заменить или обновить?
46. Что происходит, если исходный chat удалён?
47. Как saved responses учитываются в project limits?
48. Как обрабатывать contradictory saved sources?
49. Какие metadata сохраняются?
50. Чем reuse saved source отличается от memory personalization?

## 6. Default project memory

51. Что default memory позволяет project chats reference?
52. Как behavior differs across Plus/Pro, Business, Enterprise and Edu?
53. Когда project chat может reference conversations outside project?
54. Могут ли outside chats reference project conversations?
55. Как saved memories combined with project chat context?
56. Как project chats/files prioritized relative to broader memory?
57. Что происходит при отключённой account Memory?
58. Как быстро memory-setting changes take effect?
59. Как default memory взаимодействует с moved chats?
60. Какие controls позволяют исключить конкретную conversation из future context?

## 7. Project-only memory

61. Что именно изолирует project-only memory?
62. Какие account memories исключаются?
63. Могут ли chats внутри одного project reference друг друга?
64. Может ли external chat reference project-only conversation?
65. Может ли project-only chat reference another project?
66. Почему shared projects automatically project-only?
67. Можно ли private project позже переключить обратно на default memory?
68. Какие account settings нужны для project-only memory?
69. Почему нет списка individual project memories?
70. Как project-only memory взаимодействует с deletion/moving of chats?

## 8. Account memory and personalization

71. Какие sources может использовать improved Memory?
72. Чем memory отличается от explicit custom instructions?
73. Что такое memory summary и чего он не показывает?
74. Что означают Sources под personalized response?
75. Какие source types могут появляться в provenance?
76. Как corrected remembered information применяется?
77. Чем “don’t mention this again” отличается от deletion?
78. Какие исходные sources нужно удалить для полного удаления информации?
79. Как account/workspace memory settings affect Projects?
80. Насколько предсказуемо, какая remembered information будет использована на turn?

## 9. Chat history, search and continuity

81. Как users search past chats, projects and files?
82. Что именно ищет sidebar search?
83. Чем archived chats отличаются от deleted chats для context/memory?
84. Что происходит с project context после deletion relevant chat?
85. Как chat branching влияет на continuity?
86. Чем pinning отличается от project membership?
87. Какая информация из earlier chat доступна без reopening it?
88. Как length conversation влияет на использование раннего content?
89. Чем cross-chat reference отличается от direct source retrieval?
90. Как различать remembered context и explicit project-source lookup?

## 10. Temporary chat

91. Что Temporary chat исключает из history?
92. Может ли Temporary chat использовать existing personalization?
93. Чем Personalized и Unpersonalized temporary modes отличаются?
94. Почему temporary chats не создают/update memory?
95. Что происходит, если temporary chat сохранить?
96. Можно ли unsaved temporary chat переместить в project?
97. Как files обрабатываются в temporary chats?
98. Какое retention возможно ради safety?
99. Как custom instructions/plugins взаимодействуют с temporary personalization?
100. Почему Temporary chat не подходит как persistent experimental substrate?


## 11. File upload capabilities and limits

101. What file formats are supported across ChatGPT surfaces?
102. What per-file size limits apply?
103. What token limits apply to textual documents?
104. What spreadsheet/image-specific limits apply?
105. What upload-rate limits apply?
106. What total Library storage limits apply?
107. What per-project file-count limits apply by plan?
108. What happens when file/storage limits are reached?
109. How do parsing capabilities differ among PDFs, documents, spreadsheets and images?
110. Which file-processing behaviors vary by model or tool availability?

## 12. Library

111. Which uploaded/generated files are automatically saved to Library?
112. How does Library persistence differ from chat attachment persistence?
113. Does deleting a chat delete its Library file?
114. How can a Library file be reused in another conversation?
115. How can Library files be searched and filtered?
116. How do connected-cloud files appear alongside locally stored Library files?
117. Which file/folder operations are supported in Library?
118. How does Library storage interact with upload quotas?
119. Which surfaces can access full Library versus recent files only?
120. How should Library be distinguished from project sources?

## 13. Connected apps and plugins

121. What is the product distinction between plugin, connected app, skill and extension?
122. How are plugins installed and discovered?
123. When does a plugin require separate account authorization?
124. Which connected apps provide read-only versus write actions?
125. How does app availability depend on plan, region, role and interface?
126. Can ChatGPT automatically select a relevant installed plugin?
127. How are app actions constrained by provider permissions?
128. How do workspace admins restrict apps/plugins?
129. How do app failures differ from model failures?
130. How should external account state be separated from persistent internal ChatGPT state?

## 14. App links as project sources

131. Which app links can currently be added as project sources?
132. How do Google Drive files/folders behave as project sources?
133. How do Slack channels behave as project sources?
134. Does adding a link copy content or preserve connection to the external source?
135. How are external-source permission changes reflected?
136. How does linked-source freshness differ from uploaded snapshot files?
137. What happens when an external source becomes unavailable?
138. What does sync mean for connected sources?
139. Why can app sync behavior differ when used inside a project?
140. How should linked dynamic sources be versioned for reproducible experiments?

## 15. Connected-app permissions and actions

141. What permissions determine whether ChatGPT may read versus act?
142. How do provider permissions differ from ChatGPT app permissions?
143. Which actions require confirmation or approval?
144. How does least-privilege access work across apps?
145. How are multiple connected accounts handled?
146. What happens when authorization expires?
147. How can a user review or revoke app permissions?
148. How do workspace defaults constrain personal app settings?
149. How are tool/action failures surfaced?
150. What audit information exists for app actions?

## 16. Web search

151. What is standard web search in ChatGPT?
152. When does ChatGPT decide to search versus answer from model knowledge?
153. Can the user explicitly request or restrict search?
154. How are search sources cited?
155. How does web search differ from deep research?
156. How does search differ from browsing through Work/cloud browser?
157. How is freshness handled?
158. How do source quality and ranking affect answers?
159. Can web search access authenticated/private content?
160. Which search capabilities vary by model, plan or workspace?

## 17. Deep research

161. What sources can deep research use by default?
162. How can the user restrict or prioritize websites?
163. Which connected apps are eligible as research sources?
164. Why does deep research use read actions but not app write actions?
165. How is a research plan proposed and edited?
166. Can the user interrupt and redirect research?
167. What citations/source links are included in final report?
168. How does usage vary by plan?
169. How does deep research differ from ordinary multi-turn research in chat?
170. Which parts belong to a separate agent/runtime rather than chat model itself?

## 18. ChatGPT Work

171. What distinguishes Work from ordinary Chat?
172. What kinds of multi-step tasks can Work carry out?
173. How does Work use files, apps and tools?
174. How does Work use project context when launched from a project?
175. Why is Work unavailable in project-only-memory projects?
176. How do cloud and local Work differ?
177. Which surfaces support Work?
178. Can Work continue after user leaves the conversation?
179. When does Work pause for confirmation/sign-in/input?
180. How does Work’s agentic persistence differ from ordinary chat continuity?

## 19. Cloud browser and desktop browser

181. What can the cloud browser read/click/type on supported sites?
182. How are signed-in website sessions handled?
183. How does cloud browser differ from desktop built-in browser?
184. Which tasks can continue remotely?
185. What happens when websites block automated browsing?
186. How is takeover by user handled?
187. How are downloads/files handled in browser tasks?
188. What restrictions apply to transactions or sensitive actions?
189. How do browser actions relate to connected-app actions?
190. What state persists between browser sessions?

## 20. Scheduled and event-triggered tasks

191. What one-time and recurring schedules are supported?
192. What types of monitored conditions/events are supported?
193. Which app events can trigger tasks?
194. How are notifications delivered?
195. How are tasks reviewed, edited, paused or deleted?
196. What approvals can pause a scheduled task?
197. What context does a task retain between runs?
198. Why can a scheduled task created in a project fail to access uploaded/project files?
199. How do event-triggered tasks depend on app permissions and Work availability?
200. Which plans/workspaces support event-triggered tasks?


## 21. Model selection and thinking levels

201. Which model families are currently selectable in ChatGPT?
202. How do Instant, Medium, High, Extra High and Pro differ as product controls?
203. Which thinking levels depend on plan?
204. How do explicit model selection and default/Latest behavior differ?
205. Can natural-language requests to “think harder” change selected effort?
206. How can workspace admins restrict models?
207. How do models available in Chat differ from Work or Codex?
208. How do model rollouts affect reproducibility over time?
209. How are legacy models exposed?
210. What metadata should an experiment record about model and thinking mode?

## 22. Context windows and product-managed context

211. What portion of project context is injected or retrieved on a given turn?
212. How does product-managed retrieval differ from raw model context window?
213. How do uploaded files compete with conversation history for effective context?
214. How are long project histories summarized or selected?
215. What behavior occurs when project context exceeds model limits?
216. How does model selection change available context?
217. How do tool outputs consume context?
218. How are citations/source snippets represented to the model?
219. How should experiment logs distinguish source existence from actual source use?
220. Which context-management details are undocumented implementation behavior?

## 23. Voice and multimodal conversation

221. What does Live Voice support relative to text Chat?
222. Which model powers Voice by plan?
223. Can Voice use memory and web search?
224. Can Voice use plugins/connected apps?
225. Can Voice operate inside Projects and use project sources/instructions?
226. How do Advanced and Standard voice modes differ?
227. Which modes support video/screen sharing?
228. How are voice transcripts/history retained?
229. How does switching between text and voice affect continuity?
230. Which voice features vary by device/region/workspace?

## 24. Images and multimodal files

231. How can images enter ChatGPT: upload, camera, generated image or connected source?
232. Which models/surfaces can reason over images?
233. How are image outputs saved and reused?
234. How do vision inputs count toward context or limits?
235. What image-generation/editing capabilities are available?
236. How does image understanding differ between Chat and Voice?
237. How are multimodal files represented in Projects?
238. What metadata/provenance persists for generated images?
239. How do safety restrictions affect image tools?
240. Which multimodal capabilities are relevant versus irrelevant to a text-centered experiment?

## 25. Document/artifact creation and editing

241. Which document, spreadsheet, presentation and image artifacts can ChatGPT create?
242. How are generated files saved to Library?
243. Can generated artifacts be added to project sources?
244. Which formats can later be reopened and edited?
245. How does source-file editing differ from generating a replacement artifact?
246. Which connected-file formats can be updated at their original source?
247. What collaboration/editing features require opening the original provider app?
248. How is version history handled for edited external files?
249. How are generated artifacts referenced across chats/projects?
250. Which artifact operations depend on specialized tools/plugins?

## 26. Sharing and collaboration

251. What access levels exist in shared Projects?
252. What can chat-access members see/do?
253. What can edit-access members change?
254. How are invitations, group access and link sharing controlled?
255. What changes when a private project becomes shared?
256. Why does sharing force project-only memory?
257. How are project files/chats exposed to collaborators?
258. Can collaborators work synchronously in one chat?
259. How does branching support collaborative exploration?
260. How might collaborators alter the experiential history available to future project chats?

## 27. Privacy, retention and deletion

261. How long are regular chats retained?
262. What happens when a project is deleted?
263. What happens to files stored only in a deleted project?
264. Why can Library files survive deletion of the chat/project that used them?
265. How do workspace retention policies override default behavior?
266. How are deleted custom instructions handled?
267. What may be retained temporarily for safety/debugging?
268. How do consumer and managed-workspace model-improvement policies differ?
269. How do connected-app providers retain data independently of OpenAI?
270. What deletions are needed to remove an experience from all possible persistence surfaces?

## 28. Plan, region, workspace and admin variability

271. Which features vary by Free/Go/Plus/Pro/Business/Enterprise/Edu?
272. Which features are restricted by geographical rollout?
273. How do workspace permissions disable otherwise available tools?
274. How do admin settings alter memory behavior?
275. How do role permissions affect project sharing and app actions?
276. How do model limits and usage quotas vary?
277. Which capabilities are rolling out gradually and therefore account-specific?
278. How should experiments record feature availability at start?
279. How should later product changes be treated without invalidating historical observations?
280. Which account-level settings are experimental conditions rather than model behavior?

## 29. Product drift, reproducibility and undocumented behavior

281. How often do product surfaces, defaults and limits change?
282. How can release notes be used to reconstruct product changes?
283. Which behaviors are guaranteed/documented versus incidental?
284. How should silent backend changes be detected?
285. How can model changes be separated from product-feature changes?
286. How can memory behavior be evaluated when retrieval policies are not fully documented?
287. How should temporary outages/tool errors be separated from capability absence?
288. What evidence is sufficient to claim a feature works consistently?
289. How should experimental records capture date, plan, model, memory mode and enabled tools?
290. How should A2 distinguish durable platform primitives from rapidly changing UI details?

## 30. Boundaries for the future experiment

291. Which project features can provide durable continuity without changing model weights?
292. Which persistence channels are directly inspectable by the user?
293. Which persistence channels are partially opaque?
294. Which project mechanisms can be revised or deleted during the experiment?
295. Which tools introduce external environmental consequences rather than mere conversation?
296. Which capabilities require user approval or are unavailable autonomously?
297. Which features risk substituting pre-authored persona for acquired history?
298. Which product limits constrain a long-running single-project experiment?
299. Which capabilities must be rechecked immediately before experiment launch because they are product-version dependent?
300. Which questions belong to №12 prompt/project-instruction design rather than №11 product capability?

## 31. Крупные споры/неопределённости, сохранённые для A2/B

1. Project files/chats/instructions as shared context vs “memory” as a single construct.
2. Default memory vs project-only memory for an isolated long-term experiment.
3. Explicit inspectable project sources vs opaque personalized memory retrieval.
4. Static uploaded sources vs dynamically connected external sources.
5. Ordinary Chat continuity vs Work agentic execution.
6. Project-only isolation vs access to Work.
7. Library persistence vs project-local persistence.
8. Model-level behavior vs product/runtime scaffolding.
9. Current documented capabilities vs rollout/account-specific behavior.
10. User-controlled persistence vs automatically selected personalization context.
11. Long-lived project history vs effective model context limits.
12. Product feature evolution vs experimental reproducibility.

## 32. A1 breadth check

Карта сверена по официальной документации OpenAI по:
- Projects, project instructions, sources and sharing;
- default/project-only memory;
- account memory and Sources;
- temporary chats;
- file uploads and limits;
- Library and connected cloud files;
- plugins/apps and permissions;
- web search and deep research;
- Work and cloud browser;
- scheduled/event-triggered tasks;
- model selection/thinking levels;
- Voice;
- collaboration, retention and workspace controls;
- release notes/product drift.

После этих проверок новые официальные страницы в основном уточняли plan/UI/permission details внутри уже найденных ветвей. Это **первичная A1-картография**, а не финальный A2 audit.

## Статус

**A1 №11 закрыта именно как первичная картография области.** В этом проходе отдельные вопросы не исследовались глубоко: официальная документация использовалась для построения карты product capabilities, persistence channels, tools and operational constraints.

**Следующий шаг общего процесса:** A1 №12 «Prompt engineering и проектные инструкции».
