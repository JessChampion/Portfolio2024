<script setup>
const props = defineProps({
  currentIndex: Number,
  children: Array,
  goTo: Function,
});

const handleGoTo = (index, event) => {
  event.preventDefault();
  event.stopPropagation();
  props.goTo(index);
};
</script>

<template>
  <div class="display">
    <IButton
      class="display__button prev _padding:1/2"
      @click="(e) => handleGoTo(currentIndex - 1, e)"
      :disabled="currentIndex <= 1"
      aria-label="previous image"
    >
      <IIcon name="ink-chevron-down" size="xl" class="rotate-cw" />
    </IButton>
    <div class="display__image" :data-current="currentIndex">
      <slot />
    </div>
    <IButton
      class="display__button next _padding:1/2"
      @click="(e) => handleGoTo(currentIndex + 1, e)"
      :disabled="currentIndex >= children.length"
      aria-label="next image"
    >
      <IIcon name="ink-chevron-down" size="xl" class="rotate-ccw" />
    </IButton>
  </div>
</template>

<style lang="scss" scoped>
.display {
  display: grid;
  gap: var(--gap-1-2);
  grid-template-columns: auto 1fr auto;
  align-items: center;
  pointer-events: none;

  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: auto;

    & > * {
      display: none;
    }

    @for $i from 1 through 20 {
      &[data-current="#{$i}"] > *:nth-child(#{$i}) {
        display: block;
      }
    }
  }

  &__button {
    border: none;
    background: none;
    pointer-events: auto;
    max-height: 100%;

    &:disabled {
      visibility: hidden;
      pointer-events: none;
    }

    .inkline-icon {
      transition: var(--transition-transform);
    }

    &:hover,
    &:focus,
    &:active {
      .inkline-icon {
        transform: var(--transform-hover);
      }

      .rotate-cw {
        transform: var(--transform-hover) rotate(90deg);
      }

      .rotate-ccw {
        transform: var(--transform-hover) rotate(-90deg);
      }
    }
  }

  .rotate-cw {
    transform: rotate(90deg);
  }

  .rotate-ccw {
    transform: rotate(-90deg);
  }
}
</style>
