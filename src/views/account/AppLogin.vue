<template>
  <LayoutContainer>
    <template #TheDescription>
      <TheDescription />
    </template>
    <template #TheForm>
      <TheLoginForm />
    </template>
  </LayoutContainer>
</template>

<script setup lang="ts">
import LayoutContainer from "@/components/LayoutContainer/index.vue";
import TheDescription from "@/components/LayoutContainer/TheDescription.vue";
import TheLoginForm from "@/components/LayoutContainer/TheLoginForm.vue";
</script>
