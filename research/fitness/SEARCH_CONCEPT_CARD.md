# Search Concept Card — protocol for translating a framed question into a reproducible search

Версия: **1.0 — RES-01 implementation**  
Статус: **CANONICAL WORKING TEMPLATE**  
Назначение: переводить уже сформулированный scientific question в search concepts и воспроизводимые поисковые стратегии.

## Основной принцип

Последовательность:

1. Сначала завершить `QUESTION_CARD.md`.
2. Получить viability route.
3. Определить отдельные evidence streams, если они нужны.
4. Для каждого stream создать отдельный Search Concept Card.
5. Перевести eligibility concepts в минимально достаточные searchable concept blocks.
6. Расширить каждый concept controlled vocabulary + free text.
7. Протестировать retrieval.
8. Выполнить PRESS-based self-audit.
9. Сохранить exact strategy, source, interface и дату.
10. Любое изменение **scientific scope** вернуть в `QUESTION_CARD.md`.

**Scientific question != search query.**

---

# 1. Identification

## 1.1 Topic ID

`XXX-00`

## 1.2 Evidence stream ID / name

Если topic требует нескольких evidence streams, назвать каждый отдельно.

Примеры:
- effectiveness;
- harms;
- mechanism;
- qualitative;
- implementation;
- policy.

## 1.3 Linked Question Card

- Question Card version/date:
- Scientific question type:
- Primary question:
- Viability status:
- Relevant conditional module(s):

Поиск не должен существовать без прослеживаемой связи с научным вопросом.

---

# 2. Search purpose

## 2.1 What this search is intended to retrieve

Кратко описать тип evidence.

## 2.2 What this search is NOT intended to retrieve

Указать соседние evidence streams, если для них предусмотрены отдельные поиски.

## 2.3 Retrieval priority

- [ ] sensitivity / recall prioritized
- [ ] balanced sensitivity and precision
- [ ] targeted known-source retrieval
- [ ] scoping / broad mapping
- [ ] other — justify

Для systematic evidence retrieval узкий маленький result set сам по себе не считается преимуществом.

---

# 3. Eligibility concepts inherited from Question Card

Перечислить **все научно значимые eligibility concepts**, даже если часть из них не попадёт в search query.

1. Population:
2. Intervention / exposure / phenomenon:
3. Comparator:
4. Outcome / target condition / construct:
5. Time:
6. Context / setting:
7. Study design / evidence type:
8. Other eligibility-defining concepts:

Это слой scientific eligibility, а не готовая Boolean-структура.

---

# 4. Search-concept selection

## 4.1 Mandatory search blocks actually used

Для каждого concept block:

### Concept A
- Scientific meaning:
- Why mandatory in search:
- Expected indexing/reporting reliability:

### Concept B
- Scientific meaning:
- Why mandatory in search:
- Expected indexing/reporting reliability:

### Concept C
- Scientific meaning:
- Why mandatory in search:
- Expected indexing/reporting reliability:

Добавлять блоки только когда они улучшают retrieval без неприемлемой потери relevant records.

## 4.2 Eligibility concepts intentionally omitted from mandatory search blocks

Для каждого omitted concept:

1. Concept:
2. Why scientifically important:
3. Why omitted from search:
   - poorly indexed;
   - inconsistently reported;
   - expected recall loss;
   - screened manually;
   - handled by separate evidence stream;
   - other.
4. Where it will be enforced:
   - screening;
   - extraction;
   - synthesis grouping;
   - other.

Comparator и outcome не становятся mandatory blocks автоматически.

---

# 5. Vocabulary development

Заполнять отдельно для каждого search concept.

## 5.1 Controlled vocabulary

- Database thesaurus:
- Subject headings:
- Exploded / non-exploded terms:
- Relevant narrower/broader terms:

## 5.2 Free-text term families

- synonyms;
- spelling variants;
- abbreviations;
- acronyms;
- historical terminology;
- phrase variants;
- terminology found during pilot retrieval.

## 5.3 Field restrictions

Например:
- title;
- abstract;
- keyword;
- subject-heading field.

Обосновать ограничения, если они могут уменьшить recall.

## 5.4 Truncation / wildcard / proximity logic

Записать:
- syntax;
- intended concept coverage;
- risk of noise or false negatives.

---

# 6. Boolean / conceptual structure

## 6.1 Within concepts

Обычно:
`term1 OR term2 OR heading3`

## 6.2 Between concepts

Обычно:
`Concept A AND Concept B AND Concept C`

## 6.3 NOT operators

- Used? YES / NO
- If YES:
  1. exact exclusion target;
  2. why safer alternatives were insufficient;
  3. false-negative check performed;
  4. known relevant records retained?

Default: avoid `NOT` unless tested.

---

# 7. Study-design / evidence-type filters

1. Filter needed? YES / NO
2. Target design/evidence type:
3. Validated filter available? YES / NO / N/A
4. Filter source/version:
5. Exact filter:
6. Why appropriate for this scientific question:
7. Known limitations:

Do not reuse an RCT filter for:
- qualitative;
- prognosis;
- diagnostic;
- etiology;
- textual evidence
without explicit methodological justification.

---

# 8. Limits

For every limit:

1. Limit:
2. Exact setting:
3. Scientific justification:
4. Potential evidence lost:
5. Decision to retain/remove after pilot:

Possible limits:
- language;
- date;
- human/animal;
- age;
- publication type;
- geography;
- other.

**“Too many results” is not by itself a sufficient scientific justification for an arbitrary date limit.**

---

# 9. Source / database record

Create one block per searched source.

## SOURCE A

1. Database/source:
2. Platform/interface:
3. Search date:
4. Coverage/date range:
5. Controlled vocabulary system:
6. Exact query/strategy:
7. Filters/limits:
8. Number retrieved:
9. Export format/location:
10. Notes:

## SOURCE B

Повторить тот же блок.

Raw syntax must be translated to each platform; do not copy syntax verbatim across databases.

---

# 10. Known-item benchmark

Use when known relevant studies/reviews exist.

For each benchmark item:

1. Citation/identifier:
2. Why relevant:
3. Retrieved? YES / NO
4. If NO, why missed?
5. Search change made?
6. Did the change generalize beyond this one item?

Known-item testing checks retrieval but **does not prove completeness**.

Do not overfit the query to known titles/authors/phrases.

---

# 11. Pilot retrieval check

## 11.1 Result sampling

Inspect a sample of retrieved records.

Record:
- relevant terminology discovered;
- obvious noise sources;
- missing concept variants;
- indexing surprises.

## 11.2 Recall-risk check

Questions:

- Are obviously relevant known records missing?
- Is any mandatory block too restrictive?
- Is outcome/comparator unnecessarily reducing recall?
- Is a field restriction too narrow?
- Is a filter removing eligible designs?

## 11.3 Precision check

Questions:

- Which concept causes most noise?
- Can precision improve without material recall loss?
- Is screening noise preferable to a risky restrictive block?

---

# 12. Iterative search changes

For every material change:

1. Date:
2. Change:
3. Reason:
4. Trigger:
   - vocabulary discovery;
   - indexing discovery;
   - syntax correction;
   - recall problem;
   - precision problem;
   - other.
5. Does this change only retrieval vocabulary? YES / NO
6. Does it alter scientific eligibility/scope? YES / NO

### If only vocabulary changes
Update this Search Concept Card.

### If scientific scope changes
STOP search refinement and return to:
- `QUESTION_CARD.md` Scope-change log;
- eligibility;
- viability gate;
then rebuild affected search logic.

---

# 13. Separate evidence streams

If one decision needs materially different evidence types, do not force them into one giant search.

Possible separate streams:
- comparative effects;
- adverse effects;
- rare harms;
- qualitative experience;
- implementation;
- mechanism;
- policy/textual evidence.

For each stream state:
1. separate Question Card module or subquestion;
2. separate Search Concept Card;
3. intended later integration point.

---

# 14. Conceptual audit

Before technical syntax audit:

- [ ] Search is linked to a valid Question Card.
- [ ] Search concepts follow scientific eligibility.
- [ ] All eligibility concepts are listed.
- [ ] Mandatory search blocks are justified.
- [ ] Omitted eligibility concepts are documented.
- [ ] Comparator is not mandatory without retrieval justification.
- [ ] Outcome is not mandatory without retrieval justification.
- [ ] Question-specific framework was preserved; not every question was converted to PICO.
- [ ] Separate evidence streams are used where needed.
- [ ] No search refinement silently changed scientific scope.

---

# 15. PRESS-based technical self-audit

Status label:

**PRESS-based self-audit — NOT independently peer reviewed**

Check:

1. Translation of research question into search concepts
2. Boolean operators
3. Proximity operators
4. Subject headings
5. Text words
6. Spelling / syntax
7. Line numbers / set combinations
8. Limits / filters
9. Database-specific syntax translation
10. Known-item retrieval
11. Risk of accidental false negatives
12. Reproducibility of exact strategy

## Independent peer review

- Independent reviewer used? YES / NO
- Reviewer:
- Date:
- Changes requested:
- Changes implemented:

Do **not** write `PRESS peer reviewed` unless an independent skilled reviewer actually performed peer review.

---

# 16. Search completion record

1. Final search date:
2. Final databases/sources:
3. Final exact strategies saved? YES / NO
4. Retrieval counts saved? YES / NO
5. Exports saved? YES / NO
6. Search revisions logged? YES / NO
7. Question scope unchanged? YES / NO
8. If scope changed, linked Question Card revision:
9. Independent peer-review status:
10. Search status:
   - DRAFT
   - PILOTED
   - FINAL_FOR_THIS_REVIEW_VERSION
   - REQUIRES_REVISION

---

# 17. Handoff to screening / synthesis

Before handoff:

- [ ] Scientific eligibility remains defined in Question Card.
- [ ] Search did not become the eligibility definition.
- [ ] Search omissions are enforced during screening where planned.
- [ ] Separate evidence streams remain labelled.
- [ ] Exact source/interface/date/query are reproducible.
- [ ] Scope changes have been propagated back upstream.
- [ ] Search status is explicit.

---

# 18. Relationship to other project artifacts

`QUESTION_CARD.md`
→ defines **what scientific question is being answered**.

`SEARCH_CONCEPT_CARD.md`
→ defines **how potentially eligible evidence is retrieved**.

Later screening/extraction artifacts
→ determine **which retrieved records actually satisfy eligibility and what evidence they contribute**.

These layers must remain distinct.
