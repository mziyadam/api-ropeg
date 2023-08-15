import { Module } from '@nestjs/common';
import { MasterService } from './master.service';
import { MasterController } from './master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pegawai } from 'src/pegawai/entities/pegawai.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Pegawai])],
  controllers: [MasterController],
  providers: [MasterService],
})
export class MasterModule {}
