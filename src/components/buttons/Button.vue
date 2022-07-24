<template>
  <button :class="{'inactive':isInactive}">{{text}}</button>
</template>


<script>
export default {
  props: {
    text: String,
    isInactive: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style>
button {
  min-width: 280px;
  font-family: 'Lobster', Arial, Helvetica, sans-serif;
  font-size: 40px;
  text-align: center;
  color: rgb(0, 0, 0);
  padding: 10px 30px 13px;
  background-image: linear-gradient(to left, #cc8500, #fcd76e, #ffb200);
  border-radius: 22px;
  border: 0;
  box-shadow: 0 4px 5px #101010;
  cursor: pointer;
}

button:hover {
  background-image: linear-gradient(to left, #ffbe25, #ffe190, #ffbe25);
  box-shadow: 0 0 6px #ffab3c,
              0 4px 5px #101010;
}

button.inactive {
  opacity: 0.7;
  pointer-events: none;
}
</style>