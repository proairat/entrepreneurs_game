import type {
  IEduElementTests,
  IEduElementThemes,
  ITest,
} from "@/types/interfaces";
import type { TElemsList } from "@/types/types";
import { CreatorExtended } from "../CreatorExtended";
import { TestsExtended } from "./TestsExtended";

class TestsCreatorExtended extends CreatorExtended {
  list: TElemsList<number, ITest>;

  constructor(list: TElemsList<number, ITest>) {
    super();
    this.list = list;
  }

  public factoryMethod(): IEduElementTests {
    return new TestsExtended(this.list);
  }
}

export { TestsCreatorExtended };
