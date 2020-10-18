<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li>Wine classification with SLAVE, a genetic fuzzy system</li>
</ul>

## Wine classification with SLAVE, a genetic fuzzy system

In this tutorial we will train and test a genetic fuzzy system for classifying the [Wine Data Set](http://archive.ics.uci.edu/ml/datasets/Wine) from the UCI Machine Learning Repository.

For this tutorial we are going to use *[SLAVE: a genetic learning system based on an iterative approach](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.379.2735&rep=rep1&type=pdf)*. The training process has some parameters that can be tuned, such as the population size or the mutation probability.

The performance of the model will be determined by averaging all the accuracy measures obtained in a 5-fold cross-validation. This mark will be used to automatically fine tune some parameters of the model.

### 1. Create a new project

![Empty projects screen](assets/img/projects_screen/introduction_1.png)

In the [projects screen](documentation/projects_screen), press the *Create new project* button.

!["Create new project" button](assets/img/projects_screen/create_1.png)

Write a name for the project.

!["Create new project" dialog](assets/img/projects_screen/create_2.png)

And press **Start**. The [work screen](documentation/work_screen) will appear.

![Empty work screen](assets/img/work_screen/introduction_1.png)

### 2. Upload the data

Download the file `wine.data` from [here](tutorials/datasets/wine.data).

Now we need to upload the file to the project. Press the *Create card* button.

!["Create card" button](assets/img/work_screen/create_1.png)

Press **Upload file** and select the file you just downloaded. A new entry, **wine.data**, will appear in the menu.

![Data tab](assets/img/SLAVE/upload_1.png)

Press the **wine.data** entry to create an [Open file](cards/openFile) card.

!["Open file" card](assets/img/SLAVE/upload_2.png)

### 3. Prepare the data

According to [the dataset description](http://archive.ics.uci.edu/ml/datasets/Wine), `wine.data` is a comma-separated values file with the following columns:

1. Class (1, 2 or 3)
2. Alcohol
3. Malic acid
4. Ash
5. Alcalinity of ash
6. Magnesium
7. Total phenols
8. Flavanoids
9. Nonflavanoid phenols
10. Proanthocyanins
11. Color intensity
12. Hue
13. OD280/OD315 of diluted wines
14. Proline

Our model will take as input columns 2 to 14 and will give as output a prediction of the first column.

First of all we need to convert the file stream into a 2D tensor (also known as *table*).

Press the *Create card* button.

!["Create card" button](assets/img/work_screen/create_1.png)

In the **Modules** tab, navigate to **Files and formats** and press **Read as CSV**.

!["Create card" menu](assets/img/SLAVE/prepare_1.png)

A new [Read as CSV](cards/readAsCSV) card will appear in the blueprint.

!["Read as CSV" card](assets/img/cards/readAsCSV.png)

Connect the **Stream** output from [Open file](cards/openFile) to the **Stream** input of [Read as CSV](cards/readAsCSV).

![Current pipeline](assets/img/SLAVE/prepare_2.png)

Now we just have to configure the parameters of the CSV reader---delimiter and header row(s)---. Getting a glimpse of the file contents can help us in this task.

Select the [Open file](cards/openFile) card by pressing on it and press the *Preview output* button on the top bar:

!["Preview output" button](assets/img/work_screen/preview_1.png)

A dialog will appear showing a preview of the contents of `wine.data`.

!["Preview output" dialog](assets/img/SLAVE/prepare_3.png)

As we can see, this file has no headers and the values are delimited by commas (,). This is the current configuration of our CVS reader, so it is ready to process the file.

Select the [Read as CSV](cards/readAsCSV) card and press the *Preview output* button on the top bar. The preview dialog will show a table this time.

!["Preview output" dialog](assets/img/SLAVE/prepare_4.png)

If we scroll down we will see that the dataset is sorted by the first column (the class). Performing a k-fold cross-validation in this state will lead to very poor results, since the training dataset will not contain the same classes as the test dataset in most cases.

We need to shuffle the dataset. Press the *Create card* button, navigate to **Tables** and press **Shuffle rows**. A new [Shuffle rows](cards/shuffleRows) card will appear in the blueprint.

!["Shuffle rows" card](assets/img/cards/shuffleRows.png)

Connect the **Table** output from [Read as CSV](cards/readAsCSV) to the **Data** input of [Shuffle rows](cards/shuffleRows).

![Current pipeline](assets/img/SLAVE/prepare_5.png)

If we get a preview of the **Shuffled** output, we can see that the table has been correctly shuffled.

!["Preview output" dialog](assets/img/SLAVE/prepare_6.png)

We are finally ready to perform the K-fold cross-validation.

Press the *Create card* button, navigate to **Validation** and press **K-fold cross-validation**. A new [K-fold cross-validation](cards/kFoldCrossValidation) card will appear in the blueprint.

!["K-fold cross-validation" card](assets/img/cards/kFoldCrossValidation.png)

Connect the **Shuffled** output from [Shuffle rows](cards/shuffleRows) to the **Data** input of [K-fold cross-validation](cards/kFoldCrossValidation).

![Current pipeline](assets/img/SLAVE/prepare_7.png)

As we can see, the [K-fold cross-validation](cards/kFoldCrossValidation) card already has a default value of 5 for K, which exactly what we need.

This card also triggers two different [events](documentation/basics#events): *On each fold*, that provides the training and testing [Tensors](types/Tensor) and *On finish*, that has no associated data.

At this point our data is ready. We can start working on the training part of the pipeline.

### 4. Training the model

First of all we need to split the input and output of the training table. Press the *Create card* button, navigate to **Tables** and press **Split into X and Y by columns**. A new [Split into X and Y by columns](cards/splitIntoXAndYByColumns) card will appear in the blueprint.

!["Split into X and Y by columns" card](assets/img/cards/splitIntoXAndYByColumns.png)

Connect the **Training** output from [K-fold cross-validation](cards/kFoldCrossValidation) to the **Data** input of [Split into X and Y by columns](cards/splitIntoXAndYByColumns).

![Current pipeline](assets/img/SLAVE/training_1.png)

We want to predict the value of the 1st column of the table (index 0) using columns 2 to 14 (indexes 1 to 13) as input for our model. Set **X column(s)** to "1:13" and **Y column(s)** to "0" in [Split into X and Y by columns](cards/splitIntoXAndYByColumns).

!["Split into X and Y by columns" card configured](assets/img/SLAVE/training_2.png)

We are ready to train our model. Press the *Create card* button, navigate to **Models** &#x226B; **Fuzzy logic** and press **Train SLAVE classifier**. A new [Train SLAVE classifier](cards/trainSLAVEClassifier) card will appear in the blueprint.

!["Train SLAVE classifier" card](assets/img/cards/trainSLAVEClassifier.png)

Connect the **X** and **Y** outputs from [Split into X and Y by columns](cards/splitIntoXAndYByColumns) to the **Training X** and **Training Y** inputs of [Train SLAVE classifier](cards/trainSLAVEClassifier) respectively.

![Current pipeline](assets/img/SLAVE/training_3.png)

As we can see, the training process of SLAVE depends on several parameters that can be tuned (e.g., *number of labels*, *population size*, *mutation probability*). We do not know what combination of values lead to the best accuracy, or what effect each parameter has on the overall performance, but that is not a problem. Protopipe has a way of answering this kind of questions.

In this tutorial we will analyze the effect of the *population size* and the *mutation probability* on the training process.

Press the *Create card* button, navigate to **Parameters** and press **Integer parameter**. A new dialog will appear asking for the name of this parameter.

![Dialog asking for the name of the parameter](assets/img/SLAVE/training_4.png)

Write "Population size" and press **Set**. A new [Integer parameter](cards/parameterInteger) card will appear in the blueprint.

Connect the **Value** output from [Integer parameter](cards/parameterInteger) to the **Population size** input of [Train SLAVE classifier](cards/trainSLAVEClassifier).

![Current pipeline](assets/img/SLAVE/training_5.png)

We must specify a domain of possible values for this parameter. In this tutorial we will try 10, 50 and 100.

!["Integer parameter" card configured](assets/img/SLAVE/training_6.png)

Now we will do the same for *mutation probability*. Press the *Create card* button, navigate to **Parameters** and press **Float parameter**. Name this parameter "Mutation probability".

Connect the **Value** output from [Float parameter](cards/parameterFloat) to the **Mutation probability** input of [Train SLAVE classifier](cards/trainSLAVEClassifier).

![Current pipeline](assets/img/SLAVE/training_7.png)

The domain of possible values for this parameter will be between 0.1 and 0.9.

!["Float parameter" card configured](assets/img/SLAVE/training_8.png)

This finishes the training part of the pipeline. We are ready to measure the performance of the model.

### 5. Testing the model

First of all we need to split the input and output of the testing table, as we previously did with the training table. Press the *Create card* button, navigate to **Tables** and press **Split into X and Y by columns**. A new [Split into X and Y by columns](cards/splitIntoXAndYByColumns) card will appear in the blueprint.

!["Split into X and Y by columns" card](assets/img/cards/splitIntoXAndYByColumns.png)

Connect the **Testing** output from [K-fold cross-validation](cards/kFoldCrossValidation) to the **Data** input of [Split into X and Y by columns](cards/splitIntoXAndYByColumns).

![Current pipeline](assets/img/SLAVE/testing_1.png)

Analogously as we did before, set **X column(s)** to "1:13" and **Y column(s)** to "0" in [Split into X and Y by columns](cards/splitIntoXAndYByColumns).

!["Split into X and Y by columns" card configured](assets/img/SLAVE/testing_2.png)

At this point we are ready to ask the model for a prediction. Press the *Create card* button, navigate to **Models** and press **Predict**. A new [Predict](cards/predict) card will appear in the blueprint.

!["Predict" card](assets/img/cards/predict.png)

Connect the **Model** output from [Train SLAVE classifier](cards/trainSLAVEClassifier) to the **Model** input of [Predict](cards/predict), then connect the **X** output from [Split into X and Y by columns](cards/splitIntoXAndYByColumns) to the **X** input of [Predict](cards/predict).

![Current pipeline](assets/img/SLAVE/testing_3.png)

The performance of the model will be determined by averaging the accuracy obtained in each fold. Press the *Create card* button, navigate to **Loss functions** and press **Accuracy**. A new [Accuracy](cards/accuracy) card will appear in the blueprint.

!["Accuracy" card](assets/img/cards/accuracy.png)

Connect the **Y'** output from [Predict](cards/predict) to the **Predictions** input of [Accuracy](cards/accuracy), then connect the **Y** output from [Split into X and Y by columns](cards/splitIntoXAndYByColumns) to the **Target** input of [Accuracy](cards/accuracy).

![Current pipeline](assets/img/SLAVE/testing_4.png)

Our goal is to calculate the mean accuracy of all folds, so we need to store each obtained accuracy value somewhere. On each fold we will load a **variable** list of float, add the accuracy value and store it again.

Press the *Create card* button, navigate to **Variables** &#x226B; **Getters** and press **Get list of float**. A new [Get list of float](cards/getFloat_n) card will appear in the blueprint.

!["Get list of float" card](assets/img/cards/getFloat_n.png)

Set the **Name** input as "accuracies".

Make [Get list of float](cards/getFloat_n) an explicit listener of the *On each fold* event of [K-fold cross-validation](cards/kFoldCrossValidation) by dragging & dropping the square socket next to **Call** into the [Get list of float](cards/getFloat_n) card.

We need to load and store the variable on each fold in order to always access to its last version, otherwise the system would load it only once and it would always be empty.

![Current pipeline](assets/img/SLAVE/testing_5.png)

Press the *Create card* button, navigate to **Lists** and press **Add float to list**. A new [Add float to list](cards/addFloatToList) card will appear in the blueprint.

!["Add float to list" card](assets/img/cards/addFloatToList.png)

Connect the **Value** output from [Get list of float](cards/getFloat_n) to the **List** input of [Add float to list](cards/addFloatToList), then connect the **Accuracy** output from [Accuracy](cards/accuracy) to the **Value** input of [Add float to list](cards/addFloatToList).

![Current pipeline](assets/img/SLAVE/testing_6.png)

Press the *Create card* button, navigate to **Variables** &#x226B; **Setters** and press **Set list of float**. A new [Set list of float](cards/setFloat_n) card will appear in the blueprint.

!["Set list of float" card](assets/img/cards/setFloat_n.png)

Set the **Name** input as "accuracies".

Connect the **Result** output from [Add float to list](cards/addFloatToList) to the **Value** input of [Set list of float](cards/setFloat_n).

![Current pipeline](assets/img/SLAVE/testing_7.png)

At this point our pipeline is the accuracy obtained by each trained model on each fold. We are ready to compute their mean value.

Press the *Create card* button, navigate to **Variables** &#x226B; **Getters** and press **Get list of float**. A new [Get list of float](cards/getFloat_n) card will appear in the blueprint.

!["Get list of float" card](assets/img/cards/getFloat_n.png)

Set the **Name** input as "accuracies".

Make this [Get list of float](cards/getFloat_n) card an explicit listener of the *On finish* event of [K-fold cross-validation](cards/kFoldCrossValidation) by dragging & dropping the square socket next to **Call** into the [Get list of float](cards/getFloat_n) card.

![Current pipeline](assets/img/SLAVE/testing_8.png)

Press the *Create card* button, navigate to **Statistics** and press **Mean**. A new [Mean](cards/mean) card will appear in the blueprint.

!["Mean" card](assets/img/cards/mean.png)

Connect the **Value** output of [Get list of float](cards/getFloat_n) to the **Values** input of [Mean](cards/mean).

![Current pipeline](assets/img/SLAVE/testing_9.png)

We are almost done. Now we just need to return the obtained value, so Protopipe can generate the final report. Press the *Create card* button, navigate to **Returns** and press **Return float**. A new dialog will appear asking for the name of this return value.

![Dialog asking for the name of the return value](assets/img/SLAVE/testing_10.png)

Write "Mean accuracy" and press **Set**. A new [Return float](cards/returnFloat) card will appear in the blueprint.

Connect the **Mean** output from [Mean](cards/mean) to the **Value** input of [Return float](cards/returnFloat).

![Current pipeline](assets/img/SLAVE/testing_11.png)

That's it! Our pipeline is ready!

### 6. Experimenting

Press the *Fine tune settings* button on the top bar.

!["Fine tune settings" button](assets/img/work_screen/tune_4.png)

A new panel will appear at the right side of the screen.

!["Fine tune settings" panel](assets/img/SLAVE/experimenting_1.png)

In **Assignation of the values** choose "Brute-force" and then set "3 samples" for the **Mutation probability** float parameter.

!["Fine tune settings" panel](assets/img/SLAVE/experimenting_2.png)

Press the *Start processing* button to run all the experiments.

!["Start processing" button](assets/img/work_screen/process_1.png)

A new panel will appear at the right side of the screen, showing real-time information about the state of the processing.

!["Processing" panel](assets/img/work_screen/process_2.png)

When the processing successfully finishes a new dialog will appear.

!["Processing finished" dialog](assets/img/SLAVE/experimenting_3.png)

Press **See report** to open the *Reports screen*, that will contain a table that summarizes all the experiments performed.

![Table of performed experiments](assets/img/SLAVE/experimenting_4.png)

Sort the table by "Mean accuracy" in descending order to check what model performed better.

![Table of performed experiments sorted by mean accuracy](assets/img/SLAVE/experimenting_5.png)

### 7. Analysis

On the left side panel, under the most recent report node, click on **Cross-sectional analysis**.

![Cross-sectional analysis screen](assets/img/SLAVE/analysis_1.png)

In this screen you can compare the effect of a parameter (X axis) on a return value (Y axis).

For example, here we can see how the *Population size* affects *Mean accuracy*:

![Population size vs. Mean accuracy](assets/img/SLAVE/analysis_2.png)

### 8. Conclusion

In this tutorial we designed a pipeline for training and testing a classifier and analyzed the obtained results after performing multiple experiments with different combinations of parameter values.

This tutorial can be extended by fine tuning other parameters (e.g., *number of labels*, *use rule weights*) or generating reports with the accuracy obtained for each class separately.