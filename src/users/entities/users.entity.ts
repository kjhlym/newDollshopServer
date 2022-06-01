import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
// @Entity('User', { schema: 'dollshop' })에서 아래로 변경
@Entity()
@Unique(['user_id'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;
  @Column('varchar', { name: 'user_id', length: 30 })
  user_id: string;
  @Column('varchar', { name: 'user_pwd', length: 50 })
  user_pwd: string;
  @Column('varchar', { name: 'user_name', length: 20 })
  user_name: string;
  @Column('varchar', { name: 'user_phone', length: 20 })
  user_phone: string;
  @Column('varchar', { name: 'user_email', length: 50 })
  user_email: string;
  @Column('varchar', { name: 'user_nickname', length: 20 })
  user_nickname: string;
  @Column('varchar', { name: 'user_profile', length: 100 })
  user_profile: string;
  @Column('varchar', { name: 'user_check', length: 1 })
  user_check: string;
  @Column('int', { name: 'user_role' })
  user_role: number;
  @Column('varchar', { name: 'user_grade' })
  user_grade: string;
  @Column('date', { name: 'user_insertDate' })
  user_insertDate: string;
  Deliver_address: any;
  User_order: any;
}

//   ('varchar', { name: 'user_id', length: 30 }) user_id: string;
//   ('varchar', { name: 'user_pwd', length: 50 }) user_pwd: string;
//   ('varchar', { name: 'user_name', length: 20 }) user_name: string;
//   ('varchar', { name: 'user_phone', length: 20 }) user_phone: string;
//   ('varchar', { name: 'user_email', length: 50 }) user_email: string;
//   ('varchar', { name: 'user_nickname', length: 20 })
//   user_nickname: string;
//   ('varchar', { name: 'user_profile', length: 100 })
//   user_profile: string;
//  ('varchar', { name: 'user_check', length: 1 })
//   user_check: string;
//  ('int', { name: 'user_role' })
//   user_role: number;
//  ('varchar', { name: 'user_grade' })
//   user_grade: string;
//  ('date', { name: 'user_insertDate' }
