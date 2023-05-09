import { ApiProperty } from "@nestjs/swagger";
import type { IAuthor } from "@app/types/interfaces";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Videos } from "./videos.entity";
import { EEntityType } from "@app/types/enums";

@Entity()
export class Authors implements IAuthor {
  @ApiProperty({ description: "Identifier author", nullable: false })
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id!: number;

  @ApiProperty({ description: "Type of entity", nullable: true })
  @Column({
    type: "enum",
    enum: EEntityType,
    default: EEntityType.TabsAuthors,
  })
  type: EEntityType.TabsAuthors;

  @ApiProperty({ description: "Surname author", nullable: false })
  @Column()
  surname: string;

  @ApiProperty({ description: "Name author", nullable: false })
  @Column()
  name: string;

  @ApiProperty({ description: "Patronymic author", nullable: false })
  @Column()
  patronymic: string;

  @ManyToMany((type) => Videos, (videos) => videos.authors, {
    //onDelete: 'CASCADE',
    //onUpdate: 'CASCADE'
  })
  videos!: Videos[];

  constructor(surname: string, name: string, patronymic: string) {
    this.type = EEntityType.TabsAuthors;
    this.surname = surname;
    this.name = name;
    this.patronymic = patronymic;
  }
}
