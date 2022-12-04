import type { IEduCommonElement, IVideo } from "@/types/interfaces";
import { Creator } from "../Creator";
import { GenericEntityClass } from "@/classes/GenericEntityClass";

class VideosCreator extends Creator {
  public factoryMethod(): IEduCommonElement<IVideo> {
    return new GenericEntityClass<IVideo>();
  }
}

export { VideosCreator };
