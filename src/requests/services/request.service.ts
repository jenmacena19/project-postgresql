import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Request } from 'src/typeorm';
import { CreateRequestDto } from '../dtos/CreateRequest.dto';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request)
    private readonly requestRepository: Repository<Request>,
  ) {}

  createRequest(createRequestDto: CreateRequestDto) {
    const newUser = this.requestRepository.create(createRequestDto as any);
    return this.requestRepository.save(newUser);
  }

  getRequest() {
    return this.requestRepository.find();
  }

  findRequestById(id: number) {
    return this.requestRepository.findOne({ where: { id } });
  }

  async update(id, body) {
    const person =  this.requestRepository.findOne({ where: { id } });
    const common_1 = require("@nestjs/common");
    if (!person) {
        throw new common_1.NotFoundException(`Não encontrado a requisição com o id ${id}`);
    }
    await this.requestRepository.update(id, body);
    return this.requestRepository.findOne({ where: { id } });
  }

  delete(id: number){
    return this.requestRepository.delete(id);
  }
}
