---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Input</li>
</ul>

## Input



!["Input" card](assets/img/neural_network_cards/input.png)


### Inputs


* **Name** --- [String](types/String)

  Name to identify this input. Should be unique in a model (do not reuse the same name twice).

* **Shape** --- List of [Integer](types/Integer)

  A shape tuple (integers), not including the batch size. For instance, **Shape** = "32" indicates that the expected input will be batches of 32-dimensional vectors.





### Outputs


* **Data** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Data provided by this input.






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.