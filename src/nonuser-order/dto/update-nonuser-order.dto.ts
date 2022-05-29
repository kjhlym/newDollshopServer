import { PartialType } from '@nestjs/mapped-types';
import { CreateNonuserOrderDto } from './create-nonuser-order.dto';

export class UpdateNonuserOrderDto extends PartialType(CreateNonuserOrderDto) {}
