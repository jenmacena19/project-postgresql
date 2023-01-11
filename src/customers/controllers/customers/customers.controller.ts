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
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('agentesLocais')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}
  @Get()
  getCustomers() {
    return this.customerService.getCustomers();
  }

  @Get('id/:id')
  findCustomersById(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.findCustomersById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomers(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.createCustomers(createCustomerDto);
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const person = await this.customerService.findCustomersById(id);

    if (!person) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    await this.customerService.delete(id);

    return `O agente local com id ${id} foi deletada com sucesso`;
  }
}
