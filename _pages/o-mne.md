---
layout: static
title: "O mně | Behind the Screens | by Scherrer.txt"
permalink: /o-mne
---

<div class="columns-wrapper">
  {% for section in site.data.about.sections %}
    <div class="column">
      <h2>{{ section.title }}</h2>
      <ul>
        {% for link in section.links %}
          <li><a href="{{ link.url }}">{{ link.text }}</a></li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>

## Kdo jsem
Něco o sobě jsem [napsal tady](bezcasi-ktery-meni-zivot), ale ve zkratce:

Jsem transdisciplinární[^1] tvůrce/designer/umělec, neurohacker[^2], spisovatel[^3] a blogger[^4], rapper[^5],
fotograf[^6], motion designer[^7], nezávislý herní vývojář[^8], event producer[^9] a public speaker[^10]. Mám ADHD[^11] a ASD[^12]. Jsem člen Mensy[^13] a mám jen základku[^14].

## Flexzóna
<div class="flexzona-container">
  {% for section in site.data.about.flexzona %}
      <ul class="flexzona-list">
        {% for item in section.list %}
          <li>{{ item.text | markdownify }}</li>
        {% endfor %}
      </ul>
  {% endfor %}
</div>



---
## Poznámky pod čarou

{: data-content=“footnotes“}

[^1]: Tohle je docela nový slovo, moje [definice tady](/notes/2024-03-29-disciplinarita.html);
[^2]: O tom jsem se nedávno trochu rozepsal [tady](beru-5-prasku-kazdy-rano);
[^3]: Donedávna jsem ještě s tímhle označením váhal, ale Nobelovky za literaturu dostávají i [lidé, kteří píšou *jen* povídky](https://en.wikipedia.org/wiki/Alice_Munro), takže to trochu rozhodlo;
[^4]: Bloguju už od roku 2012 (*rip Wulfrion blog*); tehdy jsem psal recenze na fantastiku; o tom jsem [psal tady](jak-se-prichazi-o-sny);
[^5]: K rapu jsem měl vždycky blízko, od roku 2016 ale píšu trochu víc vážně. Účinkuju v uskupení [Stereosféra](https://open.spotify.com/artist/4kJ4q7uFYVPQZxiwtgnYe5?si=3_iRL4DgS6ilw9s3bI3FGw) jako vrchní majitel sbírky pil na kosti; v roce 2024 bych rád vydal album;
[^6]: Fotím od roku 2014, nejdřív na Nikon D5100, aktuálně na Sony α7 II; o focení koncertů [jsem psal tady](jak-fotim-koncerty), o svým 60 let starým [objektivu tady](60-let-stary-objektiv);
[^7]: Motion dělám od roku 2013, nejdřív jako sranda věc pro blog, ale pak se to rozrostlo; dělal jsem pro známý umělce, velký agentury i nadnárodní korporát;
[^8]: Baví mě se tak označovat, protože i když mám na kontě jen jednu hru v [Bitsy](https://www.make.bitsy.org/), už mi v jedný brněnský firmě nabízeli pozici Technical Designera, haha;
[^9]: Dělal jsem na tehdy největší brněnské [businessové konferenci](https://konferenceglorious.cz/) a na jedné z největších [game-dev konferencí](https://game-access.com/conference/) ve Střední Evropě;
[^10]: Talk „*Co je pro nás design*“ na [Zlin Design Week ’24](https://zlindesignweek.com/2024/) v tandemu s [@Lea Belejová](https://linktr.ee/lea_be_linky) + talk o naší hře [DOES IT MATTER?](https://its-lea-b.itch.io/does-it-matter) na festivalu [Final_final(2)](https://finalfest.mmm.page/) + talk „*Co je vlastně design*“ v tandemu s [@Lea Belejová](https://linktr.ee/lea_be_linky) na [KISKfóru](https://www.facebook.com/events/1104226990622607) + stovky hodin klientských workshopů;
[^11]: O tom je článek [tady](kazdy-trochu-adhd);
[^12]: O tomhle možná někdy bude;
[^13]: Aspoň to teda furt říká moje členská kartička, členství jsem platil první rok, pak jsem ho neobnovil;
[^14]: Jo, to se stalo, ale ne, že bych se nesnažil — na různých středních školách jsem strávil dohromady 8 let. Dvě slova: neomluvená absence. Mnohem víc mě bavilo dělat si svoje věci, než 8 hodin sedět v lavici;