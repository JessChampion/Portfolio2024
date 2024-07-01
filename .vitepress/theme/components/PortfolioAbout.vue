<script setup>
import PortfolioRow from "./PortfolioRow.vue";
import PortfolioSection from "./PortfolioSection.vue";
</script>

<template>
  <div class="section">
    <p>
      I'm a software developer with over twelve years of experience specializing
      in JavaScript and front-end web technologies. I graduated with a Bachelor
      of Computing and Mathematical Science with First Class Honours in 2011. My
      career spans roles in product development, operations, and agency-based
      solution delivery.
    </p>
    <h3 class="h4 _margin-top:2 _margin-bottom:1">Passionate about</h3>
    <div>
      <PortfolioSection class="passions">
        <template #header>
          <h4 class="h5 _margin-bottom:0">Quality and maintainability</h4>
        </template>
        <p>
          Maximising solution lifespan through pragmatic technical excellence
          and a focus on maintainability including:
        </p>
        <ul>
          <li>Modular and reusable code architecture</li>
          <li>Code standards, readability and best practices</li>
          <li>Automated testing</li>
          <li>Documentation</li>
          <li>Code reviews</li>
          <li>Continuous improvement via refactoring</li>
        </ul>
      </PortfolioSection>
      <PortfolioSection class="passions">
        <template #header>
          <h4 class="h5 _margin-bottom:0">Solving problems</h4>
        </template>
        <ul>
          <li>
            Creating elegant solutions to complex problems, whether they be
            client, technology or team problems.
          </li>
          <li>
            Sharing my knowledge and experience with various agile practices and
            methodologies, to help the team deliver value to the client, more
            effectively.
          </li>
        </ul>
      </PortfolioSection>
      <PortfolioSection class="passions">
        <template #header>
          <h4 class="h5 _margin-bottom:0">Creativity</h4>
        </template>
        <ul>
          <li>Enjoys new technical challenges</li>
          <li>Ux design and information visualisation</li>
          <li>An eye for visual design</li>
          <li>
            Experience creating personas, wireframes, paper prototypes and
            designing user flows.
          </li>
          <li>Creating user delight.</li>
        </ul>
      </PortfolioSection>
    </div>
  </div>
  <div class="section _margin-bottom:2">
    <h3 class="h4 _margin-top:2 _margin-bottom:1">Skills</h3>
    <PortfolioRow>
      <div class="skills">
        <div class="skills__card">
          <h4>JavaScript</h4>
          <ul>
            <li>JavaScript</li>
            <li>ES6+</li>
            <li>Vue JS</li>
            <li>React + Redux</li>
          </ul>
        </div>
        <div class="skills__card">
          <h4>Backend</h4>
          <ul>
            <li>PHP</li>
            <li>Node JS</li>
            <li>Java</li>
            <li>CMSs</li>
          </ul>
        </div>
        <div class="skills__card">
          <h4>Web</h4>
          <ul>
            <li>Semantic HTML 5</li>
            <li>CSS 3</li>
            <li>Sass</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div class="skills__card">
          <h4>Tools</h4>
          <ul>
            <li>Git</li>
            <li>Dependancy managers</li>
            <li>Continuous integration</li>
            <li>Webpack</li>
          </ul>
        </div>
        <div class="skills__card">
          <h4>Practices</h4>
          <ul>
            <li>Unit testing</li>
            <li>Search Engine Optimisation</li>
            <li>Creating and consuming APIs</li>
            <li>Knowledge Management</li>
          </ul>
        </div>
        <div class="skills__card">
          <h4>Design</h4>
          <ul>
            <li>User Experience</li>
            <li>Wireframes &amp; Prototyping</li>
            <li>Technical Solution Design</li>
            <li>Code Architecture</li>
          </ul>
        </div>
        <div class="skills__card">
          <h4>Delivery</h4>
          <ul>
            <li>Agile Methodologies</li>
            <li>Running Projects</li>
            <li>JIRA and Confluence</li>
            <li>Software Development Lifecycle</li>
          </ul>
        </div>
        <div class="skills__card">
          <h4>Business</h4>
          <ul>
            <li>Estimation & statements of work</li>
            <li>Recruitment and Interviewing</li>
            <li>Digital Strategy</li>
            <li>Service Design</li>
          </ul>
        </div>
      </div>
    </PortfolioRow>
  </div>
</template>

<style lang="scss" scoped>
@import "../inkline-variables/mixins.scss";

.section {
  padding-inline: var(--gap-1-2);
}

.passions {
  background: var(--body--background-alt);
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
  color: var(--body--color);
}
</style>
