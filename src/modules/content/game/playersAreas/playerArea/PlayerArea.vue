<template>
  <div class="player-area">
    <Title :text="title"/>
    <Cards :cards="cards"/>
    <Score :scores="scores"/>
  </div>
</template>


<script>
import { textData } from '@/data/text'
import Title from './components/Title.vue'
import Cards from './components/Cards.vue'
import Score from './components/Score.vue'

export default {
  props: {
    title: String,
    cards: Array,
    scores: Number,
    playerId: Number
  },
  components: {
    Cards,
    Title,
    Score
  },
  data() {
    return {
      textData
    }
  }
}
</script>


<style scoped lang="scss">
$border-size: 5px;

.player-area {
  --border-size: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - $border-size * 2);
  position: relative;
  float: left;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 20px;
  margin-bottom: 30px;
  border: $border-size solid $color-beige;
  border-radius: 60px;
  border-style: dotted;
}

.player-area:last-of-type {
  margin-bottom: 0;
}
</style>