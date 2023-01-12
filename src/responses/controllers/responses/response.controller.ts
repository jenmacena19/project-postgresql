import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Put } from '@nestjs/common/decorators';
import { CreateResponseDto } from 'src/responses/dtos/CreateResponse.dto';
import { ResponseService } from 'src/responses/services/responses/responses.service';
import { ResponseTime } from 'src/typeorm';

@Controller('responseTime')
export class ResponsesController {
  constructor(private readonly responseService: ResponseService) {}
  @Get()
  getCustomers() {
    return this.responseService.getResponses();
  }

  @Get('id/:id')
  findCustomersById(@Param('id', ParseIntPipe) id: number) {
    return this.responseService.findResponsesById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomers(@Body() createResponseDto: CreateResponseDto) {
    return this.responseService.createResponses(createResponseDto);
  }

  @Put(':id')
    public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateResponseDto,
    ): Promise<ResponseTime> {
    const person = await this.responseService.findResponsesById(id);
    if (!person) {
      throw new NotFoundException(`Não achei um tempo de resposta com o id ${id}`);
    }
    await this.responseService.update(id, body);
    return this.responseService.findResponsesById(id);
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const person = await this.responseService.findResponsesById(id);

    if (!person) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    await this.responseService.delete(id);

    return `O Response Time com id ${id} foi deletada com sucesso`;
  }
}
