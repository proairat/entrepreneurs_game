import { PartialType } from "@nestjs/swagger";
import { CreateModuleAdvancedDto } from "./create-module-advanced.dto";

export class UpdateModuleAdvancedDto extends PartialType(
  CreateModuleAdvancedDto
) {}
