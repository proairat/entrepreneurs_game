import type { IEduCommonElement } from "@/types/interfaces";
import { Creator } from "../Creator";
import { Videos } from "./Videos";

class VideosCreator extends Creator {
  public factoryMethod(): IEduCommonElement {
    return new Videos();
  }
}

export { VideosCreator };
