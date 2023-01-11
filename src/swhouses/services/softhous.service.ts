import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AgenteLocal, SwHouse } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateSHouseDto } from '../dtos/CreateSHouse.dto';

@Injectable()
export class SwhouseService {
  constructor(
    @InjectRepository(SwHouse)
    private readonly sofRepository: Repository<AgenteLocal>,
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

  delete(id: number){
    return this.sofRepository.delete(id);
  }
}
