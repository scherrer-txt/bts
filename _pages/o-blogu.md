---
layout: static
title: "O blogu | Behind the Screens | by Scherrer.txt"
permalink: /o-blogu
---

## O blogu
Já jsem Kevin a tohle je můj blog Behind the Screens. Píšu o všem, s čím se jako kreativní člověk setkávám *za obrazovkama* svých dvou monitorů.


Píšu nepravidelně od roku 2020. Původně jsem chtěl sdílet svůj pracovní proces — myslel jsem, že s touhle formou prorazím, udělám si jméno a stanu se „*majitelem tématu*“. Postupem času jsem z toho ale vyrostl; začal jsem sdílet svoje myšlenky. Z rudě nasvíceného, zatemněného prostoru, který je mým kreativním přístavem, jednou za čas vysílám do oceánu internetu vzkaz v lahvi. Občas je sdělení „_tady jsem a tohle si myslím_“, někdy „_pokud to vidíte stejně, tak nejste sami_“.

Behind the Screens _nikdy nebude za paywallem_. Zároveň odmítám nechávat parazitovat na sobě jako na tvůrci jakýkoliv korporát nebo mediální monopol. Proto jsem si v březnu 2024 vytvořil vlastní prostor. Emigroval jsem z dosavadní platformy, s jejímiž praktiky nesouhlasím ani jako designer, ani jako tvůrce obsahu, ani jako člověk.

_↑ Pokud to vidíte podobně, velmi rád vám s přechodem na Github Pages pomůžu, pokud to bude v mých silách._

---

<div class="credits-wrapper">
<h2>Credits</h2>
  {% for section in site.data.about.credits %}
    <div class="credits-column">
      <h5>{{ section.title }}</h5>
      <ul>
        {% for item in section.list %}
          <li>{{ item.text | markdownify }}</li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>

---

## Jak tenhle blog citovat?
##### NLM/Vancouver
Scherrer K. Behind the Screens [Internet]. Brno (CZ): Kevin Scherrer. 2020 -   . Název příspěvku; RRRR MM DD [citováno RRRR MM DD]. https://scherrer-txt.github.io/bts/

##### Chicago
Scherrer, Kevin. "Název příspěvku." Behind the Screens, MM DD, RRRR. https://scherrer-txt.github.io/bts/

##### MLA
Scherrer, Kevin. "Název příspěvku." Behind the Screens,  DD MM RRRR, https://scherrer-txt.github.io/bts/

##### APA
Scherrer, K. (RRRR, MM DD). Název příspěvku. Behind the Screens. https://scherrer-txt.github.io/bts/