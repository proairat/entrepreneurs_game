import type { IEduElementCourses, ICourse } from "@/types/interfaces";
import { CreatorExtended } from "./CreatorExtended";
import { CoursesExtended } from "./CoursesExtended";

class CoursesCreatorExtended extends CreatorExtended {
  list: ICourse[];

  constructor(list: ICourse[]) {
    super();
    this.list = list;
  }

  public factoryMethod(): IEduElementCourses {
    return new CoursesExtended(this.list);
  }
}

export { CoursesCreatorExtended };
