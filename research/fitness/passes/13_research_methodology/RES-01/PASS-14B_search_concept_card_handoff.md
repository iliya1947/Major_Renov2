# RES-01 / PASS-14B — Build standalone SEARCH_CONCEPT_CARD and verify handoff

Статус: **COMPLETE IMPLEMENTATION PASS — RES-01 remains RESEARCHING**  
Дата: 2026-11-16

## Scope

Только:
1. реализовать канонический `SEARCH_CONCEPT_CARD.md`;
2. перенести в него проверенные правила PASS-06;
3. проверить handoff `QUESTION_CARD → SEARCH_CONCEPT_CARD`;
4. не смешивать scientific eligibility и retrieval implementation.

Не покрывается:
- final RES-01 synthesis;
- final closure status;
- screening/extraction workflow;
- новые search-methodology исследования.

## Basis

Основа:
- PASS-06 — translating questions into search concepts;
- QUESTION_CARD v2.0 from PASS-14A;
- PASS-13 architecture decision keeping search downstream and separate.

## Implemented structure

1. Identification / Topic ID / evidence stream.
2. Link to Question Card and viability route.
3. Search purpose.
4. Full inherited eligibility concepts.
5. Mandatory search blocks actually used.
6. Eligibility concepts intentionally omitted from search.
7. Controlled vocabulary.
8. Free-text families.
9. Boolean structure.
10. NOT safeguards.
11. Study-design/evidence filters.
12. Limits and scientific justification.
13. Database/source/interface/date/exact-query record.
14. Known-item benchmark.
15. Pilot retrieval check.
16. Iterative vocabulary changes.
17. Scope-change escalation back to Question Card.
18. Separate evidence streams.
19. Conceptual audit.
20. PRESS-based technical self-audit.
21. Independent peer-review status.
22. Final search completion record.
23. Handoff to screening/synthesis.

## Handoff verification

### Question Card → Search Card

Verified fields transferred conceptually:

- Topic ID → Topic ID
- scientific question type → question framework/route
- eligibility logic → eligibility concepts
- evidence-source level → target evidence stream
- planned grouping → search/screening boundaries where appropriate
- viability status → permission/reason to search
- safety domain → separate stream when needed
- scope-change log → upstream escalation target

### Deliberately NOT copied mechanically into mandatory search blocks

- comparator;
- outcome;
- time;
- context;
- every eligibility field.

They remain scientific eligibility concepts unless retrieval testing justifies making them mandatory search blocks.

### Search Card → Question Card reverse handoff

Only triggered when search development changes **scientific scope**, e.g.:
- population expands;
- intervention class changes;
- comparator meaning changes;
- outcome target changes;
- eligible evidence design changes materially.

Vocabulary/syntax refinement alone stays inside Search Concept Card.

## Key safeguards implemented

1. Question ≠ query.
2. Eligibility ≠ searchable metadata.
3. Small result set ≠ automatically good search.
4. Comparator/outcome are not mandatory blocks by default.
5. Use controlled vocabulary + free text.
6. Prefer smallest sufficient concept set.
7. Avoid NOT unless false-negative risk is tested.
8. Validated design filters preferred when appropriate.
9. Arbitrary date limits require substantive justification.
10. Search syntax translated per database/interface.
11. Known-item testing does not prove completeness.
12. Avoid overfitting to known studies.
13. Different evidence types may require separate searches.
14. Exact strategy/date/source/interface must be stored.
15. PRESS terminology is honest:
   **PRESS-based self-audit — NOT independently peer reviewed**
   unless independent peer review actually occurs.

## Architecture result

The RES-01 operational chain is now:

`Decision/use`
→ `QUESTION_CARD.md`
→ `Review Necessity / FINER Gate`
→ research route
→ `SEARCH_CONCEPT_CARD.md`
→ retrieval
→ later screening/extraction/synthesis.

No architecture contradiction found in the handoff.

## Remaining before RES-01 closure

1. Final RES-01 synthesis.
2. Short post-implementation consistency/closure check.
3. Update canonical topic/status artifacts.
4. Assign `CLOSED_FOR_PRACTICE` only if synthesis/audit pass.

## Next pass

**RES-01 / PASS-15 — final synthesis of question-formulation methodology and canonical rules.**
