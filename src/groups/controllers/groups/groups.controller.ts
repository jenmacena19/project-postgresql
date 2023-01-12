import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
import { CreateGroupDto } from 'src/groups/dtos/CreateGroup.dto';
import { GroupsService } from 'src/groups/services/groups.service';
import { Group } from 'src/typeorm';
  
  @Controller('groups')
  export class GroupsController {
    constructor(private readonly groupService: GroupsService) {}
    @Get()
    getGroups() {
      return this.groupService.getGroups();
    }
  
    @Get('id/:id')
    findGroupById(@Param('id', ParseIntPipe) id: number) {
      return this.groupService.findGroupById(id);
    }
  
    @Post('create')
    @UsePipes(ValidationPipe)
    createCustomers(@Body() createGroupDto: CreateGroupDto) {
      return this.groupService.createGroups(createGroupDto);
    }

    @Put(':id')
    public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateGroupDto,
  ): Promise<Group> {
    const person = await this.groupService.findGroupById(id);
    if (!person) {
      throw new NotFoundException(`Não achei um grupo com o id ${id}`);
    }
    await this.groupService.update(id, body);
    return this.groupService.findGroupById(id);
  }
  
    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
      const person = await this.groupService.findGroupById(id);
  
      if (!person) {
        throw new NotFoundException(`Não achei um grupo com o id ${id}`);
      }
  
      await this.groupService.delete(id);
  
      return `O grupo com id ${id} foi deletada com sucesso`;
    }
  }
  