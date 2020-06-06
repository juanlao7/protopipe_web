---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>Evaluate neural network model</li>
</ul>

## Evaluate neural network model

Returns the loss value and the metric values for a model in test mode. Computation is done in batches.

!["Evaluate neural network model" card](assets/img/cards/evaluateNeuralNetworkModel.png)


### Inputs


* **Model** --- [DynamicObject](types/DynamicObject)

  The trained model to evaluate.

* **Testing X** --- [Tensor](types/Tensor)

  Test input data.

* **Testing Y** --- [Tensor](types/Tensor)

  Test output data.

* **Batch size** --- [Integer](types/Integer)

  Number of samples per batch of computation.





### Outputs


* **Loss** --- [Float](types/Float)

  Test loss of the model.

* **Metric values** --- [DynamicObject](types/DynamicObject)

  A DynamicObject mapping metric names to their corresponding value (Float).




