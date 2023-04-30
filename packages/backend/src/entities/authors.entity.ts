import { ApiProperty } from "@nestjs/swagger";
import type { IAuthor } from "share/types/interfaces";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Videos } from "./videos.entity";

@Entity()
export class Authors implements IAuthor {
  @ApiProperty({ description: "Identifier author", nullable: false })
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id!: number;

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
    this.surname = surname;
    this.name = name;
    this.patronymic = patronymic;
  }
}
