import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/typeorm';
import { CreateUserDto } from 'src/users/dto/users.dtos';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) { }

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findUsersById(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  getUsers() {
    return this.userRepository.find();
  }

  async update(id, body) {
    const person =  this.userRepository.findOne({ where: { id } });
    const common_1 = require("@nestjs/common");
    if (!person) {
        throw new common_1.NotFoundException(`Não encontrado o usuário com o id ${id}`);
    }
    await this.userRepository.update(id, body);
    return this.userRepository.findOne({ where: { id } });
  }

  delete(id: number) {
    return this.userRepository.delete(id);
  }
}