<script setup></script>

<template>
  <div class="masonry">
    <div class="masonry__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@use "../inkline-variables/mixins.scss" as *;

.masonry {
  max-width: 100%;
  overflow-x: auto;
  margin-bottom: var(--gap);
  margin-inline: var(--gap-1-8);

  &__content {
    min-width: fit-content;

    & > ul {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      align-items: start;
      gap: calc(var(--gap) * 1.25);
      //row-gap: var(--gap-1-2);
      row-gap: 0;
      padding: 0;
      margin: 0;
      width: 100%;
      max-width: 100%;
      @include breakpoint-sm-up {
        grid-template-columns: repeat(12, 1fr);
      }
      li {
        display: block;
        border: var(--gap-1-4) solid var(--body--background-alt);
        background: var(--body--background-alt);
        transition:
          var(--transition-background-color), var(--transition-border-color);
        border-radius: var(--border-radius-lg);
        font-size: var(--font-size-md);
        padding: var(--gap);
        margin: 0;
        strong {
          display: block;
          font-size: var(--font-size-lg);
          margin-bottom: var(--gap-1-3);
        }
        grid-column: span 2;
        &.col-span3 {
          grid-column: span 3;
        }
        &.col-span4 {
          grid-column: span 4;
        }
        &.col-span5 {
          grid-column: span 5;
        }
        &.col-span6 {
          grid-column: span 6;
        }
        &.col-span7 {
          grid-column: span 7;
        }
        &.col-span8 {
          grid-column: span 8;
        }
        &.col-span9 {
          grid-column: span 9;
        }
        &.col-span10 {
          grid-column: span 10;
        }
        &.top-negative-gap {
          margin-top: calc(-7.5 * var(--gap)) !important;
        }
      }
    }
  }
}
</style>
