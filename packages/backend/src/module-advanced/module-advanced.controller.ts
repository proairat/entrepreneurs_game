import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ModuleAdvancedService } from "./module-advanced.service";
import { CreateModuleAdvancedDto } from "./dto/create-module-advanced.dto";
import { UpdateModuleAdvancedDto } from "./dto/update-module-advanced.dto";

@Controller("module-advanced")
export class ModuleAdvancedController {
  constructor(private readonly moduleAdvancedService: ModuleAdvancedService) {}

  @Post()
  create(@Body() createModuleAdvancedDto: CreateModuleAdvancedDto) {
    return this.moduleAdvancedService.create(createModuleAdvancedDto);
  }

  @Get()
  findAll() {
    return this.moduleAdvancedService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.moduleAdvancedService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateModuleAdvancedDto: UpdateModuleAdvancedDto
  ) {
    return this.moduleAdvancedService.update(+id, updateModuleAdvancedDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.moduleAdvancedService.remove(+id);
  }
}
