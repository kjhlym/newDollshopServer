import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
// @Entity('User', { schema: 'dollshop' })에서 아래로 변경
import { Nonuser_Order } from './nonuser-order.entity';
import { Product } from 'src/product/entities/product.entity';
@Entity('NonuserOrder_detail')
export class NonuserOrder_detail extends BaseEntity {
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
  product_price;

  @Column('varchar', { name: 'order_detail_status', length: 10 })
  order_detail_status: string;
  @Column('varchar', { name: 'return_check', length: 1 })
  return_check: any;
  @ManyToOne((type) => Product, (product) => product.nonuserorder_detail)
  product: Product;
  @ManyToOne(
    (type) => Nonuser_Order,
    (nonuser_order) => nonuser_order.nonuserorder_detail,
  )
  nonuser_order: Nonuser_Order;
  nonuserOrder_detail: any;
}
