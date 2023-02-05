import { ApiProperty } from "@nestjs/swagger";
import { EEntityType, EEntityState } from "share/types/enums";
import type { IModule } from "share/types/interfaces";
/**
 * interface IModule {
 * id: number;
 * type: EEntityType.Modules;
 * src: string;
 * alt: string;
 * header: string;
 * title: string;
 * duration: string;
 * footer: string;
 * state: EEntityState;
}
*/

// export class Module implements IModule {
export class Module {
  /*readonly type!: EEntityType.Modules;
  src: string;
  alt: string;
  header: string;
  title: string;
  duration: string;
  footer: string;
  state: EEntityState;
  readonly id: any;*/
  /*
  @ApiProperty({ description: 'Module identifier', nullable: false })
  readonly id: number;

  @ApiProperty({ description: 'Type', nullable: true })
  readonly type: number;

  @ApiProperty({ description: 'Source path', nullable: true })
  readonly src: string;

  @ApiProperty({ description: 'Alternative text for images', nullable: true })
  readonly alt: string;

  @ApiProperty({ description: 'Source path', nullable: true })
  readonly header: string;

  @ApiProperty({ description: 'Alternative text for images', nullable: true })
  readonly title: string;

  @ApiProperty({ description: 'Source path', nullable: true })
  readonly duration: string;

  @ApiProperty({ description: 'Alternative text for images', nullable: true })
  readonly footer: string;

  @ApiProperty({ description: 'Alternative text for images', nullable: true })
  readonly state: string;

  constructor(id: number, userId: number, title = '', content = '') {
    this.id = id;
    this.type = type;
    this.src = src;
    this.alt = alt;
    this.header = header;
    this.title = title;
    this.duration = duration;
    this.footer = footer;
    this.state = state;
  }*/
}
