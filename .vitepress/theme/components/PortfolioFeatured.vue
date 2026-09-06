<script setup>
import { computed } from "vue";
import menuItems, { PORTFOLIO_ROUTE } from "../menu";
import PortfolioTags from "./PortfolioTags.vue";

const MAX_FEATURED = 3;

function getYearFromRange(year) {
  const value = String(year);
  return value.includes("-") ? Number(value.split("-")[1]) : Number(value);
}

function sortByYear(a, b) {
  return getYearFromRange(b.year) - getYearFromRange(a.year);
}

const publishedMenuItems = computed(() =>
  menuItems.filter((item) => item.published).sort(sortByYear),
);

const featuredItems = computed(() => {
  const highlighted = publishedMenuItems.value
    .filter((item) => item.featured)
    .slice(0, MAX_FEATURED);

  if (highlighted.length >= MAX_FEATURED) {
    return highlighted;
  }

  const highlightedLinks = new Set(highlighted.map((item) => item.link));
  const fallback = publishedMenuItems.value.filter(
    (item) => !highlightedLinks.has(item.link),
  );

  return [...highlighted, ...fallback].slice(0, MAX_FEATURED);
});
</script>

<template>
  <div class="featured-content" v-if="featuredItems.length">
    <div
      class="featured-content__header _display:flex _align-items:center _justify-content:space-between"
    >
      <h2
        id="latest-projects"
        class="h4 _margin-bottom:0 featured-content__heading"
      >
        LATEST PROJECTS
      </h2>
      <IButton link :href="PORTFOLIO_ROUTE" class="featured-content__cta">
        View more projects
      </IButton>
    </div>
    <ul class="featured-content__row">
      <li
        v-for="item in featuredItems"
        :key="item.link"
        class="featured-content__item"
      >
        <a :href="item.link" class="featured-content__card">
          <div
            :class="`image -thumbnail featured-content__thumbnail featured-content__thumbnail--${item.thumbnailOrientation}`"
            v-if="item.thumbnail"
          >
            <img
              :src="item.thumbnail"
              :alt="`thumbnail for ${item.title}`"
              class="image -fluid"
            />
          </div>
          <div class="featured-content__details">
            <dl class="featured-content__stats">
              <dt class="_visually-hidden">Year</dt>
              <dd>{{ item.year }}</dd>
              <dt class="_visually-hidden">Organisation</dt>
              <dd class="featured-content__org">{{ item.org }}</dd>
            </dl>
            <h3 class="featured-content__title">{{ item.title }}</h3>
            <p class="featured-content__summary">{{ item.summary }}</p>
            <PortfolioTags
              label="key technologies"
              :tags="item.technologies?.top"
              v-if="item.technologies?.top"
            />
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "../inkline-variables/mixins.scss" as *;

.featured-content {
  &__header {
    padding: var(--gap-1-2) 0 0 var(--gap);
  }

  &__row {
    display: flex;
    gap: var(--gap);
    margin: 0;
    padding: var(--gap-1-2) 0 var(--gap) var(--gap);
    list-style: none;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    scroll-padding-left: var(--gap-1-2);

    @include breakpoint-sm-up {
      padding: var(--gap-1-2) 0 var(--gap) var(--gap);
    }
  }

  &__item {
    flex: 0 0 auto;
    width: 18rem;
    scroll-snap-align: start;
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: var(--gap-1-2);
    height: 100%;
    padding: var(--gap);
    background-color: var(--body--background-alt2);
    transition: var(--transition-background-color), var(--transition-transform);
    border-radius: var(--border-radius-rounded);
    border-top-left-radius: var(--border-top-left-radius-lg);
    color: var(--body--color);
    text-decoration: none;

    &:hover,
    &:focus {
      background-color: var(--color-primary-800);
      transform: var(--transform-hover-subtle);
      text-decoration: none;

      .light-theme & {
        background-color: var(--color-primary-100);
      }
      .featured-content__title {
        text-decoration: underline;
      }
    }
  }

  &__thumbnail {
    max-height: 9rem;
    max-width: 100%;
    overflow: hidden;

    &.image.-thumbnail {
      padding: 0;
      align-self: start;
    }

    img {
      opacity: 85%;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: var(--gap-1-2);
    align-self: end;
  }

  &__stats {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
    row-gap: 0;
    margin: 0;
    font-size: var(--font-size-sm);
    dd {
      margin: 0;
      white-space: nowrap;
    }
  }

  &__title {
    font-size: var(--h5--font-size);
    font-weight: var(--font-weight-bold);
    margin: 0;
  }

  &__summary {
    margin: 0;
    font-size: var(--font-size-sm);
  }

  &__cta {
    width: fit-content;
    * {
      text-decoration: underline;
      color: var(--color-light);
      transition: var(--transition-color);

      .light-theme & {
        color: var(--color-dark-shade-50);
      }

      &:hover,
      &:focus,
      &:active {
        color: var(--color-primary);
      }
    }
  }
}
</style>
