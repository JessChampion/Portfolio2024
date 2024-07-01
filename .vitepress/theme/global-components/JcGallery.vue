<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<script setup>
import { computed, ref, useSlots } from "vue";
import JcGalleryNavigatorComponent from "./JcGalleryNavigatorComponent.vue";
import JcGalleryComponent from "./JcGalleryComponent.vue";

const MAX_INDEX = 20;
const slots = useSlots();

const childComponents = computed(() => {
  const slot = slots.default;
  return slot ? slot() : [];
});

if (childComponents.value.length > MAX_INDEX) {
  console.error(`The maximum number of images supported is ${MAX_INDEX}`);
}

const currentIndex = ref(1);

const goTo = (index) => {
  if (index < 0 || index > childComponents.value.length) return;
  currentIndex.value = index;
};
</script>

<template>
  <div class="gallery-modal">
    <IButton @click="visible = true" class="gallery-modal__toggle">
      <div class="wrap">
        <jc-gallery-component
          :currentIndex="currentIndex"
          :children="childComponents"
          :goTo="goTo"
        >
          <slot />
        </jc-gallery-component>
        <jc-gallery-navigator-component
          :currentIndex="currentIndex"
          :totalChildren="childComponents.length"
          :goTo="goTo"
        />
      </div>
    </IButton>

    <IModal v-model="visible" :class="visible && 'gallery--open'" size="lg">
      <IButton @click="visible = false" class="gallery-modal__close">
        <IIcon name="ink-times" size="md" alt="close" />
      </IButton>
      <jc-gallery-component
        :currentIndex="currentIndex"
        :children="childComponents"
        :goTo="goTo"
      >
        <slot />
      </jc-gallery-component>

      <template #footer>
        <jc-gallery-navigator-component
          :currentIndex="currentIndex"
          :totalChildren="childComponents.length"
          :goTo="goTo"
        />
      </template>
    </IModal>
  </div>
</template>

<style lang="scss">
.gallery-modal .modal-wrapper .modal {
  pointer-events: none;

  .modal-body {
    background: none;
    border: none;
    border-radius: var(--border-top-left-radius-lg);
    padding: var(--gap-1-2);
    pointer-events: auto;
    position: relative;
  }

  > .modal-footer {
    background: none;
    border: none;
    margin: 0 auto 0;
    max-width: 100%;
    overflow: hidden;
    padding: 0;
  }
}
</style>

<style lang="scss" scoped>
.gallery-modal {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: var(--gap) 0;

  &__close {
    position: absolute;
    right: -0.5rem;
    top: -0.5rem;
    padding: var(--gap-3-4);
    background: none;
    border: none;

    .inkline-icon {
      transition: transform var(--transition-timing-function)
        var(--transition-duration);
    }

    &:hover,
    &:focus,
    &:active {
      .inkline-icon {
        transform: var(--transform-hover);
      }
    }
  }

  &__toggle {
    background: none;
    border: none;
    box-shadow: none;

    &:hover,
    &:focus,
    &:active {
      background: none;
    }

    .wrap {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
