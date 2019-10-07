<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="help.html">Help index</a></li>
    <li><a href="cards/">Index of cards</a></li>
    <li>{{ title }}</li>
</ul>

## {{ title }}

{{ help }}

![{{ title }}](assets/img/cards/{{ id }}.png)

{% if inputs %}
### Inputs

{% for argument in inputs %}
* **{{ argument['text'] }}** --- {% if argument.get('multiplicity') == 'n' %}List of {% endif %}[{{ argument['type'] }}](types/{{ argument['type'] }}.html)

  {{ argument['help'] }}
{% endfor %}

{% endif %}

{% if outputs %}
### Outputs

{% for argument in outputs %}
* **{{ argument['text'] }}** --- {% if argument.get('multiplicity') == 'n' %}List of {% endif %}[{{ argument['type'] }}](types/{{ argument['type'] }}.html)

  {{ argument['help'] }}
{% endfor %}

{% endif %}

{% if events %}
### Events

{% for event in events %}
#### {{ event['text'] }}

{{ event['help'] }}

{% if event['outputs'] %}
Event outputs:

{% for argument in event['outputs'] %}
* **{{ argument['text'] }}** --- {% if argument.get('multiplicity') == 'n' %}List of {% endif %}[{{ argument['type'] }}](types/{{ argument['type'] }}.html)

  {{ argument['help'] }}
{% endfor %}

{% endif %}

{% endfor %}

{% endif %}
