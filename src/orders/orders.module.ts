import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from '../products/dto/product.entity';
import { OrderEntity } from './dto/order.entity';
import { UsersModule } from '../users/users.module';
import { ProductsService } from '../products/products.service';
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
