<template>
  <div class="title">
    <span class="left">&diams;</span>
    {{text}}
    <span class="right">&diams;</span>
  </div>
</template>


<script>
export default {
  props: {
    text: String
  }
}
</script>


<style lang="scss">
.title {
  display: flex;
  width: 100%;
  font-size: 40px;
  color: #fff;
  text-align: center;
  flex-direction: row;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
}

$span-spacing: 24px;

.title span.left,
.title span.right {
  color: $color-beige;
  font-size: 22px;
  margin-top: 4px;
  text-shadow: initial;
}

.title span.left {
  margin-right: $span-spacing;
}

.title span.right {
  margin-left: $span-spacing;
}
</style>