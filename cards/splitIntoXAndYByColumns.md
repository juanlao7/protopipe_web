---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>Split into X and Y by columns</li>
</ul>

## Split into X and Y by columns

Splits a table into two tables (X and Y).

!["Split into X and Y by columns" card](assets/img/cards/splitIntoXAndYByColumns.png)


### Inputs


* **Data** --- [Tensor](types/Tensor)

  2D tensor (a table) to split.

* **X column(s)** --- List of [Integer](types/Integer)

  Index(es) of the column(s) to include in the resulting X table.

* **Y column(s)** --- List of [Integer](types/Integer)

  Index(es) of the column(s) to include in the resulting Y table.





### Outputs


* **X** --- [Tensor](types/Tensor)

  Resulting table containing only columns **X columns** of **Data**.

* **Y** --- [Tensor](types/Tensor)

  Resulting table containing only columns **Y columns** of **Data**.




