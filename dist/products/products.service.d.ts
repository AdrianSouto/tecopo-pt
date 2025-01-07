import { ProductEntity } from './dto/product.entity';
import { Repository } from 'typeorm';
import { CreateProductInput } from './inputs/create.product.input';
import { UpdateProductInput } from './inputs/update.product.input';
import { ProductsPagination } from './pagination/products.pagination';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: Repository<ProductEntity>);
    getProducts({ category, lowerLimit, upperLimit }: ProductsPagination): Promise<ProductEntity[]>;
    createProduct(product: CreateProductInput): Promise<ProductEntity>;
    getProductById(id: string): Promise<ProductEntity>;
    updateProduct(id: string, product: UpdateProductInput): Promise<import("typeorm").UpdateResult>;
    deleteProduct(id: string): Promise<import("typeorm").DeleteResult>;
    getProductsByIds(ids: string[]): Promise<ProductEntity[]>;
}
