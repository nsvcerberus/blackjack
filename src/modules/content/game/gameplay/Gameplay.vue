<template>
  <div class="gameplay">
    <ButtonPlay :class="{'disabled':roundLaunched}"/>
  </div>
</template>


<script>
import ButtonPlay from './buttons/ButtonPlay.vue'
import { mapState } from 'vuex';

export default {
  components: {
    ButtonPlay
  },
  computed: {
    ...mapState('gameplay', ['roundLaunched']),
  }
}
</script>


<style scoped>
.gameplay {
  margin-top: 30px;
}

.disabled {
  display: none;
}
</style>