<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li>Wine classification with neural networks</li>
</ul>

## Wine classification with neural networks

In this introductory tutorial we will train and test a single layer neural network for classifying the [Wine Data Set](http://archive.ics.uci.edu/ml/datasets/Wine) from the UCI Machine Learning Repository.

Since this is an introductory tutorial, we will use the validation loss as an indicator of the model's performance---instead of evaluating the model against an unseen test dataset---. We will use that value to fine tune some hyperparameters, such as the *batch size* or the *learning rate* of the optimizer.

The final project is available for download [here](tutorials/introductory/neural_networks/neural_networks.zip).

### 1. Creating a new project

![Empty projects screen](assets/img/projects_screen/introduction_1.png)

In the [projects screen](documentation/projects_screen), press the *Create new project* button.

!["Create new project" button](assets/img/projects_screen/create_1.png)

Write a name for the project.

!["Create new project" dialog](assets/img/projects_screen/create_2.png)

And press **Start**. The [work screen](documentation/work_screen) will appear.

![Empty work screen](assets/img/work_screen/introduction_1.png)

### 2. Uploading the data

Download the file `wine.data` from [here](tutorials/datasets/wine.data).

Now we need to upload the file to the project. Press the *Create card* button.

!["Create card" button](assets/img/work_screen/create_1.png)

Press **Upload file** and select the file you just downloaded. A new entry, **wine.data**, will appear in the menu.

![Data tab](assets/img/tutorials/neural_networks/upload_1.png)

Press the **wine.data** entry to create an [Open file](cards/openFile) card.

!["Open file" card](assets/img/tutorials/neural_networks/upload_2.png)

### 3. Preparing the data

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

!["Create card" menu](assets/img/tutorials/neural_networks/prepare_1.png)

A new [Read as CSV](cards/readAsCSV) card will appear in the blueprint.

!["Read as CSV" card](assets/img/cards/readAsCSV.png)

Connect the **Stream** output from [Open file](cards/openFile) to the **Stream** input of [Read as CSV](cards/readAsCSV).

![Current pipeline](assets/img/tutorials/neural_networks/prepare_2.png)

Now we just have to configure the parameters of the CSV reader---delimiter and header row(s)---. Getting a glimpse of the file contents can help us in this task.

Select the [Open file](cards/openFile) card by pressing on it and press the *Preview output* button on the top bar:

!["Preview output" button](assets/img/work_screen/preview_1.png)

A dialog will appear showing a preview of the contents of `wine.data`.

!["Preview output" dialog](assets/img/tutorials/neural_networks/prepare_3.png)

As we can see, this file has no headers and the values are delimited by commas (,). This is the current configuration of our CVS reader, so it is ready to process the file.

Select the [Read as CSV](cards/readAsCSV) card and press the *Preview output* button on the top bar. The preview dialog will show a table this time.

!["Preview output" dialog](assets/img/tutorials/neural_networks/prepare_4.png)

Now we need to split the input and output of the training table. Press the *Create card* button, navigate to **Tables** and press **Split into X and Y by columns**. A new [Split into X and Y by columns](cards/splitIntoXAndYByColumns) card will appear in the blueprint.

!["Split into X and Y by columns" card](assets/img/cards/splitIntoXAndYByColumns.png)

Connect the **Table** output from [Read as CSV](cards/readAsCSV) to the **Data** input of [Split into X and Y by columns](cards/splitIntoXAndYByColumns).

![Current pipeline](assets/img/tutorials/neural_networks/prepare_5.png)

We want to predict the value of the 1st column of the table (index 0) using columns 2 to 14 (indexes 1 to 13) as input for our model. Set **X column(s)** to "1:13" and **Y column(s)** to "0" in [Split into X and Y by columns](cards/splitIntoXAndYByColumns).

!["Split into X and Y by columns" card configured](assets/img/tutorials/neural_networks/prepare_6.png)

In order to obtain better results, it is recommended to normalize the data before giving it to a neural network. In our case, we will standard scale all the inputs.

Press the *Create card* button, navigate to **Normalization** and press **Standard scale columns**. A new [Standard scale columns](cards/standardScaleColumns) card will appear in the blueprint.

!["Standard scale columns" card](assets/img/cards/standardScaleColumns.png)

Connect the **X** output from [Split into X and Y by columns](cards/splitIntoXAndYByColumns) to the **Data** input of [Standard scale columns](cards/standardScaleColumns).

![Current pipeline](assets/img/tutorials/neural_networks/prepare_7.png)

Set **Column(s)** to "0:12" in [Standard scale columns](cards/standardScaleColumns).

!["Standard scale columns" card configured](assets/img/tutorials/neural_networks/prepare_8.png)

Since the dataset assigns one among three classes to each wine, our neural network will have 3 outputs. For a given input, they will represent the degree of membership to each class.

At this point the **Y** output of [Split into X and Y by columns](cards/splitIntoXAndYByColumns) is a table with just one column, that takes integer values between 1 and 3 (both included). We need to one-hot encode that, so the result will be a table with three columns with only 0 and 1 values.

Press the *Create card* button, navigate to **Tables** and press **One-hot encode columns**. A new [One-hot encode columns](cards/oneHotEncodeColumns) card will appear in the blueprint.

!["One-hot encode columns" card](assets/img/cards/oneHotEncodeColumns.png)

Connect the **Y** output from [Split into X and Y by columns](cards/splitIntoXAndYByColumns) to the **Data** input of [One-hot encode columns](cards/oneHotEncodeColumns).

![Current pipeline](assets/img/tutorials/neural_networks/prepare_9.png)

Set **Column(s)** to "0" in [One-hot encode columns](cards/oneHotEncodeColumns).

!["One-hot encode columns" card configured](assets/img/tutorials/neural_networks/prepare_10.png)

Our data is ready. Now we can start working on the training part of the pipeline.

### 4. Training the model

First of all we need to create our neural network. Press the *Create card* button, navigate to **Models** &#x226B; **Neural networks** and press **Create neural network**. A new [Create neural network](cards/createNeuralNetwork) card will appear in the blueprint.

!["Create neural network" card](assets/img/cards/createNeuralNetwork.png)

Press the *Edit* button in the card to open the neural network editor.

![Neural network editor](assets/img/neural_network_cards/editorScreenshot.png)

Press the *Create card* button in the neural network editor, navigate to **Layers** and press **Dense layer**. A new [Dense layer](neural_network_cards/layer_Dense) card will appear in the neural network editor.

!["Dense layer" card](assets/img/neural_network_cards/layer_Dense.png)

Connect the **Data** output from [Input](neural_network_cards/input) to the **Input** input of [Dense layer](cards/layer_Dense).

![Current pipeline](assets/img/tutorials/neural_networks/training_1.png)

Since our neural network has 13 inputs, so set **Shape** to "13" in [Input](neural_network_cards/input).

!["Input" card configured](assets/img/tutorials/neural_networks/training_1_2.png)

Our neural network has 3 outputs, so set **Units** to "3" and also **Activation** to "Sigmoid" in [Dense layer](cards/layer_Dense).

!["Dense layer" card configured](assets/img/tutorials/neural_networks/training_2.png)

Finally, connect the **Output** output from [Dense layer](neural_network_cards/layer_Dense) to the **Data** input of [Output](cards/output).

![Current pipeline](assets/img/tutorials/neural_networks/training_3.png)

Our neural network is complete. Press *Save* to close the dialog.

Press the *Create card* button, navigate to **Models** &#x226B; **Neural networks** and press **Train neural network**. A new [Train neural network](cards/trainNeuralNetwork) card will appear in the blueprint.

!["Train neural network" card](assets/img/cards/trainNeuralNetwork.png)

We will use 15% of the dataset for validation during 10 epochs. Set **Validation split** to "0.15" and **Epochs** to "10" in [Train neural network](cards/trainNeuralNetwork).

!["Train neural network" card configured](assets/img/tutorials/neural_networks/training_4.png)

As we can see, we have to provide an optimizer and a loss function for our training.

Press the *Create card* button, navigate to **Models** &#x226B; **Neural networks** &#x226B; **Optimizers** and press **Create SGD neural network optimizer**. A new [Create SGD neural network optimizer](cards/createSGDNeuralNetworkOptimizer) card will appear in the blueprint.

!["Create SGD neural network optimizer" card](assets/img/cards/createSGDNeuralNetworkOptimizer.png)

Press the *Create card* button, navigate to **Models** &#x226B; **Neural networks** &#x226B; **Losses** and press **Create neural network loss function**. A new [Create neural network loss function](cards/createNeuralNetworkLossFunction) card will appear in the blueprint.

!["Create neural network loss function" card](assets/img/cards/createNeuralNetworkLossFunction.png)

Now let's connect all the inputs:

1. Connect the **Neural network** output from [Create neural network](cards/createNeuralNetwork) to the **Neural network** input of [Train neural network](cards/trainNeuralNetwork).
2. Connect the **Scaled data** output from [Standard scale columns](cards/standardScaleColumns) to the **Training X** input of [Train neural network](cards/trainNeuralNetwork).
3. Connect the **Encoded data** output from [One-hot encode columns](cards/oneHotEncodeColumns) to the **Training Y** input of [Train neural network](cards/trainNeuralNetwork).
4. Connect the **Optimizer** output from [Create SGD neural network optimizer](cards/createSGDNeuralNetworkOptimizer) to the **Optimizer** input of [Train neural network](cards/trainNeuralNetwork).
5. Connect the **Function** output from [Create neural network loss function](cards/createNeuralNetworkLossFunction) to the **Loss** input of [Train neural network](cards/trainNeuralNetwork).

![Current pipeline](assets/img/tutorials/neural_networks/training_5.png)

As we can see, the training process of a neural network depends on several parameters that can be tuned (e.g., batch size, epochs, learning rate, number of layers, number of units in each layer). We do not know what combination of values lead to the best accuracy, or what effect each parameter has on the overall performance, but that is not a problem. Protopipe has a way of answering this kind of questions.

In this tutorial we will analyze the effect of the *batch size* and the *learning rate* on the training process.

Press the *Create card* button, navigate to **Parameters** and press **Integer parameter**. A new dialog will appear asking for the name of this parameter.

![Dialog asking for the name of the parameter](assets/img/tutorials/neural_networks/training_6.png)

Write "Batch size" and press **Set**. A new [Integer parameter](cards/parameterInteger) card will appear in the blueprint.

Connect the **Value** output from [Integer parameter](cards/parameterInteger) to the **Batch size** input of [Train neural network](cards/trainNeuralNetwork).

![Current pipeline](assets/img/tutorials/neural_networks/training_7.png)

We must specify a domain of possible values for this parameter. In this tutorial we will try 8, 16 and 32, so set **Domain** to "8, 16, 32" in [Integer parameter](cards/parameterInteger).

!["Integer parameter" card configured](assets/img/tutorials/neural_networks/training_8.png)

Now we will do the same for *learning rate*. Press the *Create card* button, navigate to **Parameters** and press **Float parameter**. Name this parameter "Learning rate".

Connect the **Value** output from [Float parameter](cards/parameterFloat) to the **Learning rate** input of [Create SGD neural network optimizer](cards/createSGDNeuralNetworkOptimizer).

![Current pipeline](assets/img/tutorials/neural_networks/training_9.png)

The domain of possible values for this parameter will be between 0.01 and 0.15, so set **Domain** to "0.01:0.15" in [Float parameter](cards/parameterFloat).

!["Float parameter" card configured](assets/img/tutorials/neural_networks/training_10.png)

Finally, in order to store the validation loss in our final report, we need to *return* it. Press the *Create card* button, navigate to **Returns** and press **Return float**. A new dialog will appear asking for the name of this return value.

Write "Validation loss" and press **Set**. A new [Return float](cards/returnFloat) card will appear in the blueprint.

Finally, connect the **Validation loss** output from [Train neural network](cards/trainNeuralNetwork) to the **Value** input of [Return float](cards/returnFloat).

![Current pipeline](assets/img/tutorials/neural_networks/training_11.png)

We are ready to run the pipeline.

### 5. Running the pipeline

Press the *Fine tune settings* button on the top bar.

!["Fine tune settings" button](assets/img/work_screen/tune_4.png)

A new panel will appear at the right side of the screen.

!["Fine tune settings" panel](assets/img/tutorials/neural_networks/experimenting_1.png)

In **Assignation of the values** choose "Brute-force" and then set "5 samples" for the **Learning rate** float parameter.

!["Fine tune settings" panel](assets/img/tutorials/neural_networks/experimenting_2.png)

Press the *Start processing* button to run all the experiments.

!["Start processing" button](assets/img/work_screen/process_1.png)

A new panel will appear at the right side of the screen, showing real-time information about the state of the processing.

!["Processing" panel](assets/img/work_screen/process_2.png)

When the processing successfully finishes a new dialog will appear.

!["Processing finished" dialog](assets/img/tutorials/neural_networks/experimenting_3.png)

Press **See report** to open the *Reports screen*, that will contain a table that summarizes all the experiments performed.

![Table of performed experiments](assets/img/tutorials/neural_networks/experimenting_4.png)

Sort the table by "Validation loss" in descending order to check what model performed better.

![Table of performed experiments sorted by mean accuracy](assets/img/tutorials/neural_networks/experimenting_5.png)

### 6. Analysis

On the left side panel, under the most recent report node, press **Cross-sectional analysis**.

![Cross-sectional analysis screen](assets/img/tutorials/neural_networks/analysis_1.png)

In this screen you can compare the effect of a parameter (X axis) on a return value (Y axis).

For example, here we can see how the *Learning rate* affects *Validation loss*:

![Learning rate vs. Validation loss](assets/img/tutorials/neural_networks/analysis_2.png)

### 7. Conclusion

In this tutorial we designed a pipeline for training and testing a classifier and analyzed the obtained results after performing multiple experiments with different combinations of hyperparameter values.

This tutorial can be extended by fine tuning other parameters or generating reports with the accuracy obtained for each class separately.