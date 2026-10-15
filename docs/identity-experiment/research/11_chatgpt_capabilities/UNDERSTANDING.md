# A1 №11 — Возможности ChatGPT: понимание карты области

**Статус:** итог первичной картографии A1 №11 от 15.10.2026. Это карта product-level mechanisms and boundaries, а не готовое решение эксперимента.

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
