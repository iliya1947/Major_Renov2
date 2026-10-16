# A1 №11 — Возможности ChatGPT: источники картографии

**Назначение:** доказательная опора для первичной карты product capabilities. Здесь фиксируется, какие официальные product surfaces, persistence mechanisms и ограничения реально документированы на 15.10.2026. Это не проектирование будущего эксперимента.

## 1. Projects in ChatGPT

**OpenAI Help Center — Projects in ChatGPT**  
https://help.openai.com/en/articles/10169521-projects-in-chatgpt

**Просмотрено:** актуальная официальная статья, включая sections on project instructions, app links, saved responses, project memory, default/project-only memory and sharing.

**Для карты:**
- Projects объединяют chats, files and instructions;
- project instructions apply only within project and override global custom instructions;
- responses can be saved as project sources;
- Google Drive files/folders and Slack channels can be added as project sources;
- Projects support default or project-only memory;
- project-only memory excludes saved memories/external chats but allows cross-chat reference inside same project;
- chats outside project cannot reference project-only chats;
- shared projects are forced to project-only memory;
- project-only projects do not support ChatGPT Work;
- memory-setting changes may take time to take effect;
- Google Drive app inside a project can search/access content but does not pre-sync it.

This is the main source for distinguishing instructions, files/sources, chat history and project memory as separate persistence/context channels.

## 2. Memory in ChatGPT

**OpenAI Help Center — Memory in ChatGPT**  
https://help.openai.com/en/articles/8590148-memory-in-chatgpt

**Просмотрено:** overview, sources, management behavior and availability caveats.

**Для карты:**
- Memory can draw from chats, saved memories, custom instructions, Library files and connected apps depending on account/plan/region;
- it does not retain every detail and relevance selection is product-managed;
- Sources can reveal some contributing personalization sources but not necessarily every factor;
- “don’t mention this again” is not equivalent to deleting original source data;
- feature controls vary by plan, region, platform and workspace.

This makes account Memory conceptually and operationally different from explicit project sources.

## 3. Library

**OpenAI Help Center — Using Library to manage files in ChatGPT**  
https://help.openai.com/en/articles/20001052-using-library-to-manage-files-in-chatgpt

**Просмотрено:** file persistence, connected-cloud behavior, deletion, storage limits and automatic search.

**Для карты:**
- uploaded/generated files can be saved independently in Library;
- deleting a chat does not automatically delete a file stored separately in Library;
- Library can show connected files/folders from external providers;
- connected files remain associated with original provider;
- where supported and authorized, ChatGPT may update original Google Docs/Sheets/Slides;
- automatic Library search is a separate setting;
- file-size/storage limits are product-level constraints.

## 4. Temporary Chat

**OpenAI Help Center — Temporary chat in ChatGPT**  
https://help.openai.com/en/articles/8914046-temporary-chat-in-chatgpt

**Просмотрено:** comparison with regular chat, personalization, memory and retention.

**Для карты:**
- Temporary chats do not create/update memory while temporary;
- personalized temporary mode may use existing memory;
- they are not kept in normal history unless saved;
- a copy can be retained temporarily for safety;
- data sent through third-party actions follows provider retention rules.

Temporary chat is therefore a different continuity regime from Projects.

## 5. App permissions

**OpenAI Help Center — Managing app permissions in ChatGPT**  
https://help.openai.com/en/articles/20001495-managing-app-permissions-in-chatgpt

**Просмотрено:** overview, read/action permissions and workspace/provider distinctions.

**Для карты:**
- ChatGPT app permissions govern whether connected data can be read or actions taken;
- provider permissions and source-system ACLs remain separate;
- workspace policies can further constrain actions;
- action approval/permission is a product/runtime boundary, not a model property.

## 6. Deep research

**OpenAI Help Center — Deep research in ChatGPT**  
https://help.openai.com/en/articles/10500283-deep-research-in-chatgpt

**Просмотрено:** sources, research plan, connected apps, interruption and report behavior.

**Для карты:**
- deep research is a separate multi-step research surface;
- it can use uploaded files, public web/specified sites and eligible connected apps;
- the user can review/edit the plan and interrupt research;
- output includes source links/citations;
- availability and usage depend on plan/account/region.

## 7. ChatGPT Work and Codex

**OpenAI Help Center — ChatGPT Work and Codex**  
https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex

**Просмотрено:** Work availability, project context, cloud/desktop distinctions and scheduled execution.

**Для карты:**
- Work is a distinct product mode for longer multi-step tasks;
- Work can use files, apps and project context where allowed;
- cloud Work chats sync across surfaces;
- desktop Work may additionally access local files/apps with permission;
- Work can participate in scheduled/triggered tasks;
- plan/workspace restrictions matter independently of model capability.

## 8. Scheduled Tasks

**OpenAI Help Center — Scheduled tasks in ChatGPT**  
https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt

**Просмотрено:** overview and project restriction.

**Для карты:**
- tasks can be one-time, recurring, monitoring or event-driven when supported;
- availability depends on account/app/version;
- a scheduled task created in a project cannot access uploaded files or files stored in that project.

This is a significant boundary between project persistence and autonomous scheduled execution.

## 9. Model selection and thinking levels

**OpenAI Help Center — GPT-6 and other models in ChatGPT**  
https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt

**Просмотрено:** current model/effort controls and plan variability.

**Для карты:**
- model and thinking-level availability depend on plan/workspace;
- model selection can persist independently of default/Latest rollout;
- natural-language requests to “think harder” do not necessarily switch the product thinking level;
- product rollouts can change defaults while explicit selections remain.

This must be treated as experimental configuration, not timeless model behavior.

## 10. Voice

**OpenAI Help Center — ChatGPT Voice**  
https://help.openai.com/en/articles/20001274-chatgpt-voice

**Просмотрено:** Live/Advanced/Standard distinctions.

**Для карты:**
- Voice is powered by a voice-specific model family rather than the text chat model;
- Live can use memory, web search and connected apps where available;
- feature support differs across Live/Advanced/Standard and by plan/device/region.

## 11. Release notes

**OpenAI Help Center — ChatGPT release notes**  
https://help.openai.com/en/articles/6825453-chatgpt-release-notes

**Просмотрено:** recent entries relevant to Projects, memory, Work and product evolution.

**Для карты:** product capabilities and defaults change materially over time; release notes are therefore part of reproducibility evidence.

## 12. Capabilities overview

**OpenAI Help Center — ChatGPT capabilities overview**  
https://help.openai.com/en/articles/9260256-chatgpt-capabilities-overview

**Просмотрено:** current overview of files, data analysis, voice and other surfaces.

**Для карты:** confirms that ChatGPT is a product bundle of multiple specialized capabilities rather than one undifferentiated model interface.

## Breadth check

The official documentation reviewed covers the major persistence and execution surfaces needed for A1 №11:
- Projects;
- project instructions and sources;
- account/project memory;
- Temporary Chat;
- Library/files;
- connected apps and permissions;
- deep research;
- Work;
- Scheduled Tasks;
- models/thinking controls;
- Voice;
- release/product drift.

The exact UI, limits and availability are version-dependent and will require re-verification during A2 and again immediately before experiment launch.

This is sufficient for **primary A1 cartography**, not a final product specification.


---

# A2 — повторная финальная картография с учётом всех областей

**Дата прохода:** 16.10.2026.

**Цель:** re-verify current ChatGPT product semantics and finalize the map around primary gap 12 (`arbitration among persistence/context layers`) and primary gap 18 (`model/product drift as false development`). Area №11 is time-sensitive, so A2 uses current official OpenAI documentation rather than treating A1 product facts as timeless.

## Повторно проверенные и новые официальные источники A2

### OpenAI Help Center — Projects in ChatGPT
https://help.openai.com/en/articles/10169521-projects-in-chatgpt

**Повторно проверено 16.10.2026:** current Projects article, project instructions, project sources, connected-app links, project memory, default/project-only memory, sharing and current plan limits.

**Что меняет в карте:**
- project instructions still apply only in the project and override global custom instructions;
- project files/sources are explicit artifacts that can be previewed/deleted;
- project responses can be saved as project sources;
- Projects can use chats and files as context for future responses;
- project-only memory isolates project chats from outside memories/chats and disables Work inside that project;
- memory mode can now be changed on an existing unshared project, with changes potentially taking hours to apply;
- project memory does **not** expose a complete list of “project memories”;
- for Plus/Pro default-memory projects, ChatGPT can reference previous project chats and prioritizes project chats/files, but the documentation does not promise that every available item is included or influential on every response.

This directly strengthens the required chain:
`stored → eligible/available → retrieved/included → behaviorally influential`.

### OpenAI Help Center — Memory in ChatGPT
https://help.openai.com/en/articles/8590148-memory-in-chatgpt

**Повторно проверено:** current improved-memory semantics, Sources, chat-history reference, saved memories, Library/app sources and temporary-chat behavior.

**Что меняет в карте:**
- Memory may draw from several source classes depending on plan/region/settings;
- ChatGPT selects relevant context rather than retaining/using every detail;
- Sources can expose some contributing context but are not a complete causal trace of every factor shaping a response;
- saved memories are distinct from chat history;
- disabling/deleting one surface does not automatically erase matching information from all other source surfaces;
- Temporary Chat can optionally use existing personalization, but does not create/update memories while temporary.

Thus account Memory is an opaque/managed retrieval layer, not an inspectable project log.

### OpenAI Help Center / Release notes — Project memory updates, 14.08.2026

**Повторно проверено:** release notes for editable project memory settings.

**Что меняет в карте:** project memory semantics themselves changed during 2026. A longitudinal experiment must therefore log memory mode and changes to it rather than assuming the project’s context boundary is static across time.

### OpenAI Help Center — Scheduled tasks in ChatGPT
https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt

**Повторно проверено:** current scheduled/monitoring/event-driven task semantics.

**Что меняет в карте:** a task created in a project cannot access uploaded files or files stored in that project. Therefore **future execution persistence ≠ access to project experiential state**.

### OpenAI Help Center — ChatGPT Work and Codex
https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex

**Повторно проверено:** current Work behavior, project use, cloud continuation, connected apps and scheduled/event-triggered tasks.

**Что меняет в карте:** Work is a distinct execution/runtime layer; cloud Work can persist task execution across devices/time, but project-only memory still excludes Work from that project. This keeps isolation and agentic execution as separable product choices.

### OpenAI Help Center — Connected apps in ChatGPT
https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt

**Повторно проверено:** app context, permissions and relation to Memory.

**Что меняет в карте:** connected-app information can enter current context and, where allowed, become relevant Memory context; disconnecting an app stops future access but does not necessarily remove information already present in past conversations/memory. External-state access therefore has its own lifecycle and permissions.

### OpenAI Help Center — Using Library to manage files in ChatGPT
https://help.openai.com/en/articles/20001052-using-library-to-manage-files-in-chatgpt

**Повторно проверено:** current Library semantics and connected file providers.

**Что меняет в карте:** uploaded/generated files can persist outside a particular chat; connected files remain tied to source-provider permissions. Library/Space-level persistence is therefore separate from project-local source membership.

### OpenAI Help Center — Getting started with Space in ChatGPT
https://help.openai.com/en/articles/20001549-getting-started-with-space-in-chatgpt

**Новый A2 source.**
Space is now a separate home for pages/files/work and replaces Library for accounts with Space access; **Projects remain separate** and continue to organize project chats, files and instructions.

**Что меняет в карте:** “all persistent files live in Library” is no longer a stable product assumption. Product storage surfaces can be replaced/evolved independently of Projects.

### OpenAI Help Center — Getting started with your dot
https://help.openai.com/en/articles/20001530-getting-started-with-your-dot

**Новый A2 source.**
Dots are always-on agents with their own cloud computer, connected apps and their own memory behavior, available only to eligible accounts/regions.

**Что меняет в карте:** ChatGPT now has an additional long-running agentic/memory surface outside ordinary Project chats. A future Project experiment must not attribute Dot/Work capabilities to ordinary Project continuity unless explicitly used.

### OpenAI Help Center — ChatGPT release notes
https://help.openai.com/en/articles/6825453-chatgpt-release-notes

**Повторно проверено 16.10.2026:** current entries through 15.10.2026.

**Что меняет в карте:**
- GPT-6 rollout changed the Chat product’s active model family on 07.10.2026;
- GPT-6.1 Sol separately rolled into Work/Codex;
- project memory settings changed in August;
- Space and dots appeared in late September/October;
- model picker/thinking behavior changed in September;
- Voice model/runtime changed separately.

These are direct examples that **platform/model/runtime state can change while a project’s own history stays constant**.

## A2 — итоговые product-level distinctions

1. **Project instructions are stable control context, not acquired history.** They persist and override global custom instructions inside the project, but their content is authored control state.

2. **Project sources/files are explicit persistence, not guaranteed active context.** Existence in the project only establishes availability as project context, not retrieval/inclusion/influence on every response.

3. **Project chat history is another persistence surface.** Cross-chat reference depends on project memory mode, plan/workspace and current product behavior.

4. **Project memory is partly opaque.** There is no exposed list equivalent to personal-memory entries showing every project item that may be referenced.

5. **Account Memory/personalization is a separate layer.** It can draw from past chats, saved memories, files and connected apps depending on settings and can therefore contaminate an “isolated” experiment unless the chosen project mode excludes it.

6. **Project-only memory currently provides the clearest documented isolation boundary for Project chats.** It excludes outside memories/chats and prevents project chats from leaking into outside-memory context, but also currently excludes Work within that project.

7. **Default memory is not equivalent across all plans/workspaces.** The same “default memory” label can permit different cross-project/outside-chat reference behavior depending on account type.

8. **Current chat context remains distinct from persistence.** Persistent information still has to be selected/included and effectively used by the current model.

9. **Connected apps introduce external state, not “internal memory.”** Access depends on connection, provider ACLs, product permissions and sometimes confirmation.

10. **Scheduled execution is not continuity by itself.** A task can run later while lacking access to the Project files that would carry experiential state.

11. **Work/dots are separate agentic runtimes.** Their ability to continue work, use cloud computers, connected apps or memories cannot be assigned to ordinary Chat/Project behavior.

12. **Library/Space are separate content stores from Projects.** Their evolution shows why a product-level “file memory” label is too coarse.

13. **Deletion is surface-specific.** Removing a chat, project source, saved memory, app connection or Library/Space file can have different effects and may leave copies/information on other surfaces.

14. **Inspectability differs by layer.** Project files/instructions are highly inspectable; account/project memory retrieval is more opaque; runtime/model routing can be still less inspectable.

15. **Arbitration is not documented as a complete deterministic precedence algorithm.** We know some explicit precedence (e.g. project instructions over global custom instructions) and some scope rules, but product docs do not provide a full guaranteed ranking for all project files, past chats, Memory sources, retrieved app data and context-selection decisions.

16. **Therefore the future project cannot rely on an undocumented “memory merge” model.** It must use documented primitives and treat automatic context selection as a partially opaque process.

17. **The four-step distinction is mandatory:**  
   `stored → eligible/available → retrieved/included → behaviorally influential`.
   A product feature may guarantee only one or two of these steps.

18. **Model drift and product drift must be logged separately.** Model family/snapshot, reasoning mode, project memory mode, enabled tools/apps, project sharing state and relevant product-feature changes can all alter behavior independently of acquired history.

19. **Release notes are necessary but not sufficient provenance.** They document many changes, but silent backend/runtime changes or rollout timing can remain account-specific/opaque.

20. **Rollout/plan/region/workspace variability is part of experimental state.** “ChatGPT supports X” is weaker than “this experiment account/project currently has X configured and verified.”

21. **New product surfaces must not silently expand the participant boundary.** Space, Work, dots, Library and plugins/apps should count as part of the future system only if the experiment explicitly uses them.

22. **Product personalization is not individualization.** Memory can personalize outputs from user/context data without establishing a history-derived self-trajectory of the participant.

23. **The practical value of №11 is feasibility and attribution.** It tells later synthesis which state can actually persist, which context boundaries can be configured, and which platform changes can masquerade as development.

## A2 boundary decisions for area №11

- **Остаётся в №11:** current Projects semantics, project instructions/sources, default/project-only memory, account Memory, files/Library/Space, connected apps, Work/Scheduled/Dots as adjacent product runtimes, permissions, model selection/runtime configuration and product drift.
- **Primary owner №7:** formal system-boundary concept.
- **Primary owner №8:** LLM/model/context mechanisms and stochasticity.
- **Primary owner №9:** general agent memory/action architecture.
- **Primary owner №12:** how project instructions should actually use these primitives.
- The future Project experiment remains a **Project-first design problem**; adjacent surfaces are documented to prevent accidental capability conflation, not adopted as extra mechanisms.

## A2 coverage conclusion

Re-verification of Projects, Memory, project-only/default memory, Sources, apps, files/Library, Work, Scheduled tasks and release notes plus the newly surfaced Space and dots capabilities changed several current product facts but did not invalidate the core Project boundary. The map now explicitly covers the two new adjacent surfaces and the current 2026 product drift.

A2 №11 can therefore be finalized as a current product map, with the standing requirement to **re-verify all product-dependent assumptions immediately before experiment launch**.
