---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>Train multi-IO neural network</li>
</ul>

## Train multi-IO neural network

Trains a multi-input & multi-output model for a fixed number of epochs (iterations on a dataset).

!["Train multi-IO neural network" card](assets/img/cards/trainMultiIONeuralNetwork.png)


### Inputs


* **Neural network** --- [NeuralNetwork](types/NeuralNetwork)

  The neural network to train.

* **Training X** --- [DynamicObject](types/DynamicObject)

  A DynamicObject mapping the input names of the neural network to the correspoding training input data.

* **Training Y** --- [DynamicObject](types/DynamicObject)

  A DynamicObject mapping the output names of the neural network to the correspoding training output data.

* **Optimizer** --- [NeuralNetworkOptimizer](types/NeuralNetworkOptimizer)

  Optimizer instance.

* **Loss** --- [DynamicObject](types/DynamicObject)

  A DynamicObject mapping the output names of the neural network to the corresponding objective function instance. If **Loss weights** is not specified, then the loss value that will be minimized by the model will then be the sum of all individual losses.

* **Metrics** --- [DynamicObject](types/DynamicObject)

  A DynamicObject mapping the output names of the neural network to a metric instance or a list of metric instances that will be evaluated by the model during training and testing.

* **Loss weights** --- [DynamicObject](types/DynamicObject)

  A DynamicObject mapping the output names of the neural network to scalar coefficients to weight the loss contributions to the final loss. The loss value that will be minimized by the model will then be the weighted sum of all individual losses.

* **Batch size** --- [Integer](types/Integer)

  Number of samples per gradient update.

* **Epochs** --- [Integer](types/Integer)

  Number of epochs to train the model. An epoch is an iteration over the entire **Training X** and **Training Y** data provided.

* **Validation split** --- [Float](types/Float)

  Between 0 and 1. Fraction of the training data to be used as validation data. The model will set apart this fraction of the training data, will not train on it, and will evaluate the loss and any model metrics on this data at the end of each epoch. The validation data is selected from the last samples in the x and y data provided, before shuffling. Note the fact that the validation loss of data provided using **Validation split** is not affected by regularization layers like noise and dropout.

* **Validation X** --- [DynamicObject](types/DynamicObject)

  Input data on which to evaluate the loss and any model metrics at the end of each epoch. The model will not be trained on this data. Note the fact that the validation loss of data provided using **Validation X** is not affected by regularization layers like noise and dropout. **Validation X** will override **Validation split**.

* **Validation Y** --- [DynamicObject](types/DynamicObject)

  Output data on which to evaluate the loss and any model metrics at the end of each epoch. The model will not be trained on this data.

* **Shuffle** --- [String](types/String)

  When to shuffle the training data.

* **Validation frequency** --- [Integer](types/Integer)

  Specifies how many training epochs to run before a new validation run is performed, e.g. **Validation frequency** = "2" runs validation every 2 epochs, Only relevant if validation data is provided.





### Outputs


* **History** --- [Tensor](types/Tensor)

  A record of training loss values and metrics values at successive epochs, as well as validation loss values and validation metrics values (if applicable).

* **Training loss** --- [Float](types/Float)

  Training loss of the model after the training, taking all outputs into account.

* **Training loss of each output** --- [DynamicObject](types/DynamicObject)

  A DynamicObject mapping the output names to corresponding individual training loss (Float) after the training.

* **Metric values** --- [DynamicObject](types/DynamicObject)

  A DynamicObject mapping metric names to their corresponding value (Float) on the training data after the training.

* **Validation loss** --- [Float](types/Float)

  Validation loss of the model after the training, taking all outputs into account.

* **Validation loss of each output** --- [DynamicObject](types/DynamicObject)

  A DynamicObject mapping the output names to corresponding individual validation loss (Float) after the training.

* **Validation metric values** --- [DynamicObject](types/DynamicObject)

  A DynamicObject mapping metric names to their corresponding value (Float) on the validation data after the training.

* **Model** --- [DynamicObject](types/DynamicObject)

  The trained model.




