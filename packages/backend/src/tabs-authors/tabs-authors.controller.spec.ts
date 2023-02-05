import { Test, TestingModule } from "@nestjs/testing";
import { TabsAuthorsController } from "./tabs-authors.controller";
import { TabsAuthorsService } from "./tabs-authors.service";

describe("TabsAuthorsController", () => {
  let controller: TabsAuthorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabsAuthorsController],
      providers: [TabsAuthorsService],
    }).compile();

    controller = module.get<TabsAuthorsController>(TabsAuthorsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
