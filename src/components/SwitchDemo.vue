<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="Switch1Demo"></Demo>
    <Demo :component="Switch2Demo"></Demo>
  </div>
</template>
<script lang="ts">
import "prismjs";

// import "prismjs/themes/prism.css"; //引入css文件让代码高亮   这句话在这里引入 报错  改为css里面引入
import "../../node_modules/prismjs/themes/prism-okaidia.css"; //引入css文件让代码高亮   这句话在这里引入 报错  改为css里面引入错误 改成这个路径就对了
const Prism = (window as any).Prism;
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";

// import Demo from "./Demo.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Button,
    Demo,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
      Switch1Demo,
      Switch2Demo,
      Prism,
    };
  },
};
</script>

<style lang="scss">
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
