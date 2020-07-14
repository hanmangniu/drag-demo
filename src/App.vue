<template>
  <div id="app">
    <!-- <h1>拖动复制</h1> -->
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld /> -->
    <SortTable />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SortTable from './components/sortTable.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    SortTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
