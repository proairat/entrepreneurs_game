import { ViewPassingTheCourse, AppCourse } from "@/views/courses";

export default {
  path: "/courses",
  component: ViewPassingTheCourse,
  children: [{ path: "", component: AppCourse }],
};
