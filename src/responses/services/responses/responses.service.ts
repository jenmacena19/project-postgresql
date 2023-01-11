import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseTime } from 'src/typeorm';
import { CreateResponseDto } from 'src/responses/dtos/CreateResponse.dto';

@Injectable()
export class ResponseService {
  constructor(
    @InjectRepository(ResponseTime)
    private readonly responseRepository: Repository<ResponseTime>,
  ) {}

  createResponses(createResponseDto: CreateResponseDto) {
    const newUser = this.responseRepository.create(createResponseDto as any);
    return this.responseRepository.save(newUser);
  }

  getResponses() {
    return this.responseRepository.find();
  }

  findResponsesById(id: number) {
    return this.responseRepository.findOne({ where: { id } });
  }

  delete(id: number){
    return this.responseRepository.delete(id);
  }
}
