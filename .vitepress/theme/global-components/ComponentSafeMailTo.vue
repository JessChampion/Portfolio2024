<template>
  <a
    class="component component--mail-to"
    aria-label="Send email"
    :href="`mailto:${decodedAddress}`"
    @mouseover="showAddress"
    @mouseout="hideAddress"
    @focusin="showAddress"
    @focusout="hideAddress"
  >
    <slot />
  </a>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  codedAddress: {
    type: String,
    required: true,
    description: "Base64 encoded email address",
  },
});

const decodedAddress = ref("");

const showAddress = () => {
  if (typeof atob !== "undefined" && props.codedAddress?.length > 0) {
    decodedAddress.value = atob(props.codedAddress);
  }
};

const hideAddress = () => {
  decodedAddress.value = "";
};
</script>

<style lang="scss" scoped>
.component--mail-to {
  display: inline-block;
}
</style>
