<script setup></script>

<template>
  <div class="row">
    <div class="row__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@use "../inkline-variables/mixins.scss" as *;

.row {
  max-width: 100%;
  overflow-x: auto;
  margin-bottom: var(--gap);
  margin-inline: var(--gap-1-8);

  &__content {
    min-width: fit-content;
    margin: var(--gap-3-4);

    & > ul {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      align-items: center;
      gap: var(--gap);
      row-gap: 0;
      padding: 0;
      margin: 0;
      @include breakpoint-sm-up {
        grid-template-columns: repeat(6, minmax(10%, 1fr));
      }
      li {
        display: block;
        border: var(--gap-1-4) solid var(--body--background-alt);
        background: var(--body--background-alt);
        transition:
          var(--transition-background-color), var(--transition-border-color);
        border-radius: var(--border-radius-lg);
        font-size: var(--font-size-sm);
        padding: var(--gap);
        margin: 0;
        strong {
          display: block;
          font-size: var(--font-size-md);
          margin-bottom: var(--gap-1-3);
        }
        &.col-span2 {
          grid-column: span 2;
        }
        &.col-span3 {
          grid-column: span 3;
        }
        &.col-span4 {
          grid-column: span 4;
        }
      }
    }
  }
}
</style>
