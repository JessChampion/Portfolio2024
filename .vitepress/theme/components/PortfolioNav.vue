<script setup>
import { useData, useRoute } from "vitepress";
import PortfolioTags from "./PortfolioTags.vue";

import menuItems from "../menu";
import { computed, onMounted, watch } from "vue";
import PortfolioItemDetails from "./PortfolioItemDetails.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { page } = useData();

const route = useRoute();

const scrollToCurrent = (path) => {
  if (path.startsWith("/work/")) {
    const item =
      document.querySelector(`a[href="${path}"]`) ||
      document.querySelector(`a[href="#"]`);
    setTimeout(() => {
      item?.scrollIntoView({ behavior: "smooth" });
    });
  }
};

onMounted(() => setTimeout(() => scrollToCurrent(route.path)));

watch(
  () => route.path,
  (newPath) => {
    scrollToCurrent(newPath);
  },
);

const sortYearDesc = (a, b) => {
  const year = `${b.year}`.localeCompare(`${a.year}`);
  return year === 0 ? b.sort - a.sort : year;
};

const publishedMenuItems = computed(() =>
  menuItems.filter((item) => item.published).sort(sortYearDesc),
);

const handleKeyPress = (event) => {
  if (event.key === " ") {
    event.currentTarget.click();
  }
  // arrow down
  if (event.key === "ArrowDown") {
    event.preventDefault();
    const currentListItem = event.currentTarget.parentElement;
    const nextListItem =
      currentListItem?.nextElementSibling ||
      currentListItem?.parentElement?.firstElementChild;
    const nextLink = nextListItem?.querySelector("a");
    if (nextLink) {
      nextLink.focus();
    }
  }
  // arrow up
  if (event.key === "ArrowUp") {
    event.preventDefault();
    const currentListItem = event.currentTarget.parentElement;
    const prevListItem =
      currentListItem?.previousElementSibling ||
      currentListItem?.parentElement?.lastElementChild;
    const prevLink = prevListItem?.querySelector("a");
    if (prevLink) {
      prevLink.focus();
    }
  }
};
</script>

<template>
  <ul class="nav-list">
    <li
      v-for="item in publishedMenuItems"
      :key="item.link"
      :aria-label="item.title"
      class="nav-list__item"
    >
      <a
        @keydown="handleKeyPress"
        :class="`item ${item.title === page.title ? 'active' : ''}`"
        :href="item.title === page.title ? '#' : item.link"
        :aria-current="item.title === page.title ? 'page' : undefined"
        tabindex="0"
      >
        <div class="item__details">
          <dl class="stats">
            <dt class="_visually-hidden">Year</dt>
            <dd>{{ item.year }}</dd>
            <dt class="_visually-hidden">Organisation</dt>
            <dd class="org">{{ item.org }}</dd>
          </dl>
          <strong class="item__title">{{ item.title }}</strong>
          <p class="item__summary">{{ item.summary }}</p>
          <PortfolioTags
            label="key technologies"
            :tags="item.technologies.top"
            v-if="item.title !== page.title"
          />
        </div>
        <div
          :class="`= image -thumbnail thumbnail thumbnail--${item.thumbnailOrientation}`"
          v-if="item.title !== page.title"
        >
          <img
            :src="item.thumbnail"
            :alt="`thumbnail for ${item.title}`"
            class="image -fluid"
          />
        </div>
      </a>
      <a v-if="item.title === page.title" href="/" class="close">
        <IIcon name="ink-times" alt="close" />
      </a>
      <PortfolioItemDetails
        :item="page.frontmatter"
        v-if="item.title === page.title"
      />
      <div class="current-page" v-if="page.title === item.title">
        <slot />
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
.nav-list__item {
  background-color: var(--body--background-alt2);
  transition: var(--transition-background-color);
}
</style>

<style lang="scss" scoped>
@import "../inkline-variables/mixins.scss";

.nav-list {
  list-style: none;
  margin: var(--gap) auto;
  padding: var(--gap) 0 var(--gap) var(--gap-15);
  border-left: var(--border-width-bold) solid var(--body--color);
  transition: var(--transition-border-color);
  max-width: var(--container-max-width);

  &__item {
    border-radius: var(--border-radius-rounded);
    border-top-left-radius: var(--border-top-left-radius-lg);
    padding: var(--gap-1-2);
    margin-bottom: var(--gap);
    position: relative;

    &:last-of-type {
      margin-bottom: 0;
    }

    .close {
      position: absolute;
      right: var(--gap-1-2);
      top: var(--gap-1-2);
      color: var(--body--color);
      transition: var(--transition-color), var(--transition-transform);

      &:hover,
      &:focus,
      &:active {
        transform: var(--transform-hover);
      }
    }
  }
}

.item {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--gap);
  color: var(--body--color);
  transition: var(--transition-color);

  font-size: var(--font-size-md);
  font-weight: var(--font-weight-normal);
  padding: var(--gap-1-2);
  overflow: hidden;

  @include breakpoint-up(sm) {
    grid-template-columns: 2fr 1fr;
  }

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &.active {
    grid-template-columns: 1fr;
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: var(--gap-1-2);
  }

  &__title {
    font-size: var(--h3--font-size);
    font-weight: var(--font-weight-bold);

    .item:hover &,
    .item:focus & {
      text-decoration: underline;
    }
  }

  &__summary {
    flex-grow: 1;
  }
}

.current-page {
  background: none;
  display: inline-block;
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-md);
  margin-top: var(--gap-1-4);
  padding: var(--gap-1-2);
}

.thumbnail {
  max-height: 14rem;
  max-width: 100%;
  overflow: hidden;

  &.image.-thumbnail {
    padding: 0;
  }

  img {
    opacity: 85%;
  }
}

.stats {
  display: flex;
  gap: var(--gap);
  margin: 0;

  dd {
    margin: 0;
  }
}
</style>
