<template>
  <div class="appTabs">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.appTabs {
  overflow-y: auto;
  max-height: 10rem;
}
</style>
