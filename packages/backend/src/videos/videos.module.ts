import { Module } from "@nestjs/common";
import { VideosService } from "./videos.service";
import { VideosController } from "./videos.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Videos } from "./entities/videos.entity";
import { VideoTypes } from "./entities/videoTypes.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Videos, VideoTypes])],
  controllers: [VideosController],
  providers: [VideosService],
})
export class VideosModule {}
