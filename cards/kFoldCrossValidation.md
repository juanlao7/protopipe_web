## K-fold cross-validation

![K-fold cross-validation](assets/img/cards/kFoldCrossValidation.png)

Performs a [k-fold cross-validation](https://en.wikipedia.org/wiki/Cross-validation_(statistics)#k-fold_cross-validation).


### Inputs


* **K** --- [Integer](types/Integer.html)

  Number of subsamples to partition the data.

* **Data** --- [Tensor](types/Tensor.html)

  Data to partition.







### Events


#### On each fold

Event that gets triggered `K` times, one for each fold.


Event outputs:


* **Training** --- [Tensor](types/Tensor.html)

  Training data, of size `Data.size * (k - 1) / k`.

* **Testing** --- [Tensor](types/Tensor.html)

  Testing data, of size `Data.size * 1 / k`.





#### On finish

TODO





