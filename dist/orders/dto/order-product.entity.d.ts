import { OrderEntity } from './order.entity';
import { ProductEntity } from '../../products/dto/product.entity';
export declare class OrderProductEntity {
    id: string;
    quantity: number;
    order: OrderEntity;
    product: ProductEntity;
}
