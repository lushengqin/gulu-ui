<template>
  <!-- <div>我是switchDemo组件</div> -->
  <!-- <Switch :value="y" @update:value="y = $event" /> -->
  <!-- <Switch v-model:value="bool" /> -->
  <div>
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <component :is="Switch1Demo" />
        <!-- <Switch1Demo v-model:value="bool" /> -->
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>{{ Switch1Demo.__sourceCode }}</pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持 disabled</h2>
      <div class="demo-component">
        <!-- <Switch2Demo v-model:value="bool" disabled /> -->
        <component :is="Switch2Demo" />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <!-- <pre></pre> -->
        <pre
          v-html="
            Prism.highlight(
              Switch2Demo.__sourceCode,
              Prism.languages.html,
              'html'
            )
          "
          class="language-css"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "prismjs";
console.log(window.Prism);
// import "prismjs/themes/prism.css"; //引入css文件让代码高亮   这句话在这里引入 报错  改为css里面引入
const Prism = (window as any).Prism;
console.log(Prism.xxx);
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: {
    Button,
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

<style lang="scss" scoped>
// @import "";
// @import url(prismjs/themes/prism.css);
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
