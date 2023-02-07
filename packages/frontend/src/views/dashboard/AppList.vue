<template>
  <el-table-v2
    :columns="columns"
    :data="data"
    :row-class="rowClass"
    :width="700"
    :height="400"
  />
  <!--<h1>Users</h1>
  <router-link to="/dashboard/add" class="btn btn-sm btn-success mb-2"
    >Add User</router-link
  >
  <table class="table table-striped">
    <thead>
      <tr>
        <th style="width: 30%">Surname</th>
        <th style="width: 30%">Name</th>
        <th style="width: 30%">login</th>
        <th style="width: 10%"></th>
      </tr>
    </thead>
    <tbody>
      <template v-if="users.length">
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.surname }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.login }}</td>
          <td style="white-space: nowrap">
            <router-link
              :to="`/dashboard/edit/${user.id}`"
              class="btn btn-sm btn-primary mr-1"
              >Edit</router-link
            >
            <button
              type="button"
              @click="usersStore.del(user.id)"
              class="btn btn-sm btn-danger btn-delete-user"
              :disabled="user.isDeleting"
            >
              <span
                v-if="user.isDeleting"
                class="spinner-border spinner-border-sm"
              ></span>
              <span v-else>Delete</span>
            </button>
          </td>
        </tr>
      </template>
      <tr v-if="users.loading">
        <td colspan="4" class="text-center">
          <span class="spinner-border spinner-border-lg align-center"></span>
        </td>
      </tr>
      <tr v-if="users.error">
        <td colspan="4">
          <div class="text-danger">Error loading users: {{ users.error }}</div>
        </td>
      </tr>
    </tbody>
  </table>-->
</template>

<script setup lang="tsx">
import { storeToRefs } from "pinia";
import { useUsersStore } from "@/stores";
import { ref } from "vue";
import dayjs from "dayjs";
import { defineComponent } from "vue";
import {
  ElButton,
  ElIcon,
  ElTag,
  ElTooltip,
  TableV2FixedDir,
} from "element-plus";
import { Timer } from "@element-plus/icons-vue";
import type { Column, RowClassNameGetter } from "element-plus";

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

usersStore.getAll();

let id = 0;

const vnode = <div>hello</div>;

const dataGenerator = () => ({
  id: `random-id-${++id}`,
  name: "Tom",
  date: "2020-10-1",
});

const columns: Column<any>[] = [
  {
    key: "date",
    title: "Date",
    dataKey: "date",
    width: 150,
    fixed: TableV2FixedDir.LEFT,
    cellRenderer: ({ cellData: date }) => (
      <ElTooltip content={dayjs(date).format("YYYY/MM/DD")}>
        {
          <span class="flex items-center">
            <ElIcon class="mr-3">
              <Timer />
            </ElIcon>
            {dayjs(date).format("YYYY/MM/DD")}
          </span>
        }
      </ElTooltip>
    ),
  },
  {
    key: "name",
    title: "Name",
    dataKey: "name",
    width: 150,
    align: "center",
    cellRenderer: ({ cellData: name }) => <ElTag>{name}</ElTag>,
  },
  {
    key: "operations",
    title: "Operations",
    cellRenderer: () => (
      <>
        <ElButton size="small">Edit</ElButton>
        <ElButton size="small" type="danger">
          Delete
        </ElButton>
      </>
    ),
    width: 150,
    align: "center",
    flexGrow: 1,
  },
];

const data = ref(Array.from({ length: 200 }).map(dataGenerator));

const rowClass = ({ rowIndex }: Parameters<RowClassNameGetter<any>>[0]) => {
  if (rowIndex % 10 === 5) {
    return "bg-red-100";
  } else if (rowIndex % 10 === 0) {
    return "bg-blue-200";
  }
  return "";
};
</script>
