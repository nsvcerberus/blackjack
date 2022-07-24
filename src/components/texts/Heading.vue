<template>
  <div class="heading">
    <h1 class="shadow">{{text}}</h1>
    <h1 class="main">{{text}}</h1>
  </div>
</template>


<script>
export default {
  props: {
    text: String
  }
}
</script>


<style scoped>
h1 {
  font-size: 80px;
  line-height: normal;
}

h1.main {
  position: relative;
  background: -webkit-linear-gradient( #fef564 40%, #ff9d00 80%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;
}

h1.shadow {
  position: absolute;
  padding-top: 6px;
  text-indent: 5px;
  color: #000;
  z-index: 0;
}
</style>