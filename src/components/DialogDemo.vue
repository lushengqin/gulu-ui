<template>
  <div>DialogDemo</div>
  <div>案例1</div>
  <!-- <Dialog @click="toggle"></Dialog>
  <Button v-model:visible="x">toggle</Button> -->
  <Button @click="toggle">toggle</Button>
  <!-- <Dialog :visible="x" @update:visible="x = $event"></Dialog> -->
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  ></Dialog>
  <!-- <Dialog v-model:visible="x"></Dialog> -->
</template>
<script>
import { ref } from "vue";
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
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
    return { x, toggle, f2, f1 };
  },
};
</script>
