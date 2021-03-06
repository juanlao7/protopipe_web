---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>Evaluate multi-output neural network model</li>
</ul>

## Evaluate multi-output neural network model

Returns the loss value and the metric values for a multi-output model in test mode. Computation is done in batches.

!["Evaluate multi-output neural network model" card](assets/img/cards/evaluateMultiOutputNeuralNetworkModel.png)


### Inputs


* **Model** --- [DynamicObject](types/DynamicObject)

  The trained model to evaluate.

* **Testing X** --- [Tensor](types/Tensor)

  Test input data.

* **Testing Y** --- [DynamicObject](types/DynamicObject)

  A DynamicObject mapping the output names of the neural network to the correspoding test output data.

* **Batch size** --- [Integer](types/Integer)

  Number of samples per batch of computation.





### Outputs


* **Loss** --- [Float](types/Float)

  Test loss of the model, taking all outputs into account.

* **Loss of each output** --- [DynamicObject](types/DynamicObject)

  A DynamicObject mapping the output names to corresponding individual test loss (Float).

* **Metric values** --- [DynamicObject](types/DynamicObject)

  A DynamicObject mapping metric names to their corresponding value (Float).




