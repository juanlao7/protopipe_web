---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Convolution 3D layer</li>
</ul>

## Convolution 3D layer

This card is a wrapper of [this](https://keras.io/api/layers/convolution_layers/convolution3d/) Keras class.

!["Convolution 3D layer" card](assets/img/neural_network_cards/layer_Conv3D.png)

**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.


### Inputs


* **Filters** --- [Integer](types/Integer)

  The dimensionality of the output space (i.e. the number of output filters in the convolution).

* **Kernel size** --- List of [Integer](types/Integer)

  A list of 3 integers, specifying the depth, height and width of the 3D convolution window.

* **Strides** --- List of [Integer](types/Integer)

  A list of 3 integers, specifying the strides of the convolution along the depth, height and width. Specifying any value different than "1" is incompatible with specifying any **Dilation rate** different than "1".

* **Padding** --- [String](types/String)

  The padding algorithm.

* **Data format** --- [String](types/String)

  The ordering of the dimensions in the inputs.

* **Dilation rate** --- List of [Integer](types/Integer)

  A list of 3 integers, specifying the dilation rate to use for dilated convolution. Specifying any value different than "1" is incompatible with specifying any **Strides** different than "1".

* **Use bias** --- [Boolean](types/Boolean)

  Whether the layer uses a bias vector.

* **Activation** --- [String](types/String)

  Activation function to use.

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




