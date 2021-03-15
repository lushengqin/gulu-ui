<template>
  <div>我是buttondemo</div>
  <div>
    <Button> 默认样式 </Button>
    <Button theme="button"> 按钮样式 </Button>
    <Button theme="link"> 链接样式</Button>
    <Button theme="text"> 文本样式 </Button>
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
