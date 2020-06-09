---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Separable convolution 1D layer</li>
</ul>

## Separable convolution 1D layer

This card is a wrapper of [this](https://keras.io/api/layers/convolution_layers/separable_convolution1d/) Keras class.

!["Separable convolution 1D layer" card](assets/img/neural_network_cards/layer_SeparableConv1D.png)

**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.


### Inputs


* **Filters** --- [Integer](types/Integer)

  The dimensionality of the output space (i.e. the number of output filters in the convolution).

* **Kernel size** --- [Integer](types/Integer)

  The length of the 1D convolution window.

* **Strides** --- [Integer](types/Integer)

  The strides of the convolution. Specifying any value different than "1" is incompatible with specifying any **Dilation rate** different than "1".

* **Padding** --- [String](types/String)

  The padding algorithm.

* **Data format** --- [String](types/String)

  The ordering of the dimensions in the inputs.

* **Dilation rate** --- [Integer](types/Integer)

  The dilation rate to use for dilated convolution. Specifying any value different than "1" is incompatible with specifying any **Strides** different than "1".

* **Depth multiplier** --- [Integer](types/Integer)

  The number of depthwise convolution output channels for each input channel. The total number of depthwise convolution output channels will be equal to the number of input filters multiplied by **Depth multiplier**.

* **Activation** --- [String](types/String)

  Activation function to use.

* **Use bias** --- [Boolean](types/Boolean)

  Whether the layer uses a bias vector.

* **Depthwise initializer** --- [NeuralNetworkInitializer](types/NeuralNetworkInitializer)

  An initializer for the depthwise convolution kernel.

* **Pointwise initializer** --- [NeuralNetworkInitializer](types/NeuralNetworkInitializer)

  An initializer for the pointwise convolution kernel.

* **Bias initializer** --- [NeuralNetworkInitializer](types/NeuralNetworkInitializer)

  Initializer for the bias vector.

* **Depthwise regularizer** --- [NeuralNetworkRegularizer](types/NeuralNetworkRegularizer)

  Optional regularizer for the depthwise convolution kernel.

* **Pointwise regularizer** --- [NeuralNetworkRegularizer](types/NeuralNetworkRegularizer)

  Optional regularizer for the pointwise convolution kernel.

* **Bias regularizer** --- [NeuralNetworkRegularizer](types/NeuralNetworkRegularizer)

  Regularizer function applied to the bias vector.

* **Activity regularizer** --- [NeuralNetworkRegularizer](types/NeuralNetworkRegularizer)

  Regularizer function applied to the output of the layer (its "activation").

* **Depthwise constraint** --- [NeuralNetworkConstraint](types/NeuralNetworkConstraint)

  Optional projection function to be applied to the depthwise kernel after being updated by the optimizer (e.g. used for norm constraints or value constraints for layer weights). The function must take as input the unprojected variable and must return the projected variable (which must have the same shape). Constraints are not safe to use when doing asynchronous distributed training.

* **Pointwise constraint** --- [NeuralNetworkConstraint](types/NeuralNetworkConstraint)

  Optional projection function to be applied to the pointwise kernel after being updated by the optimizer.

* **Bias constraint** --- [NeuralNetworkConstraint](types/NeuralNetworkConstraint)

  Constraint function applied to the bias vector.

* **Input** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Input of this layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.




