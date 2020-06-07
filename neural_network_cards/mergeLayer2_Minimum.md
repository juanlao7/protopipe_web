---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Minimum layer (2 inputs)</li>
</ul>

## Minimum layer (2 inputs)

This card is a wrapper of [this](https://keras.io/api/layers/merging_layers/minimum/) Keras class.

!["Minimum layer (2 inputs)" card](assets/img/neural_network_cards/mergeLayer2_Minimum.png)


### Inputs


* **Input A** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  First input of the merging layer.

* **Input B** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Second input of the merging layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.