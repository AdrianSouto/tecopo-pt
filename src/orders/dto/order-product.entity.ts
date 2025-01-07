import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderEntity } from './order.entity';
import { ProductEntity } from '../../products/dto/product.entity';

@Entity({ name: 'order_product' })
export class OrderProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  quantity: number;

  @ManyToOne(() => OrderEntity, order => order.products)
  order: OrderEntity;

  @ManyToOne(() => ProductEntity, product => product.orderProducts)
  product: ProductEntity;
}