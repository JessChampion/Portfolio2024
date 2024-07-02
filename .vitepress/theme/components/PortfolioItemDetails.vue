<script setup>
import PortfolioTags from "./PortfolioTags.vue";

const props = defineProps({
  item: Object,
});

const roles = props.item.tasks;
const technologies = [
  ...props.item.technologies.top,
  ...props.item.technologies.additional,
];
</script>

<template>
  <div class="details">
    <div class="details__col">
      <h4 class="h5">Roles</h4>
      <PortfolioTags label="Roles" :tags="roles" />
    </div>
    <div class="details__col">
      <h4 class="h5">Technologies</h4>
      <PortfolioTags label="Technologies" :tags="technologies" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.details {
  display: grid;
  gap: var(--gap-125);
  grid-template-columns: 1fr 1fr;
  padding: 0 var(--gap-1-2) var(--gap-15);
  border-bottom: var(--border-top-width) solid var(--body--background);
  transition: var(--transition-border-color);

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
