import type { IEduCommonElement, ITest } from "@/types/interfaces";
import { Creator } from "../Creator";
import { GenericEntityClass } from "@/classes/GenericEntityClass";

class TestsCreator extends Creator {
  public factoryMethod(): IEduCommonElement<ITest> {
    return new GenericEntityClass<ITest>();
  }
}

export { TestsCreator };
