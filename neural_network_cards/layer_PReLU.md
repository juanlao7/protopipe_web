---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Parametric ReLU layer</li>
</ul>

## Parametric ReLU layer

This card is a wrapper of [this](https://keras.io/api/layers/activation_layers/prelu/) Keras class.

!["Parametric ReLU layer" card](assets/img/neural_network_cards/layer_PReLU.png)


### Inputs


* **Alpha initializer** --- [NeuralNetworkInitializer](types/NeuralNetworkInitializer)

  Initializer function for the weights.

* **Alpha regularizer** --- [NeuralNetworkRegularizer](types/NeuralNetworkRegularizer)

  Regularizer for the weights.

* **Alpha constraint** --- [NeuralNetworkConstraint](types/NeuralNetworkConstraint)

  Constraint for the weights.

* **Shared axes** --- List of [Integer](types/Integer)

  The axes along which to share learnable parameters for the activation function. For example, if the incoming feature maps are from a 2D convolution with output shape (`batch`, `height`, `width`, `channels`), and you wish to share parameters across space so that each filter only has one set of parameters, set **Shared axes** = "1, 2".

* **Input** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Input of this layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.