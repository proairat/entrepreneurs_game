import type { IEduElementCourses } from "@/types/interfaces";
import { Courses } from "./Courses";
import { Creator } from "./Creator";

class CoursesCreator extends Creator {
  public factoryMethod(): IEduElementCourses {
    return new Courses();
  }
}

export { CoursesCreator };
