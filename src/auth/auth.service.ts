import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserInput } from '../users/inputs/create.user.input';
import { JwtService } from '@nestjs/jwt';
import { Role } from '../roles/enums/role.enum';
import { compare, hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {
  }

  async login(username: string, pass: string) {
    const user = await this.usersService.getUserByUsername(username);
    const isMatch = await compare(pass, user.password);
    if (!isMatch) throw new Error('Invalid password');

    const payload = { sub: user.id, username: user.name, roles: user.isAdmin? [Role.Admin] : [Role.User] };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(user: CreateUserInput) {
    return this.usersService.createUser({
      ...user,
      password: await hash(user.password, 10),
    });
  }
}
