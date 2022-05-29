import { Injectable } from '@nestjs/common';
import { CreateNonuserOrderDto } from './dto/create-nonuser-order.dto';
import { UpdateNonuserOrderDto } from './dto/update-nonuser-order.dto';

@Injectable()
export class NonuserOrderService {
  create(createNonuserOrderDto: CreateNonuserOrderDto) {
    return 'This action adds a new nonuserOrder';
  }

  findAll() {
    return `This action returns all nonuserOrder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nonuserOrder`;
  }

  update(id: number, updateNonuserOrderDto: UpdateNonuserOrderDto) {
    return `This action updates a #${id} nonuserOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} nonuserOrder`;
  }
}
