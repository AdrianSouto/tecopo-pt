"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./dto/order.entity");
const users_service_1 = require("../users/users.service");
const products_service_1 = require("../products/products.service");
const order_product_entity_1 = require("./dto/order-product.entity");
let OrdersService = class OrdersService {
    constructor(orderRepository, usersService, productsService, orderProductRepository) {
        this.orderRepository = orderRepository;
        this.usersService = usersService;
        this.productsService = productsService;
        this.orderProductRepository = orderProductRepository;
    }
    async getOrders() {
        return this.orderRepository.find({
            relations: ['user', 'products', 'products.product'],
        });
    }
    async getOrderById(id) {
        return this.orderRepository.findOne({
            where: { id },
            relations: ['user', 'orderProducts', 'orderProducts.product'],
        });
    }
    async createOrder(order) {
        const { userId, orderProducts } = order;
        const user = await this.usersService.getUserById(userId);
        const newOrder = this.orderRepository.create({
            user: user,
            total: 0
        });
        await this.orderRepository.save(newOrder);
        let total = 0;
        for (const orderProduct of orderProducts) {
            const product = await this.productsService.getProductById(orderProduct.productId);
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
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.OrderEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(order_product_entity_1.OrderProductEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        products_service_1.ProductsService,
        typeorm_2.Repository])
], OrdersService);
//# sourceMappingURL=orders.service.js.map