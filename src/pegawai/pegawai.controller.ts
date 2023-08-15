import { Controller, Get, Post, Query, Body, Patch, Param, Delete } from '@nestjs/common';
import { PegawaiService } from './pegawai.service';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';
import { UpdatePegawaiDto } from './dto/update-pegawai.dto';
import { ApiParam, ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('pegawai')
@ApiTags('master')
export class PegawaiController {
  constructor(private readonly pegawaiService: PegawaiService) {}

  // @Post()
  // create(@Body() createPegawaiDto: CreatePegawaiDto) {
  //   return this.pegawaiService.create(createPegawaiDto);
  // }

  @Get()
  @ApiQuery({name:'limit',type:'number',required:false})
  @ApiQuery({name:'page',type:'string',required:false})
  @ApiQuery({name:'satker',description:"kode satker",type:'string',required:false})
  findAll(@Query() query) {
    return this.pegawaiService.findAll(query);
  }

  @ApiParam({name:'nip',type:'number'})
  @Get(':nip')
  findOne(@Param('nip') nip: string) {
    return this.pegawaiService.findOne(nip);
  }
  
  @ApiParam({name:'nip',type:'number'})
  @Get('pendidikan/:nip')
  findOnePendidikan(@Param('nip') nip: string) {
    return this.pegawaiService.findOnePendidikan(nip);
  }

  @ApiParam({name:'nip',type:'number'})
  @Get('pekerjaan/:nip')
  findOnePekerjaan(@Param('nip') nip: string) {
    return this.pegawaiService.findOnePekerjaan(nip);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePegawaiDto: UpdatePegawaiDto) {
  //   return this.pegawaiService.update(+id, updatePegawaiDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.pegawaiService.remove(+id);
  // }
}
