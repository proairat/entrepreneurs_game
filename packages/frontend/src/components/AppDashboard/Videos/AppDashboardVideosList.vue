<template>
  <el-table-v2
    :width="900"
    :height="500"
    :columns="columns"
    :data="tableData"
    :row-height="170"
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
  BASE_URL_ASSETS_VIDEOS_POSTER,
  BASE_URL_ASSETS_VIDEOS_VIDEO_FILE,
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
import pickBy from "lodash/pickBy";
import { useFetchComposable } from "@/composables/use-fetch";
import { ElMessage } from "element-plus";
import SuccessButton from "@/components/AppButtons/SuccessButton.vue";
import AppPopover from "@/components/AppPopover.vue";
import type { CellRendererParams } from "element-plus/es/components/table-v2/src/types";
import AppVideoPlayer from "@/components/AppVideoBlock/AppVideoPlayer.vue";
import cloneDeep from "lodash/cloneDeep";

const dashboardStore = useDashboardStore();
const { rowVideoJustInserted, currentVideo, tableData } =
  storeToRefs(dashboardStore);
const {
  toggleIsDialogFormVisible,
  updateActiveModule,
  updateDialogFormTitle,
  updateElemFields,
  deleteFromList,
} = dashboardStore;
const visible = ref<Record<number, boolean>>({});
let flag1 = false;
let flag2 = false;
let num = 111;

if (tableData.value.length) {
  tableData.value.forEach((item) => (visible.value[item.id] = false));
}

const columns: Column<any>[] = [
  {
    key: "id",
    title: "№",
    dataKey: "id",
    width: 50,
    align: "center",
    fixed: TableV2FixedDir.LEFT,
    cellRenderer: ({ cellData: id }) => id,
  },
  {
    key: "title",
    title: "Название",
    dataKey: "title",
    width: 250,
    align: "center",
    cellRenderer: ({ cellData: title }) => title,
  },
  {
    key: "filenamePoster",
    title: "Обложка видеоролика",
    dataKey: "filenamePoster",
    width: 150,
    align: "center",
    cellRenderer: ({ cellData: filenamePoster }) =>
      filenamePoster ? (
        <img
          src={`${BASE_URL_ASSETS_VIDEOS_POSTER}/${filenamePoster}`}
          class="tune-image"
        />
      ) : (
        <img
          src={`${BASE_URL_ASSETS_VIDEOS_POSTER}/404-error.gif`}
          class="tune-image"
        />
      ),
  },
  {
    key: "filenameVideo",
    title: "Видеоролик",
    dataKey: "filenameVideo",
    height: 300,
    width: 400,
    align: "center",
    cellRenderer: ({ rowData }) =>
      rowData.filenameVideo ? (
        <AppVideoPlayer
          class="tune-video"
          getVideoPoster={`${BASE_URL_ASSETS_VIDEOS_POSTER}/${rowData.filenamePoster}`}
          getVideoSrc={`${BASE_URL_ASSETS_VIDEOS_VIDEO_FILE}/${rowData.filenameVideo}`}
        />
      ) : (
        <img
          src={`${BASE_URL_ASSETS_VIDEOS_POSTER}/404-error.gif`}
          class="tune-image"
        />
      ),
  },
  {
    key: "operations",
    title: "Действия",
    dataKey: "operations",
    width: 300,
    align: "center",
    cellRenderer: (cellData) =>
      cellData.rowData.filenamePoster && cellData.rowData.filenameVideo ? (
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
      ) : (
        <div>Пройдите все шаги для доступа к действиям</div>
      ),
  },
];

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

function editHandler(id: number) {
  console.log("editHandler() -> id", id);
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
  console.log("deleteHandler()");
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
        tableData.value.length &&
        cellData.rowData.state === EEntityStateDashboard.Active
      ) {
        updateActiveModule({
          entityId: tableData.value[0].id,
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
  currentVideo,
  (updatedCurrentVideo) => {
    const findIndexWithDesiredId = tableData.value.findIndex(
      (item) => item.id === updatedCurrentVideo.id
    );

    if (findIndexWithDesiredId !== -1) {
      tableData.value[findIndexWithDesiredId].filenamePoster =
        updatedCurrentVideo.filenamePoster;
      tableData.value[findIndexWithDesiredId].filenameVideo =
        updatedCurrentVideo.filenameVideo;
      tableData.value[findIndexWithDesiredId].state = updatedCurrentVideo.state;
    }
  },
  { deep: true }
);

watch(
  rowVideoJustInserted,
  (updatedVideoRowJustInserted) => {
    tableData.value.push(cloneDeep(updatedVideoRowJustInserted));
    visible.value[updatedVideoRowJustInserted.id] = false;

    /*
    if (updatedVideoRowJustInserted.id !== activeModule.value?.id) {
      tableData.value.push(cloneDeep(updatedVideoRowJustInserted));
      visible.value[updatedVideoRowJustInserted.id] = false;
    }
    updateElemFields(updatedVideoRowJustInserted);
    if (tableData.value.length === 1) {
      updateActiveModule({
        entityId: updatedVideoRowJustInserted.id,
        stateForFindElem: EEntityState.Default,
        stateForFindIndex: EEntityState.Default,
        stateForClickIndex: EEntityState.Active,
      });
    }
    */
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

:deep(.el-table-v2__footer) {
  margin: 0 auto !important;
}

.tune-video {
  object-fit: fill;
  height: 200px;
  width: 400px;
}
</style>
