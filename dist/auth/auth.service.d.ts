import { UsersService } from '../users/users.service';
import { CreateUserInput } from '../users/inputs/create.user.input';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    login(username: string, pass: string): Promise<{
        access_token: string;
    }>;
    register(user: CreateUserInput): Promise<import("../users/dto/user.entity").UserEntity>;
}
