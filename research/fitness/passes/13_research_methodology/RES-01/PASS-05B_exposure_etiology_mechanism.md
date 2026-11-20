# RES-01 / PASS-05B — Non-intervention frameworks II: exposure/etiology and mechanistic questions

Статус: **COMPLETE PASS — topic remains RESEARCHING**  
Дата: 2026-11-16  
Topic: RES-01 — формулировка исследовательского вопроса

## Scope этого прохода

Только:
1. exposure / etiology / risk-factor questions;
2. различие association, risk factor и causal etiology;
3. PEO vs PECO;
4. dose/timing/duration/context экспозиции;
5. mechanistic question framing;
6. general mechanistic claim vs specific mechanism hypotheses;
7. граница между mechanistic evidence и direct outcome evidence.

Не покрывается здесь:
- qualitative questions;
- implementation questions;
- search translation;
- formal causal-identification methods / DAGs / target trial;
- mediation analysis;
- stakeholder/equity procedures;
- final gap/audit RES-01.

## Источники, проверенные в этом pass

1. JBI Manual for Evidence Synthesis — current manual landing page, last updated 23 Sep 2026.  
   https://jbi-global-wiki.refined.site/space/MANUAL/4685837/jbi-global-wiki.refined.site

2. JBI Manual — Chapter 7: Systematic reviews of etiology and risk.  
   Current online chapter pages checked 2026-11-16.  
   https://jbi-global-wiki.refined.site/space/MANUAL/355598620/7.1+Introduction+to+etiological+evidence+and+systematic+reviews  
   https://jbi-global-wiki.refined.site/space/MANUAL/355598640/7.2+Study+designs+for+etiology+and+risk

3. JBI Manual downloadable 2024 edition — Chapter 7 inclusion criteria.  
   https://jbi-global-wiki.refined.site/download/attachments/355599504/JBI%20Manual%20for%20Evidence%20Synthesis%202024.pdf

4. Morgan RL et al. Identifying the PECO: A framework for formulating good questions to explore associations of environmental and other exposures with health outcomes. Environ Int. 2018. PMID 30166065.  
   https://pubmed.ncbi.nlm.nih.gov/30166065/

5. National Toxicology Program / OHAT. Handbook for Conducting a Literature-Based Health Assessment Using OHAT Approach for Systematic Review and Evidence Integration. 2019.  
   https://ntp.niehs.nih.gov/sites/default/files/ntp/ohat/pubs/handbookmarch2019_508.pdf

6. Parkkinen VP et al. Evaluating Evidence of Mechanisms in Medicine. 2018. NCBI Bookshelf HTML chapters used.  
   Chapter 5 — Gathering Evidence of Mechanisms:  
   https://www.ncbi.nlm.nih.gov/books/NBK543862/  
   Chapter 6 — Evaluating Evidence of Mechanisms:  
   https://www.ncbi.nlm.nih.gov/books/NBK543863/

7. Goodman SN, Gerson J. Mechanistic Evidence in Evidence-Based Medicine: A Conceptual Framework. AHRQ. 2013.  
   https://www.ncbi.nlm.nih.gov/books/NBK154584/

## Source-version note

- Current JBI Manual landing page is updated in 2026, but Chapter 7 content is still cited from the 2024 manual / earlier chapter authorship. Record both manual-current status and chapter citation.
- Mechanistic-evidence frameworks used here are older foundational methodological sources (2013/2018), not a 2026 universal standard.
- I found **no single universally adopted current question-framing standard for mechanistic reviews** analogous to intervention PICO. The project framework below is therefore explicitly project-specific.

---

# Part A — Exposure / etiology / risk questions

## 1. Risk factor and cause are not synonyms

### Established finding
**Confidence: HIGH**

JBI explicitly distinguishes:

- **risk** = probability of an outcome in a population;
- **risk factor** = characteristic/exposure associated with increased likelihood of outcome;
- **etiology** = cause/origin of disease or outcome.

Project consequence:

Observed association must not automatically be worded as:
- “causes”;
- “etiological factor”.

Safer hierarchy:

1. exposure associated with outcome;
2. exposure predicts/ranks risk;
3. evidence supports causal effect of exposure;
4. evidence supports specific etiological mechanism.

Each step requires stronger assumptions/evidence.

---

## 2. There is no single universally accepted etiology-review method

### Established finding
**Confidence: HIGH**

Current JBI Chapter 7 explicitly notes that there is no universally accepted methodology for systematic reviews of etiology and risk.

Project consequence:
we should not invent one universal acronym and present it as field consensus.

Instead:
- identify target causal/associational question;
- choose a framework that exposes the necessary variables and contrast.

---

## 3. JBI uses PEO for etiology/risk

### Established finding
**Confidence: HIGH**

JBI states that intervention PICO does not naturally fit etiology/risk questions and uses:

1. **P — Population**
2. **E — Exposure**
3. **O — Outcome**

Context/location and exposure duration may also be important.

### Why no mandatory C in JBI PEO?

Because some etiology/risk questions can be framed around:
- presence/level of exposure;
- relationship of exposure with outcome;
without defining one single binary comparator at protocol level.

But causal interpretation still requires a contrast conceptually.

---

## 4. PECO is also an established exposure framework

### Established finding
**Confidence: HIGH**

OHAT/environmental-health methodology commonly uses:

1. **P — Population**
2. **E — Exposure**
3. **C — Comparator**
4. **O — Outcome**

The PECO literature explicitly describes comparator choices such as:
- unexposed/lower exposure;
- quantiles/categories;
- externally defined thresholds;
- incremental exposure differences.

### Project conclusion

Use:

- **PEO** when mapping an exposure–outcome association broadly and no single comparator is essential;
- **PECO** when the target effect/decision depends on an explicit exposure contrast.

This is a project selection rule grounded in the coexistence of JBI PEO and OHAT/PECO approaches.

---

## 5. Exposure must be operationalized

### Established finding
**Confidence: HIGH**

“Exposure” is not just a label.

Depending on the question define:

1. exposure identity;
2. dose/intensity/level;
3. duration;
4. frequency/pattern;
5. timing/window;
6. route/mode;
7. measurement method;
8. source/context.

Exercise examples:

“sleep” may require:
- duration;
- timing;
- regularity;
- sleep quality metric.

“sedentary behavior” may require:
- total duration;
- uninterrupted bouts;
- device vs self-report.

“training volume” as exposure may require:
- sets;
- muscle-specific counting;
- time window.

---

## 6. Exposure timing can define causality

### Established finding
**Confidence: HIGH**

For an exposure to plausibly cause a later outcome, exposure must precede the outcome.

Project consequence:
cross-sectional association between:
- current exposure;
- current outcome
often cannot establish temporal order.

Exact causal-design appraisal belongs to RES-02/RES-05, but question framing must already specify:
- exposure window;
- outcome horizon.

---

## 7. Comparator defines the causal contrast

### Established finding / project causal translation
**Confidence: HIGH**

A causal question is incomplete without asking:
> compared with what exposure condition?

Possible contrasts:

1. exposed vs unexposed;
2. high vs low;
3. dose increase per unit;
4. specific category vs reference;
5. achievable intervention-induced reduction;
6. sustained exposure pattern A vs B.

Project rule:
if the intended conclusion is causal, make the comparator/contrast explicit even if a review-method framework labels itself PEO.

---

## 8. Do not dichotomize continuous exposure without reason

### Established finding
**Confidence: HIGH**

PECO methodology explicitly allows:
- continuous dose-response;
- quantile comparisons;
- threshold comparisons.

Project consequence:
do not force continuous exposure into arbitrary:
- “high” vs “low”
unless:
- threshold is biologically/clinically meaningful;
- literature requires categorical synthesis;
- decision is explicitly threshold-based.

Dose-response may be the real target.

---

## 9. Exposure measurement quality is part of question validity

### Established finding
**Confidence: HIGH**

An exposure can be measured by:
- direct instrument;
- biomarker;
- device;
- self-report;
- proxy.

Misclassification can alter observed association.

Project rule:
record:
1. acceptable exposure measures;
2. whether they estimate the same construct;
3. whether validation matters to eligibility/grouping.

Detailed measurement bias belongs to later RES topics.

---

## 10. Confounding is anticipated at framing stage

### Established finding
**Confidence: HIGH**

JBI etiology guidance treats confounding as a central issue in observational etiology/risk evidence.

Project consequence:
before searching, identify **plausible major confounder classes** when the question is causal.

Example:
association between training volume and hypertrophy may be confounded by:
- training experience;
- nutrition;
- baseline dose;
- adherence;
- program design.

Formal causal diagrams/adjustment rules are deferred to RES-05.

---

## 11. Risk prediction and causal exposure are different questions

### Established finding
**Confidence: HIGH**

An exposure can predict an outcome without being a useful intervention target.

Project distinction:

### Predictive question
> Does X identify people at higher future risk?

### Causal exposure question
> Would changing X change the outcome?

This prevents:
- turning correlates into prescriptions;
- assuming every risk marker is causal.

---

# Part B — Mechanistic questions

## 12. Mechanistic evidence answers a different question

### Established finding
**Confidence: HIGH**

Mechanistic evidence concerns:
- entities/components;
- activities/processes;
- organization/sequence
that can explain how an intervention/exposure produces an outcome.

It is distinct from direct evidence that:
A causes more of outcome Y than B.

Project consequence:
mechanistic evidence may:
- explain;
- support plausibility;
- aid external validity;
but does not automatically establish practical efficacy superiority.

---

## 13. General mechanistic claim vs specific mechanism hypothesis

### Established finding
**Confidence: HIGH**

Parkkinen et al. distinguish:

### General mechanistic claim
A mechanism exists that can account for the observed intervention/exposure–outcome relationship.

### Specific mechanism hypothesis
Claims about particular:
- entities;
- activities;
- organization;
- intermediate steps
within that mechanism.

Project rule:
do not search “the mechanism of hypertrophy” as one undifferentiated question.

Break it into specific testable links.

---

## 14. Mechanism review should begin with a hypothesized chain

### Established finding
**Confidence: HIGH**

The mechanistic-evidence framework recommends:

1. identify specific mechanism hypotheses;
2. formulate review questions for key uncertain features;
3. search for evidence;
4. refine;
5. present evidence supporting/refuting those features.

Project consequence:
mechanistic research is hypothesis-structured rather than keyword accumulation.

---

## 15. Not every known step needs a fresh review

### Established finding
**Confidence: HIGH**

Mechanism-review guidance recommends focusing review questions on:
- key;
- contentious;
- uncertain
features rather than re-proving every background fact.

Project consequence:
for a large physiology mechanism:
- establish accepted background from authoritative sources;
- spend deep review effort on links that determine the practical inference.

---

## 16. Mechanistic questions need context/model specification

### Established finding
**Confidence: HIGH**

Mechanistic evidence may come from:

1. human experiments;
2. human observational/biopsy/imaging studies;
3. animal models;
4. in vitro systems;
5. simulations/modeling;
6. analogy to related mechanisms.

Their relevance differs by:
- model similarity;
- context;
- method reliability;
- translatability.

Project rule:
mechanistic question must specify:

1. target population/system;
2. model system if not target human system;
3. intervention/exposure;
4. target outcome;
5. hypothesized intermediate step;
6. context in which mechanism is expected to operate.

---

## 17. Manipulation is stronger than mere co-occurrence for a mechanistic link

### Established finding
**Confidence: HIGH**

Mechanistic evidence is stronger when a proposed component/process can be:
- experimentally perturbed;
- followed by predicted downstream change.

Observation alone can support existence/association of a component but may leave causal direction/confounding unresolved.

Project consequence:
when reviewing a mechanism link, distinguish:
- observation;
- perturbation/manipulation;
- mediation-like temporal sequence;
- analogy.

---

## 18. Independent methods strengthen a mechanistic feature

### Established finding
**Confidence: HIGH**

Mechanistic-evidence guidance emphasizes:
- independent detectability;
- consistency;
- robustness across contexts/models.

Project consequence:
confidence increases when the same mechanistic feature is supported by independent:
- imaging;
- biochemical;
- physiological;
- experimental perturbation
methods with different failure modes.

This is triangulation of a mechanism feature, not proof that chronic practical outcome is larger.

---

## 19. Counteracting mechanisms must be considered

### Established finding
**Confidence: HIGH**

A mechanism can be real but its practical effect:
- masked;
- offset;
- dominated
by another mechanism.

Exercise example:
a method may increase one acute hypertrophy-related signal but also increase fatigue enough to reduce useful training volume/adherence.

Project rule:
mechanistic framing must ask:
1. proposed pathway;
2. competing/counteracting pathways;
3. conditions under which each dominates.

This is a key reason mechanism ≠ direct outcome.

---

## 20. Human relevance is a separate mechanistic question

### Established finding
**Confidence: HIGH**

Mechanistic frameworks distinguish:

1. evidence that mechanism operates in a model;
2. evidence that relevant mechanism is similar/operative in target human population.

Project consequence:
animal/cell evidence can establish a biological possibility without establishing:
- same magnitude;
- same limiting step;
- same practical effect
in trained humans.

---

## 21. Mechanism and surrogate validation are related but distinct

### Established finding
**Confidence: HIGH**

A biomarker lying on a plausible pathway does not automatically make it a validated surrogate for the final outcome.

Project consequence:
mechanistic position is necessary evidence for some surrogate claims but not sufficient.

Formal acute-proxy/surrogate methodology remains for RES-13/14 revalidation.

---

## 22. No universal current acronym for mechanistic questions

### Verified status
**Confidence: MODERATE/HIGH**

Across the methodological sources checked, I did not find a universally adopted current mechanistic-question acronym comparable to PICO/PICOTS.

Therefore the project will not present one as external consensus.

### Project framework: **MEC-Q**

For internal use only:

1. **Target phenomenon/outcome** — what needs explaining?
2. **Intervention/exposure/input** — what initiates/changes the system?
3. **Target system/population** — where should mechanism operate?
4. **Hypothesized components/entities**
5. **Hypothesized activities/links**
6. **Organization/sequence**
7. **Critical uncertain link(s)**
8. **Perturbation/prediction** — what observation would support/refute a link?
9. **Model/context**
10. **Competing/counteracting mechanisms**
11. **Direct practical claim that this mechanism is intended to inform**
12. **Boundary:** explanation vs efficacy/prediction.

This is explicitly a project engineering framework synthesized from mechanistic-evidence methodology.

---

# Part C — Framework-selection rules

## 23. Exposure / risk

Use:

### PEO
for broad association/risk mapping:
- Population;
- Exposure;
- Outcome.

### PECO
when an explicit exposure contrast is central:
- Population;
- Exposure;
- Comparator;
- Outcome.

Add when relevant:
- exposure timing;
- dose/duration;
- setting/context;
- measurement method;
- target causal contrast.

---

## 24. Mechanism

Use project **MEC-Q**, not PICO.

Mechanism question should identify:
- phenomenon to explain;
- hypothesized chain;
- uncertain links;
- model/context;
- testable predictions;
- counteracting pathways.

---

## 25. Example — sleep and strength

### Prognostic
Does baseline short sleep predict smaller future strength gain?

Framework:
PICOTS prognosis.

### Exposure association
Are lower habitual sleep durations associated with smaller strength gains?

Framework:
PEO.

### Causal exposure
Would sustained 6 h sleep vs 8 h sleep change strength adaptation?

Framework:
PECO + explicit causal contrast.

### Intervention
Does an intervention that extends sleep improve strength adaptation?

Framework:
PICO/PICOT + estimand.

### Mechanism
Does restricted sleep alter a specific endocrine/neural/recovery pathway capable of reducing strength adaptation?

Framework:
MEC-Q.

Same topic, five different questions.

---

## 26. Practical rules produced by PASS-05B

1. Never use “risk factor” and “cause” interchangeably.
2. Use PEO for broad etiology/risk association framing when no single comparator is essential.
3. Use PECO when a specific exposure contrast is central.
4. For causal exposure questions, make the contrast explicit even if the review framework is called PEO.
5. Define exposure dose/intensity, duration, timing, pattern, measurement and context as needed.
6. Avoid arbitrary dichotomization of continuous exposures.
7. Anticipate major confounder classes at question-framing stage.
8. Separate predictive exposure questions from causal-change questions.
9. Mechanistic evidence answers “how/through what pathway”, not automatically “which intervention works better”.
10. Split general mechanism claims into specific uncertain mechanism hypotheses.
11. Record target system/model and translation to humans.
12. Prefer evidence from independent methods and perturbation where available.
13. Explicitly consider counteracting mechanisms.
14. Do not present MEC-Q as an external standard; it is project-specific.
15. Keep mechanism claims separate from direct chronic outcome claims.

## What remains unresolved for RES-01

1. Non-intervention frameworks III:
   - qualitative questions;
   - implementation questions.
2. Translation from question to search concepts.
3. Stakeholder/user involvement in this one-person project.
4. Equity/context.
5. Formal gap/audit checklist.
6. Final synthesis and QUESTION_CARD revision.

## Next pass

**RES-01 / PASS-05C — qualitative and implementation question framing.**
