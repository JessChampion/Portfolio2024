<script setup>
import PortfolioSection from "./PortfolioSection.vue";
</script>

<template>
  <div class="_max-width:100%">
    <p>
      I'm a digital product engineer specialising in JavaScript and web
      technologies, with strong experience in Node.js, TypeScript, and React. I
      graduated in 2011 with a Bachelor of Computing and Mathematical Science
      with First Class Honours.
    </p>
    <p>
      I spent five years of my early career in operational development - ITIL
      certified, diagnosing and fixing production issues in high-traffic
      codebases - for some of New Zealand's leading brands. This experience gave
      me a close-up view of how development practices and patterns - and
      anti-patterns - play out over a system’s lifespan, reinforcing my
      commitment to maintainable, well-documented systems that earn long-term
      trust from the business and its customers.
    </p>

    <p>
      Since moving into delivery teams, I've put those lessons into practice:
      getting the fundamentals right before the polish, and reaching for Agile
      practices as tools that fit the team and the problem rather than following
      one method by the book. I care about a team's culture and process as much
      as its code. Both can be engineered to hold up under real-world pressure,
      and a team does its best work when it owns and experiments with its own
      practices.
    </p>
    <h3 class="h4 _margin-top:2 _margin-bottom:1">Passionate about</h3>
    <div>
      <PortfolioSection class="passions" is-open>
        <template #header>
          <h4 class="h5 _margin-bottom:0">Quality and maintainability</h4>
        </template>
        <p>
          Maximising solution lifespan through pragmatic technical excellence
          and a focus on maintainability including:
        </p>
      </PortfolioSection>
      <PortfolioSection class="passions" is-open>
        <template #header>
          <h4 class="h5 _margin-bottom:0">High performing teams</h4>
        </template>
        <p></p>
      </PortfolioSection>
      <PortfolioSection class="passions" is-open>
        <template #header>
          <h4 class="h5 _margin-bottom:0">Collaboration</h4>
        </template>
        <p></p>
      </PortfolioSection>
      <PortfolioSection class="passions" is-open>
        <template #header>
          <h4 class="h5 _margin-bottom:0">Product and Design</h4>
        </template>
        <p></p>
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
