import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
// @Entity('User', { schema: 'dollshop' })에서 아래로 변경
import { NonuserOrder_detail } from './nonuserOrder-detail.entity';
@Entity('NonuserOrder_refund')
export class NonuserOrder_refund extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' }) id: number;
  @Column('int', { name: 'refund_number' }) refund_number: number;
  @Column('int', { name: 'refund_detail_number' }) refund_detail_number: number;

  @Column('varchar', { name: 'refund_reason', length: 30 })
  refund_reason: string;
  @Column('varchar', { name: 'user_email', length: 50 }) user_email: string;
  @ManyToOne(
    (type) => NonuserOrder_detail,
    (nonuserOrder_detail) => nonuserOrder_detail.nonuserOrder_detail,
  )
  nonuserOrder_detail: NonuserOrder_detail;
}
