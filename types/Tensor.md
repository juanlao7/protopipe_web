<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="help.html">Help index</a></li>
    <li><a href="types/">Index of data types</a></li>
    <li>Tensor</li>
</ul>

## Tensor

This type represents a labeled multidimensional array of values.

By convention, for a Tensor of dimension `n`,

* the last dimension of the tensor, `n`, an array of values, is called *column*;
* dimension `n - 1`, an array of columns, is called *row*;
* dimension `n - 2`, an array of rows, is called *table*;
* dimensions `n - 3` to `1` are unnamed.

All values of a column share the same [data type](types/).
