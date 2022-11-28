import { EEntityState } from "@/types/enums";
import type { IEduElementVideos, IVideo } from "@/types/interfaces";
import type { TElemsList } from "@/types/types";
import { BaseEduElement } from "./BaseEduElement";

class VideosExtended extends BaseEduElement implements IEduElementVideos {
  list: TElemsList<number, IVideo>;

  constructor(list: TElemsList<number, IVideo>) {
    super();
    this.list = list;
  }
  public updateActiveElem(
    moduleId: number,
    elems: IVideo[],
    videoId: number
  ): void {
    if (this.list instanceof Map) {
      const vid = elems;
      const activeElem = this.getActiveElem(moduleId);

      if (Array.isArray(vid) && activeElem !== undefined) {
        const activeVideoIndex = super.findIndex(vid, activeElem.id);
        const clickVideoIndex = super.findIndex(vid, videoId);

        if (activeVideoIndex !== -1 && clickVideoIndex !== -1) {
          vid[activeVideoIndex]["state"] = EEntityState.Default;
          vid[clickVideoIndex]["state"] = EEntityState.Active;
        }
      }
    }
  }
  public getActiveElem(moduleId: number): IVideo | undefined {
    if (this.list instanceof Map) {
      const list = this.getVideosByModuleId(moduleId);
      if (Array.isArray(list)) {
        return super.find(list);
      }
    }
  }
  public getVideosByModuleId(moduleId: number): IVideo[] | undefined {
    if (this.list instanceof Map) {
      return this.list.get(moduleId);
    }
  }
}

export { VideosExtended };
