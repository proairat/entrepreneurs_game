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
import {
  BASE_URL_MODULES,
  BASE_URL_ASSETS_MODULES_CARDCOVER,
} from "share/api/API";
import { useDashboardStore } from "@/stores";
import { onMounted, ref, watch, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import type { Column } from "element-plus";
import {
  EEntityStateDashboard,
  EHttpMethods,
  EServerResponses,
} from "share/types/enums";
import cloneDeep from "lodash/cloneDeep";
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
} = dashboardStore;
const { rowModuleJustInserted, activeModule } = storeToRefs(dashboardStore);
const tableData = getModulesList();
const visible = ref<Record<number, boolean>>({});
let flag1 = false;
let flag2 = false;

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
      <img
        src={`${BASE_URL_ASSETS_MODULES_CARDCOVER}/${filename}`}
        class="tune-image"
      />
    ),
  },
  {
    key: "operations",
    title: "Действия",
    dataKey: "operations",
    cellRenderer: (cellData) => (
      <>
        <SuccessButton
          onClick-button={() => editHandler(cellData.rowData.id)}
          class="mr-3"
        >
          Редактировать
        </SuccessButton>
        <AppPopover
          onClick-danger-button={changeVisibilityHandler}
          onClick-cancel-button={changeVisibilityHandler}
          onClick-delete-button={() => deleteHandler(cellData)}
          visible={visible.value[cellData.rowData.id]}
          visibleKey={cellData.rowData.id}
        ></AppPopover>
      </>
    ),
    width: 300,
    align: "center",
  },
];

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

function editHandler(id: number) {
  toggleIsDialogFormVisible(true);
  updateDialogFormTitle(`Строка №${id}`);
  updateActiveModule({
    entityId: id,
    stateForFindElem: EEntityStateDashboard.Active,
    stateForFindIndex: EEntityStateDashboard.Default,
    stateForClickIndex: EEntityStateDashboard.Active,
  });
}

function changeVisibilityHandler(value: boolean, id: number) {
  flag2 = false;
  visible.value = Object.fromEntries(
    Object.entries(visible.value).map(([key, value]) => [key, false])
  );
  visible.value[id] = value;
  flag1 = true;
}

function handleClickOutside(event: MouseEvent) {
  let elPopper = (event.target as Element).closest(".el-popper");
  if (!elPopper) {
    const trueth = Number(
      Object.keys(pickBy(visible.value, (v) => v === true))[0]
    );
    if (trueth && flag2) {
      flag2 = false;
      visible.value[trueth] = false;
    }
    if (trueth && flag1) {
      flag1 = false;
      flag2 = true;
    }
  }
}

function deleteHandler(cellData: CellRendererParams<any>) {
  let { data, onFetchResponse, onFetchError } = useFetchComposable({
    url: BASE_URL_MODULES,
    urlVar: `/${cellData.rowData.id}`,
    method: EHttpMethods.DELETE,
    body: null,
  });
  onFetchResponse(() => {
    if (data.value.response === EServerResponses.MODULES_REMOVE_SUCCESSFUL) {
      deleteFromList(cellData.rowData);
      if (
        tableData.length &&
        cellData.rowData.state === EEntityStateDashboard.Active
      ) {
        updateActiveModule({
          entityId: tableData[0].id,
          stateForFindElem: EEntityStateDashboard.Default,
          stateForFindIndex: EEntityStateDashboard.Default,
          stateForClickIndex: EEntityStateDashboard.Active,
        });
      }
      ElMessage({
        message: `Запись успешно удалена!`,
        type: "success",
      });
    }
  });
  onFetchError((err) => {
    ElMessage({
      message: `Произошла ошибка при удалении записи: ${err}`,
      type: "error",
    });
  });
}

watch(
  rowModuleJustInserted,
  (updatedModuleRowJustInserted) => {
    if (updatedModuleRowJustInserted.id !== activeModule.value?.id) {
      tableData.push(cloneDeep(updatedModuleRowJustInserted));
      visible.value[updatedModuleRowJustInserted.id] = false;
    }
    updateElemFields(updatedModuleRowJustInserted);
    if (tableData.length === 1) {
      updateActiveModule({
        entityId: updatedModuleRowJustInserted.id,
        stateForFindElem: EEntityStateDashboard.Default,
        stateForFindIndex: EEntityStateDashboard.Default,
        stateForClickIndex: EEntityStateDashboard.Active,
      });
    }
  },
  { deep: true }
);
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
