---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>Scale columns to a range</li>
</ul>

## Scale columns to a range

Scales and translates columns individually such that their values are in a given range.

!["Scale columns to a range" card](assets/img/cards/scaleColumnsToARange.png)


### Inputs


* **Data** --- [Tensor](types/Tensor)

  2D tensor (a table) to scale.

* **Column(s)** --- List of [Integer](types/Integer)

  Index(es) of the column(s) to scale.

* **Minimum** --- [Float](types/Float)

  Minimum desired value.

* **Maximum** --- [Float](types/Float)

  Maximum desired value





### Outputs


* **Scaled data** --- [Tensor](types/Tensor)

  Resulting scaled table.




