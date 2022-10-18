import { ViewChoiceOfCourses, AppCourses, AppCourse } from "@/views/courses";

export default {
  path: "/courses",
  name: "ViewChoiceOfCourses",
  component: ViewChoiceOfCourses,
  children: [
    { path: "", name: "AppCourses", component: AppCourses },
    { path: ":id", name: "AppCourse", component: AppCourse },
  ],
};
