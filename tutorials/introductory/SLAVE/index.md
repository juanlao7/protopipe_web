<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="help.html">Help index</a></li>
    <li>Wine classification with SLAVE, a genetic fuzzy system</li>
</ul>

## Wine classification with SLAVE, a genetic fuzzy system

In this tutorial we will train and test a genetic fuzzy system for classifying the [Wine Data Set](http://archive.ics.uci.edu/ml/datasets/Wine) from the UCI Machine Learning Repository.

For this tutorial we are going to use *[SLAVE: a genetic learning system based on an iterative approach](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.379.2735&rep=rep1&type=pdf)*. The training process has some parameters that can be tuned, such as the population size or the mutation probability.

The performance of the model will be determined by averaging all the accuracy measures obtained in a 5-fold cross-validation. This mark will be used to automatically fine tune some parameters of the model.

### 1. Create a new project

![Empty projects screen](assets/img/projects_screen/introduction_1.png)

In the [projects screen](projects_screen.html), press the *Create new project* button.

!["Create new project" button](assets/img/projects_screen/create_1.png)

Write a name for the project.

!["Create new project" dialog](assets/img/projects_screen/create_2.png)

And press **Start**.

Now the [work screen](work_screen.html) will appear.

![Empty work screen](assets/img/work_screen/introduction_1.png)

### 2. Upload the data

Download the file `wine.data` from [here](tutorials/introductory/SLAVE/wine.data).

Now we need to upload the file to the project. Press the *Create card* button.

!["Create card" button](assets/img/work_screen/create_1.png)

Press **Upload file** and select the file you just downloaded. A new entry, **wine.data**, will appear in the menu.

[foto de tab Data con wine.data]

Press the **wine.data** entry to create an [Open file](cards/openFile.html) card.

[foto openFile("wine.data")]

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

[foto menu modules con Files and formats abierto y Read as CSV seleccionado]

A new [Read as CSV](cards/readAsCSV.html) card will appear in the blueprint.

!["Read as CSV" card](assets/img/cards/readAsCSV.png)

Connect the **Stream** output from [Open file](cards/openFile.html) to the **Stream** input of [Read as CSV](cards/readAsCSV.html).

[foto conectadas]

Now we just have to configure the parameters of the CSV reader---delimiter and header row(s)---. Getting a glimpse of the file contents can help us in this task.

Select the [Open file](cards/openFile.html) card by pressing on it and press the *Preview output* button on the top bar:

!["Preview output" button](assets/img/work_screen/preview_1.png)

A dialog will appear showing a preview of the contents of `wine.data`.

[foto preview]

As we can see, this file has no headers and the values are delimited by commas (,). This is the current configuration of our CVS reader, so it is ready to process the file.

Select the [Read as CSV](cards/readAsCSV.html) card and press the *Preview output* button on the top bar. The preview dialog will show a table this time.

[foto preview csv reader]

If we scroll down we will see that the dataset is sorted by the first column (the class). Performing a k-fold cross-validation in this state will lead to very poor results, since the training dataset will not contain the same classes as the test dataset in most cases.

We need to shuffle the dataset. Press the *Create card* button, navigate to **Tables** and press **Shuffle rows**.

[foto menu con Tables abierto y Shuffle rows seleccionado]

A new [Shuffle rows](cards/shuffleRows.html) card will appear.

![Shuffle rows](assets/img/cards/shuffleRows.png)

Connect the **Table** output from [Read as CSV](cards/readAsCSV.html) to the **Data** input of [Shuffle rows](cards/shuffleRows.html).

[foto conectadas]

If we get a preview of the **Shuffled** output, we can see that the table has been correctly shuffled.

[foto shuffled]

Now we are finally ready to perform the K-fold cross-validation.

Press the *Create card* button, navigate to **Validation** and press **K-fold cross-validation**.

Connect the **Shuffled** output from [Shuffle rows](cards/shuffleRows.html) to the **Data** input of [K-fold cross-validation](cards/kFoldCrossValidation.html).

[foto cartas conectadas]

As we can see, the [K-fold cross-validation](cards/kFoldCrossValidation.html) card already has a default value of 5 for K, exactly what we needed.

This card also triggers two different [events](basics.html#events): *On each fold*, that provides the training and testing [Tensors](types/Tensor.html) and *On finish*, that has no associated data.

### 4. Training the model

First of all we need to split the input and output of the training table. Press the *Create card* button, navigate to **Tables** and press **Split into X and Y by columns**.

Connect the **Training** output from [K-fold cross-validation](cards/kFoldCrossValidation.html) to the **Data** input of [Split into X and Y by columns](cards/splitIntoXAndYByColumns.html).

[foto cards conectadas]

We want to use columns 2 to 14 (indexes 1 to 13) for the input of our model and predict the value of the 1st column (index 0). Set **X column(s)** to "1:13" and **Y column(s)** to "0" in [Split into X and Y by columns](cards/splitIntoXAndYByColumns.html).

[foto split con los valores puestos]

LALALA

Now we have all the pieces needed for training the model. Open the card menu, select the **Modules** tab, navigate to **Models** --- **Fuzzy logic** and click on **Train SLAVE**.

Connect the [Train SLAVE classifier](cards/trainSLAVEClassifier.html) card like this:

[foto conexiones]

As we can see, the training process depends on some parameters that can be tunned. We don't know what combination of values lead to the model with the lowest error, or what effect each of them has on the overall performance, but that's not a problem. Protopipe has a way of answering this kind of questions.

In this tutorial we will try to analyze the effect of the population size and the mutation probability on the training process. Feel free to go forward and study the effect of any other parameter.

First of all, let's specify that the population size is a parameter. Open the card menu, select the **Modules** tab, navigate to **Parameters** and click on **Integer parameter**.

Name it "Population size":

[foto dialogo name]

Connect the [Integer parameter](cards/parameterInteger.html) card as follows:

[foto integer parameter conectado]

Now we must specify the domain of the values for this parameter. For instance, let's say that we want to try 10, 25, 50, 75 and 100. That would be:

[foto integer parameter con 10,25,50,75,100]

Now let's do the same with the mutation probability. Open the card menu, select the **Modules** tab, navigate to **Parameters** and click on **Float parameter**.

Name it "Mutation probability":

[foto dialogo name]

Connect the [Float parameter](cards/parameterFloat.html) card as follows:

[foto float parameter conectado]

This time let's specify that the domain of this parameter is between 0.1 and 0.9. That would be:

[foto float parameter con 0.1:0.9]

That's it!

### 5. Testing the model

First of all we need to split the input and output of the testing table, as we did with the training table.

Open the card menu, select the **Modules** tab, navigate to **Tables** and click on **Split into X and Y by columns**. Then connect the new card and assign the proper values for its inputs:

[foto split XY conectada y con inputs]

Now let's make the model predict the output of the testing dataset. Open the card menu, select the **Modules** tab, navigate to **Models** and click on **Predict**. Connect the cards as follows:

[foto predict conectada]

Take a look at the model's prediction. Select the [Predict](cards/predict.html) card and click on the preview button at the top bar.

[foto preview model predict]

The performance of the model will be determined by averaging the mean absolute error measure obtained in each fold. Open the card menu, select the **Modules** tab, navigate to **Loss functions** and click on **Mean absolute error**.

Connect the [Mean absolute error](cards/meanAbsoluteError.html) card as follows:

[foto MAD conectada]

The event listener card outputs a [Callback](types/Callback.html) that can be **called**. Drag & drop the socket of the **For each fold** card to an empty space of the blueprint.

[gif drag&drop]

Now connect the output of the [Mean absolute error](cards/meanAbsoluteError.html) card to the input of the **Report** callback:

[foto conexion]

Finally, average all the measures. Open the card menu, select the **Modules** tab, navigate to **Statistics** and click on **Mean**.

Connect the [Mean](cards/mean.html) card as follows:

[foto mean conectada]

Open the card menu, select the **Modules** tab, navigate to **Returns** and click on **Return float**.

Name it "Error":

[foto dialogo name]

Connect the [Return float](cards/returnFloat.html) card as follows:

[foto return float conectada]

All ready! We finished our pipeline.

### 6. Experimenting

Click on this button to start the experiment:

[foto boton play]

You will see something like this in the side panel:

[foto panel play]

When the process finishes, this dialog will appear:

[foto dialog finished]

Press **See report** to see a table that summarizes all the experiments performed.

[foto experiments]

You can sort the table by the "Error" column, in ascending order. Note that our best model got an error around XXXXXX.

[foto error]

Easy peasy.

### 7. Analysis

On the side panel, under the most recent report, click on **Cross-sectional analysis**.

[foto cross-sectional]

This will open an interactive chart where you can choose the parameter represented in the X-axis and the results represented in the Y-axis.

For example, here we see how the population size affects the performance of the model:

[foto chart]

### 8. Conclusions

In this tutorial we designed our own pipeline for training and testing a model for predicting the quality of white wine.

Our best model, with a population size of XXXX and a mutation probability of XXXXX, got an error of XXXX.
