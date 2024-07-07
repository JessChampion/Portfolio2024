<script setup>
import { useData, useRoute } from "vitepress";
import PortfolioTags from "./PortfolioTags.vue";

import menuItems from "../menu";
import { computed, onMounted, ref, watch } from "vue";
import PortfolioItemDetails from "./PortfolioItemDetails.vue";

function getYearFromRange(year) {
  return year.includes("-") ? Number(year.split("-")[1]) : Number(year);
}

function groupByCompany(acc, item) {
  const company = item.org.split("-")[0];
  if (!acc[company]) {
    acc[company] = [];
  }
  acc[company].push(item);
  return acc;
}

function groupByYear(acc, item) {
  const year = getYearFromRange(item.year);
  if (!acc[year]) acc[year] = []; // Initialize the array if it doesn't exist
  acc[year].push(item);
  return acc;
}

function filterByTechnology(technologyFilter) {
  return (item) =>
    !technologyFilter ||
    item.technologies?.top?.includes(technologyFilter) ||
    item.technologies?.additional?.includes(technologyFilter);
}

function sortByYear(a, b) {
  return getYearFromRange(b.year) - getYearFromRange(a.year);
}

function sortEntriesByYear([_a, [a]], [_b, [b]]) {
  return sortByYear(a, b);
}

function groupDisplayedItems(items, type = "year", filteredBy = undefined) {
  if (!items) {
    return [];
  }
  const displayed = items
    .filter(filterByTechnology(filteredBy))
    .reduce(type === "company" ? groupByCompany : groupByYear, {});
  return Object.entries(displayed).sort(sortEntriesByYear);
}

function talleyTechnologies(items) {
  const techCounts = items.value.reduce((acc, item) => {
    const technologies = [
      ...(item.technologies?.top || []),
      ...(item.technologies?.additional || []),
    ];
    technologies.forEach((tech) => {
      if (!acc[tech]) {
        acc[tech] = 1;
      } else {
        acc[tech]++;
      }
    });
    return acc;
  }, {});

  return Object.entries(techCounts)
    .sort(([_a, countA], [_b, countB]) => countB - countA) // Sort by count in descending order
    .map(([tech, count]) => ({ id: tech, label: `${tech} (${count})` })); // Format for display
}

function scrollToCurrent(path) {
  if (path.startsWith("/work/")) {
    const item =
      document.querySelector(`a[href="${path}"]`) ||
      document.querySelector(`a[href="#"]`);
    setTimeout(() => {
      item?.scrollIntoView({ behavior: "smooth" });
    });
  }
}

const { page } = useData();

const route = useRoute();

const timelineMode = ref("year");

const filteredBy = ref(undefined);

const publishedMenuItems = computed(() =>
  menuItems.filter((item) => item.published).sort(sortByYear),
);

const selectedItem = computed(() =>
  publishedMenuItems.value.find((item) => item.title === page.value.title),
);

const allTechnologies = computed(() => talleyTechnologies(publishedMenuItems));

const groupedMenuItems = computed(() =>
  groupDisplayedItems(
    publishedMenuItems.value,
    timelineMode.value,
    filteredBy.value,
  ),
);

const handleKeyPress = (event) => {
  if (event.key === " ") {
    event.currentTarget.click();
  } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    const currentListItem = event.currentTarget.parentElement;
    const isDown = event.key === "ArrowDown";
    const sibling = isDown ? "nextElementSibling" : "previousElementSibling";
    const fallback = isDown ? "firstElementChild" : "lastElementChild";
    const targetListItem =
      currentListItem[sibling] || currentListItem.parentElement[fallback];
    const targetLink = targetListItem?.querySelector("a");
    targetLink?.focus();
  }
};

const clearFilters = () => {
  filteredBy.value = undefined;
};

onMounted(() => setTimeout(() => scrollToCurrent(route.path)));

watch(
  () => route.path,
  (newPath) => {
    scrollToCurrent(newPath);
  },
);
</script>

<template>
  <IForm class="nav-list-controls" aria-controls="#timeline">
    <IFormGroup class="filter">
      <label>
        <span class="label">Filter by technology</span>
        <ISelect
          v-model="filteredBy"
          :options="allTechnologies"
          placeholder="Select..."
          clearable
          size="sm"
          id="filterBy"
        />
      </label>
    </IFormGroup>
    <IFormGroup class="mode">
      <label>
        <span class="label">View by</span>
        <IRadioButtons
          id="viewMode"
          size="sm"
          v-model="timelineMode"
          :options="[
            { id: 'year', label: 'Year' },
            { id: 'company', label: 'Company' },
          ]"
        />
      </label>
    </IFormGroup>
  </IForm>
  <ul id="timeline" class="nav-list">
    <li
      v-for="[groupKey, items] in groupedMenuItems"
      :key="groupKey"
      class="nav-list__item-group"
    >
      <div class="nav-list__group-label">
        {{ groupKey }}
      </div>
      <ul class="nav-list--nested">
        <li
          v-for="item in items"
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
            :item="selectedItem"
            v-if="item.title === page.title"
          />
          <div class="current-page" v-if="page.title === item.title">
            <slot />
          </div>
        </li>
      </ul>
    </li>
  </ul>
  <div class="clear-action">
    <IButton
      size="sm"
      v-if="filteredBy"
      aria-controls="#timeline"
      @click="clearFilters"
      >Clear filters</IButton
    >
  </div>
</template>

<style lang="scss">
.nav-list__item {
  background-color: var(--body--background-alt2);
  transition: var(--transition-background-color);
}

.nav-list-controls {
  .checkable-button-group.radio-buttons {
    .button {
      border: var(--border-top-width) solid var(--body--color-alt);
      background: var(--body--color-alt);
      margin: 0;
      padding: var(--gap-1-2) var(--gap-3-4);

      &,
      &:not(.-active),
      &:not(.-active):not(.-disabled):hover,
      &:not(.-active):not(.-disabled):focus {
        border-color: var(--body--color-alt);
        background: var(--body--background) !important;
      }

      &.-active {
        background-color: var(--body--color-alt) !important;
      }

      &:first-of-type {
        border-radius: var(--border-radius-rounded) 0 0
          var(--border-radius-rounded);
        border-right: 0;
      }

      &:last-of-type {
        border-radius: 0 var(--border-radius-rounded)
          var(--border-radius-rounded) 0;
      }
    }
  }

  .select-wrapper {
    .input-wrapper {
      .input-suffix {
        padding: 0 var(--gap-1-4);

        .select-caret {
          margin-left: 0;
        }
      }

      .input-icon.input-clear {
        margin-right: var(--gap-1-3);
        position: relative;
        top: -0.1rem;
        height: 1.2rem;
        width: 1.2rem;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../inkline-variables/mixins.scss";

.nav-list-controls {
  display: flex;
  justify-content: space-between;
  padding: 0;
  border: var(--border-width-bold) solid var(--body--color);
  border-radius: var(--border-radius-rounded) var(--border-radius-rounded)
    var(--border-radius-rounded) 0;

  label {
    display: flex;
    align-items: baseline;
    padding: var(--gap-1-3) 0 var(--gap-1-4);

    .label {
      font-size: var(--font-size-sm);
      margin-bottom: 0;
      padding: 0 var(--gap-1-2);
      max-width: fit-content;
    }
  }

  .form-group {
    align-items: baseline;
    display: inline-flex;
    padding-right: var(--gap-1-3);
    width: fit-content;

    & + .form-group {
      margin: 0;
    }
  }

  .checkable-button-group.radio-buttons {
    border: none;
    background: none;
    padding: 0;
    display: flex;
    min-width: fit-content;
  }
}

.nav-list {
  list-style: none;
  padding: var(--gap) 0 0;
  margin: 0;
  border-left: var(--border-width-bold) solid var(--body--color);
  transition: var(--transition-border-color);
  max-width: var(--container-max-width);

  &--nested {
    list-style: none;
    margin: var(--gap-1-2) auto;
    padding: var(--gap) 0 var(--gap) var(--gap-15);

    max-width: 100%;
  }

  &__group-label {
    padding: var(--gap-1-4) var(--gap);
    border-bottom: var(--border-width-bold) solid var(--body--color);
    width: max-content;
  }

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

.clear-action {
  display: flex;
  justify-content: center;
  padding-bottom: var(--gap);
  width: 100%;
}
</style>
