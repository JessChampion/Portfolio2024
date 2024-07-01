<script>
import { reactive } from "vue";

export default {
  props: {
    type: {
      type: String,
      validator: function (value) {
        const MOCKUP_TYPES = {
          mobile: "mobile",
          tablet: "tablet",
          desktop: "desktop",
        };
        return Object.keys(MOCKUP_TYPES).indexOf(value) !== -1;
      },
      default: "mobile",
    },
    setup(props) {
      const state = reactive({
        type: props.type,
      });

      return { state };
    },
  },
};
</script>

<template>
  <div
    :class="['mockup', `mockup--${type}`]"
    :aria-roledescription="`${type} device screen shot`"
  >
    <div class="mockup__inner">
      <div class="mockup__header" role="presentation"></div>
      <div class="mockup__wrap">
        <slot></slot>
      </div>
      <div class="mockup__footer" role="presentation"></div>
    </div>
  </div>
</template>

<style lang="scss">
$size-card-width-sm: 17rem;
$size-card-height-sm: 18rem;
$size-card-width: 16.5rem;
$size-card-height: 17.5rem;

$color-highlight: #f0f0f0;
$color-highlight-dark: #777;
$color-highlight-light: #f0f0f0;
$color-highlight-white: #fff;
$transition-slide: transform 500ms ease-in-out;
$transition-background: background 250ms ease-in;

.mockup {
  &__inner {
    background: $color-highlight-dark;
    border: $color-highlight-dark solid calc(var(--gap) * 1 / 4);
    cursor: pointer;
    margin: 0 auto;
    max-width: $size-card-width-sm;
    position: relative;
    transition: $transition-slide;
    width: 100%;

    @media screen and (min-width: var(--breakpoint-sm)) {
      max-width: $size-card-width;
    }

    .mockup--desktop & {
      border-width: var(--gap) calc(var(--gap) * 1 / 6) calc(var(--gap) * 1 / 3);
      border-radius: var(--border-radius) var(--border-radius)
        calc(var(--border-radius) / 2) calc(var(--border-radius) / 2);
      max-width: $size-card-width * 1.25;
    }

    .mockup--tablet & {
      border-radius: var(--border-radius-lg);
      border-width: calc(var(--gap) * 1.1) calc(var(--gap) * 1 / 3)
        calc(var(--gap) * 1.25);
      max-width: $size-card-width * 0.85;
    }

    .mockup--mobile & {
      border-radius: var(--border-radius-lg);
      border-width: calc(var(--gap) * 1.25) calc(var(--gap) * 1 / 3)
        calc(var(--gap) * 1.5);
      max-width: $size-card-width * 0.6;
    }

    .gallery--open & {
      //box-shadow: $shadow-dark;
      cursor: default;
      margin: calc(var(--gap) * 3 / 4) auto;
    }

    .gallery--open .mockup--desktop & {
      max-width: calc(95vmin - #{calc(var(--gap) * 2)});

      @media all and (min-height: var(--breakpoint-sm)) and (min-width: var(--breakpoint-sm)) {
        border-width: calc(var(--gap) * 1.5) calc(var(--gap) * 1 / 3)
          calc(var(--gap) * 1 / 2);
      }
    }

    .gallery--open .mockup--tablet & {
      max-width: calc(75vmin - #{calc(var(--gap) * 2)});

      @media all and (min-height: var(--breakpoint-sm)) and (min-width: var(--breakpoint-sm)) {
        border-width: calc(var(--gap) * 1.5) calc(var(--gap) * 2 / 3)
          calc(var(--gap) * 1.75);
      }
    }

    .gallery--open .mockup--mobile & {
      max-width: calc(60vmin - #{calc(var(--gap) * 2.5)});

      @media all and (min-height: var(--breakpoint-sm)) and (min-width: var(--breakpoint-sm)) {
        border-width: calc(var(--gap) * 1.5) calc(var(--gap) * 1 / 2)
          calc(var(--gap) * 1.75);
        max-width: calc(60vmin - #{calc(var(--gap) * 2)});
      }
    }
  }

  &__wrap {
    height: 100%;
    margin: 0 auto;
    width: 100%;
    overflow-y: auto;
    position: relative;

    img {
      margin-bottom: calc(var(--gap) * -1 / 4);
      width: 100%;
    }

    @media all and (max-height: var(--breakpoint-sm)) {
    }

    .mockup--desktop & {
      max-height: $size-card-width * 0.75;
    }

    .mockup--tablet &,
    .mockup--mobile & {
      max-height: $size-card-width * 0.85;
    }

    .gallery--open & {
      max-height: calc(70vmin - #{calc(var(--gap) * 2)});
    }

    .gallery--open .mockup--tablet &,
    .gallery--open .mockup--mobile & {
      max-height: calc(85vmin - #{calc(var(--gap) * 3)});

      @media all and (max-height: var(--breakpoint-sm)) {
        max-height: 55vh;
      }
    }
  }

  &__header {
    background: $color-highlight-light;
    border-radius: 50%;
    flex-grow: 1;
    position: absolute;

    .mockup--desktop & {
      box-shadow:
        calc(var(--gap) * 1 / 2) 0 0 0 $color-highlight-light,
        var(--gap) 0 0 0 $color-highlight-light;
      height: calc(var(--gap) * 1 / 3);
      left: calc(var(--gap) * 1 / 8);
      top: calc(#{calc(var(--gap) * -2 / 3)} + #{var(--border-top-width)});
      width: calc(var(--gap) * 1 / 3);
      z-index: 2;
    }

    .mockup--mobile &,
    .mockup--tablet & {
      height: calc(var(--gap) * 1 / 3);
      left: calc(50% - #{calc(var(--gap) * 1 / 6)});
      top: calc(var(--gap) * -3 / 4);
      width: calc(var(--gap) * 1 / 3);
      z-index: 2;
    }

    .mockup--mobile & {
      left: 42.5%;

      &::after {
        content: "";
        display: block;
        background: $color-highlight-light;
        border-radius: var(--border-radius);
        position: absolute;
        left: calc(var(--gap) * 1 / 2);
        height: calc(var(--gap) * 1 / 6);
        top: calc(var(--gap) * 1 / 12);
        width: calc(var(--gap) * 4 / 5);
      }
    }

    .gallery--open .mockup--desktop & {
      @media all and (min-height: var(--breakpoint-sm)) and (min-width: var(--breakpoint-sm)) {
        box-shadow:
          var(--gap) 0 0 0 $color-highlight-white,
          calc(var(--gap) * 2) 0 0 0 $color-highlight-white;
        height: calc(var(--gap) * 3 / 5);
        top: calc(var(--gap) * -1);
        left: calc(var(--gap) * 1 / 8);
        width: calc(var(--gap) * 3 / 5);
      }
    }

    .gallery--open .mockup--tablet &,
    .gallery--open .mockup--mobile & {
      @media all and (min-height: var(--breakpoint-sm)) and (min-width: var(--breakpoint-sm)) {
        height: calc(var(--gap) * 2 / 3);
        left: calc(50% - #{calc(var(--gap) * 1 / 3)});
        top: calc(#{calc(var(--gap) * -1)} - #{var(--border-top-width)});
        width: calc(var(--gap) * 2 / 3);
      }
    }

    .gallery--open .mockup--mobile & {
      @media all and (min-height: var(--breakpoint-sm)) and (min-width: var(--breakpoint-sm)) {
        left: 42%;

        &::after {
          content: "";
          display: block;
          background: $color-highlight-light;
          border-radius: var(--border-radius);
          position: absolute;
          left: calc(var(--gap) * 7 / 8);
          height: calc(var(--gap) * 1 / 3);
          top: calc(var(--gap) * 1 / 6);
          width: calc(var(--gap) * 1.1);
        }
      }
    }
  }

  &__footer {
    .mockup--mobile &,
    .mockup--tablet & {
      background: $color-highlight-light;
      border-radius: 50%;
      height: calc(var(--gap) * 3 / 4);
      position: absolute;
      width: calc(var(--gap) * 3 / 4);
      left: calc(50% - #{calc(var(--gap) * 3 / 8)});
      bottom: calc(var(--gap) * -7 / 6);
    }

    .mockup--tablet & {
      bottom: calc(var(--gap) * -1);
    }

    .gallery--open .mockup--tablet &,
    .gallery--open .mockup--mobile & {
      @media all and (min-height: var(--breakpoint-sm)) and (min-width: var(--breakpoint-sm)) {
        height: var(--gap);
        width: var(--gap);
        left: calc(50% - #{calc(var(--gap) * 4 / 7)});
        bottom: calc(var(--gap) * -4 / 3);
      }
    }
  }
}
</style>
