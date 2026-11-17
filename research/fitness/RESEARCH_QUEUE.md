# Очередь исследования

## Сейчас

1. **Stage 2 — RESTARTED.**
2. **RES-01 — CLOSED_FOR_PRACTICE.**
3. RESEARCHING next: **RES-02 — study designs.**
4. RES-01 PASS-01…PASS-16 завершены: granular revalidation → gap audits → architecture → synthesis → closure audit.
5. RES-02/PASS-01…PASS-06A завершены и остаются текущей валидной базой. Прежний широкий `PASS-06B_prognosis_prediction_designs.md` по решению пользователя **SUPERSEDED** и не считается закрытием prognosis/prediction branch.
6. Новая granular revalidation PASS-06B начата. Завершены:
   - **PASS-06B1 — prognosis core taxonomy and longitudinal structure**;
   - **PASS-06B2 — longitudinal cohort structures for prognosis**;
   - **PASS-06B3 — routine-care data sources for prognosis**;
   - **PASS-06B4 — outcome-dependent sampling in prognosis**;
   - **PASS-06B5 — prediction-model development study structures**;
   - **PASS-06B6 — internal validation structures**;
   - **PASS-06B7 — internal-external and external validation structures**;
   - **PASS-06B8 — model recalibration, updating and extension structures**;
   - **PASS-06B9 — prediction-model impact and utility study structures**;
   - **PASS-06B10 — prediction-performance estimand architecture**;
   - **PASS-06B11 — prediction under treatment and management**;
   - **PASS-06B12 — dynamic and landmark prediction structures**;
   - **PASS-06B13 — prediction-branch integration audit**.
7. Аудит выявил три blocking gaps перед synthesis:
   - diagnostic prediction models vs DTA;
   - competing risks / recurrent events / multistate prediction;
   - continual/online updating and post-deployment lifecycle.
8. Завершён **PASS-06B14 — diagnostic prediction models vs diagnostic test accuracy**.
9. Остаются два blocking gaps перед финальным audit/synthesis:
   - competing risks / recurrent events / multistate prediction;
   - continual/online updating and post-deployment lifecycle.
10. Завершён **PASS-06B15 — complex event outcome prediction**.
11. Завершён **PASS-06B16 — post-deployment lifecycle and continual updating**.
12. Все три blocking gaps из PASS-06B13 получили отдельные taxonomy-level passes:
   - PASS-06B14 — diagnostic prediction models vs DTA;
   - PASS-06B15 — complex event outcome prediction;
   - PASS-06B16 — post-deployment lifecycle and continual updating.
13. Завершён **PASS-06B17 — final prediction-branch gap audit after B14–B16**.
14. Audit выявил три новых blocking gaps перед synthesis:
   - multicategory / ordinal prediction outcomes;
   - multiple-outcome / composite / joint-outcome prediction;
   - outcome-dependent sampling specifically for diagnostic probability models.
15. Завершён **PASS-06B18 — multicategory and ordinal prediction-model structures**.
16. Остаются два blocking gaps перед repeat final audit:
   - multiple-outcome / composite / joint-outcome prediction;
   - outcome-dependent sampling specifically for diagnostic probability models.
17. Следующий микро-проход: **RES-02/PASS-06B19 — multiple-outcome, composite and joint-risk prediction structures: single vs multiple outcome targets, marginal risks, composite endpoints, joint outcome combinations, outcome dependence, competing-vs-co-occurring outcomes, calibration/performance and decision-utility implications**.

## Правила Stage 2 после restart

1. Старые RES/ANA findings считаются **legacy reconnaissance drafts**, а не завершёнными topics.
2. Один topic ID может занимать любое число passes.
3. Каждый pass должен быть узким и завершаться сохранением в репозиторий.
4. Каждый pass фиксирует:
   - scope;
   - sources checked;
   - established findings;
   - unresolved issues;
   - next pass.
5. После содержательных passes обязателен отдельный gap/audit pass.
6. `CLOSED_FOR_PRACTICE` разрешён только после audit pass.
7. Персональную программу пока не строить.

## Сохраняется как завершённое

1. Stage 0A — first-pass audits.
2. Stage 0B — architecture audit + area 16.
3. Stage 1 — normalized canonical knowledge tree v1.0.

## Перепроверяется

1. RES-01…RES-29.
2. Затем ANA-01…ANA-11 и оставшиеся ANA topics.
