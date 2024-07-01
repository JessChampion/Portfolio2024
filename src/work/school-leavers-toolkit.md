---
layout: work
org: The Ministry of Education
year: 2018-2019
sort: 2
title: School Leavers Toolkit
menu: work
thumbnail: /work-media/sltk-phone.png
thumbnailOrientation: portrait
published: true
tasks:
  - Tech Lead
  - Frontend Dev
  - Backend Dev
technologies:
  top:
    - Vue
    - Algolia
    - SilverStripe
  additional:
    - SCSS
    - CircleCI
summary: A collection of resources for teachers
---

## School Leavers Toolkit's - for Teachers

This Teacher facing site provides teachers with a catalogue of curated resources
in the subjects of financial literacy, civics education and key workplace competencies.

<jc-gallery>
<jc-mockup type="mobile">
  <img title="mobile screenshot of sltk-resources.tki.org.nz" src="/work-media/sltk-phone.png">
</jc-mockup><jc-mockup type="tablet">
  <img title="tablet screenshot of sltk-resources.tki.org.nz" src="/work-media/sltk-tablet.png">
</jc-mockup><jc-mockup type="desktop">
  <img title="desktop screenshot of sltk-resources.tki.org.nz" src="/work-media/sltk-desktop.png">
</jc-mockup>
</jc-gallery>

## Key Features

- CMS managed catalog of resources with CSV import and export
- Frontend search and filter area
- Bilingual support

## Design and Build

By working very collaboratively with one of our amazing designers we we're able to deliver this entire project in less than four weeks.

It is built with SilverStripe 4 Content Management System and Framework using PHP,
with the frontend heavy lifting done in Vue.

We used SilverStripe 4 elemental blocks to empower the content editor
to customise the page layout and fit their users needs as they adapt over time.

### Algolia Search

Algolia is Awesome! So much easier using Solr Search.
Setting up the index and integrating with the CMS was a smooth process,
but the real winning feature is the 'instant search' ui library (we used the vue version).

This provides a set of highly customisable UI components that can be used to quickly
create a wide range of search and filtering user interfaces.

The base components were flexible and easy to over-style,
meaning we we're able to quickly create a complex search UI,
without having to sacrifice our ideal user experience to adapt to the library.
