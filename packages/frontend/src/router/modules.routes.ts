import {
  ViewRenderModules,
  ViewModules,
  ViewModuleTopics,
  ViewModuleTests,
  ViewRenderThemes,
  ViewRenderTests,
} from "@/views/modules";

export default {
  path: "/modules",
  name: "ViewRenderModules",
  component: ViewRenderModules,
  children: [
    { path: "", name: "ViewModules", component: ViewModules },
    {
      path: ":moduleId/:themeType/:themeId",
      name: "ViewRenderThemes",
      component: ViewRenderThemes,
      children: [
        {
          path: "",
          name: "ViewModuleTopics",
          component: ViewModuleTopics,
        },
      ],
    },
    {
      path: ":moduleId/:themeType/:themeId",
      name: "ViewRenderTests",
      component: ViewRenderTests,
      children: [
        {
          path: "",
          name: "ViewModuleTests",
          component: ViewModuleTests,
        },
      ],
    },
  ],
};
