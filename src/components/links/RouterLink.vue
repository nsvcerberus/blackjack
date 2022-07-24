<template>
  <router-link :to="path">{{name}}</router-link>
</template>


<script>
export default {
  props: {
    name: String,
    path: String
  }
}
</script>


<style scoped lang="scss">
a {
  font-size: 24px;
  color: $color-beige;
  letter-spacing: 1px;
}

a:before {
  content: '\2022';
  margin-right: 5px;

}

a.router-link-exact-active {
  color: $color-gold;
}
</style>