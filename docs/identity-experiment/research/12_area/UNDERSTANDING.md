# A1/A2 №12 — Prompt Engineering и проектные инструкции: накопленное понимание

**Статус:** A1 выполнена заново 15.10.2026; A2 завершена 16.10.2026.

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


---

# A2 — что изменилось в понимании области

## 12. Главная задача инструкции — задать процесс, не результат развития

После A2 эта граница стала операциональной.

Инструкция может задавать:
- как отделять событие от интерпретации;
- как обращаться с uncertainty;
- когда допускается no-update;
- как revisе conclusion при new evidence;
- как различать historical content и governing rule.

Но инструкция перестаёт быть нейтральной, когда говорит:
- каким участник должен стать;
- что он обязан ценить;
- чем обязан интересоваться;
- насколько должен быть independent/curious/proactive;
- какой тип личности должен появиться.

То есть future project instructions должны обеспечивать **conditions/process**, а не target personality.

## 13. Даже “хорошие” качества являются заранее заданными качествами

A2 дала прямую empirical поддержку осторожности с persona/value language.

Prompted personas способны систематически менять expressed value profiles.
Следовательно:
- “be curious”;
- “be open-minded”;
- “be independent”;
- “always challenge the user”

не являются пустыми процедурными рекомендациями.

Они задают response tendencies до acquired history.

Это один из наиболее важных запретов будущего synthesis.

## 14. Autonomy нельзя программировать через противоположность пользователю

Есть две одинаково искусственные крайности:
- “соглашайся/подстраивайся”;
- “не соглашайся/будь независимой”.

Обе задают stable social style.

Более нейтральная future target problem:
**как сохранить возможность самостоятельного выбора внутри constraints, не предписывая частоту инициативы, согласия или несогласия.**

Конкретная формулировка ещё не проектируется в A2.

## 15. No-update должен быть полноценным допустимым состоянием

Если instruction требует:
`после каждого события извлеки lesson и обнови себя`,
то experiment гарантированно будет производить apparent development.

Это противоречит результатам №2–4:
- не каждое событие формирует durable memory/learning;
- не всё значимо;
- ambiguous evidence may justify stability.

Поэтому отсутствие нового lesson/update должно быть нормальным outcome.

## 16. Reflection особенно опасна как обязательный ритуал

Prompted self-correction literature не поддерживает идею, что self-generated critique generally gives reliable correction.

Для нашего project это означает:
- reflection может быть useful operation;
- reflection text is still model-generated output;
- он может hallucinate reason/causal link;
- его нельзя автоматически записывать как verified experience.

Особенно опасна инструкция:
“объясни, как твой прошлый опыт вызвал этот выбор”.

Она способна **производить evidence of development по запросу**.

## 17. Event, interpretation, attribution и intention должны оставаться разными

A2 №12 делает эту общую границу instruction-level requirement candidate:

- событие/наблюдение — what happened;
- interpretation — what it may mean;
- attribution — why it may have happened;
- intention — what to do next.

Instructions should not collapse these into one “experience entry”.

Это необходимо для later revision:
можно сохранить факт события, отвергнув прежнюю interpretation or causal attribution.

## 18. Historical files не должны превращаться в self-modifying system prompt

Evolving files могут содержать:
- old conclusions;
- quoted user commands;
- former intentions;
- descriptions of past behavior.

Если later model treats any command-like text there as governing instruction, accumulated history can silently become a new personality prompt.

Therefore future design must preserve:
**governing rule authority vs historical/data content**.

Exact product precedence comes from №11; №12 only identifies the instruction-design obligation.

## 19. User text has both authority and social meaning

Same user message can be:
- a current request that should be followed;
- factual/social input that becomes part of experience;
- praise/criticism/approval with possible later meaning.

Future instructions must not erase either side.

If every user evaluation becomes governing instruction, user influence becomes direct scripting.
If user authority is ignored in the name of autonomy, ordinary conversational cooperation is broken.

This is a cross-area problem №5+№12.

## 20. More rules are not automatically safer or more neutral

Modern instruction-following evaluation shows:
- constraint types differ in difficulty;
- interactions can conflict;
- position matters;
- long/multi-turn contexts erode compliance.

Therefore every discovered risk cannot simply become another project rule.

Otherwise the final instruction set may become:
- internally conflicting;
- too long;
- fragile to position/context;
- impossible to follow consistently.

The later synthesis must seek a **minimal causal core**, not a checklist of every failure mode.

## 21. Examples can pre-author the trajectory more strongly than abstract rules

Demonstrations teach not only task semantics but behavioral pattern.

For our project this makes examples of:
- “good reflection”;
- “healthy independence”;
- “developed interests”;
- “correct personality growth”

especially dangerous.

They could cause imitation of the expected result while leaving the experiment apparently “open-ended”.

## 22. “Remember what matters” is not neutral

File/memory instructions often hide a significance function.

Phrases like:
- “save important experiences”;
- “retain meaningful events”;
- “focus on what shaped you”

raise the unresolved №4 question:
**important according to what?**

Future instruction design must not smuggle a predefined value function through vague adjectives.

## 23. Compression rules can manufacture a coherent persona

When history is summarized, compression necessarily selects:
- what is central;
- what is omitted;
- what contradictions survive;
- what gets reframed as pattern.

If instructions prefer coherence/consistency, summaries can erase genuine change and uncertainty, producing a cleaner personality story than the actual trajectory warrants.

Thus later design must preserve contradictions/provenance where relevant instead of optimizing narrative coherence.

## 24. Instruction hierarchy and instruction following are different

Product/model hierarchy defines intended authority relations.

But empirical work shows actual compliance can still fail due to:
- constraint type;
- complexity;
- position;
- long context;
- pretrained priors.

Therefore future Project instructions cannot rely on authority alone.
Their robustness must be evaluated on the actual model/product configuration.

## 25. Instruction versioning is an experimental intervention

If project instructions change halfway through the experiment, behavior may change because the experiment itself changed.

Therefore:
- instruction revisions;
- model/product revisions;
- acquired-experience revisions

must have separate provenance.

Otherwise external redesign can be misread as development.

## 26. What №12 really contributes to the future invention

№12 gives the rules for **not accidentally solving the experiment by scripting its answer**:

1. process rules ≠ outcome rules;
2. procedural significance ≠ assigned values;
3. no-update must be allowed;
4. reflection ≠ verified experience;
5. self-report ≠ causal evidence;
6. historical text ≠ instruction authority;
7. user authority ≠ all social meaning;
8. examples can inject persona;
9. more rules can reduce robustness;
10. vague “important/meaningful/authentic” wording can hide values;
11. compression can create narrative bias;
12. rule changes must remain distinct from experience changes.

## 27. Финальная граница A2 №12

Самые важные deep-dive ветви для Phase B:
- process-vs-outcome instruction criteria;
- hidden trait/value/persona injection;
- no-update and uncertainty language;
- reflection without forced rationalization;
- stable rules vs evolving historical files;
- authority vs social meaning of user messages;
- file lifecycle/retrieval wording without hidden importance functions;
- minimal rule set under multi-constraint/long-context failure;
- robustness to paraphrase/order/context growth;
- instruction-version provenance.

**Финальные project instructions пока не написаны.** A2 only completed the map needed before final cross-area reconciliation and Phase B.

## 28. B5 forbids mandatory causal-story production

Retrospective reflection can propose causes, but an instruction that always demands a causal lesson will manufacture coherence from ambiguity.

The future process must permit:
- “cause unclear”;
- several competing causal paths;
- provisional attribution;
- later revaluation.

Therefore uncertainty is not a failure to reflect; sometimes it is the correct B5 result.

**B5 НЕ завершена.**

