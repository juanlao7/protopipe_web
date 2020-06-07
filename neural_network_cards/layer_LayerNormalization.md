---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Layer normalization layer</li>
</ul>

## Layer normalization layer



!["Layer normalization layer" card](assets/img/neural_network_cards/layer_LayerNormalization.png)


### Inputs


* **Axes** --- List of [Integer](types/Integer)

  The axis or axes to normalize across. Typically this is the features axis/axes. The left-out axes are typically the batch axis/axes. This argument defaults to -1, the last dimension in the input.

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






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.