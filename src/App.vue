<template>
  <div id="app">
    <div id="nav">
      <router-link to="/parameters">Parameters</router-link> |
      <router-link to="/systems">Systems</router-link> |
      <router-link to="/calibration">Calibration</router-link> |
      <router-link to="/tools">Tools</router-link>
    </div>
    <param-list/>
    <router-view/>
  </div>
</template>

<script>
import './assets/css/tailwind.css'
import ParamList from './views/stickies/ParamList.vue'

export default {
  components:{
    ParamList,
  }
  
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: blue;
    }
  }
}
</style>
