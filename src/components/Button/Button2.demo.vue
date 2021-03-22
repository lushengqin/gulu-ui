<demo>
支持 size
</demo>
<template>
  <div>
    <div>
      <Button size="big">超大按钮</Button>
      <Button>默认按钮</Button>
      <Button size="small">超小按钮</Button>
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
