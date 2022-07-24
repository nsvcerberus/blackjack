<template>
  <div id="app">
    <Header/>
    <Content/>
  </div>
</template>


<script>
import Header from './modules/header/Header.vue'
import Content from './modules/content/Content.vue'

export default {
  components: {
    Header,
    Content
  }
}
</script>


<style>
#app {
  width: 100%;
  max-width: 820px;
  font-family: 'Lobster', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}
</style>
