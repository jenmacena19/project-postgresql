import { Test, TestingModule } from '@nestjs/testing';
import { AuthoriController } from './authorization.controller';

describe('AuthoriController', () => {
  let controller: AuthoriController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthoriController],
    }).compile();

    controller = module.get<AuthoriController>(AuthoriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
