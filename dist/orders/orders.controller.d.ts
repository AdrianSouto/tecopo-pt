import { OrdersService } from './orders.service';
import { CreateOrderInput } from './inputs/create.order.input';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getOrders(): Promise<import("./dto/order.entity").OrderEntity[]>;
    getOrderById(id: string): Promise<import("./dto/order.entity").OrderEntity>;
    createOrder(order: CreateOrderInput): Promise<import("./dto/order.entity").OrderEntity>;
}
