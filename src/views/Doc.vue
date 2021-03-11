<template>
  <div>
    <topnav />
    <div class="content">
      <aside v-if="assideVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="./doc/button">组件1</router-link>
          </li>
          <li>
            <router-link to="./doc/button2">组件2</router-link>
          </li>
          <li>
            <router-link to="./doc/button">组件3</router-link>
          </li>
          <li>
            <router-link to="./doc/button2">组件4</router-link>
          </li>
          <li>
            <router-link to="./doc/button">组件5</router-link>
          </li>
          <li>
            <router-link to="./doc/button2">组件6</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    const assideVisible = inject<Ref<boolean>>("assideVisible");
    console.log("topnav 里面获取到的为" + assideVisible.value);
    return { assideVisible };
  },
};
</script>
<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  border: 1px solid red;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
</style>
