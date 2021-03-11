<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <div>
    导航栏
    
    |
    <router-link to="/">Frank</router-link>
    |
    <router-link to='./Doc'>Frank2</router-link>
  </div>
  <hr/>
  <router-view/>
</template>

<script>
import Frank from './components/Frank.vue'

export default {
  name: 'App',
}
</script>
