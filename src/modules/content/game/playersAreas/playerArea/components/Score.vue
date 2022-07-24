<template>
  <div class="score"><span>{{title}}:</span> {{scores}}</div>
</template>


<script>
import { textData } from '@/data/text'

export default {
  props: {
    scores: Number
  },
  data() {
    return {
      textData,
      title: textData.titleScore
    }
  }
}
</script>


<style lang="scss">
.score {
  width: 100%;
  font-size: 32px;
  color: #fff;
  text-align: center;
}

.score span {
  color: $color-beige;
}
</style>