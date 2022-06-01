import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { User_order } from './user_order.entity';
// @Entity('User', { schema: 'dollshop' })에서 아래로 변경
@Entity('Userorder_detail')
export class Userorder_detail extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;
  @Column('int', { name: 'order_detail_number' })
  order_detail_number;
  @Column('int', { name: 'order_number' })
  order_number;
  @Column('int', { name: 'product_number' })
  product_number;
  @Column('int', { name: 'product_count' })
  product_count;
  @Column('int', { name: 'product_price' })
  product_price: any;

  @Column('varchar', { name: 'order_detail_status', length: 10 })
  order_detail_status: string;
  @Column('varchar', { name: 'return_check', length: 1 }) return_check: any;
  Userorder_refund: any;
  @ManyToOne(() => User_order, (user_order) => user_order.order_number)
  user_order: User_order;
}
//   @ManyToOne(
//     (type) => User_order,
//     (userorder_detail) => userorder_detail.Userorder_refund,
//   )
// }
