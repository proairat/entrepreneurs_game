"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesController = void 0;
const common_1 = require("@nestjs/common");
const modules_service_1 = require("./modules.service");
const create_module_dto_1 = require("./dto/create-module.dto");
const update_module_dto_1 = require("./dto/update-module.dto");
const platform_express_1 = require("@nestjs/platform-express");
const file_dto_1 = require("./dto/file.dto");
const multer_1 = require("multer");
const path_1 = require("path");
const fs_1 = require("fs");
const uuid_1 = require("uuid");
const multerOptions = {
    storage: (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            const uploadPath = "./uploadFilesFolder";
            if (!(0, fs_1.existsSync)(uploadPath)) {
                (0, fs_1.mkdirSync)(uploadPath);
            }
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            cb(null, `${(0, uuid_1.v4)()}${(0, path_1.extname)(file.originalname)}`);
        },
    }),
};
let ModulesController = class ModulesController {
    constructor(modulesService) {
        this.modulesService = modulesService;
    }
    uploadFileAndPassValidation(body, file) {
        if (file) {
            console.log("file? ну-ка", file);
        }
        if (body) {
            console.log("body? ну-ка", body);
        }
        return { response: "OK" };
    }
    create(createModuleDto) {
        return this.modulesService.create(createModuleDto);
    }
    findAll() {
        return this.modulesService.findAll();
    }
    findOne(id) {
        console.log("Это действует? id", id);
        return this.modulesService.findOne(+id);
    }
    update(id, updateModuleDto) {
        return this.modulesService.update(+id, updateModuleDto);
    }
    remove(id) {
        return this.modulesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)("upload"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file", multerOptions)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipeBuilder()
        .addFileTypeValidator({
        fileType: "png|svg",
    })
        .addMaxSizeValidator({
        maxSize: 2097152,
    })
        .build({
        fileIsRequired: false,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [file_dto_1.FileDto, Object]),
    __metadata("design:returntype", void 0)
], ModulesController.prototype, "uploadFileAndPassValidation", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_module_dto_1.CreateModuleDto]),
    __metadata("design:returntype", void 0)
], ModulesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ModulesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ModulesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_module_dto_1.UpdateModuleDto]),
    __metadata("design:returntype", void 0)
], ModulesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ModulesController.prototype, "remove", null);
ModulesController = __decorate([
    (0, common_1.Controller)("modules"),
    __metadata("design:paramtypes", [modules_service_1.ModulesService])
], ModulesController);
exports.ModulesController = ModulesController;
//# sourceMappingURL=modules.controller.js.map