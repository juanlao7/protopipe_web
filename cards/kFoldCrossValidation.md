## K-fold cross-validation

[foto card]

Performs a [k-fold cross-validation](https://en.wikipedia.org/wiki/Cross-validation_(statistics)#k-fold_cross-validation).

### Inputs

* **K** --- [Integer](types/Integer.html)  
  Number of subsamples to partition the data.

* **Data** --- [Tensor](types/Tensor.html)  
  Data to partition.

### Outputs

* **For each fold** --- [Event](types/Event.html)  
  Event that gets triggered `K` times, one for each fold.  
    
  Event parameters:

  * **Report** --- [Callback](types/Callback.html)  
    Callback to call for reporting the result of the fold. For example, you can report the error of the model you train in the fold.  
      
    Callback parameters:

    * **Result** --- [Float](types/Result.html)  
      Result of the fold.

  * **Training** --- [Tensor](types/Tensor.html)  
    Training data, of size `Data.size * (k - 1) / k`.

  * **Testing** --- [Tensor](types/Tensor.html)  
    Testing data, of size `Data.size * 1 / k`.
