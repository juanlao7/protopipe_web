---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Zero padding 2D layer</li>
</ul>

## Zero padding 2D layer

This card is a wrapper of [this](https://keras.io/api/layers/reshaping_layers/zero_padding2d/) Keras class.

!["Zero padding 2D layer" card](assets/img/neural_network_cards/layer_ZeroPadding2D.png)


### Inputs


* **At the beginning of dimension 1** --- [Integer](types/Integer)

  How many zeros to add at the beginning of the padding dimension (axis 1).

* **At the end of dimension 1** --- [Integer](types/Integer)

  How many zeros to add at the end of the padding dimension (axis 1).

* **At the beginning of dimension 2** --- [Integer](types/Integer)

  How many zeros to add at the beginning of the padding dimension (axis 2).

* **At the end of dimension 2** --- [Integer](types/Integer)

  How many zeros to add at the end of the padding dimension (axis 2).

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