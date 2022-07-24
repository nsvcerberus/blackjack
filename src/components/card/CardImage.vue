<template>
  <div class="card-image">
    <svg width="100%" :viewBox="positionInSvg">
      <use :xlink:href="`images/svg/cards.svg#` + card"></use>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    card: String,
    positionInSvg: String
  }
}
</script>


<style>
.card-image {
  width: 100%;
}

.card-image svg {
  width: 100%;
  position: relative;
  float: left;
}
</style>