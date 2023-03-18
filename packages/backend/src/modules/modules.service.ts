import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateModuleDto } from "./dto/update-module.dto";
import { Modules } from "./entities/modules.entity";
import { isEmpty, isNull } from "lodash";
import { EEntityState } from "@app/enums";

@Injectable()
export class ModulesService {
  private cache: Map<string, number> = new Map<string, number>();
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
    type File = { path: string };

    function isFile(entity: Body | File): entity is File {
      return (entity as File).path !== undefined;
    }

    if (!this.cache.has("id")) {
      const activeElem = await this.findOneByState(EEntityState.Active);
      if (!isNull(activeElem)) {
        await this.update(activeElem.id, { state: EEntityState.Default });
      }
      this.cache.set("id", await this.create({}));
    }

    const updateEntity = async <T extends File | Body>(p: T) => {
      let updateModuleDto: {
        [index: string]: string;
      };
      if (isFile(p)) {
        updateModuleDto = { path: p.path };
        this.flags.file = true;
      } else {
        updateModuleDto = { header: p.header };
        this.flags.body = true;
      }
      if (this.cache.has("id")) {
        const id = this.cache.get("id");
        if (id) {
          await this.update(id, updateModuleDto);
        }
      }
      if (this.flags.body && this.flags.file) {
        this.cache.delete("id");
        this.flags.body = false;
        this.flags.file = false;
      }
      return { response: "OK" };
    };

    if (!isEmpty(file)) {
      return await updateEntity<File>({ path: file.path ?? "no value" });
    }

    if (!isEmpty(body)) {
      return await updateEntity<Body>({ header: body.header ?? "no value" });
    }
  }

  findAll(): Promise<Modules[]> {
    return this.modulesRepository.find();
  }

  async findOneByState(state: EEntityState): Promise<Modules | null> {
    return await this.modulesRepository.findOneBy({ state });
  }

  findOneById(id: number): Promise<Modules | null> {
    return this.modulesRepository.findOneBy({ id });
  }

  async update(id: number, updateModuleDto: UpdateModuleDto) {
    const row = await this.findOneById(id);
    if (!isNull(row)) {
      Object.entries(updateModuleDto).map(([key, value]: Array<any>) => {
        const opa: keyof UpdateModuleDto = key;
        row[opa] = value;
      });
      await this.modulesRepository.save(row);
    }
    // return `This action updates a #${id} module`;
  }

  async remove(id: number): Promise<void> {
    await this.modulesRepository.delete(id);
  }
}
