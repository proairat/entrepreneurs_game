<template>
  <div class="outer">
    <div class="inner">
      <div class="theme">
        <slot>Подзаголовок</slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.outer {
  color: $gray-90;
  background-color: $gray-10;
}

.inner {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  color: inherit;
  background-color: inherit;
  font-size: $text-size-h4;
  font-weight: $font-weight-medium;
  line-height: $line-height-l;
}

.theme {
  margin: 0 auto;
}
</style>
