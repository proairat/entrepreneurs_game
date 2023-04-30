import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpStatus,
  ParseIntPipe,
} from "@nestjs/common";
import { NotesService } from "./notes.service";
import { CreateNoteDto } from "../dto/create-note.dto";
import { UpdateNoteDto } from "../dto/update-note.dto";
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Note } from "../entities/note.entity";

@ApiTags("Notes")
@Controller("notes")
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  // обработка POST http://localhost:3000/notes?userId={userId}
  @Post()
  @ApiOperation({ summary: "Creates a new note for the user" })
  @ApiQuery({ name: "userId", required: true, description: "User identifier" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Note })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: "Unauthorized" })
  create(
    @Query("userId", ParseIntPipe) userId: number,
    @Body() createNoteDto: CreateNoteDto
  ) {
    return this.notesService.create(userId, createNoteDto);
  }

  // обработка GET http://localhost:3000/notes?userId={userId}
  @Get()
  @ApiOperation({ summary: "Returns all available notes for the user" })
  @ApiQuery({ name: "userId", required: true, description: "User identifier" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Success",
    type: Note,
    isArray: true,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: "Unauthorized" })
  findAll(@Query("userId", ParseIntPipe) userId: number) {
    return this.notesService.findAll(userId);
  }

  // обработка GET http://localhost:3000/notes/{noteId}
  @Get(":noteId")
  @ApiOperation({ summary: "Returns a note with specified id" })
  @ApiParam({ name: "noteId", required: true, description: "Note identifier" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Note })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: "Unauthorized" })
  findOne(@Param("noteId", ParseIntPipe) noteId: number) {
    return this.notesService.findOne(noteId);
  }

  // обработка PATCH http://localhost:3000/notes/{noteId}
  @Patch(":noteId")
  @ApiOperation({ summary: "Updates a note with specified id" })
  @ApiParam({ name: "noteId", required: true, description: "Note identifier" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Note })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: "Unauthorized" })
  update(
    @Param("noteId", ParseIntPipe) noteId: number,
    @Body() updateNoteDto: UpdateNoteDto
  ) {
    return this.notesService.update(noteId, updateNoteDto);
  }

  // обработка DELETE http://localhost:3000/notes/{noteId}
  @Delete(":noteId")
  @ApiOperation({ summary: "Deletes a note with specified id" })
  @ApiParam({ name: "noteId", required: true, description: "Note identifier" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success" })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: "Unauthorized" })
  remove(@Param("noteId", ParseIntPipe) noteId: number) {
    return this.notesService.remove(noteId);
  }
}
