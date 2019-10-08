<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="help.html">Help index</a></li>
    <li>Index of data types</li>
</ul>

## Index of data types

Cards receive data as input and generate data as output. Data has an associated type that represents its nature.

These are all the existent data types in Protopipe:

{% for type in types %}
* [{{ type }}](types/{{ type }}.html)
{% endfor %}