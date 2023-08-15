import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterService } from './master.service';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('master')
@Controller('master')
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  @Get('satker')
  getSatker() {
    return this.masterService.getSatker();
  }
  
  @Get('jabatan')
  getJabatan() {
    return this.masterService.getJabatan();
  }
  
  @Get('level_jabatan')
  getLevelJabatan() {
    return this.masterService.getLevelJabatan();
  }
  
  @Get('pangkat')
  getPangkat() {
    return this.masterService.getPangkat();
  }
  // @Post()
  // create(@Body() createMasterDto: CreateMasterDto) {
  //   return this.masterService.create(createMasterDto);
  // }

  // @Get()
  // findAll() {
  //   return this.masterService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.masterService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMasterDto: UpdateMasterDto) {
  //   return this.masterService.update(+id, updateMasterDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.masterService.remove(+id);
  // }
}
