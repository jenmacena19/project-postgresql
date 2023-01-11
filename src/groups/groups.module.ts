import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from 'src/typeorm/group.entity';
import { SwHouse } from 'src/typeorm/SwHouse.entity';
import { GroupsController } from './controllers/groups/groups.controller';
import { GroupsService } from './services/groups.service';


@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  controllers: [GroupsController],
  providers: [GroupsService]
})
export class GroupsModule {}
