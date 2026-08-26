<script setup>
import PortfolioSection from "./PortfolioSection.vue";
</script>

<template>
  <div class="_max-width:100%">
    <p>
      I'm a digital product engineer specialising in JavaScript and web
      technologies, with strong experience in Node.js, TypeScript and React. I
      graduated in 2011 with a Bachelor of Computing and Mathematical Science
      with First Class Honours, and bring both technical depth and product
      thinking to my work.
    </p>
    <p>
      While my expertise is deepest on the frontend, I'm comfortable working
      across the stack: where a stack is familiar, I can take full-stack
      ownership from infrastructure through to the UI. On less familiar ground
      or on complex backends, I'd rather partner with engineers who specialise
      in them and lean on their depth.
    </p>
    <p>
      I spent the first five years of my career in operational development,
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
    <ul>
      <li>
        <strong>Legacy codebases:</strong> getting up to speed quickly in an
        unfamiliar or legacy codebase, working out where the most urgent
        technical debt is and paying it down through strategic, progressive
        refactoring while still delivering features.
      </li>
      <li>
        <strong>Frontend architecture:</strong> architecting frontend
        applications that stay fast and maintainable as they grow, so the
        technical foundations hold up over time.
      </li>
      <li>
        <strong>Accessibility and discoverability:</strong> building to WCAG 2.1
        AA and NZ government accessibility standards, with the structured,
        semantic foundations (schema data, clean semantic HTML, well-formed
        content) that serve both traditional SEO and emerging AI-driven
        discovery (GEO).
      </li>
      <li>
        <strong>Client collaboration:</strong> working directly with clients and
        stakeholders to understand the business, elicit requirements and evolve
        the product through feedback cycles.
      </li>
      <li>
        <strong>Product measurement:</strong> setting up custom analytics and
        event tracking, from page loads and scroll depth to conversion events,
        navigation and journey mapping, and key feature interactions, so product
        decisions are grounded in real user behaviour rather than assumptions.
      </li>
      <li>
        <strong>Bridging design and engineering:</strong> working closely with
        designers so UX decisions stay technically feasible and the edge cases
        get caught in the design stage rather than in production.
      </li>
      <li>
        <strong>Design systems:</strong> building design systems and reusable
        component libraries that keep a product consistent and speed delivery
        up, with accessibility built in at the component level. UX research from
        scratch: standing up a UX research practice where there isn't one, from
        surveys and interviews to weighting feedback into a prioritised list, so
        product decisions reflect real user needs.
      </li>
      <li>
        <strong>Project and development leadership:</strong> managing delivery
        with pragmatic, agile-based methods and getting involved from the start,
        gathering requirements, co-designing with stakeholders, and surfacing
        costs, benefits and trade-offs early.
      </li>
    </ul>
    <h3 class="h4 _margin-top:2 _margin-bottom:1">Passionate about</h3>
    <div>
      <PortfolioSection class="passions" is-open>
        <template #header>
          <h4 class="h5 _margin-bottom:0">Quality and maintainability</h4>
        </template>
        <p>
          Upfront investment in quality drastically improves the lifespan of a
          solution. Most of what I do comes back to maintainability, building
          systems that are straightforward to understand, evolve and support
          over time. That means continuous improvement through regular
          refactoring, a modular, reusable architecture, functional programming
          principles such as small, focused functions and few side effects, and
          automated checks against agreed-upon code standards. But quality is a
          set of trade-offs rather than a checklist, so I match the depth of
          investment to the problem and to where deeper rigour actually pays
          off.
        </p>
        <p>
          My years in 24/7 production support taught me to design for
          operational readiness: building systems that can be monitored,
          diagnosed and recovered quickly when something goes wrong. Automated
          testing is the safety net I'll advocate for hardest. It catches bugs
          early, forces me to work through the edge cases and sad paths, and
          makes change faster and safer by protecting the functionality that
          already works. Tests double as living documentation of how the code is
          meant to behave. I back that up with shared documentation, readmes,
          wikis and design records, so new team members and, increasingly, AI
          agents can get up to speed quickly. I take the same pragmatic view of
          AI-assisted tooling: I use Claude, Cursor and Copilot day-to-day, but,
          critically, I lean on them where they genuinely improve quality and
          speed, keeping human judgement at the centre of technical decisions.
        </p>
        <p>
          I treat performance as a first-class concern rather than an
          afterthought, and I measure it against real-world numbers, from Core
          Web Vitals to load times under production conditions. In sensitive
          domains, I know how to take a privacy-conscious approach, with proper
          access controls, data masking and careful handling of regulated data.
        </p>
      </PortfolioSection>
      <PortfolioSection class="passions" is-open>
        <template #header>
          <h4 class="h5 _margin-bottom:0">Product and Design</h4>
        </template>
        <p>
          I love to build beautiful, robust and performant web applications that
          make a real difference for the people who use them. I've seen how even
          small UX issues or code inefficiencies turn into real pain points for
          thousands of people once a system is under load, so I like bringing
          engineering thinking into product decisions early rather than picking
          up a finished design at the end. The goal I keep coming back to is
          using my creativity and problem-solving to build products that have a
          real, positive impact on people's lives.
        </p>
        <p>
          I ground design decisions in real user research and data rather than
          intuition alone, using surveys, interviews and usage data to shape and
          test ideas. I'd iterate on wireframes and prototypes before jumping
          into implementation, so a design actually solves the user's problem
          rather than just looking right. A lot of my focus goes on cutting
          administrative overhead, designing interfaces that let people get on
          with their core work instead of wrestling with the tool meant to help
          them.
        </p>
        <p>
          I care about the craft of the interface too. I've got an eye for
          visual design and information visualisation, and I like making
          products that are not just usable but delightful. Performant CSS
          animations and transitions are part of that, adding polish and a sense
          of feeling to an interface so it comes across as considered rather
          than mechanical.
        </p>
      </PortfolioSection>
      <PortfolioSection class="passions" is-open>
        <template #header>
          <h4 class="h5 _margin-bottom:0">Collaboration</h4>
        </template>
        <p>
          I enjoy solving complex problems with elegant, pragmatic solutions,
          whether they're technical, client-related or down to team dynamics. As
          an experienced project and development lead, I manage delivery with
          agile-based methods that fit the project and the people on it. I like
          being hands-on from the earliest stages, working with stakeholders to
          gather requirements and co-design solutions, and surfacing the costs,
          benefits and trade-offs early so a project avoids surprises down the
          track.
        </p>
        <p>
          Through delivery I stay hands-on, managing the agile process, liaising
          with business units and suppliers, and supporting the other developers
          on the build. I shape patterns, tooling and architecture through
          demonstration, code review and building consensus rather than through
          formal authority. Mentoring matters to me: it's central to developing
          engineers' skills and confidence, and I provide a safety net through
          pairing and constructive code reviews - so people feel able to take on
          harder tasks and grow.
        </p>
        <p>
          Knowledge sharing runs through all of this. I help teams deliver by
          sharing the practices and methods that work. In code reviews, I'd
          rather let automated tooling like linters handle basic stylistic and
          common-practice issues a team has agreed on, so reviews can focus on
          what matters: real opportunities to improve the code or the UX, like
          reducing duplication, improving performance, or making something more
          reusable. And I love working closely with good designers. When design
          and engineering work together, we get better results faster, and we
          each learn from the other.
        </p>
      </PortfolioSection>
      <PortfolioSection class="passions" is-open>
        <template #header>
          <h4 class="h5 _margin-bottom:0">High-performing teams</h4>
        </template>
        <p class="_margin-bottom:0">
          Teams do their best work when they own and experiment with their
          practices, building a habit of continuous reflection and improvement,
          and adapting how they work to the challenges and personalities in the
          room. Done well, that gives you more than speed. It gives you more
          stable, maintainable systems that last.
        </p>
        <p>
          A lot of it comes down to psychological safety and open knowledge
          sharing. I'd keep incident reviews blameless and solution-focused,
          treating a failure as something for the team and the system to learn
          from rather than grounds to blame an individual. That's what makes it
          safe for people to raise issues early and to be wrong, which is where
          curiosity and healthy debate come from. Crediting people openly when
          they bring a good technique, and keeping ideas moving, is how a
          culture of learning actually grows.
        </p>
        <p>
          Technical standards hold up when the whole team is learning and
          adopting good practice, so I put time into that: educating and
          encouraging it, mentoring graduate developers, helping with
          recruitment, and providing technical leadership and escalation when
          it's needed. And by keeping the business and technical processes under
          regular review, I help build teams that are effective and productive,
          but also creative, resilient and good fun to be part of.
        </p>
      </PortfolioSection>
    </div>
  </div>
  <!--  <div class="section _margin-bottom:2">-->
  <!--    <h3 class="h4 _margin-top:2 _margin-bottom:1">Recent projects</h3>-->
  <!--    <PortfolioRow></PortfolioRow>-->
  <!--  </div>-->
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
