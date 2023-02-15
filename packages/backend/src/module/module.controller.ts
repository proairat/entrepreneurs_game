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
import { ModuleService } from "./module.service";
import { CreateModuleDto } from "./dto/create-module.dto";
import { UpdateModuleDto } from "./dto/update-module.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { FileDto } from "./dto/file.dto";
import { diskStorage } from "multer";
import { extname } from "path";
import { existsSync, mkdirSync } from "fs";
import { v4 as uuid } from "uuid";
import { HttpException, HttpStatus } from "@nestjs/common";

const multerOptions = {
  storage: diskStorage({
    // Destination storage path details
    destination: (req: any, file: any, cb: any) => {
      const uploadPath = "./uploadFilesFolder";
      // Create folder if doesn't exist
      if (!existsSync(uploadPath)) {
        mkdirSync(uploadPath);
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

@Controller("modules")
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @Post("upload")
  @UseInterceptors(FileInterceptor("file", multerOptions))
  uploadFileAndPassValidation(
    @Body() body: FileDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: "png|svg",
        })
        .addMaxSizeValidator({
          maxSize: 2097152, // 2 Mb
        })
        .build({
          fileIsRequired: false,
        })
    )
    file?: Express.Multer.File
  ) {
    if (file) {
      console.log("file? ну-ка", file);
    }

    if (body) {
      console.log("body? ну-ка", body);
    }

    // throw new HttpException('Быстро исправил, ёпта!', HttpStatus.BAD_GATEWAY);
    return {
      response: 'OK'
    };
  }

  @Post()
  create(@Body() createModuleDto: CreateModuleDto) {
    return this.moduleService.create(createModuleDto);
  }

  @Get()
  findAll() {
    return this.moduleService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    console.log("Это действует? id", id);
    return this.moduleService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateModuleDto: UpdateModuleDto) {
    return this.moduleService.update(+id, updateModuleDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.moduleService.remove(+id);
  }
}
