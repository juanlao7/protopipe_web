<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="help.html">Help index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>Train SLAVE classifier</li>
</ul>

## Train SLAVE classifier

Trains a classifier based on [SLAVE: a genetic learning system based on an iterative approach](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.379.2735&rep=rep1&type=pdf).

!["Train SLAVE classifier" card](assets/img/cards/trainSLAVEClassifier.png)


### Inputs


* **Training X** --- [Tensor](types/Tensor.html)

  Input data.

* **Training Y** --- [Tensor](types/Tensor.html)

  Target data.

* **Random seed** --- [Integer](types/Integer.html)

  Number used to initialize a pseudorandom number generator.

* **Number of labels** --- [Integer](types/Integer.html)

  Number of fuzzy sets used to describe each input variable.

* **Population size** --- [Integer](types/Integer.html)

  Number of individuals that compose each generation of the genetic algorithm.

* **Mutation probability** --- [Float](types/Float.html)

  Probability of mutating a gene in the genetic algorithm.

* **Iterations without change** --- [Integer](types/Integer.html)

  Number of iterations to wait without improving before stopping the genetic algorithm.

* **Use rule weights** --- [Boolean](types/Boolean.html)

  Take into account the weight of a rule for predicting the consequent of a set of antecedents.





### Outputs


* **Rules** --- [String](types/String.html)

  Textual representation of the generated rules.

* **Model** --- [DynamicObject](types/DynamicObject.html)

  Trained SLAVE classifier.




