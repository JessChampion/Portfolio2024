<script setup></script>
<template>
  <div class="subsection">
    <slot />
  </div>
</template>

<style lang="scss">
.subsection {
  &.people-centered,
  &.leadership {
    h3 {
      margin-top: 0;
    }
  }
}
</style>

<style lang="scss" scoped>
@use "../inkline-variables/mixins.scss" as *;

.subsection {
  max-width: 100%;
  border: var(--gap-1-4) solid var(--body--background-alt);
  background: var(--body--background-alt);
  transition:
    var(--transition-background-color), var(--transition-border-color);
  border-radius: var(--gap-3);
  font-size: var(--font-size-md);
  padding: var(--gap-175) var(--gap-2) var(--gap);
  &.people-centered {
    margin-bottom: var(--gap-175);
    margin-top: var(--gap-175);
    @include breakpoint-md-up {
      margin-right: var(--gap-3);
    }
  }

  &.leadership {
    @include breakpoint-md-up {
      margin-left: var(--gap-2);
    }
  }
}
</style>
