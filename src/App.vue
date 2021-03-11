<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
import { router } from "./router/router";

export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    console.log(width);
    const assideVisible = ref(width <= 500 ? false : true);
    provide("assideVisible", assideVisible); //在父组件中标记
    router.afterEach(() => {
      if (width <= 500) {
        assideVisible.value = false;
      }
    });
  },
};
</script>
