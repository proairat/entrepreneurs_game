<template>
  <article class="card">
    <header class="header">{{ props.title }}</header>
    <img class="poster" :src="props.src" :alt="props.alt" />
    <div class="content">
      <p>{{ props.text }}</p>
    </div>
    <footer class="footer">{{ props.footer }}</footer>
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

<style scoped lang="scss">
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;

  & > .header {
    font-size: 1.5rem;
    text-align: center;
    padding: 0.5em;
    border-radius: 10px 10px 0 0;
    border-top: 1px solid #999;
    border-left: 1px solid #999;
    border-right: 1px solid #999;
    margin: 0;
  }

  & > .poster {
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-width: 100%;
    border-left: 1px solid #999;
    border-right: 1px solid #999;
  }
  & > .content {
    padding: 0.5rem;
    border-left: 1px solid #999;
    border-right: 1px solid #999;
  }

  & > .footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 0.5rem;
    border-radius: 0 0 10px 10px;
    border-left: 1px solid #999;
    border-right: 1px solid #999;
    border-bottom: 1px solid #999;
  }
}
</style>
