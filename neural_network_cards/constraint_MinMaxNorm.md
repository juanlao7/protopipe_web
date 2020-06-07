---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Min max norm constraint</li>
</ul>

## Min max norm constraint

This card is a wrapper of [this](https://keras.io/api/layers/constraints/#minmaxnorm-class) Keras class.

!["Min max norm constraint" card](assets/img/neural_network_cards/constraint_MinMaxNorm.png)


### Inputs


* **Min value** --- [Float](types/Float)

  The minimum norm for the incoming weights.

* **Max value** --- [Float](types/Float)

  The maximum norm for the incoming weights.

* **Rate** --- [Float](types/Float)

  Rate for enforcing the constraint: weights will be rescaled to yield `(1 - rate) * norm + rate * norm.clip(min_value, max_value)`. Effectively, this means that **Rate** = "1.0" stands for strict enforcement of the constraint, while **Rate** < "1.0" means that weights will be rescaled at each step to slowly move towards a value inside the desired interval.

* **Axes** --- List of [Integer](types/Integer)

  Axis along which to calculate weight norms. For instance, in a Dense layer the weight matrix has shape (`input_dim`, `output_dim`), set **Axes** to "0" to constrain each weight vector of length (`input_dim`,). In a Convolution 2D layer with **Data format** = "Channels last", the weight tensor has shape (`rows`, `cols`, `input_depth`, `output_depth`), set **Axes** to "0, 1, 2" to constrain the weights of each filter tensor of size (`rows`, `cols`, `input_depth`).





### Outputs


* **Constraint instance** --- [NeuralNetworkConstraint](types/NeuralNetworkConstraint)

  Instance of the constraint.






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.