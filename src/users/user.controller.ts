import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { createUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UpdatePartialUserDTO } from './dto/update-partial-user.dto';

@Controller('users')
export class UserController {
  @Post('/create-user')
  async createUser(@Body() body: createUserDTO) {
    return { body };
  }

  @Get()
  async list() {
    return { users: [] };
  }

  @Get(':id')
  async showOneUser(@Param('id', ParseIntPipe) id) {
    return { user: {}, id };
  }

  @Patch(':id')
  async updatePartial(
    @Body() { name, email, password }: UpdatePartialUserDTO,
    @Param('id', ParseIntPipe) id,
  ) {
    return {
      method: 'patch',
      name,
      email,
      password,
      id,
    };
  }

  @Put(':id')
  async update(
    @Body() { email, name, password }: UpdateUserDTO,
    @Param('id', ParseIntPipe) id,
  ) {
    return {
      method: 'put',
      email,
      name,
      password,
      id,
    };
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
    return {
      id,
    };
  }
}
