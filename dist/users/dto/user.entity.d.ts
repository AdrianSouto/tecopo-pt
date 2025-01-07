import { BaseEntity } from 'typeorm';
import { OrderEntity } from '../../orders/dto/order.entity';
export declare class UserEntity extends BaseEntity {
    id: string;
    name: string;
    email: string;
    password: string;
    orders?: OrderEntity[];
    isAdmin: boolean;
}
