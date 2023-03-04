import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EEntityType } from "@app/enums";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: "enum",
    enum: EEntityType,
    default: EEntityType.Modules,
  })
  type!: EEntityType;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ default: true })
  isActive!: boolean;
}
