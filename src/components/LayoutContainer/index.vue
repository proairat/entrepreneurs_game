<template>
  <div class="containerOuter">
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
.containerOuter {
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
  border-radius: 0.625rem;
}

.boxShadow {
  box-shadow: $box-shadow-4dp;
}

#AppAlert {
  position: absolute;
  width: calc(100% - 20px);
  margin: 0.625rem;
}

@include startPageGridItems("#", TheDescription, $white) {
  text-align: center;
  border-radius: 0.625rem 0 0 0.625rem;
}

@include startPageGridItems("#", TheForm, $blue-10) {
  border-radius: 0 0.625rem 0.625rem 0;
}
</style>
