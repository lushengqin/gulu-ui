<template>
  <div>
    <h1>Button 组件示例</h1>
  </div>
  <div class="warp">
    <Demo :component="Button1Demo"></Demo>
    <Demo :component="Button2Demo"></Demo>
    <Demo :component="Button3Demo"></Demo>
    <Demo :component="Button4Demo"></Demo>
    <Demo :component="Button5Demo"></Demo>
  </div>
</template>
<script>
import Demo from "../components/Demo.vue";
import Button1Demo from "./Button/Button1.demo.vue";
import Button2Demo from "./Button/Button2.demo.vue";
import Button3Demo from "./Button/Button3.demo.vue";
import Button4Demo from "./Button/Button4.demo.vue";
import Button5Demo from "./Button/Button5.demo.vue";
export default {
  components: { Demo },
  props: {},
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return {
      onClick,
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
    };
  },
};
</script>
<style lang="scss"></style>
