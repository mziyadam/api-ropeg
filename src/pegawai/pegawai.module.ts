import { Module } from '@nestjs/common';
import { PegawaiService } from './pegawai.service';
import { PegawaiController } from './pegawai.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pegawai } from './entities/pegawai.entity';
import { PassportModule } from '@nestjs/passport';
import { BasicStrategy } from 'src/passport/basic.strategy';
import { AuthService } from 'src/passport/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pegawai]),PassportModule.register({defaultStrategy:'basic'})],
  controllers: [PegawaiController],
  providers: [PegawaiService,BasicStrategy,AuthService],
})
export class PegawaiModule {}
