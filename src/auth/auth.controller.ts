import { Body, Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInput } from './inputs/login.input';
import { CreateUserInput } from '../users/inputs/create.user.input';
import { AuthGuard } from './auth.guard';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('login')
  async login(@Body() user: LoginInput) {
    return await this.authService.login(user.username, user.password);
  }

  @Post('register')
  async register(@Body() user: CreateUserInput) {
    return await this.authService.register(user);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Muestra informacion sobre el usuario autenticado, como los roles' })
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }

}
