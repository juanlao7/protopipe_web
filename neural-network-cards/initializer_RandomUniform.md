---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural-network-cards/">Index of cards for building neural networks</a></li>
    <li>Random uniform initializer</li>
</ul>

## Random uniform initializer



!["Random uniform initializer" card](assets/img/neural-network-cards/initializer_RandomUniform.png)


### Inputs


* **Minval** --- [Float](types/Float)

  Lower bound of the range of random values to generate (inclusive).

* **Maxval** --- [Float](types/Float)

  Upper bound of the range of random values to generate (exclusive).

* **Seed** --- [Integer](types/Integer)

  Random seed.





### Outputs


* **Initializer instance** --- [NeuralNetworkInitializer](types/NeuralNetworkInitializer)

  Instance of an initializer.






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.