## Train SLAVE

[foto card]

Trains and returns a fuzzy logic model, [SLAVE: a genetic learning system based on an iterative approach](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.379.2735&rep=rep1&type=pdf).

### Inputs

* **Training X** --- [Tensor](types/Tensor.html)  
  2D tensor (a.k.a. table) containing the training inputs.

* **Training Y** --- [Tensor](types/Tensor.html)  
  2D tensor (a.k.a. table) containing the target outputs.

* **Number of labels** --- [Integer](types/Integer.html)  
  TODO

* **Population size** --- [Integer](types/Integer.html)  
  TODO

* **Mutation probability** --- [Float](types/Float.html)  
  TODO

* **Use rule weights** --- [Boolean](types/Boolean.html)  
  TODO

* **Max. iterations without improvement** --- [Integer](types/Integer.html)  
  TODO

### Outputs

* **Model** --- [DynamicObject](types/DynamicObject.html)  
  The trained model.
