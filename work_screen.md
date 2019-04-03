## Work screen

[foto work screen]

In this screen you can design and test a pipeline for your machine learning experiments.

If you feel more confortable following a tutorial, open [this link](TODO).

This is page explains how to use the graphical interface of this screen. If you are more interested in knowing the basics of Protopipe, open [this page](basics.html).

### Create a card

Right click on an empty place of the blueprint or press this button:

[foto boton +]

The card menu will appear.

In the **Data** tab you will be able to upload files of any type, that supuestamente contain datasets for your experiments. After uploading a file, you can click on it and the system will create an _Open file_ card, that returns a FileStream that can be readed with another card (e.g. _Read as CSV_).

[foto tab Data]

[foto open file conectado a read as csv]

In the **Modules** tab you will see a catalog of all the cards available in the system, classified in a tree. If you click on a module, the card will be created in the blueprint.

[foto tab modules]

### Select cards

Select the desired card by clicking on it (press `Ctrl` while clicking to select multiple cards) or simply surround them with a rectangle.

[gif click para seleccionar]

[gif seleccion rectangular]

### Remove cards

Select all the desired cards you want to remove (see [ref]) and press this button on the top bar:

[foto boton borrar]

### Connect two cards

Simply drag & drop the input socket of one card into the output socket of another, or viceversa.

[gif connect 2 cards]

Please, note that both sockets must be of the same type (same color and shape). Otherwise the system will do absolutely nothing.

### Remove a connection

Drag & drop the **input** of the card into an empty place of the blueprint.

[gif remove connection]

Do not drag the **output** of the other card, because that would only create a new connection instead.

### Create an Event listener card

[gif crear event card]

To create an [Event](types/Event.html) listener card, simply drag & drop the [Event](types/Event.html) socket into any empty space of the blueprint. The system will automatically create a listener card.

### Create a Callback card

TODO

### Provide an input directly

TODO

### Preview the output of a card

Select the card that has the output you want to preview (see [ref]) and press this button:

[foto boton preview]

If the card has multiple outputs, a menu will appear and you will have to click on the desired item.

After that, a new dialog will appear containing a small portion of the data.

[foto dialogo preview]

For some types of data, the system will show a button for obtaining more information (e.g., the number of rows and columns in a table):

[foto boton more info]

### Process the project

Click on this button:

[foto boton play]

A new panel will appear at the side of the screen. It contains some live information about the state of the processing.

[foto panel]

After the process finishes, a dialog will appear:

[foto dialog success]

If the process stops prematurely, due to a manual stop or an internal error of the system, this dialog is shown:

[foto dialog error]

You can stop the process whenever you want by clicking this button:

[foto stop]

Note that during the processing the project is not editable. Stop the process to make any change.

### Tune parameters automatically

To let the system find an optimal value for a parameter, first create a parameter card.

For example, create a _Integer parameter_ card:

[foto menu modules]

The system will ask you to give it a name. Write something descriptive; for instance, "Population size".

[foto dialogo nombre]

This card will appear:

[foto card int param]

Now it's time to define the domain of the parameter. In this example we will choose from 5 to 11:

[foto card int param con domain 5:11]

Connect the output of the new card to wherever you want to use it. For instance, let's connect it to the _Train SLAVE_ card:

[foto int parameter conectado a train slave]

When the pipeline contains optimizable parameters, the top bar shows a button for adjusting the tuning:

[foto boton tune]

If you press it, a new panel appears at the side of the screen:

[foto panel tune]

Here you can choose what optimization method you want to use. Each method has its own settings.

For instance, let's choose **Bruteforce**:

[foto bruteforce]

This method will try every possible value of the domain of the parameters.

As you can see, it is possible to choose how many samples from the parameter's domain we want to try. Let's write "3" for our parameter.

If we process the project (see [ref]), the system will perform 3 experiments:

[foto table Population size 5, 8, 11 & result]

Note that the system chooses a uniform distribution of samples from the specified domain.

If we had another optimizable parameter with 5 samples, the system would try every possible combination of both parameters, resulting in 15 experiments.

### Analyze the results

After the project has been processed (see [ref]), the system generates a report and this button is shown in the top bar:

[foto boton reports]

If you click it, it opens the report screen. Please, continue reading there [ref].
