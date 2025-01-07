import { Controller, Delete, Get, Param, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

//@UseGuards(AuthGuard)
//@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}


  @ApiOperation({ summary: 'Mostrar usuarios' })
  @ApiResponse({ status: 200, description: 'successful answer'})
  @Get()
  async getUsers() {
    return await this.usersService.getUsers();
  }
}
