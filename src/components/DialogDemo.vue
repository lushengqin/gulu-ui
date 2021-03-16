<template>
  <div>DialogDemo</div>
  <div>案例1</div>
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
  </Dialog>

  <div>案例2</div>
  <Button @click="showDialog">show </Button>
</template>
<script>
import { ref, h } from "vue";
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {
      return true;
    };
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "您好",
        ok() {
          console.log("ok");
        },
        cancel() {
          props.cancel?.();
          console.log("cancel");
        },
      });
    };
    return { x, toggle, f2, f1, showDialog };
  },
};
</script>
