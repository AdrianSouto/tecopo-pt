import { ProductsService } from './products.service';
import { CreateProductInput } from './inputs/create.product.input';
import { UpdateProductInput } from './inputs/update.product.input';
import { ProductsPagination } from './pagination/products.pagination';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    getProducts(pagination: ProductsPagination): Promise<import("./dto/product.entity").ProductEntity[]>;
    createProduct(product: CreateProductInput): Promise<import("./dto/product.entity").ProductEntity>;
    getProductById(id: string): Promise<import("./dto/product.entity").ProductEntity>;
    updateProduct(id: string, product: UpdateProductInput): Promise<import("typeorm").UpdateResult>;
    deleteProduct(id: string): Promise<import("typeorm").DeleteResult>;
}
