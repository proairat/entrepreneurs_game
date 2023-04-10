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

<script lang="tsx" setup>
import { TableV2FixedDir } from "element-plus";
import { URL_MODULES_IMAGES } from "@/API";
import { useDashboardStore } from "@/stores";
import { watch } from "vue";
import { storeToRefs } from "pinia";
import type { Column } from "element-plus";
import { EEntityState, EEntityType } from "share/types/enums";

const dashboardStore = useDashboardStore();
const {
  toggleIsDialogFormVisible,
  getModulesList,
  updateActiveModule,
  updateDialogFormTitle,
  updateElemFields,
} = dashboardStore;
const { rowJustInserted, activeModule } = storeToRefs(dashboardStore);
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
        <SuccessButton onClick={() => editHandler(cellData)} class="mr-3">
          Редактировать
        </SuccessButton>
        <DangerButton onClick={() => deleteHandler(cellData)}>
          Удалить
        </DangerButton>
      </>
    ),
    width: 300,
    align: "center",
  },
];

watch(rowJustInserted, (updatedRowJustInserted) => {
  if (rowJustInserted.value.id !== activeModule.value.id) {
    tableData.push(updatedRowJustInserted);
  }
  console.log("tableData", tableData);
  updateElemFields(rowJustInserted.value);

  if (tableData.length === 1) {
    updateActiveModule({
      entityId: updatedRowJustInserted.id,
      stateForFindElem: EEntityState.Default,
      stateForFindIndex: EEntityState.Default,
      stateForClickIndex: EEntityState.Active,
    });
  }
});

function editHandler(cellData: any) {
  toggleIsDialogFormVisible(true);
  updateDialogFormTitle(`Строка №${cellData.rowData.id}`);
  updateActiveModule({
    entityId: cellData.rowData.id,
    stateForFindElem: EEntityState.Active,
    stateForFindIndex: EEntityState.Default,
    stateForClickIndex: EEntityState.Active,
  });
}

function deleteHandler(cellData: any) {
  console.log("deleteHandler");
}
</script>

<style scoped lang="scss">
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
