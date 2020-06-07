---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>ReLU layer</li>
</ul>

## ReLU layer



!["ReLU layer" card](assets/img/neural_network_cards/layer_ReLU.png)


### Inputs


* **Max value** --- [Float](types/Float)

  Maximum activation value, equal or greater than 0. If not specified, it means unlimited.

* **Negative slope** --- [Float](types/Float)

  Negative slope coefficient, equal or greater than 0.

* **Threshold** --- [Float](types/Float)

  Threshold value for thresholded activation.

* **Input** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Input of this layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.