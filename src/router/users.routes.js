import { ViewUserManagement, AppList, AddEdit } from "@/views/users";

export default {
  path: "/users",
  name: "ViewUserManagement",
  component: ViewUserManagement,
  children: [
    { path: "", name: "AppList", component: AppList },
    { path: "add", name: "AddEdit", component: AddEdit },
    { path: "edit/:id", name: "AddEditId", component: AddEdit },
  ],
};
