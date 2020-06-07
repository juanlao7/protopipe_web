---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Attention layer</li>
</ul>

## Attention layer



!["Attention layer" card](assets/img/neural_network_cards/layer_Attention.png)


### Inputs


* **Use scale** --- [Boolean](types/Boolean)

  If "true", will create a scalar variable to scale the attention scores.

* **Causal** --- [Boolean](types/Boolean)

  Set to "true" for decoder self-attention. Adds a mask such that position `i` cannot attend to positions `j` > `i`. This prevents the flow of information from the future towards the past.

* **Dropout** --- [Float](types/Float)

  Between 0 and 1. Fraction of the units to drop for the attention scores.

* **Input** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Input of this layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.