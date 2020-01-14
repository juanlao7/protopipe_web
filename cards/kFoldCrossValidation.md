<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>K-fold cross-validation</li>
</ul>

## K-fold cross-validation



!["K-fold cross-validation" card](assets/img/cards/kFoldCrossValidation.png)


### Inputs


* **K** --- [Integer](types/Integer)

  Number of subsamples to partition the data.

* **Data** --- [Tensor](types/Tensor)

  Data to partition.







### Events


#### On each fold

Triggered `K` times, one for each fold.


Event outputs:


* **Training** --- [Tensor](types/Tensor)

  Training data, of size `Data.size * (k - 1) / k`.

* **Testing** --- [Tensor](types/Tensor)

  Testing data, of size `Data.size * 1 / k`.





#### On finish

Triggered after all folds have been processed.





