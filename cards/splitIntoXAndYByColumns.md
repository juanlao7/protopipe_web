## Split into X and Y by columns

![Split into X and Y by columns](assets/img/cards/splitIntoXAndYByColumns.png)

Splits a table into two tables (X and Y).


### Inputs


* **Data** --- [Tensor](types/Tensor.html)

  2D tensor (a.k.a. table) to split.

* **X columns** --- List of [Integer](types/Integer.html)

  Columns for the resulting X table.

* **Y columns** --- List of [Integer](types/Integer.html)

  Columns for the resulting Y table.





### Outputs


* **X** --- [Tensor](types/Tensor.html)

  Resulting table containing only the columns `X columns` of `Data`.

* **Y** --- [Tensor](types/Tensor.html)

  Resulting table containing only the columns `Y columns` of `Data`.




