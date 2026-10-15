# A1 №12 — Prompt engineering и проектные инструкции: источники картографии

**Назначение:** доказательная опора для первичной карты области. Не глубокий разбор отдельных prompting techniques и не проектирование финальных project instructions.

## Общие карты поля

1. **Schulhoff et al. (2024), The Prompt Report: A Systematic Survey of Prompting Techniques.** arXiv:2406.06608.  
   Просмотрено: abstract and taxonomy summary.  
   Для карты: field terminology is fragmented; survey provides a broad taxonomy of prompt techniques and establishes that prompt engineering is wider than a short list of “best practices”.

2. **OpenAI, Prompt engineering guide (current 2026 documentation).**  
   https://developers.openai.com/api/docs/guides/prompt-engineering  
   Просмотрено: current guide sections on message roles, formatting, model-specific behavior, versioning and tests.  
   Для карты: developer/user roles, structured prompt sections, model-specific guidance, prompt versioning and eval-driven maintenance are distinct concerns.

## Instruction hierarchy and instruction following

3. **OpenAI (2026), Improving instruction hierarchy in frontier LLMs.**  
   https://openai.com/index/instruction-hierarchy-challenge/  
   Просмотрено: research overview.  
   Для карты: instructions can come from multiple sources with different authority; reliable prioritization is a trained model capability as well as a prompt-design concern.

4. **Instruction-following evaluation literature (2024–2025).**  
   Просмотрено: benchmark/survey abstracts across ACL literature.  
   Для карты: instruction following must be evaluated by type and composition of constraints rather than treated as one scalar capability.

## Prompt sensitivity, examples and position

5. **Wahle et al. (2024), Paraphrase Types Elicit Prompt Engineering Capabilities. EMNLP 2024.** DOI: 10.18653/v1/2024.emnlp-main.617.  
   Просмотрено: abstract.  
   Для карты: meaning-preserving linguistic reformulations can materially alter task performance, so wording robustness is a separate research branch.

6. **Peng et al. (2024), Revisiting Demonstration Selection Strategies in In-Context Learning. ACL 2024.** DOI: 10.18653/v1/2024.acl-long.492.  
   Просмотрено: abstract.  
   Для карты: demonstration choice is both data- and model-dependent; few-shot prompting requires separate treatment of example selection.

7. **Liu et al. (2024), Instruction Position Matters in Sequence Generation with Large Language Models. Findings of ACL 2024.** DOI: 10.18653/v1/2024.findings-acl.693.  
   Просмотрено: abstract.  
   Для карты: instruction position can alter following behavior in long-input tasks; prompt position is not a neutral formatting detail.

## Role/persona prompting

8. **Zheng et al. (2024), When “A Helpful Assistant” Is Not Really Helpful: Personas in System Prompts Do Not Improve Performances of Large Language Models. Findings of EMNLP 2024.** DOI: 10.18653/v1/2024.findings-emnlp.888.  
   Просмотрено: abstract.  
   Для карты: role/persona prompting does not reliably improve factual-task performance and effects can be model/question dependent. Persona prompting therefore deserves a separate branch from general task specification.

## Iterative revision

9. **Kamoi et al. (2024), When Can LLMs Actually Correct Their Own Mistakes? TACL 12:1417–1440.** DOI: 10.1162/tacl_a_00713.  
   Просмотрено: abstract and survey conclusion.  
   Для карты: internally generated feedback alone has limited demonstrated reliability outside specially suited tasks; externally reliable feedback changes the picture.

## Automatic optimization and evaluation

10. **Ramnath et al. (2025), A Systematic Survey of Automatic Prompt Optimization Techniques. EMNLP 2025.** DOI: 10.18653/v1/2025.emnlp-main.1681.  
    Просмотрено: abstract and framework summary.  
    Для карты: automatic prompt optimization is a distinct field with its own search space, objective, optimization method and evaluation/overfitting issues.

11. **OpenAI, Prompt optimizer (current 2026 documentation).**  
    https://developers.openai.com/api/docs/guides/prompt-optimizer  
    Просмотрено: current guide and deprecation notice.  
    Для карты: optimization is dataset/evaluation-driven and still requires manual checking; product tooling itself can change or be deprecated.

12. **OpenAI, current graders/evaluation documentation.**  
    https://developers.openai.com/api/docs/guides/graders  
    Просмотрено: current overview.  
    Для карты: output quality can be checked through deterministic, similarity, model-based and code-based graders; evaluation design is separate from prompt text.

## Structured outputs

13. **OpenAI, Structured model outputs (current 2026 documentation).**  
    https://developers.openai.com/api/docs/guides/structured-outputs  
    Просмотрено: current guide.  
    Для карты: formal JSON-schema constraints can provide structural guarantees that should not be conflated with natural-language format prompting.

## Multilingual instruction following

14. **Liu et al. (2025), MaXIFE: Multilingual and Cross-lingual Instruction Following Evaluation. ACL 2025.** DOI: 10.18653/v1/2025.acl-long.698.  
    Просмотрено: abstract.  
    Для карты: instruction following varies across languages and cross-lingual settings; multilingual prompting requires localized evaluation.

15. **Dussolle et al. (2025), M-IFEval: Multilingual Instruction-Following Evaluation. Findings of NAACL 2025.**  
    Просмотрено: abstract.  
    Для карты: language-specific instruction constraints make English-only evaluation insufficient.

## Product-level persistent instructions

16. **OpenAI, Projects in ChatGPT (current Help Center documentation).**  
    Просмотрено during A1 №11 and cross-checked for №12 boundary.  
    Для карты: project instructions are persistent project-scoped guidance and override global custom instructions; their existence is a product capability, while how to formulate them belongs in №12.

## Breadth check

Дополнительно просмотрены current OpenAI guidance for newer model families and reasoning-oriented models, long-context prompting, schema-constrained outputs, evaluation-driven development and prompt versioning. New sources after this point mostly added details inside the mapped branches rather than new major branches.

This is sufficient for primary A1 cartography, not a final prompt-engineering prescription.
