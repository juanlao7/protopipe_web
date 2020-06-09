---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Activity regularization layer</li>
</ul>

## Activity regularization layer

This card is a wrapper of [this](https://keras.io/api/layers/regularization_layers/activity_regularization/) Keras class.

!["Activity regularization layer" card](assets/img/neural_network_cards/layer_ActivityRegularization.png)

**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.


### Inputs


* **L1** --- [Float](types/Float)

  L1 regularization factor (positive float).

* **L2** --- [Float](types/Float)

  L2 regularization factor (positive float).

* **Input** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Input of this layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.




