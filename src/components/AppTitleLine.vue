<template>
  <div class="outer">
    <div
      class="mt-[calc(7rem+8px)] sh-960:mt-[4rem] max-w-6xl min-w-[35rem] mx-auto line"
    >
      <AppBackButton>
        <slot name="backButton"></slot>
      </AppBackButton>
      <AppTitle>
        <slot name="title"></slot>
      </AppTitle>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.outer {
  color: $gray-90;
  background-color: $gray-10;

  & > .line {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    color: inherit;
    background-color: inherit;
  }
}
</style>
