<template>
  <div :size="size">
    <button v-bind="rest">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  setup(props, context) {
    //通过第二个参数得到
    const { size, ...rest } = context.attrs;
    return { size, rest };
  },
};
</script>
<style lang="scss" scoped>
div {
  border: 1px solid red;
}
</style>
