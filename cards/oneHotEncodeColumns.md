---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>One-hot encode columns</li>
</ul>

## One-hot encode columns

Encodes columns with *N* different values into *N* integer columns representing the original values with 0's and 1's.

!["One-hot encode columns" card](assets/img/cards/oneHotEncodeColumns.png)


### Inputs


* **Data** --- [Tensor](types/Tensor)

  2D tensor (a table) to encode.

* **Column(s)** --- List of [Integer](types/Integer)

  Index(es) of the column(s) to encode.





### Outputs


* **Encoded data** --- [Tensor](types/Tensor)

  Resulting encoded table.




