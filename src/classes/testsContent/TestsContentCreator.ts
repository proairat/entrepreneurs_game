import type { IEduCommonElement } from "@/types/interfaces";
import { Creator } from "../Creator";
import { TestsContent } from "./TestsContent";

class TestsContentCreator extends Creator {
  public factoryMethod(): IEduCommonElement {
    return new TestsContent();
  }
}

export { TestsContentCreator };
