import { Injectable } from '@nestjs/common';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';
import { UpdatePegawaiDto } from './dto/update-pegawai.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal, Like, MoreThanOrEqual, Not } from 'typeorm';
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

  findAll(query, kode_satker_awal): Promise<Pegawai[]> {
    const satker = query.satker || null;
    const take = query.limit || 10;
    const page = query.page || 1;
    const skip = (page - 1) * take;
    if(kode_satker_awal=='0000'){
      if (satker != null) {
          return this.pegawaiRepository.find({
            order: {
              NIP: "ASC",
            },
            where: [
              {
                KODE_SATUAN_KERJA: satker
              }
              // ,{
              //   KODE_SATUAN_KERJA:Like(kode_satker_awal+'%')
              // }
            ],
            skip: skip,
            take: take
          });
      }
      else
        return this.pegawaiRepository.find({
          order: {
            NIP: "ASC",
          },
          skip: skip,
          take: take
        });
    }else{
      
    if (satker != null) {
      if (satker.substring(0, 4) == kode_satker_awal)
        return this.pegawaiRepository.find({
          order: {
            NIP: "ASC",
          },
          where: [
            {
              KODE_SATUAN_KERJA: satker
            }
            // ,{
            //   KODE_SATUAN_KERJA:Like(kode_satker_awal+'%')
            // }
          ],
          skip: skip,
          take: take
        });
      else
        return null
    }
    else
      return this.pegawaiRepository.find({
        order: {
          NIP: "ASC",
        },
        skip: skip,
        take: take,
        where: {
          KODE_SATUAN_KERJA: Like(kode_satker_awal + '%')
        }
      });
    }
  }

  findOne(nip: string, kode_satker_awal: string): Promise<Pegawai> {
    if(kode_satker_awal=='0000'){
      return this.pegawaiRepository.findOne({
        where: { NIP_BARU: Equal(nip) }
      });
    }else{
      return this.pegawaiRepository.findOne({
        where: { NIP_BARU: Equal(nip), KODE_SATUAN_KERJA: Like(kode_satker_awal + '%') }
      });

    }
  }

  async findOnePendidikan(nip: string, kode_satker_awal: string): Promise<any[]> {
    // return [kode_satker_awal];
    return await this.pegawaiRepository.query("exec get_pendidikan_by_nip_baru @0,@1", [nip, kode_satker_awal]);
  }

  async findOnePekerjaan(nip: string, kode_satker_awal: string): Promise<any> {
    const pangkat = await this.pegawaiRepository.query("exec get_pangkat_by_nip_baru @0,@1", [nip, kode_satker_awal]);
    const jabatan = await this.pegawaiRepository.query("exec get_jabatan_by_nip_baru @0,@1", [nip, kode_satker_awal]);
    return {
      pangkat: pangkat,
      jabatan: jabatan
    };
  }

  update(id: number, updatePegawaiDto: UpdatePegawaiDto) {
    return `This action updates a #${id} pegawai`;
  }

  remove(id: number) {
    return `This action removes a #${id} pegawai`;
  }
}
