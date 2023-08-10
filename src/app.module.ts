import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { PegawaiModule } from './pegawai/pegawai.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '10.1.7.82',
      port: 1433,
      username: 'sa',
      password: 'P@ssw0rd1',
      database: 'simpeg41',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      extra:{
        trustServerCertificate:true
      }
      //synchronize: true,//only for development
    }),
    PegawaiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource){}
}
