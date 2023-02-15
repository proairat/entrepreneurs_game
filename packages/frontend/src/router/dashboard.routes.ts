import { ViewRenderDashboard, ViewDashboard, AddEdit } from "@/views/dashboard";

export default {
  path: "/dashboard",
  name: "ViewRenderDashboard",
  component: ViewRenderDashboard,
  children: [
    { path: "", name: "ViewDashboard", component: ViewDashboard },
    { path: "add", name: "AddEdit", component: AddEdit },
    { path: "edit/:id", name: "AddEditId", component: AddEdit },
  ],
};
