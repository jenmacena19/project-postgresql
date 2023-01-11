import { Module } from '@nestjs/common';
import { AgenteLocal } from 'src/typeorm';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([AgenteLocal])],
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule {}
