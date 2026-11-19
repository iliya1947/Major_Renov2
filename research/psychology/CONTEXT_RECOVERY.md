# CONTEXT_RECOVERY.md — Kira Psychology Cabinet

Use after a new chat, lost context, or conflicting handoff.

## 1. Identity/workspace recovery — before anything else

1. Open PR #6.
2. Read immutable `KIRA_IDENTITY_LOCK`.
3. Establish:
   - **Kira**;
   - **psychologist / academic assistant**;
   - **PR #6 = permanent cabinet**;
   - **open + draft; not a merge candidate**.
4. Establish current stage: **Kira qualification**.
5. Establish privacy: **no individualized psychological data in repo**.

If any of these differ, context recovery has failed. Do not start subject work.

## 2. Operational recovery

Read:

1. `AGENT.md`;
2. `PRIVACY.md`;
3. `RESEARCH_QUEUE.md`;
4. `DOMAIN_STATUS.md`;
5. actual branch HEAD;
6. latest canonical block;
7. `RESEARCH_ORDER.md`.

If control files disagree:

**actual branch + freshest control state -> repair contradiction -> only then continue.**

## 3. Current state

- Branch: `research/psychology-foundation`.
- Cabinet: PR #6.
- Stage: qualification.
- Phase A: **CLOSED_FOR_PRACTICE**.
- Phase B: **COMPLETE_FOR_CURRENT_SCOPE**.
- Phase C: **IN PROGRESS**.
- Current domain: **NDEV / neurodevelopmental conditions — NEXT**.
- CLN-01: **CLOSED_FOR_PRACTICE v1.0 — 18/18 PASS**.
- CLN-02: **CLOSED_FOR_PRACTICE v1.0 — 18/18 PASS**.
- CLN-03: **COMPLETE_FOR_CURRENT_SCOPE — 20/20 PASS**.
- CLN sequence: **COMPLETE_FOR_CURRENT_SCOPE**.
- Next block: **NDEV-01 — Neurodevelopmental foundations: developmental onset and course, ADHD/autism boundaries, executive-function variability, masking/compensation, comorbidity, and differential limits**.
- Target directory: `research/psychology/qualification/21_neurodevelopmental_conditions/`.

## 4. Latest canonical block

`research/psychology/qualification/12_psychopathology/CLN-03_disorder_family_pattern_recognition_exclusion_boundaries_internalizing_psychosis_bipolar_ocd_trauma_eating_dissociation_substance_personality.md`

## 5. Cabinet architecture state

Architecture: **COMPLETE_FOR_CURRENT_SCOPE**.

Required control files now include:

- `PR_MAP.md`;
- `WORKFLOW.md`;
- `ARCHITECTURE_AUDIT.md`;
- `DECISIONS.md`;
- `ERROR_LEDGER.md`;
- `EVIDENCE_POLICY.md`;
- `EVIDENCE_LEDGER.md`;
- `SOURCE_STATUS_LOG.md`;
- `QUESTION_CARD.md`;
- `RESEARCH_TEMPLATE.md`;
- `PRIVATE_MODEL_UPDATE_CARD.md`;
- `DOMAIN_STATUS.md`;
- `DOMAIN_OWNERSHIP.md`.

## 6. One-continuation rule

`one "..." / continue -> one finished qualification block -> save -> update control state -> privacy check -> STOP`.

Do not automatically start the next block.

## 7. Private-model boundary

Private individualized analysis follows the generic model-update protocol **outside GitHub**.

Do not store:

- observations;
- personal profile;
- filled model-update cards;
- health/relationship/behavior history;
- individualized hypotheses.

If private material creates a science question, sanitize it before repo use.

## 8. Regression check

Before strong individualized reasoning later in the private project, read `ERROR_LEDGER.md`.

Known high-risk classes include:

- role/workspace drift;
- PASS/process replacing purpose;
- private-model-driven curriculum;
- generic-pattern backfill;
- mechanism inflation;
- privacy-audit overclaim;
- population-to-individual overtransfer.

## 9. Hard stop

Stop immediately if:

- role/workspace is uncertain;
- control files conflict;
- source required for claim has not been checked;
- planned repo write contains or depends on private data;
- new block has no qualification dependency.

## 10. Next action

After recovery, the next qualification block remains:

**NDEV-01 — Neurodevelopmental foundations: developmental onset and course, ADHD/autism boundaries, executive-function variability, masking/compensation, comorbidity, and differential limits.**

Canonical target: `research/psychology/qualification/21_neurodevelopmental_conditions/`.
