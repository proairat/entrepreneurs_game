<template>
  <div class="container">
    <div class="welcomeWindow boxShadow">
      <div id="TheDescription">
        <TheDescription />
      </div>
      <div id="TheForm">
        <TheForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheDescription from "@/components/TheDescription.vue";
import TheForm from "@/components/TheForm.vue";
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: $blue-10;
  min-width: 960px;
  min-height: 560px;
}
.welcomeWindow {
  display: grid;
  grid-template-areas: "TheDescription TheForm";
  grid-template-rows: 1fr;
  grid-template-columns: 1.5fr 1fr;
  width: 960px;
  height: 560px;
  border-radius: 10px;
}

.boxShadow {
  box-shadow: $box-shadow-4dp;
}

@include startPageGridItems("#", "TheDescription", $white) {
  text-align: center;
  border-radius: 10px 0 0 10px;
}

@include startPageGridItems("#", "TheForm", $blue-15) {
  border-radius: 0 10px 10px 0;
}
</style>
