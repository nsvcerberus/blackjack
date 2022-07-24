<template>
  <nav>
    <RouterLink :name="navigationData.game.name" :path="navigationData.game.path" />
    <RouterLink :name="navigationData.rules.name" :path="navigationData.rules.path" />
  </nav>
</template>


<script>
import { navigationData } from '@/data/navigation'
import RouterLink from '@/components/links/RouterLink.vue'

export default {
  components: {
    RouterLink
  },
  data() {
    return {
      navigationData
    }
  }
}
</script>


<style scoped>
nav {
  margin-top: 58px;
}

nav>a {
  padding-left: 26px
}
</style>