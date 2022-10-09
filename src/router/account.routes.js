import { AppLayout, AppLogin, AppLogic, AppRegister } from "@/views/account";

export default {
  path: "/account",
  component: AppLayout,
  children: [
    { path: "", redirect: "login" },
    { path: "login", component: AppLogin },
    { path: "logic", component: AppLogic },
    { path: "register", component: AppRegister },
  ],
};
