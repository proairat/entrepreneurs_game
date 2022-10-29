import {
  ViewChoiceOfCourses,
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
    { path: ":id", name: "AppCourse", component: AppCourse },
    { path: ":id/tests/:test", name: "AppTest", component: AppTest },
  ],
};
