import type { IEduCommonElement } from "@/types/interfaces";
import { Creator } from "../Creator";
import { Tests } from "./Tests";

class TestsCreator extends Creator {
  public factoryMethod(): IEduCommonElement {
    return new Tests();
  }
}

export { TestsCreator };
