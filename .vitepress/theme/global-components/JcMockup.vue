<script setup>
import { defineProps, onMounted, onUnmounted, ref, watch } from "vue";

const SCROLL_TOLERANCE = 0.5;

defineProps({
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
});

const hasContentOverflow = ref(false);
const isMaxScroll = ref(false);
const wrapRef = ref(null);
const elementHeight = ref(0);
const scrollPosition = ref(0);

onMounted(() => {
  if (wrapRef.value) {
    // ResizeObserver to update elementHeight
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        elementHeight.value = entry.contentRect.height;
      }
    });
    resizeObserver.observe(wrapRef.value);

    // Event listener to update scrollPosition
    const handleScroll = () => {
      scrollPosition.value = wrapRef.value.scrollTop;
    };
    wrapRef.value.addEventListener("scroll", handleScroll);

    // Cleanup
    onUnmounted(() => {
      wrapRef.value.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    });
  }
});

watch([elementHeight, scrollPosition], ([wrapHeight, scrollPosition]) => {
  const contentHeight = wrapRef.value.children[0].height;
  const scrollHeight = wrapRef.value.scrollHeight;
  hasContentOverflow.value = contentHeight - wrapHeight > SCROLL_TOLERANCE;
  isMaxScroll.value =
    scrollHeight - scrollPosition - wrapHeight < SCROLL_TOLERANCE;
});
</script>

<template>
  <div
    :class="['mockup', `mockup--${type}`]"
    :aria-roledescription="`${type} device screen shot`"
  >
    <div class="mockup__inner">
      <div class="mockup__header" role="presentation"></div>
      <div class="mockup__wrap" ref="wrapRef">
        <slot></slot>
      </div>
      <div class="mockup__hint" v-if="hasContentOverflow && !isMaxScroll">
        <svg
          class="zoom-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
        >
          <title>Zoom</title>
          <path
            fill="currentColor"
            d="M27.132 23.827l-6.632-5.641c-0.686-0.617-1.419-0.9-2.011-0.873 1.566-1.834 2.511-4.213 2.511-6.813 0-5.799-4.701-10.5-10.5-10.5s-10.5 4.701-10.5 10.5 4.701 10.5 10.5 10.5c2.6 0 4.98-0.946 6.813-2.511-0.027 0.592 0.256 1.326 0.873 2.011l5.641 6.632c0.966 1.073 2.544 1.164 3.506 0.201s0.872-2.54-0.201-3.506zM10.5 17.5c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7z"
          />

          <path
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            d="M6 10.5 L 15 10.5 M 10.5 6 L 10.5 15"
          />
        </svg>
        <svg
          class="scroll-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
        >
          <title>scroll</title>
          <g
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path class="scroll-line one" d="M5 2 L 14 8 L 23 2" />
            <path class="scroll-line two" d="M5 11 L 14 17 L 23 11" />
            <path class="scroll-line three" d="M5 20 L 14 26 L 23 20" />
          </g>
        </svg>
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

@keyframes scroll {
  0%,
  50%,
  100% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
}

.mockup {
  &__inner {
    background: $color-highlight-dark;
    border: $color-highlight-dark solid calc(var(--gap) * 1 / 4);
    cursor: pointer;
    margin: 0 auto;
    max-width: $size-card-width-sm;
    position: relative;
    transition: $transition-slide, var(--transition-border-color);
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

  &__hint {
    position: relative;

    .scroll-icon,
    .zoom-icon {
      position: absolute;
      right: 0.5rem;
      bottom: 0.5rem;
      width: 1.8rem;
      height: 1.8rem;
      color: $color-highlight-dark;

      .gallery--open & {
        width: 3rem;
        height: 3rem;
      }
    }

    .zoom-icon {
      right: -0.15rem;
      bottom: -0.15rem;
      color: var(--color-primary);
      opacity: 0.75;

      .gallery--open & {
        display: none;
      }
    }

    .scroll-icon {
      display: none;

      .gallery--open & {
        display: block;
      }

      .scroll-line {
        opacity: 0.5;
        animation: scroll 3s infinite 0s;
        transition: opacity var(--transition-timing-function) 1s;

        &.two {
          animation-delay: 0.25s;
        }

        &.three {
          animation-delay: 0.5s;
        }
      }
    }
  }
}
</style>
