import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderInput } from './inputs/create.order.input';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { OrderEntity } from './dto/order.entity';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
  ) {}

  @Get()
  async getOrders() {
    return this.ordersService.getOrders();
  }
  @Get(':id')
  async getOrderById(@Param() id: string) {
    return this.ordersService.getOrderById(id);
  }

  @Post()
  @ApiBody({ type: CreateOrderInput })
  async createOrder(@Body() order: CreateOrderInput) {
    return this.ordersService.createOrder(order);
  }
}
