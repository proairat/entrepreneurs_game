import { ViewRenderStartPage, ViewLogin, ViewRegister } from "@/views/account";

export default {
  path: "/account",
  name: "ViewRenderStartPage",
  component: ViewRenderStartPage,
  children: [
    { path: "", name: "redirectLogin", redirect: "login" },
    { path: "login", name: "ViewLogin", component: ViewLogin },
    { path: "register", name: "ViewRegister", component: ViewRegister },
  ],
};
