## {{ title }}

![{{ title }}](assets/img/cards/{{ id }}.png)

TODO: description

{% if inputs %}
### Inputs

{% for argument in inputs %}
* **{{ argument['text'] }}** --- {% if argument.get('multiplicity') == 'n' %}List of {% endif %}[{{ argument['type'] }}](types/{{ argument['type'] }}.html)
  TODO: description
{% endfor %}

{% endif %}

{% if outputs %}
### Outputs

{% for argument in outputs %}
* **{{ argument['text'] }}** --- {% if argument.get('multiplicity') == 'n' %}List of {% endif %}[{{ argument['type'] }}](types/{{ argument['type'] }}.html)
  TODO: description
{% endfor %}

{% endif %}

{% if events %}
### Events

{% for event in events %}
#### {{ event['text'] }}

TODO: description

{% if event['outputs'] %}
Event outputs:

{% for argument in event['outputs'] %}
* **{{ argument['text'] }}** --- {% if argument.get('multiplicity') == 'n' %}List of {% endif %}[{{ argument['type'] }}](types/{{ argument['type'] }}.html)
  TODO: description
{% endfor %}

{% endif %}

{% endfor %}

{% endif %}
