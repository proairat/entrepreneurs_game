import { PartialType } from "@nestjs/swagger";
import { CreateTabsAuthorDto } from "./create-tabs-author.dto";

export class UpdateTabsAuthorDto extends PartialType(CreateTabsAuthorDto) {}
