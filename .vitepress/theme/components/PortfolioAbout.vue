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
      both technical depth and product thinking to my work. I'm strongest on the
      frontend and work across the full stack. For more complex architecture,
      I'll bring in a domain expert and follow their lead. When I know the tools
      well, I'm happy to own the solution end to end.
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
      Since moving into delivery teams, I've put those lessons into practice,
      getting the fundamentals right before the polish and using agile practices
      as tools that fit the team and the problem rather than following them by
      the book. I care as much about a team's culture and process as I do about
      its code, because both can be engineered to hold up under real-world
      pressure. When the environment is well set up, quality and delivery go
      hand in hand rather than trade off against each other.
    </p>
    <h3 class="h4 _margin-top:2 _margin-bottom:1">Where I add value</h3>
    <PortfolioMasonaryGrid>
      <ul>
        <li class="col-span5 _margin-bottom:1/2!">
          <strong>Client collaboration</strong>
          Working directly with clients and stakeholders to understand the
          business, elicit requirements and evolve the product through feedback
          cycles.
        </li>
        <li class="col-span7 _margin-bottom:1/2!">
          <strong>Research and measurement</strong>
          Grounding product decisions in evidence, through user research such as
          surveys or interviews, direct user feedback and usage analytics.
          Designing and setting up the custom measurement strategy: from page
          load event tracking and scroll depth to conversion and key feature
          interactions.
        </li>
        <li
          class="accent-above col-span7 _margin-top:2/3! _margin-bottom:1/2! _margin-bottom:1/2!"
        >
          <strong>Bridging design and engineering</strong>
          Working closely with designers so that UX decisions remain technically
          feasible and edge cases are caught in the design stage rather than in
          production. Able to step in and run the basics of these practices in
          lean teams such as a startup where design specialists aren't in the
          budget.
        </li>
        <li
          class="col-span5 _margin-top:2/3! _margin-bottom:1/2! _margin-bottom:1/2!"
        >
          <strong>Design systems</strong>
          Building design systems and reusable component libraries that keep a
          product consistent and speed up delivery, with accessibility built in
          at the component level.
        </li>
        <li class="col-span5 _margin-top:2/3! _margin-bottom:1/2!">
          <strong>Frontend architecture</strong>
          Architecting frontend applications that stay fast and maintainable as
          they grow, so the technical foundations hold up over time. Performance
          is a first-class concern here, measured against metrics such as Core
          Web Vitals and production load times.
        </li>
        <li class="col-span7 _margin-top:2/3! _align-self:center!">
          <strong>Accessibility and discoverability</strong>
          Building to WCAG 2.1 AA and NZ government accessibility standards,
          with the structural foundations such as clean semantic HTML,
          well-formed content and schema structured data, which serve both
          traditional SEO and emerging AI-driven discovery (GEO).
        </li>
        <li class="col-span8 _margin-top:2/3! _margin-bottom:1/2!">
          <strong>Privacy and sensitive data </strong>
          Privacy-conscious engineering in regulated domains, with access
          controls, data masking and careful handling of sensitive data.
        </li>
        <li class="col-span4 _margin-top:2/3! _margin-bottom:1/2!">
          <strong>Legacy codebases</strong>
          Getting up to speed quickly in an unfamiliar or legacy codebase,
          working out where the most urgent technical debt is and paying it down
          through strategic, progressive refactoring while still delivering
          features.
        </li>
        <li class="col-span8 top-negative-gap">
          <strong>Project and development leadership</strong>
          Getting involved from the start to gather requirements, co-design with
          stakeholders and surface costs, benefits and trade-offs early, then
          managing delivery with pragmatic, agile-based methods.
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
          initial delivery stages, so we can change and evolve the system over
          time, informed by feedback and data from real-world user scenarios and
          bugs. To deliver this, I favour a modular, loosely coupled
          architecture with a clear separation of concerns and functional
          programming principles such as small, focused functions. I back that
          with automated test harnesses that focus coverage on core business
          logic and specified functionality, while allowing flexibility in the
          presentation layer. With a test harness in place, we can ship a first
          cut of a feature and refine it through continuous improvement and
          refactoring once real users have validated it rather than
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
          <h4 class="h5 _margin-bottom:0">Product and Design</h4>
        </template>
        <p>
          I've seen how even small UX issues or code inefficiencies can turn
          into pain points for thousands of people once a system is under load.
          That's why I enjoy bringing engineering thinking into product
          development, to help build beautiful, robust and performant web
          applications that make a real difference for the people who use them.
          I ground design decisions in real user research: surveys, interviews
          and usage data to shape and test ideas. I believe in anchoring designs
          around user journeys and optimising workflows for core tasks to reduce
          the administrative overhead in users' daily work. On larger projects,
          changing course later is expensive. I'd rather find the problems in
          wireframes or prototypes, where they're cheap to fix, and only move to
          implementation in code once the design has held up to real scrutiny.
        </p>
        <p>
          Beyond getting the UX basics right, I enjoy creating user delight by
          adding the finishing touches that make a product feel considered:
          performant CSS animations and transitions, and accessibility details
          like full keyboard navigation.
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
          and trade-offs. Where it's not feasible for the whole team to be
          involved throughout the design process, we can backfill some of that
          context by sharing what we learned in user research and design
          sessions, and creating resources like personas that tie what's being
          built to real user scenarios. Programmers make thousands of
          microdecisions a day, and in my experience, we get better product
          outcomes when those decisions are made with a deep understanding of
          the end users and the context in which the product is used.
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
          That safety depends on open communication and knowledge sharing. I
          establish it by circulating useful articles or videos on patterns
          relevant to the current work, or by preparing talks to explain more
          complex ideas I want to introduce. When the rest of the team does the
          same, and people are openly credited for the good ideas they bring, a
          culture of learning grows on its own. That's what builds teams that
          are productive, supportive, and creative, where we have fun while
          delivering great products.
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
