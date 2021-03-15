<template>
  <div>我是buttondemo</div>
  <div>
    <Button @click="onClick" @mouseover="onClick" @focus="onClick">
      我是buttonDemo里面的按钮
    </Button>
  </div>
</template>
<script>
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  props: {},
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>
