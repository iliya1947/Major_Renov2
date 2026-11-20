# RES-02 / PASS-05A — Self-controlled observational designs: case-crossover and SCCS

Статус: **COMPLETE PASS — topic remains RESEARCHING**  
Дата: 2026-11-16  
Topic: RES-02 — Study designs / what they answer

## Scope этого прохода

Только self-controlled observational structures, обнаруженные как gap в PASS-04:

1. case-crossover (CCO);
2. self-controlled case series (SCCS);
3. outcome-anchored vs exposure-anchored distinction;
4. what self-matching controls and what it does not;
5. core suitability conditions;
6. key time-related assumptions;
7. adjacent variants only for taxonomy placement:
   - case-time-control;
   - case-case-time-control;
   - self-controlled risk interval (SCRI).

Не покрывается здесь:
- detailed conditional logistic / Poisson models;
- detailed case-time-control methods;
- detailed SCCS extensions;
- full pharmacoepidemiology methodology;
- detailed confounding analysis;
- descriptive/frequency designs;
- final design-selection matrix.

---

## Источники, проверенные в этом pass

1. **ENCePP Guide on Methodological Standards in Pharmacoepidemiology — current online Chapter 4: Study design**  
   Current page checked 2026-11-16.  
   Current ENCePP taxonomy explicitly groups self-controlled/case-only approaches and distinguishes:
   - outcome-anchored: case-crossover, case-time-control, case-case-time-control;
   - exposure-anchored: self-controlled case series, self-controlled risk interval.  
   https://encepp.europa.eu/encepp-toolkit/methodological-guide/chapter-4-study-design_en

2. **Cadarette et al. 2021 — “Control yourself: ISPE-endorsed guidance in the application of self-controlled study designs in pharmacoepidemiology”**  
   Pharmacoepidemiology and Drug Safety. 2021;30(6):671–684.  
   ISPE-endorsed methodological guidance introducing the SCOPE terminology.  
   https://pmc.ncbi.nlm.nih.gov/articles/PMC8251635/

3. **Maclure M. 1991 — original case-crossover design paper**  
   American Journal of Epidemiology. 133(2):144–153.  
   Foundational definition: transient exposure → transient change in risk of an acute event; each case provides control time.  
   PMID 1985444.  
   https://pubmed.ncbi.nlm.nih.gov/1985444/

4. **Maclure & Mittleman 2000 — “Should we use a case-crossover design?”**  
   Annual Review of Public Health.  
   Methodological review clarifying best-fit conditions:
   - intermittent/transient exposure;
   - immediate/transient effect;
   - abrupt event;
   - importance of exposure opportunity and control-time selection.  
   PMID 10884952.  
   https://pubmed.ncbi.nlm.nih.gov/10884952/

5. **Whitaker et al. / Farrington methodology — SCCS**  
   “The methodology of self-controlled case series studies.”  
   PMID 18562396.  
   SCCS uses only cases and compares incidence during exposed/risk periods against other observation time within the same individuals.  
   https://pubmed.ncbi.nlm.nih.gov/18562396/

6. **Petersen et al. / Farrington group — BMJ 2016 SCCS overview**  
   “Self controlled case series methods: an alternative to standard epidemiological study designs.”  
   Best suited to acute recurrent or non-recurrent events and transient exposures with precise timing.  
   https://www.bmj.com/content/354/bmj.i4515

7. **Farrington 2022 — BMJ SCCS explainer**  
   Current concise methodological explanation; links the formal SCCS methodology/site.  
   https://www.bmj.com/content/377/bmj.o625

8. **Statistics in Medicine 2026 — delayed exposures/pre-exposure periods in SCCS**  
   Current methodological development checked 2026-11-16.  
   Confirms event-dependent exposure remains a key SCCS issue and that extensions/sensitivity analyses exist when standard assumptions are violated.  
   https://pmc.ncbi.nlm.nih.gov/articles/PMC13120864/

## Source-status note

- ENCePP current online guide is the main current taxonomy source for this pass.
- ISPE 2021 guidance is used for self-controlled design terminology.
- Maclure 1991/2000 and classic SCCS papers are foundational rather than “latest”, but the current ENCePP guide still relies on these principles.
- 2026 SCCS methodological work is used to avoid overstating standard assumptions as absolute when validated extensions exist.

---

# Part A — Self-controlled observational umbrella

## 1. Core idea

### Established finding
**Confidence: HIGH**

In self-controlled observational designs:

> each individual serves as their own comparator across different time periods.

This means the comparison is **within person**, not primarily between different exposed and unexposed people.

### Structural consequence

Characteristics that are constant within an individual over the observation period are controlled by design, for example:

- sex;
- many genetic characteristics;
- stable chronic traits;
- many stable socio-demographic factors.

But self-control does **not** automatically control:

- age effects;
- seasonality;
- calendar-time trends;
- changing health state;
- changing training state;
- time-varying co-exposures;
- time-varying confounding by indication.

Project rule:

> self-controlled != confounding-free.

It primarily neutralizes **time-invariant within-person confounding**.

---

# Part B — SCOPE taxonomy

## 2. Outcome-anchored vs exposure-anchored

### Current ENCePP/ISPE framing
**Confidence: HIGH**

ISPE-endorsed guidance groups self-controlled observational pharmacoepidemiology designs as SCOPE and separates:

### Outcome-anchored
Start conceptually from the event/outcome time and ask:
> was exposure unusually common in the hazard window before this event?

Includes:
- case-crossover;
- case-time-control;
- case-case-time-control.

### Exposure-anchored
Start from exposure timing and divide observation time into:
- risk periods;
- baseline/control periods.

Includes:
- SCCS;
- SCRI.

### Project taxonomy decision

Use this distinction as a **self-controlled observational sub-axis**, not as a universal replacement for all observational taxonomy.

---

# Part C — Case-crossover

## 3. Core case-crossover structure

### Established finding
**Confidence: HIGH**

Case-crossover includes only individuals who experienced the acute event.

For each case:

1. define event time;
2. define hazard/case window before event;
3. measure exposure during that window;
4. select one or more control/reference windows for the same individual;
5. compare exposure occurrence between case and control windows.

Canonical structure:

`same person → control time(s) vs hazard time → acute event`

No separate non-case control person is required in the basic design.

---

## 4. Scientific question

Case-crossover is designed for questions of the form:

> Does a brief/transient exposure trigger a short-term increase in risk of an abrupt acute event?

Examples from established applications:
- medication exposure;
- air pollution;
- physical exertion;
- acute environmental exposure;
- short-term trigger of injury/cardiovascular event.

### Fitness relevance

Potentially relevant for:
- acute exertion as trigger;
- transient stimulant exposure;
- dehydration/heat episode;
- acute training exposure and immediate adverse event;

but usually **not** for:
- hypertrophy;
- gradual strength adaptation;
- chronic training load effects;
- slowly evolving overuse outcomes without a meaningful acute onset.

---

## 5. Exposure must vary within person

### Structural requirement
**Confidence: HIGH**

If a participant is continuously exposed or never changes exposure status during relevant time, there is little/no within-person exposure contrast.

Thus case-crossover works best with:

- intermittent;
- transient;
- changing exposures.

Persistent users/exposures can create serious bias or simply provide little useful contrast.

Current ENCePP specifically notes persistent-user bias in case-crossover pharmacoepidemiology.

---

## 6. Outcome must be acute enough for meaningful hazard timing

### Established finding
**Confidence: HIGH**

The design depends on identifying a plausible short hazard period before an event.

Best fit:

- abrupt-onset;
- acute outcome.

Poor fit:

- slowly progressive outcome;
- unclear onset;
- outcome whose causal induction period cannot be localized.

Project rule:

> If event onset cannot be timed meaningfully, case-crossover usually loses its defining advantage.

---

## 7. Hazard window is part of the causal question

The exposure window cannot be chosen merely because it gives the strongest association.

It should be motivated by:

- biological/behavioral induction time;
- plausible transient effect duration;
- prior evidence;
- prespecified sensitivity analyses.

Detailed window-selection statistics are deferred.

---

# Part D — Case-crossover control-time selection

## 8. Control windows

The same case supplies control periods.

Possible structures include:

1. prior control windows;
2. bidirectional control windows;
3. time-stratified windows;
4. other matched-time strategies.

### Why selection matters

If exposure prevalence changes systematically over calendar time, control windows can create biased comparisons.

Examples:
- seasonality;
- secular increase in medication use;
- weekday/weekend patterns;
- training schedule cycles.

---

## 9. Exposure time trends are a major structural threat

### Established finding
**Confidence: HIGH**

Current ENCePP guidance explicitly highlights bias from temporal changes in exposure.

Thus case-crossover does not automatically eliminate confounding related to:

- calendar time;
- age/time;
- seasonal patterns;
- secular exposure trends.

### Adjacent solution family

**Case-time-control** adds an external control group to estimate/control exposure time trends.

But this can reintroduce:
- control-selection problems;
- between-person confounding.

Project taxonomy:
case-time-control = **case-crossover-derived outcome-anchored variant**, not a new top-level observational family.

---

# Part E — Case-crossover vs ordinary case-control

## 10. Critical distinction

### Ordinary case-control
Compares:
- different people with outcome;
- different people without outcome.

### Case-crossover
Compares:
- different time windows **within the same case**.

Thus:

`control person` in ordinary case-control  
!=  
`control time` in case-crossover.

Project rule:
never classify case-crossover simply as “case-control with matching”.

It is structurally self-controlled and time-indexed.

---

# Part F — SCCS

## 11. Core SCCS structure

### Established finding
**Confidence: HIGH**

SCCS includes individuals who experienced the outcome/event and uses their observation time.

For each case:

1. define a complete observation period;
2. identify exposure time(s);
3. define post-exposure risk window(s);
4. classify remaining observation time as baseline/control time;
5. compare event incidence during risk periods with incidence during other periods in the same individual.

Canonical structure:

`same case → full observation time → exposed risk periods vs baseline periods → relative incidence`.

---

## 12. SCCS target

### Established finding
**Confidence: HIGH**

SCCS estimates a **relative incidence**:

> incidence rate during exposure-related risk periods relative to baseline/control periods within cases.

This differs conceptually from case-crossover's event-anchored sampling of exposure in hazard vs control windows.

---

## 13. Best-fit question

SCCS is best suited to:

- transient/time-varying exposure;
- acute event;
- precise exposure/event timing;
- recurrent independent events **or** sufficiently uncommon non-recurrent events.

Classic use:
- vaccine safety;
- drug adverse effects.

### Fitness relevance

Potential but uncommon uses:
- transient supplement/drug exposure and acute adverse event;
- short exposure window after extreme exertion;
- acute environmental/training exposures when precise timing exists.

Not a natural default for ordinary chronic training adaptation.

---

# Part G — SCCS assumptions

## 14. Standard SCCS assumptions

### Established finding
**Confidence: HIGH**

Current ENCePP/BMJ guidance highlights three central assumptions in the standard method:

1. **Events are independently recurrent**, or the event is sufficiently uncommon/handled so recurrence dependence is not problematic.
2. **Event does not determine/end subsequent observation** in a way that violates the observation process.
3. **Event does not affect future exposure probability/timing**.

In addition:
- important time-varying confounders such as age/calendar time may need explicit handling.

---

## 15. Event-dependent exposure

Example:
- acute event occurs;
- next planned exposure/training/vaccination is delayed or cancelled.

Then the event changes future exposure probability.

This violates the simple standard SCCS setup.

### Current-methodology nuance

2026 methodological work confirms this remains important but also shows:

> violation does not always mean SCCS is unusable.

There are:
- pre-exposure windows;
- modified SCCS methods;
- event-dependent exposure models;
- sensitivity analyses.

Project rule:

> Standard SCCS assumptions must be checked; validated extensions may be used, but the study should be classified as an **adapted SCCS**, not silently treated as standard SCCS.

---

## 16. Event-dependent observation / mortality

If the event:
- causes death;
- causes loss of observation;
- materially shortens follow-up,

standard SCCS can be biased because event timing affects available observation time.

Extensions exist for some such settings.

Project rule:
record explicitly:
- can event censor observation?
- is an extended SCCS method used?

Detailed extension validity is outside RES-02.

---

# Part H — Time-varying confounding

## 17. What SCCS does not eliminate

SCCS removes time-invariant multiplicative between-person confounding by design.

It does **not** automatically eliminate:

- aging;
- season;
- calendar trends;
- acute illness;
- transient indication;
- changing training load;
- changing medication;
- changing behavior.

Current ENCePP explicitly notes time-varying confounders remain relevant.

Project rule:
do not write:
> “self-controlled, therefore confounding is controlled.”

Correct:
> “time-invariant within-person confounding is inherently controlled; time-varying confounding remains.”

---

# Part I — SCCS vs case-crossover

## 18. Shared features

Both:

1. use cases;
2. compare time within the same person;
3. eliminate stable between-person confounding;
4. work best with transient/time-varying exposures;
5. are highly timing-dependent;
6. require explicit control/risk windows;
7. can be badly biased by time-related assumption violations.

---

## 19. Main structural difference

### Case-crossover
**Outcome-anchored**

Start from event:
> Was exposure more likely shortly before event than during control times?

### SCCS
**Exposure-anchored / observation-time based**

Start from exposure history:
> Is event incidence elevated during defined post-exposure risk periods relative to baseline observation time?

Project classification should preserve this distinction.

---

# Part J — Self-controlled risk interval

## 20. SCRI

### Current ENCePP placement
**Confidence: HIGH**

ENCePP places self-controlled risk interval (SCRI) with exposure-anchored self-controlled methods.

Core idea:
- compare event occurrence in prespecified risk interval(s) after exposure with control interval(s) in the same exposed individuals.

### Project decision

Include SCRI as an adjacent exposure-anchored self-controlled variant.

Do not expand detailed methodology inside RES-02 unless a later scientific question requires it.

---

# Part K — Other adjacent outcome-anchored variants

## 21. Case-time-control

Purpose:
- adjust case-crossover for secular/time trend in exposure using an external control group.

Taxonomy:
> outcome-anchored case-crossover extension.

Important tradeoff:
may reduce exposure-trend bias but reintroduces control-selection/between-person issues.

---

## 22. Case-case-time-control

Current ISPE/ENCePP taxonomy recognizes it as another outcome-anchored self-controlled variant.

Project decision:
record as conditional advanced variant, not a core RES-02 branch.

Detailed methodology not required for current fitness-research architecture.

---

# Part L — “Case-only” terminology

## 23. Case-only != case report/case series

Critical terminology distinction:

### Case-only analytical design
Only people with the outcome are sampled, but there is an internal time-based comparison.

Examples:
- case-crossover;
- SCCS.

### Descriptive case series
Reports cases without a valid within-person causal comparison structure.

Project rule:
do not confuse:
- “case-only analytical design”
with
- “case series”.

They have fundamentally different inferential structures.

---

# Part M — Self-controlled design record

Project-specific extraction/classification fields:

1. Self-controlled observational? YES/NO
2. Outcome-anchored or exposure-anchored?
3. Specific design:
   - case-crossover
   - case-time-control
   - case-case-time-control
   - SCCS
   - SCRI
   - other
4. Cases-only? YES/NO
5. Acute/abrupt outcome?
6. Exposure transient/intermittent?
7. Exact event time available?
8. Exact exposure time available?
9. Case/hazard window definition
10. Control/baseline window definition
11. Observation period definition
12. Multiple exposure episodes?
13. Recurrent events?
14. Event recurrence independence plausible?
15. Event changes future exposure?
16. Event changes observation/follow-up?
17. Important time-varying confounders
18. Exposure/calendar trend present?
19. Seasonality/cycle concern?
20. External controls used?
21. Extended/adapted method used?
22. Which stable confounders are eliminated by self-control?
23. Which confounders remain?
24. Target effect measure:
   - exposure odds/relative risk-type trigger contrast
   - relative incidence
   - other
25. Self-applied paper label
26. Project structural classification

---

# Part N — Fitness-specific examples

## 24. Plausible case-crossover question

> Among people who experienced an acute cardiovascular event, was unusually intense physical exertion more common during the short hazard period before the event than during matched control periods?

Potentially appropriate because:
- exposure is transient;
- event is abrupt;
- question is about triggering.

---

## 25. Bad case-crossover question

> Does six months of resistance training cause hypertrophy?

Bad fit:
- exposure is sustained;
- outcome evolves gradually;
- no meaningful acute hazard window.

---

## 26. Plausible SCCS-like safety question

> Among individuals who experienced an acute adverse event and had precisely timed episodes of a transient exposure, is event incidence higher during prespecified post-exposure risk periods than during their baseline observation time?

Potentially appropriate if:
- timing is precise;
- assumptions/extension are justified.

---

# Part O — Practical rules produced by PASS-05A

1. Self-controlled observational designs compare different times within the same individual.
2. They inherently control stable/time-invariant within-person confounders, not all confounding.
3. Current ISPE/ENCePP taxonomy distinguishes outcome-anchored and exposure-anchored self-controlled designs.
4. Case-crossover is outcome-anchored.
5. SCCS is exposure-anchored/observation-time based.
6. Case-crossover compares exposure in hazard vs control periods within cases.
7. Case-crossover best fits transient/intermittent exposures and abrupt acute events.
8. Persistent exposure is usually poor fit for case-crossover.
9. Hazard/control window selection is part of design validity.
10. Exposure time trends can bias case-crossover.
11. Case-time-control is an extension for exposure trends but introduces external-control issues.
12. SCCS compares event incidence during exposure-related risk periods with baseline time within cases.
13. SCCS estimates relative incidence.
14. SCCS best fits precisely timed transient exposures and acute events.
15. Standard SCCS requires careful attention to event recurrence, event-dependent exposure and event-dependent observation.
16. Time-varying confounding remains in SCCS.
17. Standard-assumption violation does not automatically invalidate all SCCS approaches; validated extensions exist.
18. Adapted SCCS must be labelled as such.
19. SCRI is an exposure-anchored adjacent variant.
20. Case-only analytical designs must not be confused with descriptive case series.
21. These designs are potentially important for acute safety/trigger questions, but low relevance for ordinary chronic hypertrophy/strength adaptation.
22. Self-controlled design classification is time-structure dependent and should remain explicit in the project taxonomy.

---

# Gap status after PASS-05A

The specific PASS-04 gap:
- case-crossover;
- SCCS

is **CLOSED at taxonomy level**.

Adjacent variants are recognized sufficiently for RES-02 routing:
- case-time-control;
- case-case-time-control;
- SCRI.

No dedicated additional self-controlled pass is currently required.

---

# Unresolved for RES-02

1. Descriptive/frequency structures:
   - prevalence studies;
   - case series;
   - case reports.

2. Question-specific study families:
   - diagnostic accuracy;
   - measurement;
   - prognosis/prediction;
   - mechanism;
   - qualitative;
   - mixed methods.

3. Purpose-vs-design audit.

4. Final design-selection matrix.

5. Gap audit.

6. New synthesis.

## Next pass

**RES-02 / PASS-05B — descriptive and frequency study structures: prevalence studies, case series and case reports.**
