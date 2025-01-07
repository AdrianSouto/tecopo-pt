import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './dto/product.entity';
import { RolesGuard } from '../roles/guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity])
  ],
  controllers: [ProductsController],
  providers: [ProductsService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },],
  exports: [ProductsService]
})
export class ProductsModule {}
