# RES-01 / PASS-06 — Translating framed questions into search concepts

Статус: **COMPLETE PASS — topic remains RESEARCHING**  
Дата: 2026-11-16  
Topic: RES-01 — формулировка исследовательского вопроса

## Scope этого прохода

Только:
1. связь research question → eligibility → search concepts;
2. почему search strategy не является буквальной копией PICO/PICOT;
3. выбор минимально достаточных concept blocks;
4. controlled vocabulary + free text;
5. OR внутри concept и AND между concepts;
6. study-design filters;
7. iterative term refinement без изменения вопроса;
8. known-item checks / overfitting;
9. peer review / self-audit search strategy.

Не покрывается здесь:
- выбор конкретных баз для каждой будущей темы;
- citation chasing и grey literature подробно;
- deduplication/screening workflow;
- automation/AI search tooling;
- stakeholder involvement;
- equity/context;
- финальный RES-01 audit.

## Источники, проверенные в этом pass

1. Cochrane Handbook for Systematic Reviews of Interventions, Chapter 4 — Searching for and selecting studies.  
   Current official page checked 2026-11-16. Chapter text reports **last updated March 2025**.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-04

2. Cochrane — Versions and changes to the Handbook.  
   Current official page checked 2026-11-16. Handbook release **6.5.1 (2026)**; 2026 Chapter 4 changes were mainly link updates to the new qualitative-evidence handbook and Chapter 21.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/versions-and-changes-handbook

3. McGowan J et al. PRESS Peer Review of Electronic Search Strategies: 2015 Guideline Statement. J Clin Epidemiol. 2016;75:40–46. PMID 27005575.  
   https://pubmed.ncbi.nlm.nih.gov/27005575/

4. Canada's Drug Agency / CDA-AMC. PRESS guideline page. Checked 2026-11-16.  
   The site identifies the **2015 PRESS guideline (published 2016)** as the most recent version.  
   https://www.cda-amc.ca/press-peer-review-electronic-search-strategies-0

---

## 1. Search strategy is downstream of the research question

### Established finding
**Confidence: HIGH**

Cochrane states that search structure should be informed by:
- review objective/question;
- eligibility criteria;
- appropriate PICO elements;
- study design.

Project consequence:

**Question → eligibility → search concepts → search terms.**

Not:
**keywords found online → reconstructed question.**

Search retrieval can reveal terminology we did not know, but it must not silently redefine:
- population;
- intervention/exposure;
- comparator;
- outcome;
- target effect.

---

## 2. Research question ≠ database query

### Established finding
**Confidence: HIGH**

Cochrane explicitly states that it is often:
- unnecessary;
- and potentially undesirable

to search every aspect of the clinical/review question.

Reason:
some PICO elements may be:
- absent from titles/abstracts;
- inconsistently worded;
- poorly indexed.

Project consequence:
a complete Question Card does **not** imply that every field becomes an AND search block.

---

## 3. Minimal sufficient concept blocks

### Established finding
**Confidence: HIGH**

For intervention reviews in general databases such as MEDLINE, Cochrane notes a common structure:

1. population/condition/problem concept;
2. intervention concept;
3. study-design concept/filter.

Comparator and outcome are often omitted from mandatory search blocks.

### Project rule

Begin from the **smallest set of concepts that can retrieve the eligible evidence with high sensitivity**.

Only add another mandatory concept if:
1. it materially improves precision;
2. relevant studies still reliably contain/index that concept;
3. known eligible studies are not lost;
4. the restriction matches the actual eligibility logic.

---

## 4. Comparator is often an eligibility concept, not a search concept

### Established finding
**Confidence: HIGH**

A comparator may be scientifically essential while being poorly represented in bibliographic metadata.

Example:
a study comparing:
- 1 RIR vs 4 RIR

may not clearly encode the comparator in title/abstract/index terms.

Project consequence:
default is:
- comparator checked during screening,
not necessarily used as an AND block.

Exception:
when comparator is distinctive and consistently reported/indexed, such as some placebo comparisons.

---

## 5. Outcome is often dangerous as a mandatory search concept

### Established finding
**Confidence: HIGH**

Cochrane warns that outcomes are often:
- not in titles/abstracts;
- poorly indexed;
- selectively reported.

Adding an outcome block can therefore reduce sensitivity.

Project consequence:

For intervention-effect searches:
**do not use outcome as mandatory block by default.**

Use it only when:
1. the review/question fundamentally depends on a distinctive outcome;
2. retrieval testing shows acceptable recall;
3. the outcome is reliably described/indexed.

This aligns with PASS-02:
outcome importance and study eligibility are different from whether the outcome appears in searchable metadata.

---

## 6. Search concepts and search terms are different layers

### Established finding
**Confidence: HIGH**

### Concept
Scientific entity:
- resistance training;
- adults;
- sleep restriction.

### Search terms
Ways the database may represent the concept:
- subject headings;
- synonyms;
- spelling variants;
- abbreviations;
- acronyms;
- related terminology;
- free-text phrases.

Project consequence:
do not equate one concept with one keyword.

---

## 7. Use controlled vocabulary + free text

### Established finding
**Confidence: HIGH**

Cochrane recommends combining:
1. controlled vocabulary, e.g. MeSH / Emtree;
2. free-text terms.

Reason:
neither alone captures all relevant records.

Controlled vocabulary may:
- normalize synonyms;
- capture hierarchical concepts.

Free text may capture:
- new terminology;
- unindexed records;
- terminology not represented well by the thesaurus.

Project rule:
important concept blocks should normally contain both where the database supports controlled vocabulary.

---

## 8. OR within a concept; AND between concepts

### Established finding
**Confidence: HIGH**

Typical structure:

### Within concept
synonym A  
OR synonym B  
OR subject heading C

### Across concepts
Population block  
AND Intervention block  
AND Design block

Project consequence:
Boolean structure must reflect conceptual logic rather than natural-language sentence structure.

---

## 9. Avoid NOT where possible

### Established finding
**Confidence: HIGH**

Cochrane warns that NOT can accidentally remove relevant records.

Project rule:
use NOT only when:
1. exclusion target is clear;
2. false-negative risk has been tested;
3. known relevant studies remain retrievable.

Prefer screening noise over silently deleting relevant evidence.

---

## 10. Study-design filters should be validated where possible

### Established finding
**Confidence: HIGH**

Cochrane recommends validated, highly sensitive methodological filters where appropriate.

Examples:
- validated RCT filters.

Project consequence:
do not improvise a narrow study-design filter from a few guessed terms if a validated filter exists.

Also:
filters appropriate for intervention RCTs may be inappropriate for:
- harms;
- prognosis;
- qualitative;
- diagnostic;
- observational etiology evidence.

Search structure follows question type.

---

## 11. Different evidence questions may require separate searches

### Established finding
**Confidence: HIGH**

Cochrane MECIR explicitly notes that reviews addressing:
- adverse effects;
- economics;
- qualitative questions;
or other evidence types

may need different eligibility criteria and different searches.

Project consequence:
one giant query is not automatically preferable.

Example:
a resistance-training topic may require separate retrieval streams for:
1. RCT efficacy;
2. rare harms;
3. qualitative adherence;
4. mechanistic evidence.

Those streams may later inform one decision but should not be forced into the same search design.

---

## 12. Complex/non-PICO questions may need tailored or iterative searches

### Established finding
**Confidence: HIGH**

Cochrane states that PICO is not always suitable for:
- diagnostic accuracy;
- prognosis;
- qualitative evidence;
- methods questions;
- some complex interventions.

Tailored and iterative approaches may be needed.

Project consequence:
framework selected in PASS-05A/05B/05C should determine search concepts.

Do not translate every framework back into intervention PICO merely because MEDLINE searches often use PICO terminology.

---

## 13. Iterative search development is allowed

### Established finding
**Confidence: HIGH**

Cochrane describes search development as iterative:
retrieved records may reveal:
- synonyms;
- indexing terms;
- spelling variants;
- terminology not initially anticipated.

Project boundary:

### Allowed
Add/revise **search vocabulary** while preserving the scientific scope.

### Requires scope-change log
A retrieved paper reveals that:
- population definition should change;
- intervention class should expand;
- comparator meaning should change;
- outcome target should change.

This is not just search refinement; it changes the research question/eligibility.

---

## 14. Search sensitivity vs precision

### Established finding
**Confidence: HIGH**

Systematic-review searches generally prioritize high sensitivity/recall while maintaining reasonable precision.

Definitions:

### Sensitivity / recall
Relevant records retrieved / all relevant records available in the searched source.

### Precision
Relevant records retrieved / all records retrieved.

Project consequence:
a large number of irrelevant records is not by itself proof of a bad search.

Conversely:
a beautifully small result set may simply be missing evidence.

---

## 15. Known-item testing is useful but can overfit

### Established finding
**Confidence: HIGH**

Cochrane recommends checking whether a search retrieves:
- key known publications;
- studies included in similar reviews.

But retrieving only those known studies is not enough to demonstrate completeness.

Project rule:

1. maintain a small benchmark set of known relevant studies when available;
2. confirm search can retrieve them;
3. inspect why any are missed;
4. do not tune the search so specifically to known titles/authors/phrasing that unknown studies are excluded.

Known-item testing = diagnostic check, not proof of completeness.

---

## 16. Citation/reference checks can diagnose search weakness

### Established finding
**Confidence: HIGH**

Cochrane notes that citation searches/reference checking may reveal additional eligible studies.

If many eligible studies appear only after citation chasing, the original database search may need revision.

Detailed supplementary-search methods are deferred to later methodology.

---

## 17. Arbitrary date limits are not a harmless precision tool

### Established finding
**Confidence: HIGH**

Cochrane does not recommend arbitrary date restrictions for intervention reviews because eligible evidence can be lost.

Project rule:
a date restriction requires a substantive reason such as:
- technology did not exist before a date;
- definition/measurement changed materially;
- explicit contemporary-policy question.

“Too many results” alone is not sufficient justification.

---

## 18. Database syntax is not portable verbatim

### Established finding
**Confidence: HIGH**

Databases differ in:
- controlled vocabulary;
- proximity syntax;
- field codes;
- truncation;
- indexing.

Project consequence:
translate **conceptual logic**, not raw syntax, across databases.

A MEDLINE search copied literally into another database is not considered a validated translation.

---

## 19. PRESS separates question translation from search mechanics

### Established finding
**Confidence: HIGH**

PRESS 2015 checks include:
1. translation of research question into search concepts;
2. Boolean/proximity operators;
3. subject headings;
4. text words;
5. spelling/syntax/line numbers;
6. limits/filters.

This supports a two-layer audit:

### Conceptual audit
Did we search the right concepts?

### Technical audit
Did we implement them correctly?

Both can fail independently.

---

## 20. True PRESS peer review requires another reviewer

### Established finding
**Confidence: HIGH**

PRESS recommends peer review of the primary search strategy by an appropriately skilled reviewer.

### Project constraint

This project currently does not have an independent information specialist reviewing each search.

Therefore we must **not claim**:
> “PRESS peer reviewed”

when only the assistant performed the check.

### Project adaptation

Use:
**PRESS-based self-audit — NOT independently peer reviewed**

until an independent reviewer is actually involved.

This preserves terminology honestly.

---

## 21. Search strategy must be documented

### Established finding
**Confidence: HIGH**

Cochrane requires enough documentation for the search to be reproducible:
- source/database;
- platform/interface;
- date;
- exact strategy;
- limits/filters.

Project consequence:
future deep-research topics should store:
1. search date;
2. source;
3. search concepts;
4. exact query when practical;
5. filters/limits;
6. material revisions and why.

This is distinct from the final scientific synthesis.

---

## 22. Project search-concept workflow

For each evidence stream:

### Step 1 — Start from Question Card
Identify question type/framework.

### Step 2 — Identify eligibility-defining concepts
List all scientific eligibility elements.

### Step 3 — Choose searchable concepts
Ask which elements are:
- reliably present/indexed;
- necessary for retrieval;
- safe to make mandatory.

### Step 4 — Expand each concept
Create:
- controlled terms;
- synonyms;
- variants;
- acronyms;
- free-text terms.

### Step 5 — Add validated design filter if appropriate

### Step 6 — Test
Use:
- known-item checks;
- result sampling;
- unexpected terminology.

### Step 7 — Refine vocabulary
Without changing question scope silently.

### Step 8 — PRESS-based self-audit
Mark explicitly:
**not independently peer reviewed**.

### Step 9 — Record exact strategy/date/version

---

## 23. Search Concept Card — project addition

Before executing a major systematic search, create:

1. **Topic / evidence stream**
2. **Question framework**
3. **Eligibility concepts**
4. **Search concepts actually used**
5. **Eligibility concepts intentionally omitted from search**
6. **Reason for omission**
7. **Controlled vocabulary**
8. **Free-text term families**
9. **Study-design filter**
10. **Limits**
11. **Known-item benchmark**
12. **Changes after pilot retrieval**
13. **Did any change alter eligibility?**
14. **PRESS-based self-audit**
15. **Independent peer review status**
16. **Search date / database / interface**

This is a project operationalization of Cochrane + PRESS principles.

---

## 24. Practical rules produced by PASS-06

1. Research question and search query are not the same object.
2. Search concepts are downstream of question and eligibility.
3. Do not make every PICO/PICOT field a mandatory AND block.
4. Comparator and outcome are omitted by default when they threaten sensitivity.
5. Use the smallest sufficient set of search concepts.
6. Expand concepts with controlled vocabulary + free text.
7. Use OR within concepts and AND between concepts.
8. Avoid NOT unless false-negative risk has been tested.
9. Prefer validated study-design filters.
10. Use separate searches for materially different evidence streams when needed.
11. Allow iterative term refinement without silent scope changes.
12. Benchmark against known relevant studies without overfitting.
13. Do not use arbitrary date limits merely to reduce workload.
14. Translate search logic, not raw syntax, between databases.
15. Separate conceptual search errors from technical syntax errors.
16. Do not claim PRESS peer review without an independent reviewer.
17. Store a reproducible search record for major evidence streams.

## What remains unresolved for RES-01

1. Stakeholder/user involvement in question formulation.
2. Equity/context as an explicit cross-question requirement.
3. Formal gap/audit checklist.
4. Final synthesis.
5. QUESTION_CARD / SEARCH_CONCEPT_CARD integration.

## Next pass

**RES-01 / PASS-07A — stakeholder and end-user involvement in question formulation.**
