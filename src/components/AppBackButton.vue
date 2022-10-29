<template>
  <div class="backButton">
    <template v-if="hasContentDefaultSlot">
      <router-link
        class="flex"
        :to="{
          path: `/courses`,
          name: 'AppCourses',
        }"
      >
        <el-icon><Back /></el-icon>
        <span class="inscription">Назад</span>
      </router-link>
    </template>
  </div>
</template>

<script setup lang="ts">
import { Back } from "@element-plus/icons-vue";
import { computed, useSlots, ref } from "vue";

const slots = useSlots();
const children = ref(slots.default()[0].children);
const hasContentDefaultSlot = computed(() => children.value?.length);
</script>

<style scoped lang="scss">
.backButton {
  display: flex;
  align-items: center;

  &:hover {
    color: $black;
  }
  & .inscription {
    margin-left: 0.5rem;
  }
}

:deep(.el-icon) {
  height: 1.5rem;
}
</style>
