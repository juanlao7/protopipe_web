---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Permute layer</li>
</ul>

## Permute layer

This card is a wrapper of [this](https://keras.io/api/layers/reshaping_layers/permute/) Keras class.

!["Permute layer" card](assets/img/neural_network_cards/layer_Permute.png)

**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.


### Inputs


* **Dims** --- List of [Integer](types/Integer)

  Permutation pattern does not include the samples dimension. Indexing starts at 1. For instance, "2, 1" permutes the first and second dimensions of the input.

* **Input** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Input of this layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.




