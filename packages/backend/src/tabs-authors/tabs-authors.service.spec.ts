import { Test, TestingModule } from "@nestjs/testing";
import { TabsAuthorsService } from "./tabs-authors.service";

describe("TabsAuthorsService", () => {
  let service: TabsAuthorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabsAuthorsService],
    }).compile();

    service = module.get<TabsAuthorsService>(TabsAuthorsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
