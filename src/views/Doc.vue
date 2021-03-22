<template>
  <div class="layout">
    <topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <aside v-if="assideVisible">
        <h2>关于</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/start">开始使用</router-link>
          </li>
        </ol>

        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
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
$essential: #00877a;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    padding-top: 80px;
    flex-grow: 1;
    padding-left: 240px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    // padding-right: 20px;
    padding: 20px;
  }
  aside {
    background: #f8f8f8;
    width: 240px;
    // padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 90px;
    height: 100%;
    z-index: 1;
    > h2 {
      margin-bottom: 4px;
      padding: 8px 26px;
    }
    > ol {
      > li {
        > a {
          padding: 0px 26px;
          line-height: 40px;
          color: $essential;
          display: block;
        }
      }
    }
    main {
      // overflow: auto;
      border: 1px solid red;
    }
  }
  .router-link-exact-active {
    background-color: rgba($color: #00877a, $alpha: 0.1);
  }
}
</style>
