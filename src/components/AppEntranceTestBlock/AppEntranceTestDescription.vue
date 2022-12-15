<template>
  <div v-if="!activeEntranceTest" class="test-undefined">
    К сожалению, тест ещё не разработан...
  </div>
  <div v-else class="test-description">
    <div class="test-description__title text-xl">
      {{ activeEntranceTest.title }}
    </div>
    <div class="test-description__content">
      <p>
        Открыть свое дело мечтают многие. Кто-то уже открыл, кто-то сомневается
        в реальности такого шага, другие думают, что не готовы. Вот проверить
        готовность мы как раз и собираемся.
      </p>
      <p>
        Ответьте на несколько простых вопросов, а в конце узнаем, стоит ли
        подавать документы на стартап или лучше побольше разведать о
        предпринимательстве?
      </p>
    </div>
    <AppEntranceTestPersonalData />
  </div>
</template>

<script setup lang="ts">
import { useEntranceTestsStore } from "@/stores";
import { storeToRefs } from "pinia";

const entranceTestsStore = useEntranceTestsStore();
const { activeEntranceTest } = storeToRefs(entranceTestsStore);
</script>

<style scoped lang="scss">
.test-undefined {
  color: $rose-80;
  padding-top: 1.5rem;
  font-weight: $font-weight-medium;
}
.test-description {
  display: grid;
  padding-top: 1.5rem;
  &__outer-start-test {
    display: flex;
    justify-content: center;
    padding-top: 1.5rem;
  }
  &__title {
    display: flex;
    justify-content: center;
    font-weight: $font-weight-medium;
    padding-bottom: 1.5rem;
  }
  &__content {
    font-size: $text-base-size;
    text-indent: 1.5rem;
  }
  &__button-start-test {
    height: 3.5rem;
    font-size: 1rem;
    background-color: $sun-30;
    color: inherit;
    border: none;
    &:hover {
      background-color: $sun-20;
    }
  }
}

:deep(.test-description__button-start-test) {
  padding: 1rem;
}
</style>
