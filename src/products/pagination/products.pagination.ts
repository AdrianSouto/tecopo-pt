import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class ProductsPagination{
  @IsOptional()
  @IsString()
  category: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  lowerLimit: number

  @IsNumber()
  @IsPositive()
  @IsOptional()
  upperLimit: number
}