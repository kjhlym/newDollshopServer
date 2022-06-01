import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
// @Entity('User', { schema: 'dollshop' })에서 아래로 변경
import { Product } from 'src/product/entities/product.entity';
@Entity('Cart')
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' }) id: number;
  @Column('int', { name: 'cart_number' })
  cart_number: number;
  @Column('int', { name: 'product_number' })
  product_number: number;

  @Column('varchar', { name: 'cart_value', length: 30 })
  cart_value: string;
  @Column('int', { name: 'product_count' })
  product_count: number;
  @ManyToOne((type) => Product, (product) => product.cart)
  product: Product;
}
