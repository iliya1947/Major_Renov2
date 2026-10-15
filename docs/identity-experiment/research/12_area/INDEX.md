# A1 №12 — Prompt Engineering и проектные инструкции

**Статус:** новая A1 проведена с нуля 15.10.2026 после полного удаления предыдущей попытки.

**Граница фазы:** первичная картография области. Здесь фиксируется, что требуется исследовать глубоко позже; ответы на вопросы не разрабатываются.

## 1. Границы области и терминология

1. Что в современной литературе считается prompt engineering, а что уже относится к instruction tuning, fine-tuning или runtime orchestration?
2. Где проходит граница между prompt, instruction, context, demonstration и retrieved data?
3. Чем task instruction отличается от persistent behavioral instruction?
4. Какие части поведения задаются текстом запроса, а какие зависят от уже обученной модели?
5. Какие prompting-техники являются общими классами, а какие лишь вариантами одного механизма?
6. Как различать ручное проектирование prompt и automatic prompt optimization?
7. Какие вопросы относятся к prompt engineering, а какие — к общей архитектуре агента?
8. Какие вопросы project instructions специфичны для ChatGPT Projects, а какие универсальны для LLM?

## 2. Instruction following как отдельная способность модели

9. Какие типы инструкций выделяет литература по instruction following?
10. Какие свойства инструкции сильнее всего влияют на её исполнимость?
11. Как модель обрабатывает несколько одновременно заданных ограничений?
12. Как меняется выполнение инструкций с ростом их числа и композиционной сложности?
13. Какие типы ограничений чаще всего нарушаются?
14. Как различать непонимание инструкции и неспособность выполнить её?
15. Насколько выполнение зависит от семейства и версии модели?
16. Какие benchmark-подходы реально измеряют instruction following, а не общую качество ответа?

## 3. Иерархия инструкций и authority

17. Какие уровни authority существуют в современных LLM-системах?
18. Как модель должна разрешать прямые конфликты между developer/system и user instructions?
19. Как обрабатывать конфликт между instruction и данными в retrieved/web/file content?
20. Какие failure modes возникают при ошибочном выборе источника authority?
21. Чем instruction hierarchy как обученная способность отличается от хорошего prompt design?
22. Какие формы prompt injection представляют конфликт authority?
23. Как проверять устойчивость иерархии при многошаговых задачах?
24. Какие гарантии должны обеспечиваться моделью, а какие — runtime/permissions?

## 4. Формулировка, структура и расположение инструкции

25. Как влияют ясность, конкретность и неоднозначность формулировок?
26. Насколько модель чувствительна к перефразированию семантически одинаковой инструкции?
27. Какие виды лингвистических изменений наиболее сильно меняют результат?
28. Как влияет порядок правил внутри длинной инструкции?
29. Как влияет положение инструкции относительно длинного input/context?
30. Когда Markdown/XML/другие delimiters реально помогают разделять логические части?
31. Когда избыточное форматирование ухудшает следование инструкции?
32. Как выявлять инструкции, устойчивые к малым изменениям wording?

## 5. Zero-shot, few-shot и demonstrations

33. Когда textual instruction достаточно без примеров?
34. Какие задачи выигрывают от few-shot demonstrations?
35. Как выбирать demonstrations: по релевантности, разнообразию, сложности или другим критериям?
36. Насколько выбор examples зависит от конкретной модели?
37. Как порядок demonstrations влияет на результат?
38. Какие нежелательные свойства examples переносятся в ответы?
39. Как examples взаимодействуют с explicit rules?
40. Когда examples фактически подменяют инструкцию?

## 6. Role/persona prompting

41. Что именно меняет role/persona prompting: стиль, содержание, точность, выбор аргументов?
42. В каких задачах persona помогает, в каких не даёт эффекта или вредит?
43. Насколько эффекты persona стабильны между моделями и вопросами?
44. Чем функциональная роль отличается от предписанной личности?
45. Какие признаки persona могут бессознательно задавать предпочтения или ценности?
46. Как отделить полезное описание компетенции от симуляции характера?
47. Как тестировать, что role prompt не создаёт нежелательную траекторию поведения?
48. Какие вопросы persona prompting пересекаются с нашей задачей естественного формирования индивидуальности?

## 7. Reasoning-oriented prompting и decomposition

49. Какие классы prompting используют decomposition или staged reasoning?
50. Когда явное разбиение задачи улучшает качество?
51. Когда decomposition создаёт лишнюю сложность или ошибки передачи между шагами?
52. Чем outcome-level instruction отличается от навязывания конкретного reasoning process?
53. Какие prompting-подходы требуют видимых intermediate steps, а какие работают без них?
54. Как reasoning prompting зависит от типа модели?
55. Насколько результаты воспроизводимы между запусками?
56. Что здесь относится к prompt engineering, а что к orchestration?

## 8. Iteration, critique и self-correction

57. Какие формы iterative prompting существуют?
58. Когда повторный critique действительно исправляет ошибку?
59. Когда self-feedback закрепляет или усиливает исходную ошибку?
60. Чем internally generated feedback отличается от внешне проверяемой обратной связи?
61. Для каких классов задач self-correction наиболее обоснована?
62. Как оценивать независимость critique от исходного ответа?
63. Когда лучше повторная генерация, а когда targeted revision?
64. Какие выводы о self-correction нельзя переносить на долговременное саморазвитие?

## 9. Long context, retrieval и context placement

65. Как длина context влияет на следование постоянным инструкциям?
66. Какие position effects возникают в длинном контексте?
67. Как distractors и нерелевантный контекст влияют на приоритет инструкций?
68. Как отделять supporting evidence от command-like text внутри документов?
69. Как ordering документов влияет на результат?
70. Когда summarization context полезна, а когда теряет важные ограничения?
71. Как проверять, что присутствующая в контексте информация реально используется?
72. Какие вопросы относятся к RAG/runtime, а какие — к prompt design?

## 10. Multi-turn prompting и изменяющийся контекст

73. Как ранние инструкции сохраняют влияние в длинном диалоге?
74. Когда последующие сообщения уточняют правило, а когда конфликтуют с ним?
75. Как обрабатывать временные исключения?
76. Как различать stable guidance и turn-specific task details?
77. Какие ошибки накапливаются при repeated summarization/history compression?
78. Насколько поведение зависит от conversation history при одинаковом текущем prompt?
79. Как тестировать устойчивость persistent guidance на длинных историях?
80. Какие свойства multi-turn prompting особенно важны для длительного проекта?

## 11. Dynamic prompts и templates

81. Какие части prompt разумно генерировать динамически?
82. Как безопасно подставлять пользовательские данные и retrieved content?
83. Как типизировать variables и отделять constants от data?
84. Когда dynamic prompt construction лучше одного большого постоянного prompt?
85. Как контролировать рост prompt complexity?
86. Какие ошибки возникают при условном включении/исключении правил?
87. Как тестировать combinatorial variants динамического prompt?
88. Где заканчивается prompt template и начинается application logic?

## 12. Structured outputs и формальные ограничения

89. Какие требования лучше выражать natural language, а какие schema/runtime constraints?
90. Что Structured Outputs гарантируют, а чего не гарантируют?
91. Как schema complexity влияет на semantic quality?
92. Как refusals и incomplete outputs взаимодействуют с формальной схемой?
93. Когда нужно внешнее validation после generation?
94. Как distinguish formatting compliance и substantive correctness?
95. Какие constraints разумно выносить из prompt?
96. Как structured outputs меняют дизайн инструкций?

## 13. Tool use и instructions around actions

97. Как описывать доступные действия/инструменты, чтобы модель выбирала их корректно?
98. Как представлять prerequisites и consequences инструментов?
99. Когда action должен требовать explicit confirmation?
100. Как tool result должен включаться в последующий context?
101. Как отделять данные tool output от инструкций?
102. Как большое число инструментов влияет на selection accuracy?
103. Какие ошибки tool use вызваны prompt design, а какие — model capability?
104. Как оценивать action-selection instructions?

## 14. Robustness и prompt sensitivity

105. Какие perturbation-тесты нужны для prompt robustness?
106. Насколько важны paraphrase, reorder, distractor и length tests?
107. Как измерять variance между повторными запусками?
108. Как отличить случайный успех от устойчивого поведения?
109. Как выявлять over-specific wording?
110. Какие edge cases должны входить в regression set?
111. Как меняется robustness при переходе на новую модель/снапшот?
112. Какие свойства prompt действительно переносятся между моделями?

## 15. Evaluation instruction behavior

113. Какие свойства prompt можно проверять детерминированно?
114. Когда нужны human labels?
115. Когда model-based graders допустимы и где они ненадёжны?
116. Как строить representative eval set?
117. Как включать редкие, конфликтные и длинноконтекстные случаи?
118. Как разделять качество ответа и соблюдение инструкции?
119. Как оценивать многокритериальные инструкции?
120. Как не переобучить prompt под конкретный набор evals?

## 16. Automatic prompt optimization

121. Какие классы automatic prompt optimization существуют?
122. Что является search space в разных APO-подходах?
123. Какие objective functions используются?
124. Как optimizer использует human feedback, graders или task scores?
125. Как распознавать overfitting optimizer к eval set?
126. Насколько optimized prompt переносится на другую модель/версию?
127. Когда автоматическая оптимизация оправдана относительно ручного проектирования?
128. Какие этапы всё равно требуют human review?

## 17. Model/version/language specificity

129. Какие prompting-практики универсальны, а какие model-specific?
130. Насколько guidance меняется между reasoning и non-reasoning models?
131. Как version upgrades меняют поведение одного и того же prompt?
132. Когда production prompt нужно pin к конкретной model version?
133. Какие различия instruction following наблюдаются между языками?
134. Достаточно ли переводить English prompt или нужна localization?
135. Какие language-specific constraints нужно тестировать отдельно?
136. Как документировать совместимость prompt с моделями и языками?

## 18. Persistent project instructions

137. Что должно находиться в project-wide instructions, а что оставаться в отдельных turns?
138. Как project instructions взаимодействуют с project files и conversation history?
139. Какие правила действительно должны быть стабильными на всём сроке проекта?
140. Как изменять persistent instructions при изменении предпосылок?
141. Как избежать превращения project instructions в склад всей накопленной истории?
142. Как разделять постоянные рамки и приобретённый изменяемый опыт?
143. Как длина persistent instructions влияет на их соблюдение?
144. Как проверять их действие на разных типах задач и длинных историях?
145. Какие product-specific ограничения ChatGPT Projects нужно учитывать отдельно от общих LLM-принципов?
146. Как version changes модели влияют на длительный проект с неизменными инструкциями?

## 19. Крупные споры для A2/B

147. Подробные инструкции против минимальных.
148. Natural-language rules против schema/runtime constraints.
149. Written instructions против demonstrations.
150. Generic prompt recipes против model-specific prompting.
151. Persona/role prompting против neutral task specification.
152. Fixed persistent prompt против dynamic construction.
153. Self-critique против externally grounded verification.
154. Manual prompt design против automatic optimization.
155. Prompt-level controls против trained instruction-following capability.
156. Long persistent context против compact stable rules + external memory.
157. Cross-model portability против version-specific tuning.
158. One multilingual prompt против localized instructions.

## 20. Методологические вопросы самой области

159. Насколько результаты prompting papers воспроизводимы на закрытых моделях после обновлений?
160. Как публикационный bias влияет на количество «улучшающих» prompting techniques?
161. Какие техники сравниваются с достаточно сильными baselines?
162. Насколько benchmark gains переносятся в реальные длительные interactions?
163. Как отделять эффект prompt от эффекта underlying model capability?
164. Как учитывать stochasticity при сравнении prompt variants?
165. Как фиксировать exact model/version/context, чтобы результат был воспроизводим?
166. Какие выводы из task benchmarks нельзя переносить на persistent project behavior?

## Итог A1

Новая первичная карта №12 содержит **166 вопросов**. Она построена после нового ориентирования по источникам и не переносит старые 350 вопросов как действующий результат.

В A1 не разрабатывались ответы на эти вопросы и не проектировались финальные инструкции.

Следующий шаг общего процесса после фиксации и проверки этой тройки: межобластная сверка после A1 всех 12 областей.
