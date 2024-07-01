---
layout: work
org: The Ministry of Education
year: 2019
sort: 1
title: StudyIt
menu: work
thumbnail: /work-media/studyit-phone.jpg
thumbnailOrientation: portrait
published: true
tasks:
  - Tech Lead
  - Frontend Dev
  - Backend Dev
technologies:
  top:
    - Vue
    - GraphQL
    - Discourse
  additional:
    - RamdaJS
    - SCSS
    - SilverStripe
    - CircleCI
summary: A Study platform for NCEA Students
---

The 2019 upgrade of [studyit.govt.nz](https://studyit.govt.nz/) was an exciting opportunity
to completely rebuild one of the Ministry's oldest and most popular digital products.
Check out the 10 year old site we replaced on the
[wayback machine](https://web.archive.org/web/20190602065532/http://www.studyit.org.nz/)

<jc-gallery>
<jc-mockup type="desktop">
  <img title="desktop screenshot of studyit.govt.nz" src="/work-media/studyit-desktop.jpg">
</jc-mockup><jc-mockup type="mobile">
  <img title="mobile screenshot of studyit.govt.nz" src="/work-media/studyit-phone.jpg">
</jc-mockup><jc-mockup type="tablet">
  <img title="tablet screenshot of studyit.govt.nz" src="/work-media/studyit-tablet.jpg">
</jc-mockup>
</jc-gallery>

## Objectives

The key objectives of the rebuild were:

- Stabilise the platform and allow it to cope with increases load
- Make the site mobile-friendly, as students often access educational resources on their phones
- Standardise and simplify the information architecture
- Address usability and accessibility issues to ensure the new site was compliant with NZ Government Web Standards.
- Updating the look and feel to fit with the rest of the digital products in the education sector.

## Architecture and Build

We build a decoupled Progressive Web App (PWA) and content API.
The frontend app was built in Vue js, and the content API was built with SilverStripe 4 and GraphQL.
Mobile devices are a key channel for students so the site had to be .
Caching in the PWA allows students to use the app offline and helps preserve their limited mobile data.
The backend allows content editors to manage the structure data and content in a content management GUI,
which is then published to the GraphQL API.

The forums are powered by a cloud-hosted Discourse instance with a highly customised theme.
Using Discourse's SaaS product gave us a comprehensive feature set,
scalable infrastructure and accessibility compliance out of the box.
They also offered robust enterprise support options required to meet government regulations.

Vue Components can be used as Plugins inside other apps, so we were able to directly inject
components from our main app, such as the header and footer.
They request data from the same backend API.
This not only saved us coding time,
but allowed us to seamlessly tie the two systems together as a unified user experience.
