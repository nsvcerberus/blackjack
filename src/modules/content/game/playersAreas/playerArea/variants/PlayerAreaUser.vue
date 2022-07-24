<template>
  <PlayerArea :title="textData.titleUser" :cards="cards" :scores="scores"/>
</template>


<script>
import base from './mixin'
import { mapState } from 'vuex';

export default {
  mixins: [base],
  computed: {
    ...mapState('gameplay/user', ['cards', 'scores'])
  }
}
</script>