import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NotesModule } from "./notes/notes.module";
import { ModuleModule } from "./module/module.module";
import { ModuleAdvancedModule } from "./module-advanced/module-advanced.module";
import { ThemeModule } from "./theme/theme.module";
import { TabsAuthorsModule } from "./tabs-authors/tabs-authors.module";
import { VideoModule } from "./video/video.module";
import { TestModule } from "./test/test.module";
import { TestQuestionModule } from "./test-question/test-question.module";
import { TestAnswerModule } from "./test-answer/test-answer.module";

@Module({
  imports: [
    NotesModule,
    ModuleModule,
    ModuleAdvancedModule,
    ThemeModule,
    TabsAuthorsModule,
    VideoModule,
    TestModule,
    TestQuestionModule,
    TestAnswerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
