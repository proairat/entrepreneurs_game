<template>
  <div class="wrapper-spinner-ring">
    <div class="spinner-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wrapper-spinner-ring {
  display: flex;
  justify-content: center;
}
.spinner-ring {
  display: inline-block;
  position: relative;
  width: 5rem;
  height: 5rem;
}
.spinner-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 4rem;
  height: 4rem;
  margin: 0.5rem;
  border: 0.5rem solid #000;
  border-radius: 50%;
  animation: spinner-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #000 transparent transparent transparent;
}
.spinner-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.spinner-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.spinner-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes spinner-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
