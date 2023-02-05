import { Test, TestingModule } from "@nestjs/testing";
import { ModuleAdvancedService } from "./module-advanced.service";

describe("ModuleAdvancedService", () => {
  let service: ModuleAdvancedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleAdvancedService],
    }).compile();

    service = module.get<ModuleAdvancedService>(ModuleAdvancedService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
