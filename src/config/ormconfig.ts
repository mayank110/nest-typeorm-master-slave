import { DataSourceOptions, DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { ConfigService, ConfigModule } from '@nestjs/config';
dotenv.config();

// export const dataSourceOptions = {
//   imports: [ConfigModule],
//   inject: [ConfigService],
//   useFactory: (configService: ConfigService): DataSourceOptions => {
//     const dynamicOptions: DataSourceOptions = {
//       type: 'postgres',
//       replication: {
//         master: {
//           host: configService.get<string>('WRITE_DB_HOST'),
//           port: +configService.get<number>('WRITE_DB_PORT'),
//           username: configService.get<string>('WRITE_DB_USERNAME'),
//           database: configService.get<string>('WRITE_DB_NAME'),
//         },
//         slaves :[{
//           host: configService.get<string>('READ_DB_HOST'),
//           port: +configService.get<number>('READ_DB_PORT'),
//           username: configService.get<string>('READ_DB_USERNAME'),
//           database: configService.get<string>('READ_DB_NAME'),
//         }]
//       },
//       entities: ['dist/**/**/*.entity.{ts,js}'],
//       synchronize: false,
//       logging: true,
//       migrations: ['dist/db/migrations/*{.ts,.js}'],
//       migrationsRun: true,
//     };
//     return dynamicOptions
//   },
// };

// const dataSource =  new DataSource(dataSourceOptions)

// export default dataSource
// dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  replication: {
    master: {
      host: process.env.WRITE_DB_HOST,
      port: +process.env.WRITE_DB_PORT,
      username: process.env.WRITE_DB_USERNAME,
      database: process.env.WRITE_DB_NAME,
    },
    slaves: [{
      host: process.env.READ_DB_HOST,
      port: +process.env.READ_DB_PORT,
      username: process.env.READ_DB_USERNAME,
      database: process.env.READ_DB_NAME,
    }]
  },
  entities: ['dist/**/**/*.entity.{ts,js}'],
  synchronize: false,
  logging: true,
  migrations: ['dist/db/migrations/*{.ts,.js}'],
  migrationsRun: true,
};
const dataSource = new DataSource(dataSourceOptions)
export default dataSource


// import { join } from 'path';



// export = [
//   {
//     //name: 'default',
//     type: 'postgres',
//     replication: {
//       master: {
//         host: process.env.WRITE_DB_HOST,
//         port: +process.env.WRITE_DB_PORT,
//         username: process.env.WRITE_DB_USERNAME,
//         database: process.env.WRITE_DB_NAME,
//       },
//       slaves: [{
//         host: process.env.READ_DB_HOST,
//         port: +process.env.READ_DB_PORT,
//         username: process.env.READ_DB_USERNAME,
//         database: process.env.READ_DB_NAME,
//       }]
//     },
//     // options: {
//     //   instanceName: process.env.DEFAULT_DB_INSTANCE,
//     //   enableArithAbort: false,
//     // },
//     logging: true,
//     // dropSchema: false,
//     synchronize: false,
//     migrationsRun: true,
//     migrations: [join(__dirname, '..', 'db/migration/*.{ts,js}')],
//     cli: {
//       migrationsDir: 'src/db/migration',
//     },
//     entities: [
//       join(__dirname, '..', 'entities/**/*.entity.{ts,js}'),
//     ],
//   } as TypeOrmModuleOptions,
//   // {
//   //   name: 'other',
//   //   type: 'mssql',
//   //   host: process.env.OTHER_DB_HOST,
//   //   username: process.env.OTHER_DB_USERNAME,
//   //   password: process.env.OTHER_DB_PASSWORD,
//   //   database: process.env.OTHER_DB_NAME,
//   //   options: {
//   //     instanceName: process.env.OTHER_DB_INSTANCE,
//   //     enableArithAbort: false,
//   //   },
//   //   logging: parseBoolean(process.env.OTHER_DB_LOGGING),
//   //   dropSchema: false,
//   //   synchronize: false,
//   //   migrationsRun: false,
//   //   entities: [],
//   // } as TypeOrmModuleOptions,
// ];