---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Alpha dropout layer</li>
</ul>

## Alpha dropout layer

This card is a wrapper of [this](https://keras.io/api/layers/regularization_layers/alpha_dropout/) Keras class.

!["Alpha dropout layer" card](assets/img/neural_network_cards/layer_AlphaDropout.png)

**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.


### Inputs


* **Rate** --- [Float](types/Float)

  Between 0 and 1. Fraction of the input units to drop. The multiplicative noise will have standard deviation `sqrt(rate / (1 - rate))`.

* **Seed** --- [Integer](types/Integer)

  Random seed.

* **Input** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Input of this layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.




