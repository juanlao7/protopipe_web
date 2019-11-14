<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="help.html">Help index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>Accuracy</li>
</ul>

## Accuracy

Calculates the proportion of predictions that are equal to a ground truth.

!["Accuracy" card](assets/img/cards/accuracy.png)


### Inputs


* **Predictions** --- [Tensor](types/Tensor.html)

  2D tensor (a table) where each row is a prediction of one or multiple fields.

* **Target** --- [Tensor](types/Tensor.html)

  Ground truth.





### Outputs


* **Accuracy by class** --- [Tensor](types/Tensor.html)

  Proportion of predictions that are equal to the ground truth in all their columns, grouped by class.

* **Accuracy** --- [Float](types/Float.html)

  Proportion of predictions that are equal to the ground truth in all their columns.




