<script setup>
import { defineProps } from "vue";

defineProps({
  currentIndex: Number,
  totalChildren: Number,
  goTo: Function,
});
</script>

<template>
  <ul class="navigator">
    <li v-for="index in totalChildren" :key="index">
      <IButton
        circle
        :class="currentIndex === index ? 'active' : ''"
        @click="() => goTo(index)"
        aria-label="Go to image {{index}}"
      />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.navigator {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--gap-1-2) var(--gap);
  padding: 0;
  margin: var(--gap) 0 0;
  list-style: none;
  pointer-events: none;
  width: 100%;
  max-width: 100%;

  li {
    margin: 0;
    pointer-events: auto;
  }

  button {
    background: var(--body--color);
    height: 1.25rem;
    width: 1.25rem;
    padding: 0;
    transition: transform var(--transition-timing-function)
      var(--transition-duration);

    &.active {
      background: var(--color-primary) !important;
    }

    &:hover,
    &:focus,
    &:active {
      background: var(--color-primary) !important;
      transform: var(--transform-hover);
    }
  }
}
</style>
