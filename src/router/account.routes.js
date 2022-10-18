import {
  ViewStartPage,
  AppLogin,
  AppLogic,
  AppRegister,
} from "@/views/account";

export default {
  path: "/account",
  name: "ViewStartPage",
  component: ViewStartPage,
  children: [
    { path: "", name: "redirectLogin", redirect: "login" },
    { path: "login", name: "AppLogin", component: AppLogin },
    { path: "logic", name: "AppLogic", component: AppLogic },
    { path: "register", name: "AppRegister", component: AppRegister },
  ],
};
