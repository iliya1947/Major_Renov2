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
