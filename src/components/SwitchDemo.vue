<template>
  <div>我是switchDemo组件</div>
  <!-- <Switch :value="y" @update:value="y = $event" /> -->
  <Switch v-model:value="bool" />
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: { Switch },
  setup() {
    const bool = ref(true);
    return { bool };
  },
};
</script>
