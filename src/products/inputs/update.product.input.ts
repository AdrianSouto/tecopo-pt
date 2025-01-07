import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class UpdateProductInput {
  @ApiProperty({required: false})
  @IsString()
  name?: string;

  @ApiProperty({required: false})
  @IsString()
  description?: string;

  @ApiProperty({required: false})
  @IsNumber()
  @IsPositive()
  price?: number;

  @ApiProperty({required: false})
  @IsNumber()
  @IsPositive()
  stock?: number;

  @ApiProperty({required: false})
  @IsString()
  category?: string;
}