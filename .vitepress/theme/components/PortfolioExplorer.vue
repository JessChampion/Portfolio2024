<script setup>
import PortfolioNav from "./PortfolioNav.vue";
</script>

<template>
  <div class="explorer">
    <h2 id="portfolio" class="h4 _margin-bottom:0 explorer__heading">
      PORTFOLIO
    </h2>
    <div class="explorer__content">
      <PortfolioNav>
        <div class="md-content">
          <Content />
        </div>
      </PortfolioNav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../inkline-variables/mixins.scss" as *;

.explorer {
  &__heading {
    padding: var(--gap) var(--gap-3-4) var(--gap) var(--gap);
  }

  &__content {
    max-width: 100%;
    padding: 0;
    padding-bottom: var(--gap);

    @include breakpoint-sm-up {
      padding: 0 calc(var(--gap-2)) var(--gap) var(--gap);
    }
  }
}
</style>
