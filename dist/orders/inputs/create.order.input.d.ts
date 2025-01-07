export declare class OrderProductInput {
    productId: string;
    quantity: number;
}
export declare class CreateOrderInput {
    userId: string;
    orderProducts: OrderProductInput[];
}
