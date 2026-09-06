<script setup>
import { reactive } from "vue";

const props = defineProps({
  id: String,
  isOpen: Boolean,
  onToggle: {
    type: Function,
    default: () => {},
  },
});

//reactive var open which changes if the isOpen prop changes
const data = reactive({ open: props.isOpen });

const toggle = () => {
  const toggleTo = !data.open;
  data.open = toggleTo;
  props?.onToggle(toggleTo);
};
</script>

<template>
  <div class="section" @click="(e) => e.stopPropagation()">
    <button
      :class="`section__toggle ${data.open && 'open'}`"
      @click="toggle"
      :aria-expanded="data.open"
      :aria-controls="id"
    >
      <slot name="header" />
      <IIcon name="ink-chevron-down" size="lg" />
    </button>
    <div :id="id" class="section__content" v-if="data.open">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@use "../inkline-variables/mixins.scss" as *;

.section__toggle {
  h4 {
    line-height: 1.5 !important;
  }
}
</style>
<style lang="scss" scoped>
@use "../inkline-variables/mixins.scss" as *;

.section {
  &__toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--gap) var(--gap-1-4) var(--gap-3-4) var(--gap-1-4);
    width: 100%;
    max-width: 100%;
    background: none;
    border: none;
    color: var(--body--color);
    transition: var(--transition-color);
    text-align: left;

    .section.portfolio & {
      padding-left: var(--gap-3-4);
    }

    @include breakpoint-sm-up {
      padding: var(--gap) var(--gap-3-4) var(--gap) var(--gap);
    }

    .inkline-icon {
      transform: rotate(-90deg);
      transition: var(--transition-transform), var(--transition-color);
    }

    &:hover,
    &:focus {
      .inkline-icon {
        transform: rotate(-90deg) var(--transform-hover);
      }
    }

    &.open {
      .inkline-icon {
        transform: rotate(0deg);
      }

      &:hover,
      &:focus {
        .inkline-icon {
          transform: rotate(0deg) var(--transform-hover);
        }
      }
    }
  }

  &__content {
    max-width: 100%;
    padding: 0 calc(var(--gap-1-4)) var(--gap-1-4) var(--gap-1-4);

    .section.portfolio & {
      padding-left: var(--gap-2-3);
    }

    .section__toggle {
      padding: var(--gap) var(--gap-3-4) var(--gap) var(--gap);
    }

    .section__content {
      padding: 0 calc(var(--gap)) var(--gap-1-4) var(--gap);
    }

    @include breakpoint-sm-up {
      padding: 0 calc(var(--gap-2)) var(--gap) var(--gap);
    }
  }
}
</style>
