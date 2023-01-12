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
import { CreateDevicesDto } from 'src/devices/dtos/CreateDevice.dto';
import { DevicesService } from 'src/devices/services/devices.service';
import { Device } from 'src/typeorm';

@Controller('devices')
export class DevicesController {
  constructor(private readonly deviceService: DevicesService) {}
  @Get()
  getDevices() {
    return this.deviceService.getDevices();
  }

  @Get('id/:id')
  findCustomersById(@Param('id', ParseIntPipe) id: number) {
    return this.deviceService.findDevicerById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomers(@Body() createDeviceDto: CreateDevicesDto) {
    return this.deviceService.createDevices(createDeviceDto);
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateDevicesDto,
  ): Promise<Device> {
    const person = await this.deviceService.findDevicerById(id);
    if (!person) {
      throw new NotFoundException(`Não achei um dispositivo com o id ${id}`);
    }
    await this.deviceService.update(id, body);
    return this.deviceService.findDevicerById(id);
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const person = await this.deviceService.findDevicerById(id);

    if (!person) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    await this.deviceService.delete(id);

    return `O device com id ${id} foi deletada com sucesso`;
  }
}
