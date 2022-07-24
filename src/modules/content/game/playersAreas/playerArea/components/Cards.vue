<template>
  <div class="cards">
    <components is="Card" v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>


<script>
import Card from '@/components/card/Card.vue'

export default {
  props: {
    cards: Array
  },
  components: {
    Card
  }
}
</script>


<style scoped>
.cards {
  height: 150px;
  margin: 20px 0;
}
</style>