import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from 'src/typeorm/group.entity';
import { CreateGroupDto } from '../dtos/CreateGroup.dto';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
  ) {}

  createGroups(createGroupDto: CreateGroupDto) {
    const newUser = this.groupRepository.create(createGroupDto as any);
    return this.groupRepository.save(newUser);
  }

  getGroups() {
    return this.groupRepository.find();
  }

  findGroupById(id: number) {
    return this.groupRepository.findOne({ where: { id } });
  }

  async update(id, body) {
    const person =  this.groupRepository.findOne({ where: { id } });
    const common_1 = require("@nestjs/common");
    if (!person) {
        throw new common_1.NotFoundException(`Não encontrado o grupo com o id ${id}`);
    }
    await this.groupRepository.update(id, body);
    return this.groupRepository.findOne({ where: { id } });
  }

  delete(id: number){
    return this.groupRepository.delete(id);
  }
}
