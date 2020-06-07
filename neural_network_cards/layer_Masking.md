---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>Masking layer</li>
</ul>

## Masking layer

This card is a wrapper of [this](https://keras.io/api/layers/core_layers/masking/) Keras class.

!["Masking layer" card](assets/img/neural_network_cards/layer_Masking.png)


### Inputs


* **Mask value** --- [Float](types/Float)

  For each timestep in the input tensor (dimension #1 in the tensor), if all values in the input tensor at that timestep are equal to **Mask value**, then the timestep will be masked (skipped) in all downstream layers (as long as they support masking).

* **Input** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Input of this layer.





### Outputs


* **Layer instance** --- [NeuralNetworkLayer](types/NeuralNetworkLayer)

  Instance of this layer. It can be wrapped using a Bidirectional or a TimeDistributed wrapper.

* **Output** --- [NeuralNetworkTensor](types/NeuralNetworkTensor)

  Output of this layer.






**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.