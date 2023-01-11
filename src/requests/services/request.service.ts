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
    private readonly customerRepository: Repository<Request>,
  ) {}

  createRequest(createRequestDto: CreateRequestDto) {
    const newUser = this.customerRepository.create(createRequestDto as any);
    return this.customerRepository.save(newUser);
  }

  getRequest() {
    return this.customerRepository.find();
  }

  findRequestById(id: number) {
    return this.customerRepository.findOne({ where: { id } });
  }

  delete(id: number){
    return this.customerRepository.delete(id);
  }
}
