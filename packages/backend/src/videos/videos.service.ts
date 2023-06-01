import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateVideoDto } from "../dto/update-video.dto";
import { UpdateVideoTypeDto } from "../dto/update-video-type.dto";
import { CreateVideoDto } from "../dto/create-video.dto";
import { Videos } from "../entities/videos.entity";
import { VideoTypes } from "../entities/video-types.entity";
import { isEmpty, isNull } from "lodash";
import { EEntityStateDashboard, EServerResponses } from "@app/types/enums";
import { IModule, IModuleBody, IFile, IVideoDB } from "@app/types/interfaces";
import { EventEmitter } from "events";
import { Observable } from "rxjs";
import { Socket } from "net";
import { Authors } from "src/entities/authors.entity";
import { removeObjectProperty } from "@app/helpers/commonFunctions";

@Injectable()
export class VideosService {
  private eventEmitter: EventEmitter = new EventEmitter();

  constructor(
    @InjectRepository(Videos)
    private readonly videosRepository: Repository<Videos>,
    @InjectRepository(Authors)
    private readonly authorsRepository: Repository<Authors>
  ) {}

  //async create({ alt = "Карточка модуля" }: UpdateVideoDto): Promise<number> {
  async create(formData: CreateVideoDto): Promise<{
    videoRow: Omit<Videos, "authors"> | EServerResponses.VIDEOS_CREATE_ERROR;
    response: EServerResponses;
  }> {
    try {
      const video = new Videos(formData.title);
      const authors: Authors[] = [];
      for (const author of formData.authors) {
        const authorRecord = new Authors(
          author.surname,
          author.name,
          author.patronymic
        );
        authors.push(authorRecord);
        const { id } = await this.authorsRepository.save(authorRecord);
      }
      video.authors = authors;
      const { id } = await this.videosRepository.save(video);

      return {
        videoRow: removeObjectProperty<Videos, "authors">("authors")(video),
        response: EServerResponses.VIDEOS_CREATE_SUCCESSFUL,
      };
    } catch {
      return {
        videoRow: EServerResponses.VIDEOS_CREATE_ERROR,
        response: EServerResponses.VIDEOS_CREATE_ERROR,
      };
    }
  }

  async uploadPoster(body: CreateVideoDto, file: Express.Multer.File) {
    try {
      if (!isEmpty(file)) {
        const { videoRow, response } = await this.update(body.id, {
          filenamePoster: file.filename,
          state: EEntityStateDashboard.After_create_video_poster,
        });

        switch (response) {
          case EServerResponses.VIDEOS_UPDATE_SUCCESSFUL:
            return {
              videoRow,
              response: EServerResponses.VIDEOS_UPLOAD_POSTER_SUCCESSFUL,
            };
          case EServerResponses.VIDEOS_UPDATE_IS_NULL:
            return {
              videoRow: EServerResponses.VIDEOS_UPLOAD_POSTER_IS_NULL,
              response: EServerResponses.VIDEOS_UPLOAD_POSTER_IS_NULL,
            };
          case EServerResponses.VIDEOS_UPDATE_ERROR:
            return {
              videoRow: EServerResponses.VIDEOS_UPLOAD_POSTER_ERROR,
              response: EServerResponses.VIDEOS_UPLOAD_POSTER_ERROR,
            };
        }
      } else {
        return {
          videoRow: EServerResponses.VIDEOS_UPLOAD_POSTER_EMPTY_FILE,
          response: EServerResponses.VIDEOS_UPLOAD_POSTER_EMPTY_FILE,
        };
      }
    } catch {
      return {
        videoRow: EServerResponses.VIDEOS_UPLOAD_POSTER_ERROR,
        response: EServerResponses.VIDEOS_UPLOAD_POSTER_ERROR,
      };
    }
  }

  async uploadVideoFile(body: CreateVideoDto, file: Express.Multer.File) {
    try {
      if (!isEmpty(file)) {
        const { videoRow, response } = await this.update(body.id, {
          filenameVideo: file.filename,
          state: EEntityStateDashboard.After_create_video_file,
        });

        switch (response) {
          case EServerResponses.VIDEOS_UPDATE_SUCCESSFUL:
            return {
              videoRow,
              response: EServerResponses.VIDEOS_UPLOAD_VIDEO_FILE_SUCCESSFUL,
            };
          case EServerResponses.VIDEOS_UPDATE_IS_NULL:
            return {
              videoRow: EServerResponses.VIDEOS_UPLOAD_VIDEO_FILE_IS_NULL,
              response: EServerResponses.VIDEOS_UPLOAD_VIDEO_FILE_IS_NULL,
            };
          case EServerResponses.VIDEOS_UPDATE_ERROR:
            return {
              videoRow: EServerResponses.VIDEOS_UPLOAD_VIDEO_FILE_ERROR,
              response: EServerResponses.VIDEOS_UPLOAD_VIDEO_FILE_ERROR,
            };
        }
      } else {
        return {
          videoRow: EServerResponses.VIDEOS_UPLOAD_VIDEO_FILE_EMPTY_FILE,
          response: EServerResponses.VIDEOS_UPLOAD_VIDEO_FILE_EMPTY_FILE,
        };
      }
    } catch {
      return {
        videoRow: EServerResponses.VIDEOS_UPLOAD_VIDEO_FILE_ERROR,
        response: EServerResponses.VIDEOS_UPLOAD_VIDEO_FILE_ERROR,
      };
    }
  }

  async updateVideoState(formData: Pick<Videos, "id" | "state">) {
    try {
      if (!isEmpty(formData)) {
        const { videoRow, response } = await this.update(formData.id, {
          state: formData.state,
        });

        switch (response) {
          case EServerResponses.VIDEOS_UPDATE_SUCCESSFUL:
            return {
              videoRow,
              response: EServerResponses.VIDEOS_UPDATE_VIDEO_STATE_SUCCESSFUL,
            };
          case EServerResponses.VIDEOS_UPDATE_IS_NULL:
            return {
              videoRow: EServerResponses.VIDEOS_UPDATE_VIDEO_STATE_IS_NULL,
              response: EServerResponses.VIDEOS_UPDATE_VIDEO_STATE_IS_NULL,
            };
          case EServerResponses.VIDEOS_UPDATE_ERROR:
            return {
              videoRow: EServerResponses.VIDEOS_UPDATE_VIDEO_STATE_ERROR,
              response: EServerResponses.VIDEOS_UPDATE_VIDEO_STATE_ERROR,
            };
        }
      } else {
        return {
          videoRow: EServerResponses.VIDEOS_UPDATE_VIDEO_STATE_EMPTY_FORM_DATA,
          response: EServerResponses.VIDEOS_UPDATE_VIDEO_STATE_EMPTY_FORM_DATA,
        };
      }
    } catch {
      return {
        videoRow: EServerResponses.VIDEOS_UPDATE_VIDEO_STATE_ERROR,
        response: EServerResponses.VIDEOS_UPDATE_VIDEO_STATE_ERROR,
      };
    }
  }

  /*
  async uploadFileAndPassValidationPut(
    body: UpdateVideoDto & { id?: number },
    file: Express.Multer.File
  ) {
    function isFile(entity: IModuleBody | IFile): entity is IFile {
      return (entity as IFile).filename !== undefined;
    }

    const id = body.id;
    const updateEntity = async <T extends IFile | IModuleBody>(p: T) => {
      let updateModuleDto: {
        [index: string]: string;
      };
      if (isFile(p)) {
        updateModuleDto = { filename: p.filename };
        
      } else {
        updateModuleDto = { header: p.header };
        
      }
      if (id) {
        await this.update(id, updateModuleDto);
      }
      return { response: EServerResponses.OK };
    };
    if (!isEmpty(file)) {
      return await updateEntity<IFile>({
        filename: file.filename ?? "no value",
      });
    }
    if (!isEmpty(body)) {
      if (id) {
        return await updateEntity<IModuleBody>({
          header: body.header ?? "no value",
        });
      }
    }
  }
  */

  async findAll(): Promise<Videos[]> {
    return await this.videosRepository.find();
  }

  async findOneByState(state: EEntityStateDashboard): Promise<Videos | null> {
    // return await this.videosRepository.findOneBy({ state });
    return null;
  }

  async findOneById(id: number): Promise<Videos | null> {
    return await this.videosRepository.findOneBy({ id });
  }

  async update(id: number, toUpdate: Partial<Videos>) {
    try {
      const row = await this.findOneById(id);
      if (!isNull(row)) {
        return {
          videoRow: await this.videosRepository.save({ ...row, ...toUpdate }),
          response: EServerResponses.VIDEOS_UPDATE_SUCCESSFUL,
        };
      } else {
        return {
          videoRow: EServerResponses.VIDEOS_UPDATE_IS_NULL,
          response: EServerResponses.VIDEOS_UPDATE_IS_NULL,
        };
      }
    } catch {
      return {
        videoRow: EServerResponses.VIDEOS_UPDATE_ERROR,
        response: EServerResponses.VIDEOS_UPDATE_ERROR,
      };
    }
  }

  /*
  async getLastInsertedRow() {
    return await this.videosRepository
      .createQueryBuilder()
      .select("m.id")
      .from(Videos, "m")
      .orderBy("m.id", "DESC")
      .getOne();
  }
  */

  async remove(id: number): Promise<{ response: EServerResponses }> {
    const { affected } = await this.videosRepository.delete(id);
    return affected
      ? { response: EServerResponses.VIDEOS_REMOVE_SUCCESSFUL }
      : { response: EServerResponses.VIDEOS_REMOVE_ERROR };
  }

  streamEvents(
    req: Request & { socket: Socket }
  ): Observable<{ data: IModule; id: number; retry: number }> {
    req.socket.on("close", () => {
      this.eventEmitter.removeAllListeners();
    });

    return new Observable((observer) => {
      this.eventEmitter.on("message", (data: IModule) => {
        observer.next({ data, id: data.id, retry: 100 });
      });

      this.eventEmitter.on("error", (err) => {
        observer.error(err);
        observer.complete();
      });

      this.eventEmitter.on("close", () => {
        observer.complete();
      });
    });
  }
}
