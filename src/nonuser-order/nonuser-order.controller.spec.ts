import { Test, TestingModule } from '@nestjs/testing';
import { NonuserOrderController } from './nonuser-order.controller';
import { NonuserOrderService } from './nonuser-order.service';

describe('NonuserOrderController', () => {
  let controller: NonuserOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NonuserOrderController],
      providers: [NonuserOrderService],
    }).compile();

    controller = module.get<NonuserOrderController>(NonuserOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
