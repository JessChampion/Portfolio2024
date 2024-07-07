---
title: Trustees Webapp
published: true
summary: A wealth management with a modern user experience.
---

A web app for customers to manage their KiwiSaver and other investment funds.
It provides a performant, modern user experience from legacy data sources.

## Objectives

The clients key objectives for the app were

- modern and mobile friendly user experience
- to create a web api that allowed secure access to data from their legacy data sources.
- Efficient caching to avoid adding excessive extra load to the legacy systems.
- multiple skins for the app so that it could be customised to
  the distinct branding of several funds.

## Architecture and Build

The backend is a Hapi server exposing a GraphQL API.
It sourced data from the legacy data sources via a mix of SOAP requests and SQL queries, and caches processed data to aid performance.

The frontend is a responsive React app which queries the backend with Relay.

One of the key requirements was the ability to have multiple skins for the app so that it could be customised to
the distinct branding of different funds. This included customising fonts, colours and imagery.

PostCSS allowed us to support modern CSS features such as global variables which facilitated
supporting multiple themes while keeping the build bundle size small.

<jc-gallery>
<jc-mockup type="mobile">
  <img title="mobile screenshot of Milford 'themed' - Overview page" src="/work-media/Trustees-Overview.jpg">
</jc-mockup><jc-mockup type="mobile">
  <img title="mobile screenshot of Milford 'themed' - Account page" src="/work-media/Trustees-Account.jpg">
</jc-mockup>
</jc-gallery>

## RamdaJS and functional programming

One of the most interesting aspects of this project was the data manipulations that
was required to get the SOAP and SQL data into appropriate formats for the frontend.
To do this we utilised the Ramda functional JavaScript library,
which allowed us to perform complex data manipulations, cleanly and efficiently.
