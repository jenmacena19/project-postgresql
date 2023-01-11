import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import entities from './typeorm';
import { ResponseModule } from './responses/response.module';
import { RequestModule } from './requests/requests.module';
import { DevicesModule } from './devices/devices.module';
import { GroupsModule } from './groups/groups.module';
import { SwHouseModule } from './swhouses/swhouses.module';
import { AuthorizationModule } from './authorizations/authorization.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    CustomersModule, 
    ResponseModule,
    RequestModule,
    DevicesModule,
    GroupsModule,
    SwHouseModule,
    AuthorizationModule
   ],
  controllers: [],
  providers: [],
})
export class AppModule {}