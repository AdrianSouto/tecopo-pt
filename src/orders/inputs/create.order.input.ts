import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';
export class OrderProductInput{
  @ApiProperty({description: "Producto de la orden"})
  @IsString()
  productId: string;

  @ApiProperty({description: "Cantidad de productos", type: "number"})
  @IsNumber()
  @IsPositive()
  quantity: number;
}

export class CreateOrderInput{

  @ApiProperty({description: "ID del usuario que hace la orden"})
  @IsString()
  userId: string;

  @ApiProperty({description: "Listado de los ID de los productos de la orden", type: [OrderProductInput]})
  orderProducts: OrderProductInput[];

}

