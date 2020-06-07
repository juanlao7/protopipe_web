<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="types/">Index of data types</a></li>
    <li>NeuralNetworkRegularizer</li>
</ul>

## NeuralNetworkRegularizer

This type represents a neural network layer weight regularizer instance.

Regularizers allow you to apply penalties on layer parameters or layer activity during optimization. These penalties are summed into the loss function that the network optimizes.

Regularization penalties are applied on a per-layer basis. The exact API will depend on the layer, but many layers (e.g. Dense, Convolution 1D, Convolution 2D and Convolution 3D) have a unified API.
