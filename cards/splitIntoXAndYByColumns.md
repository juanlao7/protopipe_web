## Split into X and Y by columns

Splits a table into two tables (X and Y).

![Split into X and Y by columns](assets/img/cards/splitIntoXAndYByColumns.png)


### Inputs


* **Data** --- [Tensor](types/Tensor.html)

  2D tensor (a table) to split.

* **X columns** --- List of [Integer](types/Integer.html)

  Columns to include in the resulting X table.

* **Y columns** --- List of [Integer](types/Integer.html)

  Columns to include in the resulting Y table.





### Outputs


* **X** --- [Tensor](types/Tensor.html)

  Resulting table containing only columns **X columns** of **Data**.

* **Y** --- [Tensor](types/Tensor.html)

  Resulting table containing only columns **Y columns** of **Data**.




