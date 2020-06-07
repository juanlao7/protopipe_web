---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Cropping 3D layer</li>
</ul>

## Cropping 3D layer

This card is a wrapper of [this](https://keras.io/api/layers/reshaping_layers/cropping3d/) Keras class.

!["Cropping 3D layer" card](assets/img/neural_network_cards/layer_Cropping3D.png)


### Inputs


* **At the beginning of dimension 1** --- [Integer](types/Integer)

  How many units should be trimmed off at the beginning of the cropping dimension (axis 1).

* **At the end of dimension 1** --- [Integer](types/Integer)

  How many units should be trimmed off at the end of the cropping dimension (axis 1).

* **At the beginning of dimension 2** --- [Integer](types/Integer)

  How many units should be trimmed off at the beginning of the cropping dimension (axis 2).

* **At the end of dimension 2** --- [Integer](types/Integer)

  How many units should be trimmed off at the end of the cropping dimension (axis 2).

* **At the beginning of dimension 3** --- [Integer](types/Integer)

  How many units should be trimmed off at the beginning of the cropping dimension (axis 3).

* **At the end of dimension 3** --- [Integer](types/Integer)

  How many units should be trimmed off at the end of the cropping dimension (axis 3).

* **Data format** --- [String](types/String)

  The ordering of the dimensions in the inputs.

* **Input** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Input of this layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.