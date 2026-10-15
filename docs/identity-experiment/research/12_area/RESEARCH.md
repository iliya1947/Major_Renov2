# A1 №12 — Prompt Engineering и проектные инструкции: ориентационные источники

**Назначение:** доказательная опора именно для первичной картографии A1. Здесь фиксируется, что фактически просмотрено; это не глубокое исследование отдельных вопросов.

## Общая структура поля

1. **Schulhoff et al. (2024), The Prompt Report: A Systematic Survey of Prompting Techniques.**
   - https://arxiv.org/abs/2406.06608
   - Просмотрено: abstract и описание taxonomy.
   - Для карты: поле фрагментировано по терминологии; авторы выделяют десятки prompting techniques, поэтому область нельзя свести к короткому набору «best practices».

2. **Sahoo et al. (2024), A Systematic Survey of Prompt Engineering in Large Language Models: Techniques and Applications.**
   - https://arxiv.org/abs/2402.07927
   - Просмотрено: abstract.
   - Для карты: prompt engineering охватывает разные формы prompting, приложения, ограничения и model/task dependence.

3. **Lou, Zhang, Yin (2024), Large Language Model Instruction Following: A Survey of Progresses and Challenges. Computational Linguistics 50(3).**
   - https://aclanthology.org/2024.cl-3.7/
   - Просмотрено: abstract и introduction на доступной веб-странице.
   - Для карты: instruction following — отдельное поле с типами instructions, modeling, datasets, metrics, performance factors и open challenges; его нельзя отождествлять с prompt writing.

## Instruction sensitivity, context и demonstrations

4. **Wahle et al. (2024), Paraphrase Types Elicit Prompt Engineering Capabilities. EMNLP.**
   - https://aclanthology.org/2024.emnlp-main.617/
   - Просмотрено: abstract.
   - Для карты: семантически близкие перефразирования могут заметно менять performance; linguistic sensitivity требует отдельной ветви.

5. **Liu et al. (2024), Instruction Position Matters in Sequence Generation with Large Language Models. Findings of ACL.**
   - https://aclanthology.org/2024.findings-acl.693/
   - Просмотрено: abstract.
   - Для карты: position instruction относительно длинного input может влиять на following; появляется отдельная проблема instruction forgetting.

6. **Liu et al. (2024), Lost in the Middle: How Language Models Use Long Contexts. TACL.**
   - https://aclanthology.org/2024.tacl-1.9/
   - Просмотрено: abstract.
   - Для карты: наличие информации в long context не гарантирует равномерного использования; position и context length нужно исследовать отдельно.

7. **Wu et al. (2025), LIFBench: Evaluating the Instruction Following Performance and Stability of Large Language Models in Long-Context Scenarios. ACL.**
   - https://aclanthology.org/2025.acl-long.803/
   - Просмотрено: abstract.
   - Для карты: long-context instruction following и его stability уже выделяются как самостоятельная evaluation problem.

8. **Peng et al. (2024), Revisiting Demonstration Selection Strategies in In-Context Learning. ACL.**
   - https://aclanthology.org/2024.acl-long.492/
   - Просмотрено: abstract.
   - Для карты: demonstration selection зависит и от данных, и от самой модели; few-shot prompting требует отдельной ветви.

## Complex constraints и guideline following

9. **Zhang et al. (2025), CFBench: A Comprehensive Constraints-Following Benchmark for LLMs. ACL.**
   - https://aclanthology.org/2025.acl-long.1581/
   - Просмотрено: abstract.
   - Для карты: real-world instructions содержат разнообразные constraint types; single-constraint tests недостаточны.

10. **Zou et al. (2025), EIFBENCH: Extremely Complex Instruction Following Benchmark for Large Language Models. EMNLP.**
    - https://aclanthology.org/2025.emnlp-main.1059/
    - Просмотрено: abstract.
    - Для карты: multi-task и multi-constraint instructions формируют отдельную проблему complex instruction following.

11. **Diao et al. (2025), GuideBench: Benchmarking Domain-Oriented Guideline Following for LLM Agents. ACL.**
    - https://aclanthology.org/2025.acl-long.557/
    - Просмотрено: abstract.
    - Для карты: большие наборы domain guidelines, их обновления и конфликт с prior knowledge требуют отдельного исследования persistent guideline following.

## Persona, correction и optimization

12. **Zheng et al. (2024), When “A Helpful Assistant” Is Not Really Helpful: Personas in System Prompts Do Not Improve Performances of Large Language Models. Findings of EMNLP.**
    - https://aclanthology.org/2024.findings-emnlp.888/
    - Просмотрено: abstract.
    - Для карты: persona prompting не является универсальным способом повышения performance; effects зависят от persona/model/question.

13. **Kamoi et al. (2024), When Can LLMs Actually Correct Their Own Mistakes? A Critical Survey of Self-Correction of LLMs. TACL.**
    - https://aclanthology.org/2024.tacl-1.78/
    - Просмотрено: abstract.
    - Для карты: self-correction literature содержит положительные и отрицательные результаты; source of feedback и experimental design критичны.

14. **Ramnath et al. (2025), A Systematic Survey of Automatic Prompt Optimization Techniques. EMNLP.**
    - https://aclanthology.org/2025.emnlp-main.1681/
    - Просмотрено: abstract.
    - Для карты: automatic prompt optimization — отдельная область с search space, objectives, optimization procedures и generalization problems.

## Multilingual instruction following

15. **Dussolle et al. (2025), M-IFEval: Multilingual Instruction-Following Evaluation. Findings of NAACL.**
    - https://aclanthology.org/2025.findings-naacl.344/
    - Просмотрено: abstract.
    - Для карты: instruction following заметно различается между языками; English-only evaluation недостаточна.

16. **Liu et al. (2025), MaXIFE: Multilingual and Cross-lingual Instruction Following Evaluation. ACL.**
    - https://aclanthology.org/2025.acl-long.698/
    - Просмотрено: abstract.
    - Для карты: multilingual/cross-lingual instruction following требует rule-based и model-based evaluation across many languages.

## Instruction hierarchy и product/runtime boundary

17. **OpenAI (2026), Improving instruction hierarchy in frontier LLMs.**
    - https://openai.com/index/instruction-hierarchy-challenge/
    - Просмотрено: research overview.
    - Для карты: надежный выбор более доверенного источника instruction — обучаемая model capability; prompt injection можно рассматривать как failure hierarchy.

18. **OpenAI API, Prompt engineering — актуальная документация 2026.**
    - https://developers.openai.com/api/docs/guides/prompt-engineering
    - Просмотрено: current overview о model-specific prompting, message roles, snapshot variability и необходимости evals.
    - Для карты: prompting practices могут зависеть от model family/snapshot; production behavior требует regression evaluation.

19. **OpenAI API, Structured model outputs — актуальная документация 2026.**
    - https://developers.openai.com/api/docs/guides/structured-outputs
    - Просмотрено: overview.
    - Для карты: часть structural constraints обеспечивается schema/runtime, а не natural-language prompt; нужно исследовать границу ответственности.

20. **OpenAI API, Evaluation best practices / Working with evals — актуальная документация 2026.**
    - https://developers.openai.com/api/docs/guides/evaluation-best-practices
    - https://developers.openai.com/api/docs/guides/evals
    - Просмотрено: overview.
    - Для карты: generative behavior вариативно, поэтому one-shot success недостаточен; eval design — отдельная часть prompt lifecycle.

21. **OpenAI API, Prompt optimizer — актуальная документация 2026.**
    - https://developers.openai.com/api/docs/guides/prompt-optimizer
    - Просмотрено: overview и текущая deprecation note.
    - Для карты: optimizer использует datasets/evaluation signals и требует manual review; tooling itself меняется со временем.

22. **OpenAI Help Center, Projects in ChatGPT — актуальная страница 2026.**
    - https://help.openai.com/ru-ru/articles/10169521-projects-in-chatgpt
    - Просмотрено: разделы project memory/project-only memory и project context.
    - Для карты: project instructions существуют внутри product-level context вместе с chats/files/memory; их реальное взаимодействие нужно исследовать отдельно от generic prompting.

## Граница глубины A1

В этом проходе я сознательно не разбирала механизмы перечисленных техник глубоко и не делала выводов о том, какие именно инструкции нужны будущему эксперименту. Источники использованы для выявления структуры области, крупных ветвей, споров, evaluation-проблем и границ с соседними областями.
