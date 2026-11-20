# RES-21 — Network meta-analysis

Статус: **CLOSED_FOR_PRACTICE v1.0**  
Дата: 2026-11-16  
Область: 13 — Методология исследований

## 0. Question Card

### Decision
Как оценивать network meta-analysis, когда сравниваются несколько training/nutrition interventions одновременно и часть сравнений только косвенные.

### Question type
Evidence synthesis / indirect comparison / network meta-analysis.

### Critical outcomes
1. Direct vs indirect vs network evidence.
2. Transitivity.
3. Coherence/incoherence.
4. Ranking interpretation.
5. Certainty of network estimates.
6. Applicability to multi-method fitness comparisons.

### Closure criterion
Есть operational NMA appraisal framework sufficient to avoid ranking-based overclaiming.

---

## 1. What NMA does

Network meta-analysis compares three or more interventions in one connected evidence network.

It combines:
1. direct evidence;
2. indirect evidence;
3. mixed/network estimates.

Example:
A vs B trials exist;
A vs C trials exist;
no B vs C trials.

If assumptions hold, B vs C can be estimated indirectly through A.

## 2. Indirect comparison is not randomization across trials

Participants were randomized within each trial, not between different trials.

Therefore indirect comparison behaves partly like an observational comparison across sets of randomized studies.

Potential confounding arises if effect modifiers differ across comparisons.

## 3. Transitivity

Core assumption:
studies in different comparison sets are sufficiently similar in factors that modify relative effects.

Conceptual test:
any eligible participant should plausibly have been eligible for randomization to any compared intervention.

Potential violations in exercise science:
- trained athletes only in advanced-method studies;
- beginners only in standard training trials;
- different baseline volume;
- different supervision;
- different duration;
- different outcome measurement.

If B vs A studies are systematically unlike C vs A studies, B vs C indirect estimate may be invalid.

## 4. Effect modifiers matter

Potential fitness effect modifiers:
1. training status;
2. baseline strength;
3. age;
4. sex when relevant;
5. weekly volume;
6. load;
7. failure proximity;
8. exercise selection;
9. intervention duration;
10. supervision;
11. nutrition.

Need compare their distributions across network comparisons before trusting indirect evidence.

## 5. Coherence / inconsistency

Coherence means direct and indirect evidence agree sufficiently.

Example:
direct B vs C says B better;
indirect via A says C better.

This incoherence is warning that:
- transitivity may fail;
- bias differs;
- chance/heterogeneity large.

## 6. Network connectedness

Interventions must form connected network for relative estimates.

Disconnected components cannot be compared without external assumptions.

Project rule:
do not accept software-generated ranks if network logic is disconnected/weakly connected.

## 7. Common comparator problem

Fitness NMA may rely heavily on:
- “usual training”;
- placebo;
- no training;
- standard program.

But “standard program” can differ substantially across studies.

If common comparator is not truly comparable, indirect estimates become questionable.

## 8. Intervention node definition

How interventions are grouped into nodes matters.

Example:
“high volume” may include:
- 10 sets/week;
- 20 sets/week;
- 30 sets/week.

Over-broad node hides dose differences.
Over-narrow node creates sparse network.

Node definitions should be pre-specified and scientifically coherent.

## 9. Ranking

NMA can estimate:
- probability intervention ranks first/second/etc.;
- SUCRA/P-score-type summaries.

Critical warning:
**rank 1 does not mean clinically/practically best.**

Ranking may be driven by:
- tiny effect differences;
- imprecision;
- sparse evidence;
- weak indirect comparisons.

Always report rank alongside:
1. effect magnitude;
2. CI/credible interval;
3. certainty;
4. harms/burden.

## 10. Rank instability

Interventions can have similar effects but very different rank probabilities depending on uncertainty/network geometry.

A “best” ranking with overlapping effects is often decision-poor.

Project rule:
relative effects > ranking.

## 11. Direct evidence priority?

Direct evidence is not automatically superior if:
- high RoB;
- tiny/imprecise.

Indirect evidence can sometimes be more precise.

But network estimate should be evaluated for:
- direct evidence quality;
- indirect path quality;
- transitivity;
- incoherence.

## 12. Heterogeneity within network

NMA still inherits ordinary heterogeneity problems.

Need assess:
- within-comparison heterogeneity;
- common heterogeneity assumptions;
- outcome-specific variation.

NMA does not eliminate heterogeneity.

## 13. Randomized + observational mixing

Cochrane generally does not recommend casually combining randomized and observational studies in same NMA.

If done:
- design-specific bias;
- causal assumptions;
- weighting
require advanced methods.

Project default:
separate unless strong methodological reason.

## 14. Multi-outcome conflict

Best intervention for:
- strength
may not be best for:
- hypertrophy;
- adherence;
- fatigue;
- safety.

Single rank cannot summarize all objectives.

Project decisions need multi-outcome EtD, not “overall winner”.

## 15. Exercise-science NMA pitfalls

1. node definitions too broad;
2. trained/untrained imbalance across comparisons;
3. different weekly volume;
4. different definitions of failure;
5. outcome proxies mixed;
6. short/long trials mixed;
7. rankings emphasized over absolute differences.

## 16. NMA appraisal card

1. Network question/PICO?
2. Nodes scientifically coherent?
3. Network connected?
4. Direct evidence available for key comparison?
5. Important effect modifiers balanced across comparisons?
6. Transitivity plausible?
7. Heterogeneity?
8. Coherence tested/inspected?
9. RoB?
10. Publication bias?
11. Ranking uncertainty?
12. Effect sizes/CI presented?
13. Certainty by comparison?
14. Outcome-specific conclusions?
15. Applicability to Ilya?

## 17. Project rules

1. NMA does not create randomization between trials.
2. Transitivity is a causal/scientific assumption, not just statistical test.
3. Incoherence weakens network conclusions.
4. Rank probabilities are supplementary.
5. Never call rank #1 “best” without effect magnitude/certainty.
6. Node definitions require scrutiny.
7. Direct/indirect/network estimates should be distinguishable.
8. Multi-outcome decisions cannot be reduced to one ranking.

## 18. Confidence

### HIGH
- NMA relies on transitivity;
- incoherence is disagreement between evidence sources;
- rankings require cautious interpretation;
- indirect comparisons can be confounded by cross-trial effect-modifier differences;
- certainty needs comparison-specific assessment.

### PRACTICAL_HEURISTIC
- project NMA appraisal card.

## 19. Sources

1. Cochrane Handbook Chapter 11 — Network meta-analysis.  
   https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-11

2. Cochrane/GRADE framework for confidence in network estimates, as described in Chapter 11.5.

## 20. Next dependencies

- RES-22 individual response;
- RES-25 conflicting evidence;
- RES-28 Evidence-to-Decision.
