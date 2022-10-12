<template>
  <div class="max-w-7xl mx-auto container">
    <slot name="main"></slot>
  </div>
</template>

<style lang="scss">
// @use "sass:math";

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1;
  grid-template-areas: "description carousel";
}

/*
@media screen and (max-width: 960px) {
  .container {
    background-color: red;
    color: red;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2;
    grid-template-areas: 
    "description description"
    "carousel carousel";
  }
}
*/

.item-a {
  grid-area: description;
}

.item-b {
  grid-area: carousel;
  width: inherit;
  $ratio-16-9: 44%;
  $cols: 1;

  .wrapper {
    width: calc(100% / $cols);
    height: 0;
    position: relative;
    overflow: hidden;
    // padding-bottom: math.div($ratio-16-9, $cols);
    padding-bottom: 20px;

    .centered {
      width: 100%;
      height: auto;
      position: absolute;
      top: -50%;
      left: -50%;
      right: -50%;
      bottom: -50%;
      margin: auto;
    }
  }
}
</style>
