import { ApiProperty } from "@nestjs/swagger";
import { EEntityType } from "@app/enums";
import type { IVideoDB } from "share/types/interfaces";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Videos implements IVideoDB {
  @ApiProperty({ description: "Video identifier", nullable: false })
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id!: number;

  @ApiProperty({ description: "Type of entity", nullable: true })
  @Column({
    type: "enum",
    enum: EEntityType,
    default: EEntityType.Videos,
  })
  type: EEntityType.Videos;

  @ApiProperty({ description: "Filename", nullable: true })
  @Column({
    length: 700,
  })
  filename: string;

  @ApiProperty({ description: "Poster for video", nullable: true })
  @Column()
  poster: string;

  @ApiProperty({
    description: "Duration of video of module",
    nullable: true,
  })
  @Column()
  duration: number;

  @ApiProperty({ description: "Title of video", nullable: true })
  @Column()
  title: string;

  @ApiProperty({ description: "Description of video", nullable: true })
  @Column()
  description: string;

  constructor(
    filename = "",
    poster = "",
    duration = 0,
    title = "",
    description = ""
  ) {
    this.type = EEntityType.Videos;
    this.filename = filename;
    this.poster = poster;
    this.duration = duration;
    this.title = title;
    this.description = description;
  }
}
