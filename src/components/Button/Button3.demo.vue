<demo>
常规使用
</demo>

<template>
  <div>
    <div>
      <Button> 默认样式 </Button>
      <Button theme="link"> 链接样式</Button>
      <Button theme="text"> 文本样式 </Button>
    </div>
  </div>
</template>

<script>
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
