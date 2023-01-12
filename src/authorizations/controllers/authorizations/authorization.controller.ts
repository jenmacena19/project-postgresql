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
import { CreateAuthorizationDto } from 'src/authorizations/dtos/CreateAuthorization.dto';
import { AuthorizationService } from 'src/authorizations/services/authorization.service';
import { Authorization } from 'src/typeorm';

@Controller('authorization')
export class AuthoriController {
  constructor(private readonly authService: AuthorizationService) {}
  @Get()
  getAuthorization() {
    return this.authService.getAuthorization();
  }

  @Get('id/:id')
  findAuthorizationById(@Param('id', ParseIntPipe) id: number) {
    return this.authService.findAuthorizationById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomers(@Body() createAuthDto: CreateAuthorizationDto) {
    return this.authService.createAuthorization(createAuthDto);
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateAuthorizationDto,
  ): Promise<Authorization> {
    const person = await this.authService.findAuthorizationById(id);
    if (!person) {
      throw new NotFoundException(`Não achei uma autorização com o id ${id}`);
    }
    await this.authService.update(id, body);
    return this.authService.findAuthorizationById(id);
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const person = await this.authService.findAuthorizationById(id);

    if (!person) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    await this.authService.delete(id);

    return `Authorization com id ${id} foi deletada com sucesso`;
  }
}
