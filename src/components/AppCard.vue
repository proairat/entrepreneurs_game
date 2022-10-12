<template>
  <article class="card">
    <img :src="card?.imgSrc" :alt="card?.imgAlt" />
    <div class="content">
      <p>{{ card?.manufacturer }}</p>
    </div>
    <footer>{{ card?.starship_class }}</footer>
  </article>
</template>

<script setup lang="ts">
defineProps({
  card: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
  border: 1px solid #999;
  border-radius: 3px;
  cursor: pointer;
  & img {
    background-color: gray;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  & h2 {
    margin: 0;
    padding: 0.5rem;
    color: black;
    background-color: #ffc107;
  }
  & .content {
    padding: 0.5rem;
  }
  & footer {
    background-color: rgb(0, 0, 0);
    color: #fff;
    padding: 0.5rem;
  }
}
</style>
