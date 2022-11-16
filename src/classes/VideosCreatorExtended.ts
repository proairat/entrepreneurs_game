import type { IEduElementVideos, IVideo } from "@/types/interfaces";
import type { TElemsList } from "@/types/types";
import { CreatorExtended } from "./CreatorExtended";
import { VideosExtended } from "./VideosExtended";

class VideosCreatorExtended extends CreatorExtended {
  list: TElemsList<number, IVideo>;

  constructor(list: TElemsList<number, IVideo>) {
    super();
    this.list = list;
  }

  public factoryMethod(): IEduElementVideos {
    return new VideosExtended(this.list);
  }
}

export { VideosCreatorExtended };
