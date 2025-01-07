import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductInput } from './inputs/create.product.input';
import { UpdateProductInput } from './inputs/update.product.input';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ProductsPagination } from './pagination/products.pagination';
import { Roles } from '../roles/decorators/roles.decorator';
import { Role } from '../roles/enums/role.enum';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}


  @Get()
  async getProducts(@Query() pagination: ProductsPagination) {
    return await this.productService.getProducts(pagination);
  }

  @Roles(Role.Admin)
  @Post()
  async createProduct(
    @Body() product: CreateProductInput
  ) {
    return await this.productService.createProduct(product);
  }

  @Roles(Role.Admin)
  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return await this.productService.getProductById(id);
  }

  @Roles(Role.Admin)
  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() product: UpdateProductInput
  ) {
    return await this.productService.updateProduct(id, product);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return await this.productService.deleteProduct(id);
  }
}
