---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Locally connected 2D layer</li>
</ul>

## Locally connected 2D layer

This card is a wrapper of [this](https://keras.io/api/layers/locally_connected_layers/locall_connected2d/) Keras class.

!["Locally connected 2D layer" card](assets/img/neural_network_cards/layer_LocallyConnected2D.png)

**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.


### Inputs


* **Filters** --- [Integer](types/Integer)

  The dimensionality of the output space (i.e. the number of output filters in the convolution).

* **Kernel size** --- List of [Integer](types/Integer)

  A list of 2 integers, specifying the height and width of the 2D convolution window.

* **Strides** --- List of [Integer](types/Integer)

  A list of 2 integers, specifying the strides of the convolution along the height and width. Specifying any value different than "1" is incompatible with specifying any **Dilation rate** different than "1".

* **Data format** --- [String](types/String)

  The ordering of the dimensions in the inputs.

* **Activation** --- [String](types/String)

  Activation function to use.

* **Use bias** --- [Boolean](types/Boolean)

  Whether the layer uses a bias vector.

* **Kernel initializer** --- [NeuralNetworkInitializer](types/NeuralNetworkInitializer)

  Initializer for the kernel weights matrix. If not specified, then [Glorot uniform initializer](neural_network_cards/initializer_GlorotUniform) is used.

* **Bias initializer** --- [NeuralNetworkInitializer](types/NeuralNetworkInitializer)

  Initializer for the bias vector. If not specified, then [Zeros initializer](neural_network_cards/initializer_Zeros) is used.

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




