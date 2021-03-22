<demo>
支持 level
</demo>

<template>
  <div>
    <Button level="main">主要按钮</Button>
    <Button level="minor">次要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
    <Button level="warn">警告按钮</Button>
  </div>
  <!-- <div>
    <Button theme="text" level="main">主要文字按钮</Button>
    <Button theme="text">普通文字按钮</Button>
    <Button theme="text" level="danger">危险文字按钮</Button>
  </div> -->
</template>

<script>
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
