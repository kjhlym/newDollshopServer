import { Test, TestingModule } from '@nestjs/testing';
import { NonuserOrderService } from './nonuser-order.service';

describe('NonuserOrderService', () => {
  let service: NonuserOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NonuserOrderService],
    }).compile();

    service = module.get<NonuserOrderService>(NonuserOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
