# A1/A2 №6 — Нейробиология и нейропластичность: накопленное понимание

**Статус:** A1 завершена 15.10.2026, A2 — 16.10.2026. Ниже сохранено понимание структуры области и добавлены выводы финальной картографии после межобластной сверки.

## 1. Нейропластичность — не один механизм и не один масштаб

Для дальнейшей работы нужно одновременно различать:
- synaptic efficacy;
- intrinsic and dendritic excitability;
- structural synaptic and axonal remodeling;
- gene expression and epigenetic regulation;
- engram and ensemble reconfiguration;
- glial and myelin plasticity;
- circuit and macroscale network reorganization.

Следовательно, фраза «мозг изменился» без указания уровня почти бессодержательна.

## 2. Изменение и стабильность должны исследоваться вместе

Hebbian learning rules усиливают experience-dependent differentiation, но сами по себе не объясняют устойчивость системы. Homeostatic plasticity и metaplasticity составляют отдельные ветви, регулирующие:
- допустимый диапазон activity;
- E/I balance;
- thresholds future change;
- stability–flexibility trade-offs.

Это важная карта проблемы, но A1 не решает, как именно эти механизмы совместно работают.

## 3. Классической схемы LTP/LTD недостаточно

STDP, BTSP, intrinsic plasticity, inhibitory plasticity and structural remodeling показывают, что разные forms experience-dependent change работают на разных временных и пространственных масштабах.

Поэтому future research нельзя строить так, будто один Hebbian rule является универсальным neurobiological mechanism learning.

## 4. Neural representation может оставаться функционально стабильной без буквальной стабильности клеточного состава

Engram research и representational drift делают отдельным вопрос:
- что именно должно быть stable;
- какие elements могут меняться;
- как сохраняется retrievability/behavior despite representational reconfiguration.

A1 фиксирует этот stability-with-change problem, не выбирая одну теорию памяти.

## 5. Neuron-centric карта неполна

Современная literature требует включить:
- astrocytes;
- microglia;
- oligodendrocytes;
- mature myelin remodeling;
- metabolic and inflammatory context.

Это не означает, что все эти процессы являются «носителями опыта» в одинаковом смысле. Их causal roles и relative importance должны проверяться позже.

## 6. Lifelong plasticity не означает одинаковую пластичность во все периоды

Critical/sensitive-period research и adult plasticity одновременно показывают:
- high-sensitivity developmental windows;
- continuing adult capacity for change;
- age- and circuit-specific constraints.

Поэтому бинарное «мозг пластичен / не пластичен» нужно заменить вопросами о типе, масштабе, timing and constraints plasticity.

## 7. Adult neurogenesis — важный пример научной неопределённости

Для rodents phenomenon намного лучше established, тогда как в adult humans magnitude, persistence and functional significance остаются зависимыми от methodology and interpretation.

Эта ветвь важна не как центральный механизм всего adult learning, а как пример того, почему нельзя переносить animal neurobiology в humans без отдельной проверки.

## 8. Plasticity heavily depends on state

Sleep/offline processing, neuromodulation, hormones, physiological stress, exercise/metabolic state and prior activity can change whether and how new neural modification occurs.

Это создаёт отдельную будущую проблему «plasticity gating», но A1 не пытается свести её к единому biochemical signal.

## 9. Human evidence often measures proxies

Cellular causal tools in animals and human neuroimaging observe radically different levels. Rapid MRI changes show especially clearly that apparent “structural” change may reflect several physiological substrates.

Поэтому future synthesis must preserve:
- measurement scale;
- causal strength;
- species;
- temporal resolution;
- whether neural change was directly observed or inferred.

## 10. Individuality and plasticity are related questions, but not identical

Plastic responses vary among individuals because of developmental history, genes, prior experience, biological state and environment. Но individual difference in plasticity does not automatically equal personality or individuality.

This branch should later be compared with personality development and complex-systems research, not prematurely turned into a biological explanation of individuality.

## 11. Что A1 №6 дала общей программе

Получена карта из **260 вопросов в 28 блоках**. Она нужна, чтобы позже не смешивать:
- plasticity with transient activation;
- synaptic plasticity with all neural adaptation;
- Hebbian change with homeostatic regulation;
- plasticity with metaplasticity;
- engram stability with fixed cell membership;
- neural plasticity with neurogenesis;
- neuronal and glial contributions;
- adult plasticity with developmental critical periods;
- functional network changes with structural rewiring;
- human MRI correlates with cellular mechanisms established in animals.

## 12. Граница текущего результата

В этом проходе **ни один из 260 вопросов не исследовался глубоко**. Источники использовались для картографии уровней, направлений, споров и методологических границ области; отдельные механизмы не доводились до Phase B.

A1 №6 отвечает только на вопрос:

**«Какие уровни и формы биологической пластичности необходимо исследовать, чтобы позже понимать, как опыт может оставлять устойчивые, но пересматриваемые изменения в биологической системе, не сводя всё к одному синаптическому механизму и не перенося animal findings напрямую на ИИ?»**

**Следующий шаг общего процесса:** A1 №7 «Кибернетика, сложные системы и самоорганизация».


---

# A2 — что изменилось в понимании области

## 13. Нейропластичность не является общей метафорой любого изменения

После A2 граница стала жёстче:

`neuroplasticity` — это biological change в конкретном neural substrate.

Она не должна использоваться как красивый общий термин для:
- обновления файла;
- изменения prompt;
- смены model state;
- continual learning algorithm;
- изменения agent memory.

Если позже нам понадобится общий принцип изменения, его нужно сначала сформулировать в substrate-neutral терминах в №7.

## 14. Change и stability в биологии работают одновременно

A2 усилила важную идею: Hebbian/experience-specific mechanisms способны менять сеть, но система одновременно использует homeostatic mechanisms, чтобы сохранять функциональные диапазоны.

Поэтому полезная абстракция для будущего синтеза не «быть максимально пластичной», а:

**что разрешено изменять, что должно сохраняться и каким образом эти процессы не разрушают друг друга.**

Это пока только вопрос для cross-domain abstraction, не готовое правило проекта.

## 15. История может менять саму способность меняться

Metaplasticity отделяет два уровня:

1. предыдущее событие оставило конкретное изменение;
2. предыдущая история изменила **условия будущей plasticity**.

Это принципиально отличается от обычного хранения опыта.

Для будущей индивидуализации потенциально важна сама идея, что две разные истории могут сделать систему по-разному чувствительной к следующему событию. Но перенос на GPT потребует независимого artificial mechanism и не следует из neuroscience автоматически.

## 16. Функциональная преемственность не требует неизменного субстрата

Dynamic engrams и representational drift показывают биологический случай, где:
- конкретные cells/synapses могут меняться;
- representation evolves;
- higher-level selectivity/function can remain relatively stable.

Поэтому «сохранять себя» не обязательно означает «заморозить все внутренние элементы».

Это сильная formal idea для №7, но она не говорит, какой state/files/weights должен сохранять будущий ИИ.

## 17. Обратное тоже верно: сохранённый субстрат не гарантирует влияние

Biological trace/change может:
- существовать;
- быть inaccessible;
- не выражаться в current behavior;
- участвовать только under specific state/context.

Это согласуется с A2 №2: persistence, accessibility and behavioral influence must be separated.

## 18. Один behavioral outcome не указывает на один biological mechanism

A2 усилила causal caution.

Одинаковое изменение поведения может поддерживаться:
- разными synaptic mechanisms;
- network reorganization;
- compensation;
- altered inhibition/excitability;
- state-dependent recruitment.

Поэтому reverse inference `behavior changed → mechanism X changed` ненадёжен без независимых causal data.

Для нашего проекта это важно как общий методологический урок: **observable change не раскрывает автоматически внутреннюю причину**.

## 19. Большая plasticity не является безусловным благом

Биология постоянно решает trade-offs:
- retain vs update;
- specialize vs remain flexible;
- change vs maintain network function.

Maladaptive plasticity показывает, что устойчивое experience-dependent изменение может быть нежелательным.

Поэтому позже нельзя оценивать наш механизм по принципу «чем чаще он обновляется, тем лучше развивается».

## 20. Временные масштабы нельзя свести к одному update

В №6 сосуществуют:
- millisecond-scale learning rules;
- seconds-scale BTSP;
- hours/days molecular/homeostatic/metaplastic changes;
- longer circuit/structural reorganization.

Это не одна и та же plasticity, работающая с разной скоростью.

Для общего проекта это поддерживает уже возникшую идею multi-timescale history, но конкретные artificial timescales должны выводиться из №8–12, а не копироваться из brain biology.

## 21. Human neuroplasticity требует особенно осторожной доказательной дисциплины

Human neuroscience часто использует indirect macroscopic measures.

A2 усилила цепочку:
`measured signal change ≠ identified neural mechanism ≠ proven behavioral cause`.

Rapid MRI changes особенно полезны как предупреждение: даже слово “structural” не гарантирует, что observed change означает долговременное anatomical rewiring.

## 22. Cross-species translation уже внутри biology требует явного моста

Даже mouse cellular mechanism нельзя автоматически переносить на human plasticity.

Если такой bridge нужен даже между biological species/measurement scales, тем более недопустим прямой перенос:
`brain mechanism → LLM mechanism`.

Это делает explicit abstraction обязательным, а не формальной перестраховкой.

## 23. Правильный маршрут переноса идей №6

Для дальнейшей работы закреплён маршрут:

`biological phenomenon №6 → substrate-neutral property №7 → candidate artificial mechanism №10/9/8 → actual product feasibility №11/12`.

Например:

- biological representational drift **может подсказать вопрос** о continuity under changing substrate;
- homeostasis — вопрос о stable variables under continued adaptation;
- metaplasticity — вопрос о history-dependent update rules.

Но ни один из них сам по себе не доказывает, что аналогичный artificial mechanism нужен или будет полезен.

## 24. Что область №6 реально даст позднему синтезу

Не biological architecture for AI, а ограничения и вопросы:

1. **change ≠ unlimited plasticity;**
2. **stability and plasticity must be considered together;**
3. **history may alter future responsiveness;**
4. **functional continuity can coexist with component turnover;**
5. **persistent substrate ≠ persistent behavioral influence;**
6. **same behavior can have multiple internal mechanisms;**
7. **different timescales can interact without being one update process;**
8. **state gates plasticity;**
9. **individual histories produce different plastic responses;**
10. **cross-domain transfer requires explicit abstraction and independent validation.**

## 25. Финальная граница A2 №6

Самые важные deep-dive ветви для будущей фазы B:
- interaction of Hebbian/experience-specific and homeostatic change;
- metaplasticity/history-dependent future responsiveness;
- dynamic representation vs functional continuity;
- multiscale causal links;
- state/developmental gating;
- maladaptive plasticity and change–stability trade-offs;
- validity of human plasticity measures;
- cross-species and cross-domain translation discipline.

Memory mechanisms остаются primary №2, behavioral learning №3, significance/reward №4, formal abstraction №7, artificial stability–plasticity №10.
