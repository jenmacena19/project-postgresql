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

  delete(id: number) {
    return this.userRepository.delete(id);
  }
}