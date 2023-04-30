import { ApiProperty } from "@nestjs/swagger";
import { EEntityType } from "@app/enums";
import type { IVideoDB } from "share/types/interfaces";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Authors } from "./authors.entity";

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

  @ApiProperty({ description: "Title of video", nullable: false })
  @Column()
  title: string;

  @ApiProperty({ description: "Description of video", nullable: true })
  @Column()
  description: string;

  @ManyToMany((type) => Authors, (authors) => authors.videos, {
    cascade: true,
  })
  @JoinTable({
    name: "videos_authors",
    joinColumn: {
      name: "videos_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "authors_id",
      referencedColumnName: "id",
    },
  })
  authors!: Authors[];

  constructor(title: string) {
    this.type = EEntityType.Videos;
    this.filename = "";
    this.poster = "";
    this.duration = 0;
    this.title = title;
    this.description = "";
  }
}
