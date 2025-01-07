import { UserEntity } from '../../users/dto/user.entity';
import { OrderProductEntity } from './order-product.entity';
export declare class OrderEntity {
    id: string;
    user: UserEntity;
    products: OrderProductEntity[];
    total: number;
    createdAt: Date;
}
