import {
  ViewRenderModules,
  ViewModules,
  ViewModule,
  ViewRenderThemes,
} from "@/views/modules";

export default {
  path: "/modules",
  name: "ViewRenderModules",
  component: ViewRenderModules,
  children: [
    { path: "", name: "ViewModules", component: ViewModules },
    {
      path: ":courseId/:themeType/:themeId",
      name: "ViewRenderThemes",
      component: ViewRenderThemes,
      children: [
        {
          path: "",
          name: "ViewModule",
          component: ViewModule,
        },
      ],
    },
  ],
};
