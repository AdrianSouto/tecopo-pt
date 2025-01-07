import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [UsersModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const options: TypeOrmModuleOptions = {
          type: 'postgres',
          host: configService.get<string>('DB_HOST') || 'localhost',
          port: configService.get<number>('DB_PORT') || 5431,
          username: configService.get<string>('DB_USER') || 'postgres',
          password: configService.get<string>('DB_PASS') || 'postgres',
          database: configService.get<string>('DB_NAME') || 'tecopo',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
        };
        return options
      },
    }),
    ProductsModule,
    AuthModule,
    OrdersModule
  ],
})
export class AppModule {}
