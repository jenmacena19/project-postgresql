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
import { Users } from 'src/typeorm';
import { CreateUserDto } from 'src/users/dto/users.dtos';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Get('id/:id')
    findUsersById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findUsersById(id);
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createUsers(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Put(':id')
    public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateUserDto,
    ): Promise<Users> {
    const person = await this.userService.findUsersById(id);
    if (!person) {
      throw new NotFoundException(`Não achei o usuário com o id ${id}`);
    }
    await this.userService.update(id, body);
    return this.userService.findUsersById(id);
    }

    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
        const person = await this.userService.findUsersById(id);

        if (!person) {
            throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
        }

        await this.userService.delete(id);

        return `O usuário com id ${id} foi deletada com sucesso`;
    }
}