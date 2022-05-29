import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product_category } from './product_category.entity';
// @Entity('User', { schema: 'dollshop' })에서 아래로 변경
@Entity('Product')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' }) id: number;
  @Column('int', { name: 'product_number' }) product_number: number;
  @Column('varchar', { name: 'category_code', length: 30 })
  category_code: string;

  @Column('varchar', { name: 'product_name', length: 50 }) product_name: string;

  @Column('int', { name: 'product_price' }) product_price: number;

  @Column('int', { name: 'product_stock' }) product_stock: number;
  @Column('text', { name: 'product_desc' }) product_desc: string;
  @Column('date', { name: 'product_date' }) product_date: string;
  @Column('int', { name: 'product_hits' }) product_hits: number;
  cart: any;
  @ManyToOne(
    (type) => Product_category,
    (Product_category) => Product_category.product,
  )
  product_category: Product_category;
  product_reply: any;
  product_imageFile: any;
  nonuserorder_detail: any;
}
