<template>
  <div class="flex justify-between items-center flex-wrap">
    <div
      v-for="(shadow, i) in shadowGroup"
      :key="i"
      class="flex flex-col justify-center items-center"
    >
      <div
        class="inline-flex"
        :style="{
          boxShadow: `var(${getCssVarName(shadow.type)})`,
        }"
      />
      <span class="demo-shadow-text">
        {{ shadow.name }}
      </span>
      <code>
        {{ getCssVarName(shadow.type) }}
      </code>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const shadowGroup = ref([
  {
    name: "Basic Shadow",
    type: "",
  },
  {
    name: "Light Shadow",
    type: "light",
  },
  {
    name: "Lighter Shadow",
    type: "lighter",
  },
  {
    name: "Dark Shadow",
    type: "dark",
  },
]);

const getCssVarName = (type: string) => {
  return `--el-box-shadow${type ? "-" : ""}${type}`;
};
</script>

<style>
.flex {
  margin: auto;
  width: 46px;
}
.inline-flex {
  height: 30px;
  width: 30px;
  margin: 20px;
}
</style>
