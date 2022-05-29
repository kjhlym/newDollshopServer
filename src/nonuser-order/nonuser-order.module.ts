import { Module } from '@nestjs/common';
import { NonuserOrderService } from './nonuser-order.service';
import { NonuserOrderController } from './nonuser-order.controller';

@Module({
  controllers: [NonuserOrderController],
  providers: [NonuserOrderService]
})
export class NonuserOrderModule {}
