<template>
  <el-popover
    :visible="props.visible"
    trigger="click"
    placement="bottom"
    :width="230"
  >
    <template #default>
      <p class="mb-3">Вы уверены, что хотите удалить карточку модуля?</p>
      <div class="flex justify-around">
        <LightButton @click="cancelButtonHandler">Отмена</LightButton>
        <DangerButton @click="deleteButtonHandler">Удалить</DangerButton>
      </div>
    </template>
    <template #reference>
      <DangerButton @click="dangerButtonHandler">Удалить</DangerButton>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
const props = defineProps<{
  visible: boolean;
  visibleKey: number;
}>();
const emits = defineEmits<{
  (e: "click-danger-button", value1: boolean, value2: number): void;
  (e: "click-cancel-button", value1: boolean, value2: number): void;
  (e: "click-delete-button"): void;
}>();

function dangerButtonHandler() {
  emits("click-danger-button", true, props.visibleKey);
}

function cancelButtonHandler() {
  emits("click-cancel-button", false, props.visibleKey);
}

function deleteButtonHandler() {
  emits("click-delete-button");
}
</script>
