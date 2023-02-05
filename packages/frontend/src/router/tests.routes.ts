import { ViewRenderEntranceTests, ViewEntranceTests } from "@/views/tests";

export default {
  path: "/entrance-testing",
  name: "ViewRenderEntranceTests",
  component: ViewRenderEntranceTests,
  children: [
    { path: "", name: "ViewEntranceTests", component: ViewEntranceTests },
  ],
};
