import { EEntityState } from "@app/enums";

export class CreateModuleDto {
  path!: string;
  alt!: string;
  header!: string;
  state!: EEntityState;
  //title!: string;
  //duration!: string;
  //footer!: string;
}
