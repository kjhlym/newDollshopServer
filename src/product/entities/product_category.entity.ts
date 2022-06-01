import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// @Entity('User', { schema: 'dollshop' })에서 아래로 변경
@Entity('Product_category')
export class Product_category extends BaseEntity {
  [x: string]: any;
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;
  @Column('varchar', { name: 'category_code', length: 30 })
  category_code: string;
  @Column('varchar', { name: 'category_name', length: 50 })
  category_name: string;
  @Column('varchar', { name: 'category_ref_code', length: 30 })
  category_ref_code: string | null;
}
