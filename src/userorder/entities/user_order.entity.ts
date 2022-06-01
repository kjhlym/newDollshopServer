import { User } from 'src/users/entities/users.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
// @Entity('User', { schema: 'dollshop' })에서 아래로 변경
@Entity('User_order')
export class User_order extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'order_number' })
  order_number: number;

  @Column('varchar', { name: 'user_id', length: 30 })
  user_id: string;

  @Column('date', { name: 'order_date' })
  order_date: string;

  @Column('varchar', { name: 'address1', length: 50 })
  user_address1: string;
  //  주소
  @Column('varchar', { name: 'address2', length: 50 })
  user_address2: string;
  // 상세주소
  @Column('varchar', { name: 'address3', length: 50 })
  user_address3: string;

  @Column('varchar', { name: 'receiver_name', length: 50 })
  receiver_name: string;

  @Column('varchar', { name: 'receiver_phone', length: 50 })
  receiver_phone: string;

  @ManyToOne(() => User, (user) => user.User_order)
  user: User;
}
