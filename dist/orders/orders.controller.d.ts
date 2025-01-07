import { OrdersService } from './orders.service';
import { CreateOrderInput } from './inputs/create.order.input';
import { OrderEntity } from './dto/order.entity';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getOrders(): Promise<OrderEntity[]>;
    getOrderById(id: string): Promise<OrderEntity>;
    createOrder(order: CreateOrderInput): Promise<OrderEntity>;
}
