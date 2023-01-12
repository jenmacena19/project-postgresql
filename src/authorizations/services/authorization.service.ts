import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Authorization } from 'src/typeorm/authorization.entity';
import { CreateAuthorizationDto } from '../dtos/CreateAuthorization.dto';

@Injectable()
export class AuthorizationService {
  constructor(
    @InjectRepository(Authorization)
    private readonly authRepository: Repository<Authorization>,
  ) {}

  createAuthorization(createAuthDto: CreateAuthorizationDto) {
    const newUser = this.authRepository.create(createAuthDto as any);
    return this.authRepository.save(newUser);
  }

  getAuthorization() {
    return this.authRepository.find();
  }

  findAuthorizationById(id: number) {
    return this.authRepository.findOne({ where: { id } });
  }

  async update(id, body) {
    const person =  this.authRepository.findOne({ where: { id } });
    const common_1 = require("@nestjs/common");
    if (!person) {
        throw new common_1.NotFoundException(`Não encontrada autorização com o id ${id}`);
    }
    await this.authRepository.update(id, body);
    return this.authRepository.findOne({ where: { id } });
  }

  delete(id: number){
    return this.authRepository.delete(id);
  }
}
