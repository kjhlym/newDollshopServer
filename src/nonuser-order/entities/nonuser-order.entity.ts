import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// @Entity('User', { schema: 'dollshop' })에서 아래로 변경

@Entity('Nonuser_Order')
export class Nonuser_Order extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' }) id: number;
  @Column('int', { name: 'order_number' }) order_number: number;
  @Column('date', { name: 'order_date' }) order_date: string;

  @Column('varchar', { name: 'address1', length: 50 }) user_address1: string;
  //  주소
  @Column('varchar', { name: 'address2', length: 50 }) user_address2: string;
  // 상세주소
  @Column('varchar', { name: 'address3', length: 50 }) user_address3: string;
  @Column('varchar', { name: 'receiver_name', length: 50 }) receiver_name:
    | string;
  @Column('varchar', { name: 'receiver_phone', length: 50 }) receiver_phone:
    | string;
  nonuserorder_detail: any;
}
