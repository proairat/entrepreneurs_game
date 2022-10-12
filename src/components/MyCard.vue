<template>
  <article class="card">
    <header>
      <h2>{{ props.title }}</h2>
    </header>
    <img :src="props.src" :alt="props.alt" />
    <div class="content">
      <p>{{ props.text }}</p>
    </div>
    <footer>{{ props.footer }}</footer>
  </article>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  src: string;
  alt: string;
  text: string;
  footer: string;
}>();

/*
defineEmits<{(e: 'subtract', id: number): void
  (e: 'add', id: number): void
  (e: 'remove', id: number): void
}>();
*/
</script>

<style lang="scss">
body {
  background-color: #fff;
  color: #333;
  font: 1.2em / 1.5 Helvetica Neue, Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
}

img {
  max-width: 100%;
}

.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
  border: 1px solid #999;
  border-radius: 3px;

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  & h2 {
    margin: 0;
    padding: 0.5rem;
  }

  & .content {
    padding: 0.5rem;
  }

  & footer {
    background-color: #333;
    color: #fff;
    padding: 0.5rem;
  }
}
</style>
