---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>Create SGD neural network optimizer</li>
</ul>

## Create SGD neural network optimizer

Instantiates a Stochastic Gradient Descent optimizer, used for training neural networks.

!["Create SGD neural network optimizer" card](assets/img/cards/createSGDNeuralNetworkOptimizer.png)


### Inputs


* **Learning rate** --- [Float](types/Float)

  The learning rate.

* **Momentum** --- [Float](types/Float)

  An hyperparameter equal or grater than 0 that accelerates gradient descent in the relevant direction and dampens oscillations.

* **Apply Nesterov momentum** --- [Boolean](types/Boolean)

  Whether to apply Nesterov momentum.

* **Clip norm** --- [Float](types/Float)

  If a value is provided, all parameter gradients will be clipped to a maximum norm of **Clip norm**.

* **Clip value** --- [Float](types/Float)

  If a value is provided, all parameter gradients will be clipped to a maximum value of **Clip value** and a minimum value of minus **Clip value**.





### Outputs


* **Optimizer** --- [NeuralNetworkOptimizer](types/NeuralNetworkOptimizer)

  Resulting optimizer instance.




