import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TabsAuthorsService } from "./tabs-authors.service";
import { CreateTabsAuthorDto } from "./dto/create-tabs-author.dto";
import { UpdateTabsAuthorDto } from "./dto/update-tabs-author.dto";

@Controller("tabs-authors")
export class TabsAuthorsController {
  constructor(private readonly tabsAuthorsService: TabsAuthorsService) {}

  @Post()
  create(@Body() createTabsAuthorDto: CreateTabsAuthorDto) {
    return this.tabsAuthorsService.create(createTabsAuthorDto);
  }

  @Get()
  findAll() {
    return this.tabsAuthorsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.tabsAuthorsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateTabsAuthorDto: UpdateTabsAuthorDto
  ) {
    return this.tabsAuthorsService.update(+id, updateTabsAuthorDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.tabsAuthorsService.remove(+id);
  }
}
