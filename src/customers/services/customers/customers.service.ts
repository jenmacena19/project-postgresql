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

  async update(id, body) {
    const person =  this.customerRepository.findOne({ where: { id } });
    const common_1 = require("@nestjs/common");
    if (!person) {
        throw new common_1.NotFoundException(`Não encontrado o agente local com o id ${id}`);
    }
    await this.customerRepository.update({ id }, body);
    return this.customerRepository.findOne({ where: { id } });
  }

  delete(id: number){
    return this.customerRepository.delete(id);
  }
}
