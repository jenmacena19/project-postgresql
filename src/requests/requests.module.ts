import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from 'src/typeorm';
import { RequestController } from './controllers/requests/request.controller';
import { RequestService } from './services/request.service';


@Module({
  imports: [TypeOrmModule.forFeature([Request])],
  controllers: [RequestController],
  providers: [RequestService]
})
export class RequestModule {}
