import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

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
