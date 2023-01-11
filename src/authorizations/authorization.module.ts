import { Module } from '@nestjs/common';
import { AgenteLocal } from 'src/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Authorization } from 'src/typeorm/authorization.entity';
import { AuthoriController } from './controllers/authorizations/authorization.controller';
import { AuthorizationService } from './services/authorization.service';


@Module({
  imports: [TypeOrmModule.forFeature([Authorization])],
  controllers: [AuthoriController],
  providers: [AuthorizationService]
})
export class AuthorizationModule {}
