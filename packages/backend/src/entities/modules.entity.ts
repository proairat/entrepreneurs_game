import { ApiProperty } from "@nestjs/swagger";
import { EEntityState, EEntityType } from "@app/types/enums";
import type { IModule } from "@app/types/interfaces";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Modules implements IModule {
  @ApiProperty({ description: "Module identifier", nullable: false })
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id!: number;

  @ApiProperty({ description: "Type of entity", nullable: true })
  @Column({
    type: "enum",
    enum: EEntityType,
    default: EEntityType.Modules,
  })
  type: EEntityType.Modules;

  @ApiProperty({ description: "Filename", nullable: true })
  @Column({
    length: 700,
  })
  filename: string;

  @ApiProperty({ description: "Alternative text for images", nullable: true })
  @Column()
  alt: string;

  @ApiProperty({ description: "Header", nullable: true })
  @Column({})
  header: string;

  @ApiProperty({ description: "Title", nullable: true })
  @Column()
  title: string;

  @ApiProperty({
    description: "Duration of video clip of module",
    nullable: true,
  })
  @Column()
  duration: string;

  @ApiProperty({ description: "Footer", nullable: true })
  @Column()
  footer: string;

  @ApiProperty({ description: "State", nullable: true })
  @Column({
    type: "enum",
    enum: EEntityState,
    default: EEntityState.Default,
  })
  state: EEntityState;

  constructor(
    filename = "",
    alt = "",
    header = "",
    title = "",
    duration = "",
    footer = ""
  ) {
    this.type = EEntityType.Modules;
    this.filename = filename;
    this.alt = alt;
    this.header = header;
    this.title = title;
    this.duration = duration;
    this.footer = footer;
    this.state = EEntityState.Default;
  }
}
