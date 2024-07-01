<script setup></script>

<template>
  <div class="row">
    <div class="row__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row {
  max-width: 100%;
  overflow-x: auto;
  border: var(--gap-1-2) solid var(--body--background-alt);
  background: var(--body--background-alt);
  border-radius: var(--border-radius-rounded);
  margin-bottom: var(--gap);
  margin-inline: var(--gap-1-8);

  &__content {
    min-width: fit-content;
    margin: var(--gap-3-4);
  }
}
</style>
