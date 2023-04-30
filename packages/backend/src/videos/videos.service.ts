import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateVideoDto } from "../dto/update-video.dto";
import { UpdateVideoTypeDto } from "../dto/update-video-type.dto";
import { CreateVideoDto } from "../dto/create-video.dto";
import { Videos } from "../entities/videos.entity";
import { VideoTypes } from "../entities/video-types.entity";
import { isEmpty, isNull } from "lodash";
import { EEntityState, EServerResponses } from "@app/enums";
import { IModule, IModuleBody, IModuleFile } from "@app/interfaces";
import { EventEmitter } from "events";
import { Observable } from "rxjs";
import { Socket } from "net";
import { Authors } from "src/entities/authors.entity";

@Injectable()
export class VideosService {
  private cache: Map<string, number> = new Map<string, number>();
  private eventEmitter: EventEmitter = new EventEmitter();
  private flags: { body: boolean; file: boolean } = {
    body: false,
    file: false,
  };

  constructor(
    @InjectRepository(Videos)
    private readonly videosRepository: Repository<Videos>,
    @InjectRepository(Authors)
    private readonly authorsRepository: Repository<Authors>
  ) {}

  //async create({ alt = "Карточка модуля!" }: UpdateVideoDto): Promise<number> {
  async create(formData: CreateVideoDto): Promise<{ response: string }> {
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

    return id
      ? { response: EServerResponses.VIDEOS_CREATE_SUCCESSFUL }
      : { response: EServerResponses.VIDEOS_CREATE_ERROR };

    // return id;

    //const video = new Videos();
    // module.title = title;
    // module.duration = duration;
    // module.footer = footer;
    //const { id } = await this.videosRepository.save(video);
    //return id;
  }

  /*
  async uploadFileAndPassValidationPost(
    body: UpdateVideoDto,
    file: Express.Multer.File
  ) {
    function isFile(entity: IModuleBody | IModuleFile): entity is IModuleFile {
      return (entity as IModuleFile).filename !== undefined;
    }

    if (!this.cache.has("id")) {
      this.cache.set("id", await this.create({}));
    }

    const updateEntity = async <T extends IModuleFile | IModuleBody>(p: T) => {
      let updateModuleDto: {
        [index: string]: string;
      };
      const id = this.cache.has("id") ? this.cache.get("id") : undefined;
      if (isFile(p)) {
        updateModuleDto = { filename: p.filename };
        this.flags.file = true;
      } else {
        updateModuleDto = { header: p.header };
        this.flags.body = true;
      }
      if (id) {
        await this.update(id, updateModuleDto);
      }
      if (this.flags.body && this.flags.file) {
        if (id) {
          this.eventEmitter.emit("message", await this.findOneById(id));
          this.flags.body = false;
          this.flags.file = false;
          this.cache.delete("id");
        }
      }
      return { response: EServerResponses.OK };
    };
    if (!isEmpty(file)) {
      return await updateEntity<IModuleFile>({
        filename: file.filename ?? "no value",
      });
    }
    if (!isEmpty(body)) {
      return await updateEntity<IModuleBody>({
        header: body.header ?? "no value",
      });
    }
  }

  async uploadFileAndPassValidationPut(
    body: UpdateVideoDto & { id?: number },
    file: Express.Multer.File
  ) {
    function isFile(entity: IModuleBody | IModuleFile): entity is IModuleFile {
      return (entity as IModuleFile).filename !== undefined;
    }

    const id = body.id;
    const updateEntity = async <T extends IModuleFile | IModuleBody>(p: T) => {
      let updateModuleDto: {
        [index: string]: string;
      };
      if (isFile(p)) {
        updateModuleDto = { filename: p.filename };
        this.flags.file = true;
      } else {
        updateModuleDto = { header: p.header };
        this.flags.body = true;
      }
      if (id) {
        await this.update(id, updateModuleDto);
      }
      if (this.flags.body && this.flags.file) {
        if (id) {
          this.eventEmitter.emit("message", await this.findOneById(id));
          this.flags.body = false;
          this.flags.file = false;
        }
      }
      return { response: EServerResponses.OK };
    };
    if (!isEmpty(file)) {
      return await updateEntity<IModuleFile>({
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

  /*
  async findAll(): Promise<Videos[]> {
    return await this.videosRepository.find();
  }
  */

  async findAll(): Promise<any> {
    return "findAll";
  }

  async findOneByState(state: EEntityState): Promise<Videos | null> {
    // return await this.videosRepository.findOneBy({ state });
    return null;
  }

  async findOneById(id: number): Promise<Videos | null> {
    //return await this.videosRepository.findOneBy({ id });
    return null;
  }

  async update(id: number, updateModuleDto: UpdateVideoDto) {
    const row = await this.findOneById(id);
    if (!isNull(row)) {
      //Object.entries(updateModuleDto).map(([key, value]: [any, any]) => {
      //  const opa: keyof UpdateVideoDto = key;
      //  row[opa] = value;
      //});
      //await this.videosRepository.save(row);
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
