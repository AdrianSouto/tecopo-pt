import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderProductEntity } from '../../orders/dto/order-product.entity';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  @Index()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({type: "integer"})
  stock: number;

  @Column()
  category: string;

  @OneToMany(() => OrderProductEntity, orderProduct => orderProduct.product)
  orderProducts: OrderProductEntity[];
}