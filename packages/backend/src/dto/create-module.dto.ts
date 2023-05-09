import { EEntityState } from "@app/types/enums";

export class CreateModuleDto {
  filename!: string;
  alt!: string;
  header!: string;
  state!: EEntityState;
  //title!: string;
  //duration!: string;
  //footer!: string;
}
