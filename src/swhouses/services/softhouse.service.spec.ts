import { Test, TestingModule } from '@nestjs/testing';
import { SwhouseService } from 'src/swhouses/services/softhous.service';

describe('SwhouseService', () => {
  let service: SwhouseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SwhouseService],
    }).compile();

    service = module.get<SwhouseService>(SwhouseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
