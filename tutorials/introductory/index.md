<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="help.html">Help index</a></li>
    <li>Quick introductory tutorial</li>
</ul>

## Quick introductory tutorial

In this tutorial we will train and test a model for [classifying wine](http://archive.ics.uci.edu/ml/datasets/Wine).

We will use a fuzzy logic model, *[SLAVE: a genetic learning system based on an iterative approach](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.379.2735&rep=rep1&type=pdf)*. The training process has some parameters that can be tuned, such as the population size or the mutation probability.

The performance of the model will be determined by averaging all the mean absolute error measures obtained in a 5-fold cross-validation. This mark will be used to automatically fine tune some parameters of the model.

### 1. Create a new project

[foto projects screen]

In the [projects screen](projects_screen.html), click this button:

[foto boton +]

Write a name for the project and click on **Start**.

[foto dialogo nombre]

This will open the [work screen](work_screen.html).

[foto work screen]

### 2. Upload the data

First download the file `winequality-white.csv` from [here](tutorials/introductory/winequality-white.csv).

Now click on this button:

[foto boton +]

Click on **Upload file** and select the file you just downloaded.

[foto menu cards]

Click on **winequality-white.csv**, the new entry that just appeared in the menu:

[foto menu data]

This will create a new [Open file](cards/openFile.html) card.

[foto openfile]

### 3. Prepare the data

The data we uploaded is a comma-separated values file that contains a table with the following columns:

1. fixed acidity
2. volatile acidity
3. citric acid
4. residual sugar
5. chlorides
6. free sulfur dioxide
7. total sulfur dioxide
8. density
9. pH
10. sulphates
11. alcohol
12. quality (score between 0 and 10)

Our model will take as input the first 11 columns and will give as output a prediction of the last column.

First of all we need to convert the file stream into a 2D tensor (also known as *table*). To do so, we just have to create a [Read as CSV](cards/readAsCSV.html) card.

Click on this button to open the card menu:

[foto boton +]

Select the **Modules** tab, navigate to **Files and formats** and click on **Read as CSV**.

[foto menu modules]

A new card will appear in the blueprint:

[foto readAsCSV]

Now connect the output of the [Open file](cards/openFile.html) to the input of [Read as CSV](cards/readAsCSV.html):

[foto conectadas]

Cool! Now we just have to configure the parameters of the CSV reader (delimiter and header line).

In order to do that we have to take a look at the file content. Select the [Open file](cards/openFile.html) card we created by clicking on it and press this button on the top bar:

[foto boton preview]

A dialog will show a preview of the contents of the file.

[foto preview]

As we can see, the first line of the file is the table header and the values are delimited by semicolons (;). Let's configure our CSV reader taking that into account:

[foto CSV reader configurado]

Note that line indexing starts at 0.

Let's take a look at the output of the [Read as CSV](cards/readAsCSV.html) card, as we previously did with the [Open file](cards/openFile.html) card: select the [Read as CSV](cards/readAsCSV.html) card by clicking on it and press the preview button at the top bar.

[foto preview csv reader]

As we can see, all the columns of the table already have the correct type assigned ([Float](types/Float.html) or [Integer](types/Integer.html)). We are ready to perform the K-fold cross-validation.

To do so, open the card menu, select the **Modules** tab, navigate to **Validation** and click on **K-fold cross-validation**.

Connect the cards like this:

[foto 3 cartas conectadas]

As we can see, the [K-fold cross-validation](cards/kFoldCrossValidation.html) card sets a default value for K of 5---that's exactly what we needed!

This card also outputs an [Event](types/Event.html) that can be **listened**. Drag & drop the socket of the card to an empty space of the blueprint.

[gif drag&drop]

The event is called on each fold, and it provides 2 [Tensors](types/Tensor.html): the training and the testing dataset. Now we are ready to train and test the model.

### 4. Training the model

First of all we need to split the input and output of the training table. To do so, we must use a [Split into X and Y by columns](cards/splitIntoXAndYByColumns.html) card.

Open the card menu, select the **Modules** tab, navigate to **Tables** and click on **Split into X and Y by columns**. Then connect the new card:

[foto card conectada]

We want to use the first 11 cards for the input of our model and predict the value of the 12th, so we must set the inputs of the cards like this:

[foto inputs card]

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
