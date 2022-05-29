import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
// @Entity('User', { schema: 'dollshop' })에서 아래로 변경
import { Product } from './product.entity';
@Entity('Product_reply')
export class Product_reply extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' }) id: number;
  @Column('int', { name: 'reply_number' }) reply_number: number;
  @Column('int', { name: 'product_number' })
  product_number: number;

  @Column('text', { name: 'content' }) content: string;

  @Column('varchar', { name: 'write_nickname' }) write_nickname: string;
  @Column('date', { name: 'reporting_date' }) reporting_date: string;

  @Column('int', { name: 'reply_origin_number' }) reply_origin_number: number;
  @Column('int', { name: 'reply_order' }) reply_order: number;
  @Column('int', { name: 'reply_depth' }) reply_depth: number;
  @ManyToOne((type) => Product, (product) => product.product_reply)
  product: Product;
}
