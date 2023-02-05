import { Module } from "@nestjs/common";
import { TabsAuthorsService } from "./tabs-authors.service";
import { TabsAuthorsController } from "./tabs-authors.controller";

@Module({
  controllers: [TabsAuthorsController],
  providers: [TabsAuthorsService],
})
export class TabsAuthorsModule {}
