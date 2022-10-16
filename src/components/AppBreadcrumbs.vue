<template>
  <!--<el-breadcrumb :separator-icon="ArrowRight">-->
  <div class="outer">
    <el-breadcrumb
      :separator-icon="ArrowRight"
      class="mt-[calc(7rem+8px)] sh-960:mt-[4rem] breadcrumbs max-w-6xl mx-auto"
    >
      <el-breadcrumb-item :to="{ path: '/' }">Курсы</el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
</script>

<style scoped lang="scss">
.outer {
  background-color: $gray-10;
}
.breadcrumbs {
  display: flex;
  font-size: 1rem;
  align-items: center;
  padding: 1.5rem 2.5rem 0 2.5rem;
  background-color: inherit;
}
</style>
