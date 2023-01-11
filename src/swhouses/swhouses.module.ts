import { Module } from '@nestjs/common';
import { AgenteLocal } from 'src/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwHouse } from 'src/typeorm/SwHouse.entity';
import { SwHouseController } from './controllers/swhouses/sofhouse.controller';
import { SwhouseService } from './services/softhous.service';


@Module({
  imports: [TypeOrmModule.forFeature([SwHouse])],
  controllers: [SwHouseController],
  providers: [SwhouseService]
})
export class SwHouseModule {}
