import { Injectable } from "@nestjs/common";
import { CreateTabsAuthorDto } from "./dto/create-tabs-author.dto";
import { UpdateTabsAuthorDto } from "./dto/update-tabs-author.dto";

@Injectable()
export class TabsAuthorsService {
  create(createTabsAuthorDto: CreateTabsAuthorDto) {
    return "This action adds a new tabsAuthor";
  }

  findAll() {
    return `This action returns all tabsAuthors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabsAuthor`;
  }

  update(id: number, updateTabsAuthorDto: UpdateTabsAuthorDto) {
    return `This action updates a #${id} tabsAuthor`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabsAuthor`;
  }
}
