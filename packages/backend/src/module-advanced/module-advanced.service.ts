import { Injectable } from "@nestjs/common";
import { CreateModuleAdvancedDto } from "../dto/create-module-advanced.dto";
import { UpdateModuleAdvancedDto } from "../dto/update-module-advanced.dto";

@Injectable()
export class ModuleAdvancedService {
  create(createModuleAdvancedDto: CreateModuleAdvancedDto) {
    return "This action adds a new moduleAdvanced";
  }

  findAll() {
    return `This action returns all moduleAdvanced`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moduleAdvanced`;
  }

  update(id: number, updateModuleAdvancedDto: UpdateModuleAdvancedDto) {
    return `This action updates a #${id} moduleAdvanced`;
  }

  remove(id: number) {
    return `This action removes a #${id} moduleAdvanced`;
  }
}
