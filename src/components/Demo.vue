<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
      <Button @click="showCode" v-else>查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>
<script lang="ts">
import "prismjs";
import Button from "../lib/Button.vue";
import "../../node_modules/prismjs/themes/prism-tomorrow.css"; //引入css文件让代码高亮   这句话在这里引入 报错  改为css里面引入错误 改成这个路径就对了
import { computed, ref } from "vue";
const Prism = (window as any).Prism;
console.log(Prism);
export default {
  components: {
    Button,
  },
  props: {
    component: Object,
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const showCode = () => {
      codeVisible.value = true;
    };
    const hideCode = () => {
      codeVisible.value = false;
    };
    const codeVisible = ref(false);
    return {
      Prism,
      html,
      codeVisible,
      showCode,
      hideCode,
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
      width: 80vw;
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      overflow-x: auto;
      // margin: 0;
      @media (min-width: 800px) {
        width: 100%;
      }
    }
  }
}
</style>
