<template>
  <Heading :text="textData.heading"/>
</template>


<script>
import { textData } from '@/data/text'
import Heading from '@/components/texts/Heading.vue';

export default {
  components: {
    Heading
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
.heading {
  padding-top: 20px;
  text-align: left;
}
</style>