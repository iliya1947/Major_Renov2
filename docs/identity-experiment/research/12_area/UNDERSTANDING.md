# A1 №12 — понимание после первичной картографии

**Статус:** A1 выполнена заново 15.10.2026.

## Карта области

1. **Prompt engineering, instruction following и prompt optimization — разные уровни задачи.** Первый проектирует input/instructions; второй описывает способность конкретной модели выполнять instructions; третий автоматически ищет варианты prompt под заданную evaluation objective.

2. **Область нельзя свести к wording.** Существенными отдельными ветвями являются examples, instruction position, long context, multi-turn history, hierarchy, complex constraints, guideline following, evaluation и runtime constraints.

3. **Instruction hierarchy — не просто оформление prompt.** Современные системы получают guidance из источников с разным authority, и способность модели корректно разрешать конфликты сама является отдельным предметом исследования.

4. **Persistent instructions требуют отдельного рассмотрения.** Одноразовые task prompts и долговременные project/domain guidelines имеют разные failure modes: накопление правил, updates, conflicts, history effects и model-version drift.

5. **Long context создаёт отдельную проблему устойчивости.** Наличие правила или факта в контексте не означает, что модель будет одинаково использовать его независимо от position, length и distractors.

6. **Demonstrations не нейтральны.** Они не только поясняют task semantics, но могут переносить style/patterns; их selection зависит от конкретной модели.

7. **Persona prompting — отдельная ветвь, а не доказанный способ улучшения.** Для нашего эксперимента особенно важно позже проверить границу между procedural role и заранее назначенной personality.

8. **Self-critique/self-correction остаётся спорной областью.** Нужно отдельно исследовать условия, при которых correction работает, и не переносить это автоматически на пересмотр долгосрочного опыта.

9. **Robustness/evaluation — часть самого prompt lifecycle.** Prompt нельзя считать устойчивым по одному успешному ответу; нужны perturbations, long-context cases, conflicting constraints, повторные runs, model/version и language checks.

10. **Product/runtime boundaries принципиальны.** Некоторые требования можно обеспечивать schema, permissions или orchestration; нельзя приписывать natural-language instructions гарантии, которые обеспечивает другой слой системы.

11. **Для нашего проекта возникает центральная будущая граница: stable rules против evolving experience.** Постоянные project instructions должны задавать процесс, не превращаясь в заранее записанные values/goals/persona; изменяемый опыт не должен подменять собой governing rules. Это пока только ветвь для A2/B, не решение.

## Результат A1 №12

Построена новая первичная карта из **308 вопросов в 26 блоках**.

В этом проходе вопросы не исследовались глубоко: я использовала систематические обзоры, abstracts отдельных исследований/benchmarks и актуальную официальную документацию для картографии поля. Финальные project instructions не проектировались.
