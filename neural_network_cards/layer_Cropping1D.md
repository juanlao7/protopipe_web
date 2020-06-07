---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Cropping 1D layer</li>
</ul>

## Cropping 1D layer

This card is a wrapper of [this](https://keras.io/api/layers/reshaping_layers/cropping1d/) Keras class.

!["Cropping 1D layer" card](assets/img/neural_network_cards/layer_Cropping1D.png)


### Inputs


* **At the beginning** --- [Integer](types/Integer)

  How many units should be trimmed off at the beginning of the cropping dimension (axis 1).

* **At the end** --- [Integer](types/Integer)

  How many units should be trimmed off at the end of the cropping dimension (axis 1).

* **Input** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Input of this layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.