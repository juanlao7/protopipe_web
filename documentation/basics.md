<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li>The basics</li>
</ul>

## The basics

This page explains everything you need to know to start using Protopipe.

If you prefer to learn by doing, you can follow [this quick introductory tutorial](tutorials/introductory/SLAVE).

### Pipeline design

![3 connected cards](assets/img/basics/design_1.png)

**Cards** are the main pillar of Protopipe.

Cards are like **functions** of any common programming language: they receive some inputs, do something and return some outputs.

For instance:

* The [Mean](cards/mean) card receives a list of numbers and returns their mean value.
* The [Train SLAVE classifier](cards/trainSLAVEClassifier) card receives a training dataset, trains a fuzzy logic model and returns it.
* The [Predict](cards/predict) card receives a model plus the inputs of a test dataset and returns the model's predictions.

To design a pipeline of a experiment, just add cards to the blueprint and connect them.

The inputs of a card are at its left and the outputs at its right. They can be of different **types** (e.g., [String](types/String), [Integer](types/Integer), [Float](types/Float)) and you can recognize them by the **color** and **shape** of the socket.

For instance a [String](types/String) is represented by a red circle, a list of [Integers](types/Integer) by **two** green circles, a [Tensor](types/Tensor) by a blue square, etc.

![A card with inputs and outputs of different types](assets/img/basics/design_2.png)

You can directly provide a value for some specific kind of inputs, such as [Strings](types/String) or [Integers](types/Integer). See [this page](documentation/work_screen#provide-an-input-directly) for more information.

Cards aim to be general and atomic so they can be used in lots of different situations, but also complete and handy enough so you do not need to use hundreds of them for performing a simple task.

#### Events

Some cards have the ability of triggering events when they are processed. In the example below, card [K-fold cross-validation](cards/kFoldCrossValidation) triggers the *On each fold* event K times and the event *On finish* at the end.

![A card triggers two events](assets/img/basics/events_1.png)

All events have a socket for explicitly calling other cards. Cards connected to that socket are called **explicit listeners**. In the example above, card [Get list of float](cards/getFloat_n) is an explicit listener of the *On finish* event.

Events can have associated data, only available when they are triggered. In example above event *On each fold* has two associated [Tensors](types/Tensor) *Training* and *Testing*, while event *On finish* has no associated data at all.

Cards that receive the associated data of an event as input are called **implicit listeners**. In the example above, cards [Split into X and Y by columns](cards/splitIntoXAndYByColumns) are implicit listeners of the *On each fold event*.

Explicit and implicit listeners are processed only when the event is triggered. If the event is not triggered, these cards or the cards connected to their outputs are never processed.

#### Parameters

Protopipe can find approximated optimal values any parameters of your model (e.g., number of layers in a neural network or mutation probability in a genetic algorithm).

There is a special set of cards that represent parameters that must be optimized, the **parameter cards**. Some of them, such as the [Float parameter](cards/parameterFloat), let you specify a **domain** in order to narrow down the search space.

![Float parameter card](assets/img/basics/parameters_1.png)

When processing a project, the optimizer will perform multiple experiments, analyzing the previous results and assigning new values to parameter cards on each iteration. After a certain number of iterations, the parameter cards will output approximated optimal values.

See [this page](documentation/work_screen#fine-tune-parameters-automatically) for more information.

#### Returns

Protopipe lets you analyze the results obtained from your experiments and perform some interesting tasks, like **cross-sectional analysis**.

There is a special set of cards that collect values for the later analysis phase, the **return cards**. For example, the [Return float](cards/returnFloat) card stores a [Float](types/Float) value to show it later in the generated report.

![Return float card](assets/img/basics/returns_1.png)

See [this page](documentation/reports_screen) for more information.

#### Variables

In some cases it is **not** possible to connect the output of a card A to the input of a card B because card A is processed inside an [event](documentation/basics#events) while card B is either processed in a different event or in no event at all.

For instance, you may need to compute the testing error of a model inside a [K-fold cross-validation](cards/kFoldCrossValidation) and compute the mean of all obtained errors after all folds have been processed, but it is not possible to connect the output of a card inside the *On each fold* event to the input of a card of the *On finish* event.

![Unfinished k-fold cross-validation](assets/img/basics/variables_1.png)

For this kind of situations Protopipe offers a system for getting and setting **variables**.

Variables are values of any [type](types/) identified by a name ([String](types/String)) that can be accessed and modified during the project processing. Variables do not persist between project processings, so at the beginning of each project processing the set of variables is completely empty.

There is a special set of cards that store variables, the **setter cards**. For example, the [Set float](cards/setFloat_1) card stores a [Float](types/Float) in the set of variables.

![Set float](assets/img/basics/variables_2.png)

Analogously there is another set of cards that retrieve variables, the **getter cards**. For example, the [Get float](cards/getFloat_1) card retrieves a [Float](types/Float) from the set of variables.

![Get float](assets/img/basics/variables_3.png)

Variables make possible to share data between events. For instance, the example below shows how it is possible to accumulate the testing errors of a K-fold cross-validation in a list and compute their mean later.

![Finished k-fold cross-validation](assets/img/basics/variables_4.png)

When a getter tries to retrieve an unexistent variable, it just returns a default value, depending on the data type of the variable.

#### Processing order

Protopipe pipelines work sequentially and parallelly at the same time. The system automatically detects when multiple cards can be processed at the same time---in no defined order---and when a card must wait until its dependencies are processed.

For instance, in the example below there is only a single thread, processing both cards sequentially in this order:

1. [Open file](cards/openFile) training.csv
2. [Read as CSV](cards/readAsCSV)

![Single thread with 2 sequentially processed cards](assets/img/basics/processing_1.png)

On the other hand, in the next example there are 2 different processing threads, processing both sequential queues of cards in parallel:

* Thread A:
    1. [Open file](cards/openFile) training.csv
    2. [Read as CSV](cards/readAsCSV)
* Thread B:
    1. [Open file](cards/openFile) testing.csv
    2. [Read as CSV](cards/readAsCSV)

![Two threads with 2 sequentially processed cards each](assets/img/basics/processing_2.png)

[As explained above](documentation/basics#events), when a card triggers an event all its explicit and implicit listeners get processed parallelly, and the cards that depend on them sequentially in their respective threads. After the system finishes processing the event, it comes back to finish the processing of the original card, and continues processing all cards that depend on it.

A common mistake that may occur when accumulating values in a variable list inside an event (e.g., inside a [K-fold cross-validation](cards/kFoldCrossValidation) *On each fold* event) is that the getter card is left out of the event scope, like in the following example:

![Wrong performed k-fold cross-validation, getter is left out of the event](assets/img/basics/processing_3.png)

In this case the getter will be processed just once, retrieving an empty list since the variable does not exist. On each fold the system will add a new value to the empty list, forgetting about all the previous introduced values.

To avoid this problem and force the system to retrieve the variable inside the event, the getter must be assigned as an explicit listener of the *On each fold* event:

![Correctly performed k-fold cross-validation, getter is inside the event](assets/img/basics/variables_4.png)

### Parameter optimization

Most machine learning models and data preprocessors can be fine tuned with parameters. For instance, you would like to find the right number of layers of a neural network, the optimal threshold of an image binarizer, or the best mutation probability of a genetic algorithm.

These parameters have a **huge** effect on the performance of a model and it is not trivial to find their optimal value, since it basically depends on the intrinsic properties of the data under study.

Although there is a lot of literature on how to theoretically choose the right values for some of these parameters, in most cases it is unfeasible to predict the final behavior of the model, so the common approach is to find the optimal values by actual experimentation.

In this area there are different strategies available:

* Try every possible value and combination of each parameter.
* Try random values for *n* iterations.
* Use an external optimizing method (e.g., bayesian networks, genetic algorithm).

The only thing in common among all the strategies is that you need to perform an **immense** amount of experiments in order to have a good approximation.

Protopipe comes equipped with several optimizing methods that automatize the search.

![Parameter optimization panel](assets/img/basics/parameter_1.png)

See [this page](documentation/work_screen#fine-tune-parameters-automatically) for more information.

### Result analysis

After processing a project, Protopipe generates a table where each row represents a single experiment containing all values assigned to [parameter cards](#parameters) and all values obtained from [return cards](#returns). This may help, for example, to know what combination of *learning rate* and *dropout factor* leads to the lowest *testing loss*.

![Results table](assets/img/basics/result_1.png)

Protopipe also has an integrated interactive tool for performing **cross-sectional analysis** between parameters and return values, letting you know, for example, how the *number of layers* affects the *accuracy* of your neural network.

![Cross-sectional analysis](assets/img/basics/result_2.png)

See [this page](documentation/reports_screen) for more information.
