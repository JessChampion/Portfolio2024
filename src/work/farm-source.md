---
title: Farm Source
published: true
summary: A complete rebuild of Fonterra's online farmer portal.
---

<a href="https://nzfarmsource.co.nz" target="_blank">Fonterra Farm Source</a>
was the first major project I was involved on during my time at Solnet.
The project was a complete rebuild of Fonterra's online farmer portal (previously called Fencepost).
I was involved from the very early stages of the project, and primarily handled the frontend development of some core pieces of functionality.

<br/>
<jc-mockup type="desktop">
  <img title="desktop screenshot of nzfarmsource.co.nz in 2015" src="/work-media/FS-Homepage-Desktop.png">
</jc-mockup>
<br/>

## Design and Build

The front end of Farm Source is built on SilverStripe CMS integrated AngularJS.
This combination of technologies allowed us to achieve a more interactive user experience, than achievable with a standard SilverStripe website.
To encourage the quality and maintainability of the project; I set up and encouraged the adoption of frontend unit testing with Jasmine and karma.
I was also responsible for developing and documenting the frontend coding and styling standards for the project.

### Responsive design

Much of the Farm Source site is responsive. This was achieved using a combination of bootstrap grid layouts and custom media queries.
My preferred technique for responsive websites is not to focus on device sizes,
I prefer to start with the mobile designs, then adjust the screen size up, adding in breakpoints based on the needs of the design.
The advantages of this approach is that the layout will support all screen sizes, making the layout more future proof.

Due to time restraints and usability testing schedules, we often had to start development with just the desktop design.
In these cases I reversed this process and coded desktop first. I would then liaise with the designers about our options of the mobile views,
helping to balance usability with technical feasibility and efficiency.

<jc-gallery>
<jc-mockup type="mobile">
<img title="mobile screenshot of farmsource's interactive milk production and quality reports in 2015" src="/work-media/FS-MPQ-Mobile.png">
</jc-mockup><jc-mockup type="tablet">
<img title="tablet screenshot of farmsource's interactive milk production and quality reports in 2015" src="/work-media/FS-MPQ-Tablet.png">
</jc-mockup><jc-mockup type="desktop">
<img title="desktop screenshot of farmsource's interactive milk production and quality reports in 2015" src="/work-media/FS-MPQ-Desktop.png">
</jc-mockup>
</jc-gallery>
