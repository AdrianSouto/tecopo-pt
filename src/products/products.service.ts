import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './dto/product.entity';
import { Between, In, Repository } from 'typeorm';
import { CreateProductInput } from './inputs/create.product.input';
import { UpdateProductInput } from './inputs/update.product.input';
import { ProductsPagination } from './pagination/products.pagination';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>) {
  }

  async getProducts({category, lowerLimit = 0, upperLimit = Number.MAX_VALUE}: ProductsPagination){
    return this.productRepository.find({
      where: {
        category,
        price: Between(lowerLimit, upperLimit)
      }
    });
  }

  async createProduct(product: CreateProductInput) {
    const newProduct = this.productRepository.create(product);
    return this.productRepository.save(newProduct);
  }

  async getProductById(id: string) {
    return this.productRepository.findOneBy({ id });
  }

  async updateProduct(id: string, product: UpdateProductInput) {
    return this.productRepository.update(id, product);
  }

  async deleteProduct(id: string) {
    return this.productRepository.delete(id);
  }

  async getProductsByIds(ids: string[]) {
    return this.productRepository.findBy({ id: In(ids) });
  }
}
