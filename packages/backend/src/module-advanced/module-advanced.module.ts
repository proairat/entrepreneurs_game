import { Module } from "@nestjs/common";
import { ModuleAdvancedService } from "./module-advanced.service";
import { ModuleAdvancedController } from "./module-advanced.controller";

@Module({
  controllers: [ModuleAdvancedController],
  providers: [ModuleAdvancedService],
})
export class ModuleAdvancedModule {}
