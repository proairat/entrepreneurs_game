<template>
  <el-table-v2
    :width="800"
    :height="500"
    :columns="columns"
    :data="tableData"
    :row-height="100"
  >
    <template #empty>
      <div class="flex items-center justify-center h-100%">
        <el-empty description="Нет данных"></el-empty>
      </div>
    </template>
  </el-table-v2>
</template>

<script setup lang="tsx">
import { TableV2FixedDir } from "element-plus";
import { URL_VIDEOS_IMAGES } from "@/API";
import { useDashboardStore } from "@/stores";
import { onMounted, ref, watch, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import type { Column } from "element-plus";
import { EEntityState } from "share/types/enums";
import pickBy from "lodash/pickBy";
import { useFetchComposable } from "@/composables/use-fetch";
import { ElMessage } from "element-plus";
import SuccessButton from "@/components/AppButtons/SuccessButton.vue";
import AppPopover from "@/components/AppPopover.vue";
import type { CellRendererParams } from "element-plus/es/components/table-v2/src/types";

const dashboardStore = useDashboardStore();
const {
  toggleIsDialogFormVisible,
  getModulesList,
  updateActiveModule,
  updateDialogFormTitle,
  updateElemFields,
  deleteFromList,
  getVideosList,
} = dashboardStore;
const { rowModuleJustInserted, activeModule } = storeToRefs(dashboardStore);
const tableData = getVideosList();
const visible = ref<Record<number, boolean>>({});

tableData.forEach((item) => (visible.value[item.id] = false));

const columns: Column<any>[] = [
  {
    key: "id",
    title: "№",
    dataKey: "id",
    width: 50,
    align: "center",
    fixed: TableV2FixedDir.LEFT,
  },
  {
    key: "header",
    title: "Название",
    dataKey: "header",
    width: 250,
    align: "center",
    cellRenderer: ({ cellData: header }) => header,
  },
  {
    key: "filename",
    title: "Обложка",
    dataKey: "filename",
    width: 150,
    align: "center",
    cellRenderer: ({ cellData: filename }) => (
      <img src={`${URL_VIDEOS_IMAGES}/${filename}`} class="tune-image" />
    ),
  },
  {
    key: "operations",
    title: "Действия",
    dataKey: "operations",
    cellRenderer: (cellData) => (
      <>
        <div>Пока заглушка</div>
      </>
    ),
    width: 300,
    align: "center",
  },
];
</script>

<style scoped lang="scss">
:deep(.tune-image) {
  object-fit: contain;
  height: 100px;
  width: 100px;
}

:deep(.el-table-v2__footer) {
  margin: 0 auto !important;
}
</style>
