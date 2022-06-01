import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './users.entity';
// @Entity('User', { schema: 'dollshop' })에서 아래로 변경
@Entity('Deliver_address')
export class Deliver_address extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;
  @Column('varchar', { name: 'user_id', length: 20 })
  user_id: string | null;
  //우편번호
  @Column('varchar', { name: 'user_address1', length: 50 })
  user_address1: string;
  //  주소
  @Column('varchar', { name: 'user_address2', length: 50 })
  user_address2: string;
  // 상세주소
  @Column('varchar', { name: 'user_address3', length: 50 })
  user_address3: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne((type) => User, (user) => user.Deliver_address)
  user: User;
}
