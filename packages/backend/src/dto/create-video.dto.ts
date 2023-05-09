import { IAuthor } from "@app/types/interfaces";

export class CreateVideoDto {
  id!: number;
  title!: string;
  filename!: string;
  authors!: Array<IAuthor>;
}
