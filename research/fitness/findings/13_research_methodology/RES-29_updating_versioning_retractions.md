# RES-29 — Updating, versioning, corrections and retractions

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Как поддерживать research base актуальной без бесконечного бессистемного пересмотра и как реагировать на новые studies, corrections, expressions of concern и retractions.

### Question type
Evidence maintenance / research integrity / version control.

### Critical outcomes
1. Source version/date tracking.
2. Update triggers.
3. Living vs periodic update.
4. Post-publication status checking.
5. Corrections/retractions handling.
6. Transparent version history.
7. No silent overwriting.

### Closure criterion
Создан project update policy and source-status workflow.

---

## 1. Evidence is versioned

Scientific conclusion is not timeless text.

Each important conclusion should have:
1. evidence search/check date;
2. source versions;
3. certainty;
4. applicability;
5. last reviewed date.

When evidence changes, conclusion may:
- remain;
- strengthen;
- weaken;
- reverse.

## 2. Update based on need, not calendar alone

Cochrane current guidance:
review should be updated when:
- question remains important;
- new studies/data exist;
- new methods matter;
- changes may meaningfully affect findings.

Not every new paper requires full rebuild. citeturn276299search0turn276299search2

Project rule:
**trigger-based updating** for most topics.

## 3. Update triggers

### Strong trigger
1. new major systematic review/meta-analysis;
2. new large high-quality RCT;
3. new guideline/position stand;
4. safety signal;
5. correction/retraction of key source;
6. methodological change that affects prior inference;
7. new evidence directly contradicts high-impact conclusion.

### Moderate trigger
1. several smaller new studies;
2. expanded population;
3. improved measurement;
4. longer follow-up.

### Weak trigger
one small low-quality study consistent with existing high-certainty evidence.

## 4. Living review vs ordinary update

Cochrane defines living systematic review as continuously updated review with frequent searches.

Current Chapter 21 notes:
- searches often at least every ~3 months for true LSR;
- update frequency should match evidence pace;
- living mode requires resources/explicit methods. citeturn469391search10

Our project:
not every fitness topic needs living mode.

Use:
- event-triggered updates;
- periodic current checks for high-volatility topics.

## 5. Topic volatility classes

Project-specific:

### V1 — Stable
Basic anatomy/mechanics.
Check when major reference/method issue arises.

### V2 — Moderately evolving
Hypertrophy programming, nutrition, recovery.
Check before major personal decision and periodically.

### V3 — Fast-moving
New guidelines, supplements, wearables, ADHD-specific exercise evidence.
Check every time used for current recommendation.

### V4 — Safety/medical current-state
Guidelines/contraindications/pharmacology.
Always verify current primary guidance before actionable advice.

## 6. Search date vs publication date

A 2026 review may have searched only through 2024.

Always record:
- publication date;
- last search date.

For currency, search date often more important.

## 7. Source status after publication

Articles can receive:
- correction;
- erratum;
- expression of concern;
- partial retraction;
- retraction;
- withdrawal;
- new version.

Crossmark exists to expose substantive status changes such as corrections/retractions. citeturn276299search3turn276299search1

Project rule:
for key source, check publisher/PubMed/Crossmark status when practical.

## 8. Retraction

COPE 2025 guidance:
purpose of retraction is correction of literature/integrity, not punishment.

If key source retracted:
1. mark immediately;
2. do not use as positive evidence;
3. identify reason;
4. recalculate/synthesize without it if relevant;
5. update dependent claims;
6. record change.

Do not silently delete source as if it never existed. citeturn450474search0

## 9. Correction

Correction may:
- be minor;
- materially change data/conclusion.

Need assess:
1. what changed?
2. does effect estimate change?
3. does RoB change?
4. does claim/certainty change?

Not every correction invalidates article.

## 10. Expression of concern

Signal of unresolved integrity concern.

Project response:
1. flag source;
2. reduce reliance for high-impact claim;
3. seek corroboration;
4. monitor status.

Do not automatically treat as retracted, but do not ignore.

## 11. Preprint → version of record

If preprint later published:
1. link versions;
2. prefer version of record;
3. compare material changes;
4. update citation.

Crossref recommends explicit relationships/version/update metadata for scholarly record. citeturn276299search1

## 12. Living sources

Some guidance is itself living:
- GRADE Book;
- Cochrane online Handbook.

Record:
- page title;
- last modified date if available;
- date accessed/check.

Avoid citing a living page as if content frozen forever.

## 13. Git version control

Research repository provides:
- commit history;
- diffs;
- rationale.

Project rule:
**never overwrite a major conclusion without preserving history.**

When conclusion changes:
1. update finding version;
2. add changelog;
3. update EVIDENCE_LEDGER status;
4. update DECISIONS if practical implication changed;
5. preserve old commit.

## 14. Claim lifecycle

Possible statuses:

1. ACTIVE
2. ACCEPTED
3. UNDER_REVIEW
4. SUPERSEDED
5. WITHDRAWN
6. RETRACTED_SOURCE_DEPENDENCY

Each claim keeps:
- original source;
- reason for status change;
- replacement claim if any.

## 15. Update workflow

For a trigger:

1. Identify affected topic IDs.
2. Reopen Question Card.
3. Search current evidence.
4. Check key source status.
5. Compare new vs old evidence.
6. Reassess RoB/directness/precision.
7. Reassess certainty.
8. Reassess Decision Card if action affected.
9. Version finding.
10. Log change.

## 16. Change significance

### Patch
Citation/date/clarity correction; conclusion unchanged.

### Minor
Estimate/certainty refined; decision unchanged.

### Major
Recommendation/causal conclusion changes.

Version examples:
- v1.0 → v1.1 patch/minor;
- v1.x → v2.0 major conceptual change.

Project-specific semantic versioning.

## 17. Update priority

Highest priority if conclusion affects:
1. safety;
2. medical referral;
3. supplement/drug interaction;
4. core training prescription;
5. expensive purchase;
6. high-burden intervention.

Lower priority:
background mechanism with no decision impact.

## 18. Retraction cascade

If source S supports claims A/B/C:

1. mark S status;
2. search EVIDENCE_LEDGER dependencies;
3. reassess A/B/C independently;
4. if other evidence sufficient, certainty may only drop;
5. if source was sole support, claim may be withdrawn.

This is why evidence ledger exists.

## 19. Review updates

Cochrane notes updating can change:
- data;
- certainty;
- subgroup understanding;
- methodology.

Also explicitly recommends checking previously included studies for corrections/retractions during update. citeturn276299search0

## 20. Methodology updates

Our own standards can change.

Example:
Cochrane Handbook 6.5.1 updated sequential-method guidance in 2026.

If methodology update changes interpretation:
- revisit affected findings.

Do not assume only new primary data can invalidate conclusion.

## 21. Source verification before action

For high-stakes/current claims:
1. confirm source still current;
2. confirm not retracted/corrected materially;
3. confirm guideline version;
4. confirm date.

User instruction explicitly prioritizes current primary technical information; project policy matches this.

## 22. Project files affected by update

Potentially:
- finding file;
- EVIDENCE_LEDGER.md;
- OPEN_QUESTIONS.md;
- DECISIONS.md;
- RESEARCH_QUEUE.md;
- AREA_STATUS.md;
- personal Decision Card/log later.

## 23. SOURCE_STATUS_LOG

For high-impact status changes record:
1. source DOI/PMID;
2. original status;
3. detected update;
4. date;
5. type;
6. affected topics;
7. action taken.

A dedicated file is useful and created with this topic.

## 24. Research freeze points

Before major synthesis/program:
perform current check on:
1. all V3/V4 topics used;
2. key guidelines;
3. key meta-analyses;
4. safety claims.

This creates a dated “evidence freeze” for decision.

Then later updates can compare against that baseline.

## 25. Project rules

1. No silent overwrites.
2. Record search/check date.
3. Search date matters for reviews.
4. Update on meaningful evidence/method trigger.
5. Check corrections/retractions for key sources.
6. Retracted source is removed from positive evidentiary support.
7. Preserve historical rationale via Git.
8. Reassess dependent claims after source status change.
9. Current safety/medical/fast-moving claims are reverified at use time.
10. Major personal decisions get an evidence freeze/version.

## 26. Confidence

### HIGH
- systematic reviews can become misleading when outdated;
- update need should depend on question importance and meaningful new evidence/methods;
- corrections/retractions must be incorporated;
- living reviews require explicit frequent update methods;
- post-publication status systems such as Crossmark support current-status checking.

### PRACTICAL_HEURISTIC
- V1–V4 volatility classes;
- semantic finding versions;
- claim lifecycle;
- evidence freeze.

## 27. Sources

1. Cochrane Handbook Chapter IV — Updating a review.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-iv

2. Cochrane Handbook Chapter 21 — Living systematic reviews, version 6.5.1 (2026).  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-21

3. Cochrane Editorial Policy — Review updates.  
   https://documentation.cochrane.org/pages/viewpage.action?pageId=172785730

4. COPE Retraction Guidelines, version 3, reviewed Aug 2025.  
   https://doi.org/10.24318/cope.2019.1.4

5. Crossref — Crossmark: version control, corrections and retractions.  
   https://www.crossref.org/documentation/crossmark/version-control-corrections-and-retractions

6. Crossref — Crossmark service/current status.  
   https://www.crossref.org/services/crossmark/

## 28. Stage conclusion

RES-01 through RES-29 together define the methodological operating system for the rest of the project.

Next domain:
**02 Anatomy (ANA)**, followed by PHY → NEU → BIO → MEC per RESEARCH_ORDER.
