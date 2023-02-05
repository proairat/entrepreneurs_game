<template>
  <h1>AppRing component</h1>
  <div>
    <svg class="progress-ring" width="120" height="120">
      <circle
        class="progress-ring__circle"
        stroke="white"
        stroke-width="4"
        fill="transparent"
        r="52"
        cx="60"
        cy="60"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
div {
  background-color: #2962ff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
}
</style>
