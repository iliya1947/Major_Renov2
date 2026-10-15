# A1 №10 — Машинное обучение и адаптивные системы

**Статус:** A1 в процессе первичной картографии 15.10.2026.

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
