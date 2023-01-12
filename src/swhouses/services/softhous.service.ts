import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SwHouse } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateSHouseDto } from '../dtos/CreateSHouse.dto';

@Injectable()
export class SwhouseService {
  constructor(
    @InjectRepository(SwHouse)
    private readonly sofRepository: Repository<SwHouse>,
  ) {}

  createSofHouse(createSHouseDto: CreateSHouseDto) {
    const newUser = this.sofRepository.create(createSHouseDto as any);
    return this.sofRepository.save(newUser);
  }

  getSofHouse() {
    return this.sofRepository.find();
  }

  findSofHouseById(id: number) {
    return this.sofRepository.findOne({ where: { id } });
  }

  async update(id, body) {
    const person =  this.sofRepository.findOne({ where: { id } });
    const common_1 = require("@nestjs/common");
    if (!person) {
        throw new common_1.NotFoundException(`Não encontrado a software house com o id ${id}`);
    }
    await this.sofRepository.update(id, body);
    return this.sofRepository.findOne({ where: { id } });
  }

  delete(id: number){
    return this.sofRepository.delete(id);
  }
}
