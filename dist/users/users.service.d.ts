import { Repository } from 'typeorm';
import { UserEntity } from './dto/user.entity';
import { CreateUserInput } from './inputs/create.user.input';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    getUsers(): Promise<UserEntity[]>;
    createUser(user: CreateUserInput): Promise<UserEntity>;
    getUserByUsername(username: string): Promise<UserEntity>;
    getUserById(id: string): Promise<UserEntity>;
}
