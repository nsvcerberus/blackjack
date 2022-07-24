<template>
  <PlayerArea :title="textData.titleDealer" :cards="cards" :scores="scores" />
</template>


<script>
import base from './mixin'
import { mapState } from 'vuex';

export default {
  mixins: [base],
  computed: {
    ...mapState('gameplay/dealer', ['cards', 'scores'])
  }
}
</script>