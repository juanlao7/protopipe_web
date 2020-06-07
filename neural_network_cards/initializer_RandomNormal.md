---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Random normal initializer</li>
</ul>

## Random normal initializer

This card is a wrapper of [this](https://keras.io/api/layers/initializers/#randomnormal-class) Keras class.

!["Random normal initializer" card](assets/img/neural_network_cards/initializer_RandomNormal.png)


### Inputs


* **Mean** --- [Float](types/Float)

  Mean of the random values to generate.

* **Stddev** --- [Float](types/Float)

  Standard deviation of the random values to generate.

* **Seed** --- [Integer](types/Integer)

  Random seed.





### Outputs


* **Initializer instance** --- [NeuralNetworkInitializer](types/NeuralNetworkInitializer)

  Instance of the initializer.






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.