<template>
  <div>
    <topnav />
    <div class="content">
      <aside>边栏</aside>
      <main>内容</main>
    </div>
  </div>
</template>
<script>
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
