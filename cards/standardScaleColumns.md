---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>Standard scale columns</li>
</ul>

## Standard scale columns

Standardize columns individually by removing the mean and scaling to unit variance.

!["Standard scale columns" card](assets/img/cards/standardScaleColumns.png)


### Inputs


* **Data** --- [Tensor](types/Tensor)

  2D tensor (a table) to scale.

* **Column(s)** --- List of [Integer](types/Integer)

  Index(es) of the column(s) to scale.





### Outputs


* **Scaled data** --- [Tensor](types/Tensor)

  Resulting scaled table.




