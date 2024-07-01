<script></script>

<script setup>
import { useData } from "vitepress";
import { computed, reactive } from "vue";
import PortfolioNav from "./components/PortfolioNav.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import PortfolioLinks from "./components/PortfolioLinks.vue";
import PortfolioAbout from "./components/PortfolioAbout.vue";
import ColorModeSwitcher from "./components/ColorModeSwitcher.vue";

const { frontmatter } = useData();
const currentYear = computed(() => new Date().getFullYear());
const { isLanding } = reactive({ isLanding: frontmatter.value.home === true });
</script>

<template>
  <ILayout class="layout-grid">
    <span class="tl" role="presentation" />
    <ILayoutHeader class="header hm">
      <a href="/" class="heading-link">
        <h1 class="heading">
          <span class="name">Jess Champion</span>
          <span class="vocation">Software developer</span>
        </h1>
      </a>
      <ColorModeSwitcher class="switcher" />
    </ILayoutHeader>
    <span class="tr" role="presentation" />
    <span class="al" role="presentation" />
    <PortfolioSection class="about am" id="about" :is-open="isLanding">
      <template #header
        ><h2 id="about" class="h4 _margin-bottom:0">ABOUT</h2></template
      >
      <PortfolioAbout />
    </PortfolioSection>
    <span class="ar" role="presentation" />
    <span class="pl" role="presentation" />
    <PortfolioSection class="portfolio pm" id="portfolio" :is-open="!isLanding">
      <template #header
        ><h2 id="portfolio" class="h4 _margin-bottom:0">PORTFOLIO</h2></template
      >
      <PortfolioNav>
        <div class="md-content">
          <Content />
        </div>
      </PortfolioNav>
    </PortfolioSection>
    <span class="pr" role="presentation" />
    <span class="fl" role="presentation" />
    <ILayoutFooter class="footer fm">
      <PortfolioLinks />
      ©{{ currentYear }} J Champion
    </ILayoutFooter>
    <span class="fr" role="presentation" />
  </ILayout>
</template>

<style lang="scss">
@import "./inkline-variables/mixins.scss";

.layout.layout-grid {
  display: grid;
  grid-template-columns: minmax(2rem, 1fr) auto minmax(2rem, 1fr);
  grid-template-rows: auto auto 1fr auto;
  min-height: 100vh;
  min-width: 25rem;
  max-width: 100vw;

  .tl {
    background: var(--body--background-alt);
  }

  .tr,
  .ar {
    background: var(--body--background-alt);
  }

  .pr {
    position: relative;

    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
    }

    &:before {
      top: 0;
      height: 75%;
      background: var(--body--background-alt);
    }

    &:after {
      top: 50%;
      height: 25%;
      background: var(--body--background);
      border-top-left-radius: var(--border-radius-rounded);
    }
  }

  .hm,
  .am,
  .pm,
  .fm {
    width: calc(100vw - 4rem);
    max-width: 100%;

    @include breakpoint-sm-up {
      //max-width: var(--container-max-width-lg);
    }

    @include breakpoint-md-up {
      max-width: var(--container-max-width-lg);
    }
  }
}

.header {
  //border-left: var(--border);
  grid-area: 1 / 2 / 1 /2;
  margin-bottom: 0;

  &.layout-header {
    background: var(--body--background-alt);
    margin: 0;
    display: grid;
    padding: 0;
    grid-template-columns: 1fr auto;
    align-items: start;
  }

  a.heading-link {
    color: var(--body--color);
    padding: var(--gap) var(--gap) var(--gap-15);
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      color: var(--body--color);
      text-decoration: underline;
    }

    .heading {
      display: grid;
      justify-content: start;
      gap: var(--gap-1-4);
      @include breakpoint-sm-down {
        font-size: var(--h2--font-size);
      }
    }

    .vocation {
      font-size: var(--h3--font-size);
      @include breakpoint-sm-down {
        font-size: var(--h4--font-size);
      }
    }
  }
}

.about {
  grid-area: 2 / 2 / 2 /2;
  align-content: start;
  border-radius: var(--border-radius-rounded);

  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: -1rem;
    width: 1rem;
    height: 100%;
    background: var(--body--background);
    border-top-right-radius: var(--border-radius-rounded);
    border-bottom-right-radius: var(--border-radius-rounded);
    pointer-events: none;

    @include breakpoint-sm-up {
      width: 4rem;
    }
  }
}

.portfolio {
  grid-area: 3 / 2 / 3 /2;
  background: var(--body--background-alt);
  border-top-left-radius: var(--border-radius-rounded);
  border-bottom-left-radius: var(--border-radius-rounded);
  border-bottom-right-radius: var(--border-radius-rounded);

  .md-content {
    margin-top: var(--gap-1-2);

    h2,
    h3,
    h4 {
      margin: var(--gap-2) 0 var(--gap);
    }

    h2 {
      font-size: var(--h4--font-size);
    }

    h3 {
      font-size: var(--h5--font-size);
    }

    h4 {
      font-size: var(--h6--font-size);
    }

    ul {
      margin: var(--gap-3-4) 0 var(--gap);
    }
  }

  .current-page[class] {
    background: none;
  }
}

.footer {
  font-size: var(--font-size-sm);
  grid-area: 4 / 2 / 4 /2;
  padding: var(--gap) 0 var(--gap-1-2);
  text-align: center;
}
</style>
