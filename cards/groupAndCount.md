<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="help">Help index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>Group and count</li>
</ul>

## Group and count



!["Group and count" card](assets/img/cards/groupAndCount.png)


### Inputs


* **Data** --- [Tensor](types/Tensor)

  2D tensor (a table) to group and count.

* **Grouping column(s)** --- List of [Integer](types/Integer)

  Index(es) of the column(s) used for grouping.





### Outputs


* **Result** --- [Tensor](types/Tensor)

  Resulting table with the summary rows, the grouping columns and an extra column indicating the number of grouped rows.




