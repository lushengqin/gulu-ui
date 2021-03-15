<template>
  <button class="gulu-button" :class="`theme-${theme}`">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
  },
};
</script>
<style lang="scss" scoped>
button {
  float: left;
}
</style>
