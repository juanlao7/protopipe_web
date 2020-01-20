---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>Read as CSV</li>
</ul>

## Read as CSV

Reads a comma-separated values stream and returns a labeled table.

!["Read as CSV" card](assets/img/cards/readAsCSV.png)


### Inputs


* **Stream** --- [FileStream](types/FileStream)

  Comma-separated values stream.

* **Delimiter** --- [String](types/String)

  Delimiter or separator of the values.

* **Header row(s)** --- List of [Integer](types/Integer)

  Row number(s) to use as the column names, and the start of the data. Leave empty if the data has no headers. Set it to "0" if the headers are at the first row.





### Outputs


* **Table** --- [Tensor](types/Tensor)

  The data represented as a 2D tensor (a table).




