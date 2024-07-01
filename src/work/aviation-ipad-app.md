---
layout: work
org: MetService
year: 2013
sort: 5
title: Aviation iPad App
menu: work
published: false
thumbnail: /work-media/aviationIpad1.png
thumbnailOrientation: portrait
tasks:
  - UX Design
  - Frontend Dev
  - Backend Dev
technologies:
  top:
    - Objective C
    - Java
  additional:
summary: A B2B aviation weather iPad app for commercial pilots.
---

<div></div>
<jc-card>
    A B2B iPad application to deliver aviation weather data to commercial pilots. I led the
    Objective-C development as well as product and interaction design on this project.
</jc-card>
<jc-card title="The design concept" :heading-level="3">
    One of the key considerations when designing this product was that airlines are very
    resistant to changes in how they receive their data. For this reason I decided that version one of this application
    should digitise the printed briefings pilots were currently receiving. This may seems like an overly simplistic
    approach but it provided us an easy first step into using mobile delivery channels. 
</jc-card>
<jc-card>
    Using the paper based package as
    the &ldquo;metaphor&rdquo; for the app reduced the risk of the app being rejected by the users because it didn&rsquo;t
    fit with their current working practices. The digital medium allowed us to implement several features that enhanced
    the experience beyond what a paper copy could provide. These include:
    <ul>
        <li>on demand updating of data.</li>
        <li>colour imagery</li>
        <li>easier navigation</li>
    </ul>
</jc-card>
<jc-card title="The finished product" :heading-level="3">
    The product works by scanning a QR code delivered to the pilots
    in their preflight briefing papers. The app requests the predefined custom weather briefing package from a web
    service running on the java based backend system. The data is returned in a json structure which the app loads into
    the view.
</jc-card> 
<jc-card>    
    <div class="picture-container md">
        <img class="post-image" alt="image" src="/work-media/aviationIpad1.png"/>
    </div>
</jc-card> 
<jc-card>
    The side bar menu slides out and away. 
    It provides options to refresh the current package or 
    load a new package by scanning a QR code.
</jc-card> 
<jc-card>    
    <div class="picture-container md">
        <img class="post-image" alt="image" src="/work-media/aviationIpad2.png"/>
    </div>
</jc-card>
<jc-card>
    The sections of the package expand and contract to allow easy navigation of the content. We used logical
    grouping and ordering of data to make it easier for pilots to find the data relevant to them at any given point in
    time. 
</jc-card>
<jc-card>
    For example flight charts were grouped by type and flight level then ordered by time. This means that instead
    of leafing through pages of images pilots can go directly to the charts segment, find the chart they are interested
    in and flick though the group of images to see how it changes over time.
</jc-card>
<jc-card>
<div class="picture-container md">
    <img class="post-image" alt="image" src="/work-media/aviationIpad3.png"/>
</div>
</jc-card>
<jc-card>
    The application was successfully submitted to the apple B2B store and Initial client feedback was resoundingly
    positive. 
</jc-card>
