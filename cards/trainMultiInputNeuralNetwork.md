---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>Train multi-input neural network</li>
</ul>

## Train multi-input neural network

Trains a multi-input model for a fixed number of epochs (iterations on a dataset).

!["Train multi-input neural network" card](assets/img/cards/trainMultiInputNeuralNetwork.png)


### Inputs


* **Neural network** --- [NeuralNetwork](types/NeuralNetwork)

  The neural network to train.

* **Training X** --- [DynamicObject](types/DynamicObject)

  A DynamicObject mapping the input names of the neural network to the correspoding training input data.

* **Training Y** --- [Tensor](types/Tensor)

  Training output data.

* **Optimizer** --- [NeuralNetworkOptimizer](types/NeuralNetworkOptimizer)

  Optimizer instance.

* **Loss** --- [NeuralNetworkLoss](types/NeuralNetworkLoss)

  Objective function instance that provides the loss value to minimize.

* **Metrics** --- List of [NeuralNetworkMetric](types/NeuralNetworkMetric)

  A list of metric instances that will be evaluated by the model during training and testing.

* **Batch size** --- [Integer](types/Integer)

  Number of samples per gradient update.

* **Epochs** --- [Integer](types/Integer)

  Number of epochs to train the model. An epoch is an iteration over the entire **Training X** and **Training Y** data provided.

* **Validation split** --- [Float](types/Float)

  Between 0 and 1. Fraction of the training data to be used as validation data. The model will set apart this fraction of the training data, will not train on it, and will evaluate the loss and any model metrics on this data at the end of each epoch. The validation data is selected from the last samples in the x and y data provided, before shuffling. Note the fact that the validation loss of data provided using **Validation split** is not affected by regularization layers like noise and dropout.

* **Validation X** --- [DynamicObject](types/DynamicObject)

  Input data on which to evaluate the loss and any model metrics at the end of each epoch. The model will not be trained on this data. Note the fact that the validation loss of data provided using **Validation X** is not affected by regularization layers like noise and dropout. **Validation X** will override **Validation split**.

* **Validation Y** --- [Tensor](types/Tensor)

  Output data on which to evaluate the loss and any model metrics at the end of each epoch. The model will not be trained on this data.

* **Shuffle** --- [String](types/String)

  When to shuffle the training data.

* **Validation frequency** --- [Integer](types/Integer)

  Specifies how many training epochs to run before a new validation run is performed, e.g. **Validation frequency** = "2" runs validation every 2 epochs, Only relevant if validation data is provided.





### Outputs


* **History** --- [Tensor](types/Tensor)

  A record of training loss values and metrics values at successive epochs, as well as validation loss values and validation metrics values (if applicable).

* **Loss** --- [Float](types/Float)

  Training loss of the model after the training.

* **Metric values** --- [DynamicObject](types/DynamicObject)

  A DynamicObject mapping metric names to their corresponding value (Float) on the training data after the training.

* **Validation loss** --- [Float](types/Float)

  Validation loss of the model after the training.

* **Validation metric values** --- [DynamicObject](types/DynamicObject)

  A DynamicObject mapping metric names to their corresponding value (Float) on the validation data after the training.

* **Model** --- [DynamicObject](types/DynamicObject)

  The trained model.




