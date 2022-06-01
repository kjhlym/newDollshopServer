import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
// @Entity('User', { schema: 'dollshop' })에서 아래로 변
import { Product } from './product.entity';
@Entity('Product_imageFile')
export class Product_imageFile extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;
  @Column('int', { name: 'file_number' })
  file_number: number;
  @Column('int', { name: 'product_number' })
  product_number: number;
  @Column('varchar', { name: 'origin_file_name', length: 300 })
  origin_file_name: string;
  @Column('varchar', { name: 'stored_file_name', length: 300 })
  stored_file_name: string;
  @Column('varchar', { name: 'stored_thumbNail', length: 300 })
  stored_thumbNail: string;
  @Column('varchar', { name: 'delegate_thumbNail', length: 1 })
  delegate_thumbNail: string;
  @Column('int', { name: 'file_size' })
  file_size: number;
  @Column('date', { name: 'create_date' })
  create_date: string;
  @Column('int', { name: 'user_role' })
  user_role: number;
  @Column('varchar', { name: 'delete_check' })
  delete_check: string;
  @ManyToOne(() => Product, (product) => product.product_imageFile)
  product: Product;
}
