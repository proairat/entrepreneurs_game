<template>
  <LayoutContainer>
    <template #TheDescription>
      <TheDescription />
    </template>
    <template #TheForm>
      <TheRegistrationForm />
    </template>
  </LayoutContainer>
</template>

<script setup lang="ts">
import LayoutContainer from "@/components/LayoutContainer/index.vue";
import TheDescription from "@/components/LayoutContainer/TheDescription.vue";
import TheRegistrationForm from "@/components/LayoutContainer/TheRegistrationForm.vue";
</script>
