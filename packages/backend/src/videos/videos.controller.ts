import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from "@nestjs/common";
import { VideosService } from "./videos.service";
import { CreateVideoDto } from "../dto/create-video.dto";
import { UpdateVideoDto } from "../dto/update-video.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("videos")
export class VideosController {
  constructor(private readonly videoService: VideosService) {}

  @Post()
  @UseInterceptors(FileInterceptor("file"))
  create(@Body() CreateVideoDto: CreateVideoDto) {
    return this.videoService.create(CreateVideoDto);
  }

  @Get()
  findAll() {
    return this.videoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    //return this.videoService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videoService.update(+id, updateVideoDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.videoService.remove(+id);
  }
}
