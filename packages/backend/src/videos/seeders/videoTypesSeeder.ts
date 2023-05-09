import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { VideoTypes } from "../../entities/video-types.entity";
import { EVideoTypes } from "@app/types/enums";

@Injectable()
export class VideoTypesSeeder {
  constructor(
    @InjectRepository(VideoTypes)
    private videoTypesRepository: Repository<VideoTypes>
  ) {}

  async seed() {
    const defaultVideoTypesSeeder = [
      { id: 1, videoType: EVideoTypes.MP4 },
      { id: 2, videoType: EVideoTypes.AVI },
      { id: 3, videoType: EVideoTypes.FLV },
    ];
    // const videoTypes = new VideoTypes(); // в качестве альтернативного решения закомментированные строки сохранены
    for (const videoType of defaultVideoTypesSeeder) {
      // videoTypes.id = post.id;
      // videoTypes.videoType = post.videoType;
      const videoTypes = this.videoTypesRepository.create(videoType);
      await this.videoTypesRepository.save(videoTypes);
    }
  }
}
