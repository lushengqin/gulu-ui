<template>
  <div>
    <div class="topnavAndBanner">
      <topnav />
      <div class="banner">
        <h1>Mother UI</h1>
        <h2>一款基于vue3.0的UI框架</h2>
        <p class="actions">
          <a href="https://github.com/lushengqin" target="_blank">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-dengpao"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
$essential: #00877a;
$textessential: #006064;
$radius: 4px;
.topnavAndBanner {
  // position: relative;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(248, 248, 248, 1) 0%,
    rgba(244, 244, 244, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
  margin: 40px 20px;
  display: flex;
  @media (min-width: 800px) {
    // width: 800px;
    justify-content: center;
    ul {
      flex-wrap: nowrap;

      align-items: flex-start;
      justify-content: center;
      > li {
        flex: 1;
        justify-content: start;
        align-content: space-between;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      padding: 30px 8px;
      display: grid;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}

.banner {
  padding: 100px 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 30px;
    color: $textessential;
  }
  > h2 {
    font-size: 18px;
    color: $textessential;
    margin-top: 5px;
    margin-bottom: 8px;
  }
  > .actions {
    padding: 10px 0;
    a {
      margin: 10px;
      background: $essential;
      padding: 6px 20px;
      border-radius: $radius;
      color: white;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 6px 1px;
    }
  }
}
</style>
