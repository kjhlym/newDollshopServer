import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NonuserOrderService } from './nonuser-order.service';
import { CreateNonuserOrderDto } from './dto/create-nonuser-order.dto';
import { UpdateNonuserOrderDto } from './dto/update-nonuser-order.dto';

@Controller('nonuser-order')
export class NonuserOrderController {
  constructor(private readonly nonuserOrderService: NonuserOrderService) {}

  @Post()
  create(@Body() createNonuserOrderDto: CreateNonuserOrderDto) {
    return this.nonuserOrderService.create(createNonuserOrderDto);
  }

  @Get()
  findAll() {
    return this.nonuserOrderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nonuserOrderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNonuserOrderDto: UpdateNonuserOrderDto) {
    return this.nonuserOrderService.update(+id, updateNonuserOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nonuserOrderService.remove(+id);
  }
}
