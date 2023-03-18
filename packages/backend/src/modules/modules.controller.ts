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
import { ModulesService } from "./modules.service";
import { CreateModuleDto } from "./dto/create-module.dto";
import { UpdateModuleDto } from "./dto/update-module.dto";
import { FileInterceptor } from "@nestjs/platform-express";
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
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @Post("upload")
  @UseInterceptors(FileInterceptor("file", multerOptions))
  uploadFileAndPassValidation(
    @Body() body: CreateModuleDto,
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
    file: Express.Multer.File
  ) {
    return this.modulesService.uploadFileAndPassValidation(body, file);
  }

  @Post()
  create(@Body() createModuleDto: CreateModuleDto) {
    return this.modulesService.create(createModuleDto);
  }

  @Get()
  findAll() {
    return this.modulesService.findAll();
  }

  @Get(":id")
  findOneById(@Param("id") id: string) {
    return this.modulesService.findOneById(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateModuleDto: UpdateModuleDto) {
    return this.modulesService.update(+id, updateModuleDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.modulesService.remove(+id);
  }
}
