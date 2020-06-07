---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Bidirectional layer wrapper</li>
</ul>

## Bidirectional layer wrapper

This card is a wrapper of [this](https://keras.io/api/layers/recurrent_layers/bidirectional/) Keras class.

!["Bidirectional layer wrapper" card](assets/img/neural_network_cards/layer_Bidirectional.png)


### Inputs


* **Layer** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  RNN layer to wrap.

* **Merge mode** --- [String](types/String)

  Mode by which outputs of the forward and backward RNNs will be combined. If "None", the outputs will not be combined, they will be returned as a list.

* **Input** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Input of this layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.