---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>Evaluate multi-input neural network model</li>
</ul>

## Evaluate multi-input neural network model

Returns the loss value and the metric values for a multi-input model in test mode. Computation is done in batches.

!["Evaluate multi-input neural network model" card](assets/img/cards/evaluateMultiInputNeuralNetworkModel.png)


### Inputs


* **Model** --- [DynamicObject](types/DynamicObject)

  The trained model to evaluate.

* **Testing X** --- [DynamicObject](types/DynamicObject)

  A DynamicObject mapping the input names of the neural network to the correspoding test input data.

* **Testing Y** --- [Tensor](types/Tensor)

  Test output data.

* **Batch size** --- [Integer](types/Integer)

  Number of samples per batch of computation.





### Outputs


* **Loss** --- [Float](types/Float)

  Test loss of the model.

* **Metric values** --- [DynamicObject](types/DynamicObject)

  A DynamicObject mapping metric names to their corresponding value (Float).




