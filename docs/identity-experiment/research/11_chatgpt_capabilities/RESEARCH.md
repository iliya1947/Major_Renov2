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
