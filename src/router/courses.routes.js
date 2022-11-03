/*
export { default as ViewChoiceOfCourses } from "./ViewChoiceOfCourses.vue";
export { default as ViewCourse } from "./ViewCourse.vue";
export { default as AppCourses } from "./AppCourses.vue";
export { default as AppCourse } from "./AppCourse.vue";
export { default as AppTest } from "./AppTest.vue";
*/

import {
  ViewChoiceOfCourses,
  ViewCourse,
  AppCourses,
  AppCourse,
  AppTest,
} from "@/views/courses";

export default {
  path: "/courses",
  name: "ViewChoiceOfCourses",
  component: ViewChoiceOfCourses,
  children: [
    { path: "", name: "AppCourses", component: AppCourses },
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
