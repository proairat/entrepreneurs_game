import { AppLayout, AppLogin, AppRegister } from "@/views/account";

export default {
  path: "/account",
  component: AppLayout,
  children: [
    { path: "", redirect: "login" },
    { path: "login", component: AppLogin },
    { path: "register", component: AppRegister },
  ],
};
