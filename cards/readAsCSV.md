## Read as CSV

Reads a comma-separated values stream and returns a labeled table.

![Read as CSV](assets/img/cards/readAsCSV.png)


### Inputs


* **Stream** --- [FileStream](types/FileStream.html)

  Comma-separated values stream.

* **Delimiter** --- [String](types/String.html)

  Delimiter or separator of the values.

* **Header line(s)** --- List of [Integer](types/Integer.html)

  Lines that define the headers of the data. Leave empty if the data has no headers. Set it to "0" if the headers are at the first line of the data.





### Outputs


* **Table** --- [Tensor](types/Tensor.html)

  The data represented as a 2D tensor (a table).




