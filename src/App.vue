<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";

export default {
  name: "App",
  setup() {
    const assideVisible = ref(false);
    provide("xxx", assideVisible); //在父组件中标记
  },
};
</script>
