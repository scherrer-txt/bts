---
layout: about
title: "O blogu | Behind the Screens | by Scherrer.txt"
permalink: /o-blogu
---

<div class="columns-wrapper-blog">
  <div class="column-info">
    <div class="post-meta-label">O blogu</div>
      <p>Jsem <a href="{{ site.url }}/o-mne">Kevin</a> a tohle je můj blog Behind the Screens. Píšu o všem, s čím se jako kreativní člověk setkávám za obrazovkama svých dvou monitorů.</p>
      <p>Píšu long-form články, snažím se psát pravidelně, tempem jeden článek za měsíc. Stojím na průsečíku gonza, kreativní ne-fikce a narativního žurnalismu.</p>
      <p>Nejdřív jsem psal nepravidelně, chtěl jsem sdílet svůj pracovní proces — myslel jsem, že s touhle formou prorazím, udělám si jméno a stanu se „<em>majitelem tématu</em>“. Postupem času jsem z toho ale vyrostl; začal jsem sdílet svoje myšlenky. Z rudě nasvíceného, zatemněného prostoru, který je mým kreativním přístavem, jednou za čas vysílám do oceánu internetu vzkaz v lahvi. Občas je sdělení „<em>tady jsem a tohle si myslím</em>“, někdy „<em>pokud to vidíte stejně, tak nejste sami</em>“.</p>
    </div>
    <div class="column-side-sect">
      <div class="post-meta-label">Paywall</div>
        <p>Behind the Screens nikdy nebude za paywallem. Zároveň odmítám nechávat parazitovat na sobě jako na tvůrci jakýkoliv korporát nebo mediální monopol. Proto jsem si v březnu 2024 vytvořil vlastní prostor. Emigroval jsem z dosavadní platformy, s jejímiž praktikami nesouhlasím ani jako designer, ani jako tvůrce obsahu, ani jako člověk.</p>
        <p><em>↑ Pokud to vidíte podobně, rád pomůžu s přechodem na Github Pages, pokud to bude v mých silách.</em></p>
    </div>
</div>

---

## Credits
<div class="credits-wrapper">
  {% for section in site.data.about.credits %}
    <div class="credits-column">
      <div class="post-meta-label">{{ section.title }}</div>
      <ul>
        {% for item in section.list %}
          <li>{{ item.text | markdownify }}</li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>

---

## Jak citovat
<div class="citation-wrapper">
    <div class="citation-column">
    <div class="post-meta-label">NLM/Vancouver</div>
      <ul>
          <li>Scherrer K. Behind the Screens [Internet]. Brno (CZ): Kevin Scherrer. 2020 -   . Název příspěvku; RRRR MM DD [citováno RRRR MM DD]. https://scherrer-txt.github.io/bts/</li>
        </ul>
      </div>

      <div class="citation-column">
      <div class="post-meta-label">Chicago</div>
        <ul>
            <li>Scherrer, Kevin. "Název příspěvku." Behind the Screens, MM DD, RRRR. https://scherrer-txt.github.io/bts/</li>
          </ul>
      </div>

      <div class="citation-column">
      <div class="post-meta-label">MLA</div>
        <ul>
            <li>Scherrer, Kevin. "Název příspěvku." Behind the Screens,  DD MM RRRR, https://scherrer-txt.github.io/bts/</li>
          </ul>
      </div>

      <div class="citation-column">
      <div class="post-meta-label">APA</div>
        <ul>
            <li>Scherrer, K. (RRRR, MM DD). Název příspěvku. Behind the Screens. https://scherrer-txt.github.io/bts/</li>
          </ul>
      </div>

      <div class="citation-column">
      <div class="post-meta-label">Tip</div>
        <ul>
            <li>Celé datum publikace článku je vždycky na jeho začátku nad obsahem, ve formátu DD.MM.RRRR</li>
          </ul>
      </div>
  </div>