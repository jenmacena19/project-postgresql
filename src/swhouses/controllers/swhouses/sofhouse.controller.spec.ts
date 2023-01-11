import { Test, TestingModule } from '@nestjs/testing';
import { SwHouseController } from './sofhouse.controller';

describe('SwHouseController', () => {
  let controller: SwHouseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SwHouseController],
    }).compile();

    controller = module.get<SwHouseController>(SwHouseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
