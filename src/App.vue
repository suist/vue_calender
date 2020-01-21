<template>
  <div id="app">

    <Calender msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Calender from './components/Calender.vue'

export default {
  name: 'app',
  components: {
    Calender
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
</style>
