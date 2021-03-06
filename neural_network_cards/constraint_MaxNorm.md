---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Max norm constraint</li>
</ul>

## Max norm constraint

This card is a wrapper of [this](https://keras.io/api/layers/constraints/#maxnorm-class) Keras class.

!["Max norm constraint" card](assets/img/neural_network_cards/constraint_MaxNorm.png)

**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.


### Inputs


* **Max value** --- [Float](types/Float)

  The maximum norm value for the incoming weights.

* **Axes** --- List of [Integer](types/Integer)

  Axis along which to calculate weight norms. For instance, in a Dense layer the weight matrix has shape (`input_dim`, `output_dim`), set **Axes** to "0" to constrain each weight vector of length (`input_dim`,). In a Convolution 2D layer with **Data format** = "Channels last", the weight tensor has shape (`rows`, `cols`, `input_depth`, `output_depth`), set **Axes** to "0, 1, 2" to constrain the weights of each filter tensor of size (`rows`, `cols`, `input_depth`).





### Outputs


* **Constraint instance** --- [NeuralNetworkConstraint](types/NeuralNetworkConstraint)

  Instance of the constraint.




