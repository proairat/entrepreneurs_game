import { Module } from "@nestjs/common";
import { ModulesService } from "./modules.service";
import { ModulesController } from "./modules.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Modules } from "./entities/modules.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Modules])],
  controllers: [ModulesController],
  providers: [ModulesService],
})
export class ModulesModule {}
