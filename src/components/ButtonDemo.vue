<template>
  <div>我是buttondemo</div>
  <div>
    <div>样式一</div>
    <Button> 默认样式 </Button>
    <Button theme="button"> 按钮样式 </Button>
    <Button theme="link"> 链接样式</Button>
    <Button theme="text"> 文本样式 </Button>
    <div>样式二</div>
    <div>
      <Button size="big">大大大</Button>
      <Button>普普通</Button>
      <Button size="small">小小小</Button>
    </div>
    <div>
      <Button theme="link" size="big">大大大</Button>
      <Button theme="link">普普通</Button>
      <Button size="small" theme="link">小小小</Button>
    </div>
    <div>
      <Button size="big" theme="text">大大大</Button>
      <Button theme="text">普普通</Button>
      <Button size="small" theme="text">小小小</Button>
    </div>
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
