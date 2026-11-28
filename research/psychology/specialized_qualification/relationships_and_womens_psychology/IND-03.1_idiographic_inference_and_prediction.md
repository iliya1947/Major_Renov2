# IND-03.1 — Idiographic psychology: levels of inference and prediction

Date: 2026-11-25. Status: bounded research note complete; IND-03 remains IN_PROGRESS.
Scope: nonclinical descriptive and predictive methodology; not a validated individualized assessment.

## Question and baseline

When may group findings inform a within-person proposition, and when does person-specific estimation improve prediction? Distinguish generalizing across people, across occasions within a person, and across contexts or future regimes. Alternative accounts: shared process, person-specific process, context-dependent process, sampling/measurement artifact, and combinations.

Reviewed the INT-02 queue summary, canonical INT-02 headings and selected passages on dependency and atomic propositions; prior IND-02.3 handoff. PSY-RES-09 is identified by INT-02 as a prerequisite but its canonical text was not reopened in this pass; no claim of full revalidation. Existing provenance, claim-type, confidence and use-permission controls remain binding.

## Targeted evidence

Search date 2026-11-25. Public queries: idiographic psychology within person between person generalizability; person-specific psychological time-series prediction and simple benchmarks; 2025/2026 experience sampling nonergodicity; hybrid versus person-specific prediction. Not a systematic review, full-text audit or independent replication. No private data in search or examples.

E1. Fisher, Medaglia & Jeronimus (2018), Lack of group-to-individual generalizability is a threat to human subjects research. https://doi.org/10.1073/pnas.1711978115
Indexed primary abstract/excerpts; PMC access blocked. Within-person correlation distributions were substantially more dispersed than corresponding group estimates. This supports a warning against ecological inference, not a universal claim that group evidence has no value. Ergodicity is a technical condition linking time and ensemble properties; homogeneity and stationarity assumptions matter. Different estimands can differ even in the absence of uniquely identified causal mechanisms. No complete numerical audit.

E2. Beck & Jackson (2022), Personalized Prediction of Behaviors and Experiences: An Idiographic Person–Situation Test. https://doi.org/10.1177/09567976221093307
Publisher abstract, analytic plan, selected results and footnotes directly inspected, not full end-to-end. 104 college-age adults, 5,971 assessments; person, situation and time features predicted several later reported outcomes. Elastic net, BISCWIT and random forest compared; chronological first 75% used for training with rolling-origin tuning, last 25% held out; predictors lagged approximately four hours. Authors changed preregistered random-fold validation to rolling origin; studying was added after preregistration. Individual predictors differed. This demonstrates a concrete approach to future prediction but does not establish general accuracy across populations, sparse conversational records or different outcomes. Outcome-specific exclusions and class balance matter. No raw-data reanalysis or independent comparison to all simple baselines.

E3. Capturing naturalistic thoughts using a precision experience sampling idiographic approach (2026). https://doi.org/10.1186/s41235-026-00728-8
Publisher methods, selected results, discussion and limitations directly inspected, not end-to-end. Seven participants completed seven sessions each (245 probes/person), 49 comparison participants one session each (35 probes/person), 1,715 probes in each group. Person-specific classification generally performed better on the tested task-based thought-rating targets. Within-participant mean Matthews correlation coefficients .21–.38 across dimensions in the densely sampled group; off-task thought performance ranged .07–.75 across seven people. Not uniformly better: across-person model performed better for self-oriented thought; reliability also varied by dimension. Random stratified three-fold validation repeated 100 times, not chronological prospective forecast. Repeated splits are not independent participant replications; dense and sparse groups also differed in experience and reporting. Upsampling does not create new independent observations. Small samples, task selection and concurrent self-report labels limit transfer. No ability to read thoughts or infer hidden intentions established.

E4. Phanord et al. (2026), Digital phenotyping of affect and stress in emerging adults. https://doi.org/10.3389/fdgth.2026.1799541
Publisher abstract, model comparisons, baseline comparisons, cross-validation results and discussion directly inspected. Compared group-general, group-personalized (participant ID as feature), and separate within-person XGBoost models. The hybrid offered the authors' best compromise of accuracy and stability, BUT ID-only baseline explained nearly the same variance as hybrid; behavioral features gave little or no incremental benefit beyond average between-person differences. Separate within-person models showed positive dataset-level R² (.216–.536) but negative fold-level R² (-.163 to -.061); aggregating predictions across people can obscure poor prediction of within-person change. Group-general models evaluated with entire participants held out yielded R² about -.11 to .01. These observations challenge both universal personalization superiority and treating pooled performance as individual forecast validity. Standard random-fold validation does not establish chronological future generalization. Digital sensing is a specific research setting; no private tracking or proxy-to-mental-state inference recommended.

E5. Recovering Within-Person Dynamics from Psychological Time Series (2021). https://doi.org/10.1080/00273171.2021.1896353 ; https://pubmed.ncbi.nlm.nih.gov/34154483/
Indexed primary abstract and excerpt; direct full text blocked. Simulation study investigates recovery of known generative dynamics using fitted time-series models. Relevant conceptual warning: statistical fit need not recover the generating mechanism. Full simulation details and quantitative findings not verified; use only as a supporting methodological lead.

## Methodological synthesis

- Distinguish between-person mean differences, within-person contemporaneous associations, lagged conditional prediction and causal mechanism. A finding at one level does not establish the others.
- Group evidence may constrain plausible hypotheses or inform regularization if applicable; it is not direct evidence of a specific individual's motive or process.
- Person-specific data may be informative but sparse, selectively observed, dependent or nonstationary. More messages from one episode are not necessarily independent evidence. No universal sample-count threshold.
- Compare a simple baseline (personal mean, last observation, or context-specific frequency as appropriate), a shared model, a partially pooled model and a fully personal model only where data and question justify them. Complexity is justified by incremental performance and interpretability, not narrative richness.
- Separate prediction of an already known person's later observations from predicting a new person or classifying concurrent data. Use chronological held-out evaluation for future predictions; group holdout for new-person transfer. Keep preprocessing/tuning within training data, respect episode/time dependence, evaluate missingness and drift, and report per-person performance and uncertainty against baseline.
- Good predictive performance is not evidence of a unique causal mechanism. Retrospective narrative fit is not predictive validation. Unknown motives and unobservable outcomes cannot be scored as correct merely because the model explains behavior.
- Sparse observational material supports typed, revisable qualitative hypotheses and limited conditional descriptions, not a fitted statistical model by default. Preserve source independence, direct versus inferred information, context and revision conditions. Respect explicit choices; do not manufacture distress or covert tests.

## Executable synthetic reasoning check (arithmetic, not empirical validation)

A fictional continuous outcome for two people: A observations 1, 2, 3; B observations 8, 9, 10. Predict each by its own mean (2 or 9). Total squared residuals = 4; total squared deviations from pooled mean 5.5 = 77.5; pooled R² = 1 - 4/77.5 ≈ .9484. Within each person the same constant mean gives R² = 0. This is a deliberately constructed in-sample illustration, not an actual forecast or clinical dataset. It demonstrates why pooled R² can mask absence of within-person dynamic prediction; it is consistent with the benchmark concern in E4.

External empirical challenges: E2 demonstrates chronological validation; E3 illustrates a different random-fold classification target and heterogeneous reliability; E4 shows why comparing against personal means and matching evaluation level is essential. Findings were inspected before these checks, so no blind/independent assessment or validated forecast performance is claimed.

## Local progress

IND-03.1 bounded note complete; IND-03 IN_PROGRESS. No new unit closed. Overall 2/19 substantive units and 4/36 directions covered within prior scope.
Next IND-03.2: evidence provenance, hypothesis revision and model complexity under incomplete observations; inspect PSY-RES-09 canonical text and relevant INT-02 transfer/update sections; study competing-model and longitudinal validation methods. Develop a generic versioned proposition ledger and test prospective revision on a synthetic sequence without inventing individual probabilities. Then conduct integration and closure review. No personal data, filled individual forms or shared cabinet changes.
