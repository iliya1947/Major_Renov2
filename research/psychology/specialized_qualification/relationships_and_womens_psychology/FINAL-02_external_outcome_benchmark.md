# FINAL-02 — External outcome benchmark: bounded retrospective evaluation

Date: 2026-11-27.
Status: executed retrospective row-held-out benchmark; REVIEW_REQUIRED for independent qualification, participant-held-out prediction and prospective validation.
Dependency: FINAL_integrated_sufficiency_and_assessment.md at HEAD 497728af1ebbd57d6be52df529607e47d5cf9362. This is the next bounded action in its handoff, not an additional self-authored case exam.

## 1. Question, public evidence and access

Question: can fixed, simple probability mappings from individual attributes or encounter-specific ratings improve binary decision classification over a training-sample base rate? Distinguish prior prediction from contemporaneous classification, outcome discrimination from causal explanation, and row holdout from participant/session independence. The actual outcome is a reported willingness to meet again at a speed-dating encounter, not an independently observed subsequent date, long-term relationship, or verified inner motive.

Public searches: Fisman Iyengar Kamenica Simonson speed dating experiment data Columbia replication CSV; speed dating data documentation; smaller public CSV copies. Directly inspected original journal abstract and bibliographic metadata: Fisman, Iyengar, Kamenica & Simonson (2006), Gender Differences in Mate Selection: Evidence From a Speed Dating Experiment, Quarterly Journal of Economics 121(2), 673–697, https://doi.org/10.1162/qjec.2006.121.2.673 ; https://academic.oup.com/qje/article-abstract/121/2/673/1884033 . The original abstract describes randomized matching, variation in number of potential partners, and observed individual decisions. Full original paper not inspected in this step. No universal gender preference or causal inference drawn from its abstract.

Dataset documentation inspected: https://github.com/datasets/speed-dating ; https://datahub.io/core/speed-dating ; https://search.r-project.org/CRAN/refmans/sdamr/html/speeddate.html . The intended full OpenML-derived file includes session (wave), but retrieval failed: local DNS unavailable, web/raw and DataHub retrieval failed, connector rejected full CSV as possibly oversized or unsupported. Attempted smaller Rdatasets path returned 404. No full-data results claimed.

Successfully retrieved the reduced public teaching CSV from https://raw.githubusercontent.com/keithmcnulty/speed_dating/master/speed_data_data.csv and inspected relevant documentation at https://raw.githubusercontent.com/keithmcnulty/speed_dating/master/README.md . This is a secondary processed copy, not verified identical to original data. Documentation says dec is immediate binary decision; attr, sinc, intel, fun, amb and shar are encounter ratings; like is overall encounter rating. README contains an existing analysis, so this is not an independently blinded scientific challenge. CSV contains 15 columns and 8378 rows, without participant, partner or wave identifiers. Row order is not established chronological order. Exact upstream commit not pinned; URL mutable. No participant-level material copied into the cabinet. Only aggregate counts and scores are recorded.

## 2. Analysis contract before outcome calculation

After verifying that the reduced CSV was retrievable and before computing aggregate outcomes, specified the following revised plan in a separate tool execution:
- Ordered original-row split: first floor(0.60N) training; next rows until floor(0.70N) unused buffer; remaining rows evaluation. Split before filtering. No tuning on evaluation outcomes.
- Baseline M0: pooled training event probability (yes+1)/(n+2).
- M1: age bins less than 25, 25 through less than 30, 30 or older.
- M2: overall liking bins 1–5, above 5 through 7, above 7 through 10.
- M3: mean of six encounter attribute ratings, same rating bins.
- Every bin probability estimated only from training rows using (yes+1)/(n+2); empty bins fall back to M0.
- Complete-case comparison uses identical rows for M0–M3, requiring binary dec, finite age between 0 and 100 exclusive, and all seven ratings within [1,10]. Also compare age model with baseline on the larger age/decision-valid subset, irrespective of missing encounter ratings.
- Primary outcome mean Brier score (p-y)^2; secondary natural-log loss; descriptive accuracy threshold p >= .5. Keep missing and out-of-range observations excluded under explicit rules. No model probabilities asserted for real persons beyond the experimental dataset.
- M2 and M3 use contemporaneous self-ratings, not pre-encounter predictors. Because group identifiers are absent, this is only a row-held-out evaluation; potential overlap/dependence across training and test is unresolved. No confidence intervals assuming independent rows, no causal coefficient interpretation, no claim of prospective forecasting.

## 3. Execution and results

Executed JavaScript CSV parser with quoted-field handling, validated equal column counts, numeric conversion and ranges, then applied the fixed split/filter/bin/score procedure. Total 8378 observations; raw split 5026 training, 838 buffer, 2514 evaluation. Missing: age 95, dec 0, like 240, attr 202, sinc 277, intel 296, fun 350, amb 712, shar 1067. Finite out-of-range ratings: like 8, attr 8, sinc 9, intel 5, fun 14, amb 5, shar 59. Counts by variable overlap and must not be summed to estimate exclusions. No imputation or post-hoc range changes.

Complete-case training n=4173 (1792 yes), test n=2054 (894 yes). Baseline smoothed probability .429461.

| Model | Brier | Log loss | Accuracy |
|---|---:|---:|---:|
| M0 training base rate | .245841 | .684806 | .564752 |
| M1 age | .246178 | .685495 | .564752 |
| M2 overall liking | .193265 | .578345 | .691334 |
| M3 mean attribute rating | .215030 | .626317 | .680136 |

Training bins, ordered as prespecified; each pair is (n, p):
- M1: (1532,.4374185), (2074,.4214836), (567,.4376098).
- M2: (1327,.0790068), (1841,.4937602), (1005,.7745780).
- M3: (543,.0678899), (2164,.3541090), (1466,.6750681).

Age/decision-only sensitivity: train n=4971 (2086 yes), test n=2492 (1051 yes); baseline p=.4196662. M0 Brier .243881, log loss .680859, accuracy .578250; M1 Brier .244181, log loss .681477, accuracy .578250. Age bins (1725,.4279097), (2506,.4098884), (740,.4339623). The age model is slightly worse on both comparison samples; no significant inferiority claim.

Reproduction algorithm (pseudocode):
1. Read CSV, preserve original row order, split at floor(.6N) and floor(.7N).
2. Apply complete-case or age/decision-only validity predicate separately to training and evaluation rows.
3. Define base = (sum(y_train)+1)/(len(train)+2).
4. For each fixed bin compute probability by the same smoothing within training; use base if no rows.
5. For each evaluation row obtain bin probability without using its decision; average squared errors, negative binary log likelihoods and correct thresholded classifications.
6. Keep split, outcomes, bins and metrics unchanged after inspection.

## 4. Interpretation, counterevidence, correction and limits

The prespecified age grouping did not outperform the base rate on either sample. Encounter-specific overall liking and mean attribute ratings were associated with better classification of the immediate decision on the selected evaluation rows. Overall liking outperformed the mean of six ratings on these rows. These results reject any assumption that adding the specified age bins necessarily improves a baseline; they do not prove age irrelevant in other models or settings. The stronger contemporaneous results cannot be interpreted as independent forecasts before interaction, mechanisms of desire, or general future relationship predictions. Liking and decision may be co-measured manifestations of the same evaluation; reverse ordering, common method variance, missingness and overlapping participants are plausible limitations. A derived sample without IDs cannot demonstrate person- or dyad-held-out transfer, and test-row holdout is not independent outcome adjudication by an examiner. The initially intended group-disjoint prospective-style benchmark could not be executed with accessible data. This downgrade was specified before calculation and is retained, not concealed.

Practical methodological rule: always compare against a simple base-rate model; define target, timing and eligibility before judging performance; evaluate more than one plausible model, retain negative results, and do not use post-outcome/contemporaneous variables as if they were available in advance. Reopen prediction claims if timing or provenance is corrected. Protect consent and autonomy: binary willingness is not consent to other activity, established relationship commitment, or a basis for individualized manipulation.

## 5. Status and handoff

36/36 directions and 19/19 prior bounded substantive units unchanged; internal FINAL assessment previously recorded. New actual work: a retrospective benchmark against externally collected outcomes, with row-level holdout and negative comparison retained. Independent person-held-out or time-held-out prediction, independent examination of the assistant's competence, calibration in new populations and causal identification remain unresolved. REVIEW_REQUIRED remains; no additional checklist points awarded. Exact next bounded action, if data access becomes available: use documented full public dataset with identifiers and verified pre-encounter variables; split entire waves/participant-connected groups without leakage; predefine baseline and scoring before evaluating; report aggregate results with cluster-aware uncertainty and source limitations. Independent assessment requires genuinely external tasks or examiner; do not inflate qualification by repeating self-authored cases. If unavailable, retain the limitations.

Pre-write privacy/scope review: public bibliographic references, aggregate study counts, generic algorithm and nonpersonal qualification status only. No individual rows, identifiable case material, inferred personal models, private observations or project-specific scenarios. Only this new file in the specialty directory; shared controls, other specialties and PR metadata unchanged. Verify actual commit, current PR HEAD and file readback.
