---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Batch normalization layer</li>
</ul>

## Batch normalization layer

This card is a wrapper of [this](https://keras.io/api/layers/normalization_layers/batch_normalization/) Keras class.

!["Batch normalization layer" card](assets/img/neural_network_cards/layer_BatchNormalization.png)

**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.


### Inputs


* **Axis** --- [Integer](types/Integer)

  The axis that should be normalized (typically the features axis). For instance, after a Convolution 2D layer with **Data format** = "Channels first", set **Axis** = "1".

* **Momentum** --- [Float](types/Float)

  Momentum for the moving average.

* **Epsilon** --- [Float](types/Float)

  Small float added to variance to avoid dividing by zero.

* **Center** --- [Boolean](types/Boolean)

  If "true", add offset of `beta` to normalized tensor. If "false", `beta` is ignored.

* **Scale** --- [Boolean](types/Boolean)

  If "true", multiply by `gamma`. If "false", `gamma` is not used. When the next layer is linear (also e.g. ReLU), this can be disabled since the scaling will be done by the next layer.

* **Beta initializer** --- [NeuralNetworkInitializer](types/NeuralNetworkInitializer)

  Initializer for the `beta` weight.

* **Gamma initializer** --- [NeuralNetworkInitializer](types/NeuralNetworkInitializer)

  Initializer for the `gamma` weight.

* **Moving mean initializer** --- [NeuralNetworkInitializer](types/NeuralNetworkInitializer)

  Initializer for the moving mean.

* **Moving variance initializer** --- [NeuralNetworkInitializer](types/NeuralNetworkInitializer)

  Initializer for the moving variance.

* **Beta regularizer** --- [NeuralNetworkRegularizer](types/NeuralNetworkRegularizer)

  Optional regularizer for the `beta` weight.

* **Gamma regularizer** --- [NeuralNetworkRegularizer](types/NeuralNetworkRegularizer)

  Optional regularizer for the `gamma` weight.

* **Beta constraint** --- [NeuralNetworkConstraint](types/NeuralNetworkConstraint)

  Optional constraint for the `beta` weight.

* **Gamma constraint** --- [NeuralNetworkConstraint](types/NeuralNetworkConstraint)

  Optional constraint for the `gamma` weight.

* **Input** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Input of this layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.




