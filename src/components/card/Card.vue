<template>
  <div class="card">
    <div class="flip">
      <div class="back">
        <CardImage :card="`back`" :positionInSvg="cardsData.back.positionInSvg" />
      </div>
      <div class="front">
        <CardImage :card="card" :positionInSvg="cardsData.cards[card].positionInSvg" />
      </div>
    </div>
  </div>
</template>


<script>
import CardImage from './CardImage.vue';
import { cardsData } from '@/data/cards';

export default {
  props : {
    card: String
  },
  components: {
    CardImage
  },
  data() {
    return {
      cardsData
    }
  }
}
</script>


<style>
.card {
  display: inline-block;
  width: 50px;
  position: relative;
  perspective: 600px;
}

.flip {
  width: 100px;
  height: 145px;
  position: relative;
  float: left;
  left: -25px;
  transform-style: preserve-3d;
}

/* .flip.opened {
  animation: show-card 0.7s linear forwards;
}

@keyframes show-card {
  from {
    transform: rotateY(360deg);
  }
  to {
    transform: rotateY(180deg);
  }
} */

.back,
.front {
  position: absolute;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.back {
  transform: rotateY(180deg);
}

.front {
  transform: rotateY(0deg);
}
</style>