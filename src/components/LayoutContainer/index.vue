<template>
  <div class="container">
    <div class="welcomeWindow boxShadow">
      <div id="AppAlert">
        <slot name="AppAlert"></slot>
      </div>
      <div id="TheDescription">
        <slot name="TheDescription"></slot>
      </div>
      <div id="TheForm">
        <slot name="TheForm"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "LayoutContainer",
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: $blue-5;
  min-width: 960px;
  min-height: 560px;
}

.welcomeWindow {
  display: grid;
  grid-template-areas: "TheDescription TheForm";
  grid-template-rows: 1fr;
  grid-template-columns: 1.5fr 1fr;
  position: relative;
  width: 960px;
  height: 560px;
  border-radius: 10px;
}

.boxShadow {
  box-shadow: $box-shadow-4dp;
}

#AppAlert {
  position: absolute;
  width: calc(100% - 20px);
  margin: 10px;
}

@include startPageGridItems("#", TheDescription, $white) {
  text-align: center;
  border-radius: 10px 0 0 10px;
}

@include startPageGridItems("#", TheForm, $blue-10) {
  border-radius: 0 10px 10px 0;
}
</style>
