# [Behind the Screens](https://scherrer-txt.github.io/bts/)
<img style="height:200px!important;" src="https://scherrer-txt.github.io/bts/assets/bts-logo-big.svg" alt="">

## Table of contents
- [About](#about)
- [License](#license)
- [To-do](#to-do)
- [Backlog](#backlog)
- [Did](#did)

## About
Behind the Screens is a weblog by Kevin Wulfric Scherrer. Originaly created in June of 2020, migrated to Github Pages in March of 2024.

Formerly based on [moonwalk](https://github.com/abhinavs/moonwalk) theme by [abhinavs](https://github.com/abhinavs)

## License
<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://scherrer-txt.github.io/bts/g">Behind the Screens</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/scherrer-txt">Kevin Scherrer</a> is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a></p>


## To-do
- [] Upload images for bts-01, bts-02 and bts-03
- [] Fix the gallery for mobile
- [] Create a "Linktree" of all the stuff that was previously in the footer
- [] Create "/now" page
- [] Create "/stack" page
- [] Create "/ai" page
- [] Improve typography using [Liquid filters](https://sylvaindurand.org/improving-typography-on-jekyll/)
- [] Create a repo or a page with all of the BGs for download
- [] Add a lazy load script

## Backlog
- [] Transform BTS into my digital garden

- [] TOC: Final Form
    - Bar under menu — Actual headline | [TOC icon] ← dropdown with all headlines (*levels 1-3*)
- [] MENU: Final Form
    - Desktop
        - Menu item 1 — Menu item 2 — Menu item 3 | [Gear icon] ← dropdown with "Theme [ Dark | Light ]" & "Font size [ - | + | ↺ ]"
    - Mobile
        - Menu item 1 — Menu item 2 — Menu item 3 — "Theme [ Dark | Light ]" — "Font size [ - | + | ↺ ]"

## Did
- [x] Fix issues with hover fx & transparency on post index
- [x] Fix arrows font
- [x] Minimize all the .js stuff
- [x] Recompress the images (from ~4 MB to ~800 KB)
- [x] Added a Dark Reader lock (because the default state is already a dark mode)
- [x] Redo legacy BGs (01-13)
- [x] Do something about the "↑ zpátky" buttons in footnotes
- [x] Fix About Me page links
- [x] Fix footnotes italics shenanigang
- [x] Fix the progress bar so that 1) it calculates the lenght of only the article and 2) dissappears at the end of the article
- [x] Reduce the footer to minimum
- [x] Fix some minor issues with the width of elements on page, so that it's flush with the new menu
- [x] Switch the menu to pre-final form (*Introduced the squeeze animation for the menu when scrolled*)
- [x] Switch the share thumbnails from aviff back to jpg (*this is what you get when you're trying to hard to have a fast-loading images everywhere, I guess*)
- [x] Score 98 in Performance on Lighthouse (*can't go higher than that — thanks, Adobe Fonts*)
- [x] Score 100 in Accessibility on Lighthouse
- [x] Score 100 in Best Practices on Lighthouse
- [x] Score 100 in SEO on Lighthouse
- [x] PWA-compliant on Lighthouse
- [x] Replace every jpg & png with avif
- [x] Fix the Chrome theme problem
    - [x] Hardcode DARK theme as the default web theme
- [x] Refine text typesetting (*paragraphs and lists*)
- [x] Refine typography scale
- [x] Fix issues with code paragraph text
- [x] Add alt descriptions to all the images
- Hotfixes
    - [x] Fix mobile main menu logo
    - [x] Fix the post-meta-background (*now it scrolls with the page instead of any weird shenanigans*) and post-nav-background (*grayscale without the js*)
    - [x] Fix blur (*add webkit values*)
- [x] Finish bts-18!
- [x] Redesign "Citace"
- [x] Add a date to the posts so that there is a full and clear release date
- [x] Redesign "O mně" & "O blogu"
- [x] Redesign the blockquotes (*add czech quotation marks*)
- [x] Design and add the bts logo to the main page
    - [x] Redo some of the parallax effects (*main index and post meta*)
- [x] Add "Závěr" to every bts post, so that the TOC makes sense (*I actually just used the Footnotes heading instead*)
- [x] Forced a highlight color for text and headlines
- [x] Redesign "Credits"
- [x] Redesign TOC
- [x] Fix some mobile issues
    - [x] Disable :hover
    - [x] Disable menu scroll
    - [x] Make the footer responsive
    - [x] Smaller H2 in older ↔ new post navigation
    - [x] Make the footnotes a bit smaller
    - [x] Change the padding of ul li & ol li
- [x] Make the footer nicer
    - [x] Redesign static pages "o-autorovi" (*also change the url/permalink*), "o-blogu"
        - [x] Unify the yamls and clear the css lingo for the "columns.scss" so its not a hot mess (*kinda*)
- [x] Define more fallback fonts
- [x] Fix some things in the mobile version (*make the menu nav thumb friendly, resize some headers*)
- [x] Add a footer
    - [x] Maybe add some contacts like :mailto and stuff
        - [x] Obfuscate said :mailto with plugin "jekyll-email-protect" (*kudos to [@vwochnik](https://github.com/vwochnik/jekyll-email-protect)!*)
- [x] Add a fancy parallax for the post bg (*and fixed the menu scroll so it looks a bit nicer*)
- [x] Redesign the older ↔ new post navigation
- [x] Fix the disappearing menu on the index page (*what one element set to "position: absolute" can do, huh*)
- [x] Find out how to change the default "↩" icon of footnotes to something else, so I don't have to resort to CSS trickery
- [x] Write a script which adds a "↑" after headings, which acts as an anchor to the TOC element
- [x] Make the colors more accessible
- [x] Design a nicer TOC
- [x] Change design of the post index (*bg = background of the whole element; post info above; glass effect*)
- [x] Declutter the whole repo (*mainly /_layouts and /_includes*)
- [x] Share my theme toggle icons
- [x] Change the default theme toggle icon to a set of my own
- [x] Let ESC key cancel the lightbox
- [x] Add redirect to all posts and shorten the URLs
- [x] Moved all javascripts into a separate folder (*/assets/js/*)
- [x] Changed how a block of code/inline code looks
- [x] Decide if the gallery description uses "⁂" or "∴" as markers (*it’s the ⁂*)
- [x] Add description to the gallery items
- [x] Add a lightbox to the gallery
- [x] Create a working gallery css
- [x] Integrate a lazy load script
- [x] Streamline the css (*using css variables and mixin*)
- [x] Make the RSS work better (*tried to use Feedburner, but the generated xml from "[jekyll-feed](https://github.com/jekyll/jekyll-feed)" works just fine, for now*)
- [x] Update thumbnails (*I hope for the last time*) (*lol, as if*)
- [x] Main favicon is now an svg ([thanks to an article by Antoine B.](https://medium.com/swlh/are-you-using-svg-favicons-yet-a-guide-for-modern-browsers-836a6aace3df)); other favicons are hi-res; minimized the need for excesive amount of different icons
- [x] Make the 404 a bit nicer
- [x] Add yaml published boolean
- [x] Add & fix hover for backgrounds
- [x] Add post backgrounds
- [x] Rework the post header design
- [x] Rework page layout
- [x] Remove unused css & make it more readable
- [x] Add RSS feed
- [x] Add site language & timezone
- [x] Revise the file structure ("moved 404", "home", "o-blogu" and "o-mne" to "_pages"; moved "thumbs" and "bg" from "assets" to "images")
- [x] Add post thumbnails
- [x] Reformat articles (add footnotes, add TOC liquid tags, add images)
- [x] Create gallery css
- [x] Migrate all Medium posts here
- [x] Add progress bar for posts
- [x] Create new layouts for the website
- [x] Edit the main css file (typography, colors, responsivity)
- [x] Find a theme
- [x] Set up Github Pages and Jekyll
