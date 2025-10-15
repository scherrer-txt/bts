---
layout: post
author: scherrer.txt
title: "Kybernetická hygiena | Behind the Screens | by Scherrer.txt"
name: Kybernetická hygiena
release: 2024/07
perex: O soukromí, bezpečnosti a redukci digitální stopy z pohledu chronicky online člověka
order: "20"
thumbnail: "/assets/images/thumbs/bts-thumb-20.jpg"
background: "/assets/images/bg/20.avif"
redirect_from: "/bts20.html"
published: true
---

<div id="toc"></div>
* TOC
{:toc}

## Rychlý úvod
Můj červen 2024 měl příchuť mazání neaktivních a nepotřebných účtů a digitálních dat. Vnímám je jako potenciální bezpečnostní riziko — a taky už mám dost nevyžádaných reklamních sdělení a e-mailů s upozorněním, že se mi někdo snaží dostat do nějakýho účtu.

Různý úniky dat (*leak*) se dějou relativně často — unikají data jako e-maily a hesla, adresy bydliště, údaje z občanky a pasu nebo čísla účtu, kreditních karet a PINy. Existují stránky, kde se dá zjistit, jestli vaše hesla/e-mail/jakýkoliv jiný údaje nebyly kompromitovaný — [Have I Been Pwned](https://haveibeenpwned.com/) a [Mozilla Monitor](https://monitor.mozilla.org). Já se v těchhle databázích párkrát našel a nebylo to úplně příjemný zjištění. Ale dá se to řešit. Jak jsem to řešil já?

> Pod hadrama jsme všichni nazí, ale stejně je nosíme. Stejně máme v pokoji záclony anebo závěsy.

## Vždyť je to stejně jedno
Spousta z nás si při odchodu ze záchodu celkem běžně myje ruce, zamyká při odchodu byt, počítač a mobil má na heslo, používá kondomy nebo aspoň neolizuje zábradlí a madla v MHD — nevidím důvod zůstávat v oblasti kyberbezpečnosti a soukromí jen u důvěry a naděje v lidstvo a dál to neřešit. Better safe than sorry, jak se říká.

Zkusím rozebrat tři nejčastější argumenty, s kterýma jsem se setkal, a říct, proč bezpečnost a soukromí jedno fakt nejsou.

1. **„Stejně už tvoje data mají“** — Jo, je blbý, že třeba Google a Meta mají moje data za posledních ~16 let. Rozhodně to ale není důvod, abych nad tím mávl rukou — to by bylo jako říct, že na co si umývat ruce, když už je mám stejně ušpiněný. Ať si moje starý data nechají, nový jim ale dávat nechci (minimálně ne tak jednoduše).
- To, že už ty data mají, neznamená, že jim mám dávat další.

1. **„Stejně si na tobě nemají co vzít“**. Pod hadrama jsme všichni nazí, ale stejně je nosíme. Stejně máme v pokoji záclony anebo závěsy. Nemám co skrývat. Zároveň ale nepotřebuju, aby měla dostatečně ochotná entita možnost hrabat se v mých datech a zneužívat je. Nebo na nich trénovat AI. Nebo aby byly na serveru, z kterýho ty data leaknou — a to není otázka „*jestli*“, ale „*kdy*“.
- **Jakýkoliv** data mají pro někoho cenu zlata, nehledě na to, jestli v nich tu hodnotu vidíme.

1. **„Tvoje data nikoho nezajímají“**. Já osobně zajímám docela dost lidí z Asie. Aspoň podle asi třiceti varovných e-mailů, který mi v horizontu dvou měsíců přišly od služeb, do kterých se někdo z těchhle zemí snažil (neúspěšně) přihlásit. V tomhle případě navíc ani nejde o moje/tvoje, ale o *naše* data. Jde o to množství hesel a údajů, s kterýma se dá pracovat, který se často kupují v balících po desítkách milionů.
- I když je úspěšnost prolomení zabezpečení třeba 0,001 %, z deseti milionů účtů je to pořád tisícovka smolařů, co můžou přijít o úspory nebo přístup k osobním/pracovním účtům.

> Já tuhle možnost měl, tak jsem ji uplatnil. Mrzí mě, že ji lidi přede mnou neměli.

## Kámen, co spustil lavinu
Nedávno Meta dala svým uživatelům možnost neposkytnout souhlas s trénováním AI na jejich obsahu.[^1] Já byl jeden z těch, co ten souhlas nedal (týhle možnosti se říká „opt-out“). Je mi jedno, že to může působit pokrytecky, když sám používám AI, která je trénovaná na dílech lidí, co tuhle možnost neměli. Já tuhle možnost měl, tak jsem ji uplatnil. Mrzí mě, že ji lidi přede mnou neměli, ale nevidím moc důvodů, proč by mě to mělo v současnosti ovlivňovat.

I přes to, že jsem jim ten souhlas neposkytl, jsem ještě ten den smazal všechny posty na svým grafickým profilu.[^2] Nemám jedinej důvod Metě věřit, že můj nesouhlas bude respektovat — soudě dle jejich historie.[^3] Nebyl by to první případ, kdy by ignorovali nesouhlas uživatelstva.

Situace: sedím u stolu, grafickej profil kompletně vyčištěnej. Co teď?

> Cítil jsem klid na duši, že jsem udělal maximum, co udělat šlo.

## Fuck off, Google
Kdysi dávno jsem používal aplikaci Fotky od Google jako záložní „disk“ na opravdu hodně osobní věci. V průběhu let jsem na to zapomněl. Nedávno jsem si vzpomněl, takže to byla další položka na seznamu. Když už jsem byl v tom, rovnou jsem si stáhnul na lokální uložiště všechny e-maily z adresy, na kterou byl ten drive vedený. A kromě fotek jsem promazal i celý Google Drive. Ani nevím proč jsem to vzal tak od podlahy, ale na konci tohohle procesu jsem se cítil líp. Ne nutně bezpečněji nebo jako že jsem to teď Googlu hrozně nandal. Spíš jsem cítil určitý klid na duši, že jsem udělal maximum toho, co jsem v ten moment mohl udělat. Jasně, Google už pravděpodobně použil všechny moje data několikrát, ale jak jsem říkal výš — s tím nenadělám nic, můžu jim ale nedávat nový data.

Podobně jsem pročistil i svoji druhou schránku. Tu teď čeká pozvolná archivace a nastavení přesměrování nový pošty na můj [Proton Mail](https://proton.me/mail).[^4] Co se týče dokumentů a tabulek, tak ty stejně poslední dobou píšu v [Obsidianu](https://obsidian.md/) — a pro jistotu mám [Libre Office](https://www.libreoffice.org/).[^5] Asi je nevyhnutelný, že Google programy budu muset kvůli práci do nějaký míry používat, ale s tím jsem v míru. Jde mi o to nevytvářet nový soubory a nemít na svým Drivu nic, co bych nezveřejnil třeba tady.

> Měl jsem asi 500 účtů. Zbylo mi 130.

## Fuck off, (almost) everyone
Od roku 2011[^6] používám [Firefox](https://www.mozilla.org/en-US/firefox/). S přestávkama — chvíli jsem používal Chrome (což je v podstatě [malware](https://www.gnu.org/proprietary/malware-google.en.html) a nesmyslný žrout výkonu), chvíli Operu a Operu GX (což je odnedávna taky spyware, akorát [posílají data do Číny](https://www.reddit.com/r/operabrowser/comments/ajmbox/opera_is_spyware/)[^7]), pak jsem experimentoval s Brave a Vivaldi (který by byly v pohodě, kdyby to nebyly jen převlečený Chrome[^8]), než jsem zase zaparkoval u ohnivý lišky.

Při přechodu do novýho prohlížeče jsem si vždycky importoval svoje záložky a hesla. Díky tomu mám docela rozsáhlou databázi hesel a účtů, který jsem si všude možně za ty roky vytvářel. Účtů bylo asi 500. V průběhu let jsem je občas zredukoval, ale až teď byl prostor a důvod na pořádnou čistku.

Zabralo to sice jedno dost dlouhý odpoledne, ale z těch několika stovek účtů mi zbylo 130. Když už jsem byl v tom, u těch zbylých účtů jsem si změnil hesla, odhlásil se z reklamních sdělení a kde mi to přišlo důležitý, tam jsem si nastavil silnější zabezpečení (2FA). Nepamatuju si skoro žádný heslo, protože nemusím.

> Zlatý cyber security pravidlo: pro každý účet jiný heslo

## Nepamatuju si skoro žádný heslo
Kdo si má jako pamatovat stovky různých hesel? V tom je ten vtip. Podle mě by člověk neměl všude používat zapamatovatelný hesla, ale dvoufázový zabezpečení (2FA, jako two-phase authentication), nějaký authenticator a nějaký password manager. Jediný heslo, který by si měl člověk pamatovat, je tzv. **master password**, kterým se odemyká password manager.

Oukej, co to je za sprostý slova.
- **Dvoufázový zabezpečení** je to proto, že v první fázi se přihlásím na jednom zařízení (třeba PC), v druhý fázi to přihlášení potvrdím z jinýho zařízení (třeba mobil).
- **Authenticator** je program, kterej generuje dočasná, šestimístná hesla (mají životnost nejčastěji 30 sekund). V první fázi se člověk přihlašuje běžným heslem, v druhý fázi potvrzuje přihlášení právě tímhle dočasným heslem. V authenticatoru bydlí jen tyhle neustále se generující dočasný hesla a e-mail, ne hesla samotný — od toho je tu password manager. Podle mě je nejlepší authenticator [2FAS](https://2fas.com/), ale někdo možná zná Google Authenticator (ale eww, Google).
- **Password Manager** je trezor, ve kterým bydlí všechny potřebný údaje k účtu (e-mail adresa/login a hesla). Některý mají funkce jako rozpoznání duplicitních údajů, sdílení, hodnocení a generování nových hesel, a třeba i breach monitoring. Nejznámější jsou [1password](https://1password.com/), [Bitwarden](https://bitwarden.com/) a [Proton Pass](https://proton.me/pass), ale v pohodě mi přijde i integrovaná [Firefox klíčenka](https://www.mozilla.org/en-US/firefox/features/password-manager/), jen nemá tolik funkcí.

> A man of focus, commitment and sheer fucking will.

## Konec dobrý, všechno dobrý? Ne!
Smazal jsem jeden Instagramový profil a trochu promazal Facebook. Vyčistil jsem dva plný Google Drives a přecházím z Gmailu na Proton. Zrušil jsem přes 200 účtů, změnil si hesla na 130, přešel z Google Authenticatoru na 2FAS, a všude, kde to šlo, jsem si nastavil dvoufáz. A místo Google DNS používám [Cloudfare](https://one.one.one.one/). Na registrace do zbytečných služeb používám dočasný e-mail adresy ([Firefox Relay](https://relay.firefox.com/)). Jako vyhledávač používám [Brave Search](https://search.brave.com/). To už asi můžu bejt docela v klidu, ne?

Ne tak úplně. Zrušit jen tak z jedničky 200 účtů, to člověk neudělá jen tak. Na to je potřeba speciální druh magora. A man of focus, commitment and sheer fucking will. Nedokážu dát do slov, kolik energie to stálo a jak neuvěřitelně nepřátelský proces rušení účtů byly lidský mozky schopný vyplodit. 

Takže tady je druhá, dost podstatná část mý motivace, proč jsem tohle celý podstoupil.

> Nehledej zlý úmysl tam, kde je dostatečným vysvětlením hloupost

## Jako pěkně macatej, mastnej šváb
Nesnáším online reklamy — i přestože, nebo možná právě protože je občas sám vytvářím. Naštěstí existuje Firefox a [uBlock Origin](https://ublockorigin.com/). Nevím, kdy naposledy jsem nějakou reklamu viděl. Můj internet je čistý a nerušený hnusnýma, nevkusnýma reklamama. A dělám, co můžu, aby to tak zůstalo.[^9]

Má to ale háček — chodí mi e-maily. Některý mě i zajímají nebo se mě týkají. U zbytku ale netuším, proč mi pořád chodí, i přestože jsem už jsem se už několikrát odhlásil z odběru.

Při tomhle odhlašování a rušení účtů jsem se setkal s něčím, co ve mně vzbuzuje podobný pocit naprostýho znechucení, odporu a opovržení, jako kdybych viděl na podlaze pěkně macatýho, mastnýho švába.

[Dark patterns](https://www.deceptive.design/types) jsou to ty nejvíc slizký triky jak donutit uživatelstvo souhlasit s něčím, s čím by jinak nesouhlasili. Nucení k odběru newsletteru/reklamních sdělení při zakládání účtu, skrytá/neexistující možnost zrušit účet, divně popsaný buttony („Ano, nechci × Ne, chci“, místo například „Zrušit účet × Zachovat účet“), prohozený barvy tlačítek, to všechno jsou dark patterns. Úplně trapná je pak hra na city pomocí různých smutných obrázků, emoji a copy ve stylu „Opravdu nás to mrzí a jsme smutní, že chcete odejít :(((( Opravdu se s tím nedá něco dělat? :'((( mocinqi pjosím, nerušte si účet, umře koťátko.“

Vím, že platí Hanlonova břitva („*Nehledej zlý úmysl tam, kde je dostatečným vysvětlením hloupost.*“), nicméně zkušenější UI/UX designeři a designerky (lidi, co vytváří weby, aplikace a mají na starosti mimojiný i návrh procesu rušení účtu) by měli znát/znají best practices a měli by je dodržovat. Ti, co dark pattern i přes to **vědomě** využívají, jsou podle mě bezpáteřní zoufalci. [^10] Nevím, jak se na sebe můžou ráno dívat do zrcadla. Jejich matky se s něma 9 měsíců tahaly a nakonec je z nich tohle. Ugh.

## Konec dobrý, všechno dobrý? Jo…
Jo, už jo. Náhodných e-mailů mi chodí naprostý minimum — a to, co mi chodí, je 1) manageable, 2) něco, co mě pořád do jistý míry zajímá, 3) ukazatel toho, co jsem opomněl zrušit a odhlásit (vždycky něco člověku unikne).

Kdyby někoho zajímalo, kam si chodit pro informace ohledně privacy, tak bych doporučil [r/Privacy](https://www.reddit.com/r/privacy/), potažmo [r/cybersecurity](https://www.reddit.com/r/cybersecurity/), [blog Mozilly](https://blog.mozilla.org/en/), kde informujou o aktuálním dění, a kanál [Louis Rossmann](https://www.youtube.com/@rossmanngroup). [LinusTechTips](https://www.youtube.com/@LinusTechTips) se tématu taky občas věnuje a má docela zajímavý informace a alternativy.

## Co si z toho vzít
Jak jsem říkal výš, svět je dost komplikovanej sám o sobě. Proto miluju hledat cesty, jak jednou něco nastavit, ideálně tak, aby to prostě fungovalo a/nebo abych to nemusel řešit následujících pár let. Set up and forget, se tomu říká. Následující tipy, kterých se sám držím, z týhle filozofie dost vychází. Ke všemu existují alternativy, ale ty doporučovat nebudu, nemám s něma zkušenosti.

1. **Nepoužívat všude stejný heslo** a když už, tak ho opepřit. **Pepření** je to, že mám nějaký heslo, třeba „heslo“, za který dám nějaký náhodný znaky, třeba „1_?#2č“. Ty náhodný znaky jsou pro každej účet jiný. V tomhle případě i kdybych používal všude stejný „heslo“, tak pokud ho vždycky opepřím trochu jinak, pořád bude dost obtížně prolomitelný.
- **Doporučuju pepřit nebo si hesla generovat prohlížečem**.

2. **Nepoužívat hesla** ve smyslu pass**word**, kdy je heslem nějaký jedno slovo nebo řetěz písmen (cokoliv od „heslo“ po „N7qm!_C#9A@“), ale ve smyslu pass**phrase**. Taková fráze může vypadat třeba „*5 armád_Rozhořčených! krabů bilo se na Deseti polích*“, což je úplně nesmyslná fráze, ale je tak absurdní, že jde docela dobře zapamatovat, navíc je plná speciálních znaků (reminder: mezery jsou speciální znak, stejně jako otazník a podjebník), znaků s diakritikou, je extrémně dlouhá, a střídají se v ní velký a malý písmena. Vesmír existuje zhruba 13 830 000 000 let. Prolomit tohle heslo by trvalo 36 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 let (podle [Delinea](https://delinea.com/resources/password-strength-checker)). I kdyby se vzala každá molekula každý existující věci — zrnko prachu, strom, foton — na každý planetě, v každý galaxii, v celým vesmíru, tak to nebude **ani zdaleka** tak velký číslo jako je tohle.
- **Doporučuju se inspirovat na [StrongPhrase](https://strongphrase.net/)**.

3. **Nebát se používat 2FA**, protože i když někdo náhodou prolomí heslo (have fun s krabama), pořád se nedostanou přes dvoufáz (ledaže by měli po ruce i můj odemknutý mobil, ale to už mám úplně jinej problém).
- **Doporučuju [2FAS](https://2fas.com)**.

4. **Používat nějakou klíčenku na hesla je fajn**, protože si člověk nemusí žádný heslo pamatovat, na mobilu i v prohlížeči se při přihlašování vládají automaticky, a některý klíčenky mají možnost kontroly síly hesel, jejich generování i monitorování.
- **Dopuručuju [Firefox Password Manager](https://www.mozilla.org/en-US/firefox/features/password-manager/) nebo [Proton Pass](https://proton.me/pass)**.

5. **Jednorázový e-maily** jsou life saver. Pokud se někde chci zaregistrovat, abych jednorázově něco udělal (využil nějakou akci, něco si stáhl, něco získal), přičemž neplánuju ten vytvořený účet dál používat a zároveň se nechci dealovat s dark patterns rušení účtu, tak jednorázový e-maily jsou na tohle skvělý. Člověk má možnost si vytvořit účet, potvrdit e-mailovou adresu, udělat zamýšlenou aktivitu a pak stačí jen ten e-mail smazat.
- **Doporučuju [Firefox Relay](https://relay.firefox.com/accounts/profile/) nebo [SimpleLogin](https://simplelogin.io/) od Protonu**.

6. **Nepoužívat adblock je cringe**. Život je příliš krátkej na to sedět u tří 30sekundových nepřeskočitelných reklam na YouTube. Tvůrci a tvůrkyně jdou podpořit i mnohem líp a efektivněji, jestli jde o to.
- **Jediný funkční adblock je [uBlock Origin](https://ublockorigin.com/)**.

7. **Nepoužívat Google Chrome**, protože, mimojiné, znemožňuje uživatelstvu používat adblock. Alternativy jsou Brave a Vivaldi (kdybych si měl vybrat, tak Brave, má zajímavější ekosystém). Pro fajnšmekry (a lidi, co ví, co je „fork“) je tu Floorp, Waterfox nebo Librewolf, ale na nich dělají zpravidla malý týmy a jejich vývoj je buď pomalý, zaostává nebo po roce prostě zamrzne. Je tu i Tor, který proslul díky dark webu, ale s ním nemám tolik zkušeností a pro laiky je spíš nebezpečný.
- **Doporučuju Firefox**.

8. **Nepoužívat Google jako výchozí vyhledávač**. Je sice celkem jedno, v kterým prohlížeči za svůj dotaz napíšete „reddit“, ale Brave vám to pak aspoň nebude mlátit o hlavu na každým dalším kroku. Nesledují uživatelstvo, jejich vyhledávání nebo jejich kliky. Brave má navíc svůj vlastní vyhledávací index, to znamená, že při vyhledávání může člověk narazit na věci, který by přes Google nenašel (protože cenzura, protože reklamy, protože biasy). Dlouho jsem používal DuckDuckGo, ale ten používá Bing jako zdroj, což není úplně ideální (protože závislost na Microsoftu, protože cenzura).
- **Doporučuju [Brave Search](https://brave.com/search/)**, ale na mapy pořád používám Google.


## Poznámky pod čarou

{: data-content=“footnotes“}

[^1]: Tohle rozhodně od Mety nevnímám jako něco, za co jim patří bonusový bodíky. Není to něco, co dělají z dobroty duše, jen si kryjou prdel před žalobama — tak, jak to mělo udělat Midjourney, OpenAI a jakejkoliv AI startup, co dneska frčí. Možnost nesouhlasit by měla být naprostej základ.
[^2]: Tenhle profil i Instagram celkově je pro to, co dělám a jakej jsem teď člověk, relativně k ničemu. Přidávám tam už jen teasery na tyhle články, a to hlavně proto, aby o tom věděli mí lidi (čauko všem mým lidem!). Mnohem radši se o nových eskapádách svýho kámošstva dozvím třeba u pivka než ze stories. Nechci podporovat to, že ze svýho života dělají obsah pro sítě místo obsahu pro pokec u pivka. Ale to už jsem off-topic, víc jsem o svým vztahu k sociálním sítím napsal [tady]({{ site.url }}/bts07.html), za ty roky se toho vlastně moc nezměnilo.
[^3]: Trvalo to asi půl hodiny, celý to mám natočený, plánuju z toho pak něco udělat, ale ještě nevím co.
[^4]: Proton je švýcarská firma, která poskytuje zatím asi nejdůvěryhodnější a nejzabezpečenější e-mail
[^5]: Libre Office je balík open-source programů (něco jako Microsoft Office), který je zadarmo, funguje, jdou v něm otevírat Microsoftí soubory (dlouho jsem teda žádný .docx nebo .xls neviděl, přiznám se).
[^6]: Myslím si, že Firefox stoprocentně používám dýl — třeba od roku 2008-2009 —, ale rok 2011 mám podložený screenshoty.
[^7]: Kdo neví, tak v Číně platí National Intelligence Law (2017), zákon, který zavazuje jednotlivce, organizace a instituce k podpoře a spolupráci s rozvědkou. [Víc o tom tady](https://www.chinalawtranslate.com/en/what-the-national-intelligence-law-says-and-why-it-doesnt-matter/).
[^8]: Oba prohlížeče totiž fungujou na jádře Chromium, který vytvořil Google, na kterým běží Chrome. To jádro je open source, každý může nahlídnout do zdrojovýho kódu a třeba se ujistit, co dělá nebo nedělá. Anebo do kódu přispět. Anebo si udělat vlastní prohlížeč. Problém je, že takový prohlížeč pak bude mít stejný neduhy, jako Chrome. Navíc Brave má na mě možná až moc silnou crypto příchuť, kterou u prohlížeče úplně nepotřebuju.
[^9]: Současnej internet prostě vypadá jako hovno — tady cookies lišta a hned po ní pop-up (*a po něm pro jistotu občas ještě jeden další*), támhle animovaný banner a odpočítávání a „*POZOR! sleva jen 10 % [za nějaký osobní data] pro Vás!*“, to celý zabalený do captivating mikrointerakcí — a tichá většina lidí si na to, bohužel, zvykla. A je mi jich líto. Fucking nechtěl bych.
[^10]: Ten zásadní problém je, že to U v UI/UX znamená „user“, uživatel. Dark patterns jsou ale vyloženě anti-uživatelský, protože neslouží tvorbě/podpoře pozitivního uživatelskýho zážitku. Dark patterns jsou víc než cokoliv jinýho nástroj, jak amorálním způsobem v co nejkratší době přinést co největší zisky nebo je za každou cenu zachovat. Nemůžeš přijít o platící uživatele, když jim nedáš možnost si zrušit účet.