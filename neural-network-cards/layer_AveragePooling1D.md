---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural-network-cards/">Index of cards for building neural networks</a></li>
    <li>Average pooling 1D layer</li>
</ul>

## Average pooling 1D layer



!["Average pooling 1D layer" card](assets/img/neural-network-cards/layer_AveragePooling1D.png)


### Inputs


* **Pool size** --- [Integer](types/Integer)

  Size of the pooling window.

* **Strides** --- [Integer](types/Integer)

  Specifies how much the pooling window moves for each pooling step. If not specified, it will default to **Pool size**.

* **Padding** --- [String](types/String)

  The padding algorithm.

* **Data format** --- [String](types/String)

  The ordering of the dimensions in the inputs.

* **Input** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Input of this layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.