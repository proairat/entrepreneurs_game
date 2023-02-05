import { Test, TestingModule } from "@nestjs/testing";
import { ModuleAdvancedController } from "./module-advanced.controller";
import { ModuleAdvancedService } from "./module-advanced.service";

describe("ModuleAdvancedController", () => {
  let controller: ModuleAdvancedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleAdvancedController],
      providers: [ModuleAdvancedService],
    }).compile();

    controller = module.get<ModuleAdvancedController>(ModuleAdvancedController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
