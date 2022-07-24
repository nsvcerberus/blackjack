<template>
  <Button :text="textData.buttonPlay" @click.native="click" />
</template>


<script>
import Button from '@/components/buttons/Button.vue';
import { textData } from '@/data/text';
import { mapActions } from 'vuex';

export default {
  components: {
    Button
  },
  data() {
    return {
      textData
    }
  },
  methods: {
    ...mapActions('gameplay', ['launchRound']),
    click() {
      this.launchRound(true)
    }
  }
}
</script>