---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Dot layer (2 inputs)</li>
</ul>

## Dot layer (2 inputs)



!["Dot layer (2 inputs)" card](assets/img/neural_network_cards/mergeLayer2_Dot.png)


### Inputs


* **Axes** --- List of [Integer](types/Integer)

  Axes along which the merge is applied.

* **Normalize** --- [Boolean](types/Boolean)

  

* **Input A** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  

* **Input B** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.