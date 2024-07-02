<script setup>
defineProps({
  label: String,
  tags: Array,
});
</script>

<template>
  <ul class="tags" :label="label">
    <li v-for="tag in tags" :key="String(tag)">
      <code>{{ tag }}</code>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.tags {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: var(--gap-1-2);
  font-size: var(--font-size-sm);

  li {
    margin-bottom: 0;
  }

  code {
    background: var(--body--color);
    color: var(--body--background);
    transition: var(--transition-color), var(--transition-background-color);
  }
}
</style>
