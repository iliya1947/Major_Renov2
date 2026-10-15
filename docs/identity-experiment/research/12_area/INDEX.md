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
