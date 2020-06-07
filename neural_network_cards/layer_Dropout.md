---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Dropout layer</li>
</ul>

## Dropout layer



!["Dropout layer" card](assets/img/neural_network_cards/layer_Dropout.png)


### Inputs


* **Rate** --- [Float](types/Float)

  Between 0 and 1. Fraction of the input units to drop.

* **Noise shape** --- List of [Integer](types/Integer)

  The shape of the binary dropout mask that will be multiplied with the input. For instance, if your inputs have shape (`batch_size`, `timesteps`, `features`) and you want the dropout mask to be the same for all timesteps, you can use **Noise shape** = "`batch_size`, 1, `features`".

* **Seed** --- [Integer](types/Integer)

  Random seed.

* **Input** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Input of this layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.