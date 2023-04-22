import { EEntityState } from "@app/enums";

export class CreateVideoDto {
  filename!: string;
  alt!: string;
  header!: string;
  state!: EEntityState;
}
