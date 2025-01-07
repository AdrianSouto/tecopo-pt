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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductInput = exports.CreateOrderInput = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateOrderInput {
}
exports.CreateOrderInput = CreateOrderInput;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "ID del usuario que hace la orden" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Listado de los ID de los productos de la orden" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], CreateOrderInput.prototype, "orderProducts", void 0);
class OrderProductInput {
}
exports.OrderProductInput = OrderProductInput;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Producto de la orden" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderProductInput.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Cantidad de productos", type: "number" }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], OrderProductInput.prototype, "quantity", void 0);
//# sourceMappingURL=create.order.input.js.map