import { Module } from '@nestjs/common';
import { ResponseTime } from 'src/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponsesController } from './controllers/responses/response.controller';
import { ResponseService } from './services/responses/responses.service';


@Module({
  imports: [TypeOrmModule.forFeature([ResponseTime])],
  controllers: [ResponsesController],
  providers: [ResponseService]
})
export class ResponseModule {}
