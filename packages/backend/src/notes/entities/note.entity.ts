import { ApiProperty } from "@nestjs/swagger";

export class Note {
  @ApiProperty({ description: "Note identifier", nullable: false })
  readonly id: number;

  @ApiProperty({ description: "User identifier", nullable: true })
  readonly userId: number;

  @ApiProperty({ description: "Note title", nullable: true })
  readonly title: string;

  @ApiProperty({ description: "Note content", nullable: true })
  readonly content: string;

  constructor(id: number, userId: number, title = "", content = "") {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.content = content;
  }
}
