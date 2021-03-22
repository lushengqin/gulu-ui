<demo>
函数式调用
</demo>
<template>
  <div>
    <Button level="main" @click="showDialog">另一种方式打开</Button>
  </div>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
import { ref, h } from "vue";
import { openDialog } from "../../lib/openDialog";
export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "函数调用"),
        content: "打开内容区",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return {
      showDialog,
    };
  },
};
</script>
