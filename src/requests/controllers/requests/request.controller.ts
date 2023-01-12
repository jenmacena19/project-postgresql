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
import { CreateRequestDto } from 'src/requests/dtos/CreateRequest.dto';
import { RequestService } from 'src/requests/services/request.service';
import { Request } from 'src/typeorm';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}
  @Get()
  getRequest() {
    return this.requestService.getRequest();
  }

  @Get('id/:id')
  findCustomersById(@Param('id', ParseIntPipe) id: number) {
    return this.requestService.findRequestById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomers(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.createRequest(createRequestDto);
  }

  @Put(':id')
    public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateRequestDto,
    ): Promise<Request> {
    const person = await this.requestService.findRequestById(id);
    if (!person) {
      throw new NotFoundException(`Não achei uma requisição com o id ${id}`);
    }
    await this.requestService.update(id, body);
    return this.requestService.findRequestById(id);
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const person = await this.requestService.findRequestById(id);

    if (!person) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    await this.requestService.delete(id);

    return `O request com id ${id} foi deletada com sucesso`;
  }
}
