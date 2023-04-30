import { IAuthor } from "@app/interfaces";

export class CreateVideoDto {
  title!: string;
  authors!: Array<IAuthor>;
}
