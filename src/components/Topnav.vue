<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleasside" @click="toggleMenu"></span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  name: "Topnav",
  setup() {
    const assideVisible = inject<Ref<boolean>>("assideVisible");
    console.log("topnav 里面获取到的为" + assideVisible.value);
    const toggleMenu = () => {
      assideVisible.value = !assideVisible.value;
    };
    return { toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleasside {
    display: none;
    width: 30px;
    height: 30px;
    background-color: gray;
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleasside {
      display: inline-block;
    }
  }
}
</style>
