import { ApiProperty } from "@nestjs/swagger";
import { EEntityType, EEntityState } from "@app/enums";
import type { IModule } from "share/types/interfaces";
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

  @ApiProperty({ description: "Source path", nullable: true })
  @Column({
    length: 700,
  })
  path: string;

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
    default: EEntityState.Active,
  })
  state: EEntityState;

  constructor(
    path = "",
    alt = "",
    header = "",
    title = "",
    duration = "",
    footer = ""
  ) {
    this.type = EEntityType.Modules;
    this.path = path;
    this.alt = alt;
    this.header = header;
    this.title = title;
    this.duration = duration;
    this.footer = footer;
    this.state = EEntityState.Active;
  }
}
