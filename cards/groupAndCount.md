<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="help.html">Help index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>Group and count</li>
</ul>

## Group and count

Groups rows with the same values into summary rows that contain the grouping fields and the number of grouped rows.

!["Group and count" card](assets/img/cards/groupAndCount.png)


### Inputs


* **Data** --- [Tensor](types/Tensor.html)

  2D tensor (a table) to group and count.

* **Grouping column(s)** --- List of [Integer](types/Integer.html)

  Index(es) of the column(s) used for grouping.





### Outputs


* **Result** --- [Tensor](types/Tensor.html)

  Resulting table with the summary rows, the grouping columns and an extra column indicating the number of grouped rows.




