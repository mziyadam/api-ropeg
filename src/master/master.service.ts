import { Injectable } from '@nestjs/common';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,Equal } from 'typeorm';
import { Pegawai } from 'src/pegawai/entities/pegawai.entity';

@Injectable()
export class MasterService {
  constructor(
    @InjectRepository(Pegawai)
    private pegawaiRepository: Repository<Pegawai>,
  ) { }
  
  async getSatker(){
    return await this.pegawaiRepository.query("select * from tm_satuan_kerja");
  }

  async getJabatan(){
    return await this.pegawaiRepository.query("select * from tm_jabatan");
  }

  async getLevelJabatan(){
    return await this.pegawaiRepository.query("select * from tm_level_jabatan");
  }
  
  async getPangkat(){
    return await this.pegawaiRepository.query("select * from tm_pangkat");
  }
  
  
  async findOneSatker(query: string): Promise<any[]> {
    // return [kode_satker_awal];
    return await this.pegawaiRepository.query("select top 25 KODE_SATUAN_KERJA,SATUAN_KERJA from TM_SATUAN_KERJA where SATUAN_KERJA like '%'+@0+'%'", [query]);
  }
  
  create(createMasterDto: CreateMasterDto) {
    return 'This action adds a new master';
  }

  findAll() {
    return `This action returns all master`;
  }

  findOne(id: number) {
    return `This action returns a #${id} master`;
  }

  update(id: number, updateMasterDto: UpdateMasterDto) {
    return `This action updates a #${id} master`;
  }

  remove(id: number) {
    return `This action removes a #${id} master`;
  }
}
