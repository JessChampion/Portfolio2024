---
layout: work
org: SilverStripe - for Superu
year: 2017-2018
sort: 2
title: The Hub
menu: work
thumbnail: /work-media/hub-phone.png
thumbnailOrientation: portrait
published: true
tasks:
  - Frontend Dev
  - Backend Dev
technologies:
  top:
    - SilverStripe
    - JavaScript
    - Vue
  additional:
    - SCSS
summary: A catalog of NZ Government funded social science research publications
---

The Hub was originally built for Superu, but since that agency's closure it has been managed by SIA.
Check it out at [thehub.sia.govt.nz](https://thehub.sia.govt.nz/).

<jc-gallery>
<jc-mockup type="mobile">
  <img title="mobile screenshot of thehub.superu.govt.nz" src="/work-media/hub-phone.png">
</jc-mockup><jc-mockup type="tablet">
  <img title="tablet screenshot of thehub.superu.govt.nz" src="/work-media/hub-tablet.png">
</jc-mockup><jc-mockup type="desktop">
  <img title="desktop screenshot of thehub.superu.govt.nz" src="/work-media/hub-desktop.png">
</jc-mockup>
</jc-gallery>

The Hub provides a catalog of the publications of social science research funded
by the New Zealand Government.
It was designed to help researchers, policy-makers and funders, find and leverage relevant research.

## Key Features

- CMS managed Catalog of NZ government funded social science research
- Search and Display of over 6000 research publications.
- Document storage and download
- Citation management

## Design and Build

The hub is on the Common Web Platform. As such it uses SilverStripe CMS and
Solr Search. The frontend is built with SilverStripe templating and SCSS for styling
and vanilla JS for navigation and search controls.

## Citation Plugin

One of the client’s key features was to have citation files be downloadable for the listed publications.
Researchers import these files into Resource Management software to keep track of their sources.
Finding no existing solution to leverage -
I created ['cite-this'](https://www.npmjs.com/package/cite-this) a citation plugin module, published via NPM.

<jc-gallery>
<jc-mockup type="tablet">
  <img title="Tablet screenshot of cite-this on thehub.superu.govt.nz" src="/work-media/cite-this-hub.png">
</jc-mockup><jc-mockup type="mobile">
  <img title="Mobile screenshot of cite-this demo jesschampion.github.io/citethis/" src="/work-media/cite-this-demo.png">
</jc-mockup>
</jc-gallery>

After analysing the file formats of the supported Reference Management software,
I created an algorithm which takes the available publication data,
and target file format then returns a string representation of the citation file contents.

I then created a standalone plugin, using Vue JS to handle the templating, styling and JavaScript required.
The citation file is generated on demand client-side, when the user selects which format to download.
The content string and filename are set dynamically on a link tag, and programmatically clicked to start the download.

This feature can be seen live on [the hub's resource pages](https://thehub.swa.govt.nz/resources/leading-innovative-learning-in-new-zealand-schools/).
Or on the [interactive demo](https://jesschampion.github.io/citethis/).
Following the release of this feature we had requests from another client to have the citation module added to their site as well.
