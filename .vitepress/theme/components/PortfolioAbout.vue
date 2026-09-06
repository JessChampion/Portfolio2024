<script setup>
import PortfolioSection from "./PortfolioSection.vue";
import PortfolioMasonaryGrid from "./PortfolioMasonaryGrid.vue";
</script>

<template>
  <div class="_max-width:100%">
    <p>
      I specialise in JavaScript and web technologies, with strong experience in
      Node.js, TypeScript and React. I graduated in 2011 with a Bachelor of
      Computing and Mathematical Science with First Class Honours, and bring
      both technical depth and product thinking to my work. I’m
      frontend-leaning, but work across the full stack. For more complex
      architectures, I'll partner with domain experts and draw on their
      expertise. When I know the tools well, I'm happy to own the solution
      end-to-end.
    </p>
    <p>
      I spent five years of my early career in operational development,
      ITIL-certified, diagnosing and fixing production issues in high-traffic
      codebases for some of New Zealand's leading brands. It gave me a close-up
      view of how development practices, patterns and anti-patterns play out
      over a system's lifespan, and it's where my commitment to maintainable,
      well-documented systems that earn long-term trust from the business and
      its customers comes from.
    </p>
    <p>
      Since moving into delivery teams, I've put those lessons to work: shaping
      how a team tests, reviews and ships, not just what it builds. I believe a
      team's culture and process can be engineered as deliberately as its code,
      refined over time to reduce friction, so how a team delivers is as robust
      as what it builds.
    </p>
    <h3 class="h4 _margin-top:2 _margin-bottom:1">Where I add value</h3>
    <PortfolioMasonaryGrid>
      <ul>
        <li class="col-span5 client-collaboration">
          <h4>Client collaboration</h4>
          Working directly with clients and stakeholders to understand the
          business, elicit requirements and evolve the product through feedback
          cycles.
        </li>
        <li class="col-span7 research-measurement">
          <h4>Research and measurement</h4>
          Grounding product decisions in evidence through user research such as
          surveys or interviews, direct user feedback and usage analytics.
          Designing and setting up the custom measurement strategy: from page
          load event tracking and scroll depth to conversion and key feature
          interactions.
        </li>
        <li class="accent-above col-span7 design-engineering-bridge">
          <h4>Bridging design and engineering</h4>
          Working closely with designers so that UX decisions remain technically
          feasible and edge cases are caught in the design stage rather than in
          production. Able to step in and run the basics of these practices in
          lean teams such as a startup where design specialists aren't in the
          budget.
        </li>
        <li class="col-span5 design-systems">
          <h4>Design systems</h4>
          Building design systems and reusable component libraries that keep a
          product consistent and speed up delivery, with accessibility built in
          at the component level.
        </li>
        <li class="col-span5 frontend-architecture">
          <h4>Frontend architecture</h4>
          Architecting frontend applications that stay fast and maintainable as
          they grow, so the technical foundations hold up over time. Performance
          is a first-class concern here, measured against metrics such as Core
          Web Vitals and production load times.
        </li>
        <li class="col-span7 accessibility-discoverability">
          <h4>Accessibility and discoverability</h4>
          Building to WCAG 2.1 AA and NZ government accessibility standards,
          with the structural foundations such as clean semantic HTML,
          well-formed content and schema structured data, which serve both
          traditional SEO and emerging AI-driven discovery (GEO).
        </li>
        <li class="col-span8 privacy-sensitive-data">
          <h4>Privacy and sensitive data</h4>
          Privacy-conscious engineering in regulated domains, with access
          controls, data masking and careful handling of sensitive data.
        </li>
        <li class="col-span4 legacy-codebases">
          <h4>Legacy codebases</h4>
          Getting up to speed quickly in an unfamiliar or legacy codebase,
          working out where the most urgent technical debt is and paying it down
          through strategic, progressive refactoring while still delivering
          features.
        </li>
        <li class="col-span8 project-leadership">
          <h4>Project and development leadership</h4>
          Getting involved from the start to gather requirements, co-design with
          stakeholders and surface costs, benefits and trade-offs early.
          Managing delivery with pragmatic agile practices adapted to fit the
          team and the problem.
        </li>
      </ul>
    </PortfolioMasonaryGrid>
    <h3 class="h4 _margin-top:2 _margin-bottom:1">Passionate about</h3>
    <div>
      <PortfolioSection class="passions" is-open>
        <template #header>
          <h4 class="h5 _margin-bottom:0">Quality and maintainability</h4>
        </template>
        <p>
          Quality is a set of trade-offs; my years in production support taught
          me to prioritise readability and easy-to-reason-about code in the
          initial delivery stages, so the system can evolve, informed by
          feedback and data from real-world user scenarios and bug reports. I
          design solutions with loose coupling and high cohesion, producing
          modular components that communicate through defined public APIs.
          Within these, I lean on functional programming concepts - such as
          composability, pure functions, immutable data, predictable state, and
          contained side effects - so the UI resolves to a finite, well-defined
          set of states that's straightforward to test. Automated unit and e2e
          tests that protect core business logic and specified functionality,
          while leaving the presentation layer free to change, provide a safety
          net that allows us to ship a first cut of a feature and refine it
          through refactoring once real users have validated it, rather than
          over-optimising something unproven.
        </p>
        <p>
          Tests also double as living documentation of how the code is meant to
          behave. I reinforce this with shared development documentation such as
          READMEs or wikis, to record key design decisions and agreed code
          standards. This also helps new team members and, increasingly, AI
          agents get up to speed in the codebase quickly. Claude and Cursor are
          part of my daily workflow for speed and quality; I find they're better
          at reasoning about and modifying existing code than creating from
          scratch. When I do use them from a clean slate, I get the best results
          by breaking development into smaller, discrete requests, closer to a
          pair-programming workflow: I still drive the code architecture and
          patterns myself, testing and refining at each step.
        </p>
      </PortfolioSection>
      <PortfolioSection class="passions" is-open>
        <template #header>
          <h4 class="h5 _margin-bottom:0">Product and design</h4>
        </template>
        <p>
          I've seen how even small UX issues or code inefficiencies can turn
          into pain points for thousands of people once a system is under load.
          That's why I enjoy bringing engineering thinking into product
          development, to help build beautiful, robust and performant web
          applications that make a real difference for the people who use them.
        </p>
        <p>
          I ground design decisions in real user research: surveys, interviews
          and usage data to shape and test ideas. I believe in anchoring designs
          around user journeys and optimising workflows for core tasks to reduce
          the administrative overhead in users' daily work. On larger projects,
          changing course later is expensive. I'd rather find the problems in
          wireframes or prototypes, where they're cheap to fix, and only move to
          implementation in code once the design has held up to scrutiny.
        </p>
        <p>
          Beyond the UX basics, I care about the finishing touches that make a
          product feel intentional: performant CSS animations and transitions,
          and accessibility details like full keyboard navigation. Building
          these details into a design system or shared components layer means
          the investment pays off across the whole product as we reuse the
          polished building blocks to deliver new features.
        </p>
      </PortfolioSection>
      <PortfolioSection class="passions" is-open>
        <template #header>
          <h4 class="h5 _margin-bottom:0">Collaboration</h4>
        </template>
        <p>
          I relish the opportunity to be closely involved from the earliest
          stages, collaborating with clients, stakeholders, design and
          architecture functions to co-design solutions. I start by building an
          understanding of the domain context, problem space, user needs and
          pain points, from which to surface requirements, opportunities, risks
          and trade-offs.
        </p>
        <p>
          Where it's not feasible for the whole team to be involved throughout
          the design process, we can backfill some of that context by sharing
          what we learned in user research and design sessions, and creating
          resources like personas that tie what's being built to real user
          scenarios. Programmers make thousands of microdecisions a day, and in
          my experience, we get better product outcomes when those decisions are
          made with a deep understanding of the end users and the context in
          which the product is used.
        </p>
        <p>
          As a project and development lead, I stay hands-on in delivery while
          managing the agile process, liaising with clients or suppliers, and
          mentoring and supporting other developers on the build. I shape code
          patterns, tooling and architecture through knowledge sharing,
          demonstrations, code reviews and building consensus. I find growth
          opportunities within the work itself that align with developers'
          personal goals and provide a safety net and escalation point so they
          feel empowered to take on new challenges.
        </p>
      </PortfolioSection>
      <PortfolioSection class="passions" is-open>
        <template #header>
          <h4 class="h5 _margin-bottom:0">High-performing teams</h4>
        </template>
        <p class="_margin-bottom:0">
          The most effective teams I've been a part of had an active practice of
          continuous reflection and improvement. When standards and practices
          are collaboratively agreed upon, and people feel they have a genuine
          say and influence, it leads to greater personal commitment to showing
          up for the team and upholding agreements.
        </p>
        <p>
          Psychological safety is what keeps a team resilient: an environment
          where people feel safe to share ideas, raise issues early and
          pressure-test concepts through healthy debate. For this reason, I
          believe in keeping incident reviews blameless and solution-focused,
          treating a failure as something for the team and the system to learn
          from rather than drawing attention to or blaming any particular
          individual.
        </p>
        <p>
          That safety is the basis on which I deliberately build a culture of
          knowledge sharing, which I nurture by circulating useful articles or
          videos on patterns relevant to the current work, and by preparing
          talks to explain more complex ideas I want to introduce. I encourage
          the whole team to share and explore ideas and to openly champion those
          who do so, until the culture becomes self-sustaining. That's how you
          get teams that are productive, supportive, and creative, where we have
          fun while delivering great products.
        </p>
      </PortfolioSection>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../inkline-variables/mixins.scss" as *;
.passions {
  background: var(--body--background-alt);
  transition: var(--transition-background-color);
  border-radius: var(--border-radius-rounded);
  margin-bottom: var(--gap-1-2);

  ul {
    padding-bottom: var(--gap-3-4);
  }
}

.skills {
  display: flex;
  align-items: center;
  gap: var(--gap);

  &__card {
    background: var(--body--background-alt2);
    transition: var(--transition-background-color);
    border-radius: var(--border-radius-rounded) var(--border-radius-rounded)
      var(--border-radius-rounded) var(--border-top-left-radius-lg);
    padding: var(--gap);
    min-width: 45vw;
    width: max-content;
    max-width: 55vw;

    @include breakpoint-sm-up {
      min-width: 25vw;
      width: max-content;
      max-width: 35vw;
    }

    &:nth-of-type(2n) {
      border-radius: var(--border-radius-rounded) var(--border-radius-rounded)
        var(--border-top-left-radius-lg) var(--border-radius-rounded);
    }

    &:nth-of-type(3n) {
      border-radius: var(--border-radius-rounded)
        var(--border-top-left-radius-lg) var(--border-radius-rounded)
        var(--border-radius-rounded);
    }

    &:nth-of-type(4n) {
      border-radius: var(--border-top-left-radius-lg)
        var(--border-radius-rounded) var(--border-radius-rounded)
        var(--border-radius-rounded);
    }

    ul {
      margin-bottom: 0;
      padding-left: var(--gap-3-4);
    }
  }
}

.icon {
  width: 2rem;
  height: 2rem;
  transition: var(--transition-color);
}
</style>
