<template>
  <el-table-v2
    :width="800"
    :height="500"
    :columns="columns"
    :data="tableData"
    :row-height="100"
  >
    <template #empty> Данные загружаются... </template>
  </el-table-v2>
</template>

<script lang="tsx" setup>
import { TableV2FixedDir } from "element-plus";
import { URL_MODULES_IMAGES } from "@/API";
import { useDashboardStore } from "@/stores";
import type { Column } from "element-plus";

const dashboardStore = useDashboardStore();
const { getModulesList } = dashboardStore;
const tableData = getModulesList();
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
    title: "Заголовок",
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
      <img src={`${URL_MODULES_IMAGES}/${filename}`} class="tune-image" />
    ),
  },
  {
    key: "operations",
    title: "Действия",
    cellRenderer: (cellData) => (
      <>
        <LightButton
          onClick={() => {
            editHandler(cellData);
          }}
        >
          Редактировать
        </LightButton>
        <DangerButton>Удалить</DangerButton>
      </>
    ),
    width: 300,
    align: "center",
  },
];

dashboardStore.$subscribe((mutation, state) => {
  tableData.push(state.rowJustInserted);
});

function editHandler(cellData: any) {
  console.log("Нажатие обрабатывается на редактирование!");
  console.log("CellData", cellData);
}
</script>

<style scoped lang="scss">
.example-showcase .el-table-v2__overlay {
  z-index: 9;
}

:deep(.tune-image) {
  object-fit: contain;
  height: 100px;
  width: 100px;
}
</style>

<!--
/*
const rowClass = ({ rowIndex }: Parameters<RowClassNameGetter<any>>[0]) => {
  if (rowIndex % 2 === 0) {
    return "bg-gray-100";
  } 
  return "";
};
-->
