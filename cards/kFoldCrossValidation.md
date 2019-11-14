<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="help.html">Help index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>K-fold cross-validation</li>
</ul>

## K-fold cross-validation

Performs a [k-fold cross-validation](https://en.wikipedia.org/wiki/Cross-validation_(statistics)#k-fold_cross-validation).

!["K-fold cross-validation" card](assets/img/cards/kFoldCrossValidation.png)


### Inputs


* **K** --- [Integer](types/Integer.html)

  Number of subsamples to partition the data.

* **Data** --- [Tensor](types/Tensor.html)

  Data to partition.







### Events


#### On each fold

Triggered `K` times, one for each fold.


Event outputs:


* **Training** --- [Tensor](types/Tensor.html)

  Training data, of size `Data.size * (k - 1) / k`.

* **Testing** --- [Tensor](types/Tensor.html)

  Testing data, of size `Data.size * 1 / k`.





#### On finish

Triggered after all folds have been processed.





