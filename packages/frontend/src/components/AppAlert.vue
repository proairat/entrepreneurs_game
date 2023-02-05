<template>
  <Transition>
    <div v-if="alert && flag">
      <el-alert
        :type="alert.type"
        :title="alert.message"
        show-icon
        @click="alertStore.clear()"
      />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useAlertStore } from "@/stores";

const props = defineProps<{
  isDisappears: boolean;
}>();

const alertStore = useAlertStore();
const { alert } = storeToRefs(alertStore);
const flag = ref(false);

watch(alert, () => {
  flag.value = true;
  if (props.isDisappears) {
    setTimeout(() => {
      flag.value = false;
    }, 4000);
  }
});
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.el-alert {
  $height: 40px;
  height: $height;
  border-radius: 0.625rem;
  &--error {
    @include alertMixin($height, $rose, $rose-80, $rose-20);
  }
  &--success {
    @include alertMixin($height, $green, $green-80, $green-20);
  }
  &:deep(.el-alert__title) {
    height: $height;
    line-height: $height;
  }
}
</style>
