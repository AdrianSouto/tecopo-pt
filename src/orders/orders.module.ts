import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './dto/order.entity';
import { UsersModule } from '../users/users.module';
import { ProductsModule } from '../products/products.module';
import { OrderProductEntity } from './dto/order-product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity, OrderProductEntity]),
    UsersModule,
    ProductsModule
  ],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
