<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="help.html">Help index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>Mean absolute error</li>
</ul>

## Mean absolute error

For two given tensors, returns the mean of the absolute value of the difference of each cell.

!["Mean absolute error" card](assets/img/cards/meanAbsoluteError.png)


### Inputs


* **Predictions** --- [Tensor](types/Tensor.html)

  2D tensor (a table) where each row is a prediction of one or multiple fields.

* **Target** --- [Tensor](types/Tensor.html)

  Ground truth.





### Outputs


* **Result** --- [Float](types/Float.html)

  Mean absolute error between the predictions and the ground truth.




