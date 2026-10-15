# A1 №10 — Машинное обучение и адаптивные системы: источники картографии

**Назначение:** доказательная опора для первичной карты области. Не глубокий разбор отдельных алгоритмов.

## Continual/lifelong learning

1. **Wang et al. (2023/2024), A Comprehensive Survey of Continual Learning: Theory, Method and Application.** arXiv:2302.00487.  
   **Просмотрено:** abstract and taxonomy summary.  
   **Для карты:** continual learning is organized around settings, stability–plasticity, generalization and resource efficiency; replay, regularization and parameter-isolation/dynamic approaches are distinct families.

2. **Khodaee, Viktor & Michalowski (2024), Knowledge transfer in lifelong machine learning: a systematic literature review. Artificial Intelligence Review 57:217.** DOI: 10.1007/s10462-024-10853-9.  
   **Просмотрено:** abstract and introductory taxonomy.  
   **Для карты:** lifelong learning explicitly emphasizes sequential tasks, accumulated knowledge and transfer across an unbounded sequence.

3. **Dohare et al. (2024), Loss of plasticity in deep continual learning. Nature 632:768–774.** DOI: 10.1038/s41586-024-07711-7.  
   **Просмотрено:** abstract and extended discussion.  
   **Для карты:** loss of plasticity is distinct from catastrophic forgetting; continual systems can fail not only by losing old knowledge but also by becoming worse at acquiring new useful information.

4. **Addressing catastrophic forgetting in class-incremental learning—a survey (2026), Artificial Intelligence Review.** DOI: 10.1007/s10462-026-11575-w.  
   **Просмотрено:** overview/taxonomy excerpts.  
   **Для карты:** class-incremental learning has a refined taxonomy spanning replay, regularization, parameter isolation and hybrid methods and highlights recency bias, resource constraints and theoretical gaps.

## Online learning and concept drift

5. **Hoi et al. (2021), Online learning: A comprehensive survey. Neurocomputing 459:249–289.** DOI: 10.1016/j.neucom.2021.04.112.  
   **Просмотрено:** abstract and introduction.  
   **Для карты:** online learning differs from batch learning by sequential updates and includes full-feedback, limited-feedback and unsupervised settings; regret and sequential decisions are core evaluation ideas.

6. **Online deep learning’s role in conquering the challenges of streaming data: a survey (2025), Knowledge and Information Systems.** DOI page reviewed.  
   **Просмотрено:** abstract and challenge taxonomy.  
   **Для карты:** streaming deep learning brings together concept drift, catastrophic forgetting, skewed learning and dynamic network adaptation.

7. **Lu et al. (2018), Learning under Concept Drift: A Review. IEEE TKDE.**  
   **Просмотрено:** abstract.  
   **Для карты:** concept drift is not merely distribution shift detection; the field explicitly separates detection, understanding and adaptation.

8. **Lukats et al. (2024/2025), A benchmark and survey of fully unsupervised concept drift detectors on real-world data streams. International Journal of Data Science and Analytics.** DOI page reviewed.  
   **Просмотрено:** abstract.  
   **Для карты:** ground-truth labels may be unavailable at drift time, making unsupervised detection a separate research branch.

9. **Suárez-Cetrulo, Quintana & Cervantes (2023), A survey on machine learning for recurring concept drifting data streams. Expert Systems with Applications 213:118934.** DOI: 10.1016/j.eswa.2022.118934.  
   **Просмотрено:** abstract/highlights.  
   **Для карты:** recurring concepts/regimes, active vs passive adaptation, model reuse and meta-learning are separate problems from one-way drift.

## Distribution shift, domain adaptation/generalization and test-time adaptation

10. **Xiao & Snoek (2024), Beyond Model Adaptation at Test Time: A Survey.** arXiv:2411.03687.  
    **Просмотрено:** abstract and taxonomy.  
    **Для карты:** test-time adaptation may alter model, inference, normalization, sample or prompt; it is a distinct deployment-time adaptation paradigm.

11. **Liang, He & Tan (2023), A Comprehensive Survey on Test-Time Adaptation under Distribution Shifts.** arXiv:2303.15361.  
    **Просмотрено:** abstract.  
    **Для карты:** test-time domain, batch and online adaptation differ by available test data and update regime.

12. **Yu et al. (2024), A Survey on Evaluation of Out-of-Distribution Generalization.** arXiv:2403.01874.  
    **Просмотрено:** abstract.  
    **Для карты:** OOD evaluation itself splits into performance testing, performance prediction and characterization of safe/risky regions.

13. **Khoee, Yu & Feldt (2024), Domain generalization through meta-learning: a survey. Artificial Intelligence Review 57:285.** DOI: 10.1007/s10462-024-10922-z.  
    **Просмотрено:** abstract.  
    **Для карты:** meta-learning and domain generalization intersect but are not identical; adaptation to unseen domains may be learned at a meta level.

## Meta-learning, active learning and curriculum

14. **Gharoun et al. (2023), Meta-learning approaches for few-shot learning: A survey of recent advances.** arXiv:2303.07502.  
    **Просмотрено:** abstract.  
    **Для карты:** metric-, memory- and learning/optimization-based meta-learning are distinct families; few-shot adaptation is a setting, not a synonym for meta-learning.

15. **Cacciarelli & Kulahci (2024), Active learning for data streams: a survey. Machine Learning 113:185–239.** DOI: 10.1007/s10994-023-06454-2.  
    **Просмотрено:** abstract and listed research questions.  
    **Для карты:** query strategy, query timing, update timing, scalability and evaluation are separate dimensions of adaptive information acquisition.

16. **Di Fiore, Nardelli & Mainini (2024), Active Learning and Bayesian Optimization: A Unified Perspective to Learn with a Goal. Archives of Computational Methods in Engineering 31:2985–3013.** DOI: 10.1007/s11831-024-10064-z.  
    **Просмотрено:** article overview.  
    **Для карты:** active learning and Bayesian optimization are related through acquisition decisions but optimize different targets and should not be conflated.

17. **Nesterova, Skrynnik & Panov (2025), Environments for Automatic Curriculum Learning: A Short Survey. Doklady Mathematics 110:S223–S229.** DOI: 10.1134/S1064562424602099.  
    **Просмотрено:** abstract/introduction.  
    **Для карты:** curriculum learning includes generation and sequencing of tasks and has a distinct evaluation problem involving task environments.

## Representation learning and multi-task learning

18. **Uelwer et al. (2025), A survey on self-supervised methods for visual representation learning. Machine Learning 114:111.** DOI: 10.1007/s10994-024-06708-7.  
    **Просмотрено:** abstract, introduction and taxonomy.  
    **Для карты:** self-supervised representation learning includes pretext, information-maximization, teacher–student, contrastive and clustering families, with learned invariances affecting downstream adaptation.

19. **Abdelsamie, Azab & Hefny (2026), Deep multi-task learning: a review of concepts, methods, and cross-domain applications. International Journal of Data Science and Analytics 21:77.** DOI page reviewed.  
    **Просмотрено:** abstract.  
    **Для карты:** multi-task learning depends on task selection, shared/task-specific components and adaptive balancing and suffers from task interference.

## Reinforcement learning, meta-RL and adaptive control

20. **Beck et al. (2023), A Survey of Meta-Reinforcement Learning.** arXiv:2301.08028.  
    **Просмотрено:** abstract.  
    **Для карты:** meta-RL learns policies capable of fast adaptation across a task distribution; adaptation budget and task distribution are central axes.

21. **Annaswamy et al. (2023), Adaptive Control and Intersections with Reinforcement Learning. Annual Review of Control, Robotics, and Autonomous Systems 6.** DOI: 10.1146/annurev-control-062922-090153.  
    **Просмотрено:** abstract.  
    **Для карты:** adaptive control and RL address uncertain systems differently: adaptive control emphasizes structured models and stability guarantees; RL emphasizes broad policy optimization, often with extensive data/simulation.

22. **Advances and challenges in learning from experience replay (2025), Artificial Intelligence Review.** DOI page reviewed.  
    **Просмотрено:** continual/RL replay and catastrophic-forgetting section.  
    **Для карты:** experience replay sits at the intersection of RL and continual learning and directly exposes the stability–plasticity trade-off.

## Federated/distributed adaptation

23. **Guo et al. (2024), A comprehensive survey of federated transfer learning: challenges, methods and applications. Frontiers of Computer Science 18.** DOI: 10.1007/s11704-024-40065-x.  
    **Просмотрено:** abstract.  
    **Для карты:** federated transfer learning combines transfer under heterogeneous/distributed private data with communication and privacy constraints.

24. **Federated learning design and functional models: survey (2025), Artificial Intelligence Review 58:21.** DOI: 10.1007/s10462-024-10969-y.  
    **Просмотрено:** abstract.  
    **Для карты:** distributed local data, aggregation and knowledge transfer create a different adaptation problem from centralized continual learning.

## Breadth check

Дополнительно проверены branches on continual curricula, OOD/domain shift, self-supervised low-shot transfer, online ensembles, recurring drift and resource-constrained deployment. После этого новые обзорные результаты преимущественно уточняли найденные blocks rather than adding new major axes.

Это достаточно для **первичной A1-картографии**, но не является финальным A2 coverage audit и не означает глубокого исследования отдельных алгоритмов.
