import { ViewDashboard, AppList, AddEdit } from "@/views/dashboard";

export default {
  path: "/dashboard",
  name: "ViewDashboard",
  component: ViewDashboard,
  children: [
    { path: "", name: "AppList", component: AppList },
    { path: "add", name: "AddEdit", component: AddEdit },
    { path: "edit/:id", name: "AddEditId", component: AddEdit },
  ],
};
