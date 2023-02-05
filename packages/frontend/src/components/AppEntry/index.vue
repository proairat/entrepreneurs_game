<template>
  <div class="container-outer">
    <div
      class="container-outer__welcome-window container-outer__welcome-window_box-shadow"
    >
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
  name: "AppEntry",
};
</script>

<style scoped lang="scss">
.container-outer {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: auto;
  background-color: $gray-10;

  &__welcome-window {
    display: grid;
    grid-template-areas:
      "TheDescription"
      "TheForm";
    grid-template-rows: 1.5fr 1fr;
    grid-template-columns: 1fr;
    position: relative;
    width: 35rem;
    height: 60rem;
    border-radius: 0.625rem;
    &_box-shadow {
      box-shadow: $box-shadow-4dp;
    }
  }

  @media (min-width: 60rem) {
    &__welcome-window {
      display: grid;
      grid-template-areas: "TheDescription TheForm";
      grid-template-rows: 1fr;
      grid-template-columns: 1.5fr 1fr;
      position: relative;
      width: 60rem;
      height: 35rem;
      border-radius: 0.625rem;
      &_box-shadow {
        box-shadow: $box-shadow-4dp;
      }
    }
  }
}

#AppAlert {
  position: absolute;
  width: calc(100% - 1.25rem);
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
