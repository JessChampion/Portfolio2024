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
      row-gap: var(--gap-1-2);
      padding: 0;
      margin: 0;
      width: 100%;
      max-width: 100%;

      @include breakpoint-md-up {
        grid-template-columns: repeat(12, 1fr);
        row-gap: 0;
      }
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
      h4 {
        display: block;
        font-size: var(--font-size-lg);
        margin-bottom: var(--gap-1-3);
      }
      @include breakpoint-md-up {
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
        &.project-leadership {
          margin-top: var(--gap-2-3);
        }
        &.client-collaboration {
          margin-bottom: var(--gap-1-2);
        }
        &.research-measurement {
          margin-bottom: var(--gap-1-2);
        }
        &.design-engineering-bridge {
          margin-top: var(--gap-2-3);
          margin-bottom: var(--gap-1-2);
        }
        &.design-systems {
          margin-top: var(--gap-2-3);
          margin-bottom: var(--gap-1-2);
        }
        &.frontend-architecture {
          margin-top: var(--gap-2-3);
          margin-bottom: var(--gap-1-2);
        }
        &.accessibility-discoverability {
          margin-top: var(--gap-2-3);
          position: relative;
          margin-bottom: calc(var(--gap) * 4);
          &:after {
            content: " ";
            display: block;
            position: absolute;
            width: 100%;
            left: 0;
            height: calc(var(--gap) * 2.25);
            top: calc(100% + var(--gap-2-3) * 2);
            background-color: var(--color-dark-shade-50);
            border-radius: var(--border-radius-lg);
            opacity: 0.4;
            @include breakpoint-md-up {
              height: calc(var(--gap) * 2.525);
            }
          }
        }
        &.privacy-sensitive-data {
          margin-top: var(--gap-2-3);
          margin-bottom: var(--gap-1-2);
        }
        &.legacy-codebases {
          grid-row: span 2;
          align-self: stretch;
          margin-top: var(--gap-2-3);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
}
</style>
