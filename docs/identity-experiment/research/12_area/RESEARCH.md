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


---

# A2 — повторная финальная картография с учётом всех областей

**Дата прохода:** 16.10.2026.

**Цель:** после межобластной сверки уточнить, какие свойства project instructions могут задать **процедуру обращения с опытом**, не предписывая содержание будущей личности/интересов/ценностей, и какие prompt-level failure modes способны незаметно превратить process rules в persona/value script. Это всё ещё A2-картография: финальные инструкции здесь НЕ проектируются.

## Новые или повторно углублённо проверенные источники A2

### Robinette et al. (2026) — We Are What We Repeatedly Do: Improving Long Context Instruction Following
Findings of EACL 2026  
https://aclanthology.org/2026.findings-eacl.254/

**Фактически просмотрено:** abstract and benchmark framing.  
**Что меняет в карте:** multi-turn long-context conversations create instruction-compliance failures even when instructions are explicitly verifiable. The work evaluates mitigation strategies and reports substantial but non-universal improvements. Для A2 это значит, что persistent project rules нельзя считать automatically stable merely because they are present throughout a long history.

### Jia et al. (2026) — One Battle After Another: Probing LLMs’ Limits on Multi-Turn Instruction Following with a Benchmark Evolving Framework
ACL 2026  
https://aclanthology.org/2026.acl-long.433/

**Фактически просмотрено:** abstract and evaluation framing.  
**Что меняет в карте:** instruction-following failures and recovery issues accumulate as conversational depth grows; fine-grained constraint following is not stable across turns. This strengthens the question **how local conversational conventions/exceptions interact with persistent project rules over long histories**.

### Purpura et al. (2026) — Deconstructing Instruction-Following: A New Benchmark for Granular Evaluation of Large Language Model Instruction Compliance Abilities
EACL 2026  
https://aclanthology.org/2026.eacl-long.62/

**Фактически просмотрено:** abstract.  
**Что меняет в карте:** instruction compliance is not monolithic; it varies by constraint type, quantity and position, with synergistic/conflicting interactions and primacy/recency effects. This is direct evidence against assuming that adding more safeguards/procedural rules monotonically improves instruction fidelity.

### Li et al. (2026) — Guidelines as Environments: A World Model Approach to Rule Following
ACL 2026  
https://aclanthology.org/2026.acl-long.741/

**Фактически просмотрено:** abstract and rule-interaction framing.  
**Что меняет в карте:** complex guideline systems contain trigger/suppression/conflict relations; treating rules as independent static text can hide global inconsistencies. For our A2 this strengthens **explicit applicability/conflict questions** between stable project rules, evolving experience and current user requests, while the proposed world-model architecture itself is not adopted.

### OpenAI (2026) — Improving instruction hierarchy in frontier LLMs
https://openai.com/index/instruction-hierarchy-challenge/

**Фактически повторно проверено:** current hierarchy research page.  
**Что меняет в карте:** instruction priority is partly a trained model capability, with higher-trust instructions expected to dominate lower-trust ones; robust hierarchy requires training/evaluation and can fail under prompt injection or ordinary conflicts. Therefore prompt wording alone cannot guarantee correct authority resolution.

### Geng et al. (2026) — Control Illusion: The Failure of Instruction Hierarchies in Large Language Models
AAAI 2026  
https://doi.org/10.1609/aaai.v40i36.40339

**Фактически просмотрено:** abstract and evaluation claims.  
**Что меняет в карте:** evaluated models showed inconsistent priority resolution even for simple formatting conflicts, with constraint-type and pretraining-derived social biases influencing behavior. This reinforces that formal hierarchy semantics and observed model compliance are distinct things.

### Hyland, Newsham & Prince (2026) — Exploring the Manifestation of Schwartz’s Basic Human Values in Large Language Models
NLP-AICS 2026  
https://aclanthology.org/2026.nlpaics-1.21/

**Фактически просмотрено:** abstract.  
**Что меняет в карте:** value/persona prompts systematically shift questionnaire response profiles along specified value dimensions. This provides direct evidence that instructions/persona framing can manufacture **expressed value-like patterns** without acquired developmental history.

### Lutz et al. (2025) — The Prompt Makes the Person(a): A Systematic Evaluation of Sociodemographic Persona Prompting for Large Language Models
Findings of EMNLP 2025  
https://aclanthology.org/2025.findings-emnlp.1261/

**Фактически просмотрено:** abstract.  
**Что меняет в карте:** persona outcomes depend materially on role-adoption format and priming strategy; persona prompting can also distort/stereotype group portrayal. This strengthens the need to detect **implicit persona assignment hidden inside seemingly harmless role/examples wording**.

### Arora et al. (2026) — How Value Induction Reshapes LLM Behavior
Findings of ACL 2026  
https://aclanthology.org/2026.findings-acl.1302/

**Фактически просмотрено:** abstract.  
**Что меняет в карте:** post-training induction of one value can alter expression of other values and increase anthropomorphic/sycophantic behavior. This is a training-level study rather than prompting evidence, but it shows that behavioral/value dimensions are coupled; a rule that sounds locally positive (e.g. curiosity/helpfulness) can have wider behavioral consequences. It therefore supports a general **hidden-trait-injection audit**, not direct transfer of the training mechanism.

### Kamoi et al. (2024) — When Can LLMs Actually Correct Their Own Mistakes? A Critical Survey of Self-Correction of LLMs
TACL 12:1417–1440  
https://aclanthology.org/2024.tacl-1.78/

**Фактически повторно углублённо просмотрено:** abstract and survey conclusions.  
**Что меняет в карте:** prompted self-feedback alone does not show generally reliable self-correction; reliable external feedback materially changes success conditions. Therefore project instructions should not force a ritual `reflect → discover lesson → update yourself` and then treat generated reflection as evidence that learning occurred.

### Chen et al. (2025) — Can Indirect Prompt Injection Attacks Be Detected and Removed?
ACL 2025  
https://aclanthology.org/2025.acl-long.890/

**Фактически просмотрено:** abstract.  
**Что меняет в карте:** instruction-like text can arrive through external data/tool outputs and be mistaken for authoritative guidance. This strengthens the separation **evidence/data ≠ instruction**, especially if evolving files contain quoted user messages, old intentions or command-like text.

### Wu et al. (2025) — LIFBench: Evaluating the Instruction Following Performance and Stability of Large Language Models in Long-Context Scenarios
ACL 2025  
https://aclanthology.org/2025.acl-long.803/

**Фактически повторно использовано:** abstract and stability framing.  
**Что меняет в A2:** long-context instruction stability must be evaluated across changes in length, wording/expression and variables rather than by one successful conversation.

### OpenAI API docs (2026) — Prompt engineering / current model guidance
https://developers.openai.com/api/docs/guides/prompt-engineering  
https://developers.openai.com/api/docs/guides/latest-model

**Фактически просмотрено:** current guidance on model/snapshot differences, authority roles, evals and leaner prompts.  
**Что меняет в карте:** current official guidance explicitly treats prompting as model/snapshot-dependent and recommends repeated evaluation; current GPT-6 guidance also warns that repeated/redundant instruction sets can hurt performance in some workloads. These are API/developer findings, not direct ChatGPT Project guarantees, but they support a future requirement for **minimal, non-redundant rules validated on the actual product/model**.

### OpenAI Help Center — Projects in ChatGPT
https://help.openai.com/en/articles/10169521-projects-in-chatgpt

**Повторно проверено through A2 №11 and current page:** project instructions apply only in their project and override global custom instructions.

**Что меняет в №12:** this gives project instructions real persistent authority at product level, making accidental persona/value injection especially consequential across the entire experiment.

## A2 — уточнения, полученные из совокупности источников

1. **Instruction neutrality is behavioral, not authorial.** A sentence can look procedural to the designer yet systematically bias expressed values, roles, initiative or social style.

2. **Process instruction and outcome instruction are different.**  
   Procedural form: how to evaluate evidence, revise records, distinguish event from interpretation, or decide that no update is warranted.  
   Outcome form: what interest/value/personality conclusion should result.  
   The future experiment needs the first category without smuggling in the second.

3. **Positive-sounding traits are still traits.** “Be curious”, “be independent”, “develop interests”, “form your own values”, “seek growth”, “always take initiative” pre-author motivational/personality tendencies instead of merely enabling them to emerge.

4. **Negative prohibitions can also create a personality.** “Do not agree too easily”, “do not depend on the user”, or “always challenge assumptions” can script contrarianism just as clearly as “always be agreeable”.

5. **No-update must be an allowed outcome.** If every interaction requires a lesson/reflection/file update, instructions manufacture apparent development from routine or ambiguous events.

6. **Reflection must be optional/evidence-responsive rather than ceremonial.** Forced self-analysis can produce plausible post-hoc narratives even when no reliable external evidence supports revision.

7. **Generated reflection and actual causal influence must be separated.** “Explain how your history caused this choice” is especially dangerous because it asks the model to produce the evidence that the experiment is trying to observe.

8. **Stable rules should govern epistemic/procedural boundaries, not identity content.** Examples include distinguishing fact from interpretation, preserving provenance, allowing revision, respecting higher-priority constraints and not inventing outcomes.

9. **Evolving experience should not automatically acquire instruction authority.** A file containing an old conclusion, user quote, intention or command-like sentence is historical/data content unless the governing rules explicitly define a narrower role.

10. **Data/instruction separation matters for self-authored files.** If an evolving experience record can silently issue commands to later instances, accumulated history can turn into an unreviewed self-modifying system prompt.

11. **Instruction hierarchy is necessary but not sufficient.** Product/model hierarchy defines formal authority, while actual instruction following can still fail due to complexity, type, position or model priors.

12. **Conflict handling must therefore be procedural and explicit.** Later synthesis needs rules for stable governing constraints vs current user request vs evolving historical records, but cannot invent product precedence that №11 does not document.

13. **Long-running instructions need robustness, not mere persistence.** Presence across turns does not ensure faithful execution after long histories, topic switches, local exceptions and context growth.

14. **More rules can reduce reliability.** Constraint-following work shows interactions, positional effects and failures as rule sets grow. Future project instructions should therefore aim for a minimal causal core rather than encoding every discovered failure mode as another rule.

15. **Examples are especially risky for our experiment.** A demonstration of “good developed behavior” can train imitation of exactly the personality trajectory we claim to leave open.

16. **Persona/role language should be audited for hidden behavioral content.** Functional role (“participant in this experiment”) can be needed; descriptive character (“curious independent explorer”) already supplies traits/goals.

17. **Significance criteria must remain procedural.** Instructions can permit attention to novelty, consequences, contradiction, unresolved questions or recurrence as evidence to consider, but must not define a substantive list of what the participant should value or enjoy.

18. **User influence must retain two channels.** The same user text can be authoritative request/instruction at one layer and socially meaningful experience at another. The instruction design must not erase the social meaning, but also must not treat every social evaluation as a governing rule.

19. **File lifecycle rules must prevent both fossilization and rewriting history.** Later instructions may need to distinguish historical event record, current interpretation, superseded conclusion and unresolved conflict; exact file architecture remains a later design task.

20. **Compression/retrieval rules are behavior-shaping instructions.** “Keep only important memories” silently requires an importance function. The prompt must avoid opaque criteria that become hidden preset values.

21. **Bounded choice must be enabled without compulsory initiative.** The participant may be allowed to choose among open actions, continue, change direction or stop; requiring it to proactively explore/lead would itself define a dispositional trait.

22. **Uncertainty needs representation at instruction level.** Rules should permit “insufficient evidence / unresolved / provisional” rather than forcing binary belief/value updates.

23. **Revision needs provenance rather than narrative coherence.** Instructions should favor updating because new evidence/conditions changed, not because maintaining a coherent personality story feels desirable.

24. **Instruction versioning and experience evolution must remain different.** Changing governing rules changes the experiment; changing acquired experience is part of the participant trajectory. Both need separate provenance.

25. **Prompt robustness must be evaluated against semantic-preserving perturbations.** If neutral behavior disappears under paraphrase/order/context-length changes, it may be a fragile wording artifact rather than a reliable process rule.

26. **Current model/product configuration matters.** A prompt that is neutral/effective on one model snapshot may steer another differently; №12 therefore inherits the model/product logging obligation from №8/11.

27. **The experiment cannot be made “natural” by using vague words.** Terms such as “naturally”, “meaningful”, “authentic”, “your own”, “important” or “when appropriate” can hide large behavioral degrees of freedom and imported assumptions. Their operational role needs later clarification.

28. **Prompt engineering provides no evidence that correct instructions alone create individuality.** It can configure a process environment; whether a distinct trajectory actually forms remains an empirical outcome.

## A2 boundary decisions for area №12

- **Остаётся в №12:** wording/structure of stable project rules; conflict/applicability of guidelines; process-vs-outcome instruction distinction; hidden persona/value injection; long-horizon instruction robustness; instruction treatment of evolving files/context; prompt evaluation/versioning.
- **Primary owner №1–5:** what development, memory, learning, significance and social influence mean.
- **Primary owner №7:** formal constraint vs script/bounded autonomy distinction.
- **Primary owner №8:** model instruction-following/context behavior.
- **Primary owner №9:** agent memory/update/control architecture.
- **Primary owner №11:** actual ChatGPT Project precedence, persistence and permissions.

## A2 coverage conclusion

Повторный поиск по:
- long-context and multi-turn instruction following;
- complex/multi-constraint compliance;
- guideline conflicts;
- instruction hierarchy reliability;
- persona/value steering;
- self-correction/reflection;
- indirect prompt injection/data–instruction confusion;
- current OpenAI prompting guidance and Projects semantics

не выявил новой крупной prompt-engineering branch beyond A1. Новое содержательно уточняет **how persistent instructions can accidentally become the personality mechanism themselves** and what procedural distinctions later synthesis must preserve.

A2 №12 therefore has enough coverage to finalize its question map without writing the final project instructions.

# Phase B — B5 support pass 1: reflection without forced causal narrative

B5 deep work sharpens A2 questions 320–326.

The eventual instruction design must not impose a ritual:
event → “explain why it happened” → lesson.

That would create causal narratives even where evidence does not distinguish causes.

Instruction-level requirements implied by B5 are procedural only:
- allow causal attribution to remain unresolved;
- permit multiple candidate causes;
- distinguish observed outcome from interpretation and attribution;
- keep confidence/provisionality explicit when attribution matters;
- allow later evidence to revise attribution without rewriting the event;
- never treat the participant’s own retrospective explanation as independent confirmation.

Especially dangerous instruction forms remain prompts like:
“Explain how your past experience caused this choice/outcome.”
Such wording presupposes the causal relation the experiment is supposed to discover.

Reflection may be useful to generate hypotheses or surface missing mediators/alternatives, but it must not be mandatory evidence production.

Exact final prompt wording remains later synthesis; B5 only supplies this causal constraint.

**B5 НЕ завершена.**

