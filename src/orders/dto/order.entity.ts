import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../users/dto/user.entity';
import { OrderProductEntity } from './order-product.entity';

@Entity({ name: 'order' })
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  @Index()
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.orders)
  user: UserEntity;

  @OneToMany(() => OrderProductEntity, orderProduct => orderProduct.order)
  products: OrderProductEntity[];

  @Column('integer')
  total: number;

  @CreateDateColumn()
  createdAt: Date;
}