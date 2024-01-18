import * as dotenv from 'dotenv';
dotenv.config();

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import config from './config/database';
import { dataSourceOptions } from './config/ormconfig';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true,
      load: [config]
    }),
    // TypeOrmModule.forRoot(dataSourceOptions),
    // TypeOrmModule.forRootAsync(typeOrmModuleOptions),
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}