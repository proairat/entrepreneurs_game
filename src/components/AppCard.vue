<template>
  <li class="cardItem">
    <img class="poster" :src="props.src" :alt="props.alt" />
    <div class="header">{{ props.header }}</div>
    <div class="title">{{ props.title }}</div>
    <div class="duration">Длительность: {{ props.duration }}</div>
    <!--<router-link class="footer" :to="`/courses/${props.id}`">{{ props.footer }}</router-link>-->
    <router-link
      class="footer"
      :to="{
        path: `/courses`,
        name: 'AppCourse',
        params: { id: props.id },
      }"
      >{{ props.footer }}</router-link
    >
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: number;
  src: string;
  alt: string;
  header: string;
  title: string;
  duration: string;
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
.cardItem {
  display: grid;
  grid-template-rows: 1fr 0.1fr 0.1fr 0.1fr 0.1fr;
  grid-template-areas:
    "poster"
    "header"
    "title"
    "duration"
    "footer";
  background-color: $white;
  box-shadow: $box-shadow-2dp;
  border-radius: 0.625rem;

  & > .poster {
    grid-area: poster;
    width: 100%;
    padding: 1rem;
  }

  & > .header {
    grid-area: header;
    padding: 0 1rem;
    font-size: 1.25rem;
    font-weight: $font-weight-bold;
    color: $gray-80;
    line-height: $line-height-m;
    min-height: 3rem;
  }

  & > .title {
    grid-area: title;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 1rem 1rem 0 1rem;
    color: $gray;
    font-weight: $font-weight-bold;
  }

  & > .duration {
    grid-area: duration;
    font-size: $text-size-s;
    line-height: 1.5rem;
    padding: 0 1rem 1rem 1rem;
    color: $gray;
  }

  & > .footer {
    grid-area: footer;
    padding: 1rem;
    margin: 0 1rem 1rem 1rem;
    background-color: $sun-30;
    // background-color: $blue-10;
    color: $gray-80;
    // color: $blue-80;
    text-align: center;
    &:hover {
      background-color: $sun-20;
    }
  }
}
</style>
