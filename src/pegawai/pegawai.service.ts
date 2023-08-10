import { Injectable } from '@nestjs/common';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';
import { UpdatePegawaiDto } from './dto/update-pegawai.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,Equal } from 'typeorm';
import { Pegawai } from './entities/pegawai.entity';

@Injectable()
export class PegawaiService {
  constructor(
    @InjectRepository(Pegawai)
    private pegawaiRepository: Repository<Pegawai>,
  ) { }

  create(createPegawaiDto: CreatePegawaiDto) {
    return 'This action adds a new pegawai';
  }

  findAll(query): Promise<Pegawai[]> {
    const satker = query.satker || null;
    const take = query.limit || 10;
    const page = query.page || 1;
    const skip = (page - 1) * take;
    if (satker != null)
      return this.pegawaiRepository.find({
        order: {
          NIP: "ASC",
        },
        where: {
          KODE_SATUAN_KERJA: satker
        },
        skip: skip,
        take: take
      });

    else
      return this.pegawaiRepository.find({
        order: {
          NIP: "ASC",
        },
        skip: skip,
        take: take
      });
  }

  findOne(nip: string): Promise<Pegawai> {
    return this.pegawaiRepository.findOne({
      where:{NIP_BARU:Equal(nip)}
    });
  }
  
  async findOnePendidikan(nip: string): Promise<any[]> {
    return await this.pegawaiRepository.query("exec get_pendidikan_by_nip_baru @0",[nip]);
  }

  async findOnePekerjaan(nip: string): Promise<any> {
    const pangkat=await this.pegawaiRepository.query("exec get_pangkat_by_nip_baru @0",[nip]); 
    const jabatan=await this.pegawaiRepository.query("exec get_jabatan_by_nip_baru @0",[nip]); 
    return {
      pangkat:pangkat,
      jabatan:jabatan
    };
  }

  update(id: number, updatePegawaiDto: UpdatePegawaiDto) {
    return `This action updates a #${id} pegawai`;
  }

  remove(id: number) {
    return `This action removes a #${id} pegawai`;
  }
}
