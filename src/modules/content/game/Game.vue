<template>
  <section class="game">
    <PlayersAreas/>
    <Gameplay/>
  </section>
</template>


<script>
import PlayersAreas from "./playersAreas/PlayersAreas.vue"
import Gameplay from "./gameplay/Gameplay.vue"

export default {
  components: {
    PlayersAreas,
    Gameplay
  }
}
</script>


<style scoped>
.game {
  display: flex;
  flex-direction: column;
}
</style>