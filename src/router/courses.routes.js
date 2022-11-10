import {
  ViewChoiceOfCourses,
  ViewCourse,
  AppModules,
  AppCourse,
  AppTest,
} from "@/views/courses";

export default {
  path: "/courses",
  name: "ViewChoiceOfCourses",
  component: ViewChoiceOfCourses,
  children: [
    { path: "", name: "AppModules", component: AppModules },
    {
      path: ":id",
      name: "ViewCourse",
      component: ViewCourse,
      children: [
        { path: "", name: "AppCourse", component: AppCourse },
        {
          path: "tests/:test",
          name: "AppTest",
          component: AppTest,
        },
        {
          path: "topics/:topic",
          name: "AppAnotherTopic",
          component: AppCourse,
        },
      ],
    },
  ],
};
