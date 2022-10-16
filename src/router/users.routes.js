import { ViewUserManagement, AppList, AddEdit } from "@/views/users";

export default {
  path: "/users",
  component: ViewUserManagement,
  children: [
    { path: "", component: AppList },
    { path: "add", component: AddEdit },
    { path: "edit/:id", component: AddEdit },
  ],
};
