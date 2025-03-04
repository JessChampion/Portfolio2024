---
title: Employee cost calculator
published: true
summary: An interactive tool for businesses.
---

<p>
  The <a href="http://www.business.govt.nz/employeecostcalculator/" target="_blank">Employee cost calculator</a>
  (ECC) was a project I worked on with a small team from Solnet for the Ministry of Business, Innovation and Employment.
  The calculator is a tool featured on the ministry's CMS based website,
  which facilitates business owners in more accurately estimating how much it will cost them to hire a new employee.
</p>
<h4 class="post-subtitle">Architecture</h4>
<p>
  The tool was require to be hosted in the ministry website, and the content needed to be editable via the CMS.
  But they also required it to be built in such a way that it could be converted into an hybrid mobile app with little
  modification.
</p>
<p>
  To achieve this, the calculator was built as a standalone Angular JS application with HTML5 and SASS.
  To get the content from the CMS, a dummy html page was created in the CMS that had all the content in a uniform html
  structure.
  Our web-app load this HTML page and parse it, turning the HTML structure into JSON, which is stored in local storage.
</p>
<p>
  While a little complicated, this approach, decoupled the web-app from the CMS while still allowing the content editors
  to maintain the content easily,
  via the interface they were already familiar with.
</p>
<h4 class="post-subtitle">The user interface and cross-platform compatibility</h4>
<p>
  The MBIE website has an auto-redirect to mobile version of the website, and as such the ECC had to provide a mobile
  view as well as a traditional view.
  After analysing the UI designs provided, we determined that given the differences in formatting it would be better to
  have separate ui views and work-flows.
  Fortunately angular route, supports multiple views nicely.
  So it was a simple matter of detecting whether the user was on mobile version of the site or the full version, then
  directing them to the correct view.
</p>
<p>
  By utilising angular templating we were able to avoid a lot of replication of code by sharing re-used components
  between the views.
</p>
<jc-gallery>
<jc-mockup type="desktop">
  <img title="Desktop screen shot of the Employee cost calculator" src="/work-media/ECC-Desktop.png">
</jc-mockup><jc-mockup type="mobile">
  <img title="Mobile screen shot of the Employee cost calculator - Inputs" src="/work-media/ECC-Mobile.png">
</jc-mockup><jc-mockup type="mobile">
  <img title="Mobile screen shot of the Employee cost calculator - Costs" src="/work-media/ECC-Mobile-1.png">
</jc-mockup><jc-mockup type="mobile">
  <img title="Mobile screen shot of the Employee cost calculator - Totals" src="/work-media/ECC-Mobile-2.png">
</jc-mockup>
</jc-gallery>

<h4 class="post-subtitle">Email restore</h4>
<p>
  In addition to the main web application, we also built a small Java email server.
  This server when sent a request by the mobile app, generates a shortened restore link using goo.gl.
  The restore link, is emailed to the user, and can be used to re-populate the form as it had been filled in previously.
  To do this we had to get all the user-entered data into a url-safe encoding the fit under the 2083 character url max
  length enforced by IE and Chrome.
  To achieve applied gzip compression to the URL parameter and then encoded it using base 64 encoding.
</p>
