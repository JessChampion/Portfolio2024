---
layout: work
org: Solnet - for Fonterra
year: 2014
sort: 2
title: Farm Source Jobs
menu: work
thumbnail: /work-media/FSJobsThumbnail.png
thumbnailOrientation: portrait
published: true
tasks:
  - Frontend Dev
technologies:
  top:
    - JavaScript
    - CSS
    - SilverStripe
  additional:
    - PHP
    - Jasmine
    - JQuery
summary: A digital employment platform for the dairy industry.
---

As a part of the continuing work on the Farm Source platform I contributed to the development of
<a href="http://nzfarmsource.co.nz/jobs/" target="_blank">Farm Source Jobs</a>:
An employment platform for job seekers and employeers in the dairy industry.
FS Jobs allows employers to post job listings and job seekers to post profiles.
Users can apply for listed jobs or contact job seekers through the platform.

<jc-gallery>
<jc-mockup type="desktop">
  <img title="Desktop screenshot of FS Jobs homepage" src="/work-media/FSJobsHomepage.png">
</jc-mockup><jc-mockup type="desktop">
  <img title="Desktop screenshot of FS Jobs search results" src="/work-media/FSJobsSearchResults.png">
</jc-mockup>
</jc-gallery>

## Design and Build

Jobs was built as a SilverStripe module and runs as a part of the main Farm Source website, but with its own look and feel.
My work mostly focused on the front-end, using HTML, CSS and a sprinkling of Angular JS.

### Responsive design

Given the target audience, it was important for FS Jobs to be mobile friendly.
We designed and built it to run seamlessly on a wide range of devices and screen sizes, using responsive web development techniques.

### Reusable front end components

At this point Farm Source was live and still being developed by a team of around five developers.
The rapid rate of the change had resulted in a lot of duplication of CSS and other front end code.

Because FS Jobs was to have a variant theme, I was concerned about how to structure the CSS to utilise the common elements with FarmSource,
While reducing the technical debt that had arisen. and make more reusable front end components.
I achieved this, by having FS Jobs import the base Farm Source theme and then

My favourite re-usable component is the Location selector.
It was built largely from scratch and with angular and css, and bootstrap's drop-down functionality.
The selection options are imported from hierarchical json data and recursion is used to dynamically render the options based on the data.
This means that the location list can be updated in the CMS without requiring front-end changes.
<br/>
<br/>
<img title="desktop screenshot of Location selector" src="/work-media/FSJobsLocationSelector.png" style="max-width:20rem">
