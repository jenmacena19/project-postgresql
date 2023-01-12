import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Device } from 'src/typeorm/device.entity';
import { CreateDevicesDto } from '../dtos/CreateDevice.dto';

@Injectable()
export class DevicesService {
  constructor(
    @InjectRepository(Device)
    private readonly deviceRepository: Repository<Device>,
  ) {}

  createDevices(createDeviceDto: CreateDevicesDto) {
    const newUser = this.deviceRepository.create(createDeviceDto as any);
    return this.deviceRepository.save(newUser);
  }

  getDevices() {
    return this.deviceRepository.find();
  }

  findDevicerById(id: number) {
    return this.deviceRepository.findOne({ where: { id } });
  }

  async update(id, body) {
    const person =  this.deviceRepository.findOne({ where: { id } });
    const common_1 = require("@nestjs/common");
    if (!person) {
        throw new common_1.NotFoundException(`Não encontrado o dispositivo com o id ${id}`);
    }
    await this.deviceRepository.update(id, body);
    return this.deviceRepository.findOne({ where: { id } });
  }

  delete(id: number) {
    return this.deviceRepository.delete(id);
  }
}
