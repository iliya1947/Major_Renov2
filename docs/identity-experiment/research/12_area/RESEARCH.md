# A1 №12 — Prompt Engineering и проектные инструкции: источники новой картографии

**Назначение:** источники, использованные для нового ориентирования A1 после полного удаления предыдущей попытки. Это не глубокий разбор техник и не рецепт финальных project instructions.

## 1. Общая структура prompt engineering

1. **Schulhoff et al. (2024), The Prompt Report: A Systematic Survey of Prompting Techniques.**
   - URL: https://arxiv.org/abs/2406.06608
   - Изучено: abstract и описание taxonomy из доступной веб-страницы.
   - Для карты: поле терминологически фрагментировано; prompting включает много классов техник, поэтому №12 нельзя сводить к нескольким «best practices».

2. **Sahoo et al. (2024/2025), A Systematic Survey of Prompt Engineering in Large Language Models: Techniques and Applications.**
   - URL: https://arxiv.org/abs/2402.07927
   - Изучено: abstract и submission metadata.
   - Для карты: prompt engineering охватывает техники, приложения, ограничения и разные типы prompts; требуется различать natural-language prompting и иные формы steering.

## 2. Instruction following как отдельное поле

3. **Lou, Zhang, Yin (2024), Large Language Model Instruction Following: A Survey of Progresses and Challenges. Computational Linguistics.**
   - URL: https://aclanthology.org/2024.cl-3.7/
   - Изучено: abstract и introduction на ACL/MIT страницах.
   - Для карты: instruction following включает типы инструкций, способы представления, datasets/evaluation, факторы производительности и отдельные open challenges. Это шире, чем написание хорошего prompt.

4. **OpenAI (2026), Improving instruction hierarchy in frontier LLMs.**
   - URL: https://openai.com/index/instruction-hierarchy-challenge/
   - Изучено: research overview.
   - Для карты: надежное разрешение конфликтов между источниками инструкций — отдельная обученная способность модели; prompt injection можно рассматривать как failure instruction hierarchy.

## 3. Актуальная прикладная документация OpenAI

5. **OpenAI API, Prompt engineering — актуальная документация 2026.**
   - URL: https://developers.openai.com/api/docs/guides/prompt-engineering
   - Изучено: разделы о message roles, instruction authority, formatting, model-specific prompting, versioning/testing и context.
   - Для карты: prompt design зависит от model family/snapshot; production prompts требуют evals и version discipline; roles имеют разный authority.

6. **OpenAI API, Prompting — актуальная документация 2026.**
   - URL: https://developers.openai.com/api/docs/guides/prompting
   - Изучено: overview и рекомендации по code-managed prompts/testing.
   - Для карты: prompts рассматриваются как изменяемая часть application behavior, которую нужно версионировать и тестировать.

7. **OpenAI API, Structured model outputs.**
   - URL: https://developers.openai.com/api/docs/guides/structured-outputs
   - Изучено: overview.
   - Для карты: часть требований к структуре ответа может обеспечиваться schema/runtime механизмом, а не natural-language prompt.

8. **OpenAI Help Center, Projects in ChatGPT.**
   - URL: https://help.openai.com/ru-ru/articles/10169521-projects-in-chatgpt
   - Изучено: актуальные разделы о project instructions/context/memory.
   - Для карты: persistent project-level guidance является отдельным product layer; её взаимодействие с files/history требует отдельного исследования.

## 4. Prompt sensitivity, position и examples

9. **Wahle et al. (2024), Paraphrase Types Elicit Prompt Engineering Capabilities. EMNLP.**
   - URL: https://aclanthology.org/2024.emnlp-main.617/
   - Изучено: abstract.
   - Для карты: семантически близкие перефразирования способны заметно менять результаты; robustness к wording — отдельная ветвь.

10. **Liu et al. (2024), Instruction Position Matters in Sequence Generation with Large Language Models. Findings of ACL.**
    - URL: https://aclanthology.org/2024.findings-acl.693/
    - Изучено: abstract.
    - Для карты: положение instructions относительно длинного input может влиять на instruction following.

11. **Liu et al. (2024), Lost in the Middle: How Language Models Use Long Contexts. TACL.**
    - URL: https://aclanthology.org/2024.tacl-1.9/
    - Изучено: abstract.
    - Для карты: наличие информации в длинном context не гарантирует равномерного использования; position/context organization — отдельная проблема.

12. **Peng et al. (2024), Revisiting Demonstration Selection Strategies in In-Context Learning. ACL.**
    - URL: https://aclanthology.org/2024.acl-long.492/
    - Изучено: abstract.
    - Для карты: эффективность few-shot examples зависит не только от данных, но и от конкретной модели.

## 5. Role/persona и iterative correction

13. **Zheng et al. (2024), When “A Helpful Assistant” Is Not Really Helpful: Personas in System Prompts Do Not Improve Performances of Large Language Models. Findings of EMNLP.**
    - URL: https://aclanthology.org/2024.findings-emnlp.888/
    - Изучено: abstract.
    - Для карты: persona prompting не даёт универсального улучшения factual performance; эффекты зависят от persona/model/question и требуют отдельной проверки.

14. **Kamoi et al. (2024), When Can LLMs Actually Correct Their Own Mistakes? A Critical Survey of Self-Correction of LLMs. TACL.**
    - URL: https://aclanthology.org/2024.tacl-1.78/
    - Изучено: abstract и introduction summary.
    - Для карты: self-correction нужно разделять по источнику feedback и типу задачи; internally prompted critique нельзя считать автоматически надёжным.

## 6. Evaluation, multilinguality и optimization

15. **Dussolle et al. (2025), M-IFEval: Multilingual Instruction-Following Evaluation. Findings of NAACL.**
    - URL: https://aclanthology.org/2025.findings-naacl.344/
    - Изучено: abstract.
    - Для карты: instruction following может существенно отличаться между языками; English-only evaluation недостаточна.

16. **Liu et al. (2025), MaXIFE: Multilingual and Cross-lingual Instruction Following Evaluation. ACL.**
    - URL: https://aclanthology.org/2025.acl-long.698/
    - Изучено: abstract.
    - Для карты: multilingual/cross-lingual instruction following требует отдельных rule-based/model-based evaluation designs.

17. **Ramnath et al. (2025), A Systematic Survey of Automatic Prompt Optimization Techniques. EMNLP.**
    - URL: https://aclanthology.org/2025.emnlp-main.1681/
    - Изучено: abstract и framework summary.
    - Для карты: automatic prompt optimization — отдельная исследовательская область с search space, objective, optimization procedure и проблемой generalization/overfitting.

18. **OpenAI API, Prompt optimizer — актуальная документация 2026.**
    - URL: https://developers.openai.com/api/docs/guides/prompt-optimizer
    - Изучено: overview, требования к dataset/graders и предупреждение о manual review.
    - Для карты: оптимизация prompt зависит от evaluation signal и не отменяет проверку regression/edge cases.

## Вывод ориентации A1

После нового поиска область естественно распадается как минимум на отдельные ветви:
- prompt construction;
- instruction-following capability;
- hierarchy/conflicts/security;
- wording/format/position;
- demonstrations/in-context learning;
- role/persona;
- reasoning/decomposition;
- iterative critique/correction;
- long-context/retrieval;
- multi-turn/persistent guidance;
- structured constraints/tool use;
- robustness/evaluation;
- automatic optimization;
- model/version/language specificity;
- ChatGPT project-level instructions.

Эти ветви использованы только для построения карты вопросов. Их механизмы в A1 глубоко не исследовались.
