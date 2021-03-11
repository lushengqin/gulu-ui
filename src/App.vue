<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";

export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    console.log(width);
    const assideVisible = ref(width <= 500 ? false : true);
    provide("xxx", assideVisible); //在父组件中标记
  },
};
</script>
