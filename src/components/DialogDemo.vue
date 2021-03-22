<template>
  <h1>Dialog 组件示例</h1>
  <!-- <div>案例1</div>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog> -->
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
</template>
<script>
import Demo from "./Demo.vue";
import Dialog1Demo from "./Dialog/Dialog1.demo.vue";
import Dialog2Demo from "./Dialog/Dialog2.demo.vue";
export default {
  components: { Demo },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo,
    };
  },
};
</script>
