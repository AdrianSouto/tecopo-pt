import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../products/dto/product.entity';
import { Repository } from 'typeorm';
import { OrderEntity } from './dto/order.entity';
import { CreateOrderInput } from './inputs/create.order.input';
import { UsersService } from '../users/users.service';
import { ProductsService } from '../products/products.service';
import { OrderProductEntity } from './dto/order-product.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
    private usersService: UsersService,
    private productsService: ProductsService,
    @InjectRepository(OrderProductEntity)
    private readonly orderProductRepository: Repository<OrderProductEntity>,
  ) {}

  async getOrders() {
    return this.orderRepository.find({
      relations: ['user', 'products', 'products.product'],
    });
  }

  async getOrderById(id: string) {
    return this.orderRepository.findOne({
      where: { id },
      relations: ['user', 'orderProducts', 'orderProducts.product'],
    });
  }

  async createOrder(order: CreateOrderInput) {
    const { userId, orderProducts } = order;
    const user = await this.usersService.getUserById(userId);

    const newOrder = this.orderRepository.create({
      user: user,
      total: 0
    });
    await this.orderRepository.save(newOrder);
    let total = 0;
    for (const orderProduct of orderProducts) {
      const product: ProductEntity = await this.productsService.getProductById(orderProduct.productId);
      const createdOrderProductRow = this.orderProductRepository.create({
        order: newOrder,
        product: product,
        quantity: orderProduct.quantity,
      });
      await this.orderProductRepository.save(createdOrderProductRow);
      total += product.price * orderProduct.quantity;
    }
    newOrder.total = total;
    return this.orderRepository.save(newOrder);
  }
}
