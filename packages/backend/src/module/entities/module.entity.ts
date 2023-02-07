import { ApiProperty } from "@nestjs/swagger";
import { EEntityType, EEntityState } from "share/types/enums";
import type { IModule } from "share/types/interfaces";

export class Module implements IModule {
  @ApiProperty({ description: "Module identifier", nullable: false })
  readonly id: number;

  @ApiProperty({ description: "Type", nullable: true })
  readonly type: EEntityType.Modules;

  @ApiProperty({ description: "Source path", nullable: true })
  readonly src: string;

  @ApiProperty({ description: "Alternative text for images", nullable: true })
  readonly alt: string;

  @ApiProperty({ description: "Source path", nullable: true })
  readonly header: string;

  @ApiProperty({ description: "Alternative text for images", nullable: true })
  readonly title: string;

  @ApiProperty({
    description: "Duration of video clip of module",
    nullable: true,
  })
  readonly duration: string;

  @ApiProperty({ description: "Alternative text for images", nullable: true })
  readonly footer: string;

  @ApiProperty({ description: "Alternative text for images", nullable: true })
  readonly state: EEntityState;

  constructor(
    id: number,
    src = "",
    alt = "",
    header = "",
    title = "",
    duration = "",
    footer = "",
    state: EEntityState
  ) {
    this.id = id;
    this.type = EEntityType.Modules;
    this.src = src;
    this.alt = alt;
    this.header = header;
    this.title = title;
    this.duration = duration;
    this.footer = footer;
    this.state = state;
  }
}
