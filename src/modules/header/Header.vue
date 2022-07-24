<template>
  <header>
    <Heading/>
    <Navigation/>
  </header>
</template>


<script>
import { textData } from '@/data/text'
import Heading from './heading/Heading.vue';
import Navigation from './navigation/Navigation.vue';

export default {
  components: {
    Heading,
    Navigation
  },
  data() {
    return {
      Heading,
      textData
    }
  }
}
</script>


<style scoped>
header {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
}
</style>