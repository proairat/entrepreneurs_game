<template>
  <div class="cards">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  max-width: 900px;
  margin: 16px auto;
}
</style>
