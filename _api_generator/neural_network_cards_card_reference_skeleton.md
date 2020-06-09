---
no_toc: true
---

<ul class="breadcrumb">
    <li><a href="">Home</a></li>
    <li><a href="documentation">Documentation index</a></li>
    <li><a href="neural_network_cards/">Index of cards for building neural networks</a></li>
    <li>{{ title }}</li>
</ul>

## {{ title }}

{{ help }}

!["{{ title }}" card](assets/img/neural_network_cards/{{ id }}.png)

**Note:** the backend for building and training neural networks is based on [Keras](https://keras.io/). The documentation of this card is a variant of the documentation of its corresponding class.

{% if inputs %}
### Inputs

{% for argument in inputs %}
* **{{ argument['text'] }}** --- {% if argument.get('multiplicity') == 'n' %}List of {% endif %}[{{ argument['type'] }}](types/{{ argument['type'] }})

  {{ argument['help'] }}
{% endfor %}

{% endif %}

{% if outputs %}
### Outputs

{% for argument in outputs %}
* **{{ argument['text'] }}** --- {% if argument.get('multiplicity') == 'n' %}List of {% endif %}[{{ argument['type'] }}](types/{{ argument['type'] }})

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
* **{{ argument['text'] }}** --- {% if argument.get('multiplicity') == 'n' %}List of {% endif %}[{{ argument['type'] }}](types/{{ argument['type'] }})

  {{ argument['help'] }}
{% endfor %}

{% endif %}

{% endfor %}

{% endif %}
