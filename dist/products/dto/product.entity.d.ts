import { OrderProductEntity } from '../../orders/dto/order-product.entity';
export declare class ProductEntity {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    orderProducts: OrderProductEntity[];
}
