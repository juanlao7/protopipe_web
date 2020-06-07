---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Variance scaling initializer</li>
</ul>

## Variance scaling initializer

This card is a wrapper of [this](https://keras.io/api/layers/initializers/#variancescaling-class) Keras class.

!["Variance scaling initializer" card](assets/img/neural_network_cards/initializer_VarianceScaling.png)


### Inputs


* **Scale** --- [Float](types/Float)

  Scaling factor (positive float).

* **Mode** --- [String](types/String)

  

* **Distribution** --- [String](types/String)

  Random distribution to use.

* **Seed** --- [Integer](types/Integer)

  Random seed.





### Outputs


* **Initializer instance** --- [NeuralNetworkInitializer](types/NeuralNetworkInitializer)

  Instance of the initializer.






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.