import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
import { CreateSHouseDto } from 'src/swhouses/dtos/CreateSHouse.dto';
import { SwhouseService } from 'src/swhouses/services/softhous.service';
import { SwHouse } from 'src/typeorm';
  
  @Controller('swhouse')
  export class SwHouseController {
    constructor(private readonly sofhouseService: SwhouseService) {}
    @Get()
    getSofHouse() {
      return this.sofhouseService.getSofHouse();
    }
  
    @Get('id/:id')
    findSofHouseById(@Param('id', ParseIntPipe) id: number) {
      return this.sofhouseService.findSofHouseById(id);
    }
  
    @Post('create')
    @UsePipes(ValidationPipe)
    createCustomers(@Body() createSHouseDto: CreateSHouseDto) {
      return this.sofhouseService.createSofHouse(createSHouseDto);
    }

    @Put(':id')
    public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateSHouseDto,
    ): Promise<SwHouse> {
    const person = await this.sofhouseService.findSofHouseById(id);
    if (!person) {
      throw new NotFoundException(`Não achei a software house com o id ${id}`);
    }
    await this.sofhouseService.update(id, body);
    return this.sofhouseService.findSofHouseById(id);
    }
  
    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
      const person = await this.sofhouseService.findSofHouseById(id);
  
      if (!person) {
        throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
      }
  
      await this.sofhouseService.delete(id);
  
      return `A software house com id ${id} foi deletada com sucesso`;
    }
  }
  