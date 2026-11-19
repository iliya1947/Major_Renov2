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
- Phase C: **COMPLETE_FOR_CURRENT_SCOPE**.
- ETH domain: **COMPLETE_FOR_CURRENT_SCOPE**.
- CLN-01: **CLOSED_FOR_PRACTICE v1.0 — 18/18 PASS**.
- CLN-02: **CLOSED_FOR_PRACTICE v1.0 — 18/18 PASS**.
- CLN-03: **COMPLETE_FOR_CURRENT_SCOPE — 20/20 PASS**.
- CLN sequence: **COMPLETE_FOR_CURRENT_SCOPE**.
- NDEV-01: **CLOSED_FOR_PRACTICE v1.0 — 18/18 PASS**.
- NDEV-02: **COMPLETE_FOR_CURRENT_SCOPE — 20/20 PASS**.
- NDEV sequence: **COMPLETE_FOR_CURRENT_SCOPE**.
- BHC-01: **CLOSED_FOR_PRACTICE v1.0 — 18/18 PASS**.
- BHC-02: **COMPLETE_FOR_CURRENT_SCOPE — 20/20 PASS**.
- BHC sequence: **COMPLETE_FOR_CURRENT_SCOPE**.
- REL-01: **CLOSED_FOR_PRACTICE v1.0 — 18/18 PASS**.
- REL-02: **COMPLETE_FOR_CURRENT_SCOPE — 20/20 PASS**.
- REL sequence: **COMPLETE_FOR_CURRENT_SCOPE**.
- DEC-01: **CLOSED_FOR_PRACTICE v1.0 — 18/18 PASS**.
- DEC-02: **COMPLETE_FOR_CURRENT_SCOPE — 20/20 PASS**.
- DEC sequence: **COMPLETE_FOR_CURRENT_SCOPE**.
- SAF-01: **CLOSED_FOR_PRACTICE v1.0 — 18/18 PASS**.
- SAF-02: **COMPLETE_FOR_CURRENT_SCOPE — 20/20 PASS**.
- SAF sequence: **COMPLETE_FOR_CURRENT_SCOPE**.
- ETH-01: **CLOSED_FOR_PRACTICE v1.0 — 18/18 PASS**.
- ETH-02: **COMPLETE_FOR_CURRENT_SCOPE — 20/20 PASS**.
- ETH sequence: **COMPLETE_FOR_CURRENT_SCOPE**.
- Phase D: **IN_PROGRESS**.
- INT-01: **CLOSED_FOR_PRACTICE v1.0 — 20/20 PASS**.
- INT-02: **CLOSED_FOR_PRACTICE v1.0 — 20/20 PASS**.
- INT-03: **CLOSED_FOR_PRACTICE v1.0 — 20/20 PASS**.
- Cross-domain blocking contradictions identified by INT-01: **0**.
- Next qualification step: **INT-04 — reusable reasoning checklists**.
- Integration directory: `research/psychology/qualification/26_integration/`.

## 4. Latest canonical block

`research/psychology/qualification/26_integration/INT-03_analytic_error_taxonomy_failure_stages_cascades_detection_repair_regression.md`

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

After recovery, the next qualification step is:

**INT-04 — Reusable reasoning checklists: compress the full qualification into short operational checklists for low-stakes reflection, strong individualized inference, causal/mechanism claims, measurement, clinical boundaries, relationships, interventions/decisions, safety, model update, correction/error repair, and final pre-response review.**

INT-01 found no blocking canonical contradiction. INT-02 established integrated person-level transfer. INT-03 established the stage-based analytic error taxonomy. Reopen a domain only if later integration identifies a material contradiction or knowledge gap.
