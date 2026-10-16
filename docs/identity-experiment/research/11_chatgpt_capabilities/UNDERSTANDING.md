# A1/A2 №11 — Возможности ChatGPT: накопленное понимание

**Статус:** A1 завершена 15.10.2026, A2 — 16.10.2026. Ниже сохранена карта product-level mechanisms и добавлены выводы текущей re-verification.

## 1. ChatGPT — не один механизм памяти или контекста

Для длительной работы нужно различать:
- current conversation context;
- project instructions;
- project sources/files;
- cross-chat project memory;
- account-level Memory;
- Library;
- connected-app content;
- scheduled/agentic runtime state.

Эти каналы имеют разные правила persistence, inspectability, deletion and access.

## 2. Projects важны именно как объединение нескольких каналов

Project объединяет chats, files/sources and instructions, но это не означает, что всё автоматически попадает в raw model context каждый turn.

Следовательно, later research must distinguish:
- information existing in project;
- information eligible for retrieval;
- information actually selected/used in one response.

## 3. Project instructions — отдельный persistent control layer

Project instructions:
- scoped only to project;
- override global custom instructions;
- persist across project conversations.

Это потенциально очень сильный механизм continuity, но он представляет stable top-level guidance rather than acquired experience. В будущем нельзя смешивать instruction layer и history-derived content.

## 4. Project-only memory offers isolation, but with trade-offs

Project-only memory:
- excludes saved memories and external chats;
- allows cross-chat reference within project;
- blocks project information from influencing outside chats;
- is mandatory for shared projects;
- disables Work in that project.

Thus isolation and agentic execution are currently not fully orthogonal product choices.

## 5. Explicit sources and opaque memory are epistemically different

Project files and saved project sources are user-inspectable artifacts. Account/project memory selection is partly product-managed and not exposed as a complete list of everything that may influence retrieval.

For any future longitudinal experiment, this creates a methodological distinction:
- explicit inspectable persistence;
- implicit/opaque context selection.

## 6. Library is broader than project-local storage

A file can persist in Library separately from a chat/project. Connected cloud files may also remain linked to external providers.

Therefore “delete the chat/project” does not necessarily mean “remove every persistent artifact”.

## 7. External apps introduce real environmental state

Connected apps and their actions mean ChatGPT can sometimes read or modify state outside itself. That is qualitatively different from ordinary conversation and from merely retrieving a static uploaded file.

Permissions, approvals and provider ACLs remain separate constraints.

## 8. Work is a separate agentic runtime

Work can perform longer multi-step tasks, operate across files/apps and continue cloud-side. It should not be treated as a property of the selected text model.

This means later experiment design must decide whether claims concern:
- ordinary conversational ChatGPT;
- ChatGPT plus project context;
- Work as an agentic executor.

A1 does not choose among them.

## 9. Scheduled tasks create persistence of execution, not necessarily persistence of project context

Scheduled Tasks can repeat or monitor conditions, but a task created in a project cannot currently access project-uploaded/stored files.

Thus “runs again later” and “has access to the same experiential state” are separate capabilities.

## 10. Model selection is an experimental variable

Different models, thinking levels and product defaults can change behavior independently of project history. Product rollouts can also change defaults over time.

A longitudinal experiment therefore needs later consideration of:
- model identity;
- thinking level;
- date/version;
- enabled product features.

## 11. Product drift is not noise that can be ignored

ChatGPT changes continuously:
- models;
- Projects behavior;
- memory controls;
- Work;
- connected apps;
- UI and plan limits.

A2 should identify which primitives appear stable enough for experimental reliance and which details must be rechecked immediately before launch.

## 12. Product capability must stay separate from prompt design

Area №11 answers **what the platform can and cannot persist, retrieve, execute or isolate**.

Area №12 must separately address **how instructions should be formulated to use those primitives**.

Mixing the two would prematurely turn platform facts into a proposed experiment mechanism.

## 13. What A1 №11 contributes

Получена карта из **300 вопросов именно области №11**, в 32 блоках. Она нужна, чтобы later work не смешивала:
- project context and raw model context;
- project sources and account memory;
- Library and project-local sources;
- model behavior and product runtime;
- ordinary Chat and Work;
- persistence and autonomous execution;
- connected external state and internal context;
- current UI details and durable platform primitives.

## 14. Граница текущего результата

В этом проходе **ни один из 300 вопросов области №11 не исследовался глубоко**. Официальная документация использовалась для первичной картографии product capabilities, persistence channels, tools, permissions and version-dependent constraints.

A1 №11 отвечает только на вопрос:

**«Какие реальные возможности и ограничения ChatGPT необходимо исследовать, чтобы позже воплотить приобретённый опыт и длительную преемственность средствами продукта, не принимая любой persistent context за одну “память” и не приписывая модели свойства Projects, Library, Work или connected apps?»**

**Следующий шаг общего процесса:** A1 №12 «Prompt engineering и проектные инструкции».


---

# A2 — что изменилось в понимании области

## 15. Persistence в ChatGPT — это не одна память, а набор разных product layers

После A2 граница стала практической:

- project instructions;
- project files/sources;
- project chats;
- project memory;
- account Memory;
- current chat context;
- Library/Space;
- connected apps;
- agentic runtimes such as Work/dots.

У каждого слоя свои scope, inspectability, permissions and persistence semantics.

Поэтому будущий механизм нельзя строить на фразе «ChatGPT это запомнит».

## 16. Для любого прошлого нужно различать четыре стадии

Закреплена обязательная product-level цепочка:

`stored → eligible/available → retrieved/included → behaviorally influential`.

Project file может существовать и не попасть в relevant context.
Past chat может быть eligible but not selected.
Retrieved information may still be underused by model inference.

Это связывает №11 с №2, №8 и №9.

## 17. Project instructions — управляющий слой, а не acquired experience

Официально они:
- persistent inside project;
- scoped to project;
- override global custom instructions.

Именно поэтому они сильны как будущий mechanism rules layer.

Но если в них заранее записать interests, values, persona or desired trajectory, это будет **authored control**, а не развитие из опыта.

## 18. Project-only memory сейчас даёт наиболее ясную границу изоляции

На текущем продукте project-only memory:
- не использует saved memories/outside chats;
- разрешает reference chats inside same project;
- не позволяет outside chats reference project chats;
- исключает Work inside that project.

Для будущего isolated experiment это важный product primitive.

Но это ещё не решение: project memory retrieval remains partially opaque and does not expose a complete list of project memories.

## 19. Default memory — опасно неоднозначный экспериментальный режим

Its semantics vary by plan/workspace.

На consumer Plus/Pro current docs allow broader reference behavior than project-only mode.

Therefore future synthesis cannot say simply “use Projects with memory”.
It must specify exact project memory mode and reverify it at launch.

## 20. Explicit sources и automatic memory radically differ in auditability

Project files/instructions:
- visible;
- inspectable;
- intentionally editable.

Automatic Memory/context selection:
- relevance-managed;
- partial-source visibility;
- no complete causal trace.

Для experiment where acquired experience must remain revisable, this auditability difference is central.

## 21. Current product does not publish a complete arbitration algorithm

We know some explicit rules:
- project instructions override global custom instructions;
- project-only memory blocks outside project context.

Но нет полной deterministic specification:
`instructions vs project files vs prior chats vs account memory vs app context`
for every response.

Thus later mechanism must not assume a precise undocumented merge order.

## 22. Scheduled execution and persistent experiential state are separate

Current Scheduled tasks created in a project cannot access that project’s uploaded/stored files.

So:
`runs later` ≠ `continues with the same acquired project state`.

This is a direct product example of why temporal persistence and memory continuity must not be conflated.

## 23. Work and dots must remain separate from ordinary Project capability

Work/dots can:
- run longer tasks;
- use cloud computers;
- connect apps;
- continue between conversations;
- maintain their own runtime/memory behaviors.

But our future experiment is Project-first unless we explicitly decide otherwise.

Using their capabilities silently would change the participant/system boundary from №7.

## 24. Space/Library evolution confirms product drift is structural

A2 found that Space now replaces Library for some accounts, while Projects remain separate.

This is not just a UI rename: it shows persistent-content surfaces can be reorganized while project history remains unchanged.

Therefore a longitudinal experiment must log product configuration and not interpret platform changes as participant development.

## 25. Model drift and product drift are independent alternative causes

During 2026 alone:
- project memory semantics changed;
- model selection/defaults changed;
- GPT-6 rolled into Chat;
- separate models rolled into Work/Codex;
- Space and dots appeared.

A later behavior difference can therefore come from:
- unique project history;
- model update;
- product/runtime change;
- memory-mode/configuration change.

These explanations must remain separate.

## 26. Release notes help, but cannot prove absence of hidden change

Known product changes can be timestamped from official release notes.

But:
- rollout timing may vary;
- backend details may be undisclosed;
- account/workspace state can differ.

So reproducibility requires both:
- public product-change log;
- experiment-local configuration log.

## 27. The participant boundary must be chosen, not inherited from “everything ChatGPT can do”

ChatGPT as a product now includes many adjacent surfaces.

Future Project experiment should count a capability as part of participant system only if:
- it is actually enabled/used;
- its state participates in the causal loop;
- its role is explicitly documented.

Otherwise Space, dots, Work, apps and account personalization remain external/unused capabilities.

## 28. Product personalization is a major false positive for individualization

Memory/personalization can make outputs:
- more user-specific;
- more continuous;
- more context-aware.

But this may be entirely driven by user-specific context selection.

Therefore history-aware personalization is **evidence of persistence capability**, not evidence of self-developed individuality.

## 29. What №11 really contributes to the later invention

№11 does not tell us what acquired experience should mean.

It tells us which product primitives can potentially realize pieces of the mechanism:
- stable rules → project instructions;
- explicit revisable persistent content → project sources/files;
- cross-chat continuity → project memory/history;
- external state/actions → apps/tools where intentionally included.

And it tells us the failure modes:
- opaque retrieval;
- plan/workspace variability;
- model/product drift;
- permission boundaries;
- unrelated product surfaces changing over time.

## 30. Финальная граница A2 №11

The most important Phase B branches:
- exact arbitration strategy across Project persistence layers;
- how to use explicit files versus opaque memory;
- how to verify actual behavioral influence of stored experience;
- isolation via project-only memory and its trade-offs;
- experiment configuration logging and drift attribution;
- deletion/revision across persistence surfaces;
- minimum Project-first capability set;
- immediate product re-verification before experiment launch.

Prompt wording/design remains №12; model internals №8; general agent architecture №9.

## 36. B6 product-feasible continuity boundary

Current ChatGPT Projects provide enough separate primitives to support the B6 distinction conceptually:

- Project instructions as stable project-specific control context;
- explicit project files/sources as inspectable persistent content;
- project chats as long-lived conversational history;
- project memory modes controlling which conversations/memories are eligible;
- account Memory/Library/apps as additional product surfaces.

But the product does not expose a complete deterministic retrieval/arbitration trace.

Therefore the future experiment should not equate “ChatGPT remembered it” with a known causal path.

## 37. Project-only memory is the strongest current isolation candidate

As of 16.10.2026, official docs say project-only memory:
- excludes previously saved memories in project chats;
- allows reference to chats within the project;
- excludes conversations outside the project;
- prevents outside chats from referencing project conversations.

This reduces external-history contamination and is therefore a strong candidate configuration.

It does not solve retrieval opacity inside the project.

## 38. Explicit source state is more auditable than automatic Memory

Current product Memory:
- selects what is relevant;
- does not retain every detail;
- exposes only partial Memory summary/Sources information.

Therefore automatic Memory can support continuity, but explicit Project sources are the stronger candidate for canonical acquired-state provenance/revision.

This does not mean every source must be read every turn.

## 39. Deletion is not one operation

Project files, project chats, Library files and Memory-derived information have different retention/removal behavior.

Consequently:
- conceptual obsolescence should be represented as a current state;
- physical deletion is separate;
- deleting one surface does not prove all historical/derived context disappeared.

## 40. B6 feasibility result

The proposed three-plane distinction is compatible with current documented Projects capabilities:
1. stable control instructions;
2. explicit editable project sources;
3. project-history/automatic-memory context.

What remains opaque is the exact runtime selection/use of eligible context. That limitation is preserved for B7/B8 rather than hidden.

**B6 завершена по saturation.**

