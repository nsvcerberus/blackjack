<template>
  <div class="players-areas">
    <PlayerAreaDealer/>
    <PlayerAreaUser/>
  </div>
</template>


<script>
import PlayerAreaDealer from "./playerArea/variants/PlayerAreaDealer.vue"
import PlayerAreaUser from "./playerArea/variants/PlayerAreaUser.vue"
import { mapState } from "vuex"

export default {
  components: {
    PlayerAreaDealer,
    PlayerAreaUser
  },
  computed: {
    ...mapState('gameplay', ['playersData']),
  }
}
</script>


<style scoped>
.players-areas {
  flex: 1;
}
</style>