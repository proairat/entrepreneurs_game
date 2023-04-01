import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateModuleDto } from "./dto/update-module.dto";
import { Modules } from "./entities/modules.entity";
import { isEmpty, isNull } from "lodash";
import { EEntityState } from "@app/enums";
import { IModule } from "@app/interfaces";
import { EventEmitter } from "events";
import { Observable } from "rxjs";
import { Socket } from "net";

// const eventEmitter = new EventEmitter();

@Injectable()
export class ModulesService {
  private cache: Map<string, number> = new Map<string, number>();
  private eventEmitter: EventEmitter = new EventEmitter();
  private flags: { body: boolean; file: boolean } = {
    body: false,
    file: false,
  };
  constructor(
    @InjectRepository(Modules)
    private readonly modulesRepository: Repository<Modules>
  ) {}

  async create({ alt = "Карточка модуля" }: UpdateModuleDto): Promise<number> {
    const module = new Modules();
    module.alt = alt;
    // module.title = title;
    // module.duration = duration;
    // module.footer = footer;
    const { id } = await this.modulesRepository.save(module);
    return id;
  }

  async uploadFileAndPassValidation(
    body: UpdateModuleDto,
    file: Express.Multer.File
  ) {
    type Body = { header: string };
    type File = { filename: string };

    function isFile(entity: Body | File): entity is File {
      return (entity as File).filename !== undefined;
    }

    if (!this.cache.has("id")) {
      this.cache.set("id", await this.create({}));
    }

    const updateEntity = async <T extends File | Body>(p: T) => {
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
      return { response: "OK" };
    };

    if (!isEmpty(file)) {
      return await updateEntity<File>({
        filename: file.filename ?? "no value",
      });
    }

    if (!isEmpty(body)) {
      return await updateEntity<Body>({ header: body.header ?? "no value" });
    }
  }

  async findAll(): Promise<Modules[]> {
    return await this.modulesRepository.find();
  }

  async findOneByState(state: EEntityState): Promise<Modules | null> {
    return await this.modulesRepository.findOneBy({ state });
  }

  async findOneById(id: number): Promise<Modules | null> {
    return await this.modulesRepository.findOneBy({ id });
  }

  async update(id: number, updateModuleDto: UpdateModuleDto) {
    const row = await this.findOneById(id);
    if (!isNull(row)) {
      Object.entries(updateModuleDto).map(([key, value]: [any, any]) => {
        const opa: keyof UpdateModuleDto = key;
        row[opa] = value;
      });
      await this.modulesRepository.save(row);
    }
  }

  async getLastInsertedRow() {
    return await this.modulesRepository
      .createQueryBuilder()
      .select("m.id")
      .from(Modules, "m")
      .orderBy("m.id", "DESC")
      .getOne();
  }

  async remove(id: number): Promise<void> {
    await this.modulesRepository.delete(id);
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
