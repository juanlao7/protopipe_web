---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural-network-cards/">Index of cards for building neural networks</a></li>
    <li>Up sampling 3D layer</li>
</ul>

## Up sampling 3D layer



!["Up sampling 3D layer" card](assets/img/neural-network-cards/layer_UpSampling3D.png)


### Inputs


* **Size** --- List of [Integer](types/Integer)

  List of 3 integers. The upsampling factors for dim1, dim2 and dim3.

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