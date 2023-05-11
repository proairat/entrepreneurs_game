import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipeBuilder,
} from "@nestjs/common";
import { VideosService } from "./videos.service";
import { CreateVideoDto } from "../dto/create-video.dto";
import { UpdateVideoDto } from "../dto/update-video.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";
import { existsSync, mkdirSync } from "fs";
import { v4 as uuid } from "uuid";
import { Videos } from "src/entities/videos.entity";

const uploadPosterMulterOptions = {
  storage: diskStorage({
    // Destination storage path details
    destination: (req: any, file: any, cb: any) => {
      const uploadPath = "./assets/videos/poster";
      // Create folder if doesn't exist
      if (!existsSync(uploadPath)) {
        mkdirSync(uploadPath, { recursive: true });
      }
      cb(null, uploadPath);
    },
    // File modification details
    filename: (req: any, file: any, cb: any) => {
      // Calling the callback passing the random name generated with the original extension name
      cb(null, `${uuid()}${extname(file.originalname)}`);
    },
  }),
};

const uploadVideoFileMulterOptions = {
  storage: diskStorage({
    // Destination storage path details
    destination: (req: any, file: any, cb: any) => {
      const uploadPath = "./assets/videos/video-file";
      // Create folder if doesn't exist
      if (!existsSync(uploadPath)) {
        mkdirSync(uploadPath, { recursive: true });
      }
      cb(null, uploadPath);
    },
    // File modification details
    filename: (req: any, file: any, cb: any) => {
      // Calling the callback passing the random name generated with the original extension name
      cb(null, `${uuid()}${extname(file.originalname)}`);
    },
  }),
};

@Controller("videos")
export class VideosController {
  constructor(private readonly videoService: VideosService) {}

  @Post()
  @UseInterceptors(FileInterceptor("file"))
  create(@Body() CreateVideoDto: CreateVideoDto) {
    return this.videoService.create(CreateVideoDto);
  }

  @Post("upload-poster")
  @UseInterceptors(FileInterceptor("file", uploadPosterMulterOptions))
  postUploadPoster(
    @Body() body: CreateVideoDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: "png|svg",
        })
        .addMaxSizeValidator({
          maxSize: 3145728, // 3 Mb
        })
        .build()
    )
    file: Express.Multer.File
  ) {
    return this.videoService.postUploadPoster(body, file);
  }

  @Post("upload-video-file")
  @UseInterceptors(FileInterceptor("file", uploadVideoFileMulterOptions))
  postUploadVideoFile(
    @Body() body: CreateVideoDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: "mpeg|mp4",
        })
        .addMaxSizeValidator({
          maxSize: 838860800, // 800 Mb
        })
        .build()
    )
    file: Express.Multer.File
  ) {
    return this.videoService.postUploadVideoFile(body, file);
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
  update(@Param("id") id: string, @Body() updateVideoDto: Videos) {
    return this.videoService.update(+id, updateVideoDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.videoService.remove(+id);
  }
}
