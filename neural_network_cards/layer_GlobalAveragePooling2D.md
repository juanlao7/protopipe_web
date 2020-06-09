---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Global average pooling 2D layer</li>
</ul>

## Global average pooling 2D layer

This card is a wrapper of [this](https://keras.io/api/layers/pooling_layers/global_average_pooling2d/) Keras class.

!["Global average pooling 2D layer" card](assets/img/neural_network_cards/layer_GlobalAveragePooling2D.png)

**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.


### Inputs


* **Data format** --- [String](types/String)

  The ordering of the dimensions in the inputs.

* **Input** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Input of this layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.




