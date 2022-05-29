import { Userorder_detail } from './userorder_detail.entity';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

// @Entity('User', { schema: 'dollshop' })에서 아래로 변경
@Entity('Userorder_refund')
export class Userorder_refund extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' }) id: number;
  @Column('int', { name: 'refund_number' }) refund_number: number;
  @Column('int', { name: 'refund_detail_number' }) refund_detail_number: number;

  @Column('varchar', { name: 'refund_reason', length: 30 })
  refund_reason: string;
  @Column('varchar', { name: 'user_email', length: 50 }) user_email: string;
  @ManyToOne(
    (type) => Userorder_detail,
    (userorder_detail) => userorder_detail.Userorder_refund,
  )
  userorder_detail: Userorder_detail;

  // @ManyToOne((type) => User, (user) => user.User_order)
  // user: User;

  //   (alias) ManyToOne<unknown>(typeFunctionOrTarget: string | ((type?: any) => ObjectType<unknown>), inverseSide?: string | ((object: unknown) => any), options?: RelationOptions): PropertyDecorator (+1 overload)
  // import ManyToOne
}
