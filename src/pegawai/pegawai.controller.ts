import { Controller, Get, Post, Query, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { PegawaiService } from './pegawai.service';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';
import { UpdatePegawaiDto } from './dto/update-pegawai.dto';
import { ApiBasicAuth, ApiHeader, ApiParam, ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/pegawai')
@ApiTags('pegawai')
export class PegawaiController {
  constructor(private readonly pegawaiService: PegawaiService) {}

  // @Post()
  // create(@Body() createPegawaiDto: CreatePegawaiDto) {
  //   return this.pegawaiService.create(createPegawaiDto);
  // }

  @ApiBasicAuth()
  @Get()
  @ApiHeader({name:'host',description:'api-ropeg',required:true})
  @ApiQuery({name:'limit',type:'number',required:false})
  @ApiQuery({name:'page',type:'string',required:false})
  @ApiQuery({name:'satker',description:"kode satker",type:'string',required:false})
  @UseGuards(AuthGuard('basic'))
  findAll(@Query() query,@Request() req) {
    return this.pegawaiService.findAll(query,req.user.username.substring(0,4));
  }

  @ApiBasicAuth()
  @ApiHeader({name:'host',description:'api-ropeg',required:true})
  @ApiParam({name:'nip',type:'number'})
  @Get(':nip')
  @UseGuards(AuthGuard('basic'))
  findOne(@Param('nip') nip: string,@Request() req) {
    return this.pegawaiService.findOne(nip,req.user.username.substring(0,4));
  }
  
  @ApiBasicAuth()
  @ApiHeader({name:'host',description:'api-ropeg',required:true})
  @ApiParam({name:'nip',type:'number'})
  @Get('pendidikan/:nip')
  @UseGuards(AuthGuard('basic'))
  findOnePendidikan(@Param('nip') nip: string,@Request() req) {
    return this.pegawaiService.findOnePendidikan(nip,req.user.username.substring(0,4));
  }

  @ApiBasicAuth()
  @ApiHeader({name:'host',description:'api-ropeg',required:true})
  @ApiParam({name:'nip',type:'number'})
  @Get('pekerjaan/:nip')
  @UseGuards(AuthGuard('basic'))
  findOnePekerjaan(@Param('nip') nip: string,@Request() req) {
    return this.pegawaiService.findOnePekerjaan(nip,req.user.username.substring(0,4));
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
