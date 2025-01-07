import { AuthService } from './auth.service';
import { LoginInput } from './inputs/login.input';
import { CreateUserInput } from '../users/inputs/create.user.input';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: LoginInput): Promise<{
        access_token: string;
    }>;
    register(user: CreateUserInput): Promise<import("../users/dto/user.entity").UserEntity>;
    getProfile(req: any): Promise<any>;
}
