<template>
  <div class="app-title-line max-w-6xl mx-auto">
    <div class="app-title-line-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.app-title-line {
  color: $gray-90;
  background-color: $gray-10;

  &-content {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    color: inherit;
    background-color: inherit;
  }
}
</style>
