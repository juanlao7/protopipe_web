---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Convolution 1D layer</li>
</ul>

## Convolution 1D layer



!["Convolution 1D layer" card](assets/img/neural_network_cards/layer_Conv1D.png)


### Inputs


* **Filters** --- [Integer](types/Integer)

  The dimensionality of the output space (i.e. the number of output filters in the convolution).

* **Kernel size** --- [Integer](types/Integer)

  The length of the 1D convolution window.

* **Strides** --- [Integer](types/Integer)

  The strides of the convolution. Specifying any value different than "1" is incompatible with specifying any **Dilation rate** different than "1".

* **Padding** --- [String](types/String)

  The padding algorithm. "Causal" results in causal (dilated) convolutions, useful when modeling temporal data where the model should not violate the temporal order.

* **Data format** --- [String](types/String)

  The ordering of the dimensions in the inputs.

* **Dilation rate** --- [Integer](types/Integer)

  The dilation rate to use for dilated convolution. Specifying any value different than "1" is incompatible with specifying any **Strides** different than "1".

* **Activation** --- [String](types/String)

  Activation function to use.

* **Use bias** --- [Boolean](types/Boolean)

  Whether the layer uses a bias vector.

* **Kernel initializer** --- [NeuralNetworkInitializer](types/NeuralNetworkInitializer)

  Initializer for the kernel weights matrix.

* **Bias initializer** --- [NeuralNetworkInitializer](types/NeuralNetworkInitializer)

  Initializer for the bias vector.

* **Kernel regularizer** --- [NeuralNetworkRegularizer](types/NeuralNetworkRegularizer)

  Regularizer function applied to the kernel weights matrix.

* **Bias regularizer** --- [NeuralNetworkRegularizer](types/NeuralNetworkRegularizer)

  Regularizer function applied to the bias vector.

* **Activity regularizer** --- [NeuralNetworkRegularizer](types/NeuralNetworkRegularizer)

  Regularizer function applied to the output of the layer (its "activation").

* **Kernel constraint** --- [NeuralNetworkConstraint](types/NeuralNetworkConstraint)

  Constraint function applied to the kernel weights matrix.

* **Bias constraint** --- [NeuralNetworkConstraint](types/NeuralNetworkConstraint)

  Constraint function applied to the bias vector.

* **Input** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Input of this layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.