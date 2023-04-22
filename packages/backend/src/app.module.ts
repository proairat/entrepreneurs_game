import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NotesModule } from "./notes/notes.module";
import { ModulesModule } from "./modules/modules.module";
import { ModuleAdvancedModule } from "./module-advanced/module-advanced.module";
import { ThemeModule } from "./theme/theme.module";
import { TabsAuthorsModule } from "./tabs-authors/tabs-authors.module";
import { VideosModule } from "./videos/videos.module";
import { TestModule } from "./test/test.module";
import { TestQuestionModule } from "./test-question/test-question.module";
import { TestAnswerModule } from "./test-answer/test-answer.module";
import { VideoTypesSeeder } from "./videos/seeders/videoTypesSeeder";
import { VideoTypes } from "./videos/entities/videoTypes.entity";

@Module({
  imports: [
    NotesModule,
    ModulesModule,
    ModuleAdvancedModule,
    ThemeModule,
    TabsAuthorsModule,
    VideosModule,
    TestModule,
    TestQuestionModule,
    TestAnswerModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password:
        "38A=96B90E695C406566083C91FAsdf107C!+E238_F00A7927D38730780D36639A75164E62",
      database: "gpfed_database",
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([VideoTypes]),
  ],
  controllers: [AppController],
  providers: [AppService, VideoTypesSeeder],
})
export class AppModule {
  constructor(private readonly videoTypesSeeder: VideoTypesSeeder) {}

  async onApplicationBootstrap() {
    await this.videoTypesSeeder.seed();
  }
}
