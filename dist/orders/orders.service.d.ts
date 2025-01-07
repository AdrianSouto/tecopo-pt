import { Repository } from 'typeorm';
import { OrderEntity } from './dto/order.entity';
import { CreateOrderInput } from './inputs/create.order.input';
import { UsersService } from '../users/users.service';
import { ProductsService } from '../products/products.service';
import { OrderProductEntity } from './dto/order-product.entity';
export declare class OrdersService {
    private readonly orderRepository;
    private usersService;
    private productsService;
    private readonly orderProductRepository;
    constructor(orderRepository: Repository<OrderEntity>, usersService: UsersService, productsService: ProductsService, orderProductRepository: Repository<OrderProductEntity>);
    getOrders(): Promise<OrderEntity[]>;
    getOrderById(id: string): Promise<OrderEntity>;
    createOrder(order: CreateOrderInput): Promise<OrderEntity>;
}
