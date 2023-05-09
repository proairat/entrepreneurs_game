import { ApiProperty } from "@nestjs/swagger";
import { EVideoTypes } from "@app/types/enums";
import type { IVideoTypesDB } from "@app/types/interfaces";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("video-types")
export class VideoTypes implements IVideoTypesDB {
  @ApiProperty({ description: "VideoType identifier", nullable: false })
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id!: number;

  @ApiProperty({ description: "Video type", nullable: false })
  @Column({
    type: "enum",
    enum: EVideoTypes,
    default: EVideoTypes.MP4,
  })
  videoType!: EVideoTypes;
}
