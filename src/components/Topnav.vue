<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-lulu"></use>
      </svg>
    </router-link>

    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
      <li>
        <a href="https://github.com/lushengqin" target="_blank">github</a>
      </li>
    </ul>
    <svg
      v-if="toggleMenuButtonVisible"
      class="toggleasside"
      @click="toggleMenu"
    >
      <use xlink:href="#icon-gengduo"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  name: "Topnav",
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
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
  display: flex;
  padding: 16px 26px;
  z-index: 10;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  background-color: #fff;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.07);
  -webkit-box-shadow: 0 5px 5px rgba(0, 0, 0, 0.07);
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 40px;
      height: 40px;
    }
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
    width: 26px;
    height: 26px;
    position: absolute;
    top: 50%;
    left: 20px;
    z-index: 20;
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
