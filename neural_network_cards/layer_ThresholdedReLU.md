---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Thresholded ReLU layer</li>
</ul>

## Thresholded ReLU layer

This card is a wrapper of [this](https://keras.io/api/layers/activation_layers/threshold_relu/) Keras class.

!["Thresholded ReLU layer" card](assets/img/neural_network_cards/layer_ThresholdedReLU.png)

**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.


### Inputs


* **Theta** --- [Float](types/Float)

  Threshold location of activation, equal or greater than 0.

* **Input** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Input of this layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.




