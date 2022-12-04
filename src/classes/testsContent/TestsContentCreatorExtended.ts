import type { IEduElementTestsContent, ITestContent } from "@/types/interfaces";
import type { TElemsList } from "@/types/types";
import { CreatorExtended } from "../CreatorExtended";
import { TestsContentExtended } from "./TestsContentExtended";

class TestsContentCreatorExtended extends CreatorExtended {
  list: TElemsList<number, ITestContent>;

  constructor(list: TElemsList<number, ITestContent>) {
    super();
    this.list = list;
  }

  public factoryMethod(): IEduElementTestsContent {
    return new TestsContentExtended(this.list);
  }
}

export { TestsContentCreatorExtended };
