import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { IntegerType } from 'typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    console.log(this.configService.get<IntegerType>('port'))
    console.log(process.env.WRITE_DB_HOST)
    return {
      type: 'postgres',
      replication: {
        master: {
          host: this.configService.get<string>('WRITE_DB_HOST'),
          port: +this.configService.get<number>('WRITE_DB_PORT'),
          username: this.configService.get<string>('WRITE_DB_USERNAME'),
          database: this.configService.get<string>('WRITE_DB_NAME'),
        },
        slaves :[{
          host: this.configService.get<string>('READ_DB_HOST'),
          port: +this.configService.get<number>('READ_DB_PORT'),
          username: this.configService.get<string>('READ_DB_USERNAME'),
          database: this.configService.get<string>('READ_DB_NAME'),
        }]
      },
      entities: ['dist/**/**/*.entity.{ts,js}'],
      synchronize: false,
      logging: true,
      migrations: ['dist/db/migrations/*{.ts,.js}'],
      migrationsRun: true,
    };
  }
}