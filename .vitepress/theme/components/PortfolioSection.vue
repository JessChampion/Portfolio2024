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
  <div
    class="section"
    @click="
      (e) => {
        e.preventDefault();
        e.stopPropagation();
      }
    "
  >
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

<style lang="scss" scoped>
@import "../inkline-variables/mixins.scss";

.section {
  &__toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--gap) var(--gap-3-4) var(--gap) var(--gap);
    width: 100%;
    background: none;
    border: none;
    color: var(--body--color);

    .inkline-icon {
      transform: rotate(-90deg);
      transition: transform var(--transition-timing-function)
        var(--transition-duration);
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
    padding: 0;

    @include breakpoint-md-up {
      padding: 0 var(--gap-15);
    }
  }
}
</style>
