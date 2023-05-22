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
  <div v-for="item in tableData" :key="item.id">Content = {{ item }}</div>
</template>

<script setup lang="tsx">
import { TableV2FixedDir } from "element-plus";
import {
  URL_VIDEOS_POSTER_IMAGES,
  URL_VIDEOS_VIDEO_FILE_IMAGES,
} from "share/api/API";
import { useDashboardStore } from "@/stores";
import { onMounted, ref, watch, onUnmounted, isRef, isReactive, isProxy, unref, toValue } from "vue";
import { storeToRefs } from "pinia";
import type { Column } from "element-plus";
import { EEntityState, EServerResponses } from "share/types/enums";
import pickBy from "lodash/pickBy";
import { useFetchComposable } from "@/composables/use-fetch";
import { ElMessage } from "element-plus";
import SuccessButton from "@/components/AppButtons/SuccessButton.vue";
import AppPopover from "@/components/AppPopover.vue";
import type { CellRendererParams } from "element-plus/es/components/table-v2/src/types";
import AppVideoPlayer from "@/components/AppVideoBlock/AppVideoPlayer.vue";
import cloneDeep from "lodash/cloneDeep";

const dashboardStore = useDashboardStore();
const {
  toggleIsDialogFormVisible,
  updateActiveModule,
  updateDialogFormTitle,
  updateElemFields,
  deleteFromList,
  getVideosList,
} = dashboardStore;
const { rowVideoJustInserted, activeVideo } = storeToRefs(dashboardStore);
const tableData = ref(cloneDeep(getVideosList()));
const visible = ref<Record<number, boolean>>({});
let flag1 = false;
let flag2 = false;
let num = 111;

tableData.value.forEach((item) => (visible.value[item.id] = false));

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
          src={`${URL_VIDEOS_POSTER_IMAGES}/${filenamePoster}`}
          class="tune-image"
        />
      ) : (
        <img
          src={`${URL_VIDEOS_POSTER_IMAGES}/404-error.gif`}
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
      rowData.filenamePoster ? (
        <AppVideoPlayer
          class="tune-video"
          getVideoPoster={`${URL_VIDEOS_POSTER_IMAGES}/${rowData.filenamePoster}`}
          getVideoSrc={`${URL_VIDEOS_VIDEO_FILE_IMAGES}/${rowData.filenameVideo}`}
        />
      ) : (
        <img
          src={`${URL_VIDEOS_POSTER_IMAGES}/404-error.gif`}
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
      cellData.rowData.filenamePoster ? (
        <>
          <SuccessButton
            onClick={() => editHandler(cellData.rowData.id)}
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
  toggleIsDialogFormVisible(true);
  updateDialogFormTitle(`Строка №${id}`);
  updateActiveModule({
    entityId: id,
    stateForFindElem: EEntityState.Active,
    stateForFindIndex: EEntityState.Default,
    stateForClickIndex: EEntityState.Active,
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
    urlConst: "/modules",
    urlVar: `/${cellData.rowData.id}`,
    method: "DELETE",
    body: null,
  });
  onFetchResponse(() => {
    if (data.value.response === EServerResponses.MODULES_REMOVE_SUCCESSFUL) {
      deleteFromList(cellData.rowData);
      if (
        tableData.value.length &&
        cellData.rowData.state === EEntityState.Active
      ) {
        updateActiveModule({
          entityId: tableData.value[0].id,
          stateForFindElem: EEntityState.Default,
          stateForFindIndex: EEntityState.Default,
          stateForClickIndex: EEntityState.Active,
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
  activeVideo,
  (updatedActiveVideo) => {
    console.log("13 Call updatedActiveVideo", updatedActiveVideo);
    if (updatedActiveVideo.filenamePoster) {
      console.log("А вот и постер обновлён");
      console.log("Выведем тэйблдату", tableData.value);
      console.log("Выведем гетВидеоЛист", getVideosList());
      const findIndexWithDesiredId = tableData.value.findIndex((item) => item.id === updatedActiveVideo.id);
      if (findIndexWithDesiredId !== -1){
        tableData.value[findIndexWithDesiredId].filenamePoster = updatedActiveVideo.filenamePoster;
        console.log('Закомментированный код');
      }
    } else {
      console.log("Состояние изменилось с undefined");
    }
  },
  { deep: true }
);

watch(
  rowVideoJustInserted,
  (updatedVideoRowJustInserted) => {
    tableData.value.push(cloneDeep(updatedVideoRowJustInserted));
    console.log('14 Почему он должен меняться? -> updatedVideoRowJustInserted', updatedVideoRowJustInserted);
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
