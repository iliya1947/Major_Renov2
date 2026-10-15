# A1 №11 — Возможности ChatGPT

**Статус:** A1 в процессе первичной картографии 15.10.2026.

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
