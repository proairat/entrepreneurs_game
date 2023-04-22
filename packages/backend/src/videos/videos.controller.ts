import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { VideosService } from "./videos.service";
import { CreateVideoDto } from "./dto/create-video.dto";
import { UpdateVideoDto } from "./dto/update-video.dto";

@Controller("videos")
export class VideosController {
  constructor(private readonly videoService: VideosService) {}

  @Post()
  create(@Body() createVideoDto: CreateVideoDto) {
    console.log("Post create()? @Body", createVideoDto);
    // return this.videoService.create(createVideoDto);
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
