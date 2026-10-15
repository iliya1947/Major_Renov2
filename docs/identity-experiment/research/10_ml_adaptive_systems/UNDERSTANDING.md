# A1 №10 — Машинное обучение и адаптивные системы: понимание карты области

**Статус:** итог первичной картографии A1 №10 от 15.10.2026. Это понимание структуры исследовательского пространства, а не ответы на найденные вопросы.

## 1. «Адаптация» в ML — не один вид изменения

Нужно различать как минимум:
- parameter update;
- architecture/capacity change;
- representation change;
- data/replay selection;
- optimizer/hyperparameter adaptation;
- policy adaptation;
- personalization;
- test-time adaptation;
- distributed/federated update.

Поэтому later research должен всегда спрашивать **что именно меняется**, **каким сигналом** и **на каком timescale**.

## 2. Contextual adaptation и persistent learning нельзя смешивать

Область №8 уже отделила context-conditioned behavior LLM от weight updates. Область №10 добавляет общий ML-уровень: persistent adaptation может происходить через fine-tuning, continual learning, architecture change, replay and other mechanisms, но transient inference conditioning itself не является тем же процессом.

## 3. Stability–plasticity — центральная, но двухсторонняя проблема

Continual-learning literature выделяет как минимум две независимые failure directions:
- catastrophic forgetting — новое разрушает полезное старое;
- loss of plasticity — система сохраняет старое, но теряет способность эффективно учить новое.

Следовательно, successful adaptation требует не просто «меньше забывать».

## 4. Иногда забывание нужно

Concept-drift and nonstationary-stream research показывает, что старые закономерности могут стать неактуальными. Поэтому perfect retention также может быть дефектом.

Future work должно различать:
- useful retention;
- interference;
- deliberate/functional forgetting of obsolete structure;
- recurring concepts, которые могут снова стать полезными.

## 5. Continual, online, transfer, meta and test-time learning решают разные задачи

- **online learning** — последовательное обновление по поступающим данным/feedback;
- **continual/lifelong learning** — накопление/обновление знаний across tasks/domains/time;
- **transfer learning** — использование knowledge from source to target;
- **meta-learning** — learning how to adapt across task distributions;
- **test-time adaptation** — adaptation during deployment/test conditions;
- **domain generalization** — robust behavior on unseen domains without target adaptation.

Одинаковое слово “adaptation” не делает эти paradigms interchangeable.

## 6. Nonstationarity требует решения «когда меняться»

Adaptive system должен не только уметь обновляться, но и решать:
- произошёл ли meaningful shift;
- является ли он временным noise;
- достаточно ли evidence;
- какое изменение требуется;
- нужно ли сохранить old regime because it may recur.

Drift detection/uncertainty therefore forms a separate gating problem from adaptation algorithm itself.

## 7. Быстрая адаптация может быть узкой

Meta-learning/few-shot methods optimize rapid change relative to an assumed task distribution. Быстрое приспособление к nearby tasks не гарантирует robust adaptation far outside that distribution.

Это будущая проверка против слишком сильной аналогии «мета-обучение = универсальная способность учиться».

## 8. Data exposure itself can be adaptive

Curriculum learning, active learning, replay and data selection change not only the learner but **what experience reaches the learner and when**.

This creates a future branch important for experience-based systems:
- passive experience stream;
- selected/replayed experience;
- actively queried information;
- ordered curriculum.

A1 does not choose among them.

## 9. Representations constrain future adaptability

Self-supervised, multi-task and transfer-learning research suggests that what is learned as a representation shapes later sample efficiency, transfer and interference. But representation useful for one family of tasks may suppress information needed elsewhere.

Thus “general representation” is itself an empirical claim, not a neutral substrate.

## 10. Adaptive control adds a different standard of success

Adaptive control emphasizes stability and guarantees under explicit model/uncertainty assumptions, whereas much ML/RL emphasizes empirical return or predictive performance.

Later synthesis should not import “adaptation” from one field without carrying its success criterion and assumptions.

## 11. Personalization is not equivalent to learning an identity

A model can be personalized to user-specific distributions or feedback while merely fitting recent preferences. This is technically important but conceptually different from a self-directed history-dependent individuality.

Therefore personalization research is relevant comparison material, not proof of the experiment’s desired phenomenon.

## 12. Deployed adaptation creates governance and safety questions

A system that continually changes can:
- learn from poisoned data;
- amplify feedback loops;
- drift in fairness or objectives;
- become hard to audit;
- require rollback/versioning.

Thus adaptive ML cannot be evaluated only by instantaneous accuracy.

## 13. Что A1 №10 дала общей программе

Получена карта из **398 вопросов именно области №10**, в 36 блоках. Она нужна, чтобы позже не смешивать:
- online and continual learning;
- transfer and adaptation;
- domain adaptation and generalization;
- test-time and persistent learning;
- catastrophic forgetting and loss of plasticity;
- retention and functional forgetting;
- fast adaptation and broad generalization;
- active data acquisition and passive exposure;
- personalization and identity;
- ML adaptation and adaptive-control guarantees.

## 14. Граница текущего результата

В этом проходе **ни один из 398 вопросов области №10 не исследовался глубоко**. Источники использовались для первичной картографии paradigms, forms of adaptation, stability–plasticity problems, nonstationarity and evaluation boundaries.

A1 №10 отвечает только на вопрос:

**«Какие формы machine learning adaptation необходимо исследовать, чтобы позже понять, как система может накапливать и пересматривать приобретённое без либо катастрофического стирания прошлого, либо утраты способности меняться, не сводя адаптацию к одному алгоритму?»**

**Следующий шаг общего процесса:** A1 №11 «Возможности ChatGPT».
