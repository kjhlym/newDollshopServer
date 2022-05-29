import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UserorderModule } from './userorder/userorder.module';
import { CartModule } from './cart/cart.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NonuserOrderModule } from './nonuser-order/nonuser-order.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ProductModule,
    UserorderModule,
    CartModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '6371',
      database: 'dollshop',
      entities: ['dist/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),
    NonuserOrderModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
