import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AgenteLocal } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(AgenteLocal)
    private readonly customerRepository: Repository<AgenteLocal>,
  ) {}

  createCustomers(createCustomerDto: CreateCustomerDto) {
    const newUser = this.customerRepository.create(createCustomerDto as any);
    return this.customerRepository.save(newUser);
  }

  getCustomers() {
    return this.customerRepository.find();
  }

  findCustomersById(id: number) {
    return this.customerRepository.findOne({ where: { id } });
  }

  delete(id: number){
    return this.customerRepository.delete(id);
  }
}
