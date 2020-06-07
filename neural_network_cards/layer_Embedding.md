---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Embedding layer</li>
</ul>

## Embedding layer

This card is a wrapper of [this](https://keras.io/api/layers/core_layers/embedding/) Keras class.

!["Embedding layer" card](assets/img/neural_network_cards/layer_Embedding.png)


### Inputs


* **Input dim** --- [Integer](types/Integer)

  Size of the vocabulary, i.e. maximum integer index + 1.

* **Output dim** --- [Integer](types/Integer)

  Dimension of the dense embedding.

* **Embeddings initializer** --- [NeuralNetworkInitializer](types/NeuralNetworkInitializer)

  Initializer for the embeddings matrix.

* **Activity regularizer** --- [NeuralNetworkRegularizer](types/NeuralNetworkRegularizer)

  Regularizer function applied to the output of the layer (its "activation").

* **Embeddings constraint** --- [NeuralNetworkConstraint](types/NeuralNetworkConstraint)

  Constraint function applied to the embeddings matrix.

* **Mask zero** --- [Boolean](types/Boolean)

  Whether or not the input value 0 is a special "padding" value that should be masked out. This is useful when using recurrent layers which may take variable length input. If "true", then all subsequent layers in the model need to support masking or an exception will be raised. If "true", as a consequence, index 0 cannot be used in the vocabulary (**Input dim** should equal size of vocabulary + 1).

* **Input length** --- [Integer](types/Integer)

  Length of input sequences, when it is constant. This argument is required if you are going to connect Flatten then Dense layers upstream (without it, the shape of the dense outputs cannot be computed).

* **Input** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Input of this layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.